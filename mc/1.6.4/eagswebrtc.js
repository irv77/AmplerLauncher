"use strict";

/*

This is the backend for voice channels and LAN servers in eaglercraft

it links with TeaVM EaglerAdapter at runtime

Copyright 2022 ayunami2000 & lax1dude. All rights reserved.

*/


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% VOICE CODE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

window.initializeVoiceClient = (() => {

	const READYSTATE_NONE = 0;
	const READYSTATE_ABORTED = -1;
	const READYSTATE_DEVICE_INITIALIZED = 1;

	class EaglercraftVoicePeer {

		constructor(client, peerId, peerConnection, offer) {
			this.client = client;
			this.peerId = peerId;
			this.peerConnection = peerConnection;
			this.stream = null;
			
			this.peerConnection.addEventListener("icecandidate", (evt) => {
				if(evt.candidate) {
					this.client.iceCandidateHandler(this.peerId, JSON.stringify({ sdpMLineIndex: evt.candidate.sdpMLineIndex, candidate: evt.candidate.candidate }));
				}
			});
			
			this.peerConnection.addEventListener("track", (evt) => {
				this.rawStream = evt.streams[0];
				const aud = new Audio();
				aud.autoplay = true;
				aud.muted = true;
				aud.onended = function() {
					aud.remove();
				};
				aud.srcObject = this.rawStream;
				this.client.peerTrackHandler(this.peerId, this.rawStream);
			});
			
			this.peerConnection.addStream(this.client.localMediaStream.stream);
			if (offer) {
				this.peerConnection.createOffer((desc) => {
					const selfDesc = desc;
					this.peerConnection.setLocalDescription(selfDesc, () => {
						this.client.descriptionHandler(this.peerId, JSON.stringify(selfDesc));
					}, (err) => {
						console.error("Failed to set local description for \"" + this.peerId + "\"! " + err);
						this.client.signalDisconnect(this.peerId);
					});
				}, (err) => {
					console.error("Failed to set create offer for \"" + this.peerId + "\"! " + err);
					this.client.signalDisconnect(this.peerId);
				});
			}

			this.peerConnection.addEventListener("connectionstatechange", (evt) => {
				if(this.peerConnection.connectionState === 'disconnected' || this.peerConnection.connectionState === 'failed') {
					this.client.signalDisconnect(this.peerId);
				}
			});
			
		}
		
		disconnect() {
			this.peerConnection.close();
		}
		
		mute(muted) {
			this.rawStream.getAudioTracks()[0].enabled = !muted;
		}

		setRemoteDescription(descJSON) {
			try {
				const remoteDesc = JSON.parse(descJSON);
				this.peerConnection.setRemoteDescription(remoteDesc, () => {
					if(remoteDesc.type === 'offer') {
						this.peerConnection.createAnswer((desc) => {
							const selfDesc = desc;
							this.peerConnection.setLocalDescription(selfDesc, () => {
								this.client.descriptionHandler(this.peerId, JSON.stringify(selfDesc));
							}, (err) => {
								console.error("Failed to set local description for \"" + this.peerId + "\"! " + err);
								this.client.signalDisconnect(this.peerId);
							});
						}, (err) => {
							console.error("Failed to create answer for \"" + this.peerId + "\"! " + err);
							this.client.signalDisconnect(this.peerId);
						});
					}
				}, (err) => {
					console.error("Failed to set remote description for \"" + this.peerId + "\"! " + err);
					this.client.signalDisconnect(this.peerId);
				});
			} catch (err) {
				console.error("Failed to parse remote description for \"" + this.peerId + "\"! " + err);
				this.client.signalDisconnect(this.peerId);
			}
		}
		
		addICECandidate(candidate) {
			try {
				this.peerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(candidate)));
			} catch (err) {
				console.error("Failed to parse ice candidate for \"" + this.peerId + "\"! " + err);
				this.client.signalDisconnect(this.peerId);
			}
		}

	}

	class EaglercraftVoiceClient {

		constructor() {
			this.ICEServers = [];
			this.hasInit = false;
			this.peerList = new Map();
			this.readyState = READYSTATE_NONE;
			this.iceCandidateHandler = null;
			this.descriptionHandler = null;
			this.peerTrackHandler = null;
			this.peerDisconnectHandler = null;
			this.microphoneVolumeAudioContext = null;
		}

		voiceClientSupported() {
			return typeof window.RTCPeerConnection !== "undefined" && typeof navigator.mediaDevices !== "undefined" &&
				typeof navigator.mediaDevices.getUserMedia !== "undefined";
		}

		setICEServers(urls) {
			this.ICEServers.length = 0;
			for(var i = 0; i < urls.length; ++i) {
				var etr = urls[i].split(";");
				if(etr.length === 1) {
					this.ICEServers.push({ urls: etr[0] });
				}else if(etr.length === 3) {
					this.ICEServers.push({ urls: etr[0], username: etr[1], credential: etr[2] });
				}
			}
		}
		
		setICECandidateHandler(cb) {
			this.iceCandidateHandler = cb;
		}
		
		setDescriptionHandler(cb) {
			this.descriptionHandler = cb;
		}
		
		setPeerTrackHandler(cb) {
			this.peerTrackHandler = cb;
		}
		
		setPeerDisconnectHandler(cb) {
			this.peerDisconnectHandler = cb;
		}

		activateVoice(tk) {
			if(this.hasInit) this.localRawMediaStream.getAudioTracks()[0].enabled = tk;
		}
		
		initializeDevices() {
			if(!this.hasInit) {
				navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream) => {
					this.microphoneVolumeAudioContext = new AudioContext();
					this.localRawMediaStream = stream;
					this.localRawMediaStream.getAudioTracks()[0].enabled = false;
					this.localMediaStream = this.microphoneVolumeAudioContext.createMediaStreamDestination();
					this.localMediaStreamGain = this.microphoneVolumeAudioContext.createGain();
					var localStreamIn = this.microphoneVolumeAudioContext.createMediaStreamSource(stream);
					localStreamIn.connect(this.localMediaStreamGain);
					this.localMediaStreamGain.connect(this.localMediaStream);
					this.localMediaStreamGain.gain.value = 1.0;
					this.readyState = READYSTATE_DEVICE_INITIALIZED;
					this.hasInit = true;
				}).catch((err) => {
					this.readyState = READYSTATE_ABORTED;
				});
			}else {
				this.readyState = READYSTATE_DEVICE_INITIALIZED;
			}
		}
		
		setMicVolume(val) {
			if(this.hasInit) {
				if(val > 0.5) val = 0.5 + (val - 0.5) * 2.0;
				if(val > 1.5) val = 1.5;
				if(val < 0.0) val = 0.0;
				this.localMediaStreamGain.gain.value = val * 2.0;
			}
		}

		getReadyState() {
			return this.readyState;
		}

		signalConnect(peerId, offer) {
			try {
				const peerConnection = new RTCPeerConnection({ iceServers: this.ICEServers, optional: [ { DtlsSrtpKeyAgreement: true } ] });
				const peerInstance = new EaglercraftVoicePeer(this, peerId, peerConnection, offer);
				this.peerList.set(peerId, peerInstance);
			} catch (e) {
			}
		}
		
		signalDescription(peerId, descJSON) {
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.setRemoteDescription(descJSON);
			}
		}

		signalDisconnect(peerId, quiet) {
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				this.peerList.delete(thePeer);
				try {
					thePeer.disconnect();
				}catch(e) {}
				this.peerDisconnectHandler(peerId, quiet);
			}
		}

		mutePeer(peerId, muted) {
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.mute(muted);
			}
		}
		
		signalICECandidate(peerId, candidate) {
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.addICECandidate(candidate);
			}
		}
		
	}

	window.constructVoiceClient = () => new EaglercraftVoiceClient();
});

