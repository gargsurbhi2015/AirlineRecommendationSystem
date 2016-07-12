if (self.CavalryLogger) { CavalryLogger.start_js(["P0hYe"]); }

__d("ImageExtensions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best",PNG2JPG:"png2jpg"};},null);
__d("VideoCreatorProductType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9,STORYLINE:10,FRIENDS_DAY_2016:11,FRIENDVERSARY:12,STORYLINE_WITH_EXTERNAL_MUSIC:13,PERSONALIZED_BIRTHDAY:14};},null);
__d('FBOverlayBase.react',['React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'FBOverlayBase',render:function(){return c('React').Children.only(this.props.children);}});f.exports=h;},null);
__d('FBOverlayElement.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j={horizontal:{left:"_32rg",right:"_32rh",fit:c('joinClasses')("_32rg","_32rh")},vertical:{top:"_32ri",bottom:"_32rj",fit:c('joinClasses')("_32ri","_32rj")}},k=c('React').createClass({displayName:'FBOverlayElement',propTypes:{horizontal:i.oneOf(['left','right','fit']),vertical:i.oneOf(['top','bottom','fit'])},getDefaultProps:function(){return {horizontal:'fit',vertical:'fit'};},render:function(){var l=c('React').Children.only(this.props.children),m=c('joinClasses')(l.props.className,"_32rk",j.horizontal[this.props.horizontal],j.vertical[this.props.vertical]);return c('React').cloneElement(l,{className:m});}});f.exports=k;},null);
__d('FBOverlayContainer.react',['cx','invariant','FBOverlayBase.react','FBOverlayElement.react','React','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'FBOverlayContainer',propTypes:{children:function(k,l){var m=k[l],n=0;c('React').Children.forEach(m,function(o){if(o===null||o===undefined)return;switch(o.type){case c('FBOverlayBase.react'):n++;break;case c('FBOverlayElement.react'):break;default:i(0);}});!(n===1)?i(0):void 0;}},render:function(){return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_23n-")}),this.props.children));}});f.exports=j;},null);
__d('Bandicoot',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=5*1000,i=10*60*1000,j=14*24*60*60*1000,k='Bandicoot:',l={ACTIVE:'ACTIVE',INACTIVE:'INACTIVE',CLOSED:'CLOSED'};function m(){try{var q=window.localStorage;if(q){var r='__test'+Date.now();q.setItem(r,'');q.removeItem(r);}return q;}catch(p){}}var n=m();function o(p){this.$Bandicoot5=k+p;this.$Bandicoot4={};this.$Bandicoot1=this.$Bandicoot7.bind(this);this.sessionID=null;this.sessionStartTime=null;this.storage=n;}o.prototype.getCrashTimeData=function(){var p=window.performance&&window.performance.memory||{},q=this.sessionStartTime;return {duration:q?Date.now()-q:0,tabs:Object.keys(this.$Bandicoot8()).length,jsHeapSizeLimit:p.jsHeapSizeLimit,totalJSHeapSize:p.totalJSHeapSize,usedJSHeapSize:p.usedJSHeapSize,elementsInDOM:document.getElementsByTagName('*').length,uri:window.location.href};};o.prototype.getLogTimeData=function(){return {userAgent:window.navigator.userAgent};};o.prototype.logCrash=function(p,q,r){var s=Object.assign({sessionID:p},q,r);};o.prototype.logBrowserUnsupported=function(){};o.prototype.logTrackingError=function(){};o.prototype.startSession=function(){if(!this.storage){this.logBrowserUnsupported();return;}if(this.$Bandicoot2)return;if(!this.sessionID)this.sessionID=Math.random().toString(36).slice(2,9);if(!this.sessionStartTime)this.sessionStartTime=Date.now();this.$Bandicoot2=setInterval(this.$Bandicoot9.bind(this),h);this.$Bandicoot9();if(document.addEventListener)document.addEventListener('visibilitychange',this.$Bandicoot1);this.$Bandicoot10();};o.prototype.endSession=function(){if(!this.storage)return;if(!this.$Bandicoot2)return;clearInterval(this.$Bandicoot2);this.$Bandicoot2=null;if(!this.$Bandicoot3)this.$Bandicoot11({status:l.CLOSED});this.sessionID=null;this.sessionStartTime=null;if(document.removeEventListener)document.removeEventListener('visibilitychange',this.$Bandicoot1);};o.prototype.logKnownCrashes=function(){if(!this.storage)return;if(!this.$Bandicoot2)this.$Bandicoot9();};o.prototype.$Bandicoot9=function(){var p=this.$Bandicoot8(),q={};if(this.$Bandicoot2){if(!p[this.sessionID])p[this.sessionID]={};Object.assign(p[this.sessionID],this.getCrashTimeData(),{lastUpdated:Date.now(),status:this.$Bandicoot12()});}Object.keys(p).forEach(function(r){var s=p[r];if(s.status===l.CLOSED)return;if(this.$Bandicoot4[r])return;if(!s.lastUpdated)return;var t=Date.now()-s.lastUpdated;if(s.status===l.INACTIVE&&t>i)return;if(s.status===l.ACTIVE&&t>i){if(!s.loggerTabForPotentialCrash&&this.$Bandicoot2){s.loggerTabForPotentialCrash=this.sessionID;q[r]=s;}else if(s.loggerTabForPotentialCrash&&s.loggerTabForPotentialCrash!==this.sessionID){if(t>j)return;q[r]=s;}else{this.logCrash(r,s,this.getLogTimeData());this.$Bandicoot4[r]=true;}}else{delete s.loggerTabForPotentialCrash;q[r]=s;}}.bind(this));this.$Bandicoot13(q);};o.prototype.$Bandicoot8=function(p){p=p||this.$Bandicoot5;var q=this.storage.getItem(p)||'{}';try{q=JSON.parse(q);}catch(r){q={};this.storage.removeItem(p);}return q;};o.prototype.$Bandicoot11=function(p){p.lastUpdated=Date.now();var q=this.$Bandicoot8();if(!q[this.sessionID])q[this.sessionID]={};Object.assign(q[this.sessionID],p);this.$Bandicoot13(q);};o.prototype.$Bandicoot13=function(p){var q=JSON.stringify(p);try{this.storage.setItem(this.$Bandicoot5,q);}catch(r){var s=this.$Bandicoot6,t=Date.now();if(!s||t>s+h){this.logTrackingError();this.$Bandicoot6=t;}try{this.storage.removeItem(this.$Bandicoot5);}catch(u){this.$Bandicoot3=true;this.endSession();}}};o.prototype.$Bandicoot10=function(){for(var p=0;p<this.storage.length;++p){var q=this.storage.key(p);if(q.indexOf(k)===0&&q!==this.$Bandicoot5){var r=this.$Bandicoot8(q),s=Object.keys(r).every(function(t){var u=r[t];return (!u.lastUpdated||Date.now()-u.lastUpdated>j);});if(s)this.storage.removeItem(q);}}};o.prototype.$Bandicoot7=function(){this.$Bandicoot11({status:this.$Bandicoot12()});};o.prototype.$Bandicoot12=function(){return document.hidden?l.INACTIVE:l.ACTIVE;};f.exports=o;},null);
__d('Network',['mixInEventEmitter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=true,i=b.navigator.connection,j={0:'unknown',1:'ethernet',2:'wifi',3:'2g',4:'3g'};function k(){return h;}function l(q){if(q==h)return;h=q;p.emit(q?'online':'offline');}function m(){return i?i.bandwidth:h?Infinity:0;}function n(){return i?i.metered:false;}function o(){var q=i?String(i.type):'0';return j[q]||q;}var p={getBandwidth:m,getType:o,isMetered:n,isOnline:k,setOnline:l};c('mixInEventEmitter')(p,{online:true,offline:true});if(b.addEventListener){b.addEventListener('online',l.bind(null,true));b.addEventListener('offline',l.bind(null,false));}else if(b.attachEvent){b.attachEvent('online',l.bind(null,true));b.attachEvent('offline',l.bind(null,false));}f.exports=p;},null);
__d('PureStoreBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return {getInitialState:function(){return this.constructor.calculateState();},componentWillMount:function(){!this.constructor.calculateState?h(0):void 0;this._recalculateStateID=null;var m=function(){if(this.isMounted())this.setState(this.constructor.calculateState());this._recalculateStateID=null;}.bind(this);this._mixin=new (c('StoreBasedStateMixinHelper'))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c('setImmediate')(m);}.bind(this));},componentWillUnmount:function(){this._mixin.release();this._mixin=null;}};}.bind(this);f.exports=i;},null);
__d("ManagedError",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){Error.prototype.constructor.call(this,i);this.message=i;this.innerError=j;}h.prototype=new Error();h.prototype.constructor=h;f.exports=h;},null);
__d("DOMWrapper",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j={setRoot:function(k){h=k;},getRoot:function(){return h||document.body;},setWindow:function(k){i=k;},getWindow:function(){return i||self;}};f.exports=j;},null);
__d('Flash',['DOMEventListener','DOMWrapper','QueryString','UserAgent_DEPRECATED','guid','htmlSpecialChars'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i,j=c('DOMWrapper').getWindow().document;function k(p){var q=j.getElementById(p);if(q)q.parentNode.removeChild(q);delete h[p];}function l(){for(var p in h)if(h.hasOwnProperty(p))k(p);}function m(p){return p.replace(/\d+/g,function(q){return '000'.substring(q.length)+q;});}function n(p){if(!i){if(c('UserAgent_DEPRECATED').ie()>=9)c('DOMEventListener').add(window,'unload',l);i=true;}h[p]=p;}var o={embed:function(p,q,r,s){var t=c('guid')();p=c('htmlSpecialChars')(p).replace(/&amp;/g,'&');r=babelHelpers['extends']({allowscriptaccess:'always',flashvars:s,movie:p},r);if(typeof r.flashvars=='object')r.flashvars=c('QueryString').encode(r.flashvars);var u=[];for(var v in r)if(r.hasOwnProperty(v)&&r[v])u.push('<param name="'+c('htmlSpecialChars')(v)+'" value="'+c('htmlSpecialChars')(r[v])+'">');var w=q.appendChild(j.createElement('span')),x='<object '+(c('UserAgent_DEPRECATED').ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+p+'" '+(r.height?'height="'+r.height+'" ':'')+(r.width?'width="'+r.width+'" ':'')+'id="'+t+'">'+u.join('')+'</object>';w.innerHTML=x;var y=w.firstChild;n(t);return y;},remove:k,getVersion:function(){var p='Shockwave Flash',q='application/x-shockwave-flash',r='ShockwaveFlash.ShockwaveFlash',s;if(navigator.plugins&&typeof navigator.plugins[p]=='object'){var t=navigator.plugins[p].description;if(t&&navigator.mimeTypes&&navigator.mimeTypes[q]&&navigator.mimeTypes[q].enabledPlugin)s=t.match(/\d+/g);}if(!s)try{s=new ActiveXObject(r).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);s=Array.prototype.slice.call(s,1);}catch(u){}return s;},getVersionString:function(){var p=o.getVersion();return p?p.join('.'):'';},checkMinVersion:function(p){var q=o.getVersion();if(!q)return false;return m(q.join('.'))>=m(p);},isAvailable:function(){return !!o.getVersion();}};f.exports=o;},null);
__d('AssertionError',['ManagedError'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){c('ManagedError').prototype.constructor.apply(this,arguments);}h.prototype=new (c('ManagedError'))();h.prototype.constructor=h;f.exports=h;},null);
__d('Assert',['AssertionError','sprintf'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(m,n){if(typeof m!=='boolean'||!m)throw new (c('AssertionError'))(n);return m;}function i(m,n,o){var p;if(n===undefined){p='undefined';}else if(n===null){p='null';}else{var q=Object.prototype.toString.call(n);p=/\s(\w*)/.exec(q)[1].toLowerCase();}h(m.indexOf(p)!==-1,o||c('sprintf')('Expression is of type %s, not %s',p,m));return n;}function j(m,n,o){h(n instanceof m,o||'Expression not instance of type');return n;}function k(m,n){l['is'+m]=n;l['maybe'+m]=function(o,p){if(o!=null)n(o,p);};}var l={isInstanceOf:j,isTrue:h,isTruthy:function(m,n){return h(!!m,n);},type:i,define:function(m,n){m=m.substring(0,1).toUpperCase()+m.substring(1).toLowerCase();k(m,function(o,p){h(n(o),p);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(m){k(m,i.bind(null,m.toLowerCase()));});f.exports=l;},null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){'use strict';this.$VideoUploadFile1=i;this.$VideoUploadFile2=j;this.$VideoUploadFile3=k;this.$VideoUploadFile4=l;}h.fromFile=function(i){'use strict';var j=h.getExtensionFromFileName(i.name);return new this(null,i,i.size,j);};h.fromFileInput=function(i){'use strict';var j=null,k=null,l=h.getExtensionFromFileInput(i);if(c('VideoUploadFeatureDetector').supportsFileAPI()&&i.files.length){j=i.files[0];k=j.size;}return new this(i,j,k,l);};h.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};h.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};h.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};h.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};h.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===c('ImageExtensions').GIF)return c('VideoCreatorProductType').ANIMATED_GIFS;return c('VideoCreatorProductType').CORE_VIDEOS;};h.prototype.getChunk=function(i,j){'use strict';return this.$VideoUploadFile2?c('fileSlice').call(this.$VideoUploadFile2,i,j):null;};h.getExtensionFromFileInput=function(i){'use strict';return this.getExtensionFromFileName(i.value);};h.getExtensionFromFileName=function(i){'use strict';return i.indexOf('.')!=-1?i.split('.').pop().toLowerCase():'';};f.exports=h;},null);
__d("XBasicFBNuxDismissController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/megaphone\/dismiss_fbnux\/",{nux_id:{type:"Int",required:true}});},null);