"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.gF=f;}
function $rt_cls(cls){return Ty(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AHO(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bK.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A_v());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AOX();}
function $rt_setThread(t){return FV(t);}
function $rt_createException(message){return Ru(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var J=$rt_throw;var Bw=$rt_compare;var A_w=$rt_nullCheck;var D=$rt_cls;var H=$rt_createArray;var Jb=$rt_isInstance;var Dh=$rt_nativeThread;var I=$rt_suspending;var F7=$rt_resuming;var F2=$rt_invalidPointer;var B=$rt_s;var Bl=$rt_eraseClinit;var K=$rt_imul;var Bh=$rt_wrapException;
function C(){this.ct=null;this.$id$=0;}
function A_x(){var a=new C();Ze(a);return a;}
function A9K(b){var c;if(b.ct===null)XQ(b);if(b.ct.d8===null)b.ct.d8=A_y;else if(b.ct.d8!==A_y){c=new DF;Bb(c,B(0));J(c);}b=b.ct;b.fe=b.fe+1|0;}
function A_n(b){var c,d;if(!IL(b)&&b.ct.d8===A_y){c=b.ct;d=c.fe-1|0;c.fe=d;if(!d)b.ct.d8=null;IL(b);return;}b=new Lq;Z(b);J(b);}
function AEX(b){if(b.ct===null)XQ(b);if(b.ct.d8===null)b.ct.d8=A_y;if(b.ct.d8!==A_y)ATL(b,1);else{b=b.ct;b.fe=b.fe+1|0;}}
function XQ(b){var c;c=new Ro;c.d8=A_y;b.ct=c;}
function ATL(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{A$K(b,c,callback);}catch($e){callback.J6($rt_exception($e));}});}
function A$K(b,c,d){var e,f,g;e=A_y;if(b.ct===null){XQ(b);FV(e);b=b.ct;b.fe=b.fe+c|0;CY(d,null);return;}if(b.ct.d8===null){b.ct.d8=e;FV(e);b=b.ct;b.fe=b.fe+c|0;CY(d,null);return;}f=b.ct;if(f.g0===null)f.g0=ATM();f=f.g0;g=new Td;g.AF=e;g.AG=b;g.AD=c;g.AE=d;d=g;f.push(d);}
function Pf(b){var c;if(!IL(b)&&b.ct.d8===A_y){c=b.ct;c.fe=c.fe-1|0;if(c.fe<=0){c.d8=null;if(c.g0!==null&&!KY(c.g0)){c=new U6;c.Ek=b;S2(c);}else IL(b);}return;}b=new Lq;Z(b);J(b);}
function IL(a){var b;b=a.ct;if(b===null)return 1;a:{if(b.d8===null&&!(b.g0!==null&&!KY(b.g0))){if(b.rL===null)break a;if(KY(b.rL))break a;}return 0;}a.ct=null;return 1;}
function Ze(a){return;}
function B5(a){return Ty(a.constructor);}
function A1q(a){return VA(a);}
function S5(a,b){return a!==b?0:1;}
function AQF(a){var b,c,d,e,f,g,h,i;b=new R;T(b);b=E(E(b,H8(B5(a))),B(1));c=VA(a);if(!c)d=B(2);else{e=(((32-V1(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=J6(c>>>e&15,16);e=e-4|0;h=i;}d=AHO(f);}return S(E(b,d));}
function VA(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AD0(a){var b,c,d;if(!Jb(a,DG)&&a.constructor.$meta.item===null){b=new Ns;Z(b);J(b);}b=APg(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function ZY(a){var b,c;if(!(a.ct!==null&&a.ct.d8===A_y?1:0)){b=new Lq;Z(b);J(b);}b=a.ct.rL;if(b===null)return;while(!KY(b)){c=AL2(b);if(!c.Z8())S2(c);}a.ct.rL=null;}
function OC(){C.call(this);}
var A_z=null;var A_A=0;function ADJ(b){var c,d,e,f,g,h,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AAV();AGv();ANh();AIi();ADA();AAZ();ACj();AJH();AAX();AJT();AOC();AJW();AM7();ACN();ABY();ABw();ADt();AOn();AOE();AEq();AJr();ANK();AB3();AGT();AB0();ABq();AFW();AMx();AN1();ALP();AKb();ALK();AMS();AMD();AE8();AIU();AHG();ANE();AGP();AG5();ALz();ADk();AFI();ANe();AEm();ALh();ALD();AMp();AF2();ANb();ALn();AHi();ACU();AKM();AEg();AH7();ABW();AKs();AJE();AFB();AHh();AJA();ACs();AB5();AIB();AE2();c
=window.classicConfig;if(c===null)d=null;else{d=H(BC,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));A_z=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ou){}else if($$je instanceof FS){c=$$je;break a;}else{throw $$e;}}return;}g=new MI;g.m$=g;h=new Kh;Hh(h,16);g.qn=h;g.m$=g.qn;h=new MB;h.m$=g;h.y$=0;h.m3=g;PX(c,h);return;case 1:b:{c:{d:{try{AOr(c,g);if(I()){break _;}break d;}catch($$e){$$je
=Bh($$e);if($$je instanceof Ou){}else if($$je instanceof FS){c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bh($$e);if($$je instanceof FS){c=$$je;}else{throw $$e;}}}g=new MI;g.m$=g;h=new Kh;Hh(h,16);g.qn=h;g.m$=g.qn;h=new MB;h.m$=g;h.y$=0;h.m3=g;PX(c,h);return;}e:{Cm(Dr(),B(3));d=Vn(B(4));b=Vn(B(5));if(d!==null)try{c=Nj(Qu(Ju(d)));if(c!==null&&c instanceof Kc)A_B=c;break e;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}}f:{if(b!==null)try{c=Nj(Qu(Ju(b)));if(c!==null
&&c instanceof Kc)A_C=c;break f;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}}if(A_B===null)A_B=DH();if(A_C===null)A_C=DH();c=B(6);g=A_D;$p=2;case 2:$z=AQl(g,c);if(I()){break _;}c=$z;if(c===null)b=null;else{b=$rt_createByteArray(c.byteLength);d=b.data;c=new Uint8Array(c);e=0;f=d.length;while(e<f){d[e]=c[e]<<24>>24;e=e+1|0;}}if(b!==null){c=Nj(Qu(Ju(b)));if(c!==null&&c instanceof Kc)A_E=c;if(A_E.b2===null)A_E=null;else if(!A_E.b2.dD)A_E=null;}c=A9U(Jz(),JK());h=new Ms;A$D();h.sN=B(7);h.Iv
=B(8);c.gb=h;$p=3;case 3:AHc(c);if(I()){break _;}return;default:F2();}}Dh().s(b,c,d,e,f,g,h,$p);}
function XY(b){var c,d,e,f,g;c=$rt_str(A_z.getAttribute("style"));d=A_z;e=new R;T(e);if(c===null)c=B(9);c=S(E(E(e,c),B(10)));d.setAttribute("style",$rt_ustr(c));f=window.document;g=f.createElement("div");g.setAttribute("style","z-index:100;position:absolute;top:135px;left:10%;right:10%;bottom:30px;background-color:white;border:1px solid #cccccc;overflow-x:hidden;overflow-y:scroll;overflow-wrap:break-word;white-space:pre-wrap;font: 24px sans-serif;padding:10px;");A_z.appendChild(g);b=f.createTextNode($rt_ustr(b));g.appendChild(b);}
function AAV(){A_z=null;A_A=0;}
function AE2(){window.minecraftError=null;window.onerror=function(message,file,line,column,errorObj){if(errorObj){window.minecraftError=errorObj;window.minecraftErrorL=""+line+":"+column;AY$();}else {alert("a native browser exception was thrown but your browser does not support fith argument in onerror");}};}
function AY$(){var b,c;b=window.minecraftError;c=new R;T(c);E(c,B(11));E(c,B(12));Ce(E(E(c,B(13)),$rt_str(window.minecraftErrorL)),10);Ce(E(E(c,B(14)),$rt_str(b.name)),10);Ce(E(E(c,B(15)),$rt_str(b.message)),10);E(c,B(16));Ce(E(c,$rt_str(b.stack)),10);}
function VM(){}
function Zu(){var a=this;C.call(a);a.uN=null;a.hZ=null;}
function Ty(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Zu;c.hZ=b;d=c;b.classObject=d;}return c;}
function A0t(a){return a.hZ;}
function AJg(a,b){var c;b=b;c=a.hZ;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Ys(b.constructor,c)?1:0;}
function RS(a,b){return Ys(b.hZ,a.hZ);}
function H8(a){if(a.uN===null)a.uN=$rt_str(a.hZ.$meta.name);return a.uN;}
function Ku(a){return a.hZ.$meta.primitive?1:0;}
function Lz(a){return Ty(a.hZ.$meta.item);}
function Nn(a){return Ty(a.hZ.$meta.superclass);}
function AIX(){C.call(this);}
function Cs(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Nc(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function AIO(){C.call(this);}
function APg(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Ys(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Ys(d[e],c))return 1;e=e+1|0;}return 0;}
function AV5(b){return setTimeout(function(){$rt_threadStarter(A0i)(b);},0);}
function A0i(b){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.hM();if(I()){break _;}return;default:F2();}}Dh().s(b,$p);}
function S2(b){AF6(b,0);}
function AF6(b,c){return setTimeout(function(){A0i(b);},c);}
function AM1(b){return String.fromCharCode(b);}
function ATM(){return [];}
function Ci(){}
function Dk(){}
function LX(){}
function BC(){var a=this;C.call(a);a.bK=null;a.qK=0;}
var A_F=null;function AHO(a){var b=new BC();NZ(b,a);return b;}
function IJ(a,b,c){var d=new BC();AOP(d,a,b,c);return d;}
function A_G(a,b,c,d){var e=new BC();MO(e,a,b,c,d);return e;}
function AUE(a,b){var c=new BC();AF3(c,a,b);return c;}
function AHU(a,b){var c=new BC();Qt(c,a,b);return c;}
function A7l(a,b,c){var d=new BC();AAj(d,a,b,c);return d;}
function NZ(a,b){var c,d;b=b.data;c=b.length;a.bK=$rt_createCharArray(c);d=0;while(d<c){a.bK.data[d]=b[d];d=d+1|0;}}
function AOP(a,b,c,d){var e,f;a.bK=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bK.data[e]=f[e+c|0];e=e+1|0;}}
function MO(a,b,c,d,e){e=ALb(e,AKp(b,c,d));if(AIN(e)&&!e.L&&e.ce==e.ie)a.bK=AMo(e);else{a.bK=$rt_createCharArray(BT(e));AFw(e,a.bK);}}
function AF3(a,b,c){MO(a,b,0,b.data.length,Hc(c));}
function Qt(a,b,c){MO(a,b,0,b.data.length,c);}
function AAj(a,b,c,d){var e,f,g,h,i,j;a.bK=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bK.data;j=e+1|0;g[e]=i&65535;}else{g=a.bK.data;c=e+1|0;g[e]=JJ(i);g=a.bK.data;j=c+1|0;g[c]=Jg(i);}f=f+1|0;c=h;e=j;}if(e<a.bK.data.length)a.bK=QC(a.bK,e);}
function P(a,b){var c;if(b>=0&&b<a.bK.data.length)return a.bK.data[b];c=new Iq;Z(c);J(c);}
function Q(a){return a.bK.data.length;}
function Eb(a){return a.bK.data.length?0:1;}
function ANU(a,b){var c,d,e;if(a===b)return 0;c=B4(Q(a),Q(b));d=0;while(true){if(d>=c)return Q(a)-Q(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function Pi(a,b,c){var d,e,f;if((c+Q(b)|0)>Q(a))return 0;d=0;while(d<Q(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function EG(a,b){if(a===b)return 1;return Pi(a,b,0);}
function Ow(a,b){var c,d,e,f;if(a===b)return 1;if(Q(b)>Q(a))return 0;c=0;d=Q(a)-Q(b)|0;while(d<Q(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Eo(a,b,c){var d,e,f,g;d=Df(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bK.data.length)return (-1);if(a.bK.data[d]==e)break;d=d+1|0;}return d;}f=JJ(b);g=Jg(b);while(true){if(d>=(a.bK.data.length-1|0))return (-1);if(a.bK.data[d]==f&&a.bK.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Fy(a,b){return Eo(a,b,0);}
function Fu(a,b,c){var d,e,f,g,h;d=B4(c,Q(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bK.data[d]==e)break;d=d+(-1)|0;}return d;}f=JJ(b);g=Jg(b);while(true){if(d<1)return (-1);if(a.bK.data[d]==g){h=a.bK.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Gu(a,b){return Fu(a,b,Q(a)-1|0);}
function Or(a,b,c){var d,e,f;d=Df(0,c);e=Q(a)-Q(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Q(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function LJ(a,b){return Or(a,b,0);}
function RI(a,b,c){var d,e;d=B4(c,Q(a)-Q(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Q(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function ADg(a,b){return RI(a,b,Q(a));}
function BP(a,b,c){var d;if(b<=c)return IJ(a.bK,b,c-b|0);d=new BD;Z(d);J(d);}
function DO(a,b){return BP(a,b,Q(a));}
function AR5(a,b,c){return BP(a,b,c);}
function Ps(a,b,c){var d,e,f,g;d=new R;T(d);e=Q(a)-Q(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Q(b)){JL(d,c);f=f+(Q(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}Ce(d,P(a,f));}f=f+1|0;}JL(d,DO(a,f));return S(d);}
function GY(a){var b,c;b=0;c=Q(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return BP(a,b,c+1|0);}
function AQC(a){return a;}
function H5(a){var b,c,d,e;b=$rt_createCharArray(a.bK.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bK.data[d];d=d+1|0;}return b;}
function WO(b){return b===null?B(17):b.eN();}
function XK(b){var c,d;c=new BC;d=$rt_createCharArray(1);d.data[0]=b;NZ(c,d);return c;}
function Yo(b){var c;c=new R;T(c);return S(Bd(c,b));}
function BW(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(Q(c)!=Q(a))return 0;d=0;while(d<Q(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function AEE(a,b){return Yq(a,Hc(b));}
function Yq(a,b){var c,d;c=AGV(b,Th(a.bK));if(!c.L&&c.ce==c.ie)return c.b5;d=$rt_createByteArray(BT(c));AEV(c,d);return d;}
function O$(a){var b,c,d,e;a:{if(!a.qK){b=a.bK.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qK=(31*a.qK|0)+e|0;d=d+1|0;}}}return a.qK;}
function Oj(a){var b,c,d,e,f,g,h;if(Eb(a))return a;b=$rt_createIntArray(a.bK.data.length);c=b.data;d=0;e=0;while(e<a.bK.data.length){a:{if(e!=(a.bK.data.length-1|0)&&Dw(a.bK.data[e])){f=a.bK.data;g=e+1|0;if(D1(f[g])){h=d+1|0;c[d]=Hy(E4(a.bK.data[e],a.bK.data[g]));e=g;break a;}}h=d+1|0;c[d]=Gh(a.bK.data[e]);}e=e+1|0;d=h;}return A7l(b,0,d);}
function ALp(a){var b,c,d,e,f,g,h;if(Eb(a))return a;b=$rt_createIntArray(a.bK.data.length);c=b.data;d=0;e=0;while(e<a.bK.data.length){a:{if(e!=(a.bK.data.length-1|0)&&Dw(a.bK.data[e])){f=a.bK.data;g=e+1|0;if(D1(f[g])){h=d+1|0;c[d]=Hw(E4(a.bK.data[e],a.bK.data[g]));e=g;break a;}}h=d+1|0;c[d]=F1(a.bK.data[e]);}e=e+1|0;d=h;}return A7l(b,0,d);}
function AKN(a,b){var c,d;if(b===null){b=new Eg;Bb(b,B(18));J(b);}A_H=1;c=new Xw;c.uA=H(D6,10);c.iD=(-1);c.kv=(-1);c.dh=(-1);d=new I0;d.h6=1;d.eH=b;d.bR=$rt_createCharArray(Q(b)+2|0);CT(H5(b),0,d.bR,0,Q(b));d.bR.data[d.bR.data.length-1|0]=0;d.bR.data[d.bR.data.length-2|0]=0;d.EU=d.bR.data.length;d.mz=0;Hg(d);Hg(d);c.h=d;c.fM=0;c.vp=U$(c,(-1),c.fM,null);if(!EE(c.h))J(CC(B(9),c.h.eH,c.h.ig));if(c.z7)c.vp.i_();return AIg(c,a);}
function ASg(a,b){return ANU(a,b);}
function AGv(){A_F=new Yy;}
function FS(){var a=this;C.call(a);a.vX=null;a.jM=null;a.rQ=0;a.so=0;a.q6=null;}
function A_I(){var a=new FS();Z(a);return a;}
function A_J(a){var b=new FS();Bb(b,a);return b;}
function Z(a){a.rQ=1;a.so=1;}
function Bb(a,b){a.rQ=1;a.so=1;a.vX=b;}
function A2j(a){return a;}
function AWy(a){return a.vX;}
function ASF(a){return a.kS();}
function ANq(a){var b,c,d;b=a.kS();c=new R;T(c);c=E(c,H8(B5(a)));if(b===null)b=B(9);else{d=new R;T(d);b=S(E(E(d,B(19)),b));}return S(E(c,b));}
function DA(a){U_(a,Ez());}
function U_(a,b){var c,d,e,f,g;Lr(b,H8(B5(a)));c=a.kS();if(c!==null){d=new R;T(d);Lr(b,S(E(E(d,B(19)),c)));}a:{AMB(b);if(a.q6!==null){e=a.q6.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Lr(b,B(20));ADQ(b,d);g=g+1|0;}}}if(a.jM!==null&&a.jM!==a){Lr(b,B(21));U_(a.jM,b);}}
function PX(a,b){var c,d,e,f,g;Ih(b,H8(B5(a)));c=a.kS();if(c!==null){d=new R;T(d);Ih(b,S(E(E(d,B(19)),c)));}a:{U2(b);if(a.q6!==null){e=a.q6.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Ih(b,B(22));ACG(b,d);g=g+1|0;}}}if(a.jM!==null&&a.jM!==a){Ih(b,B(21));PX(a.jM,b);}}
function EF(){FS.call(this);}
function J8(){EF.call(this);}
function AJ4(){J8.call(this);}
function IR(){var a=this;C.call(a);a.bp=null;a.b6=0;}
function A_K(){var a=new IR();T(a);return a;}
function A_k(a){var b=new IR();Hh(b,a);return b;}
function T(a){Hh(a,16);}
function Hh(a,b){a.bp=$rt_createCharArray(b);}
function VU(a,b,c){return AKk(a,a.b6,b,c);}
function AKk(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)D2(a,b,b+1|0);else{D2(a,b,b+2|0);f=a.bp.data;g=b+1|0;f[b]=45;b=g;}a.bp.data[b]=J6(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=K(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;D2(a,b,b+i|0);if(e)e=b;else{f=a.bp.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.bp.data;b=e+1|0;f[e]=J6(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function AEt(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)D2(a,b,b+1|0);else{D2(a,b,b+2|0);g=a.bp.data;h=b+1|0;g[b]=45;b=h;}a.bp.data[b]=J6(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;D2(a,b,b+i|0);if(e)i=b;else{g=a.bp.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.bp.data;b=i+1|0;g[i]=J6(Long_div(c,j).lo,d);c=Long_rem(c,j);j
=Long_div(j,f);i=b;}}}return a;}
function ALA(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=Bw(c,0.0);if(!d){D2(a,b,b+3|0);e=a.bp.data;d=b+1|0;e[b]=48;e=a.bp.data;b=d+1|0;e[d]=46;a.bp.data[b]=48;return a;}if(!d){D2(a,b,b+4|0);e=a.bp.data;d=b+1|0;e[b]=45;e=a.bp.data;b=d+1|0;e[d]=48;e=a.bp.data;d=b+1|0;e[b]=46;a.bp.data[d]=48;return a;}if(isNaN(c)?1:0){D2(a,b,b+3|0);e=a.bp.data;d=b+1|0;e[b]=78;e=a.bp.data;b=d+1|0;e[d]=97;a.bp.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){D2(a,b,b+8|0);d=b;}else{D2(a,b,b+9|0);e=a.bp.data;d=b+1|0;e[b]=45;}e=a.bp.data;b
=d+1|0;e[d]=73;e=a.bp.data;d=b+1|0;e[b]=110;e=a.bp.data;b=d+1|0;e[d]=102;e=a.bp.data;d=b+1|0;e[b]=105;e=a.bp.data;b=d+1|0;e[d]=110;e=a.bp.data;d=b+1|0;e[b]=105;e=a.bp.data;b=d+1|0;e[d]=116;a.bp.data[b]=121;return a;}f=A_L;ALi(c,f);d=f.uX;g=f.uJ;h=f.Ad;i=1;j=1;if(h){h=1;j=2;}k=9;l=AXd(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Df(k,i+1|0);g=0;}else if(g<0){d=d/A_M.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;D2(a,b,b+(j+k|0)|0);if(!h)h=b;else
{e=a.bp.data;h=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.bp.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.bp.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.bp.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.bp.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.bp.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.bp.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AXd(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function Ce(a,b){return a.zd(a.b6,b);}
function J4(a,b,c){D2(a,b,b+1|0);a.bp.data[b]=c;return a;}
function N7(a,b){var c;if(a.bp.data.length>=b)return;c=a.bp.data.length>=1073741823?2147483647:Df(b,Df(a.bp.data.length*2|0,5));a.bp=QC(a.bp,c);}
function S(a){return IJ(a.bp,0,a.b6);}
function J3(a,b,c,d){return a.yE(a.b6,b,c,d);}
function La(a,b,c,d,e){var f,g,h,i;D2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.bp.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ib(a,b){return a.xV(b,0,b.data.length);}
function D2(a,b,c){var d,e;d=a.b6-b|0;a.n1((a.b6+c|0)-b|0);e=d-1|0;while(e>=0){a.bp.data[c+e|0]=a.bp.data[b+e|0];e=e+(-1)|0;}a.b6=a.b6+(c-b|0)|0;}
function JA(){}
function R(){IR.call(this);}
function Cd(){var a=new R();A73(a);return a;}
function A73(a){T(a);}
function E(a,b){OO(a,a.b6,b);return a;}
function Bd(a,b){VU(a,b,10);return a;}
function DZ(a,b){W_(a,a.b6,b);return a;}
function ASR(a,b){Zm(a,a.b6,b);return a;}
function APf(a,b){Ce(a,b);return a;}
function ARl(a,b,c,d){J3(a,b,c,d);return a;}
function A6D(a,b){Ib(a,b);return a;}
function JL(a,b){Z9(a,a.b6,b);return a;}
function W_(a,b,c){AEt(a,b,c,10);return a;}
function Zm(a,b,c){ALA(a,b,c);return a;}
function A56(a,b,c,d,e){La(a,b,c,d,e);return a;}
function Z9(a,b,c){OO(a,b,c===null?B(17):c.eN());return a;}
function AVl(a,b,c){J4(a,b,c);return a;}
function AGF(a,b,c){var d,e,f,g,h,i,j;d=Bw(b,c);if(d<=0&&b<=a.b6){if(d){e=a.b6-c|0;a.b6=a.b6-(c-b|0)|0;d=0;while(d<e){f=a.bp.data;g=b+1|0;h=a.bp.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new Iq;Z(j);J(j);}
function Uu(a,b){var c,d,e,f;if(b>=0&&b<a.b6){a.b6=a.b6-1|0;while(b<a.b6){c=a.bp.data;d=a.bp.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new Iq;Z(f);J(f);}
function OO(a,b,c){var d,e,f;if(b>=0&&b<=a.b6){a:{if(c===null)c=B(17);else if(Eb(c))break a;N7(a,a.b6+Q(c)|0);d=a.b6-1|0;while(d>=b){a.bp.data[d+Q(c)|0]=a.bp.data[d];d=d+(-1)|0;}a.b6=a.b6+Q(c)|0;d=0;while(d<Q(c)){e=a.bp.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Iq;Z(c);J(c);}
function AKK(a,b){a.b6=b;}
function ACB(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BD;Bb(f,B(23));J(f);}while(b<c){g=d.data;h=e+1|0;i=a.bp.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A3D(a,b,c,d,e){La(a,b,c,d,e);return a;}
function ARE(a,b,c,d){J3(a,b,c,d);return a;}
function Lh(a){return a.b6;}
function B0(a){return S(a);}
function AT2(a,b){N7(a,b);}
function A4w(a,b,c){return Z9(a,b,c);}
function A36(a,b,c){J4(a,b,c);return a;}
function A2P(a,b,c){return Zm(a,b,c);}
function AQW(a,b,c){return W_(a,b,c);}
function AYX(a,b,c){return OO(a,b,c);}
function Fx(){C.call(this);}
function GT(){Fx.call(this);this.fA=0;}
var A_N=null;var A_O=null;function ANz(a){var b=new GT();Mx(b,a);return b;}
function Mx(a,b){a.fA=b;}
function Kg(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Eb(b)){a:{d=0;e=0;switch(P(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Q(b)){b=new ET;Z(b);J(b);}while(e<Q(b)){g=e+1|0;h=WB(P(b,e));if(h<0){i=new ET;j=new R;T(j);Bb(i,S(E(E(j,B(24)),b)));J(i);}if(h>=c){i=new ET;j=new R;T(j);Bb(i,S(E(E(Bd(E(j,B(25)),c),B(19)),b)));J(i);}f=K(c,f)+h|0;if(f<0){if(g==Q(b)&&f==(-2147483648)&&d)return (-2147483648);i=new ET;j=new R;T(j);Bb(i,S(E(E(j,B(26)),b)));J(i);}e=g;}if(d)f= -f;return f;}b
=new ET;Bb(b,B(27));J(b);}i=new ET;b=new R;T(b);Bb(i,S(Bd(E(b,B(28)),c)));J(i);}
function C0(b){var c;if(b>=(-128)&&b<=127){a:{if(A_O===null){A_O=H(GT,256);c=0;while(true){if(c>=A_O.data.length)break a;A_O.data[c]=ANz(c-128|0);c=c+1|0;}}}return A_O.data[b+128|0];}return ANz(b);}
function AIp(a){return a.fA;}
function NF(a){var b;b=a.fA;return VU(A_k(20),b,10).eN();}
function AZm(a){return a.fA>>>4^a.fA<<28^a.fA<<8^a.fA>>>24;}
function Z3(a,b){if(a===b)return 1;return b instanceof GT&&b.fA==a.fA?1:0;}
function ACC(a,b){return Bw(a.fA,b.fA);}
function V1(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function KS(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function XL(a,b){return ACC(a,b);}
function ANh(){A_N=D($rt_intcls());}
function JX(){J8.call(this);}
function A_P(a){var b=new JX();RZ(b,a);return b;}
function RZ(a,b){Bb(a,b);}
function ALR(){JX.call(this);}
function A_Q(a){var b=new ALR();AQL(b,a);return b;}
function AQL(a,b){RZ(a,b);}
function AJM(){JX.call(this);}
function A_R(a){var b=new AJM();AQZ(b,a);return b;}
function AQZ(a,b){RZ(a,b);}
function Cq(){FS.call(this);}
function BU(){Cq.call(this);}
function Ru(a){var b=new BU();A7H(b,a);return b;}
function A7H(a,b){Bb(a,b);}
function Dl(){}
function H_(){}
function WP(){}
function Sd(){}
function XA(){}
function Tw(){}
function YO(){}
function Ra(){}
function Mp(){}
function ABa(){C.call(this);}
function AUm(a,b,c){a.Xv($rt_str(b),Nc(c,"handleEvent"));}
function AUB(a,b,c){a.Vg($rt_str(b),Nc(c,"handleEvent"));}
function APW(a,b){return a.IZ(b);}
function AVv(a,b,c,d){a.LQ($rt_str(b),Nc(c,"handleEvent"),d?1:0);}
function AX2(a,b){return !!a.XB(b);}
function AQT(a){return a.Ke();}
function APd(a,b,c,d){a.Oz($rt_str(b),Nc(c,"handleEvent"),d?1:0);}
function Bn(){C.call(this);}
var A_S=0;var A_T=null;var A_U=null;var A_V=null;var A_W=null;var A_X=null;var A_Y=null;var A_Z=null;var A_0=null;var A_1=null;var A_2=null;var A_3=null;var A_4=null;var A_5=null;var A_6=null;var A_7=null;var A_8=null;var A_9=null;var A_$=null;var A__=null;var Baa=0;var Bab=0;var Bac=0.0;var Bad=0.0;var Bae=0;var Baf=0;var Bag=0;var Bah=0;var Bai=0;var Baj=null;var Bak=null;var Bal=null;var Bam=null;var Ban=null;var Bao=0;var Bap=null;var Baq=null;var Bar=null;var Bas=null;var Bat=null;var Bau=null;var Bav=
Long_ZERO;var Baw=0;var Bax=0;var Bay=0;var Baz=null;var BaA=null;var BaB=null;var BaC=null;var BaD=0;var BaE=0;var BaF=0;var BaG=null;var BaH=null;var BaI=null;var BaJ=0;var BaK=null;var BaL=null;var BaM=0.0;var BaN=null;var BaO=0;var BaP=null;var BaQ=null;var BaR=0;var BaS=null;var BaT=0;function Bf(){Bf=Bl(Bn);AYg();}
function XW(){Bf();return B(29);}
function I9(b){Bf();if(EG(b,B(30)))b=DO(b,1);return Co(BaU,b);}
function AD6(b){var c;Bf();c=I9(b);if(c===null)return null;return AHU(c,Hc(B(31)));}
function ADf(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{ASu(b,callback);}catch($e){callback.J6($rt_exception($e));}});}
function ASu(b,c){var d,e;Bf();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new Yw;b.vM=d;b.Bc=c;b=Cs(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AOr(b,c){var d,e,f,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bf();A_U=b;d=$rt_str(A_U.getAttribute("style"));e=A_U;f=Cd();if(d===null)d=B(9);f=B0(E(E(f,d),B(32)));e.setAttribute("style",$rt_ustr(f));A_Z=window;A_T=A_Z.document;A_V=A_T.createElement("canvas");Bae=b.clientWidth;Baf=b.clientHeight;f=A_V;e=Bae;f.width=e;f=A_V;e=Baf;f.height=e;A_W=A_V.getContext("2d");A_V.setAttribute("id","deevis589723589");f=A_V;b.appendChild(f);A_X
=A_T.createElement("canvas");b=A_X;f=Bae;b.width=f;b=A_X;f=Baf;b.height=f;b=A_X;e=ABl();A_Y=b.getContext("webgl2",e);if(A_Y===null)J(Ru(B0(E(E(E(Cd(),B(33)),$rt_str(window.navigator.userAgent)),B(34)))));ADh(A_Y);A_Y.getExtension("EXT_texture_filter_anisotropic");b=A_Z;e=A9Q();A_1=e;b.addEventListener("contextmenu",Cs(e,"handleEvent"));b=A_V;e=A$A();A_2=e;b.addEventListener("mousedown",Cs(e,"handleEvent"));b=A_V;e=A$Z();A_3=e;b.addEventListener("mouseup",Cs(e,"handleEvent"));b=A_V;e=A$T();A_4=e;b.addEventListener("mousemove",
Cs(e,"handleEvent"));b=A_Z;e=A$M();A_5=e;b.addEventListener("keydown",Cs(e,"handleEvent"));b=A_Z;e=A$U();A_6=e;b.addEventListener("keyup",Cs(e,"handleEvent"));b=A_Z;e=A$E();A_7=e;b.addEventListener("keypress",Cs(e,"handleEvent"));b=A_V;e=A9W();A_8=e;b.addEventListener("wheel",Cs(e,"handleEvent"));b=A_Z;e=A90();b.addEventListener("blur",Cs(e,"handleEvent"));b=A_Z;e=A8U();b.addEventListener("focus",Cs(e,"handleEvent"));AEv();AL8();$p=1;case 1:$z=AKU();if(I()){break _;}f=$z;if(f!==BaV){if(f===BaW)XY(B(35));else XY(B0(E(E(Cd(),
B(36)),AIz())));J(A$6());}$p=2;case 2:ADf(c);if(I()){break _;}a:{try{AJ2(A_0);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){e=$$je;}else{throw $$e;}}DA(e);}PM(A_$);PM(A__);return;default:F2();}}Dh().s(b,c,d,e,f,$p);}
function LF(b){Bf();A_Y.enable(b);}
function KP(b){Bf();A_Y.disable(b);}
function AKd(){var b,c;Bf();b=new Sp;b.jb=A_Y.createProgram();c=Bai+1|0;Bai=c;b.x7=c;return b;}
function TJ(b){var c;Bf();c=new X5;c.jw=A_Y.createShader(b);return c;}
function AAc(b,c){var d;Bf();d=A_Y;b=b.jb;c=c.jw;d.attachShader(b,c);}
function Wr(b,c){var d;Bf();d=A_Y;b=b.jb;c=c.jw;d.detachShader(b,c);}
function Wb(b){var c;Bf();c=A_Y;b=b.jw;c.compileShader(b);}
function ABF(b){var c;Bf();c=A_Y;b=b.jb;c.linkProgram(b);}
function Zs(b,c){var d;Bf();d=A_Y;b=b.jw;d.shaderSource(b,$rt_ustr(c));}
function XO(b){var c;Bf();c=A_Y;b=b.jw;return $rt_str(c.getShaderInfoLog(b));}
function AOp(b){var c;Bf();c=A_Y;b=b.jb;return $rt_str(c.getProgramInfoLog(b));}
function TL(b){var c;Bf();c=A_Y;b=b.jw;return c.getShaderParameter(b,35713)!=1?0:1;}
function AJD(b){var c;Bf();c=A_Y;b=b.jb;return c.getProgramParameter(b,35714)!=1?0:1;}
function W8(b){var c;Bf();c=A_Y;b=b.jw;c.deleteShader(b);}
function Mu(){var b;Bf();b=new XU;b.BK=A_Y.createBuffer();return b;}
function HY(b,c){var d;Bf();d=A_Y;c=c!==null?c.BK:null;d.bindBuffer(b,c);}
function TG(b,c,d){var e;Bf();e=A_Y;c=c;e.bufferData(b,c,d);}
function Kv(b){Bf();A_Y.enableVertexAttribArray(b);}
function Du(b,c){var d;Bf();d=A_Y;b=b.jb;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new V2;b.lW=d;}return b;}
function LN(b,c,d){var e;Bf();e=A_Y;b=b.jb;e.bindAttribLocation(b,c,$rt_ustr(d));}
function I5(b,c){var d;Bf();if(b!==null){d=A_Y;b=b.lW;d.uniform1f(b,c);}}
function NN(b,c,d,e){var f;Bf();if(b!==null){f=A_Y;b=b.lW;f.uniform3f(b,c,d,e);}}
function Te(b,c,d,e,f){var g,h;Bf();if(b!==null){g=A_Y;h=b.lW;g.uniform4f(h,c,d,e,f);}}
function Qv(b,c){var d;Bf();if(b!==null){d=A_Y;b=b.lW;d.uniform1i(b,c);}}
function Ne(b,c){var d,e;Bf();Ban.set(c.data);if(b!==null){d=A_Y;e=b.lW;b=Ban;d.uniformMatrix4fv(e,!!0,b);}}
function Tx(b){var c;Bf();if(b!==null&&Bao!=b.x7){Bao=b.x7;c=A_Y;b=b.jb;c.useProgram(b);}}
function Kn(b,c,d,e,f,g){Bf();A_Y.vertexAttribPointer(b,c,d,!!e,f,g);}
function Z$(){var b;Bf();b=new Zw;b.Cz=A_Y.createVertexArray();b.u_=0;return b;}
function Rz(b){var c;Bf();c=A_Y;b=b!==null?b.Cz:null;c.bindVertexArray(b);}
function ADd(b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bf();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AJG(c);if(I()){break _;}c=$z;return c;default:F2();}}Dh().s(b,c,$p);}
function AJG(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{AZA(b,callback);}catch($e){callback.J6($rt_exception($e));}});}
function AZA(b,c){var d,e,f;Bf();d=A_T.createElement("img");e=new Yh;e.fR=d;e.wH=c;d.addEventListener("load",Cs(e,"handleEvent"));f=new Yg;f.DK=d;f.CB=c;d.addEventListener("error",Cs(f,"handleEvent"));e=$rt_str(AJn(b,"image/png"));if(e===null)CY(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Dg(){var b,c;Bf();a:{Bar=null;if(!Ko(A_$)){b=VI(A_$,0);Bar=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function C3(){var b;Bf();if(Bar===null)return (-1);b=Bar.button;if(b==1)b=2;else if(b==2)b=1;return b;}
function Cv(){Bf();return Bar===null?0:BW($rt_str(Bar.type),B(37));}
function Cb(b){Bf();return Bat.data[b];}
function Hb(){Bf();return !BW(B(38),$rt_str(Bar.type))?0:Bar.deltaY===0.0?0:Bar.deltaY<=0.0?1:(-1);}
function Lu(b){Bf();Bax=b;if(b){Bac=0.0;Bad=0.0;setTimeout(Cs(new Yi,"onTimer"),200);}else{Bav=CF();if(Baw)clearTimeout(Baw);Baw=0;A_T.exitPointerLock();}}
function QA(){Bf();return Bar===null?(-1):Bar.clientX;}
function SO(){Bf();return Bar===null?(-1):A_V.clientHeight-Bar.clientY|0;}
function CQ(){var b,c;Bf();if(!BaT){a:{Bas=null;if(!Ko(A__)){b=VI(A__,0);Bas=b;if(b!==null){c=1;break a;}}c=0;}return c;}PM(A__);Bas=null;Bau.data[29]=0;Bau.data[157]=0;Bau.data[28]=0;Bau.data[219]=0;Bau.data[220]=0;BaT=0;return 0;}
function Bi(){Bf();return Bas===null?(-1):Q_(Bas.which);}
function C6(){Bf();return Bas===null?0:BW($rt_str(Bas.type),B(39))?0:1;}
function Cn(b){Bf();if(BaT){Bau.data[28]=0;Bau.data[29]=0;Bau.data[157]=0;Bau.data[219]=0;Bau.data[220]=0;}return Bau.data[b];}
function ADG(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bf();AOh(A_Y);b=A_W;c=A_X;d=A_V.width;e=A_V.height;b.drawImage(c,0.0,0.0,d,e);f=A_V.clientWidth;g=A_V.clientHeight;if(!(f==Bae&&g==Baf)){Bae=f;Baf=g;c=A_X;h=f;c.width=h;c=A_X;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}return;case 1:a:{try{AJf(i);if
(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}return;default:F2();}}Dh().s(b,c,d,e,f,g,h,i,$p);}
function Ut(b){Bf();Bag=b;}
function KA(){var b,c;Bf();b=document.pointerLockElement!=null?1:0;c=Bay;Bay=b;if(!c&&b){Bac=0.0;Bad=0.0;}a:{b:{if(Bah){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function Jz(){var b,c,d;Bf();b=A_U.clientWidth;if(b!=Bae){c=A_V;d=b;c.width=d;c=A_X;d=b;c.width=d;Bae=b;}return b;}
function JK(){var b,c,d;Bf();b=A_U.clientHeight;if(b!=Baf){c=A_V;d=b;c.height=d;c=A_X;d=b;c.height=d;Baf=b;}return b;}
function Vn(b){var c,d;Bf();c=A_Z.localStorage;d=new R;T(d);d=S(E(E(d,B(40)),b));d=$rt_str(c.getItem($rt_ustr(d)));if(d===null)return null;return ADn(AW1(0,BaX,0),d);}
function Zl(b,c){var d,e,f,g;Bf();d=A_Z.localStorage;e=new R;T(e);f=S(E(E(e,B(40)),b));b=new BC;if(c!==null&&c.data.length){e=AW1(0,BaX,0);g=ANf(e,c);if(Long_gt(g,Long_fromInt(2147483647))){b=new BB;e=new R;T(e);Bb(b,S(Bd(E(DZ(E(e,B(41)),g),B(42)),2147483647)));J(b);}c=AKO(e,c);}Qt(b,c,Hc(B(31)));d.setItem($rt_ustr(f),$rt_ustr(b));}
function Ng(){Bf();return Long_fromInt(1073741824);}
function NT(){Bf();return Long_fromInt(1073741824);}
function MK(){Bf();return Long_ZERO;}
function YS(b){Bf();return b.byteLength;}
function Q_(b){Bf();return b<=BaQ.data.length&&b>=0?BaQ.data[b]:(-1);}
function X2(){Bf();return A_0;}
function Sr(){Bf();return Bat;}
function Mr(){Bf();return A_$;}
function Ob(){Bf();if(Long_gt(Long_sub(CF(),Bav),Long_fromInt(3000))&&Bax&&!(document.pointerLockElement!=null?1:0)){A_V.requestPointerLock();if(document.pointerLockElement!=null?1:0)Bax=0;}}
function Y$(){Bf();return Bau;}
function ZI(b){Bf();return b.which;}
function Rp(b){Bf();return Q_(b);}
function Pp(){Bf();return A__;}
function Uj(b){Bf();Bah=b;return b;}
function H6(){Bf();return Bap;}
function Ln(){Bf();return Baq;}
function RG(b){Bf();URL.revokeObjectURL($rt_ustr(b));}
function YX(){Bf();return Baw;}
function O7(b){Bf();Baw=b;return b;}
function Xr(){Bf();return Bav;}
function AYg(){var b,c;A_S=0;A_T=null;A_U=null;A_V=null;A_W=null;A_X=null;A_Y=null;A_Z=null;A_0=null;A_1=null;A_2=null;A_3=null;A_4=null;A_5=null;A_6=null;A_7=null;A_8=null;A_9=H(BC,0);A_$=ST();A__=ST();Baa=0;Bab=0;Bac=0.0;Bad=0.0;Bae=0;Baf=0;Bag=0;Bah=1;Bai=0;Baj=$rt_createIntArray(4);Bak=new Uint8Array(new ArrayBuffer(4194304));Bal=new Float32Array(4);Bam=new Float32Array(9);Ban=new Float32Array(16);Bao=(-1);Bap=null;Baq=null;Bar=null;Bas=null;Bat=$rt_createBooleanArray(8);Bau=$rt_createBooleanArray(256);Bav
=Long_ZERO;Baw=0;Bax=0;Bay=0;Baz=A$R(B(43));BaA=AHe();BaB=AHe();BaC=null;BaD=0;BaE=0;BaF=0;BaG=ST();BaH=null;BaI=null;BaJ=0;BaK=CZ();BaL=null;BaM=0.029999999329447746;BaN=CZ();BaO=0;b=H(BC,256);c=b.data;c[0]=B(44);c[1]=B(45);c[2]=B(46);c[3]=B(47);c[4]=B(48);c[5]=B(49);c[6]=B(50);c[7]=B(51);c[8]=B(52);c[9]=B(53);c[10]=B(54);c[11]=B(2);c[12]=B(55);c[13]=B(56);c[14]=B(57);c[15]=B(58);c[16]=B(59);c[17]=B(60);c[18]=B(61);c[19]=B(62);c[20]=B(63);c[21]=B(64);c[22]=B(65);c[23]=B(66);c[24]=B(67);c[25]=B(68);c[26]=B(69);c[27]
=B(70);c[28]=B(71);c[29]=B(72);c[30]=B(73);c[31]=B(74);c[32]=B(75);c[33]=B(76);c[34]=B(77);c[35]=B(78);c[36]=B(79);c[37]=B(80);c[38]=B(81);c[39]=B(82);c[40]=B(83);c[41]=B(84);c[42]=B(85);c[43]=B(86);c[44]=B(87);c[45]=B(88);c[46]=B(89);c[47]=B(90);c[48]=B(91);c[49]=B(92);c[50]=B(93);c[51]=B(94);c[52]=B(95);c[53]=B(96);c[54]=B(97);c[55]=B(98);c[56]=B(99);c[57]=B(100);c[58]=B(101);c[59]=B(102);c[60]=B(103);c[61]=B(104);c[62]=B(105);c[63]=B(106);c[64]=B(107);c[65]=B(108);c[66]=B(109);c[67]=B(110);c[68]=B(111);c[69]
=B(112);c[70]=B(113);c[71]=B(114);c[72]=B(115);c[73]=B(116);c[74]=B(117);c[75]=B(118);c[76]=B(119);c[77]=B(120);c[78]=B(121);c[79]=B(122);c[80]=B(123);c[81]=B(124);c[82]=B(125);c[83]=B(126);c[84]=B(17);c[85]=B(17);c[86]=B(17);c[87]=B(127);c[88]=B(128);c[89]=B(17);c[90]=B(17);c[91]=B(17);c[92]=B(17);c[93]=B(17);c[94]=B(17);c[95]=B(17);c[96]=B(17);c[97]=B(17);c[98]=B(17);c[99]=B(17);c[100]=B(129);c[101]=B(130);c[102]=B(131);c[103]=B(132);c[104]=B(133);c[105]=B(134);c[106]=B(17);c[107]=B(17);c[108]=B(17);c[109]
=B(17);c[110]=B(17);c[111]=B(17);c[112]=B(135);c[113]=B(136);c[114]=B(17);c[115]=B(17);c[116]=B(17);c[117]=B(17);c[118]=B(17);c[119]=B(17);c[120]=B(17);c[121]=B(137);c[122]=B(17);c[123]=B(138);c[124]=B(17);c[125]=B(139);c[126]=B(17);c[127]=B(17);c[128]=B(17);c[129]=B(17);c[130]=B(17);c[131]=B(17);c[132]=B(17);c[133]=B(17);c[134]=B(17);c[135]=B(17);c[136]=B(17);c[137]=B(17);c[138]=B(17);c[139]=B(17);c[140]=B(17);c[141]=B(140);c[142]=B(17);c[143]=B(17);c[144]=B(141);c[145]=B(142);c[146]=B(143);c[147]=B(144);c[148]
=B(145);c[149]=B(146);c[150]=B(147);c[151]=B(148);c[152]=B(17);c[153]=B(17);c[154]=B(17);c[155]=B(17);c[156]=B(149);c[157]=B(150);c[158]=B(17);c[159]=B(17);c[160]=B(17);c[161]=B(17);c[162]=B(17);c[163]=B(17);c[164]=B(17);c[165]=B(17);c[166]=B(17);c[167]=B(151);c[168]=B(17);c[169]=B(17);c[170]=B(17);c[171]=B(17);c[172]=B(17);c[173]=B(17);c[174]=B(17);c[175]=B(17);c[176]=B(17);c[177]=B(17);c[178]=B(17);c[179]=B(152);c[180]=B(17);c[181]=B(153);c[182]=B(17);c[183]=B(154);c[184]=B(155);c[185]=B(17);c[186]=B(17);c[187]
=B(17);c[188]=B(17);c[189]=B(17);c[190]=B(17);c[191]=B(17);c[192]=B(17);c[193]=B(17);c[194]=B(17);c[195]=B(17);c[196]=B(156);c[197]=B(157);c[198]=B(17);c[199]=B(158);c[200]=B(159);c[201]=B(160);c[202]=B(17);c[203]=B(161);c[204]=B(17);c[205]=B(162);c[206]=B(17);c[207]=B(163);c[208]=B(164);c[209]=B(165);c[210]=B(166);c[211]=B(167);c[212]=B(17);c[213]=B(17);c[214]=B(17);c[215]=B(17);c[216]=B(17);c[217]=B(17);c[218]=B(168);c[219]=B(169);c[220]=B(170);c[221]=B(171);c[222]=B(172);c[223]=B(173);c[224]=B(17);c[225]
=B(17);c[226]=B(17);c[227]=B(17);c[228]=B(17);c[229]=B(17);c[230]=B(17);c[231]=B(17);c[232]=B(17);c[233]=B(17);c[234]=B(17);c[235]=B(17);c[236]=B(17);c[237]=B(17);c[238]=B(17);c[239]=B(17);c[240]=B(17);c[241]=B(17);c[242]=B(17);c[243]=B(17);c[244]=B(17);c[245]=B(17);c[246]=B(17);c[247]=B(17);c[248]=B(17);c[249]=B(17);c[250]=B(17);c[251]=B(17);c[252]=B(17);c[253]=B(17);c[254]=B(17);c[255]=B(17);BaP=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]
=(-1);c[8]=14;c[9]=15;c[10]=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]
=(-1);c[60]=(-1);c[61]=(-1);c[62]=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]
=52;c[111]=53;c[112]=(-1);c[113]=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]
=(-1);c[154]=(-1);c[155]=(-1);c[156]=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]
=(-1);c[198]=(-1);c[199]=(-1);c[200]=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;BaQ=b;BaR=0;BaS=new Int32Array(new ArrayBuffer(2100000));BaT=0;}
function AEv(){window.onbeforeunload=function(){A2R();return false;};}
function A2R(){var b;Bf();P5();b=O2();MP(A_C,ACZ(b));Zl(B(5),HP(b));}
function ADh(b){window.currentContext=b;}
function AL8(){if (!AL8.$native){
AL8.$native=function(){return (function(){window.eagsFileChooser = {
inputElement: null,
openFileChooser: function(ext, mime){
var el = window.eagsFileChooser.inputElement = document.createElement("input");
el.type = "file";
el.multiple = false;
el.addEventListener("change", function(evt){
var f = window.eagsFileChooser.inputElement.files;
if(f.length == 0){
window.eagsFileChooser.getFileChooserResult = null;
}else{
(async function(){
window.eagsFileChooser.getFileChooserResult = await f[0].arrayBuffer();
window.eagsFileChooser.getFileChooserResultName = f[0].name;
})();
}
});
window.eagsFileChooser.getFileChooserResult = null;
window.eagsFileChooser.getFileChooserResultName = null;
el.accept = mime;
el.click();
},
getFileChooserResult: null,
getFileChooserResultName: null
};})();};AL8=AL8.$native;}return AL8();}
function ABl(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function AJn(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function AOh(b){if(b.commit)b.commit();}
function Ou(){BU.call(this);}
function A$6(){var a=new Ou();A14(a);return a;}
function A14(a){Z(a);}
function U7(){}
function IY(){}
function Pl(){}
function IC(){C.call(this);this.m$=null;}
function MI(){IC.call(this);this.qn=null;}
function AJB(a){return;}
function AFh(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;J3(a.qn,b,c,d);return;}}f=new BD;Z(f);J(f);}
function MB(){var a=this;IC.call(a);a.m3=null;a.GR=0;a.y$=0;}
function AF0(a){var $$je;a:{if(a.m3===null)Lk(a);else{try{AJB(a.m3);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}Lk(a);}}}
function Ih(a,b){if(b===null)b=WO(null);AAW(a,b);}
function U2(a){Ih(a,B(174));if(a.y$)AF0(a);}
function ACG(a,b){ADs(a,WO(b));}
function ADs(a,b){Ih(a,b);U2(a);}
function Lk(a){a.GR=1;}
function AOm(a,b){ACp(a,b,0,b.data.length);}
function ACp(a,b,c,d){var $$je;a:{if(a.m3===null)Lk(a);else{try{AFh(a.m3,b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}Lk(a);}}}
function AAW(a,b){AOm(a,H5(b));}
function AFP(){C.call(this);}
function AF_(){C.call(this);}
function Nd(){C.call(this);}
var BaY=null;var BaZ=null;function Dr(){if(BaY===null)BaY=AU2(new ZV,0);return BaY;}
function Ez(){if(BaZ===null)BaZ=AU2(new Rw,0);return BaZ;}
function CT(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AMj(b)&&(e+f|0)<=AMj(d)){a:{b:{if(b!==d){g=Lz(B5(b));h=Lz(B5(d));if(g!==null&&h!==null){if(g===h)break b;if(!Ku(g)&&!Ku(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!AJg(h,l[k])){XH(b,c,d,e,j);b=new K5;Z(b);J(b);}j=j+1|0;k=m;}XH(b,c,d,e,f);return;}if(!Ku(g))break a;if(Ku(h))break b;else break a;}b=new K5;Z(b);J(b);}}XH(b,c,d,e,f);return;}b=new K5;Z(b);J(b);}b=new BD;Z(b);J(b);}d=new Eg;Bb(d,B(175));J(d);}
function XH(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function CF(){return Long_fromNumber(new Date().getTime());}
function AFt(){return Long_fromNumber(performance.now()*1000000.0);}
function Pe(){C.call(this);}
var A_B=null;var A_C=null;function P5(){var b;b=O2();MP(A_B,ACZ(b));Zl(B(4),HP(b));}
function AJW(){A_B=null;A_C=null;}
function V_(){C.call(this);}
var A_E=null;function AER(){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=O2();MP(A_E,ACZ(b));c=B(6);d=HP(b);Bf();e=Gu(c,47);if(e>0){b=BP(c,0,e);$p=2;continue _;}f=new Uint8Array(d.data.length);f.set(d.data);b=A_D;e=0;f=f.buffer;$p=1;case 1:A3e(b,c,e,f);if(I()){break _;}if(A_E.b2===null)A_E=null;else if(!A_E.b2.dD)A_E=null;return;case 2:AIn(b);if(I()){break _;}f=new Uint8Array(d.data.length);f.set(d.data);b=A_D;e=0;f=f.buffer;$p
=1;continue _;default:F2();}}Dh().s(b,c,d,e,f,$p);}
function AM7(){A_E=null;}
function DY(){}
function ALU(){C.call(this);}
function A9Q(){var a=new ALU();A09(a);return a;}
function A09(a){return;}
function AEW(a,b){b.preventDefault();b.stopPropagation();}
function ACv(a,b){AEW(a,b);}
function AZl(a,b){ACv(a,b);}
function ALX(){C.call(this);}
function A$A(){var a=new ALX();A71(a);return a;}
function A71(a){return;}
function ACA(a,b){var c,d;c=b.button;d=Sr();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;HF(Mr(),b);b.preventDefault();b.stopPropagation();Ob();}
function AH5(a,b){ACA(a,b);}
function A8z(a,b){AH5(a,b);}
function ALY(){C.call(this);}
function A$Z(){var a=new ALY();A6Y(a);return a;}
function A6Y(a){return;}
function AIt(a,b){var c,d;c=b.button;d=Sr();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;HF(Mr(),b);b.preventDefault();b.stopPropagation();}
function ACQ(a,b){AIt(a,b);}
function A0n(a,b){ACQ(a,b);}
function ALV(){C.call(this);}
function A$T(){var a=new ALV();AR7(a);return a;}
function AR7(a){return;}
function AAG(a,b){var c;Bf();Baa=b.offsetX;Bab=A_V.clientHeight-b.offsetY|0;c=b.movementX;Bac=Bac+c;c= -b.movementY;Bad=Bad+c;b.preventDefault();b.stopPropagation();}
function AEc(a,b){AAG(a,b);}
function AP5(a,b){AEc(a,b);}
function ALW(){C.call(this);}
function A$M(){var a=new ALW();AVQ(a);return a;}
function AVQ(a){return;}
function ABX(a,b){Y$().data[Rp(ZI(b))]=1;HF(Pp(),b);b.preventDefault();b.stopPropagation();Ob();}
function AM5(a,b){ABX(a,b);}
function A7h(a,b){AM5(a,b);}
function AL0(){C.call(this);}
function A$U(){var a=new AL0();AVb(a);return a;}
function AVb(a){return;}
function AD$(a,b){Y$().data[Rp(ZI(b))]=0;HF(Pp(),b);b.preventDefault();b.stopPropagation();}
function AAu(a,b){AD$(a,b);}
function ATR(a,b){AAu(a,b);}
function AL1(){C.call(this);}
function A$E(){var a=new AL1();AVm(a);return a;}
function AVm(a){return;}
function AKJ(a,b){Bf();if(Bag&&(b.repeat?1:0))HF(Pp(),b);b.preventDefault();b.stopPropagation();}
function AM3(a,b){AKJ(a,b);}
function AWK(a,b){AM3(a,b);}
function ALZ(){C.call(this);}
function A9W(){var a=new ALZ();AVi(a);return a;}
function AVi(a){return;}
function ABD(a,b){HF(Mr(),b);b.preventDefault();b.stopPropagation();}
function AEa(a,b){ABD(a,b);}
function AR1(a,b){AEa(a,b);}
function ALt(){C.call(this);}
function A90(){var a=new ALt();A0a(a);return a;}
function A0a(a){return;}
function AD7(a,b){Uj(0);}
function AD_(a,b){AD7(a,b);}
function A2E(a,b){AD_(a,b);}
function ALs(){C.call(this);}
function A8U(){var a=new ALs();APY(a);return a;}
function APY(a){return;}
function AKo(a,b){Uj(1);Ob();}
function ACR(a,b){AKo(a,b);}
function AYD(a,b){ACR(a,b);}
function My(){C.call(this);}
var Ba0=null;var A_D=null;function AKU(){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(176);$p=1;case 1:$z=A1K(b);if(I()){break _;}b=$z;if(b===null){Ba0=B(177);return Ba1;}if(b.DY)return BaW;if(!b.AC&&b.zC!==null){A_D=b.zC;return BaV;}Ba0=b.xU!==null?b.xU:B(178);return Ba1;default:F2();}}Dh().s(b,$p);}
function AIz(){return Ba0;}
function AIn(b){var c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=A_D;$p=1;case 1:$z=A6_(c,b);if(I()){break _;}c=$z;if(c!==Ba2?0:1)return;d=Gu(b,47);if(d>0){c=BP(b,0,d);$p=3;continue _;}c=A_D;d=1;e=new ArrayBuffer(0);$p=2;case 2:A3e(c,b,d,e);if(I()){break _;}return;case 3:AIn(c);if(I()){break _;}c=A_D;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:F2();}}Dh().s(b,c,d,e,$p);}
function ACN(){Ba0=B(9);A_D=null;}
function Fd(){var a=this;C.call(a);a.IQ=null;a.tD=0;}
function Ba3(a,b){var c=new Fd();FK(c,a,b);return c;}
function FK(a,b,c){a.IQ=b;a.tD=c;}
function AW7(a){return a.tD;}
function APH(a,b){return a!==b?0:1;}
function K6(a){var b;b=B5(a);if(!S5(Nn(b),D(Fd)))b=Nn(b);return b;}
function AAr(a,b){var c,d;if(K6(b)===K6(a))return Bw(a.tD,b.tD);c=new BB;d=new R;T(d);Bb(c,S(E(E(E(E(d,B(179)),H8(K6(a))),B(180)),H8(K6(b)))));J(c);}
function ATP(a,b){return AAr(a,b);}
function Fr(){Fd.call(this);}
var BaV=null;var BaW=null;var Ba1=null;var Ba4=null;function ABY(){var b,c,d;b=new Fr;FK(b,B(181),0);BaV=b;b=new Fr;FK(b,B(182),1);BaW=b;b=new Fr;FK(b,B(183),2);Ba1=b;c=H(Fr,3);d=c.data;d[0]=BaV;d[1]=BaW;d[2]=Ba1;Ba4=c;}
function Xk(){C.call(this);}
var BaU=null;function AJ2(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ju(b);d=Qu(c);e=$rt_createByteArray(8);O8(d,e);if(!BW(B(184),AHU(e,Hc(B(31))))){c=new BA;Bb(c,B(185));J(c);}KW(d);f=new RL;d=new ZA;g=new WG;g.f5=A6A();g.wU=0;h=AFN(g,15,0);if(h){c=new RP;f=new R;T(f);Bb(c,S(E(E(Bd(f,h),B(19)),g.cb)));J(c);}Uc(d,c);d.qG=0;d.pk=0;d.Fy=1;d.Fe=0;d.w1=$rt_createByteArray(1);d.Ia=$rt_createByteArray(512);d.gR=g;d.oW=$rt_createByteArray(512);d.Fy=1;d.Fe=1;AH8(f,d);g=new Tf;g.h_=$rt_createByteArray(4);g.jy=0;g.d_=$rt_createIntArray(80);Qd(g);while
(true){d=KW(f);if(!BW(B(186),d)){if(AJd(f)<=0&&BW(B(187),d))return;c=new BA;Bb(c,B(185));J(c);}i=KW(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);O8(f,j);h=I$(f);l=$rt_createByteArray(h);O8(f,l);if(Dx(BaU,i))continue;a:{AES(g,l,0,h);AJZ(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){m=0;while(m<h){if(b[m]!=e[m]){h=0;break a;}m=m+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BA;f=new R;T(f);Bb(c,S(E(E(f,B(188)),i)));J(c);}BI(BaU,i,l);if(!BW(B(189),KW(f)))break;}c
=new BA;Bb(c,B(185));J(c);}
function ABw(){BaU=CZ();}
function BA(){Cq.call(this);}
function Kh(){IR.call(this);}
function AXa(a,b){Ce(a,b);return a;}
function AYw(a,b,c,d){J3(a,b,c,d);return a;}
function ART(a,b){Ib(a,b);return a;}
function A4p(a,b,c,d,e){La(a,b,c,d,e);return a;}
function A7E(a,b,c){J4(a,b,c);return a;}
function ASd(a,b,c,d,e){La(a,b,c,d,e);return a;}
function A0D(a,b,c,d){J3(a,b,c,d);return a;}
function AHY(a,b){var c;if(b>=0&&b<a.b6)return a.bp.data[b];c=new BD;Z(c);J(c);}
function PR(a){return a.b6;}
function A0M(a){return S(a);}
function A0W(a,b){N7(a,b);}
function A6S(a,b,c){J4(a,b,c);return a;}
function E5(){}
function Yy(){C.call(this);}
function FF(){C.call(this);this.mp=0;}
var Ba5=null;var Ba6=null;var Ba7=null;var Ba8=null;var Ba9=null;var Ba$=null;function AYC(a){var b=new FF();ACS(b,a);return b;}
function ACS(a,b){a.mp=b;}
function BX(b){var c;if(b>=Ba8.data.length)return AYC(b);c=Ba8.data[b];if(c===null){c=AYC(b);Ba8.data[b]=c;}return c;}
function A7L(a,b){if(a===b)return 1;return b instanceof FF&&b.mp==a.mp?1:0;}
function A7u(a){return a.mp;}
function UQ(b){var c,d;c=new BC;d=$rt_createCharArray(1);d.data[0]=b;NZ(c,d);return c;}
function NE(b){return b>=65536&&b<=1114111?1:0;}
function Dw(b){return (b&64512)!=55296?0:1;}
function D1(b){return (b&64512)!=56320?0:1;}
function PF(b){return !Dw(b)&&!D1(b)?0:1;}
function K_(b,c){return Dw(b)&&D1(c)?1:0;}
function E4(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JJ(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jg(b){return (56320|b&1023)&65535;}
function Gh(b){return Hy(b)&65535;}
function Hy(b){return AM1(b).toLowerCase().charCodeAt(0);}
function F1(b){return Hw(b)&65535;}
function Hw(b){return AM1(b).toUpperCase().charCodeAt(0);}
function LM(b,c){if(c>=2&&c<=36){b=WB(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function WB(b){var c,d,e,f,g,h,i,j,k;if(Ba6===null){if(Ba9===null)Ba9=AJ$();c=(Ba9.value!==null?$rt_str(Ba9.value):null);d=AFT(H5(c));e=L_(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=L_(d);h=h+1|0;}Ba6=f;}f=Ba6.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=Bw(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function J6(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function JE(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=JJ(b);d[1]=Jg(b);return c;}
function Dp(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&PF(b&65535))return 19;if(Ba7===null){if(Ba$===null)Ba$=AHs();Ba7=AY0((Ba$.value!==null?$rt_str(Ba$.value):null));}d=Ba7.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Bt)e=f+1|0;else{if(b>=g.xJ)return g.D_.data[b-g.xJ|0];c=f-1|0;}}return 0;}
function Mg(b){a:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function JB(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Dp(b)!=16?0:1;}
function WY(b){switch(Dp(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function R6(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return WY(b);}return 1;}
function AEu(a,b){return a.mp-b.mp|0;}
function AZo(a,b){return AEu(a,b);}
function AIi(){Ba5=D($rt_charcls());Ba8=H(FF,128);}
function AJ$(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHs(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function Ev(){C.call(this);}
function Yk(a,b){Tb(a,b,0,b.data.length);}
function APs(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.qT(f[c]);e=e+1|0;c=g;}}
function Jo(){Ev.call(this);this.kQ=null;}
function Ba_(a){var b=new Jo();Qh(b,a);return b;}
function Qh(a,b){a.kQ=b;}
function AC0(){var a=this;Jo.call(a);a.HJ=0;a.u9=0;a.hv=null;a.ov=null;a.B_=null;}
function AU2(a,b){var c=new AC0();A7m(c,a,b);return c;}
function A7m(a,b,c){Qh(a,b);b=new R;T(b);a.hv=b;a.ov=$rt_createCharArray(32);a.HJ=c;a.B_=AGI();}
function Yl(a,b,c,d){var $$je;if(a.kQ===null)a.u9=1;if(!(a.u9?0:1))return;a:{try{a.kQ.jB(b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}a.u9=1;}}
function V6(a,b,c,d){var e,f,g,h,i;e=b.data;f=AKE(b,c,d-c|0);e=$rt_createByteArray(Df(16,B4(e.length,1024)));g=MA(e);h=UW(SQ(UY(a.B_),Bba),Bba);while(true){i=G9(N6(h,f,g,1));Yl(a,e,0,g.L);DC(g);if(!i)break;}while(true){i=G9(Qc(h,g));Yl(a,e,0,g.L);DC(g);if(!i)break;}}
function AJh(a,b){a.ov.data[0]=b;V6(a,a.ov,0,1);}
function Lr(a,b){E(a.hv,b);Le(a);}
function ADq(a,b){Ce(Bd(a.hv,b),10);Le(a);}
function Cm(a,b){Ce(E(a.hv,b),10);Le(a);}
function ADQ(a,b){Ce(JL(a.hv,b),10);Le(a);}
function AMB(a){AJh(a,10);}
function Le(a){var b;b=a.hv.b6<=a.ov.data.length?a.ov:$rt_createCharArray(a.hv.b6);ACB(a.hv,0,a.hv.b6,b,0);V6(a,b,0,a.hv.b6);AKK(a.hv,0);}
function ZV(){Ev.call(this);}
function AUA(a,b){$rt_putStdout(b);}
function GA(){C.call(this);}
function J0(){GA.call(this);this.kG=null;}
function Bbb(a){var b=new J0();Uc(b,a);return b;}
function Uc(a,b){a.kG=b;}
function AJd(a){return a.kG.xp();}
function Q0(){}
function RL(){J0.call(this);this.dY=null;}
function Qu(a){var b=new RL();AH8(b,a);return b;}
function AH8(a,b){Uc(a,b);a.dY=$rt_createByteArray(8);}
function O8(a,b){var c;c=b.data;return a.kG.oO(b,0,c.length);}
function Pm(a){var b,c;b=a.kG.Dw();if(b>=0)return b<<24>>24;c=new F4;Z(c);J(c);}
function Ld(a,b){var c,d;c=0;while(c<b){d=a.kG.oO(a.dY,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function AMr(a){return $rt_longBitsToDouble(VH(a));}
function ACY(a){return $rt_intBitsToFloat(I$(a));}
function OJ(a,b){SG(a,b,0,b.data.length);}
function SG(a,b,c,d){var e,f;if(d<0){e=new BD;Z(e);J(e);}if(!d)return;if(a.kG===null){e=new Eg;Z(e);J(e);}if(b===null){e=new Eg;Z(e);J(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.kG.oO(b,c,d);if(f<0){e=new F4;Z(e);J(e);}c=c+f|0;d=d-f|0;}return;}e=new BD;Z(e);J(e);}
function I$(a){var b;if(Ld(a,4)<0){b=new F4;Z(b);J(b);}return (a.dY.data[0]&255)<<24|(a.dY.data[1]&255)<<16|(a.dY.data[2]&255)<<8|a.dY.data[3]&255;}
function VH(a){var b;if(Ld(a,8)<0){b=new F4;Z(b);J(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.dY.data[0]&255)<<24|(a.dY.data[1]&255)<<16|(a.dY.data[2]&255)<<8|a.dY.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.dY.data[4]&255)<<24|(a.dY.data[5]&255)<<16|(a.dY.data[6]&255)<<8|a.dY.data[7]&255),new Long(4294967295, 0)));}
function L3(a){var b;if(Ld(a,2)<0){b=new F4;Z(b);J(b);}return ((a.dY.data[0]&255)<<24>>16|a.dY.data[1]&255)<<16>>16;}
function AMF(a){var b;if(Ld(a,2)<0){b=new F4;Z(b);J(b);}return ((a.dY.data[0]&255)<<8|a.dY.data[1]&255)&65535;}
function KW(a){return AJK(a,AMF(a));}
function AJK(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);SG(a,c,0,b);return ATi(c,d,0,b);}
function ATi(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Ir;Bb(m,B(190));J(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Ir;Bb(m,B(191));J(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Ir;Bb(m,B(191));J(m);}f=j+1|0;if(f>=e){m=new Ir;Bb(m,B(191));J(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return IJ(c,0,g);}m=new Ir;Bb(m,B(191));J(m);}
function ANd(){var a=this;GA.call(a);a.xB=null;a.kC=0;a.Hb=0;a.q5=0;}
function Ju(a){var b=new ANd();AQj(b,a);return b;}
function AQj(a,b){var c;c=b.data.length;a.xB=b;a.kC=0;a.Hb=0;a.q5=0+c|0;}
function A03(a){var b,c,d;if(a.kC>=a.q5)b=(-1);else{c=a.xB.data;d=a.kC;a.kC=d+1|0;b=c[d]&255;}return b;}
function AOq(a,b,c,d){var e,f,g,h,i;e=B4(d,a.q5-a.kC|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.xB.data;i=a.kC;a.kC=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A18(a){return a.q5-a.kC|0;}
function CI(){C.call(this);this.e2=null;}
function Bbc(){var a=new CI();C5(a);return a;}
function C5(a){a.e2=null;}
function SY(a){return a.e2!==null?a.e2:B(9);}
function AXt(a,b){a.e2=b;return a;}
function Nj(b){var c,d,e;c=Pm(b);if(!c){b=new Nl;C5(b);return b;}d=AAh(c);e=$rt_createByteArray(L3(b));OJ(b,e);d.e2=AUE(e,B(31));d.gv(b);return d;}
function MP(b,c){LP(c,b.e5());if(!b.e5())return;AOF(c,SY(b));b.gC(c);}
function AAh(b){var c;switch(b){case 0:c=new Nl;C5(c);return c;case 1:c=new OM;C5(c);return c;case 2:c=new UL;C5(c);return c;case 3:c=new Mj;C5(c);return c;case 4:c=new L1;C5(c);return c;case 5:c=new Y9;C5(c);return c;case 6:c=new QV;C5(c);return c;case 7:c=new MZ;C5(c);return c;case 8:c=new OY;C5(c);return c;case 9:return Gv();case 10:return DH();default:}return null;}
function Kc(){CI.call(this);this.b2=null;}
function DH(){var a=new Kc();AYR(a);return a;}
function AYR(a){C5(a);a.b2=CZ();}
function APn(a,b){var c;c=W3(Xj(a.b2));while(Lb(c)){MP(T_(c),b);}LP(b,0);}
function AXT(a,b){var c;Xx(a.b2);while(true){c=Nj(b);if(!c.e5())break;BI(a.b2,SY(c),c);}}
function AZZ(a){return 10;}
function Ff(a,b,c){var d;d=a.b2;c.e2=b;BI(d,b,c);}
function DW(a,b,c){var d,e;d=a.b2;e=new OM;C5(e);e.r_=c;e.e2=b;BI(d,b,e);}
function CH(a,b,c){var d,e;d=a.b2;e=Vj(c);e.e2=b;BI(d,b,e);}
function E1(a,b,c){var d,e;d=a.b2;e=new Mj;C5(e);e.qS=c;e.e2=b;BI(d,b,e);}
function ANp(a,b,c){var d,e;d=a.b2;e=new L1;C5(e);e.rP=c;e.e2=b;BI(d,b,e);}
function Lf(a,b,c){var d,e;d=a.b2;e=A6N(c);e.e2=b;BI(d,b,e);}
function HM(a,b,c){var d,e;d=a.b2;e=new OY;C5(e);e.rT=c;e.e2=b;BI(d,b,e);}
function We(a,b,c){var d,e;d=a.b2;e=new MZ;C5(e);e.nX=c;e.e2=b;BI(d,b,e);}
function Ka(a,b,c){var d;d=a.b2;c.e2=b;BI(d,b,c);}
function Gc(a,b,c){DW(a,b,(!c?0:1)<<24>>24);}
function Ex(a,b){return Dx(a.b2,b);}
function EW(a,b){return !Dx(a.b2,b)?0:Co(a.b2,b).r_;}
function Ck(a,b){return !Dx(a.b2,b)?0:Co(a.b2,b).h$;}
function DK(a,b){return !Dx(a.b2,b)?0:Co(a.b2,b).qS;}
function V9(a,b){return !Dx(a.b2,b)?Long_ZERO:Co(a.b2,b).rP;}
function G5(a,b){return !Dx(a.b2,b)?0.0:Co(a.b2,b).gy;}
function Fg(a,b){return !Dx(a.b2,b)?B(9):Co(a.b2,b).rT;}
function LY(a,b){return !Dx(a.b2,b)?$rt_createByteArray(0):Co(a.b2,b).nX;}
function Gx(a,b){return !Dx(a.b2,b)?DH():Co(a.b2,b);}
function Ee(a,b){return !Dx(a.b2,b)?Gv():Co(a.b2,b);}
function Gb(a,b){return !EW(a,b)?0:1;}
function ABU(a){return AOw(a.b2);}
function Bm(){Bn.call(this);}
var Bbd=0;var Bbe=null;var Bbf=0;var Bbg=0;var Bbh=0;var Bbi=0.0;var Bbj=0;var Bbk=null;var Bbl=0;var Bbm=0;var Bbn=0;var Bbo=0.0;var Bbp=0.0;var Bbq=0.0;var Bbr=0.0;var Bbs=0.0;var Bbt=0.0;var Bbu=0.0;var Bbv=0.0;var Bbw=0.0;var Bbx=0;var Bby=0.0;var Bbz=0.0;var BbA=0.0;var BbB=0.0;var BbC=0;var BbD=0;var BbE=0;var BbF=0.0;var BbG=0.0;var BbH=0.0;var BbI=0;var BbJ=0;var BbK=0;var BbL=0;var BbM=null;var BbN=0;var BbO=null;var BbP=0;var BbQ=null;var BbR=0;var BbS=null;var BbT=null;var BbU=null;var BbV=null;var BbW
=null;var BbX=null;var BbY=null;var BbZ=null;var Bb0=null;var Bb1=0;var Bb2=null;var Bb3=null;var Bb4=null;var Bb5=null;var Bb6=null;var Bb7=null;var Bb8=null;var Bb9=null;var Bb$=null;var Bb_=null;var Bca=null;var Bcb=null;var Bcc=null;var Bcd=null;var Bce=Long_ZERO;var Bcf=0;function BM(){BM=Bl(Bm);A4M();}
function Y(b){BM();a:{switch(b){case 2884:LF(2884);break a;case 2896:Bbg=1;break a;case 2903:Bbx=1;break a;case 2912:BbD=1;break a;case 2929:LF(2929);break a;case 3008:Bbh=1;break a;case 3042:LF(3042);break a;case 3553:Bbf=1;break a;case 32823:LF(32823);break a;case 32826:break;default:break a;}}}
function GN(b){var c;BM();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bf();A_Y.depthFunc(c);}
function CB(b){BM();BbL=b;}
function Hr(){BM();switch(BbL){case 5888:break;case 5889:return BbO.data[BbP];case 5890:return BbQ.data[BbR];default:}return BbM.data[BbN];}
function Cp(){BM();ZH(Hr());}
function FJ(b,c,d,e){BM();Bf();Baj.data[0]=b;Baj.data[1]=c;Baj.data[2]=d;Baj.data[3]=e;A_Y.viewport(b,c,d,e);}
function Db(b){BM();Bf();A_Y.clear(b);}
function N5(b,c,d,e,f,g){var h,i,j,k;BM();h=Hr();i=c-b;h.ek=2.0/i;h.ei=0.0;h.ej=0.0;h.el=0.0;h.eo=0.0;j=e-d;h.ep=2.0/j;h.em=0.0;h.en=0.0;h.eq=0.0;h.es=0.0;k=g-f;h.et=2.0/k;h.er=0.0;h.gL= -(c+b)/i;h.gM= -(e+d)/j;h.gN=(g+f)/k;h.gO=1.0;}
function Bj(b,c,d){var e;BM();O5(BbW,b,c,d);e=Hr();VG(e,BbW,e);if(!Bbj)return;e=new BB;Bb(e,B(192));J(e);}
function Pt(b,c,d,e){BM();Bf();A_Y.clearColor(b,c,d,e);}
function Bc(b){BM();a:{switch(b){case 2884:KP(2884);break a;case 2896:Bbg=0;break a;case 2903:Bbx=0;break a;case 2912:BbD=0;break a;case 2929:KP(2929);break a;case 3008:Bbh=0;break a;case 3042:KP(3042);break a;case 3553:Bbf=0;break a;case 32823:KP(32823);break a;case 32826:break;default:break a;}}}
function BJ(b,c,d,e){BM();Bbo=b;Bbp=c;Bbq=d;Bbr=e;}
function Vi(b,c,d,e,f,g,h,i,j){var k,l,m,n;BM();Bf();if(j===null){k=A_Y;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=BT(j);k=Bak;n=0;while(n<m){h=(AJO(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bak.buffer,0,m);A_Y.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function BO(){BM();BbZ.hB= -BbZ.hB;Bb0.hB= -Bb0.hB;BbZ.hA= -BbZ.hA;Bb0.hA= -Bb0.hA;BbZ.hC= -BbZ.hC;Bb0.hC= -Bb0.hC;}
function Ca(){BM();a:{switch(BbL){case 5888:break;case 5889:if(BbP>=(BbO.data.length-1|0)){Cm(Ez(),B(193));break a;}BbP=BbP+1|0;Hn(BbO.data[BbP],BbO.data[BbP-1|0]);break a;case 5890:if(BbR>=(BbQ.data.length-1|0)){Cm(Ez(),B(194));break a;}BbR=BbR+1|0;Hn(BbQ.data[BbR],BbQ.data[BbR-1|0]);break a;default:}if(BbN>=(BbM.data.length-1|0))Cm(Ez(),B(195));else{BbN=BbN+1|0;Hn(BbM.data[BbN],BbM.data[BbN-1|0]);}}}
function Bs(b,c,d,e){var f;BM();O5(BbW,c,d,e);f=Hr();VO(f,b*0.01745329238474369,BbW,f);if(!Bbj)return;f=new BB;Bb(f,B(192));J(f);}
function BS(){BM();a:{switch(BbL){case 5888:break;case 5889:if(BbP<=0){Cm(Ez(),B(196));break a;}BbP=BbP-1|0;break a;case 5890:if(BbR<=0){Cm(Ez(),B(197));break a;}BbR=BbR-1|0;break a;default:}if(BbN<=0)Cm(Ez(),B(198));else BbN=BbN-1|0;}}
function PZ(b,c){BM();a:{switch(b){case 2982:break;case 2983:YF(BbO.data[BbP],c);break a;default:}YF(BbM.data[BbN],c);}}
function C7(b,c,d){var e;BM();O5(BbW,b,c,d);ADM(Hr(),BbW);if(!Bbj)return;e=new BB;Bb(e,B(192));J(e);}
function Dy(b,c){BM();BbE=b==1&&c==771?1:0;Bf();A_Y.blendFunc(b,c);}
function EJ(b){BM();Bf();A_Y.depthMask(!!b);}
function Cz(b,c,d,e){BM();Bf();A_Y.colorMask(!!b,!!c,!!d,!!e);}
function Cj(b,c){var d,e;BM();d=ADO(Bbe,c);Bf();e=A_Y;d=d!==null?d.FF:null;e.bindTexture(3553,d);}
function Fo(b,c,d){BM();if(!(d!=33071&&d!=10496))d=33071;Bf();A_Y.texParameteri(b,c,d);}
function IT(b,c,d){var e;BM();e=Iu(b*b+c*c+d*d);Bbs=b/e;Bbt=c/e;Bbu=d/e;}
function JF(b){var c,d,e,f,g,h;BM();c=Bb1+1|0;d=0;while(d<b){e=Bb1+1|0;Bb1=e;f=BbU;g=C0(e);h=new SI;h.AJ=e;h.s7=null;h.pr=null;h.lj=(-1);h.kL=0;BI(f,g,h);d=d+1|0;}return c;}
function ME(b){BM();BbT=b;Rz(b);}
function FG(b){var c;BM();if(!Bbj){c=Co(BbV,C0(b));if(c!==null&&c.kL>0){Sk(c.lj|0|(Bbx&&Bbg?8:0)|(!BbD?0:16)|(!Bbh?0:32)|(!Bbf?0:64));ME(c.s7);Y7(0,c.kL);BbJ=BbJ+((c.kL*6|0)/4|0)|0;BbK=BbK+(c.kL/2|0)|0;}}}
function EY(b,c){BM();if(!Bbj){Bbk=Co(BbU,C0(b));if(Bbk!==null){Bbk.lj=(-1);Bbk.kL=0;Bbj=1;}}}
function E6(){var b,c,d,e;BM();if(Bbj){Bbj=0;Bf();b=BaS.buffer;c=BaR;d=new Int32Array(b,0,c);BaR=0;e=YS(d);if(e>0){if(Bbk.pr===null){BI(BbV,C0(Bbk.AJ),Bbk);Bbk.s7=Z$();Bbk.pr=Mu();b=XF(Bbk.lj);ME(Bbk.s7);HY(34962,Bbk.pr);QJ(b);}HY(34962,Bbk.pr);TG(34962,d,35044);BbI=BbI+e|0;}}}
function Mi(b,c,d){BM();Bbo=b;Bbp=c;Bbq=d;Bbr=1.0;}
function Vk(b){BM();while(DI(b)){FG(UC(b));}}
function Pg(b){BM();a:{switch(b){case 32885:break;case 32886:Bbl=1;break a;case 32887:break a;case 32888:Bbn=1;break a;default:break a;}Bbm=1;}}
function OF(b){BM();a:{switch(b){case 32885:break;case 32886:Bbl=0;break a;case 32887:break a;case 32888:Bbn=0;break a;default:break a;}Bbm=0;}}
function VQ(){BM();return 0|(!Bbl?0:1)|(!Bbm?0:2)|(!Bbn?0:4);}
function Sk(b){var c;BM();c=XF(b);Bb2=c;AGC(c);if(Bbh)AGi(c,Bbi);AHE(c,Bbo,Bbp,Bbq,Bbr);if(BbD){ANN(c,(!BbE?0:2)+BbC|0);AG6(c,Bby,Bbz,BbA,BbB);AJt(c,BbH);AAo(c,BbF,BbG);}AHB(c,BbM.data[BbN]);ABL(c,BbO.data[BbP]);AAJ(c,BbQ.data[BbR]);if(Bbx&&Bbg){AMv(c,Bbs,Bbt,Bbu);ABC(c,BbZ,Bb0);}AIZ(c,Bbv,Bbw);}
function AFM(b,c,d,e){var f;BM();if(Bbj){if(b!=7)Cm(Ez(),B(199));else{if(Bbk.lj==(-1))Bbk.lj=VQ();else if(Bbk.lj!=VQ())Cm(Ez(),B(200));f=Bbk;f.kL=f.kL+d|0;Bf();e=e;if((BaR+e.length|0)<BaS.length){f=BaS;b=BaR;f.set(e,b);BaR=BaR+e.length|0;}}}else{BbI=BbI+YS(e)|0;BbJ=BbJ+d|0;Sk(0|(!Bbl?0:1)|(!Bbm?0:2)|(!Bbn?0:4)|(Bbx&&Bbg?8:0)|(!BbD?0:16)|(!Bbh?0:32)|(!Bbf?0:64));ME(Bb2.wf);HY(34962,Bb2.vE);if(!Bb2.uS){Bb2.uS=1;TG(34962,Bb3,35048);}f=A_Y;e=e;f.bufferSubData(34962,0,e);if(b==7){Y7(c,d);BbK=BbK+(d/2|0)|0;}else{a:
{b:{switch(b){case 1:break;case 2:case 4:break b;case 3:b=3;BbK=BbK+(d-1|0)|0;break a;case 5:b=5;BbK=BbK+(d-2|0)|0;break a;case 6:b=6;BbK=BbK+(d-2|0)|0;break a;default:break b;}b=1;BbK=BbK+(d/2|0)|0;break a;}b=4;BbK=BbK+(d/3|0)|0;}A_Y.drawArrays(b,c,d);}}}
function Y7(b,c){var d,e,f,g,h,i,j,k;BM();if(BbS===null){if(Bbd)d=Xn($rt_createIntArray(49200));else{e=A3O(196800,1);e.k$=Bcg;d=AHr(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;k=h<<16;O4(d,g|k);O4(d,j|k);O4(d,i|j<<16);f=f+1|0;}Ec(d);BbS=Mu();HY(34963,BbS);i=BT(d);e=new Int32Array(Bak.buffer);j=0;while(j<i){k=UC(d);e[j]=k;j=j+1|0;}d=Bak.buffer;i=i*4|0;e=new Uint8Array(d,0,i);A_Y.bufferData(34963,e,35044);}if(!BbT.u_){BbT.u_=1;HY(34963,BbS);}i=(c*6|0)/4|0;b=(b*6|0)/4|0;Bf();A_Y.drawElements(4,i,5123,
b);}
function Zc(b,c){BM();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BbC=2;break a;}BbC=1;}}}
function KX(b,c){BM();a:{switch(b){case 2914:break;case 2915:BbF=c;break a;case 2916:BbG=c;break a;default:break a;}BbH=c;}}
function Hu(b,c,d,e){var f,g,h;BM();f=Hr();g=b*0.01745329238474369*0.5;h=Qz(g)/LT(g);f.ek=h/c;f.ei=0.0;f.ej=0.0;f.el=0.0;f.eo=0.0;f.ep=h;f.em=0.0;f.en=0.0;f.eq=0.0;f.es=0.0;b=e+d;c=e-d;f.et=b/c;f.er=(-1.0);f.gL=0.0;f.gM=0.0;f.gN=2.0*e*d/c;f.gO=0.0;}
function A4M(){var b;Bf();Bbd=1;Bbe=APK(256);Bbf=0;Bbg=0;Bbh=0;Bbi=0.10000000149011612;Bbj=0;Bbk=null;Bbl=0;Bbm=0;Bbn=0;Bbo=1.0;Bbp=1.0;Bbq=1.0;Bbr=1.0;Bbs=1.0;Bbt=0.0;Bbu=0.0;Bbv=0.0;Bbw=0.0;Bbx=0;Bby=1.0;Bbz=1.0;BbA=1.0;BbB=1.0;BbC=1;BbD=0;BbE=0;BbF=1.0;BbG=1.0;BbH=1.0;BbI=0;BbJ=0;BbK=0;BbL=5888;BbM=H(Jm,32);BbN=0;BbO=H(Jm,6);BbP=0;BbQ=H(Jm,16);BbR=0;b=0;while(b<BbM.data.length){BbM.data[b]=FI();b=b+1|0;}b=0;while(b<BbO.data.length){BbO.data[b]=FI();b=b+1|0;}b=0;while(b<BbQ.data.length){BbQ.data[b]=FI();b
=b+1|0;}BbS=null;BbT=null;BbU=CZ();BbV=CZ();BbW=new Ye;BbX=new Id;BbY=new Id;BbZ=new Id;Bb0=new Id;Bb1=0;Bb2=null;Bb3=new Int32Array(525000);Bb4=null;Bb5=null;Bb6=null;Bb7=null;Bb8=null;Bb9=APK(256);Bb$=LK(FI());Bb_=$rt_createFloatArray(16);Bca=$rt_createFloatArray(16);Bcb=FI();Bcc=FI();Bcd=new Id;Bce=Long_ZERO;Bcf=0;}
function AHg(){Bm.call(this);}
function I1(){}
function Ml(){var a=this;C.call(a);a.P=null;a.vB=0;a.cp=0;a.cr=0;a.bm=null;a.i=null;a.cx=null;a.a=null;a.bI=null;a.gb=null;a.Ij=null;a.D=0;a.cf=null;a.jl=null;a.k=null;a.f_=null;a.cI=null;a.bn=0;a.co=0;a.GA=0;a.H6=0;a.Hk=null;a.KL=0;a.pe=null;a.vh=0;a.n=null;a.d=null;a.rr=null;a.Aj=null;a.uv=null;a.yn=null;a.h9=0;a.os=null;a.N=0;a.b_=0;a.Il=0;a.lC=0;a.tK=0;a.oK=null;}
var Bch=null;var Bci=0;function A9U(a,b){var c=new Ml();AB8(c,a,b);return c;}
function AB8(a,b,c){var d,e;a.P=A0F(a);a.vB=0;d=new R$;d.dy=20.0;d.CR=1.0;d.lu=0.0;d.tA=CF();d.sc=Long_div(AFt(),Long_fromInt(1000000));d.pO=1.0;a.bm=d;a.gb=null;a.D=0;a.k=null;d=new XC;d.qM=B(9);d.sB=B(9);d.oc=CF();d.fY=a;a.f_=d;d=new Q1;d.s3=0;d.fb=0.0;d.qj=null;d.op=HE(16);d.c=a;e=new U9;e.eF=null;e.iY=0.0;e.sa=0.0;e.iF=0;e.j3=0;e.BJ=AAy();e.e4=a;d.e$=e;a.cI=d;a.bn=0;a.co=0;a.Hk=null;a.KL=0;a.vh=0;a.lC=6000;a.tK=100;a.oK=HE(16);P3(new JV,0.0);a.n=null;a.Aj=null;d=new QW;L();S4(d,Bcj.bk);d.KZ=$rt_createFloatArray(256);d.Kl
=$rt_createFloatArray(256);d.JV=$rt_createFloatArray(256);d.HT=$rt_createFloatArray(256);d.Ha=0;a.uv=d;d=new Tc;S4(d,Bck.bk);d.He=$rt_createFloatArray(256);d.JN=$rt_createFloatArray(256);d.Ib=$rt_createFloatArray(256);d.HG=$rt_createFloatArray(256);a.yn=d;a.h9=0;a.os=B(9);a.N=0;a.b_=0;a.Il=0;a.GA=b;a.H6=c;a.vB=0;d=new ZO;Wc(d,B(201));d.Fg=1;VK(d);a.cp=b;a.cr=c;a.vB=0;Bch=a;}
function AOR(a,b){var c,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(a.k instanceof Uw)){if(a.k!==null)a.k.pV();if(b===null&&a.i===null)b=AS3();else if(b===null&&a.a.b0<=0){b=new Tz;Fp(b);A_E=DH();try{$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}a.k=b;if(b===null){$p=1;continue _;}if(a.N){if(a.a!==null)Xv(a.a.eV);a.N=0;}c=G8(a.cp,a.cr);OZ(b,a,c.fZ,c.fS);a.vh=0;}return;case 1:AEr(a);if(I()){break _;}return;case 2:a:
{try{AER();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}a.k=b;if(b!==null){if(a.N){if(a.a!==null)Xv(a.a.eV);a.N=0;}c=G8(a.cp,a.cr);OZ(b,a,c.fZ,c.fS);a.vh=0;return;}$p=1;continue _;default:F2();}}Dh().s(a,b,c,$p);}
function AHc(a){var b,c,d,e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.h9=1;a.cp=Jz();a.cr=JK();a.rr=new Z8;Y(3553);A_Y.clearDepth((-1.0));Y(2929);GN(515);Y(3008);Bbi=0.10000000149011612;A_Y.cullFace(1029);CB(5889);Cp();CB(5888);a.d=A_o();b=new SA;c=a.d;b.pP=CZ();b.Cm=CZ();b.lS=K0(1);b.hl=AEy(1048576);b.ne=AEy(1048576);b.r3=0;b.tx=0;b.xq=c;a.cf=b;c=
new SM;d=a.d;b=B(202);e=a.cf;$p=1;case 1:AIA(c,d,b,e);if(I()){break _;}a.jl=c;b=K0(256);DC(b);H0(b,256);a.cx=A83(a,a.cf);FJ(0,0,a.cp,a.cr);if(a.Aj!==null&&a.gb!==null){c=X0();K3(c,8,8,8,$rt_createByteArray(512),$rt_createByteArray(512));$p=3;continue _;}if(a.i===null){b=AS3();$p=2;continue _;}b=new Kx;c=a.i;d=a.cf;b.cw=H(HQ,3);b.nr=new Dd;if(c!==null)b.kI=c;b.hn=d;f=0;while(f<3){b.cw.data[f]=BV();f=f+1|0;}a.bI=b;b=new Jd;JH(b);b.ht=BV();b.n9=new Dd;b.n3=0;b.ck=a;a.pe=b;g=CF();f=0;if(!a.h9)return;if(a.i!==null)HN(a.i);if
(!a.D)EV(a.bm);else{h=a.bm.da;EV(a.bm);a.bm.da=h;}i=0;if(i<a.bm.ih){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cI;h=a.bm.da;$p=4;continue _;case 2:AOR(a,b);if(I()){break _;}b=new Kx;c=a.i;d=a.cf;b.cw=H(HQ,3);b.nr=new Dd;if(c!==null)b.kI=c;b.hn=d;f=0;while(f<3){b.cw.data[f]=BV();f=f+1|0;}a.bI=b;b=new Jd;JH(b);b.ht=BV();b.n9=new Dd;b.n3=0;b.ck=a;a.pe=b;g=CF();f=0;if(!a.h9)return;if(a.i!==null)HN(a.i);if(!a.D)EV(a.bm);else{h=a.bm.da;EV(a.bm);a.bm.da=h;}i=0;if(i<a.bm.ih){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,
a.bm.da);b=a.cI;h=a.bm.da;$p=4;continue _;case 3:ADi(a,c);if(I()){break _;}b=new Kx;c=a.i;d=a.cf;b.cw=H(HQ,3);b.nr=new Dd;if(c!==null)b.kI=c;b.hn=d;f=0;while(f<3){b.cw.data[f]=BV();f=f+1|0;}a.bI=b;b=new Jd;JH(b);b.ht=BV();b.n9=new Dd;b.n3=0;b.ck=a;a.pe=b;g=CF();f=0;if(!a.h9)return;if(a.i!==null)HN(a.i);if(!a.D)EV(a.bm);else{h=a.bm.da;EV(a.bm);a.bm.da=h;}i=0;if(i<a.bm.ih){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cI;h=a.bm.da;$p=4;case 4:ALS(b,h);if(I()){break _;}if(!(Jz()==a.cp&&JK()==a.cr))
{a.cp=Jz();a.cr=JK();i=a.cp;j=a.cr;a.cp=i;a.cr=j;if(a.k!==null){b=G8(i,j);j=b.fZ;i=b.fS;OZ(a.k,a,j,i);}}if(a.d.k7){try{k=Long_fromInt(5);$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){d=$$je;}else{throw $$e;}}d.iO();}f=f+1|0;a.D=a.k!==null&&a.k.rq()?1:0;while(true){k=CF();l=Long_add(g,Long_fromInt(1000));if(Long_lt(k,l))break;b=new R;T(b);b=E(Bd(E(b,B(203)),f),B(204));AKx();a.os=B0(Bd(b,Bcl));Bcl=0;f=0;g=l;}if(!a.h9)return;if(a.i!==null)HN(a.i);if(!a.D)EV(a.bm);else{h=a.bm.da;EV(a.bm);a.bm.da
=h;}i=0;if(i<a.bm.ih){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cI;h=a.bm.da;continue _;case 5:AAt(a);if(I()){break _;}i=i+1|0;if(i<a.bm.ih){a.bn=a.bn+1|0;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cI;h=a.bm.da;$p=4;continue _;case 6:a:{try{AJf(k);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){d=$$je;}else{throw $$e;}}d.iO();}f=f+1|0;a.D=a.k!==null&&a.k.rq()?1:0;while(true){k=CF();l=Long_add(g,Long_fromInt(1000));if(Long_lt(k,l))break;b=new R;T(b);b=E(Bd(E(b,B(203)),f),
B(204));AKx();a.os=B0(Bd(b,Bcl));Bcl=0;f=0;g=l;}if(!a.h9)return;if(a.i!==null)HN(a.i);if(!a.D)EV(a.bm);else{h=a.bm.da;EV(a.bm);a.bm.da=h;}i=0;if(i<a.bm.ih){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cI;h=a.bm.da;$p=4;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AEr(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(KA()&&!a.N){a.N=1;RR(a.rr);b=null;$p=1;continue _;}return;case 1:AOR(a,b);if(I()){break _;}a.b_=a.bn+10000|0;return;default:F2();}}Dh().s(a,b,$p);}
function AEx(a){var b,c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.k!==null)return;b=new YG;Fp(b);c=new FP;$p=1;case 1:ANL(c);if(I()){break _;}$p=2;case 2:AOR(a,b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,$p);}
function AKD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(!b&&a.co>0)){if(!b)N2(a.cI.e$);b:{if(b==1){c=F0(a.a.F);if(c!==null){d=c.s;e=a.a;f=a.i;g=BZ(c).t3(c,f,e);if(g===c){if(g===null)break b;if(g.s==d)break b;}a.a.F.br.data[a.a.F.J]=g;AFy(a.cI.e$);if(!g.s)a.a.F.br.data[a.a.F.J]=null;}}}if
(a.n!==null){if(a.n.e8==1){if(b)break a;h=a.n.tO;i=a.a;j=i.F;k=R4(j,j.J);if(k===null)l=1;else{B3();l=Bcm.data[k.bX].xd();}if(l>0){h.eY(i,l);c=F0(i.F);if(c!==null&&h instanceof F8){B3();Bcm.data[c.bX].xk(c);if(c.s<=0)Ta(i);}}return;}if(!a.n.e8){m=a.n.c6;d=a.n.c7;n=a.n.c8;o=a.n.c2;L();p=Bcn.data[O(a.i,m,d,n)];if(!b){AEi(a.i,m,d,n,a.n.c2);if(p===Bco)break a;ACT(a.P,m,d,n);return;}k=F0(a.a.F);q=O(a.i,m,d,n);if(q>0){p=Bcn.data[q];h=a.i;f=a.a;$p=1;continue _;}if(k===null)return;b=k.s;f=a.i;if(BZ(k).lh(k,f,m,d,n,o))N2(a.cI.e$);if
(!k.s){a.a.F.br.data[a.a.F.J]=null;return;}if(k.s!=b)Qj(a.cI.e$);}}else if(!b&&!(a.P instanceof CK))a.co=10;}}return;case 1:$z=p.r5(h,m,d,n,f);if(I()){break _;}b=$z;if(b)return;if(k===null)return;b=k.s;f=a.i;if(BZ(k).lh(k,f,m,d,n,o))N2(a.cI.e$);if(k.s){if(k.s!=b)Qj(a.cI.e$);return;}a.a.F.br.data[a.a.F.J]=null;return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AAt(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bch=a;$p=1;case 1:a:{ABs(a);if(I()){break _;}if(a.P instanceof CK){b=0;while(true){if(b>=9)break a;a.a.F.br.data[b].s=64;b=b+1|0;}}}if(!a.N){ALy(a.rr);Lu(0);}ADH(a.pe);if(!a.D&&a.i!==null)ACu(a.P);c=3553;d=a.cf;e=B(205);$p=2;case 2:$z=AB_(d,e);if(I()){break _;}f=$z;Cj(c,f);if(a.k===null&&a.a!==null&&a.a.b0<=
0){e=null;$p=3;continue _;}b:{if(!(a.k!==null&&!a.k.n$)){while(true){if(!Dg()){if(a.co>0)a.co=a.co-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(a.P.gV)break b;if(a.co>0)break b;if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);break b;}EL(a.P);break b;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;if
(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p=15;continue _;}if(Bi()==a.d.g3.bt&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g7.bt)continue;if(!a.N)continue;Fb(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}c:{b=Hb();if(b){d=a.a.F;if
(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break c;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.N&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if(!Cv())continue;if(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bcp.b)g=Bcq.b;if(g==Bcr.b)g=Bcs.b;if(g==Bco.b)g=Bct.b;H$(a.a.F,g);}$p=6;continue _;}}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg())
{$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 3:AOR(a,e);if(I()){break _;}d:{if(!(a.k!==null&&!a.k.n$)){while(true){if(!Dg()){if(a.co>0)a.co=a.co-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f
=a.k===null&&Cb(0)&&a.N?1:0;if(a.P.gV)break d;if(a.co>0)break d;if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);break d;}EL(a.P);break d;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p=15;continue _;}if
(Bi()==a.d.g3.bt&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g7.bt)continue;if(!a.N)continue;Fb(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}e:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break e;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.N&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if
(!Cv())continue;if(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bcp.b)g=Bcq.b;if(g==Bcr.b)g=Bcs.b;if(g==Bco.b)g=Bct.b;H$(a.a.F,g);}$p=6;continue _;}}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 4:ALH(e);if(I()){break _;}while(true)
{if(!Dg()){if(a.co>0)a.co=a.co-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if
(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p=15;continue _;}if(Bi()==a.d.g3.bt
&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g7.bt)continue;if(!a.N)continue;Fb(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}f:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break f;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;continue _;}}if(!a.N&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if(!Cv())continue;if
(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bcp.b)g=Bcq.b;if(g==Bcr.b)g=Bcs.b;if(g==Bco.b)g=Bct.b;H$(a.a.F,g);}$p=6;continue _;case 5:AEA(e);if(I()){break _;}while(true){b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()==a.d.g7.bt&&a.N)Fb(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0)
{if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;else break;}if(a.k!==null){e=a.k;continue _;}if
(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p=15;continue _;}if(Bi()!=a.d.g3.bt)continue;if(!a.N)continue;E0(a.a,Fs(a.a.F,a.a.F.J,1),0);}$p=8;continue _;case 6:AEr(a);if(I()){break _;}while(true){if(!Dg()){if(a.co>0)a.co=a.co-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if
(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e
=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p=15;continue _;}if(Bi()==a.d.g3.bt&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g7.bt)continue;if(!a.N)continue;Fb(a.d,4,!Cn(42)&&!Cn(54)?
1:(-1));}$p=8;continue _;}f:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break f;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.N&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if(!Cv())continue;if(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bcp.b)g=Bcq.b;if(g==Bcr.b)g=Bcs.b;if(g==Bco.b)g=Bct.b;H$(a.a.F,g);}continue _;case 7:ALH(j);if
(I()){break _;}if(Dg()){continue _;}if(CQ()){$p=10;continue _;}if(a.k===null){if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.k;$p=13;continue _;case 8:AEx(a);if(I()){break _;}while(true){if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p
=15;continue _;}if(Bi()==a.d.g3.bt&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()==a.d.g7.bt&&a.N)Fb(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k
!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;else break;}if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()!=1)continue;else break;}continue _;case 9:AKD(a,c);if(I()){break _;}a.b_=a.bn;while(true){if(C3()==1&&
Cv()){c=1;$p=12;continue _;}if(C3()==2&&Cv()&&a.n!==null){g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bcp.b)g=Bcq.b;if(g==Bcr.b)g=Bcs.b;if(g==Bco.b)g=Bct.b;H$(a.a.F,g);}while(true){if(!Dg()){if(a.co>0)a.co=a.co-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,
g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt)
{Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p=15;continue _;}if(Bi()==a.d.g3.bt&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g7.bt)continue;if(!a.N)continue;Fb(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}g:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break g;d.J=d.J-9|0;}}}if(a.k===null)break;if
(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.N&&Cv())break;if(C3())continue;if(!Cv())continue;else{c=0;continue _;}}$p=6;continue _;case 10:AEA(j);if(I()){break _;}if(CQ()){continue _;}if(a.k===null){if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.k;$p=13;continue _;case 11:AKD(a,c);if(I()){break _;}a.b_=a.bn;if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}f=a.k===
null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 12:AKD(a,c);if(I()){break _;}a.b_=a.bn;while(true)
{if(C3()==2&&Cv()&&a.n!==null){g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bcp.b)g=Bcq.b;if(g==Bcr.b)g=Bcs.b;if(g==Bco.b)g=Bct.b;H$(a.a.F,g);}while(true){if(!Dg()){if(a.co>0)a.co=a.co-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if
(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g
|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()==a.d.gx.bt&&!(a.P instanceof CK)){e=Gm(a.a.F);$p=15;continue _;}if(Bi()==a.d.g3.bt&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g7.bt)continue;if(!a.N)continue;Fb(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}h:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break h;d.J=d.J-9|0;}}}if(a.k===null)break;if(a.k===null)continue;else{e=
a.k;$p=4;continue _;}}if(!a.N&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()!=1)continue;if(!Cv())continue;else{c=1;continue _;}}$p=6;continue _;case 13:e.v0();if(I()){break _;}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 14:AKD(a,c);if(I()){break _;}a.b_=a.bn;f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,
g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 15:AOR(a,e);if(I()){break _;}while(true){if(Bi()==a.d.g3.bt&&a.N)E0(a.a,Fs(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()==a.d.g7.bt&&a.N)Fb(a.d,
4,!Cn(42)&&!Cn(54)?1:(-1));while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b_|0)>=a.bm.dy/4.0&&a.N){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.N?1:0;if(!a.P.gV&&a.co<=0){if(f&&a.n!==null&&!a.n.e8){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b_=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==
null){a.i.c1=a.d.dH;if(!a.D)DQ(a.cI);if(!a.D)DX(a.cx);if(!a.D)DJ(a.i);if(!a.D)DM(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FE(e.eV,c,f);if(!C6())continue;else break;}if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.N){if(Bi()==a.d.hb.bt)C_(a.a);if(Bi()==a.d.hj.bt){Fz(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.cg=a.d.cg?0:1;if(Bi()!=a.d.gx.bt)continue;if(a.P instanceof CK)continue;else{e=Gm(a.a.F);continue _;}}$p
=8;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ABs(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.i===null){a.lC=a.bn+6000|0;a.tK=a.bn+100|0;}if(a.bn>=a.tK&&a.i!==null&&a.k instanceof Eu){a.tK=a.bn+100|0;b=new FP;$p=2;continue _;}if(a.bn<a.lC)return;b=new FP;$p=1;case 1:ANL(b);if(I()){break _;}a.lC=a.bn+6000|0;return;case 2:ANL(b);if(I()){break _;}if(a.bn<a.lC)return;b=new FP;$p=1;continue _;default:F2();}}Dh().s(a,b,$p);}
function AMi(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=null;$p=1;case 1:ADi(a,f);if(I()){break _;}g=a.gb===null?B(206):a.gb.sN;h=new R8;i=a.f_;h.z=new Dd;h.qr=0;h.lk=0;h.qc=0;h.EG=0.0;h.ef=$rt_createIntArray(1048576);h.c4=i;h.qr=d!=1?0:1;h.lk=d!=2?0:1;h.qc=d!=3?0:1;h.eU=e;b=128<<b;j=64;if(c==1){c=b/2|0;b=b<<1;}else if(c!=2)c=b;else{b=b/2|0;j=256;c=b;}$p=2;case 2:$z
=AG$(h,g,c,b,j);if(I()){break _;}f=$z;$p=3;case 3:ADi(a,f);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADi(a,b){var c,d,e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.i=b;if(a.i!==null)AFK(a.i);if(b===null){if(a.a!==null&&A_E!==null)Ry(a.a,A_E);return;}TI(b);a.P=A0F(a);ALx(a.P,b);a.a=AFL(b,D(Mm));b.cV=a.a;if(a.a===null){c=new Mm;d=a.gb;Rj(c,b);e=new Tk;e.br=H(C9,36);e.c$=H(C9,4);e.J=0;e.Go=c;c.F=e;c.Jf=0;c.rS=0;c.xs=0;b.cV=c;AII(b,c);Jy(c,b.g5,b.gZ,b.hx,0.0,0.0);c.dP=1.6200000047683716;c.b0=20;c.ru=20;c.hz
=B(207);c.mL=a;if(d!==null){e=new R;T(e);c.JG=S(E(E(E(e,B(208)),d.sN),B(209)));}a.a=c;C_(a.a);De(b,a.a);b.cV=a.a;}if(a.a!==null){c=a.a;e=new Y_;d=a.d;e.lv=0.0;e.lE=0.0;e.v1=0;e.kA=$rt_createBooleanArray(10);e.mN=d;c.eV=e;}if(a.cx!==null)ACV(a.cx,b);if(a.bI!==null)AK3(a.bI,b);a.uv.n_=0;a.yn.n_=0;c=a.cf;e=B(210);$p=1;case 1:$z=AB_(c,e);if(I()){break _;}f=$z;g=b.jq;L();if(g!=Bcj.b)a.yn.n_=f;else a.uv.n_=f;if(a.a!==null&&A_E!==null)Ry(a.a,A_E);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function IQ(a,b){var c;if(!b){Bc(2896);Bc(16384);}else{Y(2896);Y(16384);Y(2903);c=J_(BF(0.0,(-1.0),0.5));Lo(a,c.U,c.R,c.S,0.0);Lo(a,0.30000001192092896,0.30000001192092896,0.30000001192092896,1.0);Lo(a,0.0,0.0,0.0,1.0);Lo(a,0.699999988079071,0.699999988079071,0.699999988079071,1.0);}}
function Lo(a,b,c,d,e){DC(a.oK);Ch(Ch(Ch(Ch(a.oK,b),c),d),e);Ec(a.oK);return a.oK;}
function ADt(){Bci=0;}
function Ms(){var a=this;C.call(a);a.sN=null;a.Iv=null;}
var Bcu=null;function A$D(){A$D=Bl(Ms);A8g();}
function A8g(){var b;b=BV();Bcu=b;L();M(b,Bct);M(Bcu,Bcv);M(Bcu,Bcw);M(Bcu,Bcq);M(Bcu,Bcx);M(Bcu,Bcy);M(Bcu,Bcz);M(Bcu,BcA);M(Bcu,Bcs);M(Bcu,BcB);M(Bcu,BcC);M(Bcu,BcD);M(Bcu,BcE);M(Bcu,BcF);M(Bcu,BcG);M(Bcu,BcH);M(Bcu,BcI);M(Bcu,BcJ);M(Bcu,BcK);M(Bcu,BcL);M(Bcu,BcM);M(Bcu,BcN);M(Bcu,BcO);M(Bcu,BcP);M(Bcu,BcQ);M(Bcu,BcR);M(Bcu,BcS);M(Bcu,BcT);M(Bcu,BcU);M(Bcu,BcV);M(Bcu,BcW);M(Bcu,BcX);M(Bcu,BcY);M(Bcu,BcZ);M(Bcu,Bc0);M(Bcu,Bc1);M(Bcu,Bc2);M(Bcu,Bc3);M(Bcu,Bc4);M(Bcu,Bc5);M(Bcu,Bc6);M(Bcu,Bc7);M(Bcu,Bc8);ADq(Dr(),
Bcu.q);}
function Uv(){}
function Jq(){}
function FB(){C.call(this);}
function Ko(a){return a.eX()?0:1;}
function HW(a,b){var c,d,e,f,g;c=b.data;d=a.q;e=c.length;if(e<d)b=AFr(Lz(B5(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Hq(a);while(JO(f)){c=b.data;g=e+1|0;c[e]=Il(f);e=g;}return b;}
function YA(a,b){var c,d;c=0;d=b.gz();while(d.jt()){if(!M(a,d.ho()))continue;c=1;}return c;}
function HQ(){}
function Fv(){FB.call(this);this.d3=0;}
function HF(a,b){a.wK(a.eX(),b);return 1;}
function Hq(a){var b;b=new VX;b.pH=a;b.FK=b.pH.d3;b.Eh=b.pH.eX();b.EV=(-1);return b;}
function A6$(a,b,c){c=new Hs;Z(c);J(c);}
function AC5(a,b){var c,d,e;c=a.q;d=0;a:{while(d<c){b:{e=Be(a,d);if(b!==null){if(!b.cJ(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function AU4(a,b){var c,d;if(!Jb(b,HQ))return 0;c=b;if(a.eX()!=c.eX())return 0;d=0;while(d<c.eX()){if(!LI(a.mM(d),c.mM(d)))return 0;d=d+1|0;}return 1;}
function NB(){Fv.call(this);}
function AWa(a,b,c){if(b>=0){ADb(YQ(a,b),c);return;}c=new BD;Z(c);J(c);}
function VI(a,b){var c,d;if(b>=0){c=YQ(a,b);d=ABp(c);AG1(c);return d;}c=new BD;Z(c);J(c);}
function L2(){}
function Z4(){}
function AFo(){var a=this;NB.call(a);a.s5=null;a.qJ=null;a.jf=0;}
function ST(){var a=new AFo();AY6(a);return a;}
function AY6(a){return;}
function A57(a){return a.jf;}
function PM(a){a.s5=null;a.qJ=null;a.jf=0;a.d3=a.d3+1|0;}
function YQ(a,b){var c,d,e;if(b<0){c=new BD;Z(c);J(c);}if(b<=(a.jf/2|0)){d=a.s5;e=0;while(e<b){d=d.hd;e=e+1|0;}return A0T(a,d,d===null?null:d.iH,b);}if(b>a.jf){c=new BD;Z(c);J(c);}c=a.qJ;e=b;while(e<a.jf){c=c.iH;e=e+1|0;}return A0T(a,c===null?null:c.hd,c,b);}
function ALf(){C.call(this);}
function Fq(){C.call(this);}
function ADj(){Fq.call(this);}
function AJi(){Fq.call(this);}
function DG(){}
function L7(){C.call(this);}
function Mq(){L7.call(this);this.I3=null;}
function AHo(){var a=this;Mq.call(a);a.Ap=null;a.Hc=null;a.As=null;a.xD=null;}
function A$R(a){var b=new AHo();A4B(b,a);return b;}
function A4B(a,b){var c,d,e,f,g;c=Bc9;d=AT$(c);e=new GG;f=Bc9;if(Bc$===null){g=AFk();if(g===null)Bc$=Zy(B(211));else Bc$=YU(g);}L$(e,IX(Bc$),f);a.I3=e;a.Ap=AGo(d);a.xD=Bc9;ADy(a,b);a.xD=c;}
function ADy(a,b){var c,d;a.As=b;b=new Uq;c=a.Ap;d=a.xD;b.cB=BV();b.ox=c;b.xR=d;AGk(b,a.As);a.Hc=HW(b.cB,H(C2,0));}
function Kj(){}
function Dn(){FB.call(this);}
function A2z(a,b){var c,d;if(a===b)return 1;if(!Jb(b,Kj))return 0;c=b;if(AMY(a)!=c.eX())return 0;d=c.gz();while(d.jt()){if(ANa(a,d.ho()))continue;else return 0;}return 1;}
function ANg(){Dn.call(this);this.oA=null;}
function AHe(){var a=new ANg();AXp(a);return a;}
function AXp(a){a.oA=CZ();}
function AOs(a,b){return BI(a.oA,b,a)!==null?0:1;}
function ANa(a,b){return Dx(a.oA,b);}
function ANZ(a,b){return M6(a.oA,b)===null?0:1;}
function AMY(a){return a.oA.dD;}
function KQ(){}
function AHT(a,b,c){var d,e;d=Co(a,b);if(d!==null)return d;e=AE5(c,b);if(e!==null)BI(a,b,e);return e;}
function Fh(){var a=this;C.call(a);a.no=null;a.xE=null;}
function AGq(a){var b;if(a.no===null){b=new Z1;b.E7=a;a.no=b;}return a.no;}
function MV(){var a=this;Fh.call(a);a.dD=0;a.cQ=null;a.fN=0;a.F_=0.0;a.oI=0;}
function CZ(){var a=new MV();ACt(a);return a;}
function A2K(a,b){return H(LB,b);}
function ACt(a){var b;b=AGQ(16);a.dD=0;a.cQ=a.xf(b);a.F_=0.75;TZ(a);}
function AGQ(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Xx(a){var b;if(a.dD>0){a.dD=0;b=a.cQ;ABO(b,0,b.data.length,null);a.fN=a.fN+1|0;}}
function TZ(a){a.oI=a.cQ.data.length*a.F_|0;}
function Dx(a,b){return Ya(a,b)===null?0:1;}
function AMG(a){var b;b=new T0;b.EE=a;return b;}
function Co(a,b){var c;c=Ya(a,b);if(c===null)return null;return c.fr;}
function Ya(a,b){var c,d;if(b===null)c=KH(a);else{d=b.l1();c=Kq(a,b,d&(a.cQ.data.length-1|0),d);}return c;}
function Kq(a,b,c,d){var e;e=a.cQ.data[c];while(e!==null&&!(e.tg==d&&AIs(b,e.io))){e=e.gh;}return e;}
function KH(a){var b;b=a.cQ.data[0];while(b!==null&&b.io!==null){b=b.gh;}return b;}
function AOw(a){return a.dD?0:1;}
function WJ(a){var b;if(a.no===null){b=new Rr;b.Dy=a;a.no=b;}return a.no;}
function M$(a,b,c){return BI(a,b,c);}
function BI(a,b,c){var d,e,f,g;if(b===null){d=KH(a);if(d===null){a.fN=a.fN+1|0;d=TW(a,null,0,0);e=a.dD+1|0;a.dD=e;if(e>a.oI)LO(a);}}else{e=b.l1();f=e&(a.cQ.data.length-1|0);d=Kq(a,b,f,e);if(d===null){a.fN=a.fN+1|0;d=TW(a,b,f,e);e=a.dD+1|0;a.dD=e;if(e>a.oI)LO(a);}}g=d.fr;d.fr=c;return g;}
function TW(a,b,c,d){var e;e=A9R(b,d);e.gh=a.cQ.data[c];a.cQ.data[c]=e;return e;}
function AJL(a,b){var c,d,e,f,g,h,i;c=AGQ(!b?1:b<<1);d=a.xf(c);e=0;c=c-1|0;while(e<a.cQ.data.length){f=a.cQ.data[e];a.cQ.data[e]=null;while(f!==null){g=d.data;h=f.tg&c;i=f.gh;f.gh=g[h];g[h]=f;f=i;}e=e+1|0;}a.cQ=d;TZ(a);}
function LO(a){AJL(a,a.cQ.data.length);}
function M6(a,b){var c;c=TR(a,b);if(c===null)return null;return c.fr;}
function TR(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cQ.data[0];while(e!==null){if(e.io===null)break a;f=e.gh;d=e;e=f;}}else{g=b.l1();c=g&(a.cQ.data.length-1|0);e=a.cQ.data[c];while(e!==null&&!(e.tg==g&&AIs(b,e.io))){f=e.gh;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.gh=e.gh;else a.cQ.data[c]=e.gh;a.fN=a.fN+1|0;a.dD=a.dD-1|0;return e;}
function A07(a){return a.dD;}
function Xj(a){var b;if(a.xE===null){b=new Rs;b.CW=a;a.xE=b;}return a.xE;}
function AIs(b,c){return b!==c&&!b.cJ(c)?0:1;}
function AI2(){Fq.call(this);}
function AHf(){C.call(this);}
function A1K(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{A8R(b,callback);}catch($e){callback.J6($rt_exception($e));}});}
function A8R(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CY(c,Y3(0,0,B(212),null));return;}e=d.open($rt_ustr(b),1);b=new SU;b.Ey=c;b=Cs(b,"handleEvent");e.onBlocked=b;b=new SV;b.E_=c;b.Eo=e;b=Cs(b,"handleEvent");e.onsuccess=b;b=new SW;b.Ct=c;b=Cs(b,"handleEvent");e.onerror=b;b=new SX;b.AQ=e;b=Cs(b,"handleEvent");e.onupgradeneeded=b;}
function AQl(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{A9S(b,c,callback);}catch($e){callback.J6($rt_exception($e));}});}
function A9S(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=AOo($rt_ustr(c));e=b.get(c);b=new SZ;b.A2=d;b.wA=e;b=Cs(b,"handleEvent");e.onsuccess=b;b=new S0;b.ET=d;b=Cs(b,"handleEvent");e.onerror=b;}
function A6_(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{A8S(b,c,callback);}catch($e){callback.J6($rt_exception($e));}});}
function A8S(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=AOo($rt_ustr(c));e=b.get(c);b=new Vy;b.Fo=d;b.yj=e;b=Cs(b,"handleEvent");e.onsuccess=b;b=new Vx;b.By=d;b=Cs(b,"handleEvent");e.onerror=b;}
function A3e(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{A99(b,c,d,e,callback);}catch($e)
{callback.J6($rt_exception($e));}});}
function A99(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(CF(),new Long(596067632, 383)).lo;c=A2N($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Vw;c.A7=f;b=Cs(c,"handleEvent");h.onsuccess=b;b=new WM;b.Dj=f;b=Cs(b,"handleEvent");h.onerror=b;}
function A2J(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function ADE(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function AOo(b){return [b];}
function A2N(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AKH(){var a=this;C.call(a);a.AC=0;a.DY=0;a.xU=null;a.zC=null;}
function Y3(a,b,c,d){var e=new AKH();A0Y(e,a,b,c,d);return e;}
function A0Y(a,b,c,d,e){a.AC=b;a.DY=c;a.xU=d;a.zC=e;}
function Se(){}
function Xu(){C.call(this);this.zF=null;}
function A9o(b){var c;c=new Xu;c.zF=b;return c;}
function CY(a,b){a.zF.Hs(b);}
function AYu(a,b){a.zF.J6(b);}
function ANt(){C.call(this);}
function PQ(){}
function Yw(){var a=this;C.call(a);a.vM=null;a.Bc=null;}
function AFl(a){var b,c,d;if(a.vM.readyState==4){b=new Uint8Array(a.vM.response);c=$rt_createByteArray(b.byteLength);Bf();A_0=c;d=0;while(d<X2().data.length){X2().data[d]=b[d]<<24>>24;d=d+1|0;}CY(a.Bc,B(213));}}
function AYz(a){AFl(a);}
function N1(){var a=this;C.call(a);a.IF=null;a.Jk=null;}
function T$(b){var c,d;if(Eb(b))J(AJI(b));if(!AMN(P(b,0)))J(AJI(b));c=1;while(c<Q(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AMN(d))break a;else J(AJI(b));}}c=c+1|0;}}
function AMN(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Hc(b){var c;if(b===null){b=new BB;Bb(b,B(214));J(b);}T$(b);c=Co(Bc_,ALp(b));if(c!==null)return c;c=new XB;Z(c);c.JI=b;J(c);}
function ALb(a,b){var c,$$je;a:{try{b=AIR(Tv(ZC(Ul(a),Bba),Bba),b);}catch($$e){$$je=Bh($$e);if($$je instanceof GI){c=$$je;break a;}else{throw $$e;}}return b;}J(A2g(B(215),c));}
function AGV(a,b){var c,$$je;a:{try{b=AJo(UW(SQ(UY(a),Bba),Bba),b);}catch($$e){$$je=Bh($$e);if($$je instanceof GI){c=$$je;break a;}else{throw $$e;}}return b;}J(A2g(B(215),c));}
function ZA(){var a=this;J0.call(a);a.gR=null;a.oW=null;a.qG=0;a.pk=0;a.Fy=0;a.Fe=0;a.w1=null;a.Ia=null;}
function APe(a){var b;if(a.qG){b=new BA;Bb(b,B(216));J(b);}return AJS(a,a.w1,0,1)==(-1)?(-1):a.w1.data[0]&255;}
function AJS(a,b,c,d){var e,f,g;if(a.qG){e=new BA;Bb(e,B(216));J(e);}if(b===null){e=new Eg;Z(e);J(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.pk)return (-1);f=0;ACH(a.gR,b,c,d);a:{while(!a.pk){if(!a.gR.E)AC_(a);b:{g=AGh(a.gR,0);f=f+(a.gR.qb-c|0)|0;c=a.gR.qb;switch(g){case -3:e=new BA;Bb(e,a.gR.cb);J(e);case 1:case 2:break;default:break b;}a.pk=1;if(g==2)return (-1);}if(!a.gR.ic)break a;}}return f;}e=new BD;Z(e);J(e);}
function AWB(a){var b;if(!a.qG){if(!a.pk)return 1;return 0;}b=new BA;Bb(b,B(216));J(b);}
function AC_(a){var b,c;if(a.qG){b=new BA;Bb(b,B(216));J(b);}a:{c=a.kG.oO(a.oW,0,a.oW.data.length);if(c==(-1)){if(a.gR.jG.dO)break a;if(AAQ(a.gR))break a;a.oW.data[0]=0;c=1;}AIY(a.gR,a.oW,0,c,1);return;}if(Long_ne(a.gR.jG.sz,Long_fromInt(-1))){b=new BA;Bb(b,B(217));J(b);}b=new F4;Bb(b,B(218));J(b);}
function Oi(){var a=this;C.call(a);a.h_=null;a.jy=0;a.nL=Long_ZERO;}
function Ki(a,b){var c,d;c=a.h_.data;d=a.jy;a.jy=d+1|0;c[d]=b;if(a.jy==a.h_.data.length){Vq(a,a.h_,0);a.jy=0;}a.nL=Long_add(a.nL,Long_fromInt(1));}
function AES(a,b,c,d){a:{while(a.jy){if(d<=0)break a;Ki(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h_.data.length){Vq(a,b,c);c=c+a.h_.data.length|0;d=d-a.h_.data.length|0;a.nL=Long_add(a.nL,Long_fromInt(a.h_.data.length));}while(d>0){Ki(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function AMn(a){var b;b=Long_shl(a.nL,3);Ki(a,(-128));while(a.jy){Ki(a,0);}AJz(a,b);NL(a);}
function Tf(){var a=this;Oi.call(a);a.pW=0;a.pX=0;a.pY=0;a.pZ=0;a.p0=0;a.d_=null;a.nk=0;}
function Vq(a,b,c){var d,e;d=b.data;b=a.d_.data;e=a.nk;a.nk=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.nk==16)NL(a);}
function IO(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AJz(a,b){if(a.nk>14)NL(a);a.d_.data[14]=b.hi;a.d_.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AJZ(a,b,c){AMn(a);IO(a,a.pW,b,c);IO(a,a.pX,b,c+4|0);IO(a,a.pY,b,c+8|0);IO(a,a.pZ,b,c+12|0);IO(a,a.p0,b,c+16|0);Qd(a);return 20;}
function Qd(a){var b;a.nL=Long_ZERO;a.jy=0;b=0;while(b<a.h_.data.length){a.h_.data[b]=0;b=b+1|0;}a.pW=1732584193;a.pX=(-271733879);a.pY=(-1732584194);a.pZ=271733878;a.p0=(-1009589776);a.nk=0;b=0;while(b!=a.d_.data.length){a.d_.data[b]=0;b=b+1|0;}}
function XE(a,b,c,d){return b^c^d;}
function FA(a,b,c){return b<<c|b>>>(32-c|0);}
function NL(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.d_.data[b]=FA(a,a.d_.data[b-3|0]^a.d_.data[b-8|0]^a.d_.data[b-14|0]^a.d_.data[b-16|0],1);b=b+1|0;}c=a.pW;d=a.pX;e=a.pY;f=a.pZ;g=a.p0;h=0;while(h<=19){i=(((FA(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.d_.data[h]|0)+1518500249|0;b=FA(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((FA(a,c,5)+XE(a,d,e,f)|0)+g|0)+a.d_.data[j]|0)+1859775393|0;b=FA(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((FA(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.d_.data[h]|0)
+(-1894007588)|0;b=FA(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((FA(a,c,5)+XE(a,d,e,f)|0)+g|0)+a.d_.data[j]|0)+(-899497514)|0;b=FA(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pW=a.pW+c|0;a.pX=a.pX+d|0;a.pY=a.pY+e|0;a.pZ=a.pZ+f|0;a.p0=a.p0+g|0;a.nk=0;b=0;while(b!=a.d_.data.length){a.d_.data[b]=0;b=b+1|0;}}
function AIw(){C.call(this);}
function QC(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=B4(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function LV(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=B4(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ea(b,c){var d,e,f,g;d=b.data;e=AFr(Lz(B5(b)),c);f=B4(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Js(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BB;Z(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AFR(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BB;Z(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ABO(b,c,d,e){var f,g;if(c>d){e=new BB;Z(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ACD(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=H(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=B4(j,h+f|0);l=h+(2*f|0)|0;m=B4(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.iL(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function MH(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new BB;Z(f);J(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=Long_compare(b[e],c);if(!h)break;if(h<=0){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function JU(b,c){var d,e;if(b===c)return 1;if(b!==null&&c!==null){c=c.data;b=b.data;d=b.length;if(d==c.length){e=0;while(e<d){if(!LI(b[e],c[e]))return 0;e=e+1|0;}return 1;}}return 0;}
function AHp(){N1.call(this);}
function AGI(){var a=new AHp();AYa(a);return a;}
function AYa(a){var b,c,d,e;b=H(BC,0);c=b.data;T$(B(31));d=c.length;e=0;while(e<d){T$(c[e]);e=e+1|0;}a.IF=B(31);a.Jk=b.gF();}
function Ul(a){var b;b=new Tt;b.lI=B(219);b.nm=Bda;b.r1=Bda;b.Ja=a;b.C9=0.3333333432674408;b.G$=0.5;return b;}
function UY(a){var b,c,d,e,f;b=new RB;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vT=Bda;b.vd=Bda;e=d.length;if(e&&e>=b.C6){b.IO=a;b.u0=c.gF();b.BU=2.0;b.C6=4.0;return b;}f=new BB;Bb(f,B(220));J(f);}
function KG(){var a=this;C.call(a);a.HI=61;a.mZ=0;a.u7=0;a.FV=0;a.jK=0;a.Ee=0;a.Cb=null;}
var BaX=null;function VP(b,c){b=Bw(b+(-2147483648)|0,c+(-2147483648)|0);return b<0?(-1):b?1:0;}
function ABZ(a,b){return b.gK===null?0:b.bE-b.lU|0;}
function AKR(a,b){var c,d,e;if(b===null)return 0;b=b.data;c=b.length;d=0;a:{while(d<c){e=b[d];if(a.mZ==e)break a;if(AF1(a,e))break a;d=d+1|0;}return 0;}return 1;}
function AOi(a,b){var c,d,e;if(b!==null){c=b.data.length;if(c){d=new No;VJ(a,b,0,c,d);VJ(a,b,0,(-1),d);e=$rt_createByteArray(d.bE);Vu(a,e,0,e.data.length,d);return e;}}return b;}
function ADn(a,b){return AOi(a,Yq(b,Hc(B(31))));}
function AKO(a,b){var c;if(b!==null){c=b.data.length;if(c)return AFc(a,b,0,c);}return b;}
function AFc(a,b,c,d){var e,f;if(b!==null&&b.data.length){e=new No;Yp(a,b,c,d,e);Yp(a,b,c,(-1),e);f=$rt_createByteArray(e.bE-e.lU|0);Vu(a,f,0,f.data.length,e);return f;}return b;}
function Lt(a,b,c){var d,e,f;if(c.gK===null){c.gK=$rt_createByteArray(Df(b,8192));c.bE=0;c.lU=0;}else if(((c.bE+b|0)-c.gK.data.length|0)>0){b=c.bE+b|0;d=c.gK.data.length*2|0;if(VP(d,b)<0)d=b;if(VP(d,2147483639)<=0)b=d;else{if(b<0){e=new YD;c=new R;T(c);Bb(e,S(DZ(E(c,B(221)),Long_and(Long_fromInt(b),new Long(4294967295, 0)))));J(e);}if(b<=2147483639)b=2147483639;}f=$rt_createByteArray(b);CT(c.gK,0,f,0,c.gK.data.length);c.gK=f;return f;}return c.gK;}
function A32(a){return 8192;}
function ANf(a,b){var c;c=Long_mul(Long_fromInt(((b.data.length+a.u7|0)-1|0)/a.u7|0),Long_fromInt(a.FV));if(a.jK>0)c=Long_add(c,Long_mul(Long_div(Long_sub(Long_add(c,Long_fromInt(a.jK)),Long_fromInt(1)),Long_fromInt(a.jK)),Long_fromInt(a.Ee)));return c;}
function Rb(a){return a.Cb!==Bdb?0:1;}
function Vu(a,b,c,d,e){var f;if(e.gK===null)return !e.ls?0:(-1);f=B4(ABZ(a,e),d);CT(e.gK,e.lU,b,c,f);e.lU=e.lU+f|0;if(e.lU>=e.bE)e.gK=null;return f;}
function AGT(){var b,c;b=$rt_createByteArray(2);c=b.data;c[0]=13;c[1]=10;BaX=b;}
function KL(){var a=this;KG.call(a);a.gU=null;a.x4=null;a.ib=null;a.za=0;a.nW=0;}
var Bdc=null;var Bdd=null;var Bde=null;function AW1(a,b,c){var d=new KL();AA1(d,a,b,c);return d;}
function AA1(a,b,c,d){var e,f,g,h,i;e=Bdf;f=c===null?0:c.data.length;a.HI=61;a.u7=3;a.FV=4;a.jK=!(b>0&&f>0?1:0)?0:(b/4|0)*4|0;a.Ee=f;a.mZ=61;a.Cb=e;a.x4=Bde;if(c===null){a.nW=4;a.ib=null;}else{if(AKR(a,c)){e=AHU(c,Hc(B(31)));g=new BB;h=new R;T(h);Bb(g,S(E(E(E(h,B(222)),e),B(223))));J(g);}if(b<=0){a.nW=4;a.ib=null;}else{i=c.data.length;a.nW=4+i|0;a.ib=$rt_createByteArray(i);CT(c,0,a.ib,0,i);}}a.za=a.nW-1|0;a.gU=!d?Bdc:Bdd;}
function VJ(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(e.ls)return;if(d<0)e.ls=1;f=0;a:{while(true){if(f>=d)break a;g=b.data;h=Lt(a,a.za,e);i=c+1|0;j=g[c];if(j==a.mZ)break;if(j>=0&&j<Bde.data.length){k=Bde.data[j];if(k>=0){e.gH=(e.gH+1|0)%4|0;e.c5=(e.c5<<6)+k|0;if(!e.gH){h=h.data;c=e.bE;e.bE=c+1|0;h[c]=(e.c5>>16&255)<<24>>24;c=e.bE;e.bE=c+1|0;h[c]=(e.c5>>8&255)<<24>>24;j=e.bE;e.bE=j+1|0;h[j]=(e.c5&255)<<24>>24;}}}f=f+1|0;c=i;}e.ls=1;}b:{if(e.ls&&e.gH){h=Lt(a,a.za,e);switch(e.gH){case 1:break;case 2:b=h.data;VY(a,15,
e);e.c5=e.c5>>4;d=e.bE;e.bE=d+1|0;b[d]=(e.c5&255)<<24>>24;break b;case 3:b=h.data;VY(a,3,e);e.c5=e.c5>>2;i=e.bE;e.bE=i+1|0;b[i]=(e.c5>>8&255)<<24>>24;c=e.bE;e.bE=c+1|0;b[c]=(e.c5&255)<<24>>24;break b;default:l=new DF;m=new R;T(m);Bb(l,S(Bd(E(m,B(224)),e.gH)));J(l);}if(Rb(a)){l=new BB;Bb(l,B(225));J(l);}}}}
function Yp(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;if(e.ls)return;a:{if(d>=0){f=0;while(true){if(f>=d)break a;g=b.data;h=Lt(a,a.nW,e);e.gH=(e.gH+1|0)%3|0;i=c+1|0;j=g[c];if(j<0)j=j+256|0;e.c5=(e.c5<<8)+j|0;if(0==e.gH){k=h.data;c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5>>18&63];c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5>>12&63];c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5>>6&63];c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5&63];e.ll=e.ll+4|0;if(a.jK>0&&a.jK<=e.ll){CT(a.ib,0,h,e.bE,a.ib.data.length);e.bE=e.bE+a.ib.data.length|0;e.ll=0;}}f=f
+1|0;c=i;}}e.ls=1;if(0==e.gH&&!a.jK)return;b:{c:{g=Lt(a,a.nW,e);l=e.bE;switch(e.gH){case 0:break b;case 1:k=g.data;c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5>>2&63];c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5<<4&63];if(a.gU!==Bdc)break b;c=e.bE;e.bE=c+1|0;k[c]=a.mZ;c=e.bE;e.bE=c+1|0;k[c]=a.mZ;break b;case 2:break c;default:}m=new DF;n=new R;T(n);Bb(m,S(Bd(E(n,B(224)),e.gH)));J(m);}k=g.data;c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5>>10&63];c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5>>4&63];c=e.bE;e.bE=c+1|0;k[c]=a.gU.data[e.c5<<
2&63];if(a.gU===Bdc){c=e.bE;e.bE=c+1|0;k[c]=a.mZ;}}e.ll=e.ll+(e.bE-l|0)|0;if(a.jK>0&&e.ll>0){CT(a.ib,0,g,e.bE,a.ib.data.length);e.bE=e.bE+a.ib.data.length|0;}}}
function AF1(a,b){return b>=0&&b<a.x4.data.length&&a.x4.data[b]!=(-1)?1:0;}
function VY(a,b,c){var d;if(Rb(a)&&c.c5&b){d=new BB;Bb(d,B(226));J(d);}}
function AB3(){var b,c;b=$rt_createByteArray(64);c=b.data;c[0]=65;c[1]=66;c[2]=67;c[3]=68;c[4]=69;c[5]=70;c[6]=71;c[7]=72;c[8]=73;c[9]=74;c[10]=75;c[11]=76;c[12]=77;c[13]=78;c[14]=79;c[15]=80;c[16]=81;c[17]=82;c[18]=83;c[19]=84;c[20]=85;c[21]=86;c[22]=87;c[23]=88;c[24]=89;c[25]=90;c[26]=97;c[27]=98;c[28]=99;c[29]=100;c[30]=101;c[31]=102;c[32]=103;c[33]=104;c[34]=105;c[35]=106;c[36]=107;c[37]=108;c[38]=109;c[39]=110;c[40]=111;c[41]=112;c[42]=113;c[43]=114;c[44]=115;c[45]=116;c[46]=117;c[47]=118;c[48]=119;c[49]
=120;c[50]=121;c[51]=122;c[52]=48;c[53]=49;c[54]=50;c[55]=51;c[56]=52;c[57]=53;c[58]=54;c[59]=55;c[60]=56;c[61]=57;c[62]=43;c[63]=47;Bdc=b;b=$rt_createByteArray(64);c=b.data;c[0]=65;c[1]=66;c[2]=67;c[3]=68;c[4]=69;c[5]=70;c[6]=71;c[7]=72;c[8]=73;c[9]=74;c[10]=75;c[11]=76;c[12]=77;c[13]=78;c[14]=79;c[15]=80;c[16]=81;c[17]=82;c[18]=83;c[19]=84;c[20]=85;c[21]=86;c[22]=87;c[23]=88;c[24]=89;c[25]=90;c[26]=97;c[27]=98;c[28]=99;c[29]=100;c[30]=101;c[31]=102;c[32]=103;c[33]=104;c[34]=105;c[35]=106;c[36]=107;c[37]=108;c[38]
=109;c[39]=110;c[40]=111;c[41]=112;c[42]=113;c[43]=114;c[44]=115;c[45]=116;c[46]=117;c[47]=118;c[48]=119;c[49]=120;c[50]=121;c[51]=122;c[52]=48;c[53]=49;c[54]=50;c[55]=51;c[56]=52;c[57]=53;c[58]=54;c[59]=55;c[60]=56;c[61]=57;c[62]=45;c[63]=95;Bdd=b;b=$rt_createByteArray(123);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=(-1);c[9]=(-1);c[10]=(-1);c[11]=(-1);c[12]=(-1);c[13]=(-1);c[14]=(-1);c[15]=(-1);c[16]=(-1);c[17]=(-1);c[18]=(-1);c[19]=(-1);c[20]=(-1);c[21]=
(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=(-1);c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=(-1);c[33]=(-1);c[34]=(-1);c[35]=(-1);c[36]=(-1);c[37]=(-1);c[38]=(-1);c[39]=(-1);c[40]=(-1);c[41]=(-1);c[42]=(-1);c[43]=62;c[44]=(-1);c[45]=62;c[46]=(-1);c[47]=63;c[48]=52;c[49]=53;c[50]=54;c[51]=55;c[52]=56;c[53]=57;c[54]=58;c[55]=59;c[56]=60;c[57]=61;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]=(-1);c[63]=(-1);c[64]=(-1);c[65]=0;c[66]=1;c[67]=2;c[68]=3;c[69]=4;c[70]=5;c[71]=6;c[72]
=7;c[73]=8;c[74]=9;c[75]=10;c[76]=11;c[77]=12;c[78]=13;c[79]=14;c[80]=15;c[81]=16;c[82]=17;c[83]=18;c[84]=19;c[85]=20;c[86]=21;c[87]=22;c[88]=23;c[89]=24;c[90]=25;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=63;c[96]=(-1);c[97]=26;c[98]=27;c[99]=28;c[100]=29;c[101]=30;c[102]=31;c[103]=32;c[104]=33;c[105]=34;c[106]=35;c[107]=36;c[108]=37;c[109]=38;c[110]=39;c[111]=40;c[112]=41;c[113]=42;c[114]=43;c[115]=44;c[116]=45;c[117]=46;c[118]=47;c[119]=48;c[120]=49;c[121]=50;c[122]=51;Bde=b;}
function Nl(){CI.call(this);}
function AYG(a,b){return;}
function A3x(a,b){return;}
function AS8(a){return 0;}
function IZ(){var a=this;C.call(a);a.e6=null;a.gV=0;}
function AIQ(a){return 1;}
function AVL(a,b){return;}
function AEw(){var a=this;IZ.call(a);a.wv=0;a.ww=0;a.wx=0;a.ii=0.0;a.mo=0.0;a.qC=0.0;a.mI=0;a.EZ=null;}
function A0F(a){var b=new AEw();AZc(b,a);return b;}
function AZc(a,b){a.gV=0;a.e6=b;a.wv=(-1);a.ww=(-1);a.wx=(-1);a.ii=0.0;a.mo=0.0;a.qC=0.0;a.mI=0;}
function V0(a,b,c,d){var e,f,g,h,i,j;e=O(a.e6.i,b,c,d);f=Cr(a.e6.i,b,c,d);AN_(a.e6.bI,b,c,d);g=a.e6.i;L();h=Bcn.data[O(g,b,c,d)];i=Cr(g,b,c,d);j=By(g,b,c,d,0);if(h!==null&&j)h.rE(g,b,c,d,i);h=F0(a.e6.a.F);if(h!==null){B3();Bcm.data[h.bX].xK(h);if(!h.s)Ta(a.e6.a);}if(j&&Tp(a.e6.a,Bcn.data[e]))Ja(Bcn.data[e],a.e6.i,b,c,d,f);return j;}
function ACT(a,b,c,d){var e;e=O(a.e6.i,b,c,d);if(e>0){L();if(Um(Bcn.data[e],a.e6.a)>=1.0)V0(a,b,c,d);}}
function EL(a){a.ii=0.0;a.mI=0;}
function Ew(a,b,c,d,e){var f;if(a.mI>0)a.mI=a.mI-1|0;else if(b==a.wv&&c==a.ww&&d==a.wx){e=O(a.e6.i,b,c,d);if(e){L();f=Bcn.data[e];a.ii=a.ii+Um(f,a.e6.a);a.qC=a.qC+1.0;if(a.ii>=1.0){V0(a,b,c,d);a.ii=0.0;a.mo=0.0;a.qC=0.0;a.mI=5;}}}else{a.ii=0.0;a.mo=0.0;a.qC=0.0;a.wv=b;a.ww=c;a.wx=d;}}
function HI(a,b){if(a.ii<=0.0)a.e6.cx.rb=0.0;else a.e6.cx.rb=a.mo+(a.ii-a.mo)*b;}
function AIE(a){return 4.0;}
function ALx(a,b){a.EZ=AV7(b);}
function ACu(a){a.mo=a.ii;X6(a.EZ);}
function R$(){var a=this;C.call(a);a.dy=0.0;a.BN=0.0;a.ih=0;a.da=0.0;a.CR=0.0;a.lu=0.0;a.tA=Long_ZERO;a.sc=Long_ZERO;a.pO=0.0;}
function EV(a){var b,c,d,e,f;b=CF();c=Long_sub(b,a.tA);d=Long_div(AFt(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.sc));a.pO=a.pO+(e-a.pO)*0.20000000298023224;a.tA=b;a.sc=d;}if(Long_lt(c,Long_ZERO)){a.tA=b;a.sc=d;}f=Long_toNumber(d)/1000.0;e=(f-a.BN)*a.pO;a.BN=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lu=a.lu+e*a.CR*a.dy;a.ih=a.lu|0;a.lu=a.lu-a.ih;if(a.ih>10)a.ih=10;a.da=a.lu;}
function Xg(){}
function XC(){var a=this;C.call(a);a.qM=null;a.fY=null;a.sB=null;a.oc=Long_ZERO;}
function Zn(a,b){var c,d,e;if(!a.fY.h9)J(AKF());a.sB=b;c=G8(a.fY.cp,a.fY.cr);d=c.fZ;e=c.fS;Db(256);CB(5889);Cp();N5(0.0,d,e,0.0,100.0,300.0);CB(5888);Cp();Bj(0.0,0.0,(-200.0));}
function ANk(a,b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fY.h9)J(AKF());a.oc=Long_ZERO;a.qM=b;c=(-1);$p=1;case 1:ALQ(a,c);if(I()){break _;}a.oc=Long_ZERO;return;default:F2();}}Dh().s(a,b,c,$p);}
function ALQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fY.h9)J(AKF());c=CF();if(Long_lt(Long_sub(c,a.oc),Long_fromInt(20)))return;a.oc=c;d=G8(a.fY.cp,a.fY.cr);e=d.fZ;f=d.fS;Db(256);CB(5889);Cp();N5(0.0,e,f,0.0,100.0,300.0);CB(5888);Cp();Bj(0.0,0.0,(-200.0));Db(16640);BE();g=Bdg;d=a.fY.cf;h
=B(227);$p=1;case 1:$z=AB_(d,h);if(I()){break _;}i=$z;Cj(3553,i);Bx(g);Ii(g,4210752);j=f;k=j;l=j/32.0;G(g,0.0,k,0.0,0.0,l);j=e;m=j;n=j/32.0;G(g,m,k,0.0,n,l);G(g,m,0.0,0.0,n,0.0);G(g,0.0,0.0,0.0,0.0,0.0);Bt(g);if(b>=0){i=(e/2|0)-50|0;o=(f/2|0)+16|0;Bc(3553);Bx(g);Ii(g,8421504);m=i;p=o;Bo(g,m,p,0.0);n=o+2|0;Bo(g,m,n,0.0);k=i+100|0;Bo(g,k,n,0.0);Bo(g,k,p,0.0);Ii(g,8454016);Bo(g,m,p,0.0);Bo(g,m,n,0.0);m=i+b|0;Bo(g,m,n,0.0);Bo(g,m,p,0.0);Bt(g);Y(3553);}d=a.fY.jl;g=a.sB;b=(e-Ei(a.fY.jl,a.sB)|0)/2|0;i=(f/2|0)-4|0;CG(d,
g,b,i-16|0,16777215);CG(a.fY.jl,a.qM,(e-Ei(a.fY.jl,a.qM)|0)/2|0,i+8|0,16777215);$p=2;case 2:ADG();if(I()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){}else{throw $$e;}}return;case 3:a:{try{AAm();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){}else{throw $$e;}}}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Q1(){var a=this;C.call(a);a.c=null;a.s3=0;a.fb=0.0;a.e$=null;a.qj=null;a.op=null;a.fJ=0.0;a.f8=0.0;a.gd=0.0;a.xm=0.0;a.pG=0.0;}
function DQ(a){var b,c;a.xm=a.pG;b=DT(a.c.i,a.c.a.f|0,a.c.a.j|0,a.c.a.g|0);c=(3-a.c.d.fy|0)/3.0;b=b*(1.0-c)+c;a.pG=a.pG+(b-a.pG)*0.10000000149011612;AIc(a.e$);}
function NK(a,b){var c;c=a.c.a;return BF(c.cu+(c.f-c.cu)*b,c.cy+(c.j-c.cy)*b,c.cv+(c.g-c.cv)*b);}
function EX(a,b){var c,d,e;c=a.c.a;d=c.hm-b;if(c.b0<=0)Bs(40.0-8000.0/(b+c.dA+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.BC;b=Bv(b*b*b*b*3.1415927410125732);e=c.lt;Bs( -e,0.0,1.0,0.0);Bs( -b*14.0,0.0,0.0,1.0);Bs(e,0.0,1.0,0.0);}}
function DU(a,b){var c,d,e,f;if(!a.c.d.cg){c=a.c.a;d=c.k0-c.uG;d=c.k0+d*b;e=c.xG+(c.pf-c.xG)*b;b=c.y6+(c.oa-c.y6)*b;f=d*3.1415927410125732;Bj(Bv(f)*e*0.5, -I3(Bp(f)*e),0.0);Bs(Bv(f)*e*3.0,0.0,0.0,1.0);Bs(I3(Bp(f+0.20000000298023224)*e)*5.0,1.0,0.0,0.0);Bs(b,1.0,0.0,0.0);}}
function ALS(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.s3&&!KA()){c=a.c;$p=1;continue _;}a.s3=KA();d=Bac;Bac=0.0;e=d|0;d=Bad;Bad=0.0;f=d|0;g=1;if(a.c.d.jE)g=(-1);if(a.c.N&&a.c.i!==null)T8(a.c.a,e,K(f,g));c=G8(a.c.cp,a.c.cr);h=c.fZ;i=c.fS;g=K(Baa,h)/a.c.cp|0;f=(i-(K(Bab,i)/a.c.cr|0)|0)-1|0;if(a.c.i!==null){$p=2;continue _;}FJ(0,0,a.c.cp,a.c.cr);Pt(0.0,0.0,0.0,0.0);Db(16640);CB(5889);Cp();CB(5888);Cp();O_(a);if
(a.c.k===null){$p=4;continue _;}Db(256);c=a.c.k;$p=6;continue _;case 1:AEx(c);if(I()){break _;}a.s3=KA();d=Bac;Bac=0.0;e=d|0;d=Bad;Bad=0.0;f=d|0;g=1;if(a.c.d.jE)g=(-1);if(a.c.N&&a.c.i!==null)T8(a.c.a,e,K(f,g));c=G8(a.c.cp,a.c.cr);h=c.fZ;i=c.fS;g=K(Baa,h)/a.c.cp|0;f=(i-(K(Bab,i)/a.c.cr|0)|0)-1|0;if(a.c.i!==null){$p=2;continue _;}FJ(0,0,a.c.cp,a.c.cr);Pt(0.0,0.0,0.0,0.0);Db(16640);CB(5889);Cp();CB(5888);Cp();O_(a);if(a.c.k===null){$p=4;continue _;}Db(256);c=a.c.k;$p=6;continue _;case 2:AKc(a,b);if(I()){break _;}c
=a.c.pe;$p=3;case 3:ADL(c,b);if(I()){break _;}if(a.c.k===null){$p=4;continue _;}Db(256);c=a.c.k;$p=6;continue _;case 4:AAm();if(I()){break _;}$p=5;case 5:ADG();if(I()){break _;}return;case 6:c.iM(g,f,b);if(I()){break _;}$p=4;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,$p);}
function AKc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:
while(true){switch($p){case 0:c=a.c.a;d=c.b1+(c.X-c.b1)*b;e=c.bN+(c.I-c.bN)*b;f=NK(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=Bp(g);g=Bv(g);i= -d*0.01745329238474369;j= -Bp(i);i=Bv(i);k=g*j;l=h*j;m=AIE(a.c.P);n=Je(f,k*m,i*m,l*m);a.c.n=E2(a.c.i,f,n);n=NK(a,b);if(a.c.n!==null)m=C$(a.c.n.d5,n);if(a.c.P instanceof CK)m=32.0;else if(m>3.0)m=3.0;g=k*m;h=i*m;i=l*m;o=Je(n,g,h,i);a.qj=null;p=Ht(a.c.i.dl,c,K4(c.Y,g,h,i));q=0.0;r=0;while(r<CE(p)){s=Be(p,r);if(s.qh()){t=Qi(FL(s.Y,0.10000000149011612,0.10000000149011612,
0.10000000149011612),n,o);if(t!==null){g=C$(n,t.d5);if(!(g>=q&&q!==0.0)){a.qj=s;q=g;}}}r=r+1|0;}if(a.qj!==null&&!(a.c.P instanceof CK))a.c.n=ATl(a.qj);u=0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cx;x=a.c.bI;FJ(0,0,a.c.cp,a.c.cr);H4(a,b);Db(16640);Y(2884);a.fb=512>>(a.c.d.fy<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cp/a.c.cr,
0.05000000074505806,a.fb);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EX(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cu+(c.f-c.cu)*b;d=c.cy+(c.j-c.cy)*b;q=c.cv+(c.g-c.cv)*b;if(!a.c.d.cg){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&
1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E2(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d5,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;case 1:AHP(w,b);if(I()){break _;}EM(a);bd=A$_();AFj(a.c.cx,bd);AJQ(a.c.cx,o);EM(a);Y(2912);r=3553;c=a.c.cf;n=B(205);$p=2;case 2:a:{$z=AB_(c,n);if(I()){break _;}be=$z;Cj(r,
be);D9();S$(w,o,0);if(AOk(v,o.f,o.j,o.g,0.10000000149011612)){be=o.f|0;bf=o.j|0;bg=o.g|0;bh=AFD(v);bi=be-1|0;be=be+1|0;ba=bf-1|0;bf=bf+1|0;bj=bg-1|0;bg=bg+1|0;while(true){if(bi>be)break a;bk=ba;while(bk<=bf){bl=bj;while(bl<=bg){bm=O(v,bi,bk,bl);if(bm>0){L();AHj(bh,Bcn.data[bm],bi,bk,bl);}bl=bl+1|0;}bk=bk+1|0;}bi=bi+1|0;}}}I4();c=NK(a,b);$p=3;case 3:AMU(w,c,bd,b);if(I()){break _;}$p=4;case 4:AIW(x,b);if(I()){break _;}D9();EM(a);$p=5;case 5:ABK(x,o,b);if(I()){break _;}$p=6;case 6:AL3(w);if(I()){break _;}if(a.c.n
!==null&&D4(o)){Bc(3008);c=a.c.n;r=0;n=F0(o.F);$p=8;continue _;}Dy(770,771);EM(a);$p=7;case 7:AB1(w);if(I()){break _;}Y(3042);Bc(2884);Cz(0,0,0,0);be=S$(w,o,1);Cz(1,1,1,1);if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}if(be>0){$p=9;continue _;}EJ(1);Y(2884);Bc(3042);if(a.c.n!==null&&!D4(o)){Bc(3008);c=a.c.n;r=0;n=F0(o.F);$p=10;continue _;}Bc(2912);Db(256);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);Ca();EX(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.cg){BO();c=a.e$;$p=11;continue _;}BS();if(!a.c.d.cg)
{BO();c=a.e$;$p=12;continue _;}if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cx;x=a.c.bI;FJ(0,0,a.c.cp,a.c.cr);H4(a,b);Db(16640);Y(2884);a.fb=512>>(a.c.d.fy<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cp/a.c.cr,0.05000000074505806,a.fb);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,
0.0,0.0);EX(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cu+(c.f-c.cu)*b;d=c.cy+(c.j-c.cy)*b;q=c.cv+(c.g-c.cv)*b;if(!a.c.d.cg){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc
=E2(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d5,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 8:AOv(w,c,r,n);if(I()){break _;}Xf(w,a.c.n,0);Y(3008);Dy(770,771);EM(a);$p=7;continue _;case 9:AIT(w);if(I()){break _;}EJ(1);Y(2884);Bc(3042);if(a.c.n!==null&&!D4(o)){Bc(3008);c=a.c.n;r=0;n=F0(o.F);$p=10;continue _;}Bc(2912);Db(256);Cp();if(a.c.d.b4)Bj(((u<<
1)-1|0)*0.10000000149011612,0.0,0.0);Ca();EX(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.cg){BO();c=a.e$;$p=11;continue _;}BS();if(!a.c.d.cg){BO();c=a.e$;$p=12;continue _;}if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cx;x=a.c.bI;FJ(0,0,a.c.cp,a.c.cr);H4(a,b);Db(16640);Y(2884);a.fb=512>>(a.c.d.fy<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i
/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cp/a.c.cr,0.05000000074505806,a.fb);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EX(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cu+(c.f-c.cu)*b;d=c.cy+(c.j-c.cy)*b;q=c.cv+(c.g-c.cv)*b;if(!a.c.d.cg){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j
=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E2(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d5,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 10:AOv(w,c,r,n);if(I()){break _;}Xf(w,a.c.n,0);Y(3008);Bc(2912);Db(256);Cp();if(a.c.d.b4)Bj(((u
<<1)-1|0)*0.10000000149011612,0.0,0.0);Ca();EX(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.cg){BO();c=a.e$;$p=11;continue _;}BS();if(!a.c.d.cg){BO();c=a.e$;$p=12;continue _;}if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cx;x=a.c.bI;FJ(0,0,a.c.cp,a.c.cr);H4(a,b);Db(16640);Y(2884);a.fb=512>>(a.c.d.fy<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i
=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cp/a.c.cr,0.05000000074505806,a.fb);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EX(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cu+(c.f-c.cu)*b;d=c.cy+(c.j-c.cy)*b;q=c.cv+(c.g-c.cv)*b;if(!a.c.d.cg){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g
-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E2(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d5,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 11:ADv(c,b);if(I()){break _;}BO();BS();if(!a.c.d.cg){BO();c=a.e$;$p=12;continue _;}if(a.c.d.ds)DU(a,
b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cx;x=a.c.bI;FJ(0,0,a.c.cp,a.c.cr);H4(a,b);Db(16640);Y(2884);a.fb=512>>(a.c.d.fy<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cp/a.c.cr,0.05000000074505806,a.fb);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EX(a,b);if(a.c.d.ds)DU(a,b);c
=a.c.a;g=c.cu+(c.f-c.cu)*b;d=c.cy+(c.j-c.cy)*b;q=c.cv+(c.g-c.cv)*b;if(!a.c.d.cg){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E2(a.c.i,BF(g+k,d
+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d5,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 12:AK6(c,b);if(I()){break _;}BO();EX(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cx;x=a.c.bI;FJ(0,0,a.c.cp,a.c.cr);H4(a,b);Db(16640);Y(2884);a.fb=512>>(a.c.d.fy<<1);CB(5889);Cp();if
(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cp/a.c.cr,0.05000000074505806,a.fb);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EX(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cu+(c.f-c.cu)*b;d=c.cy+(c.j-c.cy)*b;q=c.cv+(c.g-c.cv)*b;if(!a.c.d.cg){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)
*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E2(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d5,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;default:F2();}}Dh().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,$p);}
function O_(a){var b,c,d;b=G8(a.c.cp,a.c.cr);c=b.fZ;d=b.fS;Db(256);CB(5889);Cp();N5(0.0,c,d,0.0,1000.0,3000.0);CB(5888);Cp();Bj(0.0,0.0,(-2000.0));}
function H4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.c.i;d=a.c.a;e=1.0-AY5(1.0/(4-a.c.d.fy|0),0.25);f=UO(c,b);g=f.U;h=f.R;i=f.S;j=ABE(c,b);a.fJ=j.U;a.f8=j.R;a.gd=j.S;a.fJ=a.fJ+(g-a.fJ)*e;a.f8=a.f8+(h-a.f8)*e;a.gd=a.gd+(i-a.gd)*e;L();k=Bcn.data[O(c,d.f|0,d.j+0.11999999731779099|0,d.g|0)];if(k!==null&&k.cm!==Bdh){l=k.cm;if(l===Bdi){a.fJ=0.019999999552965164;a.f8=0.019999999552965164;a.gd=0.20000000298023224;}else if(l===Bdj){a.fJ=0.6000000238418579;a.f8=0.10000000149011612;a.gd=0.0;}}m=a.xm+(a.pG-a.xm)*b;a.fJ=a.fJ
*m;a.f8=a.f8*m;a.gd=a.gd*m;if(a.c.d.b4){b=(a.fJ*30.0+a.f8*59.0+a.gd*11.0)/100.0;e=(a.fJ*30.0+a.f8*70.0)/100.0;n=(a.fJ*30.0+a.gd*70.0)/100.0;a.fJ=b;a.f8=e;a.gd=n;}Pt(a.fJ,a.f8,a.gd,0.0);}
function EM(a){var b,c,d,e,f,g,h;b=a.c.i;c=a.c.a;d=a.gd;e=a.f8;f=a.fJ;DC(a.op);Ch(Ch(Ch(Ch(a.op,f),e),d),1.0);Ec(a.op);g=a.op;BM();Bby=Kz(g);Bbz=Kz(g);BbA=Kz(g);BbB=Kz(g);IT(0.0,(-1.0),0.0);BJ(1.0,1.0,1.0,1.0);L();g=Bcn.data[O(b,c.f|0,c.j+0.11999999731779099|0,c.g|0)];if(g!==null&&g.cm.mc()){h=g.cm;Zc(2917,2048);if(h===Bdi)KX(2914,0.10000000149011612);else if(h===Bdj)KX(2914,2.0);}else{Zc(2917,9729);KX(2915,a.fb/4.0);KX(2916,a.fb);}Y(2903);}
function Iy(){C.call(this);}
var Bdk=null;var Bdl=null;function AOD(b){var c;A9K(D(Iy));try{c=JF(b);M(Bdk,C0(c));M(Bdk,C0(b));return c;}finally{A_n(D(Iy));}}
function P_(b){var c,d,e,f,g;A9K(D(Iy));try{c=b.L;while(c<b.ce){BM();d=Bbe;Bf();e=new WS;f=A_Y.createTexture();e.Hx=(-1);e.Hu=(-1);e.IV=1;e.Ji=0;e.FF=f;g=SL(d,e);ZB(b,c,g);M(Bdl,C0(g));c=c+1|0;}}finally{A_n(D(Iy));}}
function HE(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new Zv;f=0+d|0;LR(e,d);e.L=0;e.ce=f;e.zj=0;e.yh=0;e.x5=c;return e;}
function AB0(){Bdk=BV();Bdl=BV();}
function Fw(){C.call(this);}
function JV(){var a=this;Fw.call(a);a.i4=null;a.k3=null;a.qi=null;a.dT=null;a.dI=null;a.iP=null;a.g_=null;}
function A98(){var a=new JV();KF(a);return a;}
function AM6(a){var b=new JV();P3(b,a);return b;}
function Bdm(a,b){var c=new JV();AMz(c,a,b);return c;}
function KF(a){P3(a,0.0);}
function P3(a,b){AMz(a,b,0.0);}
function AMz(a,b,c){a.i4=BK(0,0);BH(a.i4,(-4.0),(-8.0),(-4.0),8,8,8,b);BG(a.i4,0.0,0.0,0.0);a.k3=BK(32,0);BH(a.k3,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BG(a.k3,0.0,0.0,0.0);a.qi=BK(16,16);BH(a.qi,(-4.0),0.0,(-2.0),8,12,4,b);BG(a.qi,0.0,0.0,0.0);a.dT=BK(40,16);BH(a.dT,(-3.0),(-2.0),(-2.0),4,12,4,b);BG(a.dT,(-5.0),2.0,0.0);a.dI=BK(40,16);a.dI.l0=1;BH(a.dI,(-1.0),(-2.0),(-2.0),4,12,4,b);BG(a.dI,5.0,2.0,0.0);a.iP=BK(0,16);BH(a.iP,(-2.0),0.0,(-2.0),4,12,4,b);BG(a.iP,(-2.0),12.0,0.0);a.g_=BK(0,16);a.g_.l0=1;BH(a.g_,(-2.0),
0.0,(-2.0),4,12,4,b);BG(a.g_,2.0,12.0,0.0);}
function A8u(a,b,c,d,e,f,g){a.oV(b,c,d,e,f,1.0);B8(a.i4,1.0);B8(a.qi,1.0);B8(a.dT,1.0);B8(a.dI,1.0);B8(a.iP,1.0);B8(a.g_,1.0);B8(a.k3,1.0);}
function ABt(a,b,c,d,e,f,g){var h;a.i4.cd=e/57.2957763671875;a.i4.b8=f/57.2957763671875;a.k3.cd=a.i4.cd;a.k3.b8=a.i4.b8;h=a.dT;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b8=Bp(f)*2.0*c;a.dT.bY=(Bp(b*0.23119999468326569)+1.0)*c;a.dI.b8=Bp(e)*2.0*c;a.dI.bY=(Bp(b*0.28119999170303345)-1.0)*c;a.iP.b8=Bp(e)*1.399999976158142*c;a.g_.b8=Bp(f)*1.399999976158142*c;h=a.dT;b=h.bY;c=d*0.09000000357627869;h.bY=b+Bp(c)*0.05000000074505806+0.05000000074505806;h=a.dI;h.bY=h.bY-(Bp(c)*0.05000000074505806+0.05000000074505806);h
=a.dT;b=h.b8;c=d*0.06700000166893005;h.b8=b+Bv(c)*0.05000000074505806;h=a.dI;h.b8=h.b8-Bv(c)*0.05000000074505806;}
function I2(){var a=this;C.call(a);a.IS=null;a.G9=0;a.Hv=0;a.n_=0;}
function Bdn(a){var b=new I2();S4(b,a);return b;}
function S4(a,b){a.IS=$rt_createByteArray(1024);a.Hv=0;a.n_=0;a.G9=b;}
function QW(){var a=this;I2.call(a);a.KZ=null;a.Kl=null;a.JV=null;a.HT=null;a.Ha=0;}
function Tc(){var a=this;I2.call(a);a.He=null;a.JN=null;a.Ib=null;a.HG=null;}
function F_(){var a=this;C.call(a);a.KM=Long_ZERO;a.Fg=0;a.EN=Long_ZERO;a.xv=0;a.ng=null;a.DV=null;a.GQ=null;a.w0=0;a.zE=null;}
var Bdo=null;var A_y=null;var Bdp=Long_ZERO;var Bdq=0;function A$N(a){var b=new F_();Wc(b,a);return b;}
function A$s(a){var b=new F_();Tg(b,a);return b;}
function Bdr(a,b){var c=new F_();Pr(c,a,b);return c;}
function Wc(a,b){Pr(a,null,b);}
function Tg(a,b){Pr(a,b,null);}
function Pr(a,b,c){var d;a.ng=new C;a.w0=1;a.GQ=c;a.zE=b;d=Bdp;Bdp=Long_add(d,Long_fromInt(1));a.KM=d;}
function VK(a){var b;b=new Y5;b.AT=a;AV5(b);}
function FV(b){if(A_y!==b)A_y=b;A_y.EN=CF();}
function ANS(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.zE===null)return;b=a.zE;$p=1;case 1:b.hM();if(I()){break _;}return;default:F2();}}Dh().s(a,b,$p);}
function AOX(){return A_y;}
function AXE(a,b){a.Fg=b;}
function AAm(){var b,c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=A_y;c=b.xv+1|0;b.xv=c;if(c<30)return;A_y.xv=0;if(Long_ge(Long_add(b.EN,Long_fromInt(100)),CF()))return;$p=1;case 1:AJP(b);if(I()){break _;}return;default:F2();}}Dh().s(b,c,$p);}
function AJP(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{A0b(b,callback);}catch($e){callback.J6($rt_exception($e));}});}
function A0b(b,c){var d;d=new Va;d.Di=b;d.Dh=c;S2(d);}
function AJf(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{ARG(b,callback);}catch($e){callback.J6($rt_exception($e));}});}
function ARG(b,c){var d,e;d=A_y;e=new QS;e.wP=d;e.Cp=c;e.Ky=AF6(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.DV=e;}
function ABq(){Bdo=A$N(B(228));A_y=Bdo;Bdp=Long_fromInt(1);Bdq=1;}
function ZO(){F_.call(this);}
function AGA(a){var b,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(true){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}case 1:a:{try{AJf(b);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}while(true){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}default:F2();}}Dh().s(a,b,$p);}
function Ct(){var a=this;C.call(a);a.fV=null;a.f7=null;a.q$=null;}
var Bc9=null;var Bds=null;var Bdt=null;var Bdu=null;var Bdv=null;var Bdw=null;var Bdx=null;var Bdy=null;var Bdz=null;var BdA=null;var BdB=null;var BdC=null;var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;function C1(a,b){var c=new Ct();AKI(c,a,b);return c;}
function A9B(a,b,c){var d=new Ct();YT(d,a,b,c);return d;}
function AKI(a,b,c){YT(a,b,c,B(9));}
function YT(a,b,c,d){if(b!==null&&c!==null&&d!==null){if(!Q(b)&&!Q(c)){a.f7=B(9);a.fV=B(9);a.q$=d;return;}a.f7=b;a.fV=c;a.q$=d;return;}b=new Eg;Z(b);J(b);}
function A2n(a,b){var c;if(b===a)return 1;if(!(b instanceof Ct))return 0;c=b;return BW(a.f7,c.f7)&&BW(a.fV,c.fV)&&BW(a.q$,c.q$)?1:0;}
function ASY(a){return a.fV;}
function AU7(a){return a.f7;}
function ADA(){var b,c;Bds=C1(B(229),B(230));Bdt=C1(B(231),B(230));Bdu=C1(B(232),B(233));Bdv=C1(B(232),B(9));Bdw=C1(B(229),B(9));Bdx=C1(B(231),B(234));Bdy=C1(B(231),B(9));Bdz=C1(B(235),B(9));BdA=C1(B(235),B(236));BdB=C1(B(237),B(9));BdC=C1(B(237),B(238));BdD=C1(B(239),B(240));BdE=C1(B(239),B(9));BdF=C1(B(241),B(242));BdG=C1(B(241),B(9));BdH=C1(B(232),B(233));BdI=C1(B(232),B(233));BdJ=C1(B(232),B(243));BdK=C1(B(232),B(243));BdL=C1(B(229),B(244));BdM=C1(B(229),B(245));BdN=C1(B(9),B(9));if(BdO===null)BdO=AVg();b
=(BdO.value!==null?$rt_str(BdO.value):null);c=Fy(b,95);Bc9=A9B(BP(b,0,c),DO(b,c+1|0),B(9));}
function ER(){}
function SU(){C.call(this);this.Ey=null;}
function AA3(a){CY(a.Ey,Y3(0,1,null,null));}
function AW$(a){AA3(a);}
function SV(){var a=this;C.call(a);a.E_=null;a.Eo=null;}
function AAU(a){CY(a.E_,Y3(0,0,null,a.Eo.result));}
function ATB(a){AAU(a);}
function SW(){C.call(this);this.Ct=null;}
function AGx(a){CY(a.Ct,Y3(1,0,B(246),null));}
function A4z(a){AGx(a);}
function SX(){C.call(this);this.AQ=null;}
function AOy(a,b){var c,d,e,f,g,h,i;c=a.AQ.result;d=A6H();e=H(BC,1).data;e[0]=B(247);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function AIk(a,b){AOy(a,b);}
function A66(a,b){AIk(a,b);}
function UP(){C.call(this);}
var Bc_=null;function AFW(){Bc_=CZ();BI(Bc_,B(31),AGI());}
function BB(){BU.call(this);}
function DB(){var a=new BB();AQs(a);return a;}
function BdP(a){var b=new BB();AOM(b,a);return b;}
function AQs(a){Z(a);}
function AOM(a,b){Bb(a,b);}
function XB(){BB.call(this);this.JI=null;}
function Eg(){BU.call(this);}
function OM(){CI.call(this);this.r_=0;}
function A34(a,b){LP(b,a.r_);}
function AQw(a,b){a.r_=Pm(b);}
function A5L(a){return 1;}
function UL(){CI.call(this);this.h$=0;}
function Vj(a){var b=new UL();AP$(b,a);return b;}
function AP$(a,b){C5(a);a.h$=b;}
function A7B(a,b){RA(b,a.h$);}
function AYs(a,b){a.h$=L3(b);}
function ASh(a){return 2;}
function Mj(){CI.call(this);this.qS=0;}
function AWe(a,b){K1(b,a.qS);}
function APP(a,b){a.qS=I$(b);}
function AT_(a){return 3;}
function L1(){CI.call(this);this.rP=Long_ZERO;}
function A23(a,b){W6(b,a.rP);}
function A1W(a,b){a.rP=VH(b);}
function AWo(a){return 4;}
function Y9(){CI.call(this);this.gy=0.0;}
function A6N(a){var b=new Y9();A4S(b,a);return b;}
function A4S(a,b){C5(a);a.gy=b;}
function A3r(a,b){AMl(b,a.gy);}
function APT(a,b){a.gy=ACY(b);}
function A0x(a){return 5;}
function QV(){CI.call(this);this.F7=0.0;}
function A2X(a,b){AMt(b,a.F7);}
function AZ9(a,b){a.F7=AMr(b);}
function AYd(a){return 6;}
function MZ(){CI.call(this);this.nX=null;}
function A1y(a,b){K1(b,a.nX.data.length);Yk(b,a.nX);}
function A5l(a,b){a.nX=$rt_createByteArray(I$(b));OJ(b,a.nX);}
function A5o(a){return 7;}
function OY(){CI.call(this);this.rT=null;}
function ARJ(a,b){var c;c=AEE(a.rT,B(31));RA(b,c.data.length);Yk(b,c);}
function A2c(a,b){var c;c=$rt_createByteArray(L3(b));OJ(b,c);a.rT=AUE(c,B(31));}
function A7Q(a){return 8;}
function AHl(){var a=this;CI.call(a);a.hw=null;a.mu=0;}
function Gv(){var a=new AHl();A1m(a);return a;}
function A1m(a){C5(a);a.hw=BV();}
function A40(a,b){var c;if(a.hw.q<=0)a.mu=1;else a.mu=Be(a.hw,0).e5();LP(b,a.mu);K1(b,a.hw.q);c=0;while(c<a.hw.q){Be(a.hw,c).gC(b);c=c+1|0;}}
function AP6(a,b){var c,d,e;a.mu=Pm(b);c=I$(b);a.hw=BV();d=0;while(d<c){e=AAh(a.mu);e.gv(b);M(a.hw,e);d=d+1|0;}}
function AZn(a){return 9;}
function EQ(a,b){a.mu=b.e5();M(a.hw,b);}
function CS(a,b){return Be(a.hw,b);}
function GV(a){return a.hw.q;}
function AHb(){Iy.call(this);}
function K0(b){return Xn($rt_createIntArray(b));}
function AEy(b){var c;c=MA($rt_createByteArray(b));c.k$=Bcg;return c;}
function U9(){var a=this;C.call(a);a.e4=null;a.eF=null;a.iY=0.0;a.sa=0.0;a.iF=0;a.j3=0;a.BJ=null;}
function ADv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.sa+(a.iY-a.sa)*b;d=a.e4.a;Ca();Bs(d.b1+(d.X-d.b1)*b,1.0,0.0,0.0);Bs(d.bN+(d.I-d.bN)*b,0.0,1.0,0.0);BO();I4();BO();BS();e=DT(a.e4.i,d.f|0,d.j|0,d.g|0);BJ(e,e,e,1.0);if(a.eF===
null){Ca();if(a.j3){e=(a.iF+b)/8.0;f=Bv(e*3.1415927410125732);Bj( -Bv(B$(e)*3.1415927410125732)*0.30000001192092896,Bv(B$(e)*3.1415927410125732*2.0)*0.4000000059604645, -f*0.4000000059604645);}Bj(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bs(45.0,0.0,1.0,0.0);Y(2977);if(a.j3){b=(a.iF+b)/8.0;f=Bv(b*b*3.1415927410125732);Bs(Bv(B$(b)*3.1415927410125732)*70.0,0.0,1.0,0.0);Bs( -f*20.0,0.0,0.0,1.0);}g=3553;d=a.e4.cf;h=AMq(a.e4.a);$p=1;continue _;}Ca();if(a.j3){e=(a.iF
+b)/8.0;f=Bv(e*3.1415927410125732);Bj( -Bv(B$(e)*3.1415927410125732)*0.4000000059604645,Bv(B$(e)*3.1415927410125732*2.0)*0.20000000298023224, -f*0.20000000298023224);}Bj(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bs(45.0,0.0,1.0,0.0);Y(2977);if(a.j3){b=(a.iF+b)/8.0;f=Bv(b*b*3.1415927410125732);i=Bv(B$(b)*3.1415927410125732);Bs( -f*20.0,0.0,1.0,0.0);b= -i;Bs(b*20.0,0.0,0.0,1.0);Bs(b*80.0,1.0,0.0,0.0);}C7(0.4000000059604645,0.4000000059604645,0.4000000059604645);if
(a.eF.bX<256){L();if(!Bcn.data[a.eF.bX].ij()){g=3553;d=a.e4.cf;h=B(205);$p=4;continue _;}}if(a.eF.bX>=256){g=3553;d=a.e4.cf;h=B(248);$p=2;continue _;}g=3553;d=a.e4.cf;h=B(205);$p=3;continue _;case 1:$z=AJy(d,h);if(I()){break _;}j=$z;Cj(g,j);Bj((-0.20000000298023224),(-0.30000001192092896),0.10000000149011612);Bs(120.0,0.0,0.0,1.0);Bs(200.0,1.0,0.0,0.0);Bs((-135.0),0.0,1.0,0.0);C7(0.0625,0.0625,0.0625);Bj(6.0,0.0,0.0);k=QB(BdQ,a.e4.a);BO();ALo(k);BO();BS();Bc(2977);BO();D9();BO();return;case 2:$z=AB_(d,h);if
(I()){break _;}j=$z;Cj(g,j);BE();h=Bdg;i=((Gi(BZ(a.eF))%16|0)<<4)/256.0;b=(((Gi(BZ(a.eF))%16|0)<<4)+16|0)/256.0;l=((Gi(BZ(a.eF))/16|0)<<4)/256.0;m=(((Gi(BZ(a.eF))/16|0)<<4)+16|0)/256.0;Y(2977);Bj(0.0,(-0.30000001192092896),0.0);C7(1.5,1.5,1.5);Bs(50.0,0.0,1.0,0.0);Bs(335.0,0.0,0.0,1.0);Bj((-0.9375),(-0.0625),0.0);B1(h,0.0,0.0,1.0);Bx(h);n=b;o=m;G(h,0.0,0.0,0.0,n,o);p=i;G(h,1.0,0.0,0.0,p,o);q=l;G(h,1.0,1.0,0.0,p,q);G(h,0.0,1.0,0.0,n,q);Bt(h);B1(h,0.0,0.0,(-1.0));Bx(h);G(h,0.0,1.0,(-0.0625),n,q);G(h,1.0,1.0,(-0.0625),
p,q);G(h,1.0,0.0,(-0.0625),p,o);G(h,0.0,0.0,(-0.0625),n,o);Bt(h);B1(h,(-1.0),0.0,0.0);Bx(h);j=0;f=i-b;while(j<16){r=j/16.0;s=b+f*r-0.001953125;t=r*1.0;u=s;G(h,t,0.0,(-0.0625),u,o);G(h,t,0.0,0.0,u,o);G(h,t,1.0,0.0,u,q);G(h,t,1.0,(-0.0625),u,q);j=j+1|0;}Bt(h);B1(h,1.0,0.0,0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=b+f*r-0.001953125;t=r*1.0+0.0625;u=s;G(h,t,1.0,(-0.0625),u,q);G(h,t,1.0,0.0,u,q);G(h,t,0.0,0.0,u,o);G(h,t,0.0,(-0.0625),u,o);g=g+1|0;}Bt(h);B1(h,0.0,1.0,0.0);Bx(h);g=0;f=l-m;while(g<16){r=g/16.0;s=m+f*r-
0.001953125;v=r*1.0+0.0625;u=s;G(h,0.0,v,0.0,n,u);G(h,1.0,v,0.0,p,u);G(h,1.0,v,(-0.0625),p,u);G(h,0.0,v,(-0.0625),n,u);g=g+1|0;}Bt(h);B1(h,0.0,(-1.0),0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=m+f*r-0.001953125;v=r*1.0;u=s;G(h,1.0,v,0.0,p,u);G(h,0.0,v,0.0,n,u);G(h,0.0,v,(-0.0625),n,u);G(h,1.0,v,(-0.0625),p,u);g=g+1|0;}BO();Bt(h);BO();Bc(2977);BS();Bc(2977);BO();D9();BO();return;case 3:$z=AB_(d,h);if(I()){break _;}j=$z;Cj(g,j);BE();h=Bdg;i=((Gi(BZ(a.eF))%16|0)<<4)/256.0;b=(((Gi(BZ(a.eF))%16|0)<<4)+16|0)/256.0;l=((Gi(BZ(a.eF))
/16|0)<<4)/256.0;m=(((Gi(BZ(a.eF))/16|0)<<4)+16|0)/256.0;Y(2977);Bj(0.0,(-0.30000001192092896),0.0);C7(1.5,1.5,1.5);Bs(50.0,0.0,1.0,0.0);Bs(335.0,0.0,0.0,1.0);Bj((-0.9375),(-0.0625),0.0);B1(h,0.0,0.0,1.0);Bx(h);n=b;o=m;G(h,0.0,0.0,0.0,n,o);p=i;G(h,1.0,0.0,0.0,p,o);q=l;G(h,1.0,1.0,0.0,p,q);G(h,0.0,1.0,0.0,n,q);Bt(h);B1(h,0.0,0.0,(-1.0));Bx(h);G(h,0.0,1.0,(-0.0625),n,q);G(h,1.0,1.0,(-0.0625),p,q);G(h,1.0,0.0,(-0.0625),p,o);G(h,0.0,0.0,(-0.0625),n,o);Bt(h);B1(h,(-1.0),0.0,0.0);Bx(h);j=0;f=i-b;while(j<16){r=j/16.0;s
=b+f*r-0.001953125;t=r*1.0;u=s;G(h,t,0.0,(-0.0625),u,o);G(h,t,0.0,0.0,u,o);G(h,t,1.0,0.0,u,q);G(h,t,1.0,(-0.0625),u,q);j=j+1|0;}Bt(h);B1(h,1.0,0.0,0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=b+f*r-0.001953125;t=r*1.0+0.0625;u=s;G(h,t,1.0,(-0.0625),u,q);G(h,t,1.0,0.0,u,q);G(h,t,0.0,0.0,u,o);G(h,t,0.0,(-0.0625),u,o);g=g+1|0;}Bt(h);B1(h,0.0,1.0,0.0);Bx(h);g=0;f=l-m;while(g<16){r=g/16.0;s=m+f*r-0.001953125;v=r*1.0+0.0625;u=s;G(h,0.0,v,0.0,n,u);G(h,1.0,v,0.0,p,u);G(h,1.0,v,(-0.0625),p,u);G(h,0.0,v,(-0.0625),n,u);g=g+1
|0;}Bt(h);B1(h,0.0,(-1.0),0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=m+f*r-0.001953125;v=r*1.0;u=s;G(h,1.0,v,0.0,p,u);G(h,0.0,v,0.0,n,u);G(h,0.0,v,(-0.0625),n,u);G(h,1.0,v,(-0.0625),p,u);g=g+1|0;}BO();Bt(h);BO();Bc(2977);BS();Bc(2977);BO();D9();BO();return;case 4:$z=AB_(d,h);if(I()){break _;}j=$z;Cj(g,j);IU(a.BJ,Bcn.data[a.eF.bX]);BS();Bc(2977);BO();D9();BO();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK6(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(3008);if(!D4(a.e4.a)){Y(3008);return;}c=a.e4.cf;d=B(210);$p=1;case 1:$z=AB_(c,d);if(I()){break _;}e=$z;Cj(3553,e);BE();d=Bdg;f=EC(a.e4.a,b);BJ(f,f,f,0.5);Y(3042);Dy(770,771);Ca();g= -a.e4.a.I/64.0;h=a.e4.a.X/64.0;Bx(d);i=g+4.0;j=h+4.0;G(d,(-1.0),(-1.0),(-0.5),i,j);k=g+0.0;G(d,1.0,(-1.0),(-0.5),
k,j);j=h+0.0;G(d,1.0,1.0,(-0.5),k,j);G(d,(-1.0),1.0,(-0.5),i,j);BO();Bt(d);BO();BS();BJ(1.0,1.0,1.0,1.0);Bc(3042);Y(3008);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AIc(a){var b,c;a.sa=a.iY;if(a.j3){a.iF=a.iF+1|0;if(a.iF==8){a.iF=0;a.j3=0;}}b=F0(a.e4.a.F);c=(b!==a.eF?0.0:1.0)-a.iY;if(c<(-0.4000000059604645))c=(-0.4000000059604645);if(c>0.4000000059604645)c=0.4000000059604645;a.iY=a.iY+c;if(a.iY<0.10000000149011612)a.eF=b;}
function Qj(a){a.iY=0.0;}
function N2(a){a.iF=(-1);a.j3=1;}
function AFy(a){a.iY=0.0;}
function FH(){var a=this;C.call(a);a.ie=0;a.L=0;a.ce=0;a.iB=0;}
function BdR(a){var b=new FH();LR(b,a);return b;}
function LR(a,b){a.iB=(-1);a.ie=b;a.ce=b;}
function ARP(a){return a.ie;}
function A5d(a){return a.L;}
function Dz(a,b){var c,d;if(b>=0&&b<=a.ce){a.L=b;if(b<a.iB)a.iB=0;return a;}c=new BB;d=new R;T(d);Bb(c,S(E(Bd(E(Bd(E(d,B(249)),b),B(250)),a.ce),B(223))));J(c);}
function AXo(a){return a.ce;}
function H0(a,b){var c,d;if(b>=0&&b<=a.ie){if(a.iB>b)a.iB=(-1);a.ce=b;if(a.L>a.ce)a.L=a.ce;return a;}c=new BB;d=new R;T(d);Bb(c,S(E(Bd(E(Bd(E(d,B(251)),b),B(250)),a.ie),B(223))));J(c);}
function DC(a){a.L=0;a.ce=a.ie;a.iB=(-1);return a;}
function Ec(a){a.ce=a.L;a.L=0;a.iB=(-1);return a;}
function BT(a){return a.ce-a.L|0;}
function DI(a){return a.L>=a.ce?0:1;}
function Nf(){FH.call(this);}
function AEz(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=new R;T(i);Bb(h,S(Bd(E(Bd(E(i,B(252)),g),B(253)),f)));J(h);}if(BT(a)<d){h=new Gg;Z(h);J(h);}if(d<0){h=new BD;i=new R;T(i);Bb(h,S(E(Bd(E(i,B(254)),d),B(255))));J(h);}g=a.L;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=TU(a,g);j=j+1|0;c=k;g=f;}a.L=a.L+d|0;return a;}}b=b.data;i=new BD;h=new R;T(h);Bb(i,S(E(Bd(E(Bd(E(h,B(256)),c),B(250)),b.length),B(34))));J(i);}
function X$(a,b){return AEz(a,b,0,b.data.length);}
function M4(a){DC(a);return a;}
function V7(a){Ec(a);return a;}
function RX(a,b){H0(a,b);return a;}
function V(){var a=this;C.call(a);a.bk=0;a.b=0;a.tH=0.0;a.qQ=0.0;a.ex=0.0;a.cj=0.0;a.ew=0.0;a.fD=0.0;a.cE=0.0;a.fC=0.0;a.bl=null;a.DJ=0.0;a.cm=null;}
var BdS=null;var BdT=null;var BdU=null;var BdV=null;var BdW=null;var BdX=null;var BdY=null;var BdZ=null;var Bd0=null;var Bcn=null;var Bd1=null;var Bd2=null;var Bd3=null;var Bd4=null;var Bd5=null;var Bd6=null;var Bct=null;var Bcp=null;var Bcq=null;var Bcv=null;var Bcx=null;var BcD=null;var Bco=null;var Bcj=null;var Bd7=null;var Bck=null;var Bd8=null;var BcI=null;var BcJ=null;var Bc3=null;var Bc2=null;var Bc1=null;var Bcy=null;var Bcz=null;var BcK=null;var BcB=null;var BcL=null;var BcM=null;var BcN=null;var BcO
=null;var BcP=null;var BcQ=null;var BcR=null;var BcS=null;var BcT=null;var BcU=null;var BcV=null;var BcW=null;var BcX=null;var BcY=null;var BcZ=null;var Bc0=null;var BcE=null;var BcF=null;var BcG=null;var BcH=null;var Bc5=null;var Bc4=null;var Bcr=null;var Bcs=null;var Bcw=null;var Bc7=null;var Bc6=null;var BcC=null;var Bc8=null;var BcA=null;var Bd9=null;var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;var Bec=null;var Bed=null;var Bee=null;var Bef=null;var Beg=null;var Beh=null;var Bei=null;function L()
{L=Bl(V);A5y();}
function Bej(a,b){var c=new V();Ep(c,a,b);return c;}
function C8(a,b,c){var d=new V();DR(d,a,b,c);return d;}
function Ep(a,b,c){var d,e,f;L();a.bl=BdS;a.DJ=1.0;if(Bcn.data[b]!==null){c=new BB;d=new R;T(d);Bb(c,S(JL(E(JL(E(Bd(E(d,B(257)),b),B(258)),Bcn.data[b]),B(259)),a)));J(c);}a.cm=c;Bcn.data[b]=a;a.b=b;D3(a,0.0,0.0,0.0,1.0,1.0,1.0);Bd2.data[b]=a.fK();e=Bd3;f=!a.fK()?0:255;e.data[b]=f;Bd4.data[b]=a.iy();Bd5.data[b]=0;}
function DR(a,b,c,d){L();Ep(a,b,d);a.bk=c;}
function G_(a,b){Bd3.data[a.b]=b;return a;}
function Hd(a,b){Bd6.data[a.b]=15.0*b|0;return a;}
function Di(a,b){a.qQ=b*3.0;return a;}
function AWN(a){return 1;}
function AZO(a){return 0;}
function Br(a,b){var c;a.tH=b;c=a.qQ;b=b*5.0;if(c<b)a.qQ=b;return a;}
function EA(a,b){Bd1.data[a.b]=b;}
function D3(a,b,c,d,e,f,g){a.ex=b;a.cj=c;a.ew=d;a.fD=e;a.cE=f;a.fC=g;}
function ASz(a,b,c,d,e){return DT(b,c,d,e);}
function Kb(a,b,c,d,e,f){return BN(b,c,d,e)?0:1;}
function A2Q(a,b,c,d,e,f){return a.qv(f,Cr(b,c,d,e));}
function AZU(a,b,c){return a.cP(b);}
function A7f(a,b){return a.bk;}
function AL$(a,b,c,d){var e,f,g,h,i,j;e=new PO;f=b;g=f+a.ex;h=c;i=h+a.cj;j=d;Rc(e,g,i,j+a.ew,f+a.fD,h+a.cE,j+a.fC);return e;}
function APj(a,b,c,d){var e,f,g,h,i,j;e=new PO;f=b;g=f+a.ex;h=c;i=h+a.cj;j=d;Rc(e,g,i,j+a.ew,f+a.fD,h+a.cE,j+a.fC);return e;}
function AWM(a){return 1;}
function AT7(a){return 1;}
function A7J(a,b,c,d,e,f){return;}
function AYm(a,b,c,d,e,f){return;}
function A4e(a,b,c,d,e,f){return;}
function A5e(a,b,c,d,e,f){return;}
function A5r(a){return 5;}
function AQh(a,b,c,d,e){return;}
function APv(a,b,c,d,e){return;}
function AS6(a,b){return 1;}
function AVr(a,b,c){return a.b;}
function Um(a,b){var c,d;if(a.tH<0.0)return 0.0;if(!Tp(b,a))return 1.0/a.tH/100.0;c=b.F;d=1.0;if(c.br.data[c.J]!==null)d=1.0*BZ(c.br.data[c.J]).yA(a);if(D4(b))d=d/5.0;if(!b.dF)d=d/5.0;return d/a.tH/30.0;}
function Ja(a,b,c,d,e,f){Y0(a,b,c,d,e,f,1.0);}
function Y0(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=a.gl(b.bo);i=0;j=c;k=d;l=e;while(i<h){if(N(b.bo)<=g){m=a.gq(f,b.bo);if(m>0){n=SB(b,j+N(b.bo)*0.699999988079071+0.15000000596046448,k+N(b.bo)*0.699999988079071+0.15000000596046448,l+N(b.bo)*0.699999988079071+0.15000000596046448,OE(m,1));n.i3=10;De(b,n);}}i=i+1|0;}}
function ABx(a){return a.qQ/5.0;}
function ALk(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;h= -c;i= -d;j= -e;b=Je(f,h,i,j);f=Je(g,h,i,j);k=Ks(b,f,a.ex);l=Ks(b,f,a.fD);m=Kw(b,f,a.cj);n=Kw(b,f,a.cE);o=Kf(b,f,a.ew);f=Kf(b,f,a.fC);if(!Xe(a,k))k=null;if(!Xe(a,l))l=null;if(!Sb(a,m))m=null;if(!Sb(a,n))n=null;if(!ZQ(a,o))o=null;if(!ZQ(a,f))f=null;p=null;if(k!==null)p=k;if(l!==null&&!(p!==null&&C$(b,l)>=C$(b,p)))p=l;if(m!==null&&!(p!==null&&C$(b,m)>=C$(b,p)))p=m;if(n!==null&&!(p!==null&&C$(b,n)>=C$(b,p)))p=n;if(o!==null&&!(p!==null&&C$(b,o)>=C$(b,p)))p=o;if
(f!==null&&!(p!==null&&C$(b,f)>=C$(b,p)))p=f;if(p===null)return null;q=(-1);if(p===k)q=4;if(p===l)q=5;if(p===m)q=0;if(p===n)q=1;if(p===o)q=2;if(p===f)q=3;return A5Y(c,d,e,q,Je(p,c,d,e));}
function Xe(a,b){return b===null?0:b.R>=a.cj&&b.R<=a.cE&&b.S>=a.ew&&b.S<=a.fC?1:0;}
function Sb(a,b){return b===null?0:b.U>=a.ex&&b.U<=a.fD&&b.S>=a.ew&&b.S<=a.fC?1:0;}
function ZQ(a,b){return b===null?0:b.U>=a.ex&&b.U<=a.fD&&b.R>=a.cj&&b.R<=a.cE?1:0;}
function ARR(a,b,c,d,e){return;}
function A5c(a){return 0;}
function A0m(a,b,c,d,e){return 1;}
function AAS(a,b,c,d,e,f){return 0;}
function AVj(a,b,c,d,e){return;}
function ARg(a,b,c,d,e,f){return;}
function A5y(){var b,c;BdS=Iw(B(260),1.0,1.0);BdT=Iw(B(261),1.0,1.0);BdU=Iw(B(262),1.0,1.0);BdV=Iw(B(263),1.0,1.0);BdW=Iw(B(260),1.0,1.0);BdX=Iw(B(260),1.0,1.5);BdY=A_m(B(260),1.0,1.0);BdZ=Iw(B(264),1.0,1.0);Bd0=A$5(B(265),1.0,1.0);Bcn=H(V,256);Bd1=$rt_createBooleanArray(256);Bd2=$rt_createBooleanArray(256);Bd3=$rt_createIntArray(256);Bd4=$rt_createBooleanArray(256);Bd5=$rt_createBooleanArray(256);Bd6=$rt_createIntArray(256);b=Di(Br(AWU(1,1),1.5),10.0);b.bl=BdW;Bct=b;b=Br(A9n(2),0.6000000238418579);b.bl=BdV;Bcp
=b;b=Br(A_e(3,2),0.5);b.bl=BdU;Bcq=b;b=Di(Br(C8(4,16,Bek),2.0),10.0);b.bl=BdW;Bcv=b;b=Di(Br(C8(5,4,Bel),2.0),5.0);b.bl=BdT;Bcx=b;b=Br(A$k(6,15),0.0);b.bl=BdV;BcD=b;b=Di(Br(C8(7,17,Bek),(-1.0)),6000000.0);b.bl=BdW;Bco=b;Bcj=G_(Br(A6R(8,Bdi),100.0),3);Bd7=G_(Br(AX4(9,Bdi),100.0),3);Bck=G_(Hd(Br(A6R(10,Bdj),0.0),1.0),255);Bd8=G_(Hd(Br(AX4(11,Bdj),100.0),1.0),255);b=Br(A93(12,18),0.5);b.bl=Bd0;BcI=b;b=Br(A$F(13,19),0.6000000238418579);b.bl=BdU;BcJ=b;b=Di(Br(TQ(14,32),3.0),5.0);b.bl=BdW;Bc3=b;b=Di(Br(TQ(15,33),3.0),
5.0);b.bl=BdW;Bc2=b;b=Di(Br(TQ(16,34),3.0),5.0);b.bl=BdW;Bc1=b;b=Br(A9F(17),2.0);b.bl=BdT;Bcy=b;b=G_(Br(A9t(18,52),0.20000000298023224),1);b.bl=BdV;Bcz=b;b=Br(A$I(19),0.6000000238418579);b.bl=BdV;BcK=b;b=Br(A8_(20,49,Bem,0),0.30000001192092896);b.bl=BdY;BcB=b;b=Br(C8(21,64,Ben),0.800000011920929);b.bl=BdZ;BcL=b;b=Br(C8(22,65,Ben),0.800000011920929);b.bl=BdZ;BcM=b;b=Br(C8(23,66,Ben),0.800000011920929);b.bl=BdZ;BcN=b;b=Br(C8(24,67,Ben),0.800000011920929);b.bl=BdZ;BcO=b;b=Br(C8(25,68,Ben),0.800000011920929);b.bl
=BdZ;BcP=b;b=Br(C8(26,69,Ben),0.800000011920929);b.bl=BdZ;BcQ=b;b=Br(C8(27,70,Ben),0.800000011920929);b.bl=BdZ;BcR=b;b=Br(C8(28,71,Ben),0.800000011920929);b.bl=BdZ;BcS=b;b=Br(C8(29,72,Ben),0.800000011920929);b.bl=BdZ;BcT=b;b=Br(C8(30,73,Ben),0.800000011920929);b.bl=BdZ;BcU=b;b=Br(C8(31,74,Ben),0.800000011920929);b.bl=BdZ;BcV=b;b=Br(C8(32,75,Ben),0.800000011920929);b.bl=BdZ;BcW=b;b=Br(C8(33,76,Ben),0.800000011920929);b.bl=BdZ;BcX=b;b=Br(C8(34,77,Ben),0.800000011920929);b.bl=BdZ;BcY=b;b=Br(C8(35,78,Ben),0.800000011920929);b.bl
=BdZ;BcZ=b;b=Br(C8(36,79,Ben),0.800000011920929);b.bl=BdZ;Bc0=b;b=Br(A1o(37,13),0.0);b.bl=BdV;BcE=b;b=Br(A1o(38,12),0.0);b.bl=BdV;BcF=b;b=Br(A1G(39,29),0.0);b.bl=BdV;BcG=Hd(b,0.125);b=Br(A1G(40,28),0.0);b.bl=BdV;BcH=b;b=Di(Br(AMk(41,39),3.0),10.0);b.bl=BdX;Bc5=b;b=Di(Br(AMk(42,38),5.0),10.0);b.bl=BdX;Bc4=b;b=Di(Br(AY3(43,1),2.0),10.0);b.bl=BdW;Bcr=b;b=Di(Br(AY3(44,0),2.0),10.0);b.bl=BdW;Bcs=b;b=Di(Br(C8(45,7,Bek),2.0),10.0);b.bl=BdW;Bcw=b;b=Br(A9J(46,8),0.0);b.bl=BdV;Bc7=b;b=Br(A_j(47,35),1.5);b.bl=BdT;Bc6=
b;b=Di(Br(C8(48,36,Bek),2.0),10.0);b.bl=BdW;BcC=b;b=Di(Br(AWU(49,37),10.0),10.0);b.bl=BdW;Bc8=b;b=Hd(Br(A$i(50,80),0.0),0.875);b.bl=BdT;BcA=b;b=Hd(Br(A$o(51,31),0.0),1.0);b.bl=BdT;Bd9=b;b=Br(A2M(52,Bcj.b),0.0);b.bl=BdT;Bd$=b;b=Br(A2M(53,Bck.b),0.0);b.bl=BdT;Bd_=b;b=Br(A$h(54),2.5);b.bl=BdT;Bea=b;b=Br(A$B(55,62),0.5);b.bl=BdX;Beb=b;b=Di(Br(TQ(56,50),3.0),5.0);b.bl=BdW;Bec=b;b=Di(Br(AMk(57,40),5.0),10.0);b.bl=BdX;Bed=b;b=Br(A_s(58),2.5);b.bl=BdT;Bee=b;b=Br(A9b(59,88),0.0);b.bl=BdV;Bef=b;b=Br(A_u(60),0.6000000238418579);b.bl
=BdU;Beg=b;b=Br(A2x(61,0),3.5);b.bl=BdW;Beh=b;b=Br(A2x(62,1),3.5);b.bl=BdW;Bei=Hd(b,0.875);c=0;while(c<256){if(Bcn.data[c]!==null){B3();Bcm.data[c]=A87(c-256|0);}c=c+1|0;}}
function TN(){}
function V3(){var a=this;Fv.call(a);a.dt=null;a.q=0;}
function BV(){var a=new V3();ASm(a);return a;}
function Beo(a){var b=new V3();P9(b,a);return b;}
function A94(a){var b=new V3();A1a(b,a);return b;}
function ASm(a){P9(a,10);}
function P9(a,b){a.dt=H(C,b);}
function A1a(a,b){var c,d;P9(a,b.q);c=Hq(b);d=0;while(d<a.dt.data.length){a.dt.data[d]=Il(c);d=d+1|0;}a.q=a.dt.data.length;}
function VT(a,b){var c;if(a.dt.data.length<b){c=a.dt.data.length>=1073741823?2147483647:Df(b,Df(a.dt.data.length*2|0,5));a.dt=Ea(a.dt,c);}}
function Be(a,b){L6(a,b);return a.dt.data[b];}
function CE(a){return a.q;}
function M8(a,b,c){var d;L6(a,b);d=a.dt.data[b];a.dt.data[b]=c;return d;}
function M(a,b){var c,d;VT(a,a.q+1|0);c=a.dt.data;d=a.q;a.q=d+1|0;c[d]=b;a.d3=a.d3+1|0;return 1;}
function AKr(a,b,c){var d;if(b>=0&&b<=a.q){VT(a,a.q+1|0);d=a.q;while(d>b){a.dt.data[d]=a.dt.data[d-1|0];d=d+(-1)|0;}a.dt.data[b]=c;a.q=a.q+1|0;a.d3=a.d3+1|0;return;}c=new BD;Z(c);J(c);}
function Ej(a,b){var c,d,e,f;L6(a,b);c=a.dt.data[b];a.q=a.q-1|0;while(b<a.q){d=a.dt.data;e=a.dt.data;f=b+1|0;d[b]=e[f];b=f;}a.dt.data[a.q]=null;a.d3=a.d3+1|0;return c;}
function GE(a,b){var c;c=AC5(a,b);if(c<0)return 0;Ej(a,c);return 1;}
function ES(a){ABO(a.dt,0,a.q,null);a.q=0;}
function L6(a,b){var c;if(b>=0&&b<a.q)return;c=new BD;Z(c);J(c);}
function AIo(){var a=this;C.call(a);a.fP=null;a.lZ=null;a.lO=null;a.lp=null;a.l6=null;a.lM=null;a.k4=null;a.k1=null;}
function AT$(a){var b=new AIo();ASo(b,a);return b;}
function ASo(a,b){a.fP=b;}
function AGo(a){var b,c;b=AT$(a.fP);if(a.lZ!==null)b.lZ=Ea(a.lZ,a.lZ.data.length);if(a.lO!==null)b.lO=Ea(a.lO,a.lO.data.length);if(a.lp!==null)b.lp=Ea(a.lp,a.lp.data.length);if(a.l6!==null)b.l6=Ea(a.l6,a.l6.data.length);if(a.lM!==null)b.lM=Ea(a.lM.gF(),a.lM.data.length);if(a.k4!==null)b.k4=Ea(a.k4,a.k4.data.length);a:{if(a.k1!==null){b.k1=H($rt_arraycls(BC),a.k1.data.length);c=0;while(true){if(c>=a.k1.data.length)break a;b.k1.data[c]=Ea(a.k1.data[c],a.k1.data[c].data.length);c=c+1|0;}}}return b;}
function ABf(a){var b,c;if(a.lZ===null){b=a.fP.f7;c=a.fP.fV;if(Bep===null)Bep=A61();a.lZ=IE(Bep,b,c);}return a.lZ.gF();}
function AI3(a){var b,c;if(a.lO===null){b=a.fP.f7;c=a.fP.fV;if(Beq===null)Beq=A0A();a.lO=IE(Beq,b,c);}return a.lO.gF();}
function AEo(a){var b,c;if(a.lp===null){b=a.fP.f7;c=a.fP.fV;if(Ber===null)Ber=A6w();a.lp=IE(Ber,b,c);}return a.lp.gF();}
function AMu(a){var b,c;if(a.l6===null){b=a.fP.f7;c=a.fP.fV;if(Bes===null)Bes=AUT();a.l6=IE(Bes,b,c);}return a.l6.gF();}
function AEe(a){var b,c;if(a.lM===null){b=a.fP.f7;c=a.fP.fV;if(Bet===null)Bet=AVM();a.lM=IE(Bet,b,c);}return a.lM.gF();}
function AIK(a){var b,c;if(a.k4===null){b=a.fP.f7;c=a.fP.fV;if(Beu===null)Beu=A5$();a.k4=IE(Beu,b,c);}return a.k4.gF();}
function AOt(){var a=this;Ev.call(a);a.jv=null;a.l$=0;}
function O2(){var a=new AOt();AT1(a);return a;}
function AT1(a){a.jv=$rt_createByteArray(32);}
function A4D(a,b){var c,d;TF(a,a.l$+1|0);c=a.jv.data;d=a.l$;a.l$=d+1|0;c[d]=b<<24>>24;}
function TD(a,b,c,d){var e,f,g,h,i;TF(a,a.l$+d|0);e=0;while(e<d){f=b.data;g=a.jv.data;h=a.l$;a.l$=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function TF(a,b){if(a.jv.data.length<b){b=Df(b,(a.jv.data.length*3|0)/2|0);a.jv=LV(a.jv,b);}}
function HP(a){return LV(a.jv,a.l$);}
function Ud(){}
function AGj(){var a=this;Jo.call(a);a.is=0;a.d0=null;}
function ACZ(a){var b=new AGj();A3N(b,a);return b;}
function A3N(a,b){Qh(a,b);a.d0=$rt_createByteArray(8);}
function Tb(a,b,c,d){var e;if(b!==null){a.kQ.jB(b,c,d);a.is=a.is+d|0;return;}e=new Eg;Z(e);J(e);}
function LP(a,b){a.kQ.qT(b);a.is=a.is+1|0;}
function AMt(a,b){W6(a,$rt_doubleToLongBits(b));}
function AMl(a,b){K1(a,$rt_floatToIntBits(b));}
function K1(a,b){a.d0.data[0]=b>>24<<24>>24;a.d0.data[1]=b>>16<<24>>24;a.d0.data[2]=b>>8<<24>>24;a.d0.data[3]=b<<24>>24;a.kQ.jB(a.d0,0,4);a.is=a.is+4|0;}
function W6(a,b){a.d0.data[0]=Long_shr(b,56).lo<<24>>24;a.d0.data[1]=Long_shr(b,48).lo<<24>>24;a.d0.data[2]=Long_shr(b,40).lo<<24>>24;a.d0.data[3]=b.hi<<24>>24;a.d0.data[4]=Long_shr(b,24).lo<<24>>24;a.d0.data[5]=Long_shr(b,16).lo<<24>>24;a.d0.data[6]=Long_shr(b,8).lo<<24>>24;a.d0.data[7]=b.lo<<24>>24;a.kQ.jB(a.d0,0,8);a.is=a.is+8|0;}
function RA(a,b){a.d0.data[0]=b>>8<<24>>24;a.d0.data[1]=b<<24>>24;a.kQ.jB(a.d0,0,2);a.is=a.is+2|0;}
function ALg(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function AOF(a,b){var c,d,e;c=AGn(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new BA;Bb(b,B(266));J(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Tb(a,e,0,AL_(a,b,e,ALg(a,d,e,0)));}
function AGn(a,b){var c,d,e,f;c=0;d=Q(b);e=0;while(e<d){f=P(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AL_(a,b,c,d){var e,f,g,h,i,j,k;e=Q(b);f=0;while(f<e){g=P(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AFO(){BB.call(this);this.Gu=null;}
function AJI(a){var b=new AFO();AXm(b,a);return b;}
function AXm(a,b){Z(a);a.Gu=b;}
function N0(){var a=this;C.call(a);a.cn=null;a.r=0;a.E=0;a.y=Long_ZERO;a.vm=null;a.qb=0;a.ic=0;a.nQ=Long_ZERO;a.cb=null;a.jG=null;a.f5=null;}
function ACH(a,b,c,d){a.vm=b;a.qb=c;a.ic=d;}
function AIY(a,b,c,d,e){var f;if(d<=0&&e&&a.cn!==null)return;if(a.E>0&&e){f=$rt_createByteArray(a.E+d|0);CT(a.cn,a.r,f,0,a.E);CT(b,c,f,a.E,d);a.cn=f;a.r=0;a.E=a.E+d|0;}else{a.cn=b;a.r=c;a.E=d;}}
function WG(){N0.call(this);this.wU=0;}
function AFN(a,b,c){var d;a.wU=0;d=new MU;d.sz=Long_fromInt(-1);d.iR=(-1);d.yw=$rt_createByteArray(4);d.cD=null;d.fT=null;d.v=a;a.jG=d;d=a.jG;if(c)b= -b;return AAk(d,b);}
function AGh(a,b){var c;if(a.jG===null)return (-2);c=AGE(a.jG,b);if(c==1)a.wU=1;return c;}
function AAQ(a){return a.jG.bV!=12?0:1;}
function Rx(){}
function ANQ(){C.call(this);}
function SZ(){var a=this;C.call(a);a.A2=null;a.wA=null;}
function AG7(a){CY(a.A2,(ADE(a.wA.result)?1:0)?null:A2J(a.wA.result));}
function ARh(a){AG7(a);}
function S0(){C.call(this);this.ET=null;}
function AFY(a){CY(a.ET,null);}
function A8j(a){AFY(a);}
function AC2(){C.call(this);}
function ZU(){var a=this;C.call(a);a.bA=null;a.cR=0;a.eT=0;}
function AFD(a){var b=new ZU();A8d(b,a);return b;}
function AAy(){var a=new ZU();AMW(a);return a;}
function A8d(a,b){a.cR=(-1);a.eT=0;a.bA=b;}
function AMW(a){a.cR=(-1);a.eT=0;}
function AK$(a,b,c,d,e,f){a.cR=f;Oy(a,b,c,d,e);a.cR=(-1);}
function AHj(a,b,c,d,e){a.eT=1;Oy(a,b,c,d,e);a.eT=0;}
function Oy(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;f=b.ij();if(f){if(f!=4){if(f==1){BE();g=Bdg;h=b.dX(a.bA,c,d,e);CW(g,h,h,h);UF(a,b,Cr(a.bA,c,d,e),c,d,e);return 1;}if(f==6){BE();g=Bdg;h=b.dX(a.bA,c,d,e);CW(g,h,h,h);QK(a,b,Cr(a.bA,c,d,e),c,d-0.0625,e);return 1;}if(f==2){i=Cr(a.bA,c,d,e);BE();j=Bdg;k=b.dX(a.bA,c,d,e);if(Bd6.data[b.b]>0)k=1.0;CW(j,k,k,k);if(i==1)It(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if
(i==2)It(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,0.0);else if(i==3)It(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(i!=4)It(a,b,c,d,e,0.0,0.0);else It(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;}if(f!=3){if(f!=5)return 0;BE();g=Bdg;l=b.cP(0);if(a.cR>=0)l=a.cR;k=b.dX(a.bA,c,d,e);CW(g,k,k,k);f=(l&15)<<4;m=f+16|0;n=l&240;if((((c+d|0)+e|0)&1)!=1){l=f;f=m;m=l;}k=f;o=k/256.0;p=(k+15.989999771118164)/256.0;k
=n;h=k/256.0;q=(k+15.989999771118164)/256.0;k=m;r=k/256.0;s=(k+15.989999771118164)/256.0;if(BN(a.bA,c-1|0,d,e)){t=c+0.05000000074505806;u=(d+1|0)+0.125;v=(e+1|0)+0.125;w=o;x=h;G(g,t,u,v,w,x);y=d-0.125;z=q;G(g,t,y,v,w,z);v=e-0.125;w=p;G(g,t,y,v,w,z);G(g,t,u,v,w,x);}b=a.bA;l=c+1|0;if(BN(b,l,d,e)){t=l-0.05000000074505806;u=d-0.125;v=(e+1|0)+0.125;w=p;x=q;G(g,t,u,v,w,x);y=(d+1|0)+0.125;z=h;G(g,t,y,v,w,z);v=e-0.125;w=o;G(g,t,y,v,w,z);G(g,t,u,v,w,x);}if(BN(a.bA,c,d,e-1|0)){t=l+0.125;u=d-0.125;w=e+0.05000000074505806;v
=s;x=q;G(g,t,u,w,v,x);y=(d+1|0)+0.125;z=h;G(g,t,y,w,v,z);t=c-0.125;v=r;G(g,t,y,w,v,z);G(g,t,u,w,v,x);}b=a.bA;e=e+1|0;if(BN(b,c,d,e)){t=l+0.125;u=(d+1|0)+0.125;v=e-0.05000000074505806;w=r;x=h;G(g,t,u,v,w,x);y=d-0.125;z=q;G(g,t,y,v,w,z);t=c-0.125;w=s;G(g,t,y,v,w,z);G(g,t,u,v,w,x);}return 1;}BE();g=Bdg;l=b.cP(0);if(a.cR>=0)l=a.cR;k=b.dX(a.bA,c,d,e);CW(g,k,k,k);f=(l&15)<<4;m=l&240;k=f;ba=k/256.0;o=(k+15.989999771118164)/256.0;k=m;bb=k/256.0;r=k+15.989999771118164;bc=r/256.0;b=a.bA;l=d-1|0;if(!BN(b,c,l,e)&&!C4(Bd9,
a.bA,c,l,e)){if((((c+d|0)+e|0)&1)!=1){s=ba;bd=o;be=bb;bf=bc;}else{be=(m+16|0)/256.0;bf=(r+16.0)/256.0;s=ba;bd=o;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){k=s;s=bd;bd=k;}if(C4(Bd9,a.bA,c-1|0,d,e)){k=c;t=k+0.20000000298023224;p=d;u=p+1.399999976158142+0.0625;v=e+1|0;w=s;x=be;G(g,t,u,v,w,x);y=k;z=p+0.0625;bg=bf;G(g,y,z,v,w,bg);bh=e;bi=bd;G(g,y,z,bh,bi,bg);G(g,t,u,bh,bi,x);G(g,t,u,bh,bi,x);G(g,y,z,bh,bi,bg);G(g,y,z,v,w,bg);G(g,t,u,v,w,x);}b=Bd9;j=a.bA;f=c+1|0;if(C4(b,j,f,d,e)){k=f;t=k-0.20000000298023224;p=d;u
=p+1.399999976158142+0.0625;v=e;w=bd;x=be;G(g,t,u,v,w,x);y=k;z=p+0.0625;bg=bf;G(g,y,z,v,w,bg);bh=e+1|0;bi=s;G(g,y,z,bh,bi,bg);G(g,t,u,bh,bi,x);G(g,t,u,bh,bi,x);G(g,y,z,bh,bi,bg);G(g,y,z,v,w,bg);G(g,t,u,v,w,x);}if(C4(Bd9,a.bA,c,d,e-1|0)){t=c;k=d;u=k+1.399999976158142+0.0625;p=e;v=p+0.20000000298023224;w=s;x=be;G(g,t,u,v,w,x);y=k+0.0625;z=p;bg=bf;G(g,t,y,z,w,bg);bh=f;bi=bd;G(g,bh,y,z,bi,bg);G(g,bh,u,v,bi,x);G(g,bh,u,v,bi,x);G(g,bh,y,z,bi,bg);G(g,t,y,z,w,bg);G(g,t,u,v,w,x);}b=Bd9;j=a.bA;l=e+1|0;if(C4(b,j,c,d,l))
{t=f;k=d;u=k+1.399999976158142+0.0625;p=l;v=p-0.20000000298023224;w=bd;x=be;G(g,t,u,v,w,x);y=k+0.0625;z=p;bg=bf;G(g,t,y,z,w,bg);bh=c;bi=s;G(g,bh,y,z,bi,bg);G(g,bh,u,v,bi,x);G(g,bh,u,v,bi,x);G(g,bh,y,z,bi,bg);G(g,t,y,z,w,bg);G(g,t,u,v,w,x);}b=Bd9;j=a.bA;n=d+1|0;if(C4(b,j,c,n,e)){q=c;k=q+0.5;bf=k+0.5;bj=k-0.5;k=e;p=k+0.5;bd=p+0.5;be=p-0.5;if(((c+n|0)+e|0)&1){t=q;k=n;u=k+(-0.20000000298023224);v=bd;w=o;x=bb;G(g,t,u,v,w,x);y=k;z=be;bg=bc;G(g,t,y,z,w,bg);bh=f;bi=ba;G(g,bh,y,z,bi,bg);G(g,bh,u,v,bi,x);k=(m+16|0)/256.0;o
=(r+16.0)/256.0;x=k;G(g,bh,u,z,w,x);bg=o;G(g,bh,y,v,w,bg);G(g,t,y,v,bi,bg);G(g,t,u,z,bi,x);}else{t=bj;p=n;u=p+(-0.20000000298023224);v=k;w=o;x=bb;G(g,t,u,v,w,x);y=bf;z=p;bg=bc;G(g,y,z,v,w,bg);bh=l;bi=ba;G(g,y,z,bh,bi,bg);G(g,t,u,bh,bi,x);k=(m+16|0)/256.0;o=(r+16.0)/256.0;x=k;G(g,y,u,bh,w,x);bg=o;G(g,t,z,bh,w,bg);G(g,t,z,v,bi,bg);G(g,y,u,v,bi,x);}}}else{k=c;p=k+0.5;bk=p+0.20000000298023224;s=p-0.20000000298023224;h=e;q=h+0.5;bf=q+0.20000000298023224;bj=q-0.20000000298023224;bd=p-0.30000001192092896;be=p+0.30000001192092896;bl
=q-0.30000001192092896;bm=q+0.30000001192092896;t=bd;bd=d;u=bd+1.399999976158142;v=e+1|0;w=o;x=bb;G(g,t,u,v,w,x);y=bk;z=bd;bg=bc;G(g,y,z,v,w,bg);bh=h;bi=ba;G(g,y,z,bh,bi,bg);G(g,t,u,bh,bi,x);t=be;G(g,t,u,bh,w,x);y=s;G(g,y,z,bh,w,bg);G(g,y,z,v,bi,bg);G(g,t,u,v,bi,x);o=(m+16|0)/256.0;h=(r+16.0)/256.0;t=c+1|0;y=bm;bn=o;G(g,t,u,y,w,bn);bo=bj;bp=h;G(g,t,z,bo,w,bp);bq=k;G(g,bq,z,bo,bi,bp);G(g,bq,u,y,bi,bn);y=bl;G(g,bq,u,y,w,bn);bo=bf;G(g,bq,z,bo,w,bp);G(g,t,z,bo,bi,bp);G(g,t,u,y,bi,bn);k=p-0.5;o=p+0.5;h=q-0.5;r=q
+0.5;s=p-0.4000000059604645;p=p+0.4000000059604645;ba=q-0.4000000059604645;q=q+0.4000000059604645;y=s;G(g,y,u,bh,bi,bn);bo=k;G(g,bo,z,bh,bi,bp);G(g,bo,z,v,w,bp);G(g,y,u,v,w,bn);y=p;G(g,y,u,v,bi,bn);bo=o;G(g,bo,z,v,bi,bp);G(g,bo,z,bh,w,bp);G(g,y,u,bh,w,bn);v=q;G(g,bq,u,v,bi,x);y=r;G(g,bq,z,y,bi,bg);G(g,t,z,y,w,bg);G(g,t,u,v,w,x);v=ba;G(g,t,u,v,bi,x);y=h;G(g,t,z,y,bi,bg);G(g,bq,z,y,w,bg);G(g,bq,u,v,w,x);}return 1;}BE();g=Bdg;br=0;o=b.cj;p=b.cE;b.cE=p-JP(a,c,d,e);if(!(!a.eT&&!b.d9(a.bA,c,d-1|0,e,0))){k=0.5*b.dX(a.bA,
c,d-1|0,e);CW(g,k,k,k);PH(a,b,c,d,e,b.cP(0));br=1;}if(!(!a.eT&&!b.d9(a.bA,c,d+1|0,e,1))){k=b.dX(a.bA,c,d+1|0,e)*1.0;CW(g,k,k,k);MR(a,b,c,d,e,b.cP(1));br=1;}l=e-1|0;b.cj=p-JP(a,c,d,l);if(!(!a.eT&&b.cE<=b.cj&&!b.d9(a.bA,c,d,l,2))){k=0.800000011920929*b.dX(a.bA,c,d,l);CW(g,k,k,k);Mv(a,b,c,d,e,b.cP(2));br=1;}l=e+1|0;b.cj=p-JP(a,c,d,l);if(!(!a.eT&&b.cE<=b.cj&&!b.d9(a.bA,c,d,l,3))){k=0.800000011920929*b.dX(a.bA,c,d,l);CW(g,k,k,k);Nw(a,b,c,d,e,b.cP(3));br=1;}l=c-1|0;b.cj=p-JP(a,l,d,e);if(!(!a.eT&&b.cE<=b.cj&&!b.d9(a.bA,
l,d,e,4))){k=0.6000000238418579*b.dX(a.bA,l,d,e);CW(g,k,k,k);NH(a,b,c,d,e,b.cP(4));br=1;}l=c+1|0;b.cj=p-JP(a,l,d,e);if(!(!a.eT&&b.cE<=b.cj&&!b.d9(a.bA,l,d,e,5))){k=0.6000000238418579*b.dX(a.bA,l,d,e);CW(g,k,k,k);Nt(a,b,c,d,e,b.cP(5));br=1;}b.cj=o;b.cE=p;return br;}BE();g=Bdg;br=0;if(!(!a.eT&&!b.d9(a.bA,c,d-1|0,e,0))){o=b.dX(a.bA,c,d-1|0,e);if(Bd6.data[b.b]>0)o=1.0;k=0.5*o;CW(g,k,k,k);PH(a,b,c,d,e,b.jC(a.bA,c,d,e,0));br=1;}if(!(!a.eT&&!b.d9(a.bA,c,d+1|0,e,1))){o=b.dX(a.bA,c,d+1|0,e);if(Bd6.data[b.b]>0)o=1.0;k
=o*1.0;CW(g,k,k,k);MR(a,b,c,d,e,b.jC(a.bA,c,d,e,1));br=1;}if(!(!a.eT&&!b.d9(a.bA,c,d,e-1|0,2))){o=b.dX(a.bA,c,d,e-1|0);if(Bd6.data[b.b]>0)o=1.0;k=0.800000011920929*o;CW(g,k,k,k);Mv(a,b,c,d,e,b.jC(a.bA,c,d,e,2));br=1;}if(!(!a.eT&&!b.d9(a.bA,c,d,e+1|0,3))){o=b.dX(a.bA,c,d,e+1|0);if(Bd6.data[b.b]>0)o=1.0;k=0.800000011920929*o;CW(g,k,k,k);Nw(a,b,c,d,e,b.jC(a.bA,c,d,e,3));br=1;}if(!(!a.eT&&!b.d9(a.bA,c-1|0,d,e,4))){o=b.dX(a.bA,c-1|0,d,e);if(Bd6.data[b.b]>0)o=1.0;k=0.6000000238418579*o;CW(g,k,k,k);NH(a,b,c,d,e,b.jC(a.bA,
c,d,e,4));br=1;}if(!(!a.eT&&!b.d9(a.bA,c+1|0,d,e,5))){o=b.dX(a.bA,c+1|0,d,e);if(Bd6.data[b.b]>0)o=1.0;k=0.6000000238418579*o;CW(g,k,k,k);Nt(a,b,c,d,e,b.jC(a.bA,c,d,e,5));br=1;}return br;}
function It(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj;BE();h=Bdg;i=b.cP(0);if(a.cR>=0)i=a.cR;j=(i&15)<<4;i=i&240;k=j;l=k/256.0;k=(k+15.989999771118164)/256.0;m=i;n=m/256.0;m=(m+15.989999771118164)/256.0;o=l+0.02734375;p=n+0.0234375;q=l+0.03515625;r=n+0.03125;s=c+0.5;t=e+0.5;u=s-0.5;v=s+0.5;w=t-0.5;x=t+0.5;y=s+f*0.375;z=y-0.0625;ba=d+0.625;c=t+g*0.375;bb=c-0.0625;bc=o;bd=p;G(h,z,ba,bb,bc,bd);be=c+0.0625;bf=r;G(h,z,ba,be,bc,bf);bc=y+0.0625;z=q;G(h,bc,ba,be,z,bf);G(h,
bc,ba,bb,z,bd);c=s-0.0625;bc=c;z=d+1.0;ba=w;bd=l;be=n;G(h,bc,z,ba,bd,be);bb=c+f;bf=d;bg=w+g;bh=m;G(h,bb,bf,bg,bd,bh);bi=x+g;bj=k;G(h,bb,bf,bi,bj,bh);bb=x;G(h,bc,z,bb,bj,be);bc=s+0.0625;G(h,bc,z,bb,bd,be);bb=s+f+0.0625;G(h,bb,bf,bi,bd,bh);G(h,bb,bf,bg,bj,bh);G(h,bc,z,ba,bj,be);bc=u;c=t+0.0625;ba=c;G(h,bc,z,ba,bd,be);bb=u+f;bg=c+g;G(h,bb,bf,bg,bd,bh);bi=v+f;G(h,bi,bf,bg,bj,bh);bg=v;G(h,bg,z,ba,bj,be);c=t-0.0625;ba=c;G(h,bg,z,ba,bd,be);bg=c+g;G(h,bi,bf,bg,bd,bh);G(h,bb,bf,bg,bj,bh);G(h,bc,z,ba,bj,be);}
function UF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;BE();g=Bdg;h=b.qv(0,c);if(a.cR>=0)h=a.cR;c=(h&15)<<4;h=h&240;i=c;j=i/256.0;k=(i+15.989999771118164)/256.0;i=h;l=i/256.0;i=(i+15.989999771118164)/256.0;d=d+0.5;m=d-0.44999998807907104;d=d+0.44999998807907104;f=f+0.5;n=f-0.44999998807907104;f=f+0.44999998807907104;o=m;p=e+1.0;q=n;r=j;s=l;G(g,o,p,q,r,s);t=e;u=i;G(g,o,t,q,r,u);v=d;w=f;x=k;G(g,v,t,w,x,u);G(g,v,p,w,x,s);G(g,v,p,w,r,s);G(g,v,t,w,r,u);G(g,o,t,q,x,u);G(g,o,p,q,x,s);G(g,o,p,w,r,s);G(g,o,
t,w,r,u);G(g,v,t,q,x,u);G(g,v,p,q,x,s);G(g,v,p,q,r,s);G(g,v,t,q,r,u);G(g,o,t,w,x,u);G(g,o,p,w,x,s);}
function QK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;BE();g=Bdg;h=b.qv(0,c);if(a.cR>=0)h=a.cR;i=(h&15)<<4;c=h&240;j=i;k=j/256.0;j=(j+15.989999771118164)/256.0;l=c;m=l/256.0;l=(l+15.989999771118164)/256.0;d=d+0.5;n=d-0.25;o=d+0.25;p=f+0.5;q=p-0.5;r=p+0.5;s=n;t=e+1.0;u=q;v=k;w=m;G(g,s,t,u,v,w);x=e;y=l;G(g,s,x,u,v,y);z=r;ba=j;G(g,s,x,z,ba,y);G(g,s,t,z,ba,w);G(g,s,t,z,v,w);G(g,s,x,z,v,y);G(g,s,x,u,ba,y);G(g,s,t,u,ba,w);s=o;G(g,s,t,z,v,w);G(g,s,x,z,v,y);G(g,s,x,u,ba,y);G(g,s,t,u,ba,w);G(g,s,t,
u,v,w);G(g,s,x,u,v,y);G(g,s,x,z,ba,y);G(g,s,t,z,ba,w);e=d-0.5;d=d+0.5;f=p-0.25;j=p+0.25;u=e;z=f;G(g,u,t,z,v,w);G(g,u,x,z,v,y);s=d;G(g,s,x,z,ba,y);G(g,s,t,z,ba,w);G(g,s,t,z,v,w);G(g,s,x,z,v,y);G(g,u,x,z,ba,y);G(g,u,t,z,ba,w);z=j;G(g,s,t,z,v,w);G(g,s,x,z,v,y);G(g,u,x,z,ba,y);G(g,u,t,z,ba,w);G(g,u,t,z,v,w);G(g,u,x,z,v,y);G(g,s,x,z,ba,y);G(g,s,t,z,ba,w);}
function JP(a,b,c,d){return CR(a.bA,b,c,d)!==Bdi?1.0:Cr(a.bA,b,c,d)/9.0;}
function PH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;BE();g=Bdg;if(a.cR>=0)f=a.cR;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;l=f;m=l/256.0;l=(l+15.989999771118164)/256.0;i=c+b.ex;c=c+b.fD;d=d+b.cj;n=e+b.ew;o=e+b.fC;p=i;q=d;r=o;s=j;t=l;G(g,p,q,r,s,t);u=n;v=m;G(g,p,q,u,s,v);p=c;s=k;G(g,p,q,u,s,v);G(g,p,q,r,s,t);}
function MR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;BE();g=Bdg;if(a.cR>=0)f=a.cR;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;i=f;l=i/256.0;m=(i+15.989999771118164)/256.0;i=c+b.ex;c=c+b.fD;d=d+b.cE;n=e+b.ew;o=e+b.fC;p=c;q=d;r=o;s=k;t=m;G(g,p,q,r,s,t);u=n;v=l;G(g,p,q,u,s,v);p=i;s=j;G(g,p,q,u,s,v);G(g,p,q,r,s,t);}
function Mv(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;BE();g=Bdg;if(a.cR>=0)f=a.cR;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;if(b.cj>=0.0&&b.cE<=1.0){l=f;m=(l+b.cj*15.989999771118164)/256.0;n=(l+b.cE*15.989999771118164)/256.0;}else{i=f;m=i/256.0;n=(i+15.989999771118164)/256.0;}i=c;o=i+b.ex;i=i+b.fD;l=d;p=l+b.cj;q=l+b.cE;l=e+b.ew;r=o;s=q;t=l;u=k;v=m;G(g,r,s,t,u,v);w=i;x=j;G(g,w,s,t,x,v);s=p;v=n;G(g,w,s,t,x,v);G(g,r,s,t,u,v);}
function Nw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;BE();g=Bdg;if(a.cR>=0)f=a.cR;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;if(b.cj>=0.0&&b.cE<=1.0){l=f;m=(l+b.cj*15.989999771118164)/256.0;n=(l+b.cE*15.989999771118164)/256.0;}else{i=f;m=i/256.0;n=(i+15.989999771118164)/256.0;}i=c;o=i+b.ex;i=i+b.fD;p=d;q=p+b.cj;l=p+b.cE;p=e+b.fC;r=o;s=l;t=p;u=j;v=m;G(g,r,s,t,u,v);w=q;x=n;G(g,r,w,t,u,x);r=i;u=k;G(g,r,w,t,u,x);G(g,r,s,t,u,v);}
function NH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;BE();g=Bdg;if(a.cR>=0)f=a.cR;h=(f&15)<<4;i=f&240;j=h;k=j/256.0;l=(j+15.989999771118164)/256.0;if(b.cj>=0.0&&b.cE<=1.0){m=i;n=(m+b.cj*15.989999771118164)/256.0;o=(m+b.cE*15.989999771118164)/256.0;}else{j=i;n=j/256.0;o=(j+15.989999771118164)/256.0;}j=c+b.ex;p=d;m=p+b.cj;p=p+b.cE;q=e;r=q+b.ew;q=q+b.fC;s=j;t=p;u=q;v=l;w=n;G(g,s,t,u,v,w);x=r;y=k;G(g,s,t,x,y,w);t=m;w=o;G(g,s,t,x,y,w);G(g,s,t,u,v,w);}
function Nt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;BE();g=Bdg;if(a.cR>=0)f=a.cR;h=(f&15)<<4;i=f&240;j=h;k=j/256.0;l=(j+15.989999771118164)/256.0;if(b.cj>=0.0&&b.cE<=1.0){m=i;n=(m+b.cj*15.989999771118164)/256.0;o=(m+b.cE*15.989999771118164)/256.0;}else{j=i;n=j/256.0;o=(j+15.989999771118164)/256.0;}j=c+b.fD;p=d;m=p+b.cj;p=p+b.cE;q=e;r=q+b.ew;q=q+b.fC;s=j;t=m;u=q;v=k;w=o;G(g,s,t,u,v,w);x=r;y=l;G(g,s,t,x,y,w);t=p;w=n;G(g,s,t,x,y,w);G(g,s,t,u,v,w);}
function IU(a,b){var c,d;BE();c=Bdg;d=b.ij();if(d){if(d==1){Bx(c);B1(c,0.0,(-1.0),0.0);UF(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else if(d==6){Bx(c);B1(c,0.0,(-1.0),0.0);QK(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else if(d==2){Bx(c);B1(c,0.0,(-1.0),0.0);It(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bt(c);}}else{Bj((-0.5),(-0.5),(-0.5));Bx(c);B1(c,0.0,(-1.0),0.0);PH(a,b,0.0,0.0,0.0,b.cP(0));Bt(c);Bx(c);B1(c,0.0,1.0,0.0);MR(a,b,0.0,0.0,0.0,b.cP(1));Bt(c);Bx(c);B1(c,0.0,0.0,(-1.0));Mv(a,b,0,0,0,b.cP(2));Bt(c);Bx(c);B1(c,0.0,
0.0,1.0);Nw(a,b,0,0,0,b.cP(3));Bt(c);Bx(c);B1(c,(-1.0),0.0,0.0);NH(a,b,0,0,0,b.cP(4));Bt(c);Bx(c);B1(c,1.0,0.0,0.0);Nt(a,b,0,0,0,b.cP(5));Bt(c);Bj(0.5,0.5,0.5);}}
function ADz(){var a=this;C.call(a);a.i2=null;a.g2=null;a.fW=0;a.fX=0;a.oZ=0.0;a.o0=0.0;a.oY=0.0;a.b8=0.0;a.cd=0.0;a.bY=0.0;a.wT=0;a.mW=0;a.l0=0;a.jr=0;a.Iw=0;}
function BK(a,b){var c=new ADz();A7D(c,a,b);return c;}
function A7D(a,b,c){a.wT=0;a.mW=0;a.l0=0;a.jr=1;a.Iw=0;a.fW=b;a.fX=c;}
function BH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;a.i2=H(E3,8);a.g2=H(Gd,6);i=b+e;j=c+f;k=d+g;l=b-h;c=c-h;d=d-h;i=i+h;j=j+h;h=k+h;if(!a.l0){b=l;l=i;i=b;}a:{m=Hx(i,c,d,0.0,0.0);n=Hx(l,c,d,0.0,8.0);o=Hx(l,j,d,8.0,8.0);p=Hx(i,j,d,8.0,0.0);q=Hx(i,c,h,0.0,0.0);r=Hx(l,c,h,0.0,8.0);s=Hx(l,j,h,8.0,8.0);t=Hx(i,j,h,8.0,0.0);a.i2.data[0]=m;a.i2.data[1]=n;a.i2.data[2]=o;a.i2.data[3]=p;a.i2.data[4]=q;a.i2.data[5]=r;a.i2.data[6]=s;a.i2.data[7]=t;u=a.g2.data;v=new Gd;w=H(E3,4);x=w.data;x[0]=r;x[1]=n;x[2]
=o;x[3]=s;HG(v,w,(a.fW+g|0)+e|0,a.fX+g|0,((a.fW+g|0)+e|0)+g|0,(a.fX+g|0)+f|0);u[0]=v;u=a.g2.data;v=new Gd;w=H(E3,4);x=w.data;x[0]=m;x[1]=q;x[2]=t;x[3]=p;HG(v,w,a.fW,a.fX+g|0,a.fW+g|0,(a.fX+g|0)+f|0);u[1]=v;x=a.g2.data;v=new Gd;w=H(E3,4);u=w.data;u[0]=r;u[1]=q;u[2]=m;u[3]=n;HG(v,w,a.fW+g|0,a.fX,(a.fW+g|0)+e|0,a.fX+g|0);x[2]=v;u=a.g2.data;v=new Gd;w=H(E3,4);x=w.data;x[0]=o;x[1]=p;x[2]=t;x[3]=s;HG(v,w,(a.fW+g|0)+e|0,a.fX,((a.fW+g|0)+e|0)+e|0,a.fX+g|0);u[3]=v;u=a.g2.data;v=new Gd;w=H(E3,4);x=w.data;x[0]=n;x[1]=
m;x[2]=p;x[3]=o;HG(v,w,a.fW+g|0,a.fX+g|0,(a.fW+g|0)+e|0,(a.fX+g|0)+f|0);u[4]=v;w=a.g2.data;v=new Gd;x=H(E3,4);u=x.data;u[0]=q;u[1]=r;u[2]=s;u[3]=t;HG(v,x,((a.fW+g|0)+e|0)+g|0,a.fX+g|0,(((a.fW+g|0)+e|0)+g|0)+e|0,(a.fX+g|0)+f|0);w[5]=v;if(a.l0){y=0;while(true){if(y>=a.g2.data.length)break a;v=a.g2.data[y];w=H(E3,v.hi.data.length);z=w.data;e=0;while(e<v.hi.data.length){z[e]=v.hi.data[(v.hi.data.length-e|0)-1|0];e=e+1|0;}v.hi=w;y=y+1|0;}}}}
function BG(a,b,c,d){a.oZ=b;a.o0=c;a.oY=d;}
function B8(a,b){var c,d,e,f,g,h,i;if(a.jr){if(!a.wT){a.mW=JF(1);EY(a.mW,4864);BE();c=Bdg;d=0;while(d<a.g2.data.length){Bx(c);e=a.g2.data[d];f=J_(Z0(e.hi.data[1].hP,e.hi.data[0].hP));g=J_(Z0(e.hi.data[1].hP,e.hi.data[2].hP));h=J_(BF(f.R*g.S-f.S*g.R,f.S*g.U-f.U*g.S,f.U*g.R-f.R*g.U));B1(c, -h.U, -h.R, -h.S);i=0;while(i<4){h=e.hi.data[i];G(c,h.hP.U*b,h.hP.R*b,h.hP.S*b,h.v6,h.v8);i=i+1|0;}Bt(c);d=d+1|0;}E6();a.wT=1;}if(a.b8===0.0&&a.cd===0.0&&a.bY===0.0){if(a.oZ===0.0&&a.o0===0.0&&a.oY===0.0)FG(a.mW);else{Bj(a.oZ
*b,a.o0*b,a.oY*b);FG(a.mW);Bj( -a.oZ*b, -a.o0*b, -a.oY*b);}}else{Ca();Bj(a.oZ*b,a.o0*b,a.oY*b);if(a.bY!==0.0)Bs(a.bY*57.2957763671875,0.0,0.0,1.0);if(a.cd!==0.0)Bs(a.cd*57.2957763671875,0.0,1.0,0.0);if(a.b8!==0.0)Bs(a.b8*57.2957763671875,1.0,0.0,0.0);FG(a.mW);BS();}}}
function Es(){C.call(this);}
var Bev=null;var Beq=null;var Bep=null;var Ber=null;var Bes=null;var Beu=null;var Bet=null;var BdO=null;var Bew=null;var Bex=null;function ACh(b,c){var d;if(Eb(c)){if(Bev===null)Bev=ARw();c=Bev;if(c.hasOwnProperty($rt_ustr(b)))b=(c[$rt_ustr(b)].value!==null?$rt_str(c[$rt_ustr(b)].value):null);d=Gu(b,95);c=d<=0?B(9):DO(b,d+1|0);}return c;}
function IE(b,c,d){var e,f,g,h,i,j;if(Eb(d))e=c;else{e=new R;T(e);e=S(E(E(E(e,c),B(267)),d));}f=b.hasOwnProperty($rt_ustr(e))?b[$rt_ustr(e)]:b.hasOwnProperty($rt_ustr(c))?b[$rt_ustr(c)]:b.root;g=H(BC,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=(f[i].value!==null?$rt_str(f[i].value):null);i=i+1|0;}return g;}
function ARw(){return {"ksh":{"value":"ksh-Latn-DE"},"ksj":{"value":"ksj-Latn-ZZ"},"cch":{"value":"cch-Latn-NG"},"und-Khar":{"value":"pra-Khar-PK"},"gkn":{"value":"gkn-Latn-ZZ"},"ksr":{"value":"ksr-Latn-ZZ"},"und-Mani":{"value":"xmn-Mani-CN"},"gkp":{"value":"gkp-Latn-ZZ"},"xmf":{"value":"xmf-Geor-GE"},"ccp":{"value":"ccp-Cakm-BD"},"ted":{"value":"ted-Latn-ZZ"},"und-Mand":{"value":"myz-Mand-IR"},"ktb":{"value":"ktb-Ethi-ZZ"},"xmn":{"value":"xmn-Mani-CN"},"sd-Sind":{"value":"sd-Sind-IN"},"xmr":{"value":"xmr-Merc-SD"}
,"tem":{"value":"tem-Latn-SL"},"und-Mroo":{"value":"mro-Mroo-BD"},"teo":{"value":"teo-Latn-UG"},"tet":{"value":"tet-Latn-TL"},"ktm":{"value":"ktm-Latn-ZZ"},"glk":{"value":"glk-Arab-IR"},"kto":{"value":"kto-Latn-ZZ"},"und-Soyo":{"value":"cmg-Soyo-MN"},"xna":{"value":"xna-Narb-SA"},"tfi":{"value":"tfi-Latn-ZZ"},"kub":{"value":"kub-Latn-ZZ"},"kue":{"value":"kue-Latn-ZZ"},"kud":{"value":"kud-Latn-ZZ"},"xnr":{"value":"xnr-Deva-IN"},"ceb":{"value":"ceb-Latn-PH"},"kuj":{"value":"kuj-Latn-ZZ"},"kum":{"value":"kum-Cyrl-RU"}
,"kun":{"value":"kun-Latn-ZZ"},"gmm":{"value":"gmm-Latn-ZZ"},"kup":{"value":"kup-Latn-ZZ"},"kus":{"value":"kus-Latn-ZZ"},"gmv":{"value":"gmv-Ethi-ZZ"},"tgc":{"value":"tgc-Latn-ZZ"},"xog":{"value":"xog-Latn-UG"},"und-Arab-YT":{"value":"swb-Arab-YT"},"und-Latn-ET":{"value":"en-Latn-ET"},"xon":{"value":"xon-Latn-ZZ"},"ha-CM":{"value":"ha-Arab-CM"},"gnd":{"value":"gnd-Latn-ZZ"},"kvg":{"value":"kvg-Latn-ZZ"},"tgo":{"value":"tgo-Latn-ZZ"},"cfa":{"value":"cfa-Latn-ZZ"},"gng":{"value":"gng-Latn-ZZ"},"tgu":{"value":
"tgu-Latn-ZZ"},"und-Latn-GE":{"value":"ku-Latn-GE"},"kvr":{"value":"kvr-Latn-ID"},"kvx":{"value":"kvx-Arab-PK"},"und-Gujr":{"value":"gu-Gujr-IN"},"thl":{"value":"thl-Deva-NP"},"xpr":{"value":"xpr-Prti-IR"},"thq":{"value":"thq-Deva-NP"},"god":{"value":"god-Latn-ZZ"},"gof":{"value":"gof-Ethi-ZZ"},"kwj":{"value":"kwj-Latn-ZZ"},"ky-Arab":{"value":"ky-Arab-CN"},"thr":{"value":"thr-Deva-NP"},"goi":{"value":"goi-Latn-ZZ"},"cgg":{"value":"cgg-Latn-UG"},"kwo":{"value":"kwo-Latn-ZZ"},"gom":{"value":"gom-Deva-IN"},"gon":
{"value":"gon-Telu-IN"},"gos":{"value":"gos-Latn-NL"},"gor":{"value":"gor-Latn-ID"},"und-Latn-CY":{"value":"tr-Latn-CY"},"got":{"value":"got-Goth-UA"},"tif":{"value":"tif-Latn-ZZ"},"tig":{"value":"tig-Ethi-ER"},"kxa":{"value":"kxa-Latn-ZZ"},"kxc":{"value":"kxc-Ethi-ZZ"},"pag":{"value":"pag-Latn-PH"},"tik":{"value":"tik-Latn-ZZ"},"tim":{"value":"tim-Latn-ZZ"},"pal":{"value":"pal-Phli-IR"},"tio":{"value":"tio-Latn-ZZ"},"pam":{"value":"pam-Latn-PH"},"und-Marc":{"value":"bo-Marc-CN"},"pap":{"value":"pap-Latn-AW"}
,"und-Latn-CN":{"value":"za-Latn-CN"},"tiv":{"value":"tiv-Latn-NG"},"kxm":{"value":"kxm-Thai-TH"},"kxp":{"value":"kxp-Arab-PK"},"pau":{"value":"pau-Latn-PW"},"chk":{"value":"chk-Latn-FM"},"chm":{"value":"chm-Cyrl-RU"},"xrb":{"value":"xrb-Latn-ZZ"},"chp":{"value":"chp-Latn-CA"},"cho":{"value":"cho-Latn-US"},"kxw":{"value":"kxw-Latn-ZZ"},"und-Latn-DZ":{"value":"fr-Latn-DZ"},"chr":{"value":"chr-Cher-US"},"kxz":{"value":"kxz-Latn-ZZ"},"und-Batk":{"value":"bbc-Batk-ID"},"und-Bass":{"value":"bsq-Bass-LR"},"kye":{"value"
:"kye-Latn-ZZ"},"pbi":{"value":"pbi-Latn-ZZ"},"und-Deva-MU":{"value":"bho-Deva-MU"},"und-Sgnw":{"value":"ase-Sgnw-US"},"xsa":{"value":"xsa-Sarb-YE"},"kyx":{"value":"kyx-Latn-ZZ"},"xsi":{"value":"xsi-Latn-ZZ"},"pcd":{"value":"pcd-Latn-FR"},"und-Latn-AM":{"value":"ku-Latn-AM"},"xsm":{"value":"xsm-Latn-ZZ"},"tkl":{"value":"tkl-Latn-TK"},"und-Thai-CN":{"value":"lcp-Thai-CN"},"grb":{"value":"grb-Latn-ZZ"},"xsr":{"value":"xsr-Deva-NP"},"und-Latn-AF":{"value":"tk-Latn-AF"},"grc":{"value":"grc-Cprt-CY"},"tkr":{"value"
:"tkr-Latn-AZ"},"cja":{"value":"cja-Arab-KH"},"pcm":{"value":"pcm-Latn-NG"},"tkt":{"value":"tkt-Deva-NP"},"und-Olck":{"value":"sat-Olck-IN"},"kzr":{"value":"kzr-Latn-ZZ"},"cjm":{"value":"cjm-Cham-VN"},"grt":{"value":"grt-Beng-IN"},"und-Arab-TJ":{"value":"fa-Arab-TJ"},"und-Arab-TG":{"value":"apd-Arab-TG"},"und-Arab-TH":{"value":"mfa-Arab-TH"},"und-Deva-PK":{"value":"btv-Deva-PK"},"grw":{"value":"grw-Latn-ZZ"},"cjv":{"value":"cjv-Latn-ZZ"},"pdc":{"value":"pdc-Latn-US"},"tlf":{"value":"tlf-Latn-ZZ"},"und-Arab-TR":
{"value":"az-Arab-TR"},"ckb":{"value":"ckb-Arab-IQ"},"tly":{"value":"tly-Latn-AZ"},"pdt":{"value":"pdt-Latn-CA"},"tlx":{"value":"tlx-Latn-ZZ"},"ckl":{"value":"ckl-Latn-ZZ"},"cko":{"value":"cko-Latn-ZZ"},"gsw":{"value":"gsw-Latn-CH"},"ped":{"value":"ped-Latn-ZZ"},"tmh":{"value":"tmh-Latn-NE"},"cky":{"value":"cky-Latn-ZZ"},"kk-Arab":{"value":"kk-Arab-CN"},"und-Runr":{"value":"non-Runr-SE"},"cla":{"value":"cla-Latn-ZZ"},"peo":{"value":"peo-Xpeo-IR"},"tmy":{"value":"tmy-Latn-ZZ"},"pex":{"value":"pex-Latn-ZZ"},"ky-TR":
{"value":"ky-Latn-TR"},"tnh":{"value":"tnh-Latn-ZZ"},"guc":{"value":"guc-Latn-CO"},"gub":{"value":"gub-Latn-BR"},"gud":{"value":"gud-Latn-ZZ"},"pfl":{"value":"pfl-Latn-DE"},"cme":{"value":"cme-Latn-ZZ"},"cmg":{"value":"cmg-Soyo-MN"},"gur":{"value":"gur-Latn-GH"},"xwe":{"value":"xwe-Latn-ZZ"},"guw":{"value":"guw-Latn-ZZ"},"tof":{"value":"tof-Latn-ZZ"},"gux":{"value":"gux-Latn-ZZ"},"guz":{"value":"guz-Latn-KE"},"tog":{"value":"tog-Latn-MW"},"gvf":{"value":"gvf-Latn-ZZ"},"toq":{"value":"toq-Latn-ZZ"},"gvr":{"value"
:"gvr-Deva-NP"},"und-Guru":{"value":"pa-Guru-IN"},"gvs":{"value":"gvs-Latn-ZZ"},"tpi":{"value":"tpi-Latn-PG"},"tpm":{"value":"tpm-Latn-ZZ"},"und-Tfng":{"value":"zgh-Tfng-MA"},"gwc":{"value":"gwc-Arab-ZZ"},"und-Arab-PK":{"value":"ur-Arab-PK"},"phl":{"value":"phl-Arab-ZZ"},"und-Aghb":{"value":"lez-Aghb-RU"},"phn":{"value":"phn-Phnx-LB"},"gwi":{"value":"gwi-Latn-CA"},"tpz":{"value":"tpz-Latn-ZZ"},"cop":{"value":"cop-Copt-EG"},"gwt":{"value":"gwt-Arab-ZZ"},"lab":{"value":"lab-Lina-GR"},"lad":{"value":"lad-Hebr-IL"}
,"lah":{"value":"lah-Arab-PK"},"pil":{"value":"pil-Latn-ZZ"},"lag":{"value":"lag-Latn-TZ"},"tqo":{"value":"tqo-Latn-ZZ"},"laj":{"value":"laj-Latn-UG"},"pip":{"value":"pip-Latn-ZZ"},"und-Khmr":{"value":"km-Khmr-KH"},"las":{"value":"las-Latn-ZZ"},"sd-Deva":{"value":"sd-Deva-IN"},"und-Khoj":{"value":"sd-Khoj-IN"},"cps":{"value":"cps-Latn-PH"},"kk-AF":{"value":"kk-Arab-AF"},"und-Arab-MU":{"value":"ur-Arab-MU"},"lbe":{"value":"lbe-Cyrl-RU"},"und-Arab-NG":{"value":"ha-Arab-NG"},"gyi":{"value":"gyi-Latn-ZZ"},"tru":
{"value":"tru-Latn-TR"},"trw":{"value":"trw-Arab-ZZ"},"trv":{"value":"trv-Latn-TW"},"lbu":{"value":"lbu-Latn-ZZ"},"lbw":{"value":"lbw-Latn-ID"},"tsd":{"value":"tsd-Grek-GR"},"tsf":{"value":"tsf-Deva-NP"},"pka":{"value":"pka-Brah-IN"},"tsg":{"value":"tsg-Latn-PH"},"tsj":{"value":"tsj-Tibt-BT"},"und-Deva-FJ":{"value":"hif-Deva-FJ"},"pko":{"value":"pko-Latn-KE"},"lcm":{"value":"lcm-Latn-ZZ"},"crh":{"value":"crh-Cyrl-UA"},"lcp":{"value":"lcp-Thai-CN"},"tsw":{"value":"tsw-Latn-ZZ"},"crj":{"value":"crj-Cans-CA"},
"crl":{"value":"crl-Cans-CA"},"und-Arab-MN":{"value":"kk-Arab-MN"},"crk":{"value":"crk-Cans-CA"},"crm":{"value":"crm-Cans-CA"},"und-Arab-MM":{"value":"rhg-Arab-MM"},"pla":{"value":"pla-Latn-ZZ"},"tte":{"value":"tte-Latn-ZZ"},"crs":{"value":"crs-Latn-SC"},"ttd":{"value":"ttd-Latn-ZZ"},"ldb":{"value":"ldb-Latn-ZZ"},"ttj":{"value":"ttj-Latn-UG"},"kk-CN":{"value":"kk-Arab-CN"},"und-Yiii":{"value":"ii-Yiii-CN"},"tts":{"value":"tts-Thai-TH"},"csb":{"value":"csb-Latn-PL"},"ttr":{"value":"ttr-Latn-ZZ"},"ttt":{"value"
:"ttt-Latn-AZ"},"csw":{"value":"csw-Cans-CA"},"tuh":{"value":"tuh-Latn-ZZ"},"led":{"value":"led-Latn-ZZ"},"tul":{"value":"tul-Latn-ZZ"},"lee":{"value":"lee-Latn-ZZ"},"tum":{"value":"tum-Latn-MW"},"und-Arab-KH":{"value":"cja-Arab-KH"},"tuq":{"value":"tuq-Latn-ZZ"},"ctd":{"value":"ctd-Pauc-MM"},"lem":{"value":"lem-Latn-ZZ"},"lep":{"value":"lep-Lepc-IN"},"pms":{"value":"pms-Latn-IT"},"leq":{"value":"leq-Latn-ZZ"},"und-Pauc":{"value":"ctd-Pauc-MM"},"und-Sogo":{"value":"sog-Sogo-UZ"},"leu":{"value":"leu-Latn-ZZ"}
,"lez":{"value":"lez-Cyrl-RU"},"tvd":{"value":"tvd-Latn-ZZ"},"mn-CN":{"value":"mn-Mong-CN"},"sr-TR":{"value":"sr-Latn-TR"},"png":{"value":"png-Latn-ZZ"},"tvl":{"value":"tvl-Latn-TV"},"und-Brah":{"value":"pka-Brah-IN"},"und-Brai":{"value":"fr-Brai-FR"},"pnn":{"value":"pnn-Latn-ZZ"},"tvu":{"value":"tvu-Latn-ZZ"},"pnt":{"value":"pnt-Grek-GR"},"uz-CN":{"value":"uz-Cyrl-CN"},"ha-SD":{"value":"ha-Arab-SD"},"twh":{"value":"twh-Latn-ZZ"},"und-Takr":{"value":"doi-Takr-IN"},"lgg":{"value":"lgg-Latn-ZZ"},"pon":{"value"
:"pon-Latn-FM"},"twq":{"value":"twq-Latn-NE"},"und-Arab-ID":{"value":"ms-Arab-ID"},"und-Arab-IN":{"value":"ur-Arab-IN"},"txg":{"value":"txg-Tang-CN"},"yam":{"value":"yam-Latn-ZZ"},"und-Talu":{"value":"khb-Talu-CN"},"yao":{"value":"yao-Latn-MZ"},"yap":{"value":"yap-Latn-FM"},"yas":{"value":"yas-Latn-ZZ"},"yat":{"value":"yat-Latn-ZZ"},"ppo":{"value":"ppo-Latn-ZZ"},"yav":{"value":"yav-Latn-CM"},"yay":{"value":"yay-Latn-ZZ"},"yaz":{"value":"yaz-Latn-ZZ"},"und-Tale":{"value":"tdd-Tale-CN"},"ybb":{"value":"ybb-Latn-CM"}
,"yba":{"value":"yba-Latn-ZZ"},"tya":{"value":"tya-Latn-ZZ"},"lia":{"value":"lia-Latn-ZZ"},"lid":{"value":"lid-Latn-ZZ"},"und-Latn-TW":{"value":"trv-Latn-TW"},"lif":{"value":"lif-Deva-NP"},"lih":{"value":"lih-Latn-ZZ"},"lig":{"value":"lig-Latn-ZZ"},"lij":{"value":"lij-Latn-IT"},"hag":{"value":"hag-Latn-ZZ"},"und-Latn-TN":{"value":"fr-Latn-TN"},"tyv":{"value":"tyv-Cyrl-RU"},"yby":{"value":"yby-Latn-ZZ"},"und-Arab-GB":{"value":"ks-Arab-GB"},"hak":{"value":"hak-Hans-CN"},"und-Taml":{"value":"ta-Taml-IN"},"ham":
{"value":"ham-Latn-ZZ"},"lis":{"value":"lis-Lisu-CN"},"und-Latn-SY":{"value":"fr-Latn-SY"},"ky-Latn":{"value":"ky-Latn-TR"},"pra":{"value":"pra-Khar-PK"},"haw":{"value":"haw-Latn-US"},"haz":{"value":"haz-Arab-AF"},"ku-LB":{"value":"ku-Arab-LB"},"prd":{"value":"prd-Arab-IR"},"prg":{"value":"prg-Latn-001"},"tzm":{"value":"tzm-Latn-MA"},"hbb":{"value":"hbb-Latn-ZZ"},"und-Latn-UA":{"value":"pl-Latn-UA"},"ljp":{"value":"ljp-Latn-ID"},"und-Tang":{"value":"txg-Tang-CN"},"yue-Hans":{"value":"yue-Hans-CN"},"und-Latn-RU":
{"value":"krl-Latn-RU"},"lki":{"value":"lki-Arab-IR"},"pss":{"value":"pss-Latn-ZZ"},"lkt":{"value":"lkt-Latn-US"},"sr-RO":{"value":"sr-Latn-RO"},"und-Arab-CN":{"value":"ug-Arab-CN"},"lle":{"value":"lle-Latn-ZZ"},"und-Cyrl":{"value":"ru-Cyrl-RU"},"uz-AF":{"value":"uz-Arab-AF"},"yer":{"value":"yer-Latn-ZZ"},"und-Beng":{"value":"bn-Beng-BD"},"ptp":{"value":"ptp-Latn-ZZ"},"lln":{"value":"lln-Latn-ZZ"},"sr-RU":{"value":"sr-Latn-RU"},"hdy":{"value":"hdy-Ethi-ZZ"},"unr-NP":{"value":"unr-Deva-NP"},"und-Mend":{"value"
:"men-Mend-SL"},"lmn":{"value":"lmn-Telu-IN"},"lmp":{"value":"lmp-Latn-ZZ"},"lmo":{"value":"lmo-Latn-IT"},"puu":{"value":"puu-Latn-GA"},"und-Arab-CC":{"value":"ms-Arab-CC"},"pal-Phlp":{"value":"pal-Phlp-CN"},"ygr":{"value":"ygr-Latn-ZZ"},"ygw":{"value":"ygw-Latn-ZZ"},"lns":{"value":"lns-Latn-ZZ"},"ky-CN":{"value":"ky-Arab-CN"},"lnu":{"value":"lnu-Latn-ZZ"},"pwa":{"value":"pwa-Latn-ZZ"},"und-Mahj":{"value":"hi-Mahj-IN"},"rif-NL":{"value":"rif-Latn-NL"},"loj":{"value":"loj-Latn-ZZ"},"lol":{"value":"lol-Latn-CD"}
,"lok":{"value":"lok-Latn-ZZ"},"lor":{"value":"lor-Latn-ZZ"},"und-Sora":{"value":"srb-Sora-IN"},"los":{"value":"los-Latn-ZZ"},"loz":{"value":"loz-Latn-ZM"},"und-202":{"value":"en-Latn-NG"},"und-Latn-MR":{"value":"fr-Latn-MR"},"hhy":{"value":"hhy-Latn-ZZ"},"hia":{"value":"hia-Latn-ZZ"},"hif":{"value":"hif-Latn-FJ"},"dad":{"value":"dad-Latn-ZZ"},"hih":{"value":"hih-Latn-ZZ"},"hig":{"value":"hig-Latn-ZZ"},"daf":{"value":"daf-Latn-ZZ"},"ubu":{"value":"ubu-Latn-ZZ"},"dah":{"value":"dah-Latn-ZZ"},"hil":{"value":"hil-Latn-PH"}
,"dag":{"value":"dag-Latn-ZZ"},"und-Mero":{"value":"xmr-Mero-SD"},"dak":{"value":"dak-Latn-US"},"und-Merc":{"value":"xmr-Merc-SD"},"dar":{"value":"dar-Cyrl-RU"},"dav":{"value":"dav-Latn-KE"},"lrc":{"value":"lrc-Arab-IR"},"yko":{"value":"yko-Latn-ZZ"},"und-Latn-MK":{"value":"sq-Latn-MK"},"und-Latn-MM":{"value":"kac-Latn-MM"},"dbd":{"value":"dbd-Latn-ZZ"},"und-Latn-MO":{"value":"pt-Latn-MO"},"und-Latn-MA":{"value":"fr-Latn-MA"},"und-Bali":{"value":"ban-Bali-ID"},"und-Tavt":{"value":"blt-Tavt-VN"},"dbq":{"value"
:"dbq-Latn-ZZ"},"yle":{"value":"yle-Latn-ZZ"},"ylg":{"value":"ylg-Latn-ZZ"},"und-Maka":{"value":"mak-Maka-ID"},"yll":{"value":"yll-Latn-ZZ"},"udm":{"value":"udm-Cyrl-RU"},"dcc":{"value":"dcc-Arab-IN"},"yml":{"value":"yml-Latn-ZZ"},"hla":{"value":"hla-Latn-ZZ"},"und-Latn-IR":{"value":"tk-Latn-IR"},"ltg":{"value":"ltg-Latn-LV"},"und-Latn-KM":{"value":"fr-Latn-KM"},"ddn":{"value":"ddn-Latn-ZZ"},"hlu":{"value":"hlu-Hluw-TR"},"lua":{"value":"lua-Latn-CD"},"und-Bamu":{"value":"bax-Bamu-CM"},"hmd":{"value":"hmd-Plrd-CN"}
,"ded":{"value":"ded-Latn-ZZ"},"luo":{"value":"luo-Latn-KE"},"und-142":{"value":"zh-Hans-CN"},"und-143":{"value":"uz-Latn-UZ"},"den":{"value":"den-Latn-CA"},"und-Gran":{"value":"sa-Gran-IN"},"hmt":{"value":"hmt-Latn-ZZ"},"uga":{"value":"uga-Ugar-SY"},"luz":{"value":"luz-Arab-IR"},"luy":{"value":"luy-Latn-KE"},"und-145":{"value":"ar-Arab-SA"},"und-Cakm":{"value":"ccp-Cakm-BD"},"und-Dupl":{"value":"fr-Dupl-FR"},"yon":{"value":"yon-Latn-ZZ"},"ug-MN":{"value":"ug-Cyrl-MN"},"hne":{"value":"hne-Deva-IN"},"hnd":{"value"
:"hnd-Arab-PK"},"hnj":{"value":"hnj-Hmng-LA"},"hno":{"value":"hno-Arab-PK"},"hnn":{"value":"hnn-Latn-PH"},"ug-KZ":{"value":"ug-Cyrl-KZ"},"und-154":{"value":"en-Latn-GB"},"und-155":{"value":"de-Latn-DE"},"und-150":{"value":"ru-Cyrl-RU"},"und-151":{"value":"ru-Cyrl-RU"},"und-Sylo":{"value":"syl-Sylo-BD"},"hoc":{"value":"hoc-Deva-IN"},"dga":{"value":"dga-Latn-ZZ"},"lwl":{"value":"lwl-Thai-TH"},"und-Ital":{"value":"ett-Ital-IT"},"hoj":{"value":"hoj-Deva-IN"},"dgh":{"value":"dgh-Latn-ZZ"},"dgi":{"value":"dgi-Latn-ZZ"}
,"dgl":{"value":"dgl-Arab-ZZ"},"hot":{"value":"hot-Latn-ZZ"},"dgr":{"value":"dgr-Latn-CA"},"dgz":{"value":"dgz-Latn-ZZ"},"yrb":{"value":"yrb-Latn-ZZ"},"yre":{"value":"yre-Latn-ZZ"},"und-Lyci":{"value":"xlc-Lyci-TR"},"und-Cans":{"value":"cr-Cans-CA"},"und-Hluw":{"value":"hlu-Hluw-TR"},"und-Nand":{"value":"sa-Nand-IN"},"yrl":{"value":"yrl-Latn-BR"},"dia":{"value":"dia-Latn-ZZ"},"und-Grek":{"value":"el-Grek-GR"},"und-Mong":{"value":"mn-Mong-CN"},"und-Lydi":{"value":"xld-Lydi-TR"},"yss":{"value":"yss-Latn-ZZ"},
"und-Newa":{"value":"new-Newa-NP"},"lzh":{"value":"lzh-Hans-CN"},"dje":{"value":"dje-Latn-NE"},"lzz":{"value":"lzz-Latn-TR"},"uli":{"value":"uli-Latn-FM"},"hsb":{"value":"hsb-Latn-DE"},"und-Xsux":{"value":"akk-Xsux-IQ"},"hsn":{"value":"hsn-Hans-CN"},"und-Cari":{"value":"xcr-Cari-TR"},"und-Syrc":{"value":"syr-Syrc-IQ"},"yua":{"value":"yua-Latn-MX"},"yue":{"value":"yue-Hant-HK"},"umb":{"value":"umb-Latn-AO"},"yuj":{"value":"yuj-Latn-ZZ"},"yut":{"value":"yut-Latn-ZZ"},"yuw":{"value":"yuw-Latn-ZZ"},"und-Bopo":{"value"
:"zh-Bopo-TW"},"und":{"value":"en-Latn-US"},"und-Egyp":{"value":"egy-Egyp-EG"},"und-Tglg":{"value":"fil-Tglg-PH"},"unr":{"value":"unr-Beng-IN"},"hui":{"value":"hui-Latn-ZZ"},"und-Elba":{"value":"sq-Elba-AL"},"unx":{"value":"unx-Beng-IN"},"und-Narb":{"value":"xna-Narb-SA"},"pa-PK":{"value":"pa-Arab-PK"},"und-Hebr-CA":{"value":"yi-Hebr-CA"},"und-Geor":{"value":"ka-Geor-GE"},"und-Shrd":{"value":"sa-Shrd-IN"},"dnj":{"value":"dnj-Latn-CI"},"dob":{"value":"dob-Latn-ZZ"},"und-Mymr-TH":{"value":"mnw-Mymr-TH"},"doi":
{"value":"doi-Arab-IN"},"dop":{"value":"dop-Latn-ZZ"},"und-Sund":{"value":"su-Sund-ID"},"dow":{"value":"dow-Latn-ZZ"},"sr-ME":{"value":"sr-Latn-ME"},"und-Hung":{"value":"hu-Hung-HU"},"mad":{"value":"mad-Latn-ID"},"mag":{"value":"mag-Deva-IN"},"maf":{"value":"maf-Latn-CM"},"mai":{"value":"mai-Deva-IN"},"mak":{"value":"mak-Latn-ID"},"man":{"value":"man-Latn-GM"},"mas":{"value":"mas-Latn-KE"},"maw":{"value":"maw-Latn-ZZ"},"maz":{"value":"maz-Latn-MX"},"uri":{"value":"uri-Latn-ZZ"},"mbh":{"value":"mbh-Latn-ZZ"}
,"urt":{"value":"urt-Latn-ZZ"},"mbo":{"value":"mbo-Latn-ZZ"},"urw":{"value":"urw-Latn-ZZ"},"mbq":{"value":"mbq-Latn-ZZ"},"mbu":{"value":"mbu-Latn-ZZ"},"und-Hebr-GB":{"value":"yi-Hebr-GB"},"usa":{"value":"usa-Latn-ZZ"},"mbw":{"value":"mbw-Latn-ZZ"},"mci":{"value":"mci-Latn-ZZ"},"dri":{"value":"dri-Latn-ZZ"},"mcq":{"value":"mcq-Latn-ZZ"},"mcp":{"value":"mcp-Latn-ZZ"},"mcr":{"value":"mcr-Latn-ZZ"},"mcu":{"value":"mcu-Latn-ZZ"},"drs":{"value":"drs-Ethi-ZZ"},"mda":{"value":"mda-Latn-ZZ"},"mdf":{"value":"mdf-Cyrl-RU"}
,"mde":{"value":"mde-Arab-ZZ"},"mdh":{"value":"mdh-Latn-PH"},"dsb":{"value":"dsb-Latn-DE"},"mdj":{"value":"mdj-Latn-ZZ"},"utr":{"value":"utr-Latn-ZZ"},"mdr":{"value":"mdr-Latn-ID"},"mdx":{"value":"mdx-Ethi-ZZ"},"mee":{"value":"mee-Latn-ZZ"},"med":{"value":"med-Latn-ZZ"},"mek":{"value":"mek-Latn-ZZ"},"men":{"value":"men-Latn-SL"},"az-RU":{"value":"az-Cyrl-RU"},"mis-Medf":{"value":"mis-Medf-NG"},"mer":{"value":"mer-Latn-KE"},"dtm":{"value":"dtm-Latn-ML"},"meu":{"value":"meu-Latn-ZZ"},"met":{"value":"met-Latn-ZZ"}
,"dtp":{"value":"dtp-Latn-MY"},"dts":{"value":"dts-Latn-ZZ"},"uvh":{"value":"uvh-Latn-ZZ"},"dty":{"value":"dty-Deva-NP"},"mfa":{"value":"mfa-Arab-TH"},"uvl":{"value":"uvl-Latn-ZZ"},"mfe":{"value":"mfe-Latn-MU"},"dua":{"value":"dua-Latn-CM"},"dud":{"value":"dud-Latn-ZZ"},"duc":{"value":"duc-Latn-ZZ"},"mfn":{"value":"mfn-Latn-ZZ"},"dug":{"value":"dug-Latn-ZZ"},"mfo":{"value":"mfo-Latn-ZZ"},"mfq":{"value":"mfq-Latn-ZZ"},"und-Phag":{"value":"lzh-Phag-CN"},"dva":{"value":"dva-Latn-ZZ"},"mgh":{"value":"mgh-Latn-MZ"}
,"mgl":{"value":"mgl-Latn-ZZ"},"mgo":{"value":"mgo-Latn-CM"},"mgp":{"value":"mgp-Deva-NP"},"mgy":{"value":"mgy-Latn-TZ"},"zag":{"value":"zag-Latn-SD"},"mhi":{"value":"mhi-Latn-ZZ"},"mhl":{"value":"mhl-Latn-ZZ"},"dww":{"value":"dww-Latn-ZZ"},"mif":{"value":"mif-Latn-ZZ"},"und-Mymr-IN":{"value":"kht-Mymr-IN"},"min":{"value":"min-Latn-ID"},"mis":{"value":"mis-Hatr-IQ"},"ian":{"value":"ian-Latn-ZZ"},"miw":{"value":"miw-Latn-ZZ"},"iar":{"value":"iar-Latn-ZZ"},"uz-Arab":{"value":"uz-Arab-AF"},"ibb":{"value":"ibb-Latn-NG"}
,"iba":{"value":"iba-Latn-MY"},"dyo":{"value":"dyo-Latn-SN"},"dyu":{"value":"dyu-Latn-BF"},"iby":{"value":"iby-Latn-ZZ"},"zdj":{"value":"zdj-Arab-KM"},"ica":{"value":"ica-Latn-ZZ"},"mki":{"value":"mki-Arab-ZZ"},"und-Wcho":{"value":"nnp-Wcho-IN"},"ich":{"value":"ich-Latn-ZZ"},"mkl":{"value":"mkl-Latn-ZZ"},"dzg":{"value":"dzg-Latn-ZZ"},"mkp":{"value":"mkp-Latn-ZZ"},"zea":{"value":"zea-Latn-NL"},"mkw":{"value":"mkw-Latn-ZZ"},"mle":{"value":"mle-Latn-ZZ"},"idd":{"value":"idd-Latn-ZZ"},"idi":{"value":"idi-Latn-ZZ"}
,"lif-Limb":{"value":"lif-Limb-IN"},"mlp":{"value":"mlp-Latn-ZZ"},"mls":{"value":"mls-Latn-SD"},"idu":{"value":"idu-Latn-ZZ"},"quc":{"value":"quc-Latn-GT"},"qug":{"value":"qug-Latn-EC"},"und-Jamo":{"value":"ko-Jamo-KR"},"mmo":{"value":"mmo-Latn-ZZ"},"mmu":{"value":"mmu-Latn-ZZ"},"mmx":{"value":"mmx-Latn-ZZ"},"zgh":{"value":"zgh-Tfng-MA"},"mna":{"value":"mna-Latn-ZZ"},"mnf":{"value":"mnf-Latn-ZZ"},"ife":{"value":"ife-Latn-TG"},"mni":{"value":"mni-Beng-IN"},"mnw":{"value":"mnw-Mymr-MM"},"moa":{"value":"moa-Latn-ZZ"}
,"moe":{"value":"moe-Latn-CA"},"igb":{"value":"igb-Latn-ZZ"},"ige":{"value":"ige-Latn-ZZ"},"moh":{"value":"moh-Latn-CA"},"und-Hebr-SE":{"value":"yi-Hebr-SE"},"zhx":{"value":"zhx-Nshu-CN"},"mos":{"value":"mos-Latn-BF"},"und-Shaw":{"value":"en-Shaw-GB"},"zia":{"value":"zia-Latn-ZZ"},"mox":{"value":"mox-Latn-ZZ"},"vag":{"value":"vag-Latn-ZZ"},"vai":{"value":"vai-Vaii-LR"},"van":{"value":"van-Latn-ZZ"},"mpp":{"value":"mpp-Latn-ZZ"},"mpt":{"value":"mpt-Latn-ZZ"},"mps":{"value":"mps-Latn-ZZ"},"mpx":{"value":"mpx-Latn-ZZ"}
,"und-Hebr-US":{"value":"yi-Hebr-US"},"mql":{"value":"mql-Latn-ZZ"},"und-Hebr-UA":{"value":"yi-Hebr-UA"},"mrd":{"value":"mrd-Deva-NP"},"mrj":{"value":"mrj-Cyrl-RU"},"ijj":{"value":"ijj-Latn-ZZ"},"mro":{"value":"mro-Mroo-BD"},"und-Modi":{"value":"mr-Modi-IN"},"ebu":{"value":"ebu-Latn-KE"},"zlm":{"value":"zlm-Latn-TG"},"arc-Palm":{"value":"arc-Palm-SY"},"ikk":{"value":"ikk-Latn-ZZ"},"ikt":{"value":"ikt-Latn-CA"},"ikw":{"value":"ikw-Latn-ZZ"},"vec":{"value":"vec-Latn-IT"},"ikx":{"value":"ikx-Latn-ZZ"},"zmi":{"value"
:"zmi-Latn-MY"},"mtc":{"value":"mtc-Latn-ZZ"},"mtf":{"value":"mtf-Latn-ZZ"},"vep":{"value":"vep-Latn-RU"},"zh-Bopo":{"value":"zh-Bopo-TW"},"mti":{"value":"mti-Latn-ZZ"},"und-Ethi":{"value":"am-Ethi-ET"},"mtr":{"value":"mtr-Deva-IN"},"und-Thai-LA":{"value":"kdt-Thai-LA"},"ilo":{"value":"ilo-Latn-PH"},"zne":{"value":"zne-Latn-ZZ"},"mua":{"value":"mua-Latn-CM"},"und-Thai-KH":{"value":"kdt-Thai-KH"},"imo":{"value":"imo-Latn-ZZ"},"mus":{"value":"mus-Latn-US"},"mur":{"value":"mur-Latn-ZZ"},"mva":{"value":"mva-Latn-ZZ"}
,"inh":{"value":"inh-Cyrl-RU"},"mvn":{"value":"mvn-Latn-ZZ"},"efi":{"value":"efi-Latn-NG"},"mvy":{"value":"mvy-Arab-PK"},"und-Java":{"value":"jv-Java-ID"},"mwk":{"value":"mwk-Latn-ML"},"mwr":{"value":"mwr-Deva-IN"},"und-021":{"value":"en-Latn-US"},"egl":{"value":"egl-Latn-IT"},"mww":{"value":"mww-Hmnp-US"},"mwv":{"value":"mwv-Latn-ID"},"iou":{"value":"iou-Latn-ZZ"},"und-029":{"value":"es-Latn-CU"},"vic":{"value":"vic-Latn-SX"},"egy":{"value":"egy-Egyp-EG"},"und-Ugar":{"value":"uga-Ugar-SY"},"mxc":{"value":"mxc-Latn-ZW"}
,"raj":{"value":"raj-Deva-IN"},"rai":{"value":"rai-Latn-ZZ"},"rao":{"value":"rao-Latn-ZZ"},"viv":{"value":"viv-Latn-ZZ"},"mxm":{"value":"mxm-Latn-ZZ"},"und-034":{"value":"hi-Deva-IN"},"und-030":{"value":"zh-Hans-CN"},"und-039":{"value":"it-Latn-IT"},"und-035":{"value":"id-Latn-ID"},"ug-Cyrl":{"value":"ug-Cyrl-KZ"},"myk":{"value":"myk-Latn-ZZ"},"mym":{"value":"mym-Ethi-ZZ"},"aai":{"value":"aai-Latn-ZZ"},"aak":{"value":"aak-Latn-ZZ"},"myw":{"value":"myw-Latn-ZZ"},"myv":{"value":"myv-Cyrl-RU"},"myx":{"value":"myx-Latn-UG"}
,"myz":{"value":"myz-Mand-IR"},"und-Sinh":{"value":"si-Sinh-LK"},"und-Sind":{"value":"sd-Sind-IN"},"aau":{"value":"aau-Latn-ZZ"},"rcf":{"value":"rcf-Latn-RE"},"und-Orkh":{"value":"otk-Orkh-MN"},"mzk":{"value":"mzk-Latn-ZZ"},"mzn":{"value":"mzn-Arab-IR"},"iri":{"value":"iri-Latn-ZZ"},"mzm":{"value":"mzm-Latn-ZZ"},"mzp":{"value":"mzp-Latn-ZZ"},"und-053":{"value":"en-Latn-AU"},"abi":{"value":"abi-Latn-ZZ"},"und-054":{"value":"en-Latn-PG"},"mzw":{"value":"mzw-Latn-ZZ"},"mzz":{"value":"mzz-Latn-ZZ"},"abr":{"value"
:"abr-Latn-GH"},"abq":{"value":"abq-Cyrl-ZZ"},"abt":{"value":"abt-Latn-ZZ"},"und-057":{"value":"en-Latn-GU"},"aby":{"value":"aby-Latn-ZZ"},"eka":{"value":"eka-Latn-ZZ"},"vls":{"value":"vls-Latn-BE"},"ace":{"value":"ace-Latn-ID"},"acd":{"value":"acd-Latn-ZZ"},"ach":{"value":"ach-Latn-UG"},"vmf":{"value":"vmf-Latn-DE"},"eky":{"value":"eky-Kali-MM"},"rej":{"value":"rej-Latn-ID"},"rel":{"value":"rel-Latn-ZZ"},"ada":{"value":"ada-Latn-GH"},"res":{"value":"res-Latn-ZZ"},"vmw":{"value":"vmw-Latn-MZ"},"ade":{"value"
:"ade-Latn-ZZ"},"adj":{"value":"adj-Latn-ZZ"},"und-Hira":{"value":"ja-Hira-JP"},"adz":{"value":"adz-Latn-ZZ"},"ady":{"value":"ady-Cyrl-RU"},"ema":{"value":"ema-Latn-ZZ"},"und-Deva":{"value":"hi-Deva-IN"},"aeb":{"value":"aeb-Arab-TN"},"emi":{"value":"emi-Latn-ZZ"},"und-009":{"value":"en-Latn-AU"},"aey":{"value":"aey-Latn-ZZ"},"und-002":{"value":"en-Latn-NG"},"und-003":{"value":"en-Latn-US"},"und-005":{"value":"pt-Latn-BR"},"rgn":{"value":"rgn-Latn-IT"},"vot":{"value":"vot-Latn-RU"},"enn":{"value":"enn-Latn-ZZ"}
,"enq":{"value":"enq-Latn-ZZ"},"und-011":{"value":"en-Latn-NG"},"rhg":{"value":"rhg-Arab-MM"},"und-017":{"value":"sw-Latn-CD"},"und-018":{"value":"en-Latn-ZA"},"und-019":{"value":"en-Latn-US"},"und-013":{"value":"es-Latn-MX"},"und-014":{"value":"sw-Latn-TZ"},"und-015":{"value":"ar-Arab-EG"},"agc":{"value":"agc-Latn-ZZ"},"und-Zanb":{"value":"cmg-Zanb-MN"},"iwm":{"value":"iwm-Latn-ZZ"},"agd":{"value":"agd-Latn-ZZ"},"agg":{"value":"agg-Latn-ZZ"},"iws":{"value":"iws-Latn-ZZ"},"agm":{"value":"agm-Latn-ZZ"},"ago":
{"value":"ago-Latn-ZZ"},"agq":{"value":"agq-Latn-CM"},"ria":{"value":"ria-Latn-IN"},"rif":{"value":"rif-Tfng-MA"},"nac":{"value":"nac-Latn-ZZ"},"naf":{"value":"naf-Latn-ZZ"},"nak":{"value":"nak-Latn-ZZ"},"nan":{"value":"nan-Hans-CN"},"aha":{"value":"aha-Latn-ZZ"},"nap":{"value":"nap-Latn-IT"},"naq":{"value":"naq-Latn-NA"},"zza":{"value":"zza-Latn-TR"},"nas":{"value":"nas-Latn-ZZ"},"ahl":{"value":"ahl-Latn-ZZ"},"en-Shaw":{"value":"en-Shaw-GB"},"und-Copt":{"value":"cop-Copt-EG"},"aho":{"value":"aho-Ahom-IN"},
"vro":{"value":"vro-Latn-EE"},"rjs":{"value":"rjs-Deva-NP"},"nca":{"value":"nca-Latn-ZZ"},"ncf":{"value":"ncf-Latn-ZZ"},"nce":{"value":"nce-Latn-ZZ"},"nch":{"value":"nch-Latn-MX"},"izh":{"value":"izh-Latn-RU"},"izi":{"value":"izi-Latn-ZZ"},"rkt":{"value":"rkt-Beng-BD"},"nco":{"value":"nco-Latn-ZZ"},"eri":{"value":"eri-Latn-ZZ"},"ajg":{"value":"ajg-Latn-ZZ"},"ncu":{"value":"ncu-Latn-ZZ"},"ndc":{"value":"ndc-Latn-MZ"},"esg":{"value":"esg-Gonm-IN"},"nds":{"value":"nds-Latn-DE"},"akk":{"value":"akk-Xsux-IQ"},"esu":
{"value":"esu-Latn-US"},"neb":{"value":"neb-Latn-ZZ"},"rmf":{"value":"rmf-Latn-FI"},"und-061":{"value":"sm-Latn-WS"},"und-Limb":{"value":"lif-Limb-IN"},"vun":{"value":"vun-Latn-TZ"},"ff-Adlm":{"value":"ff-Adlm-GN"},"vut":{"value":"vut-Latn-ZZ"},"rmo":{"value":"rmo-Latn-CH"},"ala":{"value":"ala-Latn-ZZ"},"rmt":{"value":"rmt-Arab-IR"},"rmu":{"value":"rmu-Latn-SE"},"ali":{"value":"ali-Latn-ZZ"},"nex":{"value":"nex-Latn-ZZ"},"new":{"value":"new-Deva-NP"},"aln":{"value":"aln-Latn-XK"},"etr":{"value":"etr-Latn-ZZ"}
,"und-Rohg":{"value":"rhg-Rohg-MM"},"ett":{"value":"ett-Ital-IT"},"rna":{"value":"rna-Latn-ZZ"},"etu":{"value":"etu-Latn-ZZ"},"alt":{"value":"alt-Cyrl-RU"},"etx":{"value":"etx-Latn-ZZ"},"rng":{"value":"rng-Latn-MZ"},"und-Linb":{"value":"grc-Linb-GR"},"und-Lina":{"value":"lab-Lina-GR"},"und-Jpan":{"value":"ja-Jpan-JP"},"man-GN":{"value":"man-Nkoo-GN"},"nfr":{"value":"nfr-Latn-ZZ"},"amm":{"value":"amm-Latn-ZZ"},"und-Arab":{"value":"ar-Arab-EG"},"amo":{"value":"amo-Latn-NG"},"amn":{"value":"amn-Latn-ZZ"},"rob":
{"value":"rob-Latn-ID"},"amp":{"value":"amp-Latn-ZZ"},"ngb":{"value":"ngb-Latn-ZZ"},"rof":{"value":"rof-Latn-TZ"},"nga":{"value":"nga-Latn-ZZ"},"ngl":{"value":"ngl-Latn-MZ"},"roo":{"value":"roo-Latn-ZZ"},"anc":{"value":"anc-Latn-ZZ"},"ank":{"value":"ank-Latn-ZZ"},"ann":{"value":"ann-Latn-ZZ"},"und-Bhks":{"value":"sa-Bhks-IN"},"nhb":{"value":"nhb-Latn-ZZ"},"nhe":{"value":"nhe-Latn-MX"},"any":{"value":"any-Latn-ZZ"},"und-Orya":{"value":"or-Orya-IN"},"ewo":{"value":"ewo-Latn-CM"},"nhw":{"value":"nhw-Latn-MX"},
"aoj":{"value":"aoj-Latn-ZZ"},"aom":{"value":"aom-Latn-ZZ"},"zh-Hanb":{"value":"zh-Hanb-TW"},"jab":{"value":"jab-Latn-ZZ"},"nif":{"value":"nif-Latn-ZZ"},"aoz":{"value":"aoz-Latn-ID"},"nij":{"value":"nij-Latn-ID"},"nii":{"value":"nii-Latn-ZZ"},"zh-PH":{"value":"zh-Hant-PH"},"nin":{"value":"nin-Latn-ZZ"},"zh-Hant":{"value":"zh-Hant-TW"},"zh-PF":{"value":"zh-Hant-PF"},"und-Ahom":{"value":"aho-Ahom-IN"},"apd":{"value":"apd-Arab-TG"},"apc":{"value":"apc-Arab-ZZ"},"ape":{"value":"ape-Latn-ZZ"},"jam":{"value":"jam-Latn-JM"}
,"zh-PA":{"value":"zh-Hant-PA"},"niu":{"value":"niu-Latn-NU"},"niz":{"value":"niz-Latn-ZZ"},"niy":{"value":"niy-Latn-ZZ"},"ext":{"value":"ext-Latn-ES"},"apr":{"value":"apr-Latn-ZZ"},"aps":{"value":"aps-Latn-ZZ"},"apz":{"value":"apz-Latn-ZZ"},"rro":{"value":"rro-Latn-ZZ"},"njo":{"value":"njo-Latn-IN"},"jbo":{"value":"jbo-Latn-001"},"jbu":{"value":"jbu-Latn-ZZ"},"zh-MO":{"value":"zh-Hant-MO"},"nkg":{"value":"nkg-Latn-ZZ"},"zh-MY":{"value":"zh-Hant-MY"},"arc":{"value":"arc-Armi-IR"},"nko":{"value":"nko-Latn-ZZ"}
,"arh":{"value":"arh-Latn-ZZ"},"pa-Arab":{"value":"pa-Arab-PK"},"und-Mtei":{"value":"mni-Mtei-IN"},"arn":{"value":"arn-Latn-CL"},"aro":{"value":"aro-Latn-BO"},"und-Cyrl-RO":{"value":"bg-Cyrl-RO"},"arq":{"value":"arq-Arab-DZ"},"arz":{"value":"arz-Arab-EG"},"ary":{"value":"ary-Arab-MA"},"rtm":{"value":"rtm-Latn-FJ"},"asa":{"value":"asa-Latn-TZ"},"und-Grek-TR":{"value":"bgx-Grek-TR"},"ase":{"value":"ase-Sgnw-US"},"asg":{"value":"asg-Latn-ZZ"},"aso":{"value":"aso-Latn-ZZ"},"ast":{"value":"ast-Latn-ES"},"rue":{"value"
:"rue-Cyrl-UA"},"rug":{"value":"rug-Latn-SB"},"nmg":{"value":"nmg-Latn-CM"},"ata":{"value":"ata-Latn-ZZ"},"jen":{"value":"jen-Latn-ZZ"},"atg":{"value":"atg-Latn-ZZ"},"atj":{"value":"atj-Latn-CA"},"nmz":{"value":"nmz-Latn-ZZ"},"unr-Deva":{"value":"unr-Deva-NP"},"nnf":{"value":"nnf-Latn-ZZ"},"nnh":{"value":"nnh-Latn-CM"},"nnk":{"value":"nnk-Latn-ZZ"},"nnm":{"value":"nnm-Latn-ZZ"},"nnp":{"value":"nnp-Wcho-IN"},"az-IR":{"value":"az-Arab-IR"},"und-Adlm":{"value":"ff-Adlm-GN"},"az-IQ":{"value":"az-Arab-IQ"},"und-Nbat":
{"value":"arc-Nbat-JO"},"sd-Khoj":{"value":"sd-Khoj-IN"},"nod":{"value":"nod-Lana-TH"},"auy":{"value":"auy-Latn-ZZ"},"noe":{"value":"noe-Deva-IN"},"rwk":{"value":"rwk-Latn-TZ"},"und-Cyrl-MD":{"value":"uk-Cyrl-MD"},"rwo":{"value":"rwo-Latn-ZZ"},"non":{"value":"non-Runr-SE"},"nop":{"value":"nop-Latn-ZZ"},"jgk":{"value":"jgk-Latn-ZZ"},"jgo":{"value":"jgo-Latn-CM"},"und-Vaii":{"value":"vai-Vaii-LR"},"nou":{"value":"nou-Latn-ZZ"},"avl":{"value":"avl-Arab-ZZ"},"avn":{"value":"avn-Latn-ZZ"},"wae":{"value":"wae-Latn-CH"}
,"avt":{"value":"avt-Latn-ZZ"},"avu":{"value":"avu-Latn-ZZ"},"waj":{"value":"waj-Latn-ZZ"},"wal":{"value":"wal-Ethi-ET"},"wan":{"value":"wan-Latn-ZZ"},"zh-HK":{"value":"zh-Hant-HK"},"war":{"value":"war-Latn-PH"},"awa":{"value":"awa-Deva-IN"},"und-Plrd":{"value":"hmd-Plrd-CN"},"awb":{"value":"awb-Latn-ZZ"},"awo":{"value":"awo-Latn-ZZ"},"und-Knda":{"value":"kn-Knda-IN"},"zh-ID":{"value":"zh-Hant-ID"},"jib":{"value":"jib-Latn-ZZ"},"awx":{"value":"awx-Latn-ZZ"},"wbp":{"value":"wbp-Latn-AU"},"und-Sidd":{"value":
"sa-Sidd-IN"},"fab":{"value":"fab-Latn-ZZ"},"wbr":{"value":"wbr-Deva-IN"},"faa":{"value":"faa-Latn-ZZ"},"wbq":{"value":"wbq-Telu-IN"},"und-Kali":{"value":"eky-Kali-MM"},"fag":{"value":"fag-Latn-ZZ"},"nqo":{"value":"nqo-Nkoo-GN"},"fai":{"value":"fai-Latn-ZZ"},"ryu":{"value":"ryu-Kana-JP"},"fan":{"value":"fan-Latn-GQ"},"wci":{"value":"wci-Latn-ZZ"},"nrb":{"value":"nrb-Latn-ZZ"},"und-Phlp":{"value":"pal-Phlp-CN"},"ayb":{"value":"ayb-Latn-ZZ"},"und-Phli":{"value":"pal-Phli-IR"},"cu-Glag":{"value":"cu-Glag-BG"},
"und-Cyrl-XK":{"value":"sr-Cyrl-XK"},"az-Arab":{"value":"az-Arab-IR"},"und-Thai":{"value":"th-Thai-TH"},"nsk":{"value":"nsk-Cans-CA"},"nsn":{"value":"nsn-Latn-ZZ"},"nso":{"value":"nso-Latn-ZA"},"und-Thaa":{"value":"dv-Thaa-MV"},"und-Nshu":{"value":"zhx-Nshu-CN"},"nss":{"value":"nss-Latn-ZZ"},"zh-VN":{"value":"zh-Hant-VN"},"und-Hmnp":{"value":"mww-Hmnp-US"},"und-Kana":{"value":"ja-Kana-JP"},"und-Hmng":{"value":"hnj-Hmng-LA"},"wer":{"value":"wer-Latn-ZZ"},"zh-TW":{"value":"zh-Hant-TW"},"ntm":{"value":"ntm-Latn-ZZ"}
,"ntr":{"value":"ntr-Latn-ZZ"},"zh-US":{"value":"zh-Hant-US"},"und-Xpeo":{"value":"peo-Xpeo-IR"},"jmc":{"value":"jmc-Latn-TZ"},"nui":{"value":"nui-Latn-ZZ"},"jml":{"value":"jml-Deva-NP"},"nup":{"value":"nup-Latn-ZZ"},"und-Cyrl-SK":{"value":"uk-Cyrl-SK"},"nus":{"value":"nus-Latn-SS"},"nuv":{"value":"nuv-Latn-ZZ"},"nux":{"value":"nux-Latn-ZZ"},"zh-TH":{"value":"zh-Hant-TH"},"wgi":{"value":"wgi-Latn-ZZ"},"und-Phnx":{"value":"phn-Phnx-LB"},"und-Cyrl-TR":{"value":"kbd-Cyrl-TR"},"ffi":{"value":"ffi-Latn-ZZ"},"und-Elym":
{"value":"arc-Elym-IR"},"ffm":{"value":"ffm-Latn-ML"},"und-Rjng":{"value":"rej-Rjng-ID"},"whg":{"value":"whg-Latn-ZZ"},"nwb":{"value":"nwb-Latn-ZZ"},"zh-SR":{"value":"zh-Hant-SR"},"wib":{"value":"wib-Latn-ZZ"},"und-Hebr":{"value":"he-Hebr-IL"},"saf":{"value":"saf-Latn-GH"},"sah":{"value":"sah-Cyrl-RU"},"saq":{"value":"saq-Latn-KE"},"wiu":{"value":"wiu-Latn-ZZ"},"sas":{"value":"sas-Latn-ID"},"wiv":{"value":"wiv-Latn-ZZ"},"nxq":{"value":"nxq-Latn-CN"},"sat":{"value":"sat-Latn-IN"},"nxr":{"value":"nxr-Latn-ZZ"}
,"sav":{"value":"sav-Latn-SN"},"saz":{"value":"saz-Saur-IN"},"wja":{"value":"wja-Latn-ZZ"},"sba":{"value":"sba-Latn-ZZ"},"sbe":{"value":"sbe-Latn-ZZ"},"wji":{"value":"wji-Latn-ZZ"},"mn-Mong":{"value":"mn-Mong-CN"},"und-419":{"value":"es-Latn-419"},"fia":{"value":"fia-Arab-SD"},"sbp":{"value":"sbp-Latn-TZ"},"und-NO":{"value":"nb-Latn-NO"},"nyn":{"value":"nyn-Latn-UG"},"nym":{"value":"nym-Latn-TZ"},"und-NL":{"value":"nl-Latn-NL"},"und-NP":{"value":"ne-Deva-NP"},"fil":{"value":"fil-Latn-PH"},"bal":{"value":"bal-Arab-PK"}
,"ban":{"value":"ban-Latn-ID"},"bap":{"value":"bap-Deva-NP"},"fit":{"value":"fit-Latn-SE"},"bar":{"value":"bar-Latn-AT"},"bas":{"value":"bas-Latn-CM"},"bav":{"value":"bav-Latn-ZZ"},"bax":{"value":"bax-Bamu-CM"},"jra":{"value":"jra-Latn-ZZ"},"sck":{"value":"sck-Deva-IN"},"nzi":{"value":"nzi-Latn-GH"},"scl":{"value":"scl-Arab-ZZ"},"sco":{"value":"sco-Latn-GB"},"scn":{"value":"scn-Latn-IT"},"aa":{"value":"aa-Latn-ET"},"bba":{"value":"bba-Latn-ZZ"},"und-MN":{"value":"mn-Cyrl-MN"},"ab":{"value":"ab-Cyrl-GE"},"und-MM":
{"value":"my-Mymr-MM"},"und-Osma":{"value":"so-Osma-SO"},"bbc":{"value":"bbc-Latn-ID"},"scs":{"value":"scs-Latn-CA"},"und-ML":{"value":"bm-Latn-ML"},"bbb":{"value":"bbb-Latn-ZZ"},"und-MK":{"value":"mk-Cyrl-MK"},"ae":{"value":"ae-Avst-IR"},"und-MR":{"value":"ar-Arab-MR"},"af":{"value":"af-Latn-ZA"},"bbd":{"value":"bbd-Latn-ZZ"},"und-MQ":{"value":"fr-Latn-MQ"},"und-Wara":{"value":"hoc-Wara-IN"},"und-MO":{"value":"zh-Hant-MO"},"und-MV":{"value":"dv-Thaa-MV"},"und-MU":{"value":"mfe-Latn-MU"},"ak":{"value":"ak-Latn-GH"}
,"und-MT":{"value":"mt-Latn-MT"},"bbj":{"value":"bbj-Latn-CM"},"am":{"value":"am-Ethi-ET"},"und-MZ":{"value":"pt-Latn-MZ"},"und-MY":{"value":"ms-Latn-MY"},"und-MX":{"value":"es-Latn-MX"},"ar":{"value":"ar-Arab-EG"},"bbp":{"value":"bbp-Latn-ZZ"},"as":{"value":"as-Beng-IN"},"bbr":{"value":"bbr-Latn-ZZ"},"sdc":{"value":"sdc-Latn-IT"},"und-NC":{"value":"fr-Latn-NC"},"av":{"value":"av-Cyrl-RU"},"sdh":{"value":"sdh-Arab-IR"},"und-NA":{"value":"af-Latn-NA"},"ay":{"value":"ay-Latn-BO"},"az":{"value":"az-Latn-AZ"},"und-NE":
{"value":"ha-Latn-NE"},"und-NI":{"value":"es-Latn-NI"},"ba":{"value":"ba-Cyrl-RU"},"wls":{"value":"wls-Latn-WF"},"und-Kore":{"value":"ko-Kore-KR"},"und-LK":{"value":"si-Sinh-LK"},"be":{"value":"be-Cyrl-BY"},"bcf":{"value":"bcf-Latn-ZZ"},"bg":{"value":"bg-Cyrl-BG"},"bch":{"value":"bch-Latn-ZZ"},"bi":{"value":"bi-Latn-VU"},"und-LU":{"value":"fr-Latn-LU"},"bci":{"value":"bci-Latn-CI"},"und-LT":{"value":"lt-Latn-LT"},"und-LS":{"value":"st-Latn-LS"},"bm":{"value":"bm-Latn-ML"},"bcn":{"value":"bcn-Latn-ZZ"},"bn":
{"value":"bn-Beng-BD"},"und-LY":{"value":"ar-Arab-LY"},"bcm":{"value":"bcm-Latn-ZZ"},"bo":{"value":"bo-Tibt-CN"},"bco":{"value":"bco-Latn-ZZ"},"und-LV":{"value":"lv-Latn-LV"},"br":{"value":"br-Latn-FR"},"bcq":{"value":"bcq-Ethi-ZZ"},"bs":{"value":"bs-Latn-BA"},"bcu":{"value":"bcu-Latn-ZZ"},"sef":{"value":"sef-Latn-CI"},"und-MA":{"value":"ar-Arab-MA"},"sei":{"value":"sei-Latn-MX"},"seh":{"value":"seh-Latn-MZ"},"und-MF":{"value":"fr-Latn-MF"},"wmo":{"value":"wmo-Latn-ZZ"},"und-ME":{"value":"sr-Latn-ME"},"und-MD":
{"value":"ro-Latn-MD"},"und-MC":{"value":"fr-Latn-MC"},"ca":{"value":"ca-Latn-ES"},"und-MG":{"value":"mg-Latn-MG"},"ses":{"value":"ses-Latn-ML"},"ce":{"value":"ce-Cyrl-RU"},"und-Cyrl-BA":{"value":"sr-Cyrl-BA"},"bdd":{"value":"bdd-Latn-ZZ"},"und-KP":{"value":"ko-Kore-KP"},"ch":{"value":"ch-Latn-GU"},"und-KM":{"value":"ar-Arab-KM"},"und-KR":{"value":"ko-Kore-KR"},"co":{"value":"co-Latn-FR"},"flr":{"value":"flr-Latn-ZZ"},"und-KW":{"value":"ar-Arab-KW"},"wnc":{"value":"wnc-Latn-ZZ"},"und-Dogr":{"value":"doi-Dogr-IN"}
,"cr":{"value":"cr-Cans-CA"},"cs":{"value":"cs-Latn-CZ"},"cu":{"value":"cu-Cyrl-RU"},"und-KZ":{"value":"ru-Cyrl-KZ"},"cv":{"value":"cv-Cyrl-RU"},"wni":{"value":"wni-Arab-KM"},"und-LA":{"value":"lo-Laoo-LA"},"cy":{"value":"cy-Latn-GB"},"und-LB":{"value":"ar-Arab-LB"},"und-LI":{"value":"de-Latn-LI"},"da":{"value":"da-Latn-DK"},"und-Cyrl-AL":{"value":"mk-Cyrl-AL"},"wnu":{"value":"wnu-Latn-ZZ"},"de":{"value":"de-Latn-DE"},"bef":{"value":"bef-Latn-ZZ"},"beh":{"value":"beh-Latn-ZZ"},"und-JO":{"value":"ar-Arab-JO"}
,"bej":{"value":"bej-Arab-SD"},"fmp":{"value":"fmp-Latn-ZZ"},"jut":{"value":"jut-Latn-DK"},"bem":{"value":"bem-Latn-ZM"},"und-JP":{"value":"ja-Jpan-JP"},"wob":{"value":"wob-Latn-ZZ"},"sga":{"value":"sga-Ogam-IE"},"bet":{"value":"bet-Latn-ZZ"},"dv":{"value":"dv-Thaa-MV"},"bex":{"value":"bex-Latn-ZZ"},"bew":{"value":"bew-Latn-ID"},"bez":{"value":"bez-Latn-TZ"},"dz":{"value":"dz-Tibt-BT"},"ms-ID":{"value":"ms-Arab-ID"},"wos":{"value":"wos-Latn-ZZ"},"und-KH":{"value":"km-Khmr-KH"},"und-KG":{"value":"ky-Cyrl-KG"}
,"sgs":{"value":"sgs-Latn-LT"},"und-KE":{"value":"sw-Latn-KE"},"ee":{"value":"ee-Latn-GH"},"bfd":{"value":"bfd-Latn-CM"},"sgw":{"value":"sgw-Ethi-ZZ"},"und-IN":{"value":"hi-Deva-IN"},"und-IL":{"value":"he-Hebr-IL"},"el":{"value":"el-Grek-GR"},"sgz":{"value":"sgz-Latn-ZZ"},"und-IR":{"value":"fa-Arab-IR"},"en":{"value":"en-Latn-US"},"und-IQ":{"value":"ar-Arab-IQ"},"und-Perm":{"value":"kv-Perm-RU"},"eo":{"value":"eo-Latn-001"},"bfq":{"value":"bfq-Taml-IN"},"es":{"value":"es-Latn-ES"},"und-IT":{"value":"it-Latn-IT"}
,"et":{"value":"et-Latn-EE"},"und-IS":{"value":"is-Latn-IS"},"eu":{"value":"eu-Latn-ES"},"bft":{"value":"bft-Arab-PK"},"bfy":{"value":"bfy-Deva-IN"},"shi":{"value":"shi-Tfng-MA"},"shk":{"value":"shk-Latn-ZZ"},"shn":{"value":"shn-Mymr-MM"},"fod":{"value":"fod-Latn-ZZ"},"fa":{"value":"fa-Arab-IR"},"bgc":{"value":"bgc-Deva-IN"},"ff":{"value":"ff-Latn-SN"},"shu":{"value":"shu-Arab-ZZ"},"fi":{"value":"fi-Latn-FI"},"fj":{"value":"fj-Latn-FJ"},"fon":{"value":"fon-Latn-BJ"},"und-HM":{"value":"und-Latn-HM"},"und-HK":
{"value":"zh-Hant-HK"},"bgn":{"value":"bgn-Arab-PK"},"for":{"value":"for-Latn-ZZ"},"fo":{"value":"fo-Latn-FO"},"und-HN":{"value":"es-Latn-HN"},"fr":{"value":"fr-Latn-FR"},"und-HU":{"value":"hu-Latn-HU"},"und-HT":{"value":"ht-Latn-HT"},"ku-Arab":{"value":"ku-Arab-IQ"},"sid":{"value":"sid-Latn-ET"},"und-HR":{"value":"hr-Latn-HR"},"sig":{"value":"sig-Latn-ZZ"},"bgx":{"value":"bgx-Grek-TR"},"fy":{"value":"fy-Latn-NL"},"sim":{"value":"sim-Latn-ZZ"},"sil":{"value":"sil-Latn-ZZ"},"fpe":{"value":"fpe-Latn-ZZ"},"ga":
{"value":"ga-Latn-IE"},"bhb":{"value":"bhb-Deva-IN"},"gd":{"value":"gd-Latn-GB"},"und-ID":{"value":"id-Latn-ID"},"und-IC":{"value":"es-Latn-IC"},"bhg":{"value":"bhg-Latn-ZZ"},"und-GH":{"value":"ak-Latn-GH"},"bhi":{"value":"bhi-Deva-IN"},"und-GF":{"value":"fr-Latn-GF"},"und-GE":{"value":"ka-Geor-GE"},"bhk":{"value":"bhk-Latn-PH"},"und-GL":{"value":"kl-Latn-GL"},"gl":{"value":"gl-Latn-ES"},"bhl":{"value":"bhl-Latn-ZZ"},"gn":{"value":"gn-Latn-PY"},"bho":{"value":"bho-Deva-IN"},"und-GP":{"value":"fr-Latn-GP"},"und-GN":
{"value":"fr-Latn-GN"},"und-GT":{"value":"es-Latn-GT"},"und-GS":{"value":"und-Latn-GS"},"gu":{"value":"gu-Gujr-IN"},"und-GR":{"value":"el-Grek-GR"},"gv":{"value":"gv-Latn-IM"},"und-GQ":{"value":"es-Latn-GQ"},"und-Palm":{"value":"arc-Palm-SY"},"und-GW":{"value":"pt-Latn-GW"},"bhy":{"value":"bhy-Latn-ZZ"},"ha":{"value":"ha-Latn-NG"},"wrs":{"value":"wrs-Latn-ZZ"},"bib":{"value":"bib-Latn-ZZ"},"sjr":{"value":"sjr-Latn-ZZ"},"he":{"value":"he-Hebr-IL"},"big":{"value":"big-Latn-ZZ"},"hi":{"value":"hi-Deva-IN"},"und-Cyrl-GE":
{"value":"ab-Cyrl-GE"},"bik":{"value":"bik-Latn-PH"},"bin":{"value":"bin-Latn-NG"},"und-Cham":{"value":"cjm-Cham-VN"},"und-FI":{"value":"fi-Latn-FI"},"bim":{"value":"bim-Latn-ZZ"},"ho":{"value":"ho-Latn-PG"},"tg-PK":{"value":"tg-Arab-PK"},"und-FO":{"value":"fo-Latn-FO"},"bio":{"value":"bio-Latn-ZZ"},"fqs":{"value":"fqs-Latn-ZZ"},"hr":{"value":"hr-Latn-HR"},"skc":{"value":"skc-Latn-ZZ"},"wsg":{"value":"wsg-Gong-IN"},"biq":{"value":"biq-Latn-ZZ"},"ht":{"value":"ht-Latn-HT"},"hu":{"value":"hu-Latn-HU"},"und-FR":
{"value":"fr-Latn-FR"},"wsk":{"value":"wsk-Latn-ZZ"},"hy":{"value":"hy-Armn-AM"},"hz":{"value":"hz-Latn-NA"},"frc":{"value":"frc-Latn-US"},"ia":{"value":"ia-Latn-001"},"sks":{"value":"sks-Latn-ZZ"},"id":{"value":"id-Latn-ID"},"skr":{"value":"skr-Arab-PK"},"ig":{"value":"ig-Latn-NG"},"und-GA":{"value":"fr-Latn-GA"},"bji":{"value":"bji-Ethi-ZZ"},"ii":{"value":"ii-Yiii-CN"},"bjh":{"value":"bjh-Latn-ZZ"},"und-EE":{"value":"et-Latn-EE"},"ik":{"value":"ik-Latn-US"},"bjj":{"value":"bjj-Deva-IN"},"und-EC":{"value":
"es-Latn-EC"},"und-Cprt":{"value":"grc-Cprt-CY"},"frp":{"value":"frp-Latn-FR"},"in":{"value":"in-Latn-ID"},"bjo":{"value":"bjo-Latn-ZZ"},"frs":{"value":"frs-Latn-DE"},"io":{"value":"io-Latn-001"},"und-EH":{"value":"ar-Arab-EH"},"bjn":{"value":"bjn-Latn-ID"},"frr":{"value":"frr-Latn-DE"},"und-EG":{"value":"ar-Arab-EG"},"is":{"value":"is-Latn-IS"},"sld":{"value":"sld-Latn-ZZ"},"bjr":{"value":"bjr-Latn-ZZ"},"it":{"value":"it-Latn-IT"},"iu":{"value":"iu-Cans-CA"},"und-ER":{"value":"ti-Ethi-ER"},"bjt":{"value":"bjt-Latn-SN"}
,"iw":{"value":"iw-Hebr-IL"},"und-Tirh":{"value":"mai-Tirh-IN"},"sli":{"value":"sli-Latn-PL"},"und-EU":{"value":"en-Latn-GB"},"wtm":{"value":"wtm-Deva-IN"},"sll":{"value":"sll-Latn-ZZ"},"und-ET":{"value":"am-Ethi-ET"},"bjz":{"value":"bjz-Latn-ZZ"},"und-ES":{"value":"es-Latn-ES"},"und-EZ":{"value":"de-Latn-EZ"},"ja":{"value":"ja-Jpan-JP"},"zh-GF":{"value":"zh-Hant-GF"},"bkc":{"value":"bkc-Latn-ZZ"},"zh-GB":{"value":"zh-Hant-GB"},"und-Cyrl-GR":{"value":"mk-Cyrl-GR"},"ji":{"value":"ji-Hebr-UA"},"und-DE":{"value"
:"de-Latn-DE"},"sly":{"value":"sly-Latn-ID"},"bkm":{"value":"bkm-Latn-CM"},"sma":{"value":"sma-Latn-SE"},"bkq":{"value":"bkq-Latn-ZZ"},"und-DK":{"value":"da-Latn-DK"},"und-DJ":{"value":"aa-Latn-DJ"},"bkv":{"value":"bkv-Latn-ZZ"},"jv":{"value":"jv-Latn-ID"},"bku":{"value":"bku-Latn-PH"},"jw":{"value":"jw-Latn-ID"},"und-DO":{"value":"es-Latn-DO"},"smj":{"value":"smj-Latn-SE"},"smn":{"value":"smn-Latn-FI"},"ka":{"value":"ka-Geor-GE"},"smq":{"value":"smq-Latn-ZZ"},"wuu":{"value":"wuu-Hans-CN"},"smp":{"value":"smp-Samr-IL"}
,"sms":{"value":"sms-Latn-FI"},"wuv":{"value":"wuv-Latn-ZZ"},"und-DZ":{"value":"ar-Arab-DZ"},"kg":{"value":"kg-Latn-CD"},"und-EA":{"value":"es-Latn-EA"},"ki":{"value":"ki-Latn-KE"},"kj":{"value":"kj-Latn-NA"},"kk":{"value":"kk-Cyrl-KZ"},"man-Nkoo":{"value":"man-Nkoo-GN"},"und-CD":{"value":"sw-Latn-CD"},"kl":{"value":"kl-Latn-GL"},"und-Telu":{"value":"te-Telu-IN"},"km":{"value":"km-Khmr-KH"},"kn":{"value":"kn-Knda-IN"},"ko":{"value":"ko-Kore-KR"},"und-CH":{"value":"de-Latn-CH"},"und-CG":{"value":"fr-Latn-CG"}
,"und-CF":{"value":"fr-Latn-CF"},"kr":{"value":"kr-Latn-ZZ"},"ks":{"value":"ks-Arab-IN"},"und-CL":{"value":"es-Latn-CL"},"snc":{"value":"snc-Latn-ZZ"},"ku":{"value":"ku-Latn-TR"},"blt":{"value":"blt-Tavt-VN"},"kv":{"value":"kv-Cyrl-RU"},"und-CI":{"value":"fr-Latn-CI"},"kw":{"value":"kw-Latn-GB"},"und-CP":{"value":"und-Latn-CP"},"und-CO":{"value":"es-Latn-CO"},"ky":{"value":"ky-Cyrl-KG"},"und-CN":{"value":"zh-Hans-CN"},"und-CM":{"value":"fr-Latn-CM"},"snk":{"value":"snk-Latn-ML"},"fub":{"value":"fub-Arab-CM"}
,"und-CR":{"value":"es-Latn-CR"},"fud":{"value":"fud-Latn-WF"},"snp":{"value":"snp-Latn-ZZ"},"la":{"value":"la-Latn-VA"},"und-CW":{"value":"pap-Latn-CW"},"fuf":{"value":"fuf-Latn-GN"},"lb":{"value":"lb-Latn-LU"},"und-CV":{"value":"pt-Latn-CV"},"fue":{"value":"fue-Latn-ZZ"},"und-CU":{"value":"es-Latn-CU"},"fuh":{"value":"fuh-Latn-ZZ"},"und-CZ":{"value":"cs-Latn-CZ"},"lg":{"value":"lg-Latn-UG"},"und-CY":{"value":"el-Grek-CY"},"bmh":{"value":"bmh-Latn-ZZ"},"snx":{"value":"snx-Latn-ZZ"},"li":{"value":"li-Latn-NL"}
,"sny":{"value":"sny-Latn-ZZ"},"wwa":{"value":"wwa-Latn-ZZ"},"bmk":{"value":"bmk-Latn-ZZ"},"und-Cher":{"value":"chr-Cher-US"},"fur":{"value":"fur-Latn-IT"},"ln":{"value":"ln-Latn-CD"},"und-BA":{"value":"bs-Latn-BA"},"fuq":{"value":"fuq-Latn-NE"},"lo":{"value":"lo-Laoo-LA"},"und-BG":{"value":"bg-Cyrl-BG"},"und-BF":{"value":"fr-Latn-BF"},"fuv":{"value":"fuv-Latn-NG"},"und-BE":{"value":"nl-Latn-BE"},"bmq":{"value":"bmq-Latn-ML"},"und-BD":{"value":"bn-Beng-BD"},"lt":{"value":"lt-Latn-LT"},"lu":{"value":"lu-Latn-CD"}
,"und-BJ":{"value":"fr-Latn-BJ"},"lv":{"value":"lv-Latn-LV"},"ogc":{"value":"ogc-Latn-ZZ"},"sog":{"value":"sog-Sogd-UZ"},"und-BI":{"value":"rn-Latn-BI"},"bmu":{"value":"bmu-Latn-ZZ"},"fuy":{"value":"fuy-Latn-ZZ"},"und-BH":{"value":"ar-Arab-BH"},"und-BO":{"value":"es-Latn-BO"},"und-BN":{"value":"ms-Latn-BN"},"sok":{"value":"sok-Latn-ZZ"},"und-BL":{"value":"fr-Latn-BL"},"und-BR":{"value":"pt-Latn-BR"},"und-BQ":{"value":"pap-Latn-BQ"},"soq":{"value":"soq-Latn-ZZ"},"und-BV":{"value":"und-Latn-BV"},"und-BT":{"value"
:"dz-Tibt-BT"},"sou":{"value":"sou-Thai-TH"},"bng":{"value":"bng-Latn-ZZ"},"mg":{"value":"mg-Latn-MG"},"und-BY":{"value":"be-Cyrl-BY"},"und-Glag":{"value":"cu-Glag-BG"},"mh":{"value":"mh-Latn-MH"},"mi":{"value":"mi-Latn-NZ"},"soy":{"value":"soy-Latn-ZZ"},"mk":{"value":"mk-Cyrl-MK"},"ml":{"value":"ml-Mlym-IN"},"bnm":{"value":"bnm-Latn-ZZ"},"mn":{"value":"mn-Cyrl-MN"},"und-Prti":{"value":"xpr-Prti-IR"},"fvr":{"value":"fvr-Latn-SD"},"und-AF":{"value":"fa-Arab-AF"},"bnp":{"value":"bnp-Latn-ZZ"},"mr":{"value":"mr-Deva-IN"}
,"und-AE":{"value":"ar-Arab-AE"},"ms":{"value":"ms-Latn-MY"},"spd":{"value":"spd-Latn-ZZ"},"und-AD":{"value":"ca-Latn-AD"},"mt":{"value":"mt-Latn-MT"},"my":{"value":"my-Mymr-MM"},"zh-BN":{"value":"zh-Hant-BN"},"und-AM":{"value":"hy-Armn-AM"},"spl":{"value":"spl-Latn-ZZ"},"und-AL":{"value":"sq-Latn-AL"},"und-AR":{"value":"es-Latn-AR"},"und-AQ":{"value":"und-Latn-AQ"},"na":{"value":"na-Latn-NR"},"und-AO":{"value":"pt-Latn-AO"},"nb":{"value":"nb-Latn-NO"},"nd":{"value":"nd-Latn-ZW"},"und-AT":{"value":"de-Latn-AT"}
,"ne":{"value":"ne-Deva-NP"},"sps":{"value":"sps-Latn-ZZ"},"und-AS":{"value":"sm-Latn-AS"},"und-AZ":{"value":"az-Latn-AZ"},"ng":{"value":"ng-Latn-NA"},"und-AX":{"value":"sv-Latn-AX"},"und-AW":{"value":"nl-Latn-AW"},"boj":{"value":"boj-Latn-ZZ"},"nl":{"value":"nl-Latn-NL"},"bon":{"value":"bon-Latn-ZZ"},"nn":{"value":"nn-Latn-NO"},"bom":{"value":"bom-Latn-ZZ"},"no":{"value":"no-Latn-NO"},"nr":{"value":"nr-Latn-ZA"},"arc-Nbat":{"value":"arc-Nbat-JO"},"und-Medf":{"value":"mis-Medf-NG"},"nv":{"value":"nv-Latn-US"}
,"kaa":{"value":"kaa-Cyrl-UZ"},"ny":{"value":"ny-Latn-MW"},"kac":{"value":"kac-Latn-MM"},"kab":{"value":"kab-Latn-DZ"},"kad":{"value":"kad-Latn-ZZ"},"kai":{"value":"kai-Latn-ZZ"},"oc":{"value":"oc-Latn-FR"},"zh-AU":{"value":"zh-Hant-AU"},"kaj":{"value":"kaj-Latn-NG"},"kam":{"value":"kam-Latn-KE"},"und-Tagb":{"value":"tbw-Tagb-PH"},"kao":{"value":"kao-Latn-ML"},"und-Ogam":{"value":"sga-Ogam-IE"},"om":{"value":"om-Latn-ET"},"srb":{"value":"srb-Sora-IN"},"or":{"value":"or-Orya-IN"},"tg-Arab":{"value":"tg-Arab-PK"}
,"os":{"value":"os-Cyrl-GE"},"und-Sogd":{"value":"sog-Sogd-UZ"},"bpy":{"value":"bpy-Beng-IN"},"kbd":{"value":"kbd-Cyrl-RU"},"srn":{"value":"srn-Latn-SR"},"pa":{"value":"pa-Guru-IN"},"srr":{"value":"srr-Latn-SN"},"bqc":{"value":"bqc-Latn-ZZ"},"und-Kthi":{"value":"bho-Kthi-IN"},"kbm":{"value":"kbm-Latn-ZZ"},"kbp":{"value":"kbp-Latn-ZZ"},"srx":{"value":"srx-Deva-IN"},"bqi":{"value":"bqi-Arab-IR"},"kbq":{"value":"kbq-Latn-ZZ"},"pl":{"value":"pl-Latn-PL"},"bqp":{"value":"bqp-Latn-ZZ"},"kbx":{"value":"kbx-Latn-ZZ"}
,"kby":{"value":"kby-Arab-NE"},"ps":{"value":"ps-Arab-AF"},"pt":{"value":"pt-Latn-BR"},"ssd":{"value":"ssd-Latn-ZZ"},"und-Nkoo":{"value":"man-Nkoo-GN"},"bqv":{"value":"bqv-Latn-CI"},"ssg":{"value":"ssg-Latn-ZZ"},"und-Mymr":{"value":"my-Mymr-MM"},"kcg":{"value":"kcg-Latn-NG"},"bra":{"value":"bra-Deva-IN"},"kck":{"value":"kck-Latn-ZW"},"kcl":{"value":"kcl-Latn-ZZ"},"okr":{"value":"okr-Latn-ZZ"},"ssy":{"value":"ssy-Latn-ER"},"brh":{"value":"brh-Arab-PK"},"okv":{"value":"okv-Latn-ZZ"},"kct":{"value":"kct-Latn-ZZ"}
,"und-Hani":{"value":"zh-Hani-CN"},"und-Bugi":{"value":"bug-Bugi-ID"},"und-Hang":{"value":"ko-Hang-KR"},"qu":{"value":"qu-Latn-PE"},"brx":{"value":"brx-Deva-IN"},"und-Samr":{"value":"smp-Samr-IL"},"brz":{"value":"brz-Latn-ZZ"},"stk":{"value":"stk-Latn-ZZ"},"und-Hano":{"value":"hnn-Hano-PH"},"kde":{"value":"kde-Latn-TZ"},"kdh":{"value":"kdh-Arab-TG"},"stq":{"value":"stq-Latn-DE"},"kdl":{"value":"kdl-Latn-ZZ"},"bsj":{"value":"bsj-Latn-ZZ"},"und-Hanb":{"value":"zh-Hanb-TW"},"kdt":{"value":"kdt-Thai-TH"},"rm":{"value"
:"rm-Latn-CH"},"rn":{"value":"rn-Latn-BI"},"ro":{"value":"ro-Latn-RO"},"sua":{"value":"sua-Latn-ZZ"},"und-Deva-BT":{"value":"ne-Deva-BT"},"bsq":{"value":"bsq-Bass-LR"},"bst":{"value":"bst-Ethi-ZZ"},"sue":{"value":"sue-Latn-ZZ"},"bss":{"value":"bss-Latn-CM"},"ru":{"value":"ru-Cyrl-RU"},"und-Buhd":{"value":"bku-Buhd-PH"},"rw":{"value":"rw-Latn-RW"},"kea":{"value":"kea-Latn-CV"},"suk":{"value":"suk-Latn-TZ"},"grc-Linb":{"value":"grc-Linb-GR"},"sa":{"value":"sa-Deva-IN"},"sc":{"value":"sc-Latn-IT"},"sus":{"value"
:"sus-Latn-GN"},"sd":{"value":"sd-Arab-PK"},"sur":{"value":"sur-Latn-ZZ"},"se":{"value":"se-Latn-NO"},"sg":{"value":"sg-Latn-CF"},"ken":{"value":"ken-Latn-CM"},"si":{"value":"si-Sinh-LK"},"und-Hant":{"value":"zh-Hant-TW"},"und-Hans":{"value":"zh-Hans-CN"},"sk":{"value":"sk-Latn-SK"},"sl":{"value":"sl-Latn-SI"},"sm":{"value":"sm-Latn-WS"},"sn":{"value":"sn-Latn-ZW"},"bto":{"value":"bto-Latn-PH"},"so":{"value":"so-Latn-SO"},"sq":{"value":"sq-Latn-AL"},"sr":{"value":"sr-Cyrl-RS"},"ss":{"value":"ss-Latn-ZA"},"kez":
{"value":"kez-Latn-ZZ"},"st":{"value":"st-Latn-ZA"},"su":{"value":"su-Latn-ID"},"btt":{"value":"btt-Latn-ZZ"},"sv":{"value":"sv-Latn-SE"},"sw":{"value":"sw-Latn-TZ"},"btv":{"value":"btv-Deva-PK"},"ong":{"value":"ong-Latn-ZZ"},"ta":{"value":"ta-Taml-IN"},"onn":{"value":"onn-Latn-ZZ"},"bua":{"value":"bua-Cyrl-RU"},"bud":{"value":"bud-Latn-ZZ"},"buc":{"value":"buc-Latn-YT"},"te":{"value":"te-Telu-IN"},"tg":{"value":"tg-Cyrl-TJ"},"th":{"value":"th-Thai-TH"},"und-Gong":{"value":"wsg-Gong-IN"},"bug":{"value":"bug-Latn-ID"}
,"kfo":{"value":"kfo-Latn-CI"},"ons":{"value":"ons-Latn-ZZ"},"ti":{"value":"ti-Ethi-ET"},"kfr":{"value":"kfr-Deva-IN"},"tk":{"value":"tk-Latn-TM"},"tl":{"value":"tl-Latn-PH"},"und-Lisu":{"value":"lis-Lisu-CN"},"buk":{"value":"buk-Latn-ZZ"},"tn":{"value":"tn-Latn-ZA"},"bum":{"value":"bum-Latn-CM"},"to":{"value":"to-Latn-TO"},"buo":{"value":"buo-Latn-ZZ"},"swc":{"value":"swc-Latn-CD"},"tr":{"value":"tr-Latn-TR"},"und-Gonm":{"value":"esg-Gonm-IN"},"kfy":{"value":"kfy-Deva-IN"},"swb":{"value":"swb-Arab-YT"},"ts":
{"value":"ts-Latn-ZA"},"tt":{"value":"tt-Cyrl-RU"},"bus":{"value":"bus-Latn-ZZ"},"swg":{"value":"swg-Latn-DE"},"buu":{"value":"buu-Latn-ZZ"},"ty":{"value":"ty-Latn-PF"},"kge":{"value":"kge-Latn-ID"},"kgf":{"value":"kgf-Latn-ZZ"},"swp":{"value":"swp-Latn-ZZ"},"bvb":{"value":"bvb-Latn-GQ"},"ug":{"value":"ug-Arab-CN"},"swv":{"value":"swv-Deva-IN"},"kgp":{"value":"kgp-Latn-BR"},"uk":{"value":"uk-Cyrl-UA"},"ur":{"value":"ur-Arab-PK"},"kk-IR":{"value":"kk-Arab-IR"},"khb":{"value":"khb-Talu-CN"},"kha":{"value":"kha-Latn-IN"}
,"uz":{"value":"uz-Latn-UZ"},"sxn":{"value":"sxn-Latn-ID"},"xav":{"value":"xav-Latn-BR"},"opm":{"value":"opm-Latn-ZZ"},"bwd":{"value":"bwd-Latn-ZZ"},"und-Mlym":{"value":"ml-Mlym-IN"},"ve":{"value":"ve-Latn-ZA"},"khn":{"value":"khn-Deva-IN"},"sxw":{"value":"sxw-Latn-ZZ"},"vi":{"value":"vi-Latn-VN"},"khq":{"value":"khq-Latn-ML"},"kht":{"value":"kht-Mymr-IN"},"khs":{"value":"khs-Latn-ZZ"},"vo":{"value":"vo-Latn-001"},"khw":{"value":"khw-Arab-PK"},"bwr":{"value":"bwr-Latn-ZZ"},"khz":{"value":"khz-Latn-ZZ"},"und-ZW":
{"value":"sn-Latn-ZW"},"xbi":{"value":"xbi-Latn-ZZ"},"gaa":{"value":"gaa-Latn-GH"},"syl":{"value":"syl-Beng-BD"},"wa":{"value":"wa-Latn-BE"},"gag":{"value":"gag-Latn-MD"},"gaf":{"value":"gaf-Latn-ZZ"},"kij":{"value":"kij-Latn-ZZ"},"syr":{"value":"syr-Syrc-IQ"},"und-YE":{"value":"ar-Arab-YE"},"gah":{"value":"gah-Latn-ZZ"},"gaj":{"value":"gaj-Latn-ZZ"},"gam":{"value":"gam-Latn-ZZ"},"bxh":{"value":"bxh-Latn-ZZ"},"gan":{"value":"gan-Hans-CN"},"kiu":{"value":"kiu-Latn-TR"},"kiw":{"value":"kiw-Latn-ZZ"},"wo":{"value"
:"wo-Latn-SN"},"gaw":{"value":"gaw-Latn-ZZ"},"und-Sarb":{"value":"xsa-Sarb-YE"},"gay":{"value":"gay-Latn-ID"},"und-YT":{"value":"fr-Latn-YT"},"kjd":{"value":"kjd-Latn-ZZ"},"szl":{"value":"szl-Latn-PL"},"xcr":{"value":"xcr-Cari-TR"},"gba":{"value":"gba-Latn-ZZ"},"und-Mult":{"value":"skr-Mult-PK"},"kjg":{"value":"kjg-Laoo-LA"},"gbf":{"value":"gbf-Latn-ZZ"},"oro":{"value":"oro-Latn-ZZ"},"und-Hatr":{"value":"mis-Hatr-IQ"},"bye":{"value":"bye-Latn-ZZ"},"xh":{"value":"xh-Latn-ZA"},"gbm":{"value":"gbm-Deva-IN"},"oru":
{"value":"oru-Arab-ZZ"},"kjs":{"value":"kjs-Latn-ZZ"},"byn":{"value":"byn-Ethi-ER"},"und-XK":{"value":"sq-Latn-XK"},"yue-CN":{"value":"yue-Hans-CN"},"und-Lepc":{"value":"lep-Lepc-IN"},"byr":{"value":"byr-Latn-ZZ"},"kjy":{"value":"kjy-Latn-ZZ"},"osa":{"value":"osa-Osge-US"},"bys":{"value":"bys-Latn-ZZ"},"byv":{"value":"byv-Latn-CM"},"gbz":{"value":"gbz-Arab-IR"},"gby":{"value":"gby-Latn-ZZ"},"byx":{"value":"byx-Latn-ZZ"},"kkc":{"value":"kkc-Latn-ZZ"},"und-VU":{"value":"bi-Latn-VU"},"bza":{"value":"bza-Latn-ZZ"}
,"und-Goth":{"value":"got-Goth-UA"},"kkj":{"value":"kkj-Latn-CM"},"bze":{"value":"bze-Latn-ML"},"und-Avst":{"value":"ae-Avst-IR"},"bzf":{"value":"bzf-Latn-ZZ"},"yi":{"value":"yi-Hebr-001"},"bzh":{"value":"bzh-Latn-ZZ"},"und-WF":{"value":"fr-Latn-WF"},"yo":{"value":"yo-Latn-NG"},"gcr":{"value":"gcr-Latn-GF"},"ota":{"value":"ota-Arab-ZZ"},"und-WS":{"value":"sm-Latn-WS"},"bzw":{"value":"bzw-Latn-ZZ"},"und-UZ":{"value":"uz-Latn-UZ"},"und-UY":{"value":"es-Latn-UY"},"otk":{"value":"otk-Orkh-MN"},"xes":{"value":"xes-Latn-ZZ"}
,"za":{"value":"za-Latn-CN"},"gde":{"value":"gde-Latn-ZZ"},"kln":{"value":"kln-Latn-KE"},"und-VA":{"value":"it-Latn-VA"},"zh":{"value":"zh-Hans-CN"},"gdn":{"value":"gdn-Latn-ZZ"},"klq":{"value":"klq-Latn-ZZ"},"und-Saur":{"value":"saz-Saur-IN"},"klt":{"value":"klt-Latn-ZZ"},"und-VE":{"value":"es-Latn-VE"},"gdr":{"value":"gdr-Latn-ZZ"},"klx":{"value":"klx-Latn-ZZ"},"und-VN":{"value":"vi-Latn-VN"},"kk-MN":{"value":"kk-Arab-MN"},"zu":{"value":"zu-Latn-ZA"},"und-Armn":{"value":"hy-Armn-AM"},"kmb":{"value":"kmb-Latn-AO"}
,"und-TR":{"value":"tr-Latn-TR"},"geb":{"value":"geb-Latn-ZZ"},"und-TW":{"value":"zh-Hant-TW"},"kmh":{"value":"kmh-Latn-ZZ"},"und-TV":{"value":"tvl-Latn-TV"},"und-TZ":{"value":"sw-Latn-TZ"},"kmo":{"value":"kmo-Latn-ZZ"},"gej":{"value":"gej-Latn-ZZ"},"und-UA":{"value":"uk-Cyrl-UA"},"gel":{"value":"gel-Latn-ZZ"},"kms":{"value":"kms-Latn-ZZ"},"kmu":{"value":"kmu-Latn-ZZ"},"kmw":{"value":"kmw-Latn-ZZ"},"und-Tibt":{"value":"bo-Tibt-CN"},"und-UG":{"value":"sw-Latn-UG"},"und-Armi":{"value":"arc-Armi-IR"},"gez":{"value"
:"gez-Ethi-ET"},"und-ST":{"value":"pt-Latn-ST"},"knf":{"value":"knf-Latn-GW"},"und-SR":{"value":"nl-Latn-SR"},"und-SV":{"value":"es-Latn-SV"},"und-SY":{"value":"ar-Arab-SY"},"knp":{"value":"knp-Latn-ZZ"},"gfk":{"value":"gfk-Latn-ZZ"},"und-TD":{"value":"fr-Latn-TD"},"und-TH":{"value":"th-Thai-TH"},"und-TG":{"value":"fr-Latn-TG"},"und-TF":{"value":"fr-Latn-TF"},"und-TM":{"value":"tk-Latn-TM"},"und-TL":{"value":"pt-Latn-TL"},"und-TK":{"value":"tkl-Latn-TK"},"und-TJ":{"value":"tg-Cyrl-TJ"},"und-TO":{"value":"to-Latn-TO"}
,"und-TN":{"value":"ar-Arab-TN"},"und-RS":{"value":"sr-Cyrl-RS"},"koi":{"value":"koi-Cyrl-RU"},"und-RW":{"value":"rw-Latn-RW"},"kok":{"value":"kok-Deva-IN"},"und-RU":{"value":"ru-Cyrl-RU"},"kol":{"value":"kol-Latn-ZZ"},"kos":{"value":"kos-Latn-FM"},"ggn":{"value":"ggn-Deva-NP"},"und-SD":{"value":"ar-Arab-SD"},"und-SC":{"value":"fr-Latn-SC"},"und-SA":{"value":"ar-Arab-SA"},"koz":{"value":"koz-Latn-ZZ"},"und-SE":{"value":"sv-Latn-SE"},"und-SK":{"value":"sk-Latn-SK"},"und-SJ":{"value":"nb-Latn-SJ"},"und-SI":{"value"
:"sl-Latn-SI"},"taj":{"value":"taj-Deva-NP"},"und-SO":{"value":"so-Latn-SO"},"tal":{"value":"tal-Latn-ZZ"},"und-SN":{"value":"fr-Latn-SN"},"und-Osge":{"value":"osa-Osge-US"},"und-SM":{"value":"it-Latn-SM"},"kpf":{"value":"kpf-Latn-ZZ"},"tan":{"value":"tan-Latn-ZZ"},"kpe":{"value":"kpe-Latn-LR"},"und-QO":{"value":"en-Latn-DG"},"taq":{"value":"taq-Latn-ZZ"},"kpo":{"value":"kpo-Latn-ZZ"},"kpr":{"value":"kpr-Latn-ZZ"},"kpx":{"value":"kpx-Latn-ZZ"},"ghs":{"value":"ghs-Latn-ZZ"},"und-Lana":{"value":"nod-Lana-TH"}
,"tbc":{"value":"tbc-Latn-ZZ"},"und-RE":{"value":"fr-Latn-RE"},"tbd":{"value":"tbd-Latn-ZZ"},"tbg":{"value":"tbg-Latn-ZZ"},"tbf":{"value":"tbf-Latn-ZZ"},"und-RO":{"value":"ro-Latn-RO"},"kqb":{"value":"kqb-Latn-ZZ"},"tbo":{"value":"tbo-Latn-ZZ"},"kqf":{"value":"kqf-Latn-ZZ"},"und-PT":{"value":"pt-Latn-PT"},"und-PS":{"value":"ar-Arab-PS"},"und-PR":{"value":"es-Latn-PR"},"tbw":{"value":"tbw-Latn-PH"},"und-PY":{"value":"gn-Latn-PY"},"gim":{"value":"gim-Latn-ZZ"},"und-PW":{"value":"pau-Latn-PW"},"gil":{"value":"gil-Latn-KI"}
,"kqs":{"value":"kqs-Latn-ZZ"},"tbz":{"value":"tbz-Latn-ZZ"},"und-Laoo":{"value":"lo-Laoo-LA"},"can":{"value":"can-Latn-ZZ"},"und-QA":{"value":"ar-Arab-QA"},"kqy":{"value":"kqy-Ethi-ZZ"},"ms-CC":{"value":"ms-Arab-CC"},"tci":{"value":"tci-Latn-ZZ"},"krc":{"value":"krc-Cyrl-RU"},"krj":{"value":"krj-Latn-PH"},"kri":{"value":"kri-Latn-SL"},"ozm":{"value":"ozm-Latn-ZZ"},"und-OM":{"value":"ar-Arab-OM"},"krl":{"value":"krl-Latn-RU"},"gjk":{"value":"gjk-Arab-PK"},"cbj":{"value":"cbj-Latn-ZZ"},"gjn":{"value":"gjn-Latn-ZZ"}
,"tcy":{"value":"tcy-Knda-IN"},"xla":{"value":"xla-Latn-ZZ"},"krs":{"value":"krs-Latn-ZZ"},"xlc":{"value":"xlc-Lyci-TR"},"kru":{"value":"kru-Deva-IN"},"und-PA":{"value":"es-Latn-PA"},"xld":{"value":"xld-Lydi-TR"},"gju":{"value":"gju-Arab-PK"},"und-PE":{"value":"es-Latn-PE"},"tdd":{"value":"tdd-Tale-CN"},"tdg":{"value":"tdg-Deva-NP"},"tdh":{"value":"tdh-Deva-NP"},"und-PH":{"value":"fil-Latn-PH"},"und-PG":{"value":"tpi-Latn-PG"},"ksb":{"value":"ksb-Latn-TZ"},"und-PF":{"value":"fr-Latn-PF"},"und-PM":{"value":"fr-Latn-PM"}
,"ksd":{"value":"ksd-Latn-ZZ"},"und-PL":{"value":"pl-Latn-PL"},"und-PK":{"value":"ur-Arab-PK"},"ksf":{"value":"ksf-Latn-CM"}};}
function A0A(){return {"root":[{"value":"BCE"},{"value":"CE"}],"en":[{"value":"BC"},{"value":"AD"}]};}
function A61(){return {"root":[{"value":"AM"},{"value":"PM"}],"en":[{"value":"AM"},{"value":"PM"}]};}
function A6w(){return {"root":[{"value":"M01"},{"value":"M02"},{"value":"M03"},{"value":"M04"},{"value":"M05"},{"value":"M06"},{"value":"M07"},{"value":"M08"},{"value":"M09"},{"value":"M10"},{"value":"M11"},{"value":"M12"}],"en":[{"value":"January"},{"value":"February"},{"value":"March"},{"value":"April"},{"value":"May"},{"value":"June"},{"value":"July"},{"value":"August"},{"value":"September"},{"value":"October"},{"value":"November"},{"value":"December"}]};}
function AUT(){return {"root":[{"value":"M01"},{"value":"M02"},{"value":"M03"},{"value":"M04"},{"value":"M05"},{"value":"M06"},{"value":"M07"},{"value":"M08"},{"value":"M09"},{"value":"M10"},{"value":"M11"},{"value":"M12"}],"en":[{"value":"Jan"},{"value":"Feb"},{"value":"Mar"},{"value":"Apr"},{"value":"May"},{"value":"Jun"},{"value":"Jul"},{"value":"Aug"},{"value":"Sep"},{"value":"Oct"},{"value":"Nov"},{"value":"Dec"}]};}
function A5$(){return {"root":[{"value":"Sun"},{"value":"Mon"},{"value":"Tue"},{"value":"Wed"},{"value":"Thu"},{"value":"Fri"},{"value":"Sat"}],"en":[{"value":"Sunday"},{"value":"Monday"},{"value":"Tuesday"},{"value":"Wednesday"},{"value":"Thursday"},{"value":"Friday"},{"value":"Saturday"}]};}
function AVM(){return {"root":[{"value":"Sun"},{"value":"Mon"},{"value":"Tue"},{"value":"Wed"},{"value":"Thu"},{"value":"Fri"},{"value":"Sat"}],"en":[{"value":"Sun"},{"value":"Mon"},{"value":"Tue"},{"value":"Wed"},{"value":"Thu"},{"value":"Fri"},{"value":"Sat"}]};}
function AVg(){return {"value":"en_GB"};}
function A5m(){return {"DE":{"value":4},"PT":{"value":4},"DK":{"value":4},"LT":{"value":4},"LU":{"value":4},"HU":{"value":4},"MC":{"value":4},"UM":{"value":1},"IE":{"value":4},"US":{"value":1},"EE":{"value":4},"AD":{"value":4},"IM":{"value":4},"MQ":{"value":4},"IS":{"value":4},"IT":{"value":4},"VA":{"value":4},"AN":{"value":4},"ES":{"value":4},"001":{"value":1},"AT":{"value":4},"RE":{"value":4},"VI":{"value":1},"AX":{"value":4},"JE":{"value":4},"NL":{"value":4},"NO":{"value":4},"BE":{"value":4},"FI":{"value"
:4},"RU":{"value":4},"FJ":{"value":4},"BG":{"value":4},"FO":{"value":4},"FR":{"value":4},"SE":{"value":4},"SJ":{"value":4},"SK":{"value":4},"SM":{"value":4},"GB":{"value":4},"GF":{"value":4},"GG":{"value":4},"GI":{"value":4},"CH":{"value":4},"GP":{"value":4},"GR":{"value":4},"GU":{"value":1},"CZ":{"value":4},"PL":{"value":4},"LI":{"value":4}};}
function AYT(){return {"PR":{"value":1},"HK":{"value":1},"PT":{"value":1},"HN":{"value":1},"PY":{"value":1},"HR":{"value":2},"YE":{"value":1},"HU":{"value":2},"QA":{"value":7},"ID":{"value":1},"IE":{"value":2},"AD":{"value":2},"IL":{"value":1},"AE":{"value":7},"AF":{"value":7},"IN":{"value":1},"AG":{"value":1},"ZA":{"value":1},"AI":{"value":2},"IQ":{"value":7},"IR":{"value":7},"IS":{"value":2},"AL":{"value":2},"IT":{"value":2},"AM":{"value":2},"AN":{"value":2},"001":{"value":2},"AR":{"value":1},"AS":{"value"
:1},"AT":{"value":2},"RE":{"value":2},"AU":{"value":1},"AX":{"value":2},"AZ":{"value":2},"RO":{"value":2},"ZW":{"value":1},"BA":{"value":2},"RS":{"value":2},"BD":{"value":1},"BE":{"value":2},"JM":{"value":1},"RU":{"value":2},"BG":{"value":2},"JO":{"value":7},"BH":{"value":7},"JP":{"value":1},"BM":{"value":2},"BN":{"value":2},"SA":{"value":1},"BR":{"value":1},"BS":{"value":1},"SD":{"value":7},"BT":{"value":1},"SE":{"value":2},"SG":{"value":1},"BW":{"value":1},"SI":{"value":2},"BY":{"value":2},"BZ":{"value":1}
,"SK":{"value":2},"KE":{"value":1},"SM":{"value":2},"KG":{"value":2},"KH":{"value":1},"CA":{"value":1},"SV":{"value":1},"CH":{"value":2},"SY":{"value":7},"KR":{"value":1},"CL":{"value":2},"CM":{"value":2},"CN":{"value":1},"CO":{"value":1},"KW":{"value":7},"CR":{"value":2},"KZ":{"value":2},"TH":{"value":1},"LA":{"value":1},"CY":{"value":2},"LB":{"value":2},"TJ":{"value":2},"CZ":{"value":2},"TM":{"value":2},"LI":{"value":2},"TR":{"value":2},"LK":{"value":2},"TT":{"value":1},"DE":{"value":2},"TW":{"value":1},"DJ":
{"value":7},"DK":{"value":2},"LT":{"value":2},"DM":{"value":1},"LU":{"value":2},"LV":{"value":2},"DO":{"value":1},"UA":{"value":2},"LY":{"value":7},"DZ":{"value":7},"MC":{"value":2},"MD":{"value":2},"ME":{"value":2},"UM":{"value":1},"MH":{"value":1},"EC":{"value":2},"MK":{"value":2},"US":{"value":1},"EE":{"value":2},"MM":{"value":1},"MN":{"value":2},"EG":{"value":7},"MO":{"value":1},"MQ":{"value":2},"UY":{"value":2},"UZ":{"value":2},"MT":{"value":1},"MV":{"value":6},"MX":{"value":1},"VA":{"value":2},"MY":{"value"
:2},"MZ":{"value":1},"ES":{"value":2},"ET":{"value":1},"VE":{"value":1},"GB-alt-variant":{"value":1},"VI":{"value":1},"VN":{"value":2},"NI":{"value":1},"NL":{"value":2},"NO":{"value":2},"NP":{"value":1},"FI":{"value":2},"FJ":{"value":2},"FO":{"value":2},"FR":{"value":2},"NZ":{"value":2},"GB":{"value":2},"WS":{"value":1},"GE":{"value":2},"OM":{"value":7},"GF":{"value":2},"GP":{"value":2},"GR":{"value":2},"GT":{"value":1},"GU":{"value":1},"PA":{"value":1},"XK":{"value":2},"PE":{"value":1},"PH":{"value":1},"PK":
{"value":1},"PL":{"value":2}};}
function AI$(){C.call(this);}
function AEd(b){var result = [];for (var key in b) {result.push(key);}return result;}
function AAH(b){var c,d,e,f;c=b.length;d=H(BC,c);e=d.data;f=0;while(f<c){e[f]=(b[f]!==null?$rt_str(b[f]):null);f=f+1|0;}return d;}
function Og(){var a=this;FH.call(a);a.dB=0;a.b5=null;a.k$=null;}
function ADZ(b){var c,d;if(b>=0)return A3O(b,0);c=new BB;d=new R;T(d);Bb(c,S(Bd(E(d,B(268)),b)));J(c);}
function AKp(b,c,d){return A$y(0,b.data.length,b,c,c+d|0,0,0);}
function MA(b){return AKp(b,0,b.data.length);}
function WK(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=new R;T(i);Bb(h,S(Bd(E(Bd(E(i,B(269)),g),B(253)),f)));J(h);}if(BT(a)<d){i=new Gg;Z(i);J(i);}if(d<0){i=new BD;h=new R;T(h);Bb(i,S(E(Bd(E(h,B(254)),d),B(255))));J(i);}g=a.L+a.dB|0;j=0;while(j<d){k=c+1|0;b=a.b5.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.L=a.L+d|0;return a;}}b=b.data;h=new BD;i=new R;T(i);Bb(h,S(E(Bd(E(Bd(E(i,B(256)),c),B(250)),b.length),B(34))));J(h);}
function AEV(a,b){return WK(a,b,0,b.data.length);}
function ZJ(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.lD){e=new EO;Z(e);J(e);}if(BT(a)<d){e=new GW;Z(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BD;i=new R;T(i);Bb(e,S(Bd(E(Bd(E(i,B(270)),h),B(253)),g)));J(e);}if(d<0){e=new BD;i=new R;T(i);Bb(e,S(E(Bd(E(i,B(254)),d),B(255))));J(e);}h=a.L+a.dB|0;j=0;while(j<d){b=a.b5.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.L=a.L+d|0;return a;}}b=b.data;i=new BD;e=new R;T(e);Bb(i,S(E(Bd(E(Bd(E(e,B(256)),c),B(250)),b.length),B(34))));J(i);}
function Xc(a,b){return ZJ(a,b,0,b.data.length);}
function A0u(a){return 1;}
function ATk(a){return a.b5;}
function A6n(a,b){a.k$=b;return a;}
function AQd(a){DC(a);return a;}
function A68(a){Ec(a);return a;}
function A17(a,b){H0(a,b);return a;}
function AXb(a,b){Dz(a,b);return a;}
function Ns(){Cq.call(this);}
function Ot(){Nf.call(this);}
function Kz(a){var b,c;if(a.L<a.ce){b=a.L;a.L=b+1|0;return TU(a,b);}c=new Gg;Z(c);J(c);}
function Ch(a,b){var c,d;if(AI8(a)){c=new EO;Z(c);J(c);}if(a.L<a.ce){d=a.L;a.L=d+1|0;AEQ(a,d,b);return a;}c=new GW;Z(c);J(c);}
function AI8(a){return a.yh;}
function Zv(){var a=this;Ot.call(a);a.yh=0;a.zj=0;a.x5=null;}
function TU(a,b){return a.x5.data[b+a.zj|0];}
function AEQ(a,b,c){a.x5.data[b+a.zj|0]=c;}
function A5p(a){return a.yh;}
function ID(){var a=this;C.call(a);a.Hp=null;a.Jg=0.0;a.IT=0.0;}
function Iw(a,b,c){var d=new ID();Za(d,a,b,c);return d;}
function Za(a,b,c,d){a.Hp=b;a.Jg=c;a.IT=d;}
function AGG(){ID.call(this);}
function A_m(a,b,c){var d=new AGG();AZY(d,a,b,c);return d;}
function AZY(a,b,c,d){Za(a,b,1.0,1.0);}
function AOA(){ID.call(this);}
function A$5(a,b,c){var d=new AOA();AU9(d,a,b,c);return d;}
function AU9(a,b,c,d){Za(a,b,1.0,1.0);}
function ABm(){V.call(this);}
function AWU(a,b){var c=new ABm();AS1(c,a,b);return c;}
function AS1(a,b,c){DR(a,b,c,Bek);}
function APq(a,b,c){L();return Bcv.b;}
function AEC(){V.call(this);}
function A9n(a){var b=new AEC();ATY(b,a);return b;}
function ATY(a,b){Ep(a,2,Bey);a.bk=3;EA(a,1);}
function ARM(a,b){return b==1?0:b?3:2;}
function A2e(a,b,c,d,e,f){var g,h;g=d+1|0;if(D5(b,c,g,e)<4&&CR(b,c,g,e).pR()){if(!W(f,4)){L();By(b,c,d,e,Bcq.b);}}else if(D5(b,c,g,e)>=9){c=(c+W(f,3)|0)-1|0;d=(d+W(f,5)|0)-3|0;e=(e+W(f,3)|0)-1|0;h=O(b,c,d,e);L();if(h==Bcq.b){h=d+1|0;if(D5(b,c,h,e)>=4&&!CR(b,c,h,e).pR())By(b,c,d,e,Bcp.b);}}}
function A65(a,b,c){L();return Bcq.gq(0,c);}
function AHM(){V.call(this);}
function A_e(a,b){var c=new AHM();AZT(c,a,b);return c;}
function AZT(a,b,c){DR(a,3,2,Bey);}
function B7(){C.call(this);}
var Bdh=null;var Bey=null;var Bel=null;var Bek=null;var Bez=null;var Bdi=null;var Bdj=null;var BeA=null;var BeB=null;var BeC=null;var Ben=null;var BeD=null;var BeE=null;var BeF=null;var Bem=null;var BeG=null;function A6G(a){return 0;}
function ACJ(a){return !a.mc()&&!a.iw()?1:0;}
function AXF(a){return 1;}
function A3M(a){return 1;}
function AUv(a){return 1;}
function AOn(){Bdh=new Nb;Bey=new B7;Bel=new B7;Bek=new B7;Bez=new B7;Bdi=new L8;Bdj=new L8;BeA=new B7;BeB=new Oh;BeC=new B7;Ben=new B7;BeD=new Nb;BeE=new B7;BeF=new Oh;Bem=new B7;BeG=new B7;}
function Gq(){V.call(this);}
function A1o(a,b){var c=new Gq();Ma(c,a,b);return c;}
function Ma(a,b,c){Ep(a,b,BeB);a.bk=c;EA(a,1);D3(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function A1T(a,b,c,d,e){return a.rR(O(b,c,d-1|0,e));}
function AQb(a,b){L();return b!=Bcp.b&&b!=Bcq.b&&b!=Beg.b?0:1;}
function A1d(a,b,c,d,e,f){Lc(a,b,c,d,e);}
function ATt(a,b,c,d,e,f){Lc(a,b,c,d,e);}
function Lc(a,b,c,d,e){if(!a.s8(b,c,d,e)){Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);}}
function ATD(a,b,c,d,e){a:{b:{if(D5(b,c,d,e)<8){if(D5(b,c,d,e)<4)break b;if(!Mf(b,c,d,e))break b;}if(a.rR(O(b,c,d-1|0,e))){c=1;break a;}}c=0;}return c;}
function A5j(a,b,c,d){return null;}
function ARC(a){return 0;}
function AUk(a){return 0;}
function AT3(a){return 1;}
function AGy(){Gq.call(this);}
function A$k(a,b){var c=new AGy();A0v(c,a,b);return c;}
function A0v(a,b,c){Ma(a,6,15);D3(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function ASb(a,b,c,d,e,f){var g;Lc(a,b,c,d,e);if(D5(b,c,d+1|0,e)>=9&&!W(f,5)){g=Cr(b,c,d,e);if(g<15){DL(b,c,d,e,g+1|0);return;}Ig(b,c,d,e,0);if(!Mb(b,c,d,e))Ig(b,c,d,e,a.b);}}
function Jc(){var a=this;V.call(a);a.v3=0;a.mF=0;}
function BeH(a,b){var c=new Jc();UI(c,a,b);return c;}
function UI(a,b,c){Ep(a,b,c);a.bk=14;if(c===Bdj)a.bk=30;Bd5.data[b]=1;a.mF=b;a.v3=b+1|0;D3(a,0.009999999776482582,(-0.09000000357627869),0.009999999776482582,1.0099999904632568,0.9099999666213989,1.0099999904632568);EA(a,1);Di(a,2.0);}
function A8b(a,b){return a.cm===Bdj?a.bk:b==1?a.bk:!b?a.bk:a.bk+32|0;}
function A3p(a){return 0;}
function A4L(a,b,c,d,e){Ge(b,c,d,e,a.mF);}
function Ek(a,b,c,d,e){var f,g,h,i,j,k,l;if(!ACJ(CR(b,c,d,e)))return 0;a:{if(a.cm===Bdi){f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(true){if(f>g)break a;j=h;while(j<=d){k=i;while(k<=e){l=O(b,f,j,k);L();if(l==BcK.b)return 0;k=k+1|0;}j=j+1|0;}f=f+1|0;}}}return 1;}
function ASk(a,b,c,d,e){return a.cm!==Bdj?DT(b,c,d,e):100.0;}
function AAx(a,b,c,d,e,f){var g;if(c>=0&&d>=0&&e>=0&&c<b.o&&e<b.t){a:{g=O(b,c,d,e);if(g!=a.mF&&g!=a.v3){b:{if(f==1){if(!O(b,c-1|0,d,e))break b;if(!O(b,c+1|0,d,e))break b;if(!O(b,c,d,e-1|0))break b;if(!O(b,c,d,e+1|0))break b;}c=Kb(a,b,c,d,e,f);break a;}c=1;}else c=0;}return c;}return 0;}
function AZF(a){return 0;}
function A5C(a,b,c,d){return null;}
function A5I(a){return 0;}
function AYF(a){return a.cm!==Bdj?5:25;}
function A4q(a,b){return 0;}
function ATX(a){return 0;}
function AUj(a,b,c,d,e,f){var g,h,i,j,k,l;if(a.cm===Bdj){g=d+1|0;if(CR(b,c,g,e)===Bdh&&!BN(b,c,g,e)&&!W(f,100))BY(b,B(271),c+N(f),d+a.cE,e+N(f),0.0,0.0,0.0);}a:{if(a.cm===Bdi){b:{g=c+1|0;if(PK(b,g,d,e)){h=0;i=g+0.125;j=d;k=e;while(true){if(h>=4)break b;BY(b,B(272),i,j,k+N(f),0.0,0.0,0.0);h=h+1|0;}}}c:{if(PK(b,c-1|0,d,e)){g=0;i=c-0.125;j=d;k=e;while(true){if(g>=4)break c;BY(b,B(272),i,j,k+N(f),0.0,0.0,0.0);g=g+1|0;}}}d:{g=e+1|0;if(PK(b,c,d,g)){h=0;j=c;k=d;l=g+0.125;while(true){if(h>=4)break d;BY(b,B(272),j+N(f),
k,l,0.0,0.0,0.0);h=h+1|0;}}}if(PK(b,c,d,e-1|0)){g=0;i=c;k=d;l=e-0.125;while(true){if(g>=4)break a;BY(b,B(272),i+N(f),k,l,0.0,0.0,0.0);g=g+1|0;}}}}}
function PK(b,c,d,e){var f,g;f=CR(b,c,d,e);g=CR(b,c,d-1|0,e);return !f.ow()&&!f.mc()?(!g.ow()&&!g.mc()?0:1):0;}
function ANw(){var a=this;Jc.call(a);a.nw=0;a.md=0;a.qf=null;a.ed=null;}
function A6R(a,b){var c=new ANw();AQQ(c,a,b);return c;}
function AQQ(a,b,c){var d,e;UI(a,b,c);a.qf=new Dd;d=$rt_createIntArray(4);e=d.data;e[0]=0;e[1]=1;e[2]=2;e[3]=3;a.ed=d;a.bk=14;if(c===Bdj)a.bk=30;L();Bd5.data[b]=1;a.md=b;a.nw=b+1|0;D3(a,0.009999999776482582,(-0.09000000357627869),0.009999999776482582,1.0099999904632568,0.9099999666213989,1.0099999904632568);EA(a,1);}
function ASv(a,b,c,d,e){Ge(b,c,d,e,a.md);}
function AR_(a,b,c,d,e,f){AKY(a,b,c,d,e,0);}
function AKY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=c-1|0;h=!Ek(a,b,g,d,e)&&!Ek(a,b,c+1|0,d,e)&&!Ek(a,b,c,d,e-1|0)&&!Ek(a,b,c,d,e+1|0)?0:1;if(h){f=d-1|0;if(CR(b,c,f,e)===a.cm&&AMd(b,c,f,e,a.md,a.nw)==1){i=SN(b,c,d,e,a.md,a.nw);if(i==(-9999))return 0;if(i<0)return 0;j=i%1024|0;c=i>>10;By(b,j,(c>>10)%1024|0,c%1024|0,0);return 0;}}k=Jr(a,b,c,d,e,c,d-1|0,e);l=0;m=c+1|0;n=e-1|0;i=e+1|0;while(l<4){j=W(a.qf,4-l|0)+l|0;o=a.ed.data[l];a.ed.data[l]=a.ed.data[j];a.ed.data[j]=o;if(!a.ed.data[l]&&!k)k=Jr(a,b,c,d,e,g,d,e);if
(a.ed.data[l]==1&&!k)k=Jr(a,b,c,d,e,m,d,e);if(a.ed.data[l]==2&&!k)k=Jr(a,b,c,d,e,c,d,n);if(a.ed.data[l]==3&&!k)k=Jr(a,b,c,d,e,c,d,i);l=l+1|0;}if(!k&&h){a:{if(!W(a.qf,3)){if(W(a.qf,3)){if(a.cm!==Bdj)By(b,c,d,e,0);else{L();By(b,c,d,e,Bct.b);}}else{f=0;j=0;while(true){if(j>=4)break a;k=W(a.qf,4-j|0)+j|0;o=a.ed.data[j];a.ed.data[j]=a.ed.data[k];a.ed.data[k]=o;if(!a.ed.data[j]&&!f)f=KC(a,b,c,d,e,g,d,e);if(a.ed.data[j]==1&&!f)f=KC(a,b,c,d,e,m,d,e);if(a.ed.data[j]==2&&!f)f=KC(a,b,c,d,e,c,d,n);if(a.ed.data[j]==3&&!f)f
=KC(a,b,c,d,e,c,d,i);j=j+1|0;}}}}return 0;}if(a.cm===Bdi)k=k|Mt(b,g,d,e)|Mt(b,m,d,e)|Mt(b,c,d,n)|Mt(b,c,d,i);if(a.cm===Bdj)k=k|M7(b,g,d,e)|M7(b,m,d,e)|M7(b,c,d,n)|M7(b,c,d,i);if(k)Ge(b,c,d,e,a.md);else Ig(b,c,d,e,a.nw);return k;}
function KC(a,b,c,d,e,f,g,h){if(!Ek(a,b,f,g,h))return 0;By(b,f,g,h,a.b);Ge(b,f,g,h,a.b);return 1;}
function Jr(a,b,c,d,e,f,g,h){var i,j;if(!Ek(a,b,f,g,h))return 0;c=SN(b,c,d,e,a.md,a.nw);if(c!=(-9999)){if(c<0)return 0;e=c%1024|0;c=c>>10;i=c%1024|0;j=(c>>10)%1024|0;d=Bw(j,g);if(!(d<=0&&Ek(a,b,f,g-1|0,h))&&d<=0&&e&&e!=(b.o-1|0)&&i&&i!=(b.t-1|0))return 0;By(b,e,j,i,0);}By(b,f,g,h,a.b);Ge(b,f,g,h,a.b);return 1;}
function AY9(a,b,c,d,e,f){var g;if(c>=0&&d>=0&&e>=0&&c<b.o&&e<b.t){a:{g=O(b,c,d,e);if(g!=a.md&&g!=a.nw){b:{if(f==1){if(!O(b,c-1|0,d,e))break b;if(!O(b,c+1|0,d,e))break b;if(!O(b,c,d,e-1|0))break b;if(!O(b,c,d,e+1|0))break b;}c=AAx(a,b,c,d,e,f);break a;}c=1;}else c=0;}return c;}return 0;}
function A8r(a){return 0;}
function APp(a,b,c,d){return null;}
function A3w(a){return 0;}
function AUV(a,b,c,d,e,f){return;}
function A1L(a){return a.cm!==Bdj?5:25;}
function A7e(a,b){return 0;}
function AQ7(a){return a.cm!==Bdi?0:1;}
function Mt(b,c,d,e){var f;f=O(b,c,d,e);L();if(f==Bd9.b){By(b,c,d,e,0);return 1;}if(O(b,c,d,e)!=Bck.b&&O(b,c,d,e)!=Bd8.b)return 0;By(b,c,d,e,Bct.b);return 1;}
function M7(b,c,d,e){L();if(!ZD(Bd9,O(b,c,d,e)))return 0;ABc(Bd9,b,c,d,e);return 1;}
function ANP(){Jc.call(this);}
function AX4(a,b){var c=new ANP();ARp(c,a,b);return c;}
function ARp(a,b,c){UI(a,b,c);a.mF=b-1|0;a.v3=b;EA(a,0);}
function A3v(a,b,c,d,e,f){return;}
function ASi(a,b,c,d,e,f){var g,h;g=0;if(Ek(a,b,c,d-1|0,e))g=1;if(!g&&Ek(a,b,c-1|0,d,e))g=1;if(!g&&Ek(a,b,c+1|0,d,e))g=1;if(!g&&Ek(a,b,c,d,e-1|0))g=1;if(!g&&Ek(a,b,c,d,e+1|0))g=1;a:{if(f){L();h=Bcn.data[f].cm;if(!(a.cm===Bdi&&h===Bdj)){if(h!==Bdi)break a;if(a.cm!==Bdj)break a;}By(b,c,d,e,Bct.b);return;}}L();if(ZD(Bd9,f))g=1;if(g){Ig(b,c,d,e,a.mF);Ge(b,c,d,e,a.mF);}}
function Pj(){V.call(this);}
function A93(a,b){var c=new Pj();ANV(c,a,b);return c;}
function ANV(a,b,c){DR(a,b,c,BeE);}
function AXC(a,b,c,d,e){Zi(a,b,c,d,e);}
function ARv(a,b,c,d,e,f){Zi(a,b,c,d,e);}
function Zi(a,b,c,d,e){var f,g,h,i;f=d;while(true){g=O(b,c,f-1|0,e);if(!g)h=1;else{L();if(g==Bd9.b)h=1;else{i=Bcn.data[g].cm;h=i===Bdi?1:i!==Bdj?0:1;}}if(!h)break;if(f<0)break;f=f+(-1)|0;g=O(b,c,f,e);L();if(g==Bd9.b)H1(b,c,f,e,0);}if(f<0)Ig(b,c,d,e,0);if(f!=d){g=O(b,c,f,e);if(g>0){L();if(Bcn.data[g].cm!==Bdh)Ig(b,c,f,e,0);}ALj(b,c,d,e,c,f,e);}}
function ADP(){Pj.call(this);}
function A$F(a,b){var c=new ADP();A7W(c,a,b);return c;}
function A7W(a,b,c){ANV(a,13,19);}
function AYL(a,b,c){if(W(c,10))b=a.b;else{B3();b=BeI.c3;}return b;}
function ACz(){V.call(this);}
function TQ(a,b){var c=new ACz();AXM(c,a,b);return c;}
function AXM(a,b,c){DR(a,b,c,Bek);}
function AX6(a,b,c){b=a.b;L();if(b==Bc1.b){B3();b=BeJ.c3;}else if(a.b!=Bec.b)b=a.b;else{B3();b=BeK.c3;}return b;}
function AOZ(a,b){return 1;}
function AGY(){V.call(this);}
function A9F(a){var b=new AGY();AYE(b,a);return b;}
function AYE(a,b){Ep(a,17,Bel);a.bk=20;}
function A3R(a,b){return 1;}
function APO(a,b,c){L();return Bcy.b;}
function A5W(a,b){return b==1?21:b?20:21;}
function L5(){V.call(this);this.A3=0;}
function AR4(a){return 0;}
function A0q(a,b,c,d,e,f){var g;g=O(b,c,d,e);return !a.A3&&g==a.b?0:Kb(a,b,c,d,e,f);}
function AN7(){L5.call(this);}
function A9t(a,b){var c=new AN7();AWu(c,a,b);return c;}
function AWu(a,b,c){DR(a,18,52,BeA);a.A3=1;EA(a,1);}
function A1V(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a:{g=d-1|0;if(!CR(b,c,g,e).iw()){h=c-2|0;i=c+2|0;j=e-2|0;k=e+2|0;b:while(true){if(h>i){Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);break a;}l=g;while(l<=d){m=j;while(m<=k){n=O(b,h,l,m);L();if(n==Bcy.b)break b;m=m+1|0;}l=l+1|0;}h=h+1|0;}return;}}}
function AYZ(a,b){return W(b,10)?0:1;}
function ASx(a,b,c){L();return BcD.b;}
function AOj(){V.call(this);}
function A$I(a){var b=new AOj();A7$(b,a);return b;}
function A7$(a,b){Ep(a,19,BeC);a.bk=48;}
function A8q(a,b,c,d,e){var f,g,h,i,j,k;f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;while(k<=e){if(ACF(b,f,j,k))H1(b,f,j,k,0);k=k+1|0;}j=j+1|0;}f=f+1|0;}}
function ARo(a,b,c,d,e){var f,g,h,i,j,k,l;f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;while(l<=c){Ls(b,f,k,l,O(b,f,k,l));l=l+1|0;}k=k+1|0;}f=f+1|0;}}
function Pa(){V.call(this);this.z_=0;}
function AYI(a){return 0;}
function AZL(a,b,c,d,e,f){var g;g=O(b,c,d,e);return !a.z_&&g==a.b?0:Kb(a,b,c,d,e,f);}
function AKa(){Pa.call(this);}
function A8_(a,b,c,d){var e=new AKa();A4Q(e,a,b,c,d);return e;}
function A4Q(a,b,c,d,e){DR(a,20,49,d);a.z_=0;}
function AZJ(a,b){return 0;}
function AA4(){Gq.call(this);}
function A1G(a,b){var c=new AA4();AO5(c,a,b);return c;}
function AO5(a,b,c){Ma(a,b,c);D3(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AQv(a,b){L();return Bd2.data[b];}
function A3j(a,b,c,d,e){if(D5(b,c,d,e)<=13){c=O(b,c,d-1|0,e);L();if(Bd2.data[c])return 1;}return 0;}
function AAB(){V.call(this);}
function AMk(a,b){var c=new AAB();A3E(c,a,b);return c;}
function A3E(a,b,c){Ep(a,b,Bez);a.bk=c;}
function A5f(a,b){return b==1?a.bk-16|0:b?a.bk:a.bk+16|0;}
function AKC(){V.call(this);this.uo=0;}
function AY3(a,b){var c=new AKC();A8c(c,a,b);return c;}
function A8c(a,b,c){DR(a,b,6,Bek);a.uo=c;if(!c)D3(a,0.0,0.0,0.0,1.0,0.5,1.0);G_(a,255);}
function ARx(a,b){return b>1?5:6;}
function APA(a){return a.uo;}
function A5G(a,b,c,d,e,f){L();}
function AYS(a,b,c,d,e){var f;L();f=d-1|0;if(O(b,c,f,e)==Bcs.b){By(b,c,d,e,0);By(b,c,f,e,Bcr.b);}}
function APF(a,b,c){L();return Bcs.b;}
function A0S(a){return a.uo;}
function A6Q(a,b,c,d,e,f){return f==1?1:!Kb(a,b,c,d,e,f)?0:!f?1:O(b,c,d,e)==a.b?0:1;}
function ANJ(){V.call(this);}
function A9J(a,b){var c=new ANJ();APE(c,a,b);return c;}
function APE(a,b,c){DR(a,46,8,BeG);}
function AQK(a,b){return !b?a.bk+2|0:b!=1?a.bk:a.bk+1|0;}
function A4y(a,b){return 0;}
function A7Z(a,b,c,d,e){var f;f=ARn(b,c+0.5,d+0.5,e+0.5);f.gm=W(b.bo,f.gm/4|0)+(f.gm/8|0)|0;De(b,f);}
function A7A(a,b,c,d,e,f){De(b,ARn(b,c+0.5,d+0.5,e+0.5));}
function AJJ(){V.call(this);}
function A_j(a,b){var c=new AJJ();ASK(c,a,b);return c;}
function ASK(a,b,c){DR(a,47,35,Bel);}
function ARN(a,b){return b>1?a.bk:4;}
function ARW(a,b){return 0;}
function AOJ(){V.call(this);}
function A$i(a,b){var c=new AOJ();A1Q(c,a,b);return c;}
function A1Q(a,b,c){DR(a,50,80,BeF);EA(a,1);}
function AVe(a,b,c,d){return null;}
function A2t(a){return 0;}
function AXH(a){return 0;}
function A79(a){return 2;}
function AIq(a,b,c,d,e){return BN(b,c-1|0,d,e)?1:BN(b,c+1|0,d,e)?1:BN(b,c,d,e-1|0)?1:BN(b,c,d,e+1|0)?1:BN(b,c,d-1|0,e);}
function APD(a,b,c,d,e,f){var g;g=Cr(b,c,d,e);if(f==1&&BN(b,c,d-1|0,e))g=5;if(f==2&&BN(b,c,d,e+1|0))g=4;if(f==3&&BN(b,c,d,e-1|0))g=3;if(f==4&&BN(b,c+1|0,d,e))g=2;if(f==5&&BN(b,c-1|0,d,e))g=1;DL(b,c,d,e,g);}
function AWk(a,b,c,d,e,f){if(!Cr(b,c,d,e))AJ0(a,b,c,d,e);}
function AJ0(a,b,c,d,e){if(BN(b,c-1|0,d,e))DL(b,c,d,e,1);else if(BN(b,c+1|0,d,e))DL(b,c,d,e,2);else if(BN(b,c,d,e-1|0))DL(b,c,d,e,3);else if(BN(b,c,d,e+1|0))DL(b,c,d,e,4);else if(BN(b,c,d-1|0,e))DL(b,c,d,e,5);RF(a,b,c,d,e);}
function ASC(a,b,c,d,e,f){var g,h;if(RF(a,b,c,d,e)){g=Cr(b,c,d,e);h=0;if(!BN(b,c-1|0,d,e)&&g==1)h=1;if(!BN(b,c+1|0,d,e)&&g==2)h=1;if(!BN(b,c,d,e-1|0)&&g==3)h=1;if(!BN(b,c,d,e+1|0)&&g==4)h=1;if(!BN(b,c,d-1|0,e)&&g==5)h=1;if(h){Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);}}}
function RF(a,b,c,d,e){if(AIq(a,b,c,d,e))return 1;Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);return 0;}
function AUy(a,b,c,d,e,f,g){var h;h=Cr(b,c,d,e);if(h==1)D3(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)D3(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)D3(a,0.3499999940395355,0.20000000298023224,0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)D3(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else D3(a,
0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);return ALk(a,b,c,d,e,f,g);}
function ATd(a,b,c,d,e,f){var g,h,i,j,k,l;g=Cr(b,c,d,e);h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;BY(b,B(273),k,l,j,0.0,0.0,0.0);BY(b,B(274),k,l,j,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l=i+0.2199999988079071;BY(b,B(273),k,l,j,0.0,0.0,0.0);BY(b,B(274),k,l,j,0.0,0.0,0.0);}else if(g==3){k=i+0.2199999988079071;l=j-0.27000001072883606;BY(b,B(273),h,k,l,0.0,0.0,0.0);BY(b,B(274),h,k,l,0.0,0.0,0.0);}else if(g!=4){BY(b,B(273),h,i,j,0.0,0.0,0.0);BY(b,B(274),
h,i,j,0.0,0.0,0.0);}else{k=i+0.2199999988079071;l=j+0.27000001072883606;BY(b,B(273),h,k,l,0.0,0.0,0.0);BY(b,B(274),h,k,l,0.0,0.0,0.0);}}
function AOQ(){var a=this;V.call(a);a.pN=null;a.xl=null;}
function A$o(a,b){var c=new AOQ();A58(c,a,b);return c;}
function A58(a,b,c){DR(a,51,31,BeD);a.pN=$rt_createIntArray(256);a.xl=$rt_createIntArray(256);Hf(a,Bcx.b,5,20);Hf(a,Bcy.b,5,5);Hf(a,Bcz.b,30,60);Hf(a,Bc6.b,30,20);Hf(a,Bc7.b,15,100);b=0;while(b<16){Hf(a,BcL.b+b|0,30,60);b=b+1|0;}EA(a,1);}
function Hf(a,b,c,d){a.pN.data[b]=c;a.xl.data[b]=d;}
function AWx(a,b,c,d){return null;}
function ATm(a){return 0;}
function AWA(a){return 0;}
function AVP(a){return 3;}
function A8s(a,b){return 0;}
function A2k(a){return 20;}
function A29(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=Cr(b,c,d,e);h=Bw(g,15);if(h<0){DL(b,c,d,e,g+1|0);Ge(b,c,d,e,a.b);}a:{if(K9(a,b,c,d,e)){i=d-1|0;if(!C4(a,b,c,i,e)&&!h&&!W(f,4))By(b,c,d,e,0);else if(!(g%5|0)&&g>5){j=c+1|0;HZ(a,b,j,d,e,300,f);h=c-1|0;HZ(a,b,h,d,e,300,f);HZ(a,b,c,i,e,100,f);k=d+1|0;HZ(a,b,c,k,e,200,f);l=e-1|0;HZ(a,b,c,d,l,300,f);g=e+1|0;HZ(a,b,c,d,g,300,f);m=d+4|0;while(true){if(h>j)break a;n=l;while(n<=g){o=i;while(o<=m){if(!(h==c&&o==d&&n==e)){p=100;if(o>k)p=100+((o-k|0)*100|0)|0;q=O(b,h,
o,n)?0:Hm(a,b,h,o,n+1|0,Hm(a,b,h,o,n-1|0,Hm(a,b,h,o+1|0,n,Hm(a,b,h,o-1|0,n,Hm(a,b,h-1|0,o,n,Hm(a,b,h+1|0,o,n,0))))));if(q>0&&W(f,p)<=q)By(b,h,o,n,a.b);}o=o+1|0;}n=n+1|0;}h=h+1|0;}}}else if(!(BN(b,c,d-1|0,e)&&g<=3))By(b,c,d,e,0);}}
function HZ(a,b,c,d,e,f,g){var h,i;h=a.xl.data[O(b,c,d,e)];if(W(g,f)<h){f=O(b,c,d,e);L();i=f!=Bc7.b?0:1;if(W(g,2))By(b,c,d,e,0);else By(b,c,d,e,a.b);if(i)Bc7.rE(b,c,d,e,0);}}
function K9(a,b,c,d,e){return C4(a,b,c+1|0,d,e)?1:C4(a,b,c-1|0,d,e)?1:C4(a,b,c,d-1|0,e)?1:C4(a,b,c,d+1|0,e)?1:C4(a,b,c,d,e-1|0)?1:C4(a,b,c,d,e+1|0);}
function A8l(a){return 0;}
function C4(a,b,c,d,e){return a.pN.data[O(b,c,d,e)]<=0?0:1;}
function Hm(a,b,c,d,e,f){var g;g=a.pN.data[O(b,c,d,e)];if(g>f)f=g;return f;}
function A06(a,b,c,d,e){return !BN(b,c,d-1|0,e)&&!K9(a,b,c,d,e)?0:1;}
function AZD(a,b,c,d,e,f){if(!BN(b,c,d-1|0,e)&&!K9(a,b,c,d,e))By(b,c,d,e,0);}
function A31(a,b,c,d,e){if(!BN(b,c,d-1|0,e)&&!K9(a,b,c,d,e))By(b,c,d,e,0);else Ge(b,c,d,e,a.b);}
function ZD(a,b){return a.pN.data[b]<=0?0:1;}
function ABc(a,b,c,d,e){var f;f=IB(b,c,d+1|0,e);if(!f)f=IB(b,c-1|0,d,e);if(!f)f=IB(b,c+1|0,d,e);if(!f)f=IB(b,c,d,e-1|0);if(!f)f=IB(b,c,d,e+1|0);if(!f)f=IB(b,c,d-1|0,e);if(!f){L();By(b,c,d,e,Bd9.b);}}
function ASB(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{b:{g=d-1|0;if(!BN(b,c,g,e)){L();if(!C4(Bd9,b,c,g,e))break b;}g=0;h=c;i=d;j=e;while(true){if(g>=3)break a;BY(b,B(275),h+N(f),i+N(f)*0.5+0.5,j+N(f),0.0,0.0,0.0);g=g+1|0;}}c:{if(C4(Bd9,b,c-1|0,d,e)){g=0;h=c;k=d;l=e;while(true){if(g>=2)break c;BY(b,B(275),h+N(f)*0.10000000149011612,k+N(f),l+N(f),0.0,0.0,0.0);g=g+1|0;}}}d:{m=Bd9;n=c+1|0;if(C4(m,b,n,d,e)){g=0;h=n;k=d;l=e;while(true){if(g>=2)break d;BY(b,B(275),h-N(f)*0.10000000149011612,k+N(f),l+N(f),0.0,0.0,0.0);g
=g+1|0;}}}e:{if(C4(Bd9,b,c,d,e-1|0)){g=0;h=c;o=d;l=e;while(true){if(g>=2)break e;BY(b,B(275),h+N(f),o+N(f),l+N(f)*0.10000000149011612,0.0,0.0,0.0);g=g+1|0;}}}f:{m=Bd9;g=e+1|0;if(C4(m,b,c,d,g)){n=0;j=c;k=d;l=g;while(true){if(n>=2)break f;BY(b,B(275),j+N(f),k+N(f),l-N(f)*0.10000000149011612,0.0,0.0,0.0);n=n+1|0;}}}m=Bd9;d=d+1|0;if(C4(m,b,c,d,e)){g=0;h=c;i=d;j=e;while(true){if(g>=2)break a;BY(b,B(275),h+N(f),i-N(f)*0.10000000149011612,j+N(f),0.0,0.0,0.0);g=g+1|0;}}}}
function IB(b,c,d,e){var f;f=O(b,c,d,e);L();if(f==Bd9.b)return 1;if(f)return 0;By(b,c,d,e,Bd9.b);return 1;}
function ADS(){V.call(this);this.i0=0;}
function A2M(a,b){var c=new ADS();AY2(c,a,b);return c;}
function AY2(a,b,c){L();DR(a,b,Bcn.data[c].bk,Bdi);a.i0=c;EA(a,1);}
function A1N(a,b,c,d,e){var f,g;f=c-1|0;if(!O(b,f,d,e))By(b,f,d,e,a.i0);g=c+1|0;if(!O(b,g,d,e))By(b,g,d,e,a.i0);g=e-1|0;if(!O(b,c,d,g))By(b,c,d,g,a.i0);e=e+1|0;if(!O(b,c,d,e))By(b,c,d,e,a.i0);}
function A3G(a,b,c,d,e,f){var g,h;g=c-1|0;if(!O(b,g,d,e))By(b,g,d,e,a.i0);h=c+1|0;if(!O(b,h,d,e))By(b,h,d,e,a.i0);h=e-1|0;if(!O(b,c,d,h))By(b,c,d,h,a.i0);e=e+1|0;if(!O(b,c,d,e))By(b,c,d,e,a.i0);}
function J2(){V.call(this);}
function AJe(a,b,c,d,e){KV(b,c,d,e,a.DF());}
function AVt(a,b,c,d,e){W4(b,c,d,e);}
function ADD(){J2.call(this);this.kp=null;}
function A$h(a){var b=new ADD();AX$(b,a);return b;}
function AX$(a,b){Ep(a,54,Bel);a.kp=new Dd;a.bk=26;}
function A8h(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(f==1)return a.bk-1|0;if(!f)return a.bk-1|0;g=e-1|0;h=O(b,c,d,g);i=e+1|0;j=O(b,c,d,i);k=c-1|0;l=O(b,k,d,e);m=c+1|0;n=O(b,m,d,e);if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(Bd2.data[h]&&!Bd2.data[j])k=3;if(Bd2.data[j]&&!Bd2.data[h])k=2;if(Bd2.data[l]&&!Bd2.data[n])k=5;if(Bd2.data[n]&&!Bd2.data[l])k=4;return f!=k?a.bk:a.bk+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);g=O(b,l!=a.b?m:k,d,g);if(l==a.b)m=k;m=O(b,m,d,i);if(f==3)o=(-1)-o|0;i=3;L();if(!(!Bd2.data[h]
&&!Bd2.data[g])&&!Bd2.data[j]&&!Bd2.data[m])i=3;if(!(!Bd2.data[j]&&!Bd2.data[m])&&!Bd2.data[h]&&!Bd2.data[g])i=2;return (f!=i?a.bk+32|0:a.bk+16|0)+o|0;}return a.bk;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);p=O(b,k,d,h!=a.b?i:g);if(h==a.b)i=g;m=O(b,m,d,i);if(f==4)o=(-1)-o|0;i=5;L();if(!(!Bd2.data[l]&&!Bd2.data[p])&&!Bd2.data[n]&&!Bd2.data[m])i=5;if(!(!Bd2.data[n]&&!Bd2.data[m])&&!Bd2.data[l]&&!Bd2.data[p])i=4;return (f!=i?a.bk+32|0:a.bk+16|0)+o|0;}return a.bk;}
function A5B(a,b){return b==1?a.bk-1|0:!b?a.bk-1|0:b!=3?a.bk:a.bk+1|0;}
function AXf(a,b,c,d,e){var f,g,h,i,j;f=0;g=c-1|0;if(O(b,g,d,e)==a.b)f=1;h=c+1|0;if(O(b,h,d,e)==a.b)f=f+1|0;i=e-1|0;if(O(b,c,d,i)==a.b)f=f+1|0;j=e+1|0;if(O(b,c,d,j)==a.b)f=f+1|0;return f>1?0:Ll(a,b,g,d,e)?0:Ll(a,b,h,d,e)?0:Ll(a,b,c,d,i)?0:Ll(a,b,c,d,j)?0:1;}
function Ll(a,b,c,d,e){return O(b,c,d,e)!=a.b?0:O(b,c-1|0,d,e)==a.b?1:O(b,c+1|0,d,e)==a.b?1:O(b,c,d,e-1|0)==a.b?1:O(b,c,d,e+1|0)!=a.b?0:1;}
function A4c(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=FZ(b,c,d,e);g=0;h=c;i=d;j=e;while(g<27){a:{k=AEU(f,g);if(k!==null){l=N(a.kp)*0.800000011920929+0.10000000149011612;m=N(a.kp)*0.800000011920929+0.10000000149011612;n=N(a.kp)*0.800000011920929+0.10000000149011612;o=h+l;l=i+m;m=j+n;while(true){if(k.s<=0)break a;p=W(a.kp,21)+10|0;if(p>k.s)p=k.s;k.s=k.s-p|0;q=SB(b,o,l,m,A7s(k.bX,p,k.fz));q.G=HH(a.kp)*0.05000000074505806;q.C=HH(a.kp)*0.05000000074505806+0.20000000298023224;q.H=HH(a.kp)*0.05000000074505806;De(b,
q);}}}g=g+1|0;}W4(b,c,d,e);}
function AJ5(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=FZ(b,c,d,e);h=d+1|0;if(BN(b,c,h,e))return 1;i=c-1|0;if(O(b,i,d,e)==a.b&&BN(b,i,h,e))return 1;j=c+1|0;if(O(b,j,d,e)==a.b&&BN(b,j,h,e))return 1;k=e-1|0;if(O(b,c,d,k)==a.b&&BN(b,c,h,k))return 1;l=e+1|0;if(O(b,c,d,l)==a.b&&BN(b,c,h,l))return 1;m=O(b,i,d,e)!=a.b?g:S6(B(276),
FZ(b,i,d,e),g);n=O(b,j,d,e)!=a.b?m:S6(B(276),m,FZ(b,j,d,e));m=O(b,c,d,k)!=a.b?n:S6(B(276),FZ(b,c,d,k),n);b=O(b,c,d,l)!=a.b?m:S6(B(276),m,FZ(b,c,d,l));$p=1;case 1:AHX(f,b);if(I()){break _;}return 1;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function A21(a){return AFE();}
function ANF(){V.call(this);}
function A$B(a,b){var c=new ANF();A7M(c,a,b);return c;}
function A7M(a,b,c){DR(a,55,62,BeF);}
function AZw(a,b,c,d){return null;}
function AR3(a){return 0;}
function A7c(a){return 0;}
function A3b(a){return 5;}
function AZ4(a,b){return 1;}
function APC(a){return 0;}
function AGH(){V.call(this);}
function A_s(a){var b=new AGH();A5g(b,a);return b;}
function A5g(a,b){Ep(a,58,Bel);a.bk=59;}
function AXy(a,b){if(b==1)b=a.bk-16|0;else if(!b){L();b=Bcx.cP(0);}else b=b!=2&&b!=4?a.bk:a.bk+1|0;return b;}
function ALv(a,b,c,d,e,f){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANr(f);if(I()){break _;}return 1;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function AN3(){Gq.call(this);}
function A9b(a,b){var c=new AN3();AY1(c,a,b);return c;}
function AY1(a,b,c){Ma(a,59,88);a.bk=88;EA(a,1);D3(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AZf(a,b){L();return b!=Beg.b?0:1;}
function A3s(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;Lc(a,b,c,d,e);if(D5(b,c,d+1|0,e)>=9){g=Cr(b,c,d,e);if(g<7){h=1.0;i=e-1|0;j=O(b,c,d,i);k=e+1|0;l=O(b,c,d,k);m=c-1|0;n=O(b,m,d,e);o=c+1|0;p=O(b,o,d,e);q=O(b,m,d,i);r=O(b,o,d,i);s=O(b,o,d,k);t=O(b,m,d,k);u=n!=a.b&&p!=a.b?0:1;v=j!=a.b&&l!=a.b?0:1;w=q!=a.b&&r!=a.b&&s!=a.b&&t!=a.b?0:1;n=d-1|0;while(m<=o){t=i;while(t<=k){s=O(b,m,n,t);x=0.0;L();if(s==Beg.b){x=1.0;if(Cr(b,m,n,t)>0)x=3.0;}if(!(m==c&&t==e))x=x/4.0;h=h+x;t=t+1|0;}m=m+1|0;}a:{if(!w){if(!u)break a;if
(!v)break a;}h=h/2.0;}if(!W(f,100.0/h|0))DL(b,c,d,e,g+1|0);}}}
function AQ3(a,b,c){if(c<0)c=7;return a.bk+c|0;}
function A43(a){return 6;}
function AQJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;g=0;h=c;i=d;j=e;while(g<3){if(W(b.bo,15)<=f){k=N(b.bo)*0.699999988079071+0.15000000596046448;l=N(b.bo)*0.699999988079071+0.15000000596046448;m=N(b.bo)*0.699999988079071+0.15000000596046448;n=new Go;o=h+k;l=i+l;k=j+m;p=new C9;B3();Ie(p,BeL);K2(n,b,o,l,k,p);n.i3=10;De(b,n);}g=g+1|0;}}
function A4r(a,b,c){var d;c=Dr();d=new R;T(d);Cm(c,S(Bd(E(d,B(277)),b)));if(b!=7)b=(-1);else{B3();b=BeM.c3;}return b;}
function APM(a,b){return 1;}
function ALE(){V.call(this);}
function A_u(a){var b=new ALE();AZ5(b,a);return b;}
function AZ5(a,b){Ep(a,60,Bey);a.bk=87;EA(a,1);D3(a,0.0,0.0,0.0,1.0,0.9375,1.0);G_(a,255);}
function AS5(a,b,c,d){return GM(b,c,d,b+1|0,c+1|0,d+1|0);}
function A63(a){return 0;}
function A7g(a){return 0;}
function A6i(a,b,c){b=Bw(b,1);return !b&&c>0?a.bk-1|0:b?2:a.bk;}
function A3_(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a:{if(!W(f,5)){g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;b:{while(g<=h){l=d;while(l<=i){m=j;while(m<=k){if(CR(b,g,l,m)===Bdi){k=1;break b;}m=m+1|0;}l=l+1|0;}g=g+1|0;}k=0;}if(k){DL(b,c,d,e,7);return;}n=Cr(b,c,d,e);if(n>0){DL(b,c,d,e,n-1|0);return;}h=c;while(h<=c){j=e;while(j<=e){d=O(b,h,i,j);L();if(d==Bef.b)break a;j=j+1|0;}h=h+1|0;}}}}
function AUn(a,b,c,d,e){return;}
function A8D(a,b,c,d,e,f){if(CR(b,c,d+1|0,e).iw()){L();By(b,c,d,e,Bcq.b);}}
function ASt(a,b,c){L();return Bcq.gq(0,c);}
function AM4(){J2.call(this);this.vG=0;}
function A2x(a,b){var c=new AM4();AWQ(c,a,b);return c;}
function AWQ(a,b,c){Ep(a,b,Bek);a.vG=c;a.bk=45;}
function A3P(a,b,c,d,e){AJe(a,b,c,d,e);AFn(b,c,d,e);}
function AFn(b,c,d,e){var f,g,h,i,j;f=O(b,c,d,e-1|0);g=O(b,c,d,e+1|0);h=O(b,c-1|0,d,e);i=O(b,c+1|0,d,e);j=3;L();if(Bd2.data[f]&&!Bd2.data[g])j=3;if(Bd2.data[g]&&!Bd2.data[f])j=2;if(Bd2.data[h]&&!Bd2.data[i])j=5;if(Bd2.data[i]&&!Bd2.data[h])j=4;DL(b,c,d,e,j);}
function AZv(a,b,c,d,e,f){var g;if(f==1){L();return Bct.bk;}if(!f){L();return Bct.bk;}g=Cr(b,c,d,e);if(!g){AFn(b,c,d,e);g=Cr(b,c,d,e);}return f!=g?a.bk:!a.vG?a.bk-1|0:a.bk+16|0;}
function A4b(a,b,c,d,e,f){var g,h,i,j,k,l;if(a.vG){g=Cr(b,c,d,e);h=c+0.5;i=d+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){h=h-0.5199999809265137;k=j+k;BY(b,B(273),h,i,k,0.0,0.0,0.0);BY(b,B(274),h,i,k,0.0,0.0,0.0);}else if(g==5){h=h+0.5199999809265137;k=j+k;BY(b,B(273),h,i,k,0.0,0.0,0.0);BY(b,B(274),h,i,k,0.0,0.0,0.0);}else if(g==2){h=h+k;k=j-0.5199999809265137;BY(b,B(273),h,i,k,0.0,0.0,0.0);BY(b,B(274),h,i,k,0.0,0.0,0.0);}else if(g==3){l=h+k;j=j+0.5199999809265137;BY(b,B(273),
l,i,j,0.0,0.0,0.0);BY(b,B(274),l,i,j,0.0,0.0,0.0);}}}
function AYn(a,b){if(b==1){L();b=Bct.b;}else if(!b){L();b=Bct.b;}else b=b!=3?a.bk:a.bk-1|0;return b;}
function ALM(a,b,c,d,e,f){var g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=FZ(b,c,d,e);$p=1;case 1:AMX(f,g);if(I()){break _;}return 1;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function A64(a){return ACc();}
function Bg(){var a=this;C.call(a);a.c3=0;a.gg=0;a.iU=0;a.M=0;}
var BeN=null;var Bcm=null;var BeO=null;var BeP=null;var BeQ=null;var BeR=null;var BeS=null;var BeT=null;var BeJ=null;var BeK=null;var BeU=null;var BeV=null;var BeW=null;var BeX=null;var BeY=null;var BeZ=null;var Be0=null;var Be1=null;var Be2=null;var Be3=null;var Be4=null;var Be5=null;var Be6=null;var Be7=null;var Be8=null;var Be9=null;var Be$=null;var Be_=null;var Bfa=null;var Bfb=null;var Bfc=null;var Bfd=null;var Bfe=null;var Bff=null;var Bfg=null;var Bfh=null;var Bfi=null;var Bfj=null;var Bfk=null;var Bfl
=null;var BeL=null;var BeM=null;var Bfm=null;var Bfn=null;var Bfo=null;var Bfp=null;var Bfq=null;var Bfr=null;var Bfs=null;var Bft=null;var Bfu=null;var Bfv=null;var Bfw=null;var Bfx=null;var Bfy=null;var Bfz=null;var BfA=null;var BfB=null;var BfC=null;var BfD=null;var BfE=null;var BfF=null;var BfG=null;var BeI=null;var BfH=null;var BfI=null;var BfJ=null;function B3(){B3=Bl(Bg);A0_();}
function E7(a){var b=new Bg();Ey(b,a);return b;}
function Ey(a,b){var c,d,e;B3();a.gg=64;a.iU=32;c=b+256|0;a.c3=c;if(Bcm.data[c]!==null){d=Dr();e=new R;T(e);Cm(d,S(Bd(E(e,B(278)),b)));}Bcm.data[c]=a;}
function A0l(a,b){a.M=b;return a;}
function Gi(a){return a.M;}
function A4W(a,b,c,d,e,f,g){return 0;}
function A3a(a,b){return 1.0;}
function A33(a,b,c,d){return b;}
function HC(a){return a.gg;}
function APm(a){return a.iU;}
function A3m(a,b){return;}
function AX5(a,b){return;}
function AXO(a){return 1;}
function AZp(a,b){return 0;}
function A0_(){var b,c,d,e,f,g,h,i,j,k,l,m;BeN=A91();Bcm=H(Bg,1024);b=Nz(0,2);b.M=82;BeO=b;c=MD(1,2);c.M=98;BeP=c;d=Na(2,2);d.M=114;BeQ=d;e=A82(3);e.M=5;BeR=e;ZR(4,4).M=4;f=A9O(5);f.M=21;BeS=f;g=E7(6);g.M=37;BeT=g;b=E7(7);b.M=7;BeJ=b;b=E7(8);b.M=55;BeK=b;b=E7(9);b.M=23;BeU=b;b=E7(10);b.M=39;BeV=b;h=N_(11,2);h.M=66;BeW=h;b=N_(12,0);b.M=64;BeX=b;b=Nz(13,0);b.M=80;BeY=b;b=MD(14,0);b.M=96;BeZ=b;b=Na(15,0);b.M=112;Be0=b;b=N_(16,1);b.M=65;Be1=b;b=Nz(17,1);b.M=81;Be2=b;b=MD(18,1);b.M=97;Be3=b;b=Na(19,1);b.M=113;Be4
=b;b=N_(20,3);b.M=67;Be5=b;b=Nz(21,3);b.M=83;Be6=b;b=MD(22,3);b.M=99;Be7=b;b=Na(23,3);b.M=115;Be8=b;b=E7(24);b.M=53;Be9=b;b=E7(25);b.M=71;Be$=b;i=A85(26,10);i.M=72;Be_=i;b=N_(27,0);b.M=68;Bfa=b;b=Nz(28,0);b.M=84;Bfb=b;b=MD(29,0);b.M=100;Bfc=b;b=Na(30,0);b.M=116;Bfd=b;b=E7(31);b.M=8;Bfe=b;b=E7(32);b.M=24;Bff=b;b=E7(33);b.M=40;Bfg=b;j=Ok(34,0);j.M=128;Bfh=j;b=Ok(35,1);b.M=129;Bfi=b;b=Ok(36,2);b.M=130;Bfj=b;b=Ok(37,3);b.M=131;Bfk=b;b=Ok(38,4);b.M=132;Bfl=b;k=new W$;L();AFp(k,39,Bef.b);k.M=9;BeL=k;b=E7(40);b.M=
25;BeM=b;b=ZR(41,5);b.M=41;Bfm=b;l=Dc(42,0,0,0);l.M=0;Bfn=l;b=Dc(43,0,0,1);b.M=16;Bfo=b;b=Dc(44,0,0,2);b.M=32;Bfp=b;b=Dc(45,0,0,3);b.M=48;Bfq=b;b=Dc(46,1,1,0);b.M=1;Bfr=b;b=Dc(47,1,1,1);b.M=17;Bfs=b;b=Dc(48,1,1,2);b.M=33;Bft=b;b=Dc(49,1,1,3);b.M=49;Bfu=b;b=Dc(50,2,2,0);b.M=2;Bfv=b;b=Dc(51,2,2,1);b.M=18;Bfw=b;b=Dc(52,2,2,2);b.M=34;Bfx=b;b=Dc(53,2,2,3);b.M=50;Bfy=b;b=Dc(54,3,3,0);b.M=3;Bfz=b;b=Dc(55,3,3,1);b.M=19;BfA=b;b=Dc(56,3,3,2);b.M=35;BfB=b;b=Dc(57,3,3,3);b.M=51;BfC=b;b=Dc(58,1,4,0);b.M=4;BfD=b;b=Dc(59,
1,4,1);b.M=20;BfE=b;b=Dc(60,1,4,2);b.M=36;BfF=b;b=Dc(61,1,4,3);b.M=52;BfG=b;b=E7(62);b.M=6;BeI=b;b=ZR(63,3);b.M=87;BfH=b;b=ZR(64,8);b.M=88;BfI=b;m=A9H(65);m.M=26;BfJ=m;}
function AIb(){Bg.call(this);this.o2=0;}
function A87(a){var b=new AIb();ARt(b,a);return b;}
function ARt(a,b){Ey(a,b);b=b+256|0;a.o2=b;L();a.M=Bcn.data[b].cP(2);}
function A4o(a,b,c,d,e,f,g){var h,i;if(!g)e=e+(-1)|0;if(g==1)e=e+1|0;if(g==2)f=f+(-1)|0;if(g==3)f=f+1|0;if(g==4)d=d+(-1)|0;if(g==5)d=d+1|0;if(!b.s)return 0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){h=O(c,d,e,f);L();i=Bcn.data[h];if(!(!(a.o2>0&&i===null)&&i!==Bcj&&i!==Bd7&&i!==Bck&&i!==Bd8&&i!==Bd9)){i=Bcn.data[a.o2];if(AFZ(c,i.it(d,e,f))&&i.oo(c,d,e,f)&&By(c,d,e,f,a.o2)){Bcn.data[a.o2].En(c,d,e,f,g);b.s=b.s-1|0;}}return 1;}return 0;}
function GU(){var a=this;C.call(a);a.jh=0;a.l=null;a.bG=null;a.iQ=0;a.cZ=Long_ZERO;a.vF=0;a.g8=0;a.sT=0;a.EP=0;a.EA=0;a.vW=null;}
var BfK=null;var BfL=0;var BfM=0;var BfN=null;function Gp(a){if(!a.iQ){ZP(a);a.iQ=1;}if(!a.jh){AG0(a);a.jh=1;}}
function Gt(a,b){Gp(a);return a.l.data[b];}
function G2(a){return a.EP;}
function KI(a){return a.EA;}
function Gz(a){if(!a.iQ){ZP(a);a.iQ=1;}return a.cZ;}
function AYB(a){return a.vW;}
function ACe(a,b){a.vW=b;a.jh=0;}
function Nu(a){return a.sT;}
function CX(a,b,c){a.l.data[b]=c;a.bG.data[b]=1;a.jh=0;a.iQ=0;if(b>2&&b<9)a.g8=b;if(!(b!=10&&b!=11))a.vF=b;if(b==9)a.vF=10;}
function A4N(a,b){a.sT=b;}
function Od(a,b){if(!(a.iQ&&a.jh&&Long_eq(a.cZ,b))){a.cZ=b;a.iQ=1;a.jh=0;Gp(a);}}
function AAZ(){var b,c;b=H(BC,17);c=b.data;c[0]=B(279);c[1]=B(280);c[2]=B(281);c[3]=B(282);c[4]=B(283);c[5]=B(284);c[6]=B(285);c[7]=B(286);c[8]=B(287);c[9]=B(288);c[10]=B(289);c[11]=B(290);c[12]=B(291);c[13]=B(292);c[14]=B(293);c[15]=B(294);c[16]=B(295);BfK=b;BfL=(-1);BfM=(-1);}
function ANR(){var a=this;Og.call(a);a.Hn=0;a.lD=0;}
function A3O(a,b){var c=new ANR();A2$(c,a,b);return c;}
function A$y(a,b,c,d,e,f,g){var h=new ANR();AAP(h,a,b,c,d,e,f,g);return h;}
function A2$(a,b,c){AAP(a,0,b,$rt_createByteArray(b),0,b,c,0);}
function AAP(a,b,c,d,e,f,g,h){LR(a,c);a.k$=Bcg;a.dB=b;a.b5=d;a.L=e;a.ce=f;a.Hn=g;a.lD=h;}
function AJO(a){var b,c,d,e;if(a.L>=a.ce){b=new Gg;Z(b);J(b);}c=a.b5.data;d=a.dB;e=a.L;a.L=e+1|0;return c[d+e|0];}
function AEp(a){var b,c,d,e,f,g,h,i,j;if(a.lD){b=new EO;Z(b);J(b);}a:{c=BT(a);if(a.L>0){d=a.dB;e=a.dB+a.L|0;f=0;while(true){if(f>=c)break a;g=a.b5.data;h=d+1|0;i=a.b5.data;j=e+1|0;g[d]=i[e];f=f+1|0;d=h;e=j;}}}a.L=c;a.ce=a.ie;a.iB=(-1);return a;}
function AXN(a){return a.lD;}
function LS(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.ce){c=a.b5.data[a.dB+b|0]&255;d=a.b5.data[(a.dB+b|0)+1|0]&255;e=a.b5.data[(a.dB+b|0)+2|0]&255;f=a.b5.data[(a.dB+b|0)+3|0]&255;if(a.k$!==Bcg)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BD;h=new R;T(h);Bb(g,S(E(Bd(E(Bd(E(h,B(296)),b),B(250)),a.ce-3|0),B(34))));J(g);}
function AC1(a,b,c){var d,e;if(a.lD){d=new EO;Z(d);J(d);}if(b>=0&&(b+3|0)<a.ce){if(a.k$!==Bcg){a.b5.data[a.dB+b|0]=c<<24>>24;a.b5.data[(a.dB+b|0)+1|0]=c>>8<<24>>24;a.b5.data[(a.dB+b|0)+2|0]=c>>16<<24>>24;a.b5.data[(a.dB+b|0)+3|0]=c>>24<<24>>24;}else{a.b5.data[a.dB+b|0]=c>>24<<24>>24;a.b5.data[(a.dB+b|0)+1|0]=c>>16<<24>>24;a.b5.data[(a.dB+b|0)+2|0]=c>>8<<24>>24;a.b5.data[(a.dB+b|0)+3|0]=c<<24>>24;}return a;}e=new BD;d=new R;T(d);Bb(e,S(E(Bd(E(Bd(E(d,B(296)),b),B(250)),a.ce-3|0),B(34))));J(e);}
function AHr(a){var b,c;b=BT(a)/4|0;if(a.k$!==Bcg){c=new QO;Qf(c,a.dB+a.L|0,b,a,0,b,a.lD);return c;}c=new Yb;Qf(c,a.dB+a.L|0,b,a,0,b,a.lD);return c;}
function XP(){}
function M9(){FH.call(this);}
function AG8(b){var c,d;if(b>=0)return AV1(0,b,$rt_createCharArray(b),0,b,0);c=new BB;d=new R;T(d);Bb(c,S(Bd(E(d,B(268)),b)));J(c);}
function AKE(b,c,d){return AV1(0,b.data.length,b,c,c+d|0,0);}
function Th(b){return AKE(b,0,b.data.length);}
function Me(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=new R;T(i);Bb(h,S(Bd(E(Bd(E(i,B(297)),g),B(253)),f)));J(h);}if(BT(a)<d){h=new Gg;Z(h);J(h);}if(d<0){h=new BD;i=new R;T(i);Bb(h,S(E(Bd(E(i,B(254)),d),B(255))));J(h);}g=a.L;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=Yt(a,g);j=j+1|0;c=k;g=f;}a.L=a.L+d|0;return a;}}b=b.data;i=new BD;h=new R;T(h);Bb(i,S(E(Bd(E(Bd(E(h,B(256)),c),B(250)),b.length),B(34))));J(i);}
function AFw(a,b){return Me(a,b,0,b.data.length);}
function AOG(a,b,c,d){var e,f,g,h,i,j,k;if(PP(a)){e=new EO;Z(e);J(e);}if(BT(a)<d){e=new GW;Z(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BD;i=new R;T(i);Bb(e,S(Bd(E(Bd(E(i,B(298)),h),B(253)),g)));J(e);}if(d<0){e=new BD;i=new R;T(i);Bb(e,S(E(Bd(E(i,B(254)),d),B(255))));J(e);}h=a.L;j=0;while(j<d){k=h+1|0;g=c+1|0;OT(a,h,f[c]);j=j+1|0;h=k;c=g;}a.L=a.L+d|0;return a;}}b=b.data;i=new BD;e=new R;T(e);Bb(i,S(E(Bd(E(Bd(E(e,B(256)),c),B(250)),b.length),B(34))));J(i);}
function AIx(a,b,c,d){var e,f,g,h,i,j;if(PP(a)){b=new EO;Z(b);J(b);}e=d-c|0;if(BT(a)<e){b=new GW;Z(b);J(b);}if(c>=0&&c<Q(b)){if(d>Q(b)){f=new BD;g=new R;T(g);Bb(f,S(Bd(E(Bd(E(g,B(298)),d),B(299)),Q(b))));J(f);}if(c>d){b=new BD;f=new R;T(f);Bb(b,S(Bd(E(Bd(E(f,B(300)),c),B(301)),d)));J(b);}h=a.L;while(c<d){i=h+1|0;j=c+1|0;OT(a,h,P(b,c));h=i;c=j;}a.L=a.L+e|0;return a;}g=new BD;f=new R;T(f);Bb(g,S(E(Bd(E(Bd(E(f,B(300)),c),B(250)),Q(b)),B(34))));J(g);}
function Ox(a,b){return AIx(a,b,0,Q(b));}
function AIN(a){return 1;}
function AMo(a){return a.mG;}
function AUO(a){Ec(a);return a;}
function AUh(a,b){Dz(a,b);return a;}
function RP(){BA.call(this);}
function Dd(){var a=this;C.call(a);a.BL=0.0;a.xy=0;}
function A91(){var a=new Dd();AZu(a);return a;}
function AZu(a){return;}
function AK2(a,b){return;}
function AGm(a,b){if(b==32)return HX(a)*4.294967295E9+(-2.147483648E9)|0;return HX(a)*Long_toNumber(Long_shl(Long_fromInt(1),B4(32,b)))|0;}
function RE(a){return AGm(a,32);}
function W(a,b){return HX(a)*b|0;}
function N(a){return HX(a);}
function HX(a){return Math.random();}
function HH(a){var b,c,d,e;if(a.xy){a.xy=0;return a.BL;}while(true){while(true){b=2.0*HX(a)-1.0;c=2.0*HX(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Iu((-2.0)*AZ7(d)/d);a.BL=c*e;a.xy=1;return b*e;}
function GG(){var a=this;GU.call(a);a.pS=Long_ZERO;a.eW=0;a.q_=0;a.kf=0;a.dz=null;a.v$=Long_ZERO;a.ws=Long_ZERO;a.oy=0;a.AP=0;}
var BfO=null;var BfP=null;var BfQ=null;var BfR=null;var BfS=null;function AO8(a){var b=new GG();AJ7(b,a);return b;}
function BfT(a,b){var c=new GG();L$(c,a,b);return c;}
function AJ7(a,b){L$(a,b,Bc9);}
function L$(a,b,c){var d,e,f,g;a.l=$rt_createIntArray(17);a.bG=$rt_createBooleanArray(17);a.jh=0;a.iQ=0;a.sT=1;ACe(a,b);a.l=$rt_createIntArray(17);a.bG=$rt_createBooleanArray(17);a.jh=0;a.iQ=0;a.sT=1;if(c===BfN&&BfL>=0)d=BfL;else{b=ACh(c.f7,c.fV);if(Bex===null)Bex=AYT();e=Bex;BfL=e.hasOwnProperty($rt_ustr(b))?e[$rt_ustr(b)].value:e[$rt_ustr(B(302))].value;d=BfL;}AH1(a,d);if(c===BfN&&BfM>=0)d=BfM;else{b=ACh(c.f7,c.fV);if(Bew===null)Bew=A5m();e=Bew;BfM=e.hasOwnProperty($rt_ustr(b))?e[$rt_ustr(b)].value:e[$rt_ustr(B(302))].value;d
=BfM;}ACI(a,d);BfN=c;a.pS=new Long(4184124416, 4294964450);a.eW=1582;a.q_=(((a.eW-2000|0)/400|0)+Nv(a)|0)-((a.eW-2000|0)/100|0)|0;f=$rt_createIntArray(10);g=f.data;g[0]=0;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=0;g[6]=0;g[7]=0;g[8]=0;g[9]=0;a.dz=f;a.oy=10;Od(a,CF());}
function ED(a,b,c){var d,e,f,g,h,i;if(!c)return;if(b>=0&&b<15){a.kf=0;if(!b){Gp(a);if(a.l.data[0]!=1){if(c<=0)return;CX(a,0,1);}else{if(c>=0)return;CX(a,0,0);}Gp(a);return;}if(b!=1&&b!=2){a:{d=Long_ZERO;Gz(a);switch(b){case 3:case 4:case 8:d=Long_fromInt(604800000);break a;case 5:case 6:case 7:d=Long_fromInt(86400000);break a;case 9:d=Long_fromInt(43200000);break a;case 10:case 11:a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),Long_fromInt(3600000)));break a;case 12:a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),
Long_fromInt(60000)));break a;case 13:a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),Long_fromInt(1000)));break a;case 14:a.cZ=Long_add(a.cZ,Long_fromInt(c));break a;default:}}if(Long_gt(d,Long_ZERO)){e=Jk(a,a.cZ);a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),d));f=Jk(a,a.cZ);if(f!=e)a.cZ=Long_add(a.cZ,Long_fromInt(e-f|0));}a.jh=0;Gp(a);return;}Gp(a);if(b==2){g=a.l.data[2]+c|0;if(g>=0)c=g/12|0;else{c=(g-11|0)/12|0;g=12+(g%12|0)|0;}CX(a,2,g%12|0);}CX(a,1,a.l.data[1]+c|0);h=FR(a,Ft(a,a.l.data[1]),a.l.data[2]);if(a.l.data[5]
>h)CX(a,5,h);Gp(a);return;}i=new BB;Z(i);J(i);}
function T1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_div(b,Long_fromInt(86400000));if(c<0){c=c+86400000|0;e=Long_sub(e,Long_fromInt(1));}c=c+d|0;while(c<0){c=c+86400000|0;e=Long_sub(e,Long_fromInt(1));}while(c>=86400000){c=c-86400000|0;e=Long_add(e,Long_fromInt(1));}f=Long_fromInt(d);g=Long_add(b,f);h=ZG(a,e,g);a.l.data[6]=h;if(a.l.data[1]==a.eW&&Long_le(a.pS,g))h=h+a.oy|0;i=h/32|0;j=Ft(a,a.l.data[1]);k=h-Mw(a,j,i)|0;if(k>FR(a,j,i)){k=k-FR(a,j,i)|0;i=i+1|0;}a.l.data[7]=Dj(a,Long_sub(e,Long_fromInt(3)))+1|0;l
=Jk(a,b);if(a.l.data[1]>0)l=l-d|0;a.l.data[16]=l;if(!l)g=e;else{c=c+l|0;if(c<0){c=c+86400000|0;g=Long_sub(e,Long_fromInt(1));}else if(c<86400000)g=e;else{c=c-86400000|0;g=Long_add(e,Long_fromInt(1));}if(Long_ne(e,g)){b=Long_add(Long_sub(b,f),Long_fromInt(l));d=ZG(a,g,b);a.l.data[6]=d;if(a.l.data[1]==a.eW&&Long_le(a.pS,b))d=d+a.oy|0;i=d/32|0;j=Ft(a,a.l.data[1]);k=d-Mw(a,j,i)|0;if(k>FR(a,j,i)){k=k-FR(a,j,i)|0;i=i+1|0;}a.l.data[7]=Dj(a,Long_sub(g,Long_fromInt(3)))+1|0;}}a.l.data[14]=c%1000|0;c=c/1000|0;a.l.data[13]
=c%60|0;c=c/60|0;a.l.data[12]=c%60|0;a.l.data[11]=(c/60|0)%24|0;m=a.l;m.data[9]=a.l.data[11]<=11?0:1;a.l.data[10]=a.l.data[11]%12|0;if(a.l.data[1]>0)a.l.data[0]=1;else{a.l.data[0]=0;a.l.data[1]= -a.l.data[1]+1|0;}a.l.data[2]=i;a.l.data[5]=k;m=a.l.data;d=k-1|0;m[8]=(d/7|0)+1|0;a.l.data[4]=((d+Dj(a,Long_sub(Long_sub(Long_sub(g,Long_fromInt(k)),Long_fromInt(2)),Long_fromInt(G2(a)-1|0)))|0)/7|0)+1|0;n=Dj(a,Long_sub(Long_sub(Long_sub(g,Long_fromInt(3)),Long_fromInt(a.l.data[6]-1|0)),Long_fromInt(G2(a)-1|0)));o=(((a.l.data[6]
-1|0)+n|0)/7|0)+((7-n|0)<KI(a)?0:1)|0;if(!o){m=a.l;i=!Ft(a,a.l.data[1]-1|0)?1:2;m.data[3]=(7-Dj(a,Long_fromInt(n-i|0))|0)<KI(a)?52:53;}else{c=a.l.data[6];d=!j?366:367;i=!j?1:2;if(c<(d-Dj(a,Long_fromInt(n+i|0))|0))a.l.data[3]=o;else{m=a.l;i=!j?1:2;if((7-Dj(a,Long_fromInt(n+i|0))|0)>=KI(a))o=1;m.data[3]=o;}}}
function AEK(a,b,c,d,e,f){var g;a:{b:{g=a.l.data[16];if(a.kf&&Long_lt(c,a.v$)&&Long_gt(c,a.ws)&&a.dz.data[4]==f&&!(!g&&Long_ge(d,a.v$))){if(!g)break b;if(Long_gt(d,a.ws))break b;}T1(a,b,e,f);a.kf=0;break a;}a.l.data[1]=a.dz.data[0];a.l.data[2]=a.dz.data[1];a.l.data[5]=a.dz.data[2];a.l.data[7]=a.dz.data[3];a.l.data[0]=a.dz.data[5];a.l.data[3]=a.dz.data[6];a.l.data[4]=a.dz.data[7];a.l.data[6]=a.dz.data[8];a.l.data[8]=a.dz.data[9];}}
function Jk(a,b){return ALG(a.vW,b);}
function AG0(a){var b,c,d,e,f,g,h,i;b=Jk(a,a.cZ);if(!a.bG.data[15])a.l.data[15]=b;c=Long_rem(a.cZ,Long_fromInt(86400000)).lo;d=a.l.data[16];e=b+d|0;f=Long_add(a.cZ,Long_fromInt(e));if(Long_gt(a.cZ,Long_ZERO)&&Long_lt(f,Long_ZERO)&&e>0)f=new Long(4294967295, 2147483647);else if(Long_lt(a.cZ,Long_ZERO)&&Long_gt(f,Long_ZERO)&&e<0)f=new Long(0, 2147483648);if(!a.kf)T1(a,a.cZ,c,b);else{e=((c>=0?c:c+86400000|0)+b|0)+d|0;if(e<0)e=e+86400000|0;else if(e>=86400000)e=e-86400000|0;a.l.data[14]=e%1000|0;e=e/1000|0;a.l.data[13]
=e%60|0;g=e/60|0;a.l.data[12]=g%60|0;a.l.data[11]=(g/60|0)%24|0;h=a.l;h.data[9]=a.l.data[11]<=11?0:1;a.l.data[10]=a.l.data[11]%12|0;e=Long_compare(f,Long_ZERO);i=e>0&&e<0&&!d?new Long(4294967295, 2147483647):e>=0?f:e<=0?f:d?new Long(0, 2147483648):f;AEK(a,a.cZ,f,i,c,b);}g=0;while(g<17){a.bG.data[g]=1;g=g+1|0;}if(!a.kf&&Long_ne(f,new Long(4294967295, 2147483647))&&Long_ne(f,new Long(0, 2147483648))){a.dz.data[0]=a.l.data[1];a.dz.data[1]=a.l.data[2];a.dz.data[2]=a.l.data[5];a.dz.data[3]=a.l.data[7];a.dz.data[4]
=b;a.dz.data[5]=a.l.data[0];a.dz.data[6]=a.l.data[3];a.dz.data[7]=a.l.data[4];a.dz.data[8]=a.l.data[6];a.dz.data[9]=a.l.data[8];a.v$=Long_add(f,Long_fromInt(((0+((((23-a.l.data[11]|0)*60|0)*60|0)*1000|0)|0)+(((59-a.l.data[12]|0)*60|0)*1000|0)|0)+((59-a.l.data[13]|0)*1000|0)|0));a.ws=Long_sub(f,Long_fromInt(((((a.l.data[11]*60|0)*60|0)*1000|0)+((a.l.data[12]*60|0)*1000|0)|0)+(a.l.data[13]*1000|0)|0));a.kf=1;}}
function ZP(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b:{c:{d:{e:{if(!Nu(a)){f:{if(a.bG.data[11]){if(a.l.data[11]>=0&&a.l.data[11]<=23)break f;J(DB());}if(a.bG.data[10]){if(a.l.data[10]<0)break a;if(a.l.data[10]>11)break a;}}if(a.bG.data[12]&&!(a.l.data[12]>=0&&a.l.data[12]<=59))J(DB());if(a.bG.data[13]){if(a.l.data[13]<0)break b;if(a.l.data[13]>59)break b;}if(a.bG.data[14]){if(a.l.data[14]<0)break c;if(a.l.data[14]>999)break c;}if(a.bG.data[3]&&!(a.l.data[3]>=1&&a.l.data[3]<=53))J(DB());if(a.bG.data[7]&&!(a.l.data[7]
>=1&&a.l.data[7]<=7))J(DB());if(a.bG.data[8]&&!(a.l.data[8]>=1&&a.l.data[8]<=6))J(DB());if(a.bG.data[4]){if(a.l.data[4]<1)break d;if(a.l.data[4]>6)break d;}if(a.bG.data[9]&&a.l.data[9]&&a.l.data[9]!=1)J(DB());if(a.bG.data[10]&&!(a.l.data[10]>=0&&a.l.data[10]<=11))J(DB());if(a.bG.data[1]){if(a.bG.data[0]&&!a.l.data[0]&&!(a.l.data[1]>=1&&a.l.data[1]<=292269054))J(DB());if(!(a.l.data[1]>=1&&a.l.data[1]<=292278994))J(DB());}if(a.bG.data[2]){if(a.l.data[2]<0)break e;if(a.l.data[2]>11)break e;}}b=Long_ZERO;if(a.bG.data[11]
&&a.vF!=10)b=Long_fromInt(a.l.data[11]);else if(a.bG.data[10])b=Long_fromInt((a.l.data[9]*12|0)+a.l.data[10]|0);c=Long_mul(b,Long_fromInt(3600000));if(a.bG.data[12])c=Long_add(c,Long_mul(Long_fromInt(a.l.data[12]),Long_fromInt(60000)));if(a.bG.data[13])c=Long_add(c,Long_mul(Long_fromInt(a.l.data[13]),Long_fromInt(1000)));if(a.bG.data[14])c=Long_add(c,Long_fromInt(a.l.data[14]));d=!a.bG.data[1]?1970:a.l.data[1];if(a.bG.data[0]){if(a.l.data[0]&&a.l.data[0]!=1)J(DB());if(!a.l.data[0])d=1-d|0;}e=!a.bG.data[4]&&
!a.bG.data[8]?0:1;f=!(!a.bG.data[5]&&!a.bG.data[2]&&!e)&&a.g8!=6?1:0;if(f&&!(a.g8!=7&&a.g8!=3)){if(a.bG.data[3]&&a.bG.data[7])f=a.g8!=3&&e&&a.bG.data[7]?1:0;else if(a.bG.data[6])f=a.bG.data[5]&&a.bG.data[2]?1:0;}if(!f){g=a.bG.data[3]&&a.g8!=6?1:0;if(g&&a.bG.data[6])g=a.bG.data[7];h=NG(a,d);if(g){i=!a.bG.data[7]?G2(a)-1|0:a.l.data[7]-1|0;b=Long_sub(h,Long_fromInt(3));j=Dj(a,Long_sub(b,Long_fromInt(G2(a)-1|0)));h=Long_add(h,Long_fromInt((((a.l.data[3]-1|0)*7|0)+Dj(a,Long_sub(Long_fromInt(j+i|0),b))|0)-j|0));if
((7-j|0)<KI(a))h=Long_add(h,Long_fromInt(7));}else if(a.bG.data[6]){if(!Nu(a)&&!(a.l.data[6]>=1&&a.l.data[6]<=(365+(!Ft(a,d)?0:1)|0)))J(DB());h=Long_add(h,Long_fromInt(a.l.data[6]-1|0));}else if(a.bG.data[7])h=Long_add(h,Long_fromInt(Dj(a,Long_sub(Long_fromInt(a.l.data[7]-1|0),Long_sub(h,Long_fromInt(3))))));}else{k=a.l.data[2];d=d+(k/12|0)|0;k=k%12|0;if(k<0){d=d+(-1)|0;k=k+12|0;}l=Ft(a,d);h=Long_add(NG(a,d),Long_fromInt(Mw(a,l,k)));m=a.bG.data[5];if(m&&!(a.g8!=7&&a.g8!=4&&a.g8!=8))m=a.bG.data[7]&&e?0:1;if(m)
{if(!Nu(a)&&!(a.l.data[5]>=1&&a.l.data[5]<=FR(a,l,k)))J(DB());h=Long_add(h,Long_fromInt(a.l.data[5]-1|0));}else{i=!a.bG.data[7]?G2(a)-1|0:a.l.data[7]-1|0;if(a.bG.data[4]&&a.g8!=8){j=Dj(a,Long_sub(Long_sub(h,Long_fromInt(3)),Long_fromInt(G2(a)-1|0)));h=Long_add(h,Long_fromInt((((a.l.data[4]-1|0)*7|0)+Dj(a,Long_sub(Long_fromInt(j+i|0),Long_sub(h,Long_fromInt(2))))|0)-j|0));}else if(a.bG.data[8])h=a.l.data[8]>=0?Long_add(h,Long_fromInt(Dj(a,Long_sub(Long_fromInt(i),Long_sub(h,Long_fromInt(3))))+((a.l.data[8]-1
|0)*7|0)|0)):Long_add(h,Long_fromInt((FR(a,l,k)+Dj(a,Long_sub(Long_fromInt(i),Long_sub(Long_add(h,Long_fromInt(FR(a,l,k))),Long_fromInt(3))))|0)+(a.l.data[8]*7|0)|0));else if(a.bG.data[7]){b=Long_sub(h,Long_fromInt(3));j=Dj(a,Long_sub(b,Long_fromInt(G2(a)-1|0)));h=Long_add(h,Long_fromInt(Dj(a,Long_fromInt(Dj(a,Long_sub(Long_fromInt(j+i|0),b))-j|0))));}}}a.g8=0;b=Long_add(c,Long_mul(h,Long_fromInt(86400000)));if(d==a.eW&&Long_ge(b,Long_add(a.pS,Long_mul(Long_fromInt(Nv(a)),Long_fromInt(86400000)))))b=Long_sub(b,
Long_mul(Long_fromInt(Nv(a)),Long_fromInt(86400000)));a.cZ=Long_sub(b,Long_fromInt(Jk(a,b)));return;}J(DB());}J(DB());}J(DB());}J(DB());}J(DB());}
function ZG(a,b,c){var d,e,f;d=1970;c=Long_ge(c,a.pS)?b:Long_sub(b,Long_fromInt(a.q_));while(true){e=Long_div(c,Long_fromInt(365)).lo;if(!e)break;d=d+e|0;c=Long_sub(b,NG(a,d));}if(Long_lt(c,Long_ZERO)){d=d-1|0;f=!Ft(a,d)?365:366;if(d==a.eW)f=f-a.oy|0;if(d==(a.eW-1|0))f=f-a.AP|0;c=Long_add(c,Long_fromInt(f));}a.l.data[1]=d;return c.lo+1|0;}
function NG(a,b){var c,d;c=Long_fromInt(b);if(Long_lt(c,Long_fromInt(1970))){if(Long_le(c,Long_fromInt(a.eW)))return Long_add(Long_add(Long_mul(Long_sub(c,Long_fromInt(1970)),Long_fromInt(365)),Long_div(Long_sub(c,Long_fromInt(1972)),Long_fromInt(4))),Long_fromInt(a.q_));d=Long_add(Long_mul(Long_sub(c,Long_fromInt(1970)),Long_fromInt(365)),Long_div(Long_sub(c,Long_fromInt(1972)),Long_fromInt(4)));c=Long_sub(c,Long_fromInt(2000));return Long_add(Long_sub(d,Long_div(c,Long_fromInt(100))),Long_div(c,Long_fromInt(400)));}d
=Long_add(Long_mul(Long_sub(c,Long_fromInt(1970)),Long_fromInt(365)),Long_div(Long_sub(c,Long_fromInt(1969)),Long_fromInt(4)));return Long_gt(c,Long_fromInt(a.eW))?Long_sub(d,Long_sub(Long_div(Long_sub(c,Long_fromInt(1901)),Long_fromInt(100)),Long_div(Long_sub(c,Long_fromInt(1601)),Long_fromInt(400)))):Long_eq(c,Long_fromInt(a.eW))?Long_add(d,Long_fromInt(a.oy)):Long_ne(c,Long_fromInt(a.eW-1|0))?Long_add(d,Long_fromInt(a.q_)):Long_add(d,Long_fromInt(a.AP));}
function FR(a,b,c){if(b&&c==1)return BfO.data[c]+1|0;return BfO.data[c];}
function Mw(a,b,c){if(b&&c>1)return BfP.data[c]+1|0;return BfP.data[c];}
function Ft(a,b){if(b<=a.eW)return b%4|0?0:1;a:{b:{if(!(b%4|0)){if(b%100|0)break b;if(!(b%400|0))break b;}b=0;break a;}b=1;}return b;}
function Nv(a){return ((a.eW/100|0)-(a.eW/400|0)|0)-2|0;}
function Dj(a,b){var c;c=Long_rem(b,Long_fromInt(7)).lo;if(Long_lt(b,Long_ZERO)&&c<0)return c+7|0;return c;}
function AH1(a,b){a.EP=b;a.kf=0;}
function ACI(a,b){a.EA=b;a.kf=0;}
function ACj(){var b,c;b=$rt_createByteArray(12);c=b.data;c[0]=31;c[1]=28;c[2]=31;c[3]=30;c[4]=31;c[5]=30;c[6]=31;c[7]=31;c[8]=30;c[9]=31;c[10]=30;c[11]=31;BfO=b;b=$rt_createIntArray(12);c=b.data;c[0]=0;c[1]=31;c[2]=59;c[3]=90;c[4]=120;c[5]=151;c[6]=181;c[7]=212;c[8]=243;c[9]=273;c[10]=304;c[11]=334;BfP=b;b=$rt_createIntArray(17);c=b.data;c[0]=1;c[1]=292278994;c[2]=11;c[3]=53;c[4]=6;c[5]=31;c[6]=366;c[7]=7;c[8]=6;c[9]=1;c[10]=11;c[11]=23;c[12]=59;c[13]=59;c[14]=999;c[15]=50400000;c[16]=7200000;BfQ=b;b=$rt_createIntArray(17);c
=b.data;c[0]=0;c[1]=1;c[2]=0;c[3]=1;c[4]=0;c[5]=1;c[6]=1;c[7]=1;c[8]=1;c[9]=0;c[10]=0;c[11]=0;c[12]=0;c[13]=0;c[14]=0;c[15]=(-46800000);c[16]=0;BfR=b;b=$rt_createIntArray(17);c=b.data;c[0]=1;c[1]=292269054;c[2]=11;c[3]=50;c[4]=3;c[5]=28;c[6]=355;c[7]=7;c[8]=3;c[9]=1;c[10]=11;c[11]=23;c[12]=59;c[13]=59;c[14]=999;c[15]=50400000;c[16]=1200000;BfS=b;}
function Pq(){}
function AGs(){var a=this;C.call(a);a.dQ=Long_ZERO;a.eO=Long_ZERO;}
function A6A(){var a=new AGs();AWs(a);return a;}
function AWs(a){a.dQ=Long_fromInt(1);a.eO=Long_ZERO;}
function AO9(a,b){a.dQ=Long_and(b,Long_fromInt(65535));a.eO=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AVO(a){a.dQ=Long_fromInt(1);a.eO=Long_ZERO;}
function AQk(a){return Long_or(Long_shl(a.eO,16),a.dQ);}
function A48(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.dQ=Long_add(a.dQ,Long_fromInt(b[c]&255));a.eO=Long_add(a.eO,a.dQ);a.dQ=Long_rem(a.dQ,Long_fromInt(65521));a.eO=Long_rem(a.eO,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.dQ;d=c+1|0;a.dQ=Long_add(j,Long_fromInt(i[c]&255));a.eO=Long_add(a.eO,a.dQ);h=e;c=d;}a.dQ=Long_rem(a.dQ,Long_fromInt(65521));a.eO=Long_rem(a.eO,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.dQ;e=c+1|0;a.dQ=Long_add(j,Long_fromInt(i[c]&255));a.eO=Long_add(a.eO,a.dQ);f=d;c=e;}a.dQ=Long_rem(a.dQ,Long_fromInt(65521));a.eO=Long_rem(a.eO,Long_fromInt(65521));}
function GD(){Fd.call(this);}
var Bdb=null;var Bdf=null;var BfU=null;function AMx(){var b,c,d;b=new GD;FK(b,B(303),0);Bdb=b;b=new GD;FK(b,B(304),1);Bdf=b;c=H(GD,2);d=c.data;d[0]=Bdb;d[1]=Bdf;BfU=c;}
function Nb(){B7.call(this);}
function A5k(a){return 0;}
function A6X(a){return 0;}
function A4d(a){return 0;}
function L8(){B7.call(this);}
function A3Z(a){return 1;}
function AUx(a){return 0;}
function Oh(){B7.call(this);}
function AXR(a){return 0;}
function AXU(a){return 0;}
function AQo(a){return 0;}
function Ha(){var a=this;Bg.call(a);a.uD=null;a.xo=0.0;a.BW=0;}
function BfV(a,b,c,d){var e=new Ha();Ol(e,a,b,c,d);return e;}
function Ol(a,b,c,d,e){Ey(a,b);a.xo=4.0;a.uD=e;a.gg=1;a.iU=32<<d;a.xo=(d+1|0)<<1;a.BW=c+d|0;}
function AQE(a,b){var c;c=0;while(c<a.uD.data.length){if(a.uD.data[c]===b)return a.xo;c=c+1|0;}return 1.0;}
function AUF(a,b){GX(b,2);}
function AP3(a,b){GX(b,1);}
function A0z(a){return a.BW;}
function Zx(){Ha.call(this);}
var BfW=null;function A9M(){A9M=Bl(Zx);APR();}
function Nz(a,b){var c=new Zx();AEB(c,a,b);return c;}
function AEB(a,b,c){A9M();Ol(a,b,1,c,BfW);}
function APR(){var b,c;b=H(V,4);c=b.data;L();c[0]=Bcp;c[1]=Bcq;c[2]=BcI;c[3]=BcJ;BfW=b;}
function Z_(){Ha.call(this);this.oH=0;}
var BfX=null;function A$c(){A$c=Bl(Z_);APo();}
function MD(a,b){var c=new Z_();AGl(c,a,b);return c;}
function AGl(a,b,c){A$c();Ol(a,b,2,c,BfX);a.oH=c;}
function AS0(a,b){L();return b===Bc8?(a.oH!=3?0:1):b!==Bed&&b!==Bec?(b!==Bc5&&b!==Bc3?(b!==Bc4&&b!==Bc2?(b.cm===Bek?1:b.cm!==Bez?0:1):a.oH<=0?0:1):a.oH<2?0:1):a.oH<2?0:1;}
function APo(){var b,c;b=H(V,12);c=b.data;L();c[0]=Bcv;c[1]=Bcr;c[2]=Bcs;c[3]=Bct;c[4]=BcC;c[5]=Bc2;c[6]=Bc4;c[7]=Bc1;c[8]=Bc5;c[9]=Bc3;c[10]=Bec;c[11]=Bed;BfX=b;}
function Vb(){Ha.call(this);}
var BfY=null;function A9A(){A9A=Bl(Vb);A8I();}
function Na(a,b){var c=new Vb();AF4(c,a,b);return c;}
function AF4(a,b,c){A9A();Ol(a,b,3,c,BfY);}
function A8I(){var b,c;b=H(V,4);c=b.data;L();c[0]=Bcx;c[1]=Bc6;c[2]=Bcy;c[3]=Bea;BfY=b;}
function AGz(){Bg.call(this);}
function A82(a){var b=new AGz();AXj(b,a);return b;}
function AXj(a,b){Ey(a,3);a.gg=1;a.iU=64;}
function A1B(a,b,c,d,e,f,g){if(!g)e=e+(-1)|0;if(g==1)e=e+1|0;if(g==2)f=f+(-1)|0;if(g==3)f=f+1|0;if(g==4)d=d+(-1)|0;if(g==5)d=d+1|0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){if(!O(c,d,e,f)){L();By(c,d,e,f,Bd9.b);}GX(b,1);return 1;}return 0;}
function Nx(){Bg.call(this);this.Fl=0;}
function ZR(a,b){var c=new Nx();AK5(c,a,b);return c;}
function AK5(a,b,c){Ey(a,b);a.Fl=c;a.gg=1;}
function AG9(a,b,c,d){b.s=b.s-1|0;Wt(d,a.Fl);return b;}
function AGu(){Bg.call(this);}
function A9O(a){var b=new AGu();AZR(b,a);return b;}
function AZR(a,b){Ey(a,5);a.gg=1;}
function A7T(a,b,c,d){var e;e=d.F;B3();if(ABi(e,BeT.c3))De(c,AZ_(c,d));return b;}
function AHz(){Bg.call(this);this.Cr=0;}
function N_(a,b){var c=new AHz();A8e(c,a,b);return c;}
function A8e(a,b,c){Ey(a,b);a.gg=1;a.iU=32<<c;a.Cr=4+(c<<1)|0;}
function AWz(a,b){return 1.5;}
function AP2(a,b){GX(b,1);}
function A5S(a,b){GX(b,2);}
function ATo(a){return a.Cr;}
function ADx(){Nx.call(this);}
function A85(a,b){var c=new ADx();A6d(c,a,b);return c;}
function A6d(a,b,c){AK5(a,26,10);}
function A3n(a,b,c,d){AG9(a,b,c,d);b=new C9;B3();Ie(b,Be$);return b;}
function AMh(){Bg.call(this);}
function Ok(a,b){var c=new AMh();ATK(c,a,b);return c;}
function ATK(a,b,c){Ey(a,b);a.gg=1;a.iU=32<<c;}
function AWh(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){a:{g=O(c,d,e,f);if(!CR(c,d,e+1|0,f).iw()){L();if(g==Bcp.b)break a;}L();if(g!=Bcq.b)return 0;}b:{L();By(c,d,e,f,Beg.b);GX(b,1);if(!W(c.bo,8)&&g==Bcp.b){h=0;i=d;j=e+1.2000000476837158;k=f;while(true){if(h>0)break b;l=N(c.bo)*0.699999988079071+0.15000000596046448;m=N(c.bo)*0.699999988079071+0.15000000596046448;n=new Go;l=i+l;m=k+m;o=new C9;B3();Ie(o,BeL);K2(n,c,l,j,m,o);n.i3=10;De(c,n);h=h+1|0;}}}return 1;}return 0;}
function W$(){Bg.call(this);this.Bo=0;}
function BfZ(a,b){var c=new W$();AFp(c,a,b);return c;}
function AFp(a,b,c){Ey(a,39);a.Bo=c;}
function A5M(a,b,c,d,e,f,g){if(g!=1)return 0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){g=O(c,d,e,f);L();if(g!=Beg.b)return 0;By(c,d,e+1|0,f,a.Bo);b.s=b.s-1|0;return 1;}return 0;}
function Gn(){var a=this;Bg.call(a);a.Ab=0;a.BZ=0;a.AN=0;}
var Bf0=null;var Bf1=null;function Dc(a,b,c,d){var e=new Gn();AKL(e,a,b,c,d);return e;}
function AKL(a,b,c,d,e){Ey(a,b);a.Ab=e;a.AN=d;a.BZ=Bf0.data[e];a.iU=(Bf1.data[e]*3|0)<<c;a.gg=1;}
function ANK(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;Bf0=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;Bf1=b;}
function AHZ(){Bg.call(this);}
function A9H(a){var b=new AHZ();A6z(b,a);return b;}
function A6z(a,b){Ey(a,65);a.iU=64;}
function AZz(a,b,c,d,e,f,g){var h,i,j,k,l;if(!g)return 0;if(g==1)return 0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){h=0;if(g==4)h=1;if(g==3)h=2;if(g==5)h=3;i=AUb(c);i.nl=d;i.rj=e;i.mK=f;j=BV();k=Xo().data;d=k.length;e=0;while(e<d){l=k[e];i.dm=l;N$(i,h);if(Pd(i))M(j,l);e=e+1|0;}if(j.q>0)i.dm=Be(j,W(i.O,j.q));N$(i,h);if(Pd(i)){De(c,i);b.s=b.s-1|0;}return 1;}return 0;}
function OG(){C.call(this);this.HD=null;}
var Bcg=null;var Bf2=null;function ARQ(a){var b=new OG();AHH(b,a);return b;}
function AHH(a,b){a.HD=b;}
function AOE(){Bcg=ARQ(B(305));Bf2=ARQ(B(306));}
function I8(){C.call(this);this.HO=null;}
var Bc$=null;var Bf3=null;function Zy(b){var c,d,e,f,g,h,i,j;c=Of(b);if(c!==null)return YU(c);a:{if(EG(b,B(307))&&Q(b)>3){d=P(b,3);if(!(d!=43&&d!=45)){e=$rt_createIntArray(1);f=4;c=new R;T(c);g=Q(b);E(c,BP(b,0,f));while(f<g){if(LM(P(b,f),10)!=(-1)){Ce(c,P(b,f));if((g-(f+1|0)|0)==2)Ce(c,58);}else if(P(b,f)==58)Ce(c,58);f=f+1|0;}if(LJ(S(c),B(308))==(-1)){Ce(c,58);E(c,B(309));}if(LJ(S(c),B(308))==5)J4(c,4,48);b=S(c);f=Sf(b,4,e);if(f>=0&&f<=23){h=e.data;i=h[0];if(i==(-1))break a;else{b:{g=K(f,3600000);if(i<Q(b)
&&P(b,i)==58){j=Sf(b,i+1|0,e);if(h[0]!=(-1)&&j>=0&&j<=59){g=g+(j*60000|0)|0;break b;}return IX(Bf3);}if(!(f<30&&i<=6))g=K(f/100|0,3600000)+((f%100|0)*60000|0)|0;}if(d==45)g= -g;return YU(ANW(b,g,g));}}return IX(Bf3);}}}return IX(Bf3);}
function Sf(b,c,d){var e,f,g,h;e=Q(b);f=0;g=c;a:{while(true){if(g>=e)break a;h=LM(P(b,g),10);if(h==(-1))break;g=g+1|0;f=(f*10|0)+h|0;}}if(g==c)g=(-1);d.data[0]=g;return f;}
function AOC(){Bf3=YU(ANW(B(307),0,0));}
function BD(){BU.call(this);}
function ALw(){C.call(this);}
function AMj(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(DB());}return b.data.length;}
function AFr(b,c){if(b===null){b=new Eg;Z(b);J(b);}if(b===D($rt_voidcls())){b=new BB;Z(b);J(b);}if(c>=0)return AX_(b.hZ,c);b=new AAe;Z(b);J(b);}
function AX_(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function K5(){BU.call(this);}
function NO(){C.call(this);}
var Bf4=null;var Bf5=null;function Of(b){var c,d,e,f,g,h,i,j,k,l;if(!Dx(Bf4,b)){c=Bf4;d=Fy(b,47);if(d<0){e=B(9);f=b;}else{e=BP(b,0,d);f=DO(b,d+1|0);}if(!LA().hasOwnProperty($rt_ustr(e)))e=null;else{e=LA()[$rt_ustr(e)];e=!e.hasOwnProperty($rt_ustr(f))?null:e[$rt_ustr(f)];}if(e===null)e=null;else{e=(e.data!==null?$rt_str(e.data):null);f=AFT(H5(e));if(HS(f)==4){f=DO(e,f.ga);e=new Mo;f=Of(f);Jx(e,b);e.qY=f;}else a:{b:{f=AFT(H5(e));d=HS(f);switch(d){case 0:g=HS(f);h=$rt_createLongArray(g);i=h.data;j=$rt_createIntArray(g);k
=$rt_createIntArray(g);i[0]=GJ(f);l=1;while(l<g){i[l]=Long_add(Long_add(i[l-1|0],GJ(f)),Long_fromInt(657000000));l=l+1|0;}ABr(f,j);ABr(f,k);i=f.ni.data;d=f.ga;f.ga=d+1|0;if(i[d]!=121)f=null;else{f.ga=f.ga+1|0;f=ABh(b,f);}e=new Wa;Jx(e,b);e.mS=h;e.tq=j;e.sQ=k;e.iC=f;if(ADT(e)){if(e instanceof J$)e=e;else{f=new J$;Jx(f,e.s0);f.AO=H(Yx,Bf6+1|0);f.pB=e;e=f;}}break a;case 1:e=ANW(b,GJ(f).lo,GJ(f).lo);break a;case 2:break b;case 3:break;default:break b;}e=ABh(b,f);break a;}b=new BB;c=new R;T(c);Bb(b,S(Bd(E(c,B(310)),
d)));J(b);}}BI(c,b,e);}return Co(Bf4,b);}
function AJp(){return false;}
function AFk(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(!AJp())return null;b=BV();c=CF();d= -(new Date(Long_toNumber(CF()))).getTimezoneOffset();e=BV();f=AAH(AEd(LA())).data;g=f.length;h=0;while(h<g){i=f[h];j=AAH(AEd(LA()[$rt_ustr(i)])).data;k=j.length;l=0;while(l<k){m=j[l];if(!Eb(i)){n=new R;T(n);m=S(E(E(E(n,i),B(30)),m));}M(e,m);l=l+1|0;}h=h+1|0;}f=HW(e,H(BC,e.q)).data;g=f.length;h=0;while(h<g){o=Of(f[h]);if(!(o instanceof Mo)&&K$((o.hc(c)/60000|0)-d|0)<=120&&Long_ne(o.kr(c),c)){e=new TX;e.jk=o;M(b,e);}h
=h+1|0;}i=BV();YA(i,b);m=CZ();p=A9s(b.q,new UN);q=AHe();VE(p,GO(c));BI(m,GO(c),A94(b));a:{b:{c:while(true){if(Ko(p))break b;if(i.q<=1)break b;r=AED(p).ka;ANZ(q,GO(r));e=M6(m,GO(r));l= -(new Date(Long_toNumber(r))).getTimezoneOffset();n=Hq(e);while(JO(n)){e=Il(n);s=e.jk.kr(r);if(Long_eq(s,r)){if(Be(i,0)===e)break c;GE(i,e);}else{if(K$((e.jk.hc(r)/60000|0)-l|0)>120){GE(i,e);continue;}AHT(m,GO(s),new T3).ky(e);if(AOs(q,GO(s)))VE(p,GO(s));}}if(i.q==1)break a;if(Long_eq(Be(i,0).jk.kr(r),r))break a;if(i.q>1&&(Be(i,
0).nD+2880|0)<Be(i,1).nD)return Be(i,0).jk;g=i.q-1|0;while(g>=0){e=Be(i,g);h=e.jk.hc(r)/60000|0;if(h!=l)e.nD=e.nD+(K(Long_div(Long_sub(c,r),Long_fromInt(60000)).lo,K$(h-l|0))/30|0)|0;k=g+1|0;while(k<i.q&&e.nD>Be(i,k).nD){M8(i,k-1|0,Be(i,k));k=k+1|0;}M8(i,k-1|0,e);g=g+(-1)|0;}c=r;}return e.jk;}return Be(i,0).jk;}return Be(i,0).jk;}
function LA(){if(Bf5===null)Bf5=ADC();return Bf5;}
function AAX(){Bf4=CZ();}
function ADC(){return {"":{"CET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1s\'\u001e=n11s5\u001e=n1 "},"EET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"PST8PDT":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "},"EST":{"data":"#tt"}
,"WET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"HST":{"data":"#i#i#"},"CST6CDT":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"MET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1s\'\u001e=n11s5\u001e=n1 "},"EST5EDT":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "}
,"MST7MDT":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "},"MST":{"data":"#8#8#"}},"Asia":{"Gaza":{"data":" >#&y0=geCs:;{BE*w;{BE*w;Z2E6L;Z2E!o9omE6L;>TE>L=c:C>L=c:C>L=.TEwu?:w?wu?*o?wu?*o?wu?*o?wu?:w?NT=R2C2o=6T?B*?_]AJw;R:CFT;Z2E:w;g&g7B,_/o_@;*<i-ouIFT?Z2AF]?Z*AZBEFD;ZBEVD;>eEc!;>eEc!;>eER!;a%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+AV%Ay\'Aw5\u001e9n) w\'\u001e5n 1"}
,"Makassar":{"data":" #PPNC+F#+F#n"},"Ulaanbaatar":{"data":" h_m4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?:Zo#c2;*o?wu?*o?wu?:w?wu?*o?wu?*o?wu?:{*-Vu?Zw?Vu?X#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#+F#N#F#n"},"Vladivostok":{"data":" |om4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%g#w#g#V#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#7g#g#g#V#c#g#/w#g#n"}
,"Tashkent":{"data":" )Ro4=wm?.LAg@b7&#6#&#r7&#&#&#rn"},"Beirut":{"data":" KRo8=c2C>T=c2C>T=s:C6L;s2?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?*o?o}E|AQAQAQAQAQAQAQAQAQAQA+ArAy\'Aw\'\u001e=n 1w5\u001e=n  "},"Qyzylorda":{"data":" [co4=wm?.LA&Pv*2Mwm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;VTX5@#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r7rrr&#*#rn"},"Phnom_Penh":{"data":" #D(DDO+6#+6#n"},"Hong_Kong":{"data":" #_m&/+F#+F#n"},"Kabul":{"data":" #eR!E+j+jn"},"Riyadh":{"data":" #mqsc5+Q+Qn"},"Ashgabat":
{"data":" +co4=wm?.LAg@bgL3;r&#rbr;rrrbrn"},"Chita":{"data":" !#!o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%c>!#(%V#g#V#F#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#F#V#7V#V#V#F#c#V#3g#F#V#n"},"Aqtau":{"data":" ^co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?*o?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;D#r&#rbr&#r&#r&#brbrbrbrbrbrbrbrbrbr7rrrb9r+bnbn"},"Tokyo":{"data":" #u{2;+V#+V#n"}
,"Baku":{"data":" |so4=wm?.LAg@bwm?&(s%kBEs:;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;kBE$%brbQbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrb;bbbQQg#bn"},"Kathmandu":{"data":" #F8R7+&^+&^n"},"Novosibirsk":{"data":" $#Bo4=wm?.LAg@bgL3:_+wm?wm?ND)sg5wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%6,8#,%6#F#6#&#6#F#6#F#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#76#6#6#&#16#+&#R#&#36#&#6#n"}
,"Aqtobe":{"data":" `co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!GH#r&#rbr&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r7rrrb2#rn"},"Kamchatka":{"data":" xNm4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9y#*%:%*%w#*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%w#*%7*%*%*%w#Z#*%/w#*%n"},"Istanbul":{"data":" 2#&q4=wm?.LAwm?wm?wm?wm?wm?wm?c2?.LAwm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G2_9!!G&<;kBE&<;kBE&<;!!G!g9ouEo]9!!G&<;kBE6D;Z:E&<;6]GZ!9H%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A>%An"}
,"Nicosia":{"data":" Ico4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?>DE&<;xAQAQAQAQAQAQAQAQAQAQ+AnAy\'Au\'\u001e=n)1u5\u001e=n) "},"Pontianak":{"data":" #wL{9+6#+6#n"},"Qostanay":{"data":" ^co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;D#r&#rbr&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#7rrrb.#rn"},"Jerusalem":{"data":" (#&y0=geCs:;{BE*w;{BE*w;Z2E6L;Z2E!o9omE6L;2wA:*Ak2AsB?{:A_e={2Es:;F]GB2?Z*A>T=k2ANeABw={JA{:A>T=k*AB2C_T={JA&<?B*?oeA_mABw=:*Ag]?_e=B!C.TA&<?Ve?*o?o}E4%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+A*%Ay\'Aw\'O5y11w5\u001e=n1 "}
,"Barnaul":{"data":" $#Bo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?c!+_,5.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#,%6#F#6#&#6#F#6#F#6#F#6#F#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#76#6#6#&#A6#+&#B#&#36#&#6#n"},"Kuala_Lumpur":{"data":" #{_]1+F#+F#n"},"Kolkata":{"data":" #8PJC+z+zn"},"Hanoi":{"data":" #<R}5+6#+6#n"},"Novokuznetsk":{"data":" xBo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9y#6#F#6#&#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#&#6#76#6#6#&#Z#6#/&#6#n"}
,"Kuching":{"data":" #HPPC+F#+F#n"},"Bahrain":{"data":" #c!g#+Q+Qn"},"Bangkok":{"data":" #D(DDO+6#+6#n"},"Srednekolymsk":{"data":" |_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#7w#w#w#g#c#w#/*%w#n"},"Karachi":{"data":" /]&0;FXDjgm?Va&)c2;.<=sJCCr&#r&#r&#r+r9rn"},"Aden":{"data":" #mqsc5+Q+Qn"},"Irkutsk":{"data":" |2o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%F#V#F#6#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#7F#F#F#6#c#F#/V#F#n"}
,"Hovd":{"data":" hom4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?:Zo#c2;*o?wu?*o?wu?:w?wu?*o?wu?*o?wu?:{*-Vu?Zw?Vu?X#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#+6#N#6#n"},"Baghdad":{"data":" lso4=wm?.LAJw?*w?*w?*w?wm?*w?wm?*w?wm?*w?*w?*w?wm?*w?wm?*w?wm?*w?*w?*w?wm?*w?wm?*w?wm?*w?*w?*w?wm?*w?wm?*w?wm?*w?a#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQ+QV#Qn"},"Samarkand":{"data":" +co4=wm?.LAwm?wm?;r&#r&#r+r1rn"},"Thimphu":{"data":" #B.k9+&#+&#n"},"Dhaka":{"data":" \'m&0;k>Vt2,*73&#6#&#3&#&#&#n"}
,"Yerevan":{"data":" tso4=wm?.LAg@bwm?wm?wm?wm?wm?wm?wm?w}H#kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Gq#brbQbQbQbQbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrb3bbbAQ+b:#bn"},"Muscat":{"data":" #HJgNO+b+bn"},"Dili":{"data":" %swT)k.TC/F#V#/F#V#n"},"Singapore":{"data":" #{_]1+F#+F#n"},"Damascus":{"data":" !#:N6=*o?gm?wu?wu?NTAc:?&<?wu?.DAwu?*o?wu?:w?wu?s2?.TAs2?.TA*o?wu?:w?wu?*o?wu?*o?wu?*o?wu?:w?wu?*o?wu?*o?B*?J!AcJGs*;.]END9>eE*g;w}C*g;w}Cs*;(%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A{#Ay\'Aw\'\u001e5n 1w5\u001e5n  "}
,"Taipei":{"data":" #V}!/+F#+F#n"},"Macau":{"data":" #_m&/+F#+F#n"},"Choibalsan":{"data":" jNm4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?:Zo#c2;*o?wu?*o?wu?:w?wu?*o?wu?*o?wu?JV(#:c!+Vu?Zw?Vu?]#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#F#V#F#V#F#+V#>#V#+F#1F#n"},"Amman":{"data":" (#*V6=J*EV];c2CJ*=R*CR2?*o?wu?*o?.L=s:C>L=sBC>L=c:C>L=c:C>L=BJS&$/*w?*w?wm?*w?*w?wm?*w?.TE&<;VeCJ!=wm?*w?>]Ec*;>]Es2;>]Ec*;>]Ec*;>]Ec*;>]Es2;Bo6#.$1>]E4%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+A*%Ay\'Aw)#5n 1s5\u001e5n  "}
,"Jayapura":{"data":" #uw>)+V#+V#n"},"Oral":{"data":" ^so4=wm?.LAwm?wm?gL3*2Mwm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;D#brbrbrbrbrbrbrbrbrbrbrbrbrbrbr+b1b+r&#bn"},"Manila":{"data":" #B{:-+F#+F#n"},"Dubai":{"data":" #HJgNO+b+bn"},"Yakutsk":{"data":" |!o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%V#g#V#F#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#7V#V#V#F#c#V#/g#V#n"}
,"Seoul":{"data":" #.(R;+V#+V#n"},"Qatar":{"data":" #c!g#+Q+Qn"},"Hebron":{"data":" B#&y0=geCs:;{BE*w;{BE*w;Z2E6L;Z2E!o9omE6L;>TE>L=c:C>L=c:C>L=.TEwu?:w?wu?*o?wu?*o?wu?*o?wu?:w?NT=R2C2o=6T?B*?_]AJw;R:Cwm;*wC:w;wuC*o7o_@;*<i-Ny#N,%FL?FT?Z2AF]?Z*AZBEFD;ZBEVD;>eEc!;>eEc!;>eER!;i%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A_%Ay\'Aw5\u001e9n) w\'\u001e5n 1"},"Bishkek":{"data":" `Ro4=wm?.LARc[6eG>T=R*C>T=R*C>T=R*C>T=R*CR2?Ro?ZBE6<;ZBE6<;o}E!_9o}E!_9o}E6<;ZBE6<;ZBE6<;o}E!_9H#&#6#&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#3&#&#&#6#rn"}
,"Tomsk":{"data":" $#Bo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;_,%VT?&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%N$.#,%6#F#6#&#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#76#6#6#&#z6#+&#f&#36#&#6#n"},"Yekaterinburg":{"data":" |co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%r&#rbr&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r7rrrbc#r/&#rn"}
,"Colombo":{"data":" )eFJCcNJj{:;g(m-7z.#&#z7z.#&#zn"},"Khandyga":{"data":" $#!o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBEVD+V4/!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9>e=s_6%,%V#g#V#F#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#V#7V#V#V#F#*#V#+g#Yg#3w#g#V#n"},"Dushanbe":{"data":" )Ro4=wm?.LA:R^7&#6#&#r7&#&#&#rn"},"Famagusta":{"data":" 8#co4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?>DE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;kBE&<;>$.#o]9!!GT%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+AJ%Ay\'Au\'\u001e=n)1u5\u001e=n) "}
,"Kuwait":{"data":" #mqsc5+Q+Qn"},"Pyongyang":{"data":" \'q<kt:J]Z#.Py#3V#N#V#3V#N#V#n"},"Magadan":{"data":" !#_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%Vq&#(%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%g#w#7w#w#w#g#c#w#3*%g#w#n"},"Tehran":{"data":" 4)ZNe/2oZ/k29*o?*!Awe?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!As{i#*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!"
+"Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!AL1YjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjY+YB1Yy\'Yw\'K n 1w3K n  "},"Sakhalin":{"data":" |_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBEg@b&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#$%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#7w#w#w#g#Mw#+g#.#g#3w#g#w#n"}
,"Urumqi":{"data":" #H_oeG+&#+&#n"},"Shanghai":{"data":" +k24={BEs:;{BEs:;;F#V#F#V#F#+F#1F#n"},"Atyrau":{"data":" [co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE{{bo]9!!Go]9!!G&<;kBE&<;kBE&<;@#r&#rbr&#r&#r&#r&#r&#r&#r&#rbrbrbrbrbr7rrrb^r+bEbn"},"Yangon":{"data":" #DNiC+.#+.#n"},"Almaty":{"data":" `Ro4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!GH#&#6#&#r&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#7&#&#&#r2#&#n"},"Tbilisi":{"data":" [so4=wm?.LAg@bVm?gm?*o?gm?*o?F@bgm?>LAwD,#6<;ZBE6<;o}E!_9o}E!_9o}E6<;ZBE6<;ZBE6<;wT/sg5o]9@#brbQbQbQbrbrbrbrbrbrbrbrbrbQb3bbb9Q+bbb3QQbn"}
,"Anadyr":{"data":" xNm4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9y#*%:%*%w#*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%w#*%7*%*%*%w#Z#*%/w#*%n"},"Vientiane":{"data":" #D(DDO+6#+6#n"},"Krasnoyarsk":{"data":" |Bo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%6#F#6#&#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#76#6#6#&#c#6#/F#6#n"}
,"Brunei":{"data":" #X8_U+F#+F#n"},"Omsk":{"data":" |Ro4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%&#6#&#r&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#7&#&#&#rc#&#/6#&#n"},"Jakarta":{"data":" #Tw>)+6#+6#n"},"Ho_Chi_Minh":{"data":" #RJw\'+6#+6#n"},"Ust-Nera":{"data":" !#_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9>e=s_6%(%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#g#7w#w#w#g#c#w#3*%w#g#n"}
},"Etc":{"UTC":{"data":"#  "},"GMT+9":{"data":"#X#X#"},"GMT-10":{"data":"#g#g#"},"GMT-11":{"data":"#w#w#"},"GMT-7":{"data":"#6#6#"},"GMT+5":{"data":"#tt"},"GMT-8":{"data":"#F#F#"},"GMT+6":{"data":"#(#(#"},"GMT+12":{"data":"#,%,%"},"GMT-9":{"data":"#V#V#"},"GMT+7":{"data":"#8#8#"},"GMT+11":{"data":"#y#y#"},"GMT+8":{"data":"#H#H#"},"GMT+10":{"data":"#i#i#"},"GMT-3":{"data":"#QQ"},"GMT+1":{"data":"#33"},"GMT-4":{"data":"#bb"},"GMT+2":{"data":"#CC"},"GMT-5":{"data":"#rr"},"GMT+3":{"data":"#SS"},"GMT-6":{"data":
"#&#&#"},"GMT+4":{"data":"#dd"},"GMT-1":{"data":"#11"},"GMT-2":{"data":"#AA"},"GMT-12":{"data":"#*%*%"},"GMT-13":{"data":"#:%:%"},"GMT-14":{"data":"#J%J%"},"GMT":{"data":"#  "}},"Pacific":{"Easter":{"data":" <#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/V(Q:V/V(Q:V/NuI6<;]%t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t+(#R%(#y\'(#u)%=y9 u3%=yA1"},"Fiji":
{"data":" CTi2LSZTu}n{*5*2MgL3wX!/{*5kBEFD7J:I*V/g(Q*V/{cQcw-BBS_<-l*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%+*%b*%y\'*%w7#=y11w#;=y9 "},"Port_Moresby":{"data":" #,(&8h+g#+g#n"},"Kiritimati":{"data":" %ZyaV):H00//i#J%/i#J%n"},"Pohnpei":{"data":" #e>XC+w#+w#n"},"Chuuk":{"data":" #e>XC+g#+g#n"},"Kwajalein":{"data":" %yD1_(4C/,%*%/,%*%n"},"Kosrae":{"data":" %yD12g&K/*%w#/*%w#n"},"Auckland":{"data":" nw(8=:w;VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=B*C.LAe#:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%+*%Z#*%y\'*%s3\u001e=n11s)#=y1 "}
,"Efate":{"data":" 1>m4=gm?*o?gm?>LAk*5w(QwT/G*%w#*%w#*%w#*%w#+w#=w#n"},"Niue":{"data":" #_y<-+y#+y#n"},"Majuro":{"data":" #yD1+*%+*%n"},"Guadalcanal":{"data":" #HFLuU+w#+w#n"},"Honolulu":{"data":" #Hu8A+i#+i#n"},"Guam":{"data":" #c_P++g#+g#n"},"Chatham":{"data":" nw(8=:w;VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=B*C.LAe#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#+VJ#Z#VJ#y\'VJ#s3\u001e=n4/1s)#=y4/ "}
,"Midway":{"data":" #D@6eW+y#+y#n"},"Tahiti":{"data":" #i&HuU+i#+i#n"},"Pago_Pago":{"data":" #D@6eW+y#+y#n"},"Galapagos":{"data":" \'6<R768{)*V+3(#t(#3(#(#(#n"},"Funafuti":{"data":" #y.FHb+*%+*%n"},"Marquesas":{"data":" #@.HuU+a#+a#n"},"Rarotonga":{"data":" )&(<=*g5guI*g57a#i#a#i#+i#-i#n"},"Tarawa":{"data":" #q*FHb+*%+*%n"},"Saipan":{"data":" #c_P++g#+g#n"},"Gambier":{"data":" #0D8t+X#+X#n"},"Wallis":{"data":" #X2FHb+*%+*%n"},"Tongatapu":{"data":" 3y&oZ;c8_XWk2=J:Icw-.eQcw-&$]5J_+K:%J%:%J%:%J%:%J%:%+:%A:%n"}
,"Fakaofo":{"data":" %,P@HbgsT..#/y#:%/y#:%n"},"Wake":{"data":" #X&FHb+*%+*%n"},"Enderbury":{"data":" %6($/kc{5/y#:%/y#:%n"},"Pitcairn":{"data":" %Dm@Hb*y{c|/P#H#/P#H#n"},"Apia":{"data":" /LkF=*.gxNDAc2?J*1{_/wm?Cy#i#y#i#J%:%J%+y#-y#3:%:%:%y\':%w)#=yA w3\u001e=n91"},"Noumea":{"data":" \'NDX-{wi9*V/3w#*%w#3w#w#w#n"},"Palau":{"data":" #DmDHb+V#+V#n"},"Nauru":{"data":" #{oT-+*%+*%n"},"Bougainville":{"data":" %8PTCoiy(#/g#w#/g#w#n"},"Norfolk":{"data":" %2*e\'sV6[/!%w#/!%w#n"}},"Europe":{"Saratov":{"data":" z&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%B2P#}#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQbZ#Q3bQbn"}
,"Belgrade":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Gibraltar":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Bucharest":{"data":" C6q4=wm?.LAVm?wm?wm?wm?wm?wm?wm?gm?*o?gm?>LAZBEg<;kBElAQAQAQAQAQAQAQAQA+AbAy\'Au\'\u001e=n)1u5\u001e=n) "},"Dublin":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 +1Y1y\'1u\'\u001e=n) u5\u001e=n)3"},"Zaporozhye":{"data":" =&q4=wm?.LA6@b*o?gm?*o?gm?*o?gm?Zo?wm?.LAkBE`QbQAQAQAQAQAQA3QQQMAy\'Au\'\u001e=n)1u5\u001e=n) "}
,"Kiev":{"data":" =&q4=wm?.41gXrVm?gm?*o?gm?*o?gm?Zo?wm?.LAkBE`QbQAQAQAQAQAQA/QQQAy\'Au\'\u001e=n)1u5\u001e=n) "},"Zurich":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Copenhagen":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Rome":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Zagreb":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Monaco":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Luxembourg":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Jersey":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Istanbul":{"data":" 2#&q4=wm?.LAwm?wm?wm?wm?wm?wm?c2?.LAwm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G2_9!!G&<;kBE&<;kBE&<;!!G!g9ouEo]9!!G&<;kBE6D;Z:E&<;6]GZ!9H%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A>%An"}
,"Ulyanovsk":{"data":" !#&q4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#(%QbQAQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQAc#Q3bQbn"},"Samara":{"data":" v&q4=wm?.LAF8fwu;wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9u#QbQbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbQb3QQQZ#b/Qbn"},"Sarajevo":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Nicosia":{"data":" Ico4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?>DE&<;xAQAQAQAQAQAQAQAQAQAQ+AnAy\'Au\'\u001e=n)1u5\u001e=n) "},"Chisinau":{"data":" E&q4=wm?F,\'2_9wm?wm?Vm?gm?*o?gm?*o?gm?*o?gm?>LAZBEV<;kBEpQbQAQAQAQAQAQAQAQA/QQbAy\'Aw\'\u001e=n11w5\u001e=n9 "},"Vatican":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Brussels":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Oslo":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Warsaw":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Lisbon":{"data":" =Fq4=wm?.LAwm?wm?wm?V@bwm?wm?wm?wm?wm?_Ph&<;` 1 1 1A1A1A1 1+ 5 +151/  y\' u\'\u001e=n)1u5\u001e=n) "},"Berlin":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Simferopol":{"data":" &#&q4={cQs*8#gm?*o?gm?*o?2N%_]9*o?gm?>LA>DEg@b&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBEs:;JBE0%QAQAQAQbQbQbQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAbQ+Q9A+Q5Q+AF#A/bQn"}
,"San_Marino":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Podgorica":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Athens":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"Bratislava":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Stockholm":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Prague":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Uzhgorod":{"data":" ;&q4={cQ:*Qs>bgm?*o?gm?*o?gm?Zo?wm?.LAkBE[Q1AQAQAQAQAQA/Q1MAy\'Au\'\u001e=n)1u5\u001e=n) "},"Budapest":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Astrakhan":{"data":" z&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#}#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQbZ#Q3bQbn"}
,"Madrid":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Vaduz":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"London":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Vilnius":{"data":" K6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBEg@b&<;c&s%kBE|AQAQAQAQAQAQAQAQA1AQA+AbA711AAy\'Au\'\u001e=n)1u5\u001e=n) "},"Isle_of_Man":
{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Sofia":{"data":" C6q4=wm?.LAVm?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAZBEg<;kBElAQAQAQAQAQAQAQAQA+AbAy\'Au\'\u001e=n)1u5\u001e=n) "},"Kirov":{"data":" x&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%y#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQ7QQQbZ#Q/bQn"},"Tallinn":{"data":" O6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;{BE&<;!!G_@e#kBE(#AQAQAQAQAQAQAQAQAQAQAQA+AzAy\'Au\'\u001e=n)1u5\u001e=n) "}
,"Moscow":{"data":" |&q4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%QbQAQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQ7QQQAc#Q/bQn"},"Malta":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Busingen":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Amsterdam":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Andorra":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Riga":{"data":" O6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAwm?*o?kBE&<;kBE&<;!!G.a|!!G(#AQAQAQAQAQAQAQAQAQAQAQA+AzAy\'Au\'\u001e=n)1u5\u001e=n) "},"Vienna":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Helsinki":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"Minsk":
{"data":" t&q4=:!J#wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9q#QAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+Qc#A+Qn"},"Kaliningrad":{"data":" |6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+Ao#A/QAn"},"Skopje":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Mariehamn":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"Ljubljana":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Tirane":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Guernsey":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Volgograd":{"data":" z&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%s&s%}#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQbZ#Q3bQbn"}
,"Paris":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}},"America":{"Belem":{"data":" #*s$;+S+Sn"},"Guayaquil":{"data":" \'H{y>E>k]([*V+3tdt3tttn"},"Argentina/Buenos_Aires":{"data":" 9Fi8=J!9Z:I6D7Z:I6D7Z:IJ!9N<_5N<-2!G_]9WCSCSCSCSCSCS+SMSn"},"Costa_Rica":{"data":" +J2P/FL]/{B=&DCB_);(#t(#t(#+(#1(#n"},"Hermosillo":{"data":" /F#kguEFeCJw;FeCJw;FeCC8#(#8#(#8#(#8#+8#98#n"},"Punta_Arenas":{"data":" 0#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/D%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+d:%dn"}
,"Iqaluit":{"data":" jB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;kBE6<;F@bZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuI]#tdtdtdtdtdtdtdtdtdtd(#tdtdtdtdtdtdtdt+tnt/(#(#Yty\'tw\'1=y11w7#=y1 "},"Godthab":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdSCSCSCSCSCSCSCS+SYSy\'Su\'\u001e=n)1u5\u001e=n) "},"El_Salvador":{"data":" #koN;+(#+(#n"},"Monterrey":{"data":" ?6$V;kg@+FeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd(#t(#t(#t(#t(#t(#t(#t(#+(#Y(#y\'(#w)#=y11w5\u001e=n1 "},"Sao_Paulo":{"data":" >#Fi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1&TKk*5o}M6<3ouI!g5NmMVL3Z:I!g5&TKk*5&TK!g5ouI!g5ouI6D7ouIk*5&TKk*5&TK!g5ouI!g5ouI!g5ouI!g5NmMBo1a%CSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+SV%Sn"}
,"Bahia":{"data":" ^Fi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1cF6-6D7D#CSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+S:#Sn"},"Indiana/Winamac":{"data":" +c{UwiwSVD7>uIBg5;t(#dtd/t(#-ty\'tw\'1=y11w7#=y1 "},"Grenada":{"data":" #aR$2W+d+dn"},"Grand_Turk":{"data":" 2#B&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5NuIBg5NuIBg5NuIBg5NuIBg5ZZZ%Bg5H%tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtd+t>%ty\'tw\'1=y11w7#=y1 "}
,"Montserrat":{"data":" #aR$2W+d+dn"},"Panama":{"data":" #qVL}Y+t+tn"},"Guadeloupe":{"data":" #aR$2W+d+dn"},"Guatemala":{"data":" +Rks3koD+>T=c_R5s:;;(#t(#t(#+(#1(#n"},"Guyana":{"data":" %JDTZ%Rus6//Sd/Sdn"},"Swift_Current":{"data":" #F0a#+(#+(#n"},"Puerto_Rico":{"data":" #qmLC+d+dn"},"Moncton":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCgJ(3ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEBaH/NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "},"Danmarkshavn":{"data":" =Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?o<1`SCSCSCSCSCSCS +SQS+ n"}
,"Nome":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Porto_Velho":{"data":" #:s$;+d+dn"},"Cuiaba":{"data":" :#Vi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1.$6#6<3ouI!g5NmMVL3Z:I!g5&TKk*5&TK!g5ouI!g5ouI6D7ouIk*5&TKk*5&TK!g5ouI!g5ouI!g5ouI!g5NmMBo1X%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dN%dn"}
,"Pangnirtung":{"data":" h2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBEg@bJw;FeCJw;FeCJw;FeCJw;kBE6<;F@bZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#dSdSdSdSdSdtdtdtdtd(#tdtdtdtdtdtdtdt+dId+t=t/(#(#Yty\'tw\'1=y11w7#=y1 "},"Kralendijk":{"data":" #m_X\'+d+dn"},"Indiana/Vincennes":{"data":" +c{UwiwSVD7F@bNuI;t(#tdt;t(#(#tty\'tw\'1=y11w7#=y1 "},"Indiana/Indianapolis":{"data":" +c{UFePSZBEVD7NuI;tdtdt+t1ty\'tw\'1=y11w7#=y1 "},"Belize":{"data":" #w]J3+(#+(#n"},"Indiana/Marengo":{"data":" +Jg2)_yuKZBEVD7NuI;tdtdt+t1ty\'tw\'1=y11w7#=y1 "}
,"Anguilla":{"data":" #aR$2W+d+dn"},"Argentina/Ushuaia":{"data":" 9Fi8=J!9Z:I6D7Z:I6D7Z:IJ!9oP(1*6#*2R%N<-WCSCSCSCSdSCS+S=S+d-Sn"},"Santiago":{"data":" <#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/V(Q:V/V(Q:V/NuI6<;]%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+dR%dy\'du)%=y9 u3%=yA1"},"Argentina/Catamarca":{"data":" 9Fi8=J!9Z:I6D7k:I&D7Z:IJ!92c(1g$#*2R%N<-WCSCdCSCSdSCS7SSSd1S+d-Sn"}
,"Boise":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "},"Creston":{"data":" #@T0l+8#+8#n"},"Miquelon":{"data":" l!&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#SCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+SV#Sy\'Sw\'1=y11w7#=y1 "},"Jamaica":{"data":" #>8{3+t+tn"},"Rankin_Inlet":
{"data":" hR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;wD,#Jw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#N#(#y\'(#w\'1=y11w7#=y1 "},"Toronto":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Eirunepe":{"data":" +Js$;!{()!g5FX>5oXq\';tdtdt;tttdtn"},"Dawson":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "}
,"Argentina/Mendoza":{"data":" 9Fi8=J!9geGwe7*!I*o7Z:I:!9Zs&1Bg5&<@%N<-WCdSdSdCSdSCS+S5d3SSd-Sn"},"Nassau":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Vancouver":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "}
,"Noronha":{"data":" 16i8=k*5kkw-_]9F]Ge%g@b!g5G3C3C3C3C+C=Cn"},"Argentina/Cordoba":{"data":" 9Fi8=J!9Z:I6D7k:I&D7Z:IJ!9N<_5N<-2!G_]9WCSCdCSCSCSCS7SSSdASn"},"Argentina/La_Rioja":{"data":" ;Fi8=J!9Z:Is27:F+{B=6D7Z:IJ!92c(1g$#*2R%N<-[CSCdSCSCSdSCS7SSSd5S+d-Sn"},"Regina":{"data":" #y(}-+(#+(#n"},"St_Vincent":{"data":" #aR$2W+d+dn"},"Scoresbysund":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd3 3 3 3 3 3 3 3+3Y3y\'3u\'\u001e=n)1u5\u001e=n) "},"Aruba":{"data":" #m_X\'+d+dn"},"North_Dakota/Center":{"data"
:" jc&<=6<;ZBEJw;FeCJw;F@bZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuI]#8#(#8#(#8#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+8#58#+(#:#(#y\'(#w\'1=y11w7#=y1 "},"Thule":{"data":" hDXm*S>NR(hgm?*o?gm?>LAZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dN#dy\'dw\'1=y11w7#=y1 "},"Argentina/San_Juan":{"data":" ;Fi8=J!9Z:Is27:F+{B=6D7Z:IJ!9!Z(1!>)!!L%N<-[CSCdSCSCSdSCS7SSSd5S+d-Sn"},"Rio_Branco":
{"data":" \'Js$;s__=oXq\'3tdt3tdtn"},"Los_Angeles":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "},"St_Thomas":{"data":" #aR$2W+d+dn"},"Cancun":{"data":" tguZ1*s:5FeCJw;FeCJw;k*5&y-Jw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCN41q#tdtdtdt(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t+t5t+(#J#(#+tn"}
,"Maceio":{"data":" 5Fi8=k*5k>()k*5g}X%_]9F]GRURc`!g5OCSCSCSCSCS+SESn"},"Sitka":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Denver":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "}
,"Cayman":{"data":" #qVL}Y+t+tn"},"Thunder_Bay":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Nipigon":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Havana":{"data":" zB.8=s2?2*Cs2?.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?wm?.LANT=kBE&<;!!G&<;kBE&<;kBE:w;VeC:w;VeC&<;Z&q#FD7J:IZ!96]GFD7J:IZ!9J:IZ!9_uIZ!9!!G2g5}#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtd+ts#ty\'ts7#=y  s\'1=y 1"}
,"Campo_Grande":{"data":" >#Vi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1&TKk*5o}M6<3ouI!g5NmMVL3Z:I!g5&TKk*5&TK!g5ouI!g5ouI6D7ouIk*5&TKk*5&TK!g5ouI!g5ouI!g5ouI!g5NmMBo1a%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV%dn"},"Cambridge_Bay":{"data":" hc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;F@bN}Esc`Jw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#t(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#n8#/(#(#U8#y\'8#w\'1=y11w7#=y1 "}
,"Fortaleza":{"data":" 1Fi8=k*5kkw-_]9F]GRURc`!g5GCSCSCSCS+S=Sn"},"Managua":{"data":" 3J:T/{.<1oPO_<12sq%oHy+R2?>DEc:;K(#t(#t(#t(#t(#7(#t(#t5(#n"},"Menominee":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"Halifax":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "}
,"Ojinaga":{"data":" ^u.4Wsw*!#FeCJw;FeCg@bJw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCk!9NuID#(#t(#t(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+(#1(#+8#&#8#y\'8#w\'1=y11w7#=y1 "},"Glace_Bay":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "},"Lower_Princes":{"data":" #m_X\'+d+dn"},"Argentina/Tucuman":{"data":" =Fi8=J!9Z:I6D7k:I&D7Z:IJ!92c(1RE>mR%N<-2!G_]9`CSCdCSCSdSCSCS7SSSd1S+d5Sn"}
,"Indiana/Petersburg":{"data":" +g<:+sJ8KVD7F@bNuI;t(#tdt;(#(#(#tty\'tw\'1=y11w7#=y1 "},"Yakutat":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Detroit":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "}
,"Merida":{"data":" ?F,>3Z_X3FeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd(#t(#t(#t(#t(#t(#t(#t(#+(#Y(#y\'(#w)#=y11w5\u001e=n1 "},"Bahia_Banderas":{"data":" bF#kguEFeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;JBE6<;L#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#t(#t+8#6#8#3(#(#(#y\'(#w)#=y11w5\u001e=n1 "},"Matamoros":{"data":" `6$V;kg@+FeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCk!9NuIH#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#>#(#y\'(#w\'1=y11w7#=y1 "}
,"Indiana/Vevay":{"data":" +R_$%V$(QZBEVD7NuI;tdtdt+t1ty\'tw\'1=y11w7#=y1 "},"St_Barthelemy":{"data":" #aR$2W+d+dn"},"Argentina/San_Luis":{"data":" ;Fi8=2w9!oEwe7J_/o,B3!>)!!L%w<#k_\'2!G_]92!G[CdSdSdSCSdSdS+S-d7SdSS1d+Sn"},"Indiana/Tell_City":{"data":" )c{UwiwSVD7NuI7t(#t(#+t-(#y\'(#w\'1=y11w7#=y1 "},"Boa_Vista":{"data":" +:s$;ZND1_]9F]Ge%;dSdSd+d1dn"},"Metlakatla":{"data":" 5o8{3N$&OVD7NuIBg5NuIBg5ssW{g\'NuIOH#X#H#X#H#X#H#X#H#X#+H#EX#y\'X#w\'1=y11w7#=y1 "},"Tortola":{"data":" #aR$2W+d+dn"},"Argentina/Jujuy":
{"data":" 5Fi8=J!9!wIJ!9geCN]9Z:IJ!9N<_5N<-OCdSdCSCSCS+S-d+S5Sn"},"North_Dakota/New_Salem":{"data":" jc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;F@bZBE6<;ZBE6<;ZBEVD7NuI]#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#t(#t(#t(#t(#+8#2#8#+(#=(#y\'(#w\'1=y11w7#=y1 "},"Inuvik":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "}
,"Port_of_Spain":{"data":" #aR$2W+d+dn"},"Paramaribo":{"data":" #NmZ5+S+Sn"},"New_York":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Manaus":{"data":" \':s$;!{()!g53dSd3dddn"},"Resolute":{"data":" fR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;wD,#Jw;FeCJw;FeCJw;ZBE6<;ZBE6<;.$.#Bg5T#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t+(#J#(#y\'(#w\'1=y11w7#=y1 "}
,"Curacao":{"data":" #m_X\'+d+dn"},"North_Dakota/Beulah":{"data":" zc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7F@bNuI}#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#t(#+8#k#8#/(#(#y\'(#w\'1=y11w7#=y1 "},"Bogota":{"data":" \'m4*uS:,HDjRk[3tdt3tttn"},"Adak":{"data":" l6(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#+i#V#i#y\'i#w\'1=y11w7#=y1 "}
,"Mazatlan":{"data":" ?F#kguEFeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#Y8#y\'8#w)#=y11w5\u001e=n1 "},"Caracas":{"data":" \'m_X\'!:w^NP$-3dld3dldn"},"St_Kitts":{"data":" #aR$2W+d+dn"},"Argentina/Salta":{"data":" 5Fi8=J!9Z:I6D7k:I&D7Z:IJ!9N<_5N<-OCSCdCSCSCS7SSSd9Sn"},"Mexico_City":{"data":" ?(i};&TubFeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd(#t(#t(#t(#t(#t(#t(#t(#+(#Y(#y\'(#w)#=y11w5\u001e=n1 "},"Edmonton":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "}
,"Kentucky/Louisville":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Araguaina":{"data":" IFi8=k*5k>()k*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo16({-k*5xCSCSCSCSCSCSCSCSCSCS+SnSn"},"Santo_Domingo":{"data":" \'{cL\'J6eEBN%3dtd3dtdn"},"Indiana/Knox":{"data":" /R&<=6<;ZBEJw;Z&47VD7NuIC(#t(#t(#t(#+(#9(#y\'(#w\'1=y11w7#=y1 "},"Whitehorse":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "}
,"Yellowknife":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "},"Kentucky/Monticello":{"data":" jR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;F@bZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuI]#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#tdtdtdtdtdtdtdt+(#v(#+tUty\'tw\'1=y11w7#=y1 "},"Asuncion":{"data":" &#kF:=*w;:w?gm?.DA_]9B*GsB?J!A!o9!wEoe92!GR*;R2GJ!9F]G_]92!Gs:;{BEs:;{BEs:;2!Ggm?!_9o}E6<;ZBER*C_]92!G_]92!G_]9F]GJ!9F]GJ!9F]GR2?s2?{JAs2?{JA*o?>T=0%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+d&%dy\'dw5#=y 1w\'M=y  "}
,"Santarem":{"data":" %:s$;s__=/dS/dSn"},"Antigua":{"data":" #aR$2W+d+dn"},"Winnipeg":{"data":" lc&<=&<;kBE:w;VeC:w;VeC:w;kBE&<;kBE&<;kBE:w;VeC:w;VeC:w;VeC:w;kBE&<;kBE&<;kBE:w;VeC:w;VeC:w;kBE&<;kBE&<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"Recife":{"data":" 1Fi8=k*5kkw-_]9F]Ge%g@b!g5GCSCSCSCS+S=Sn"},"Lima":{"data":" +2VH9FX{#gL/sca%gL/;tdtdt+t1tn"},"Phoenix":{"data":" #u*V#+8#+8#n"},"Martinique":{"data":" #k{e/+d+dn"},"St_Johns":{"data":" !#>.P>36<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5g:];Bg5(%[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K+[{#[y\'[w\'1=y11w7#=y1 "}
,"Goose_Bay":{"data":" !#w2P>36<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5g:];Bg5(%dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+d{#dy\'dw\'1=y11w7#=y1 "},"Montevideo":{"data":" ^o$<=k*5ouI6D7ouI!g5Z:I6D7R>>1>LAR*Cs:;geC*w;{BEs:;{BEs:;{BE*w;geC*w;geC*w;{BEs:;{BEs:;{BEs:;D#CSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+S:#Sn"},"St_Lucia":{"data":" #aR$2W+d+dn"},"Chicago":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "}
,"Chihuahua":{"data":" =u.4Wsw*!#FeCJw;FeCg@bJw;ZBE6<;ZBE>LA_]9>LAFeC`(#t(#t(#8#(#8#(#8#(#8#(#8#+(#1(#+8#A8#y\'8#w)#=y11w5\u001e=n1 "},"La_Paz":{"data":" #LmZgC+d+dn"},"Blanc-Sablon":{"data":" #qmLC+d+dn"},"Tijuana":{"data":" xs&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCk!9NuIy#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#o#H#y\'H#w\'1=y11w7#=y1 "},"Barbados":{"data":" #Zce/+d+dn"},"Anchorage":
{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Rainy_River":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"Port-au-Prince":{"data":" `B&<=&<;kBE:w;VeC:w;VeC:w;kBE&<;kBE&<;kBE:w;VeC:w;VeCJg@+ZBE6<;ZBE_0q\'NuIBg5NuIBg5NuIBg5NuIsFzNuIH#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+t>#ty\'tw\'1=y11w7#=y1 "}
,"Tegucigalpa":{"data":" \'koN;6$a964/3(#t(#3(#(#(#n"},"Cayenne":{"data":" #L_Z#+S+Sn"},"Marigot":{"data":" #aR$2W+d+dn"},"Juneau":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Atikokan":{"data":" #HX(K+t+(#n"},"Argentina/Rio_Gallegos":{"data":" 9Fi8=J!9Z:I6D7Z:I6D7Z:IJ!92c(1g$#*2R%N<-WCSCSCSCSdSCS+S=S+d-Sn"},"Dawson_Creek":{"data"
:" #V0a#+8#+H#n"},"Dominica":{"data":" #aR$2W+d+dn"},"Fort_Nelson":{"data":" .#s&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5NuIBg5NuIBg5NuIBg5NuIBg5@%H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#+H#2%H#+8#n"}},"Africa":{"Tunis":{"data":" 7&q4=B2Gc*;c_N5s*;6D?!!Go]9!!G&<;kBES1A1A1A1A1A1+1I1n"},"Maputo":{"data":" #L<aF`+A+An"},"Casablanca":{"data":" s\'2:R7:2.A*_/w(Q2_-ZBM.41ouIk*5:*QRg-_,%F$\'kBEJ_+2F%oD-&<;wL/BN%&$/&<;_<-BN%>41&<;J_+BN%gL3o]9!F)V,\'{*5o]9kg\'BN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RY"
+"BN%&uWV,\'&uWBN%:RYBN%&uWBN%m/ 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1+ R# +1.-1n"},"Johannesburg":{"data":" #<_VE+A+An"},"Addis_Ababa":{"data":" #L42c)+Q+Qn"},"Lagos":{"data":" #q.{]O+1+1n"},"Accra":{"data":" #q:_a9+ + n"},"Nairobi":{"data":" #L42c)+Q+Qn"},"Brazzaville":{"data":" #q.{]O+1+1n"},"Lubumbashi":{"data":" #L<aF`+A+An"},"Banjul":{"data":" #y!_8W+ + n"},"Porto-Novo":
{"data":" #q.{]O+1+1n"},"Lusaka":{"data":" #L<aF`+A+An"},"Kigali":{"data":" #L<aF`+A+An"},"Ouagadougou":{"data":" #y!_8W+ + n"},"Freetown":{"data":" #y!_8W+ + n"},"Ndjamena":{"data":" #JJ@/+1+1n"},"Conakry":{"data":" #y!_8W+ + n"},"Niamey":{"data":" #q.{]O+1+1n"},"Maseru":{"data":" #<_VE+A+An"},"El_Aaiun":{"data":" s\'F]2-&mLK*_/w(Q2_-ZBM.41ouIk*5:*QRg-_,%F$\'kBEJ_+2F%oD-&<;wL/BN%&$/&<;_<-BN%>41&<;J_+BN%gL3o]9!F)V,\'{*5o]9kg\'BN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RY"
+"BN%&uWV,\'&uWBN%:RYBN%&uWBN%m/ 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1+ R# +1.-1n"},"Sao_Tome":{"data":" \'D:ktoDB_#gHb3 1 3 1 n"},"Ceuta":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Khartoum":{"data":" \':2D7g]85J&m93AQA3AQAn"},"Algiers":{"data":" #_L01+1+1n"},"Bujumbura":{"data":" #L<aF`+A+An"},"Bangui":
{"data":" #q.{]O+1+1n"},"Gaborone":{"data":" #L<aF`+A+An"},"Juba":{"data":" %:2D7g]85/AQ/AQn"},"Windhoek":{"data":" (#Xa<GgTejoL=ZBE6<;o}E!_9o}E6<;ZBE6<;ZBE6<;ZBE6<;ZBE6<;o}E!_9o}E6<;ZBE6<;ZBE6<;ZBE6<;ZBE6<;o}E6<;ZBE6<;ZBE6<;ZBE6<;ZBE6<;o}E!_9o}E6<;ZBE6<;ZBE6<;ZBE6<;4%A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A+A*%An"},"Dar_es_Salaam":{"data":" #L42c)+Q+Qn"},"Harare":{"data":" #L<aF`+A+An"},"Tripoli":{"data":" -*N6=omE6eX)k2AVH67gT7?1A1A1A/1A11n"},"Malabo":{"data":" #q.{]O+1+1n"},"Libreville":{"data":
" #q.{]O+1+1n"},"Abidjan":{"data":" #y!_8W+ + n"},"Luanda":{"data":" #q.{]O+1+1n"},"Lome":{"data":" #y!_8W+ + n"},"Nouakchott":{"data":" #y!_8W+ + n"},"Bissau":{"data":" #gaX\'+ + n"},"Asmara":{"data":" #L42c)+Q+Qn"},"Kinshasa":{"data":" #q.{]O+1+1n"},"Mogadishu":{"data":" #L42c)+Q+Qn"},"Djibouti":{"data":" #L42c)+Q+Qn"},"Douala":{"data":" #q.{]O+1+1n"},"Kampala":{"data":" #L42c)+Q+Qn"},"Dakar":{"data":" #y!_8W+ + n"},"Cairo":{"data":" (#JN6={RE&4;{RE&4;.]E&4;{RE&4;{RE&4;VuCs:;>TEs:;.LEs:;.LEs:;.LEs:;>TEs:;.LEs:;.LEs:;.LEs:;>TEs:;.LEs:;.LEB!;_eE&<7.TI_T5B2Kk*56]K&43_$%c^VuX%F,\'RN%_<)4%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+A*%An"}
,"Blantyre":{"data":" #L<aF`+A+An"},"Monrovia":{"data":" #sTTx+ + n"},"Mbabane":{"data":" #<_VE+A+An"},"Bamako":{"data":" #y!_8W+ + n"}},"Indian":{"Reunion":{"data":" #0!@RW+b+bn"},"Maldives":{"data":" #aJ2c)+r+rn"},"Christmas":{"data":" #yB44h+6#+6#n"},"Chagos":{"data":" %P2eX[_.4mt/r&#/r&#n"},"Antananarivo":{"data":" #L42c)+Q+Qn"},"Mahe":{"data":" #,XDs[+b+bn"},"Mayotte":{"data":" #L42c)+Q+Qn"},"Kerguelen":{"data":" #LoF=+r+rn"},"Mauritius":{"data":" \'Z{P3&mHEs:;3brb3bbbn"},"Comoro":{"data":" #L42c)+Q+Qn"}
,"Cocos":{"data":" #a*}sb+.#+.#n"}},"Antarctica":{"Macquarie":{"data":" tw}:=Z!96]G&<;.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?.LAc2?.LAc2?.LAc2?.LAc2?&<;kBEB*Cc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?c2?B*Cwm?wm?wm?wm?q#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#+g#g#g#n"},"Palmer":{"data":" 0#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/D%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+d:%dn"}
,"Troll":{"data":" \'ZeR4o12(]g23!!G3 A 3   y\' u\'\u001e=n)Au5\u001e=n) "},"Casey":{"data":" /P,dR:D[gm7Ny0#Jw3Jw@\':.|CF#w#F#w#F#w#F#CF#w#F#w#F#w#F#n"},"Vostok":{"data":" #(0a1+&#+&#n"},"Syowa":{"data":" #u:>3+Q+Qn"},"DumontDUrville":{"data":" #DBN3+g#+g#n"},"McMurdo":{"data":" nw(8=:w;VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=B*C.LAe#:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%+*%Z#*%y\'*%s3\u001e=n11s)#=y1 "},"Mawson":
{"data":" %uBJ7:R*r/&#r/&#rn"},"Davis":{"data":" +,>^>L>[ND9gD0#kw3;6#r6#r6#;6#r6#r6#n"},"Rothera":{"data":" #>4})+S+Sn"}},"Australia":{"Broken_Hill":{"data":" p!!<=2g5_uI2g5_uI2g5_uIFD7_uI2g5_uI2g5_uI&<;kBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#+_#_#_#y\'_#s)#=y1 s5#=y11"},"Darwin":{"data":" #D&VE+_#+_#n"},"Brisbane":{"data":" -w}:=2g5_uI2g5_uI2g5?w#g#w#g#w#g#+g#5g#n"},"Currie":{"data":" nw}:=Z!96]G&<;.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?.LAc2?.LAc2?.LAc2?.LAc2?&<;kBEB*Cc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?c2?B*Cwm?e#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#+g#Z#g#y\'g#s5#=y11s)#=y1 "}
,"Lord_Howe":{"data":" po}:=*g5guI*g5guI*g5guI>D7guI*g5guI*g5guI{:;sBE{:;sBE{:;sBE{:;*!Gg]9.<;cBE*!G{:;sBE{:;sBE{:;*!Gg]9*!G{:;sBEg]9*!G2w;!o?i#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#+o#_#o#y\'o#w)#=y1 w5#=y1)"},"Lindeman":{"data":" 5w}:=2g5_uI2g5_uI2g5_uIFD7_uI2g5Ow#g#w#g#w#g#w#g#w#g#+g#Eg#n"},"Perth":{"data":" 3.]45_]R+Ro1_DZ5gL3!!G&<;kBE&<;KF#V#F#V#F#V#F#V#F#+F#AF#n"},"Adelaide":{"data":" p!!<=Z!96]G2g5_uIo]9!!GFD7_uIZ!96]Go]9!!G&<;kBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#+_#_#_#y\'_#s)#=y1 s5#=y11"}
,"Eucla":{"data":" 3&w:_-_]R+Ro1_DZ5gL3!!G&<;kBE&<;Kc|w*#c|w*#c|w*#c|w*#c|+c|Ac|n"},"Sydney":{"data":" pw}:=2g5_uI2g5_uI2g5_uIFD7_uI2g5_uI2g5_uI&<;kBE&<;kBE&<;kBE&<;!!Go]9&<;kBE!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#+g#_#g#y\'g#s)#=y1 s5#=y11"},"Melbourne":{"data":" pw}:=Z!96]G2g5_uI2g5_uIFD7_uI2g5_uIo]9!!G&<;kBE&<;kBE&<;kBE&<;!!Go]9&<;kBE!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#+g#_#g#y\'g#s)#=y1 s5#=y11"}
,"Hobart":{"data":" nw}:=Z!96]G&<;.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?.LAc2?.LAc2?.LAc2?.LAc2?&<;kBEB*Cc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?c2?B*Cwm?e#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#+g#Z#g#y\'g#s5#=y11s)#=y1 "}},"Arctic":{"Longyearbyen":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}},"Atlantic":{"St_Helena":{"data":" #y!_8W+ + n"},"Reykjavik":{"data":" #yP8#+ + n"},"Stanley":{"data":" xNX2=&]Gk!9&]G!_9o}E!_9o}E!_9o}E!_9o}E!_9&]G!_9o}E!_9o}E!_9o}E!_9o}E!_92!Gk!9::IVD7::Ik!9&]Gk!9&]Gk!9&]Gk!9&]Gk!9::Ik!9&]Gk!9&]Gk!9y#SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+dk#d+Sn"}
,"Faroe":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Madeira":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Canary":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Bermuda":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "}
,"Azores":{"data":" ;Vq4=wm?.LAwm?wm?wm?&q&#wm?wm?wm?wm?.LAkBE[3 3 3 3 3 3 3+3Q3y\'3u\'\u001e=n)1u5\u001e=n) "},"South_Georgia":{"data":" #0:(Xl+C+Cn"},"Cape_Verde":{"data":" #>L8)+3+3n"}}};}
function AEf(){var a=this;I8.call(a);a.sL=null;a.oG=0;a.Fr=0;}
function YU(a){var b=new AEf();A1v(b,a);return b;}
function A1v(a,b){a.HO=b.s0;a.sL=b;a.oG=b.k_(CF());a.Fr= -a.oG;}
function ALG(a,b){return (a.oG+a.Fr|0)+a.sL.hc(b)|0;}
function IX(a){var b,$$je;a:{try{b=AD0(a);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ns){}else{throw $$e;}}b=null;}b=b;b.oG=a.oG;b.sL=a.sL;return b;}
function AP_(a){return IX(a);}
function PN(){C.call(this);this.s0=null;}
function APw(a){return a.s0;}
function EB(){PN.call(this);}
function Bf7(a){var b=new EB();Jx(b,a);return b;}
function Jx(a,b){var c;if(b!==null){a.s0=b;return;}c=new BB;Bb(c,B(311));J(c);}
function GJ(b){var c,d;c=Long_fromInt(HS(b));d=Long_div(c,Long_fromInt(2));if(Long_ne(Long_rem(c,Long_fromInt(2)),Long_ZERO))d=Long_neg(d);if(Long_ne(Long_and(d,Long_fromInt(1)),Long_ZERO))return Long_mul(Long_shr(d,1),Long_fromInt(60000));return Long_mul(Long_shr(d,1),Long_fromInt(1800000));}
function ABr(b,c){var d,e,f,g,h,i;d=0;while(true){e=c.data;if(d>=e.length)break;f=L_(b);if(f<0){g=f^(-1);while(true){h=g+(-1)|0;if(g<=0)break;i=d+1|0;e[d]=GJ(b).lo;g=h;d=i;}}else{h=GJ(b).lo;while(true){i=f+(-1)|0;if(f<=0)break;g=d+1|0;e[d]=h;f=i;d=g;}}}}
function AC7(){var a=this;EB.call(a);a.Ch=0;a.zK=0;}
function ANW(a,b,c){var d=new AC7();AUf(d,a,b,c);return d;}
function AUf(a,b,c,d){Jx(a,b);a.Ch=c;a.zK=d;}
function A0j(a,b){return a.Ch;}
function AVT(a,b){return a.zK;}
function ASe(a,b){return b;}
function PC(){FB.call(this);}
function VE(a,b){if(AC4(a,b))return 1;b=new DF;Z(b);J(b);}
function AED(a){var b;if(!Ko(a))return AEs(a);b=new Jl;Z(b);J(b);}
function AOx(){var a=this;PC.call(a);a.dW=null;a.rO=null;a.IY=null;a.hq=0;a.rG=0;}
function A9s(a,b){var c=new AOx();AU1(c,a,b);return c;}
function AU1(a,b,c){if(b<1){c=new BB;Z(c);J(c);}a.dW=H(C,b);a.IY=c;if(c===null){c=new RN;c.Ks=a;}a.rO=c;}
function AC4(a,b){var c,d;if(b===null){b=new Eg;Z(b);J(b);}c=a.hq+1|0;if(a.dW.data.length<c){c=Df(c,(a.dW.data.length*3|0)/2|0);a.dW=Ea(a.dW,c);}c=a.hq;while(c>0){d=(c-1|0)/2|0;if(a.rO.iL(b,a.dW.data[d])>=0)break;a.dW.data[c]=a.dW.data[d];c=d;}a.dW.data[c]=b;a.hq=a.hq+1|0;a.rG=a.rG+1|0;return 1;}
function AEs(a){var b,c,d,e,f,g;if(!a.hq)return null;b=a.dW.data[0];c=0;a.rG=a.rG+1|0;d=a.dW.data[a.hq-1|0];a:{while(true){e=(c*2|0)+1|0;f=e+1|0;if(e>=a.hq)break;if(f<a.hq&&a.rO.iL(a.dW.data[e],a.dW.data[f])>=0)e=f;if(a.rO.iL(d,a.dW.data[e])<=0)break a;a.dW.data[c]=a.dW.data[e];c=e;}}a.dW.data[c]=d;g=a.dW.data;c=a.hq-1|0;a.hq=c;g[c]=null;return b;}
function A3o(a){return a.hq;}
function UN(){C.call(this);}
function AZy(a,b,c){return OS(c,b);}
function AZk(a,b,c){return OS(c,b);}
function Lw(){Fx.call(this);this.ka=Long_ZERO;}
var Bf8=null;function GO(b){var c;c=new Lw;c.ka=b;return c;}
function AOY(a){return a.ka;}
function AO2(a){var b;b=a.ka;return b.lo^b.hi;}
function AVG(a,b){if(a===b)return 1;return b instanceof Lw&&Long_eq(b.ka,a.ka)?1:0;}
function OS(a,b){return Long_compare(a.ka,b.ka);}
function A5a(a,b){return OS(a,b);}
function AJT(){Bf8=D($rt_longcls());}
function Mo(){EB.call(this);this.qY=null;}
function A4H(a,b){return a.qY.hc(b);}
function AZ0(a,b){return a.qY.k_(b);}
function ATr(a,b){return a.qY.kr(b);}
function AKg(){C.call(this);}
function LT(b){return Math.sin(b);}
function Qz(b){return Math.cos(b);}
function Lp(b){return Math.atan(b);}
function AZ7(b){return Math.log(b);}
function Iu(b){return Math.sqrt(b);}
function WV(b){return Math.ceil(b);}
function AY5(b,c){return Math.pow(b,c);}
function GL(b,c){return Math.atan2(b,c);}
function Cc(){return AYJ();}
function AYJ(){return Math.random();}
function B4(b,c){if(b<c)c=b;return c;}
function Df(b,c){if(b>c)c=b;return c;}
function A2Z(b,c){if(b<c)c=b;return c;}
function Nh(b,c){if(b>c)c=b;return c;}
function A62(b,c){if(b<c)c=b;return c;}
function K$(b){if(b<=0)b= -b;return b;}
function I3(b){if(b<=0.0)b= -b;return b;}
function HK(b){if(b<=0.0)b= -b;return b;}
function AWb(b){var c;c=Bw(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function TX(){var a=this;C.call(a);a.jk=null;a.nD=0;}
function Si(){}
function T3(){C.call(this);}
function AE5(a,b){return BV();}
function RN(){C.call(this);this.Ks=null;}
function A8w(a,b,c){if(Jb(b,Dk))return b.kR(c);return  -c.kR(b);}
function AFF(){var a=this;C.call(a);a.ni=null;a.ga=0;}
function AFT(a){var b=new AFF();A1A(b,a);return b;}
function A1A(a,b){a.ni=b;}
function AJV(){C.call(this);}
function HS(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.ni.data;f=b.ga;b.ga=f+1|0;g=ALT(e[f]);f=(g%2|0)!=1?0:1;c=c+K(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function L_(b){var c,d;c=HS(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function ALT(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Wa(){var a=this;EB.call(a);a.mS=null;a.tq=null;a.sQ=null;a.iC=null;}
function AJj(a,b){var c,d;c=a.mS;d=MH(c,b);if(d>=0)return a.tq.data[d];c=c.data;d=d^(-1);if(d<c.length){if(d<=0)return 0;return a.tq.data[d-1|0];}if(a.iC!==null)return ALa(a.iC,b);return a.tq.data[d-1|0];}
function AAE(a,b){var c,d;c=a.mS;d=MH(c,b);if(d>=0)return a.sQ.data[d];c=c.data;d=d^(-1);if(d<c.length){if(d<=0)return 0;return a.sQ.data[d-1|0];}if(a.iC!==null)return a.iC.lH;return a.sQ.data[d-1|0];}
function AFa(a,b){var c,d,e,f;c=a.mS;d=MH(c,b);d=d<0?d^(-1):d+1|0;c=c.data;e=c.length;if(d<e)return c[d];if(a.iC===null)return b;f=c[e-1|0];if(Long_ge(b,f))f=b;return AOf(a.iC,f);}
function AKV(a,b){var c,d,e;c=a.mS;d=MH(c,b);if(d>=0){if(Long_le(b,new Long(0, 2147483648)))return b;return Long_sub(b,Long_fromInt(1));}c=c.data;d=d^(-1);if(d<c.length){if(d>0){e=c[d-1|0];if(Long_gt(e,new Long(0, 2147483648)))return Long_sub(e,Long_fromInt(1));}return b;}if(a.iC!==null){e=ADV(a.iC,b);if(Long_lt(e,b))return e;}e=c[d-1|0];if(Long_le(e,new Long(0, 2147483648)))return b;return Long_sub(e,Long_fromInt(1));}
function ADT(a){var b,c,d,e,f,g;if(a.iC!==null)return 1;b=a.mS.data;c=b.length;if(c<=1)return 0;d=0.0;e=0;f=1;while(f<c){g=Long_sub(b[f],b[f-1|0]);if(Long_lt(g,new Long(3028857856, 14))){d=d+Long_toNumber(g);e=e+1|0;}f=f+1|0;}if(e>0&&d/e/8.64E7>=25.0)return 1;return 0;}
function Qy(){var a=this;EB.call(a);a.lH=0;a.tC=null;a.sS=null;}
function ALa(a,b){var c,d,e,f,g,h,$$je;c=a.lH;d=a.lH;e=a.tC;f=a.sS;a:{b:{try{g=Lx(e,b,d,Hj(f));}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break b;}else if($$je instanceof G1){break b;}else{throw $$e;}}break a;}g=b;}c:{d:{try{h=Lx(f,b,d,Hj(e));}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break d;}else if($$je instanceof G1){break d;}else{throw $$e;}}break c;}h=b;}if(Long_gt(g,h))f=e;return c+f.v7|0;}
function ARH(a,b){return a.lH;}
function AOf(a,b){var c,d,e,f,g,h,$$je;c=a.lH;d=a.tC;e=a.sS;a:{b:{try{c:{try{f=Lx(d,b,c,Hj(e));g=Long_compare(b,Long_ZERO);if(g<=0)break c;if(Long_ge(f,Long_ZERO))break c;f=b;break c;}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break b;}else{throw $$e;}}}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof G1){}else{throw $$e;}}}f=b;}d:{e:{try{f:{try{h=Lx(e,b,c,Hj(d));if(g<=0)break f;if(Long_ge(h,Long_ZERO))break f;h=b;break f;}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break e;}else{throw $$e;}}}break d;}
catch($$e){$$je=Bh($$e);if($$je instanceof G1){}else{throw $$e;}}}h=b;}if(Long_gt(f,h))f=h;return f;}
function ADV(a,b){var c,d,e,f,g,h,i,$$je;c=Long_add(b,Long_fromInt(1));d=a.lH;e=a.tC;f=a.sS;a:{b:{try{c:{try{g=SD(e,c,d,Hj(f));h=Long_compare(c,Long_ZERO);if(h>=0)break c;if(Long_le(g,Long_ZERO))break c;g=c;break c;}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break b;}else{throw $$e;}}}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof G1){}else{throw $$e;}}}g=c;}d:{e:{try{f:{try{i=SD(f,c,d,Hj(e));if(h>=0)break f;if(Long_le(i,Long_ZERO))break f;i=c;break f;}catch($$e){$$je=Bh($$e);if($$je instanceof BB)
{break e;}else{throw $$e;}}}break d;}catch($$e){$$je=Bh($$e);if($$je instanceof G1){}else{throw $$e;}}}i=c;}if(Long_gt(g,i))i=g;return Long_sub(i,Long_fromInt(1));}
function ABh(b,c){var d,e,f;d=GJ(c).lo;e=AGg(c);f=AGg(c);c=new Qy;Jx(c,b);c.lH=d;c.tC=e;c.sS=f;return c;}
function J$(){var a=this;EB.call(a);a.pB=null;a.AO=null;}
var Bf6=0;function A3K(a,b){return ZX(TK(a,b),b);}
function A2_(a,b){return Xa(TK(a,b),b);}
function AZ2(a,b){return AKV(a.pB,b);}
function TK(a,b){var c,d,e,f,g,h,i;c=b.hi;d=a.AO.data;e=c&Bf6;f=d[e];if(!(f!==null&&f.mP.hi==c)){g=Long_and(b,new Long(0, 4294967295));f=A35(a.pB,g);b=Long_or(g,new Long(4294967295, 0));h=f;a:{while(true){i=AFa(a.pB,g);if(Long_eq(i,g))break a;if(Long_gt(i,b))break;h.kN=A35(a.pB,i);h=h.kN;g=i;}}d[e]=f;}return f;}
function AJH(){Bf6=511;}
function Qk(){var a=this;C.call(a);a.wD=null;a.v7=0;}
function Lx(a,b,c,d){return ACy(a.wD,b,c,d);}
function SD(a,b,c,d){return AHL(a.wD,b,c,d);}
function Hj(a){return a.v7;}
function AGg(b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.ni.data;d=b.ga;b.ga=d+1|0;e=c[d];d=HS(b);f=HS(b);g=L_(b);c=b.ni.data;h=b.ga;b.ga=h+1|0;i=c[h]!=121?0:1;j=Long_ZERO;k=Long_fromInt(1);while(true){c=b.ni.data;l=b.ga;b.ga=l+1|0;l=ALT(c[l]);m=(l%2|0)!=1?0:1;j=Long_add(j,Long_mul(k,Long_fromInt(l/2|0)));k=Long_mul(k,Long_fromInt(46));if(!m)break;}h=(Long_ne(Long_and(j,Long_fromInt(1)),Long_ZERO)?Long_mul(Long_shru(j,1),Long_fromInt(60000)):Long_mul(Long_shru(j,1),Long_fromInt(1800000))).lo;n=new Vc;if(e!=117&&e!=119
&&e!=115){n=new BB;b=new R;T(b);b=E(b,B(312));Ce(b,e);Bb(n,S(b));J(n);}n.p$=e;n.py=d;n.tz=f;n.tv=g;n.DH=i;n.yo=h;e=GJ(b).lo;b=new Qk;b.wD=n;b.v7=e;return b;}
function Vc(){var a=this;C.call(a);a.p$=0;a.py=0;a.tz=0;a.tv=0;a.DH=0;a.yo=0;}
function ACy(a,b,c,d){var e,f;if(a.p$==119)c=c+d|0;else if(a.p$!=115)c=0;e=Long_fromInt(c);b=Long_add(b,e);f=AO8(AEI());Od(f,b);CX(f,2,a.py-1|0);CX(f,5,1);CX(f,11,0);CX(f,12,0);CX(f,13,0);CX(f,14,0);ED(f,14,a.yo);MN(a,f);if(a.tv){Kd(a,f);if(Long_le(Gz(f),b)){ED(f,1,1);CX(f,2,a.py-1|0);MN(a,f);Kd(a,f);}}else if(Long_le(Gz(f),b)){ED(f,1,1);MN(a,f);}return Long_sub(Gz(f),e);}
function AHL(a,b,c,d){var e,f;if(a.p$==119)c=c+d|0;else if(a.p$!=115)c=0;e=Long_fromInt(c);b=Long_add(b,e);f=AO8(AEI());Od(f,b);CX(f,2,a.py-1|0);CX(f,5,1);CX(f,11,0);CX(f,12,0);CX(f,13,0);CX(f,14,0);ED(f,14,a.yo);MY(a,f);if(a.tv){Kd(a,f);if(Long_ge(Gz(f),b)){ED(f,1,(-1));CX(f,2,a.py-1|0);MY(a,f);Kd(a,f);}}else if(Long_ge(Gz(f),b)){ED(f,1,(-1));MY(a,f);}return Long_sub(Gz(f),e);}
function MN(a,b){a:{if(Gt(b,2)==1&&Gt(b,5)==29)while(true){if(Ft(b,Gt(b,1)))break a;ED(b,1,1);}}Sc(a,b);}
function MY(a,b){a:{if(Gt(b,2)==1&&Gt(b,5)==29)while(true){if(Ft(b,Gt(b,1)))break a;ED(b,1,(-1));}}Sc(a,b);}
function Sc(a,b){if(a.tz>=0)CX(b,5,a.tz);else{CX(b,5,1);ED(b,2,1);ED(b,5,a.tz);}}
function Kd(a,b){var c,d;c=Gt(b,7);d=(a.tv==7?1:c+1|0)-c|0;if(d){if(!a.DH){if(d>0)d=d+(-7)|0;}else if(d<0)d=d+7|0;ED(b,5,d);}}
function ABI(){C.call(this);}
function OK(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AY0(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=H(VS,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Q(b)){k=OK(P(b,j));if(k==64){j=j+1|0;k=OK(P(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|K(m,OK(P(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=OK(P(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=ASf(i,i+g|0,LV(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=ASf(i,i+g|0,LV(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Ea(c,h);}
function Yx(){var a=this;C.call(a);a.mP=Long_ZERO;a.t$=null;a.kN=null;a.rF=0;a.sO=0;}
function A35(a,b){var c=new Yx();A1C(c,a,b);return c;}
function A1C(a,b,c){a.rF=(-2147483648);a.sO=(-2147483648);a.mP=c;a.t$=b;}
function ZX(a,b){if(a.kN!==null&&Long_ge(b,a.kN.mP))return ZX(a.kN,b);if(a.rF==(-2147483648))a.rF=AJj(a.t$,a.mP);return a.rF;}
function Xa(a,b){if(a.kN!==null&&Long_ge(b,a.kN.mP))return Xa(a.kN,b);if(a.sO==(-2147483648))a.sO=AAE(a.t$,a.mP);return a.sO;}
function HO(){}
function MX(){var a=this;C.call(a);a.io=null;a.fr=null;}
function A1t(a,b){var c,d;if(a===b)return 1;if(!Jb(b,HO))return 0;a:{b:{c:{c=b;if(a.io===null){if(c.nY()!==null)break c;}else if(!a.io.cJ(c.nY()))break c;if(a.fr===null){if(c.mQ()!==null)break c;break b;}if(a.fr.cJ(c.mQ()))break b;}d=0;break a;}d=1;}return d;}
function AS$(a){return a.io;}
function AYA(a){return a.fr;}
function LB(){var a=this;MX.call(a);a.tg=0;a.gh=null;}
function A9R(a,b){var c=new LB();AFf(c,a,b);return c;}
function AFf(a,b,c){var d;d=null;a.io=b;a.fr=d;a.tg=c;}
function Iq(){BD.call(this);}
function Z8(){var a=this;C.call(a);a.Kv=0;a.Kw=0;}
function RR(a){Lu(1);a.Kv=0;a.Kw=0;}
function ALy(a){Jz();JK();Lu(0);}
function M5(){var a=this;C.call(a);a.mR=0;a.mE=0;a.jE=0;a.kc=0;a.fy=0;a.ds=0;a.b4=0;a.k7=0;a.wd=null;a.y2=null;a.vK=null;a.yb=null;a.ur=null;a.gx=null;a.g3=null;a.D4=null;a.g7=null;a.hj=null;a.hb=null;a.gr=null;a.AL=0;a.dH=0;a.cg=0;}
var Bf9=null;var Bf$=null;function A_o(){var a=new M5();AMa(a);return a;}
function AMa(a){var b,c;a.mR=1;a.mE=1;a.jE=0;a.kc=0;a.fy=0;a.ds=1;a.b4=0;a.k7=0;a.wd=FO(B(313),17);a.y2=FO(B(314),30);a.vK=FO(B(315),31);a.yb=FO(B(316),32);a.ur=FO(B(317),57);a.gx=FO(B(318),23);a.g3=FO(B(319),16);a.D4=FO(B(320),20);a.g7=FO(B(321),33);a.hj=FO(B(322),28);a.hb=FO(B(323),19);b=H(W5,11);c=b.data;c[0]=a.wd;c[1]=a.y2;c[2]=a.vK;c[3]=a.yb;c[4]=a.ur;c[5]=a.g3;c[6]=a.gx;c[7]=a.D4;c[8]=a.g7;c[9]=a.hj;c[10]=a.hb;a.gr=b;a.AL=9;a.dH=2;a.cg=0;AE4(a);}
function KK(a,b){var c;c=new R;T(c);c=E(E(c,a.gr.data[b].rK),B(19));b=a.gr.data[b].bt;Bf();return S(E(c,b>=0&&b<256?BaP.data[b]:B(17)));}
function AA6(a,b,c){a.gr.data[b].bt=c;QD(a);}
function Fb(a,b,c){if(!b)a.mR=a.mR?0:1;if(b==1)a.mE=a.mE?0:1;if(b==2)a.jE=a.jE?0:1;if(b==3)a.kc=a.kc?0:1;if(b==4)a.fy=(a.fy+c|0)&3;if(b==5)a.ds=a.ds?0:1;if(b==6)a.b4=a.b4?0:1;if(b==7)a.k7=a.k7?0:1;if(b==8)a.dH=(a.dH+c|0)&3;QD(a);}
function XM(a,b){var c;a:{if(!b){c=new R;T(c);c=S(E(E(c,B(324)),!a.mR?B(325):B(326)));break a;}if(b==1){c=new R;T(c);c=S(E(E(c,B(327)),!a.mE?B(325):B(326)));break a;}if(b==2){c=new R;T(c);c=S(E(E(c,B(328)),!a.jE?B(325):B(326)));break a;}if(b==3){c=new R;T(c);c=S(E(E(c,B(329)),!a.kc?B(325):B(326)));break a;}if(b==4){c=new R;T(c);c=S(E(E(c,B(330)),Bf9.data[a.fy]));break a;}if(b==5){c=new R;T(c);c=S(E(E(c,B(331)),!a.ds?B(325):B(326)));break a;}if(b==6){c=new R;T(c);c=S(E(E(c,B(332)),!a.b4?B(325):B(326)));break a;}if
(b!=7){if(b!=8){c=B(9);break a;}c=new R;T(c);c=S(E(E(c,B(333)),Bf$.data[a.dH]));break a;}c=new R;T(c);c=S(E(E(c,B(334)),!a.k7?B(325):B(326)));}return c;}
function AE4(a){var b,c,d,e;b=A_B;if(!b.b2.dD)return;if(Ex(b,B(335)))a.mR=Gb(b,B(335));if(Ex(b,B(336)))a.mE=Gb(b,B(336));if(Ex(b,B(337)))a.jE=Gb(b,B(337));if(Ex(b,B(338)))a.kc=Gb(b,B(338));if(Ex(b,B(339)))a.fy=DK(b,B(339));if(Ex(b,B(340)))a.ds=Gb(b,B(340));if(Ex(b,B(341)))a.b4=Gb(b,B(341));if(Ex(b,B(342)))a.k7=Gb(b,B(335));if(Ex(b,B(343)))a.dH=DK(b,B(343));c=0;while(c<a.gr.data.length){d=new R;T(d);e=S(E(E(d,B(344)),a.gr.data[c].rK));if(Ex(b,e))a.gr.data[c].bt=Ck(b,e)&65535;c=c+1|0;}}
function QD(a){var b,c,d,e,$$je;b=A_B;Gc(b,B(335),a.mR);Gc(b,B(336),a.mE);Gc(b,B(337),a.jE);Gc(b,B(338),a.kc);E1(b,B(339),a.fy);Gc(b,B(340),a.ds);Gc(b,B(341),a.b4);Gc(b,B(342),a.k7);E1(b,B(343),a.dH);c=0;while(c<a.gr.data.length){d=new R;T(d);CH(b,S(E(E(d,B(344)),a.gr.data[c].rK)),a.gr.data[c].bt<<16>>16);c=c+1|0;}a:{try{P5();break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){e=$$je;}else{throw $$e;}}DA(e);}}
function AN1(){var b,c;b=H(BC,4);c=b.data;c[0]=B(345);c[1]=B(346);c[2]=B(347);c[3]=B(348);Bf9=b;b=H(BC,4);c=b.data;c[0]=B(349);c[1]=B(350);c[2]=B(351);c[3]=B(352);Bf$=b;}
function SA(){var a=this;C.call(a);a.pP=null;a.Cm=null;a.lS=null;a.hl=null;a.ne=null;a.xq=null;a.r3=0;a.tx=0;}
function AB_(a,b){var c,d,e,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Co(a.pP,b);if(c!==null)return c.fA;try{AFS(a.lS);P_(a.lS);d=KM(a.lS,0);if(EG(b,B(353))){a.r3=1;e=I9(DO(b,7));$p=1;continue _;}if(!EG(b,B(354))){e=I9(b);$p=2;continue _;}a.tx=1;e=I9(DO(b,6));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}b=new BU;Bb(b,B(355));J(b);case 1:a:{try{$z=ADY(a,e);if(I()){break _;}c=$z;Ke(a,c,d);a.r3
=0;M$(a.pP,b,C0(d));}catch($$e){$$je=Bh($$e);if($$je instanceof BA){break a;}else{throw $$e;}}return d;}b=new BU;Bb(b,B(355));J(b);case 2:a:{try{$z=ADY(a,e);if(I()){break _;}c=$z;Ke(a,c,d);M$(a.pP,b,C0(d));}catch($$e){$$je=Bh($$e);if($$je instanceof BA){break a;}else{throw $$e;}}return d;}b=new BU;Bb(b,B(355));J(b);case 3:a:{try{$z=ADY(a,e);if(I()){break _;}c=$z;Ke(a,c,d);a.tx=0;M$(a.pP,b,C0(d));}catch($$e){$$je=Bh($$e);if($$je instanceof BA){break a;}else{throw $$e;}}return d;}b=new BU;Bb(b,B(355));J(b);default:
F2();}}Dh().s(a,b,c,d,e,$p);}
function AJ1(a,b){var c;DC(a.lS);P_(a.lS);c=KM(a.lS,0);Ke(a,b,c);BI(a.Cm,C0(c),b);return c;}
function Ke(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;EP(c);Fo(3553,10241,9986);Fo(3553,10240,9728);Fo(3553,33085,4);if(a.tx){Fo(3553,10241,9729);Fo(3553,10240,9729);}if(!a.r3){Fo(3553,10242,10497);Fo(3553,10243,10497);}else{Fo(3553,10242,10496);Fo(3553,10243,10496);}d=b.ut;e=b.Ar;f=VW(b);g=$rt_createByteArray(K(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if(a.xq!==null&&a.xq.b4){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)
|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}DC(a.hl);Xc(a.hl,g);b=a.hl;Dz(b,0);H0(b,h.length);Vi(3553,0,6408,d,e,0,6408,5121,a.hl);p=1;while(p<=4){o=d>>(p-1|0);q=d>>p;r=e>>p;DC(a.ne);s=0;while(s<q){t=0;while(t<r){b=a.hl;c=s*2|0;i=c+0|0;k=t*2|0;l=K(k+0|0,o);u=LS(b,(i+l|0)*4|0);b=a.hl;c=c+1|0;v=LS(b,(c+l|0)*4|0);b=a.hl;k=K(k+1|0,o);w=LS(b,(c+k|0)*4|0);x=LS(a.hl,(i+k|0)*4|0);y=MQ(a,MQ(a,u,v),MQ(a,w,x));AC1(a.ne,
(s+K(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}Vi(3553,p,6408,q,r,0,6408,5121,a.ne);z=a.hl;a.hl=a.ne;a.ne=z;p=p+1|0;}}
function AJy(a,b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB_(a,b);if(I()){break _;}c=$z;return c;default:F2();}}Dh().s(a,b,c,$p);}
function ADY(a,b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ADd(b);if(I()){break _;}c=$z;return c;default:F2();}}Dh().s(a,b,c,$p);}
function MQ(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function EP(b){IQ(Bch,1);if(b<0){IQ(Bch,0);return;}Cj(3553,b);IQ(Bch,0);}
function SM(){var a=this;C.call(a);a.sd=null;a.yR=0;a.sk=0;}
function Bf_(a,b,c){var d=new SM();AIA(d,a,b,c);return d;}
function AIA(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sd=$rt_createIntArray(256);a.yR=0;e=I9(c);$p=1;case 1:$z=ADd(e);if(I()){break _;}f
=$z;g=f.ut;e=VW(f);h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+K(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.sd.data[h]=k+2|0;h=h+1|0;}a.yR=AJ1(d,f);a.sk=AOD(288);BE();p=Bdg;q=0;while(q<256){EY(a.sk+q|0,4864);Bx(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Bt(p);E6();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.b4){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}EY((a.sk+256|0)+l|0,4864);Mi(ba/255.0,bb/255.0,bc/255.0);E6();l=l+1|0;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function CG(a,b,c,d,e){Y4(a,b,c+1|0,d+1|0,e,1);F9(a,b,c,d,e);}
function F9(a,b,c,d,e){Y4(a,b,c,d,e,0);}
function Y4(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cj(3553,a.yR);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BJ(g,h,i,j);Ca();Bj(c,d,0.0);k=0;while(k<Q(b)){c=k;while(true){d=Q(b);k=c+1|0;if(d<=k)break;if(P(b,c)!=167)break;l=Fy(B(356),P(Oj(b),k));c=c+2|0;}if(c<Q(b)){m=P6(P(b,c));if(m>=0){FG((a.sk+m|0)+32|0);Bj(a.sd.data[m+32|0],0.0,0.0);}}}BS();}
function Ei(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Q(b)){if(P(b,d)==167)d=d+1|0;else{e=P6(P(b,d));if(e>=0)c=c+a.sd.data[e+32|0]|0;}d=d+1|0;}return c;}
function Ti(){}
function ANX(){var a=this;C.call(a);a.K=null;a.hY=null;a.kB=0;a.j0=null;a.im=null;a.dU=null;a.fO=null;a.fh=0;a.fk=0;a.nC=0;a.BD=0;a.gf=null;a.Bd=null;a.sM=null;a.oE=0;a.r7=0;a.uK=0;a.lf=0;a.k8=0;a.l_=0;a.wg=null;a.u2=null;a.rt=0;a.rZ=0;a.q3=0;a.tF=0;a.ry=0.0;a.rz=0.0;a.rA=0.0;a.rb=0.0;}
function A83(a,b){var c=new ANX();A1e(c,a,b);return c;}
function A1e(a,b,c){var d,e,f,g,h,i;a.j0=K0(65536);a.im=BV();a.oE=0;a.r7=0;a.wg=$rt_createIntArray(50000);a.u2=K0(64);a.ry=(-9999.0);a.rz=(-9999.0);a.rA=(-9999.0);a.gf=b;a.hY=c;a.kB=JF(2);a.BD=JF(786432);a.oE=1;if(a.oE){DC(a.u2);if(!KM(a.u2,0))a.oE=0;else{a.sM=K0(262144);DC(a.sM);Dz(a.sM,0);H0(a.sM,262144);}}a.uK=JF(1);EY(a.uK,4864);d=new Dd;e=0;while(e<500){BE();f=Bdg;g=0.25+N(d)*0.25;Bx(f);h= -g;i=g;G(f,h,(-100.0),i,1.0,1.0);G(f,i,(-100.0),i,0.0,1.0);G(f,i,(-100.0),h,0.0,0.0);G(f,h,(-100.0),h,1.0,0.0);Bt(f);e
=e+1|0;}E6();}
function ACV(a,b){if(a.K!==null)AGS(a.K,a);a.ry=(-9999.0);a.rz=(-9999.0);a.rA=(-9999.0);BdQ.nb=b;a.K=b;a.Bd=AFD(b);if(b!==null){AJa(b,a);Tn(a);}}
function Tn(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a:{if(a.fO!==null){b=0;while(true){if(b>=a.fO.data.length)break a;AFG(a.fO.data[b]);b=b+1|0;}}}a.fh=a.K.o/16|0;a.fk=a.K.bu/16|0;a.nC=a.K.t/16|0;a.fO=H(H7,K(K(a.fh,a.fk),a.nC));a.dU=H(H7,K(K(a.fh,a.fk),a.nC));c=0;d=0;while(d<a.fh){e=0;while(e<a.fk){f=0;while(f<a.nC){g=a.fO.data;h=K(K(f,a.fk)+e|0,a.fh)+d|0;i=new H7;j=a.K;k=d<<4;l=e<<4;m=f<<4;n=a.BD+c|0;AKx();i.rJ=(-1);i.gA=0;i.of=$rt_createBooleanArray(2);i.jP=1;i.Al=AFD(j);i.o3=j;i.yK=k;i.yL=l;i.yM=m;i.m2=16;i.m8=
16;i.n4=16;i.D5=k+(i.n4/2|0)|0;i.z2=l+(i.m8/2|0)|0;i.CC=m+(i.m2/2|0)|0;B$((K(i.n4,i.n4)+K(i.m8,i.m8)|0)+K(i.m2,i.m2)|0);i.w_=FL(GM(k,l,m,k+i.n4|0,l+i.m8|0,m+i.m2|0),2.0,2.0,2.0);i.rJ=n;Zb(i);Bc(3553);EY(n+2|0,4864);AKi(i.w_);E6();Y(3553);g[h]=i;a.dU.data[K(K(f,a.fk)+e|0,a.fh)+d|0]=a.fO.data[K(K(f,a.fk)+e|0,a.fh)+d|0];c=c+3|0;f=f+1|0;}e=e+1|0;}d=d+1|0;}b=0;while(b<a.im.q){Be(a.im,b).pM=0;b=b+1|0;}ES(a.im);EY(a.kB,4864);Yj(a);E6();EY(a.kB+1|0,4864);T7(a);E6();MW(a,0,0,0,a.K.o,a.K.bu,a.K.t);}
function AMU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.K.dl;AGO(BdQ,a.K,a.hY,a.gf.a,d);a.lf=0;a.k8=0;a.l_=0;f=0;a:{while(f<e.ey){g=0;while(g<e.eL){h=0;while(h<e.h2){b:{i=e.lB.data[K(K(h,e.eL)+g|0,e.ey)+f|0];if(i.q){j=(f<<3)+4|0;k=(g<<3)+4|
0;l=(h<<3)+4|0;a.lf=a.lf+i.q|0;m=j;n=k;o=l;if(m>=0.0&&n>=0.0&&o>=0.0&&m<a.K.o&&n<a.K.bu&&o<a.K.t){p=m/16.0|0;q=n/16.0|0;r=o/16.0|0;s=a.fO.data[K(K(r,a.fk)+q|0,a.fh)+p|0].gA&&a.fO.data[K(K(r,a.fk)+q|0,a.fh)+p|0].jP?1:0;}else s=1;if(!s)a.l_=a.l_+i.q|0;else{j=0;while(true){if(j>=i.q)break b;t=Be(i,j);m=t.f-b.U;n=t.j-b.R;o=t.g-b.S;m=m*m+n*n+o*o;u=t.Y;n=(u.bv-u.bg+u.bs-u.bc+u.bw-u.bf)/3.0*64.0;if(m<n*n&&Py(c,t.Y)){if(t!==a.K.cV)break a;if(a.gf.d.cg)break a;}j=j+1|0;}}}}h=h+1|0;}g=g+1|0;}f=f+1|0;}return;}a.k8=a.k8
+1|0;u=BdQ;$p=1;case 1:AAi(u,t,d);if(I()){break _;}a:{c:while(true){j=j+1|0;while(j>=i.q){while(true){h=h+1|0;while(h>=e.h2){g=g+1|0;while(g>=e.eL){f=f+1|0;if(f>=e.ey)break c;g=0;}h=0;}i=e.lB.data[K(K(h,e.eL)+g|0,e.ey)+f|0];if(!i.q)continue;j=(f<<3)+4|0;k=(g<<3)+4|0;l=(h<<3)+4|0;a.lf=a.lf+i.q|0;m=j;n=k;o=l;if(m>=0.0&&n>=0.0&&o>=0.0&&m<a.K.o&&n<a.K.bu&&o<a.K.t){p=m/16.0|0;q=n/16.0|0;r=o/16.0|0;s=a.fO.data[K(K(r,a.fk)+q|0,a.fh)+p|0].gA&&a.fO.data[K(K(r,a.fk)+q|0,a.fh)+p|0].jP?1:0;}else s=1;if(s)break;a.l_=a.l_
+i.q|0;}j=0;}t=Be(i,j);m=t.f-b.U;n=t.j-b.R;o=t.g-b.S;m=m*m+n*n+o*o;u=t.Y;n=(u.bv-u.bg+u.bs-u.bc+u.bw-u.bf)/3.0*64.0;if(m>=n*n)continue;if(!Py(c,t.Y))continue;if(t!==a.K.cV)break a;if(!a.gf.d.cg)continue;else break a;}return;}a.k8=a.k8+1|0;u=BdQ;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function YL(a){var b;b=new R;T(b);return S(Bd(E(Bd(E(Bd(E(Bd(E(b,B(357)),a.tF),B(30)),a.rt),B(358)),a.rZ),B(359)),a.q3));}
function RJ(a){var b;b=new R;T(b);return S(Bd(E(Bd(E(Bd(E(Bd(E(b,B(360)),a.k8),B(30)),a.lf),B(361)),a.l_),B(362)),(a.lf-a.l_|0)-a.k8|0));}
function S$(a,b,c){var d,e,f,g,h,i,j,k,l;if(!c){a.rt=0;a.rZ=0;a.q3=0;a.tF=0;}d=b.f-a.ry;e=b.j-a.rz;f=b.g-a.rA;if(d*d+e*e+f*f>16.0){a.ry=b.f;a.rz=b.j;a.rA=b.g;g=a.dU;h=new R5;h.vb=b;ACD(g,h);}if(a.oE&&!c){i=8;j=0;while(j<8){a.dU.data[j].jP=1;j=j+1|0;}k=0+N3(a,0,8,c)|0;while(true){j=i<<1;if(j>a.dU.data.length)j=a.dU.data.length;Bc(3553);Bc(2896);Bc(3008);Cz(0,0,0,0);EJ(0);l=i;while(l<j){if(!a.dU.data[l].gA)a.dU.data[l].jP=1;l=l+1|0;}Cz(1,1,1,1);EJ(1);Y(3553);Y(3008);k=k+N3(a,i,j,c)|0;if(j>=a.dU.data.length)break;i
=j;}}else k=0+N3(a,0,a.dU.data.length,c)|0;return k;}
function N3(a,b,c,d){var e;e=0;while(b<c){if(!d){a.rt=a.rt+1|0;if(!a.dU.data[b].gA)a.rZ=a.rZ+1|0;if(a.dU.data[b].gA&&!a.dU.data[b].jP)a.q3=a.q3+1|0;if(a.dU.data[b].gA&&a.dU.data[b].jP)a.tF=a.tF+1|0;}if(a.dU.data[b].gA&&a.dU.data[b].jP)e=AFH(a.dU.data[b],a.wg,e,d);b=b+1|0;}DC(a.j0);AOz(a.j0,a.wg,0,e);Ec(a.j0);if(BT(a.j0)>0)Vk(a.j0);return BT(a.j0);}
function AIT(a){var b,c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=3553;c=a.hY;d=B(205);$p=1;case 1:$z=AB_(c,d);if(I()){break _;}e=$z;Cj(b,e);Vk(a.j0);return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function DX(a){a.r7=a.r7+1|0;}
function AHP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(3553);c=UO(a.K,b);d=c.U;e=c.R;f=c.S;if(a.gf.d.b4){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}EJ(0);BE();h=Bdg;Bx(h);CW(h,
d,e,f);d=a.K.bu+10|0;i=(-2048);j=d;while(i<(a.K.o+2048|0)){k=(-2048);while(k<(a.K.t+2048|0)){l=i;m=k;Bo(h,l,j,m);n=i+512|0;Bo(h,n,j,m);k=k+512|0;m=k;Bo(h,n,j,m);Bo(h,l,j,m);}i=i+512|0;}Bt(h);Y(3553);Bc(2912);Bc(3008);Y(3042);Dy(1,1);Ca();d=a.K.cV.ec+(a.K.cV.f-a.K.cV.ec)*b;e=a.K.cV.eb+(a.K.cV.j-a.K.cV.eb)*b;o=a.K.cV.ea+(a.K.cV.g-a.K.cV.ea)*b;BJ(1.0,1.0,1.0,1.0);Bj(d,e,o);Bs(0.0,0.0,0.0,1.0);Bs(H3(a.K,b)*360.0,1.0,0.0,0.0);i=3553;c=a.hY;p=B(363);$p=1;case 1:$z=AB_(c,p);if(I()){break _;}q=$z;Cj(i,q);Bx(h);G(h,
(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Bt(h);i=3553;c=a.hY;p=B(364);$p=2;case 2:$z=AB_(c,p);if(I()){break _;}q=$z;Cj(i,q);Bx(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bt(h);Bc(3553);d=AIv(a.K,b);BJ(d,d,d,d);FG(a.uK);BJ(1.0,1.0,1.0,1.0);Y(3553);Bc(3042);Y(3008);Y(2912);BS();EJ(1);i=3553;c=a.hY;p=B(365);$p=3;case 3:$z=AB_(c,p);if
(I()){break _;}q=$z;Cj(i,q);BJ(1.0,1.0,1.0,1.0);p=AIS(a.K,b);d=p.U;g=p.R;e=p.S;if(a.gf.d.b4){o=d*30.0;d=(o+g*59.0+e*11.0)/100.0;g=(o+g*70.0)/100.0;e=(o+e*70.0)/100.0;}o=a.K.kE;r=(a.r7+b)*4.8828125E-4*0.029999999329447746;Bx(h);CW(h,d,g,e);q=(-2048);j=o;while(q<(a.K.o+2048|0)){k=(-2048);while(k<(a.K.t+2048|0)){d=q;l=d;s=k+512|0;e=s;m=e;n=d*4.8828125E-4+r;t=e*4.8828125E-4;G(h,l,j,m,n,t);b=q+512|0;u=b;v=b*4.8828125E-4+r;G(h,u,j,m,v,t);b=k;w=b;x=b*4.8828125E-4;G(h,u,j,w,v,x);G(h,l,j,w,n,x);G(h,l,j,w,n,x);G(h,u,
j,w,v,x);G(h,u,j,m,v,t);G(h,l,j,m,n,t);k=s;}q=q+512|0;}Bt(h);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AL3(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=DT(a.K,0,a.K.eD,0);c=3553;d=a.hY;e=B(227);$p=1;case 1:$z=AB_(d,e);if(I()){break _;}f=$z;Cj(c,f);if(a.K.eD>a.K.fE){c=a.K.jq;L();if(c==Bcj.b){c=3553;d=a.hY;e=B(366);$p=2;continue _;}}BJ(b,b,b,1.0);Y(3553);FG(a.kB);return;case 2:$z=AB_(d,e);if(I()){break _;}f=$z;Cj(c,f);BJ(b,b,b,1.0);Y(3553);FG(a.kB);return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function Yj(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;BE();b=Bdg;c=a.K.eD;d=128;if(128>a.K.o)d=a.K.o;if(d>a.K.t)d=a.K.t;e=2048/d|0;Bx(b);f=K( -d,e);g=Bw(c,0.0);h=c;i=f;while(true){j=a.K.o;k=K(d,e);if(i>=(j+k|0))break;j=f;while(j<(a.K.t+k|0)){if(!(g>=0&&i>=0&&j>=0&&i<a.K.o&&j<a.K.t)){l=i;m=j+d|0;n=d;G(b,l,h,m,0.0,n);o=i+d|0;G(b,o,h,m,n,n);m=j;G(b,o,h,m,n,0.0);G(b,l,h,m,0.0,0.0);}j=j+d|0;}i=i+d|0;}Bt(b);}
function AB1(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Y(3553);Y(3042);b=3553;c=a.hY;d=B(210);$p=1;case 1:$z=AB_(c,d);if(I()){break _;}e=$z;Cj(b,e);f=DT(a.K,0,a.K.fE,0);BJ(f,f,f,1.0);FG(a.kB+1|0);BJ(1.0,1.0,1.0,1.0);Bc(3042);return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function T7(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=a.K.fE;Dy(770,771);BE();c=Bdg;d=128;if(128>a.K.o)d=a.K.o;if(d>a.K.t)d=a.K.t;e=2048/d|0;Bx(c);L();f=Bcj.ex;g=Bcj.ew;h=K( -d,e);i=Bw(b,0.0);j=h;while(true){k=a.K.o;l=K(d,e);if(j>=(k+l|0))break;m=h;while(m<(a.K.t+l|0)){n=b+Bcj.cj;if(!(i>=0&&j>=0&&m>=0&&j<a.K.o&&m<a.K.t)){o=j+f;p=n;q=(m+d|0)+g;r=d;G(c,o,p,q,0.0,r);s=(j+d|0)+f;G(c,s,p,q,r,r);t=m+g;G(c,s,p,t,r,0.0);G(c,o,p,t,0.0,0.0);G(c,o,p,t,0.0,0.0);G(c,s,p,t,r,0.0);G(c,s,p,q,r,r);G(c,o,p,q,0.0,r);}m=m
+d|0;}j=j+d|0;}Bt(c);Bc(3042);}
function AJQ(a,b){var c,d,e,f,g;c=a.im;d=new Vo;d.zm=b;TM(c,d);e=a.im.q-1|0;f=a.im.q;g=0;while(g<f){c=Be(a.im,e-g|0);if(IP(c,b)>2500.0&&g>4)return;GE(a.im,c);AN$(c);c.pM=0;g=g+1|0;}}
function AOv(a,b,c,d){var e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BE();e=Bdg;Y(3042);Y(3008);Dy(770,1);BJ(1.0,1.0,1.0,(Bv(Long_toNumber(CF())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(a.rb<=0.0){Bc(3042);Bc(3008);return;}Dy(774,768);d=a.hY;f=B(205);$p=1;case 1:$z=AB_(d,f);if(I()){break _;}g=$z;Cj(3553,g);BJ(1.0,1.0,1.0,0.5);Ca();c=O(a.K,b.c6,b.c7,b.c8);if(c<=0)f=null;else{L();f=Bcn.data[c];}Bc(3008);Bx(e);AE$(e);if
(f===null){L();f=Bct;}BO();AK$(a.Bd,f,b.c6,b.c7,b.c8,240+(a.rb*10.0|0)|0);BO();Bt(e);Y(3008);EJ(1);BS();Bc(3042);Bc(3008);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function Xf(a,b,c){var d,e;Y(3042);Dy(770,771);BJ(0.0,0.0,0.0,0.4000000059604645);Bc(3553);EJ(0);c=O(a.K,b.c6,b.c7,b.c8);if(c>0){L();d=FL(AL$(Bcn.data[c],b.c6,b.c7,b.c8),0.0020000000949949026,0.0020000000949949026,0.0020000000949949026);BE();e=Bdg;Ly(e,3);Bo(e,d.bg,d.bc,d.bf);Bo(e,d.bv,d.bc,d.bf);Bo(e,d.bv,d.bc,d.bw);Bo(e,d.bg,d.bc,d.bw);Bo(e,d.bg,d.bc,d.bf);Bt(e);Ly(e,3);Bo(e,d.bg,d.bs,d.bf);Bo(e,d.bv,d.bs,d.bf);Bo(e,d.bv,d.bs,d.bw);Bo(e,d.bg,d.bs,d.bw);Bo(e,d.bg,d.bs,d.bf);Bt(e);Ly(e,1);Bo(e,d.bg,d.bc,d.bf);Bo(e,
d.bg,d.bs,d.bf);Bo(e,d.bv,d.bc,d.bf);Bo(e,d.bv,d.bs,d.bf);Bo(e,d.bv,d.bc,d.bw);Bo(e,d.bv,d.bs,d.bw);Bo(e,d.bg,d.bc,d.bw);Bo(e,d.bg,d.bs,d.bw);Bt(e);}EJ(1);Y(3553);Bc(3042);}
function MW(a,b,c,d,e,f,g){var h,i,j,k,l;h=b/16|0;i=c/16|0;c=d/16|0;d=e/16|0;e=f/16|0;f=g/16|0;if(h<0)h=0;if(i<0)i=0;if(c<0)c=0;if(d>(a.fh-1|0))d=a.fh-1|0;if(e>(a.fk-1|0))e=a.fk-1|0;if(f>(a.nC-1|0))f=a.nC-1|0;while(h<=d){j=i;while(j<=e){k=c;while(k<=f){l=a.fO.data[K(K(k,a.fk)+j|0,a.fh)+h|0];if(!l.pM){l.pM=1;M(a.im,a.fO.data[K(K(k,a.fk)+j|0,a.fh)+h|0]);}k=k+1|0;}j=j+1|0;}h=h+1|0;}}
function WU(a,b,c,d){MW(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AHA(a,b,c,d,e,f,g){MW(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function AFj(a,b){var c;c=0;while(c<a.fO.data.length){ADB(a.fO.data[c],b);c=c+1|0;}}
function AB7(a,b,c,d,e,f,g,h){var i,j,k,l;i=a.K.cV.f-c;j=a.K.cV.j-d;k=a.K.cV.g-e;if(i*i+j*j+k*k<=256.0){if(b===B(367)){b=a.gf.bI;l=new QE;Ga(l,a.K,c,d,e,f,g,h);l.hT=1.0;l.iK=1.0;l.iN=1.0;l.fU=32;DD(l,0.019999999552965164,0.019999999552965164);l.dq=l.dq*(N(l.O)*0.6000000238418579+0.20000000298023224);l.by=f*0.20000000298023224+(Cc()*2.0-1.0)*0.019999999552965164;l.bD=g*0.20000000298023224+(Cc()*2.0-1.0)*0.019999999552965164;l.bz=h*0.20000000298023224+(Cc()*2.0-1.0)*0.019999999552965164;l.cU=8.0/(Cc()*0.8+0.2)
|0;E_(b,l);}else if(b===B(273))E_(a.gf.bI,ATc(a.K,c,d,e,1.0));else if(b===B(368)){b=a.gf.bI;l=new QZ;Ga(l,a.K,c,d,e,f,g,h);l.by=f+(Cc()*2.0-1.0)*0.05000000074505806;l.bD=g+(Cc()*2.0-1.0)*0.05000000074505806;l.bz=h+(Cc()*2.0-1.0)*0.05000000074505806;c=N(l.O)*0.30000001192092896+0.699999988079071;l.iN=c;l.iK=c;l.hT=c;l.dq=N(l.O)*N(l.O)*6.0+1.0;l.cU=(16.0/(N(l.O)*0.8+0.2)|0)+2|0;E_(b,l);}else if(b!==B(274)){if(b===B(271))E_(a.gf.bI,A$4(a.K,c,d,e));else if(b===B(272)){b=a.gf.bI;l=new QT;ABP(l,a.K,c,d,e);l.pb=0.03999999910593033;l.fU
=l.fU+1|0;E_(b,l);}else if(b===B(275))E_(a.gf.bI,ATc(a.K,c,d,e,2.5));}else{b=a.gf.bI;l=new SF;Ga(l,a.K,c,d,e,0.0,0.0,0.0);l.by=l.by*0.009999999776482582;l.bD=l.bD*0.009999999776482582;l.bz=l.bz*0.009999999776482582;N(l.O);N(l.O);N(l.O);N(l.O);N(l.O);N(l.O);l.CI=l.dq;l.iN=1.0;l.iK=1.0;l.hT=1.0;l.cU=(8.0/(Cc()*0.8+0.2)|0)+4|0;l.om=1;l.fU=48;E_(b,l);}}}
function AWp(a,b){return;}
function APB(a,b){return;}
function AKT(a){EY(a.kB,4864);Yj(a);E6();EY(a.kB+1|0,4864);T7(a);E6();}
function OH(){var a=this;C.call(a);a.o=0;a.t=0;a.bu=0;a.ca=null;a.gW=null;a.oB=null;a.pc=null;a.qH=Long_ZERO;a.g5=0;a.gZ=0;a.hx=0;a.r6=0.0;a.jq=0;a.di=null;a.j_=null;a.mb=null;a.n7=null;a.ko=null;a.bo=null;a.Dx=null;a.pq=0;a.dl=null;a.fE=0;a.eD=0;a.kE=0;a.hJ=0;a.hD=0;a.hp=0;a.ml=0;a.uH=0;a.cV=null;a.xg=0;a.dG=0;a.eg=0;a.rU=null;a.hV=null;a.iV=0;a.e1=null;a.hs=null;a.tG=null;a.c1=0;}
var Bga=null;var Bgb=0;function X0(){var a=new OH();AGJ(a);return a;}
function AGJ(a){var b,c;L();a.jq=Bcj.b;a.di=BV();a.j_=ST();a.mb=CZ();a.n7=BV();a.bo=new Dd;a.Dx=new Dd;a.pq=RE(a.bo);a.hJ=10079487;a.hD=16777215;a.hp=16777215;a.ml=0;a.uH=0;a.xg=1;a.dG=15;a.eg=15;b=new Vf;c=new R_;c.dM=H(IN,1024);c.eP=0;b.kl=c;b.tn=CZ();b.mY=H(IN,32);b.mx=a;a.rU=b;a.iV=0;a.e1=$rt_createShortArray(1048576);a.hs=$rt_createIntArray(1048576);a.tG=$rt_createIntArray(1048576);a.c1=2;}
function TI(a){var b,c,d,e,f;if(a.ca===null){b=new BU;Bb(b,B(369));J(b);}a.di=BV();a.ko=$rt_createIntArray(K(a.o,a.t));Js(a.ko,a.bu);X8(a.hV,0,0,a.o,a.t);a.bo=new Dd;a.pq=RE(a.bo);a.j_=BV();if(a.dl===null){b=new VR;c=a.o;d=a.bu;e=a.t;b.lQ=A7d(b);b.w7=A7d(b);b.fj=BV();b.mD=BV();b.ey=c/8|0;b.eL=d/8|0;b.h2=e/8|0;if(!b.ey)b.ey=1;if(!b.eL)b.eL=1;if(!b.h2)b.h2=1;b.lB=H(V3,K(K(b.ey,b.eL),b.h2));c=0;while(c<b.ey){d=0;while(d<b.eL){f=0;while(f<b.h2){b.lB.data[K(K(f,b.eL)+d|0,b.ey)+c|0]=BV();f=f+1|0;}d=d+1|0;}c=c+1|0;}a.dl
=b;}}
function K3(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(f!==null&&!f.data.length)f=null;a.o=b;a.t=d;a.bu=c;a.ca=e;g=0;while(g<a.o){h=0;while(h<a.t){i=0;while(i<a.bu){a:{j=0;c=Bw(i,1);if(c<=0&&i<(a.eD-1|0)&&!e.data[K(K(i+1|0,a.t)+h|0,a.o)+g|0]){L();j=Bd8.b;}else if(i<(a.eD-1|0)){L();j=Bco.b;}else if(i<a.eD){if(a.eD>a.fE){k=a.jq;L();if(k==Bcj.b){j=Bcp.b;break a;}}L();j=Bcq.b;}else if(i<a.fE)j=a.jq;}e.data[K(K(i,a.t)+h|0,a.o)+g|0]=j<<24>>24;if(!c&&g&&h&&g!=(a.o-1|0)&&h!=(a.t-1|0))i=a.bu-2|0;i=i+1|0;}h=h+1|0;}g=g+1|0;}a.ko
=$rt_createIntArray(K(b,d));Js(a.ko,a.bu);if(f!==null){a.gW=f;a.hV=AS7(a);}else{a.gW=$rt_createByteArray(e.data.length);a.hV=AS7(a);b=a.eg;c=0;while(c<a.o){k=0;while(k<a.t){l=a.bu-1|0;while(l>0){L();if(Bd3.data[O(a,c,l,k)])break;l=l+(-1)|0;}a.ko.data[c+K(k,a.o)|0]=l+1|0;d=0;while(d<a.bu){g=K(K(d,a.t)+k|0,a.o)+c|0;l=d<a.ko.data[c+K(k,a.o)|0]?0:b;m=a.ca.data[g];L();if(l<Bd6.data[m])l=Bd6.data[m];a.gW.data[g]=((a.gW.data[g]&240)+l|0)<<24>>24;d=d+1|0;}k=k+1|0;}c=c+1|0;}NW(a.hV,0,0,0,a.o,a.bu,a.t);}b=0;while(b<a.di.q)
{Tn(Be(a.di,b));b=b+1|0;}a.j_.w9();ZE(a);TI(a);}
function ZE(a){var b,c,d,e,f,g,h,i,j,k,l;b=new Dd;c=0;a:while(true){c=c+1|0;d=W(b,a.o/2|0)+(a.o/4|0)|0;e=W(b,a.t/2|0)+(a.t/4|0)|0;f=a.bu;while(true){g=f-1|0;if(O(a,d,g,e)){L();if(Bcn.data[O(a,d,g,e)].cm!==Bdh)break;}if(f<=0)break;f=f+(-1)|0;}g=f+1|0;if(c==1000000){a.g5=d;a.gZ=a.bu+100|0;a.hx=e;a.r6=180.0;return;}if(g<4)continue;if(g<=a.fE)continue;h=d-3|0;i=h;b:while(true){f=d+3|0;if(i>f){j=g-2|0;c:while(true){if(h>f)break a;k=(e-3|0)-2|0;while(k<=(e+3|0)){L();if(!Bd2.data[O(a,h,j,k)])break c;k=k+1|0;}h=h+1
|0;}continue a;}l=g-1|0;while(l<=(g+2|0)){f=(e-3|0)-2|0;while(f<=(e+3|0)){if(CR(a,i,l,f).iw())break b;f=f+1|0;}l=l+1|0;}i=i+1|0;}}a.g5=d;a.gZ=g;a.hx=e;a.r6=180.0;}
function AJa(a,b){var c;c=0;while(c<a.dl.fj.q){Be(a.dl.fj,c);c=c+1|0;}M(a.di,b);}
function AGS(a,b){GE(a.di,b);}
function Hv(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=BV();d=b.bg|0;e=(b.bv|0)+1|0;f=b.bc|0;g=(b.bs|0)+1|0;h=b.bf|0;i=(b.bw|0)+1|0;if(b.bg<0.0)d=d+(-1)|0;if(b.bc<0.0)f=f+(-1)|0;if(b.bf<0.0)h=h+(-1)|0;while(d<e){j=f;while(j<g){k=h;while(k<i){L();l=Bcn.data[O(a,d,j,k)];if(l!==null){m=l.it(d,j,k);if(m!==null&&Zg(b,m))M(c,m);}else if(a.eD<0&&!(j>=a.eD&&j>=a.fE)){m=Bco.it(d,j,k);if(m!==null&&Zg(b,m))M(c,m);}k=k+1|0;}j=j+1|0;}d=d+1|0;}return c;}
function ALj(a,b,c,d,e,f,g){var h,i;h=O(a,b,c,d);i=O(a,e,f,g);H1(a,b,c,d,i);H1(a,e,f,g,h);Ls(a,b,c,d,i);Ls(a,e,f,g,h);}
function H1(a,b,c,d,e){var f;if(b>0&&c>0&&d>0&&b<(a.o-1|0)&&c<(a.bu-1|0)&&d<(a.t-1|0)){if(e==a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0])return 0;if(!e&&!(b&&d&&b!=(a.o-1|0)&&d!=(a.t-1|0))&&c>=a.eD&&c<a.fE){L();e=Bcj.b;}f=a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0];a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0]=e<<24>>24;DL(a,b,c,d,0);if(f){L();Bcn.data[f].tl(a,b,c,d);}if(e){L();Bcn.data[e].gD(a,b,c,d);}L();if(!(Bd3.data[f]==Bd3.data[e]&&!Bd6.data[f]&&!Bd6.data[e])){X8(a.hV,b,d,1,1);NW(a.hV,b,c,d,b+1|0,c+1|0,d+1|0);}e=0;while(e<a.di.q){WU(Be(a.di,
e),b,c,d);e=e+1|0;}return 1;}return 0;}
function By(a,b,c,d,e){if(!H1(a,b,c,d,e))return 0;Ls(a,b,c,d,e);return 1;}
function Ls(a,b,c,d,e){Ik(a,b-1|0,c,d,e);Ik(a,b+1|0,c,d,e);Ik(a,b,c-1|0,d,e);Ik(a,b,c+1|0,d,e);Ik(a,b,c,d-1|0,e);Ik(a,b,c,d+1|0,e);}
function Ig(a,b,c,d,e){if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){if(e==a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0])return 0;a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0]=e<<24>>24;NW(a.hV,b,c,d,b+1|0,c+1|0,d+1|0);return 1;}return 0;}
function Ik(a,b,c,d,e){var f;if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){L();f=Bcn.data[a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0]];if(f!==null)f.jp(a,b,c,d,e);}}
function O(a,b,c,d){if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;return a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0]&255;}
function BN(a,b,c,d){var e;L();e=Bcn.data[O(a,b,c,d)];return e!==null?e.fK():0;}
function DJ(a){var b;AE3(a.dl);b=0;while(b<a.n7.q){Be(a.n7,b).zJ();b=b+1|0;}}
function HN(a){AD8(a.hV);}
function AIv(a,b){b=1.0-(Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(b<0.0)b=0.0;if(b>1.0)b=1.0;return b*b*0.5;}
function UO(a,b){var c,d,e;b=Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=(a.hJ>>16&255)/255.0;d=(a.hJ>>8&255)/255.0;e=(a.hJ&255)/255.0;return BF(c*b,d*b,e*b);}
function H3(a,b){if(a.dG>15)return 0.0;return (a.iV+b)/24000.0-0.15000000596046448;}
function ABE(a,b){var c,d,e,f;b=Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=(a.hD>>16&255)/255.0;d=(a.hD>>8&255)/255.0;e=(a.hD&255)/255.0;f=b*0.9399999976158142+0.05999999865889549;return BF(c*f,d*f,e*(b*0.9100000262260437+0.09000000357627869));}
function AIS(a,b){var c,d,e,f;b=Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=(a.hp>>16&255)/255.0;d=(a.hp>>8&255)/255.0;e=(a.hp&255)/255.0;f=b*0.8999999761581421+0.10000000149011612;return BF(c*f,d*f,e*(b*0.8500000238418579+0.15000000596046448));}
function Ov(a){var b,c;b=Bp(H3(a,1.0)*3.1415927410125732*2.0)*1.5+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=b*((15*a.dG|0)/15.0-4.0)+4.0|0;if(c>15)c=15;if(c<4)c=4;return c;}
function DM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a.iV=a.iV+1|0;if(a.iV==24000)a.iV=0;b=Ov(a);if(a.eg>b)X1(a,a.eg-1|0);if(a.eg<b)X1(a,a.eg+1|0);a.uH=a.uH+1|0;b=1;c=1;while(1<<b<a.o){b=b+1|0;}while(1<<c<a.t){c=c+1|0;}d=a.t-1|0;e=a.o-1|0;f=a.bu-1|0;g=a.j_.eX();if(g>200)g=200;h=0;while(h<g){a:{i=a.j_.FO(0);if(i.sP>0){i.sP=i.sP-1|0;a.j_.ky(i);break a;}j=i.rn;k=i.ty;l=i.sD;if(l<0)break a;if(k<0)break a;if(j<0)break a;if(l>=a.o)break a;if(k>=a.bu)break a;if(j>=a.t)break a;m=a.ca.data[K(K(i.ty,a.t)+i.rn|0,a.o)+i.sD
|0];if(m!=i.Ay)break a;if(m<=0)break a;L();Bcn.data[m].gj(a,i.sD,i.ty,i.rn,a.bo);}h=h+1|0;}a.ml=a.ml+K(K(a.o,a.t),a.bu)|0;g=a.ml/200|0;a.ml=a.ml-(g*200|0)|0;h=0;while(h<g){a.pq=(a.pq*3|0)+1013904223|0;n=a.pq>>2;o=n&e;l=n>>b&d;n=n>>(b+c|0)&f;p=a.ca.data[K(K(n,a.t)+l|0,a.o)+o|0];L();if(Bd1.data[p])Bcn.data[p].gj(a,o,n,l,a.bo);h=h+1|0;}}
function YC(a,b){var c,d;c=0;d=0;while(d<a.dl.fj.q){if(RS(b,B5(Be(a.dl.fj,d))))c=c+1|0;d=d+1|0;}return c;}
function A3T(a){return a.eD;}
function AVR(a){return a.fE;}
function SH(a,b){var c,d,e,f,g,h,i,j,k;c=b.bg|0;d=(b.bv|0)+1|0;e=b.bc|0;f=(b.bs|0)+1|0;g=b.bf|0;h=(b.bw|0)+1|0;if(b.bg<0.0)c=c+(-1)|0;if(b.bc<0.0)e=e+(-1)|0;if(b.bf<0.0)g=g+(-1)|0;if(c<0)c=0;if(e<0)e=0;if(g<0)g=0;if(d>a.o)d=a.o;if(f>a.bu)f=a.bu;if(h>a.t)h=a.t;while(c<d){i=e;while(i<f){j=g;while(j<h){L();k=Bcn.data[O(a,c,i,j)];if(k!==null&&k.cm.mc())return 1;j=j+1|0;}i=i+1|0;}c=c+1|0;}return 0;}
function AHw(a,b){var c,d,e,f,g,h,i,j,k;c=b.bg|0;d=(b.bv|0)+1|0;e=b.bc|0;f=(b.bs|0)+1|0;g=b.bf|0;h=(b.bw|0)+1|0;a:{while(c<d){i=e;while(i<f){j=g;while(j<h){k=O(a,c,i,j);L();if(k==Bd9.b)break a;if(k==Bck.b)break a;if(k==Bd8.b)break a;j=j+1|0;}i=i+1|0;}c=c+1|0;}return 0;}return 1;}
function P1(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.bg|0;e=(b.bv|0)+1|0;f=b.bc|0;g=(b.bs|0)+1|0;h=b.bf|0;i=(b.bw|0)+1|0;while(d<e){j=f;while(j<g){k=h;while(k<i){L();l=Bcn.data[O(a,d,j,k)];if(l!==null&&l.cm===c)return 1;k=k+1|0;}j=j+1|0;}d=d+1|0;}return 0;}
function Ge(a,b,c,d,e){var f;f=new P4;f.sD=b;f.ty=c;f.rn=d;f.Ay=e;if(e>0){L();f.sP=Bcn.data[e].rW();}a.j_.ky(f);}
function AEN(a,b){return Ht(a.dl,null,b).q?0:1;}
function AFZ(a,b){var c,d;c=Ht(a.dl,null,b);d=0;while(d<c.q){if(Be(c,d).tj)return 0;d=d+1|0;}return 1;}
function P7(a,b,c){return Ht(a.dl,b,c);}
function AOk(a,b,c,d,e){var f,g,h,i;e=b-0.10000000149011612;f=c-0.10000000149011612;g=d-0.10000000149011612;if(FW(a,e,f,g))h=1;else{i=d+0.10000000149011612;if(FW(a,e,f,i))h=1;else{c=c+0.10000000149011612;if(FW(a,e,c,g))h=1;else if(FW(a,e,c,i))h=1;else{b=b+0.10000000149011612;h=FW(a,b,f,g)?1:FW(a,b,f,i)?1:!FW(a,b,c,g)?FW(a,b,c,i):1;}}}return h;}
function FW(a,b,c,d){var e;a:{e=O(a,b|0,c|0,d|0);if(e>0){L();if(Bcn.data[e].fK()){e=1;break a;}}e=0;}return e;}
function Fz(a,b,c,d,e){a.g5=b;a.gZ=c;a.hx=d;a.r6=e;}
function DT(a,b,c,d){return Bga.data[D5(a,b,c,d)];}
function D5(a,b,c,d){var e;if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;e=a.ca.data[K(K(c,a.t)+d|0,a.o)+b|0];L();return e!=Bcs.b?(a.gW.data[K(K(c,a.t)+d|0,a.o)+b|0]&15)<<24>>24:c>=(a.bu-1|0)?15:(a.gW.data[K(K(c+1|0,a.t)+d|0,a.o)+b|0]&15)<<24>>24;}
function Cr(a,b,c,d){if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;return (a.gW.data[K(K(c,a.t)+d|0,a.o)+b|0]>>>4&15)<<24>>24;}
function DL(a,b,c,d,e){if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;a.gW.data[K(K(c,a.t)+d|0,a.o)+b|0]=((a.gW.data[K(K(c,a.t)+d|0,a.o)+b|0]&15)+(e<<4)|0)<<24>>24;e=0;while(e<a.di.q){WU(Be(a.di,e),b,c,d);e=e+1|0;}}
function CR(a,b,c,d){var e;b=O(a,b,c,d);if(!b)e=Bdh;else{L();e=Bcn.data[b].cm;}return e;}
function ACF(a,b,c,d){a:{b=O(a,b,c,d);if(b>0){L();if(Bcn.data[b].cm===Bdi){b=1;break a;}}b=0;}return b;}
function E2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;if(!(isNaN(b.U)?1:0)&&!(isNaN(b.R)?1:0)&&!(isNaN(b.S)?1:0)){if(!(isNaN(c.U)?1:0)&&!(isNaN(c.R)?1:0)&&!(isNaN(c.S)?1:0)){d=FN(c.U);e=FN(c.R);f=FN(c.S);g=FN(b.U);h=FN(b.R);i=FN(b.S);j=20;a:{while(true){k=j+(-1)|0;if(j<0)return null;if(isNaN(b.U)?1:0)break a;if(isNaN(b.R)?1:0)break a;if(isNaN(b.S)?1:0)break a;if(g==d&&h==e&&i==f)return null;l=999.0;m=999.0;n=999.0;j=Bw(d,g);if(j>0)l=g+1.0;if(j<0)l=g;o=Bw(e,h);if(o>0)m=h+1.0;if(o<0)m=h;h=Bw(f,
i);if(h>0)n=i+1.0;if(h<0)n=i;p=999.0;q=999.0;r=999.0;s=c.U-b.U;t=c.R-b.R;u=c.S-b.S;if(l!==999.0)p=(l-b.U)/s;if(m!==999.0)q=(m-b.R)/t;if(n!==999.0)r=(n-b.S)/u;if(p<q&&p<r){v=j<=0?5:4;b.U=l;b.R=b.R+t*p;b.S=b.S+u*p;}else if(q>=r){v=h<=0?3:2;b.U=b.U+s*r;b.R=b.R+t*r;b.S=n;}else{v=o<=0?1:0;b.U=b.U+s*q;b.R=m;b.S=b.S+u*q;}w=BF(b.U,b.R,b.S);x=FN(b.U);w.U=x;g=x|0;if(v==5){g=g+(-1)|0;w.U=w.U+1.0;}x=FN(b.R);w.R=x;h=x|0;if(v==1){h=h+(-1)|0;w.R=w.R+1.0;}x=FN(b.S);w.S=x;i=x|0;if(v==3){i=i+(-1)|0;w.S=w.S+1.0;}o=O(a,g,h,i);L();y
=Bcn.data[o];if(o>0&&y.pK()){z=y.Bf(a,g,h,i,b,c);if(z!==null)break;}j=k;}return z;}return null;}return null;}return null;}
function Mb(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=W(a.bo,3)+4|0;f=1;if(c>0){g=c+e|0;if((g+1|0)<=a.bu){h=(c+1|0)+e|0;i=h-2|0;j=c;while(j<=h){k=1;if(j==c)k=0;if(j>=i)k=2;l=b-k|0;while(l<=(b+k|0)&&f){m=d-k|0;while(m<=(d+k|0)&&f){if(!(l>=0&&j>=0&&m>=0&&l<a.o&&j<a.bu&&m<a.t))f=0;else if(a.ca.data[K(K(j,a.t)+m|0,a.o)+l|0]&255)f=0;m=m+1|0;}l=l+1|0;}j=j+1|0;}if(!f)return 0;n=a.ca.data;j=c-1|0;h=n[K(K(j,a.t)+d|0,a.o)+b|0]&255;L();if(!(h!=Bcp.b&&h!=Bcq.b)&&c<((a.bu-e|0)-1|0)){By(a,b,j,d,Bcq.b);h=(c-3|0)+e|0;while
(h<=g){o=h-g|0;i=1-(o/2|0)|0;p=b-i|0;f=b+i|0;k=d-i|0;m=d+i|0;while(p<=f){q=p-b|0;l=k;while(l<=m){a:{r=l-d|0;if(K$(q)==i&&K$(r)==i){if(!W(a.bo,2))break a;if(!o)break a;}if(!Bd2.data[O(a,p,h,l)])By(a,p,h,l,Bcz.b);}l=l+1|0;}p=p+1|0;}h=h+1|0;}j=0;while(j<e){n=Bd2.data;h=c+j|0;if(!n[O(a,b,h,d)])By(a,b,h,d,Bcy.b);j=j+1|0;}return 1;}return 0;}}return 0;}
function A2F(a){return a.cV;}
function De(a,b){var c;ADF(a.dl,b);b.A=a;c=0;while(c<a.di.q){Be(a.di,c);c=c+1|0;}}
function AII(a,b){var c;AEM(a.dl,b);c=0;while(c<a.di.q){Be(a.di,c);c=c+1|0;}}
function To(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn;g=A$z();h=0;while(h<16){i=0;while(i<16){j=0;while(j<16){a:{if(!(h&&h!=15&&i&&i!=15&&j&&j!=15)){k=h/15.0*2.0-1.0;l=i/15.0*2.0-1.0;m=j/15.0*2.0-1.0;n=Iu(k*k+l*l+m*m);o=k/n;p=l/n;k=m/n;q=f*(0.699999988079071+N(a.bo)*0.6000000238418579);o=o*0.30000001192092896;p=p*0.30000001192092896;r=k*0.30000001192092896;s=c;k=d;t=e;while(true){if(q<=0.0)break a;u=s|0;v=k|0;w=t|0;x=O(a,u,v,w);if(x>0){L();q=q-(ABx(Bcn.data[x])
+0.30000001192092896)*0.30000001192092896;}if(q>0.0)ABB(g,C0((u+(v<<10)|0)+(w<<10<<10)|0));s=s+o;k=k+p;t=t+r;q=q-0.22500000894069672;}}}j=j+1|0;}i=i+1|0;}h=h+1|0;}k=f*2.0;y=c-k-1.0|0;i=c+k+1.0|0;j=d-k-1.0|0;z=d+k+1.0|0;ba=e-k-1.0|0;bb=e+k+1.0|0;bc=AEk(a.dl,b,y,j,ba,i,z,bb);bd=BF(c,d,e);be=0;while(be<CE(bc)){bf=Be(bc,be);o=bf.f-c;p=bf.j-d;bg=bf.g-e;t=B$(o*o+p*p+bg*bg)/k;if(t<=1.0){s=bf.f-c;r=bf.j-d;bh=bf.g-e;bi=B$(s*s+r*r+bh*bh);s=s/bi;o=r/bi;p=bh/bi;bj=(1.0-t)*AAD(a,bd,bf.Y);bf.eY(b,(bj*bj+bj)/2.0*8.0*k+1.0
|0);bf.G=bf.G+s*bj;bf.C=bf.C+o*bj;bf.H=bf.H+p*bj;}be=be+1|0;}bk=BV();YA(bk,g);y=CE(bk)-1|0;while(y>=0){bl=AIp(Be(bk,y));h=bl&1023;u=bl>>10&1023;v=bl>>20&1023;if(h>=0&&u>=0&&v>=0&&h<a.o&&u<a.bu&&v<a.t){w=O(a,h,u,v);x=0;r=h;q=u;l=v;while(x<=0){bj=r+N(a.bo);bm=q+N(a.bo);bn=l+N(a.bo);s=bj-c;o=bm-d;p=bn-e;k=B$(s*s+o*o+p*p);s=s/k;o=o/k;p=p/k;k=0.5/(k/f+0.10000000149011612)*(N(a.bo)*N(a.bo)+0.30000001192092896);s=s*k;o=o*k;p=p*k;BY(a,B(368),(bj+c)/2.0,(bm+d)/2.0,(bn+e)/2.0,s,o,p);BY(a,B(273),bj,bm,bn,s,o,p);x=x+1|
0;}if(w>0){L();Y0(Bcn.data[w],a,h,u,v,Cr(a,h,u,v),0.30000001192092896);By(a,h,u,v,0);Bcn.data[w].A4(a,h,u,v);}}y=y+(-1)|0;}}
function AAD(a,b,c){var d,e,f,g,h,i,j,k;d=1.0/((c.bv-c.bg)*2.0+1.0);e=1.0/((c.bs-c.bc)*2.0+1.0);f=1.0/((c.bw-c.bf)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){k=0.0;while(k<=1.0){if(E2(a,BF(c.bg+(c.bv-c.bg)*i,c.bc+(c.bs-c.bc)*j,c.bf+(c.bw-c.bf)*k),b)===null)g=g+1|0;h=h+1|0;k=k+f;}j=j+e;}i=i+d;}return g/h;}
function AFL(a,b){var c,d;c=0;while(true){if(c>=a.dl.fj.q)return null;d=Be(a.dl.fj,c);if(RS(b,B5(d)))break;c=c+1|0;}return d;}
function SN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){g=(((c<<10)+d|0)<<10)+b|0;h=1;a.hs.data[0]=b+(d<<10)|0;i=(-9999);L();if(!(e!=Bd7.b&&e!=Bcj.b))i=Bd$.b;if(!(e!=Bd8.b&&e!=Bck.b))i=Bd_.b;while(true){j=0;k=(-1);l=0;m=(Bgb+1|0)<<16>>16;Bgb=m;if(m==30000){AFR(a.e1,0);Bgb=1;}while(h>0){h=h+(-1)|0;n=a.hs.data[h];if(a.e1.data[n]==Bgb)continue;o=n%1024|0;p=n/1024|0;q=p-d|0;q=K(q,q);while(o>0&&a.e1.data[n-1|0]!=Bgb&&!(a.ca.data[(K(K(c,a.t)+p|0,a.o)+o|0)-1|0]
!=e&&a.ca.data[(K(K(c,a.t)+p|0,a.o)+o|0)-1|0]!=f)){o=o+(-1)|0;n=n+(-1)|0;}if(o>0&&a.ca.data[(K(K(c,a.t)+p|0,a.o)+o|0)-1|0]==i)j=1;r=0;s=0;t=0;while(o<a.o&&a.e1.data[n]!=Bgb&&!(a.ca.data[K(K(c,a.t)+p|0,a.o)+o|0]!=e&&a.ca.data[K(K(c,a.t)+p|0,a.o)+o|0]!=f)){if(p<=0){u=h;v=r;}else{m=a.ca.data[K((K(c,a.t)+p|0)-1|0,a.o)+o|0];if(m==i)j=1;a:{b:{w=a.e1.data;x=n-1024|0;if(w[x]!=Bgb){if(m==e)break b;if(m==f)break b;}v=0;break a;}v=1;}if(!v)u=h;else if(r)u=h;else{w=a.hs.data;u=h+1|0;w[h]=x;}}if(p>=(a.t-1|0)){h=u;y=s;}else
{m=a.ca.data[K((K(c,a.t)+p|0)+1|0,a.o)+o|0];if(m==i)j=1;c:{d:{w=a.e1.data;x=n+1024|0;if(w[x]!=Bgb){if(m==e)break d;if(m==f)break d;}y=0;break c;}y=1;}if(!y)h=u;else if(s)h=u;else{w=a.hs.data;h=u+1|0;w[u]=x;}}if(c>=(a.bu-1|0)){m=l;x=t;}else{m=a.ca.data[K(K(c+1|0,a.t)+p|0,a.o)+o|0];x=m!=e&&m!=f?0:1;if(!x)m=l;else if(t)m=l;else{w=a.tG.data;m=l+1|0;w[l]=n;}}u=o-b|0;l=K(u,u)+q|0;if(l>k){g=(((c<<10)+p|0)<<10)+o|0;k=l;}w=a.e1.data;u=n+1|0;w[n]=Bgb;o=o+1|0;r=v;s=y;l=m;t=x;n=u;}if(o<a.o&&a.ca.data[K(K(c,a.t)+p|0,a.o)
+o|0]==i)j=1;}c=c+1|0;w=a.tG;a.tG=a.hs;a.hs=w;if(l<=0)break;h=l;}if(!j)return g;return (-9999);}return (-1);}
function AMd(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){g=(Bgb+1|0)<<16>>16;Bgb=g;if(g==30000){AFR(a.e1,0);Bgb=1;}h=1;a.hs.data[0]=b+(d<<10)|0;a:{b:{while(h>0){h=h+(-1)|0;i=a.hs.data[h];if(a.e1.data[i]==Bgb)continue;j=i%1024|0;k=i/1024|0;if(!j)break a;if(j==(a.o-1|0))break a;if(!c)break a;if(c==(a.bu-1|0))break a;if(!k)break a;if(k==(a.t-1|0))break a;while(j>0&&a.e1.data[i-1|0]!=Bgb&&!(a.ca.data[(K(K(c,a.t)+k|0,a.o)+j|0)-1|0]!=e&&a.ca.data[(K(K(c,a.t)+k|0,a.o)+j|0)-1|0]!=
f)){j=j+(-1)|0;i=i+(-1)|0;}if(j>0&&!a.ca.data[(K(K(c,a.t)+k|0,a.o)+j|0)-1|0])return 0;g=0;l=0;while(j<a.o&&a.e1.data[i]!=Bgb&&!(a.ca.data[K(K(c,a.t)+k|0,a.o)+j|0]!=e&&a.ca.data[K(K(c,a.t)+k|0,a.o)+j|0]!=f)){if(!j)break b;if(j==(a.o-1|0))break b;if(k<=0){b=h;m=g;}else{n=a.ca.data[K((K(c,a.t)+k|0)-1|0,a.o)+j|0];if(!n)return 0;c:{d:{o=a.e1.data;d=i-1024|0;if(o[d]!=Bgb){if(n==e)break d;if(n==f)break d;}m=0;break c;}m=1;}if(!m)b=h;else if(g)b=h;else{o=a.hs.data;b=h+1|0;o[h]=d;}}if(k>=(a.t-1|0))h=b;else{n=a.ca.data[K((K(c,
a.t)+k|0)+1|0,a.o)+j|0];if(!n)return 0;e:{f:{o=a.e1.data;g=i+1024|0;if(o[g]!=Bgb){if(n==e)break f;if(n==f)break f;}p=0;break e;}p=1;}if(!p)h=b;else if(l)h=b;else{o=a.hs.data;h=b+1|0;o[b]=g;}l=p;}a.e1.data[i]=Bgb;i=i+1|0;j=j+1|0;g=m;}if(j>=a.o)continue;if(!a.ca.data[K(K(c,a.t)+k|0,a.o)+j|0])return 0;}return 1;}return 2;}return 2;}return 0;}
function AEi(a,b,c,d,e){if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;e=O(a,b,c,d);L();if(e==Bd9.b)By(a,b,c,d,0);}
function KV(a,b,c,d,e){e.An=a;e.DG=b;e.FH=c;e.CX=d;BI(a.mb,C0((b+(c<<10)|0)+(d<<10<<10)|0),e);M(a.n7,e);}
function W4(a,b,c,d){GE(a.n7,M6(a.mb,C0((b+(c<<10)|0)+(d<<10<<10)|0)));}
function FZ(a,b,c,d){var e,f,g;e=(b+(c<<10)|0)+(d<<10<<10)|0;f=Co(a.mb,C0(e));if(f===null){g=O(a,b,c,d);L();Bcn.data[g].gD(a,b,c,d);f=Co(a.mb,C0(e));}return f;}
function BY(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.di.q){AB7(Be(a.di,i),b,c,d,e,f,g,h);i=i+1|0;}}
function DN(a,b,c,d){var e,f,g,h,i;e=0;while(e<1000){f=(b+W(a.bo,16)|0)-W(a.bo,16)|0;g=(c+W(a.bo,16)|0)-W(a.bo,16)|0;h=(d+W(a.bo,16)|0)-W(a.bo,16)|0;i=O(a,f,g,h);if(i>0){L();Bcn.data[i].oP(a,f,g,h,a.Dx);}e=e+1|0;}}
function WL(a){var b;b=new R;T(b);return S(E(E(Bd(E(b,B(9)),a.j_.eX()),B(370)),AJ9(a.hV)));}
function AFK(a){var b,c;b=0;while(b<a.di.q){Be(a.di,b);c=0;while(c<a.dl.fj.q){Be(a.dl.fj,b);c=c+1|0;}b=b+1|0;}}
function X1(a,b){AA2(a.hV,b);}
function Mf(a,b,c,d){if(a.ko.data[b+K(d,a.o)|0]<=c)return 1;while(c<a.bu){L();if(Bd2.data[O(a,b,c,d)])return 0;c=c+1|0;}return 1;}
function ALP(){var b,c;Bga=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;Bga.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}Bgb=0;}
function Kx(){var a=this;C.call(a);a.kI=null;a.cw=null;a.hn=null;a.nr=null;}
function E_(a,b){var c;c=b.yi();M(a.cw.data[c],b);}
function DS(a){var b,c,d,e;b=0;while(b<3){c=0;while(c<a.cw.data[b].q){d=Be(a.cw.data[b],c);d.eQ();if(!d.hN)e=c;else{d=a.cw.data[b];e=c+(-1)|0;Ej(d,c);}c=e+1|0;}b=b+1|0;}}
function ABK(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Bp(b.I*3.1415927410125732/180.0);e=Bv(b.I*3.1415927410125732/180.0);f= -e*Bv(b.X*3.1415927410125732/180.0);g=d*Bv(b.X*3.1415927410125732/180.0);h=Bp(b.X*3.1415927410125732/180.0);i=0;while(i<2){if(a.cw.data[i].q){if(!i){b=a.hn;j=B(371);$p=1;continue _;}if(i==1){b=a.hn;j=B(205);$p
=2;continue _;}Cj(3553,0);BE();j=Bdg;Bx(j);k=0;if(k<a.cw.data[i].q){l=Be(a.cw.data[i],k);$p=3;continue _;}Bt(j);}i=i+1|0;}return;case 1:$z=AB_(b,j);if(I()){break _;}m=$z;a:while(true){if(i==1){b=a.hn;j=B(205);$p=2;continue _;}Cj(3553,m);BE();j=Bdg;Bx(j);k=0;if(k<a.cw.data[i].q){l=Be(a.cw.data[i],k);$p=3;continue _;}Bt(j);while(true){i=i+1|0;if(i>=2)break a;if(!a.cw.data[i].q)continue;else break;}m=0;if(!i){b=a.hn;j=B(371);continue _;}}return;case 2:$z=AB_(b,j);if(I()){break _;}m=$z;a:while(true){Cj(3553,m);BE();j
=Bdg;Bx(j);k=0;if(k<a.cw.data[i].q){l=Be(a.cw.data[i],k);$p=3;continue _;}Bt(j);while(true){i=i+1|0;if(i>=2)break a;if(!a.cw.data[i].q)continue;else break;}m=0;if(!i){b=a.hn;j=B(371);$p=1;continue _;}if(i==1){b=a.hn;j=B(205);continue _;}}return;case 3:l.jj(j,c,d,h,e,f,g);if(I()){break _;}k=k+1|0;a:while(true){if(k<a.cw.data[i].q){l=Be(a.cw.data[i],k);continue _;}Bt(j);while(true){i=i+1|0;if(i>=2)break a;if(!a.cw.data[i].q)continue;else break;}if(!i){b=a.hn;j=B(371);$p=1;continue _;}if(i==1){b=a.hn;j=B(205);$p
=2;continue _;}Cj(3553,0);BE();j=Bdg;Bx(j);k=0;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIW(a,b){var c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cw.data[2].q){BE();c=Bdg;d=0;if(d<a.cw.data[2].q){e=Be(a.cw.data[2],d);f=0.0;g=0.0;h=0.0;i=0.0;j=0.0;$p=1;continue _;}}return;case 1:e.jj(c,b,f,g,h,i,j);if(I()){break _;}d=d+1|0;if(d>=a.cw.data[2].q)return;e=Be(a.cw.data[2],d);f=0.0;g=0.0;h=0.0;i=0.0;j=0.0;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,
h,i,j,$p);}
function AK3(a,b){var c;a.kI=b;c=0;while(c<3){ES(a.cw.data[c]);c=c+1|0;}}
function AN_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;a:{e=O(a.kI,b,c,d);if(e){L();f=Bcn.data[e];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;E_(a,AZg(a.kI,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,f));l=l+1|0;}k=k+1|0;}g=g+1|0;}}}}
function EK(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=O(a.kI,b,c,d);if(f){L();g=Bcn.data[f];h=b;i=h+N(a.nr)*(g.fD-g.ex-0.20000000298023224)+0.10000000149011612+g.ex;j=c;k=j+N(a.nr)*(g.cE-g.cj-0.20000000298023224)+0.10000000149011612+g.cj;l=d;m=l+N(a.nr)*(g.fC-g.ew-0.20000000298023224)+0.10000000149011612+g.ew;if(!e)k=j+g.cj-0.10000000149011612;if(e==1)k=j+g.cE+0.10000000149011612;if(e==2)m=l+g.ew-0.10000000149011612;if(e==3)m=l+g.fC+0.10000000149011612;if(e==4)i=h+g.ex-0.10000000149011612;if(e==5)i=h+g.fD+0.10000000149011612;E_(a,
ANl(ACK(AZg(a.kI,i,k,m,0.0,0.0,0.0,g),0.20000000298023224),0.6000000238418579));}}
function Sy(a){var b;b=new R;T(b);return S(Bd(E(b,B(9)),(a.cw.data[0].q+a.cw.data[1].q|0)+a.cw.data[2].q|0));}
function GC(){C.call(this);this.nq=0.0;}
function Bgc(){var a=new GC();JH(a);return a;}
function JH(a){a.nq=0.0;}
function AGa(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=(f>>>24)/255.0;h=(f>>16&255)/255.0;i=(f>>8&255)/255.0;j=(f&255)/255.0;BE();k=Bdg;Y(3042);Bc(3553);Dy(770,771);BJ(h,i,j,g);Bx(k);l=b;m=e;Bo(k,l,m,0.0);n=d;Bo(k,n,m,0.0);m=c;Bo(k,n,m,0.0);Bo(k,l,m,0.0);Bt(k);Y(3553);Bc(3042);}
function Px(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>>24)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>>24)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bc(3553);Y(3042);Bc(3008);Dy(770,771);BE();p=Bdg;Bx(p);Oc(p,i,j,k,h);q=d;r=c;Bo(p,q,r,0.0);s=b;Bo(p,s,r,0.0);Oc(p,m,n,o,l);r=e;Bo(p,s,r,0.0);Bo(p,q,r,0.0);Bt(p);Bc(3042);Y(3008);Y(3553);}
function Eh(b,c,d,e,f){CG(b,c,d-(Ei(b,c)/2|0)|0,e,f);}
function NX(b,c,d,e,f){CG(b,c,d,e,f);}
function CD(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BE();h=Bdg;Bx(h);i=b;j=c+g|0;k=a.nq;l=d*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.nq;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);o=c;m=a.nq;j=e*0.00390625;G(h,n,o,m,k,j);G(h,i,o,a.nq,l,j);Bt(h);}
function Jd(){var a=this;GC.call(a);a.ht=null;a.n9=null;a.ck=null;a.n3=0;}
var Bgd=null;function ADL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=G8(a.ck.cp,a.ck.cr);d=AD2(c);e=AKA(c);f=a.ck.jl;O_(a.ck.cI);g
=3553;c=a.ck.cf;h=B(372);$p=1;case 1:$z=AB_(c,h);if(I()){break _;}i=$z;Cj(g,i);BJ(1.0,1.0,1.0,1.0);Y(3042);j=a.ck.a.F;a.nq=(-90.0);k=d/2|0;l=k-91|0;m=e-22|0;CD(a,l,m,0,0,182,22);CD(a,(l-1|0)+(j.J*20|0)|0,m-1|0,0,22,24,22);g=3553;c=a.ck.cf;h=B(373);$p=2;case 2:$z=AB_(c,h);if(I()){break _;}i=$z;Cj(g,i);Y(3042);Dy(775,769);CD(a,k-7|0,(e/2|0)-7|0,0,0,16,16);Bc(3042);n=((a.ck.a.hX/3|0)%2|0)!=1?0:1;if(a.ck.a.hX<10)n=0;a:{o=a.ck.a.b0;p=a.ck.a.rB;AK2(a.n9,Long_fromInt(K(a.n3,312871)));if(AIQ(a.ck.P)){g=W9(a.ck.a.F);q
=0;r=e-32|0;s=k+91|0;m=Bw(o,4);while(q<10){if(g>0){t=(s-(q<<3)|0)-9|0;i=Bw((q<<1)+1|0,g);if(i<0)CD(a,t,r,34,9,9,9);if(!i)CD(a,t,r,25,9,9,9);if(i>0)CD(a,t,r,16,9,9,9);}u=0;if(n)u=1;v=l+(q<<3)|0;i=m>0?r:r+W(a.n9,2)|0;CD(a,v,i,16+(u*9|0)|0,0,9,9);if(n){t=Bw((q<<1)+1|0,p);if(t<0)CD(a,v,i,70,0,9,9);if(!t)CD(a,v,i,79,0,9,9);}t=Bw((q<<1)+1|0,o);if(t<0)CD(a,v,i,52,0,9,9);if(!t)CD(a,v,i,61,0,9,9);q=q+1|0;}if(D4(a.ck.a)){g=WV((a.ck.a.h4-2|0)*10.0/300.0)|0;m=(WV(a.ck.a.h4*10.0/300.0)|0)-g|0;t=0;i=g+m|0;w=r-9|0;while(true)
{if(t>=i)break a;if(t>=g)CD(a,l+(t<<3)|0,w,25,18,9,9);else CD(a,l+(t<<3)|0,w,16,18,9,9);t=t+1|0;}}}}Bc(3042);Y(2977);Ca();Bs(180.0,1.0,0.0,0.0);I4();BS();l=0;g=k-90|0;k=(e-16|0)-3|0;i=k+12|0;x=i;y= -i;while(l<9){i=(g+(l*20|0)|0)+2|0;z=a.ck.a.F.br.data[l];if(z!==null){ba=z.kV-b;q=Bw(ba,0.0);if(q>0){Ca();bb=1.0+ba/5.0;m=i+8|0;Bj(m,x,0.0);C7(1.0/bb,(bb+1.0)/2.0,1.0);Bj( -m,y,0.0);}c=Bgd;h=a.ck.cf;$p=3;continue _;}l=l+1|0;}D9();Bc(2977);if(!a.ck.d.kc)CG(f,B(374),2,2,16777215);else{CG(f,B(374),2,2,16777215);CG(f,
a.ck.os,2,12,16777215);CG(f,YL(a.ck.cx),2,22,16777215);CG(f,RJ(a.ck.cx),2,32,16777215);c=a.ck;CG(f,B0(E(E(E(E(Cd(),B(375)),Sy(c.bI)),B(376)),WL(c.i))),2,42,16777215);bc=Ng();bd=NT();be=Long_sub(bc,MK());h=B0(E(DZ(E(DZ(E(Cd(),B(377)),Long_div(Long_mul(be,Long_fromInt(100)),bc)),B(378)),Long_div(Long_div(bc,Long_fromInt(1024)),Long_fromInt(1024))),B(379)));NX(f,h,(d-Ei(f,h)|0)-2|0,2,14737632);c=B0(E(DZ(E(DZ(E(Cd(),B(380)),Long_div(Long_mul(bd,Long_fromInt(100)),bc)),B(381)),Long_div(Long_div(bd,Long_fromInt(1024)),
Long_fromInt(1024))),B(382)));NX(f,c,(d-Ei(f,c)|0)-2|0,12,14737632);}m=0;h=null;q=e-8|0;while(m<CE(a.ht)&&m<10){if(Be(a.ht,m).rC<200){Be(a.ht,m);CG(f,h,2,(q-(m*9|0)|0)-20|0,16777215);}m=m+1|0;}return;case 3:AKW(c,h,z,i,k);if(I()){break _;}if(q>0)BS();Pk(Bgd,a.ck.jl,z,i,k);while(true){l=l+1|0;if(l>=9)break;i=(g+(l*20|0)|0)+2|0;z=a.ck.a.F.br.data[l];if(z===null)continue;else{ba=z.kV-b;q=Bw(ba,0.0);if(q>0){Ca();bb=1.0+ba/5.0;m=i+8|0;Bj(m,x,0.0);C7(1.0/bb,(bb+1.0)/2.0,1.0);Bj( -m,y,0.0);}c=Bgd;h=a.ck.cf;continue _;}}D9();Bc(2977);if
(!a.ck.d.kc)CG(f,B(374),2,2,16777215);else{CG(f,B(374),2,2,16777215);CG(f,a.ck.os,2,12,16777215);CG(f,YL(a.ck.cx),2,22,16777215);CG(f,RJ(a.ck.cx),2,32,16777215);c=a.ck;CG(f,B0(E(E(E(E(Cd(),B(375)),Sy(c.bI)),B(376)),WL(c.i))),2,42,16777215);bc=Ng();bd=NT();be=Long_sub(bc,MK());h=B0(E(DZ(E(DZ(E(Cd(),B(377)),Long_div(Long_mul(be,Long_fromInt(100)),bc)),B(378)),Long_div(Long_div(bc,Long_fromInt(1024)),Long_fromInt(1024))),B(379)));NX(f,h,(d-Ei(f,h)|0)-2|0,2,14737632);c=B0(E(DZ(E(DZ(E(Cd(),B(380)),Long_div(Long_mul(bd,
Long_fromInt(100)),bc)),B(381)),Long_div(Long_div(bd,Long_fromInt(1024)),Long_fromInt(1024))),B(382)));NX(f,c,(d-Ei(f,c)|0)-2|0,12,14737632);}m=0;h=null;q=e-8|0;while(m<CE(a.ht)&&m<10){if(Be(a.ht,m).rC<200){Be(a.ht,m);CG(f,h,2,(q-(m*9|0)|0)-20|0,16777215);}m=m+1|0;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,$p);}
function ADH(a){var b,c;a.n3=a.n3+1|0;b=0;while(b<a.ht.q){c=Be(a.ht,b);c.rC=c.rC+1|0;b=b+1|0;}}
function AKb(){Bgd=AM8();}
function Ds(){Cq.call(this);}
function H7(){var a=this;C.call(a);a.o3=null;a.rJ=0;a.yK=0;a.yL=0;a.yM=0;a.n4=0;a.m8=0;a.m2=0;a.gA=0;a.of=null;a.D5=0;a.z2=0;a.CC=0;a.pM=0;a.w_=null;a.Al=null;a.jP=0;}
var Bge=null;var Bcl=0;function AKx(){AKx=Bl(H7);A7V();}
function AN$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a:{if(a.pM){Bcl=Bcl+1|0;b=a.yK;c=a.yL;d=a.yM;e=a.yK+a.n4|0;f=a.yL+a.m8|0;g=a.yM+a.m2|0;h=0;while(h<2){a.of.data[h]=1;h=h+1|0;}i=0;while(true){if(i>=2)break a;j=0;k=0;Bx(Bge);EY(a.rJ+i|0,4864);l=c;while(l<f){m=d;while(m<g){n=K(K(l,a.o3.t)+m|0,a.o3.o)+b|0;o=b;while(o<e){p=a.o3.ca.data;h=n+1|0;q=p[n]&255;if(q>0){L();r=Bcn.data[q];if(r.yl()!=i)j=1;else k=k|Oy(a.Al,r,o,l,m);}o=o+1|0;n=h;}m=m+1|0;}l=l+1|0;}Bt(Bge);E6();if(k)a.of.data[i]=0;if(!j)break;i=i+1|0;}}}}
function IP(a,b){var c,d,e;c=b.f-a.D5;d=b.j-a.z2;e=b.g-a.CC;return c*c+d*d+e*e;}
function Zb(a){var b;b=0;while(b<2){a.of.data[b]=1;b=b+1|0;}}
function AFG(a){Zb(a);a.o3=null;}
function AFH(a,b,c,d){var e;if(!a.gA)return c;if(a.of.data[d])e=c;else{b=b.data;e=c+1|0;b[c]=a.rJ+d|0;}return e;}
function ADB(a,b){a.gA=Py(b,a.w_);}
function A7V(){BE();Bge=Bdg;Bcl=0;}
function CV(){var a=this;GC.call(a);a.x=null;a.bq=0;a.bM=0;a.ba=null;a.n$=0;a.cK=null;}
function Bgf(){var a=new CV();Fp(a);return a;}
function Fp(a){JH(a);a.ba=BV();a.n$=0;}
function AN2(a,b,c,d){var e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.ba.q)return;f=Be(a.ba,e);g=a.x;$p=1;case 1:AE1(f,g,b,c);if(I()){break _;}e=e+1|0;if(e>=a.ba.q)return;f=Be(a.ba,e);g=a.x;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function AM2(a,b,c){var d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.x;e=null;$p=1;case 1:AOR(d,e);if(I()){break _;}d=a.x;$p=2;case 2:AEr(d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function AFm(a,b,c,d){var e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.ba.q)break a;f=Be(a.ba,e);if(RT(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iX(f);if(I()){break _;}while(true){e=e+1|0;if(e>=a.ba.q)break;f=Be(a.ba,e);if(!RT(f,b,c))continue;else{continue _;}}return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function AFV(a,b){return;}
function OZ(a,b,c,d){a.x=b;a.cK=b.jl;a.bq=c;a.bM=d;a.hU();}
function AWV(a){return;}
function ALH(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cv()){QA();SO();C3();return;}b=K(QA(),a.bq)/a.x.cp|0;c=(a.bM-(K(SO(),a.bM)/a.x.cr|0)|0)-1|0;d=C3();$p=1;case 1:a.IN(b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AEA(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!C6())return;if(Bas===null)b=0;else{c=$rt_str(Bas.key);b=Bas===null?32:Q(c)>1?0:P(c,0);}d=Bi();$p=1;case 1:a.pE(b,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AJY(a){return;}
function A3H(a){return;}
function AA5(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.x.i!==null){Px(0,0,a.bq,a.bM,1610941696,(-1607454624));return;}Bc(2896);Bc(2912);BE();b=Bdg;c=3553;d=a.x.cf;e=B(227);$p=1;case 1:$z=AB_(d,e);if(I()){break _;}f=$z;Cj(c,f);BJ(1.0,1.0,1.0,1.0);Bx(b);Ii(b,4210752);G(b,0.0,a.bM,0.0,0.0,a.bM/32.0);G(b,a.bq,a.bM,0.0,a.bq/32.0,a.bM/32.0);G(b,a.bq,0.0,0.0,a.bq/32.0,0.0);G(b,0.0,0.0,0.0,0.0,0.0);Bt(b);return;default:
F2();}}Dh().s(a,b,c,d,e,f,$p);}
function A0f(a){return 1;}
function ACw(){CV.call(this);this.wp=null;}
function AS3(){var a=new ACw();A7y(a);return a;}
function A7y(a){Fp(a);a.wp=B(383);}
function AKh(a,b,c){return;}
function A7I(a){ES(a.ba);M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(384)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+48|0,B(385)));M(a.ba,CL(3,(a.bq/2|0)-100|0,(a.bM/4|0)+96|0,B(386)));M(a.ba,CL(0,(a.bq/2|0)-100|0,((a.bM/4|0)+120|0)+12|0,B(387)));if(A_E===null)Be(a.ba,1).fc=0;Be(a.ba,2).fc=0;}
function AJl(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.bC){c=a.x;d=AFQ(a,a.x.d);$p=1;continue _;}if(b.bC==1){c=a.x;d=LQ(a);$p=2;continue _;}if(b.bC!=2)return;c=new FP;d=Bch;$p=3;continue _;case 1:AOR(c,d);if(I()){break _;}if(b.bC==1){c=a.x;d=LQ(a);$p=2;continue _;}if(b.bC!=2)return;c=new FP;d=Bch;$p=3;continue _;case 2:AOR(c,d);if(I()){break _;}if(b.bC!=2)return;c=new FP;d=Bch;$p=3;case 3:$z=AMH(c);if(I()){break _;}b=$z;$p
=4;case 4:ADi(d,b);if(I()){break _;}b=a.x;c=null;$p=5;case 5:AOR(b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AMP(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}BE();e=Bdg;f=3553;g=a.x.cf;h=B(388);$p=2;case 2:$z=AB_(g,h);if(I()){break _;}i=$z;Cj(f,i);BJ(1.0,1.0,1.0,1.0);Ii(e,16777215);CD(a,(a.bq-256|0)/2|0,30,0,0,256,49);Ca();Bj((a.bq/2|0)+90|0,70.0,0.0);Bs((-20.0),0.0,0.0,1.0);j=Bv(Long_toNumber(Long_rem(CF(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Ei(a.cK,a.wp)+32|0);C7(k,k,k);Eh(a.cK,a.wp,0,(-8),16776960);BS();CG(a.cK,B(389),(a.bq-Ei(a.cK,B(389))|0)-2|0,a.bM-10|0,16777215);l=Ng();m=NT();n=Long_sub(l,MK());e=new R;T(e);e=S(E(DZ(E(DZ(E(e,B(377)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(378)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(379)));CG(a.cK,e,(a.bq-Ei(a.cK,e)|0)-2|0,2,8421504);e=new R;T(e);h=S(E(DZ(E(DZ(E(e,
B(380)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(381)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(382)));CG(a.cK,h,(a.bq-Ei(a.cK,h)|0)-2|0,12,8421504);$p=3;case 3:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function F4(){BA.call(this);}
function Ho(){}
function Y5(){C.call(this);this.AT=null;}
function AIr(a){var b,c,d,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.AT;try{Bdq=Bdq+1|0;FV(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);c=$$je;}d=b.ng;$p=2;continue _;case 1:a:{try{b.hM();if(I()){break _;}}catch($$e){$$je=Bh($$e);c=$$je;break a;}c=b.ng;$p=3;continue _;}d=b.ng;$p=2;case 2:AEX(d);if(I()){break _;}a:{try{ZY(b.ng);Pf(d);break a;}catch($$e){$$je=Bh($$e);b=$$je;}Pf(d);J(b);}b.w0=0;Bdq=Bdq-1|0;FV(Bdo);J(c);case 3:AEX(c);if
(I()){break _;}a:{try{ZY(b.ng);Pf(c);break a;}catch($$e){$$je=Bh($$e);b=$$je;}Pf(c);J(b);}b.w0=0;Bdq=Bdq-1|0;FV(Bdo);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function E3(){var a=this;C.call(a);a.hP=null;a.v6=0.0;a.v8=0.0;}
function Hx(a,b,c,d,e){var f=new E3();A6h(f,a,b,c,d,e);return f;}
function A6h(a,b,c,d,e,f){a.hP=BF(b,c,d);a.v6=e;a.v8=f;}
function K8(a,b,c){var d;d=new E3;d.hP=a.hP;d.v6=b;d.v8=c;return d;}
function Gd(){C.call(this);this.hi=null;}
function Bgg(a,b,c,d,e){var f=new Gd();HG(f,a,b,c,d,e);return f;}
function HG(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.hi=b;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=K8(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=K8(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=K8(h,k,l);g[3]=K8(g[3],i,l);}
function MU(){var a=this;C.call(a);a.bV=0;a.o9=0;a.sz=Long_ZERO;a.bH=Long_ZERO;a.ph=0;a.dO=0;a.yJ=0;a.iJ=null;a.v=null;a.eE=0;a.iR=0;a.yw=null;a.cD=null;a.fT=null;}
var Bgh=null;function AF9(a){var b;if(a.v===null)return (-2);b=a.v;a.v.nQ=Long_ZERO;b.y=Long_ZERO;a.v.cb=null;a.bV=14;a.iR=(-1);KT(a.iJ);return 0;}
function AF$(a){if(a.iJ!==null)U8(a.iJ);return 0;}
function AAk(a,b){var c,d,e,f;a.v.cb=null;a.iJ=null;a.dO=0;if(b<0)b= -b;else if(b&1073741824){a.dO=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.dO=4;b=b&15;}else{a.dO=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iJ!==null&&a.yJ!=b){U8(a.iJ);a.iJ=null;}a.yJ=b;c=new LE;d=a.v;b=1<<b;c.sR=$rt_createIntArray(1);c.pg=$rt_createIntArray(1);c.np=$rt_createIntArray(1);c.nn=$rt_createIntArray(1);c.wc=H($rt_arraycls($rt_intcls()),1);c.we=H($rt_arraycls($rt_intcls()),1);c.vC=$rt_createIntArray(1);c.vH=$rt_createIntArray(1);e
=new F3;e.kh=null;e.kq=null;e.eK=null;e.fG=null;e.lL=null;e.iu=null;c.xC=e;c.p=d;e=new MJ;f=c.p;e.lx=0;e.bb=f;e.u=c;c.p3=e;c.kz=$rt_createIntArray(4320);c.cS=$rt_createByteArray(b);c.cM=b;c.rM=d.jG.dO?1:0;c.dC=0;KT(c);a.iJ=c;AF9(a);return 0;}AF$(a);return (-2);}
function AGE(a,b){var c,d,e,f,g,h,i,$$je;if(a.v!==null&&a.v.cn!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bV){case 6:a.bV=13;a.v.cb=B(390);a.ph=0;return (-2);case 7:d=ABG(a.iJ,d);if(d==(-3)){a.bV=13;a.ph=0;continue i;}if(!d)d=c;if(d!=1)break i;a.sz=a.v.f5.zD();KT(a.iJ);if(!a.dO){a.bV=12;d=c;continue i;}a.bV=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=GH(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$)
{e=$$je;return e.hy;}else{throw $$e;}}a.eE=a.bH.lo&65535;if((a.eE&255)!=8){a.v.cb=B(391);a.bV=13;continue i;}if(a.eE&57344){a.v.cb=B(392);a.bV=13;continue i;}if(a.eE&512)Jt(a,2,a.bH);a.bV=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.v.E)return d;e=a.v;e.E=e.E
-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));f=a.v.cn.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bV=9;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cn.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bV=10;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cn.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bV=11;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cn.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eE)a.bH=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bH,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bH,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bH,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bH,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.sz.lo!=
a.bH.lo)a.v.cb=B(393);else if(a.eE&&a.cD!==null)a.cD.IP=a.bH;a.bV=15;d=c;}if(!(a.dO&&a.eE)){if(a.v.cb===null)break f;if(!BW(a.v.cb,B(393)))break f;a.bV=13;a.ph=5;continue i;}try{d=GH(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hy;}else{throw $$e;}}if(a.v.cb!==null&&BW(a.v.cb,B(393))){a.bV=13;a.ph=5;continue i;}if(Long_eq(a.bH,Long_and(a.v.nQ,new Long(4294967295, 0)))){a.v.cb=null;break f;}a.v.cb=B(394);a.bV=13;continue i;}if(!a.dO){a.bV=7;continue i;}try{d=GH(a,2,d,c);}catch($$e)
{$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hy;}else{throw $$e;}}if(!(a.dO!=4&&!(a.dO&2))&&Long_eq(a.bH,Long_fromInt(35615))){if(a.dO==4)a.dO=2;a.v.f5=ASy();Jt(a,2,a.bH);if(a.cD===null)a.cD=A$X();a.bV=23;continue i;}if(a.dO&2){a.bV=13;a.v.cb=B(395);continue i;}a.eE=0;a.o9=a.bH.lo&255;h=Long_shr(a.bH,8).lo&255;if(!(a.dO&1&&!(((a.o9<<8)+h|0)%31|0))&&(a.o9&15)!=8){if(a.dO!=4){a.bV=13;a.v.cb=B(395);continue i;}e=a.v;e.r=e.r-2|0;e=a.v;e.E=e.E+2|0;e=a.v;e.y=Long_sub(e.y,Long_fromInt(2));a.dO=0;a.bV=7;continue i;}if
((a.o9&15)!=8){a.bV=13;a.v.cb=B(391);continue i;}if(a.dO==4)a.dO=1;if(((a.o9>>4)+8|0)>a.yJ){a.bV=13;a.v.cb=B(396);continue i;}a.v.f5=A6A();if(h&32){a.bV=2;break d;}a.bV=7;continue i;}break m;}try{d=GH(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hy;}else{throw $$e;}}if(a.cD!==null)a.cD.I9=a.bH;if(a.eE&512)Jt(a,4,a.bH);a.bV=17;}try{d=GH(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hy;}else{throw $$e;}}if(a.cD!==null){a.cD.Ka=a.bH.lo&255;a.cD.Cv=a.bH.lo>>
8&255;}if(a.eE&512)Jt(a,2,a.bH);a.bV=18;}if(a.eE&1024){try{d=GH(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hy;}else{throw $$e;}}if(a.cD!==null)a.cD.pT=$rt_createByteArray(a.bH.lo&65535);if(a.eE&512)Jt(a,2,a.bH);}else if(a.cD!==null)a.cD.pT=null;a.bV=19;}if(a.eE&1024)x:{try{d=AK1(a,d,c);if(a.cD===null)break x;f=HP(a.fT);i=f.data;a.fT=null;b=i.length;if(b!=a.cD.pT.data.length){a.v.cb=B(397);a.bV=13;continue i;}CT(f,0,a.cD.pT,0,b);break x;}catch($$e){$$je=Bh($$e);if($$je instanceof D$)
{e=$$je;return e.hy;}else{throw $$e;}}}else if(a.cD!==null)a.cD.pT=null;a.bV=20;}y:{if(a.eE&2048){z:{try{d=Rq(a,d,c);if(a.cD===null)break z;a.cD.zP=HP(a.fT);break z;}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;break h;}else{throw $$e;}}}try{a.fT=null;break y;}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;break h;}else{throw $$e;}}}else if(a.cD!==null)a.cD.zP=null;}a.bV=21;}ba:{if(a.eE&4096){bb:{try{d=Rq(a,d,c);if(a.cD===null)break bb;a.cD.BF=HP(a.fT);break bb;}catch($$e){$$je=Bh($$e);if($$je instanceof D$)
{e=$$je;break g;}else{throw $$e;}}}try{a.fT=null;break ba;}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;break g;}else{throw $$e;}}}else if(a.cD!==null)a.cD.BF=null;}a.bV=22;}if(a.eE&512){try{d=GH(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hy;}else{throw $$e;}}if(a.cD!==null)a.cD.K2=Long_and(a.bH,Long_fromInt(65535)).lo;if(Long_ne(a.bH,Long_and(a.v.f5.zD(),Long_fromInt(65535)))){a.bV=13;a.v.cb=B(398);a.ph=5;continue;}}a.v.f5=ASy();a.bV=7;}return d;}return e.hy;}return e.hy;}a.bV
=12;}return 1;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));f=a.v.cn.data;e=a.v;d=e.r;e.r=d+1|0;a.bH=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bV=3;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cn.data;e=a.v;d=e.r;e.r=d+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bV=4;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cn.data;e
=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bV=5;}if(!a.v.E)return c;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cn.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.v.f5.FW(a.bH);a.bV=6;return 2;}if(b==4&&a.bV==14)return 0;return (-2);}
function GH(a,b,c,d){var e,f,g,h;if(a.iR==(-1)){a.iR=b;a.bH=Long_ZERO;}while(true){if(a.iR<=0){if(b==2)a.bH=Long_and(a.bH,Long_fromInt(65535));else if(b==4)a.bH=Long_and(a.bH,new Long(4294967295, 0));a.iR=(-1);return c;}if(!a.v.E)break;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));f=a.bH;g=a.v.cn.data;e=a.v;h=e.r;e.r=h+1|0;a.bH=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iR|0)*8|0)));a.iR=a.iR-1|0;c=d;}J(AGW(a,c));}
function Rq(a,b,c){var d,e;if(a.fT===null)a.fT=O2();while(true){if(!a.v.E)J(AGW(a,b));d=a.v;d.E=d.E-1|0;d=a.v;d.y=Long_add(d.y,Long_fromInt(1));e=a.v.cn.data[a.v.r];if(e)TD(a.fT,a.v.cn,a.v.r,1);a.v.f5.k6(a.v.cn,a.v.r,1);d=a.v;d.r=d.r+1|0;if(!e)break;b=c;}return c;}
function AK1(a,b,c){var d;if(a.fT===null)a.fT=O2();while(Long_gt(a.bH,Long_ZERO)){if(!a.v.E)J(AGW(a,b));d=a.v;d.E=d.E-1|0;d=a.v;d.y=Long_add(d.y,Long_fromInt(1));TD(a.fT,a.v.cn,a.v.r,1);a.v.f5.k6(a.v.cn,a.v.r,1);d=a.v;d.r=d.r+1|0;a.bH=Long_sub(a.bH,Long_fromInt(1));b=c;}return b;}
function Jt(a,b,c){var d;d=0;while(d<b){a.yw.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.v.f5.k6(a.yw,0,b);}
function ALK(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bgh=b;}
function DF(){Cq.call(this);}
function ASE(a){var b=new DF();A5t(b,a);return b;}
function A5t(a,b){Bb(a,b);}
function Jl(){BU.call(this);}
function Fn(){}
function VX(){var a=this;C.call(a);a.tP=0;a.FK=0;a.Eh=0;a.EV=0;a.pH=null;}
function JO(a){return a.tP>=a.Eh?0:1;}
function Il(a){var b,c;if(a.FK<a.pH.d3){b=new JW;Z(b);J(b);}a.EV=a.tP;b=a.pH;c=a.tP;a.tP=c+1|0;return b.mM(c);}
function W5(){var a=this;C.call(a);a.rK=null;a.bt=0;}
function FO(a,b){var c=new W5();AXJ(c,a,b);return c;}
function AXJ(a,b,c){a.rK=b;a.bt=c;}
function Qx(){var a=this;C.call(a);a.uZ=null;a.ut=0;a.Ar=0;a.DD=0;a.vY=0;}
function VW(a){var b;b=$rt_createIntArray(a.vY);Vg(a.uZ);AAM(a.uZ,b);return b;}
function NA(){var a=this;C.call(a);a.xZ=null;a.CO=null;a.lc=0;a.FT=0.0;a.FS=0.0;a.AH=0;a.ms=0;a.mg=0;a.nR=0;a.pu=0;a.s6=0;a.A8=0;a.JJ=0.0;a.K0=0.0;a.JB=0.0;a.oQ=0;a.mV=0;a.FU=0;}
var Bdg=null;function BE(){BE=Bl(NA);AUa();}
function Bt(a){var b,c,d,e,f;if(!a.oQ)return 0;a.oQ=0;if(a.lc>0){if(a.mg)Pg(32888);if(a.ms)Pg(32886);if(a.mV)Pg(32885);b=a.A8;c=a.lc;d=a.xZ.buffer;e=a.lc*7|0;AFM(b,0,c,new Int32Array(d,0,e));if(a.mg)OF(32888);if(a.ms)OF(32886);if(a.mV)OF(32885);}f=a.nR*4|0;Z6(a);return f;}
function Z6(a){a.lc=0;a.nR=0;a.pu=0;}
function Bx(a){Ly(a,7);}
function Ly(a,b){if(a.oQ)Bt(a);a.oQ=1;Z6(a);a.A8=b;a.mV=0;a.ms=0;a.mg=0;a.s6=0;}
function ALO(a,b,c){a.mg=1;a.FT=b;a.FS=c;}
function CW(a,b,c,d){UZ(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Oc(a,b,c,d,e){X_(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function UZ(a,b,c,d){X_(a,b,c,d,255);}
function X_(a,b,c,d,e){if(!a.s6){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.ms=1;a.AH=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){ALO(a,e,f);Bo(a,b,c,d);}
function Bo(a,b,c,d){var e,f,g,h,i,j;if(a.pu>65534)return;a.pu=a.pu+1|0;a.lc=a.lc+1|0;e=a.nR;f=a.xZ;g=a.CO;h=e+0|0;i=b+a.JJ;g[h]=i;h=e+1|0;i=c+a.K0;g[h]=i;h=e+2|0;i=d+a.JB;g[h]=i;if(a.mg){h=e+3|0;i=a.FT;g[h]=i;h=e+4|0;i=a.FS;g[h]=i;}if(a.ms){h=e+5|0;j=a.AH;f[h]=j;}if(a.mV){e=e+6|0;h=a.FU;f[e]=h;}a.nR=a.nR+7|0;}
function Ii(a,b){UZ(a,b>>16&255,b>>8&255,b&255);}
function AE$(a){a.s6=1;}
function B1(a,b,c,d){var e;a.mV=1;e=Iu(b*b+c*c+d*d);a.FU=((b/e*125.0|0)+125|0)&255|(((c/e*125.0|0)+125|0)&255)<<8|(((d/e*125.0|0)+125|0)&255)<<16;IT(b,c,d);}
function AUa(){var b,c;b=new NA;BE();b.lc=0;b.ms=0;b.mg=0;b.nR=0;b.pu=0;b.s6=0;b.oQ=0;b.mV=0;c=new ArrayBuffer(1140000);b.xZ=new Int32Array(c);b.CO=new Float32Array(c);Bdg=b;}
function Oe(){FH.call(this);}
function Xn(b){var c,d;c=b.data.length;d=new Xi;WA(d,c,0,0+c|0);d.yG=0;d.CM=0;d.xh=b;return d;}
function AM9(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=new R;T(i);Bb(h,S(Bd(E(Bd(E(i,B(399)),g),B(253)),f)));J(h);}if(BT(a)<d){h=new Gg;Z(h);J(h);}if(d<0){h=new BD;i=new R;T(i);Bb(h,S(E(Bd(E(i,B(254)),d),B(255))));J(h);}g=a.L;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=Yr(a,g);j=j+1|0;c=k;g=f;}a.L=a.L+d|0;return a;}}b=b.data;i=new BD;h=new R;T(h);Bb(i,S(E(Bd(E(Bd(E(h,B(256)),c),B(250)),b.length),B(34))));J(i);}
function AAM(a,b){return AM9(a,b,0,b.data.length);}
function AOz(a,b,c,d){var e,f,g,h,i,j,k;if(a.lJ()){e=new EO;Z(e);J(e);}if(BT(a)<d){e=new GW;Z(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BD;i=new R;T(i);Bb(e,S(Bd(E(Bd(E(i,B(400)),h),B(253)),g)));J(e);}if(d<0){e=new BD;i=new R;T(i);Bb(e,S(E(Bd(E(i,B(254)),d),B(255))));J(e);}h=a.L;j=0;while(j<d){k=h+1|0;g=c+1|0;XR(a,h,f[c]);j=j+1|0;h=k;c=g;}a.L=a.L+d|0;return a;}}b=b.data;i=new BD;e=new R;T(e);Bb(i,S(E(Bd(E(Bd(E(e,B(256)),c),B(250)),b.length),B(34))));J(i);}
function AFS(a){DC(a);return a;}
function AYV(a){Ec(a);return a;}
function Vg(a){a.iB=(-1);a.L=0;return a;}
function A6U(a,b){H0(a,b);return a;}
function AZh(a,b){Dz(a,b);return a;}
function Vf(){var a=this;C.call(a);a.mx=null;a.kl=null;a.tn=null;a.mY=null;}
function X9(a,b,c,d){return Qq(a,b,c.f,c.Y.bc,c.g,16.0);}
function AIu(a,b,c,d,e,f){return Qq(a,b,c+0.5,d+0.5,e+0.5,16.0);}
function Qq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;P2(a.kl);Xx(a.tn);g=Ji(a,b.Y.bg|0,b.Y.bc|0,b.Y.bf|0);h=Ji(a,c-b.dL/2.0|0,d|0,e-b.dL/2.0|0);i=AZe(b.dL+1.0|0,b.gB+1.0|0,b.dL+1.0|0);g.nc=0.0;g.oF=Fe(g,h);g.i7=g.oF;P2(a.kl);TY(a.kl,g);j=g;a:{while(true){if(AHD(a.kl)){k=j!==g?AG3(j):null;break a;}l=ALN(a.kl);if(l.qp==h.qp)break;if(Fe(l,h)<Fe(j,h))j=l;l.nE=1;m=0;n=0;if(LZ(a,l.ia,l.h5+1|0,l.iv,i)>0)n=1;o=KB(a,b,l.ia,l.h5,l.iv+1|0,i,n);p=KB(a,b,l.ia-1|0,l.h5,l.iv,i,n);q=KB(a,b,l.ia+1|0,l.h5,l.iv,i,n);r
=KB(a,b,l.ia,l.h5,l.iv-1|0,i,n);if(o!==null&&!o.nE&&Fe(o,h)<f){m=1;a.mY.data[0]=o;}if(p===null)s=m;else if(p.nE)s=m;else if(Fe(p,h)>=f)s=m;else{t=a.mY.data;s=m+1|0;t[m]=p;}if(q===null)m=s;else if(q.nE)m=s;else if(Fe(q,h)>=f)m=s;else{t=a.mY.data;m=s+1|0;t[s]=q;}if(r===null)n=m;else if(r.nE)n=m;else if(Fe(r,h)>=f)n=m;else{t=a.mY.data;n=m+1|0;t[m]=r;}s=0;while(s<n){u=a.mY.data[s];v=l.nc+Fe(l,u);if(!(V5(u)&&v>=u.nc)){u.or=l;u.nc=v;u.oF=Fe(u,h);if(V5(u))AK_(a.kl,u,u.nc+u.oF);else{u.i7=u.nc+u.oF;TY(a.kl,u);}}s=s+
1|0;}}k=AG3(h);}return k;}
function KB(a,b,c,d,e,f,g){var h,i,j;h=null;if(LZ(a,c,d,e,f)>0)h=Ji(a,c,d,e);if(h===null){g=d+g|0;if(LZ(a,c,g,e,f)>0)h=Ji(a,c,g,e);}if(h!==null){g=0;a:{while(true){if(d<=0)break a;i=LZ(a,c,d-1|0,e,f);if(i<=0)break a;if(i<0)return null;g=g+1|0;if(g>=4)break;d=d+(-1)|0;h=Ji(a,c,d,e);}return null;}j=CR(a.mx,c,d-1|0,e);if(!(j!==Bdi&&j!==Bdj))return null;}return h;}
function Ji(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=Co(a.tn,C0(e));if(f===null){f=AZe(b,c,d);BI(a.tn,C0(e),f);}return f;}
function LZ(a,b,c,d,e){var f,g,h,i;f=b;a:{b:{c:{d:{while(f<(b+e.ia|0)){if(f<0)break a;if(f>=a.mx.o)break a;g=c;while(g<(c+e.h5|0)){if(g<0)break b;if(g>=a.mx.bu)break b;h=d;while(h<(d+e.iv|0)){if(h<0)break c;if(h>=a.mx.t)break c;i=CR(a.mx,b,c,d);if(i.ow())return 0;if(i===Bdi)break d;if(i===Bdj)break d;h=h+1|0;}g=g+1|0;}f=f+1|0;}return 1;}return (-1);}return 0;}return 0;}return 0;}
function AG3(b){var c,d,e,f;c=1;d=b;while(d.or!==null){c=c+1|0;d=d.or;}e=H(IN,c);f=e.data;c=c+(-1)|0;f[c]=b;while(b.or!==null){b=b.or;c=c+(-1)|0;f[c]=b;}b=new AAd;b.qd=e;return b;}
function CK(){IZ.call(this);}
function DE(){var a=this;C.call(a);a.tj=0;a.A=null;a.cu=0.0;a.cy=0.0;a.cv=0.0;a.f=0.0;a.j=0.0;a.g=0.0;a.G=0.0;a.C=0.0;a.H=0.0;a.I=0.0;a.X=0.0;a.bN=0.0;a.b1=0.0;a.Y=null;a.dF=0;a.sp=0;a.lV=0;a.hN=0;a.dP=0.0;a.dL=0.0;a.gB=0.0;a.uG=0.0;a.k0=0.0;a.pl=0;a.i$=0.0;a.rX=0;a.ec=0.0;a.eb=0.0;a.ea=0.0;a.j4=0.0;a.sl=0.0;a.om=0;a.J4=0.0;a.O=null;a.pU=0;a.ru=0;a.dk=0;a.E6=0;a.r2=0;a.hX=0;a.h4=0;a.xP=0;a.JG=null;}
function Bgi(a){var b=new DE();GR(b,a);return b;}
function GR(a,b){a.tj=0;a.dF=0;a.sp=0;a.lV=1;a.hN=0;a.dP=0.0;a.dL=0.6000000238418579;a.gB=1.7999999523162842;a.uG=0.0;a.k0=0.0;a.pl=1;a.i$=0.0;a.rX=1;a.j4=0.0;a.sl=0.0;a.om=0;a.J4=0.0;a.O=new Dd;a.pU=0;a.ru=1;a.dk=0;a.E6=300;a.r2=0;a.hX=0;a.h4=300;a.xP=1;a.A=b;if(a instanceof Hk&&A_E!==null)D0(a,G5(A_E,B(401)),G5(A_E,B(402)),G5(A_E,B(403)));else D0(a,0.0,0.0,0.0);}
function CN(a){a.hN=1;}
function DD(a,b,c){a.dL=b;a.gB=c;}
function D0(a,b,c,d){var e,f;a.f=b;a.j=c;a.g=d;e=a.dL/2.0;f=a.gB/2.0;a.Y=GM(b-e,c-f,d-e,b+e,c+f,d+e);}
function N4(a){var b,c,d,e,f,g;a.pU=a.pU+1|0;a.uG=a.k0;a.cu=a.f;a.cy=a.j;a.cv=a.g;a.b1=a.X;a.bN=a.I;if(!Gr(a))a.r2=0;else{a:{if(!a.r2&&!a.xP){B$(a.G*a.G*0.20000000298023224+a.C*a.C+a.H*a.H*0.20000000298023224);b=a.Y.bc|0;c=0;d=b+1.0;while(c<1.0+a.dL*20.0){e=(N(a.O)*2.0-1.0)*a.dL;f=(N(a.O)*2.0-1.0)*a.dL;BY(a.A,B(367),a.f+e,d,a.g+f,a.G,a.C-N(a.O)*0.20000000298023224,a.H);c=c+1|0;}c=0;while(true){if(c>=1.0+a.dL*20.0)break a;e=(N(a.O)*2.0-1.0)*a.dL;f=(N(a.O)*2.0-1.0)*a.dL;BY(a.A,B(272),a.f+e,d,a.g+f,a.G,a.C,a.H);c
=c+1|0;}}}a.i$=0.0;a.r2=1;a.dk=0;}if(a.dk>0){if(!(a.dk%20|0))a.eY(null,1);a.dk=a.dk-1|0;}if(JD(a)){a.eY(null,10);a.dk=600;}if(a.f<(-8.0)){g= -(a.f+8.0);a.G=a.G+g*0.0010000000474974513;}if(a.g<(-8.0)){g= -(a.g+8.0);a.H=a.H+g*0.0010000000474974513;}if(a.f>a.A.o+8.0){g=a.f-a.A.o+8.0;a.G=a.G-g*0.0010000000474974513;}if(a.g>a.A.t+8.0){g=a.g-a.A.t+8.0;a.H=a.H-g*0.0010000000474974513;}a.xP=0;}
function Ym(a,b,c,d){var e,f;e=a.Y;f=GM(e.bg+d,e.bc+c,e.bf+d,e.bv+b,e.bs+c,e.bw+d);return Hv(a.A,f).q>0?0:SH(a.A,f)?0:1;}
function Eq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(a.om){GP(a.Y,b,c,d);a.f=(a.Y.bg+a.Y.bv)/2.0;a.j=a.Y.bc+a.dP-a.j4;a.g=(a.Y.bf+a.Y.bw)/2.0;}else{e=a.f;f=a.g;g=LU(a.Y);h=Hv(a.A,K4(a.Y,b,c,d));i=0;j=c;while(i<CE(h)){j=S_(Be(h,i),a.Y,j);i=i+1|0;}GP(a.Y,0.0,j,0.0);if(a.lV){k=d;l=b;}else if(c===j){k=d;l=b;}else{l=0.0;k=l;j=l;}a:{b:{if(!a.dF){if(c===j)break b;if(c>=0.0)break b;}m=1;break a;}m=0;}n=0;while(n<CE(h)){l=TS(Be(h,n),a.Y,l);n=n+1|0;}GP(a.Y,l,0.0,0.0);if(!a.lV&&b!==l){l=0.0;k=l;j=l;}o
=0;while(o<CE(h)){k=Ub(Be(h,o),a.Y,k);o=o+1|0;}GP(a.Y,0.0,0.0,k);if(!a.lV&&d!==k){l=0.0;k=l;j=l;}if(a.sl<=0.0){p=l;q=j;r=k;}else if(!m){p=l;q=j;r=k;}else if(a.j4>=0.05000000074505806){p=l;q=j;r=k;}else if(b===l&&d===k){p=l;q=j;r=k;}else{q=a.sl;s=LU(a.Y);a.Y=LU(g);g=Hv(a.A,K4(a.Y,b,q,d));o=0;while(o<CE(g)){q=S_(Be(g,o),a.Y,q);o=o+1|0;}GP(a.Y,0.0,q,0.0);if(a.lV){r=d;p=b;}else if(c===q){r=d;p=b;}else{p=0.0;r=p;q=p;}o=0;while(o<CE(g)){p=TS(Be(g,o),a.Y,p);o=o+1|0;}GP(a.Y,p,0.0,0.0);if(!a.lV&&b!==p){p=0.0;r=p;q=p;}o
=0;while(o<CE(g)){r=Ub(Be(g,o),a.Y,r);o=o+1|0;}GP(a.Y,0.0,0.0,r);if(!a.lV&&d!==r){p=0.0;r=p;q=p;}if(l*l+k*k>=p*p+r*r){a.Y=LU(s);p=l;q=j;r=k;}else a.j4=a.j4+0.5;}a.f=(a.Y.bg+a.Y.bv)/2.0;a.j=a.Y.bc+a.dP-a.j4;a.g=(a.Y.bf+a.Y.bw)/2.0;t=Bw(b,p);a.sp=!t&&d===r?0:1;o=Bw(c,q);a.dF=o&&c<0.0?1:0;if(!a.dF){if(q<0.0)a.i$=a.i$-q;}else if(a.i$>0.0){a.EH(a.i$);a.i$=0.0;}if(t)a.G=0.0;if(o)a.C=0.0;if(d!==r)a.H=0.0;u=a.f-e;v=a.g-f;a.k0=a.k0+B$(u*u+v*v)*0.6;if(a.pl){w=a.f|0;x=a.j-0.20000000298023224-a.dP|0;o=a.g|0;y=O(a.A,w,x,
o);if(a.k0>a.rX&&y>0){a.rX=a.rX+1|0;L();Bcn.data[y].F5(a.A,w,x,o);}}a.j4=a.j4*0.4000000059604645;t=Gr(a);if(AHw(a.A,a.Y)){a.AU(1);if(!t){a.dk=a.dk+1|0;if(!a.dk)a.dk=300;}}else if(a.dk<=0)a.dk= -a.ru;if(t&&a.dk>0)a.dk= -a.ru;}}
function A3l(a,b){a.eY(null,1);}
function AZx(a,b){return;}
function Gr(a){return P1(a.A,FL(a.Y,0.0,(-0.4000000059604645),0.0),Bdi);}
function D4(a){var b;b=O(a.A,a.f|0,a.j+a.sb()|0,a.g|0);if(!b)b=0;else{L();b=Bcn.data[b].cm!==Bdi?0:1;}return b;}
function A5J(a){return 0.0;}
function JD(a){return P1(a.A,FL(a.Y,0.0,(-0.4000000059604645),0.0),Bdj);}
function MF(a,b,c,d){var e,f;e=B$(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;d=c*d;e=Bv(a.I*3.1415927410125732/180.0);f=Bp(a.I*3.1415927410125732/180.0);a.G=a.G+b*f-d*e;a.H=a.H+d*f+b*e;}}
function EC(a,b){var c,d,e;c=a.f|0;d=a.j+a.dP/2.0|0;e=a.g|0;return DT(a.A,c,d,e);}
function A8G(a,b){a.A=b;}
function Jy(a,b,c,d,e,f){a.f=b;a.cu=b;b=c+a.dP;a.j=b;a.cy=b;a.g=d;a.cv=d;a.I=e;a.X=f;D0(a,a.f,a.j,a.g);}
function Zh(a,b){var c,d,e;c=a.f-b.f;d=a.j-b.j;e=a.g-b.g;return c*c+d*d+e*e;}
function AP4(a,b){return;}
function AKy(a,b){var c,d,e;c=b.f-a.f;d=b.g-a.g;e=c*c+d*d;if(e>=0.009999999776482582){e=B$(e);c=c/e;d=d/e;c=c/e;e=d/e;c=c*0.05000000074505806;e=e*0.05000000074505806;Uo(a, -c,0.0, -e);Uo(b,c,0.0,e);}}
function Uo(a,b,c,d){a.G=a.G+b;a.C=a.C;a.H=a.H+d;}
function APa(a,b,c){return 0;}
function A2p(a){return 0;}
function A8C(a){return 0;}
function AK9(a,b){var c,d,e;c=a.gc();if(!a.hN&&c!==null){HM(b,B(404),c);d=$rt_createFloatArray(3);e=d.data;e[0]=a.f;e[1]=a.j;e[2]=a.g;Ff(b,B(405),Yc(d));e=$rt_createFloatArray(3);d=e.data;d[0]=a.G;d[1]=a.C;d[2]=a.H;Ff(b,B(406),Yc(e));e=$rt_createFloatArray(2);d=e.data;d[0]=a.I;d[1]=a.X;Ff(b,B(407),Yc(e));Lf(b,B(408),a.i$);CH(b,B(409),a.dk<<16>>16);CH(b,B(410),a.h4<<16>>16);a.f0(b);}}
function Ux(a,b){var c,d,e;c=Ee(b,B(405));d=Ee(b,B(406));e=Ee(b,B(407));a.f=CS(c,0).gy;a.j=CS(c,1).gy;a.g=CS(c,2).gy;a.G=CS(d,0).gy;a.C=CS(d,1).gy;a.H=CS(d,2).gy;a.I=CS(e,0).gy;a.X=CS(e,1).gy;a.i$=G5(b,B(408));a.dk=Ck(b,B(409));a.h4=Ck(b,B(410));Jy(a,a.f,a.j,a.g,a.I,a.X);a.ip(b);}
function Yc(b){var c,d,e;b=b.data;c=Gv();d=b.length;e=0;while(e<d){EQ(c,A6N(b[e]));e=e+1|0;}return c;}
function A7_(a){return a.gB/2.0;}
function AMK(a,b,c){return Zk(a,b,1,0.0);}
function Zk(a,b,c,d){var e;e=SB(a.A,a.f,a.j+d,a.g,OE(b,c));e.i3=10;De(a.A,e);return e;}
function AWl(a){return a.hN?0:1;}
function T8(a,b,c){var d,e;d=a.X;e=a.I;a.I=a.I+b*0.15;a.X=a.X-c*0.15;if(a.X<(-90.0))a.X=(-90.0);if(a.X>90.0)a.X=90.0;a.b1=a.b1+a.X-d;a.bN=a.bN+a.I-e;}
function F8(){var a=this;DE.call(a);a.pQ=0;a.eM=0.0;a.hS=0.0;a.zz=0.0;a.Af=0.0;a.hz=null;a.GJ=0;a.b0=0;a.rB=0;a.vD=0;a.hm=0;a.BC=0;a.lt=0.0;a.dA=0;a.jc=0;a.y6=0.0;a.oa=0.0;a.xt=0.0;a.j$=0.0;a.y5=0.0;a.jm=0;a.kT=0.0;a.kw=0.0;a.n8=0.0;a.hR=0;a.Ii=0.0;a.lR=0.0;}
function Bgj(a){var b=new F8();Rj(b,a);return b;}
function Rj(a,b){GR(a,b);a.pQ=20;a.eM=0.0;a.hS=0.0;a.hz=B(207);a.GJ=0;a.lt=0.0;a.dA=0;a.jc=0;Cc();a.jm=0;a.hR=0;a.Ii=0.0;a.lR=0.699999988079071;a.b0=10;a.tj=1;Cc();D0(a,a.f,a.j,a.g);Cc();a.I=Cc()*3.1415927410125732*2.0;a.sl=0.5;}
function AMq(a){return a.hz;}
function A8E(a){return a.hN?0:1;}
function A1k(a){return a.hN?0:1;}
function ACn(a){return a.gB*0.8500000238418579;}
function AD9(a){var b,c,d,e,f,g,h,i,j;N4(a);b=W(a.O,1000);c=a.vD;a.vD=c+1|0;if(b<c)a.vD=(-80);if(!D4(a))a.h4=a.E6;else{a.h4=a.h4-1|0;if(a.h4==(-20)){a.h4=0;d=0;while(d<8){e=N(a.O)-N(a.O);f=N(a.O)-N(a.O);g=N(a.O)-N(a.O);BY(a.A,B(367),a.f+e,a.j+f,a.g+g,a.G,a.C,a.H);d=d+1|0;}a.eY(null,2);}a.dk=0;}a.y6=a.oa;if(a.jc>0)a.jc=a.jc-1|0;if(a.hm>0)a.hm=a.hm-1|0;if(a.hX>0)a.hX=a.hX-1|0;if(a.b0<=0){a.dA=a.dA+1|0;if(a.dA>20)a.xL();}a.hS=a.eM;a.bN=a.I;a.b1=a.X;a.mU();h=a.f-a.cu;e=a.g-a.cv;f=B$(h*h+e*e);g=a.eM;i=0.0;j=0.0;if
(f>0.05000000074505806){j=1.0;i=f*3.0;g=GL(e,h)*180.0/3.1415927410125732-90.0;}if(!a.dF)j=0.0;a.zz=a.zz+(j-a.zz)*0.30000001192092896;e=g-a.eM;while(e<(-180.0)){e=e+360.0;}while(e>=180.0){e=e-360.0;}a.eM=a.eM+e*0.10000000149011612;f=a.I-a.eM;while(f<(-180.0)){f=f+360.0;}while(f>=180.0){f=f-360.0;}b=f>=(-90.0)&&f<90.0?0:1;if(f<(-75.0))f=(-75.0);if(f>=75.0)f=75.0;a.eM=a.I-f;a.eM=a.eM+f*0.10000000149011612;if(b)i= -i;while(a.I-a.bN<(-180.0)){a.bN=a.bN-360.0;}while(a.I-a.bN>=180.0){a.bN=a.bN+360.0;}while(a.eM-a.hS
<(-180.0)){a.hS=a.hS-360.0;}while(a.eM-a.hS>=180.0){a.hS=a.hS+360.0;}while(a.X-a.b1<(-180.0)){a.b1=a.b1-360.0;}while(a.X-a.b1>=180.0){a.b1=a.b1+360.0;}a.Af=a.Af+i;}
function A30(a,b,c){DD(a,b,c);}
function Wt(a,b){if(a.b0>0){a.b0=a.b0+b|0;if(a.b0>20)a.b0=20;a.hX=a.pQ/2|0;}}
function NR(a,b,c){var d,e,f;if(!a.A.xg)return 0;a.jm=0;if(a.b0<=0)return 0;a.j$=1.5;if(a.hX<=a.pQ/2.0){a.rB=a.b0;a.hX=a.pQ;a.b0=a.b0-c|0;a.BC=10;a.hm=10;}else{if((a.rB-c|0)>=a.b0)return 0;a.b0=a.rB-c|0;}a.lt=0.0;if(b===null)a.lt=(Cc()*2.0|0)*180|0;else{d=b.f-a.f;e=b.g-a.g;a.lt=GL(e,d)*180.0/3.1415927410125732-a.I;f=B$(d*d+e*e);a.G=a.G/2.0;a.C=a.C/2.0;a.H=a.H/2.0;a.G=a.G-d/f*0.4000000059604645;a.C=a.C+0.4000000059604645;a.H=a.H-e/f*0.4000000059604645;if(a.C>0.4000000059604645)a.C=0.4000000059604645;}if(a.b0
<=0)a.A5(b);return 1;}
function A5O(a,b){var c,d,e;a:{c=a.nx();if(c>0){d=W(a.O,3);e=0;while(true){if(e>=d)break a;AMK(a,c,1);e=e+1|0;}}}}
function AWX(a){return 0;}
function A7P(a,b){var c;c=WV(b-3.0)|0;if(c>0){a.eY(null,c);O(a.A,a.f|0,a.j-0.20000000298023224-a.dP|0,a.g|0);}}
function Gl(a,b){CH(b,B(411),a.b0<<16>>16);CH(b,B(412),a.hm<<16>>16);CH(b,B(413),a.dA<<16>>16);CH(b,B(414),a.jc<<16>>16);}
function GQ(a,b){a.b0=Ck(b,B(411));if(!Ex(b,B(411)))a.b0=10;a.hm=Ck(b,B(412));a.dA=Ck(b,B(413));a.jc=Ck(b,B(414));}
function AVZ(a){return !a.hN&&a.b0>0?1:0;}
function W7(a){var b,c,d,e,f,g,h,i,j,k;a.jm=a.jm+1|0;if(a.jm>600&&!W(a.O,800)){b=a.A.cV;if(b!==null){c=b.f-a.f;d=b.j-a.j;e=b.g-a.g;if(c*c+d*d+e*e>=1024.0)a.xL();else a.jm=0;}}if(a.b0>0)a.sG();else{a.hR=0;a.kT=0.0;a.kw=0.0;a.n8=0.0;}f=Gr(a);g=JD(a);if(a.hR){if(f)a.C=a.C+0.03999999910593033;else if(g)a.C=a.C+0.03999999910593033;else if(a.dF)a.C=0.41999998688697815;}a.kT=a.kT*0.9800000190734863;a.kw=a.kw*0.9800000190734863;a.n8=a.n8*0.8999999761581421;d=a.kw;c=a.kT;if(Gr(a)){h=a.j;MF(a,c,d,0.019999999552965164);Eq(a,
a.G,a.C,a.H);a.G=a.G*0.800000011920929;a.C=a.C*0.800000011920929;a.H=a.H*0.800000011920929;a.C=a.C-0.02;if(a.sp&&Ym(a,a.G,a.C+0.6000000238418579-a.j+h,a.H))a.C=0.30000001192092896;}else if(JD(a)){h=a.j;MF(a,c,d,0.019999999552965164);Eq(a,a.G,a.C,a.H);a.G=a.G*0.5;a.C=a.C*0.5;a.H=a.H*0.5;a.C=a.C-0.02;if(a.sp&&Ym(a,a.G,a.C+0.6000000238418579-a.j+h,a.H))a.C=0.30000001192092896;}else{MF(a,c,d,!a.dF?0.019999999552965164:0.10000000149011612);Eq(a,a.G,a.C,a.H);a.G=a.G*0.9100000262260437;a.C=a.C*0.9800000190734863;a.H
=a.H*0.9100000262260437;a.C=a.C-0.08;if(a.dF){a.G=a.G*0.6000000238418579;a.H=a.H*0.6000000238418579;}}a.xt=a.j$;h=a.f-a.cu;d=a.g-a.cv;d=B$(h*h+d*d)*4.0;if(d>1.0)d=1.0;a:{a.j$=a.j$+(d-a.j$)*0.4000000059604645;a.y5=a.y5+a.j$;i=P7(a.A,a,FL(a.Y,0.20000000298023224,0.0,0.20000000298023224));if(i!==null&&i.q>0){j=0;while(true){if(j>=i.q)break a;k=Be(i,j);if(k.C5())AKy(k,a);j=j+1|0;}}}}
function AFv(a){var b,c;if(N(a.O)<0.07000000029802322){a.kT=(N(a.O)-0.5)*a.lR;a.kw=N(a.O)*a.lR;}a.hR=N(a.O)>=0.009999999776482582?0:1;if(N(a.O)<0.03999999910593033)a.n8=(N(a.O)-0.5)*60.0;a.I=a.I+a.n8;a.X=0.0;b=Gr(a);c=JD(a);if(!(!b&&!c))a.hR=N(a.O)>=0.800000011920929?0:1;}
function Hk(){var a=this;F8.call(a);a.F=null;a.Jf=0;a.rS=0;a.xG=0.0;a.pf=0.0;a.xs=0;}
function C_(a){var b,c,d,e;a.dP=1.6200000047683716;DD(a,0.6000000238418579,1.7999999523162842);if(a.A!==null){b=a.A.g5+0.5;c=a.A.gZ;d=a.A.hx+0.5;e=a instanceof Hk;a:{while(true){if(c<=0.0)break a;if(e&&A_E!==null)D0(a,G5(A_E,B(401)),G5(A_E,B(402)),G5(A_E,B(403)));else D0(a,b,c,d);if(!Hv(a.A,a.Y).q)break;c=c+1.0;}}a.H=0.0;a.C=0.0;a.G=0.0;a.I=a.A.r6;a.X=0.0;}if(a.A!==null)a.A.cV=a;a.b0=20;a.dA=0;}
function AKm(a){var b,c,d,e,f,g;if(!a.A.c1&&a.b0<20&&!((a.pU%20|0)<<2))Wt(a,1);b=a.F;c=0;while(c<b.br.data.length){if(b.br.data[c]!==null&&b.br.data[c].kV>0){d=b.br.data[c];d.kV=d.kV-1|0;}c=c+1|0;}a.xG=a.pf;W7(a);e=B$(a.G*a.G+a.H*a.H);f=Lp( -a.C*0.20000000298023224)*15.0;if(e>0.10000000149011612)e=0.10000000149011612;if(!(a.dF&&a.b0>0))e=0.0;if(!(!a.dF&&a.b0>0))f=0.0;a:{a.pf=a.pf+(e-a.pf)*0.4000000059604645;a.oa=a.oa+(f-a.oa)*0.800000011920929;if(a.b0>0){d=P7(a.A,a,FL(a.Y,1.0,0.0,1.0));if(d!==null){g=0;while
(true){if(g>=d.q)break a;Be(d,g).xA(a);g=g+1|0;}}}}}
function A4t(a,b){DD(a,0.20000000298023224,0.20000000298023224);D0(a,a.f,a.j,a.g);a.C=0.10000000149011612;if(b===null){a.H=0.0;a.G=0.0;}else{a.G= -Bp((a.lt+a.I)*3.1415927410125732/180.0)*0.10000000149011612;a.H= -Bv((a.lt+a.I)*3.1415927410125732/180.0)*0.10000000149011612;}a.dP=0.10000000149011612;}
function ARD(a){return;}
function J9(a,b){E0(a,b,0);}
function E0(a,b,c){var d,e,f,g,h,i,j;if(b!==null){d=SB(a.A,a.f,a.j-0.30000001192092896,a.g,b);d.i3=40;d.G= -Bv(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732)*0.30000001192092896;d.H=Bp(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732)*0.30000001192092896;d.C= -Bv(a.X/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.O)*3.1415927410125732*2.0;f=0.019999999552965164*N(a.O);g=d.G;h=e;i=Qz(h);j=f;d.G=g+i*j;d.C=d.C+(N(a.O)-N(a.O))*0.10000000149011612;d.H=d.H+LT(h)
*j;De(a.A,d);}}
function Tp(a,b){var c,d,e;c=a.F;if(b.cm!==Bek&&b.cm!==Bez)return 1;d=R4(c,c.J);if(d===null)e=0;else{B3();e=Bcm.data[d.bX].x$(b);}return e;}
function AVN(a){return 0.11999999731779099;}
function AU3(a,b,c){var d,e,f;if(!a.A.xg)return 0;a.jm=0;if(a.b0<=0)return 0;if(a.hX>a.pQ/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof M1))){if(!a.A.c1)c=0;if(a.A.c1==1)c=(c/3|0)+1|0;if(a.A.c1==3)c=(c*3|0)/2|0;}d=K(c,25-W9(a.F)|0)+a.xs|0;e=a.F;f=0;while(f<e.c$.data.length){if(e.c$.data[f]!==null&&BZ(e.c$.data[f]) instanceof Gn){GX(e.c$.data[f],c);if(!e.c$.data[f].s)e.c$.data[f]=null;}f=f+1|0;}c=d/25|0;a.xs=d%25|0;if(c)return NR(a,b,c);return 0;}
function Mm(){var a=this;Hk.call(a);a.eV=null;a.mL=null;}
function A1u(a){a.kT=a.eV.lv;a.kw=a.eV.lE;a.hR=a.eV.v1;}
function AWI(a){AOc(a.eV);AKm(a);}
function AOa(a,b){var c,d,e,f;Gl(a,b);E1(b,B(415),a.rS);c=a.F;d=Gv();e=0;while(e<c.br.data.length){if(c.br.data[e]!==null){f=DH();DW(f,B(416),e<<24>>24);Ix(c.br.data[e],f);EQ(d,f);}e=e+1|0;}e=0;while(e<c.c$.data.length){if(c.c$.data[e]!==null){f=DH();DW(f,B(416),(e+100|0)<<24>>24);Ix(c.c$.data[e],f);EQ(d,f);}e=e+1|0;}Ff(b,B(318),d);}
function Ry(a,b){var c,d,e,f,g;GQ(a,b);a.rS=DK(b,B(415));c=Ee(b,B(318));d=a.F;d.br=H(C9,36);d.c$=H(C9,4);e=0;while(e<GV(c)){f=CS(c,e);g=EW(f,B(416))&255;if(g>=0&&g<d.br.data.length)d.br.data[g]=PV(f);if(g>=100&&g<(d.c$.data.length+100|0))d.c$.data[g-100|0]=PV(f);e=e+1|0;}}
function A11(a){return B(417);}
function AHX(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.mL;d=A$S(a.F,b);$p=1;case 1:AOR(c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function ANr(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.mL;c=new Un;d=a.F;J7(c);c.pj=AOW(c,3,3);c.wk=AQ4();M(c.cX,AP7(c,c.pj,c.wk,0,124,35));e=0;while(e<3){f=0;while(f<3){M(c.cX,En(c,c.pj,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){M(c.cX,En(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){M(c.cX,En(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:AOR(b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function AMX(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.mL;d=new QX;e=a.F;J7(d);AIj(new Vt);d.tS=b;M(d.cX,En(d,b,0,56,17));M(d.cX,En(d,b,1,56,53));M(d.cX,En(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){M(d.cX,En(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){M(d.cX,En(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:AOR(c,d);if(I()){break _;}return;default:
F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function Ta(a){AFg(a.F,a.F.J,null);}
function Uk(a,b){var c,d;c=a.mL.bI;d=new VV;Ga(d,a.mL.i,b.f,b.j,b.g,b.G,b.C,b.H);d.o1=0;d.rN=0;d.nh=b;d.hW=a;d.rN=3;d.Bx=(-0.5);E_(c,d);}
function G0(){}
function Tk(){var a=this;C.call(a);a.br=null;a.c$=null;a.J=0;a.Go=null;}
function F0(a){return a.br.data[a.J];}
function RU(a,b){var c;c=0;while(true){if(c>=a.br.data.length)return (-1);if(a.br.data[c]!==null&&a.br.data[c].bX==b)break;c=c+1|0;}return c;}
function Rt(a){var b;b=0;while(true){if(b>=a.br.data.length)return (-1);if(a.br.data[b]===null)break;b=b+1|0;}return b;}
function H$(a,b){b=RU(a,b);if(b>=0&&b<9)a.J=b;}
function ABi(a,b){var c,d;c=RU(a,b);if(c<0)return 0;d=a.br.data[c];b=d.s-1|0;d.s=b;if(b<=0)a.br.data[c]=null;return 1;}
function XN(a,b){var c,d,e,f,g;if(!b.fz){c=b.s;d=b.bX;e=0;a:{while(true){if(e>=a.br.data.length){e=(-1);break a;}if(a.br.data[e]!==null&&a.br.data[e].bX==d){f=a.br.data[e];if(a.br.data[e].s<BZ(f).gg&&a.br.data[e].s<64)break;}e=e+1|0;}}if(e<0)e=Rt(a);if(e>=0){if(a.br.data[e]===null)a.br.data[e]=OE(d,0);g=c<=(BZ(a.br.data[e]).gg-a.br.data[e].s|0)?c:BZ(a.br.data[e]).gg-a.br.data[e].s|0;if(g>(64-a.br.data[e].s|0))g=64-a.br.data[e].s|0;if(g){c=c-g|0;f=a.br.data[e];f.s=f.s+g|0;a.br.data[e].kV=5;}}b.s=c;if(!b.s)return 1;}g
=Rt(a);if(g<0)return 0;a.br.data[g]=b;a.br.data[g].kV=5;return 1;}
function Fs(a,b,c){var d,e,f;d=a.br;if(b>=a.br.data.length){d=a.c$;b=b-a.br.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].s<=c){e=d[b];d[b]=null;return e;}f=FC(d[b],c);if(!d[b].s)d[b]=null;return f;}
function AFg(a,b,c){var d;d=a.br;if(b>=a.br.data.length){d=a.c$;b=b-a.br.data.length|0;}d.data[b]=c;}
function ALF(a){return a.br.data.length+4|0;}
function R4(a,b){var c;c=a.br;if(b>=a.br.data.length){c=a.c$;b=b-a.br.data.length|0;}return c.data[b];}
function AUC(a){return B(318);}
function APk(a){return 64;}
function W9(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.c$.data.length){if(a.c$.data[e]!==null&&BZ(a.c$.data[e]) instanceof Gn){f=Kr(a.c$.data[e]);c=c+(f-a.c$.data[e].fz|0)|0;d=d+f|0;b=b+BZ(a.c$.data[e]).BZ|0;}e=e+1|0;}if(!d)return 0;return (K(b-1|0,c)/d|0)+1|0;}
function C9(){var a=this;C.call(a);a.s=0;a.kV=0;a.bX=0;a.fz=0;}
function YM(a){var b=new C9();AVa(b,a);return b;}
function NM(a,b){var c=new C9();AM_(c,a,b);return c;}
function WR(a){var b=new C9();Ie(b,a);return b;}
function IS(a,b){var c=new C9();QL(c,a,b);return c;}
function OE(a,b){var c=new C9();MT(c,a,b);return c;}
function A7s(a,b,c){var d=new C9();A5w(d,a,b,c);return d;}
function PV(a){var b=new C9();AWd(b,a);return b;}
function AVa(a,b){AM_(a,b,1);}
function AM_(a,b,c){MT(a,b.b,c);}
function Ie(a,b){QL(a,b,1);}
function QL(a,b,c){MT(a,b.c3,c);}
function MT(a,b,c){a.s=0;a.bX=b;a.s=c;}
function A5w(a,b,c,d){a.s=0;a.bX=b;a.s=c;a.fz=d;}
function AWd(a,b){a.s=0;a.bX=Ck(b,B(404));a.s=EW(b,B(418));a.fz=Ck(b,B(419));}
function FC(a,b){a.s=a.s-b|0;return A7s(a.bX,b,a.fz);}
function BZ(a){B3();return Bcm.data[a.bX];}
function Ix(a,b){CH(b,B(404),a.bX<<16>>16);DW(b,B(418),a.s<<24>>24);CH(b,B(419),a.fz<<16>>16);return b;}
function Kr(a){B3();return Bcm.data[a.bX].iU;}
function GX(a,b){a.fz=a.fz+b|0;if(a.fz>Kr(a)){a.s=a.s-1|0;if(a.s<0)a.s=0;a.fz=0;}}
function AF8(){var a=this;C.call(a);a.e8=0;a.c6=0;a.c7=0;a.c8=0;a.c2=0;a.d5=null;a.tO=null;}
function A5Y(a,b,c,d,e){var f=new AF8();A4g(f,a,b,c,d,e);return f;}
function ATl(a){var b=new AF8();AZq(b,a);return b;}
function A4g(a,b,c,d,e,f){a.e8=0;a.c6=b;a.c7=c;a.c8=d;a.c2=e;a.d5=BF(f.U,f.R,f.S);}
function AZq(a,b){a.e8=1;a.tO=b;a.d5=BF(b.f,b.j,b.g);}
function Eu(){var a=this;CV.call(a);a.bF=null;a.e9=0;a.fi=0;a.cX=null;}
var Bgk=null;function Bgl(){var a=new Eu();J7(a);return a;}
function J7(a){Fp(a);a.bF=null;a.e9=176;a.fi=166;a.cX=BV();}
function AAL(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}e=(a.bq-a.e9|0)/2|0;f=(a.bM-a.fi|0)/2|0;$p=2;case 2:a.tB();if(I()){break _;}Ca();Bs(180.0,1.0,0.0,0.0);I4();BS();Ca();Bj(e,f,0.0);BJ(1.0,1.0,1.0,1.0);Y(2977);g=0;if(g<a.cX.q){h=Be(a.cX,g);i=h.fF;j
=h.la;k=h.j2;l=h.ke;m=i.gY(j);if(m===null){n=h.sC();if(n>=0){Bc(2896);i=a.x.cf;m=B(248);$p=5;continue _;}}o=Bgk;i=a.x.cf;$p=4;continue _;}if(a.bF===null){Bc(2977);D9();Bc(2896);Bc(2929);a.lT();Y(2896);Y(2929);BS();return;}Bj(0.0,0.0,32.0);h=Bgk;i=a.x.cf;m=a.bF;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;case 3:AKW(h,i,m,b,c);if(I()){break _;}Pk(Bgk,a.cK,a.bF,b,c);Bc(2977);D9();Bc(2896);Bc(2929);a.lT();Y(2896);Y(2929);BS();return;case 4:AKW(o,i,m,k,l);if(I()){break _;}Pk(Bgk,a.cK,m,k,l);if(ND(h,b,c)){Bc(2896);Bc(2929);p
=h.j2;q=h.ke;Px(p,q,p+16|0,q+16|0,(-2130706433),(-2130706433));Y(2896);Y(2929);}g=g+1|0;if(g<a.cX.q){h=Be(a.cX,g);i=h.fF;j=h.la;k=h.j2;l=h.ke;m=i.gY(j);if(m===null){n=h.sC();if(n>=0){Bc(2896);i=a.x.cf;m=B(248);$p=5;continue _;}}o=Bgk;i=a.x.cf;continue _;}if(a.bF===null){Bc(2977);D9();Bc(2896);Bc(2929);a.lT();Y(2896);Y(2929);BS();return;}Bj(0.0,0.0,32.0);h=Bgk;i=a.x.cf;m=a.bF;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;case 5:$z=AB_(i,m);if(I()){break _;}j=$z;EP(j);CD(a,k,l,(n%16|0)<<4,(n/16|0)<<4,16,16);Y(2896);if
(ND(h,b,c)){Bc(2896);Bc(2929);p=h.j2;q=h.ke;Px(p,q,p+16|0,q+16|0,(-2130706433),(-2130706433));Y(2896);Y(2929);}g=g+1|0;if(g<a.cX.q){h=Be(a.cX,g);i=h.fF;j=h.la;k=h.j2;l=h.ke;m=i.gY(j);if(m===null){n=h.sC();if(n>=0){Bc(2896);i=a.x.cf;m=B(248);continue _;}}o=Bgk;i=a.x.cf;$p=4;continue _;}if(a.bF===null){Bc(2977);D9();Bc(2896);Bc(2929);a.lT();Y(2896);Y(2929);BS();return;}Bj(0.0,0.0,32.0);h=Bgk;i=a.x.cf;m=a.bF;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AKe(a,b,c,d){var e,f,g,h,i,j;if(!(d&&d!=1)){e=0;a:{while(true){if(e>=CE(a.cX)){f=null;break a;}f=Be(a.cX,e);if(ND(f,b,c))break;e=e+1|0;}}if(f!==null){g=f.fF.gY(f.la);if(g===null&&a.bF===null)return;if(g!==null&&a.bF===null){b=!d?g.s:(g.s+1|0)/2|0;a.bF=f.fF.kM(f.la,b);if(!g.s)KJ(f,null);f.y7();}else if(g===null&&a.bF!==null&&f.q7(a.bF)){b=d?1:a.bF.s;if(b>f.fF.f2())b=f.fF.f2();KJ(f,FC(a.bF,b));if(!a.bF.s)a.bF=null;}else if(g!==null&&a.bF!==null){if(!f.q7(a.bF)){if(g.bX==a.bF.bX&&HC(BZ(a.bF))>1){b=g.s;if
(b>0&&(b+a.bF.s|0)<=HC(BZ(a.bF))){h=a.bF;h.s=h.s+b|0;FC(g,b);if(!g.s)KJ(f,null);f.y7();return;}return;}return;}if(g.bX!=a.bF.bX){if(a.bF.s>f.fF.f2())return;KJ(f,a.bF);a.bF=g;}else{if(g.bX!=a.bF.bX)return;if(!d){b=a.bF.s;if(b>(f.fF.f2()-g.s|0))b=f.fF.f2()-g.s|0;if(b>(HC(BZ(a.bF))-g.s|0))b=HC(BZ(a.bF))-g.s|0;FC(a.bF,b);if(!a.bF.s)a.bF=null;g.s=g.s+b|0;}else{if(d!=1)return;b=1;if(1>(f.fF.f2()-g.s|0))b=f.fF.f2()-g.s|0;if(b>(HC(BZ(a.bF))-g.s|0))b=HC(BZ(a.bF))-g.s|0;FC(a.bF,b);if(!a.bF.s)a.bF=null;g.s=g.s+b|0;}}}
else return;}else if(a.bF!==null){i=(a.bq-a.e9|0)/2|0;e=(a.bM-a.fi|0)/2|0;if(!(b>=i&&c>=e&&b<(i+a.e9|0)&&c<(e+a.e9|0))){j=a.x.a;if(!d){J9(j,a.bF);a.bF=null;}if(d==1){J9(j,FC(a.bF,1));if(!a.bF.s)a.bF=null;}}}}}
function AIm(a,b,c){var d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.x.d.gx.bt)return;d=a.x;e=null;$p=1;case 1:AOR(d,e);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function Y6(a){if(a.bF!==null)J9(a.x.a,a.bF);}
function A2r(a){return 0;}
function AMS(){Bgk=AM8();}
function AJX(){var a=this;Eu.call(a);a.my=null;a.vg=null;a.FX=0.0;a.DA=0.0;}
function Gm(a){var b=new AJX();AW0(b,a);return b;}
function AW0(a,b){var c,d,e,f,g;J7(a);a.my=AOW(a,2,2);a.vg=AQ4();a.n$=1;M(a.cX,AP7(a,a.my,a.vg,0,144,36));c=0;while(c<2){d=0;while(d<2){M(a.cX,En(a,a.my,d+(c<<1)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.cX;f=new Wu;XX(f,a,b,(ALF(b)-1|0)-d|0,8,8+(d*18|0)|0);f.xj=d;M(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){M(a.cX,En(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){M(a.cX,En(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function A3f(a){var b,c;Y6(a);b=0;while(b<a.my.ob){c=IW(a.my,b);if(c!==null)J9(a.x.a,c);b=b+1|0;}}
function AO$(a){var b,c,d,e,f,g;b=$rt_createIntArray(9);c=b.data;d=0;while(d<3){e=0;while(e<3){f=(-1);if(d<2&&e<2){g=IW(a.my,d+(e<<1)|0);if(g!==null)f=g.bX;}c[d+(e*3|0)|0]=f;e=e+1|0;}d=d+1|0;}So(a.vg,0,Vl(Xm(),b));}
function A6P(a){F9(a.cK,B(420),86,16,4210752);}
function AA$(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAL(a,b,c,d);if(I()){break _;}a.FX=b;a.DA=c;return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AAs(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cf;c=B(421);$p=1;case 1:$z=AB_(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EP(d);e=(a.bq-a.e9|0)/2|0;f=(a.bM-a.fi|0)/2|0;CD(a,e,f,0,0,a.e9,a.fi);Y(2977);Y(2903);Ca();g=e+51|0;d=f+75|0;Bj(g,d,50.0);C7((-30.0),30.0,30.0);Bs(180.0,0.0,0.0,
1.0);h=a.x.a.eM;i=a.x.a.I;j=a.x.a.X;g=g-a.FX;k=(d-50|0)-a.DA;Bs(135.0,0.0,1.0,0.0);I4();Bs((-135.0),0.0,1.0,0.0);l=k/40.0;Bs( -Lp(l)*20.0,1.0,0.0,0.0);c=a.x.a;m=g/40.0;c.eM=Lp(m)*20.0;a.x.a.I=Lp(m)*40.0;a.x.a.X= -Lp(l)*20.0;Bj(0.0,a.x.a.dP,0.0);c=BdQ;b=a.x.a;k=0.0;n=0.0;o=0.0;p=0.0;g=1.0;$p=2;case 2:AGf(c,b,k,n,o,p,g);if(I()){break _;}a.x.a.eM=h;a.x.a.I=i;a.x.a.X=j;BS();D9();Bc(2977);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ACf(){var a=this;C.call(a);a.fZ=0;a.fS=0;}
function G8(a,b){var c=new ACf();A0U(c,a,b);return c;}
function A0U(a,b,c){var d;a.fZ=b;a.fS=c;c=1;while(true){d=a.fZ;b=c+1|0;if((d/b|0)<320)break;if((a.fS/b|0)<240)break;c=b;}a.fZ=a.fZ/c|0;a.fS=a.fS/c|0;}
function AD2(a){return a.fZ;}
function AKA(a){return a.fS;}
function Us(){}
function UB(){}
function QS(){var a=this;C.call(a);a.wP=null;a.Cp=null;a.JF=0;a.Ky=0;}
function AMs(a){if(!a.JF){a.wP.DV=null;FV(a.wP);CY(a.Cp,null);}}
function Rw(){Ev.call(this);}
function A2O(a,b){$rt_putStderr(b);}
function AHF(){var a=this;C.call(a);a.U=0.0;a.R=0.0;a.S=0.0;}
function BF(a,b,c){var d=new AHF();A3i(d,a,b,c);return d;}
function A3i(a,b,c,d){a.U=b;a.R=c;a.S=d;}
function Z0(a,b){return BF(a.U-b.U,a.R-b.R,a.S-b.S);}
function J_(a){var b;b=B$(a.U*a.U+a.R*a.R+a.S*a.S);return BF(a.U/b,a.R/b,a.S/b);}
function Je(a,b,c,d){return BF(a.U+b,a.R+c,a.S+d);}
function C$(a,b){var c,d,e;c=b.U-a.U;d=b.R-a.R;e=b.S-a.S;return B$(c*c+d*d+e*e);}
function EZ(a,b){var c,d,e;c=b.U-a.U;d=b.R-a.R;e=b.S-a.S;return c*c+d*d+e*e;}
function Ks(a,b,c){var d,e,f;d=b.U-a.U;e=b.R-a.R;f=b.S-a.S;if(d*d<1.0000000116860974E-7)return null;c=(c-a.U)/d;return c>=0.0&&c<=1.0?BF(a.U+d*c,a.R+e*c,a.S+f*c):null;}
function Kw(a,b,c){var d,e,f;d=b.U-a.U;e=b.R-a.R;f=b.S-a.S;if(e*e<1.0000000116860974E-7)return null;c=(c-a.R)/e;return c>=0.0&&c<=1.0?BF(a.U+d*c,a.R+e*c,a.S+f*c):null;}
function Kf(a,b,c){var d,e,f;d=b.U-a.U;e=b.R-a.R;f=b.S-a.S;if(f*f<1.0000000116860974E-7)return null;c=(c-a.S)/f;return c>=0.0&&c<=1.0?BF(a.U+d*c,a.R+e*c,a.S+f*c):null;}
function Uq(){var a=this;C.call(a);a.ox=null;a.xR=null;a.cB=null;a.db=0;a.jx=null;}
function AUU(a){return a.cB;}
function AGk(a,b){var c,d,e,f;ES(a.cB);a.jx=b;a.db=0;while(a.db<Q(b)){a:{b:{c:{c=P(b,a.db);switch(c){case 39:a.db=a.db+1|0;d=new R;T(d);while(a.db<Q(a.jx)){e=a.jx;f=a.db;a.db=f+1|0;c=P(e,f);if(c!=39)Ce(d,c);else{if(a.db>=Q(a.jx))break;if(P(a.jx,a.db)!=39)break;Ce(d,39);a.db=a.db+1|0;}}M(a.cB,AXY(S(d)));break a;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 65:case 66:case 67:case 73:case 74:case 78:case 79:case 80:case 81:case 82:case 84:case 85:case 86:case 91:case 92:case 93:case 94:case 95:case 96:case 98:case 101:case 102:case 103:case 105:case 106:case 108:case 110:case 111:case 112:case 113:case 114:case 116:case 118:case 120:break b;case 68:break;case 69:case 99:f
=CO(a);M(a.cB,A_b(a.ox,f>3?0:1));break a;case 70:f=CO(a);M(a.cB,Fj(8,f));break a;case 71:CO(a);d=a.cB;e=new Sz;e.wQ=AI3(a.ox);M(d,e);break a;case 72:f=CO(a);M(a.cB,Fj(11,f));break a;case 75:f=CO(a);M(a.cB,Fj(10,f));break a;case 76:case 77:f=CO(a);if(f<=2){M(a.cB,A$q(f));break a;}M(a.cB,A$x(a.ox,f!=3?0:1));break a;case 83:f=CO(a);M(a.cB,Fj(14,f));break a;case 87:f=CO(a);M(a.cB,Fj(4,f));break a;case 88:f=CO(a);if(f>3){b=new BB;d=new R;T(d);AOM(b,S(Bd(E(d,B(422)),a.db)));J(b);}d=a.cB;e=new TH;e.yH=f;M(d,e);break a;case 89:case 121:break c;case 90:CO(a);d
=a.cB;e=new Sw;T4(e,a.xR);M(d,e);break a;case 97:CO(a);d=a.cB;e=new Qg;e.wJ=ABf(a.ox);M(d,e);break a;case 100:f=CO(a);M(a.cB,Fj(5,f));break a;case 104:f=CO(a);M(a.cB,A0I(10,f,12));break a;case 107:f=CO(a);M(a.cB,A0I(11,f,24));break a;case 109:f=CO(a);M(a.cB,Fj(12,f));break a;case 115:f=CO(a);M(a.cB,Fj(13,f));break a;case 117:f=CO(a);d=a.cB;e=new RY;Oz(e,7,f);M(d,e);break a;case 119:f=CO(a);M(a.cB,Fj(3,f));break a;case 122:CO(a);d=a.cB;e=new R3;T4(e,a.xR);M(d,e);break a;default:break b;}f=CO(a);M(a.cB,Fj(6,f));break a;}f
=CO(a);if(f!=2){M(a.cB,Fj(1,f));break a;}d=a.cB;e=new Yd;e.vz=1;M(d,e);break a;}if(Rd(a,c))CO(a);else{d=new R;T(d);while(a.db<Q(b)&&!Rd(a,P(b,a.db))){f=a.db;a.db=f+1|0;Ce(d,P(b,f));}M(a.cB,AXY(S(d)));}}}}
function Rd(a,b){a:{b:{if(b!=39&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function CO(a){var b,c,d,e;b=1;c=a.jx;d=a.db;a.db=d+1|0;e=P(c,d);while(a.db<Q(a.jx)&&P(a.jx,a.db)==e){a.db=a.db+1|0;b=b+1|0;}return b;}
function C2(){C.call(this);}
function AAe(){BU.call(this);}
function Km(){C.call(this);this.H9=null;}
var Bgm=null;var Bba=null;var Bda=null;function AGL(a){var b=new Km();AMJ(b,a);return b;}
function AMJ(a,b){a.H9=b;}
function AEq(){Bgm=AGL(B(423));Bba=AGL(B(424));Bda=AGL(B(425));}
function Mh(){C.call(this);}
function Jm(){var a=this;Mh.call(a);a.ek=0.0;a.ei=0.0;a.ej=0.0;a.el=0.0;a.eo=0.0;a.ep=0.0;a.em=0.0;a.en=0.0;a.eq=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.gL=0.0;a.gM=0.0;a.gN=0.0;a.gO=0.0;}
function FI(){var a=new Jm();A5P(a);return a;}
function A5P(a){ZH(a);}
function ZH(a){a.ek=1.0;a.ei=0.0;a.ej=0.0;a.el=0.0;a.eo=0.0;a.ep=1.0;a.em=0.0;a.en=0.0;a.eq=0.0;a.es=0.0;a.et=1.0;a.er=0.0;a.gL=0.0;a.gM=0.0;a.gN=0.0;a.gO=1.0;return a;}
function LK(a){a.ek=0.0;a.ei=0.0;a.ej=0.0;a.el=0.0;a.eo=0.0;a.ep=0.0;a.em=0.0;a.en=0.0;a.eq=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.gL=0.0;a.gM=0.0;a.gN=0.0;a.gO=0.0;return a;}
function Hn(a,b){a.ek=b.ek;a.ei=b.ei;a.ej=b.ej;a.el=b.el;a.eo=b.eo;a.ep=b.ep;a.em=b.em;a.en=b.en;a.eq=b.eq;a.es=b.es;a.et=b.et;a.er=b.er;a.gL=b.gL;a.gM=b.gM;a.gN=b.gN;a.gO=b.gO;return a;}
function YF(a,b){Ch(b,a.ek);Ch(b,a.ei);Ch(b,a.ej);Ch(b,a.el);Ch(b,a.eo);Ch(b,a.ep);Ch(b,a.em);Ch(b,a.en);Ch(b,a.eq);Ch(b,a.es);Ch(b,a.et);Ch(b,a.er);Ch(b,a.gL);Ch(b,a.gM);Ch(b,a.gN);Ch(b,a.gO);return a;}
function OB(a,b){b=b.data;b[0]=a.ek;b[1]=a.ei;b[2]=a.ej;b[3]=a.el;b[4]=a.eo;b[5]=a.ep;b[6]=a.em;b[7]=a.en;b[8]=a.eq;b[9]=a.es;b[10]=a.et;b[11]=a.er;b[12]=a.gL;b[13]=a.gM;b[14]=a.gN;b[15]=a.gO;return a;}
function A0d(a,b){return VG(a,b,a);}
function ADM(a,b){a.ek=a.ek*b.fu;a.ei=a.ei*b.fu;a.ej=a.ej*b.fu;a.el=a.el*b.fu;a.eo=a.eo*b.fw;a.ep=a.ep*b.fw;a.em=a.em*b.fw;a.en=a.en*b.fw;a.eq=a.eq*b.fv;a.es=a.es*b.fv;a.et=a.et*b.fv;a.er=a.er*b.fv;return a;}
function A0H(a,b,c){return VO(a,b,c,a);}
function VO(a,b,c,d){return A0e(b,c,a,d);}
function A0e(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=FI();f=b;g=Qz(f);h=LT(f);i=1.0-g;j=c.fu*c.fw;k=c.fw*c.fv;l=c.fu*c.fv;m=c.fu*h;n=c.fw*h;o=c.fv*h;p=c.fu*c.fu*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fw*c.fw*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fv*c.fv*i+g;z=d.ek*p+d.eo*q+d.eq*s;ba=d.ei*p+d.ep*q+d.es*s;bb=d.ej*p+d.em*q+d.et*s;bc=d.el*p+d.en*q+d.er*s;bd=d.ek*t+d.eo*u+d.eq*v;be=d.ei*t+d.ep*u+d.es*v;bf=d.ej*t+d.em*u+d.et*v;r=d.el*t+d.en*u+d.er*v;e.eq=d.ek*w+d.eo*x+d.eq*
y;e.es=d.ei*w+d.ep*x+d.es*y;e.et=d.ej*w+d.em*x+d.et*y;e.er=d.el*w+d.en*x+d.er*y;e.ek=z;e.ei=ba;e.ej=bb;e.el=bc;e.eo=bd;e.ep=be;e.em=bf;e.en=r;return e;}
function VG(a,b,c){if(c===null)c=FI();c.gL=c.gL+a.ek*b.fu+a.eo*b.fw+a.eq*b.fv;c.gM=c.gM+a.ei*b.fu+a.ep*b.fw+a.es*b.fv;c.gN=c.gN+a.ej*b.fu+a.em*b.fw+a.et*b.fv;c.gO=c.gO+a.el*b.fu+a.en*b.fw+a.er*b.fv;return c;}
function L9(a,b){var c;a:{if(b instanceof Jm){b:{c:{b=b;if(a.ek!==b.ek)break c;if(a.ei!==b.ei)break c;if(a.ej!==b.ej)break c;if(a.el!==b.el)break c;if(a.eo!==b.eo)break c;if(a.ep!==b.ep)break c;if(a.em!==b.em)break c;if(a.en!==b.en)break c;if(a.eq!==b.eq)break c;if(a.es!==b.es)break c;if(a.et!==b.et)break c;if(a.er!==b.er)break c;if(a.gL!==b.gL)break c;if(a.gM!==b.gM)break c;if(a.gN!==b.gN)break c;if(a.gO===b.gO){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function SI(){var a=this;C.call(a);a.AJ=0;a.s7=null;a.pr=null;a.lj=0;a.kL=0;}
function LD(){var a=this;C.call(a);a.r9=0;a.rH=0;a.tr=0;a.xH=0;a.u1=0;a.yg=0;a.EW=0;a.cA=null;a.xW=null;a.xX=null;a.xY=null;a.uE=null;a.yf=null;a.wz=null;a.w2=null;a.xM=null;a.zk=null;a.t_=null;a.xu=null;a.wC=null;a.w6=null;a.x_=null;a.w3=null;a.sn=0;a.oU=0;a.qy=0;a.qw=0;a.IE=0;a.wf=null;a.vE=null;a.uS=0;a.yV=null;a.up=null;a.yI=null;a.un=null;a.uU=null;a.xT=null;a.nu=null;a.n6=null;a.uB=0;a.re=0.0;a.rf=0.0;a.rg=0.0;a.rh=0.0;a.sm=0.0;a.rd=0.0;a.ta=0.0;a.sX=0.0;a.tU=0.0;a.tT=0.0;a.sy=0.0;a.sx=0.0;a.sw=0.0;a.sA
=0.0;a.si=0.0;a.sh=0.0;a.sg=0.0;}
var Bgn=null;var Bgo=null;function A9a(a,b,c,d,e,f,g,h){var i=new LD();AOl(i,a,b,c,d,e,f,g,h);return i;}
function XF(b){var c,d,e,f,g,h,i,j;c=Bgn.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;j=0;if((b&1)==1)d=1;if((b&2)==2)e=1;if((b&4)==4)f=1;if((b&8)==8)g=1;if((b&16)==16)h=1;if((b&32)==32)i=1;if((b&64)==64)j=1;c=A9a(b,d,e,f,g,h,i,j);Bgn.data[b]=c;}return c;}
function AOl(a,b,c,d,e,f,g,h,i){var j,k,l;Ze(a);a.xW=null;a.xX=null;a.xY=null;a.uE=null;a.yf=null;a.wz=null;a.w2=null;a.xM=null;a.zk=null;a.t_=null;a.xu=null;a.wC=null;a.w6=null;a.x_=null;a.w3=null;a.uS=0;a.yV=$rt_createFloatArray(16);a.up=$rt_createFloatArray(16);a.yI=$rt_createFloatArray(16);a.un=LK(FI());a.uU=LK(FI());a.xT=LK(FI());a.nu=AZV();a.n6=AZV();a.uB=0;a.re=0.0;a.rf=0.0;a.rg=0.0;a.rh=0.0;a.sm=0.0;a.rd=0.0;a.ta=0.0;a.sX=0.0;a.tU=0.0;a.tT=0.0;a.sy=0.0;a.sx=0.0;a.sw=0.0;a.sA=0.0;a.si=0.0;a.sh=0.0;a.sg
=0.0;a.r9=c;a.rH=d;a.tr=e;a.xH=f;a.u1=g;a.yg=h;a.EW=i;if(Bgo===null)Bgo=AD6(B(426));j=B(9);if(a.r9)j=B0(E(E(Cd(),j),B(427)));if(a.rH)j=B0(E(E(Cd(),j),B(428)));if(a.tr)j=B0(E(E(Cd(),j),B(429)));if(a.xH)j=B0(E(E(Cd(),j),B(430)));if(a.u1)j=B0(E(E(Cd(),j),B(431)));if(a.yg)j=B0(E(E(Cd(),j),B(432)));if(a.EW)j=B0(E(E(Cd(),j),B(433)));j=B0(E(E(Cd(),j),Bgo));k=TJ(35633);Zs(k,B0(E(E(E(Cd(),XW()),B(434)),j)));Wb(k);if(!TL(k)){Cm(Ez(),Ps(B0(E(E(Cd(),B(435)),XO(k))),B(174),B(436)));J(Ru(B(437)));}l=TJ(35632);Zs(l,B0(E(E(E(Cd(),
XW()),B(438)),j)));Wb(l);if(!TL(l)){Cm(Ez(),Ps(B0(E(E(Cd(),B(435)),XO(l))),B(174),B(439)));J(Ru(B(437)));}a.cA=AKd();AAc(a.cA,k);AAc(a.cA,l);b=1;a.sn=0;LN(a.cA,a.sn,B(440));if(!a.tr)a.oU=(-1);else{a.oU=b;LN(a.cA,a.oU,B(441));b=2;}if(!a.r9)a.qy=(-1);else{c=b+1|0;a.qy=b;LN(a.cA,a.qy,B(442));b=c;}if(!a.rH)a.qw=(-1);else{c=b+1|0;a.qw=b;LN(a.cA,a.qw,B(443));b=c;}a.IE=b;ABF(a.cA);Wr(a.cA,k);Wr(a.cA,l);W8(k);W8(l);if(!AJD(a.cA)){Cm(Ez(),Ps(B0(E(E(Cd(),B(435)),AOp(a.cA))),B(174),B(444)));J(Ru(B(437)));}Tx(a.cA);a.xW
=Du(a.cA,B(445));a.xX=Du(a.cA,B(446));a.xY=Du(a.cA,B(447));a.t_=Du(a.cA,B(448));if(a.xH){a.xu=Du(a.cA,B(449));a.x_=Du(a.cA,B(450));a.w3=Du(a.cA,B(451));}if(a.u1){a.uE=Du(a.cA,B(452));a.yf=Du(a.cA,B(453));a.wz=Du(a.cA,B(454));a.w2=Du(a.cA,B(455));a.xM=Du(a.cA,B(456));a.zk=Du(a.cA,B(457));}if(a.yg)a.wC=Du(a.cA,B(458));Qv(Du(a.cA,B(459)),0);a.w6=Du(a.cA,B(460));a.wf=Z$();a.vE=Mu();Rz(a.wf);HY(34962,a.vE);QJ(a);}
function QJ(a){Kv(a.sn);Kn(a.sn,3,5126,0,28,0);if(a.tr){Kv(a.oU);Kn(a.oU,2,5126,0,28,12);}if(a.r9){Kv(a.qy);Kn(a.qy,4,5121,1,28,20);}if(a.rH){Kv(a.qw);Kn(a.qw,4,5121,1,28,24);}}
function AGC(a){Tx(a.cA);}
function ATE(a){return;}
function AHB(a,b){if(!L9(b,a.un)){OB(Hn(a.un,b),a.yV);Ne(a.xW,a.yV);}}
function ABL(a,b){if(!L9(b,a.uU)){OB(Hn(a.uU,b),a.up);Ne(a.xX,a.up);}}
function AAJ(a,b){if(!L9(b,a.xT)){OB(Hn(a.xT,b),a.yI);Ne(a.xY,a.yI);}}
function ABC(a,b,c){if(!(XG(b,a.nu)&&XG(c,a.n6))){YI(a.nu,b);YI(a.n6,c);NN(a.x_,a.nu.hB,a.nu.hA,a.nu.hC);NN(a.w3,a.n6.hB,a.n6.hA,a.n6.hC);}}
function ANN(a,b){if(a.uB!=b){a.uB=b;Qv(a.yf,b%2|0);I5(a.zk,b/2|0);}}
function AG6(a,b,c,d,e){if(!(a.re===b&&a.rf===c&&a.rg===d&&a.rh===e)){a.re=b;a.rf=c;a.rg=d;a.rh=e;Te(a.uE,a.re,a.rf,a.rg,a.rh);}}
function AAo(a,b,c){if(!(a.sm===b&&a.rd===c)){a.sm=b;a.rd=c;I5(a.wz,a.sm);I5(a.w2,a.rd);}}
function AJt(a,b){if(a.ta!==b){a.ta=b;I5(a.xM,a.ta);}}
function AGi(a,b){if(a.sX!==b){a.sX=b;I5(a.wC,a.sX);}}
function AIZ(a,b,c){var d,e;if(!(a.tU===b&&a.tT===c)){a.tU=b;a.tT=c;d=a.w6;b=a.tU;c=a.tT;Bf();if(d!==null){e=A_Y;d=d.lW;e.uniform2f(d,b,c);}}}
function AHE(a,b,c,d,e){if(!(a.sy===b&&a.sx===c&&a.sw===d&&a.sA===e)){a.sy=b;a.sx=c;a.sw=d;a.sA=e;Te(a.t_,a.sy,a.sx,a.sw,a.sA);}}
function AMv(a,b,c,d){if(!(a.si===b&&a.sh===c&&a.sg===d)){a.si=b;a.sh=c;a.sg=d;NN(a.xu,a.si,a.sh,a.sg);}}
function AMD(){Bgn=H(LD,128);Bgo=null;}
function R_(){var a=this;C.call(a);a.dM=null;a.eP=0;}
function TY(a,b){var c,d;if(b.gu>=0){b=new DF;Bb(b,B(461));J(b);}if(a.eP==a.dM.data.length){c=H(IN,a.eP<<1);CT(a.dM,0,c,0,a.eP);a.dM=c;}a.dM.data[a.eP]=b;b.gu=a.eP;d=a.eP;a.eP=d+1|0;QU(a,d);return b;}
function P2(a){a.eP=0;}
function ALN(a){var b,c,d,e;b=a.dM.data[0];c=a.dM.data;d=a.dM.data;e=a.eP-1|0;a.eP=e;c[0]=d[e];a.dM.data[a.eP]=null;if(a.eP>0)Vh(a,0);b.gu=(-1);return b;}
function AK_(a,b,c){var d;d=b.i7;b.i7=c;if(c>=d)Vh(a,b.gu);else QU(a,b.gu);}
function QU(a,b){var c,d,e,f;c=a.dM.data[b];d=c.i7;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.dM.data[e];if(d>=f.i7)break;a.dM.data[b]=f;f.gu=b;b=e;}}a.dM.data[b]=c;c.gu=b;}
function Vh(a,b){var c,d,e,f,g,h,i,j;c=a.dM.data[b];d=c.i7;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eP)break;g=a.dM.data[e];h=g.i7;if(f>=a.eP){i=null;j=Infinity;}else{i=a.dM.data[f];j=i.i7;}if(h<j){if(h>=d)break a;a.dM.data[b]=g;g.gu=b;}else{if(j>=d)break a;a.dM.data[b]=i;i.gu=b;e=f;}b=e;}}a.dM.data[b]=c;c.gu=b;}
function AHD(a){return a.eP?0:1;}
function IN(){var a=this;C.call(a);a.ia=0;a.h5=0;a.iv=0;a.qp=0;a.gu=0;a.nc=0.0;a.oF=0.0;a.i7=0.0;a.or=null;a.nE=0;}
function AZe(a,b,c){var d=new IN();AYP(d,a,b,c);return d;}
function AYP(a,b,c,d){a.gu=(-1);a.nE=0;a.ia=b;a.h5=c;a.iv=d;a.qp=b|c<<10|d<<20;}
function Fe(a,b){var c,d,e;c=b.ia-a.ia|0;d=b.h5-a.h5|0;e=b.iv-a.iv|0;return B$(c*c+d*d+e*e);}
function A2q(a,b){return b.qp!=a.qp?0:1;}
function V5(a){return a.gu<0?0:1;}
function D_(){var a=this;C.call(a);a.hK=null;a.n2=0.0;a.ua=0.0;}
function Bgp(){var a=new D_();Ia(a);return a;}
function Ia(a){KF(new JV);AMW(new ZU);a.n2=0.0;a.ua=1.0;}
function AHK(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.hK.sH;$p=1;case 1:$z=AB_(c,b);if(I()){break _;}d=$z;EP(d);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AH3(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.hK.sH;$p=1;case 1:$z=AB_(c,b);if(I()){break _;}d=$z;EP(d);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AKi(b){var c;Bc(3553);BE();c=Bdg;BJ(1.0,1.0,1.0,1.0);Bx(c);B1(c,0.0,0.0,(-1.0));Bo(c,b.bg,b.bs,b.bf);Bo(c,b.bv,b.bs,b.bf);Bo(c,b.bv,b.bc,b.bf);Bo(c,b.bg,b.bc,b.bf);B1(c,0.0,0.0,1.0);Bo(c,b.bg,b.bc,b.bw);Bo(c,b.bv,b.bc,b.bw);Bo(c,b.bv,b.bs,b.bw);Bo(c,b.bg,b.bs,b.bw);B1(c,0.0,(-1.0),0.0);Bo(c,b.bg,b.bc,b.bf);Bo(c,b.bv,b.bc,b.bf);Bo(c,b.bv,b.bc,b.bw);Bo(c,b.bg,b.bc,b.bw);B1(c,0.0,1.0,0.0);Bo(c,b.bg,b.bs,b.bw);Bo(c,b.bv,b.bs,b.bw);Bo(c,b.bv,b.bs,b.bf);Bo(c,b.bg,b.bs,b.bf);B1(c,(-1.0),0.0,0.0);Bo(c,b.bg,
b.bc,b.bw);Bo(c,b.bg,b.bs,b.bw);Bo(c,b.bg,b.bs,b.bf);Bo(c,b.bg,b.bc,b.bf);B1(c,1.0,0.0,0.0);Bo(c,b.bv,b.bc,b.bf);Bo(c,b.bv,b.bs,b.bf);Bo(c,b.bv,b.bs,b.bw);Bo(c,b.bv,b.bc,b.bw);Bt(c);Y(3553);}
function ATW(a,b){a.hK=b;}
function ABH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(2896);L();g=Bd9.bk;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;Ca();Bj(c,d,e);n=b.dL*1.399999976158142;C7(n,n,n);o=B(205);$p
=1;case 1:AHK(a,o);if(I()){break _;}BE();o=Bdg;p=1.0;q=0.0;r=b.gB/b.dL;Bs( -a.hK.qP,0.0,1.0,0.0);Bj(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BJ(1.0,1.0,1.0,1.0);Bx(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bj(0.0,0.0,(-0.03999999910593033));}Bt(o);BS();Y(2896);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AIe(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Y(3042);Dy(770,
771);h=a.hK.sH;i=B(462);$p=1;case 1:$z=AB_(h,i);if(I()){break _;}j=$z;EP(j);i=QH(a);EJ(0);k=a.n2;l=b.ec;m=b.f-b.ec;n=g;o=l+m*n;p=b.eb+(b.j-b.eb)*n;l=b.ea+(b.g-b.ea)*n;m=k;j=Em(o-m);q=Em(o+m);r=Em(p-m);s=Em(p);t=Em(l-m);u=Em(l+m);v=c;w=v-o;x=d;y=x-p;z=e;ba=z-l;BE();bb=Bdg;Bx(bb);bc=f;while(j<=q){bd=r;while(bd<=s){be=t;while(be<=u){bf=O(i,j,bd-1|0,be);if(bf>0&&D5(i,j,bd,be)>3){L();b=Bcn.data[bf];h=Bdg;if(b.iy()){p=bd;n=(bc-(x-(p+y))/2.0)*0.5*DT(QH(a),j,bd,be);if(n>=0.0){if(n>1.0)n=1.0;Oc(h,1.0,1.0,1.0,n);l=j;n
=l+b.ex+w;bg=l+b.fD+w;bh=p+b.cj+y+0.015625;l=be;bi=l+b.ew+ba;bj=l+b.fC+ba;e=(v-n)/2.0/m+0.5;f=(v-bg)/2.0/m+0.5;d=(z-bi)/2.0/m+0.5;c=(z-bj)/2.0/m+0.5;l=e;o=d;G(h,n,bh,bi,l,o);p=c;G(h,n,bh,bj,l,p);l=f;G(h,bg,bh,bj,l,p);G(h,bg,bh,bi,l,o);}}}be=be+1|0;}bd=bd+1|0;}j=j+1|0;}Bt(bb);BJ(1.0,1.0,1.0,1.0);Bc(3042);EJ(1);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,$p);}
function QH(a){return a.hK.nb;}
function ALe(a,b,c,d,e,f,g){var h,i,j,k,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bch.d.ds&&a.n2>0.0){h=(1.0-AAT(a.hK,b.f,b.j,b.g)/256.0)*a.ua;if(h>0.0){$p=2;continue _;}}if(b.dk<=0)return;i=c;j=d;k=e;$p=1;case 1:ABH(a,b,i,j,k,g);if(I()){break _;}return;case 2:AIe(a,b,c,d,e,h,g);if(I()){break _;}if(b.dk<=0)return;i=c;j=d;k=e;$p=1;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,
g,h,i,j,k,$p);}
function AB4(){var a=this;D_.call(a);a.zl=null;a.hO=null;}
function AM8(){var a=new AB4();AYM(a);return a;}
function AYM(a){Ia(a);a.zl=AAy();a.hO=new Dd;a.n2=0.15000000596046448;a.ua=0.75;}
function AKW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null){if(c.bX<256){L();if(!Bcn.data[c.bX].ij()){f=c.bX;c=B(205);$p=1;continue _;}}if(BZ(c).M>=0){Bc(2896);if(c.bX>=256){g=B(248);$p=2;continue _;}g=B(205);$p=3;continue _;}}return;case 1:$z=AB_(b,c);if(I()){break _;}h=$z;EP(h);i
=Bcn.data[f];Ca();Bj(d-2|0,e+3|0,0.0);C7(10.0,10.0,10.0);Bj(1.0,0.5,8.0);Bs(210.0,1.0,0.0,0.0);Bs(45.0,0.0,1.0,0.0);BJ(1.0,1.0,1.0,1.0);BO();IU(a.zl,i);BO();BS();return;case 2:$z=AB_(b,g);if(I()){break _;}f=$z;EP(f);h=(BZ(c).M%16|0)<<4;j=(BZ(c).M/16|0)<<4;BE();g=Bdg;Bx(g);k=d;l=e+16|0;m=h*0.00390625;n=(j+16|0)*0.00390625;G(g,k,l,0.0,m,n);o=d+16|0;p=(h+16|0)*0.00390625;G(g,o,l,0.0,p,n);l=e;q=j*0.00390625;G(g,o,l,0.0,p,q);G(g,k,l,0.0,m,q);Bt(g);Y(2896);return;case 3:$z=AB_(b,g);if(I()){break _;}f=$z;EP(f);h=(BZ(c).M
%16|0)<<4;j=(BZ(c).M/16|0)<<4;BE();g=Bdg;Bx(g);k=d;l=e+16|0;m=h*0.00390625;n=(j+16|0)*0.00390625;G(g,k,l,0.0,m,n);o=d+16|0;p=(h+16|0)*0.00390625;G(g,o,l,0.0,p,n);l=e;q=j*0.00390625;G(g,o,l,0.0,p,q);G(g,k,l,0.0,m,q);Bt(g);Y(2896);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Pk(a,b,c,d,e){var f,g,h,i,j,k,l;if(c!==null){if(c.s>1){f=new R;T(f);f=S(Bd(E(f,B(9)),c.s));Bc(2896);Bc(2929);CG(b,f,((d+19|0)-2|0)-Ei(b,f)|0,(e+6|0)+3|0,16777215);Y(2896);Y(2929);}if(c.fz>0){g=13-((c.fz*13|0)/Kr(c)|0)|0;h=255-((c.fz*255|0)/Kr(c)|0)|0;Bc(2896);Bc(2929);Bc(3553);BE();i=Bdg;j=255-h|0;k=j<<16|h<<8;h=(j/4|0)<<16|16128;d=d+2|0;l=e+13|0;Zz(i,d,l,13,2,0);Zz(i,d,l,12,1,h);Zz(i,d,l,g,1,k);Y(3553);Y(2896);Y(2929);BJ(1.0,1.0,1.0,1.0);}}}
function Zz(b,c,d,e,f,g){var h,i,j;Bx(b);Ii(b,g);h=c;i=d;Bo(b,h,i,0.0);j=d+f|0;Bo(b,h,j,0.0);h=c+e|0;Bo(b,h,j,0.0);Bo(b,h,i,0.0);Bt(b);}
function ALJ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;i=h.jO;Ca();j=Bv((h.iZ+g)/10.0+h.rp)*0.10000000149011612+0.10000000149011612;f=((h.iZ+g)/20.0+h.rp)*57.2957763671875;k=1;if(h.jO.s>1)k=2;if(h.jO.s>5)k=3;if(h.jO.s>20)k=4;Bj(c,d+j,e);Y(2977);if(i.bX<256){L();if
(!Bcn.data[i.bX].ij()){Bs(f,0.0,1.0,0.0);b=B(205);$p=3;continue _;}}C7(0.5,0.5,0.5);l=BZ(i).M;if(i.bX>=256){b=B(248);$p=1;continue _;}b=B(205);$p=2;continue _;case 1:AHK(a,b);if(I()){break _;}BE();m=Bdg;n=(l%16|0)<<4;c=n/256.0;f=(n+16|0)/256.0;n=(l/16|0)<<4;g=n/256.0;d=(n+16|0)/256.0;o=0;p=c;q=d;r=f;s=g;while(o<k){Ca();if(o>0)Bj((N(a.hO)*2.0-1.0)*0.30000001192092896,(N(a.hO)*2.0-1.0)*0.30000001192092896,(N(a.hO)*2.0-1.0)*0.30000001192092896);Bs(180.0-a.hK.qP,0.0,1.0,0.0);Bx(m);B1(m,0.0,1.0,0.0);G(m,(-0.5),(-0.25),
0.0,p,q);G(m,0.5,(-0.25),0.0,r,q);G(m,0.5,0.75,0.0,r,s);G(m,(-0.5),0.75,0.0,p,s);BO();Bt(m);BO();BS();o=o+1|0;}Bc(2977);BS();return;case 2:AHK(a,b);if(I()){break _;}BE();m=Bdg;n=(l%16|0)<<4;c=n/256.0;f=(n+16|0)/256.0;n=(l/16|0)<<4;g=n/256.0;d=(n+16|0)/256.0;o=0;p=c;q=d;r=f;s=g;while(o<k){Ca();if(o>0)Bj((N(a.hO)*2.0-1.0)*0.30000001192092896,(N(a.hO)*2.0-1.0)*0.30000001192092896,(N(a.hO)*2.0-1.0)*0.30000001192092896);Bs(180.0-a.hK.qP,0.0,1.0,0.0);Bx(m);B1(m,0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,p,q);G(m,0.5,(-0.25),
0.0,r,q);G(m,0.5,0.75,0.0,r,s);G(m,(-0.5),0.75,0.0,p,s);BO();Bt(m);BO();BS();o=o+1|0;}Bc(2977);BS();return;case 3:AHK(a,b);if(I()){break _;}c=0.25;if(!Bcn.data[i.bX].iy()&&i.bX!=Bcs.b)c=0.5;C7(c,c,c);n=0;while(n<k){Ca();if(n>0)Bj((N(a.hO)*2.0-1.0)*0.20000000298023224/c,(N(a.hO)*2.0-1.0)*0.20000000298023224/c,(N(a.hO)*2.0-1.0)*0.20000000298023224/c);BO();IU(a.zl,Bcn.data[i.bX]);BO();BS();n=n+1|0;}Bc(2977);BS();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function FP(){C.call(this);}
function AMH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Zn(Bch.f_,B(463));b=Bch.f_;c=25;$p=1;case 1:ALQ(b,c);if(I()){break _;}try{d=Long_fromInt(3000);$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds)
{e=$$je;}else{throw $$e;}}e.iO();b=Bch.f_;f=B(464);$p=3;continue _;case 2:a:{try{AJf(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iO();}b=Bch.f_;f=B(464);$p=3;case 3:ANk(b,f);if(I()){break _;}b=Bch.f_;c=50;$p=4;case 4:ALQ(b,c);if(I()){break _;}try{d=Long_fromInt(1000);$p=5;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iO();f=A_E;b=Gx(f,B(465));g=Gx(f,B(466));h=Gx(f,B(467));i=Ee(f,B(468));j=Ck(g,B(469));k=Ck(g,B(470));l
=Ck(g,B(471));m=X0();e=Bch.f_;n=B(472);$p=6;continue _;case 5:a:{try{AJf(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iO();}f=A_E;b=Gx(f,B(465));g=Gx(f,B(466));h=Gx(f,B(467));i=Ee(f,B(468));j=Ck(g,B(469));k=Ck(g,B(470));l=Ck(g,B(471));m=X0();e=Bch.f_;n=B(472);$p=6;case 6:ANk(e,n);if(I()){break _;}e=Bch.f_;c=75;$p=7;case 7:ALQ(e,c);if(I()){break _;}try{d=Long_fromInt(1000);$p=8;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iO();n
=Ee(g,B(473));m.g5=CS(n,0).h$;m.gZ=CS(n,1).h$;m.hx=CS(n,2).h$;m.pc=Fg(b,B(474));m.oB=Fg(b,B(475));m.qH=V9(b,B(476));m.hp=DK(h,B(477));m.hJ=DK(h,B(478));m.hD=DK(h,B(479));m.dG=EW(h,B(480));if(m.dG<0)m.dG=0;if(m.dG>16)m.dG=(m.dG*15|0)/100|0;m.kE=Ck(h,B(481));m.eD=Ck(h,B(482));m.fE=Ck(h,B(483));m.jq=EW(h,B(484));m.iV=Ck(h,B(485));m.eg=Ov(m);K3(m,j,l,k,LY(g,B(486)),LY(g,B(487)));b=Bch.f_;g=B(488);$p=9;continue _;case 8:a:{try{AJf(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}
else{throw $$e;}}e.iO();}n=Ee(g,B(473));m.g5=CS(n,0).h$;m.gZ=CS(n,1).h$;m.hx=CS(n,2).h$;m.pc=Fg(b,B(474));m.oB=Fg(b,B(475));m.qH=V9(b,B(476));m.hp=DK(h,B(477));m.hJ=DK(h,B(478));m.hD=DK(h,B(479));m.dG=EW(h,B(480));if(m.dG<0)m.dG=0;if(m.dG>16)m.dG=(m.dG*15|0)/100|0;m.kE=Ck(h,B(481));m.eD=Ck(h,B(482));m.fE=Ck(h,B(483));m.jq=EW(h,B(484));m.iV=Ck(h,B(485));m.eg=Ov(m);K3(m,j,l,k,LY(g,B(486)),LY(g,B(487)));b=Bch.f_;g=B(488);$p=9;case 9:ANk(b,g);if(I()){break _;}b=Bch.f_;c=100;$p=10;case 10:ALQ(b,c);if(I()){break _;}try
{d=Long_fromInt(1000);$p=11;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iO();c=0;while(c<GV(i)){b:{try{b=CS(i,c);o=Fg(b,B(404));p=TA(a,m,o);if(p!==null){Ux(p,b);De(m,p);}else Cm(Dr(),B0(E(E(E(Cd(),B(489)),o),B(490))));break b;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){q=$$je;}else{throw $$e;}}Cm(Dr(),B(491));DA(q);}c=c+1|0;}r=Ee(f,B(492));s=0;while(s<GV(r)){c:{try{b=CS(r,s);t=DK(b,B(405));u=Fg(b,B(404));v=BW(u,B(493))?AFE():!BW(u,B(494))?null:ACc();if(v===null)Cm(Dr(),
B0(E(E(E(Cd(),B(495)),u),B(490))));else{w=t%1024|0;x=(t>>10)%1024|0;c=(t>>20)%1024|0;f=v;f.td(b);KV(m,w,x,c,f);}break c;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){y=$$je;}else{throw $$e;}}Cm(Dr(),B(496));DA(y);}s=s+1|0;}return m;case 11:a:{try{AJf(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iO();}c=0;while(c<GV(i)){d:{try{b=CS(i,c);o=Fg(b,B(404));p=TA(a,m,o);if(p!==null){Ux(p,b);De(m,p);}else Cm(Dr(),B0(E(E(E(Cd(),B(489)),o),B(490))));break d;}
catch($$e){$$je=Bh($$e);if($$je instanceof Cq){q=$$je;}else{throw $$e;}}Cm(Dr(),B(491));DA(q);}c=c+1|0;}r=Ee(f,B(492));s=0;while(s<GV(r)){e:{try{b=CS(r,s);t=DK(b,B(405));u=Fg(b,B(404));v=BW(u,B(493))?AFE():!BW(u,B(494))?null:ACc();if(v===null)Cm(Dr(),B0(E(E(E(Cd(),B(495)),u),B(490))));else{w=t%1024|0;x=(t>>10)%1024|0;c=(t>>20)%1024|0;f=v;f.td(b);KV(m,w,x,c,f);}break e;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){y=$$je;}else{throw $$e;}}Cm(Dr(),B(496));DA(y);}s=s+1|0;}return m;default:F2();}}Dh().s(a,b,c,
d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function TA(a,b,c){a:{if(BW(c,B(497))){c=A8f(b);break a;}if(BW(c,B(498))){c=AXw(b);break a;}if(BW(c,B(499))){c=A4U(b);break a;}if(BW(c,B(500))){c=AXs(b);break a;}if(BW(c,B(501))){c=ASl(b);break a;}if(BW(c,B(502))){c=AYi(b);break a;}if(BW(c,B(503))){c=new PT;Iz(c,b);c.hz=B(504);c.lR=0.5;c.tX=50;c.b0=c.b0*10|0;c.dP=c.dP*6.0;DD(c,c.dL*6.0,c.gB*6.0);break a;}if(!BW(c,B(505))){if(!BW(c,B(506))){c=null;break a;}c=AUb(b);break a;}c=new Go;GR(c,b);c.iZ=0;c.lG=5;c.rp=Cc()*3.141592653589793*2.0;}return c;}
function ANL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=Bch.i;c=DH();E1(c,B(477),b.hp);E1(c,B(478),b.hJ);E1(c,B(479),b.hD);DW(c,B(480),b.dG<<24>>24);CH(c,B(481),b.kE<<16>>16);CH(c,B(482),b.eD<<16>>16);CH(c,B(483),b.fE<<16>>16);L();DW(c,B(507),Bcp.b<<24>>24);DW(c,B(484),b.jq<<24>>24);CH(c,B(485),b.iV<<16>>16);d
=DH();CH(d,B(469),b.o<<16>>16);CH(d,B(470),b.t<<16>>16);CH(d,B(471),b.bu<<16>>16);We(d,B(486),b.ca);We(d,B(487),b.gW);e=Gv();EQ(e,Vj(b.g5<<16>>16));EQ(e,Vj(b.gZ<<16>>16));EQ(e,Vj(b.hx<<16>>16));Ff(d,B(473),e);f=DH();HM(f,B(474),b.pc);HM(f,B(475),b.oB);ANp(f,B(476),b.qH);g=Gv();h=Hq(b.dl.fj);while(JO(h)){i=Il(h);j=DH();AK9(i,j);if(!ABU(j))EQ(g,j);}k=Gv();l=WJ(b.mb).gz();while(l.jt()){m=l.ho().fA;n=DH();E1(n,B(405),m);Co(b.mb,C0(m)).vA(n);EQ(k,n);}o=DH();o.e2=B(508);Ka(o,B(465),f);Ka(o,B(466),d);Ka(o,B(467),c);Ff(o,
B(468),g);Ff(o,B(492),k);Lf(o,B(401),Bch.a.f);Lf(o,B(402),Bch.a.j);Lf(o,B(403),Bch.a.g);AOa(Bch.a,o);A_E=o;b=new F_;c=new TP;c.H5=a;Tg(b,c);$p=1;case 1:ANS(b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function PI(){}
function Yi(){C.call(this);}
function AEL(a){var b,c,d;Bf();A_V.requestPointerLock();b=CF();if(YX())clearTimeout(YX());O7(0);if(Long_lt(Long_sub(b,Xr()),Long_fromInt(3000))){c=new T5;c.Jb=a;d=3000-Long_sub(b,Xr()).lo|0;O7(setTimeout(Cs(c,"onTimer"),d));}}
function AXD(a){AEL(a);}
function OL(){var a=this;C.call(a);a.lv=0.0;a.lE=0.0;a.v1=0;}
function AJb(){var a=this;C.call(a);a.iE=null;a.ob=0;a.sJ=null;}
function AOW(a,b,c){var d=new AJb();AQ0(d,a,b,c);return d;}
function AQ0(a,b,c,d){a.ob=K(c,d);a.iE=H(C9,a.ob);a.sJ=b;}
function A7j(a){return a.ob;}
function IW(a,b){return a.iE.data[b];}
function AC8(a,b,c){var d,e;if(a.iE.data[b]===null)return null;if(a.iE.data[b].s<=c){d=a.iE.data[b];a.iE.data[b]=null;a.sJ.rm();return d;}e=FC(a.iE.data[b],c);if(!a.iE.data[b].s)a.iE.data[b]=null;a.sJ.rm();return e;}
function AY8(a,b,c){a.iE.data[b]=c;a.sJ.rm();}
function AWc(a){return 64;}
function Vt(){C.call(this);this.nG=null;}
function AQ4(){var a=new Vt();AIj(a);return a;}
function AIj(a){a.nG=H(C9,1);}
function A6J(a,b){return a.nG.data[b];}
function A3I(a,b,c){var d;if(a.nG.data[b]===null)return null;d=a.nG.data[b];a.nG.data[b]=null;return d;}
function So(a,b,c){a.nG.data[b]=c;}
function AW8(a){return 64;}
function IV(){var a=this;C.call(a);a.la=0;a.j2=0;a.ke=0;a.fF=null;a.qx=null;}
function En(a,b,c,d,e){var f=new IV();XX(f,a,b,c,d,e);return f;}
function XX(a,b,c,d,e,f){a.qx=b;a.fF=c;a.la=d;a.j2=e;a.ke=f;}
function ND(a,b,c){var d,e;d=(a.qx.bq-a.qx.e9|0)/2|0;e=(a.qx.bM-a.qx.fi|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.j2-1|0)&&d<((a.j2+16|0)+1|0)&&c>=(a.ke-1|0)&&c<((a.ke+16|0)+1|0)?1:0;}
function A1U(a){return;}
function AZN(a,b){return 1;}
function KJ(a,b){a.fF.jH(a.la,b);}
function A2s(a){return (-1);}
function AHu(){IV.call(this);this.tR=null;}
function AP7(a,b,c,d,e,f){var g=new AHu();AQu(g,a,b,c,d,e,f);return g;}
function AQu(a,b,c,d,e,f,g){XX(a,b,d,0,f,g);a.tR=c;}
function A5x(a,b){return 0;}
function A4A(a){var b;b=0;while(b<a.tR.ob){if(IW(a.tR,b)!==null)AC8(a.tR,b,1);b=b+1|0;}}
function Wu(){IV.call(this);this.xj=0;}
function AQR(a,b){return !(BZ(b) instanceof Gn)?0:BZ(b).Ab!=a.xj?0:1;}
function AYt(a){return 15+(a.xj<<4)|0;}
function Mz(){M9.call(this);}
function ABb(a){var b,c,d,e,f;if(PP(a)){b=new EO;Z(b);J(b);}a:{c=BT(a);if(a.L>0){d=a.L;e=0;while(true){if(e>=c)break a;f=d+1|0;OT(a,e,Yt(a,d));e=e+1|0;d=f;}}}a.L=c;a.ce=a.ie;a.iB=(-1);return a;}
function PP(a){return a.zB;}
function ADr(){var a=this;Mz.call(a);a.zB=0;a.y9=0;a.mG=null;}
function AV1(a,b,c,d,e,f){var g=new ADr();AYW(g,a,b,c,d,e,f);return g;}
function AYW(a,b,c,d,e,f,g){LR(a,c);a.L=e;a.ce=f;a.y9=b;a.zB=g;a.mG=d;}
function Yt(a,b){return a.mG.data[b+a.y9|0];}
function OT(a,b,c){a.mG.data[b+a.y9|0]=c;}
function AVp(a){return 1;}
function ASs(a){return a.mG;}
function AYr(a){return a.zB;}
function M2(){var a=this;C.call(a);a.IO=null;a.u0=null;a.BU=0.0;a.C6=0.0;a.vT=null;a.vd=null;a.lK=0;}
function SQ(a,b){var c;if(b!==null){a.vT=b;return a;}c=new BB;Bb(c,B(509));J(c);}
function AYv(a,b){return;}
function UW(a,b){var c;if(b!==null){a.vd=b;return a;}c=new BB;Bb(c,B(509));J(c);}
function A3c(a,b){return;}
function N6(a,b,c,d){var e,f,g,h,$$je;a:{if(a.lK!=3){if(d)break a;if(a.lK!=2)break a;}b=new DF;Z(b);J(b);}a.lK=!d?1:2;while(true){try{e=ABn(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof BU){f=$$je;J(A1w(f));}else{throw $$e;}}if(Hz(e)){if(!d)return e;g=BT(b);if(g<=0)return e;e=FD(g);}else if(G9(e))break;h=!NC(e)?a.vT:a.vd;b:{if(h!==Bba){if(h===Bgm)break b;else return e;}if(BT(c)<a.u0.data.length)return Bgq;Xc(c,a.u0);}Dz(b,b.L+MC(e)|0);}return e;}
function AJo(a,b){var c,d;if(!BT(b))return ADZ(0);AAC(a);c=ADZ(BT(b)*a.BU|0);while(true){d=N6(a,b,c,0);if(d===Bgr)break;if(d===Bgq){c=QG(a,c);continue;}if(!JI(d))continue;KZ(d);}b=N6(a,b,c,1);if(JI(b))KZ(b);while(true){b=Qc(a,c);if(Hz(b))break;if(!G9(b))continue;c=QG(a,c);}Ec(c);return c;}
function QG(a,b){var c,d;c=b.b5;d=MA(LV(c,c.data.length*2|0));Dz(d,b.L);return d;}
function Qc(a,b){var c;if(a.lK!=2&&a.lK!=4){b=new DF;Z(b);J(b);}c=Bgr;if(c===Bgr)a.lK=3;return c;}
function A4f(a,b){return Bgr;}
function AAC(a){a.lK=0;return a;}
function AVy(a){return;}
function Pw(){var a=this;C.call(a);a.nV=0;a.qX=0;}
var Bgr=null;var Bgq=null;function ABA(a,b){var c=new Pw();AI4(c,a,b);return c;}
function AI4(a,b,c){a.nV=b;a.qX=c;}
function Hz(a){return a.nV?0:1;}
function G9(a){return a.nV!=1?0:1;}
function JI(a){return !R2(a)&&!NC(a)?0:1;}
function R2(a){return a.nV!=2?0:1;}
function NC(a){return a.nV!=3?0:1;}
function MC(a){var b;if(JI(a))return a.qX;b=new Hs;Z(b);J(b);}
function FD(b){return ABA(2,b);}
function KZ(a){var b,c;switch(a.nV){case 0:b=new RO;Z(b);J(b);case 1:b=new UX;Z(b);J(b);case 2:b=new T9;c=a.qX;Z(b);b.CQ=c;J(b);case 3:b=new RK;c=a.qX;Z(b);b.FJ=c;J(b);default:}}
function AJr(){Bgr=ABA(0,0);Bgq=ABA(1,0);}
function AEY(){var a=this;C.call(a);a.lz=null;a.ks=0;a.iq=0;a.zf=0;}
function APK(a){var b=new AEY();AUi(b,a);return b;}
function AUi(a,b){a.lz=H(C,b);a.ks=b;a.iq=0;a.zf=0;}
function SL(a,b){var c,d;c=a.iq;while(true){a.iq=a.iq+1|0;if(a.iq>=a.ks)a.iq=0;if(a.iq==c){c=a.ks;a.ks=a.ks+(a.ks/2|0)|0;d=a.lz;a.lz=H(C,a.ks);CT(d,0,a.lz,0,c);return SL(a,b);}if(a.lz.data[a.iq]!==null)continue;else break;}a.lz.data[a.iq]=b;a.zf=a.zf+1|0;return a.iq;}
function ADO(a,b){if(b<a.ks&&b>=0)return a.lz.data[b];return null;}
function MG(){}
function IA(){C.call(this);}
function YN(){}
function Pn(){}
function Tr(){}
function M_(){}
function Ye(){var a=this;IA.call(a);a.fu=0.0;a.fw=0.0;a.fv=0.0;}
function O5(a,b,c,d){a.fu=b;a.fw=c;a.fv=d;}
function YP(){}
function Tq(){}
function Id(){var a=this;IA.call(a);a.hB=0.0;a.hA=0.0;a.hC=0.0;a.p9=0.0;}
function AZV(){var a=new Id();A5D(a);return a;}
function A5D(a){return;}
function YI(a,b){a.hB=b.hB;a.hA=b.hA;a.hC=b.hC;a.p9=b.p9;return a;}
function ARk(a){return a.hB;}
function AXQ(a){return a.hA;}
function A24(a){return a.hC;}
function A49(a){return a.p9;}
function XG(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(B5(a)!==B5(b))return 0;c=b;if(a.hB===c.hB&&a.hA===c.hA&&a.hC===c.hC&&a.p9===c.p9)return 1;return 0;}
function Yh(){var a=this;C.call(a);a.fR=null;a.wH=null;}
function AHJ(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(H6()===null)Bap=A_T.createElement("canvas");if(H6().width<a.fR.width){b=H6();c=a.fR.width;b.width=c;}if(H6().height<a.fR.height){b=H6();c=a.fR.height;b.height=c;}if(Ln()===null)Baq=H6().getContext("2d");b=Ln();d=a.fR.width;e=a.fR.height;b.clearRect(0.0,0.0,d,e);b=Ln();c=a.fR;d=a.fR.width;e=a.fR.height;b.drawImage(c,0.0,0.0,d,e);b=Ln();d=a.fR.width;e=a.fR.height;c=b.getImageData(0.0,0.0,d,e);f=c.data;g=K(c.width,c.height);RG($rt_str(a.fR.src));if(f.byteLength<(g
*4|0)){CY(a.wH,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;k=i.length;while(j<k){l=j*4|0;i[j]=f[l]<<16|f[l+1|0]<<8|f[l+2|0]|f[l+3|0]<<24;j=j+1|0;}m=Xn(h);b=a.wH;f=new Qx;g=c.width;l=c.height;k=m.ie;j=K(g,l);if(k!=j){b=new BB;Bb(b,B(510));J(b);}f.ut=g;f.Ar=l;f.DD=1;f.vY=j;if(!f.DD){g=0;while(g<f.vY){ZB(m,g,KM(m,g)|(-16777216));g=g+1|0;}Vg(m);}f.uZ=m;CY(b,f);}
function A2W(a,b){AHJ(a,b);}
function Yg(){var a=this;C.call(a);a.DK=null;a.CB=null;}
function ACo(a,b){RG($rt_str(a.DK.src));CY(a.CB,null);}
function A6b(a,b){ACo(a,b);}
function Ro(){var a=this;C.call(a);a.g0=null;a.rL=null;a.d8=null;a.fe=0;}
function Lq(){BU.call(this);}
function XU(){C.call(this);this.BK=null;}
function Zw(){var a=this;C.call(a);a.Cz=null;a.u_=0;}
function WS(){var a=this;C.call(a);a.FF=null;a.Hx=0;a.Hu=0;a.IV=0;a.Ji=0;}
function AH$(){C.call(this);}
function KY(b){return b.length?0:1;}
function AL2(b){return b.shift();}
function U6(){C.call(this);this.Ek=null;}
function ANI(a){var b,c,d;b=a.Ek;if(!IL(b)&&b.ct.d8===null){c=b.ct;if(c.g0!==null&&!KY(c.g0)){b=c.g0;d=AL2(b);if(b===null)c.g0=null;Sa(d);}}}
function JC(){Oe.call(this);}
function Bgs(a,b,c){var d=new JC();WA(d,a,b,c);return d;}
function WA(a,b,c,d){LR(a,b);a.L=c;a.ce=d;}
function UC(a){var b,c;if(a.L<a.ce){b=a.L;a.L=b+1|0;return a.zx(b);}c=new Gg;Z(c);J(c);}
function O4(a,b){var c,d;if(a.lJ()){c=new EO;Z(c);J(c);}if(a.L<a.ce){d=a.L;a.L=d+1|0;a.vv(d,b);return a;}c=new GW;Z(c);J(c);}
function KM(a,b){var c,d;if(b>=0&&b<a.ce)return Yr(a,b);c=new BD;d=new R;T(d);Bb(c,S(E(Bd(E(Bd(E(d,B(296)),b),B(250)),a.ce),B(34))));J(c);}
function ZB(a,b,c){var d,e;if(a.lJ()){d=new EO;Z(d);J(d);}if(b>=0&&b<a.ce){XR(a,b,c);return a;}e=new BD;d=new R;T(d);Bb(e,S(E(Bd(E(Bd(E(d,B(296)),b),B(250)),a.ce),B(34))));J(e);}
function AUc(a){return a.lJ();}
function Xi(){var a=this;JC.call(a);a.CM=0;a.yG=0;a.xh=null;}
function Yr(a,b){return a.xh.data[b+a.yG|0];}
function XR(a,b,c){a.xh.data[b+a.yG|0]=c;}
function AO3(a){return a.CM;}
function Td(){var a=this;C.call(a);a.AF=null;a.AG=null;a.AD=0;a.AE=null;}
function Sa(a){var b,c,d,e;b=a.AF;c=a.AG;d=a.AD;e=a.AE;FV(b);c.ct.d8=b;b=c.ct;b.fe=b.fe+d|0;CY(e,null);}
function X5(){C.call(this);this.jw=null;}
function Sp(){var a=this;C.call(a);a.jb=null;a.x7=0;}
function V2(){C.call(this);this.lW=null;}
function PJ(){Fx.call(this);}
var Bgt=0.0;var Bgu=null;function AE8(){Bgt=NaN;Bgu=D($rt_floatcls());}
function Op(){Fx.call(this);}
var Bgv=0.0;var Bgw=null;function AIU(){Bgv=NaN;Bgw=D($rt_doublecls());}
function AEF(){var a=this;C.call(a);a.cz=0;a.na=null;a.gk=null;a.bP=0;a.c9=0;a.eC=0;a.pC=null;a.dN=null;a.qF=null;a.mT=null;a.mj=null;a.sW=null;a.kj=null;a.cL=null;a.cY=null;a.iz=null;a.yk=0;a.qI=0;}
function AS7(a){var b=new AEF();AWO(b,a);return b;}
function AWO(a,b){a.cz=0;a.na=BV();a.mT=BV();a.mj=BV();a.sW=BV();a.kj=BV();a.cL=OI(a);a.iz=null;a.yk=0;a.gk=b;a.bP=b.o;a.c9=b.t;a.eC=b.bu;a.cY=$rt_createByteArray(b.ca.data.length/8|0);a.pC=b.ca;a.dN=b.gW;a.qF=b.ko;}
function OI(a){return a.kj.q<=0?$rt_createIntArray(32768):Ej(a.kj,a.kj.q-1|0);}
function X8(a,b,c,d,e){M(a.sW,On(a,b,c,0,d,e,1));}
function AA2(a,b){if(b>15)b=15;if(b<0)b=0;a.qI=b-a.gk.eg|0;if(a.qI){a.yk=a.gk.eg;a.gk.eg=b;while(a.iz!==null){VN(a,64);}a.iz=On(a,0,0,0,a.gk.o,a.gk.bu,a.gk.t);}}
function VN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.iz.m_;d=a.iz.qm;e=a.iz.su;f=a.iz.tu;g=d-1|0;while(true){if(c>=d){h=0;while(h<a.bP){i=0;while(i<a.c9){j=a.mj;k=new Tl;d=h+32|0;l=a.eC;g=i+32|0;ANG(k,a,h,0,i,d,l,g);M(j,k);M(a.mT,On(a,h,0,i,d,a.eC,g));i=g;}h=h+32|0;}b=0;while(b<a.gk.di.q){AKT(Be(a.gk.di,b));b=b+1|0;}a.iz=null;return;}h=b+(-1)|0;if(b<=0&&c!=g)break;m=e;while(m<f){i=a.qF.data[c+K(m,a.bP)|0]-1|0;while(i>0){L();if(Bd3.data[a.pC.data[K(K(i,a.c9)+m|0,a.bP)+c|0]]>=100)break;i=i+(-1)|0;}b=i+1|0;while
(b<a.eC){l=K(K(b,a.c9)+m|0,a.bP)+c|0;L();if(!Bd6.data[a.pC.data[l]]){n=a.dN.data[l]&15;if(n<=a.yk){if(a.qI<0&&n>0){o=a.dN.data;o[l]=(o[l]-1|0)<<24>>24;}else if(a.qI>0&&n<15){o=a.dN.data;o[l]=(o[l]+1|0)<<24>>24;}}}b=b+1|0;}m=m+1|0;}c=c+1|0;b=h;}a.iz.m_=c;}
function NW(a,b,c,d,e,f,g){M(a.mj,On(a,b,c,d,e,f,g));}
function Ug(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;while(c<f){h=d;while(h<g){i=b;while(i<e){j=(i+K(c,a.bP)|0)+K(K(h,a.bP),a.eC)|0;k=a.cY.data;l=j>>3;m=k[l];n=1<<(j&7);if(!(m&n)){a.cY.data[l]=(a.cY.data[l]|n)<<24>>24;k=a.cL.data;m=a.cz;a.cz=m+1|0;k[m]=j;if(!(a.cY.data[l]&n))Cm(Dr(),B(511));if(a.cz>(a.cL.data.length-32|0)){k=a.cL.data;j=a.cz-1|0;a.cz=j;l=k[j];a.cL.data[a.cL.data.length-1|0]=a.cz;M(a.na,a.cL);a.cL=OI(a);a.cz=1;a.cL.data[0]=l;}}i=i+1|0;}h=h+1|0;}c=c+1|0;}}
function AD8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;if(CE(a.kj)>0)Ej(a.kj,CE(a.kj)-1|0);b=5;while(CE(a.mT)>0){c=b+(-1)|0;if(b<=0)break;d=Ej(a.mT,0);e=0;while(e<CE(a.gk.di)){AHA(Be(a.gk.di,e),d.m_,d.sv,d.su,d.qm,d.tt,d.tu);e=e+1|0;}b=c;}a:{if(a.iz!==null)VN(a,8);else{f=0;while(true){if(f>=16)break a;if(CE(a.mj)>0){g=Ej(a.mj,0);Ug(a,g.m_,g.sv,g.su,g.qm,g.tt,g.tu);}b:{if(CE(a.sW)>0){g=Ej(a.sW,0);h=g.tt;i=g.qm;j=g.sv;k=g.m_;b=k+i|0;l=j+h|0;while(true){if(k>=b)break b;m=j;while(m<l){n=a.qF.data[k
+K(m,a.bP)|0];o=a.eC-1|0;while(o>0){L();if(Bd3.data[a.pC.data[K(K(o,a.c9)+m|0,a.bP)+k|0]])break;o=o+(-1)|0;}a.qF.data[k+K(m,a.bP)|0]=o+1|0;p=Bw(n,o);if(p){q=p>=0?o:n;if(p>0)o=n;Ug(a,k,q,m,k+1|0,o,m+1|0);}m=m+1|0;}k=k+1|0;}}}p=a.gk.eg;j=(-999);i=(-999);h=(-999);r=(-999);m=(-999);s=(-999);t=1024;q=0;while(true){k=t+(-1)|0;if(t<=0)break;if(a.cz<=0&&CE(a.na)<=0)break;q=q+1|0;if(!a.cz){if(a.cL!==null){u=a.cL;M(a.kj,u);}a.cL=Ej(a.na,CE(a.na)-1|0);a.cz=a.cL.data[a.cL.data.length-1|0];}if(a.cz<=(a.cL.data.length-32
|0)){u=a.cL.data;b=a.cz-1|0;a.cz=b;n=u[b];o=n%a.bP|0;v=(n/a.bP|0)%a.eC|0;w=((n/a.bP|0)/a.eC|0)%a.c9|0;u=a.cY.data;l=n>>3;u[l]=(a.cY.data[l]^1<<(n&7))<<24>>24;l=v<a.qF.data[o+K(w,a.bP)|0]?0:p;x=a.pC.data[K(K(v,a.c9)+w|0,a.bP)+o|0];L();y=Bd3.data[x];if(y>100)l=0;else if(l<15){if(!y)y=1;if(o>0){z=(a.dN.data[K(K(v,a.c9)+w|0,a.bP)+(o-1|0)|0]&15)-y|0;if(z<=l)z=l;}else z=l;if(o>=(a.bP-1|0))ba=z;else{ba=(a.dN.data[(K(K(v,a.c9)+w|0,a.bP)+o|0)+1|0]&15)-y|0;if(ba<=z)ba=z;}if(v<=0)z=ba;else{z=(a.dN.data[K(K(v-1|0,a.c9)
+w|0,a.bP)+o|0]&15)-y|0;if(z<=ba)z=ba;}if(v>=(a.eC-1|0))ba=z;else{ba=(a.dN.data[K(K(v+1|0,a.c9)+w|0,a.bP)+o|0]&15)-y|0;if(ba<=z)ba=z;}if(w<=0)z=ba;else{z=(a.dN.data[K(K(v,a.c9)+(w-1|0)|0,a.bP)+o|0]&15)-y|0;if(z<=ba)z=ba;}if(w>=(a.c9-1|0))l=z;else{l=(a.dN.data[K((K(v,a.c9)+w|0)+1|0,a.bP)+o|0]&15)-y|0;if(l<=z)l=z;}}if(l<Bd6.data[x])l=Bd6.data[x];if((a.dN.data[K(K(v,a.c9)+w|0,a.bP)+o|0]&15)!=l){a.dN.data[K(K(v,a.c9)+w|0,a.bP)+o|0]=((a.dN.data[K(K(v,a.c9)+w|0,a.bP)+o|0]&240)+l|0)<<24>>24;if(o>0){u=a.dN.data;b=K(K(v,
a.c9)+w|0,a.bP);x=o-1|0;if((u[b+x|0]&15)!=(l-1|0)){b=(x+K(v,a.bP)|0)+K(K(w,a.bP),a.eC)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cL.data;x=a.cz;a.cz=x+1|0;u[x]=b;}}}if(o<(a.bP-1|0)&&(a.dN.data[(K(K(v,a.c9)+w|0,a.bP)+o|0)+1|0]&15)!=(l-1|0)){b=((o+1|0)+K(v,a.bP)|0)+K(K(w,a.bP),a.eC)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cL.data;x=a.cz;a.cz=x+1|0;u[x]=b;}}if(v>0){u=a.dN.data;b=v-1|0;if((u[K(K(b,a.c9)+w|0,a.bP)
+o|0]&15)!=(l-1|0)){b=(o+K(b,a.bP)|0)+K(K(w,a.bP),a.eC)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cL.data;x=a.cz;a.cz=x+1|0;u[x]=b;}}}if(v<(a.eC-1|0)){u=a.dN.data;b=v+1|0;if((u[K(K(b,a.c9)+w|0,a.bP)+o|0]&15)!=(l-1|0)){b=(o+K(b,a.bP)|0)+K(K(w,a.bP),a.eC)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cL.data;x=a.cz;a.cz=x+1|0;u[x]=b;}}}if(w>0){u=a.dN.data;b=K(v,a.c9);x=w-1|0;if((u[K(b+x|0,a.bP)+o|0]&15)!=(l-1|0)){b
=(o+K(v,a.bP)|0)+K(K(x,a.bP),a.eC)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cL.data;x=a.cz;a.cz=x+1|0;u[x]=b;}}}if(w<(a.c9-1|0)&&(a.dN.data[K((K(v,a.c9)+w|0)+1|0,a.bP)+o|0]&15)!=(l-1|0)){t=(o+K(v,a.bP)|0)+K(K(w+1|0,a.bP),a.eC)|0;u=a.cY.data;b=t>>3;l=u[b];x=1<<(t&7);if(!(l&x)){a.cY.data[b]=(a.cY.data[b]|x)<<24>>24;u=a.cL.data;b=a.cz;a.cz=b+1|0;u[b]=t;}}if(j==(-999)){j=o;i=o;h=v;r=v;m=w;s=w;}if(o>=j){if(o<=i)o=j;else{i=o;o=j;}}if(v<=r){if(v>=h)v=r;else{h=v;v=
r;}}if(w<m){j=o;r=v;m=w;}else if(w<=s){j=o;r=v;}else{j=o;r=v;s=w;}}t=k;continue;}u=a.cL.data;b=a.cz-1|0;a.cz=b;n=u[b];a.cL.data[a.cL.data.length-1|0]=a.cz;M(a.na,a.cL);a.cL=OI(a);a.cz=1;a.cL.data[0]=n;t=k;}if(j>(-999))M(a.mT,On(a,j,h,m,i,r,s));f=f+1|0;}}}}
function AJ9(a){var b;b=new R;T(b);return S(Bd(E(b,B(9)),a.mj.q+a.mT.q|0));}
function Y_(){var a=this;OL.call(a);a.kA=null;a.mN=null;}
function FE(a,b,c){var d;d=(-1);if(Bch.N){if(b==a.mN.wd.bt)d=0;if(b==a.mN.vK.bt)d=1;if(b==a.mN.y2.bt)d=2;if(b==a.mN.yb.bt)d=3;if(b==a.mN.ur.bt)d=4;}if(d>=0)a.kA.data[d]=c;}
function Xv(a){var b;b=0;while(b<10){a.kA.data[b]=0;b=b+1|0;}}
function AOc(a){a.lv=0.0;a.lE=0.0;if(a.kA.data[0])a.lE=a.lE+1.0;if(a.kA.data[1])a.lE=a.lE-1.0;if(a.kA.data[2])a.lv=a.lv+1.0;if(a.kA.data[3])a.lv=a.lv-1.0;a.v1=a.kA.data[4];}
function Uw(){CV.call(this);}
function Tz(){CV.call(this);}
function AV6(a){ES(a.ba);M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(384)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+96|0,B(385)));Be(a.ba,1).fc=0;}
function AHQ(a,b,c){return;}
function AMf(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.bC){c=a.x;d=AFQ(a,a.x.d);$p=1;continue _;}if(b.bC==1){c=a.x;d=LQ(a);$p=2;continue _;}if(a.x.gb!==null&&b.bC==2){b=a.x;c=Jj(a);$p=3;continue _;}return;case 1:AOR(c,d);if(I()){break _;}if(b.bC==1){c=a.x;d=LQ(a);$p=2;continue _;}if(a.x.gb!==null&&b.bC==2){b=a.x;c=Jj(a);$p=3;continue _;}return;case 2:AOR(c,d);if(I()){break _;}if(a.x.gb!==null&&b.bC==2){b=a.x;c=Jj(a);$p=3;continue _;}return;case 3:AOR(b,
c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AI6(a,b,c,d){var e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Px(0,0,a.bq,a.bM,1615855616,(-1602211792));Ca();C7(2.0,2.0,2.0);Eh(a.cK,B(512),(a.bq/2|0)/2|0,30,16777215);BS();e=a.cK;f=new R;T(f);Eh(e,S(Bd(E(f,B(513)),a.x.a.rS)),a.bq/2|0,100,16777215);$p=1;case 1:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function AS2(a){return 0;}
function No(){var a=this;C.call(a);a.c5=0;a.gK=null;a.bE=0;a.lU=0;a.ls=0;a.ll=0;a.gH=0;}
function Rs(){FB.call(this);this.CW=null;}
function W3(a){var b;b=new Xy;OV(b,a.CW);return b;}
function ACb(){C.call(this);}
function A6H(){return {};}
function LE(){var a=this;C.call(a);a.dC=0;a.p8=0;a.qs=0;a.f1=0;a.fx=null;a.sR=null;a.pg=null;a.np=null;a.nn=null;a.wc=null;a.we=null;a.vC=null;a.vH=null;a.p3=null;a.tN=0;a.bU=0;a.bT=0;a.kz=null;a.cS=null;a.cM=0;a.bZ=0;a.bj=0;a.rM=0;a.xC=null;a.p=null;}
var Bgx=null;var Bgy=null;function KT(a){a.dC=0;a.bU=0;a.bT=0;a.bj=0;a.bZ=0;if(a.rM)a.p.f5.mm();}
function ABG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.p.r;d=a.p.E;e=a.bT;f=a.bU;g=a.bj;h=g>=a.bZ?a.cM-g|0:(a.bZ-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dC){case 2:break f;case 9:a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}b=0;d=d+(-1)|0;j=a.p.cn.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.qs=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fx!==null&&a.fx.data.length>=k))a.fx=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fx.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f1=0;a.dC=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,(-2));}while(f<32){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,
Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}b=0;d=d+(-1)|0;j=a.p.cn.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dC=9;a.p.cb=B(514);a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,(-3));}a.p8=l;f=0;a.dC=a.p8?2:!a.tN?0:7;e=f;continue e;}while(f<3){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}b=0;d=d+(-1)|0;j=a.p.cn.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tN=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dC=1;break l;case 1:AE6(a.np,a.nn,a.wc,a.we,a.p);ZT(a.p3,a.np.data[0],a.nn.data[0],a.wc.data[0],0,a.we.data[0],0);e=e>>>3;f=f+(-3)|0;a.dC=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dC=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dC=9;a.p.cb=B(515);a.bT=b;a.bU=k;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,(-3));default:}}continue e;}while(a.f1<(4+(a.qs>>>10)|0)){while(f<3){if(!d){a.bT=e;a.bU
=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}b=0;d=d+(-1)|0;j=a.p.cn.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fx.data;j=Bgy.data;k=a.f1;a.f1=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f1<19){o=a.fx.data;j=Bgy.data;k=a.f1;a.f1=k+1|0;o[j[k]]=0;}a.sR.data[0]=7;k=AM0(a.xC,a.fx,a.sR,a.pg,a.kz,a.p);if(k){if(k==(-3)){a.fx=null;a.dC=9;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,k);}a.f1=0;a.dC=5;}while(true)
{k=a.qs;if(a.f1>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.sR.data[0];while(f<k){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}b=0;d=d+(-1)|0;j=a.p.cn.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.kz.data[((a.pg.data[0]+(e&Bgx.data[k])|0)*3|0)+1|0];n=a.kz.data[((a.pg.data[0]+(e&Bgx.data[k])|0)*3|0)+2|0];l=Bw(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fx.data;k=a.f1;a.f1=k+1|0;j[k]=n;}else{p=Bw(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bT=e;a.bU
=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}b=0;d=d+(-1)|0;j=a.p.cn.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bgx.data[q])|0;e=n>>>q;f=k-q|0;h=a.f1;q=a.qs;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fx.data[h-1|0];while(true){j=a.fx.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f1=l;}}a.pg.data[0]=(-1);a.np.data[0]=9;a.nn.data[0]=6;k=a.qs;k=AA8(a.xC,257+(k&31)|0,1+(k>>5&31)|0,a.fx,a.np,a.nn,a.vC,a.vH,a.kz,
a.p);if(k){if(k==(-3)){a.fx=null;a.dC=9;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,k);}ZT(a.p3,a.np.data[0],a.nn.data[0],a.kz,a.vC.data[0],a.kz,a.vH.data[0]);a.dC=6;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;b=ADe(a.p3,b);if(b!=1)break e;b=0;ACP(a.p3,a.p);c=a.p.r;d=a.p.E;e=a.bT;f=a.bU;g=a.bj;h=g>=a.bZ?a.cM-g|0:(a.bZ-g|0)-1|0;if(a.tN){a.dC=7;break b;}a.dC=0;continue e;}if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,
Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}if(!h){if(g==a.cM&&a.bZ){g=0;h=g>=a.bZ?a.cM-g|0:(a.bZ-g|0)-1|0;}if(!h){a.bj=g;b=B2(a,b);g=a.bj;h=g>=a.bZ?a.cM-g|0:(a.bZ-g|0)-1|0;if(g==a.cM&&a.bZ){g=0;h=g>=a.bZ?a.cM-g|0:(a.bZ-g|0)-1|0;}if(!h){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}}}b=0;k=a.p8;if(k>d)k=d;if(k>h)k=h;CT(a.p.cn,c,a.cS,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.p8-k|0;a.p8=k;if(k)continue;a.dC=!a.tN?0:7;}return B2(a,b);}a.dC=9;a.p.cb
=B(516);a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,(-3));}a.fx=null;a.dC=9;a.p.cb=B(517);a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,(-3));}a.bj=g;b=B2(a,b);g=a.bj;if(a.bZ!=a.bj){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,b);}a.dC=8;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B2(a,1);}
function U8(a){KT(a);a.cS=null;a.kz=null;}
function B2(a,b){var c,d,e,f,g;c=a.p.qb;d=a.bZ;e=(d>a.bj?a.cM:a.bj)-d|0;if(e>a.p.ic)e=a.p.ic;if(e&&b==(-5))b=0;f=a.p;f.ic=f.ic-e|0;f=a.p;f.nQ=Long_add(f.nQ,Long_fromInt(e));if(a.rM&&e>0)a.p.f5.k6(a.cS,d,e);CT(a.cS,d,a.p.vm,c,e);c=c+e|0;g=d+e|0;if(g==a.cM){if(a.bj==a.cM)a.bj=0;d=a.bj-0|0;if(d>a.p.ic)d=a.p.ic;if(d&&b==(-5))b=0;f=a.p;f.ic=f.ic-d|0;f=a.p;f.nQ=Long_add(f.nQ,Long_fromInt(d));if(a.rM&&d>0)a.p.f5.k6(a.cS,0,d);CT(a.cS,0,a.p.vm,c,d);c=c+d|0;g=0+d|0;}a.p.qb=c;a.bZ=g;return b;}
function AHG(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bgx=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bgy=b;}
function AA0(){C.call(this);this.rC=0;}
function Do(){var a=this;DE.call(a);a.by=0.0;a.bD=0.0;a.bz=0.0;a.fU=0;a.D6=0.0;a.D7=0.0;a.dK=0;a.cU=0;a.dq=0.0;a.pb=0.0;a.hT=0.0;a.iK=0.0;a.iN=0.0;}
function Bgz(a,b,c,d,e,f,g){var h=new Do();Ga(h,a,b,c,d,e,f,g);return h;}
function Ga(a,b,c,d,e,f,g,h){var i;GR(a,b);a.dK=0;a.cU=0;DD(a,0.20000000298023224,0.20000000298023224);a.dP=a.gB/2.0;D0(a,c,d,e);a.iN=1.0;a.iK=1.0;a.hT=1.0;a.by=f+(Cc()*2.0-1.0)*0.4000000059604645;a.bD=g+(Cc()*2.0-1.0)*0.4000000059604645;a.bz=h+(Cc()*2.0-1.0)*0.4000000059604645;i=(Cc()+Cc()+1.0)*0.15000000596046448;c=B$(a.by*a.by+a.bD*a.bD+a.bz*a.bz);a.by=a.by/c*i*0.4000000059604645;a.bD=a.bD/c*i*0.4000000059604645+0.10000000149011612;a.bz=a.bz/c*i*0.4000000059604645;a.D6=N(a.O)*3.0;a.D7=N(a.O)*3.0;a.dq=(N(a.O)
*0.5+0.5)*2.0;a.cU=4.0/(N(a.O)*0.8999999761581421+0.10000000149011612)|0;a.dK=0;a.pl=0;}
function ACK(a,b){a.by=a.by*0.20000000298023224;a.bD=(a.bD-0.10000000149011612)*0.20000000298023224+0.10000000149011612;a.bz=a.bz*0.20000000298023224;return a;}
function ANl(a,b){DD(a,0.12000000476837158,0.12000000476837158);a.dq=a.dq*0.6000000238418579;return a;}
function A6M(a){var b;a.cu=a.f;a.cy=a.j;a.cv=a.g;b=a.dK;a.dK=b+1|0;if(b>=a.cU)CN(a);a.bD=a.bD-0.04*a.pb;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9800000190734863;a.bD=a.bD*0.9800000190734863;a.bz=a.bz*0.9800000190734863;if(a.dF){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function Ip(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;i=(a.fU%16|0)/16.0;j=i+0.062437500804662704;k=(a.fU/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dq;n=a.cu+(a.f-a.cu)*c;o=a.cy+(a.j-a.cy)*c;p=a.cv+(a.g-a.cv)*c;c=a.vI(c);CW(b,a.hT*c,a.iK*c,a.iN*c);c=d*m;d=n-c;g=g*m;q=d-g;e=e*m;r=o-e;f=f*m;s=p-f;h=h*m;t=s-h;u=i;v=l;G(b,q,r,t,u,v);w=d+g;x=o+e;q=s+h;t=k;G(b,w,x,q,u,t);c=n+c;q=c+g;d=p+f;u=d+h;w=j;G(b,q,x,u,w,t);G(b,c-g,r,d-h,w,v);}
function ASL(a){return 0;}
function A7o(a,b){return;}
function AQz(a){return null;}
function AOO(){Do.call(this);}
function AZg(a,b,c,d,e,f,g,h){var i=new AOO();A7K(i,a,b,c,d,e,f,g,h);return i;}
function A7K(a,b,c,d,e,f,g,h,i){Ga(a,b,c,d,e,f,g,h);a.fU=i.bk;a.pb=i.DJ;a.iN=0.6000000238418579;a.iK=0.6000000238418579;a.hT=0.6000000238418579;a.dq=a.dq/2.0;}
function AU8(a){return 1;}
function AAA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;i=((a.fU%16|0)+a.D6/4.0)/16.0;j=i+0.015609375201165676;k=((a.fU/16|0)+a.D7/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dq;n=a.cu+(a.f-a.cu)*c;o=a.cy+(a.j-a.cy)*c;p=a.cv+(a.g-a.cv)*c;c=EC(a,c);CW(b,c*a.hT,c*a.iK,c*a.iN);c=d*m;d=n-c;g=g*m;q=d-g;e=e*m;r=o-e;f=f*m;s=p-f;h=h*m;t=s-h;u=i;v=l;G(b,q,r,t,u,v);w=d+g;x=o+e;q=s+h;t=k;G(b,w,x,q,u,t);c=n+c;q=c+g;d=p+f;u=d+h;w=j;G(b,q,x,u,w,t);G(b,c-g,r,d-h,w,v);}
function YG(){CV.call(this);}
function AZB(a){ES(a.ba);M(a.ba,CL(0,(a.bq/2|0)-100|0,a.bM/4|0,B(387)));M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+24|0,B(384)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+48|0,B(518)));M(a.ba,CL(3,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(385)));M(a.ba,CL(4,(a.bq/2|0)-100|0,(a.bM/4|0)+120|0,B(519)));Be(a.ba,2).fc=0;Be(a.ba,3).fc=0;}
function ABy(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.bC){c=a.x;d=AFQ(a,a.x.d);$p=1;continue _;}if(b.bC==1){c=a.x;d=LQ(a);$p=2;continue _;}if(a.x.gb!==null){if(b.bC==2){c=a.x;d=new Lg;O9(d,a);d.pL=B(520);$p=5;continue _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}}if(b.bC!=4)return;b=a.x;c=null;$p=3;continue _;case 1:AOR(c,d);if(I()){break _;}if(b.bC==1){c=a.x;d=LQ(a);$p=2;continue _;}if(a.x.gb!==null){if(b.bC==2){c=a.x;d
=new Lg;O9(d,a);d.pL=B(520);$p=5;continue _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}}if(b.bC!=4)return;b=a.x;c=null;$p=3;continue _;case 2:AOR(c,d);if(I()){break _;}if(a.x.gb!==null){if(b.bC==2){c=a.x;d=new Lg;O9(d,a);d.pL=B(520);$p=5;continue _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}}if(b.bC!=4)return;b=a.x;c=null;$p=3;case 3:AOR(b,c);if(I()){break _;}b=a.x;$p=4;case 4:AEr(b);if(I()){break _;}RR(a.x.rr);Lu(1);return;case 5:AOR(c,d);if(I()){break _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}if(b.bC
!=4)return;b=a.x;c=null;$p=3;continue _;case 6:AOR(c,d);if(I()){break _;}if(b.bC!=4)return;b=a.x;c=null;$p=3;continue _;default:F2();}}Dh().s(a,b,c,d,$p);}
function AJs(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}Eh(a.cK,B(521),a.bq/2|0,40,16777215);$p=2;case 2:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function Gs(){var a=this;C2.call(a);a.xc=0;a.ze=0;}
function Fj(a,b){var c=new Gs();Oz(c,a,b);return c;}
function Oz(a,b,c){a.xc=b;a.ze=c;}
function AHm(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.xc==c.xc&&a.ze==c.ze?1:0;}return 0;}
function AC$(){var a=this;C2.call(a);a.xn=null;a.t9=null;a.yX=0;}
function A_b(a,b){var c=new AC$();ASI(c,a,b);return c;}
function ASI(a,b,c){a.xn=AIK(b);a.t9=AEe(b);a.yX=c;}
function A1h(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.yX==c.yX&&JU(a.xn,c.xn)&&JU(a.t9,c.t9)?1:0;}return 0;}
function Sz(){C2.call(this);this.wQ=null;}
function A1c(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return JU(a.wQ,c.wQ);}return 0;}
function I_(){var a=this;C2.call(a);a.wN=null;a.B6=null;}
function BgA(a){var b=new I_();T4(b,a);return b;}
function T4(a,b){a.wN=b;}
function A2d(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return LI(a.wN,c.wN)&&LI(a.B6,c.B6)?1:0;}return 0;}
function Sw(){I_.call(this);}
function Qg(){C2.call(this);this.wJ=null;}
function A38(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return JU(a.wJ,c.wJ);}return 0;}
function ALm(){Gs.call(this);this.yx=0;}
function A0I(a,b,c){var d=new ALm();A0G(d,a,b,c);return d;}
function A0G(a,b,c,d){Oz(a,b,c);a.yx=d;}
function A7G(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){if(!AHm(a,b))return 0;c=b;return a.yx!=c.yx?0:1;}return 0;}
function RY(){Gs.call(this);}
function R3(){I_.call(this);}
function AC9(){C2.call(this);this.vV=null;}
function AXY(a){var b=new AC9();AQ$(b,a);return b;}
function AQ$(a,b){a.vV=b;}
function A12(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return LI(a.vV,c.vV);}return 0;}
function Yd(){C2.call(this);this.vz=0;}
function AQ6(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.vz!=c.vz?0:1;}return 0;}
function TH(){C2.call(this);this.yH=0;}
function A3J(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.yH!=c.yH?0:1;}return 0;}
function ADu(){var a=this;C2.call(a);a.uW=null;a.us=null;a.v2=0;}
function A$x(a,b){var c=new ADu();AX9(c,a,b);return c;}
function AX9(a,b,c){a.uW=AEo(b);a.us=AMu(b);a.v2=c;}
function A0s(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.v2==c.v2&&JU(a.uW,c.uW)&&JU(a.us,c.us)?1:0;}return 0;}
function ABe(){Gs.call(this);}
function A$q(a){var b=new ABe();A7w(b,a);return b;}
function A7w(a,b){Oz(a,2,b);}
function OQ(){M2.call(this);}
function ABn(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(B4(BT(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(B4(BT(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&DI(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=B4(BT(b)+k|0,e.length);Me(b,d,k,g-k|0);f=0;}if(!DI(c)){l=!DI(b)&&f>=g?Bgr:Bgq;break a;}k=B4(BT(c),i.length);m=new VZ;m.zR=b;m.El=c;l=ADX(a,d,f,g,h,0,k,m);f=m.v_;if(l===null&&0==m.sf)l=Bgr;ZJ(c,h,0,m.sf);if(l!==null)break;}}Dz(b,b.L-(g-f|0)|0);return l;}
function RB(){OQ.call(this);}
function ADX(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Pu(h,2))break a;i=Bgq;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!PF(l)){if((f+3|0)>g){j=j+(-1)|0;if(Pu(h,3))break a;i=Bgq;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dw(l)){i=FD(1);break a;}if
(j>=d){if(ACx(h))break a;i=Bgr;break a;}c=j+1|0;j=k[j];if(!D1(j)){j=c+(-2)|0;i=FD(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Pu(h,4))break a;i=Bgq;break a;}k=e.data;n=E4(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.v_=j;h.sf=f;return i;}
function VR(){var a=this;C.call(a);a.ey=0;a.eL=0;a.h2=0;a.lQ=null;a.w7=null;a.lB=null;a.fj=null;a.mD=null;}
function ADF(a,b){M(a.fj,b);Ss(Gj(a.lQ,b.f,b.j,b.g),b);b.ec=b.f;b.eb=b.j;b.ea=b.g;}
function AEM(a,b){Kl(Gj(a.lQ,b.ec,b.eb,b.ea),b);Kl(Gj(a.lQ,b.f,b.j,b.g),b);GE(a.fj,b);}
function AEk(a,b,c,d,e,f,g,h){ES(a.mD);return UJ(a,b,c,d,e,f,g,h,a.mD);}
function UJ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;j=Gj(a.lQ,c,d,e);k=Gj(a.w7,f,g,h);l=j.g4-1|0;while(l<=(k.g4+1|0)){m=j.hr-1|0;while(m<=(k.hr+1|0)){n=j.gX-1|0;while(n<=(k.gX+1|0)){a:{if(l>=0&&m>=0&&n>=0&&l<a.ey&&m<a.eL&&n<a.h2){o=a.lB.data[K(K(n,a.eL)+m|0,a.ey)+l|0];p=0;while(true){if(p>=o.q)break a;q=Be(o,p);if(q!==b){r=q.Y;if(f>r.bg&&c<r.bv&&g>r.bc&&d<r.bs&&h>r.bf&&e<r.bw)M(i,q);}p=p+1|0;}}}n=n+1|0;}m=m+1|0;}l=l+1|0;}return i;}
function Ht(a,b,c){ES(a.mD);return c===null?a.mD:UJ(a,b,c.bg,c.bc,c.bf,c.bv,c.bs,c.bw,a.mD);}
function AE3(a){var b,c,d,e,f,g,h,i,j,k;b=0;while(b<a.fj.q){c=Be(a.fj,b);c.ec=c.f;c.eb=c.j;c.ea=c.g;c.eQ();if(c.hN){d=a.fj;e=b+(-1)|0;Ej(d,b);Kl(Gj(a.lQ,c.ec,c.eb,c.ea),c);}else{f=c.ec/8.0|0;g=c.eb/8.0|0;e=c.ea/8.0|0;h=c.f/8.0|0;i=c.j/8.0|0;j=c.g/8.0|0;if(f==h&&g==i&&e==j)e=b;else{d=Gj(a.lQ,c.ec,c.eb,c.ea);k=Gj(a.w7,c.f,c.j,c.g);if(S5(d,k))e=b;else{Kl(d,c);Ss(k,c);e=b;}}}b=e+1|0;}}
function TP(){C.call(this);this.H5=null;}
function AIP(a){var b,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){b=$$je;}else{throw $$e;}}DA(b);return;case 1:a:{try{AER();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){b=$$je;}else{throw $$e;}}DA(b);}return;default:F2();}}Dh().s(a,b,$p);}
function AD3(){var a=this;C.call(a);a.CN=null;a.gt=null;a.p1=null;}
function S6(a,b,c){var d=new AD3();AXA(d,a,b,c);return d;}
function AXA(a,b,c,d){a.CN=b;a.gt=c;a.p1=d;}
function A4$(a){return a.gt.gT()+a.p1.gT()|0;}
function AWL(a){return a.CN;}
function ASp(a,b){return b<a.gt.gT()?a.gt.gY(b):a.p1.gY(b-a.gt.gT()|0);}
function AVD(a,b,c){return b<a.gt.gT()?a.gt.kM(b,c):a.p1.kM(b-a.gt.gT()|0,c);}
function AXZ(a,b,c){if(b<a.gt.gT())a.gt.jH(b,c);else a.p1.jH(b-a.gt.gT()|0,c);}
function APt(a){return a.gt.f2();}
function T5(){C.call(this);this.Jb=null;}
function AJ3(a){Bf();A_V.requestPointerLock();O7(0);}
function AYc(a){AJ3(a);}
function JW(){BU.call(this);}
function SK(){C.call(this);}
var BgB=null;function Bv(b){return BgB.data[(b*651.8986206054688|0)&4095];}
function Bp(b){return BgB.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function B$(b){return Iu(b);}
function FN(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function Em(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function ANE(){var b,c,d,e;BgB=$rt_createFloatArray(4096);b=0;while(b<4096){BgB.data[b]=LT((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BgB.data;e=c;d[(e*11.377778053283691|0)&4095]=LT(e*0.01745329238474369);c=c+90|0;}}
function Pv(){var a=this;C.call(a);a.bd=null;a.V=null;a.W=null;a.Z=null;}
function PG(){var a=this;Pv.call(a);a.oL=null;a.qt=null;a.AB=null;}
var BgC=null;function G7(){var b;b=BgC;M4(b.oL);M4(b.qt);M4(b.AB);PZ(2983,b.oL);PZ(2982,b.qt);RX(V7(b.oL),16);X$(b.oL,b.V);RX(V7(b.qt),16);X$(b.qt,b.W);b.Z.data[0]=b.W.data[0]*b.V.data[0]+b.W.data[1]*b.V.data[4]+b.W.data[2]*b.V.data[8]+b.W.data[3]*b.V.data[12];b.Z.data[1]=b.W.data[0]*b.V.data[1]+b.W.data[1]*b.V.data[5]+b.W.data[2]*b.V.data[9]+b.W.data[3]*b.V.data[13];b.Z.data[2]=b.W.data[0]*b.V.data[2]+b.W.data[1]*b.V.data[6]+b.W.data[2]*b.V.data[10]+b.W.data[3]*b.V.data[14];b.Z.data[3]=b.W.data[0]*b.V.data[3]
+b.W.data[1]*b.V.data[7]+b.W.data[2]*b.V.data[11]+b.W.data[3]*b.V.data[15];b.Z.data[4]=b.W.data[4]*b.V.data[0]+b.W.data[5]*b.V.data[4]+b.W.data[6]*b.V.data[8]+b.W.data[7]*b.V.data[12];b.Z.data[5]=b.W.data[4]*b.V.data[1]+b.W.data[5]*b.V.data[5]+b.W.data[6]*b.V.data[9]+b.W.data[7]*b.V.data[13];b.Z.data[6]=b.W.data[4]*b.V.data[2]+b.W.data[5]*b.V.data[6]+b.W.data[6]*b.V.data[10]+b.W.data[7]*b.V.data[14];b.Z.data[7]=b.W.data[4]*b.V.data[3]+b.W.data[5]*b.V.data[7]+b.W.data[6]*b.V.data[11]+b.W.data[7]*b.V.data[15];b.Z.data[8]
=b.W.data[8]*b.V.data[0]+b.W.data[9]*b.V.data[4]+b.W.data[10]*b.V.data[8]+b.W.data[11]*b.V.data[12];b.Z.data[9]=b.W.data[8]*b.V.data[1]+b.W.data[9]*b.V.data[5]+b.W.data[10]*b.V.data[9]+b.W.data[11]*b.V.data[13];b.Z.data[10]=b.W.data[8]*b.V.data[2]+b.W.data[9]*b.V.data[6]+b.W.data[10]*b.V.data[10]+b.W.data[11]*b.V.data[14];b.Z.data[11]=b.W.data[8]*b.V.data[3]+b.W.data[9]*b.V.data[7]+b.W.data[10]*b.V.data[11]+b.W.data[11]*b.V.data[15];b.Z.data[12]=b.W.data[12]*b.V.data[0]+b.W.data[13]*b.V.data[4]+b.W.data[14]
*b.V.data[8]+b.W.data[15]*b.V.data[12];b.Z.data[13]=b.W.data[12]*b.V.data[1]+b.W.data[13]*b.V.data[5]+b.W.data[14]*b.V.data[9]+b.W.data[15]*b.V.data[13];b.Z.data[14]=b.W.data[12]*b.V.data[2]+b.W.data[13]*b.V.data[6]+b.W.data[14]*b.V.data[10]+b.W.data[15]*b.V.data[14];b.Z.data[15]=b.W.data[12]*b.V.data[3]+b.W.data[13]*b.V.data[7]+b.W.data[14]*b.V.data[11]+b.W.data[15]*b.V.data[15];b.bd.data[0].data[0]=b.Z.data[3]-b.Z.data[0];b.bd.data[0].data[1]=b.Z.data[7]-b.Z.data[4];b.bd.data[0].data[2]=b.Z.data[11]-b.Z.data[8];b.bd.data[0].data[3]
=b.Z.data[15]-b.Z.data[12];HJ(b.bd,0);b.bd.data[1].data[0]=b.Z.data[3]+b.Z.data[0];b.bd.data[1].data[1]=b.Z.data[7]+b.Z.data[4];b.bd.data[1].data[2]=b.Z.data[11]+b.Z.data[8];b.bd.data[1].data[3]=b.Z.data[15]+b.Z.data[12];HJ(b.bd,1);b.bd.data[2].data[0]=b.Z.data[3]+b.Z.data[1];b.bd.data[2].data[1]=b.Z.data[7]+b.Z.data[5];b.bd.data[2].data[2]=b.Z.data[11]+b.Z.data[9];b.bd.data[2].data[3]=b.Z.data[15]+b.Z.data[13];HJ(b.bd,2);b.bd.data[3].data[0]=b.Z.data[3]-b.Z.data[1];b.bd.data[3].data[1]=b.Z.data[7]-b.Z.data[5];b.bd.data[3].data[2]
=b.Z.data[11]-b.Z.data[9];b.bd.data[3].data[3]=b.Z.data[15]-b.Z.data[13];HJ(b.bd,3);b.bd.data[4].data[0]=b.Z.data[3]-b.Z.data[2];b.bd.data[4].data[1]=b.Z.data[7]-b.Z.data[6];b.bd.data[4].data[2]=b.Z.data[11]-b.Z.data[10];b.bd.data[4].data[3]=b.Z.data[15]-b.Z.data[14];HJ(b.bd,4);b.bd.data[5].data[0]=b.Z.data[3]+b.Z.data[2];b.bd.data[5].data[1]=b.Z.data[7]+b.Z.data[6];b.bd.data[5].data[2]=b.Z.data[11]+b.Z.data[10];b.bd.data[5].data[3]=b.Z.data[15]+b.Z.data[14];HJ(b.bd,5);return BgC;}
function HJ(b,c){var d,e;b=b.data;d=B$(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AGP(){var b;b=new PG;b.bd=$rt_createFloatMultiArray([16,16]);b.V=$rt_createFloatArray(16);b.W=$rt_createFloatArray(16);b.Z=$rt_createFloatArray(16);b.oL=HE(16);b.qt=HE(16);b.AB=HE(16);BgC=b;}
function W0(){}
function ANT(){C.call(this);this.z9=null;}
function A$_(){var a=new ANT();AS4(a);return a;}
function AS4(a){a.z9=G7();}
function Py(a,b){var c,d,e,f,g,h,i,j;c=a.z9;d=b.bw;e=b.bs;f=b.bv;g=b.bf;h=b.bc;i=b.bg;j=0;while(j<6){if(c.bd.data[j].data[0]*i+c.bd.data[j].data[1]*h+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*h+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*i+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*i+c.bd.data[j].data[1]
*h+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*h+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*i+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0)return 0;j=j+1|0;}return 1;}
function Tm(){C.call(this);}
var BgD=null;function D9(){Bc(2896);Bc(16384);Bc(16385);Bc(2903);}
function I4(){var b;Y(2896);Y(16384);Y(16385);Y(2903);b=BF(0.30000001192092896,1.0,(-0.699999988079071));FM(b.U,b.R,b.S,0.0);FM(0.5,0.5,0.5,1.0);FM(0.0,0.0,0.0,1.0);FM(0.0,0.0,0.0,1.0);b=BF((-0.699999988079071),1.0,0.20000000298023224);FM(b.U,b.R,b.S,0.0);FM(0.5,0.5,0.5,1.0);FM(0.0,0.0,0.0,1.0);FM(0.0,0.0,0.0,1.0);FM(0.5,0.5,0.5,1.0);}
function FM(b,c,d,e){DC(BgD);Ch(Ch(Ch(Ch(BgD,b),c),d),e);Ec(BgD);return BgD;}
function AG5(){BgD=HE(16);}
function F3(){var a=this;C.call(a);a.kh=null;a.kq=null;a.eK=null;a.fG=null;a.lL=null;a.iu=null;}
var BgE=null;var BgF=null;var BgG=null;var BgH=null;var BgI=null;var BgJ=null;function OU(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eK.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eK.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eK.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eK.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m
=s;while(true){if(m>=t){v=u-a.eK.data[t]|0;if(v<0)return (-3);b=a.eK.data;b[t]=b[t]+v|0;b=a.iu.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.iu.data;u=u+a.eK.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.iu.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.iu.data[t];b=a.iu.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lL.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eK.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|
0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eK.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eK.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lL.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.iu.data[y]=m;a.fG.data[0]=bc<<24>>24;a.fG.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fG.data;b=a.lL.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;CT(a.fG,0,j,(a.lL.data[q]+c|0)*3|0,3);z
=be;}b=a.fG.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fG.data[0]=192;else{p=l.data;if(p[w]>=e){i=g.data;o=f.data;a.fG.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fG.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fG;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fG.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){CT(a.fG,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.iu.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eK.data[m]|0;if
(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AM0(a,b,c,d,e,f){var g;Oa(a,19);a.kh.data[0]=0;g=OU(a,b,0,19,19,null,null,d,c,e,a.kh,a.kq);if(g==(-3))f.cb=B(522);else if(!(g!=(-5)&&c.data[0])){f.cb=B(523);g=(-3);}return g;}
function AA8(a,b,c,d,e,f,g,h,i,j){var k;Oa(a,288);a.kh.data[0]=0;k=OU(a,d,0,b,257,BgG,BgH,g,e,i,a.kh,a.kq);if(!k&&e.data[0]){Oa(a,288);c=OU(a,d,b,c,0,BgI,BgJ,h,f,i,a.kh,a.kq);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.cb=B(524);else if(c==(-5)){j.cb=B(525);c=(-3);}else if(c!=(-4)){j.cb=B(526);c=(-3);}return c;}if(k==(-3))j.cb=B(527);else if(k!=(-4)){j.cb=B(528);k=(-3);}return k;}
function AE6(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=BgE;e[0]=BgF;return 0;}
function Oa(a,b){var c;if(a.kh===null){a.kh=$rt_createIntArray(1);a.kq=$rt_createIntArray(b);a.eK=$rt_createIntArray(16);a.fG=$rt_createIntArray(3);a.lL=$rt_createIntArray(15);a.iu=$rt_createIntArray(16);}if(a.kq.data.length<b)a.kq=$rt_createIntArray(b);c=0;while(c<b){a.kq.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eK.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fG.data[c]=0;c=c+1|0;}CT(a.eK,0,a.lL,0,15);CT(a.eK,0,a.iu,0,16);}
function ALz(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;BgE=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;BgF=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;BgG=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;BgH=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;BgI=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;BgJ=b;}
function MJ(){var a=this;C.call(a);a.e_=0;a.mh=0;a.fB=null;a.lx=0;a.mB=0;a.z5=0;a.s$=0;a.ri=0;a.vf=0;a.uY=0;a.zG=null;a.wq=0;a.y_=null;a.wy=0;a.bb=null;a.u=null;}
var BgK=null;function ZT(a,b,c,d,e,f,g){a.e_=0;a.vf=b<<24>>24;a.uY=c<<24>>24;a.zG=d;a.wq=e;a.y_=f;a.wy=g;a.fB=null;}
function ADe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bb.r;d=a.bb.E;e=a.u.bT;f=a.u.bU;g=a.u.bj;h=g>=a.u.bZ?a.u.cM-g|0:(a.u.bZ-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.e_){case 0:break f;case 2:i=a.s$;while(f<i){if(!d){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,b);}b=0;d=d+(-1)|0;k=a.bb.cn.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.mh=a.mh+(e&BgK.data[i])|0;e=e>>i;f=f-i|0;a.mB=a.uY;a.fB=a.y_;a.lx=a.wy;a.e_=3;break g;case 4:i=a.s$;while
(f<i){if(!d){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,b);}b=0;d=d+(-1)|0;k=a.bb.cn.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.ri=a.ri+(e&BgK.data[i])|0;e=e>>i;f=f-i|0;a.e_=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.u.bj=g;b=B2(a.u,b);g=a.u.bj;if(a.u.bZ!=a.u.bj){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,b);}a.e_=8;break a;case 9:a.u.bT=e;a.u.bU
=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,(-2));}}l=a.mB;while(f<l){if(!d){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,b);}b=0;d=d+(-1)|0;k=a.bb.cn.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.lx+(e&BgK.data[l])
|0)*3|0;k=a.fB.data;i=m+1|0;e=e>>k[i];f=f-a.fB.data[i]|0;l=a.fB.data[m];if(l&16){a.s$=l&15;a.ri=a.fB.data[m+2|0];a.e_=4;continue b;}if(l&64){a.e_=9;a.bb.cb=B(529);a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,(-3));}a.mB=l;a.lx=(m/3|0)+a.fB.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;b=AKB(a,a.vf,a.uY,a.zG,a.wq,a.y_,a.wy,a.u,a.bb);c=a.bb.r;d=a.bb.E;e=a.u.bT;f
=a.u.bU;g=a.u.bj;h=g>=a.u.bZ?a.u.cM-g|0:(a.u.bZ-g|0)-1|0;if(b){a.e_=b!=1?9:7;continue b;}}a.mB=a.vf;a.fB=a.zG;a.lx=a.wq;a.e_=1;}l=a.mB;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bb.cn.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.lx+(e&BgK.data[l])|0)*3|0;k=a.fB.data;i=m+1|0;e=e>>>k[i];f=f-a.fB.data[i]|0;n=a.fB.data[m];if(!n){a.z5=a.fB.data[m+2|0];a.e_=6;continue b;}if(n&16){a.s$=n&15;a.mh=a.fB.data[m+2|0];a.e_=2;continue b;}if(!(n&64)){a.mB=n;a.lx=(m/3|0)+a.fB.data[m+2|0]|0;continue b;}if(!(n&32)){a.e_
=9;a.bb.cb=B(530);a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,(-3));}a.e_=7;continue b;}if(h)i=g;else{if(g!=a.u.cM)i=g;else if(!a.u.bZ)i=g;else{i=0;h=i>=a.u.bZ?a.u.cM-i|0:(a.u.bZ-i|0)-1|0;}if(!h){a.u.bj=i;b=B2(a.u,b);i=a.u.bj;h=i>=a.u.bZ?a.u.cM-i|0:(a.u.bZ-i|0)-1|0;if(i==a.u.cM&&a.u.bZ){i=0;h=i>=a.u.bZ?a.u.cM-i|0:(a.u.bZ-i|0)-1|0;}if(!h){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=i;return B2(a.u,
b);}}}b=0;k=a.u.cS.data;g=i+1|0;k[i]=a.z5<<24>>24;h=h+(-1)|0;a.e_=0;continue b;}i=g-a.ri|0;while(i<0){i=i+a.u.cM|0;}while(a.mh){if(h)l=g;else{if(g!=a.u.cM)l=g;else if(!a.u.bZ)l=g;else{l=0;h=l>=a.u.bZ?a.u.cM-l|0:(a.u.bZ-l|0)-1|0;}if(!h){a.u.bj=l;b=B2(a.u,b);l=a.u.bj;h=l>=a.u.bZ?a.u.cM-l|0:(a.u.bZ-l|0)-1|0;if(l==a.u.cM&&a.u.bZ){l=0;h=l>=a.u.bZ?a.u.cM-l|0:(a.u.bZ-l|0)-1|0;}if(!h){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=l;return B2(a.u,b);}}}o=a.u.cS.data;g=l
+1|0;k=a.u.cS.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.u.cM?0:m;a.mh=a.mh-1|0;}a.e_=0;}a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,b);}a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B2(a.u,1);}
function ACP(a,b){return;}
function AKB(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.r;k=i.E;l=h.bT;m=h.bU;n=h.bj;o=n>=h.bZ?h.cM-n|0:(h.bZ-n|0)-1|0;p=BgK.data[b];q=BgK.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cn.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cS.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&BgK.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cn.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.cb=B(529);b=i.E-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bT=w;h.bU=b;i.E=c;i.y=Long_add(i.y,Long_fromInt(e-i.r|0));i.r=e;h.bj=n;return (-3);}b=(b+r[x+2|0]|0)+(w&BgK.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cn.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&BgK.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cS.data;b=n+1|0;r=h.cS.data;c=w+1|0;s[n]=r[w];s=h.cS.data;n=b+1|0;r=h.cS.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{CT(h.cS,w,h.cS,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cM|0;if(w>=0)break;}b=h.cM-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cS.data;n=c+1|0;r=h.cS.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{CT(h.cS,w,h.cS,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cS.data;c=n+1|0;r=h.cS.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}CT(h.cS,w,h.cS,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.E-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bT=l;h.bU=e;i.E=b;i.y=Long_add(i.y,Long_fromInt(c-i.r|0));i.r=c;h.bj=n;return 1;}i.cb=B(530);v=i.E-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bT=l;h.bU=c;i.E=e;i.y=Long_add(i.y,Long_fromInt(b-i.r|0));i.r=b;h.bj=n;return (-3);}t=(t+s[u+2|0]|0)+(l&BgK.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cS.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.E-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bT=l;h.bU=g;i.E=b;i.y=Long_add(i.y,Long_fromInt(e-i.r|0));i.r=e;h.bj=c;return 0;}
function ADk(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;BgK=b;}
function AHa(){C.call(this);this.Q=null;}
function AV7(a){var b=new AHa();APL(b,a);return b;}
function APL(a,b){a.Q=b;}
function X6(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;b=((((K(K(a.Q.o,a.Q.t),a.Q.bu)*20|0)/64|0)/64|0)/64|0)/2|0;if(!a.Q.c1)b=0;if(a.Q.c1==1)b=(b*3|0)/4|0;if(a.Q.c1==2)b=(b<<2)/4|0;if(a.Q.c1==3)b=(b*6|0)/4|0;c=K(a.Q.o,a.Q.t)/4000|0;d=YC(a.Q,D(DP));e=0;while(e<4){if(d<b){f=a.Q.cV;g=0;h=W(a.Q.bo,5);i=W(a.Q.bo,a.Q.o);j=A62(N(a.Q.bo),N(a.Q.bo))*a.Q.bu|0;k=W(a.Q.bo,a.Q.t);l=0;m=Bw(h,1);n=Bw(h,2);o=Bw(h,3);while(l<2){p=0;q=i;r=j;s=k;while(p<3){a:{q=q+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;r=r
+(W(a.Q.bo,1)-W(a.Q.bo,1)|0)|0;s=s+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;if(q<0)break a;if(s<=0)break a;if(r<0)break a;if(r>=(a.Q.bu-2|0))break a;if(q>=a.Q.o)break a;if(s>=a.Q.t)break a;b:{t=q+0.5;u=r+0.5;v=s+0.5;if(f!==null){w=t-f.f;x=u-f.j;y=v-f.g;if(w*w+x*x+y*y>=1024.0)break b;break a;}w=t-a.Q.g5;x=u-a.Q.gZ;y=v-a.Q.hx;if(w*w+x*x+y*y<1024.0)break a;}z=null;if(!h)z=AXs(a.Q);if(!m)z=A4U(a.Q);if(!n)z=ASl(a.Q);if(!o)z=AYi(a.Q);if(z instanceof DP&&!a.Q.c1)z=null;if(z===null)break a;if(BN(a.Q,q,r,s))break a;if(!BN(a.Q,
q,r-1|0,s))break a;ba=z;if(!AM$(ba,t,u,v))break a;Jy(ba,t,u,v,N(a.Q.bo)*360.0,0.0);g=g+1|0;De(a.Q,z);}p=p+1|0;}l=l+1|0;}d=d+g|0;}e=e+1|0;}g=YC(a.Q,D(He));h=0;while(h<4){if(g<c){ba=a.Q.cV;bb=0;bc=W(a.Q.bo,2);i=W(a.Q.bo,a.Q.o);s=W(a.Q.bo,a.Q.bu);m=W(a.Q.bo,a.Q.t);n=0;r=Bw(bc,1);while(n<2){p=0;d=i;e=s;j=m;while(p<3){c:{d=d+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;e=e+(W(a.Q.bo,1)-W(a.Q.bo,1)|0)|0;j=j+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;if(d<0)break c;if(j<=0)break c;if(e<0)break c;if(e>=(a.Q.bu-2|0))break c;if(d>=a.Q.o)break c;if
(j>=a.Q.t)break c;d:{bd=d+0.5;be=e+0.5;v=j+0.5;if(ba!==null){w=bd-ba.f;x=be-ba.j;y=v-ba.g;if(w*w+x*x+y*y>=1024.0)break d;break c;}w=bd-a.Q.g5;x=be-a.Q.gZ;y=v-a.Q.hx;if(w*w+x*x+y*y<1024.0)break c;}z=null;if(!bc)z=A8f(a.Q);if(!r)z=AXw(a.Q);if(z===null)break c;if(BN(a.Q,d,e,j))break c;if(!BN(a.Q,d,e-1|0,j))break c;f=z;if(!AK8(f,bd,be,v))break c;Jy(f,bd,be,v,N(a.Q.bo)*360.0,0.0);bb=bb+1|0;De(a.Q,z);}p=p+1|0;}n=n+1|0;}g=g+bb|0;}h=h+1|0;}}
function JN(){var a=this;C.call(a);a.An=null;a.DG=0;a.FH=0;a.CX=0;}
function A3U(a){return;}
function PO(){var a=this;C.call(a);a.G_=0.0;a.bg=0.0;a.bc=0.0;a.bf=0.0;a.bv=0.0;a.bs=0.0;a.bw=0.0;}
function GM(a,b,c,d,e,f){var g=new PO();Rc(g,a,b,c,d,e,f);return g;}
function Rc(a,b,c,d,e,f,g){a.G_=0.0;a.bg=b;a.bc=c;a.bf=d;a.bv=e;a.bs=f;a.bw=g;}
function K4(a,b,c,d){var e,f,g,h,i,j,k;e=a.bg;f=a.bc;g=a.bf;h=a.bv;i=a.bs;j=a.bw;k=Bw(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=Bw(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=Bw(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return GM(e,f,g,h,i,j);}
function FL(a,b,c,d){var e;if(a.bc>a.bs){e=new BB;Bb(e,B(531));J(e);}return GM(a.bg-b,a.bc-c,a.bf-d,b+a.bv,c+a.bs,d+a.bw);}
function TS(a,b,c){var d,e;if(b.bs>a.bc&&b.bc<a.bs){if(b.bw>a.bf&&b.bf<a.bw){if(c<=0.0)d=c;else if(b.bv>a.bg)d=c;else{d=a.bg-b.bv;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.bg<a.bv)e=d;else{e=a.bv-b.bg;if(e<=d)e=d;}return e;}return c;}return c;}
function S_(a,b,c){var d,e;if(b.bv>a.bg&&b.bg<a.bv){if(b.bw>a.bf&&b.bf<a.bw){if(c<=0.0)d=c;else if(b.bs>a.bc)d=c;else{d=a.bc-b.bs;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.bc<a.bs)e=d;else{e=a.bs-b.bc;if(e<=d)e=d;}return e;}return c;}return c;}
function Ub(a,b,c){var d,e;if(b.bv>a.bg&&b.bg<a.bv){if(b.bs>a.bc&&b.bc<a.bs){if(c<=0.0)d=c;else if(b.bw>a.bf)d=c;else{d=a.bf-b.bw;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.bf<a.bw)e=d;else{e=a.bw-b.bf;if(e<=d)e=d;}return e;}return c;}return c;}
function Zg(a,b){return b.bv>=a.bg&&b.bg<=a.bv?(b.bs>=a.bc&&b.bc<=a.bs?(b.bw>=a.bf&&b.bf<=a.bw?1:0):0):0;}
function GP(a,b,c,d){a.bg=a.bg+b;a.bc=a.bc+c;a.bf=a.bf+d;a.bv=a.bv+b;a.bs=a.bs+c;a.bw=a.bw+d;}
function LU(a){return GM(a.bg,a.bc,a.bf,a.bv,a.bs,a.bw);}
function Qi(a,b,c){var d,e,f,g,h,i,j;d=Ks(b,c,a.bg);e=Ks(b,c,a.bv);f=Kw(b,c,a.bc);g=Kw(b,c,a.bs);h=Kf(b,c,a.bf);c=Kf(b,c,a.bw);if(!RD(a,d))d=null;if(!RD(a,e))e=null;if(!WZ(a,f))f=null;if(!WZ(a,g))g=null;if(!Wd(a,h))h=null;if(!Wd(a,c))c=null;i=null;if(d!==null)i=d;if(e!==null&&!(i!==null&&EZ(b,e)>=EZ(b,i)))i=e;if(f!==null&&!(i!==null&&EZ(b,f)>=EZ(b,i)))i=f;if(g!==null&&!(i!==null&&EZ(b,g)>=EZ(b,i)))i=g;if(h!==null&&!(i!==null&&EZ(b,h)>=EZ(b,i)))i=h;if(c!==null&&!(i!==null&&EZ(b,c)>=EZ(b,i)))i=c;if(i===null)return null;j
=(-1);if(i===d)j=4;if(i===e)j=5;if(i===f)j=0;if(i===g)j=1;if(i===h)j=2;if(i===c)j=3;return A5Y(0,0,0,j,i);}
function RD(a,b){return b===null?0:b.R>=a.bc&&b.R<=a.bs&&b.S>=a.bf&&b.S<=a.bw?1:0;}
function WZ(a,b){return b===null?0:b.U>=a.bg&&b.U<=a.bv&&b.S>=a.bf&&b.S<=a.bw?1:0;}
function Wd(a,b){return b===null?0:b.U>=a.bg&&b.U<=a.bv&&b.R>=a.bc&&b.R<=a.bs?1:0;}
function Va(){var a=this;C.call(a);a.Di=null;a.Dh=null;}
function AH_(a){var b,c;b=a.Di;c=a.Dh;FV(b);CY(c,null);}
function Ir(){BA.call(this);}
function ACX(){C.call(this);}
function A8o(a,b){return a.IZ(b);}
function AQP(a){return a.Ke();}
function Vw(){C.call(this);this.A7=null;}
function AMm(a){CY(a.A7,QN(1));}
function A8m(a){AMm(a);}
function WM(){C.call(this);this.Dj=null;}
function ABM(a){CY(a.Dj,QN(0));}
function A4F(a){ABM(a);}
function Fl(){Fd.call(this);}
var BgL=null;var Ba2=null;var BgM=null;var BgN=null;function AFI(){var b,c,d;b=new Fl;FK(b,B(532),0);BgL=b;b=new Fl;FK(b,B(533),1);Ba2=b;b=new Fl;FK(b,B(534),2);BgM=b;c=H(Fl,3);d=c.data;d[0]=BgL;d[1]=Ba2;d[2]=BgM;BgN=c;}
function Vy(){var a=this;C.call(a);a.Fo=null;a.yj=null;}
function AML(a){CY(a.Fo,a.yj.result===null?BgM:!(ADE(a.yj.result)?1:0)?BgL:Ba2);}
function A3A(a){AML(a);}
function Vx(){C.call(this);this.By=null;}
function AKZ(a){CY(a.By,BgM);}
function A1f(a){AKZ(a);}
function G1(){BU.call(this);}
function GI(){BA.call(this);}
function AN8(){EF.call(this);}
function A2g(a,b){var c=new AN8();ARB(c,a,b);return c;}
function ARB(a,b,c){a.rQ=1;a.so=1;a.vX=b;a.jM=c;}
function P4(){var a=this;C.call(a);a.sD=0;a.ty=0;a.rn=0;a.Ay=0;a.sP=0;}
function Go(){var a=this;DE.call(a);a.jO=null;a.EM=0;a.iZ=0;a.i3=0;a.lG=0;a.rp=0.0;}
function SB(a,b,c,d,e){var f=new Go();K2(f,a,b,c,d,e);return f;}
function K2(a,b,c,d,e,f){GR(a,b);a.iZ=0;a.lG=5;a.rp=Cc()*3.141592653589793*2.0;DD(a,0.25,0.25);a.dP=a.gB/2.0;D0(a,c,d,e);a.jO=f;a.I=Cc()*360.0;a.G=Cc()*0.20000000298023224-0.10000000149011612;a.C=0.20000000298023224;a.H=Cc()*0.20000000298023224-0.10000000149011612;a.pl=0;}
function A1D(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;N4(a);if(a.i3>0)a.i3=a.i3-1|0;a.cu=a.f;a.cy=a.j;a.cv=a.g;a.C=a.C-0.03999999910593033;if(CR(a.A,a.f|0,a.j|0,a.g|0)===Bdj){a.C=0.20000000298023224;a.G=(N(a.O)-N(a.O))*0.20000000298023224;a.H=(N(a.O)-N(a.O))*0.20000000298023224;}b=a.g;c=a.j;d=a.f;e=d|0;f=c|0;g=b|0;d=d-e;c=c-f;h=b-g;L();if(Bd2.data[O(a.A,e,f,g)]){i=Bd2.data[O(a.A,e-1|0,f,g)]?0:1;j=Bd2.data[O(a.A,e+1|0,f,g)]?0:1;k=Bd2.data[O(a.A,e,f-1|0,g)]?0:1;l=Bd2.data[O(a.A,e,f+1|0,g)]?0:1;m=Bd2.data[O(a.A,e,
f,g-1|0)]?0:1;n=Bd2.data[O(a.A,e,f,g+1|0)]?0:1;o=(-1);p=9999.0;if(i&&d<9999.0){o=0;p=d;}if(!j)b=p;else{b=1.0-d;if(b<p)o=1;else b=p;}if(k&&c<b){o=2;b=c;}if(!l)c=b;else{c=1.0-c;if(c<b)o=3;else c=b;}if(m&&h<c){o=4;c=h;}if(n&&1.0-h<c)o=5;b=N(a.O)*0.20000000298023224+0.10000000149011612;if(!o)a.G= -b;if(o==1)a.G=b;if(o==2)a.C= -b;if(o==3)a.C=b;if(o==4)a.H= -b;if(o==5)a.H=b;}Eq(a,a.G,a.C,a.H);a.G=a.G*0.9800000190734863;a.C=a.C*0.9800000190734863;a.H=a.H*0.9800000190734863;if(a.dF){a.G=a.G*0.699999988079071;a.H=a.H
*0.699999988079071;a.C=a.C*(-0.5);}a.EM=a.EM+1|0;a.iZ=a.iZ+1|0;if(a.iZ>=6000)CN(a);}
function A1n(a,b){AB6(a,null,1);}
function AB6(a,b,c){a.lG=a.lG-c|0;if(a.lG<=0)CN(a);return 0;}
function AXX(a,b){CH(b,B(411),a.lG<<24>>24<<16>>16);CH(b,B(535),a.iZ<<16>>16);Ka(b,B(505),Ix(a.jO,DH()));}
function A6u(a,b){a.lG=Ck(b,B(411))&255;a.iZ=Ck(b,B(535));a.jO=PV(Gx(b,B(505)));}
function A3Y(a){return B(505);}
function AXq(a,b){if(!a.i3&&XN(b.F,a.jO)){Uk(b,a);CN(a);}}
function QX(){Eu.call(this);this.tS=null;}
function AXS(a){F9(a.cK,B(494),60,6,4210752);F9(a.cK,B(318),8,(a.fi-96|0)+2|0,4210752);}
function AAp(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cf;c=B(536);$p=1;case 1:$z=AB_(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EP(d);e=(a.bq-a.e9|0)/2|0;f=(a.bM-a.fi|0)/2|0;CD(a,e,f,0,0,a.e9,a.fi);if(Ts(a.tS)){g=ABd(a.tS,12);CD(a,e+56|0,((f+36|0)+12|0)-g|0,176,12-g|0,14,g+2|0);}h=AIG(a.tS,24);CD(a,e+79|0,f+34|0,176,14,h+1|0,16);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,
$p);}
function Un(){var a=this;Eu.call(a);a.pj=null;a.wk=null;}
function A10(a){var b,c;Y6(a);b=0;while(b<9){c=IW(a.pj,b);if(c!==null)J9(a.x.a,c);b=b+1|0;}}
function APc(a){var b,c,d,e,f,g;b=$rt_createIntArray(9);c=b.data;d=0;while(d<3){e=0;while(e<3){f=d+(e*3|0)|0;g=IW(a.pj,f);if(g!==null)c[f]=g.bX;else c[f]=(-1);e=e+1|0;}d=d+1|0;}So(a.wk,0,Vl(Xm(),b));}
function AU0(a){F9(a.cK,B(420),28,6,4210752);F9(a.cK,B(318),8,(a.fi-96|0)+2|0,4210752);}
function AKj(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cf;c=B(537);$p=1;case 1:$z=AB_(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EP(d);CD(a,(a.bq-a.e9|0)/2|0,(a.bM-a.fi|0)/2|0,0,0,a.e9,a.fi);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AGc(){var a=this;Eu.call(a);a.KC=null;a.A$=null;a.lw=0;}
function A$S(a,b){var c=new AGc();AX8(c,a,b);return c;}
function AX8(a,b,c){var d,e,f,g;J7(a);a.lw=0;a.KC=b;a.A$=c;a.n$=0;a.lw=c.gT()/9|0;a.fi=114+(a.lw*18|0)|0;d=(a.lw-4|0)*18|0;e=0;while(e<a.lw){f=0;while(f<9){M(a.cX,En(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){M(a.cX,En(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=d+161|0;while(e<9){M(a.cX,En(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A1E(a){F9(a.cK,a.A$.xF(),8,6,4210752);F9(a.cK,B(318),8,(a.fi-96|0)+2|0,4210752);}
function ADU(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cf;c=B(538);$p=1;case 1:$z=AB_(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EP(d);e=(a.bq-a.e9|0)/2|0;f=(a.bM-a.fi|0)/2|0;CD(a,e,f,0,0,a.e9,(a.lw*18|0)+17|0);CD(a,e,(f+(a.lw*18|0)|0)+17|0,0,126,a.e9,96);return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function G6(){var a=this;C.call(a);a.mv=0;a.BT=0;a.l5=null;a.jI=null;a.Eb=null;a.qk=null;}
function BgO(a){var b=new G6();OV(b,a);return b;}
function OV(a,b){a.qk=b;a.BT=b.fN;a.l5=null;}
function Lb(a){if(a.l5!==null)return 1;while(a.mv<a.qk.cQ.data.length){if(a.qk.cQ.data[a.mv]!==null)return 1;a.mv=a.mv+1|0;}return 0;}
function AJc(a){var b;if(a.BT==a.qk.fN)return;b=new JW;Z(b);J(b);}
function Ph(a){var b,c,d;AJc(a);if(!Lb(a)){b=new Jl;Z(b);J(b);}if(a.l5===null){c=a.qk.cQ.data;d=a.mv;a.mv=d+1|0;a.jI=c[d];a.l5=a.jI.gh;a.Eb=null;}else{if(a.jI!==null)a.Eb=a.jI;a.jI=a.l5;a.l5=a.l5.gh;}}
function Xy(){G6.call(this);}
function T_(a){Ph(a);return a.jI.fr;}
function JT(){var a=this;JC.call(a);a.eh=null;a.Bl=0;a.d7=0;}
function BgP(a,b,c,d,e,f){var g=new JT();Qf(g,a,b,c,d,e,f);return g;}
function Qf(a,b,c,d,e,f,g){WA(a,c,e,f);a.d7=b;a.eh=d;a.Bl=g;}
function AT4(a){return a.Bl;}
function QO(){JT.call(this);}
function ASq(a,b){var c,d;c=a.eh.b5.data;d=a.d7;b=b*4|0;return c[d+b|0]&255|(a.eh.b5.data[(a.d7+b|0)+1|0]&255)<<8|(a.eh.b5.data[(a.d7+b|0)+2|0]&255)<<16|(a.eh.b5.data[(a.d7+b|0)+3|0]&255)<<24;}
function AO1(a,b,c){var d,e;d=a.eh.b5.data;e=a.d7;b=b*4|0;d[e+b|0]=c<<24>>24;a.eh.b5.data[(a.d7+b|0)+1|0]=c>>8<<24>>24;a.eh.b5.data[(a.d7+b|0)+2|0]=c>>16<<24>>24;a.eh.b5.data[(a.d7+b|0)+3|0]=c>>24<<24>>24;}
function Yb(){JT.call(this);}
function AXc(a,b){var c,d;c=a.eh.b5.data;d=a.d7;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eh.b5.data[(a.d7+b|0)+1|0]&255)<<16|(a.eh.b5.data[(a.d7+b|0)+2|0]&255)<<8|a.eh.b5.data[(a.d7+b|0)+3|0]&255;}
function APZ(a,b,c){var d,e;d=a.eh.b5.data;e=a.d7;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eh.b5.data[(a.d7+b|0)+1|0]=c>>16<<24>>24;a.eh.b5.data[(a.d7+b|0)+2|0]=c>>8<<24>>24;a.eh.b5.data[(a.d7+b|0)+3|0]=c<<24>>24;}
function Tl(){var a=this;C.call(a);a.m_=0;a.sv=0;a.su=0;a.qm=0;a.tt=0;a.tu=0;}
function On(a,b,c,d,e,f,g){var h=new Tl();ANG(h,a,b,c,d,e,f,g);return h;}
function ANG(a,b,c,d,e,f,g,h){a.m_=c;a.sv=d;a.su=e;a.qm=f;a.tt=g;a.tu=h;}
function AAb(){var a=this;C.call(a);a.dJ=null;a.sH=null;a.nb=null;a.qP=0.0;a.E4=0.0;a.E2=0.0;a.E3=0.0;}
var BdQ=null;function A9G(){var a=new AAb();AIJ(a);return a;}
function AIJ(a){var b,c,d,e,f;a.dJ=CZ();b=a.dJ;c=new Zt;F6(c,AO4(),1.0);c.k9=AO4();BI(b,D(TO),c);d=a.dJ;e=new DV;b=new Qw;Pz(b,6,0.0);F6(e,b,0.699999988079071);BI(d,D(Z7),e);b=a.dJ;c=new YK;e=new WX;Pz(e,12,0.0);e.go=BK(0,0);BH(e.go,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BG(e.go,0.0,6.0,(-8.0));e.hF=BK(28,8);BH(e.hF,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BG(e.hF,0.0,5.0,2.0);f=A_h();F6(c,e,0.699999988079071);c.k9=f;BI(b,D(P$),c);b=a.dJ;c=new ZW;F6(c,A$b(),0.5);BI(b,D(Wm),c);b=a.dJ;e=new DV;f=new UT;KF(f);f.dT=BK(40,16);BH(f.dT,
(-1.0),(-2.0),(-1.0),2,12,2,0.0);BG(f.dT,(-5.0),2.0,0.0);f.dI=BK(40,16);f.dI.l0=1;BH(f.dI,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BG(f.dI,5.0,2.0,0.0);f.iP=BK(0,16);BH(f.iP,(-1.0),0.0,(-1.0),2,12,2,0.0);BG(f.iP,(-2.0),12.0,0.0);f.g_=BK(0,16);f.g_.l0=1;BH(f.g_,(-1.0),0.0,(-1.0),2,12,2,0.0);BG(f.g_,2.0,12.0,0.0);F6(e,f,0.5);BI(b,D(Yf),e);b=a.dJ;c=new DV;e=new Jv;KF(e);F6(c,e,0.5);BI(b,D(SP),c);b=a.dJ;c=new OX;F6(c,AM6(0.0),0.5);c.A1=c.kg;c.Ex=AM6(1.0);c.BQ=AM6(0.5);BI(b,D(Hk),c);b=a.dJ;c=new YW;e=new Jv;KF(e);F6(c,e,
3.0);c.r4=6.0;BI(b,D(PT),c);BI(a.dJ,D(F8),A$2(A98(),0.5));b=a.dJ;c=new SC;Ia(c);BI(b,D(DE),c);b=a.dJ;c=new SS;Ia(c);c.G1=new Dd;BI(b,D(PS),c);b=a.dJ;c=new Ve;Ia(c);BI(b,D(M1),c);BI(a.dJ,D(Go),AM8());b=a.dJ;c=new Ur;Ia(c);c.xN=AAy();c.n2=0.5;BI(b,D(Wx),c);b=W3(Xj(a.dJ));while(Lb(b)){T_(b).hK=a;}}
function QB(a,b){var c,d;c=B5(b);d=Co(a.dJ,c);if(d===null&&c!==D(DE)){d=Co(a.dJ,Nn(c));BI(a.dJ,c,d);}return d;}
function AGO(a,b,c,d,e){a.nb=b;a.sH=c;a.qP=d.bN+(d.I-d.bN)*e;a.E4=d.ec+(d.f-d.ec)*e;a.E2=d.eb+(d.j-d.eb)*e;a.E3=d.ea+(d.g-d.ea)*e;}
function AAi(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.ec+(b.f-b.ec)*c;e=b.eb+(b.j-b.eb)*c;f=b.ea+(b.g-b.ea)*c;g=b.bN+(b.I-b.bN)*c;h=DT(a.nb,d|0,e+b.wb()|0,f|0);Mi(h,h,h);$p=1;case 1:AGf(a,b,d,e,f,g,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function AGf(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=QB(a,b);if(h===null)return;$p=1;case 1:h.kX(b,c,d,e,f,g);if(I()){break _;}$p=2;case 2:ALe(h,b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function AQA(a,b){a.nb=b;}
function AAT(a,b,c,d){b=b-a.E4;c=c-a.E2;d=d-a.E3;return b*b+c*c+d*d;}
function AEm(){BdQ=A9G();}
function Rr(){Dn.call(this);this.Dy=null;}
function AUg(a){var b;b=new X3;OV(b,a.Dy);return b;}
function WT(){}
function AEh(){var a=this;C.call(a);a.fL=null;a.iI=null;a.kY=null;a.qq=0;a.rD=0;a.il=null;}
function A0T(a,b,c,d){var e=new AEh();AQD(e,a,b,c,d);return e;}
function AQD(a,b,c,d,e){a.il=b;a.rD=a.il.d3;a.fL=c;a.iI=d;a.qq=e;}
function ADN(a){return a.fL===null?0:1;}
function ABp(a){var b;TE(a);if(a.fL===null){b=new Jl;Z(b);J(b);}b=a.fL.Ak;a.kY=a.fL;a.iI=a.fL;a.fL=a.fL.hd;a.qq=a.qq+1|0;return b;}
function AG1(a){var b,c;if(a.kY===null){b=new DF;Z(b);J(b);}b=a.il;c=a.kY;if(c.iH===null)b.s5=c.hd;else c.iH.hd=c.hd;if(c.hd===null)b.qJ=c.iH;else c.hd.iH=c.iH;b.jf=b.jf-1|0;b.d3=b.d3+1|0;if(a.kY===a.iI){a.iI=!ADN(a)?null:a.fL.iH;a.qq=a.qq-1|0;}else if(a.kY===a.fL)a.fL=!ABV(a)?null:a.iI.hd;a.rD=a.il.d3;a.kY=null;}
function ABV(a){return a.iI===null?0:1;}
function ADb(a,b){var c;TE(a);c=new TT;c.Ak=b;c.iH=a.iI;c.hd=a.fL;if(a.iI!==null)a.iI.hd=c;else a.il.s5=c;if(a.fL!==null)a.fL.iH=c;else a.il.qJ=c;a.iI=c;b=a.il;b.jf=b.jf+1|0;b=a.il;b.d3=b.d3+1|0;a.rD=a.il.d3;a.kY=null;}
function TE(a){var b;if(a.rD>=a.il.d3)return;b=new JW;Z(b);J(b);}
function TT(){var a=this;C.call(a);a.Ak=null;a.hd=null;a.iH=null;}
function Vo(){C.call(this);this.zm=null;}
function ARZ(a,b,c){var d,e,f,g;d=b;e=c;f=d.gA;g=e.gA;return f&&!g?1:!(g&&!f)&&IP(d,a.zm)<IP(e,a.zm)?1:(-1);}
function Im(){C.call(this);}
var BgQ=null;var BgR=null;var BgS=null;var BgT=null;var BgU=null;function TM(b,c){var d,e,f;if(c===null)c=BgT;d=H(C,b.q);HW(b,d);ACD(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;M8(b,e,f[e]);e=e+1|0;}}
function ALh(){BgQ=new Uh;BgR=new Uf;BgS=new Ui;BgT=new Zf;BgU=new Zd;}
function R5(){C.call(this);this.vb=null;}
function AWS(a,b,c){var d,e;d=b;e=c;return IP(d,a.vb)>=IP(e,a.vb)?1:(-1);}
function Hs(){BU.call(this);}
function EO(){Hs.call(this);}
function GW(){BU.call(this);}
function Gg(){BU.call(this);}
function Nr(){C.call(this);this.Jv=0;}
var BgV=null;var BgW=null;function APU(a){var b=new Nr();AH4(b,a);return b;}
function AH4(a,b){a.Jv=b;}
function QN(b){return !b?BgW:BgV;}
function ALD(){BgV=APU(1);BgW=APU(0);}
function PB(){var a=this;C.call(a);a.Ja=null;a.C9=0.0;a.G$=0.0;a.lI=null;a.nm=null;a.r1=null;a.h3=0;}
function ZC(a,b){var c;if(b!==null){a.nm=b;return a;}c=new BB;Bb(c,B(539));J(c);}
function A7r(a,b){return;}
function Tv(a,b){var c;if(b!==null){a.r1=b;return a;}c=new BB;Bb(c,B(539));J(c);}
function A2U(a,b){return;}
function OA(a,b,c,d){var e,f,$$je;if(!(a.h3==2&&!d)&&a.h3!=3){a.h3=d?2:1;while(true){try{e=AGt(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof BU){f=$$je;J(A1w(f));}else{throw $$e;}}if(G9(e))return e;if(Hz(e)){if(d&&DI(b)){if(a.nm===Bda)return FD(BT(b));if(BT(c)<=Q(a.lI))return Bgq;Dz(b,b.L+BT(b)|0);if(a.nm===Bba)Ox(c,a.lI);}return e;}if(R2(e)){if(a.nm===Bda)return e;if(a.nm===Bba){if(BT(c)<Q(a.lI))return Bgq;Ox(c,a.lI);}Dz(b,b.L+MC(e)|0);}else if(NC(e)){if(a.r1===Bda)break;if(a.r1===Bba){if(BT(c)<Q(a.lI))return Bgq;Ox(c,
a.lI);}Dz(b,b.L+MC(e)|0);}}return e;}b=new DF;Z(b);J(b);}
function Sl(a,b){if(a.h3!=3&&a.h3!=2){b=new DF;Z(b);J(b);}a.h3=3;return Bgr;}
function AN0(a){a.h3=0;return a;}
function AIR(a,b){var c,d;if(a.h3&&a.h3!=3){b=new DF;Z(b);J(b);}if(!BT(b))return AG8(0);if(a.h3)AN0(a);c=AG8(Df(8,BT(b)*a.C9|0));while(true){d=OA(a,b,c,0);if(Hz(d))break;if(G9(d))c=XV(a,c);if(!JI(d))continue;KZ(d);}b=OA(a,b,c,1);if(JI(b))KZ(b);while(!Hz(Sl(a,c))){c=XV(a,c);}Ec(c);return c;}
function XV(a,b){var c,d;c=b.mG;d=Th(QC(c,Df(8,c.data.length*2|0)));Dz(d,b.L);return d;}
function AUY(a,b){return Bgr;}
function A1Z(a){return;}
function AMI(){var a=this;C.call(a);a.g4=0;a.hr=0;a.gX=0;a.f3=null;}
function A7d(a){var b=new AMI();A41(b,a);return b;}
function Gj(a,b,c,d){a.g4=b/8.0|0;a.hr=c/8.0|0;a.gX=d/8.0|0;if(a.g4<0)a.g4=0;if(a.hr<0)a.hr=0;if(a.gX<0)a.gX=0;if(a.g4>=a.f3.ey)a.g4=a.f3.ey-1|0;if(a.hr>=a.f3.eL)a.hr=a.f3.eL-1|0;if(a.gX>=a.f3.h2)a.gX=a.f3.h2-1|0;return a;}
function Ss(a,b){if(a.g4>=0&&a.hr>=0&&a.gX>=0)M(a.f3.lB.data[K(K(a.gX,a.f3.eL)+a.hr|0,a.f3.ey)+a.g4|0],b);}
function Kl(a,b){if(a.g4>=0&&a.hr>=0&&a.gX>=0)GE(a.f3.lB.data[K(K(a.gX,a.f3.eL)+a.hr|0,a.f3.ey)+a.g4|0],b);}
function A41(a,b){a.f3=b;}
function DV(){var a=this;D_.call(a);a.kg=null;a.k9=null;}
function A$2(a,b){var c=new DV();F6(c,a,b);return c;}
function F6(a,b,c){Ia(a);a.kg=b;a.n2=c;}
function APz(a,b){a.k9=b;}
function AGR(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ca();Bc(2884);h=b.hS+(b.eM-b.hS)*g;i=b.bN+(b.I-b.bN)*g;j=b.b1+(b.X-b.b1)*g;Bj(c,d,e);k=b.pU+g;Bs(180.0-h,0.0,1.0,0.0);if(b.dA>0){c=B$((b.dA+g-1.0)/20.0*1.600000023841858);if(c>1.0)c=1.0;Bs(c*a.Ag(b),0.0,0.0,1.0);}C7((-0.0625),
(-0.0625),0.0625);a.v5(b,g);Bj(0.0,(-24.0),0.0);Y(2977);c=b.xt+(b.j$-b.xt)*g;d=b.y5-b.j$*(1.0-g);if(c>1.0)c=1.0;l=b.hz;$p=1;case 1:AH3(a,l);if(I()){break _;}Y(3008);l=a.kg;f=i-h;l.gQ(d,c,k,f,j,1.0);m=0;if(m<4){$p=2;continue _;}h=EC(b,g);n=a.wR(b,h,g);m=n>>>24;if(!(m<=0&&b.hm<=0&&b.dA<=0)){Bc(3553);Bc(3008);Y(3042);Dy(770,771);GN(514);if(!(b.hm<=0&&b.dA<=0)){BJ(h,0.0,0.0,0.4000000059604645);a.kg.gQ(d,c,k,f,j,1.0);o=0;if(o<4){$p=3;continue _;}}if(m>0){p=(n>>16&255)/255.0;e=(n>>8&255)/255.0;q=(n&255)/255.0;g=m
/255.0;BJ(p,e,q,g);a.kg.gQ(d,c,k,f,j,1.0);r=0;if(r<4){$p=4;continue _;}}GN(515);Bc(3042);Y(3008);Y(3553);}Bc(2977);Y(2884);BS();return;case 2:$z=a.mC(b,m);if(I()){break _;}n=$z;if(n){a.k9.gQ(d,c,k,f,j,1.0);Bc(3042);Y(3008);}m=m+1|0;if(m<4){continue _;}h=EC(b,g);n=a.wR(b,h,g);m=n>>>24;if(!(m<=0&&b.hm<=0&&b.dA<=0)){Bc(3553);Bc(3008);Y(3042);Dy(770,771);GN(514);if(!(b.hm<=0&&b.dA<=0)){BJ(h,0.0,0.0,0.4000000059604645);a.kg.gQ(d,c,k,f,j,1.0);o=0;if(o<4){$p=3;continue _;}}if(m>0){p=(n>>16&255)/255.0;e=(n>>8&255)/
255.0;q=(n&255)/255.0;g=m/255.0;BJ(p,e,q,g);a.kg.gQ(d,c,k,f,j,1.0);r=0;if(r<4){$p=4;continue _;}}GN(515);Bc(3042);Y(3008);Y(3553);}Bc(2977);Y(2884);BS();return;case 3:$z=a.mC(b,o);if(I()){break _;}r=$z;if(r){BJ(h,0.0,0.0,0.4000000059604645);a.k9.gQ(d,c,k,f,j,1.0);}o=o+1|0;if(o<4){continue _;}if(m>0){p=(n>>16&255)/255.0;e=(n>>8&255)/255.0;q=(n&255)/255.0;g=m/255.0;BJ(p,e,q,g);a.kg.gQ(d,c,k,f,j,1.0);r=0;if(r<4){$p=4;continue _;}}GN(515);Bc(3042);Y(3008);Y(3553);Bc(2977);Y(2884);BS();return;case 4:$z=a.mC(b,r);if
(I()){break _;}n=$z;if(n){BJ(p,e,q,g);a.k9.gQ(d,c,k,f,j,1.0);}r=r+1|0;if(r>=4){GN(515);Bc(3042);Y(3008);Y(3553);Bc(2977);Y(2884);BS();return;}continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ABz(a,b,c){return 0;}
function AUw(a,b){return 90.0;}
function ASH(a,b,c,d){return 0;}
function A19(a,b,c){return;}
function AHW(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.I6(b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function OX(){var a=this;DV.call(a);a.A1=null;a.Ex=null;a.BQ=null;}
var BgX=null;function AMg(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:IQ(Bch,1);d=d-b.dP;$p=1;case 1:AGR(a,b,c,d,e,f,g);if(I()){break _;}IQ(Bch,0);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function ALo(a){B8(a.A1.dT,1.0);}
function AE9(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b;e=3-c|0;f=d.F.c$.data[e];if(f!==null){g=BZ(f);if(g instanceof Gn){h=g;b=new R;T(b);b=E(E(E(b,B(540)),BgX.data[h.AN]),B(541));e=Bw(c,2);b=S(E(Bd(b,e?1:2),B(209)));$p=1;continue _;}}return 0;case 1:AHK(a,b);if(I()){break _;}i=e?a.Ex:a.BQ;i.i4.jr=c?0:1;i.k3.jr=c?0:1;b=i.qi;j=Bw(c,1);b.jr=j&&e?0:1;i.dT.jr=j?
0:1;i.dI.jr=j?0:1;i.iP.jr=e&&c!=3?0:1;i.g_.jr=e&&c!=3?0:1;a.k9=i;return 1;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL6(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AMg(a,b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function ADm(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AMg(a,b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function ANe(){var b,c;b=H(BC,5);c=b.data;c[0]=B(264);c[1]=B(542);c[2]=B(543);c[3]=B(544);c[4]=B(545);BgX=b;}
function Po(){var a=this;GC.call(a);a.g$=0;a.i6=0;a.h8=0;a.ir=0;a.eS=null;a.bC=0;a.fc=0;a.jD=0;}
function CL(a,b,c,d){var e=new Po();AQH(e,a,b,c,d);return e;}
function BgY(a,b,c,d,e,f){var g=new Po();Y8(g,a,b,c,d,e,f);return g;}
function AQH(a,b,c,d,e){Y8(a,b,c,d,200,20,e);}
function Y8(a,b,c,d,e,f,g){JH(a);a.g$=200;a.i6=20;a.fc=1;a.jD=1;a.bC=b;a.h8=c;a.ir=d;a.g$=e;a.i6=20;a.eS=g;}
function AE1(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.jD)return;e=b.jl;f=3553;g=b.cf;b=B(372);$p=1;case 1:$z=AB_(g,b);if(I()){break _;}h=$z;Cj(f,h);BJ(1.0,1.0,1.0,1.0);f=1;h=c>=a.h8&&d>=a.ir&&c<(a.h8+a.g$|0)&&d<(a.ir+a.i6|0)?1:0;if(!a.fc)f=0;else if(h)f=2;i=a.h8;j=a.ir;c=46+(f*20|0)|0;CD(a,i,j,0,c,a.g$/2|0,a.i6);CD(a,a.h8+(a.g$/2|0)|0,a.ir,200-(a.g$/2|0)|
0,c,a.g$/2|0,a.i6);if(!a.fc)Eh(e,a.eS,a.h8+(a.g$/2|0)|0,a.ir+((a.i6-8|0)/2|0)|0,(-6250336));else if(!h)Eh(e,a.eS,a.h8+(a.g$/2|0)|0,a.ir+((a.i6-8|0)/2|0)|0,14737632);else Eh(e,a.eS,a.h8+(a.g$/2|0)|0,a.ir+((a.i6-8|0)/2|0)|0,16777120);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function RT(a,b,c){return a.fc&&b>=a.h8&&c>=a.ir&&b<(a.h8+a.g$|0)&&c<(a.ir+a.i6|0)?1:0;}
function Zf(){C.call(this);}
function A1g(a,b,c){return b!==null?b.kR(c): -c.kR(b);}
function Zd(){C.call(this);}
function JR(){var a=this;F8.call(a);a.gI=null;a.eJ=null;a.ql=0;}
function BgZ(a){var b=new JR();O3(b,a);return b;}
function O3(a,b){Rj(a,b);a.ql=0;}
function AHq(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;a.ql=0;if(a.eJ===null){a.eJ=a.vc();if(a.eJ!==null)a.gI=X9(a.A.rU,a,a.eJ,16.0);}else if(!a.eJ.Dm())a.eJ=null;else{b=a.eJ;c=b.f-a.f;d=b.j-a.j;e=b.g-a.g;f=B$(c*c+d*d+e*e);if(E2(a.A,BF(a.f,a.j+ACn(a),a.g),BF(a.eJ.f,a.eJ.j+a.eJ.sb(),a.eJ.g))===null)a.po(a.eJ,f);}if(a.ql){a.kT=0.0;a.kw=0.0;a.hR=0;}else{if(a.eJ!==null&&!(a.gI!==null&&W(a.O,20)))a.gI=X9(a.A.rU,a,a.eJ,16.0);else if(!(a.gI!==null&&W(a.O,100))){g=(-1);h=(-1);i=(-1);j=(-99999.0);k=0;while(k<200){l
=a.f+W(a.O,21)-10.0|0;m=a.j+W(a.O,9)-4.0|0;n=a.g+W(a.O,21)-10.0|0;o=a.s9(l,m,n);if(o>j){j=o;g=l;h=m;i=n;}k=k+1|0;}if(g>0)a.gI=AIu(a.A.rU,a,g,h,i,16.0);}p=Gr(a);q=JD(a);if(a.gI!==null&&W(a.O,100)){r=Ws(a.gI,a);j=a.dL*2.0;j=j*j;a:{while(true){if(r===null)break a;d=a.g;c=a.j;e=a.f-r.U;c=c-r.R;s=d-r.S;if(e*e+c*c+s*s>=j)break a;if(r.R>a.j)break;AJk(a.gI);if(!AJR(a.gI)){r=Ws(a.gI,a);continue;}r=null;a.gI=null;}}a.hR=0;if(r!==null){s=r.U-a.f;e=r.S-a.g;c=r.R-a.j;a.I=GL(e,s)*180.0/3.1415927410125732-90.0;a.kw=a.lR;if
(c>0.0)a.hR=1;}if(N(a.O)<0.800000011920929&&!(!p&&!q))a.hR=1;}else{AFv(a);a.gI=null;}}}
function AQp(a,b,c){return;}
function AVz(a){return null;}
function ZM(a,b,c,d){var e;D0(a,b,c+a.gB/2.0,d);e=AEN(a.A,a.Y)&&!Hv(a.A,a.Y).q&&!SH(a.A,a.Y)?1:0;return e&&a.s9(b|0,c|0,d|0)>=0.0?1:0;}
function DP(){JR.call(this);this.tX=0;}
function Bg0(a){var b=new DP();Iz(b,a);return b;}
function Iz(a,b){O3(a,b);a.tX=2;a.b0=20;}
function Yv(a){if(EC(a,1.0)>0.5)a.jm=a.jm+2|0;W7(a);}
function AVV(a){AD9(a);if(!a.A.c1)CN(a);}
function ASW(a){return Zh(a.A.cV,a)>=256.0?null:a.A.cV;}
function A1l(a,b,c){if(!NR(a,b,c))return 0;if(b!==a)a.eJ=b;return 1;}
function AMb(a,b,c){if(c<2.5&&b.Y.bs>a.Y.bc&&b.Y.bc<a.Y.bs){a.jc=20;b.eY(a,a.tX);}}
function A0P(a,b,c,d){return 0.5-DT(a.A,b,c,d);}
function AUI(a,b){Gl(a,b);}
function AXi(a,b){GQ(a,b);}
function AM$(a,b,c,d){return D5(a.A,b|0,c|0,d|0)<=W(a.O,8)&&ZM(a,b,c,d)?1:0;}
function TO(){DP.call(this);}
function ASl(a){var b=new TO();AWC(b,a);return b;}
function AWC(a,b){Iz(a,b);a.hz=B(546);DD(a,1.399999976158142,0.8999999761581421);a.lR=0.800000011920929;}
function A6I(a){if(EC(a,1.0)<0.5&&Zh(a.A.cV,a)<256.0)return a.A.cV;return null;}
function AP1(a,b,c){var d,e;a:{if(EC(a,1.0)>0.5&&!W(a.O,100))a.eJ=null;else{if(c>2.0&&c<6.0&&!W(a.O,10)){if(!a.dF)break a;else{c=b.f-a.f;d=b.g-a.g;e=B$(c*c+d*d);a.G=c/e*0.5*0.800000011920929+a.G*0.20000000298023224;a.H=d/e*0.5*0.800000011920929+a.H*0.20000000298023224;a.C=0.4000000059604645;return;}}AMb(a,b,c);}}}
function A7b(a,b){Gl(a,b);}
function A20(a,b){GQ(a,b);}
function AWP(a){return B(501);}
function AUL(a){B3();return Bfe.c3;}
function Zt(){DV.call(this);}
function A4R(a,b){return 180.0;}
function ACa(a,b,c){var d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b;if(c)return 0;if(c)return 0;b=B(547);$p=1;case 1:AHK(a,b);if(I()){break _;}e=(1.0-EC(d,1.0))*0.5;Y(3042);Bc(3008);Dy(770,771);BJ(1.0,1.0,1.0,e);return 1;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function He(){JR.call(this);}
function AQ1(a,b,c,d){var e;e=O(a.A,b,c-1|0,d);L();return e==Bcp.b?10.0:DT(a.A,b,c,d)-0.5;}
function AK8(a,b,c,d){return D5(a.A,b|0,c|0,d|0)>8&&ZM(a,b,c,d)?1:0;}
function Z7(){He.call(this);}
function A8f(a){var b=new Z7();AR2(b,a);return b;}
function AR2(a,b){O3(a,b);a.hz=B(548);DD(a,0.8999999761581421,0.8999999761581421);}
function AUP(a,b){Gl(a,b);}
function A4x(a,b){GQ(a,b);}
function A1M(a){return B(497);}
function ARj(a){B3();return BfH.c3;}
function GB(){var a=this;Fw.call(a);a.go=null;a.hF=null;a.j5=null;a.j7=null;a.j6=null;a.j8=null;}
function Bg1(a,b){var c=new GB();Pz(c,a,b);return c;}
function Pz(a,b,c){var d,e;a.go=BK(0,0);BH(a.go,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BG(a.go,0.0,18-b|0,(-6.0));a.hF=BK(28,8);BH(a.hF,(-5.0),(-10.0),(-7.0),10,16,8,0.0);BG(a.hF,0.0,17-b|0,2.0);a.j5=BK(0,16);BH(a.j5,(-2.0),0.0,(-2.0),4,b,4,0.0);d=a.j5;e=24-b|0;BG(d,(-3.0),e,7.0);a.j7=BK(0,16);BH(a.j7,(-2.0),0.0,(-2.0),4,b,4,0.0);BG(a.j7,3.0,e,7.0);a.j6=BK(0,16);BH(a.j6,(-2.0),0.0,(-2.0),4,b,4,0.0);BG(a.j6,(-3.0),e,(-5.0));a.j8=BK(0,16);BH(a.j8,(-2.0),0.0,(-2.0),4,b,4,0.0);BG(a.j8,3.0,e,(-5.0));}
function AUS(a,b,c,d,e,f,g){AGp(a,b,c,d,e,f,1.0);B8(a.go,1.0);B8(a.hF,1.0);B8(a.j5,1.0);B8(a.j7,1.0);B8(a.j6,1.0);B8(a.j8,1.0);}
function AGp(a,b,c,d,e,f,g){var h;a.go.cd=e/57.2957763671875;a.go.b8=f/57.2957763671875;a.hF.b8=1.5707963705062866;h=a.j5;b=b*0.6661999821662903;h.b8=Bp(b)*1.399999976158142*c;h=a.j7;d=b+3.1415927410125732;h.b8=Bp(d)*1.399999976158142*c;a.j6.b8=Bp(d)*1.399999976158142*c;a.j8.b8=Bp(b)*1.399999976158142*c;}
function Qw(){GB.call(this);}
function P$(){He.call(this);this.nz=0;}
function AXw(a){var b=new P$();AY7(b,a);return b;}
function AY7(a,b){O3(a,b);a.nz=0;a.hz=B(549);DD(a,0.8999999761581421,1.2999999523162842);}
function A4v(a,b,c){var d,e,f;a:{if(!a.nz&&b instanceof F8){a.nz=1;d=1+W(a.O,3)|0;e=0;while(true){if(e>=d)break a;L();f=Zk(a,BcZ.b,1,1.0);f.C=f.C+N(a.O)*0.05000000074505806;f.G=f.G+(N(a.O)-N(a.O))*0.10000000149011612;f.H=f.H+(N(a.O)-N(a.O))*0.10000000149011612;e=e+1|0;}}}return NR(a,b,c);}
function AZG(a,b){Gl(a,b);Gc(b,B(550),a.nz);}
function A2H(a,b){GQ(a,b);a.nz=Gb(b,B(550));}
function ATS(a){return B(498);}
function YK(){DV.call(this);}
function AKQ(a,b,c){var d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b;b=B(551);$p=1;case 1:AHK(a,b);if(I()){break _;}return !c&&!d.nz?1:0;default:F2();}}Dh().s(a,b,c,d,$p);}
function WX(){GB.call(this);}
function AAN(){GB.call(this);}
function A_h(){var a=new AAN();A0O(a);return a;}
function A0O(a){Pz(a,12,0.0);a.go=BK(0,0);BH(a.go,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BG(a.go,0.0,6.0,(-8.0));a.hF=BK(28,8);BH(a.hF,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BG(a.hF,0.0,5.0,2.0);a.j5=BK(0,16);BH(a.j5,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j5,(-3.0),12.0,7.0);a.j7=BK(0,16);BH(a.j7,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j7,3.0,12.0,7.0);a.j6=BK(0,16);BH(a.j6,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j6,(-3.0),12.0,(-5.0));a.j8=BK(0,16);BH(a.j8,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j8,3.0,12.0,(-5.0));}
function Wm(){var a=this;DP.call(a);a.kD=0;a.yQ=0;a.wr=0;a.jn=0;}
function A4U(a){var b=new Wm();A15(b,a);return b;}
function A15(a,b){Iz(a,b);a.wr=30;a.jn=(-1);a.hz=B(552);}
function A77(a,b){Gl(a,b);}
function AZ6(a,b){GQ(a,b);}
function AWT(a){return B(499);}
function A6f(a){a.yQ=a.kD;if(a.kD>0&&a.jn<0)a.kD=a.kD-1|0;if(a.jn>=0)a.jn=2;AHq(a);if(a.jn!=1)a.jn=(-1);}
function A4n(a,b,c){a:{if(!(a.jn<=0&&c<3.0)){if(a.jn<=0)break a;if(c>=7.0)break a;}a.jn=1;a.kD=a.kD+1|0;if(a.kD==a.wr){To(a.A,a,a.f,a.j,a.g,3.0);CN(a);}a.ql=1;}}
function AAf(a,b){return (a.yQ+(a.kD-a.yQ|0)*b)/(a.wr-2|0);}
function A5_(a){B3();return Bfg.c3;}
function ZW(){DV.call(this);}
function A2L(a,b,c){var d,e;d=AAf(b,c);c=1.0+Bv(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;d=d*d;d=d*d;e=(1.0+d*0.4000000059604645)*c;C7(e,(1.0+d*0.10000000149011612)/c,e);}
function AWj(a,b,c,d){var e,f;e=AAf(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function Yf(){DP.call(this);}
function AXs(a){var b=new Yf();AYl(b,a);return b;}
function AYl(a,b){Iz(a,b);a.hz=B(553);}
function A1I(a){var b;if(a.A.eg>7){b=EC(a,1.0);if(b>0.5&&Mf(a.A,a.f|0,a.j|0,a.g|0)&&N(a.O)*30.0<(b-0.4000000059604645)*2.0)a.dk=300;}Yv(a);}
function A2a(a,b,c){var d,e,f,g,h;if(c<10.0){d=b.f-a.f;e=b.g-a.g;if(!a.jc){f=AZ_(a.A,a);f.j=f.j+1.0;g=b.j-0.20000000298023224-f.j;h=B$(d*d+e*e)*0.20000000298023224;De(a.A,f);Zp(f,d,g+h,e,0.6000000238418579,12.0);a.jc=30;}a.I=GL(e,d)*180.0/3.1415927410125732-90.0;a.ql=1;}}
function AQ5(a,b){Gl(a,b);}
function ATg(a,b){GQ(a,b);}
function ATH(a){return B(500);}
function ATZ(a){B3();return BeT.c3;}
function Jv(){JV.call(this);}
function ATy(a,b,c,d,e,f,g){var h;ABt(a,b,c,d,e,f,g);b=Bv(0.0);f=Bv(0.0);a.dT.bY=0.0;a.dI.bY=0.0;h=a.dT;c=0.10000000149011612-b*0.6000000238418579;h.cd= -c;a.dI.cd=c;a.dT.b8=(-1.5707963705062866);a.dI.b8=(-1.5707963705062866);h=a.dT;c=h.b8;b=b*1.2000000476837158-f*0.4000000059604645;h.b8=c-b;h=a.dI;h.b8=h.b8-b;h=a.dT;b=h.bY;c=d*0.09000000357627869;h.bY=b+Bp(c)*0.05000000074505806+0.05000000074505806;h=a.dI;h.bY=h.bY-(Bp(c)*0.05000000074505806+0.05000000074505806);h=a.dT;b=h.b8;c=d*0.06700000166893005;h.b8=b
+Bv(c)*0.05000000074505806;h=a.dI;h.b8=h.b8-Bv(c)*0.05000000074505806;}
function UT(){Jv.call(this);}
function SP(){DP.call(this);}
function AYi(a){var b=new SP();ASD(b,a);return b;}
function ASD(a,b){Iz(a,b);a.hz=B(504);a.lR=0.5;a.tX=5;}
function A5i(a){var b;if(a.A.eg>7){b=EC(a,1.0);if(b>0.5&&Mf(a.A,a.f|0,a.j|0,a.g|0)&&N(a.O)*30.0<(b-0.4000000059604645)*2.0)a.dk=300;}Yv(a);}
function AX1(a){return B(502);}
function AQa(a){B3();return Bff.c3;}
function PT(){DP.call(this);}
function A6W(a,b,c,d){return DT(a.A,b,c,d)-0.5;}
function A8x(a){return B(503);}
function YW(){DV.call(this);this.r4=0.0;}
function APG(a,b,c){C7(a.r4,a.r4,a.r4);}
function SC(){D_.call(this);}
function AIy(a,b,c,d,e,f,g){Ca();Bj(c-b.ec,d-b.eb,e-b.ea);BO();AKi(b.Y);BO();BS();}
function PS(){var a=this;DE.call(a);a.rv=0;a.fn=0;a.nl=0;a.rj=0;a.mK=0;a.dm=null;}
function AUb(a){var b=new PS();AWg(b,a);return b;}
function AWg(a,b){GR(a,b);a.rv=0;a.fn=0;a.dP=0.0;DD(a,0.5,0.5);}
function N$(a,b){var c,d,e,f,g,h,i,j,k,l,m;a.fn=b;c=b*90|0;a.I=c;a.bN=c;c=a.dm.ge;d=a.dm.nK;e=a.dm.ge;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;f=d/32.0;e=e/32.0;g=a.nl+0.5;h=a.rj+0.5;i=a.mK+0.5;if(!b)i=i-0.5625;j=Bw(b,1);if(!j)g=g-0.5625;k=Bw(b,2);if(!k)i=i+0.5625;l=Bw(b,3);if(!l)g=g+0.5625;if(!b)g=g-KN(a.dm.ge);if(!j)i=i+KN(a.dm.ge);if(!k)g=g+KN(a.dm.ge);if(!l)i=i-KN(a.dm.ge);d=h+KN(a.dm.nK);D0(a,g,d,i);a.Y=GM(g-c,d-f,i-e,g+c,d+f,i+e);m=a.Y;c=m.bg;d=m.bc;e=m.bf;f=m.bv;g=m.bs;h=m.bw;a.Y=GM(c,d,e,f-0.0062500000931322575,
g-0.0062500000931322575,h-0.0062500000931322575);}
function KN(b){return b==32?0.5:b!=64?0.0:0.5;}
function ARI(a){var b,c,d,e,f,g,h,i;b=a.rv;a.rv=b+1|0;if(b==100&&!Pd(a)){a.rv=0;CN(a);c=a.A;d=new Go;e=a.A;f=a.f;g=a.j;h=a.g;i=new C9;B3();Ie(i,BfJ);K2(d,e,f,g,h,i);De(c,d);}}
function Pd(a){var b,c,d,e,f,g,h,i;if(Hv(a.A,a.Y).q>0)return 0;b=a.dm.ge/16|0;c=a.dm.nK/16|0;d=a.nl;e=a.mK;if(!a.fn)d=a.f-a.dm.ge/32.0|0;if(a.fn==1)e=a.g-a.dm.ge/32.0|0;if(a.fn==2)d=a.f-a.dm.ge/32.0|0;if(a.fn==3)e=a.g-a.dm.ge/32.0|0;f=a.j-a.dm.nK/32.0|0;g=0;a:while(true){if(g>=b){h=Ht(a.A.dl,a,a.Y);i=0;while(i<h.q){if(Be(h,i) instanceof PS)return 0;i=i+1|0;}return 1;}i=0;while(i<c){if(!(a.fn&&a.fn!=2?CR(a.A,a.nl,f+i|0,e+g|0):CR(a.A,d+g|0,f+i|0,a.mK)).iw())break a;i=i+1|0;}g=g+1|0;}return 0;}
function A2C(a){return 1;}
function A3y(a,b,c){var d,e,f,g,h,i;CN(a);d=a.A;b=new Go;e=a.A;f=a.f;g=a.j;h=a.g;i=new C9;B3();Ie(i,BfJ);K2(b,e,f,g,h,i);De(d,b);return 1;}
function A78(a,b){DW(b,B(554),a.fn<<24>>24);HM(b,B(555),a.dm.u5);E1(b,B(556),a.nl);E1(b,B(557),a.rj);E1(b,B(558),a.mK);}
function A1J(a){return B(506);}
function AWE(a,b){var c,d,e,f,g;a.fn=EW(b,B(554));a.nl=DK(b,B(556));a.rj=DK(b,B(557));a.mK=DK(b,B(558));c=Fg(b,B(555));d=Xo().data;e=d.length;f=0;while(f<e){g=d[f];if(BW(g.u5,c))a.dm=g;f=f+1|0;}if(a.dm===null)a.dm=Bg2;N$(a,a.fn);}
function SS(){D_.call(this);this.G1=null;}
function AMc(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f
=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;Ca();Bj(c,d,e);Bs(f,0.0,1.0,0.0);Y(2977);b=B(559);$p=1;case 1:AHK(a,b);if(I()){break _;}i=h.dm;C7(0.0625,0.0625,0.0625);j=i.Db;k=i.Da;l=i.nK;m=i.ge;n= -m/2.0;o= -l/2.0;p=0;q=m/16|0;r=l/16|0;m=k+m|0;s=j+l|0;while(p<q){t=0;while(t<r){u=(p+1|0)<<4;v=n+u;w=p<<4;x=n+w;y=t+1|0;z=y<<4;ba=o+z;l=t<<4;bb=o+l;bc=(v+x)/2.0;bd=(ba+bb)/2.0;be=h.f|0;bf=h.j+bd/16.0|0;bg=h.g|0;if(!h.fn)be=h.f+bc/16.0|0;if(h.fn==1)bg=h.g-bc/16.0|0;if(h.fn
==2)be=h.f-bc/16.0|0;if(h.fn==3)bg=h.g+bc/16.0|0;bh=DT(a.hK.nb,be,bf,bg);Mi(bh,bh,bh);c=(m-w|0)/256.0;bi=(m-u|0)/256.0;d=(s-l|0)/256.0;bc=(s-z|0)/256.0;BE();bj=Bdg;Bx(bj);B1(bj,0.0,0.0,(-1.0));bk=v;bl=bb;bm=bi;bn=d;G(bj,bk,bl,(-0.5),bm,bn);bo=x;bp=c;G(bj,bo,bl,(-0.5),bp,bn);bq=ba;bn=bc;G(bj,bo,bq,(-0.5),bp,bn);G(bj,bk,bq,(-0.5),bm,bn);B1(bj,0.0,0.0,1.0);G(bj,bk,bq,0.5,0.75,0.0);G(bj,bo,bq,0.5,0.8125,0.0);G(bj,bo,bl,0.5,0.8125,0.0625);G(bj,bk,bl,0.5,0.75,0.0625);B1(bj,0.0,(-1.0),0.0);G(bj,bk,bq,(-0.5),0.75,0.001953125);G(bj,
bo,bq,(-0.5),0.8125,0.001953125);G(bj,bo,bq,0.5,0.8125,0.001953125);G(bj,bk,bq,0.5,0.75,0.001953125);B1(bj,0.0,1.0,0.0);G(bj,bk,bl,0.5,0.75,0.001953125);G(bj,bo,bl,0.5,0.8125,0.001953125);G(bj,bo,bl,(-0.5),0.8125,0.001953125);G(bj,bk,bl,(-0.5),0.75,0.001953125);B1(bj,(-1.0),0.0,0.0);G(bj,bk,bq,0.5,0.751953125,0.0);G(bj,bk,bl,0.5,0.751953125,0.0625);G(bj,bk,bl,(-0.5),0.751953125,0.0625);G(bj,bk,bq,(-0.5),0.751953125,0.0);B1(bj,1.0,0.0,0.0);G(bj,bo,bq,(-0.5),0.751953125,0.0);G(bj,bo,bl,(-0.5),0.751953125,0.0625);G(bj,
bo,bl,0.5,0.751953125,0.0625);G(bj,bo,bq,0.5,0.751953125,0.0);Bt(bj);t=y;}p=p+1|0;}Bc(2977);BS();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,$p);}
function M1(){var a=this;DE.call(a);a.on=0;a.p2=0;a.o4=0;a.sY=0;a.nB=0;a.kH=0;a.wL=null;a.px=0;a.mi=0;}
function AZ_(a,b){var c=new M1();ATV(c,a,b);return c;}
function ATV(a,b,c){GR(a,b);a.on=(-1);a.p2=(-1);a.o4=(-1);a.sY=0;a.nB=0;a.kH=0;a.mi=0;a.wL=c;DD(a,0.5,0.5);Jy(a,c.f,c.j,c.g,c.I,c.X);a.f=a.f-Bp(a.I/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.g=a.g-Bv(a.I/180.0*3.1415927410125732)*0.1599999964237213;D0(a,a.f,a.j,a.g);a.dP=0.0;a.G= -Bv(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732);a.H=Bp(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732);a.C= -Bv(a.X/180.0*3.1415927410125732);Zp(a,a.G,a.C,a.H,1.5,1.0);}
function Zp(a,b,c,d,e,f){var g,h,i,j;g=B$(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;h=b;i=HH(a.O)*0.007499999832361937;j=f;b=h+i*j;c=c+HH(a.O)*0.007499999832361937*j;d=d+HH(a.O)*0.007499999832361937*j;b=b*e;c=c*e;d=d*e;a.G=b;a.C=c;a.H=d;e=B$(b*b+d*d);b=GL(b,d)*180.0/3.1415927410125732;a.I=b;a.bN=b;b=GL(c,e)*180.0/3.1415927410125732;a.X=b;a.b1=b;a.px=0;}
function AZP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;N4(a);if(a.kH>0)a.kH=a.kH-1|0;if(!a.nB)a.mi=a.mi+1|0;else{if(O(a.A,a.on,a.p2,a.o4)==a.sY){a.px=a.px+1|0;if(a.px==1200)CN(a);return;}a.nB=0;a.G=a.G*N(a.O)*0.20000000298023224;a.C=a.C*N(a.O)*0.20000000298023224;a.H=a.H*N(a.O)*0.20000000298023224;a.px=0;a.mi=0;}b=BF(a.f,a.j,a.g);c=BF(a.f+a.G,a.j+a.C,a.g+a.H);d=E2(a.A,b,c);b=BF(a.f,a.j,a.g);c=BF(a.f+a.G,a.j+a.C,a.g+a.H);if(d!==null)c=BF(d.d5.U,d.d5.R,d.d5.S);e=null;f=Ht(a.A.dl,a,FL(K4(a.Y,a.G,a.C,a.H),1.0,1.0,1.0));g
=0.0;h=0;while(h<CE(f)){i=Be(f,h);if(i.qh()&&!(i===a.wL&&a.mi<5)){j=Qi(FL(i.Y,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,c);if(j!==null){k=C$(b,j.d5);if(!(k>=g&&g!==0.0)){e=i;g=k;}}}h=h+1|0;}if(e!==null)d=ATl(e);if(d!==null){if(d.tO===null){a.on=d.c6;a.p2=d.c7;a.o4=d.c8;a.sY=O(a.A,a.on,a.p2,a.o4);a.G=d.d5.U-a.f;a.C=d.d5.R-a.j;a.H=d.d5.S-a.g;l=B$(a.G*a.G+a.C*a.C+a.H*a.H);a.f=a.f-a.G/l*0.05000000074505806;a.j=a.j-a.C/l*0.05000000074505806;a.g=a.g-a.H/l*0.05000000074505806;a.nB=1;a.kH=7;}else if
(d.tO.eY(a,4))CN(a);else{a.G=a.G*(-0.10000000149011612);a.C=a.C*(-0.10000000149011612);a.H=a.H*(-0.10000000149011612);a.I=a.I+180.0;a.bN=a.bN+180.0;a.mi=0;}}a.f=a.f+a.G;a.j=a.j+a.C;a.g=a.g+a.H;l=B$(a.G*a.G+a.H*a.H);a.I=GL(a.G,a.H)*180.0/3.1415927410125732;a.X=GL(a.C,l)*180.0/3.1415927410125732;while(a.X-a.b1<(-180.0)){a.b1=a.b1-360.0;}while(a.X-a.b1>=180.0){a.b1=a.b1+360.0;}while(a.I-a.bN<(-180.0)){a.bN=a.bN-360.0;}while(a.I-a.bN>=180.0){a.bN=a.bN+360.0;}a.X=a.b1+(a.X-a.b1)*0.20000000298023224;a.I=a.bN+(a.I
-a.bN)*0.20000000298023224;m=0.9900000095367432;if(Gr(a)){n=0;while(n<4){BY(a.A,B(367),a.f-a.G*0.25,a.j-a.C*0.25,a.g-a.H*0.25,a.G,a.C,a.H);n=n+1|0;}m=0.800000011920929;}a.G=a.G*m;a.C=a.C*m;a.H=a.H*m;a.C=a.C-0.029999999329447746;D0(a,a.f,a.j,a.g);}
function A4m(a,b){CH(b,B(560),a.on<<16>>16);CH(b,B(561),a.p2<<16>>16);CH(b,B(562),a.o4<<16>>16);DW(b,B(563),a.sY<<24>>24);DW(b,B(564),a.kH<<24>>24);DW(b,B(565),(!a.nB?0:1)<<24>>24);}
function A5K(a){return B(566);}
function A7O(a,b){var c,d;if(a.nB&&a.wL===b&&a.kH<=0){c=b.F;d=new C9;B3();MT(d,BeT.c3,1);if(XN(c,d)){Uk(b,a);CN(a);}}}
function AT6(a){return 0.0;}
function Ve(){D_.call(this);}
function ALl(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;b=B(567);$p=1;case 1:AHK(a,b);if(I()){break _;}Ca();Bj(c,d,e);Bs(h.bN+(h.I-h.bN)*g-90.0,0.0,1.0,0.0);Bs(h.b1+(h.X-h.b1)*g,0.0,0.0,1.0);BE();i=Bdg;Y(2977);c=h.kH-g;if(c>0.0)Bs( -Bv(c*3.0)*c,0.0,0.0,1.0);Bs(45.0,1.0,0.0,0.0);C7(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bj((-4.0),0.0,0.0);IT(0.05624999850988388,
0.0,0.0);Bx(i);G(i,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(i,(-7.0),(-2.0),2.0,0.15625,0.15625);G(i,(-7.0),2.0,2.0,0.15625,0.3125);G(i,(-7.0),2.0,(-2.0),0.0,0.3125);Bt(i);IT((-0.05624999850988388),0.0,0.0);Bx(i);G(i,(-7.0),2.0,(-2.0),0.0,0.15625);G(i,(-7.0),2.0,2.0,0.15625,0.15625);G(i,(-7.0),(-2.0),2.0,0.15625,0.3125);G(i,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bt(i);j=0;while(j<4){Bs(90.0,1.0,0.0,0.0);IT(0.0,0.0,0.05624999850988388);Bx(i);G(i,(-8.0),(-2.0),0.0,0.0,0.0);G(i,8.0,(-2.0),0.0,0.5,0.0);G(i,8.0,2.0,0.0,0.5,
0.15625);G(i,(-8.0),2.0,0.0,0.0,0.15625);Bt(i);j=j+1|0;}Bc(2977);BO();BS();BO();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Wx(){DE.call(this);this.gm=0;}
function ARn(a,b,c,d){var e=new Wx();A5E(e,a,b,c,d);return e;}
function A5E(a,b,c,d,e){var f;GR(a,b);a.gm=0;a.tj=1;DD(a,0.9800000190734863,0.9800000190734863);a.dP=a.gB/2.0;D0(a,c,d,e);f=Cc()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.G= -Bv(f)*0.019999999552965164;a.C=0.20000000298023224;a.H= -Bp(f)*0.019999999552965164;a.pl=0;a.gm=80;a.cu=c;a.cy=d;a.cv=e;}
function A3B(a){return a.hN?0:1;}
function APr(a){var b;a.cu=a.f;a.cy=a.j;a.cv=a.g;a.C=a.C-0.03999999910593033;Eq(a,a.G,a.C,a.H);a.G=a.G*0.9800000190734863;a.C=a.C*0.9800000190734863;a.H=a.H*0.9800000190734863;if(a.dF){a.G=a.G*0.699999988079071;a.H=a.H*0.699999988079071;a.C=a.C*(-0.5);}b=a.gm;a.gm=b-1|0;if(b<=0){CN(a);To(a.A,null,a.f,a.j,a.g,4.0);}else BY(a.A,B(273),a.f,a.j+0.5,a.g,0.0,0.0,0.0);}
function A0C(a,b){DW(b,B(568),a.gm<<24>>24);}
function ATU(a){return B(569);}
function ASU(a){return 0.0;}
function Ur(){D_.call(this);this.xN=null;}
function AJ6(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;Ca();Bj(c,d,e);if(h.gm-g+1.0<10.0){c=1.0-(h.gm-g+1.0)/10.0;if(c<0.0)c=0.0;if(c>1.0)c=1.0;c=c*c;c=1.0+c*c*0.30000001192092896;C7(c,c,c);}c=(1.0-(h.gm-g+1.0)/100.0)*0.800000011920929;b=B(205);$p=1;case 1:AHK(a,b);if(I()){break _;}b=a.xN;L();IU(b,Bc7);if(!((h.gm/5|0)%2|0)){Bc(3553);Bc(2896);Y(3042);Dy(770,772);BJ(1.0,1.0,1.0,c);IU(a.xN,
Bc7);BJ(1.0,1.0,1.0,1.0);Bc(3042);Y(2896);Y(3553);}BS();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function Uh(){Dn.call(this);}
function Uf(){Fh.call(this);}
function Ui(){Fv.call(this);}
function ACl(){var a=this;Fw.call(a);a.nd=null;a.sU=null;a.t0=null;a.jU=null;a.jV=null;a.jS=null;a.jT=null;a.jQ=null;a.jR=null;a.jW=null;a.jX=null;}
function AO4(){var a=new ACl();A1S(a);return a;}
function A1S(a){a.nd=BK(32,4);BH(a.nd,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BG(a.nd,0.0,15.0,(-3.0));a.sU=BK(0,0);BH(a.sU,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BG(a.sU,0.0,15.0,0.0);a.t0=BK(0,12);BH(a.t0,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BG(a.t0,0.0,15.0,9.0);a.jU=BK(18,0);BH(a.jU,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jU,(-4.0),15.0,2.0);a.jV=BK(18,0);BH(a.jV,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jV,4.0,15.0,2.0);a.jS=BK(18,0);BH(a.jS,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jS,(-4.0),15.0,1.0);a.jT=BK(18,0);BH(a.jT,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BG(a.jT,4.0,15.0,1.0);a.jQ=BK(18,0);BH(a.jQ,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jQ,(-4.0),15.0,0.0);a.jR=BK(18,0);BH(a.jR,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jR,4.0,15.0,0.0);a.jW=BK(18,0);BH(a.jW,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jW,(-4.0),15.0,(-1.0));a.jX=BK(18,0);BH(a.jX,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jX,4.0,15.0,(-1.0));}
function AS9(a,b,c,d,e,f,g){ADa(a,b,c,d,e,f,1.0);B8(a.nd,1.0);B8(a.sU,1.0);B8(a.t0,1.0);B8(a.jU,1.0);B8(a.jV,1.0);B8(a.jS,1.0);B8(a.jT,1.0);B8(a.jQ,1.0);B8(a.jR,1.0);B8(a.jW,1.0);B8(a.jX,1.0);}
function ADa(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.nd.cd=e/57.2957763671875;a.nd.b8=f/57.2957763671875;a.jU.bY=(-0.7853981852531433);a.jV.bY=0.7853981852531433;a.jS.bY=(-0.5811946392059326);a.jT.bY=0.5811946392059326;a.jQ.bY=(-0.5811946392059326);a.jR.bY=0.5811946392059326;a.jW.bY=(-0.7853981852531433);a.jX.bY=0.7853981852531433;a.jU.cd=0.7853981852531433;a.jV.cd=(-0.7853981852531433);a.jS.cd=0.39269909262657166;a.jT.cd=(-0.39269909262657166);a.jQ.cd=(-0.39269909262657166);a.jR.cd=0.39269909262657166;a.jW.cd=(-0.7853981852531433);a.jX.cd
=0.7853981852531433;b=b*0.6661999821662903;e=b*2.0;g= -(Bp(e)*0.4000000059604645)*c;h= -(Bp(e+3.1415927410125732)*0.4000000059604645)*c;i= -(Bp(e+1.5707963705062866)*0.4000000059604645)*c;d= -(Bp(e+4.71238899230957)*0.4000000059604645)*c;j=I3(Bv(b)*0.4000000059604645)*c;k=I3(Bv(b+3.1415927410125732)*0.4000000059604645)*c;l=I3(Bv(b+1.5707963705062866)*0.4000000059604645)*c;b=I3(Bv(b+4.71238899230957)*0.4000000059604645)*c;m=a.jU;m.cd=m.cd+g;m=a.jV;m.cd=m.cd-g;m=a.jS;m.cd=m.cd+h;m=a.jT;m.cd=m.cd-h;m=a.jQ;m.cd
=m.cd+i;m=a.jR;m.cd=m.cd-i;m=a.jW;m.cd=m.cd+d;m=a.jX;m.cd=m.cd-d;m=a.jU;m.bY=m.bY+j;m=a.jV;m.bY=m.bY-j;m=a.jS;m.bY=m.bY+k;m=a.jT;m.bY=m.bY-k;m=a.jQ;m.bY=m.bY+l;m=a.jR;m.bY=m.bY-l;m=a.jW;m.bY=m.bY+b;m=a.jX;m.bY=m.bY-b;}
function AAz(){var a=this;Fw.call(a);a.nU=null;a.w5=null;a.s_=null;a.oj=null;a.oi=null;a.ol=null;a.ok=null;}
function A$b(){var a=new AAz();AT9(a);return a;}
function AT9(a){a.nU=BK(0,0);BH(a.nU,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BG(a.nU,0.0,4.0,0.0);a.w5=BK(32,0);BH(a.w5,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BG(a.w5,0.0,4.0,0.0);a.s_=BK(16,16);BH(a.s_,(-4.0),0.0,(-2.0),8,12,4,0.0);BG(a.s_,0.0,4.0,0.0);a.oj=BK(0,16);BH(a.oj,(-2.0),0.0,(-2.0),4,6,4,0.0);BG(a.oj,(-2.0),16.0,4.0);a.oi=BK(0,16);BH(a.oi,(-2.0),0.0,(-2.0),4,6,4,0.0);BG(a.oi,2.0,16.0,4.0);a.ol=BK(0,16);BH(a.ol,(-2.0),0.0,(-2.0),4,6,4,0.0);BG(a.ol,(-2.0),16.0,(-4.0));a.ok=BK(0,16);BH(a.ok,(-2.0),0.0,(-2.0),4,6,4,
0.0);BG(a.ok,2.0,16.0,(-4.0));}
function A4P(a,b,c,d,e,f,g){AL9(a,b,c,d,e,f,1.0);B8(a.nU,1.0);B8(a.s_,1.0);B8(a.oj,1.0);B8(a.oi,1.0);B8(a.ol,1.0);B8(a.ok,1.0);}
function AL9(a,b,c,d,e,f,g){var h;a.nU.cd=e/57.2957763671875;a.nU.b8=f/57.2957763671875;h=a.oj;b=b*0.6661999821662903;h.b8=Bp(b)*1.399999976158142*c;h=a.oi;d=b+3.1415927410125732;h.b8=Bp(d)*1.399999976158142*c;a.ol.b8=Bp(d)*1.399999976158142*c;a.ok.b8=Bp(b)*1.399999976158142*c;}
function X3(){G6.call(this);}
function AQY(a){Ph(a);return a.jI.io;}
function MM(){PB.call(this);}
function AGt(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(B4(BT(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(B4(BT(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&DI(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=B4(BT(b)+k|0,e.length);WK(b,d,k,g-k|0);f=0;}if(!DI(c)){l=!DI(b)&&f>=g?Bgr:Bgq;break a;}k=B4(BT(c),i.length);m=new YV;m.Bs=b;m.Fu=c;l=AOd(a,d,f,g,h,0,k,m);f=m.wB;if(l===null&&0==m.qZ)l=Bgr;AOG(c,h,0,m.qZ);if(l!==null)break;}}Dz(b,b.L-(g-f|0)|0);return l;}
function Tt(){MM.call(this);}
function AOd(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(O6(h))break a;i=Bgr;break a;}n=k+1|0;k=j[k];if(!Ij(a,k)){c=n+(-2)|0;i=FD(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(O6(h))break a;i=Bgr;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Ij(a,m))break b;if(!Ij(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(PF(p)){c=k+(-3)|0;i=FD(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=FD(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(O6(h))break a;i=Bgr;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AIF(h,2))break a;i=Bgq;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Ij(a,m))break c;if(!Ij(a,o))break c;if(!Ij(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=JJ(q);m=c+1|0;j[c]=Jg(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=FD(1);break a;}c=k+(-3)|0;i=FD(1);}h.wB=
c;h.qZ=f;return i;}
function Ij(a,b){return (b&192)!=128?0:1;}
function Nm(){C.call(this);}
var Bg3=null;var Bg4=null;function P6(b){var c;c=0;while(true){if(c>=Bg3.data.length)return (-1);if(b==Bg3.data[c])break;c=c+1|0;}return c;}
function AMp(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Bg3=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Bg4=b;}
function D$(){var a=this;Cq.call(a);a.hy=0;a.JZ=null;}
function AGW(a,b){var c=new D$();ARr(c,a,b);return c;}
function ARr(a,b,c){a.JZ=b;Z(a);a.hy=c;}
function AKP(){var a=this;C.call(a);a.KD=0;a.HV=0;a.I9=Long_ZERO;a.Ka=0;a.Cv=0;a.pT=null;a.zP=null;a.BF=null;a.K2=0;a.IP=Long_ZERO;a.HX=0;a.Jr=Long_ZERO;}
function A$X(){var a=new AKP();A5u(a);return a;}
function A5u(a){a.KD=0;a.HV=0;a.Cv=255;a.HX=0;a.Jr=Long_ZERO;}
function Qn(){C.call(this);this.mH=0;}
var Bg5=null;function ASy(){var a=new Qn();ABu(a);return a;}
function ABu(a){a.mH=0;}
function AYU(a,b,c,d){var e,f,g,h;e=a.mH^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bg5.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mH=e^(-1);}
function A26(a){a.mH=0;}
function A6C(a,b){a.mH=Long_and(b,new Long(4294967295, 0)).lo;}
function A4j(a){return Long_and(Long_fromInt(a.mH),new Long(4294967295, 0));}
function AF2(){var b,c,d;Bg5=null;Bg5=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bg5.data[b]=d;b=b+1|0;}}
function AJv(){var a=this;JN.call(a);a.b7=null;a.e3=0;a.oz=0;a.iT=0;}
function ACc(){var a=new AJv();AWZ(a);return a;}
function AWZ(a){a.b7=H(C9,3);a.e3=0;a.oz=0;a.iT=0;}
function AVc(a,b){return a.b7.data[b];}
function AYf(a,b,c){var d;if(a.b7.data[b]===null)return null;if(a.b7.data[b].s<=c){d=a.b7.data[b];a.b7.data[b]=null;return d;}d=FC(a.b7.data[b],c);if(!a.b7.data[b].s)a.b7.data[b]=null;return d;}
function AUe(a,b,c){a.b7.data[b]=c;if(c!==null&&c.s>64)c.s=64;}
function A27(a,b){var c,d,e,f;c=Ee(b,B(570));a.b7=H(C9,a.b7.data.length);d=0;while(d<GV(c)){e=CS(c,d);f=EW(e,B(416));if(f>=0&&f<a.b7.data.length)a.b7.data[f]=PV(e);d=d+1|0;}a.e3=Ck(b,B(571));a.iT=Ck(b,B(572));a.oz=AH6(a.b7.data[1]);b=Dr();c=new R;T(c);Cm(b,S(Bd(E(Bd(E(c,B(573)),a.e3),B(30)),a.oz)));}
function ARO(a,b){var c,d,e;CH(b,B(571),a.e3<<16>>16);CH(b,B(572),a.iT<<16>>16);HM(b,B(404),B(494));c=Gv();d=0;while(d<a.b7.data.length){if(a.b7.data[d]!==null){e=DH();DW(e,B(416),d<<24>>24);Ix(a.b7.data[d],e);EQ(c,e);}d=d+1|0;}Ff(b,B(570),c);}
function A4a(a){return 64;}
function AIG(a,b){return (a.iT*24|0)/200|0;}
function ABd(a,b){return (a.e3*12|0)/a.oz|0;}
function Ts(a){return a.e3<=0?0:1;}
function AO_(a){var b,c,d,e,f,g,h,i,j;b=a.e3<=0?0:1;if(a.e3>0)a.e3=a.e3-1|0;if(!a.e3&&PL(a)){c=AH6(a.b7.data[1]);a.e3=c;a.oz=c;if(a.e3>0&&a.b7.data[1]!==null){d=a.b7.data[1];d.s=d.s-1|0;if(!a.b7.data[1].s)a.b7.data[1]=null;}}if(Ts(a)&&PL(a)){a.iT=a.iT+1|0;if(a.iT==200){a.iT=0;if(PL(a)){e=AAF(BZ(a.b7.data[0]).c3);if(a.b7.data[2]===null)a.b7.data[2]=OE(e,1);else if(a.b7.data[2].bX==e){d=a.b7.data[2];d.s=d.s+1|0;}d=a.b7.data[0];d.s=d.s-1|0;if(a.b7.data[0].s<=0)a.b7.data[0]=null;}}}else a.iT=0;if(b!=(a.e3<=0?0:
1)){c=a.e3<=0?0:1;f=a.CX;g=a.FH;h=a.DG;d=a.An;i=Cr(d,h,g,f);j=FZ(d,h,g,f);if(!c){L();By(d,h,g,f,Beh.b);}else{L();By(d,h,g,f,Bei.b);}DL(d,h,g,f,i);KV(d,h,g,f,j);}}
function PL(a){var b,c;if(a.b7.data[0]===null)return 0;b=AAF(BZ(a.b7.data[0]).c3);if(b<0)b=0;else if(a.b7.data[2]===null)b=1;else if(a.b7.data[2].bX!=b)b=0;else if(a.b7.data[2].s<64)b=1;else{c=a.b7.data[2].s;B3();b=c>=Bcm.data[b].gg?0:1;}return b;}
function AAF(b){L();if(b==Bc2.b){B3();b=BeU.c3;}else if(b==Bc3.b){B3();b=BeV.c3;}else if(b==Bec.b){B3();b=BeK.c3;}else if(b==BcI.b)b=BcB.b;else{B3();b=b==BfH.c3?BfI.c3:b!=Bcv.b?(-1):Bct.b;}return b;}
function AH6(b){var c,d;if(b===null)return 0;a:{c=BZ(b).c3;if(c<256){L();if(Bcn.data[c].cm===Bel){d=300;break a;}}B3();if(c==Be9.c3)d=100;else if(c!=BeJ.c3)d=0;else d=1600;}return d;}
function N9(){EF.call(this);}
function YD(){N9.call(this);}
function AL4(){EF.call(this);}
function A1w(a){var b=new AL4();AUM(b,a);return b;}
function AUM(a,b){a.rQ=1;a.so=1;a.jM=b;}
function ZK(){C.call(this);}
var Bg6=null;function AEI(){if(Bg6===null)Bg6=Zy(B(574));return Bg6;}
function AGN(){JN.call(this);this.ez=null;}
function AFE(){var a=new AGN();A13(a);return a;}
function A13(a){a.ez=H(C9,36);}
function A6Z(a){return 27;}
function AEU(a,b){return a.ez.data[b];}
function A2f(a,b,c){var d;if(a.ez.data[b]===null)return null;if(a.ez.data[b].s<=c){d=a.ez.data[b];a.ez.data[b]=null;return d;}d=FC(a.ez.data[b],c);if(!a.ez.data[b].s)a.ez.data[b]=null;return d;}
function A00(a,b,c){a.ez.data[b]=c;if(c!==null&&c.s>64)c.s=64;}
function AOU(a){return B(493);}
function AVU(a,b){var c,d,e,f;c=Ee(b,B(570));a.ez=H(C9,27);d=0;while(d<GV(c)){e=CS(c,d);f=EW(e,B(416))&255;if(f>=0&&f<a.ez.data.length)a.ez.data[f]=PV(e);d=d+1|0;}}
function A45(a,b){var c,d,e;HM(b,B(404),B(493));c=Gv();d=0;while(d<a.ez.data.length){if(a.ez.data[d]!==null){e=DH();DW(e,B(416),d<<24>>24);Ix(a.ez.data[d],e);EQ(c,e);}d=d+1|0;}Ff(b,B(570),c);}
function A2D(a){return 64;}
function ACL(){var a=this;CV.call(a);a.vn=null;a.DL=null;a.nI=null;}
function AFQ(a,b){var c=new ACL();A4I(c,a,b);return c;}
function A4I(a,b,c){Fp(a);a.DL=B(575);a.vn=b;a.nI=c;}
function AW4(a){var b;b=0;while(b<a.nI.AL){M(a.ba,A3X(b,((a.bq/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bM/6|0)+(24*(b>>1)|0)|0,XM(a.nI,b)));b=b+1|0;}M(a.ba,CL(100,(a.bq/2|0)-100|0,((a.bM/6|0)+120|0)+12|0,B(576)));M(a.ba,CL(200,(a.bq/2|0)-100|0,(a.bM/6|0)+168|0,B(577)));}
function AI9(a,b){var c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.fc){if(b.bC<100){Fb(a.nI,b.bC,1);b.eS=XM(a.nI,b.bC);}if(b.bC==100){c=a.x;d=new ZN;e=a.nI;Fp(d);d.Bu=B(578);d.kZ=(-1);d.Ae=a;d.jZ=e;$p=1;continue _;}if(b.bC==200){b=a.x;c=a.vn;$p=2;continue _;}}return;case 1:AOR(c,d);if(I()){break _;}if(b.bC!=200)return;b=a.x;c=a.vn;$p=2;case 2:AOR(b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function AOg(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}Eh(a.cK,a.DL,a.bq/2|0,20,16777215);$p=2;case 2:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function ACq(){var a=this;CV.call(a);a.Av=null;a.w8=null;a.yS=null;a.vy=null;a.v9=null;a.nA=0;a.n0=0;a.nZ=0;a.mq=0;}
function LQ(a){var b=new ACq();A1i(b,a);return b;}
function A1i(a,b){var c,d;Fp(a);c=H(BC,4);d=c.data;d[0]=B(579);d[1]=B(580);d[2]=B(581);d[3]=B(582);a.w8=c;c=H(BC,3);d=c.data;d[0]=B(583);d[1]=B(584);d[2]=B(585);a.yS=c;c=H(BC,3);d=c.data;d[0]=B(586);d[1]=B(351);d[2]=B(587);a.vy=c;c=H(BC,4);d=c.data;d[0]=B(351);d[1]=B(588);d[2]=B(589);d[3]=B(590);a.v9=c;a.nA=1;a.n0=0;a.nZ=1;a.mq=0;a.Av=b;}
function AVo(a){ES(a.ba);M(a.ba,CL(0,(a.bq/2|0)-100|0,a.bM/4|0,B(591)));M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+24|0,B(592)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+48|0,B(593)));M(a.ba,CL(3,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(594)));M(a.ba,CL(4,(a.bq/2|0)-100|0,((a.bM/4|0)+96|0)+12|0,B(595)));M(a.ba,CL(5,(a.bq/2|0)-100|0,((a.bM/4|0)+120|0)+12|0,B(596)));Lm(a);}
function Lm(a){var b,c;b=Be(a.ba,0);c=new R;T(c);b.eS=S(E(E(c,B(591)),a.w8.data[a.nA]));b=Be(a.ba,1);c=new R;T(c);b.eS=S(E(E(c,B(597)),a.yS.data[a.n0]));b=Be(a.ba,2);c=new R;T(c);b.eS=S(E(E(c,B(593)),a.vy.data[a.nZ]));b=Be(a.ba,3);c=new R;T(c);b.eS=S(E(E(c,B(594)),a.v9.data[a.mq]));}
function ALB(a,b){var c,d,e,f,g,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.bC!=5){if(b.bC==4){A_E=DH();try{$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);a.x.lC=a.x.bn+6000|0;b=a.x;d=a.nZ;e=a.n0;f=a.nA;g=a.mq;$p=3;continue _;}if(!b.bC)a.nA=(a.nA+1|0)%a.w8.data.length|0;else if(b.bC==1)a.n0=(a.n0+1|0)%a.yS.data.length|0;else if(b.bC==2)a.nZ=(a.nZ+1|0)%a.vy.data.length
|0;else if(b.bC==3)a.mq=(a.mq+1|0)%a.v9.data.length|0;Lm(a);return;}b=a.x;c=a.Av;$p=1;case 1:AOR(b,c);if(I()){break _;}Lm(a);return;case 2:a:{try{AER();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}a.x.lC=a.x.bn+6000|0;b=a.x;d=a.nZ;e=a.n0;f=a.nA;g=a.mq;$p=3;case 3:AMi(b,d,e,f,g);if(I()){break _;}b=a.x;c=null;$p=4;case 4:AOR(b,c);if(I()){break _;}Lm(a);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function AB9(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}Eh(a.cK,B(598),a.bq/2|0,40,16777215);$p=2;case 2:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function Np(){var a=this;CV.call(a);a.wt=null;a.kd=0;a.kK=0;a.pA=null;a.mJ=null;a.pL=null;a.r8=0;a.nt=null;}
function Jj(a){var b=new Np();O9(b,a);return b;}
function O9(a,b){Fp(a);a.kd=0;a.kK=0;a.pA=null;a.mJ=B(9);a.pL=B(599);a.r8=0;a.wt=b;}
function AF7(a){var b,c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nt===null)return;if(!Ow(Oq(a.nt),B(600))){b=new HT;c=new R;T(c);Zj(b,S(E(E(c,P0(a.nt)),B(600))));a.nt=b;}a.Fk(a.nt);a.nt=null;c=a.x;b=null;$p=1;case 1:AOR(c,b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,$p);}
function AG4(a){var b,c,d,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{a.mJ=B(601);b=A_l(B0(E(E(E(E(Cd(),B(602)),a.x.Ij),B(603)),a.x.gb.sN)));c=new Tj;d=new QM;b=AN6(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){d=$$je;}else{throw $$e;}}DA(d);a.mJ=B(604);a.kd=1;return;case 1:a:{b:{c:{try{$z=AK0(b);if(I()){break _;}b=$z;AAw(d,b);AJm(c,d);a.pA=AKN(AHn(c),B(605));if(a.pA.data.length<5)break c;a.Ga(a.pA);a.kK=1;}catch
($$e){$$je=Bh($$e);if($$je instanceof Cq){d=$$je;break b;}else{throw $$e;}}return;}try{a.mJ=a.pA.data[0];a.kd=1;break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){d=$$je;}else{throw $$e;}}}DA(d);a.mJ=B(604);a.kd=1;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function A0o(a,b){var c,d;c=0;while(c<5){d=b.data;Be(a.ba,c).fc=BW(d[c],B(267))?0:1;Be(a.ba,c).eS=d[c];Be(a.ba,c).jD=1;c=c+1|0;}Be(a.ba,5).jD=1;}
function AMZ(a){var b;VK(A$s(a));b=0;while(b<5){M(a.ba,CL(b,(a.bq/2|0)-100|0,(a.bM/6|0)+(b*24|0)|0,B(606)));Be(a.ba,b).jD=0;b=b+1|0;}M(a.ba,CL(5,(a.bq/2|0)-100|0,((a.bM/6|0)+120|0)+12|0,B(607)));M(a.ba,CL(6,(a.bq/2|0)-100|0,(a.bM/6|0)+168|0,B(596)));Be(a.ba,5).jD=0;}
function ABT(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.r8&&b.fc){if(a.kK&&b.bC<5){c=b.bC;$p=1;continue _;}b:{if(!a.kd){if(!a.kK)break b;if(b.bC!=5)break b;}a.r8=1;}if(a.kd)break a;if(a.kK&&b.bC==6)break a;}return;}b=a.x;d=a.wt;$p=2;continue _;case 1:a.Jc(c);if(I()){break _;}a:{if(!a.kd){if(!a.kK)break a;if(b.bC!=5)break a;}a.r8=1;}if(!a.kd&&!(a.kK&&b.bC==6))return;b=a.x;d=a.wt;$p=2;case 2:AOR(b,d);if(I()){break _;}return;default:
F2();}}Dh().s(a,b,c,d,$p);}
function AMA(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.x;d=null;$p=1;case 1:AOR(c,d);if(I()){break _;}d=a.x;$p=2;case 2:AEr(d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function ANu(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}Eh(a.cK,a.pL,a.bq/2|0,20,16777215);if(!a.kK)Eh(a.cK,a.mJ,a.bq/2|0,(a.bM/2|0)-4|0,16777215);$p=2;case 2:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function ATa(a,b){var c,$$je;a:{try{AI7(A9g(b));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}}
function Lg(){Np.call(this);}
function AUu(a){AMZ(a);Be(a.ba,5).eS=B(608);}
function A4X(a,b){var c,d;c=0;while(c<5){d=b.data;Be(a.ba,c).eS=d[c];Be(a.ba,c).jD=1;c=c+1|0;}Be(a.ba,5).jD=1;}
function AXh(a,b){var c,$$je;a:{try{AL5(A8Y(b));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}}
function ALI(a,b){var c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.x;d=new WH;e=Be(a.ba,b).eS;Fp(d);d.B0=B(609);d.rV=0;d.vN=a;d.GT=b;d.fg=e;if(BW(d.fg,B(267)))d.fg=B(9);$p=1;case 1:AOR(c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function CM(){var a=this;Fd.call(a);a.u5=null;a.ge=0;a.nK=0;a.Da=0;a.Db=0;}
var Bg2=null;var Bg7=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;var Bhc=null;var Bhd=null;var Bhe=null;var Bhf=null;var Bhg=null;var Bhh=null;var Bhi=null;var Bhj=null;var Bhk=null;var Bhl=null;var Bhm=null;var Bhn=null;function Dm(a,b,c,d,e,f,g){var h=new CM();AGB(h,a,b,c,d,e,f,g);return h;}
function Xo(){return Bhn.gF();}
function AGB(a,b,c,d,e,f,g,h){FK(a,b,c);a.u5=d;a.ge=e;a.nK=f;a.Da=g;a.Db=h;}
function ANb(){var b,c;Bg2=Dm(B(610),0,B(610),16,16,0,0);Bg7=Dm(B(611),1,B(611),16,16,16,0);Bg8=Dm(B(612),2,B(612),16,16,32,0);Bg9=Dm(B(613),3,B(613),16,16,48,0);Bg$=Dm(B(614),4,B(614),16,16,64,0);Bg_=Dm(B(615),5,B(615),16,16,80,0);Bha=Dm(B(616),6,B(616),16,16,96,0);Bhb=Dm(B(617),7,B(617),32,16,0,32);Bhc=Dm(B(618),8,B(618),32,16,32,32);Bhd=Dm(B(619),9,B(619),32,16,64,32);Bhe=Dm(B(620),10,B(620),32,16,96,32);Bhf=Dm(B(621),11,B(621),16,32,0,64);Bhg=Dm(B(622),12,B(622),32,32,0,128);Bhh=Dm(B(623),13,B(623),32,32,
32,128);Bhi=Dm(B(624),14,B(624),32,32,64,128);Bhj=Dm(B(625),15,B(625),32,32,96,128);Bhk=Dm(B(626),16,B(626),32,32,128,128);Bhl=Dm(B(627),17,B(627),64,32,0,96);Bhm=Dm(B(628),18,B(628),64,64,0,192);b=H(CM,19);c=b.data;c[0]=Bg2;c[1]=Bg7;c[2]=Bg8;c[3]=Bg9;c[4]=Bg$;c[5]=Bg_;c[6]=Bha;c[7]=Bhb;c[8]=Bhc;c[9]=Bhd;c[10]=Bhe;c[11]=Bhf;c[12]=Bhg;c[13]=Bhh;c[14]=Bhi;c[15]=Bhj;c[16]=Bhk;c[17]=Bhl;c[18]=Bhm;Bhn=b;}
function VZ(){var a=this;C.call(a);a.zR=null;a.El=null;a.v_=0;a.sf=0;}
function ACx(a){return DI(a.zR);}
function Pu(a,b){return BT(a.El)<b?0:1;}
function A2u(a,b){a.v_=b;}
function A8H(a,b){a.sf=b;}
function RO(){BU.call(this);}
function UX(){BU.call(this);}
function T9(){GI.call(this);this.CQ=0;}
function AR8(a){var b;b=new R;T(b);return S(Bd(E(b,B(629)),a.CQ));}
function RK(){GI.call(this);this.FJ=0;}
function ARA(a){var b;b=new R;T(b);return S(Bd(E(b,B(630)),a.FJ));}
function QE(){Do.call(this);}
function AVn(a){var b;a.cu=a.f;a.cy=a.j;a.cv=a.g;a.bD=a.bD+0.002;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.8500000238418579;a.bD=a.bD*0.8500000238418579;a.bz=a.bz*0.8500000238418579;if(CR(a.A,a.f|0,a.j|0,a.g|0)!==Bdi)CN(a);b=a.cU;a.cU=b-1|0;if(b<=0)CN(a);}
function AAO(){Do.call(this);this.Cg=0.0;}
function ATc(a,b,c,d,e){var f=new AAO();ASO(f,a,b,c,d,e);return f;}
function ASO(a,b,c,d,e,f){Ga(a,b,c,d,e,0.0,0.0,0.0);a.by=a.by*0.10000000149011612;a.bD=a.bD*0.10000000149011612;a.bz=a.bz*0.10000000149011612;c=Cc()*0.30000001192092896;a.iN=c;a.iK=c;a.hT=c;a.dq=a.dq*0.75;a.dq=a.dq*f;a.Cg=a.dq;a.cU=8.0/(Cc()*0.8+0.2)|0;a.cU=a.cU*f|0;a.om=0;}
function AHk(a,b,c,d,e,f,g,h){var i;i=(a.dK+c)/a.cU*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dq=a.Cg*i;Ip(a,b,c,d,e,f,g,h);}
function A3W(a){var b;a.cu=a.f;a.cy=a.j;a.cv=a.g;b=a.dK;a.dK=b+1|0;if(b>=a.cU)CN(a);a.fU=7-((a.dK<<3)/a.cU|0)|0;a.bD=a.bD+0.004;Eq(a,a.by,a.bD,a.bz);if(a.j===a.cy){a.by=a.by*1.1;a.bz=a.bz*1.1;}a.by=a.by*0.9599999785423279;a.bD=a.bD*0.9599999785423279;a.bz=a.bz*0.9599999785423279;if(a.dF){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function QZ(){Do.call(this);}
function AOK(a,b,c,d,e,f,g,h){Ip(a,b,c,d,e,f,g,h);}
function AWw(a){var b;a.cu=a.f;a.cy=a.j;a.cv=a.g;b=a.dK;a.dK=b+1|0;if(b>=a.cU)CN(a);a.fU=7-((a.dK<<3)/a.cU|0)|0;a.bD=a.bD+0.004;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.8999999761581421;a.bD=a.bD*0.8999999761581421;a.bz=a.bz*0.8999999761581421;if(a.dF){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function SF(){Do.call(this);this.CI=0.0;}
function AAK(a,b,c,d,e,f,g,h){var i;i=(a.dK+c)/a.cU;a.dq=a.CI*(1.0-i*i*0.5);Ip(a,b,c,d,e,f,g,h);}
function A1H(a,b){var c;c=(a.dK+b)/a.cU;if(c<0.0)c=0.0;if(c>1.0)c=1.0;return EC(a,b)*c+1.0-c;}
function AQ2(a){var b;a.cu=a.f;a.cy=a.j;a.cv=a.g;b=a.dK;a.dK=b+1|0;if(b>=a.cU)CN(a);Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9599999785423279;a.bD=a.bD*0.9599999785423279;a.bz=a.bz*0.9599999785423279;if(a.dF){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function AEl(){Do.call(this);this.FQ=0.0;}
function A$4(a,b,c,d){var e=new AEl();A5Q(e,a,b,c,d);return e;}
function A5Q(a,b,c,d,e){Ga(a,b,c,d,e,0.0,0.0,0.0);a.by=a.by*0.800000011920929;a.bD=a.bD*0.800000011920929;a.bz=a.bz*0.800000011920929;a.bD=N(a.O)*0.4000000059604645+0.05000000074505806;a.iN=1.0;a.iK=1.0;a.hT=1.0;a.dq=a.dq*(N(a.O)*2.0+0.20000000298023224);a.FQ=a.dq;a.cU=16.0/(Cc()*0.8+0.2)|0;a.om=0;a.fU=49;}
function ATq(a,b){return 1.0;}
function AN5(a,b,c,d,e,f,g,h){var i;i=(a.dK+c)/a.cU;a.dq=a.FQ*(1.0-i*i);Ip(a,b,c,d,e,f,g,h);}
function AUl(a){var b,c;a.cu=a.f;a.cy=a.j;a.cv=a.g;b=a.dK;a.dK=b+1|0;if(b>=a.cU)CN(a);c=a.dK/a.cU;if(N(a.O)>c)BY(a.A,B(273),a.f,a.j,a.g,a.by,a.bD,a.bz);a.bD=a.bD-0.03;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9990000128746033;a.bD=a.bD*0.9990000128746033;a.bz=a.bz*0.9990000128746033;if(a.dF){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function Mc(){Do.call(this);}
function Bho(a,b,c,d){var e=new Mc();ABP(e,a,b,c,d);return e;}
function ABP(a,b,c,d,e){Ga(a,b,c,d,e,0.0,0.0,0.0);a.by=a.by*0.30000001192092896;a.bD=Cc()*0.20000000298023224+0.10000000149011612;a.bz=a.bz*0.30000001192092896;a.hT=1.0;a.iK=1.0;a.iN=1.0;a.fU=16;DD(a,0.009999999776482582,0.009999999776482582);a.pb=0.05999999865889549;a.cU=8.0/(Cc()*0.8+0.2)|0;}
function AIl(a,b,c,d,e,f,g,h){Ip(a,b,c,d,e,f,g,h);}
function A4i(a){var b,c;a.cu=a.f;a.cy=a.j;a.cv=a.g;a.bD=a.bD-a.pb;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9800000190734863;a.bD=a.bD*0.9800000190734863;a.bz=a.bz*0.9800000190734863;b=a.cU;a.cU=b-1|0;if(b<=0)CN(a);if(a.dF){if(Cc()<0.5)CN(a);a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}c=CR(a.A,a.f|0,a.j|0,a.g|0);if(!(!c.mc()&&!c.iw()))CN(a);}
function QT(){Mc.call(this);}
function Wy(){C.call(this);this.nS=null;}
var Bhp=null;function AWR(){AWR=Bl(Wy);A4J();}
function A8V(){var a=new Wy();AIV(a);return a;}
function Xm(){AWR();return Bhp;}
function AIV(a){var b,c,d,e;AWR();Ze(a);a.nS=BV();AG_(A9X(),a);AI1(A9Y(),a);ANo(A$j(),a);AJu(new T6);b=new C9;B3();Ie(b,Be_);c=H(C,9);d=c.data;d[0]=B(64);d[1]=B(88);d[2]=B(631);d[3]=BX(88);L();d[4]=BcG;d[5]=BX(89);d[6]=BcH;d[7]=BX(35);d[8]=Be$;CP(a,b,c);e=WR(Be_);c=H(C,9);d=c.data;d[0]=B(64);d[1]=B(88);d[2]=B(631);d[3]=BX(88);d[4]=BcH;d[5]=BX(89);d[6]=BcG;d[7]=BX(35);d[8]=Be$;CP(a,e,c);AFz(new Ua);e=YM(Bea);c=H(C,5);d=c.data;d[0]=B(632);d[1]=B(633);d[2]=B(632);d[3]=BX(35);d[4]=Bcx;CP(a,e,c);e=YM(Beh);c=H(C,
5);d=c.data;d[0]=B(632);d[1]=B(633);d[2]=B(632);d[3]=BX(35);d[4]=Bcv;CP(a,e,c);e=YM(Bee);c=H(C,4);d=c.data;d[0]=B(634);d[1]=B(634);d[2]=BX(35);d[3]=Bcx;CP(a,e,c);AK4(A9v(),a);e=NM(BcZ,1);c=H(C,5);d=c.data;d[0]=B(632);d[1]=B(632);d[2]=B(632);d[3]=BX(35);d[4]=Bfe;CP(a,e,c);e=NM(Bc7,1);c=H(C,7);d=c.data;d[0]=B(635);d[1]=B(636);d[2]=B(635);d[3]=BX(88);d[4]=Bfg;d[5]=BX(35);d[6]=BcI;CP(a,e,c);e=NM(Bcs,3);c=H(C,3);d=c.data;d[0]=B(632);d[1]=BX(35);d[2]=Bcv;CP(a,e,c);e=NM(Bcx,4);c=H(C,3);d=c.data;d[0]=B(631);d[1]=BX(35);d[2]
=Bcy;CP(a,e,c);e=IS(Be9,4);d=H(C,4);c=d.data;c[0]=B(631);c[1]=B(631);c[2]=BX(35);c[3]=Bcx;CP(a,e,d);e=NM(BcA,4);c=H(C,6);d=c.data;d[0]=B(88);d[1]=B(631);d[2]=BX(88);d[3]=BeJ;d[4]=BX(35);d[5]=Be9;CP(a,e,c);e=IS(Be$,4);c=H(C,4);d=c.data;d[0]=B(633);d[1]=B(637);d[2]=BX(35);d[3]=Bcx;CP(a,e,c);e=IS(BeR,1);c=H(C,6);d=c.data;d[0]=B(638);d[1]=B(639);d[2]=BX(65);d[3]=BeU;d[4]=BX(66);d[5]=BeI;CP(a,e,c);e=IS(Bfm,1);c=H(C,3);d=c.data;d[0]=B(632);d[1]=BX(35);d[2]=BeM;CP(a,e,c);e=IS(BfJ,1);c=H(C,7);d=c.data;d[0]=B(632);d[1]
=B(636);d[2]=B(632);d[3]=BX(35);d[4]=Bcx;d[5]=BX(88);d[6]=BcZ;CP(a,e,c);TM(a.nS,A8M(a));Cm(Dr(),B0(E(Bd(Cd(),CE(a.nS)),B(640))));}
function CP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=c.data;e=B(9);f=0;g=0;h=0;if(!Jb(d[0],$rt_arraycls(BC)))while(d[f] instanceof BC){i=f+1|0;j=d[f];h=h+1|0;g=Q(j);k=new R;T(k);e=S(E(E(k,e),j));f=i;}else{f=1;l=d[0];i=0;while(true){c=l.data;if(i>=c.length)break;k=c[i];h=h+1|0;g=Q(k);j=new R;T(j);e=S(E(E(j,e),k));i=i+1|0;}}m=CZ();while(f<d.length){n=d[f];o=0;i=f+1|0;if(d[i] instanceof Bg)o=d[i].c3;else if(d[i] instanceof V)o=d[i].b;BI(m,n,C0(o));f=f+2|0;}f=K(g,h);d=$rt_createIntArray(f);c=d.data;o=0;while(o<f)
{p=P(e,o);if(!Dx(m,BX(p)))c[o]=(-1);else c[o]=Co(m,BX(p)).fA;o=o+1|0;}e=a.nS;j=new Qb;j.l7=g;j.tp=h;j.vw=d;j.uI=b;M(e,j);}
function Vl(a,b){var c,d;c=0;while(c<a.nS.q){d=Be(a.nS,c);if(ADW(d,b))return ADR(d);c=c+1|0;}return null;}
function A4J(){Bhp=A8V();}
function ZN(){var a=this;CV.call(a);a.Ae=null;a.Bu=null;a.jZ=null;a.kZ=0;}
function AYK(a){var b;b=0;while(b<a.jZ.gr.data.length){M(a.ba,A3X(b,((a.bq/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bM/6|0)+(24*(b>>1)|0)|0,KK(a.jZ,b)));b=b+1|0;}M(a.ba,CL(200,(a.bq/2|0)-100|0,(a.bM/6|0)+168|0,B(577)));}
function AAl(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.jZ.gr.data.length){Be(a.ba,c).eS=KK(a.jZ,c);c=c+1|0;}if(b.bC!=200){a.kZ=b.bC;d=new R;T(d);b.eS=S(E(E(E(d,B(641)),KK(a.jZ,b.bC)),B(642)));return;}b=a.x;d=a.Ae;$p=1;case 1:AOR(b,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AE7(a,b,c){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kZ>=0){AA6(a.jZ,a.kZ,c);Be(a.ba,a.kZ).eS=KK(a.jZ,a.kZ);a.kZ=(-1);return;}$p=1;case 1:AM2(a,b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,$p);}
function AHR(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}Eh(a.cK,a.Bu,a.bq/2|0,20,16777215);$p=2;case 2:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AOe(){Po.call(this);}
function A3X(a,b,c,d){var e=new AOe();A8a(e,a,b,c,d);return e;}
function A8a(a,b,c,d,e){Y8(a,b,c,d,150,20,e);}
function HT(){C.call(this);this.d6=null;}
var Bhq=0;var Bhr=null;var Bhs=0;var Bht=null;function AV2(a){var b=new HT();Zj(b,a);return b;}
function Zj(a,b){if(b!==null){a.d6=AON(b);return;}b=new Eg;Bb(b,B(9));J(b);}
function Oq(a){var b;b=ADg(a.d6,Bhr);return b<0?a.d6:BP(a.d6,b+1|0,Q(a.d6));}
function Gf(){return Bhu;}
function P0(a){var b,c,d,e;if(AEn(a))return a.d6;b=Gf().wn;if(Eb(a.d6))return b;c=Q(b);d=new R;d.bp=$rt_createCharArray(Q(b));e=0;while(e<d.bp.data.length){d.bp.data[e]=P(b,e);e=e+1|0;}d.b6=Q(b);if(P(b,c-1|0)==Bhq)Gf();else if(P(a.d6,0)!=Bhq)E(d,Bhr);E(d,a.d6);return S(d);}
function AEn(a){return Wq(a,a.d6);}
function Wq(a,b){Gf();return !Eb(b)&&P(b,0)==Bhq?1:0;}
function AZj(b){a:{b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function QQ(a){var b,c,d,e,f,g,h,i,j,k,l;b=P0(a);c=1;d=0;while(d<Q(b)){if(P(b,d)==Bhq)c=c+1|0;d=d+1|0;}e=$rt_createIntArray(c).data;Gf();f=$rt_createCharArray(Q(b)+1|0);g=f.data;h=0;i=0;j=0;e[i]=0;d=0;a:{while(true){if(d>Q(b))break a;if(d<0){c=h+1|0;g[h]=P(b,d);}else if(d!=Q(b)&&P(b,d)!=Bhq){if(P(b,d)==46){j=j+1|0;c=h;}else{if(j>0){k=0;while(k<j){l=h+1|0;g[h]=46;k=k+1|0;h=l;}}c=h+1|0;g[h]=P(b,d);j=0;}}else{if(d==Q(b)&&!j)break;l=Bw(j,1);if(!l){j=0;c=h;}else if(l<=0){i=i+1|0;e[i]=h;c=h+1|0;g[h]=Bhq;}else{l=j
-1|0;i=i<=l?0:i-l|0;c=e[i]+1|0;j=0;}}d=d+1|0;h=c;}}if(h>1&&g[h-1|0]==Bhq)h=h+(-1)|0;return IJ(f,0,h);}
function Sg(a){var b,c;b=Q(a.d6);c=Gu(a.d6,Bhq);if(c!=(-1)&&P(a.d6,b-1|0)!=Bhq){a:{if(Fy(a.d6,Bhq)==c){if(Wq(a,a.d6))break a;if(!c)break a;}return BP(a.d6,0,c);}return BP(a.d6,0,c+1|0);}return null;}
function AGe(a){return Sg(a)===null?null:AV2(Sg(a));}
function AON(b){var c,d,e,f,g,h,i,j;c=Q(b);d=0;Gf();e=0;f=H5(b);g=0;while(g<c){h=f.data;i=h[g];if(i!=47&&i!=Bhq){j=d+1|0;h[d]=i;e=0;}else if(e&&g)j=d;else{j=d+1|0;h[d]=Bhq;e=1;}g=g+1|0;d=j;}a:{if(e){if(d<=1){if(d!=2)break a;if(f.data[0]==47)break a;}d=d+(-1)|0;}}return IJ(f,0,d);}
function ON(a){return AA7(Gf(),QQ(a));}
function AEG(a){var b;b=QQ(a);if(!Eb(b)&&!BW(b,B(30)))return ON(AGe(AV2(b)));return null;}
function AHi(){Gf();Bhq=47;Bhr=XK(Bhq);Gf();Bhs=58;Bht=XK(Bhs);}
function WI(){}
function Up(){}
function Vm(){Dn.call(this);this.va=null;}
var Bhv=null;function A$z(){var a=new Vm();ACk(a);return a;}
function ACk(a){var b,c;b=new WE;c=null;b.H2=c;if(c===null){c=new SJ;c.Kf=b;}b.ma=c;a.va=b;}
function A0c(a){return AGq(a.va).gz();}
function ABB(a,b){return AOL(a.va,b,b)===Bhv?0:1;}
function ACU(){Bhv=new C;}
function ANv(){C.call(this);}
function LI(b,c){if(b===c)return 1;return b!==null?b.cJ(c):c!==null?0:1;}
function U3(){}
function Qm(){}
function WE(){var a=this;Fh.call(a);a.gi=null;a.ma=null;a.H2=null;a.t5=0;a.xe=null;}
function AOL(a,b,c){var d,e;a.gi=PD(a,a.gi,b);d=AMy(a,b);e=Vs(d,c);Vs(d,c);a.t5=a.t5+1|0;return e;}
function AMy(a,b){var c,d;c=a.gi;while(true){if(c===null)return null;d=Io(a.ma,b,c.hE);if(!d)break;c=d>=0?c.dV:c.d4;}return c;}
function Vd(a,b,c){var d,e,f,g;d=a.gi;e=null;while(d!==null){f=Io(a.ma,b,d.hE);if(c)f= -f;if(!f)return d;if(f>=0)g=Jn(d,c);else{g=G3(d,c);e=d;}d=g;}return e;}
function AAa(a,b,c){var d,e,f,g,h;d=H(IG,PY(a));e=0;f=a.gi;a:{while(f!==null){g=Io(a.ma,b,f.hE);if(c)g= -g;if(!g){h=d.data;c=e+1|0;h[e]=f;break a;}if(g>=0)f=Jn(f,c);else{h=d.data;g=e+1|0;h[e]=f;f=G3(f,c);e=g;}}c=e;}return Ea(d,c);}
function R1(a,b,c){var d,e,f,g;d=a.gi;e=null;while(d!==null){f=Io(a.ma,b,d.hE);if(c)f= -f;if(f>=0)g=Jn(d,c);else{g=G3(d,c);e=d;}d=g;}return e;}
function Q2(a,b,c){var d,e,f,g,h;d=H(IG,PY(a));e=0;f=a.gi;while(f!==null){g=Io(a.ma,b,f.hE);if(c)g= -g;if(g>=0)f=Jn(f,c);else{h=d.data;g=e+1|0;h[e]=f;f=G3(f,c);e=g;}}return Ea(d,e);}
function Zq(a,b){var c,d,e,f,g;c=H(IG,PY(a));d=0;e=a.gi;while(e!==null){f=c.data;g=d+1|0;f[d]=e;e=G3(e,b);d=g;}return Ea(c,d);}
function PD(a,b,c){var d,e;if(b===null){b=new IG;d=null;b.hE=c;b.mw=d;b.kJ=1;b.kP=1;return b;}e=Io(a.ma,c,b.hE);if(!e)return b;if(e>=0)b.dV=PD(a,b.dV,c);else b.d4=PD(a,b.d4,c);JM(b);return AIL(b);}
function AF5(a){var b,c,d;if(a.xe===null){b=new RQ;c=null;d=null;b.HB=(-1);b.fa=a;b.zg=c;b.wu=1;b.y0=0;b.l3=d;b.uh=1;b.vq=0;b.EX=0;a.xe=b;}return a.xe;}
function PY(a){return a.gi===null?0:a.gi.kJ;}
function ABo(b,c){var d,e;b=b.gi;d=null;while(b!==null){e=G3(b,c);d=b;b=e;}return d;}
function AHN(){var a=this;C.call(a);a.CY=null;a.p4=null;}
function A9X(){var a=new AHN();AUQ(a);return a;}
function AUQ(a){var b,c,d,e;b=H($rt_arraycls(BC),4);c=b.data;d=H(BC,3);e=d.data;e[0]=B(643);e[1]=B(637);e[2]=B(637);c[0]=d;d=H(BC,3);e=d.data;e[0]=B(88);e[1]=B(631);e[2]=B(631);c[1]=d;d=H(BC,3);e=d.data;e[0]=B(644);e[1]=B(645);e[2]=B(646);c[2]=d;d=H(BC,3);e=d.data;e[0]=B(644);e[1]=B(646);e[2]=B(646);c[3]=d;a.CY=b;b=H($rt_arraycls(C),5);c=b.data;d=H(C,5);e=d.data;L();e[0]=Bcx;e[1]=Bcv;B3();e[2]=BeU;e[3]=BeK;e[4]=BeV;c[0]=d;d=H(C,5);e=d.data;e[0]=BeZ;e[1]=Be3;e[2]=BeP;e[3]=Be7;e[4]=Bfc;c[1]=d;d=H(C,5);e=d.data;e[0]
=BeY;e[1]=Be2;e[2]=BeO;e[3]=Be6;e[4]=Bfb;c[2]=d;d=H(C,5);e=d.data;e[0]=Be0;e[1]=Be4;e[2]=BeQ;e[3]=Be8;e[4]=Bfd;c[3]=d;d=H(C,5);e=d.data;e[0]=Bfh;e[1]=Bfi;e[2]=Bfj;e[3]=Bfk;e[4]=Bfl;c[4]=d;a.p4=b;}
function AG_(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.p4.data[0].data.length){d=a.p4.data[0].data[c];e=0;while(e<(a.p4.data.length-1|0)){f=a.p4.data;g=e+1|0;h=f[g].data[c];i=WR(h);f=H(C,5);j=f.data;j[0]=a.CY.data[e];j[1]=BX(35);B3();j[2]=Be9;j[3]=BX(88);j[4]=d;CP(b,i,f);e=g;}c=c+1|0;}}
function AGK(){var a=this;C.call(a);a.Ce=null;a.pD=null;}
function A9Y(){var a=new AGK();A55(a);return a;}
function A55(a){var b,c,d,e;b=H($rt_arraycls(BC),1);c=b.data;d=H(BC,3);e=d.data;e[0]=B(88);e[1]=B(88);e[2]=B(631);c[0]=d;a.Ce=b;b=H($rt_arraycls(C),2);c=b.data;d=H(C,5);e=d.data;L();e[0]=Bcx;e[1]=Bcv;B3();e[2]=BeU;e[3]=BeK;e[4]=BeV;c[0]=d;d=H(C,5);e=d.data;e[0]=BeX;e[1]=Be1;e[2]=BeW;e[3]=Be5;e[4]=Bfa;c[1]=d;a.pD=b;}
function AI1(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pD.data[0].data.length){d=a.pD.data[0].data[c];e=0;while(e<(a.pD.data.length-1|0)){f=a.pD.data;g=e+1|0;h=f[g].data[c];i=WR(h);j=H(C,5);k=j.data;k[0]=a.Ce.data[e];k[1]=BX(35);B3();k[2]=Be9;k[3]=BX(88);k[4]=d;CP(b,i,j);e=g;}c=c+1|0;}h=new C9;B3();QL(h,BeS,1);f=H(C,7);k=f.data;k[0]=B(647);k[1]=B(648);k[2]=B(647);k[3]=BX(88);k[4]=Bfe;k[5]=BX(35);k[6]=Be9;CP(b,h,f);d=IS(BeT,4);f=H(C,9);k=f.data;k[0]=B(88);k[1]=B(631);k[2]=B(64);k[3]=BX(89);k[4]=Bff;k[5]=BX(88);k[6]
=BeU;k[7]=BX(35);k[8]=Be9;CP(b,d,f);}
function ANi(){C.call(this);this.q9=null;}
function A$j(){var a=new ANi();ATj(a);return a;}
function ATj(a){var b,c,d,e;b=H($rt_arraycls(C),3);c=b.data;d=H(C,2);e=d.data;L();e[0]=Bc5;B3();e[1]=BeV;c[0]=d;d=H(C,2);e=d.data;e[0]=Bc4;e[1]=BeU;c[1]=d;d=H(C,2);e=d.data;e[0]=Bed;e[1]=BeK;c[2]=d;a.q9=b;}
function ANo(a,b){var c,d,e,f,g,h;c=0;while(c<a.q9.data.length){d=a.q9.data[c].data[0];e=a.q9.data[c].data[1];f=YM(d);g=H(C,5);h=g.data;h[0]=B(632);h[1]=B(632);h[2]=B(632);h[3]=BX(35);h[4]=e;CP(b,f,g);f=IS(e,9);g=H(C,3);h=g.data;h[0]=B(631);h[1]=BX(35);h[2]=d;CP(b,f,g);c=c+1|0;}}
function T6(){C.call(this);}
function Bhw(){var a=new T6();AJu(a);return a;}
function AJu(a){return;}
function Ua(){C.call(this);}
function Bhx(){var a=new Ua();AFz(a);return a;}
function AFz(a){return;}
function ACm(){var a=this;C.call(a);a.Ed=null;a.qz=null;}
function A9v(){var a=new ACm();AYY(a);return a;}
function AYY(a){var b,c,d,e;b=H($rt_arraycls(BC),4);c=b.data;d=H(BC,2);e=d.data;e[0]=B(643);e[1]=B(649);c[0]=d;d=H(BC,3);e=d.data;e[0]=B(649);e[1]=B(643);e[2]=B(643);c[1]=d;d=H(BC,3);e=d.data;e[0]=B(643);e[1]=B(649);e[2]=B(649);c[2]=d;d=H(BC,2);e=d.data;e[0]=B(649);e[1]=B(649);c[3]=d;a.Ed=b;b=H($rt_arraycls(C),5);c=b.data;d=H(C,5);e=d.data;L();e[0]=BcZ;e[1]=Bd9;B3();e[2]=BeU;e[3]=BeK;e[4]=BeV;c[0]=d;d=H(C,5);e=d.data;e[0]=Bfn;e[1]=Bfr;e[2]=Bfv;e[3]=Bfz;e[4]=BfD;c[1]=d;d=H(C,5);e=d.data;e[0]=Bfo;e[1]=Bfs;e[2]
=Bfw;e[3]=BfA;e[4]=BfE;c[2]=d;d=H(C,5);e=d.data;e[0]=Bfp;e[1]=Bft;e[2]=Bfx;e[3]=BfB;e[4]=BfF;c[3]=d;d=H(C,5);e=d.data;e[0]=Bfq;e[1]=Bfu;e[2]=Bfy;e[3]=BfC;e[4]=BfG;c[4]=d;a.qz=b;}
function AK4(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qz.data[0].data.length){d=a.qz.data[0].data[c];e=0;while(e<(a.qz.data.length-1|0)){f=a.qz.data;g=e+1|0;h=f[g].data[c];i=WR(h);f=H(C,3);j=f.data;j[0]=a.Ed.data[e];j[1]=BX(88);j[2]=d;CP(b,i,f);e=g;}c=c+1|0;}}
function AOS(){C.call(this);}
function A8M(a){var b=new AOS();A54(b,a);return b;}
function A54(a,b){return;}
function A5F(a,b,c){var d,e;d=b;e=c;return LG(e)<LG(d)?(-1):LG(e)<=LG(d)?0:1;}
function UE(){C.call(this);}
var Bhu=null;function ALn(){var b,c,d;b=new RM;c=new XD;R0(c,B(9));d=new Yn;ACt(d);d.r$=0;d.lF=null;c.pp=d;b.Ao=c;b.wn=B(30);Bhu=b;}
function SJ(){C.call(this);this.Kf=null;}
function Io(a,b,c){return b===null?XL(c,b):XL(b,c);}
function YJ(){}
function RM(){var a=this;C.call(a);a.Ao=null;a.wn=null;}
function AA7(a,b){var c;c=new Xs;c.C3=a;c.m5=b;return c;}
function A1X(a){return a.wn;}
function A8J(a){return 0;}
function JS(){var a=this;C.call(a);a.pF=null;a.Be=null;a.Cd=Long_ZERO;a.BR=0;}
function Bhy(a){var b=new JS();R0(b,a);return b;}
function R0(a,b){a.Cd=CF();a.pF=b;}
function AXg(a){return a.pF;}
function ALr(a){return a.BR?0:1;}
function ACg(a){a.Cd=CF();}
function XD(){JS.call(this);this.pp=null;}
function AVX(a){return 1;}
function A53(a,b){return ALc(a.pp,b);}
function A1_(a,b,c,d){return null;}
function ARY(a,b){var c,d;if(!ALr(a)){b=new BA;Bb(b,B(650));J(b);}if(Dx(a.pp,b))return null;c=new ZZ;R0(c,b);c.Jo=$rt_createByteArray(0);if(!Dx(a.pp,c.pF)){c.Be=a;AGD(a.pp,c.pF,c);ACg(a);return c;}b=new BB;d=new R;T(d);Bb(b,S(E(E(E(d,B(651)),c.pF),B(652))));J(b);}
function Yn(){var a=this;MV.call(a);a.r$=0;a.lF=null;a.ee=null;}
function AQr(a,b){return H(PA,b);}
function ALc(a,b){var c,d,e,f;if(b===null)c=KH(a);else{d=O$(b);c=Kq(a,b,(d&2147483647)%a.cQ.data.length|0,d);}if(c===null)return null;if(a.r$&&a.ee!==c){e=c.gG;f=c.e7;f.gG=e;if(e===null)a.lF=f;else e.e7=f;c.e7=null;c.gG=a.ee;a.ee.e7=c;a.ee=c;}return c.fr;}
function Sq(a,b,c,d){var e;e=new PA;AFf(e,b,d);e.e7=null;e.gG=null;e.gh=a.cQ.data[c];a.cQ.data[c]=e;O1(a,e);return e;}
function AGD(a,b,c){return AHd(a,b,c);}
function AHd(a,b,c){var d,e,f,g,h,i;if(!a.dD){a.lF=null;a.ee=null;}if(b===null){d=KH(a);if(d!==null)O1(a,d);else{a.fN=a.fN+1|0;e=a.dD+1|0;a.dD=e;if(e>a.oI)LO(a);d=Sq(a,null,0,0);}}else{f=O$(b);e=f&2147483647;g=e%a.cQ.data.length|0;d=Kq(a,b,g,f);if(d!==null)O1(a,d);else{a.fN=a.fN+1|0;h=a.dD+1|0;a.dD=h;if(h>a.oI){LO(a);g=e%a.cQ.data.length|0;}d=Sq(a,b,g,f);}}i=d.fr;d.fr=c;return i;}
function O1(a,b){var c,d;if(a.ee===b)return;if(a.lF===null){a.lF=b;a.ee=b;return;}c=b.gG;d=b.e7;if(c!==null){if(d===null)return;if(a.r$){c.e7=d;d.gG=c;b.e7=null;b.gG=a.ee;a.ee.e7=b;a.ee=b;}return;}if(d===null){b.gG=a.ee;b.e7=null;a.ee.e7=b;a.ee=b;}else if(a.r$){a.lF=d;d.gG=null;b.gG=a.ee;b.e7=null;a.ee.e7=b;a.ee=b;}}
function AWn(a,b){var c,d,e;c=TR(a,b);if(c===null)return null;d=c.gG;e=c.e7;if(d===null)a.lF=e;else d.e7=e;if(e===null)a.ee=d;else e.gG=d;return c.fr;}
function AUN(a,b){return 0;}
function Pc(){var a=this;C.call(a);a.Hw=0;a.i1=null;a.de=null;a.fs=null;a.iW=0;a.hQ=null;a.kU=null;a.k2=null;a.lr=null;a.sI=null;a.dw=null;}
var Bhz=null;var BhA=null;function A_l(a){var b=new Pc();AH0(b,a);return b;}
function BhB(a,b,c){var d=new Pc();Xt(d,a,b,c);return d;}
function AH0(a,b){Xt(a,null,b,null);}
function Xt(a,b,c,d){var e,f,g,h,i,j,k,$$je;a.iW=(-1);a.dw=d;if(c===null){b=new GF;Z(b);J(b);}d=GY(c);a:{try{e=Fy(d,58);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Eg){f=$$je;}else{throw $$e;}}b=new GF;Bb(b,f.eN());J(b);}g=Fy(d,91);if(e>=0&&!(g!=(-1)&&e>=g)){b:{c:{a.de=BP(d,0,e);h=P(a.de,0);if(!(97<=h&&h<=122)){if(65>h)break c;if(h>90)break c;}i=1;break b;}i=0;}j=1;while(i&&j<Q(a.de)){i=P(a.de,j);i=!(97<=i&&i<=122)&&!(65<=i&&i<=90)&&!(48<=i&&i<=57)&&i!=43&&i!=45&&i!=46?0:1;j=j+1|0;}if(i)a.de=Oj(a.de);else
{a.de=null;e=(-1);}}if(a.de===null){if(b===null){b=new GF;Z(b);J(b);}KO(a,b.de,b.fs,b.iW,b.hQ,b.kU,b.k2,b.lr,null);if(a.dw===null)a.dw=b.dw;}else if(b!==null&&BW(a.de,b.de)){k=b.k2;if(k!==null&&k.Ju(B(30)))KO(a,a.de,b.fs,b.iW,b.hQ,b.kU,k,b.lr,null);if(a.dw===null)a.dw=b.dw;}if(a.dw===null){AFA(a);if(a.dw===null){b=new GF;Z(b);J(b);}}d:{try{ACO(a.dw,a,d,e+1|0,Q(d));break d;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){f=$$je;}else{throw $$e;}}b=new GF;Bb(b,ANq(f));J(b);}if(a.iW>=(-1))return;b=new GF;Z(b);J(b);}
function AC6(a,b){var c,d;if(a.fs!==null&&Q(a.fs)>0){a.hQ=a.fs;if(a.iW!=(-1)){c=new R;T(c);a.hQ=S(Bd(E(E(c,a.hQ),B(308)),a.iW));}}if(b){d=(-1);if(a.fs!==null)d=Gu(a.fs,64);if(d<0)a.kU=null;else{a.kU=BP(a.fs,0,d);a.fs=DO(a.fs,d+1|0);}}d=(-1);if(a.i1!==null)d=Fy(a.i1,63);if(d<0){a.lr=null;a.k2=a.i1;}else{a.lr=DO(a.i1,d+1|0);a.k2=BP(a.i1,0,d);}}
function AET(a,b,c,d,e,f){if(a.de===null)a.de=b;a.fs=c;a.i1=e;a.iW=d;a.sI=f;a.Hw=0;AC6(a,1);}
function AFA(a){var b,c;a.dw=Co(Bhz,a.de);if(a.dw!==null)return;if(BhA!==null){a.dw=BhA.Nz(a.de);if(a.dw!==null){BI(Bhz,a.de,a.dw);return;}}a:{b=a.de;c=(-1);switch(O$(b)){case 101730:if(!BW(b,B(653)))break a;c=2;break a;case 3213448:if(!BW(b,B(654)))break a;c=0;break a;case 99617003:if(!BW(b,B(655)))break a;c=1;break a;default:}}b:{switch(c){case 0:case 1:a.dw=new QF;break b;case 2:break;default:a.dw=AZ8((-1));break b;}a.dw=AZ8(21);}}
function AN6(a){return a.dw.Cj(a);}
function AQX(a){return S3(a);}
function S3(a){var b;if(a.dw!==null)return AEH(a.dw,a);b=new R;T(b);return S(E(E(E(E(E(b,B(656)),a.de),B(657)),a.fs),a.i1));}
function A3k(a){return a.i1;}
function AUX(a){return a.fs;}
function ASG(a){return a.iW;}
function API(a){return a.de;}
function A51(a){return a.sI;}
function A1$(a){return a.lr;}
function ATh(a){return a.k2;}
function AW2(a){return a.kU;}
function AP9(a){return a.hQ;}
function KO(a,b,c,d,e,f,g,h,i){var j;if(h===null)j=g;else if(Eb(h))j=g;else if(g===null){j=new R;T(j);j=S(E(E(j,B(658)),h));}else{j=new R;T(j);j=S(E(E(E(j,g),B(658)),h));}AET(a,b,c,d,j,i);a.hQ=e;a.kU=f;a.k2=g;a.lr=h;}
function AKM(){Bhz=CZ();}
function IM(){C.call(this);this.GY=null;}
function BhC(){var a=new IM();TB(a);return a;}
function TB(a){a.GY=new C;}
function Tj(){var a=this;IM.call(a);a.zw=null;a.ny=null;a.js=0;a.q4=0;a.yu=0;a.Ci=0;}
function BhD(a){var b=new Tj();AJm(b,a);return b;}
function AJm(a,b){TB(a);a.Ci=(-1);a.zw=b;a.ny=$rt_createCharArray(Df(64,1024));}
function AHn(a){var b,c,d,e;if(a.zw===null){b=new BA;Z(b);J(b);}if(a.yu&&a.js>=a.q4)return null;b=new R;T(b);a:{while(true){if(a.js>=a.q4&&!S9(a,0))break a;c=a.ny.data;d=a.js;a.js=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.js>=a.q4&&!S9(a,0))break a;if(a.ny.data[a.js]!=10)break a;a.js=a.js+1|0;break a;}Ce(b,e);}}return S(b);}
function S9(a,b){var c;if(a.yu)return 0;a:{while(true){if(b>=a.ny.data.length)break a;c=ADo(a.zw,a.ny,b,a.ny.data.length-b|0);if(c==(-1)){a.yu=1;break a;}if(!c)break;b=b+c|0;}}a.q4=b;a.js=0;a.Ci=(-1);return 1;}
function QM(){var a=this;IM.call(a);a.Ff=null;a.zc=null;a.F4=null;a.fH=null;a.DT=null;a.hI=null;a.tJ=0;a.y8=0;}
function BhE(a){var b=new QM();AAw(b,a);return b;}
function AAw(a,b){var c;c=Tv(ZC(Ul(AGI()),Bba),Bba);TB(a);a.F4=$rt_createByteArray(8192);a.fH=MA(a.F4);a.DT=$rt_createCharArray(1024);a.hI=Th(a.DT);a.Ff=b;a.zc=c;Dz(a.hI,a.hI.ce);Dz(a.fH,a.fH.ce);}
function ADo(a,b,c,d){var e,f,g;if(a.y8&&!DI(a.hI))return (-1);e=0;a:{while(d>0){f=B4(d,BT(a.hI));Me(a.hI,b,c+e|0,f);d=d-f|0;e=e+f|0;if(!DI(a.hI)){if(a.y8)g=0;else{ABb(a.hI);b:{while(true){if(!DI(a.fH)){if(a.tJ)g=0;else{AEp(a.fH);c:{while(true){if(!DI(a.fH))break c;g=AOq(a.Ff,a.fH.b5,a.fH.L,BT(a.fH));if(g==(-1)){a.tJ=1;break c;}Dz(a.fH,a.fH.L+g|0);if(!g)break;}}Ec(a.fH);g=1;}if(!g)break b;}if(!G9(OA(a.zc,a.fH,a.hI,a.tJ)))continue;else break;}}if(!DI(a.fH)&&a.tJ&&Hz(Sl(a.zc,a.hI)))a.y8=1;Ec(a.hI);g=1;}if(!g)break a;}}}return e;}
function PA(){var a=this;LB.call(a);a.e7=null;a.gG=null;}
function AH2(){C.call(this);}
function R8(){var a=this;C.call(a);a.c4=null;a.bi=0;a.bS=0;a.cT=0;a.z=null;a.dd=null;a.dn=0;a.hH=0;a.qr=0;a.lk=0;a.qc=0;a.eU=0;a.lY=0;a.mX=0;a.EG=0.0;a.ef=null;}
function AG$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b0,b1,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b1=$T.l();b0=$T.l();bZ=$T.l();bY=$T.l();bX=$T.l();bW=$T.l();bV=$T.l();bU=$T.l();bT=$T.l();bS=$T.l();bR=$T.l();bQ=$T.l();bP=$T.l();bO=$T.l();bN=$T.l();bM=$T.l();bL=$T.l();bK=$T.l();bJ=$T.l();bI=$T.l();bH=$T.l();bG=$T.l();bF=$T.l();bE=$T.l();bD
=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b
=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1;if(a.lk)f=((e-64|0)/48|0)+1|0;a.mX=13+(f*4|0)|0;Zn(a.c4,B(659));g=X0();g.fE=a.dn;g.eD=a.hH;a.bi=c;a.bS=d;a.cT=e;h=K(c,d);a.dd=$rt_createByteArray(K(h,e));i=0;j=e-32|0;if(i>=f){k=a.c4;l=B(660);$p=1;continue _;}a.dn=j-(i*48|0)|0;a.hH=a.dn-2|0;if(!a.qc){k=a.c4;l=B(661);$p=3;continue _;}m=$rt_createIntArray(h);n=m.data;o=0;p=n.length;while(o<p){n[o]=0;o=o+1|0;}$p=16;continue _;case 1:ANk(k,l);if(I()){break _;}$p=2;case 2:AAI(a);if(I()){break _;}h=a.bi;p=a.bS;q
=a.cT;r=((K(K(h,p),q)/256|0)/64|0)<<1;s=0;t=r-1|0;u=h;v=q;w=p;if(s<r){x=s*100.0/t;$p=12;continue _;}L();p=Bc1.b;q=1000;r=10;s=(e<<2)/5|0;$p=5;continue _;case 3:ANk(k,l);if(I()){break _;}$p=4;case 4:AAI(a);if(I()){break _;}y=S1(El(a.z,8),El(a.z,8));z=S1(El(a.z,8),El(a.z,8));ba=El(a.z,6);k=El(a.z,2);m=$rt_createIntArray(K(a.bi,a.bS));n=m.data;bb=0;if(bb>=a.bi){k=a.c4;l=B(662);$p=14;continue _;}bc=bb;bd=HK((bc/(a.bi-1.0)-0.5)*2.0);x=bb;t=x*100.0/(a.bi-1|0);$p=13;continue _;case 5:$z=AKt(a,p,q,r,s);if(I()){break _;}p
=$z;q=Bc2.b;r=800;s=8;be=(e*3|0)/5|0;$p=6;case 6:$z=AKt(a,q,r,s,be);if(I()){break _;}be=$z;q=Bc3.b;r=500;s=6;o=(e<<1)/5|0;$p=7;case 7:$z=AKt(a,q,r,s,o);if(I()){break _;}o=$z;q=Bec.b;r=800;s=2;bf=e/5|0;$p=8;case 8:$z=AKt(a,q,r,s,bf);if(I()){break _;}q=$z;Cm(Dr(),B0(Bd(E(Bd(E(Bd(E(Bd(E(Cd(),B(663)),p),B(664)),be),B(665)),o),B(666)),q)));k=a.c4;l=B(667);$p=9;case 9:ANk(k,l);if(I()){break _;}$p=10;case 10:AAI(a);if(I()){break _;}$p=11;case 11:AA9(a);if(I()){break _;}p=e+2|0;g.kE=p;if(a.lk){a.hH=(-128);a.dn=a.hH
+1|0;g.kE=(-16);}else if(a.qr)a.hH=a.dn-9|0;else{a.hH=a.dn+1|0;a.dn=a.hH-16|0;}k=a.c4;l=B(668);$p=18;continue _;case 12:AMC(a,x);if(I()){break _;}x=N(a.z)*u;bg=N(a.z)*v;bh=N(a.z)*w;j=(N(a.z)+N(a.z))*200.0|0;bi=N(a.z)*3.1415927410125732*2.0;bj=0.0;bk=N(a.z)*3.1415927410125732*2.0;bl=0.0;bm=N(a.z)*N(a.z);bn=0;bo=j;while(bn<j){a:{x=x+Bv(bi)*Bp(bk);bh=bh+Bp(bi)*Bp(bk);bg=bg+Bv(bk);bi=bi+bj*0.20000000298023224;bj=bj*0.8999999761581421+N(a.z)-N(a.z);bk=(bk+bl*0.5)*0.5;bl=bl*0.75+N(a.z)-N(a.z);if(N(a.z)>=0.25){bp=
x+(N(a.z)*4.0-2.0)*0.20000000298023224;bq=bg+(N(a.z)*4.0-2.0)*0.20000000298023224;br=bh+(N(a.z)*4.0-2.0)*0.20000000298023224;bs=1.2000000476837158+((a.cT-bq)/a.cT*3.5+1.0)*bm;bt=Bv(bn*3.1415927410125732/bo)*bs;p=bp-bt|0;q=bp+bt|0;o=bq-bt|0;bf=bq+bt|0;bu=br-bt|0;bv=br+bt|0;bw=bt*bt;while(true){if(p>q)break a;bx=o;while(bx<=bf){by=bu;while(by<=bv){b:{bz=p-bp;bA=bx-bq;bB=by-br;if(bz*bz+bA*bA*2.0+bB*bB>=bw)break b;if(p<=0)break b;if(bx<=0)break b;if(by<=0)break b;if(p>=(a.bi-1|0))break b;if(bx>=(a.cT-1|0))break b;if
(by>=(a.bS-1|0))break b;be=K(K(bx,a.bS)+by|0,a.bi)+p|0;bC=a.dd.data[be];L();if(bC!=Bct.b)break b;a.dd.data[be]=0;}by=by+1|0;}bx=bx+1|0;}p=p+1|0;}}}bn=bn+1|0;}s=s+1|0;if(s<r){x=s*100.0/t;continue _;}L();p=Bc1.b;q=1000;r=10;s=(e<<2)/5|0;$p=5;continue _;case 13:AMC(a,t);if(I()){break _;}bD=0;bE=x*1.2999999523162842;bF=bd*bd;bG=x*0.05000000074505806;while(bD<a.bS){bH=bD;bI=HK((bH/(a.bS-1.0)-0.5)*2.0);x=bD;bJ=x*1.2999999523162842;bK=KR(y,bE,bJ)/6.0+(-4.0);bL=KR(z,bE,bJ)/5.0+10.0+(-4.0);if(EN(ba,bc,bH)/8.0>0.0)bL
=bK;bM=Nh(bK,bL)/2.0;if(a.qr){bH=Nh(A2Z(Iu(bF+bI*bI)*1.2000000476837158,EN(k,bG,x*0.05000000074505806)/4.0+1.0),Nh(bd,bI));if(bH>1.0)bH=1.0;if(bH<0.0)bH=0.0;bH=bH*bH;bM=bM*(1.0-bH)-bH*10.0+5.0;if(bM<0.0)bM=bM-bM*bM*0.20000000298023224;}else if(bM<0.0)bM=bM*0.8;n[bb+K(bD,a.bi)|0]=bM|0;bD=bD+1|0;}bb=bb+1|0;if(bb>=a.bi){k=a.c4;l=B(662);$p=14;continue _;}bc=bb;bd=HK((bc/(a.bi-1.0)-0.5)*2.0);x=bb;t=x*100.0/(a.bi-1|0);continue _;case 14:ANk(k,l);if(I()){break _;}$p=15;case 15:AAI(a);if(I()){break _;}k=S1(El(a.z,8),
El(a.z,8));l=S1(El(a.z,8),El(a.z,8));p=0;if(p>=a.bi){k=a.c4;l=B(669);$p=21;continue _;}t=p*100.0/(a.bi-1|0);$p=23;continue _;case 16:AAI(a);if(I()){break _;}$p=17;case 17:AAI(a);if(I()){break _;}k=a.c4;l=B(669);$p=21;continue _;case 18:ANk(k,l);if(I()){break _;}$p=19;case 19:AAI(a);if(I()){break _;}$p=20;case 20:c:{ALq(a);if(I()){break _;}if(!a.lk){q=Bd7.b;if(a.eU==1)q=Bd8.b;r=0;o=d-1|0;while(r<c){Dv(a,r,a.dn-1|0,0,0,q);Dv(a,r,a.dn-1|0,o,0,q);r=r+1|0;}r=0;be=c-1|0;while(true){if(r>=d)break c;Dv(a,be,a.dn-1|
0,r,0,q);Dv(a,0,a.dn-1|0,r,0,q);r=r+1|0;}}}if(!a.eU){g.hJ=10079487;g.hD=16777215;g.hp=16777215;}if(a.eU==1){g.hp=2164736;g.hD=1049600;g.hJ=1049600;g.dG=7;g.eg=7;g.jq=Bck.b;if(a.lk){g.kE=p;a.dn=(-16);}}if(a.eU==2){g.hJ=13033215;g.hD=13033215;g.hp=15658751;g.dG=15;g.eg=15;g.dG=16;g.kE=e+64|0;}if(a.eU==3){g.hJ=7699847;g.hD=5069403;g.hp=5069403;g.dG=12;g.eg=12;}g.fE=a.dn;g.eD=a.hH;k=a.c4;l=B(670);$p=27;continue _;case 21:ANk(k,l);if(I()){break _;}$p=22;case 22:AAI(a);if(I()){break _;}bu=a.bi;bN=a.bS;bO=a.cT;bP=
El(a.z,8);bQ=El(a.z,8);s=0;bJ=bu-1.0;bg=bu-1|0;bK=bN-1.0;be=bO-2|0;if(s>=bu){k=a.c4;l=B(671);$p=24;continue _;}bH=s;bE=HK((bH/bJ-0.5)*2.0);t=s*100.0/bg;$p=26;continue _;case 23:AMC(a,t);if(I()){break _;}q=0;while(q<a.bS){bG=p<<1;bH=q<<1;bJ=KR(k,bG,bH)/8.0;r=KR(l,bG,bH)<=0.0?0:1;if(bJ>2.0)n[p+K(q,a.bi)|0]=(((n[p+K(q,a.bi)|0]-r|0)/2|0)<<1)+r|0;q=q+1|0;}p=p+1|0;if(p>=a.bi){k=a.c4;l=B(669);$p=21;continue _;}t=p*100.0/(a.bi-1|0);continue _;case 24:ANk(k,l);if(I()){break _;}$p=25;case 25:AAI(a);if(I()){break _;}p
=a.bi;q=a.bS;k=El(a.z,8);l=El(a.z,8);r=a.dn-1|0;if(a.eU==2)r=r+2|0;s=0;t=p-1|0;if(s<p){x=s*100.0/t;$p=38;continue _;}i=i+1|0;if(i>=f){k=a.c4;l=B(660);$p=1;continue _;}a.dn=j-(i*48|0)|0;a.hH=a.dn-2|0;if(!a.qc){k=a.c4;l=B(661);$p=3;continue _;}m=$rt_createIntArray(h);n=m.data;o=0;p=n.length;while(o<p){n[o]=0;o=o+1|0;}$p=16;continue _;case 26:AMC(a,t);if(I()){break _;}bR=0;bM=bH*2.3;while(bR<bN){n=m.data;bG=bR;bc=Nh(bE,HK((bG/bK-0.5)*2.0));bI=bc*bc*bc;bS=(EN(bP,bH,bG)/24.0|0)-4|0;q=s+K(bR,bu)|0;bT=n[q]+a.dn|0;bn
=bT+bS|0;n[q]=Df(bT,bn);if(n[q]>be)n[q]=be;if(n[q]<=0)n[q]=1;bG=EN(bQ,bM,bG*2.3)/24.0;q=((Iu(HK(bG))*AWb(bG)*20.0|0)+a.dn|0)*(1.0-bI)+bI*a.cT|0;if(q>a.dn)q=a.cT;bU=0;while(bU<bO){bv=K(K(bU,a.bS)+bR|0,a.bi)+s|0;bC=0;if(bU<=bT){L();bC=Bcq.b;}if(bU<=bn){L();bC=Bct.b;}if(a.lk&&bU<q)bC=0;if(!a.dd.data[bv])a.dd.data[bv]=bC<<24>>24;bU=bU+1|0;}bR=bR+1|0;}s=s+1|0;if(s>=bu){k=a.c4;l=B(671);$p=24;continue _;}bH=s;bE=HK((bH/bJ-0.5)*2.0);t=s*100.0/bg;continue _;case 27:ANk(k,l);if(I()){break _;}$p=28;case 28:AAI(a);if(I())
{break _;}t=0.0;$p=29;case 29:AMC(a,t);if(I()){break _;}K3(g,c,e,d,a.dd,null);k=a.c4;l=B(672);$p=30;case 30:ANk(k,l);if(I()){break _;}$p=31;case 31:AAI(a);if(I()){break _;}t=0.0;$p=32;case 32:AMC(a,t);if(I()){break _;}ZE(g);AUJ(g);k=a.c4;l=B(673);$p=33;case 33:ANk(k,l);if(I()){break _;}$p=34;case 34:AAI(a);if(I()){break _;}if(a.eU==1){$p=35;continue _;}$p=37;continue _;case 35:AAI(a);if(I()){break _;}$p=36;case 36:AL7(a,g);if(I()){break _;}if(a.eU==3){c=0;if(c<50){$p=49;continue _;}}bV=100;if(a.eU==2)bV=1000;$p
=39;continue _;case 37:AMe(a,g);if(I()){break _;}$p=35;continue _;case 38:AMC(a,x);if(I()){break _;}bb=0;while(bb<q){bG=s;bH=bb;bW=EN(k,bG,bH)<=8.0?0:1;if(a.qr)bW=EN(k,bG,bH)<=(-8.0)?0:1;if(a.eU==2)bW=EN(k,bG,bH)<=(-32.0)?0:1;bX=EN(l,bG,bH)<=12.0?0:1;if(!(a.eU!=1&&a.eU!=3))bW=EN(k,bG,bH)<=(-8.0)?0:1;bD=m.data[s+K(bb,p)|0];bY=K(K(bD,a.bS)+bb|0,a.bi)+s|0;bZ=a.dd.data[K(K(bD+1|0,a.bS)+bb|0,a.bi)+s|0]&255;L();if(!(bZ!=Bcj.b&&bZ!=Bd7.b&&bZ)&&bD<=(a.dn-1|0)&&bX)a.dd.data[bY]=BcJ.b<<24>>24;if(!bZ){b0=(-1);if(bD<=r
&&bW){b0=BcI.b;if(a.eU==1)b0=Bcp.b;}if(a.dd.data[bY]&&b0>0)a.dd.data[bY]=b0<<24>>24;}bb=bb+1|0;}s=s+1|0;if(s<p){x=s*100.0/t;continue _;}i=i+1|0;if(i>=f){k=a.c4;l=B(660);$p=1;continue _;}a.dn=j-(i*48|0)|0;a.hH=a.dn-2|0;if(!a.qc){k=a.c4;l=B(661);$p=3;continue _;}m=$rt_createIntArray(h);n=m.data;o=0;p=n.length;while(o<p){n[o]=0;o=o+1|0;}$p=16;continue _;case 39:AAI(a);if(I()){break _;}k=BcE;$p=40;case 40:AFx(a,g,k,bV);if(I()){break _;}$p=41;case 41:AAI(a);if(I()){break _;}k=BcF;$p=42;case 42:AFx(a,g,k,bV);if(I())
{break _;}$p=43;case 43:AAI(a);if(I()){break _;}k=BcG;c=50;$p=44;case 44:AFx(a,g,k,c);if(I()){break _;}$p=45;case 45:AAI(a);if(I()){break _;}k=BcH;c=50;$p=46;case 46:AFx(a,g,k,c);if(I()){break _;}k=a.c4;l=B(674);$p=47;case 47:ANk(k,l);if(I()){break _;}$p=48;case 48:AAI(a);if(I()){break _;}c=0;if(c>=10000){k=a.c4;l=B(675);$p=50;continue _;}t=(c*100|0)/10000|0;$p=52;continue _;case 49:AL7(a,g);if(I()){break _;}c=c+1|0;if(c<50){continue _;}bV=100;if(a.eU==2)bV=1000;$p=39;continue _;case 50:ANk(k,l);if(I()){break _;}$p
=51;case 51:AAI(a);if(I()){break _;}b1=AV7(g);c=0;if(c>=1000){g.qH=CF();g.pc=b;g.oB=B(676);if(a.lY==a.mX)return g;J(ASE(B0(Bd(E(Bd(E(Cd(),B(677)),a.mX),B(678)),a.lY))));}t=c*100.0/999.0;$p=53;continue _;case 52:AMC(a,t);if(I()){break _;}HN(g);c=c+1|0;if(c>=10000){k=a.c4;l=B(675);$p=50;continue _;}t=(c*100|0)/10000|0;continue _;case 53:AMC(a,t);if(I()){break _;}X6(b1);c=c+1|0;if(c>=1000){g.qH=CF();g.pc=b;g.oB=B(676);if(a.lY==a.mX)return g;J(ASE(B0(Bd(E(Bd(E(Cd(),B(677)),a.mX),B(678)),a.lY))));}t=c*100.0/999.0;continue _;default:
F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b0,b1,$p);}
function AUJ(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=b.g5;d=b.gZ;e=b.hx;f=c-3|0;g=c+3|0;h=d-2|0;i=d+2|0;j=e-3|0;k=e+3|0;l=d-1|0;m=f;while(true){n=Bw(m,g);if(n>0)break;o=h;while(true){p=Bw(o,i);if(p>0)break;q=j;while(true){r=Bw(q,k);if(r>0)break;s=Bw(o,l);if(s>=0)t=0;else{L();t=Bc8.b;}if(!(m!=f&&q!=j&&n&&r&&o!=h&&p)){L();t=Bct.b;if(s>=0)t=Bcx.b;}if(q==j&&m==c&&s>=0&&o<=d)t=0;By(b,m,o,q,t);q=q+1|0;}o=o+1|0;}m=m+1|0;}h=f+1|0;L();By(b,h,d,e,BcA.b);By(b,g-1|0,d,e,BcA.b);}
function AMe(a,b){var c,d,e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;if(c>=a.bi)return;d=c*100.0/(a.bi-1|0);$p=1;case 1:AMC(a,d);if(I()){break _;}e=0;while(e<a.cT){f=0;while(f<a.bS){g=O(b,c,e,f);L();if(g==Bcq.b){g=e+1|0;if(D5(b,c,g,f)>=4&&!CR(b,c,g,f).pR())H1(b,c,e,f,Bcp.b);}f=f+1|0;}e=e+1|0;}c=c+1|0;if(c>=a.bi)return;d=c*100.0/(a.bi-1|0);continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function AL7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(K(a.bi,a.bS),a.cT)/80000|0;d=0;e=c-1|0;while(d<c){if(!(d%100|0)){f=d*100.0/e;$p=1;continue _;}g=W(a.z,a.bi);h=W(a.z,a.cT);i=W(a.z,a.bS);j=0;while(j<25){k=0;l=g;m=h;n=i;while(k<20){l=l+(W(a.z,12)-W(a.z,12)|0)|0;m=m+(W(a.z,3)-W(a.z,6)|0)|0;n=n+(W(a.z,12)-W(a.z,12)
|0)|0;if(l>=0&&m>=0&&n>=0&&l<a.bi&&m<a.cT&&n<a.bS)Mb(b,l,m,n);k=k+1|0;}j=j+1|0;}d=d+1|0;}return;case 1:AMC(a,f);if(I()){break _;}while(true){g=W(a.z,a.bi);h=W(a.z,a.cT);i=W(a.z,a.bS);j=0;while(j<25){k=0;l=g;m=h;n=i;while(k<20){l=l+(W(a.z,12)-W(a.z,12)|0)|0;m=m+(W(a.z,3)-W(a.z,6)|0)|0;n=n+(W(a.z,12)-W(a.z,12)|0)|0;if(l>=0&&m>=0&&n>=0&&l<a.bi&&m<a.cT&&n<a.bS)Mb(b,l,m,n);k=k+1|0;}j=j+1|0;}d=d+1|0;if(d>=c)break;if(d%100|0)continue;else{f=d*100.0/e;continue _;}}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,
l,m,n,$p);}
function AFx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Long_div(Long_mul(Long_mul(Long_mul(Long_fromInt(a.bi),Long_fromInt(a.bS)),Long_fromInt(a.cT)),Long_fromInt(d)),Long_fromInt(1600000)).lo;e=0;f=d-1|0;while(e<d){if(!(e%100|0)){g=e*100.0/f;$p=1;continue _;}h=W(a.z,a.bi);i=W(a.z,a.cT);j=W(a.z,a.bS);k=0;while
(k<10){l=0;m=h;n=i;o=j;while(l<10){a:{m=m+(W(a.z,4)-W(a.z,4)|0)|0;n=n+(W(a.z,2)-W(a.z,2)|0)|0;o=o+(W(a.z,4)-W(a.z,4)|0)|0;if(m<0)break a;if(o<0)break a;if(n<=0)break a;if(m>=a.bi)break a;if(o>=a.bS)break a;if(n>=a.cT)break a;if(O(b,m,n,o))break a;if(!c.s8(b,m,n,o))break a;By(b,m,n,o,c.b);}l=l+1|0;}k=k+1|0;}e=e+1|0;}return;case 1:AMC(a,g);if(I()){break _;}while(true){h=W(a.z,a.bi);i=W(a.z,a.cT);j=W(a.z,a.bS);k=0;while(k<10){l=0;m=h;n=i;o=j;while(l<10){a:{m=m+(W(a.z,4)-W(a.z,4)|0)|0;n=n+(W(a.z,2)-W(a.z,2)|0)|
0;o=o+(W(a.z,4)-W(a.z,4)|0)|0;if(m<0)break a;if(o<0)break a;if(n<=0)break a;if(m>=a.bi)break a;if(o>=a.bS)break a;if(n>=a.cT)break a;if(O(b,m,n,o))break a;if(!c.s8(b,m,n,o))break a;By(b,m,n,o,c.b);}l=l+1|0;}k=k+1|0;}e=e+1|0;if(e>=d)break;if(e%100|0)continue;else{g=e*100.0/f;continue _;}}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AKt(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:f=0;g=b<<24>>24;h=a.bi;i=a.bS;j=a.cT;k=K((K(K(h,i),j)/256|0)/64|0,c)/100|0;l=0;m=k-1|0;n=h;o=j;p=i;q=e;r=d;if(l>=k)return f;s=l*100.0/m;$p=1;case 1:AMC(a,s);if(I()){break _;}t=N(a.z)*n;u=N(a.z)*o;v=N(a.z)*p;if(u<=q){w=(N(a.z)+N(a.z))*75.0*r/100.0|0;x=N(a.z)*3.1415927410125732*2.0;y=0.0;z=N(a.z)*3.1415927410125732*2.0;ba=0.0;bb=0;bc=w;while(bb<w){t=t+Bv(x)*Bp(z);v=v+Bp(x)*Bp(z);u=u+Bv(z);x=x+y*0.20000000298023224;y=y*0.8999999761581421+N(a.z)-N(a.z);z=(z+ba*0.5)*0.5;ba=ba*0.8999999761581421+N(a.z)-N(a.z);bd
=Bv(bb*3.1415927410125732/bc)*r/100.0+1.0;be=t-bd|0;j=t+bd|0;d=u-bd|0;e=u+bd|0;h=v-bd|0;b=v+bd|0;bf=bd*bd;while(be<=j){bg=d;while(bg<=e){bh=h;while(bh<=b){a:{s=be-t;bi=bg-u;bj=bh-v;if(s*s+bi*bi*2.0+bj*bj>=bf)break a;if(be<=0)break a;if(bg<=0)break a;if(bh<=0)break a;if(be>=(a.bi-1|0))break a;if(bg>=(a.cT-1|0))break a;if(bh>=(a.bS-1|0))break a;bk=K(K(bg,a.bS)+bh|0,a.bi)+be|0;c=a.dd.data[bk];L();if(c!=Bct.b)break a;a.dd.data[bk]=g;f=f+1|0;}bh=bh+1|0;}bg=bg+1|0;}be=be+1|0;}bb=bb+1|0;}}l=l+1|0;if(l>=k)return f;s
=l*100.0/m;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ALq(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();b=Bd7.b;if(a.eU==1)b=Bd8.b;c=K(K(a.bi,a.bS),a.cT)/1000|0;d=0;e=c-1|0;while(d<c){if(!(d%100|0)){f=d*100.0/e;$p=2;continue _;}g=W(a.z,a.bi);h=W(a.z,a.cT);i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640)))Dv(a,g,h,i,255,b);else Dv(a,
g,h,i,255,0);}d=d+1|0;}e=100.0;$p=1;case 1:AMC(a,e);if(I()){break _;}return;case 2:AMC(a,f);if(I()){break _;}while(true){g=W(a.z,a.bi);h=W(a.z,a.cT);i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640)))Dv(a,g,h,i,255,b);else Dv(a,g,h,i,255,0);}d=d+1|0;if(d>=c)break;if(d%100|0)continue;else{f=d*100.0/e;continue _;}}e=100.0;$p=1;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AAI(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lY=a.lY+1|0;a.EG=0.0;b=0.0;$p=1;case 1:AMC(a,b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,$p);}
function AMC(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b<0.0){c=new DF;Bb(c,B(679));J(c);}d=((a.lY-1|0)+b/100.0)*100.0/a.mX|0;c=a.c4;$p=1;case 1:ALQ(c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AA9(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(K(a.bi,a.bS),a.cT)/2000|0;c=a.hH;d=0;e=b-1|0;while(d<b){if(!(d%100|0)){f=d*100.0/e;$p=2;continue _;}g=W(a.z,a.bi);h=B4(B4(W(a.z,c),W(a.z,c)),B4(W(a.z,c),W(a.z,c)));i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640))){L();Dv(a,g,
h,i,255,Bd8.b);}else Dv(a,g,h,i,255,0);}d=d+1|0;}e=100.0;$p=1;case 1:AMC(a,e);if(I()){break _;}return;case 2:AMC(a,f);if(I()){break _;}while(true){g=W(a.z,a.bi);h=B4(B4(W(a.z,c),W(a.z,c)),B4(W(a.z,c),W(a.z,c)));i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640))){L();Dv(a,g,h,i,255,Bd8.b);}else Dv(a,g,h,i,255,0);}d=d+1|0;if(d>=b)break;if(d%100|0)continue;else{f=d*100.0/e;continue _;}}e=100.0;$p=1;continue _;default:F2();}}Dh().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function Dv(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;g=f<<24>>24;h=e<<24>>24;i=BV();j=1;k=1;while(1<<j<a.bi){j=j+1|0;}while(1<<k<a.bS){k=k+1|0;}l=a.bS-1|0;m=a.bi-1|0;n=1;a.ef.data[0]=(((c<<k)+d|0)<<j)+b|0;o=Long_ZERO;p=K(a.bi,a.bS);f=Bw(f,255);a:{while(n>0){n=n+(-1)|0;q=a.ef.data[n];if(!n&&CE(i)>0){a.ef=Ej(i,CE(i)-1|0);n=a.ef.data.length;}d=q>>j&l;c=j+k|0;r=q>>c;s=q&m;e=s;b:{while(e>0){if(a.dd.data[q-1|0]!=h)break b;e=e+(-1)|0;q=q+(-1)|0;}}while(s<a.bi&&a.dd.data[(q+s|0)-e|0]==h){s=
s+1|0;}t=q>>j&l;u=q>>c;if(!f){if(!e)break a;if(s==(a.bi-1|0))break a;if(!r)break a;if(r==(a.cT-1|0))break a;if(!d)break a;if(d==(a.bS-1|0))break a;}if(!(t==d&&u==r))Cm(Dr(),B(680));v=0;w=0;x=0;o=Long_add(o,Long_fromInt(s-e|0));while(e<s){a.dd.data[q]=g;if(d<=0)y=v;else{y=a.dd.data[q-a.bi|0]!=h?0:1;if(y&&!v){if(n!=a.ef.data.length)b=n;else{M(i,a.ef);a.ef=$rt_createIntArray(1048576);b=0;}z=a.ef.data;n=b+1|0;z[b]=q-a.bi|0;}}if(d>=(a.bS-1|0))ba=w;else{ba=a.dd.data[q+a.bi|0]!=h?0:1;if(ba&&!w){if(n!=a.ef.data.length)c
=n;else{M(i,a.ef);a.ef=$rt_createIntArray(1048576);c=0;}z=a.ef.data;n=c+1|0;z[c]=q+a.bi|0;}}if(r>0){z=a.dd.data;v=q-p|0;bb=z[v];L();if(!(g!=Bck.b&&g!=Bd8.b)&&!(bb!=Bcj.b&&bb!=Bd7.b))a.dd.data[v]=Bct.b<<24>>24;bc=bb!=h?0:1;if(bc&&!x){if(n!=a.ef.data.length)b=n;else{M(i,a.ef);a.ef=$rt_createIntArray(1048576);b=0;}z=a.ef.data;n=b+1|0;z[b]=v;}x=bc;}q=q+1|0;e=e+1|0;v=y;w=ba;}}return o;}return Long_fromInt(-1);}
function AOu(){EF.call(this);}
function AKF(){var a=new AOu();AWD(a);return a;}
function AWD(a){Z(a);}
function WH(){var a=this;CV.call(a);a.vN=null;a.B0=null;a.GT=0;a.fg=null;a.rV=0;}
function AQm(a){ES(a.ba);Ut(1);M(a.ba,CL(0,(a.bq/2|0)-100|0,(a.bM/4|0)+120|0,B(681)));M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+144|0,B(596)));Be(a.ba,0).fc=Q(GY(a.fg))<=1?0:1;}
function AQg(a){Ut(0);}
function ABN(a){a.rV=a.rV+1|0;}
function AFC(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.fc){if(!b.bC&&Q(GY(a.fg))>1){GY(a.fg);c=a.x;d=null;$p=2;continue _;}if(b.bC==1){b=a.x;c=a.vN;$p=1;continue _;}}return;case 1:AOR(b,c);if(I()){break _;}return;case 2:AOR(c,d);if(I()){break _;}c=a.x;$p=3;case 3:AEr(c);if(I()){break _;}if(b.bC!=1)return;b=a.x;c=a.vN;$p=1;continue _;default:F2();}}Dh().s(a,b,c,d,$p);}
function ANj(a,b,c){var d;if(c==14&&Q(a.fg)>0)a.fg=BP(a.fg,0,Q(a.fg)-1|0);if(Fy(B(682),b)>=0&&Q(a.fg)<64){d=new R;T(d);d=E(d,a.fg);Ce(d,b);a.fg=S(d);}Be(a.ba,0).fc=Q(GY(a.fg))<=1?0:1;}
function AFd(a,b,c,d){var e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(I()){break _;}Eh(a.cK,a.B0,a.bq/2|0,40,16777215);e=(a.bq/2|0)-100|0;f=(a.bM/2|0)-10|0;g=e-1|0;h=f-1|0;i=e+200|0;j=i+1|0;k=f+20|0;AGa(g,h,j,k+1|0,(-6250336));AGa(e,f,i,k,(-16777216));l=a.cK;m=new R;T(m);CG(l,S(E(E(m,a.fg),(a.rV/6|0)%2|0?B(9):B(541))),e+4|
0,f+6|0,14737632);$p=2;case 2:AN2(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function U4(){GA.call(this);this.zh=null;}
var BhF=null;function A9g(a){var b=new U4();ALL(b,a);return b;}
function ALL(a,b){var c;c=ON(b);if(c!==null&&!AD1(c)){a.zh=WF(c,1,0,0);if(a.zh!==null)return;b=new HR;Z(b);J(b);}b=new HR;Z(b);J(b);}
function AI7(a){a.zh=null;}
function AEg(){BhF=$rt_createByteArray(1);}
function V4(){Ev.call(this);this.xx=null;}
var BhG=null;function A8Y(a){var b=new V4();AJ_(b,a);return b;}
function AJ_(a,b){var c,$$je;if(Eb(Oq(b))){b=new HR;Bb(b,B(683));J(b);}c=AEG(b);if(c!==null)a:{try{AId(c,Oq(b));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}b=new HR;Z(b);J(b);}a.xx=WF(ON(b),0,1,0);if(a.xx!==null)return;b=new HR;Z(b);J(b);}
function AL5(a){a.xx=null;}
function AH7(){BhG=$rt_createByteArray(1);}
function Qb(){var a=this;C.call(a);a.l7=0;a.tp=0;a.vw=null;a.uI=null;}
function ADW(a,b){var c,d;c=0;while(c<=(3-a.l7|0)){d=0;while(d<=(3-a.tp|0)){if(Zr(a,b,c,d,1))return 1;if(Zr(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Zr(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.l7&&i<a.tp)j=!e?a.vw.data[h+K(i,a.l7)|0]:a.vw.data[((a.l7-h|0)-1|0)+K(i,a.l7)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function ADR(a){return OE(a.uI.bX,a.uI.s);}
function LG(a){return K(a.l7,a.tp);}
function Iv(){var a=this;C.call(a);a.DE=null;a.I8=Long_ZERO;a.Iq=0;a.zv=0;a.Hf=0;a.Js=0;a.vR=null;}
var BhH=0;var BhI=0;function AOb(a){var b,c,d,e,f;if(a.zv){b=new DF;Z(b);J(b);}b=CZ();c=WJ(a.vR).gz();while(c.jt()){d=c.ho();e=Co(a.vR,d);f=new Rf;f.x0=e;BI(b,d,f);}c=new Rh;c.FZ=b;return c;}
function ABW(){BhI=1;}
function HR(){BA.call(this);}
function AAd(){var a=this;C.call(a);a.qd=null;a.m0=0;}
function AJk(a){a.m0=a.m0+1|0;}
function AJR(a){return a.m0<a.qd.data.length?0:1;}
function Ws(a,b){return BF(a.qd.data[a.m0].ia+(b.dL+1.0|0)*0.5,a.qd.data[a.m0].h5,a.qd.data[a.m0].iv+(b.dL+1.0|0)*0.5);}
function Ic(){C.call(this);}
var A_M=null;var BhJ=null;var BhK=null;var BhL=null;var A_L=null;function AKs(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;A_M=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]
=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);BhJ=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);BhK=b;BhL=new YE;A_L
=new Ue;}
function Os(){C.call(this);}
var BhM=null;var BhN=null;function ALi(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=$rt_floatToIntBits(b);c.Ad=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uX=0;c.uJ=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=BhN.data;i=0;j=h.length;if(i>j){c=new BB;Z(c);J(c);}j=j-1|0;a:{while(true){k=(i+j|0)/2|0;l=h[k];if(l==f)break;if(f>=l){i=k+1|0;if(i>j){k= -k-2|0;break a;}}else{j=k-1|0;if(j<i){k= -k-1|0;break a;}}}}if
(k<0)k= -k-2|0;m=9+(f-BhN.data[k]|0)|0;n=Long_fromInt(e);i=Long_shru(Long_mul(n,Long_fromInt(BhM.data[k])),32-m|0).lo;if(i>=1000000000){k=k+1|0;m=9+(f-BhN.data[k]|0)|0;i=Long_shru(Long_mul(n,Long_fromInt(BhM.data[k])),32-m|0).lo;}f=(31-m|0)-g|0;j=f>=0?BhM.data[k]>>>f:BhM.data[k]<< -f;l=(j+1|0)>>1;o=j>>1;if(e==4194304)o=o>>2;p=10;while(p<=o){p=p*10|0;}if((i%p|0)>=(o/2|0))p=p/10|0;q=10;while(q<=l){q=q*10|0;}if((q-(i%q|0)|0)>(l/2|0))q=q/10|0;e=Bw(p,q);e=e>0?K(i/p|0,p):e<0?K(i/q|0,q)+q|0:K((i+(q/2|0)|0)/q|0,q);if
(e>=1000000000){k=k+1|0;e=e/10|0;}else if(e<100000000){k=k+(-1)|0;e=e*10|0;}c.uX=e;c.uJ=k-50|0;}
function AJE(){var b,c,d,e,f,g,h,i;BhM=$rt_createIntArray(100);BhN=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=BhM.data;g=d+50|0;f[g]=$rt_udiv(e,20);BhN.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=BhM.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);BhN.data[i]=c;d=d+1|0;}}
function Ue(){var a=this;C.call(a);a.uX=0;a.uJ=0;a.Ad=0;}
function GF(){BA.call(this);}
function Jw(){C.call(this);}
function ACO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$$je;if(e>=d&&e>=0){f=BP(c,d,e);d=e-d|0;g=0;h=b.fs;i=b.iW;j=b.sI;k=b.k2;l=b.lr;m=b.hQ;n=b.kU;o=Eo(f,35,0);if(EG(f,B(684))&&!EG(f,B(685))){p=2;i=(-1);e=Eo(f,47,p);g=Eo(f,63,p);if(g==(-1))g=e;else if(e!=(-1)&&e<=g)g=e;if(g==(-1)){k=B(9);g=d;}e=o==(-1)?g:o<g?o:g;q=Fu(f,64,e);m=BP(f,p,e);r=Bw(q,(-1));if(r>0){n=BP(f,p,q);p=q+1|0;}if(!r)q=p;a:{s=Eo(f,58,q);t=Fy(f,93);if(t==(-1))r=s;else{try{u=s;v=Q(f);r=t+1|0;if(v<=r){u=s;r=(-1);u=r;}else{u=s;if(P(f,
r)==58){u=r;u=s;}else{u=s;r=(-1);u=r;}u=r;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){}else{throw $$e;}}r=u;}}if(r!=(-1)&&r<=g){h=BP(f,p,r);w=BP(f,r+1|0,e);i=!Q(w)?(-1):Kg(w,10);}else h=BP(f,p,e);}r=Bw(o,(-1));if(r>0)j=BP(f,o+1|0,d);r=r?o:d;v=Fu(f,63,r);u=0;if(v<=(-1)){if(!o)v=r;else{l=null;v=r;}}else{l=BP(f,v+1|0,r);if(!v&&k!==null){if(BW(k,B(9)))k=B(30);else if(EG(k,B(30)))u=1;k=BP(k,0,Gu(k,47)+1|0);}}if(g>(-1)){if(g<d&&P(f,g)==47)k=BP(f,g,v);else if(v>g){if(k===null)k=B(9);else if(BW(k,B(9)))k
=B(30);else if(EG(k,B(30)))u=1;x=Gu(k,47)+1|0;if(!x)k=BP(f,g,v);else{c=new R;T(c);k=S(E(E(c,BP(k,0,x)),BP(f,g,v)));}}}if(k===null)k=B(9);if(h===null)h=B(9);if(u)k=AVA(k);KO(b,b.de,h,i,m,n,k,l,j);return;}b:{if(e<=(-2147483647)){if(d>=Q(c))break b;if(d<0)break b;}if(!(Pi(c,B(684),d)&&Eo(c,47,d+2|0)==(-1)))return;}b=new Iq;c=new R;T(c);Bb(b,S(Bd(E(c,B(686)),e)));J(b);}
function AVA(b){var c,d,e;while(true){c=LJ(b,B(687));if(c<0)break;d=new R;T(d);b=S(E(E(d,BP(b,0,c+1|0)),DO(b,c+3|0)));}if(Ow(b,B(688)))b=BP(b,0,Q(b)-1|0);while(true){e=LJ(b,B(689));if(e<0)break;if(!e){b=DO(b,e+3|0);continue;}d=new R;T(d);b=S(E(E(d,BP(b,0,Fu(b,47,e-1|0))),DO(b,e+3|0)));}if(Ow(b,B(690))&&Q(b)>3)b=BP(b,0,Fu(b,47,Q(b)-4|0)+1|0);return b;}
function AVY(a,b,c,d,e,f,g,h,i,j){KO(b,c,d,e,f,g,h,i,j);}
function AEH(a,b){var c,d,e,f;c=new R;T(c);E(c,b.de);Ce(c,58);d=b.hQ;if(d!==null&&Q(d)>0){E(c,B(684));E(c,b.hQ);}e=b.i1;f=b.sI;if(e!==null)E(c,e);if(f!==null){Ce(c,35);E(c,f);}return S(c);}
function YE(){C.call(this);}
function Gw(){C.call(this);}
function ADK(){var a=this;Gw.call(a);a.AK=null;a.CF=null;}
function S1(a,b){var c=new ADK();AVh(c,a,b);return c;}
function AVh(a,b,c){a.AK=b;a.CF=c;}
function KR(a,b,c){return EN(a.AK,b+EN(a.CF,b,c),c);}
function ADw(){var a=this;Gw.call(a);a.yC=null;a.DZ=0;}
function El(a,b){var c=new ADw();A6l(c,a,b);return c;}
function A6l(a,b,c){var d,e,f,g,h,i,j;a.DZ=c;a.yC=H(NQ,c);d=0;while(d<c){e=a.yC;f=new NQ;f.dp=$rt_createIntArray(512);g=0;while(g<256){h=f.dp.data;i=g+1|0;h[g]=g;g=i;}g=0;while(g<256){i=W(b,256-g|0)+g|0;j=f.dp.data[g];f.dp.data[g]=f.dp.data[i];f.dp.data[i]=j;f.dp.data[g+256|0]=f.dp.data[g];g=g+1|0;}e.data[d]=f;d=d+1|0;}}
function EN(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.DZ){d=d+AN9(a.yC.data[f],b/e,c/e)*e;e=e*2.0;f=f+1|0;}return d;}
function Z1(){Dn.call(this);this.E7=null;}
function ARX(a){var b,c;b=ABv(AF5(a.E7));c=new TC;c.Jh=a;c.xb=b;return c;}
function QF(){Jw.call(this);}
function A70(a,b){var c,d,e;c=new QY;c.I8=Long_fromInt(-1);c.Iq=BhI;c.Hf=1;c.Js=BhH;c.vR=CZ();c.DE=b;d=H(BC,7);e=d.data;e[0]=B(691);e[1]=B(167);e[2]=B(692);e[3]=B(693);e[4]=B(694);e[5]=B(695);e[6]=B(696);c.GP=d;c.Aa=B(691);c.ja=(-1);c.HH=BhO;c.KF=(-1);c.JW=(-1);c.wm=CZ();c.q1=CZ();return c;}
function ADI(){Jw.call(this);this.JA=0;}
function AZ8(a){var b=new ADI();ATI(b,a);return b;}
function ATI(a,b){a.JA=b;}
function A1x(a,b){var c,d;c=new BA;d=new R;T(d);Bb(c,S(E(E(d,B(697)),b.de)));J(c);}
function NQ(){Gw.call(this);this.dp=null;}
function Xp(b){return b*b*b*(b*(b*6.0-15.0)+10.0);}
function Hl(b,c,d){return c+b*(d-c);}
function GS(b,c,d,e){var f;b=b&15;f=b>=8?d:c;if(b>=4)d=b!=12&&b!=14?e:c;if(b&1)f= -f;if(b&2)d= -d;return f+d;}
function AN9(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Em(b)&255;e=Em(c)&255;f=Em(0.0)&255;g=b-Em(b);b=c-Em(c);c=0.0-Em(0.0);h=Xp(g);i=Xp(b);j=Xp(c);k=a.dp.data[d]+e|0;l=a.dp.data[k]+f|0;k=a.dp.data[k+1|0]+f|0;d=a.dp.data[d+1|0]+e|0;e=a.dp.data[d]+f|0;f=a.dp.data[d+1|0]+f|0;m=GS(a.dp.data[l],g,b,c);d=a.dp.data[e];n=g-1.0;o=Hl(h,m,GS(d,n,b,c));d=a.dp.data[k];p=b-1.0;q=Hl(i,o,Hl(h,GS(d,g,p,c),GS(a.dp.data[f],n,p,c)));d=a.dp.data[l+1|0];c=c-1.0;return Hl(j,q,Hl(i,Hl(h,GS(d,g,b,c),GS(a.dp.data[e+1|0],n,b,c)),Hl(h,
GS(a.dp.data[k+1|0],g,p,c),GS(a.dp.data[f+1|0],n,p,c))));}
function NP(){var a=this;C.call(a);a.hE=null;a.mw=null;}
function AWf(a){return a.mw;}
function Vs(a,b){var c;c=a.mw;a.mw=b;return c;}
function ATQ(a){return a.hE;}
function A1Y(a,b){var c;if(!Jb(b,HO))return 0;a:{c=b;if(a.hE===null){if(c.nY()===null)break a;}else if(Z3(a.hE,c.nY()))break a;return 0;}return a.mw!==null?Z3(a.mw,c.mQ()):c.mQ()!==null?0:1;}
function IG(){var a=this;NP.call(a);a.d4=null;a.dV=null;a.kJ=0;a.kP=0;}
function AIL(a){var b;b=M3(a);if(b==2){if(M3(a.dV)<0)a.dV=Qp(a.dV);return Re(a);}if(b!=(-2))return a;if(M3(a.d4)>0)a.d4=Re(a.d4);return Qp(a);}
function M3(a){return (a.dV===null?0:a.dV.kJ)-(a.d4===null?0:a.d4.kJ)|0;}
function Qp(a){var b;b=a.d4;a.d4=b.dV;b.dV=a;JM(a);JM(b);return b;}
function Re(a){var b;b=a.dV;a.dV=b.d4;b.d4=a;JM(a);JM(b);return b;}
function JM(a){var b,c;b=a.dV===null?0:a.dV.kJ;c=a.d4===null?0:a.d4.kJ;a.kJ=Df(b,c)+1|0;a.kP=1;if(a.d4!==null)a.kP=a.kP+a.d4.kP|0;if(a.dV!==null)a.kP=a.kP+a.dV.kP|0;}
function G3(a,b){return b?a.dV:a.d4;}
function Jn(a,b){return b?a.d4:a.dV;}
function TC(){var a=this;C.call(a);a.xb=null;a.Jh=null;}
function AV_(a){return AMT(a.xb);}
function A3t(a){return X4(a.xb).hE;}
function K7(){var a=this;Iv.call(a);a.GP=null;a.Aa=null;a.ja=0;a.vt=null;a.HH=0;a.KF=0;a.JW=0;}
var BhO=0;function AFB(){BhO=1;}
function QY(){var a=this;K7.call(a);a.gS=null;a.CS=null;a.n5=null;a.C1=null;a.wm=null;a.I2=null;a.Gk=null;a.q1=null;a.zO=0;}
function AOH(a){var b,c,d,e,f,g;if(a.zv)return;a.gS=new XMLHttpRequest();b=a.gS;c=a.Aa;d=S3(a.DE);b.open($rt_ustr(c),$rt_ustr(d));b=AMQ(ANC(AOb(a)));while(AJC(b)){c=U1(b);e=Hq(c.wZ);while(JO(e)){f=Il(e);g=a.gS;d=c.vS;g.setRequestHeader($rt_ustr(d),$rt_ustr(f));}}b=a.gS;c="arraybuffer";b.responseType=c;a.zv=1;}
function AAn(a){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hs=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9o(callback);return thread.suspend(function(){try{AVu(a,callback);}catch($e){callback.J6($rt_exception($e));}});}
function AVu(a,b){var c,d,e,f,g,h;c=a.gS;d=new Xb;d.Fh=a;d.Fi=b;b=Cs(d,"stateChanged");c.onreadystatechange=b;if(a.CS===null)a.gS.send();else{e=a.CS.JY().data;f=e.length;c=new Int8Array(f);g=0;while(g<f){h=e[g];c[g]=h;g=g+1|0;}b=a.gS;c=c.buffer;b.send(c);}}
function AK0(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOH(a);if(a.zO){b=a.ja/100|0;if(b!=4&&b!=5)return a.n5;a.n5=Ju($rt_createByteArray(0));c=new BA;d=new R;T(d);Bb(c,S(E(E(Bd(E(d,B(698)),a.ja),B(699)),a.vt)));J(c);}a.zO=1;$p=1;case 1:AAn(a);if(I()){break _;}b=a.ja/100|0;if(b!=4&&b!=5)return a.n5;a.n5=Ju($rt_createByteArray(0));c=new BA;d=new R;T(d);Bb(c,S(E(E(Bd(E(d,B(698)),a.ja),B(699)),a.vt)));J(c);default:F2();}}Dh().s(a,
b,c,d,$p);}
function YV(){var a=this;C.call(a);a.Bs=null;a.Fu=null;a.wB=0;a.qZ=0;}
function O6(a){return DI(a.Bs);}
function AIF(a,b){return BT(a.Fu)<b?0:1;}
function A7n(a,b){a.wB=b;}
function A59(a,b){a.qZ=b;}
function Xw(){var a=this;C.call(a);a.h=null;a.fM=0;a.uA=null;a.z7=0;a.iD=0;a.kv=0;a.dh=0;a.vp=null;}
function AJN(a,b){var c,d,e,f,g,h,i,j;c=new XS;c.q8=(-1);c.s1=(-1);c.GC=a;c.FC=a.vp;c.p6=b;c.q8=0;c.s1=Q(c.p6);d=new YY;e=c.q8;f=c.s1;g=a.iD;h=AND(a);i=AEZ(a);d.lo=(-1);j=g+1|0;d.Az=j;d.gw=$rt_createIntArray(j*2|0);d.pm=$rt_createIntArray(i);Js(d.pm,(-1));if(h>0)d.yd=$rt_createIntArray(h);Js(d.gw,(-1));Z2(d,b,e,f);c.du=d;return c;}
function AIh(a,b,c){var d,e,f,g,h,i;d=BV();e=AJN(a,b);f=0;g=0;if(!Q(b)){h=H(BC,1);h.data[0]=B(9);return h;}while(AC3(e)){i=f+1|0;if(i>=c&&c>0)break;M(d,BP(b,g,AGX(e)));g=AJw(e);f=i;}a:{M(d,BP(b,g,Q(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Q(Be(d,f)))break a;Ej(d,f);}}if(f<0)f=0;return HW(d,H(BC,f));}
function AIg(a,b){return AIh(a,b,0);}
function Om(a){return a.h.eH;}
function U$(a,b,c,d){var e,f,g,h,i;e=BV();f=a.fM;g=0;if(c!=a.fM)a.fM=c;a:{switch(b){case -1073741784:h=new Sn;c=a.dh+1|0;a.dh=c;H2(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new RH;c=a.dh+1|0;a.dh=c;H2(h,c);break a;case -33554392:h=new S7;c=a.dh+1|0;a.dh=c;H2(h,c);break a;default:a.iD=a.iD+1|0;if(d!==null)h=A$3(a.iD);else{h=new HA;H2(h,0);g=1;}if(a.iD<=(-1))break a;if(a.iD>=10)break a;a.uA.data[a.iD]=h;break a;}h=new Z5;H2(h,(-1));}while(true){if(GK(a.h)&&a.h.B==(-536870788))
{d=A7t(CU(a,2),CU(a,64));while(!EE(a.h)&&GK(a.h)&&!(a.h.B&&a.h.B!=(-536870788)&&a.h.B!=(-536870871))){Dq(d,Bz(a.h));if(a.h.cC!=(-536870788))continue;Bz(a.h);}i=M0(a,d);i.ci(h);}else if(a.h.cC==(-536870788)){i=JQ(h);Bz(a.h);}else{i=WD(a,h);if(a.h.cC==(-536870788))Bz(a.h);}if(i!==null)M(e,i);if(EE(a.h))break;if(a.h.cC==(-536870871))break;}if(a.h.ra==(-536870788))M(e,JQ(h));if(a.fM!=f&&!g){a.fM=f;AIM(a.h,a.fM);}switch(b){case -1073741784:break;case -536870872:d=new VB;HB(d,e,h);return d;case -268435416:d=new Zo;HB(d,
e,h);return d;case -134217688:d=new Xz;HB(d,e,h);return d;case -67108824:d=new Tu;HB(d,e,h);return d;case -33554392:d=new Fc;HB(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A$Y(Be(e,0),h);default:return A9m(e,h);}return JQ(h);}d=new L0;HB(d,e,h);return d;}
function AMV(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!EE(a.h)&&GK(a.h)){e=b.data;c=Bz(a.h);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.h.cC;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;Bz(a.h);f=a.h.cC;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;Bz(a.h);return A7i(e,3);}return A7i(e,2);}if(!CU(a,2))return ACd(b[0]);if(CU(a,64))return A50(b[0]);return A0Z(b[0]);}e=b.data;c=1;while(c<4&&!EE(a.h)&&GK(a.h)){f=c+1|0;e[c]=Bz(a.h);c=f;}if(c==1){f=e[0];if(!(BhP.wa(f)
==BhQ?0:1))return U5(a,e[0]);}if(!CU(a,2))return A_t(b,c);if(CU(a,64)){g=new U0;QP(g,b,c);return g;}g=new Yz;QP(g,b,c);return g;}
function WD(a,b){var c,d,e,f;if(GK(a.h)&&!Mk(a.h)&&OD(a.h.B)){if(CU(a,128)){c=AMV(a);if(!EE(a.h)&&!(a.h.cC==(-536870871)&&!(b instanceof HA))&&a.h.cC!=(-536870788)&&!GK(a.h))c=NI(a,b,c);}else if(!V8(a.h)&&!YZ(a.h)){d=new Kh;T(d);while(!EE(a.h)&&GK(a.h)&&!V8(a.h)&&!YZ(a.h)&&!(!(!Mk(a.h)&&!a.h.B)&&!(!Mk(a.h)&&OD(a.h.B))&&a.h.B!=(-536870871)&&(a.h.B&(-2147418113))!=(-2147483608)&&a.h.B!=(-536870788)&&a.h.B!=(-536870876))){e=Bz(a.h);if(!NE(e))Ce(d,e&65535);else Ib(d,JE(e));}if(!CU(a,2))c=A9f(d);else if(CU(a,64))c
=A_r(d);else{c=new Qs;E$(c);c.p7=S(d);c.c_=PR(d);}}else c=NI(a,b,ZS(a,b));}else if(a.h.cC!=(-536870871))c=NI(a,b,ZS(a,b));else{if(b instanceof HA)J(CC(B(9),a.h.eH,a.h.ig));c=JQ(b);}if(!EE(a.h)&&!(a.h.cC==(-536870871)&&!(b instanceof HA))&&a.h.cC!=(-536870788)){f=WD(a,b);if(c instanceof Ef&&!(c instanceof Hi)&&!(c instanceof D7)&&!(c instanceof Gk)){b=c;if(!f.dR(b.bW)){c=new UD;Gy(c,b.bW,b.m,b.qo);c.bW.ci(c);}}if((f.pi()&65535)!=43)c.ci(f);else c.ci(f.bW);}else{if(c===null)return null;c.ci(b);}if((c.pi()&65535)
!=43)return c;return c.bW;}
function NI(a,b,c){var d,e,f,g;d=a.h.cC;if(c!==null&&!(c instanceof CA)){switch(d){case -2147483606:Bz(a.h);e=new Vp;Et(e,c,b,d);c.ci(BhR);return e;case -2147483605:Bz(a.h);e=new W1;Et(e,c,b,(-2147483606));c.ci(BhR);return e;case -2147483585:Bz(a.h);e=new Rv;Et(e,c,b,(-536870849));c.ci(BhR);return e;case -2147483525:e=new Qo;f=HU(a.h);d=a.kv+1|0;a.kv=d;NU(e,f,c,b,(-536870849),d);c.ci(BhR);return e;case -1073741782:case -1073741781:Bz(a.h);f=new Sh;Et(f,c,b,d);c.ci(f);return f;case -1073741761:Bz(a.h);f=new Xh;Et(f,
c,b,(-536870849));c.ci(b);return f;case -1073741701:f=new T2;e=HU(a.h);g=a.kv+1|0;a.kv=g;NU(f,e,c,b,(-536870849),g);c.ci(f);return f;case -536870870:case -536870869:Bz(a.h);if(c.pi()!=(-2147483602)){f=new D7;Et(f,c,b,d);}else if(CU(a,32)){f=new Sj;Et(f,c,b,d);}else{f=new Wf;e=WN(a.fM);Et(f,c,b,d);f.uT=e;}c.ci(f);return f;case -536870849:Bz(a.h);f=new Is;Et(f,c,b,(-536870849));c.ci(b);return f;case -536870789:f=new HV;e=HU(a.h);g=a.kv+1|0;a.kv=g;NU(f,e,c,b,(-536870849),g);c.ci(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:Bz(a.h);f=new AAg;Gy(f,e,b,d);e.m=f;return f;case -2147483585:Bz(a.h);c=new Uy;Gy(c,e,b,(-2147483585));return c;case -2147483525:c=new WC;SE(c,HU(a.h),e,b,(-2147483525));return c;case -1073741782:case -1073741781:Bz(a.h);f=new Xd;Gy(f,e,b,d);e.m=f;return f;case -1073741761:Bz(a.h);c=new YB;Gy(c,e,b,(-1073741761));return c;case -1073741701:c=new R7;SE(c,HU(a.h),e,b,(-1073741701));return c;case -536870870:case -536870869:Bz(a.h);f=A9E(e,b,d);e.m
=f;return f;case -536870849:Bz(a.h);c=new Gk;Gy(c,e,b,(-536870849));return c;case -536870789:return A$v(HU(a.h),e,b,(-536870789));default:}return c;}
function ZS(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HA;while(true){a:{e=Lv(a.h);if((e&(-2147418113))==(-2147483608)){Bz(a.h);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fM=f;else{if(e!=(-1073741784))f=a.fM;c=U$(a,e,f,b);if(Lv(a.h)!=(-536870871))J(CC(B(9),EU(a.h),IH(a.h)));Bz(a.h);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.iD<g)J(CC(B(9),
EU(a.h),IH(a.h)));Bz(a.h);a.dh=a.dh+1|0;c=!CU(a,2)?A$a(g,a.dh):CU(a,64)?A9d(g,a.dh):A_q(g,a.dh);a.uA.data[g].xi=1;a.z7=1;break a;case -2147483583:break;case -2147483582:Bz(a.h);c=A67(0);break a;case -2147483577:Bz(a.h);c=A88();break a;case -2147483558:Bz(a.h);c=new UU;g=a.dh+1|0;a.dh=g;ANn(c,g);break a;case -2147483550:Bz(a.h);c=A67(1);break a;case -2147483526:Bz(a.h);c=A9V();break a;case -536870876:break c;case -536870866:Bz(a.h);if(CU(a,32)){c=A95();break a;}c=A9I(WN(a.fM));break a;case -536870821:Bz(a.h);h
=0;if(Lv(a.h)==(-536870818)){h=1;Bz(a.h);}c=AEJ(a,h,b);if(Lv(a.h)!=(-536870819))J(CC(B(9),EU(a.h),IH(a.h)));Ww(a.h,1);Bz(a.h);break a;case -536870818:Bz(a.h);a.dh=a.dh+1|0;if(!CU(a,8)){c=AXx();break a;}c=A_c(WN(a.fM));break a;case 0:i=RC(a.h);if(i!==null)c=M0(a,i);else{if(EE(a.h)){c=JQ(b);break a;}c=ACd(e&65535);}Bz(a.h);break a;default:break b;}Bz(a.h);c=AXx();break a;}Bz(a.h);a.dh=a.dh+1|0;if(CU(a,8)){if(CU(a,1)){c=A9e(a.dh);break a;}c=A8Q(a.dh);break a;}if(CU(a,1)){c=A9q(a.dh);break a;}c=A9P(a.dh);break a;}if
(e>=0&&!I7(a.h)){c=U5(a,e);Bz(a.h);}else if(e==(-536870788))c=JQ(b);else{if(e!=(-536870871))J(CC(!I7(a.h)?UQ(e&65535):RC(a.h).eN(),EU(a.h),IH(a.h)));if(d)J(CC(B(9),EU(a.h),IH(a.h)));c=JQ(b);}}}if(e!=(-16777176))break;}return c;}
function AEJ(a,b,c){var d;d=M0(a,Jp(a,b));d.ci(c);return d;}
function Jp(a,b){var c,d,e,f,g,h,i,j,$$je;c=A7t(CU(a,2),CU(a,64));FY(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(EE(a.h))break a;f=a.h.cC==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.h.cC){case -536870874:if(d>=0)Dq(c,d);d=Bz(a.h);if(a.h.cC!=(-536870874)){d=38;break d;}if(a.h.B==(-536870821)){Bz(a.h);e=1;d=(-1);break d;}Bz(a.h);if(g){c=Jp(a,0);break d;}if(a.h.cC==(-536870819))break d;UH(c,Jp(a,0));break d;case -536870867:if(!g&&a.h.B!=(-536870819)&&a.h.B!=(-536870821)&&d>=0){Bz(a.h);h=a.h.cC;if(I7(a.h))break c;if
(h<0&&a.h.B!=(-536870819)&&a.h.B!=(-536870821)&&d>=0)break c;e:{try{if(OD(h))break e;h=h&65535;break e;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){break b;}else{throw $$e;}}}try{Cy(c,d,h);}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){break b;}else{throw $$e;}}Bz(a.h);d=(-1);break d;}if(d>=0)Dq(c,d);d=45;Bz(a.h);break d;case -536870821:if(d>=0){Dq(c,d);d=(-1);}Bz(a.h);i=0;if(a.h.cC==(-536870818)){Bz(a.h);i=1;}if(!e)AHV(c,Jp(a,i));else UH(c,Jp(a,i));e=0;Bz(a.h);break d;case -536870819:if(d>=0)Dq(c,d);d=
93;Bz(a.h);break d;case -536870818:if(d>=0)Dq(c,d);d=94;Bz(a.h);break d;case 0:if(d>=0)Dq(c,d);j=a.h.lq;if(j===null)d=0;else{AOI(c,j);d=(-1);}Bz(a.h);break d;default:}if(d>=0)Dq(c,d);d=Bz(a.h);}g=0;}J(CC(B(9),Om(a),a.h.ig));}J(CC(B(9),Om(a),a.h.ig));}if(!f){if(d>=0)Dq(c,d);return c;}J(CC(B(9),Om(a),a.h.ig-1|0));}
function U5(a,b){var c,d,e;c=NE(b);if(CU(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A0Z(b&65535);}if(CU(a,64)&&b>128){if(c){d=new Vv;E$(d);d.c_=2;d.Ba=Hy(Hw(b));return d;}if(Rl(b))return AVk(b&65535);if(!SR(b))return A50(b&65535);return A3g(b&65535);}}if(!c){if(Rl(b))return AVk(b&65535);if(!SR(b))return ACd(b&65535);return A3g(b&65535);}d=new Fi;E$(d);d.c_=2;d.kW=b;e=JE(b).data;d.t1=e[0];d.sV=e[1];return d;}
function M0(a,b){var c,d,e;if(!AK7(b)){if(!b.ch){if(b.ot())return ASV(b);return AXr(b);}if(!b.ot())return A3u(b);c=new NV;YH(c,b);return c;}c=ABg(b);d=new Qa;Cx(d);d.AS=c;d.IH=c.cq;if(!b.ch){if(b.ot())return AE_(ASV(Li(b)),d);return AE_(AXr(Li(b)),d);}if(!b.ot())return AE_(A3u(Li(b)),d);c=new RV;e=new NV;YH(e,Li(b));AG2(c,e,d);return c;}
function AZK(a){return a.iD;}
function AND(a){return a.kv+1|0;}
function AEZ(a){return a.dh+1|0;}
function Lj(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function CU(a,b){return (a.fM&b)!=b?0:1;}
function VV(){var a=this;Do.call(a);a.nh=null;a.hW=null;a.o1=0;a.rN=0;a.Bx=0.0;}
function AKS(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.o1+c)/a.rN;d=i*i;j=a.nh.f;k=a.nh.j;i=a.nh.g;l=a.hW.ec+(a.hW.f-a.hW.ec)*c;e=a.hW.eb+(a.hW.j-a.hW.eb)*c+a.Bx;m=a.hW.ea+(a.hW.g-a.hW.ea)*c;f=j+(l-j)*d;e=k+(e-k)*d;d=i+(m-i)*d;g=DT(a.A,f|0,e|0,d|0);BJ(g,g,g,1.0);b=BdQ;n=a.nh;g=a.nh.I;$p=1;case 1:AGf(b,n,f,e,d,g,c);if
(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ARV(a){a.o1=a.o1+1|0;if(a.o1==a.rN)CN(a);}
function A0g(a){return 2;}
function ZF(){}
function Xs(){var a=this;C.call(a);a.C3=null;a.m5=null;}
function AD1(a){var b;b=Mn(a);return b!==null&&b.yW()?1:0;}
function WF(a,b,c,d){var e;e=Mn(a);return e===null?null:e.uq(b,c,d);}
function AId(a,b){var c;c=Mn(a);if(c===null){c=new BA;Bb(c,B(700));J(c);}return c.zV(b)===null?0:1;}
function Mn(a){var b,c,d;b=a.C3.Ao;c=0;if(EG(a.m5,B(30)))c=1;a:{while(c<Q(a.m5)){d=Eo(a.m5,47,c);if(d<0)d=Q(a.m5);b=b.FA(BP(a.m5,c,d));if(b===null)break a;c=d+1|0;}}return b;}
function ET(){BB.call(this);}
function B_(){var a=this;C.call(a);a.m=null;a.eI=0;a.DR=null;a.qo=0;}
var A_H=0;function BhS(){var a=new B_();Cx(a);return a;}
function BhT(a){var b=new B_();OP(b,a);return b;}
function Cx(a){var b,c;b=new GT;c=A_H;A_H=c+1|0;Mx(b,c);a.DR=NF(b);}
function OP(a,b){var c,d;c=new GT;d=A_H;A_H=d+1|0;Mx(c,d);a.DR=NF(c);a.m=b;}
function Kk(a,b,c,d){var e;e=d.bO;while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function Kt(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A0$(a,b){a.qo=b;}
function A0R(a){return a.qo;}
function AWW(a){return a.m;}
function AXG(a,b){a.m=b;}
function A7k(a,b){return 1;}
function A72(a){return null;}
function L4(a){var b;a.eI=1;if(a.m!==null){if(!a.m.eI){b=a.m.lX();if(b!==null){a.m.eI=1;a.m=b;}a.m.i_();}else if(a.m instanceof JG&&a.m.f4.xi)a.m=a.m.m;}}
function AHh(){A_H=1;}
function D6(){var a=this;B_.call(a);a.xi=0;a.ik=0;}
var BhR=null;function A$3(a){var b=new D6();H2(b,a);return b;}
function H2(a,b){Cx(a);a.ik=b;}
function AP0(a,b,c,d){var e,f;e=KU(d,a.ik);N8(d,a.ik,b);f=a.m.e(b,c,d);if(f<0)N8(d,a.ik,e);return f;}
function A4k(a){return a.ik;}
function AQn(a,b){return 0;}
function AJA(){var b;b=new V$;Cx(b);BhR=b;}
function I0(){var a=this;C.call(a);a.bR=null;a.mz=0;a.h6=0;a.CA=0;a.ra=0;a.cC=0;a.B=0;a.EU=0;a.lq=null;a.jL=null;a.be=0;a.qA=0;a.ig=0;a.p5=0;a.eH=null;}
var BhU=null;var BhP=null;var BhQ=0;function Lv(a){return a.cC;}
function Ww(a,b){if(b>0&&b<3)a.h6=b;if(b==1){a.B=a.cC;a.jL=a.lq;a.be=a.p5;a.p5=a.ig;Hg(a);}}
function AIM(a,b){a.mz=b;a.B=a.cC;a.jL=a.lq;a.be=a.ig+1|0;a.p5=a.ig;Hg(a);}
function RC(a){return a.lq;}
function I7(a){return a.lq===null?0:1;}
function Mk(a){return a.jL===null?0:1;}
function Bz(a){Hg(a);return a.ra;}
function HU(a){var b;b=a.lq;Hg(a);return b;}
function AZ$(a){return a.B;}
function AR$(a){return a.ra;}
function Hg(a){var b,c,d,e,f,$$je;a.ra=a.cC;a.cC=a.B;a.lq=a.jL;a.ig=a.p5;a.p5=a.be;while(true){b=0;a.B=a.be>=a.bR.data.length?0:Nq(a);a.jL=null;if(a.h6==4){if(a.B!=92)return;a.B=a.be>=a.bR.data.length?0:a.bR.data[Cw(a)];switch(a.B){case 69:break;default:a.B=92;a.be=a.qA;return;}a.h6=a.CA;a.B=a.be>(a.bR.data.length-2|0)?0:Nq(a);}a:{if(a.B!=92){if(a.h6==1)switch(a.B){case 36:a.B=(-536870876);break a;case 40:if(a.bR.data[a.be]!=63){a.B=(-2147483608);break a;}Cw(a);c=a.bR.data[a.be];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.B=(-134217688);Cw(a);break b;default:J(CC(B(9),EU(a),a.be));}a.B=(-67108824);Cw(a);}else{switch(c){case 33:break;case 60:Cw(a);c=a.bR.data[a.be];d=1;break b;case 61:a.B=(-536870872);Cw(a);break b;case 62:a.B=(-33554392);Cw(a);break b;default:a.B=AOB(a);if(a.B<256){a.mz=a.B;a.B=a.B<<16;a.B=(-1073741784)|a.B;break b;}a.B=a.B&255;a.mz=a.B;a.B=a.B<<16;a.B=(-16777176)|a.B;break b;}a.B=(-268435416);Cw(a);}}if(!d)break;}break a;case 41:a.B=(-536870871);break a;case 42:case 43:case 63:switch
(a.be>=a.bR.data.length?42:a.bR.data[a.be]){case 43:a.B=a.B|(-2147483648);Cw(a);break a;case 63:a.B=a.B|(-1073741824);Cw(a);break a;default:}a.B=a.B|(-536870912);break a;case 46:a.B=(-536870866);break a;case 91:a.B=(-536870821);Ww(a,2);break a;case 93:if(a.h6!=2)break a;a.B=(-536870819);break a;case 94:a.B=(-536870818);break a;case 123:a.jL=AGw(a,a.B);break a;case 124:a.B=(-536870788);break a;default:}else if(a.h6==2)switch(a.B){case 38:a.B=(-536870874);break a;case 45:a.B=(-536870867);break a;case 91:a.B=(-536870821);break a;case 93:a.B
=(-536870819);break a;case 94:a.B=(-536870818);break a;default:}}else{c=a.be>=(a.bR.data.length-2|0)?(-1):Nq(a);c:{a.B=c;switch(a.B){case -1:J(CC(B(9),EU(a),a.be));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.B
=AEO(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h6!=1)break a;a.B=(-2147483648)|a.B;break a;case 65:a.B=(-2147483583);break a;case 66:a.B=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(CC(B(9),EU(a),a.be));case 68:case 83:case 87:case 100:case 115:case 119:a.jL=Sx(IJ(a.bR,
a.qA,1),0);a.B=0;break a;case 71:a.B=(-2147483577);break a;case 80:case 112:break c;case 81:a.CA=a.h6;a.h6=4;b=1;break a;case 90:a.B=(-2147483558);break a;case 97:a.B=7;break a;case 98:a.B=(-2147483550);break a;case 99:if(a.be>=(a.bR.data.length-2|0))J(CC(B(9),EU(a),a.be));a.B=a.bR.data[Cw(a)]&31;break a;case 101:a.B=27;break a;case 102:a.B=12;break a;case 110:a.B=10;break a;case 114:a.B=13;break a;case 116:a.B=9;break a;case 117:a.B=W2(a,4);break a;case 120:a.B=W2(a,2);break a;case 122:a.B=(-2147483526);break a;default:}break a;}e
=ALu(a);f=0;if(a.B==80)f=1;try{a.jL=Sx(e,f);}catch($$e){$$je=Bh($$e);if($$je instanceof NY){J(CC(B(9),EU(a),a.be));}else{throw $$e;}}a.B=0;}}if(b)continue;else break;}}
function ALu(a){var b,c,d;b=new R;Hh(b,10);if(a.be<(a.bR.data.length-2|0)){if(a.bR.data[a.be]!=123){b=new R;T(b);return S(E(E(b,B(701)),IJ(a.bR,Cw(a),1)));}Cw(a);c=0;a:{while(a.be<(a.bR.data.length-2|0)){c=a.bR.data[Cw(a)];if(c==125)break a;Ce(b,c);}}if(c!=125)J(CC(B(9),a.eH,a.be));}if(!Lh(b))J(CC(B(9),a.eH,a.be));d=S(b);if(Q(d)==1){b=new R;T(b);return S(E(E(b,B(701)),d));}b:{c:{if(Q(d)>3){if(EG(d,B(701)))break c;if(EG(d,B(702)))break c;}break b;}d=DO(d,2);}return d;}
function AGw(a,b){var c,d,e,f,$$je;c=new R;Hh(c,4);d=(-1);e=2147483647;a:{while(true){if(a.be>=a.bR.data.length)break a;b=a.bR.data[Cw(a)];if(b==125)break a;if(b==44&&d<0)try{d=Kg(B0(c),10);AGF(c,0,Lh(c));continue;}catch($$e){$$je=Bh($$e);if($$je instanceof ET){break;}else{throw $$e;}}Ce(c,b&65535);}J(CC(B(9),a.eH,a.be));}if(b!=125)J(CC(B(9),a.eH,a.be));if(Lh(c)>0)b:{try{e=Kg(B0(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bh($$e);if($$je instanceof ET){}else{throw $$e;}}J(CC(B(9),a.eH,a.be));}else if
(d<0)J(CC(B(9),a.eH,a.be));if((d|e|(e-d|0))<0)J(CC(B(9),a.eH,a.be));f=a.be>=a.bR.data.length?42:a.bR.data[a.be];c:{switch(f){case 43:a.B=(-2147483525);Cw(a);break c;case 63:a.B=(-1073741701);Cw(a);break c;default:}a.B=(-536870789);}c=new VL;c.jo=d;c.ix=e;return c;}
function EU(a){return a.eH;}
function EE(a){return !a.cC&&!a.B&&a.be==a.EU&&!I7(a)?1:0;}
function OD(b){return b<0?0:1;}
function GK(a){return !EE(a)&&!I7(a)&&OD(a.cC)?1:0;}
function V8(a){return a.cC<=56319&&a.cC>=55296?1:0;}
function YZ(a){return a.cC<=57343&&a.cC>=56320?1:0;}
function SR(b){return b<=56319&&b>=55296?1:0;}
function Rl(b){return b<=57343&&b>=56320?1:0;}
function W2(a,b){var c,d,e,f,$$je;c=new R;Hh(c,b);d=a.bR.data.length-2|0;e=0;while(true){f=Bw(e,b);if(f>=0)break;if(a.be>=d)break;Ce(c,a.bR.data[Cw(a)]);e=e+1|0;}if(!f)a:{try{b=Kg(B0(c),16);}catch($$e){$$je=Bh($$e);if($$je instanceof ET){break a;}else{throw $$e;}}return b;}J(CC(B(9),a.eH,a.be));}
function AEO(a){var b,c,d,e,f;b=3;c=1;d=a.bR.data.length-2|0;e=LM(a.bR.data[a.be],8);switch(e){case -1:break;default:if(e>3)b=2;Cw(a);a:{while(true){if(c>=b)break a;if(a.be>=d)break a;f=LM(a.bR.data[a.be],8);if(f<0)break;e=(e*8|0)+f|0;Cw(a);c=c+1|0;}}return e;}J(CC(B(9),a.eH,a.be));}
function AOB(a){var b,c;b=1;c=a.mz;a:while(true){if(a.be>=a.bR.data.length)J(CC(B(9),a.eH,a.be));b:{c:{switch(a.bR.data[a.be]){case 41:Cw(a);return c|256;case 45:if(!b)J(CC(B(9),a.eH,a.be));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Cw(a);}Cw(a);return c;}
function Cw(a){var b,c;a.qA=a.be;if(!(a.mz&4))a.be=a.be+1|0;else{b=a.bR.data.length-2|0;a.be=a.be+1|0;a:while(true){if(a.be<b&&R6(a.bR.data[a.be])){a.be=a.be+1|0;continue;}if(a.be>=b)break;if(a.bR.data[a.be]!=35)break;a.be=a.be+1|0;while(true){if(a.be>=b)continue a;c=a.bR.data[a.be];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.be=a.be+1|0;}}}return a.qA;}
function ANA(b){return BhU.Oc(b);}
function Nq(a){var b,c,d;b=a.bR.data[Cw(a)];if(Dw(b)){c=a.qA+1|0;if(c<a.bR.data.length){d=a.bR.data[c];if(D1(d)){Cw(a);return E4(b,d);}}}return b;}
function IH(a){return a.ig;}
function ANO(){var a=this;BB.call(a);a.B2=null;a.rx=null;a.oJ=0;}
function CC(a,b,c){var d=new ANO();AZX(d,a,b,c);return d;}
function AZX(a,b,c,d){Z(a);a.oJ=(-1);a.B2=b;a.rx=c;a.oJ=d;}
function A7X(a){var b,c,d,e,f,g,h,i;b=B(9);if(a.oJ>=1){c=$rt_createCharArray(a.oJ);d=c.data;e=0;f=d.length;if(e>f){b=new BB;Z(b);J(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AHO(c);}h=new R;T(h);h=E(h,a.B2);if(a.rx!==null&&Q(a.rx)){i=new R;T(i);b=S(E(E(E(E(Bd(i,a.oJ),B(703)),a.rx),B(703)),b));}else b=B(9);return S(E(h,b));}
function Sn(){D6.call(this);}
function AZM(a,b,c,d){var e;e=a.ik;Cg(d,e,b-EH(d,e)|0);return a.m.e(b,c,d);}
function A6p(a,b){return 0;}
function Z5(){D6.call(this);}
function A08(a,b,c,d){return b;}
function RH(){D6.call(this);}
function AQt(a,b,c,d){if(EH(d,a.ik)!=b)b=(-1);return b;}
function S7(){D6.call(this);this.w4=0;}
function AZS(a,b,c,d){var e;e=a.ik;Cg(d,e,b-EH(d,e)|0);a.w4=b;return b;}
function AQx(a){return a.w4;}
function A5A(a,b){return 0;}
function HA(){D6.call(this);}
function AXW(a,b,c,d){if(d.nT!=1&&b!=d.bO)return (-1);AN4(d);N8(d,0,b);return b;}
function CA(){B_.call(this);this.c_=0;}
function BhV(){var a=new CA();E$(a);return a;}
function E$(a){Cx(a);a.c_=1;}
function A8n(a,b,c,d){var e;if((b+a.dZ()|0)>d.bO){d.g9=1;return (-1);}e=a.dg(b,c);if(e<0)return (-1);return a.m.e(b+e|0,c,d);}
function A6V(a){return a.c_;}
function ATs(a,b){return 1;}
function AGb(){CA.call(this);}
function JQ(a){var b=new AGb();A4s(b,a);return b;}
function A4s(a,b){OP(a,b);a.c_=1;a.qo=1;a.c_=0;}
function A6v(a,b,c){return 0;}
function A2h(a,b,c,d){var e,f,g;e=d.bO;f=d.fd;while(true){g=Bw(b,e);if(g>0)return (-1);if(g<0&&D1(P(c,b))&&b>f&&Dw(P(c,b-1|0))){b=b+1|0;continue;}if(a.m.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function A02(a,b,c,d,e){var f,g;f=e.bO;g=e.fd;while(true){if(c<b)return (-1);if(c<f&&D1(P(d,c))&&c>g&&Dw(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.m.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AZQ(a,b){return 0;}
function Cu(){var a=this;B_.call(a);a.dc=null;a.f4=null;a.cF=0;}
function A9m(a,b){var c=new Cu();HB(c,a,b);return c;}
function HB(a,b,c){Cx(a);a.dc=b;a.f4=c;a.cF=c.ik;}
function ASJ(a,b,c,d){var e,f,g,h;if(a.dc===null)return (-1);e=If(d,a.cF);E9(d,a.cF,b);f=a.dc.q;g=0;while(true){if(g>=f){E9(d,a.cF,e);return (-1);}h=Be(a.dc,g).e(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AVH(a,b){a.f4.m=b;}
function A3V(a,b){var c;a:{if(a.dc!==null){c=Hq(a.dc);while(true){if(!JO(c))break a;if(!Il(c).dR(b))continue;else return 1;}}}return 0;}
function AV9(a,b){return KU(b,a.cF)>=0&&If(b,a.cF)==KU(b,a.cF)?0:1;}
function AQV(a){var b,c,d,e;a.eI=1;if(a.f4!==null&&!a.f4.eI)L4(a.f4);a:{if(a.dc!==null){b=a.dc.q;c=0;while(true){if(c>=b)break a;d=Be(a.dc,c);e=d.lX();if(e===null)e=d;else{d.eI=1;Ej(a.dc,c);AKr(a.dc,c,e);}if(!e.eI)e.i_();c=c+1|0;}}}if(a.m!==null)L4(a);}
function L0(){Cu.call(this);}
function AVx(a,b,c,d){var e,f,g,h;e=EH(d,a.cF);Cg(d,a.cF,b);f=a.dc.q;g=0;while(true){if(g>=f){Cg(d,a.cF,e);return (-1);}h=Be(a.dc,g).e(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A6a(a,b){return !EH(b,a.cF)?0:1;}
function Fc(){L0.call(this);}
function A1z(a,b,c,d){var e,f,g;e=EH(d,a.cF);Cg(d,a.cF,b);f=a.dc.q;g=0;while(g<f){if(Be(a.dc,g).e(b,c,d)>=0)return a.m.e(a.f4.w4,c,d);g=g+1|0;}Cg(d,a.cF,e);return (-1);}
function A5X(a,b){a.m=b;}
function VB(){Fc.call(this);}
function AVE(a,b,c,d){var e,f;e=a.dc.q;f=0;while(f<e){if(Be(a.dc,f).e(b,c,d)>=0)return a.m.e(b,c,d);f=f+1|0;}return (-1);}
function AXK(a,b){return 0;}
function Zo(){Fc.call(this);}
function AQe(a,b,c,d){var e,f;e=a.dc.q;f=0;while(true){if(f>=e)return a.m.e(b,c,d);if(Be(a.dc,f).e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A60(a,b){return 0;}
function Xz(){Fc.call(this);}
function AQU(a,b,c,d){var e,f,g,h;e=a.dc.q;f=d.oT?0:d.fd;a:{g=a.m.e(b,c,d);if(g>=0){Cg(d,a.cF,b);h=0;while(true){if(h>=e)break a;if(Be(a.dc,h).eR(f,b,c,d)>=0){Cg(d,a.cF,(-1));return g;}h=h+1|0;}}}return (-1);}
function A8B(a,b){return 0;}
function Tu(){Fc.call(this);}
function AZr(a,b,c,d){var e,f;e=a.dc.q;Cg(d,a.cF,b);f=0;while(true){if(f>=e)return a.m.e(b,c,d);if(Be(a.dc,f).eR(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A6j(a,b){return 0;}
function JG(){Cu.call(this);this.fo=null;}
function A$Y(a,b){var c=new JG();AB2(c,a,b);return c;}
function AB2(a,b,c){Cx(a);a.fo=b;a.f4=c;a.cF=c.ik;}
function APl(a,b,c,d){var e,f;e=If(d,a.cF);E9(d,a.cF,b);f=a.fo.e(b,c,d);if(f>=0)return f;E9(d,a.cF,e);return (-1);}
function AUq(a,b,c,d){var e;e=a.fo.eA(b,c,d);if(e>=0)E9(d,a.cF,e);return e;}
function A6q(a,b,c,d,e){var f;f=a.fo.eR(b,c,d,e);if(f>=0)E9(e,a.cF,f);return f;}
function A3Q(a,b){return a.fo.dR(b);}
function A5z(a){var b;b=new Ql;AB2(b,a.fo,a.f4);a.m=b;return b;}
function AYo(a){var b;a.eI=1;if(a.f4!==null&&!a.f4.eI)L4(a.f4);if(a.fo!==null&&!a.fo.eI){b=a.fo.lX();if(b!==null){a.fo.eI=1;a.fo=b;}a.fo.i_();}}
function I6(){C.call(this);}
function Bk(){var a=this;I6.call(a);a.cq=0;a.dE=0;a.cc=null;a.qu=null;a.qW=null;a.ch=0;}
var BhW=null;function BhX(){var a=new Bk();BR(a);return a;}
function BR(a){var b;b=new ZL;b.bL=$rt_createIntArray(64);a.cc=b;}
function A0B(a){return null;}
function AZ1(a){return a.cc;}
function AK7(a){return !a.dE?(J5(a.cc,0)>=2048?0:1):AFe(a.cc,0)>=2048?0:1;}
function A2S(a){return a.ch;}
function A6O(a){return a;}
function ABg(a){var b,c;if(a.qW===null){b=a.kF();c=new UA;c.Kx=a;c.Dt=b;BR(c);a.qW=c;FY(a.qW,a.dE);}return a.qW;}
function Li(a){var b,c;if(a.qu===null){b=a.kF();c=new Uz;c.HM=a;c.Ft=b;c.CD=a;BR(c);a.qu=c;FY(a.qu,a.cq);a.qu.ch=a.ch;}return a.qu;}
function A7Y(a){return 0;}
function FY(a,b){if(a.cq^b){a.cq=a.cq?0:1;a.dE=a.dE?0:1;}if(!a.ch)a.ch=1;return a;}
function ASa(a){return a.cq;}
function LH(b,c){if(b.hu()!==null&&c.hu()!==null)return AE0(b.hu(),c.hu());return 1;}
function Sx(b,c){return AMM(ANY(BhW,b),c);}
function AB5(){BhW=new Jf;}
function ABR(){var a=this;Bk.call(a);a.yt=0;a.z0=0;a.nN=0;a.u$=0;a.iG=0;a.lN=0;a.b$=null;a.cW=null;}
function EI(){var a=new ABR();AYO(a);return a;}
function A7t(a,b){var c=new ABR();ARc(c,a,b);return c;}
function AYO(a){BR(a);a.b$=A8F();}
function ARc(a,b,c){BR(a);a.b$=A8F();a.yt=b;a.z0=c;}
function Dq(a,b){a:{if(a.yt){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iG){PU(a.b$,Lj(b&65535));break a;}Nk(a.b$,Lj(b&65535));break a;}if(a.z0&&b>128){a.nN=1;b=Hy(Hw(b));}}}if(!(!SR(b)&&!Rl(b))){if(a.u$)PU(a.cc,b-55296|0);else Nk(a.cc,b-55296|0);}if(a.iG)PU(a.b$,b);else Nk(a.b$,b);if(!a.ch&&NE(b))a.ch=1;return a;}
function AOI(a,b){var c,d,e;if(!a.ch&&b.ch)a.ch=1;if(a.u$){if(!b.dE)HL(a.cc,b.kF());else Er(a.cc,b.kF());}else if(!b.dE)In(a.cc,b.kF());else{H9(a.cc,b.kF());Er(a.cc,b.kF());a.dE=a.dE?0:1;a.u$=1;}if(!a.lN&&b.hu()!==null){if(a.iG){if(!b.cq)HL(a.b$,b.hu());else Er(a.b$,b.hu());}else if(!b.cq)In(a.b$,b.hu());else{H9(a.b$,b.hu());Er(a.b$,b.hu());a.cq=a.cq?0:1;a.iG=1;}}else{c=a.cq;if(a.cW!==null){d=a.cW;if(!c){e=new Wl;e.IX=a;e.FP=c;e.Cx=d;e.Cu=b;BR(e);a.cW=e;}else{e=new Wn;e.KQ=a;e.Bi=c;e.Ez=d;e.Ei=b;BR(e);a.cW=
e;}}else{if(c&&!a.iG&&PE(a.b$)){d=new Wi;d.JO=a;d.EC=b;BR(d);a.cW=d;}else if(!c){d=new Wg;d.xO=a;d.wW=c;d.DM=b;BR(d);a.cW=d;}else{d=new Wh;d.vJ=a;d.ul=c;d.Cw=b;BR(d);a.cW=d;}a.lN=1;}}return a;}
function Cy(a,b,c){var d;if(b>c){d=new BB;Z(d);J(d);}a:{b:{if(!a.yt){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dq(a,b);b=b+1|0;}}if(a.iG)AIa(a.b$,b,c+1|0);else Ky(a.b$,b,c+1|0);}return a;}
function AHV(a,b){var c,d,e;if(!a.ch&&b.ch)a.ch=1;if(b.nN)a.nN=1;if(!(a.dE^b.dE)){if(!a.dE)In(a.cc,b.cc);else Er(a.cc,b.cc);}else if(a.dE)HL(a.cc,b.cc);else{H9(a.cc,b.cc);Er(a.cc,b.cc);a.dE=1;}if(!a.lN&&D8(b)!==null){if(!(a.cq^b.cq)){if(!a.cq)In(a.b$,D8(b));else Er(a.b$,D8(b));}else if(a.cq)HL(a.b$,D8(b));else{H9(a.b$,D8(b));Er(a.b$,D8(b));a.cq=1;}}else{c=a.cq;if(a.cW!==null){d=a.cW;if(!c){e=new Q6;e.Gn=a;e.B9=c;e.FB=d;e.CJ=b;BR(e);a.cW=e;}else{e=new Rn;e.GH=a;e.FL=c;e.zU=d;e.z3=b;BR(e);a.cW=e;}}else{if(!a.iG
&&PE(a.b$)){if(!c){d=new Wj;d.KW=a;d.AY=b;BR(d);a.cW=d;}else{d=new Wk;d.I7=a;d.FG=b;BR(d);a.cW=d;}}else if(!c){d=new Wo;d.Ca=a;d.Bq=b;d.EB=c;BR(d);a.cW=d;}else{d=new Wp;d.Bz=a;d.BI=b;d.E1=c;BR(d);a.cW=d;}a.lN=1;}}}
function UH(a,b){var c,d,e;if(!a.ch&&b.ch)a.ch=1;if(b.nN)a.nN=1;if(!(a.dE^b.dE)){if(!a.dE)Er(a.cc,b.cc);else In(a.cc,b.cc);}else if(!a.dE)HL(a.cc,b.cc);else{H9(a.cc,b.cc);Er(a.cc,b.cc);a.dE=0;}if(!a.lN&&D8(b)!==null){if(!(a.cq^b.cq)){if(!a.cq)Er(a.b$,D8(b));else In(a.b$,D8(b));}else if(!a.cq)HL(a.b$,D8(b));else{H9(a.b$,D8(b));Er(a.b$,D8(b));a.cq=0;}}else{c=a.cq;if(a.cW!==null){d=a.cW;if(!c){e=new Q8;e.IW=a;e.Fm=c;e.Dr=d;e.Bh=b;BR(e);a.cW=e;}else{e=new Q9;e.I_=a;e.E9=c;e.Df=d;e.Fj=b;BR(e);a.cW=e;}}else{if(!a.iG
&&PE(a.b$)){if(!c){d=new Q4;d.GK=a;d.D2=b;BR(d);a.cW=d;}else{d=new Q5;d.KO=a;d.AR=b;BR(d);a.cW=d;}}else if(!c){d=new Q$;d.Gc=a;d.FN=b;d.BH=c;BR(d);a.cW=d;}else{d=new Q3;d.BE=a;d.Fb=b;d.EI=c;BR(d);a.cW=d;}a.lN=1;}}}
function Ed(a,b){if(a.cW!==null)return a.cq^a.cW.T(b);return a.cq^E8(a.b$,b);}
function D8(a){if(!a.lN)return a.b$;return null;}
function A2b(a){return a.cc;}
function AXv(a){var b,c;if(a.cW!==null)return a;b=D8(a);c=new Q7;c.II=a;c.sZ=b;BR(c);return FY(c,a.cq);}
function A4T(a){var b,c;b=new R;T(b);c=J5(a.b$,0);while(c>=0){Ib(b,JE(c));Ce(b,124);c=J5(a.b$,c+1|0);}if(b.b6>0)Uu(b,b.b6-1|0);return S(b);}
function ASc(a){return a.nN;}
function NY(){var a=this;BU.call(a);a.Ip=null;a.KA=null;}
function Fm(){B_.call(this);this.bW=null;}
function BhY(a,b,c){var d=new Fm();Et(d,a,b,c);return d;}
function Et(a,b,c,d){OP(a,c);a.bW=b;a.qo=d;}
function A8t(a){return a.bW;}
function AWF(a,b){return !a.bW.dR(b)&&!a.m.dR(b)?0:1;}
function A7v(a,b){return 1;}
function AUH(a){var b;a.eI=1;if(a.m!==null&&!a.m.eI){b=a.m.lX();if(b!==null){a.m.eI=1;a.m=b;}a.m.i_();}if(a.bW!==null){if(!a.bW.eI){b=a.bW.lX();if(b!==null){a.bW.eI=1;a.bW=b;}a.bW.i_();}else if(a.bW instanceof JG&&a.bW.f4.xi)a.bW=a.bW.m;}}
function Ef(){Fm.call(this);this.cG=null;}
function A9E(a,b,c){var d=new Ef();Gy(d,a,b,c);return d;}
function Gy(a,b,c,d){Et(a,b,c,d);a.cG=b;}
function AZs(a,b,c,d){var e,f;e=0;a:{while((b+a.cG.dZ()|0)<=d.bO){f=a.cG.dg(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.m.e(b,c,d);if(f>=0)break;b=b-a.cG.dZ()|0;e=e+(-1)|0;}return f;}
function Hi(){Ef.call(this);this.ln=null;}
function A$v(a,b,c,d){var e=new Hi();SE(e,a,b,c,d);return e;}
function SE(a,b,c,d,e){Gy(a,c,d,e);a.ln=b;}
function A0k(a,b,c,d){var e,f,g,h;e=a.ln.jo;f=a.ln.ix;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cG.dZ()|0)>d.bO)break a;h=a.cG.dg(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.m.e(b,c,d);if(h>=0)break;b=b-a.cG.dZ()|0;g=g+(-1)|0;}return h;}if((b+a.cG.dZ()|0)>d.bO){d.g9=1;return (-1);}h=a.cG.dg(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function D7(){Fm.call(this);}
function AZH(a,b,c,d){var e;if(!a.bW.b9(d))return a.m.e(b,c,d);e=a.bW.e(b,c,d);if(e>=0)return e;return a.m.e(b,c,d);}
function Gk(){Ef.call(this);}
function A39(a,b,c,d){var e;e=a.bW.e(b,c,d);if(e<0)e=a.m.e(b,c,d);return e;}
function AY4(a,b){a.m=b;a.bW.ci(b);}
function UD(){Ef.call(this);}
function A8i(a,b,c,d){while((b+a.cG.dZ()|0)<=d.bO&&a.cG.dg(b,c)>0){b=b+a.cG.dZ()|0;}return a.m.e(b,c,d);}
function AU6(a,b,c,d){var e,f,g;e=a.m.eA(b,c,d);if(e<0)return (-1);f=e-a.cG.dZ()|0;while(f>=b&&a.cG.dg(f,c)>0){g=f-a.cG.dZ()|0;e=f;f=g;}return e;}
function VL(){var a=this;I6.call(a);a.jo=0;a.ix=0;}
function A2G(a){return a.jo;}
function A7p(a){return a.ix;}
function A4Z(a){var b;b=new R;T(b);return S(E(E(E(Bd(E(b,B(704)),a.jo),B(705)),a.ix==2147483647?B(9):NF(ANz(a.ix))),B(706)));}
function V$(){B_.call(this);}
function ATN(a,b,c,d){return b;}
function A5v(a,b){return 0;}
function ZL(){var a=this;C.call(a);a.bL=null;a.cs=0;}
function A8F(){var a=new ZL();A0X(a);return a;}
function A0X(a){a.bL=$rt_createIntArray(0);}
function Nk(a,b){var c,d;c=b/32|0;if(b>=a.cs){LL(a,c+1|0);a.cs=b+1|0;}d=a.bL.data;d[c]=d[c]|1<<(b%32|0);}
function Ky(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;Z(d);J(d);}e=b/32|0;f=c/32|0;if(c>a.cs){LL(a,f+1|0);a.cs=c;}if(e==f){g=a.bL.data;g[e]=g[e]|Kp(a,b)&LC(a,c);}else{g=a.bL.data;g[e]=g[e]|Kp(a,b);h=e+1|0;while(h<f){a.bL.data[h]=(-1);h=h+1|0;}g=a.bL.data;g[f]=g[f]|LC(a,c);}}
function Kp(a,b){return (-1)<<(b%32|0);}
function LC(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function PU(a,b){var c,d,e,f;c=b/32|0;if(c<a.bL.data.length){d=a.bL.data;e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|(-2)>>>(32-f|0));if(b==(a.cs-1|0))Jh(a);}}
function AIa(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;Z(d);J(d);}if(b>=a.cs)return;c=B4(a.cs,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bL.data;g[e]=g[e]&(LC(a,b)|Kp(a,c));}else{g=a.bL.data;g[e]=g[e]&LC(a,b);h=e+1|0;while(h<f){a.bL.data[h]=0;h=h+1|0;}g=a.bL.data;g[f]=g[f]&Kp(a,c);}Jh(a);}
function E8(a,b){var c;c=b/32|0;return c<a.bL.data.length&&a.bL.data[c]&1<<(b%32|0)?1:0;}
function J5(a,b){var c,d,e;if(b>=a.cs)return (-1);c=b/32|0;d=a.bL.data[c]>>>(b%32|0);if(d)return KS(d)+b|0;d=(a.cs+31|0)/32|0;e=c+1|0;while(e<d){if(a.bL.data[e])return (e*32|0)+KS(a.bL.data[e])|0;e=e+1|0;}return (-1);}
function AFe(a,b){var c,d,e;if(b>=a.cs)return b;c=b/32|0;d=(a.bL.data[c]^(-1))>>>(b%32|0);if(d)return KS(d)+b|0;d=(a.cs+31|0)/32|0;e=c+1|0;while(e<d){if(a.bL.data[e]!=(-1))return (e*32|0)+KS(a.bL.data[e]^(-1))|0;e=e+1|0;}return a.cs;}
function LL(a,b){var c,d,e,f;if(a.bL.data.length>=b)return;c=Df((b*3|0)/2|0,(a.bL.data.length*2|0)+1|0);d=a.bL.data;e=$rt_createIntArray(c);f=e.data;b=B4(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bL=e;}
function Jh(a){var b,c,d;b=(a.cs+31|0)/32|0;a.cs=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=V1(a.bL.data[c]);if(d<32)break;c=c+(-1)|0;a.cs=a.cs-32|0;}a.cs=a.cs-d|0;}}
function AE0(a,b){var c,d;c=B4(a.bL.data.length,b.bL.data.length);d=0;while(d<c){if(a.bL.data[d]&b.bL.data[d])return 1;d=d+1|0;}return 0;}
function Er(a,b){var c,d,e;c=B4(a.bL.data.length,b.bL.data.length);d=0;while(d<c){e=a.bL.data;e[d]=e[d]&b.bL.data[d];d=d+1|0;}while(c<a.bL.data.length){a.bL.data[c]=0;c=c+1|0;}a.cs=B4(a.cs,b.cs);Jh(a);}
function HL(a,b){var c,d,e;c=B4(a.bL.data.length,b.bL.data.length);d=0;while(d<c){e=a.bL.data;e[d]=e[d]&(b.bL.data[d]^(-1));d=d+1|0;}Jh(a);}
function In(a,b){var c,d,e;a.cs=Df(a.cs,b.cs);LL(a,(a.cs+31|0)/32|0);c=B4(a.bL.data.length,b.cs);d=0;while(d<c){e=a.bL.data;e[d]=e[d]|b.bL.data[d];d=d+1|0;}}
function H9(a,b){var c,d,e;a.cs=Df(a.cs,b.cs);LL(a,(a.cs+31|0)/32|0);c=B4(a.bL.data.length,b.cs);d=0;while(d<c){e=a.bL.data;e[d]=e[d]^b.bL.data[d];d=d+1|0;}Jh(a);}
function PE(a){return a.cs?0:1;}
function Qa(){var a=this;Cu.call(a);a.AS=null;a.IH=0;}
function A2i(a,b){a.m=b;}
function ADl(a,b,c,d){var e,f,g,h,i;e=d.fd;f=d.bO;g=b+1|0;h=Bw(g,f);if(h>0){d.g9=1;return (-1);}i=P(c,b);if(!a.AS.T(i))return (-1);if(Dw(i)){if(h<0&&D1(P(c,g)))return (-1);}else if(D1(i)&&b>e&&Dw(P(c,b-1|0)))return (-1);return a.m.e(g,c,d);}
function RV(){var a=this;Cu.call(a);a.wi=null;a.yD=null;}
function AE_(a,b){var c=new RV();AG2(c,a,b);return c;}
function AG2(a,b,c){Cx(a);a.wi=b;a.yD=c;}
function APX(a,b,c,d){var e;e=a.wi.e(b,c,d);if(e<0)e=ADl(a.yD,b,c,d);if(e>=0)return e;return (-1);}
function A5n(a,b){a.m=b;a.yD.m=b;a.wi.ci(b);}
function AQy(a,b){return 1;}
function AQi(a,b){return 1;}
function Fa(){var a=this;Cu.call(a);a.h1=null;a.Hg=0;}
function A3u(a){var b=new Fa();YH(b,a);return b;}
function YH(a,b){Cx(a);a.h1=b.tf();a.Hg=b.cq;}
function A16(a,b,c,d){var e,f,g;e=d.bO;if(b<e){f=b+1|0;g=P(c,b);if(a.T(g)){b=a.m.e(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=P(c,f);if(K_(g,f)&&a.T(E4(g,f)))return a.m.e(b,c,d);}}return (-1);}
function ASn(a,b){return a.h1.T(b);}
function APV(a,b){if(b instanceof Fi)return a.h1.T(b.kW);if(b instanceof FX)return a.h1.T(b.gn);if(b instanceof Fa)return LH(a.h1,b.h1);if(!(b instanceof FQ))return 1;return LH(a.h1,b.ki);}
function ATG(a){return a.h1;}
function A6K(a,b){a.m=b;}
function AR9(a,b){return 1;}
function NV(){Fa.call(this);}
function ATu(a,b){return a.h1.T(Hy(Hw(b)));}
function ABJ(){var a=this;CA.call(a);a.Eq=null;a.G5=0;}
function ASV(a){var b=new ABJ();AVd(b,a);return b;}
function AVd(a,b){E$(a);a.Eq=b.tf();a.G5=b.cq;}
function A3C(a,b,c){return !a.Eq.T(Gh(F1(P(c,b))))?(-1):1;}
function FQ(){var a=this;CA.call(a);a.ki=null;a.HA=0;}
function AXr(a){var b=new FQ();AV0(b,a);return b;}
function AV0(a,b){E$(a);a.ki=b.tf();a.HA=b.cq;}
function Vr(a,b,c){return !a.ki.T(P(c,b))?(-1):1;}
function AVI(a,b){if(b instanceof FX)return a.ki.T(b.gn);if(b instanceof FQ)return LH(a.ki,b.ki);if(!(b instanceof Fa)){if(!(b instanceof Fi))return 1;return 0;}return LH(a.ki,b.h1);}
function A5q(a){return a.ki;}
function Wv(){var a=this;Cu.call(a);a.kb=null;a.yZ=null;a.pa=0;}
function A7i(a,b){var c=new Wv();AZI(c,a,b);return c;}
function AZI(a,b,c){Cx(a);a.kb=b;a.pa=c;}
function AUt(a,b){a.m=b;}
function RW(a){if(a.yZ===null)a.yZ=AHO(a.kb);return a.yZ;}
function AO6(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.bO;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.pa)return (-1);while(true){if(l>=a.pa)return a.m.e(i,c,d);if(m[l]!=a.kb.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.pa==3&&f[0]==a.kb.data[0]&&f[1]==a.kb.data[1]&&f[2]==a.kb.data[2]?a.m.e(b,c,d):(-1);}return a.pa==2&&f[0]==a.kb.data[0]&&f[1]==a.kb.data[1]?a.m.e(k,c,d):(-1);}return (-1);}return (-1);}
function A0K(a,b){return b instanceof Wv&&!BW(RW(b),RW(a))?0:1;}
function AXz(a,b){return 1;}
function FX(){CA.call(this);this.gn=0;}
function ACd(a){var b=new FX();AV3(b,a);return b;}
function AV3(a,b){E$(a);a.gn=b;}
function A3q(a){return 1;}
function ASS(a,b,c){return a.gn!=P(c,b)?(-1):1;}
function ARU(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.bO;while(true){if(b>=f)return (-1);g=Eo(e,a.gn,b);if(g<0)return (-1);h=a.m;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function ATJ(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Fu(f,a.gn,c);if(g<0)break a;if(g<b)break a;if(a.m.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AQf(a){return a.gn;}
function AXu(a,b){if(b instanceof FX)return b.gn!=a.gn?0:1;if(!(b instanceof FQ)){if(b instanceof Fa)return b.T(a.gn);if(!(b instanceof Fi))return 1;return 0;}return Vr(b,0,UQ(a.gn))<=0?0:1;}
function AGM(){CA.call(this);this.C7=0;}
function A50(a){var b=new AGM();A4O(b,a);return b;}
function A4O(a,b){E$(a);a.C7=Gh(F1(b));}
function AZa(a,b,c){return a.C7!=Gh(F1(P(c,b)))?(-1):1;}
function AAv(){var a=this;CA.call(a);a.CL=0;a.Dn=0;}
function A0Z(a){var b=new AAv();AWt(b,a);return b;}
function AWt(a,b){E$(a);a.CL=b;a.Dn=Lj(b);}
function APi(a,b,c){return a.CL!=P(c,b)&&a.Dn!=P(c,b)?(-1):1;}
function Hp(){var a=this;Cu.call(a);a.qg=0;a.uM=null;a.ui=null;a.t8=0;}
function A_t(a,b){var c=new Hp();QP(c,a,b);return c;}
function QP(a,b,c){Cx(a);a.qg=1;a.ui=b;a.t8=c;}
function A75(a,b){a.m=b;}
function AVw(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.bO;if(b>=f)return (-1);g=MS(a,b,c,f);h=b+a.qg|0;i=ANA(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;CT(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=MS(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=ANA(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.qg|0;if(h>=f){b=k;break a;}g=MS(a,h,c,f);b=k;}}}if(b!=a.t8)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.m.e(h,c,d);if(i[g]!=a.ui.data[g])break;g=g+1|0;}return (-1);}
function UG(a){var b,c;if(a.uM===null){b=new R;T(b);c=0;while(c<a.t8){Ib(b,JE(a.ui.data[c]));c=c+1|0;}a.uM=S(b);}return a.uM;}
function MS(a,b,c,d){var e,f,g;a.qg=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(K_(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dw(g[0])&&D1(g[1])?E4(g[0],g[1]):g[0];a.qg=2;}}return e;}
function ATO(a,b){return b instanceof Hp&&!BW(UG(b),UG(a))?0:1;}
function A5Z(a,b){return 1;}
function U0(){Hp.call(this);}
function Yz(){Hp.call(this);}
function Vp(){D7.call(this);}
function A1b(a,b,c,d){var e;while(true){e=a.bW.e(b,c,d);if(e<=0)break;b=e;}return a.m.e(b,c,d);}
function W1(){D7.call(this);}
function A4C(a,b,c,d){var e;e=a.bW.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bW.e(e,c,d);if(b<=e)break;e=b;}b=e;}return a.m.e(b,c,d);}
function Is(){D7.call(this);}
function A6F(a,b,c,d){var e;if(!a.bW.b9(d))return a.m.e(b,c,d);e=a.bW.e(b,c,d);if(e>=0)return e;return a.m.e(b,c,d);}
function A7C(a,b){a.m=b;a.bW.ci(b);}
function Rv(){Is.call(this);}
function ATF(a,b,c,d){var e;e=a.bW.e(b,c,d);if(e<=0)e=b;return a.m.e(e,c,d);}
function A42(a,b){a.m=b;}
function HV(){var a=this;D7.call(a);a.k5=null;a.hf=0;}
function BhZ(a,b,c,d,e){var f=new HV();NU(f,a,b,c,d,e);return f;}
function NU(a,b,c,d,e,f){Et(a,c,d,e);a.k5=b;a.hf=f;}
function A8y(a,b,c,d){var e,f;e=VF(d,a.hf);if(!a.bW.b9(d))return a.m.e(b,c,d);if(e>=a.k5.ix)return a.m.e(b,c,d);f=a.hf;e=e+1|0;F5(d,f,e);f=a.bW.e(b,c,d);if(f>=0){F5(d,a.hf,0);return f;}f=a.hf;e=e+(-1)|0;F5(d,f,e);if(e>=a.k5.jo)return a.m.e(b,c,d);F5(d,a.hf,0);return (-1);}
function Qo(){HV.call(this);}
function AS_(a,b,c,d){var e,f,g;e=0;f=a.k5.ix;a:{while(true){g=a.bW.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.k5.jo)return (-1);return a.m.e(b,c,d);}
function Sh(){D7.call(this);}
function AYx(a,b,c,d){var e;if(!a.bW.b9(d))return a.m.e(b,c,d);e=a.m.e(b,c,d);if(e>=0)return e;return a.bW.e(b,c,d);}
function Xh(){Is.call(this);}
function AQB(a,b,c,d){var e;if(!a.bW.b9(d))return a.m.e(b,c,d);e=a.m.e(b,c,d);if(e<0)e=a.bW.e(b,c,d);return e;}
function T2(){HV.call(this);}
function AZW(a,b,c,d){var e,f;e=VF(d,a.hf);if(!a.bW.b9(d))return a.m.e(b,c,d);if(e>=a.k5.ix){F5(d,a.hf,0);return a.m.e(b,c,d);}if(e<a.k5.jo){F5(d,a.hf,e+1|0);f=a.bW.e(b,c,d);}else{f=a.m.e(b,c,d);if(f>=0){F5(d,a.hf,0);return f;}F5(d,a.hf,e+1|0);f=a.bW.e(b,c,d);}return f;}
function Sj(){Fm.call(this);}
function A8p(a,b,c,d){var e;e=d.bO;if(e>b)return a.m.eR(b,e,c,d);return a.m.e(b,c,d);}
function AW_(a,b,c,d){var e;e=d.bO;if(a.m.eR(b,e,c,d)>=0)return b;return (-1);}
function Wf(){Fm.call(this);this.uT=null;}
function AVJ(a,b,c,d){var e,f;e=d.bO;f=YR(a,b,e,c);if(f>=0)e=f;if(e>b)return a.m.eR(b,e,c,d);return a.m.e(b,c,d);}
function AO7(a,b,c,d){var e,f,g,h;e=d.bO;f=a.m.eA(b,c,d);if(f<0)return (-1);g=YR(a,f,e,c);if(g>=0)e=g;g=a.m.eR(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uT.o$(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function YR(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uT.o$(P(d,b)))break;b=b+1|0;}return b;}
function GZ(){C.call(this);}
var Bh0=null;var Bh1=null;function WN(b){if(!(b&1)){if(Bh1!==null)return Bh1;Bh1=new Y2;return Bh1;}if(Bh0!==null)return Bh0;Bh0=new Y1;return Bh0;}
function AAg(){Ef.call(this);}
function APJ(a,b,c,d){var e;a:{while(true){if((b+a.cG.dZ()|0)>d.bO)break a;e=a.cG.dg(b,c);if(e<1)break;b=b+e|0;}}return a.m.e(b,c,d);}
function Uy(){Gk.call(this);}
function AUR(a,b,c,d){var e;if((b+a.cG.dZ()|0)<=d.bO){e=a.cG.dg(b,c);if(e>=1)b=b+e|0;}return a.m.e(b,c,d);}
function WC(){Hi.call(this);}
function A6r(a,b,c,d){var e,f,g,h,i;e=a.ln.jo;f=a.ln.ix;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cG.dZ()|0)>d.bO)break a;h=a.cG.dg(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.m.e(b,c,d);}if((b+a.cG.dZ()|0)>d.bO){d.g9=1;return (-1);}i=a.cG.dg(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function Xd(){Ef.call(this);}
function AVF(a,b,c,d){var e;while(true){e=a.m.e(b,c,d);if(e>=0)break;if((b+a.cG.dZ()|0)<=d.bO){e=a.cG.dg(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function YB(){Gk.call(this);}
function APS(a,b,c,d){var e;e=a.m.e(b,c,d);if(e>=0)return e;return a.bW.e(b,c,d);}
function R7(){Hi.call(this);}
function A6x(a,b,c,d){var e,f,g,h,i;e=a.ln.jo;f=a.ln.ix;g=0;while(true){if(g>=e){a:{while(true){h=a.m.e(b,c,d);if(h>=0)break;if((b+a.cG.dZ()|0)<=d.bO){h=a.cG.dg(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cG.dZ()|0)>d.bO){d.g9=1;return (-1);}i=a.cG.dg(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ADp(){B_.call(this);}
function AXx(){var a=new ADp();ARz(a);return a;}
function ARz(a){Cx(a);}
function A3S(a,b,c,d){if(b&&!(d.lP&&b==d.fd))return (-1);return a.m.e(b,c,d);}
function A3h(a,b){return 0;}
function ACr(){B_.call(this);this.Cy=0;}
function A67(a){var b=new ACr();ATz(b,a);return b;}
function ATz(a,b){Cx(a);a.Cy=b;}
function A0y(a,b,c,d){var e,f,g;e=b<d.bO?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.oT?0:d.fd;return (e!=32&&!Xl(a,e,b,g,c)?0:1)^(f!=32&&!Xl(a,f,b-1|0,g,c)?0:1)^a.Cy?(-1):a.m.e(b,c,d);}
function A0J(a,b){return 0;}
function Xl(a,b,c,d,e){var f;if(!Mg(b)&&b!=95){a:{if(Dp(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Mg(f))return 0;if(Dp(f)!=6)return 1;}}return 1;}return 0;}
function AIH(){B_.call(this);}
function A88(){var a=new AIH();AW5(a);return a;}
function AW5(a){Cx(a);}
function ATw(a,b,c,d){if(b!=d.lo)return (-1);return a.m.e(b,c,d);}
function AYQ(a,b){return 0;}
function UU(){B_.call(this);this.mA=0;}
function A9P(a){var b=new UU();ANn(b,a);return b;}
function ANn(a,b){Cx(a);a.mA=b;}
function A5R(a,b,c,d){var e,f,g;e=!d.lP?Q(c):d.bO;if(b>=e){Cg(d,a.mA,0);return a.m.e(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){Cg(d,a.mA,0);return a.m.e(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cg(d,a.mA,0);return a.m.e(b,c,d);}
function A04(a,b){var c;c=!EH(b,a.mA)?0:1;Cg(b,a.mA,(-1));return c;}
function ANH(){B_.call(this);}
function A9V(){var a=new ANH();ATn(a);return a;}
function ATn(a){Cx(a);}
function A5h(a,b,c,d){if(b<(d.oT?Q(c):d.bO))return (-1);d.g9=1;d.Kp=1;return a.m.e(b,c,d);}
function AY_(a,b){return 0;}
function AIf(){B_.call(this);this.EL=null;}
function A_c(a){var b=new AIf();A5T(b,a);return b;}
function A5T(a,b){Cx(a);a.EL=b;}
function A01(a,b,c,d){a:{if(b!=d.bO){if(!b)break a;if(d.lP&&b==d.fd)break a;if(a.EL.E$(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.m.e(b,c,d);}
function ASA(a,b){return 0;}
function AGr(){Cu.call(this);}
function A95(){var a=new AGr();A4_(a);return a;}
function A4_(a){Cx(a);}
function AYy(a,b,c,d){var e,f,g,h;e=d.bO;f=b+1|0;if(f>e){d.g9=1;return (-1);}g=P(c,b);if(Dw(g)){h=b+2|0;if(h<=e&&K_(g,P(c,f)))return a.m.e(h,c,d);}return a.m.e(f,c,d);}
function A0N(a,b){a.m=b;}
function A47(a){return (-2147483602);}
function A0L(a,b){return 1;}
function ABQ(){Cu.call(this);this.vi=null;}
function A9I(a){var b=new ABQ();AQ8(b,a);return b;}
function AQ8(a,b){Cx(a);a.vi=b;}
function A5b(a,b,c,d){var e,f,g,h;e=d.bO;f=b+1|0;if(f>e){d.g9=1;return (-1);}g=P(c,b);if(Dw(g)){b=b+2|0;if(b<=e){h=P(c,f);if(K_(g,h))return a.vi.o$(E4(g,h))?(-1):a.m.e(b,c,d);}}return a.vi.o$(g)?(-1):a.m.e(f,c,d);}
function A6m(a,b){a.m=b;}
function AOT(a){return (-2147483602);}
function AYH(a,b){return 1;}
function ANx(){B_.call(this);this.p_=0;}
function A9q(a){var b=new ANx();A2y(b,a);return b;}
function A2y(a,b){Cx(a);a.p_=b;}
function ATT(a,b,c,d){var e;e=!d.lP?Q(c):d.bO;if(b>=e){Cg(d,a.p_,0);return a.m.e(b,c,d);}if((e-b|0)==1&&P(c,b)==10){Cg(d,a.p_,1);return a.m.e(b+1|0,c,d);}return (-1);}
function A2w(a,b){var c;c=!EH(b,a.p_)?0:1;Cg(b,a.p_,(-1));return c;}
function ALd(){B_.call(this);this.oX=0;}
function A9e(a){var b=new ALd();A2T(b,a);return b;}
function A2T(a,b){Cx(a);a.oX=b;}
function AVs(a,b,c,d){if((!d.lP?Q(c)-b|0:d.bO-b|0)<=0){Cg(d,a.oX,0);return a.m.e(b,c,d);}if(P(c,b)!=10)return (-1);Cg(d,a.oX,1);return a.m.e(b+1|0,c,d);}
function A2o(a,b){var c;c=!EH(b,a.oX)?0:1;Cg(b,a.oX,(-1));return c;}
function AHS(){B_.call(this);this.l8=0;}
function A8Q(a){var b=new AHS();A8A(b,a);return b;}
function A8A(a,b){Cx(a);a.l8=b;}
function A3d(a,b,c,d){var e,f,g;e=!d.lP?Q(c)-b|0:d.fd-b|0;if(!e){Cg(d,a.l8,0);return a.m.e(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cg(d,a.l8,0);return a.m.e(b,c,d);case 13:if(g!=10){Cg(d,a.l8,0);return a.m.e(b,c,d);}Cg(d,a.l8,0);return a.m.e(b,c,d);default:}return (-1);}
function ARb(a,b){var c;c=!EH(b,a.l8)?0:1;Cg(b,a.l8,(-1));return c;}
function JZ(){var a=this;Cu.call(a);a.zZ=0;a.m9=0;}
function A_q(a,b){var c=new JZ();Rk(c,a,b);return c;}
function Rk(a,b,c){Cx(a);a.zZ=b;a.m9=c;}
function APN(a,b,c,d){var e,f,g,h;e=IK(a,d);if(e!==null&&(b+Q(e)|0)<=d.bO){f=0;while(true){if(f>=Q(e)){Cg(d,a.m9,Q(e));return a.m.e(b+Q(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Lj(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A5V(a,b){a.m=b;}
function IK(a,b){return AKG(b,a.zZ);}
function AWq(a,b){var c;c=!EH(b,a.m9)?0:1;Cg(b,a.m9,(-1));return c;}
function ANB(){JZ.call(this);}
function A$a(a,b){var c=new ANB();A7x(c,a,b);return c;}
function A7x(a,b,c){Rk(a,b,c);}
function ARe(a,b,c,d){var e,f;e=IK(a,d);if(e!==null&&(b+Q(e)|0)<=d.bO){f=!Pi(c,e,b)?(-1):Q(e);if(f<0)return (-1);Cg(d,a.m9,f);return a.m.e(b+f|0,c,d);}return (-1);}
function AXI(a,b,c,d){var e,f,g;e=IK(a,d);f=d.fd;if(e!==null&&(b+Q(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=Or(g,e,b);if(b<0)return (-1);if(a.m.e(b+Q(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function APx(a,b,c,d,e){var f,g,h;f=IK(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=RI(g,f,c);if(h<0)break a;if(h<b)break a;if(a.m.e(h+Q(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A4u(a,b){return 1;}
function AJ8(){JZ.call(this);}
function A9d(a,b){var c=new AJ8();ASr(c,a,b);return c;}
function ASr(a,b,c){Rk(a,b,c);}
function AUo(a,b,c,d){var e,f;e=IK(a,d);if(e!==null&&(b+Q(e)|0)<=d.bO){f=0;while(true){if(f>=Q(e)){Cg(d,a.m9,Q(e));return a.m.e(b+Q(e)|0,c,d);}if(Gh(F1(P(e,f)))!=Gh(F1(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AKw(){var a=this;CA.call(a);a.eZ=null;a.xz=null;a.vr=null;}
function A9f(a){var b=new AKw();A1s(b,a);return b;}
function A1s(a,b){var c;E$(a);a.eZ=S(b);a.c_=PR(b);a.xz=A46(a.c_);a.vr=A46(a.c_);c=0;while(c<(a.c_-1|0)){R9(a.xz,P(a.eZ,c),(a.c_-c|0)-1|0);R9(a.vr,P(a.eZ,(a.c_-c|0)-1|0),(a.c_-c|0)-1|0);c=c+1|0;}}
function ARs(a,b,c){return !ML(a,c,b)?(-1):a.c_;}
function A0w(a,b,c,d){var e,f;e=d.bO;while(true){if(b>e)return (-1);f=ANM(a,c,b,e);if(f<0)return (-1);if(a.m.e(f+a.c_|0,c,d)>=0)break;b=f+1|0;}return f;}
function A2A(a,b,c,d,e){while(true){if(c<b)return (-1);c=ANm(a,d,b,c);if(c<0)return (-1);if(a.m.e(c+a.c_|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ASZ(a,b){var c;if(b instanceof FX)return b.gn!=P(a.eZ,0)?0:1;if(b instanceof FQ)return Vr(b,0,BP(a.eZ,0,1))<=0?0:1;if(!(b instanceof Fa)){if(!(b instanceof Fi))return 1;return Q(a.eZ)>1&&b.kW==E4(P(a.eZ,0),P(a.eZ,1))?1:0;}a:{b:{b=b;if(!b.T(P(a.eZ,0))){if(Q(a.eZ)<=1)break b;if(!b.T(E4(P(a.eZ,0),P(a.eZ,1))))break b;}c=1;break a;}c=0;}return c;}
function ANM(a,b,c,d){var e,f;e=P(a.eZ,a.c_-1|0);while(true){if(c>(d-a.c_|0))return (-1);f=P(b,(c+a.c_|0)-1|0);if(f==e&&ML(a,b,c))break;c=c+XZ(a.xz,f)|0;}return c;}
function ANm(a,b,c,d){var e,f,g;e=P(a.eZ,0);f=(Q(b)-d|0)-a.c_|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=P(b,d);if(g==e&&ML(a,b,d))break;d=d-XZ(a.vr,g)|0;}return d;}
function ML(a,b,c){var d;d=0;while(d<a.c_){if(P(b,d+c|0)!=P(a.eZ,d))return 0;d=d+1|0;}return 1;}
function AAq(){CA.call(this);this.te=null;}
function A_r(a){var b=new AAq();A7a(b,a);return b;}
function A7a(a,b){var c,d;E$(a);c=new R;T(c);d=0;while(d<PR(b)){Ce(c,Gh(F1(AHY(b,d))));d=d+1|0;}a.te=S(c);a.c_=Lh(c);}
function AUr(a,b,c){var d;d=0;while(true){if(d>=Q(a.te))return Q(a.te);if(P(a.te,d)!=Gh(F1(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Qs(){CA.call(this);this.p7=null;}
function A6s(a,b,c){var d,e,f;d=0;while(true){if(d>=Q(a.p7))return Q(a.p7);e=P(a.p7,d);f=b+d|0;if(e!=P(c,f)&&Lj(P(a.p7,d))!=P(c,f))break;d=d+1|0;}return (-1);}
function Jf(){C.call(this);}
var Bh2=null;var Bh3=null;var Bh4=null;function ANY(a,b){var c,d,e;c=0;while(true){if(c>=Bh4.data.length){d=new NY;Bb(d,B(9));d.Ip=B(9);d.KA=b;J(d);}e=Bh4.data[c].data;if(BW(b,e[0]))break;c=c+1|0;}return e[1];}
function ACs(){var b,c,d,e;Bh2=A9T();Bh3=A$J();b=H($rt_arraycls(C),194);c=b.data;d=H(C,2);e=d.data;e[0]=B(707);e[1]=A97();c[0]=d;d=H(C,2);e=d.data;e[0]=B(708);e[1]=A8P();c[1]=d;d=H(C,2);e=d.data;e[0]=B(709);e[1]=A_a();c[2]=d;d=H(C,2);e=d.data;e[0]=B(710);e[1]=A_g();c[3]=d;d=H(C,2);e=d.data;e[0]=B(711);e[1]=Bh3;c[4]=d;d=H(C,2);e=d.data;e[0]=B(712);e[1]=A$Q();c[5]=d;d=H(C,2);e=d.data;e[0]=B(713);e[1]=A9h();c[6]=d;d=H(C,2);e=d.data;e[0]=B(714);e[1]=A$d();c[7]=d;d=H(C,2);e=d.data;e[0]=B(715);e[1]=A9_();c[8]=d;d
=H(C,2);e=d.data;e[0]=B(716);e[1]=A8Z();c[9]=d;d=H(C,2);e=d.data;e[0]=B(717);e[1]=A8$();c[10]=d;d=H(C,2);e=d.data;e[0]=B(718);e[1]=A$f();c[11]=d;d=H(C,2);e=d.data;e[0]=B(719);e[1]=A9D();c[12]=d;d=H(C,2);e=d.data;e[0]=B(720);e[1]=A8N();c[13]=d;d=H(C,2);e=d.data;e[0]=B(721);e[1]=A_d();c[14]=d;d=H(C,2);e=d.data;e[0]=B(722);e[1]=A89();c[15]=d;d=H(C,2);e=d.data;e[0]=B(723);e[1]=A$O();c[16]=d;d=H(C,2);e=d.data;e[0]=B(724);e[1]=A$u();c[17]=d;d=H(C,2);e=d.data;e[0]=B(725);e[1]=A$P();c[18]=d;d=H(C,2);e=d.data;e[0]=B(726);e[1]
=A81();c[19]=d;d=H(C,2);e=d.data;e[0]=B(727);e[1]=A_i();c[20]=d;d=H(C,2);e=d.data;e[0]=B(728);e[1]=A$p();c[21]=d;d=H(C,2);e=d.data;e[0]=B(729);e[1]=A9r();c[22]=d;d=H(C,2);e=d.data;e[0]=B(730);e[1]=A$$();c[23]=d;d=H(C,2);e=d.data;e[0]=B(731);e[1]=A$8();c[24]=d;d=H(C,2);e=d.data;e[0]=B(732);e[1]=A92();c[25]=d;d=H(C,2);e=d.data;e[0]=B(733);e[1]=A80();c[26]=d;d=H(C,2);e=d.data;e[0]=B(734);e[1]=A$1();c[27]=d;d=H(C,2);e=d.data;e[0]=B(735);e[1]=Bh2;c[28]=d;d=H(C,2);e=d.data;e[0]=B(736);e[1]=A9x();c[29]=d;d=H(C,2);e
=d.data;e[0]=B(60);e[1]=A$e();c[30]=d;d=H(C,2);e=d.data;e[0]=B(737);e[1]=Bh2;c[31]=d;d=H(C,2);e=d.data;e[0]=B(74);e[1]=A8L();c[32]=d;d=H(C,2);e=d.data;e[0]=B(738);e[1]=Bh3;c[33]=d;d=H(C,2);e=d.data;e[0]=B(75);e[1]=A9c();c[34]=d;d=H(C,2);e=d.data;e[0]=B(739);e[1]=X(0,127);c[35]=d;d=H(C,2);e=d.data;e[0]=B(740);e[1]=X(128,255);c[36]=d;d=H(C,2);e=d.data;e[0]=B(741);e[1]=X(256,383);c[37]=d;d=H(C,2);e=d.data;e[0]=B(742);e[1]=X(384,591);c[38]=d;d=H(C,2);e=d.data;e[0]=B(743);e[1]=X(592,687);c[39]=d;d=H(C,2);e=d.data;e[0]
=B(744);e[1]=X(688,767);c[40]=d;d=H(C,2);e=d.data;e[0]=B(745);e[1]=X(768,879);c[41]=d;d=H(C,2);e=d.data;e[0]=B(746);e[1]=X(880,1023);c[42]=d;d=H(C,2);e=d.data;e[0]=B(747);e[1]=X(1024,1279);c[43]=d;d=H(C,2);e=d.data;e[0]=B(748);e[1]=X(1280,1327);c[44]=d;d=H(C,2);e=d.data;e[0]=B(749);e[1]=X(1328,1423);c[45]=d;d=H(C,2);e=d.data;e[0]=B(750);e[1]=X(1424,1535);c[46]=d;d=H(C,2);e=d.data;e[0]=B(751);e[1]=X(1536,1791);c[47]=d;d=H(C,2);e=d.data;e[0]=B(752);e[1]=X(1792,1871);c[48]=d;d=H(C,2);e=d.data;e[0]=B(753);e[1]=
X(1872,1919);c[49]=d;d=H(C,2);e=d.data;e[0]=B(754);e[1]=X(1920,1983);c[50]=d;d=H(C,2);e=d.data;e[0]=B(755);e[1]=X(2304,2431);c[51]=d;d=H(C,2);e=d.data;e[0]=B(756);e[1]=X(2432,2559);c[52]=d;d=H(C,2);e=d.data;e[0]=B(757);e[1]=X(2560,2687);c[53]=d;d=H(C,2);e=d.data;e[0]=B(758);e[1]=X(2688,2815);c[54]=d;d=H(C,2);e=d.data;e[0]=B(759);e[1]=X(2816,2943);c[55]=d;d=H(C,2);e=d.data;e[0]=B(760);e[1]=X(2944,3071);c[56]=d;d=H(C,2);e=d.data;e[0]=B(761);e[1]=X(3072,3199);c[57]=d;d=H(C,2);e=d.data;e[0]=B(762);e[1]=X(3200,3327);c[58]
=d;d=H(C,2);e=d.data;e[0]=B(763);e[1]=X(3328,3455);c[59]=d;d=H(C,2);e=d.data;e[0]=B(764);e[1]=X(3456,3583);c[60]=d;d=H(C,2);e=d.data;e[0]=B(765);e[1]=X(3584,3711);c[61]=d;d=H(C,2);e=d.data;e[0]=B(766);e[1]=X(3712,3839);c[62]=d;d=H(C,2);e=d.data;e[0]=B(767);e[1]=X(3840,4095);c[63]=d;d=H(C,2);e=d.data;e[0]=B(768);e[1]=X(4096,4255);c[64]=d;d=H(C,2);e=d.data;e[0]=B(769);e[1]=X(4256,4351);c[65]=d;d=H(C,2);e=d.data;e[0]=B(770);e[1]=X(4352,4607);c[66]=d;d=H(C,2);e=d.data;e[0]=B(771);e[1]=X(4608,4991);c[67]=d;d=H(C,
2);e=d.data;e[0]=B(772);e[1]=X(4992,5023);c[68]=d;d=H(C,2);e=d.data;e[0]=B(773);e[1]=X(5024,5119);c[69]=d;d=H(C,2);e=d.data;e[0]=B(774);e[1]=X(5120,5759);c[70]=d;d=H(C,2);e=d.data;e[0]=B(775);e[1]=X(5760,5791);c[71]=d;d=H(C,2);e=d.data;e[0]=B(776);e[1]=X(5792,5887);c[72]=d;d=H(C,2);e=d.data;e[0]=B(777);e[1]=X(5888,5919);c[73]=d;d=H(C,2);e=d.data;e[0]=B(778);e[1]=X(5920,5951);c[74]=d;d=H(C,2);e=d.data;e[0]=B(779);e[1]=X(5952,5983);c[75]=d;d=H(C,2);e=d.data;e[0]=B(780);e[1]=X(5984,6015);c[76]=d;d=H(C,2);e=d.data;e[0]
=B(781);e[1]=X(6016,6143);c[77]=d;d=H(C,2);e=d.data;e[0]=B(782);e[1]=X(6144,6319);c[78]=d;d=H(C,2);e=d.data;e[0]=B(783);e[1]=X(6400,6479);c[79]=d;d=H(C,2);e=d.data;e[0]=B(784);e[1]=X(6480,6527);c[80]=d;d=H(C,2);e=d.data;e[0]=B(785);e[1]=X(6528,6623);c[81]=d;d=H(C,2);e=d.data;e[0]=B(786);e[1]=X(6624,6655);c[82]=d;d=H(C,2);e=d.data;e[0]=B(787);e[1]=X(6656,6687);c[83]=d;d=H(C,2);e=d.data;e[0]=B(788);e[1]=X(7424,7551);c[84]=d;d=H(C,2);e=d.data;e[0]=B(789);e[1]=X(7552,7615);c[85]=d;d=H(C,2);e=d.data;e[0]=B(790);e[1]
=X(7616,7679);c[86]=d;d=H(C,2);e=d.data;e[0]=B(791);e[1]=X(7680,7935);c[87]=d;d=H(C,2);e=d.data;e[0]=B(792);e[1]=X(7936,8191);c[88]=d;d=H(C,2);e=d.data;e[0]=B(793);e[1]=X(8192,8303);c[89]=d;d=H(C,2);e=d.data;e[0]=B(794);e[1]=X(8304,8351);c[90]=d;d=H(C,2);e=d.data;e[0]=B(795);e[1]=X(8352,8399);c[91]=d;d=H(C,2);e=d.data;e[0]=B(796);e[1]=X(8400,8447);c[92]=d;d=H(C,2);e=d.data;e[0]=B(797);e[1]=X(8448,8527);c[93]=d;d=H(C,2);e=d.data;e[0]=B(798);e[1]=X(8528,8591);c[94]=d;d=H(C,2);e=d.data;e[0]=B(799);e[1]=X(8592,
8703);c[95]=d;d=H(C,2);e=d.data;e[0]=B(800);e[1]=X(8704,8959);c[96]=d;d=H(C,2);e=d.data;e[0]=B(801);e[1]=X(8960,9215);c[97]=d;d=H(C,2);e=d.data;e[0]=B(802);e[1]=X(9216,9279);c[98]=d;d=H(C,2);e=d.data;e[0]=B(803);e[1]=X(9280,9311);c[99]=d;d=H(C,2);e=d.data;e[0]=B(804);e[1]=X(9312,9471);c[100]=d;d=H(C,2);e=d.data;e[0]=B(805);e[1]=X(9472,9599);c[101]=d;d=H(C,2);e=d.data;e[0]=B(806);e[1]=X(9600,9631);c[102]=d;d=H(C,2);e=d.data;e[0]=B(807);e[1]=X(9632,9727);c[103]=d;d=H(C,2);e=d.data;e[0]=B(808);e[1]=X(9728,9983);c[104]
=d;d=H(C,2);e=d.data;e[0]=B(809);e[1]=X(9984,10175);c[105]=d;d=H(C,2);e=d.data;e[0]=B(810);e[1]=X(10176,10223);c[106]=d;d=H(C,2);e=d.data;e[0]=B(811);e[1]=X(10224,10239);c[107]=d;d=H(C,2);e=d.data;e[0]=B(812);e[1]=X(10240,10495);c[108]=d;d=H(C,2);e=d.data;e[0]=B(813);e[1]=X(10496,10623);c[109]=d;d=H(C,2);e=d.data;e[0]=B(814);e[1]=X(10624,10751);c[110]=d;d=H(C,2);e=d.data;e[0]=B(815);e[1]=X(10752,11007);c[111]=d;d=H(C,2);e=d.data;e[0]=B(816);e[1]=X(11008,11263);c[112]=d;d=H(C,2);e=d.data;e[0]=B(817);e[1]=X(11264,
11359);c[113]=d;d=H(C,2);e=d.data;e[0]=B(818);e[1]=X(11392,11519);c[114]=d;d=H(C,2);e=d.data;e[0]=B(819);e[1]=X(11520,11567);c[115]=d;d=H(C,2);e=d.data;e[0]=B(820);e[1]=X(11568,11647);c[116]=d;d=H(C,2);e=d.data;e[0]=B(821);e[1]=X(11648,11743);c[117]=d;d=H(C,2);e=d.data;e[0]=B(822);e[1]=X(11776,11903);c[118]=d;d=H(C,2);e=d.data;e[0]=B(823);e[1]=X(11904,12031);c[119]=d;d=H(C,2);e=d.data;e[0]=B(824);e[1]=X(12032,12255);c[120]=d;d=H(C,2);e=d.data;e[0]=B(825);e[1]=X(12272,12287);c[121]=d;d=H(C,2);e=d.data;e[0]=B(826);e[1]
=X(12288,12351);c[122]=d;d=H(C,2);e=d.data;e[0]=B(827);e[1]=X(12352,12447);c[123]=d;d=H(C,2);e=d.data;e[0]=B(828);e[1]=X(12448,12543);c[124]=d;d=H(C,2);e=d.data;e[0]=B(829);e[1]=X(12544,12591);c[125]=d;d=H(C,2);e=d.data;e[0]=B(830);e[1]=X(12592,12687);c[126]=d;d=H(C,2);e=d.data;e[0]=B(831);e[1]=X(12688,12703);c[127]=d;d=H(C,2);e=d.data;e[0]=B(832);e[1]=X(12704,12735);c[128]=d;d=H(C,2);e=d.data;e[0]=B(833);e[1]=X(12736,12783);c[129]=d;d=H(C,2);e=d.data;e[0]=B(834);e[1]=X(12784,12799);c[130]=d;d=H(C,2);e=d.data;e[0]
=B(835);e[1]=X(12800,13055);c[131]=d;d=H(C,2);e=d.data;e[0]=B(836);e[1]=X(13056,13311);c[132]=d;d=H(C,2);e=d.data;e[0]=B(837);e[1]=X(13312,19893);c[133]=d;d=H(C,2);e=d.data;e[0]=B(838);e[1]=X(19904,19967);c[134]=d;d=H(C,2);e=d.data;e[0]=B(839);e[1]=X(19968,40959);c[135]=d;d=H(C,2);e=d.data;e[0]=B(840);e[1]=X(40960,42127);c[136]=d;d=H(C,2);e=d.data;e[0]=B(841);e[1]=X(42128,42191);c[137]=d;d=H(C,2);e=d.data;e[0]=B(842);e[1]=X(42752,42783);c[138]=d;d=H(C,2);e=d.data;e[0]=B(843);e[1]=X(43008,43055);c[139]=d;d=H(C,
2);e=d.data;e[0]=B(844);e[1]=X(44032,55203);c[140]=d;d=H(C,2);e=d.data;e[0]=B(845);e[1]=X(55296,56191);c[141]=d;d=H(C,2);e=d.data;e[0]=B(846);e[1]=X(56192,56319);c[142]=d;d=H(C,2);e=d.data;e[0]=B(847);e[1]=X(56320,57343);c[143]=d;d=H(C,2);e=d.data;e[0]=B(848);e[1]=X(57344,63743);c[144]=d;d=H(C,2);e=d.data;e[0]=B(849);e[1]=X(63744,64255);c[145]=d;d=H(C,2);e=d.data;e[0]=B(850);e[1]=X(64256,64335);c[146]=d;d=H(C,2);e=d.data;e[0]=B(851);e[1]=X(64336,65023);c[147]=d;d=H(C,2);e=d.data;e[0]=B(852);e[1]=X(65024,65039);c[148]
=d;d=H(C,2);e=d.data;e[0]=B(853);e[1]=X(65040,65055);c[149]=d;d=H(C,2);e=d.data;e[0]=B(854);e[1]=X(65056,65071);c[150]=d;d=H(C,2);e=d.data;e[0]=B(855);e[1]=X(65072,65103);c[151]=d;d=H(C,2);e=d.data;e[0]=B(856);e[1]=X(65104,65135);c[152]=d;d=H(C,2);e=d.data;e[0]=B(857);e[1]=X(65136,65279);c[153]=d;d=H(C,2);e=d.data;e[0]=B(858);e[1]=X(65280,65519);c[154]=d;d=H(C,2);e=d.data;e[0]=B(859);e[1]=X(0,1114111);c[155]=d;d=H(C,2);e=d.data;e[0]=B(860);e[1]=A$g();c[156]=d;d=H(C,2);e=d.data;e[0]=B(861);e[1]=Cl(0,1);c[157]
=d;d=H(C,2);e=d.data;e[0]=B(862);e[1]=LW(62,1);c[158]=d;d=H(C,2);e=d.data;e[0]=B(863);e[1]=Cl(1,1);c[159]=d;d=H(C,2);e=d.data;e[0]=B(864);e[1]=Cl(2,1);c[160]=d;d=H(C,2);e=d.data;e[0]=B(865);e[1]=Cl(3,0);c[161]=d;d=H(C,2);e=d.data;e[0]=B(866);e[1]=Cl(4,0);c[162]=d;d=H(C,2);e=d.data;e[0]=B(867);e[1]=Cl(5,1);c[163]=d;d=H(C,2);e=d.data;e[0]=B(868);e[1]=LW(448,1);c[164]=d;d=H(C,2);e=d.data;e[0]=B(869);e[1]=Cl(6,1);c[165]=d;d=H(C,2);e=d.data;e[0]=B(870);e[1]=Cl(7,0);c[166]=d;d=H(C,2);e=d.data;e[0]=B(871);e[1]=Cl(8,
1);c[167]=d;d=H(C,2);e=d.data;e[0]=B(92);e[1]=LW(3584,1);c[168]=d;d=H(C,2);e=d.data;e[0]=B(872);e[1]=Cl(9,1);c[169]=d;d=H(C,2);e=d.data;e[0]=B(873);e[1]=Cl(10,1);c[170]=d;d=H(C,2);e=d.data;e[0]=B(874);e[1]=Cl(11,1);c[171]=d;d=H(C,2);e=d.data;e[0]=B(875);e[1]=LW(28672,0);c[172]=d;d=H(C,2);e=d.data;e[0]=B(876);e[1]=Cl(12,0);c[173]=d;d=H(C,2);e=d.data;e[0]=B(877);e[1]=Cl(13,0);c[174]=d;d=H(C,2);e=d.data;e[0]=B(878);e[1]=Cl(14,0);c[175]=d;d=H(C,2);e=d.data;e[0]=B(879);e[1]=A$G(983040,1,1);c[176]=d;d=H(C,2);e=d.data;e[0]
=B(880);e[1]=Cl(15,0);c[177]=d;d=H(C,2);e=d.data;e[0]=B(881);e[1]=Cl(16,1);c[178]=d;d=H(C,2);e=d.data;e[0]=B(882);e[1]=Cl(18,1);c[179]=d;d=H(C,2);e=d.data;e[0]=B(883);e[1]=A9p(19,0,1);c[180]=d;d=H(C,2);e=d.data;e[0]=B(884);e[1]=LW(1643118592,1);c[181]=d;d=H(C,2);e=d.data;e[0]=B(885);e[1]=Cl(20,0);c[182]=d;d=H(C,2);e=d.data;e[0]=B(886);e[1]=Cl(21,0);c[183]=d;d=H(C,2);e=d.data;e[0]=B(887);e[1]=Cl(22,0);c[184]=d;d=H(C,2);e=d.data;e[0]=B(888);e[1]=Cl(23,0);c[185]=d;d=H(C,2);e=d.data;e[0]=B(889);e[1]=Cl(24,1);c[186]
=d;d=H(C,2);e=d.data;e[0]=B(890);e[1]=LW(2113929216,1);c[187]=d;d=H(C,2);e=d.data;e[0]=B(891);e[1]=Cl(25,1);c[188]=d;d=H(C,2);e=d.data;e[0]=B(892);e[1]=Cl(26,0);c[189]=d;d=H(C,2);e=d.data;e[0]=B(893);e[1]=Cl(27,0);c[190]=d;d=H(C,2);e=d.data;e[0]=B(894);e[1]=Cl(28,1);c[191]=d;d=H(C,2);e=d.data;e[0]=B(895);e[1]=Cl(29,0);c[192]=d;d=H(C,2);e=d.data;e[0]=B(896);e[1]=Cl(30,0);c[193]=d;Bh4=b;}
function Bq(){var a=this;C.call(a);a.vO=null;a.uV=null;}
function AMM(a,b){if(!b&&a.vO===null)a.vO=a.b3();else if(b&&a.uV===null)a.uV=FY(a.b3(),1);if(b)return a.uV;return a.vO;}
function Vv(){CA.call(this);this.Ba=0;}
function AWJ(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.Ba!=Hy(Hw(E4(e,d)))?(-1):2;}
function O0(){Cu.call(this);this.mO=0;}
function AVk(a){var b=new O0();AQG(b,a);return b;}
function AQG(a,b){Cx(a);a.mO=b;}
function A5s(a,b){a.m=b;}
function A05(a,b,c,d){var e,f;e=b+1|0;if(e>d.bO){d.g9=1;return (-1);}f=P(c,b);if(b>d.fd&&Dw(P(c,b-1|0)))return (-1);if(a.mO!=f)return (-1);return a.m.e(e,c,d);}
function ASX(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.fd;g=d.bO;while(true){if(b>=g)return (-1);h=Eo(e,a.mO,b);if(h<0)return (-1);if(h>f&&Dw(P(e,h-1|0))){b=h+1|0;continue;}i=a.m;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function A1F(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=e.fd;g=d;a:{while(true){if(c<b)return (-1);c=Fu(g,a.mO,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dw(P(g,c-1|0))){c=c+(-2)|0;continue;}if(a.m.e(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function APu(a,b){if(b instanceof FX)return 0;if(b instanceof FQ)return 0;if(b instanceof Fa)return 0;if(b instanceof Fi)return 0;if(b instanceof Pb)return 0;if(!(b instanceof O0))return 1;return b.mO!=a.mO?0:1;}
function AXl(a,b){return 1;}
function Pb(){Cu.call(this);this.mn=0;}
function A3g(a){var b=new Pb();AVq(b,a);return b;}
function AVq(a,b){Cx(a);a.mn=b;}
function A0V(a,b){a.m=b;}
function APb(a,b,c,d){var e,f,g,h;e=d.bO;f=b+1|0;g=Bw(f,e);if(g>0){d.g9=1;return (-1);}h=P(c,b);if(g<0&&D1(P(c,f)))return (-1);if(a.mn!=h)return (-1);return a.m.e(f,c,d);}
function A5H(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.bO;while(true){if(b>=f)return (-1);g=Eo(e,a.mn,b);if(g<0)return (-1);b=g+1|0;if(b<f&&D1(P(e,b))){b=g+2|0;continue;}if(a.m.e(b,c,d)>=0)break;}return g;}
function AWG(a,b,c,d,e){var f,g,h;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=d;g=e.bO;a:{while(true){if(c<b)return (-1);c=Fu(f,a.mn,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&D1(P(f,h))){c=c+(-1)|0;continue;}if(a.m.e(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ARu(a,b){if(b instanceof FX)return 0;if(b instanceof FQ)return 0;if(b instanceof Fa)return 0;if(b instanceof Fi)return 0;if(b instanceof O0)return 0;if(!(b instanceof Pb))return 1;return b.mn!=a.mn?0:1;}
function A5N(a,b){return 1;}
function Fi(){var a=this;CA.call(a);a.t1=0;a.sV=0;a.kW=0;}
function A6c(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.t1==e&&a.sV==d?2:(-1);}
function A4V(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.bO;while(b<f){b=Eo(e,a.t1,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=P(e,b);if(a.sV==g&&a.m.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AQI(a,b,c,d,e){var f;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Fu(f,a.sV,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.t1==P(f,c)&&a.m.e(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AZt(a){return a.kW;}
function A52(a,b){if(b instanceof Fi)return b.kW!=a.kW?0:1;if(b instanceof Fa)return b.T(a.kW);if(b instanceof FX)return 0;if(!(b instanceof FQ))return 1;return 0;}
function Y1(){GZ.call(this);}
function AQO(a,b){return b!=10?0:1;}
function AWm(a,b,c){return b!=10?0:1;}
function Y2(){GZ.call(this);}
function A6y(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AYe(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFu(){var a=this;C.call(a);a.pw=null;a.uk=null;a.f6=0;a.C0=0;}
function A46(a){var b=new AFu();ATv(b,a);return b;}
function ATv(a,b){while(b>=a.f6){a.f6=a.f6<<1|1;}a.f6=a.f6<<1|1;a.pw=$rt_createIntArray(a.f6+1|0);a.uk=$rt_createIntArray(a.f6+1|0);a.C0=b;}
function R9(a,b,c){var d,e;d=0;e=b&a.f6;while(a.pw.data[e]&&a.pw.data[e]!=b){d=(d+1|0)&a.f6;e=(e+d|0)&a.f6;}a.pw.data[e]=b;a.uk.data[e]=c;}
function XZ(a,b){var c,d,e;c=b&a.f6;d=0;while(true){e=a.pw.data[c];if(!e)break;if(e==b)return a.uk.data[c];d=(d+1|0)&a.f6;c=(c+d|0)&a.f6;}return a.C0;}
function AAY(){C.call(this);}
function OW(){Bq.call(this);}
function A9T(){var a=new OW();ATb(a);return a;}
function ATb(a){return;}
function AKf(a){return Dq(Cy(EI(),9,13),32);}
function Oo(){Bq.call(this);}
function A$J(){var a=new Oo();AXe(a);return a;}
function AXe(a){return;}
function AKX(a){return Cy(EI(),48,57);}
function AFq(){Bq.call(this);}
function A97(){var a=new AFq();ASM(a);return a;}
function ASM(a){return;}
function A6o(a){return Cy(EI(),97,122);}
function AFU(){Bq.call(this);}
function A8P(){var a=new AFU();ATC(a);return a;}
function ATC(a){return;}
function AXn(a){return Cy(EI(),65,90);}
function AFX(){Bq.call(this);}
function A_a(){var a=new AFX();AP8(a);return a;}
function AP8(a){return;}
function AR0(a){return Cy(EI(),0,127);}
function OR(){Bq.call(this);}
function A_g(){var a=new OR();ARf(a);return a;}
function ARf(a){return;}
function ABS(a){return Cy(Cy(EI(),97,122),65,90);}
function Ni(){OR.call(this);}
function A$Q(){var a=new Ni();ATf(a);return a;}
function ATf(a){return;}
function ACW(a){return Cy(ABS(a),48,57);}
function AHv(){Bq.call(this);}
function A9h(){var a=new AHv();A4G(a);return a;}
function A4G(a){return;}
function A2V(a){return Cy(Cy(Cy(EI(),33,64),91,96),123,126);}
function PW(){Ni.call(this);}
function A$d(){var a=new PW();AV8(a);return a;}
function AV8(a){return;}
function AHI(a){return Cy(Cy(Cy(ACW(a),33,64),91,96),123,126);}
function AKu(){PW.call(this);}
function A9_(){var a=new AKu();AW9(a);return a;}
function AW9(a){return;}
function AUK(a){return Dq(AHI(a),32);}
function AD4(){Bq.call(this);}
function A8Z(){var a=new AD4();A6t(a);return a;}
function A6t(a){return;}
function A1r(a){return Dq(Dq(EI(),32),9);}
function ACi(){Bq.call(this);}
function A8$(){var a=new ACi();A7N(a);return a;}
function A7N(a){return;}
function AUD(a){return Dq(Cy(EI(),0,31),127);}
function AI0(){Bq.call(this);}
function A$f(){var a=new AI0();AQq(a);return a;}
function AQq(a){return;}
function AYk(a){return Cy(Cy(Cy(EI(),48,57),97,102),65,70);}
function ANc(){Bq.call(this);}
function A9D(){var a=new ANc();A0h(a);return a;}
function A0h(a){return;}
function A44(a){var b;b=new X7;b.JH=a;BR(b);b.ch=1;return b;}
function AHy(){Bq.call(this);}
function A8N(){var a=new AHy();AWi(a);return a;}
function AWi(a){return;}
function AZi(a){var b;b=new VD;b.JP=a;BR(b);b.ch=1;return b;}
function AMw(){Bq.call(this);}
function A_d(){var a=new AMw();AQc(a);return a;}
function AQc(a){return;}
function ATe(a){var b;b=new Su;b.Jl=a;BR(b);return b;}
function AFb(){Bq.call(this);}
function A89(){var a=new AFb();AUG(a);return a;}
function AUG(a){return;}
function AWr(a){var b;b=new St;b.GM=a;BR(b);return b;}
function AGd(){Bq.call(this);}
function A$O(){var a=new AGd();ARd(a);return a;}
function ARd(a){return;}
function A1p(a){var b;b=new UK;b.H3=a;BR(b);Ky(b.cc,0,2048);b.ch=1;return b;}
function ABj(){Bq.call(this);}
function A$u(){var a=new ABj();AQM(a);return a;}
function AQM(a){return;}
function ARF(a){var b;b=new Wz;b.J2=a;BR(b);b.ch=1;return b;}
function AH9(){Bq.call(this);}
function A$P(){var a=new AH9();AUp(a);return a;}
function AUp(a){return;}
function A7S(a){var b;b=new QR;b.Is=a;BR(b);b.ch=1;return b;}
function AME(){Bq.call(this);}
function A81(){var a=new AME();AUW(a);return a;}
function AUW(a){return;}
function AZb(a){var b;b=new Xq;b.Hh=a;BR(b);return b;}
function AFJ(){Bq.call(this);}
function A_i(){var a=new AFJ();A25(a);return a;}
function A25(a){return;}
function AT0(a){var b;b=new Vz;b.Ge=a;BR(b);b.ch=1;return b;}
function AJF(){Bq.call(this);}
function A$p(){var a=new AJF();APy(a);return a;}
function APy(a){return;}
function ARK(a){var b;b=new VC;b.HC=a;BR(b);b.ch=1;return b;}
function AEb(){Bq.call(this);}
function A9r(){var a=new AEb();AQS(a);return a;}
function AQS(a){return;}
function A2B(a){var b;b=new QI;b.H1=a;BR(b);b.ch=1;return b;}
function AGZ(){Bq.call(this);}
function A$$(){var a=new AGZ();AT5(a);return a;}
function AT5(a){return;}
function A3L(a){var b;b=new WQ;b.KE=a;BR(b);b.ch=1;return b;}
function AMO(){Bq.call(this);}
function A$8(){var a=new AMO();A4Y(a);return a;}
function A4Y(a){return;}
function AXB(a){var b;b=new WW;b.G4=a;BR(b);return b;}
function ADc(){Bq.call(this);}
function A92(){var a=new ADc();AQN(a);return a;}
function AQN(a){return;}
function AV4(a){var b;b=new Yu;b.J_=a;BR(b);return b;}
function ACM(){Bq.call(this);}
function A80(){var a=new ACM();A6g(a);return a;}
function A6g(a){return;}
function AU$(a){var b;b=new XT;b.Gh=a;BR(b);b.ch=1;return b;}
function AHx(){Bq.call(this);}
function A$1(){var a=new AHx();A22(a);return a;}
function A22(a){return;}
function A6k(a){var b;b=new Qe;b.KX=a;BR(b);b.ch=1;return b;}
function Md(){Bq.call(this);}
function A9x(){var a=new Md();ARS(a);return a;}
function ARS(a){return;}
function AD5(a){return Dq(Cy(Cy(Cy(EI(),97,122),65,90),48,57),95);}
function ANs(){Md.call(this);}
function A$e(){var a=new ANs();A28(a);return a;}
function A28(a){return;}
function AUZ(a){var b;b=FY(AD5(a),1);b.ch=1;return b;}
function AKz(){OW.call(this);}
function A8L(){var a=new AKz();AX0(a);return a;}
function AX0(a){return;}
function A0r(a){var b;b=FY(AKf(a),1);b.ch=1;return b;}
function ACE(){Oo.call(this);}
function A9c(){var a=new ACE();A3z(a);return a;}
function A3z(a){return;}
function ASQ(a){var b;b=FY(AKX(a),1);b.ch=1;return b;}
function AI5(){var a=this;Bq.call(a);a.A9=0;a.EJ=0;}
function X(a,b){var c=new AI5();A7R(c,a,b);return c;}
function A7R(a,b,c){a.A9=b;a.EJ=c;}
function AUd(a){return Cy(EI(),a.A9,a.EJ);}
function AJq(){Bq.call(this);}
function A$g(){var a=new AJq();AYp(a);return a;}
function AYp(a){return;}
function AX7(a){return Cy(Cy(EI(),65279,65279),65520,65533);}
function AKn(){var a=this;Bq.call(a);a.y1=0;a.wS=0;a.DS=0;}
function Cl(a,b){var c=new AKn();AQ_(c,a,b);return c;}
function A9p(a,b,c){var d=new AKn();AYb(d,a,b,c);return d;}
function AQ_(a,b,c){a.wS=c;a.y1=b;}
function AYb(a,b,c,d){a.DS=d;a.wS=c;a.y1=b;}
function A2m(a){var b;b=A96(a.y1);if(a.DS)Ky(b.cc,0,2048);b.ch=a.wS;return b;}
function AKv(){var a=this;Bq.call(a);a.v4=0;a.um=0;a.z1=0;}
function LW(a,b){var c=new AKv();ARL(c,a,b);return c;}
function A$G(a,b,c){var d=new AKv();AZd(d,a,b,c);return d;}
function ARL(a,b,c){a.um=c;a.v4=b;}
function AZd(a,b,c,d){a.z1=d;a.um=c;a.v4=b;}
function AO0(a){var b;b=new XJ;AEP(b,a.v4);if(a.z1)Ky(b.cc,0,2048);b.ch=a.um;return b;}
function VS(){var a=this;C.call(a);a.xJ=0;a.Bt=0;a.D_=null;}
function ASf(a,b,c){var d=new VS();AW6(d,a,b,c);return d;}
function AW6(a,b,c,d){a.xJ=b;a.Bt=c;a.D_=d;}
function RQ(){var a=this;Dn.call(a);a.HB=0;a.fa=null;a.zg=null;a.wu=0;a.y0=0;a.l3=null;a.uh=0;a.vq=0;a.EX=0;}
function ABv(a){var b,c,d;if(a.EX){b=!a.vq?Zq(a.fa,1):!a.uh?Q2(a.fa,a.l3,1):AAa(a.fa,a.l3,1);c=!a.y0?ABo(a.fa,0):!a.wu?R1(a.fa,a.l3,0):Vd(a.fa,a.l3,0);d=A4K(a.fa,b,c,1);}else{b=!a.y0?Zq(a.fa,0):!a.wu?Q2(a.fa,a.zg,0):AAa(a.fa,a.zg,0);c=!a.vq?ABo(a.fa,1):!a.uh?R1(a.fa,a.l3,1):Vd(a.fa,a.l3,1);d=A4K(a.fa,b,c,0);}return d;}
function UA(){var a=this;Bk.call(a);a.Dt=null;a.Kx=null;}
function AR6(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dE^E8(a.Dt,c):0;}
function Uz(){var a=this;Bk.call(a);a.Ft=null;a.CD=null;a.HM=null;}
function AZE(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dE^E8(a.Ft,c):0;return a.CD.T(b)&&!d?1:0;}
function Q7(){var a=this;Bk.call(a);a.sZ=null;a.II=null;}
function AT8(a,b){return a.cq^E8(a.sZ,b);}
function A2I(a){var b,c;b=new R;T(b);c=J5(a.sZ,0);while(c>=0){Ib(b,JE(c));Ce(b,124);c=J5(a.sZ,c+1|0);}if(b.b6>0)Uu(b,b.b6-1|0);return S(b);}
function Wi(){var a=this;Bk.call(a);a.EC=null;a.JO=null;}
function A6e(a,b){return a.EC.T(b);}
function Wg(){var a=this;Bk.call(a);a.wW=0;a.DM=null;a.xO=null;}
function AWH(a,b){return !(a.wW^E8(a.xO.b$,b))&&!(a.wW^a.xO.iG^a.DM.T(b))?0:1;}
function Wh(){var a=this;Bk.call(a);a.ul=0;a.Cw=null;a.vJ=null;}
function A37(a,b){return !(a.ul^E8(a.vJ.b$,b))&&!(a.ul^a.vJ.iG^a.Cw.T(b))?1:0;}
function Wl(){var a=this;Bk.call(a);a.FP=0;a.Cx=null;a.Cu=null;a.IX=null;}
function A1O(a,b){return a.FP^(!a.Cx.T(b)&&!a.Cu.T(b)?0:1);}
function Wn(){var a=this;Bk.call(a);a.Bi=0;a.Ez=null;a.Ei=null;a.KQ=null;}
function AOV(a,b){return a.Bi^(!a.Ez.T(b)&&!a.Ei.T(b)?0:1)?0:1;}
function Wj(){var a=this;Bk.call(a);a.AY=null;a.KW=null;}
function ASN(a,b){return Ed(a.AY,b);}
function Wk(){var a=this;Bk.call(a);a.FG=null;a.I7=null;}
function AUs(a,b){return Ed(a.FG,b)?0:1;}
function Wo(){var a=this;Bk.call(a);a.Bq=null;a.EB=0;a.Ca=null;}
function AXL(a,b){return !Ed(a.Bq,b)&&!(a.EB^E8(a.Ca.b$,b))?0:1;}
function Wp(){var a=this;Bk.call(a);a.BI=null;a.E1=0;a.Bz=null;}
function A1j(a,b){return !Ed(a.BI,b)&&!(a.E1^E8(a.Bz.b$,b))?1:0;}
function Q6(){var a=this;Bk.call(a);a.B9=0;a.FB=null;a.CJ=null;a.Gn=null;}
function A8K(a,b){return !(a.B9^a.FB.T(b))&&!Ed(a.CJ,b)?0:1;}
function Rn(){var a=this;Bk.call(a);a.FL=0;a.zU=null;a.z3=null;a.GH=null;}
function ASP(a,b){return !(a.FL^a.zU.T(b))&&!Ed(a.z3,b)?1:0;}
function Q4(){var a=this;Bk.call(a);a.D2=null;a.GK=null;}
function ARi(a,b){return Ed(a.D2,b);}
function Q5(){var a=this;Bk.call(a);a.AR=null;a.KO=null;}
function A2v(a,b){return Ed(a.AR,b)?0:1;}
function Q$(){var a=this;Bk.call(a);a.FN=null;a.BH=0;a.Gc=null;}
function ATA(a,b){return Ed(a.FN,b)&&a.BH^E8(a.Gc.b$,b)?1:0;}
function Q3(){var a=this;Bk.call(a);a.Fb=null;a.EI=0;a.BE=null;}
function A69(a,b){return Ed(a.Fb,b)&&a.EI^E8(a.BE.b$,b)?0:1;}
function Q8(){var a=this;Bk.call(a);a.Fm=0;a.Dr=null;a.Bh=null;a.IW=null;}
function A0E(a,b){return a.Fm^a.Dr.T(b)&&Ed(a.Bh,b)?1:0;}
function Q9(){var a=this;Bk.call(a);a.E9=0;a.Df=null;a.Fj=null;a.I_=null;}
function AVW(a,b){return a.E9^a.Df.T(b)&&Ed(a.Fj,b)?0:1;}
function Xb(){var a=this;C.call(a);a.Fh=null;a.Fi=null;}
function AI_(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=a.Fh;c=a.Fi;if(b.gS.readyState==4){b.ja=b.gS.status;b.vt=$rt_str(b.gS.statusText);if(!b.ja)b.ja=(-1);d=new Int8Array(b.gS.response);e=$rt_createByteArray(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}i=Ju(e);d=$rt_str(b.gS.getAllResponseHeaders());j=0;k=BV();l=BV();b.wm=CZ();b.q1=CZ();while(j<Q(d)){g=Or(d,B(897),j);if(g<0)g=Q(d);h=Eo(d,58,j);if(h<0)h=Q(d);m=Bw(h,g);n=m>=0?BP(d,j,g):BP(d,j,h);o=m>=0?B(9):GY(BP(d,h+1|0,g));n=GY(n);M(k,n);M(l,
o);p=Co(b.q1,n);if(p===null){p=BV();BI(b.q1,n,p);}p.ky(o);n=Oj(n);BI(b.wm,n,o);j=g+2|0;}b.I2=HW(k,H(BC,k.q));b.Gk=HW(l,H(BC,l.q));j=b.ja/100|0;if(j!=4&&j!=5){b.n5=i;b.C1=null;}else{b.C1=i;b.n5=null;}CY(c,Bh5);}}
function AU5(a){AI_(a);}
function ALC(){Fq.call(this);}
function Ql(){JG.call(this);}
function ASj(a,b,c,d){var e,f,g;e=0;f=d.bO;a:{while(true){if(b>f){b=e;break a;}g=If(d,a.cF);E9(d,a.cF,b);e=a.fo.e(b,c,d);if(e>=0)break;E9(d,a.cF,g);b=b+1|0;}}return b;}
function A8v(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=If(e,a.cF);E9(e,a.cF,c);f=a.fo.e(c,d,e);if(f>=0)break;E9(e,a.cF,g);c=c+(-1)|0;}}return c;}
function AQ9(a){return null;}
function AHC(){var a=this;C.call(a);a.D8=0;a.FM=null;a.wI=null;a.uL=null;a.Ck=null;a.j1=0;a.yT=0;}
function A4K(a,b,c,d){var e=new AHC();A7U(e,a,b,c,d);return e;}
function A7U(a,b,c,d,e){var f,g;a.FM=b;a.D8=b.t5;f=b.gi===null?0:b.gi.kJ;g=c.data;a.wI=Ea(c,f);a.j1=g.length;a.Ck=d;a.yT=e;}
function AMT(a){return a.j1<=0?0:1;}
function X4(a){var b,c,d,e,f;if(a.D8!=a.FM.t5){b=new JW;Z(b);J(b);}if(!a.j1){b=new Jl;Z(b);J(b);}a:{c=a.wI.data;d=a.j1-1|0;a.j1=d;b=c[d];a.uL=b;e=Jn(b,a.yT);if(e!==null)while(true){if(e===null)break a;c=a.wI.data;f=a.j1;a.j1=f+1|0;c[f]=e;e=G3(e,a.yT);}}if(a.uL===a.Ck)a.j1=0;return a.uL;}
function AYh(a){return X4(a);}
function Ny(){}
function XS(){var a=this;C.call(a);a.GC=null;a.FC=null;a.p6=null;a.du=null;a.q8=0;a.s1=0;}
function P8(a,b){var c,d;c=Q(a.p6);if(b>=0&&b<=c){AB$(a.du);a.du.nT=1;AMR(a.du,b);b=a.FC.eA(b,a.p6,a.du);if(b==(-1))a.du.g9=1;if(b>=0&&a.du.oR){AEj(a.du);return 1;}a.du.hg=(-1);return 0;}d=new BD;Bb(d,Yo(b));J(d);}
function AC3(a){var b,c;b=Q(a.p6);if(!AA_(a))b=a.s1;if(a.du.hg>=0&&a.du.nT==1){a.du.hg=NS(a.du);if(NS(a.du)==AFs(a.du)){c=a.du;c.hg=c.hg+1|0;}return a.du.hg<=b&&P8(a,a.du.hg)?1:0;}return P8(a,a.q8);}
function AHt(a,b){return Rm(a.du,b);}
function AAR(a,b){return Sv(a.du,b);}
function AGX(a){return AHt(a,0);}
function AJw(a){return AAR(a,0);}
function AA_(a){return a.du.oT;}
function KE(){C.call(this);this.Io=0;}
var Bh5=null;var Bh6=null;var Bh7=null;function AVS(a){var b=new KE();AFi(b,a);return b;}
function AFi(a,b){a.Io=b;}
function AIB(){Bh5=AVS(1);Bh6=AVS(0);Bh7=D($rt_booleancls());}
function ZZ(){var a=this;JS.call(a);a.Jo=null;a.If=0;}
function AST(a){return 0;}
function ARa(a,b){b=new Hs;Z(b);J(b);}
function A1R(a,b,c,d){var e;if(a.Be===null)return null;if(c&&a.BR)return null;e=new Qr;e.AI=a;e.z$=d;if(e.z$)e.G7=e.AI.If;return e;}
function AWY(a,b){var c,d;c=new BA;d=new R;T(d);Bb(c,S(E(E(E(d,B(898)),b),B(899))));J(c);}
function X7(){Bk.call(this);this.JH=null;}
function AXV(a,b){return Dp(b)!=2?0:1;}
function VD(){Bk.call(this);this.JP=null;}
function A0p(a,b){return Dp(b)!=1?0:1;}
function Su(){Bk.call(this);this.Jl=null;}
function APQ(a,b){return R6(b);}
function St(){Bk.call(this);this.GM=null;}
function A2l(a,b){return 0;}
function UK(){Bk.call(this);this.H3=null;}
function ATp(a,b){return !Dp(b)?0:1;}
function Wz(){Bk.call(this);this.J2=null;}
function A7z(a,b){return Dp(b)!=9?0:1;}
function QR(){Bk.call(this);this.Is=null;}
function AVB(a,b){return JB(b);}
function Xq(){Bk.call(this);this.Hh=null;}
function AWv(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Vz(){Bk.call(this);this.Ge=null;}
function A8k(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function VC(){Bk.call(this);this.HC=null;}
function ARy(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function QI(){Bk.call(this);this.H1=null;}
function AX3(a,b){a:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function WQ(){Bk.call(this);this.KE=null;}
function A4l(a,b){return Mg(b);}
function WW(){Bk.call(this);this.G4=null;}
function A5U(a,b){return WY(b);}
function Yu(){Bk.call(this);this.J_=null;}
function A7q(a,b){return Dp(b)!=3?0:1;}
function XT(){Bk.call(this);this.Gh=null;}
function AYq(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function Qe(){Bk.call(this);this.KX=null;}
function ARq(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function NJ(){Bk.call(this);this.vx=0;}
function A96(a){var b=new NJ();AEP(b,a);return b;}
function AEP(a,b){BR(a);a.vx=b;}
function AVC(a,b){return a.cq^(a.vx!=Dp(b&65535)?0:1);}
function XJ(){NJ.call(this);}
function A6L(a,b){return a.cq^(!(a.vx>>Dp(b&65535)&1)?0:1);}
function Rh(){Fh.call(this);this.FZ=null;}
function ANC(a){var b,c;b=AMG(a.FZ);c=new Rg;c.Bj=b;return c;}
function Rf(){Fv.call(this);this.x0=null;}
function A74(a,b){return a.x0.mM(b);}
function A4E(a){return a.x0.eX();}
function YY(){var a=this;C.call(a);a.gw=null;a.pm=null;a.yd=null;a.vl=null;a.Az=0;a.oR=0;a.fd=0;a.bO=0;a.hg=0;a.oT=0;a.lP=0;a.g9=0;a.Kp=0;a.lo=0;a.nT=0;}
function Cg(a,b,c){a.pm.data[b]=c;}
function EH(a,b){return a.pm.data[b];}
function NS(a){return Sv(a,0);}
function Sv(a,b){XI(a,b);return a.gw.data[(b*2|0)+1|0];}
function E9(a,b,c){a.gw.data[b*2|0]=c;}
function N8(a,b,c){a.gw.data[(b*2|0)+1|0]=c;}
function If(a,b){return a.gw.data[b*2|0];}
function KU(a,b){return a.gw.data[(b*2|0)+1|0];}
function AKG(a,b){var c,d;c=If(a,b);d=KU(a,b);if((d|c|(d-c|0))>=0&&d<=Q(a.vl))return BP(a.vl,c,d);return null;}
function AFs(a){return Rm(a,0);}
function Rm(a,b){XI(a,b);return a.gw.data[b*2|0];}
function AEj(a){if(a.gw.data[0]==(-1)){a.gw.data[0]=a.hg;a.gw.data[1]=a.hg;}a.lo=NS(a);}
function VF(a,b){return a.yd.data[b];}
function F5(a,b,c){a.yd.data[b]=c;}
function XI(a,b){var c;if(!a.oR){c=new DF;Z(c);J(c);}if(b>=0&&b<a.Az)return;c=new BD;Bb(c,Yo(b));J(c);}
function AN4(a){a.oR=1;}
function A7F(a){return a.oR;}
function Z2(a,b,c,d){a.oR=0;a.nT=2;Js(a.gw,(-1));Js(a.pm,(-1));if(b!==null)a.vl=b;if(c>=0){a.fd=c;a.bO=d;}a.hg=a.fd;}
function AB$(a){Z2(a,null,(-1),(-1));}
function AMR(a,b){a.hg=b;if(a.lo>=0)b=a.lo;a.lo=b;}
function A0Q(a){return a.fd;}
function A3$(a){return a.bO;}
function A1P(a,b){a.nT=b;}
function ASw(a){return a.nT;}
function A2Y(a){return a.lP;}
function AZC(a){return a.oT;}
function AZ3(a){return a.lo;}
function Rg(){Dn.call(this);this.Bj=null;}
function AMQ(a){var b,c;b=AIC(a.Bj);c=new Ri;c.wO=b;return c;}
function T0(){Dn.call(this);this.EE=null;}
function AIC(a){var b;b=new TV;OV(b,a.EE);return b;}
function Ri(){C.call(this);this.wO=null;}
function AJC(a){return Lb(a.wO);}
function U1(a){var b,c,d;b=new UR;c=S8(a.wO);d=c.io;c=c.fr;b.vS=d;b.wZ=c;return b;}
function A6B(a){return U1(a);}
function TV(){G6.call(this);}
function S8(a){Ph(a);return a.jI;}
function A76(a){return S8(a);}
function UV(){}
function Qr(){var a=this;C.call(a);a.G7=0;a.z$=0;a.AI=null;}
function A3F(a){return;}
function UR(){var a=this;C.call(a);a.vS=null;a.wZ=null;}
function AVK(a){return a.wZ;}
function ARm(a){return a.vS;}
function AID(){C.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"net",3,"lang",-1,"net",11,"minecraft",12,"game",13,"level",14,"block",13,"entity",16,"animal",16,"monster",16,"player",12,"client",20,"effect",11,"Colbster937"]);
$rt_metadata([C,"Object",10,0,[],0,3,0,["l1",function(){return A1q(this);},"cJ",function(b){return S5(this,b);},"eN",function(){return AQF(this);}],OC,0,C,[],0,3,0,0,VM,0,C,[],3,3,0,0,Zu,0,C,[VM],0,3,0,0,AIX,0,C,[],4,0,0,0,AIO,0,C,[],4,3,0,0,Ci,0,C,[],3,3,0,0,Dk,0,C,[],3,3,0,0,LX,0,C,[],3,3,0,0,BC,"String",10,C,[Ci,Dk,LX],0,3,0,["eN",function(){return AQC(this);},"cJ",function(b){return BW(this,b);},"l1",function(){return O$(this);},"kR",function(b){return ASg(this,b);}],FS,0,C,[],0,3,0,["kS",function(){return AWy(this);
}],EF,0,FS,[],0,3,0,0,J8,0,EF,[],0,3,0,0,AJ4,0,J8,[],0,3,0,0,IR,0,C,[Ci,LX],0,0,0,["n1",function(b){N7(this,b);},"eN",function(){return S(this);}],JA,0,C,[],3,3,0,0,R,0,IR,[JA],0,3,0,["yE",function(b,c,d,e){return A3D(this,b,c,d,e);},"xV",function(b,c,d){return ARE(this,b,c,d);},"eN",function(){return B0(this);},"n1",function(b){AT2(this,b);},"zd",function(b,c){return A36(this,b,c);}],Fx,0,C,[Ci],1,3,0,0,GT,0,Fx,[Dk],0,3,0,["l1",function(){return AZm(this);},"cJ",function(b){return Z3(this,b);},"kR",function(b)
{return XL(this,b);}],JX,0,J8,[],0,3,0,0,ALR,0,JX,[],0,3,0,0,AJM,0,JX,[],0,3,0,0,Cq,0,FS,[],0,3,0,0,BU,"RuntimeException",10,Cq,[],0,3,0,0,Dl,0,C,[],3,3,0,0,H_,0,C,[Dl],3,3,0,0,WP,0,C,[H_],3,3,0,0,Sd,0,C,[H_],3,3,0,0,XA,0,C,[H_],3,3,0,0,Tw,0,C,[H_],3,3,0,0,YO,0,C,[H_,WP,Sd,XA,Tw],3,3,0,0,Ra,0,C,[],3,3,0,0,Mp,0,C,[Dl],3,3,0,0,ABa,0,C,[Dl,YO,Ra,Mp],1,3,0,["Yl",function(b,c){return AUm(this,b,c);},"Z2",function(b,c){return AUB(this,b,c);},"S1",function(b){return APW(this,b);},"Pe",function(b,c,d){return AVv(this,
b,c,d);},"Nw",function(b){return AX2(this,b);},"VE",function(){return AQT(this);},"Ud",function(b,c,d){return APd(this,b,c,d);}],Bn,0,C,[],0,3,Bf,0,Ou,"MinecraftMain$AbortedLaunchException",22,BU,[],0,3,0,0,U7,0,C,[],3,3,0,0,IY,0,C,[U7],3,3,0,0,Pl,0,C,[],3,3,0,0,IC,0,C,[JA,IY,Pl],1,3,0,0,MI,0,IC,[],0,3,0,0,MB,0,IC,[],0,3,0,0,AFP,0,C,[],4,3,0,0,AF_,0,C,[Dl],1,3,0,0,Nd,0,C,[],4,3,0,0,Pe,0,C,[],0,3,0,0,V_,0,C,[],0,3,0,0,DY,0,C,[Dl],3,3,0,0,ALU,0,C,[DY],0,0,0,["gJ",function(b){return AZl(this,b);}],ALX,0,C,[DY],
0,0,0,["gJ",function(b){return A8z(this,b);}]]);
$rt_metadata([ALY,0,C,[DY],0,0,0,["gJ",function(b){return A0n(this,b);}],ALV,0,C,[DY],0,0,0,["gJ",function(b){return AP5(this,b);}],ALW,0,C,[DY],0,0,0,["gJ",function(b){return A7h(this,b);}],AL0,0,C,[DY],0,0,0,["gJ",function(b){return ATR(this,b);}],AL1,0,C,[DY],0,0,0,["gJ",function(b){return AWK(this,b);}],ALZ,0,C,[DY],0,0,0,["gJ",function(b){return AR1(this,b);}],ALt,0,C,[DY],0,0,0,["gJ",function(b){return A2E(this,b);}],ALs,0,C,[DY],0,0,0,["gJ",function(b){return AYD(this,b);}],My,0,C,[],0,3,0,0,Fd,"Enum",
10,C,[Dk,Ci],1,3,0,["cJ",function(b){return APH(this,b);},"kR",function(b){return ATP(this,b);}],Fr,0,Fd,[],12,3,0,0,Xk,0,C,[],0,3,0,0,BA,"IOException",8,Cq,[],0,3,0,0,Kh,0,IR,[JA],0,3,0,["yE",function(b,c,d,e){return ASd(this,b,c,d,e);},"xV",function(b,c,d){return A0D(this,b,c,d);},"n1",function(b){A0W(this,b);},"zd",function(b,c){return A6S(this,b,c);}],E5,0,C,[],3,3,0,0,Yy,0,C,[E5],0,3,0,0,FF,0,C,[Dk],0,3,0,["cJ",function(b){return A7L(this,b);},"l1",function(){return A7u(this);},"kR",function(b){return AZo(this,
b);}],Ev,0,C,[IY,Pl],1,3,0,["jB",function(b,c,d){APs(this,b,c,d);}],Jo,0,Ev,[],0,3,0,0,AC0,0,Jo,[],0,3,0,0,ZV,0,Ev,[],0,0,0,["qT",function(b){AUA(this,b);}],GA,0,C,[IY],1,3,0,0,J0,0,GA,[],0,3,0,0,Q0,0,C,[],3,3,0,0,RL,0,J0,[Q0],0,3,0,0,ANd,0,GA,[],0,3,0,["Dw",function(){return A03(this);},"oO",function(b,c,d){return AOq(this,b,c,d);},"xp",function(){return A18(this);}],CI,0,C,[],1,3,0,0,Kc,0,CI,[],4,3,0,["gC",function(b){APn(this,b);},"gv",function(b){AXT(this,b);},"e5",function(){return AZZ(this);}],Bm,0,Bn,
[],0,3,BM,0,AHg,0,Bm,[],0,3,0,0,I1,0,C,[],3,3,0,0,Ml,0,C,[I1],4,3,0,0,Ms,0,C,[],4,3,A$D,0,Uv,0,C,[],3,3,0,0,Jq,0,C,[Uv],3,3,0,0,FB,0,C,[Jq],1,3,0,0,HQ,0,C,[Jq],3,3,0,0,Fv,0,FB,[HQ],1,3,0,["ky",function(b){return HF(this,b);},"gz",function(){return Hq(this);},"wK",function(b,c){A6$(this,b,c);},"cJ",function(b){return AU4(this,b);}],NB,0,Fv,[],1,3,0,["wK",function(b,c){AWa(this,b,c);},"FO",function(b){return VI(this,b);}],L2,0,C,[Jq],3,3,0,0,Z4,0,C,[L2],3,3,0,0,AFo,0,NB,[Z4],0,3,0,["eX",function(){return A57(this);
},"w9",function(){PM(this);}],ALf,0,C,[Dl],1,3,0,0,Fq,0,C,[Dl],1,3,0,0,ADj,0,Fq,[],1,3,0,0,AJi,0,Fq,[],1,3,0,0,DG,0,C,[],3,3,0,0,L7,0,C,[Ci,DG],1,3,0,0,Mq,0,L7,[],1,3,0,0,AHo,0,Mq,[],0,3,0,0]);
$rt_metadata([Kj,0,C,[Jq],3,3,0,0,Dn,0,FB,[Kj],1,3,0,["cJ",function(b){return A2z(this,b);}],ANg,0,Dn,[DG,Ci],0,3,0,0,KQ,0,C,[],3,3,0,0,Fh,0,C,[KQ],1,3,0,0,MV,0,Fh,[DG,Ci],0,3,0,["xf",function(b){return A2K(this,b);}],AI2,0,Fq,[],1,3,0,0,AHf,0,C,[],0,3,0,0,AKH,0,C,[],0,3,0,0,Se,0,C,[],3,3,0,0,Xu,0,C,[Se],0,0,0,["Hs",function(b){CY(this,b);},"J6",function(b){AYu(this,b);}],ANt,0,C,[Dl],1,3,0,0,PQ,0,C,[Dl],3,3,0,0,Yw,0,C,[PQ],0,0,0,["KV",function(){return AYz(this);}],N1,0,C,[Dk],1,3,0,0,ZA,0,J0,[],0,3,0,["Dw",
function(){return APe(this);},"oO",function(b,c,d){return AJS(this,b,c,d);},"xp",function(){return AWB(this);}],Oi,0,C,[],1,3,0,0,Tf,0,Oi,[],0,3,0,0,AIw,0,C,[],0,3,0,0,AHp,0,N1,[],0,3,0,0,KG,0,C,[],1,3,0,0,KL,0,KG,[],0,3,0,0,Nl,0,CI,[],4,3,0,["gv",function(b){AYG(this,b);},"gC",function(b){A3x(this,b);},"e5",function(){return AS8(this);}],IZ,0,C,[],0,3,0,0,AEw,0,IZ,[],4,3,0,0,R$,0,C,[],4,3,0,0,Xg,0,C,[],3,3,0,0,XC,0,C,[Xg],0,3,0,0,Q1,0,C,[],4,3,0,0,Iy,0,C,[],0,3,0,0,Fw,0,C,[],1,3,0,0,JV,0,Fw,[],0,3,0,["gQ",
function(b,c,d,e,f,g){A8u(this,b,c,d,e,f,g);},"oV",function(b,c,d,e,f,g){ABt(this,b,c,d,e,f,g);}],I2,0,C,[],0,3,0,0,QW,0,I2,[],4,3,0,0,Tc,0,I2,[],4,3,0,0,F_,0,C,[I1],0,3,0,["hM",function(){ANS(this);}],ZO,0,F_,[],4,0,0,["hM",function(){AGA(this);}],Ct,0,C,[DG,Ci],4,3,0,["cJ",function(b){return A2n(this,b);}],ER,0,C,[Dl],3,3,0,0,SU,0,C,[ER],0,0,0,["jF",function(){return AW$(this);}],SV,0,C,[ER],0,0,0,["jF",function(){return ATB(this);}],SW,0,C,[ER],0,0,0,["jF",function(){return A4z(this);}],SX,0,C,[DY],0,0,0,
["gJ",function(b){return A66(this,b);}],UP,0,C,[],0,0,0,0,BB,"IllegalArgumentException",10,BU,[],0,3,0,0,XB,"UnsupportedCharsetException",7,BB,[],0,3,0,0,Eg,"NullPointerException",10,BU,[],0,3,0,0,OM,0,CI,[],4,3,0,["gC",function(b){A34(this,b);},"gv",function(b){AQw(this,b);},"e5",function(){return A5L(this);}],UL,0,CI,[],4,3,0,["gC",function(b){A7B(this,b);},"gv",function(b){AYs(this,b);},"e5",function(){return ASh(this);}],Mj,0,CI,[],4,3,0,["gC",function(b){AWe(this,b);},"gv",function(b){APP(this,b);},"e5",
function(){return AT_(this);}]]);
$rt_metadata([L1,0,CI,[],4,3,0,["gC",function(b){A23(this,b);},"gv",function(b){A1W(this,b);},"e5",function(){return AWo(this);}],Y9,0,CI,[],4,3,0,["gC",function(b){A3r(this,b);},"gv",function(b){APT(this,b);},"e5",function(){return A0x(this);}],QV,0,CI,[],4,3,0,["gC",function(b){A2X(this,b);},"gv",function(b){AZ9(this,b);},"e5",function(){return AYd(this);}],MZ,0,CI,[],4,3,0,["gC",function(b){A1y(this,b);},"gv",function(b){A5l(this,b);},"e5",function(){return A5o(this);}],OY,0,CI,[],4,3,0,["gC",function(b)
{ARJ(this,b);},"gv",function(b){A2c(this,b);},"e5",function(){return A7Q(this);}],AHl,0,CI,[],4,3,0,["gC",function(b){A40(this,b);},"gv",function(b){AP6(this,b);},"e5",function(){return AZn(this);}],AHb,0,Iy,[],0,3,0,0,U9,0,C,[],4,3,0,0,FH,0,C,[],1,3,0,0,Nf,0,FH,[Dk],1,3,0,0,V,"Block",15,C,[],0,3,L,["iy",function(){return AWN(this);},"ij",function(){return AZO(this);},"dX",function(b,c,d,e){return ASz(this,b,c,d,e);},"d9",function(b,c,d,e,f){return Kb(this,b,c,d,e,f);},"jC",function(b,c,d,e,f){return A2Q(this,
b,c,d,e,f);},"qv",function(b,c){return AZU(this,b,c);},"cP",function(b){return A7f(this,b);},"it",function(b,c,d){return APj(this,b,c,d);},"fK",function(){return AWM(this);},"pK",function(){return AT7(this);},"gj",function(b,c,d,e,f){A7J(this,b,c,d,e,f);},"oP",function(b,c,d,e,f){AYm(this,b,c,d,e,f);},"rE",function(b,c,d,e,f){A4e(this,b,c,d,e,f);},"jp",function(b,c,d,e,f){A5e(this,b,c,d,e,f);},"rW",function(){return A5r(this);},"gD",function(b,c,d,e){AQh(this,b,c,d,e);},"tl",function(b,c,d,e){APv(this,b,c,d,
e);},"gl",function(b){return AS6(this,b);},"gq",function(b,c){return AVr(this,b,c);},"Bf",function(b,c,d,e,f,g){return ALk(this,b,c,d,e,f,g);},"A4",function(b,c,d,e){ARR(this,b,c,d,e);},"yl",function(){return A5c(this);},"oo",function(b,c,d,e){return A0m(this,b,c,d,e);},"r5",function(b,c,d,e,f){return AAS(this,b,c,d,e,f);},"F5",function(b,c,d,e){AVj(this,b,c,d,e);},"En",function(b,c,d,e,f){ARg(this,b,c,d,e,f);}],TN,0,C,[],3,3,0,0,V3,0,Fv,[DG,Ci,TN],0,3,0,["mM",function(b){return Be(this,b);},"eX",function()
{return CE(this);},"ky",function(b){return M(this,b);},"wK",function(b,c){AKr(this,b,c);},"FO",function(b){return Ej(this,b);},"w9",function(){ES(this);}],AIo,0,C,[Ci,DG],0,3,0,0,AOt,0,Ev,[],0,3,0,["qT",function(b){A4D(this,b);},"jB",function(b,c,d){TD(this,b,c,d);}],Ud,0,C,[],3,3,0,0,AGj,0,Jo,[Ud],0,3,0,0,AFO,"IllegalCharsetNameException",7,BB,[],0,3,0,0,N0,0,C,[],128,3,0,0,WG,0,N0,[],4,3,0,0,Rx,0,C,[Dl],3,3,0,0,ANQ,0,C,[Dl,Rx],1,3,0,0,SZ,0,C,[ER],0,0,0,["jF",function(){return ARh(this);}],S0,0,C,[ER],0,0,
0,["jF",function(){return A8j(this);}],AC2,0,C,[Dl],4,3,0,0,ZU,0,C,[],4,3,0,0,ADz,0,C,[],4,3,0,0,Es,0,C,[],4,3,0,0,AI$,0,C,[],4,0,0,0,Og,0,FH,[Dk],1,3,0,0,Ns,"CloneNotSupportedException",10,Cq,[],0,3,0,0,Ot,0,Nf,[],1,0,0,0,Zv,0,Ot,[],0,0,0,0,ID,0,C,[],0,3,0,0,AGG,0,ID,[],4,0,0,0,AOA,0,ID,[],4,0,0,0,ABm,"BlockStone",15,V,[],4,3,0,["gq",function(b,c){return APq(this,b,c);}],AEC,"BlockGrass",15,V,[],4,3,0,["cP",function(b){return ARM(this,b);},"gj",function(b,c,d,e,f){A2e(this,b,c,d,e,f);},"gq",function(b,c){return A65(this,
b,c);}],AHM,"BlockDirt",15,V,[],4,3,0,0,B7,0,C,[],0,3,0,["mc",function(){return A6G(this);},"iw",function(){return AXF(this);},"pR",function(){return A3M(this);},"ow",function(){return AUv(this);}],Gq,"BlockFlower",15,V,[],0,3,0,["oo",function(b,c,d,e){return A1T(this,b,c,d,e);},"rR",function(b){return AQb(this,b);},"jp",function(b,c,d,e,f){A1d(this,b,c,d,e,f);},"gj",function(b,c,d,e,f){ATt(this,b,c,d,e,f);},"s8",function(b,c,d,e){return ATD(this,b,c,d,e);},"it",function(b,c,d){return A5j(this,b,c,d);},"fK",
function(){return ARC(this);},"iy",function(){return AUk(this);},"ij",function(){return AT3(this);}],AGy,"BlockSapling",15,Gq,[],4,3,0,["gj",function(b,c,d,e,f){ASb(this,b,c,d,e,f);}],Jc,0,V,[],0,3,0,["cP",function(b){return A8b(this,b);},"iy",function(){return A3p(this);},"gD",function(b,c,d,e){A4L(this,b,c,d,e);},"dX",function(b,c,d,e){return ASk(this,b,c,d,e);},"d9",function(b,c,d,e,f){return AAx(this,b,c,d,e,f);},"pK",function(){return AZF(this);},"it",function(b,c,d){return A5C(this,b,c,d);},"fK",function()
{return A5I(this);},"rW",function(){return AYF(this);},"gl",function(b){return A4q(this,b);},"yl",function(){return ATX(this);},"oP",function(b,c,d,e,f){AUj(this,b,c,d,e,f);}],ANw,"BlockFlowing",15,Jc,[],4,3,0,["gD",function(b,c,d,e){ASv(this,b,c,d,e);},"gj",function(b,c,d,e,f){AR_(this,b,c,d,e,f);},"d9",function(b,c,d,e,f){return AY9(this,b,c,d,e,f);},"pK",function(){return A8r(this);},"it",function(b,c,d){return APp(this,b,c,d);},"fK",function(){return A3w(this);},"jp",function(b,c,d,e,f){AUV(this,b,c,d,e,
f);},"rW",function(){return A1L(this);},"gl",function(b){return A7e(this,b);},"yl",function(){return AQ7(this);}],ANP,"BlockStationary",15,Jc,[],4,3,0,["gj",function(b,c,d,e,f){A3v(this,b,c,d,e,f);},"jp",function(b,c,d,e,f){ASi(this,b,c,d,e,f);}],Pj,"BlockSand",15,V,[],0,3,0,["gD",function(b,c,d,e){AXC(this,b,c,d,e);},"jp",function(b,c,d,e,f){ARv(this,b,c,d,e,f);}],ADP,"BlockGravel",15,Pj,[],4,3,0,["gq",function(b,c){return AYL(this,b,c);}],ACz,"BlockOre",15,V,[],4,3,0,["gq",function(b,c){return AX6(this,b,
c);},"gl",function(b){return AOZ(this,b);}],AGY,"BlockLog",15,V,[],4,3,0,["gl",function(b){return A3R(this,b);},"gq",function(b,c){return APO(this,b,c);},"cP",function(b){return A5W(this,b);}],L5,0,V,[],0,3,0,["fK",function(){return AR4(this);},"d9",function(b,c,d,e,f){return A0q(this,b,c,d,e,f);}]]);
$rt_metadata([AN7,"BlockLeaves",15,L5,[],4,3,0,["gj",function(b,c,d,e,f){A1V(this,b,c,d,e,f);},"gl",function(b){return AYZ(this,b);},"gq",function(b,c){return ASx(this,b,c);}],AOj,"BlockSponge",15,V,[],4,3,0,["gD",function(b,c,d,e){A8q(this,b,c,d,e);},"tl",function(b,c,d,e){ARo(this,b,c,d,e);}],Pa,0,V,[],0,3,0,["fK",function(){return AYI(this);},"d9",function(b,c,d,e,f){return AZL(this,b,c,d,e,f);}],AKa,"BlockGlass",15,Pa,[],4,3,0,["gl",function(b){return AZJ(this,b);}],AA4,"BlockMushroom",15,Gq,[],4,3,0,["rR",
function(b){return AQv(this,b);},"s8",function(b,c,d,e){return A3j(this,b,c,d,e);}],AAB,"BlockOreBlock",15,V,[],4,3,0,["cP",function(b){return A5f(this,b);}],AKC,"BlockStep",15,V,[],4,3,0,["cP",function(b){return ARx(this,b);},"fK",function(){return APA(this);},"jp",function(b,c,d,e,f){A5G(this,b,c,d,e,f);},"gD",function(b,c,d,e){AYS(this,b,c,d,e);},"gq",function(b,c){return APF(this,b,c);},"iy",function(){return A0S(this);},"d9",function(b,c,d,e,f){return A6Q(this,b,c,d,e,f);}],ANJ,"BlockTNT",15,V,[],4,3,0,
["cP",function(b){return AQK(this,b);},"gl",function(b){return A4y(this,b);},"A4",function(b,c,d,e){A7Z(this,b,c,d,e);},"rE",function(b,c,d,e,f){A7A(this,b,c,d,e,f);}],AJJ,"BlockBookshelf",15,V,[],4,3,0,["cP",function(b){return ARN(this,b);},"gl",function(b){return ARW(this,b);}],AOJ,"BlockTorch",15,V,[],4,3,0,["it",function(b,c,d){return AVe(this,b,c,d);},"fK",function(){return A2t(this);},"iy",function(){return AXH(this);},"ij",function(){return A79(this);},"oo",function(b,c,d,e){return AIq(this,b,c,d,e);
},"En",function(b,c,d,e,f){APD(this,b,c,d,e,f);},"gj",function(b,c,d,e,f){AWk(this,b,c,d,e,f);},"gD",function(b,c,d,e){AJ0(this,b,c,d,e);},"jp",function(b,c,d,e,f){ASC(this,b,c,d,e,f);},"Bf",function(b,c,d,e,f,g){return AUy(this,b,c,d,e,f,g);},"oP",function(b,c,d,e,f){ATd(this,b,c,d,e,f);}],AOQ,"BlockFire",15,V,[],4,3,0,["it",function(b,c,d){return AWx(this,b,c,d);},"fK",function(){return ATm(this);},"iy",function(){return AWA(this);},"ij",function(){return AVP(this);},"gl",function(b){return A8s(this,b);},
"rW",function(){return A2k(this);},"gj",function(b,c,d,e,f){A29(this,b,c,d,e,f);},"pK",function(){return A8l(this);},"oo",function(b,c,d,e){return A06(this,b,c,d,e);},"jp",function(b,c,d,e,f){AZD(this,b,c,d,e,f);},"gD",function(b,c,d,e){A31(this,b,c,d,e);},"oP",function(b,c,d,e,f){ASB(this,b,c,d,e,f);}],ADS,"BlockSource",15,V,[],4,3,0,["gD",function(b,c,d,e){A1N(this,b,c,d,e);},"gj",function(b,c,d,e,f){A3G(this,b,c,d,e,f);}],J2,0,V,[],1,3,0,["gD",function(b,c,d,e){AJe(this,b,c,d,e);},"tl",function(b,c,d,e){
AVt(this,b,c,d,e);}],ADD,"BlockChest",15,J2,[],4,3,0,["jC",function(b,c,d,e,f){return A8h(this,b,c,d,e,f);},"cP",function(b){return A5B(this,b);},"oo",function(b,c,d,e){return AXf(this,b,c,d,e);},"tl",function(b,c,d,e){A4c(this,b,c,d,e);},"r5",function(b,c,d,e,f){return AJ5(this,b,c,d,e,f);},"DF",function(){return A21(this);}],ANF,"BlockGears",15,V,[],4,3,0,["it",function(b,c,d){return AZw(this,b,c,d);},"fK",function(){return AR3(this);},"iy",function(){return A7c(this);},"ij",function(){return A3b(this);},
"gl",function(b){return AZ4(this,b);},"pK",function(){return APC(this);}],AGH,"BlockWorkbench",15,V,[],4,3,0,["cP",function(b){return AXy(this,b);},"r5",function(b,c,d,e,f){return ALv(this,b,c,d,e,f);}],AN3,"BlockCrops",15,Gq,[],4,3,0,["rR",function(b){return AZf(this,b);},"gj",function(b,c,d,e,f){A3s(this,b,c,d,e,f);},"qv",function(b,c){return AQ3(this,b,c);},"ij",function(){return A43(this);},"rE",function(b,c,d,e,f){AQJ(this,b,c,d,e,f);},"gq",function(b,c){return A4r(this,b,c);},"gl",function(b){return APM(this,
b);}],ALE,"BlockFarmland",15,V,[],4,3,0,["it",function(b,c,d){return AS5(this,b,c,d);},"fK",function(){return A63(this);},"iy",function(){return A7g(this);},"qv",function(b,c){return A6i(this,b,c);},"gj",function(b,c,d,e,f){A3_(this,b,c,d,e,f);},"F5",function(b,c,d,e){AUn(this,b,c,d,e);},"jp",function(b,c,d,e,f){A8D(this,b,c,d,e,f);},"gq",function(b,c){return ASt(this,b,c);}],AM4,"BlockFurnace",15,J2,[],4,3,0,["gD",function(b,c,d,e){A3P(this,b,c,d,e);},"jC",function(b,c,d,e,f){return AZv(this,b,c,d,e,f);},"oP",
function(b,c,d,e,f){A4b(this,b,c,d,e,f);},"cP",function(b){return AYn(this,b);},"r5",function(b,c,d,e,f){return ALM(this,b,c,d,e,f);},"DF",function(){return A64(this);}],Bg,0,C,[],0,3,B3,["lh",function(b,c,d,e,f,g){return A4W(this,b,c,d,e,f,g);},"yA",function(b){return A3a(this,b);},"t3",function(b,c,d){return A33(this,b,c,d);},"xk",function(b){A3m(this,b);},"xK",function(b){AX5(this,b);},"xd",function(){return AXO(this);},"x$",function(b){return AZp(this,b);}],AIb,0,Bg,[],4,3,0,["lh",function(b,c,d,e,f,g){
return A4o(this,b,c,d,e,f,g);}],GU,0,C,[Ci,DG,Dk],1,3,0,0,ANR,0,Og,[],0,0,0,0,XP,0,C,[],3,3,0,0,M9,0,FH,[Dk,JA,LX,XP],1,3,0,0,RP,"GZIPException",2,BA,[],0,3,0,0,Dd,0,C,[Ci],0,3,0,0,GG,0,GU,[],0,3,0,0,Pq,0,C,[],3,0,0,0,AGs,0,C,[Pq],4,3,0,["FW",function(b){AO9(this,b);},"mm",function(){AVO(this);},"zD",function(){return AQk(this);},"k6",function(b,c,d){A48(this,b,c,d);}],GD,0,Fd,[],12,0,0,0,Nb,0,B7,[],4,3,0,["iw",function(){return A5k(this);},"pR",function(){return A6X(this);},"ow",function(){return A4d(this);
}],L8,0,B7,[],4,3,0,["mc",function(){return A3Z(this);},"iw",function(){return AUx(this);}],Oh,0,B7,[],4,3,0,["iw",function(){return AXR(this);},"pR",function(){return AXU(this);},"ow",function(){return AQo(this);}],Ha,0,Bg,[],0,3,0,["yA",function(b){return AQE(this,b);},"xk",function(b){AUF(this,b);},"xK",function(b){AP3(this,b);},"xd",function(){return A0z(this);}],Zx,0,Ha,[],4,3,A9M,0,Z_,0,Ha,[],4,3,A$c,["x$",function(b){return AS0(this,b);}],Vb,0,Ha,[],4,3,A9A,0,AGz,0,Bg,[],4,3,0,["lh",function(b,c,d,e,
f,g){return A1B(this,b,c,d,e,f,g);}],Nx,0,Bg,[],0,3,0,["t3",function(b,c,d){return AG9(this,b,c,d);}],AGu,0,Bg,[],4,3,0,["t3",function(b,c,d){return A7T(this,b,c,d);}],AHz,0,Bg,[],4,3,0,["yA",function(b){return AWz(this,b);},"xk",function(b){AP2(this,b);},"xK",function(b){A5S(this,b);},"xd",function(){return ATo(this);}],ADx,0,Nx,[],4,3,0,["t3",function(b,c,d){return A3n(this,b,c,d);}],AMh,0,Bg,[],4,3,0,["lh",function(b,c,d,e,f,g){return AWh(this,b,c,d,e,f,g);}],W$,0,Bg,[],4,3,0,["lh",function(b,c,d,e,f,g){
return A5M(this,b,c,d,e,f,g);}],Gn,0,Bg,[],4,3,0,0,AHZ,0,Bg,[],4,3,0,["lh",function(b,c,d,e,f,g){return AZz(this,b,c,d,e,f,g);}],OG,0,C,[],4,3,0,0,I8,0,C,[Ci,DG],1,3,0,0,BD,"IndexOutOfBoundsException",10,BU,[],0,3,0,0]);
$rt_metadata([ALw,0,C,[],4,3,0,0,K5,"ArrayStoreException",10,BU,[],0,3,0,0,NO,0,C,[],4,3,0,0,AEf,0,I8,[],0,0,0,0,PN,0,C,[],1,3,0,0,EB,0,PN,[],1,3,0,0,AC7,0,EB,[],4,3,0,["hc",function(b){return A0j(this,b);},"k_",function(b){return AVT(this,b);},"kr",function(b){return ASe(this,b);}],PC,0,FB,[L2],1,3,0,0,AOx,0,PC,[Ci],0,3,0,["eX",function(){return A3o(this);}],UN,0,C,[E5],4,0,0,["iL",function(b,c){return AZk(this,b,c);}],Lw,0,Fx,[Dk],0,3,0,["l1",function(){return AO2(this);},"cJ",function(b){return AVG(this,
b);},"kR",function(b){return A5a(this,b);}],Mo,0,EB,[],0,3,0,["hc",function(b){return A4H(this,b);},"k_",function(b){return AZ0(this,b);},"kr",function(b){return ATr(this,b);}],AKg,0,C,[],4,3,0,0,TX,0,C,[],0,0,0,0,Si,0,C,[],3,3,0,0,T3,0,C,[Si],0,3,0,0,RN,0,C,[E5],0,0,0,["iL",function(b,c){return A8w(this,b,c);}],AFF,0,C,[],0,3,0,0,AJV,0,C,[],4,3,0,0,Wa,0,EB,[],4,0,0,["hc",function(b){return AJj(this,b);},"k_",function(b){return AAE(this,b);},"kr",function(b){return AKV(this,b);}],Qy,0,EB,[],4,0,0,["hc",function(b)
{return ALa(this,b);},"k_",function(b){return ARH(this,b);},"kr",function(b){return ADV(this,b);}],J$,0,EB,[],4,3,0,["hc",function(b){return A3K(this,b);},"k_",function(b){return A2_(this,b);},"kr",function(b){return AZ2(this,b);}],Qk,0,C,[],4,0,0,0,Vc,0,C,[],4,0,0,0,ABI,0,C,[],4,3,0,0,Yx,0,C,[],4,0,0,0,HO,0,C,[],3,3,0,0,MX,0,C,[HO,DG],0,0,0,["cJ",function(b){return A1t(this,b);}],LB,0,MX,[],0,0,0,0,Iq,"StringIndexOutOfBoundsException",10,BD,[],0,3,0,0,Z8,0,C,[],0,3,0,0,M5,0,C,[],4,3,0,0,SA,0,C,[],0,3,0,0,SM,
0,C,[],0,3,0,0,Ti,0,C,[],3,3,0,0,ANX,0,C,[Ti],4,3,0,0,OH,0,C,[],4,3,0,0,Kx,0,C,[],4,3,0,0,GC,0,C,[],0,3,0,0,Jd,0,GC,[],4,3,0,0,Ds,0,Cq,[],0,3,0,0,H7,0,C,[],4,3,AKx,0,CV,0,GC,[],0,3,0,["pE",function(b,c){AM2(this,b,c);},"IN",function(b,c,d){AFm(this,b,c,d);},"iX",function(b){AFV(this,b);},"hU",function(){AWV(this);},"v0",function(){AJY(this);},"pV",function(){A3H(this);},"rq",function(){return A0f(this);}],ACw,0,CV,[],4,3,0,["pE",function(b,c){AKh(this,b,c);},"hU",function(){A7I(this);},"iX",function(b){AJl(this,
b);},"iM",function(b,c,d){AMP(this,b,c,d);}],F4,"EOFException",8,BA,[],0,3,0,0,Ho,0,C,[],3,3,0,0,Y5,0,C,[Ho],0,3,0,["hM",function(){AIr(this);}],E3,0,C,[],4,3,0,0,Gd,0,C,[],4,3,0,0,MU,0,C,[],4,0,0,0]);
$rt_metadata([DF,"IllegalStateException",10,Cq,[],0,3,0,0,Jl,"NoSuchElementException",4,BU,[],0,3,0,0,Fn,0,C,[],3,3,0,0,VX,0,C,[Fn],0,0,0,["jt",function(){return JO(this);},"ho",function(){return Il(this);}],W5,0,C,[],4,3,0,0,Qx,0,C,[],0,3,0,0,NA,0,C,[],0,3,BE,0,Oe,0,FH,[Dk],1,3,0,0,Vf,0,C,[],4,3,0,0,CK,0,IZ,[],4,3,0,0,DE,"Entity",16,C,[],1,3,0,["xL",function(){CN(this);},"AU",function(b){A3l(this,b);},"EH",function(b){AZx(this,b);},"sb",function(){return A5J(this);},"vI",function(b){return EC(this,b);},"xA",
function(b){AP4(this,b);},"eY",function(b,c){return APa(this,b,c);},"qh",function(){return A2p(this);},"C5",function(){return A8C(this);},"wb",function(){return A7_(this);},"Dm",function(){return AWl(this);}],F8,0,DE,[],0,3,0,["qh",function(){return A8E(this);},"C5",function(){return A1k(this);},"sb",function(){return ACn(this);},"eQ",function(){AD9(this);},"eY",function(b,c){return NR(this,b,c);},"A5",function(b){A5O(this,b);},"nx",function(){return AWX(this);},"EH",function(b){A7P(this,b);},"Dm",function()
{return AVZ(this);},"mU",function(){W7(this);}],Hk,"EntityPlayer",19,F8,[],0,3,0,["A5",function(b){A4t(this,b);},"xL",function(){ARD(this);},"sb",function(){return AVN(this);},"eY",function(b,c){return AU3(this,b,c);}],Mm,0,Hk,[],0,3,0,["sG",function(){A1u(this);},"mU",function(){AWI(this);},"f0",function(b){AOa(this,b);},"gc",function(){return A11(this);}],G0,0,C,[],3,3,0,0,Tk,0,C,[G0],4,3,0,["kM",function(b,c){return Fs(this,b,c);},"jH",function(b,c){AFg(this,b,c);},"gY",function(b){return R4(this,b);},"f2",
function(){return APk(this);}],C9,0,C,[],4,3,0,0,AF8,0,C,[],4,3,0,0,Eu,0,CV,[],1,3,0,["iM",function(b,c,d){AAL(this,b,c,d);},"IN",function(b,c,d){AKe(this,b,c,d);},"pE",function(b,c){AIm(this,b,c);},"pV",function(){Y6(this);},"rq",function(){return A2r(this);}],AJX,0,Eu,[],4,3,0,["pV",function(){A3f(this);},"rm",function(){AO$(this);},"lT",function(){A6P(this);},"iM",function(b,c,d){AA$(this,b,c,d);},"tB",function(){AAs(this);}],ACf,0,C,[],4,3,0,0,Us,0,C,[],3,3,0,0,UB,0,C,[],3,3,0,0,QS,0,C,[Ho,Us,UB],0,0,0,
["hM",function(){AMs(this);}],Rw,0,Ev,[],0,0,0,["qT",function(b){A2O(this,b);}],AHF,0,C,[],4,3,0,0,Uq,0,C,[],0,0,0,0,C2,0,C,[],1,0,0,0,AAe,"NegativeArraySizeException",10,BU,[],0,3,0,0,Km,0,C,[],0,3,0,0,Mh,0,C,[Ci],1,3,0,0,Jm,0,Mh,[Ci],0,3,0,0,SI,0,C,[],0,0,0,0,LD,0,C,[],0,3,0,0,R_,0,C,[],4,3,0,0,IN,0,C,[],4,3,0,["cJ",function(b){return A2q(this,b);}],D_,0,C,[],1,3,0,0,AB4,0,D_,[],4,3,0,["kX",function(b,c,d,e,f,g){ALJ(this,b,c,d,e,f,g);}],FP,0,C,[],0,3,0,0,PI,0,C,[Dl],3,3,0,0,Yi,0,C,[PI],0,0,0,["Hi",function()
{return AXD(this);}],OL,0,C,[],0,3,0,0,AJb,0,C,[G0],4,3,0,["gY",function(b){return IW(this,b);},"kM",function(b,c){return AC8(this,b,c);},"jH",function(b,c){AY8(this,b,c);},"f2",function(){return AWc(this);}],Vt,0,C,[G0],4,3,0,["gY",function(b){return A6J(this,b);},"kM",function(b,c){return A3I(this,b,c);},"jH",function(b,c){So(this,b,c);},"f2",function(){return AW8(this);}],IV,0,C,[],0,3,0,["y7",function(){A1U(this);},"q7",function(b){return AZN(this,b);},"sC",function(){return A2s(this);}],AHu,0,IV,[],4,0,
0,["q7",function(b){return A5x(this,b);},"y7",function(){A4A(this);}],Wu,0,IV,[],4,0,0,["q7",function(b){return AQR(this,b);},"sC",function(){return AYt(this);}],Mz,0,M9,[],1,0,0,0,ADr,0,Mz,[],0,0,0,0,M2,0,C,[],1,3,0,0]);
$rt_metadata([Pw,0,C,[],0,3,0,0,AEY,0,C,[],0,3,0,0,MG,0,C,[],3,3,0,0,IA,0,C,[Ci,MG],1,3,0,0,YN,0,C,[MG],3,3,0,0,Pn,0,C,[YN],3,3,0,0,Tr,0,C,[],3,3,0,0,M_,0,C,[Tr],3,3,0,0,Ye,0,IA,[Ci,Pn,M_],0,3,0,0,YP,0,C,[Pn],3,3,0,0,Tq,0,C,[M_],3,3,0,0,Id,0,IA,[Ci,YP,Tq],0,3,0,0,Yh,0,C,[DY],0,0,0,["gJ",function(b){return A2W(this,b);}],Yg,0,C,[DY],0,0,0,["gJ",function(b){return A6b(this,b);}],Ro,0,C,[],0,0,0,0,Lq,"IllegalMonitorStateException",10,BU,[],0,3,0,0,XU,0,C,[],4,3,0,0,Zw,0,C,[],4,3,0,0,WS,0,C,[],4,3,0,0,AH$,0,C,[Dl],
1,3,0,0,U6,0,C,[Ho],0,3,0,["hM",function(){ANI(this);}],JC,0,Oe,[],1,0,0,0,Xi,0,JC,[],0,0,0,["zx",function(b){return Yr(this,b);},"vv",function(b,c){XR(this,b,c);},"lJ",function(){return AO3(this);}],Td,0,C,[Ho],0,3,0,0,X5,0,C,[],4,3,0,0,Sp,0,C,[],4,3,0,0,V2,0,C,[],4,3,0,0,PJ,0,Fx,[Dk],0,3,0,0,Op,0,Fx,[Dk],0,3,0,0,AEF,0,C,[],4,3,0,0,Y_,0,OL,[],4,3,0,0,Uw,0,CV,[],4,3,0,0,Tz,0,CV,[],4,3,0,["hU",function(){AV6(this);},"pE",function(b,c){AHQ(this,b,c);},"iX",function(b){AMf(this,b);},"iM",function(b,c,d){AI6(this,
b,c,d);},"rq",function(){return AS2(this);}],No,0,C,[],0,0,0,0,Rs,0,FB,[],0,0,0,0,ACb,0,C,[Dl],1,3,0,0,LE,0,C,[],4,0,0,0,AA0,0,C,[],4,3,0,0,Do,"EntityFX",21,DE,[],0,3,0,["eQ",function(){A6M(this);},"jj",function(b,c,d,e,f,g,h){Ip(this,b,c,d,e,f,g,h);},"yi",function(){return ASL(this);},"f0",function(b){A7o(this,b);},"gc",function(){return AQz(this);}],AOO,0,Do,[],4,3,0,["yi",function(){return AU8(this);},"jj",function(b,c,d,e,f,g,h){AAA(this,b,c,d,e,f,g,h);}],YG,0,CV,[],4,3,0,["hU",function(){AZB(this);},"iX",
function(b){ABy(this,b);},"iM",function(b,c,d){AJs(this,b,c,d);}],Gs,0,C2,[],0,3,0,["cJ",function(b){return AHm(this,b);}],AC$,0,C2,[],0,3,0,["cJ",function(b){return A1h(this,b);}],Sz,0,C2,[],0,3,0,["cJ",function(b){return A1c(this,b);}],I_,0,C2,[],1,3,0,["cJ",function(b){return A2d(this,b);}],Sw,0,I_,[],0,3,0,0,Qg,0,C2,[],0,3,0,["cJ",function(b){return A38(this,b);}],ALm,0,Gs,[],0,3,0,["cJ",function(b){return A7G(this,b);}],RY,0,Gs,[],0,3,0,0,R3,0,I_,[],0,3,0,0]);
$rt_metadata([AC9,0,C2,[],0,3,0,["cJ",function(b){return A12(this,b);}],Yd,0,C2,[],0,3,0,["cJ",function(b){return AQ6(this,b);}],TH,0,C2,[],0,3,0,["cJ",function(b){return A3J(this,b);}],ADu,0,C2,[],0,3,0,["cJ",function(b){return A0s(this,b);}],ABe,0,Gs,[],0,3,0,0,OQ,0,M2,[],1,3,0,0,RB,0,OQ,[],0,3,0,0,VR,0,C,[],4,3,0,0,TP,0,C,[I1],0,0,0,["hM",function(){AIP(this);}],AD3,0,C,[G0],4,3,0,["gT",function(){return A4$(this);},"xF",function(){return AWL(this);},"gY",function(b){return ASp(this,b);},"kM",function(b,
c){return AVD(this,b,c);},"jH",function(b,c){AXZ(this,b,c);},"f2",function(){return APt(this);}],T5,0,C,[PI],0,0,0,["Hi",function(){return AYc(this);}],JW,"ConcurrentModificationException",4,BU,[],0,3,0,0,SK,0,C,[],0,3,0,0,Pv,0,C,[],0,3,0,0,PG,0,Pv,[],4,3,0,0,W0,0,C,[],3,3,0,0,ANT,0,C,[W0],4,3,0,0,Tm,0,C,[],4,3,0,0,F3,0,C,[],4,0,0,0,MJ,0,C,[],4,0,0,0,AHa,0,C,[],0,3,0,0,JN,0,C,[],0,3,0,["zJ",function(){A3U(this);}],PO,0,C,[],4,3,0,0,Va,0,C,[Ho],0,3,0,["hM",function(){AH_(this);}],Ir,"UTFDataFormatException",
8,BA,[],0,3,0,0,ACX,0,C,[Mp],1,3,0,["RP",function(b){return A8o(this,b);},"Zm",function(){return AQP(this);}],Vw,0,C,[ER],0,0,0,["jF",function(){return A8m(this);}],WM,0,C,[ER],0,0,0,["jF",function(){return A4F(this);}],Fl,0,Fd,[],12,3,0,0,Vy,0,C,[ER],0,0,0,["jF",function(){return A3A(this);}],Vx,0,C,[ER],0,0,0,["jF",function(){return A1f(this);}],G1,0,BU,[],0,3,0,0,GI,0,BA,[],0,3,0,0,AN8,"AssertionError",10,EF,[],0,3,0,0,P4,0,C,[],4,3,0,0,Go,0,DE,[],0,3,0,["eQ",function(){A1D(this);},"AU",function(b){A1n(this,
b);},"eY",function(b,c){return AB6(this,b,c);},"f0",function(b){AXX(this,b);},"ip",function(b){A6u(this,b);},"gc",function(){return A3Y(this);},"xA",function(b){AXq(this,b);}],QX,0,Eu,[],4,3,0,["lT",function(){AXS(this);},"tB",function(){AAp(this);}],Un,0,Eu,[],4,3,0,["pV",function(){A10(this);},"rm",function(){APc(this);},"lT",function(){AU0(this);},"tB",function(){AKj(this);}],AGc,0,Eu,[],4,3,0,["lT",function(){A1E(this);},"tB",function(){ADU(this);}],G6,0,C,[],0,0,0,["jt",function(){return Lb(this);}],Xy,
0,G6,[Fn],0,0,0,0,JT,0,JC,[],1,0,0,["lJ",function(){return AT4(this);}],QO,0,JT,[],0,0,0,["zx",function(b){return ASq(this,b);},"vv",function(b,c){AO1(this,b,c);}],Yb,0,JT,[],0,0,0,["zx",function(b){return AXc(this,b);},"vv",function(b,c){APZ(this,b,c);}],Tl,0,C,[],4,0,0,0,AAb,0,C,[],4,3,0,0,Rr,0,Dn,[],0,0,0,["gz",function(){return AUg(this);}],WT,0,C,[Fn],3,3,0,0,AEh,0,C,[WT],0,0,0,0,TT,0,C,[],0,0,0,0]);
$rt_metadata([Vo,0,C,[E5],4,3,0,["iL",function(b,c){return ARZ(this,b,c);}],Im,0,C,[],0,3,0,0,R5,0,C,[E5],4,3,0,["iL",function(b,c){return AWS(this,b,c);}],Hs,"UnsupportedOperationException",10,BU,[],0,3,0,0,EO,"ReadOnlyBufferException",6,Hs,[],0,3,0,0,GW,"BufferOverflowException",6,BU,[],0,3,0,0,Gg,"BufferUnderflowException",6,BU,[],0,3,0,0,Nr,0,C,[],0,3,0,0,PB,0,C,[],1,3,0,0,AMI,0,C,[],4,0,0,0,DV,0,D_,[],0,3,0,["I6",function(b,c,d,e,f,g){AGR(this,b,c,d,e,f,g);},"mC",function(b,c){return ABz(this,b,c);},"Ag",
function(b){return AUw(this,b);},"wR",function(b,c,d){return ASH(this,b,c,d);},"v5",function(b,c){A19(this,b,c);},"kX",function(b,c,d,e,f,g){AHW(this,b,c,d,e,f,g);}],OX,0,DV,[],4,3,0,["mC",function(b,c){return AE9(this,b,c);},"I6",function(b,c,d,e,f,g){AL6(this,b,c,d,e,f,g);},"kX",function(b,c,d,e,f,g){ADm(this,b,c,d,e,f,g);}],Po,0,GC,[],0,3,0,0,Zf,0,C,[E5],0,3,0,["iL",function(b,c){return A1g(this,b,c);}],Zd,0,C,[E5],0,3,0,0,JR,0,F8,[],0,3,0,["sG",function(){AHq(this);},"po",function(b,c){AQp(this,b,c);},"vc",
function(){return AVz(this);}],DP,"EntityMob",18,JR,[],0,3,0,["mU",function(){Yv(this);},"eQ",function(){AVV(this);},"vc",function(){return ASW(this);},"eY",function(b,c){return A1l(this,b,c);},"po",function(b,c){AMb(this,b,c);},"s9",function(b,c,d){return A0P(this,b,c,d);},"f0",function(b){AUI(this,b);},"ip",function(b){AXi(this,b);}],TO,0,DP,[],0,3,0,["vc",function(){return A6I(this);},"po",function(b,c){AP1(this,b,c);},"f0",function(b){A7b(this,b);},"ip",function(b){A20(this,b);},"gc",function(){return AWP(this);
},"nx",function(){return AUL(this);}],Zt,0,DV,[],4,3,0,["Ag",function(b){return A4R(this,b);},"mC",function(b,c){return ACa(this,b,c);}],He,"EntityAnimal",17,JR,[],1,3,0,["s9",function(b,c,d){return AQ1(this,b,c,d);}],Z7,0,He,[],0,3,0,["f0",function(b){AUP(this,b);},"ip",function(b){A4x(this,b);},"gc",function(){return A1M(this);},"nx",function(){return ARj(this);}],GB,0,Fw,[],0,3,0,["gQ",function(b,c,d,e,f,g){AUS(this,b,c,d,e,f,g);}],Qw,0,GB,[],4,3,0,0,P$,0,He,[],0,3,0,["eY",function(b,c){return A4v(this,b,
c);},"f0",function(b){AZG(this,b);},"ip",function(b){A2H(this,b);},"gc",function(){return ATS(this);}],YK,0,DV,[],4,3,0,["mC",function(b,c){return AKQ(this,b,c);}],WX,0,GB,[],4,3,0,0,AAN,0,GB,[],4,3,0,0,Wm,0,DP,[],0,3,0,["f0",function(b){A77(this,b);},"ip",function(b){AZ6(this,b);},"gc",function(){return AWT(this);},"sG",function(){A6f(this);},"po",function(b,c){A4n(this,b,c);},"nx",function(){return A5_(this);}],ZW,0,DV,[],4,3,0,["v5",function(b,c){A2L(this,b,c);},"wR",function(b,c,d){return AWj(this,b,c,d);
}],Yf,0,DP,[],0,3,0,["mU",function(){A1I(this);},"po",function(b,c){A2a(this,b,c);},"f0",function(b){AQ5(this,b);},"ip",function(b){ATg(this,b);},"gc",function(){return ATH(this);},"nx",function(){return ATZ(this);}],Jv,0,JV,[],0,3,0,["oV",function(b,c,d,e,f,g){ATy(this,b,c,d,e,f,g);}],UT,0,Jv,[],4,3,0,0,SP,0,DP,[],0,3,0,["mU",function(){A5i(this);},"gc",function(){return AX1(this);},"nx",function(){return AQa(this);}],PT,0,DP,[],0,3,0,["s9",function(b,c,d){return A6W(this,b,c,d);},"gc",function(){return A8x(this);
}],YW,0,DV,[],4,3,0,["v5",function(b,c){APG(this,b,c);}],SC,0,D_,[],4,3,0,["kX",function(b,c,d,e,f,g){AIy(this,b,c,d,e,f,g);}],PS,0,DE,[],0,3,0,["eQ",function(){ARI(this);},"qh",function(){return A2C(this);},"eY",function(b,c){return A3y(this,b,c);},"f0",function(b){A78(this,b);},"gc",function(){return A1J(this);},"ip",function(b){AWE(this,b);}],SS,0,D_,[],4,3,0,["kX",function(b,c,d,e,f,g){AMc(this,b,c,d,e,f,g);}],M1,0,DE,[],0,3,0,["eQ",function(){AZP(this);},"f0",function(b){A4m(this,b);},"gc",function(){return A5K(this);
},"xA",function(b){A7O(this,b);},"wb",function(){return AT6(this);}],Ve,0,D_,[],4,3,0,["kX",function(b,c,d,e,f,g){ALl(this,b,c,d,e,f,g);}],Wx,0,DE,[],0,3,0,["qh",function(){return A3B(this);},"eQ",function(){APr(this);},"f0",function(b){A0C(this,b);},"gc",function(){return ATU(this);},"wb",function(){return ASU(this);}],Ur,0,D_,[],4,3,0,["kX",function(b,c,d,e,f,g){AJ6(this,b,c,d,e,f,g);}],Uh,0,Dn,[],4,0,0,0,Uf,0,Fh,[],4,0,0,0,Ui,0,Fv,[],4,0,0,0,ACl,0,Fw,[],4,3,0,["gQ",function(b,c,d,e,f,g){AS9(this,b,c,d,e,
f,g);}],AAz,0,Fw,[],4,3,0,["gQ",function(b,c,d,e,f,g){A4P(this,b,c,d,e,f,g);}],X3,0,G6,[Fn],0,0,0,["ho",function(){return AQY(this);}],MM,0,PB,[],1,3,0,0,Tt,0,MM,[],0,3,0,0]);
$rt_metadata([Nm,0,C,[],0,3,0,0,D$,"Inflate$Return",2,Cq,[],0,0,0,0,AKP,0,C,[DG],0,3,0,0,Qn,0,C,[Pq],4,3,0,["k6",function(b,c,d){AYU(this,b,c,d);},"mm",function(){A26(this);},"FW",function(b){A6C(this,b);},"zD",function(){return A4j(this);}],AJv,0,JN,[G0],4,3,0,["gY",function(b){return AVc(this,b);},"kM",function(b,c){return AYf(this,b,c);},"jH",function(b,c){AUe(this,b,c);},"td",function(b){A27(this,b);},"vA",function(b){ARO(this,b);},"f2",function(){return A4a(this);},"zJ",function(){AO_(this);}],N9,0,EF,
[],0,3,0,0,YD,"OutOfMemoryError",10,N9,[],0,3,0,0,AL4,"CoderMalfunctionError",7,EF,[],0,3,0,0,ZK,0,C,[],0,3,0,0,AGN,0,JN,[G0],4,3,0,["gT",function(){return A6Z(this);},"gY",function(b){return AEU(this,b);},"kM",function(b,c){return A2f(this,b,c);},"jH",function(b,c){A00(this,b,c);},"xF",function(){return AOU(this);},"td",function(b){AVU(this,b);},"vA",function(b){A45(this,b);},"f2",function(){return A2D(this);}],ACL,0,CV,[],4,3,0,["hU",function(){AW4(this);},"iX",function(b){AI9(this,b);},"iM",function(b,c,
d){AOg(this,b,c,d);}],ACq,0,CV,[],4,3,0,["hU",function(){AVo(this);},"iX",function(b){ALB(this,b);},"iM",function(b,c,d){AB9(this,b,c,d);}],Np,0,CV,[I1],0,3,0,["v0",function(){AF7(this);},"hM",function(){AG4(this);},"Ga",function(b){A0o(this,b);},"hU",function(){AMZ(this);},"iX",function(b){ABT(this,b);},"Jc",function(b){AMA(this,b);},"iM",function(b,c,d){ANu(this,b,c,d);},"Fk",function(b){ATa(this,b);}],Lg,0,Np,[],4,3,0,["hU",function(){AUu(this);},"Ga",function(b){A4X(this,b);},"Fk",function(b){AXh(this,b);
},"Jc",function(b){ALI(this,b);}],CM,"EnumArt",16,Fd,[],12,3,0,0,VZ,0,C,[],0,3,0,0,RO,"BufferUnderflowException",7,BU,[],0,3,0,0,UX,"BufferOverflowException",7,BU,[],0,3,0,0,T9,"MalformedInputException",7,GI,[],0,3,0,["kS",function(){return AR8(this);}],RK,"UnmappableCharacterException",7,GI,[],0,3,0,["kS",function(){return ARA(this);}],QE,0,Do,[],4,3,0,["eQ",function(){AVn(this);}],AAO,0,Do,[],4,3,0,["jj",function(b,c,d,e,f,g,h){AHk(this,b,c,d,e,f,g,h);},"eQ",function(){A3W(this);}],QZ,0,Do,[],4,3,0,["jj",
function(b,c,d,e,f,g,h){AOK(this,b,c,d,e,f,g,h);},"eQ",function(){AWw(this);}],SF,0,Do,[],4,3,0,["jj",function(b,c,d,e,f,g,h){AAK(this,b,c,d,e,f,g,h);},"vI",function(b){return A1H(this,b);},"eQ",function(){AQ2(this);}],AEl,0,Do,[],4,3,0,["vI",function(b){return ATq(this,b);},"jj",function(b,c,d,e,f,g,h){AN5(this,b,c,d,e,f,g,h);},"eQ",function(){AUl(this);}],Mc,"EntityRainFX",21,Do,[],0,3,0,["jj",function(b,c,d,e,f,g,h){AIl(this,b,c,d,e,f,g,h);},"eQ",function(){A4i(this);}],QT,0,Mc,[],4,3,0,0,Wy,0,C,[],4,3,AWR,
0,ZN,0,CV,[],4,3,0,["hU",function(){AYK(this);},"iX",function(b){AAl(this,b);},"pE",function(b,c){AE7(this,b,c);},"iM",function(b,c,d){AHR(this,b,c,d);}],AOe,0,Po,[],4,3,0,0,HT,0,C,[Ci,Dk],0,3,0,0,WI,0,C,[Kj],3,3,0,0,Up,0,C,[WI],3,3,0,0,Vm,0,Dn,[Up],0,3,0,["gz",function(){return A0c(this);}],ANv,0,C,[],4,3,0,0,U3,0,C,[KQ],3,3,0,0,Qm,0,C,[U3],3,3,0,0,WE,0,Fh,[DG,Ci,Qm],0,3,0,0,AHN,0,C,[],4,3,0,0,AGK,0,C,[],4,3,0,0,ANi,0,C,[],4,3,0,0,T6,0,C,[],4,3,0,0,Ua,0,C,[],4,3,0,0,ACm,0,C,[],4,3,0,0,AOS,0,C,[E5],4,0,0,["iL",
function(b,c){return A5F(this,b,c);}],UE,0,C,[],4,3,0,0,SJ,0,C,[E5],0,0,0,0,YJ,0,C,[],3,3,0,0,RM,0,C,[YJ],0,3,0,0,JS,0,C,[],1,3,0,0]);
$rt_metadata([XD,0,JS,[],0,3,0,["yW",function(){return AVX(this);},"FA",function(b){return A53(this,b);},"uq",function(b,c,d){return A1_(this,b,c,d);},"zV",function(b){return ARY(this,b);}],Yn,0,MV,[KQ],0,3,0,["xf",function(b){return AQr(this,b);}],Pc,0,C,[Ci],4,3,0,0,IM,0,C,[IY],1,3,0,0,Tj,0,IM,[],0,3,0,0,QM,0,IM,[],0,3,0,0,PA,0,LB,[],4,0,0,0,AH2,0,C,[],4,3,0,0,R8,0,C,[],4,3,0,0,AOu,"MinecraftError",20,EF,[],4,3,0,0,WH,0,CV,[],4,3,0,["hU",function(){AQm(this);},"pV",function(){AQg(this);},"v0",function(){ABN(this);
},"iX",function(b){AFC(this,b);},"pE",function(b,c){ANj(this,b,c);},"iM",function(b,c,d){AFd(this,b,c,d);}],U4,0,GA,[],0,3,0,0,V4,0,Ev,[],0,3,0,0,Qb,0,C,[],4,3,0,0,Iv,0,C,[],1,3,0,0,HR,"FileNotFoundException",8,BA,[],0,3,0,0,AAd,0,C,[],4,3,0,0,Ic,0,C,[],0,0,0,0,Os,0,C,[],4,3,0,0,Ue,0,C,[],0,3,0,0,GF,"MalformedURLException",9,BA,[],0,3,0,0,Jw,0,C,[],1,3,0,0,YE,0,C,[],0,3,0,0,Gw,0,C,[],1,3,0,0,ADK,0,Gw,[],4,3,0,0,ADw,0,Gw,[],4,3,0,0,Z1,0,Dn,[],0,0,0,["gz",function(){return ARX(this);}],QF,0,Jw,[],0,3,0,["Cj",
function(b){return A70(this,b);}],ADI,0,Jw,[],0,3,0,["Cj",function(b){return A1x(this,b);}],NQ,0,Gw,[],4,3,0,0,NP,0,C,[HO,Ci],0,3,0,["cJ",function(b){return A1Y(this,b);}],IG,0,NP,[],0,0,0,0,TC,0,C,[Fn],0,0,0,["jt",function(){return AV_(this);},"ho",function(){return A3t(this);}],K7,0,Iv,[],1,3,0,0,QY,0,K7,[],0,3,0,0,YV,0,C,[],0,3,0,0,Xw,0,C,[Ci],4,3,0,0,VV,0,Do,[],4,3,0,["jj",function(b,c,d,e,f,g,h){AKS(this,b,c,d,e,f,g,h);},"eQ",function(){ARV(this);},"yi",function(){return A0g(this);}],ZF,0,C,[],3,3,0,0,Xs,
0,C,[ZF],0,3,0,0,ET,"NumberFormatException",10,BB,[],0,3,0,0,B_,0,C,[],1,0,0,["eA",function(b,c,d){return Kk(this,b,c,d);},"eR",function(b,c,d,e){return Kt(this,b,c,d,e);},"pi",function(){return A0R(this);},"ci",function(b){AXG(this,b);},"dR",function(b){return A7k(this,b);},"lX",function(){return A72(this);},"i_",function(){L4(this);}],D6,0,B_,[],0,0,0,["e",function(b,c,d){return AP0(this,b,c,d);},"b9",function(b){return AQn(this,b);}],I0,0,C,[],0,0,0,0,ANO,"PatternSyntaxException",5,BB,[],0,3,0,["kS",function()
{return A7X(this);}],Sn,0,D6,[],0,0,0,["e",function(b,c,d){return AZM(this,b,c,d);},"b9",function(b){return A6p(this,b);}],Z5,0,D6,[],0,0,0,["e",function(b,c,d){return A08(this,b,c,d);}],RH,0,D6,[],0,0,0,["e",function(b,c,d){return AQt(this,b,c,d);}],S7,0,D6,[],0,0,0,["e",function(b,c,d){return AZS(this,b,c,d);},"b9",function(b){return A5A(this,b);}],HA,0,D6,[],0,0,0,["e",function(b,c,d){return AXW(this,b,c,d);}]]);
$rt_metadata([CA,0,B_,[],1,0,0,["e",function(b,c,d){return A8n(this,b,c,d);},"dZ",function(){return A6V(this);},"b9",function(b){return ATs(this,b);}],AGb,0,CA,[],0,0,0,["dg",function(b,c){return A6v(this,b,c);},"eA",function(b,c,d){return A2h(this,b,c,d);},"eR",function(b,c,d,e){return A02(this,b,c,d,e);},"b9",function(b){return AZQ(this,b);}],Cu,0,B_,[],0,0,0,["e",function(b,c,d){return ASJ(this,b,c,d);},"ci",function(b){AVH(this,b);},"dR",function(b){return A3V(this,b);},"b9",function(b){return AV9(this,
b);},"i_",function(){AQV(this);}],L0,0,Cu,[],0,0,0,["e",function(b,c,d){return AVx(this,b,c,d);},"b9",function(b){return A6a(this,b);}],Fc,0,L0,[],0,0,0,["e",function(b,c,d){return A1z(this,b,c,d);},"ci",function(b){A5X(this,b);}],VB,0,Fc,[],0,0,0,["e",function(b,c,d){return AVE(this,b,c,d);},"b9",function(b){return AXK(this,b);}],Zo,0,Fc,[],0,0,0,["e",function(b,c,d){return AQe(this,b,c,d);},"b9",function(b){return A60(this,b);}],Xz,0,Fc,[],0,0,0,["e",function(b,c,d){return AQU(this,b,c,d);},"b9",function(b)
{return A8B(this,b);}],Tu,0,Fc,[],0,0,0,["e",function(b,c,d){return AZr(this,b,c,d);},"b9",function(b){return A6j(this,b);}],JG,0,Cu,[],0,0,0,["e",function(b,c,d){return APl(this,b,c,d);},"eA",function(b,c,d){return AUq(this,b,c,d);},"eR",function(b,c,d,e){return A6q(this,b,c,d,e);},"dR",function(b){return A3Q(this,b);},"lX",function(){return A5z(this);},"i_",function(){AYo(this);}],I6,0,C,[],1,0,0,0,Bk,0,I6,[],1,0,0,["hu",function(){return A0B(this);},"kF",function(){return AZ1(this);},"tf",function(){return A6O(this);
},"ot",function(){return A7Y(this);}],ABR,"CharClass",5,Bk,[],0,0,0,["T",function(b){return Ed(this,b);},"hu",function(){return D8(this);},"kF",function(){return A2b(this);},"tf",function(){return AXv(this);},"eN",function(){return A4T(this);},"ot",function(){return ASc(this);}],NY,"MissingResourceException",4,BU,[],0,3,0,0,Fm,0,B_,[],1,0,0,["dR",function(b){return AWF(this,b);},"b9",function(b){return A7v(this,b);},"i_",function(){AUH(this);}],Ef,0,Fm,[],0,0,0,["e",function(b,c,d){return AZs(this,b,c,d);}],Hi,
0,Ef,[],0,0,0,["e",function(b,c,d){return A0k(this,b,c,d);}],D7,0,Fm,[],0,0,0,["e",function(b,c,d){return AZH(this,b,c,d);}],Gk,0,Ef,[],0,0,0,["e",function(b,c,d){return A39(this,b,c,d);},"ci",function(b){AY4(this,b);}],UD,0,Ef,[],0,0,0,["e",function(b,c,d){return A8i(this,b,c,d);},"eA",function(b,c,d){return AU6(this,b,c,d);}],VL,"Quantifier",5,I6,[DG],0,0,0,["eN",function(){return A4Z(this);}],V$,0,B_,[],0,0,0,["e",function(b,c,d){return ATN(this,b,c,d);},"b9",function(b){return A5v(this,b);}],ZL,0,C,[DG,
Ci],0,3,0,0,Qa,0,Cu,[],0,0,0,0,RV,0,Cu,[],0,0,0,["e",function(b,c,d){return APX(this,b,c,d);},"ci",function(b){A5n(this,b);},"b9",function(b){return AQy(this,b);},"dR",function(b){return AQi(this,b);}],Fa,0,Cu,[],0,0,0,["e",function(b,c,d){return A16(this,b,c,d);},"T",function(b){return ASn(this,b);},"dR",function(b){return APV(this,b);},"ci",function(b){A6K(this,b);},"b9",function(b){return AR9(this,b);}],NV,0,Fa,[],0,0,0,["T",function(b){return ATu(this,b);}],ABJ,0,CA,[],0,0,0,["dg",function(b,c){return A3C(this,
b,c);}],FQ,0,CA,[],0,0,0,["dg",function(b,c){return Vr(this,b,c);},"dR",function(b){return AVI(this,b);}],Wv,0,Cu,[],0,0,0,["ci",function(b){AUt(this,b);},"e",function(b,c,d){return AO6(this,b,c,d);},"dR",function(b){return A0K(this,b);},"b9",function(b){return AXz(this,b);}],FX,0,CA,[],0,0,0,["dZ",function(){return A3q(this);},"dg",function(b,c){return ASS(this,b,c);},"eA",function(b,c,d){return ARU(this,b,c,d);},"eR",function(b,c,d,e){return ATJ(this,b,c,d,e);},"dR",function(b){return AXu(this,b);}],AGM,0,
CA,[],0,0,0,["dg",function(b,c){return AZa(this,b,c);}],AAv,0,CA,[],0,0,0,["dg",function(b,c){return APi(this,b,c);}],Hp,0,Cu,[],0,0,0,["ci",function(b){A75(this,b);},"e",function(b,c,d){return AVw(this,b,c,d);},"dR",function(b){return ATO(this,b);},"b9",function(b){return A5Z(this,b);}],U0,0,Hp,[],0,0,0,0,Yz,0,Hp,[],0,0,0,0,Vp,0,D7,[],0,0,0,["e",function(b,c,d){return A1b(this,b,c,d);}],W1,0,D7,[],0,0,0,["e",function(b,c,d){return A4C(this,b,c,d);}],Is,0,D7,[],0,0,0,["e",function(b,c,d){return A6F(this,b,c,
d);},"ci",function(b){A7C(this,b);}],Rv,0,Is,[],0,0,0,["e",function(b,c,d){return ATF(this,b,c,d);},"ci",function(b){A42(this,b);}],HV,0,D7,[],0,0,0,["e",function(b,c,d){return A8y(this,b,c,d);}],Qo,0,HV,[],0,0,0,["e",function(b,c,d){return AS_(this,b,c,d);}],Sh,0,D7,[],0,0,0,["e",function(b,c,d){return AYx(this,b,c,d);}],Xh,0,Is,[],0,0,0,["e",function(b,c,d){return AQB(this,b,c,d);}],T2,0,HV,[],0,0,0,["e",function(b,c,d){return AZW(this,b,c,d);}],Sj,0,Fm,[],0,0,0,["e",function(b,c,d){return A8p(this,b,c,d);
},"eA",function(b,c,d){return AW_(this,b,c,d);}],Wf,0,Fm,[],0,0,0,["e",function(b,c,d){return AVJ(this,b,c,d);},"eA",function(b,c,d){return AO7(this,b,c,d);}],GZ,0,C,[],1,0,0,0,AAg,0,Ef,[],0,0,0,["e",function(b,c,d){return APJ(this,b,c,d);}],Uy,0,Gk,[],0,0,0,["e",function(b,c,d){return AUR(this,b,c,d);}]]);
$rt_metadata([WC,0,Hi,[],0,0,0,["e",function(b,c,d){return A6r(this,b,c,d);}],Xd,0,Ef,[],0,0,0,["e",function(b,c,d){return AVF(this,b,c,d);}],YB,0,Gk,[],0,0,0,["e",function(b,c,d){return APS(this,b,c,d);}],R7,0,Hi,[],0,0,0,["e",function(b,c,d){return A6x(this,b,c,d);}],ADp,0,B_,[],4,0,0,["e",function(b,c,d){return A3S(this,b,c,d);},"b9",function(b){return A3h(this,b);}],ACr,0,B_,[],0,0,0,["e",function(b,c,d){return A0y(this,b,c,d);},"b9",function(b){return A0J(this,b);}],AIH,0,B_,[],0,0,0,["e",function(b,c,
d){return ATw(this,b,c,d);},"b9",function(b){return AYQ(this,b);}],UU,0,B_,[],4,0,0,["e",function(b,c,d){return A5R(this,b,c,d);},"b9",function(b){return A04(this,b);}],ANH,0,B_,[],0,0,0,["e",function(b,c,d){return A5h(this,b,c,d);},"b9",function(b){return AY_(this,b);}],AIf,0,B_,[],0,0,0,["e",function(b,c,d){return A01(this,b,c,d);},"b9",function(b){return ASA(this,b);}],AGr,0,Cu,[],0,0,0,["e",function(b,c,d){return AYy(this,b,c,d);},"ci",function(b){A0N(this,b);},"pi",function(){return A47(this);},"b9",function(b)
{return A0L(this,b);}],ABQ,0,Cu,[],4,0,0,["e",function(b,c,d){return A5b(this,b,c,d);},"ci",function(b){A6m(this,b);},"pi",function(){return AOT(this);},"b9",function(b){return AYH(this,b);}],ANx,0,B_,[],4,0,0,["e",function(b,c,d){return ATT(this,b,c,d);},"b9",function(b){return A2w(this,b);}],ALd,0,B_,[],0,0,0,["e",function(b,c,d){return AVs(this,b,c,d);},"b9",function(b){return A2o(this,b);}],AHS,0,B_,[],0,0,0,["e",function(b,c,d){return A3d(this,b,c,d);},"b9",function(b){return ARb(this,b);}],JZ,0,Cu,[],
0,0,0,["e",function(b,c,d){return APN(this,b,c,d);},"ci",function(b){A5V(this,b);},"b9",function(b){return AWq(this,b);}],ANB,0,JZ,[],0,0,0,["e",function(b,c,d){return ARe(this,b,c,d);},"eA",function(b,c,d){return AXI(this,b,c,d);},"eR",function(b,c,d,e){return APx(this,b,c,d,e);},"dR",function(b){return A4u(this,b);}],AJ8,0,JZ,[],0,0,0,["e",function(b,c,d){return AUo(this,b,c,d);}],AKw,0,CA,[],0,0,0,["dg",function(b,c){return ARs(this,b,c);},"eA",function(b,c,d){return A0w(this,b,c,d);},"eR",function(b,c,d,
e){return A2A(this,b,c,d,e);},"dR",function(b){return ASZ(this,b);}],AAq,0,CA,[],0,0,0,["dg",function(b,c){return AUr(this,b,c);}],Qs,0,CA,[],0,0,0,["dg",function(b,c){return A6s(this,b,c);}],Jf,0,C,[],4,0,0,0,Bq,0,C,[],1,0,0,0,Vv,0,CA,[],0,0,0,["dg",function(b,c){return AWJ(this,b,c);}],O0,0,Cu,[],0,0,0,["ci",function(b){A5s(this,b);},"e",function(b,c,d){return A05(this,b,c,d);},"eA",function(b,c,d){return ASX(this,b,c,d);},"eR",function(b,c,d,e){return A1F(this,b,c,d,e);},"dR",function(b){return APu(this,
b);},"b9",function(b){return AXl(this,b);}],Pb,0,Cu,[],0,0,0,["ci",function(b){A0V(this,b);},"e",function(b,c,d){return APb(this,b,c,d);},"eA",function(b,c,d){return A5H(this,b,c,d);},"eR",function(b,c,d,e){return AWG(this,b,c,d,e);},"dR",function(b){return ARu(this,b);},"b9",function(b){return A5N(this,b);}],Fi,0,CA,[],0,0,0,["dg",function(b,c){return A6c(this,b,c);},"eA",function(b,c,d){return A4V(this,b,c,d);},"eR",function(b,c,d,e){return AQI(this,b,c,d,e);},"dR",function(b){return A52(this,b);}],Y1,0,GZ,
[],4,0,0,["o$",function(b){return AQO(this,b);},"E$",function(b,c){return AWm(this,b,c);}],Y2,0,GZ,[],4,0,0,["o$",function(b){return A6y(this,b);},"E$",function(b,c){return AYe(this,b,c);}],AFu,0,C,[],0,0,0,0,AAY,0,C,[],0,0,0,0,OW,0,Bq,[],0,0,0,["b3",function(){return AKf(this);}],Oo,0,Bq,[],0,0,0,["b3",function(){return AKX(this);}],AFq,0,Bq,[],0,0,0,["b3",function(){return A6o(this);}],AFU,0,Bq,[],0,0,0,["b3",function(){return AXn(this);}],AFX,0,Bq,[],0,0,0,["b3",function(){return AR0(this);}],OR,0,Bq,[],
0,0,0,["b3",function(){return ABS(this);}],Ni,0,OR,[],0,0,0,["b3",function(){return ACW(this);}],AHv,0,Bq,[],0,0,0,["b3",function(){return A2V(this);}],PW,0,Ni,[],0,0,0,["b3",function(){return AHI(this);}],AKu,0,PW,[],0,0,0,["b3",function(){return AUK(this);}],AD4,0,Bq,[],0,0,0,["b3",function(){return A1r(this);}],ACi,0,Bq,[],0,0,0,["b3",function(){return AUD(this);}],AI0,0,Bq,[],0,0,0,["b3",function(){return AYk(this);}],ANc,0,Bq,[],0,0,0,["b3",function(){return A44(this);}],AHy,0,Bq,[],0,0,0,["b3",function()
{return AZi(this);}],AMw,0,Bq,[],0,0,0,["b3",function(){return ATe(this);}],AFb,0,Bq,[],0,0,0,["b3",function(){return AWr(this);}],AGd,0,Bq,[],0,0,0,["b3",function(){return A1p(this);}],ABj,0,Bq,[],0,0,0,["b3",function(){return ARF(this);}]]);
$rt_metadata([AH9,0,Bq,[],0,0,0,["b3",function(){return A7S(this);}],AME,0,Bq,[],0,0,0,["b3",function(){return AZb(this);}],AFJ,0,Bq,[],0,0,0,["b3",function(){return AT0(this);}],AJF,0,Bq,[],0,0,0,["b3",function(){return ARK(this);}],AEb,0,Bq,[],0,0,0,["b3",function(){return A2B(this);}],AGZ,0,Bq,[],0,0,0,["b3",function(){return A3L(this);}],AMO,0,Bq,[],0,0,0,["b3",function(){return AXB(this);}],ADc,0,Bq,[],0,0,0,["b3",function(){return AV4(this);}],ACM,0,Bq,[],0,0,0,["b3",function(){return AU$(this);}],AHx,
0,Bq,[],0,0,0,["b3",function(){return A6k(this);}],Md,0,Bq,[],0,0,0,["b3",function(){return AD5(this);}],ANs,0,Md,[],0,0,0,["b3",function(){return AUZ(this);}],AKz,0,OW,[],0,0,0,["b3",function(){return A0r(this);}],ACE,0,Oo,[],0,0,0,["b3",function(){return ASQ(this);}],AI5,0,Bq,[],0,0,0,["b3",function(){return AUd(this);}],AJq,0,Bq,[],0,0,0,["b3",function(){return AX7(this);}],AKn,0,Bq,[],0,0,0,["b3",function(){return A2m(this);}],AKv,0,Bq,[],0,0,0,["b3",function(){return AO0(this);}],VS,0,C,[],0,3,0,0,RQ,0,
Dn,[],0,0,0,0,UA,"AbstractCharClass$1",5,Bk,[],0,0,0,["T",function(b){return AR6(this,b);}],Uz,"AbstractCharClass$2",5,Bk,[],0,0,0,["T",function(b){return AZE(this,b);}],Q7,"CharClass$18",5,Bk,[],0,0,0,["T",function(b){return AT8(this,b);},"eN",function(){return A2I(this);}],Wi,0,Bk,[],0,0,0,["T",function(b){return A6e(this,b);}],Wg,0,Bk,[],0,0,0,["T",function(b){return AWH(this,b);}],Wh,0,Bk,[],0,0,0,["T",function(b){return A37(this,b);}],Wl,0,Bk,[],0,0,0,["T",function(b){return A1O(this,b);}],Wn,0,Bk,[],0,
0,0,["T",function(b){return AOV(this,b);}],Wj,0,Bk,[],0,0,0,["T",function(b){return ASN(this,b);}],Wk,0,Bk,[],0,0,0,["T",function(b){return AUs(this,b);}],Wo,0,Bk,[],0,0,0,["T",function(b){return AXL(this,b);}],Wp,0,Bk,[],0,0,0,["T",function(b){return A1j(this,b);}],Q6,0,Bk,[],0,0,0,["T",function(b){return A8K(this,b);}],Rn,0,Bk,[],0,0,0,["T",function(b){return ASP(this,b);}],Q4,0,Bk,[],0,0,0,["T",function(b){return ARi(this,b);}],Q5,0,Bk,[],0,0,0,["T",function(b){return A2v(this,b);}],Q$,0,Bk,[],0,0,0,["T",
function(b){return ATA(this,b);}],Q3,0,Bk,[],0,0,0,["T",function(b){return A69(this,b);}],Q8,0,Bk,[],0,0,0,["T",function(b){return A0E(this,b);}],Q9,0,Bk,[],0,0,0,["T",function(b){return AVW(this,b);}],Xb,0,C,[PQ],0,3,0,["KV",function(){return AU5(this);}],ALC,0,Fq,[],1,3,0,0,Ql,0,JG,[],0,0,0,["eA",function(b,c,d){return ASj(this,b,c,d);},"eR",function(b,c,d,e){return A8v(this,b,c,d,e);},"lX",function(){return AQ9(this);}],AHC,0,C,[Fn],0,0,0,0,Ny,0,C,[],3,3,0,0,XS,0,C,[Ny],4,3,0,0,KE,0,C,[Ci,Dk],0,3,0,0,ZZ,
0,JS,[],0,3,0,["yW",function(){return AST(this);},"FA",function(b){return ARa(this,b);},"uq",function(b,c,d){return A1R(this,b,c,d);},"zV",function(b){return AWY(this,b);}],X7,"AbstractCharClass$LazyJavaLowerCase$1",5,Bk,[],0,0,0,["T",function(b){return AXV(this,b);}],VD,"AbstractCharClass$LazyJavaUpperCase$1",5,Bk,[],0,0,0,["T",function(b){return A0p(this,b);}]]);
$rt_metadata([Su,"AbstractCharClass$LazyJavaWhitespace$1",5,Bk,[],0,0,0,["T",function(b){return APQ(this,b);}],St,"AbstractCharClass$LazyJavaMirrored$1",5,Bk,[],0,0,0,["T",function(b){return A2l(this,b);}],UK,"AbstractCharClass$LazyJavaDefined$1",5,Bk,[],0,0,0,["T",function(b){return ATp(this,b);}],Wz,"AbstractCharClass$LazyJavaDigit$1",5,Bk,[],0,0,0,["T",function(b){return A7z(this,b);}],QR,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",5,Bk,[],0,0,0,["T",function(b){return AVB(this,b);}],Xq,"AbstractCharClass$LazyJavaISOControl$1",
5,Bk,[],0,0,0,["T",function(b){return AWv(this,b);}],Vz,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bk,[],0,0,0,["T",function(b){return A8k(this,b);}],VC,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bk,[],0,0,0,["T",function(b){return ARy(this,b);}],QI,"AbstractCharClass$LazyJavaLetter$1",5,Bk,[],0,0,0,["T",function(b){return AX3(this,b);}],WQ,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bk,[],0,0,0,["T",function(b){return A4l(this,b);}],WW,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bk,[],0,0,
0,["T",function(b){return A5U(this,b);}],Yu,"AbstractCharClass$LazyJavaTitleCase$1",5,Bk,[],0,0,0,["T",function(b){return A7q(this,b);}],XT,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bk,[],0,0,0,["T",function(b){return AYq(this,b);}],Qe,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bk,[],0,0,0,["T",function(b){return ARq(this,b);}],NJ,"UnicodeCategory",5,Bk,[],0,0,0,["T",function(b){return AVC(this,b);}],XJ,"UnicodeCategoryScope",5,NJ,[],0,0,0,["T",function(b){return A6L(this,b);}],Rh,0,
Fh,[],4,0,0,0,Rf,0,Fv,[],4,0,0,["mM",function(b){return A74(this,b);},"eX",function(){return A4E(this);}],YY,0,C,[Ny],0,0,0,0,Rg,0,Dn,[],4,0,0,0,T0,0,Dn,[],0,0,0,0,Ri,0,C,[Fn],4,0,0,0,TV,0,G6,[Fn],0,0,0,0,UV,0,C,[],3,3,0,0,Qr,0,C,[UV],0,0,0,0,UR,0,C,[HO,Ci],0,3,0,0,AID,0,C,[],0,0,0,0]);
function $rt_array(cls,data){this.ct=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0"," -------- starting minecraft -------- ","g","p","/saves/level1.dat","Colbster937","Indev-WebGL","","position:relative;","Native Browser Exception\n","----------------------------------\n","  Line: ","  Type: ","  Message: ","----------------------------------\n\n","null","Patter is null",": ","    at ","Caused by: ","  at ",
"Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","\nError: World folder is locked!\n\nYou are already playing Minecraft in a different Window.\nClose all other Minecraft instances and reload","\nError: World folder could not be loaded!\n\n","mousedown","wheel","keyup",
"_minecraft_alpha.","Input array too big, the output array would be bigger (",") than the specified maximum size of ","yyyy-MM-dd_HH.mm.ss","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4",
"F5","F6","F7","F8","F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE",
"CLEAR","LMETA","RMETA","APPS","POWER","SLEEP","\n","Either src or dest is null","_net_peytonplayz585_minecraft_indev_IndexedDBFilesystem","Unknown Error","Initialization Failed","Can\'t compare "," to ","OPENED","LOCKED","ERROR","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","End of stream reached","Malformed UTF-8 sequence","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow",
"modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list","Timer hack thread","/default.png","FPS: ",", Chunk Updates: ","/terrain.png","anonymous","/char.png","http://www.minecraft.net/skin/",".png","/water.png","UTC","window.indexedDB was null or undefined","yee","charsetName is null","Should never been thrown","Stream closed","footer is not found",
"Unexpected end of ZLIB input stream","�","Replacement preconditions do not hold","Unable to allocate array size: ","lineSeparator must not contain base64 characters: [","]","Impossible modulus ","Strict decoding: Last encoded character (before the paddings if any) is a valid base 64 alphabet but not a possible encoding. Decoding requires at least two trailing 6-bit characters to create bytes.","Strict decoding: Last encoded character (before the paddings if any) is a valid base 64 alphabet but not a possible encoding. Expected the discarded bits from the character to be zero.",
"/dirt.png","main","en","CA","fr","zh","CN","FR","de","DE","it","IT","ja","JP","ko","KR","TW","GB","US","open error","path","/gui/items.png","New position "," is outside of range [0;","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","UTF Error","-","Capacity is negative: ","The last byte in dst ","The last byte in src ","lava","splash","smoke","flame",
"largesmoke","Large chest","Get resource: ","CONFLICT @ ","ERA=","YEAR=","MONTH=","WEEK_OF_YEAR=","WEEK_OF_MONTH=","DAY_OF_MONTH=","DAY_OF_YEAR=","DAY_OF_WEEK=","DAY_OF_WEEK_IN_MONTH=","AM_PM=","HOUR=","HOUR_OF_DAY","MINUTE=","SECOND=","MILLISECOND=","ZONE_OFFSET=","DST_OFFSET=","Index ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","001","STRICT","LENIANT","BIG_ENDIAN","LITTLE_ENDIAN","GMT",":","00","Unknown zone type: ","Id must not be null",
"Unknown mode: ","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Difficulty: ","Limit framerate: ","music","sound","invertYMouse","showFrameRate","viewDistance","bobView","anaglyph3d","limitFramerate","difficulty","key_","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","%clamp%","%blur%","!!","0123456789abcdef","C: ",". F: ",
", O: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","/grass.png","bubble","explode","The level is corrupt!",". L: ","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Indev","P: ",". T: ","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","  ","Generate new level...","Load level..","Play tutorial level","Options...","/gui/logo.png","Resources Copyright Mojang AB","need dictionary","unknown compression method",
"unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","The last int in dst ","The last int in src ","player-x","player-y","player-z","id","Pos","Motion","Rotation","FallDistance","Fire","Air","Health","HurtTime","DeathTime","AttackTime","Score","Slot","LocalPlayer","Count","Damage","Crafting","/gui/inventory.png","Wrong number of repetitions of X pattern at ","IGNORE","REPLACE","REPORT","/glsl/core.glsl",
"\n#define CC_a_color\n","#define CC_a_normal\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","a_normal","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply",
"alphaTestF","tex0","texCoordV0","OW KNOWS!","%clamp%/shadow.png","Loading level","Reading..","About","Map","Environment","Entities","Width","Length","Height","Preparing level..","Spawn","Author","Name","CreatedOn","CloudColor","SkyColor","FogColor","SkyBrightness","CloudHeight","SurroundingGroundHeight","SurroundingWaterHeight","SurroundingWaterType","TimeOfDay","Blocks","Data","Preparing entities..","Skipping unknown entity id \"","\"","Error reading entity","TileEntities","Chest","Furnace","Skipping unknown tile entity id \"",
"Error reading tileentity","Pig","Sheep","Creeper","Skeleton","Spider","Zombie","Giant","/mob/zombie.png","Item","Painting","SurroundingGroundType","MinecraftLevel","Action must be non-null","buffer capacity does not equal image size","OMG ERROR!","Game over!","Score: &e","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","Save level..","Back to game","Save level","Game menu","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree",
"oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths","oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","NOOOOOO!","FILE","DIRECTORY","FALSE","Age","/gui/furnace.png","/gui/crafting.png","/gui/container.png","newAction must be non-null","/armor/","_","chain","iron","diamond","gold","/mob/spider.png","/mob/spider_eyes.png","/mob/pig.png","/mob/sheep.png","Sheared","/mob/sheep_fur.png","/mob/creeper.png",
"/mob/skeleton.png","Dir","Motive","TileX","TileY","TileZ","/art/kz.png","xTile","yTile","zTile","inTile","shake","inGround","Arrow","/item/arrows.png","Fuse","PrimedTnt","Items","BurnTime","CookTime","Lit: ","GMT+00:00","Options","Controls...","Done","Controls","Inland","Island","Floating","Flat","Square","Long","Deep","Small","Huge","Nether","Paradise","Woods","Type: ","Shape:","Size: ","Theme: ","Create","Cancel","Shape: ","Generate new level","Load level",".mclevel","Getting level list..","http://","/listmaps.jsp?user=",
"Failed to load levels",";","---","Load file...","Save file...","Enter level name:","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Malformed input of length ","Unmappable characters of length ","#","###","# #","##","X#X","#X#"," # ","A "," B"," recipes","> "," <","XXX","XX","X#"," #"," #X","# X","X X","Directory is read-only","File "," already exists","ftp","http","https","unknown protocol(",
")://","?","Generating level","Carving..","Raising..","Eroding..","Coal: ",", Iron: ",", Gold: ",", Diamond: ","Melting..","Watering..","Soiling..","Assembling..","Growing..","Building..","Planting..","Lighting..","Spawning..","A Nice World","Wrong number of phases! Wanted ",", got ","Failed to set next phase!","Diagonal flood!?","Save","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>","Invalid file name","//","////","String index out of bounds: ","/./","/.","/../","/..",
"GET","HEAD","OPTIONS","POST","PUT","TRACE","Unsupported protocol: ","HTTP status: "," ","Directory does not exist","Is","In",", ","{",",","}","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart",
"javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","\r\n","Can\'t create file "," since parent path denotes regular file"]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AQF(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(ADJ);
(function(){var c;c=ABa.prototype;c.dispatchEvent=c.Nw;c.addEventListener=c.Yl;c.removeEventListener=c.Z2;c.getLength=c.VE;c.get=c.S1;c.addEventListener=c.Ud;c.removeEventListener=c.Pe;c=ALU.prototype;c.handleEvent=c.gJ;c=ALX.prototype;c.handleEvent=c.gJ;c=ALY.prototype;c.handleEvent=c.gJ;c=ALV.prototype;c.handleEvent=c.gJ;c=ALW.prototype;c.handleEvent=c.gJ;c=AL0.prototype;c.handleEvent=c.gJ;c=AL1.prototype;c.handleEvent=c.gJ;c=ALZ.prototype;c.handleEvent=c.gJ;c=ALt.prototype;c.handleEvent=c.gJ;c=ALs.prototype;c.handleEvent
=c.gJ;c=Yw.prototype;c.stateChanged=c.KV;c=SU.prototype;c.handleEvent=c.jF;c=SV.prototype;c.handleEvent=c.jF;c=SW.prototype;c.handleEvent=c.jF;c=SX.prototype;c.handleEvent=c.gJ;c=SZ.prototype;c.handleEvent=c.jF;c=S0.prototype;c.handleEvent=c.jF;c=Yi.prototype;c.onTimer=c.Hi;c=Yh.prototype;c.handleEvent=c.gJ;c=Yg.prototype;c.handleEvent=c.gJ;c=T5.prototype;c.onTimer=c.Hi;c=ACX.prototype;c.getLength=c.Zm;c.get=c.RP;c=Vw.prototype;c.handleEvent=c.jF;c=WM.prototype;c.handleEvent=c.jF;c=Vy.prototype;c.handleEvent
=c.jF;c=Vx.prototype;c.handleEvent=c.jF;c=Xb.prototype;c.stateChanged=c.KV;})();
})();

//# sourceMappingURL=app.js.map