window.startVoiceClient = () => {
	if(typeof window.constructVoiceClient !== "function") {
		window.initializeVoiceClient();
	}
	return window.constructVoiceClient();
};



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% LAN CLIENT CODE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

window.initializeLANClient = (() => {

	const READYSTATE_INIT_FAILED = -2;
	const READYSTATE_FAILED = -1;
	const READYSTATE_DISCONNECTED = 0;
	const READYSTATE_CONNECTING = 1;
	const READYSTATE_CONNECTED = 2;
	
	class EaglercraftLANClient {

		constructor() {
			this.ICEServers = [];
			this.peerConnection = null;
			this.dataChannel = null;
			this.readyState = READYSTATE_CONNECTING;
			this.iceCandidateHandler = null;
			this.descriptionHandler = null;
			this.remoteDataChannelHandler = null;
			this.remoteDisconnectHandler = null;
			this.remotePacketHandler = null;
		}
		
		LANClientSupported() {
			return typeof window.RTCPeerConnection !== "undefined";
		}
		
		initializeClient() {
			try {
				if(this.dataChannel !== null) {
					this.dataChannel.close();
					this.dataChannel = null;
				}
				if(this.peerConnection !== null) {
					this.peerConnection.close();
				}
				this.peerConnection = new RTCPeerConnection({ iceServers: this.ICEServers, optional: [ { DtlsSrtpKeyAgreement: true } ] });
				this.readyState = READYSTATE_CONNECTING;
			} catch (e) {
				this.readyState = READYSTATE_INIT_FAILED;
			}
		}
		
		setICEServers(urls) {
			this.ICEServers.length = 0;
			for(var i = 0; i < urls.length; ++i) {
				var etr = urls[i].split(";");
				if(etr.length === 1) {
					this.ICEServers.push({ urls: etr[0] });
				}else if(etr.length === 3) {
					this.ICEServers.push({ urls: etr[0], username: etr[1], credential: etr[2] });
				}
			}
		}
		
		setICECandidateHandler(cb) {
			this.iceCandidateHandler = cb;
		}
		
		setDescriptionHandler(cb) {
			this.descriptionHandler = cb;
		}
		
		setRemoteDataChannelHandler(cb) {
			this.remoteDataChannelHandler = cb;
		}
		
		setRemoteDisconnectHandler(cb) {
			this.remoteDisconnectHandler = cb;
		}
		
		setRemotePacketHandler(cb) {
			this.remotePacketHandler = cb;
		}
		
		getReadyState() {
			return this.readyState;
		}
		
		sendPacketToServer(buffer) {
			if(this.dataChannel !== null && this.dataChannel.readyState === "open") {
				this.dataChannel.send(buffer);
			}else {
				this.signalRemoteDisconnect(false);
			}
		}
		
		signalRemoteConnect() {

			const iceCandidates = [];

			this.peerConnection.addEventListener("icecandidate", (evt) => {
				if(evt.candidate) {
					if(iceCandidates.length === 0) {
						let candidateState = [ 0, 0 ];
						let runnable;
						setTimeout(runnable = () => {
							if(this.peerConnection !== null && this.peerConnection.connectionState !== "disconnected") {
								const trial = ++candidateState[1];
								if(candidateState[0] !== iceCandidates.length && trial < 3) {
									candidateState[0] = iceCandidates.length;
									setTimeout(runnable, 2000);
									return;
								}
								this.iceCandidateHandler(JSON.stringify(iceCandidates));
								iceCandidates.length = 0;
							}
						}, 2000);
					}
                    iceCandidates.push({ sdpMLineIndex: evt.candidate.sdpMLineIndex, candidate: evt.candidate.candidate });
				}
			});

			this.dataChannel = this.peerConnection.createDataChannel("lan");
			this.dataChannel.binaryType = "arraybuffer";

			this.dataChannel.addEventListener("open", async (evt) => {
				while(iceCandidates.length > 0) {
					await new Promise(resolve => setTimeout(resolve, 10));
				}
				this.remoteDataChannelHandler(this.dataChannel);
			});

			this.dataChannel.addEventListener("message", (evt) => {
				this.remotePacketHandler(evt.data);
			}, false);

			this.peerConnection.createOffer((desc) => {
				const selfDesc = desc;
				this.peerConnection.setLocalDescription(selfDesc, () => {
					this.descriptionHandler(JSON.stringify(selfDesc));
				}, (err) => {
					console.error("Failed to set local description! " + err);
					this.readyState = READYSTATE_FAILED;
					this.signalRemoteDisconnect(false);
				});
			}, (err) => {
				console.error("Failed to set create offer! " + err);
				this.readyState = READYSTATE_FAILED;
				this.signalRemoteDisconnect(false);
			});

			this.peerConnection.addEventListener("connectionstatechange", (evt) => {
				if(this.peerConnection.connectionState === 'disconnected') {
					this.signalRemoteDisconnect(false);
				} else if (this.peerConnection.connectionState === 'connected') {
					this.readyState = READYSTATE_CONNECTED;
				} else if (this.peerConnection.connectionState === 'failed') {
					this.readyState = READYSTATE_FAILED;
					this.signalRemoteDisconnect(false);
				}
			});
		}
		
		signalRemoteDescription(descJSON) {
			try {
				this.peerConnection.setRemoteDescription(JSON.parse(descJSON));
			} catch (e) {
				console.error(e);
				this.readyState = READYSTATE_FAILED;
				this.signalRemoteDisconnect(false);
			}
		}
		
		signalRemoteICECandidate(candidates) {
			try {
				const candidateList = JSON.parse(candidates);
				for (let candidate of candidateList) {
					this.peerConnection.addIceCandidate(candidate);
				}
			} catch (e) {
				console.error(e);
				this.readyState = READYSTATE_FAILED;
				this.signalRemoteDisconnect(false);
			}
		}

		signalRemoteDisconnect(quiet) {
			if(this.dataChannel !== null) {
				this.dataChannel.close();
				this.dataChannel = null;
			}
			if(this.peerConnection !== null) {
				this.peerConnection.close();
			}
			if(!quiet) this.remoteDisconnectHandler();
			this.readyState = READYSTATE_DISCONNECTED;
		}
		
	};
	
	window.constructLANClient = () => new EaglercraftLANClient();
});

