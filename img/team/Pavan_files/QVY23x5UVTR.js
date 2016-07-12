if (self.CavalryLogger) { CavalryLogger.start_js(["EvLEY"]); }

__d('ChatUnreadCount',['ChatDispatcher','ChatUnreadCountActionTypes','Map','MercuryIDs','MercurySingletonProvider','MercuryThreadInformer','MercuryThreads','MercuryUnreadState','isInFocusMode'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();h.getForFBID=function(j){return i.getForFBID(j);};h.get=function(){return i.get();};function h(j){this.$ChatUnreadCount1=j;this.$ChatUnreadCount2=c('MercuryThreadInformer').getForFBID(j);this.$ChatUnreadCount3=c('MercuryThreads').getForFBID(j);this.$ChatUnreadCount4=new (c('Map'))();this.$ChatUnreadCount5=c('MercuryUnreadState').getForFBID(j);this.setupSubscriptions();}h.prototype.getUnreadCountForUID=function(j){if(!j)return null;var k=c('MercuryIDs').getThreadIDFromUserID(j);if(!this.$ChatUnreadCount5.getIsThreadUnread(k)){this.$ChatUnreadCount4['delete'](j);return 0;}var l=this.$ChatUnreadCount3.getOrFetch(k),m=l&&l.unread_count;this.$ChatUnreadCount4.set(j,m);if(c('isInFocusMode')(k))return 0;return m;};h.prototype.setupSubscriptions=function(){this.$ChatUnreadCount2.subscribe('threads-updated',function(j,k){var l=Object.keys(k).some(function(m){var n=c('MercuryIDs').getUserIDFromThreadID(m);if(!n)return false;var o=this.getUnreadCountForUID(n),p=this.$ChatUnreadCount4.get(n)||0;return o!==p;}.bind(this));if(l)c('ChatDispatcher').dispatch({type:c('ChatUnreadCountActionTypes').COUNT_UPDATED});}.bind(this));this.$ChatUnreadCount2.subscribe('unread-updated',function(){return c('ChatDispatcher').dispatch({type:c('ChatUnreadCountActionTypes').COUNT_UPDATED});});};var i=new (c('MercurySingletonProvider'))(h);f.exports=h;},null);