window.startLANClient = () => {
	if(typeof window.constructLANClient !== "function") {
		window.initializeLANClient();
	}
	return window.constructLANClient();
};



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% LAN SERVER CODE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

window.initializeLANServer = (() => {

	class EaglercraftLANPeer {

		constructor(client, peerId, peerConnection) {
			this.client = client;
			this.peerId = peerId;
			this.peerConnection = peerConnection;
			this.dataChannel = null;

			const iceCandidates = [];
			let hasICE = false;

			this.peerConnection.addEventListener("icecandidate", (evt) => {
				if(evt.candidate) {
					if(iceCandidates.length === 0) {
						let candidateState = [ 0, 0 ];
						let runnable;
						setTimeout(runnable = () => {
							if(this.peerConnection !== null && this.peerConnection.connectionState !== "disconnected") {
								const trial = ++candidateState[1];
								if(candidateState[0] !== iceCandidates.length && trial < 3) {
									candidateState[0] = iceCandidates.length;
									setTimeout(runnable, 2000);
									return;
								}
								this.client.iceCandidateHandler(this.peerId, JSON.stringify(iceCandidates));
								iceCandidates.length = 0;
								hasICE = true;
							}
						}, 2000);
					}
                    iceCandidates.push({ sdpMLineIndex: evt.candidate.sdpMLineIndex, candidate: evt.candidate.candidate });
				}
			});

			this.peerConnection.addEventListener("datachannel", async (evt) => {
				while(!hasICE) {
					await new Promise(resolve => setTimeout(resolve, 10));
				}
				this.dataChannel = evt.channel;
				this.client.remoteClientDataChannelHandler(this.peerId, this.dataChannel);
				this.dataChannel.addEventListener("message", (evt) => {
					this.client.remoteClientPacketHandler(this.peerId, evt.data);
				}, false);
			}, false);

			this.peerConnection.addEventListener("connectionstatechange", (evt) => {
				if(this.peerConnection.connectionState === 'disconnected' || this.peerConnection.connectionState === 'failed') {
					this.client.signalRemoteDisconnect(this.peerId);
				}
			});

		}

		disconnect() {
			if(this.dataChannel !== null) {
				this.dataChannel.close();
				this.dataChannel = null;
			}
			this.peerConnection.close();
		}

		setRemoteDescription(descJSON) {
			try {
				const remoteDesc = JSON.parse(descJSON);
				this.peerConnection.setRemoteDescription(remoteDesc, () => {
					if(remoteDesc.type === 'offer') {
						this.peerConnection.createAnswer((desc) => {
							const selfDesc = desc;
							this.peerConnection.setLocalDescription(selfDesc, () => {
								this.client.descriptionHandler(this.peerId, JSON.stringify(selfDesc));
							}, (err) => {
								console.error("Failed to set local description for \"" + this.peerId + "\"! " + err);
								this.client.signalRemoteDisconnect(this.peerId);
							});
						}, (err) => {
							console.error("Failed to create answer for \"" + this.peerId + "\"! " + err);
							this.client.signalRemoteDisconnect(this.peerId);
						});
					}
				}, (err) => {
					console.error("Failed to set remote description for \"" + this.peerId + "\"! " + err);
					this.client.signalRemoteDisconnect(this.peerId);
				});
			} catch (err) {
				console.error("Failed to parse remote description for \"" + this.peerId + "\"! " + err);
				this.client.signalRemoteDisconnect(this.peerId);
			}
		}

		addICECandidate(candidates) {
			try {
				const candidateList = JSON.parse(candidates);
				for (let candidate of candidateList) {
					this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
				}
			} catch (err) {
				console.error("Failed to parse ice candidate for \"" + this.peerId + "\"! " + err);
				this.client.signalRemoteDisconnect(this.peerId);
			}
		}

	}
	
	class EaglercraftLANServer {
		
		constructor() {
			this.ICEServers = [];
			this.hasInit = false;
			this.peerList = new Map();
			this.iceCandidateHandler = null;
			this.descriptionHandler = null;
			this.remoteClientDataChannelHandler = null;
			this.remoteClientDisconnectHandler = null;
			this.remoteClientPacketHandler = null;
		}
		
		LANServerSupported() {
			return typeof window.RTCPeerConnection !== "undefined";
		}
		
		initializeServer() {
			// nothing to do!
		}
		
		setICEServers(urls) {
			this.ICEServers.length = 0;
			for(var i = 0; i < urls.length; ++i) {
				var etr = urls[i].split(";");
				if(etr.length === 1) {
					this.ICEServers.push({ urls: etr[0] });
				}else if(etr.length === 3) {
					this.ICEServers.push({ urls: etr[0], username: etr[1], credential: etr[2] });
				}
			}
		}
		
		setICECandidateHandler(cb) {
			this.iceCandidateHandler = cb;
		}
		
		setDescriptionHandler(cb) {
			this.descriptionHandler = cb;
		}
		
		setRemoteClientDataChannelHandler(cb) {
			this.remoteClientDataChannelHandler = cb;
		}
		
		setRemoteClientDisconnectHandler(cb) {
			this.remoteClientDisconnectHandler = cb;
		}
		
		setRemoteClientPacketHandler(cb) {
			this.remoteClientPacketHandler = cb;
		}
		
		sendPacketToRemoteClient(peerId, buffer) {
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				if(thePeer.dataChannel != null && thePeer.dataChannel.readyState === "open") {
					thePeer.dataChannel.send(buffer);
				}else {
					this.signalRemoteDisconnect(peerId);
				}
			}
		}

		signalRemoteConnect(peerId) {
			try {
				const peerConnection = new RTCPeerConnection({ iceServers: this.ICEServers, optional: [ { DtlsSrtpKeyAgreement: true } ] });
				const peerInstance = new EaglercraftLANPeer(this, peerId, peerConnection);
				this.peerList.set(peerId, peerInstance);
			} catch (e) {
			}
		}

		signalRemoteDescription(peerId, descJSON) {
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.setRemoteDescription(descJSON);
			}
		}

		signalRemoteICECandidate(peerId, candidate) {
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.addICECandidate(candidate);
			}
		}

		signalRemoteDisconnect(peerId) {
			if(peerId.length === 0) {
				for(const thePeer of this.peerList.values()) {
                	if((typeof thePeer !== "undefined") && thePeer !== null) {
						this.peerList.delete(peerId);
						try {
							thePeer.disconnect();
						}catch(e) {}
						this.remoteClientDisconnectHandler(peerId);
					}
                }
                this.peerList.clear();
				return;
			}
			var thePeer = this.peerList.get(peerId);
			if((typeof thePeer !== "undefined") && thePeer !== null) {
				this.peerList.delete(peerId);
				try {
					thePeer.disconnect();
				}catch(e) {}
				this.remoteClientDisconnectHandler(peerId);
			}
		}
		
		countPeers() {
			return this.peerList.size;
		}
		
	};
	
	window.constructLANServer = () => new EaglercraftLANServer();
});

window.startLANServer = () => {
	if(typeof window.constructLANServer !== "function") {
		window.initializeLANServer();
	}
	return window.constructLANServer();
};
