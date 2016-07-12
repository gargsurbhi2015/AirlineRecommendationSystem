if (self.CavalryLogger) { CavalryLogger.start_js(["Iat\/f"]); }

__d('EXHPLeftNavController',['cx','csx','Arbiter','Bootloader','Event','Parent','UIPagelet','emptyFunction','requireWeak'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=void 0;function k(){if(!j){j=true;c('Bootloader').loadModules(["LeftNavActions","BookmarkPopoverMenu.react"],c('emptyFunction'),'EXHPLeftNavController');}}var l=void 0;function m(v){if(!l){l=true;c('UIPagelet').loadFromEndpoint('ReactLeftNavPagelet','pagelet_navigation',{see_all:v}).setHandler(function(){l=false;if(p){p.remove();p=null;}});}}var n={},o=void 0,p=void 0,q={init:function(v){p=c('Event').listen(v,'click',function(w){var x=w.target,y=c('Parent').bySelector(x,'#shortcutsNav .navHeader, #exploreNav .navHeader');if(y){x.appendChild(u());k();m(true);}var z=c('Parent').byAttribute(x,'data-nav-see-more');if(z){r(z);return;}var aa=c('Parent').byAttribute(x,'data-nav-item-id');if(!aa)return;var ba=aa.getAttribute('data-nav-item-id'),ca=c('Parent').bySelector(x,"._26tg");if(ca){s(ca,ba);}else t(aa,ba);});},consumeDidHaveClick:function(v){var w=n[v];delete n[v];return !!w;},consumeDidClickSeeMore:function(){var v=o;o=false;return v;}};function r(v){v.parentNode.insertBefore(u(),v);o=true;c('Bootloader').loadModules(["LeftNavSeeMoreContainer.react"],c('emptyFunction'),'EXHPLeftNavController');m();}function s(v,w){v.parentNode.replaceChild(u(),v);n[w]=true;k();m();}function t(v,w){var x=v.querySelector('.countValue');x&&x.remove();if(v.getAttribute('data-type')==='type_explore_feed'){m();c('requireWeak')('LeftNavController',function(y){c('Arbiter').inform('LeftNavController/topicFeedClick',w);});}}function u(){var v=document.createElement('span');v.className="_55ym _55yn _55yo";return v;}f.exports=q;},null);
__d('NotificationBeeperItemCloseButton.react',['cx','fbt','React','XUIAbstractGlyphButton.react'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'NotificationBeeperItemCloseButton',render:function(){return (c('React').createElement(c('XUIAbstractGlyphButton.react'),babelHelpers['extends']({},this.props,{className:"_3soc",title:i._("Close")})));}});f.exports=j;},null);
__d('FeedCommentBaseItemContents.react',['BootloadOnRender.react','JSResource','LazyComponent.react','React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'FeedCommentBaseItemContents',render:function(){return (c('React').createElement(c('BootloadOnRender.react'),{loader:c('JSResource')('FeedCommentBaseItemContentsImpl.react').__setRef('FeedCommentBaseItemContents.react'),placeholder:c('React').createElement('div',null),component:c('React').createElement(c('LazyComponent.react'),{beep:this.props.beep,className:this.props.className,onHide:this.props.onHide,onReadyToHide:this.props.onReadyToHide,onPreventHide:this.props.onPreventHide,ref:'itemContents'})}));}});f.exports=h;},null);
__d('SyncRequestAcceptedMessage.react',['fbt','cx','React'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'SyncRequestAcceptedMessage',propTypes:{appName:j.string.isRequired,isSender:j.bool.isRequired,receiverName:j.string.isRequired,senderName:j.string.isRequired},render:function(){if(this.props.isSender){return (c('React').createElement('div',null,h._("{receiver} accepted your invite to play {app name}.",[h.param('receiver',c('React').createElement('span',{className:"_dg4"},this.props.receiverName)),h.param('app name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}else return (c('React').createElement('div',null,h._("You accepted an invite from {sender} to play {app name}.",[h.param('sender',c('React').createElement('span',{className:"_dg4"},this.props.senderName)),h.param('app name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=k;},null);
__d('SyncRequestCanceledMessage.react',['cx','fbt','React'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'SyncRequestCanceledMessage',propTypes:{appName:j.string.isRequired,isSender:j.bool.isRequired,receiverName:j.string.isRequired,senderName:j.string.isRequired},render:function(){if(this.props.isSender){return (c('React').createElement('div',null,i._("You canceled an invite to {receiver} to play {app name}.",[i.param('receiver',c('React').createElement('span',{className:"_dg4"},this.props.receiverName)),i.param('app name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}else return (c('React').createElement('div',null,i._("{sender} canceled an invitation to play {app name}.",[i.param('sender',c('React').createElement('span',{className:"_dg4"},this.props.senderName)),i.param('app name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=k;},null);
__d('SyncRequestExpiredMessage.react',['fbt','cx','React'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'SyncRequestExpiredMessage',propTypes:{appName:j.string.isRequired,isSender:j.bool.isRequired,receiverName:j.string.isRequired,senderName:j.string.isRequired},render:function(){if(this.props.isSender){return (c('React').createElement('div',null,h._("{receiver} missed your invite to play {app name}.",[h.param('receiver',c('React').createElement('span',{className:"_dg4"},this.props.receiverName)),h.param('app name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}else return (c('React').createElement('div',null,h._("You missed an invite from {sender} to play {app name}.",[h.param('sender',c('React').createElement('span',{className:"_dg4"},this.props.senderName)),h.param('app name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=k;},null);
__d('SyncRequestRejectedMessage.react',['cx','fbt','AsyncRequest','Link.react','React','URI'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'SyncRequestRejectedMessage',propTypes:{requestId:j.string.isRequired,app:j.object.isRequired,isSender:j.bool.isRequired,receiver:j.object.isRequired,sender:j.object.isRequired},render:function(){if(this.props.isSender){return (c('React').createElement('div',null,i._("{receiver} declined your invite to play {app_name}.",[i.param('receiver',c('React').createElement('span',{className:"_dg4"},this.props.receiver.name)),i.param('app_name',c('React').createElement('span',{className:"_dg5"},this.props.app.name))])));}else return (c('React').createElement('div',null,i._("You declined an invite from {sender} to play {app_name}.",[i.param('sender',c('React').createElement('span',{className:"_dg4"},this.props.sender.name)),i.param('app_name',c('React').createElement('span',{className:"_dg5"},this.props.app.name))]),c('React').createElement('div',{className:"_13n7"},c('React').createElement('div',null,c('React').createElement(c('Link.react'),{onClick:this._submitBlockApp},i._("Block {app}",[i.param('app',this.props.app.name)]))),c('React').createElement('div',null,c('React').createElement(c('Link.react'),{onClick:this._submitBlockUser},i._("Block requests from {sender}",[i.param('sender',this.props.sender.name)]))))));},_submitBlockApp:function(){var l=new (c('URI'))('/games/block_app/'),m=new (c('AsyncRequest'))().setURI(l);m.setData({app_id:this.props.app.id,source:'sync_request'});m.send();},_submitBlockUser:function(){var l=new (c('URI'))('/games/block_user/'),m=new (c('AsyncRequest'))().setURI(l);m.setData({app_id:this.props.app.id,blockee_uid:this.props.sender.id});m.send();}});f.exports=k;},null);
__d('SyncRequestTimer.react',['fbt','React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes;function j(l){if(l){l=Math.ceil(l);var m=l%60;if(m<10)m='0'+m;var n=Math.floor(l/60);return n+':'+m;}else return "0:00";}var k=c('React').createClass({displayName:'SyncRequestTimer',propTypes:{timeRemaining:i.number.isRequired,isSender:i.bool.isRequired,receiverName:i.string.isRequired},render:function(){if(this.props.isSender){return (c('React').createElement('div',null,h._("({time_remaining} remaining)",[h.param('time_remaining',j(this.props.timeRemaining))])));}else return (c('React').createElement('div',null,h._("You have {time_remaining} to accept.",[h.param('time_remaining',j(this.props.timeRemaining))])));}});f.exports=k;},null);
__d('SyncRequestTitle.react',['fbt','cx','React'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'SyncRequestTitle',propTypes:{appName:j.string.isRequired,isSender:j.bool.isRequired,receiverName:j.string.isRequired,senderName:j.string.isRequired},render:function(){if(this.props.isSender){return (c('React').createElement('div',null,h._("Waiting for {receiver} to accept your invite to play {app_name}.",[h.param('receiver',c('React').createElement('span',{className:"_dg4"},this.props.receiverName)),h.param('app_name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}else return (c('React').createElement('div',null,h._("{sender} wants to play {app_name} with you, right now.",[h.param('sender',c('React').createElement('span',{className:"_dg4"},this.props.senderName)),h.param('app_name',c('React').createElement('span',{className:"_dg5"},this.props.appName))])));}});f.exports=k;},null);
__d("XSyncRequestSubmitController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/games\/sync_requests\/submit\/",{request_id:{type:"Int",required:true},sender:{type:"Int",required:true},action:{type:"Int",required:true}});},null);
__d('SyncRequest.react',['cx','fbt','Arbiter','AsyncRequest','ChannelConstants','React','SyncRequestStatusEnum','SyncRequestTitle.react','SyncRequestAcceptedMessage.react','SyncRequestRejectedMessage.react','SyncRequestExpiredMessage.react','SyncRequestCanceledMessage.react','SyncRequestTimer.react','XUIButton.react','XSyncRequestSubmitController','getObjectValues'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'SyncRequest',propTypes:{app:j.object.isRequired,creationTime:j.number.isRequired,requestId:j.string.isRequired,receiver:j.object.isRequired,sender:j.object.isRequired,status:j.oneOf(c('getObjectValues')(c('SyncRequestStatusEnum'))).isRequired,timeout:j.number.isRequired,timeRemaining:j.number.isRequired,viewerId:j.number.isRequired,onStatusUpdate:j.func},componentWillMount:function(){if(this.props.status===c('SyncRequestStatusEnum').PENDING){var l=c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('sync_request_updated'),function(o,p){p=p.obj;if(p.id.toString()!==this.props.requestId)return;this.setState({status:p.status});}.bind(this));this.setState({statusEvent:l});}var m=null;if(this.props.status===c('SyncRequestStatusEnum').PENDING){var n=function(){this.setState({time_remaining:this.state.time_remaining-1});if(this.state.time_remaining<=0){clearInterval(this.state.counter);var o={counter:null,time_remaining:0};if(this.state.status===c('SyncRequestStatusEnum').PENDING)o.status=c('SyncRequestStatusEnum').EXPIRED;this.setState(o);}};m=setInterval(n.bind(this),1000);}this.setState({time_remaining:this.props.timeRemaining,counter:m});},componentWillUnmount:function(){if(this.state.counter)clearInterval(this.state.counter);c('Arbiter').unsubscribe(this.state.statusEvent);},getInitialState:function(){return {buttonsDisabled:false,time:Date.now(),status:this.props.status,viewerIsSender:this.props.viewerId===this.props.sender.id};},componentDidUpdate:function(l,m){if(this.props.status!=c('SyncRequestStatusEnum').PENDING)this.state.status=this.props.status;if(this.props.onStatusUpdate)this.props.onStatusUpdate(this.state.status,m.status);},render:function(){var l;switch(this.state.status){case c('SyncRequestStatusEnum').PENDING:var m;if(!this.state.viewerIsSender){m=[c('React').createElement(c('XUIButton.react'),{use:'confirm',onClick:this._handleAccept,disabled:this.state.buttonsDisabled,label:i._("Accept")}),c('React').createElement(c('XUIButton.react'),{use:'default',onClick:this._handleReject,disabled:this.state.buttonsDisabled,label:i._("Decline")})];}else m=c('React').createElement(c('XUIButton.react'),{use:'default',onClick:this._handleCancel,disabled:this.state.buttonsDisabled,label:i._("Cancel")});l=c('React').createElement('div',null,c('React').createElement('div',{className:"_372m"},c('React').createElement(c('SyncRequestTitle.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name})),c('React').createElement('div',{className:"_372n"},c('React').createElement(c('SyncRequestTimer.react'),{isSender:this.state.viewerIsSender,timeRemaining:this.state.time_remaining,receiverName:this.props.receiver.name})),c('React').createElement('div',{className:"_372o"},m));break;case c('SyncRequestStatusEnum').ACCEPTED:l=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestAcceptedMessage.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;case c('SyncRequestStatusEnum').REJECTED:l=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestRejectedMessage.react'),{requestId:this.props.requestId,app:this.props.app,isSender:this.state.viewerIsSender,receiver:this.props.receiver,sender:this.props.sender}));break;case c('SyncRequestStatusEnum').EXPIRED:l=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestExpiredMessage.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;case c('SyncRequestStatusEnum').CANCELED:l=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestCanceledMessage.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;default:throw new Error('The request status `%s` is unknown.',this.state.status);}return (c('React').createElement('div',{className:"_372q"},l));},_handleAccept:function(){this._handleStatusUpdate(c('SyncRequestStatusEnum').ACCEPTED);var l=window.open(this.props.app.uri);if(l)l.focus();},_handleReject:function(){this._handleStatusUpdate(c('SyncRequestStatusEnum').REJECTED);},_handleCancel:function(){this._handleStatusUpdate(c('SyncRequestStatusEnum').CANCELED);},_handleStatusUpdate:function(l){this.setState({status:l,buttonsDisabled:true});var m=c('XSyncRequestSubmitController').getURIBuilder().setInt('request_id',this.props.requestId).setInt('sender',this.props.sender.id).setInt('action',l).getURI();new (c('AsyncRequest'))().setURI(m).setHandler(function(n){this.setState({status:l});}.bind(this)).setErrorHandler(function(n){this.setState({buttonsDisabled:false});}.bind(this)).send();}});f.exports=k;},null);
__d("XQuickPromotionSimpleLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/qp\/action\/log\/",{qp_id:{type:"Int",required:true},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}});},null);
__d('QPRenderer',['$','CSS','XQuickPromotionSimpleLoggingController','AsyncSignal'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(m,event,n){var o=c('XQuickPromotionSimpleLoggingController').getURIBuilder().setInt('qp_id',m).setString('qp_event',event).setStringToStringMap('qp_instance_log_data',n).getURI();new (c('AsyncSignal'))(o,{}).send();},i=function(m,n,o){var p=c('XQuickPromotionSimpleLoggingController').getURIBuilder().setInt('qp_id',m).setEnum('qp_action',n).setStringToStringMap('qp_instance_log_data',o).getURI();new (c('AsyncSignal'))(p,{}).send();},j=function(m,n,o,p,q,r){l(m,o,c('$')(p),r,function(){if(q)c('CSS').hide(n);});},k=function(m,n,o){n.show();h(m,'view',{});n.subscribe('cancel',function(){h(m,'dialog_cancel',{});});for(var p=0;p<o.length;p++){var q=o[p],r=c('$')(q.element_id);l(m,q.action,r,q.instance_log_data,function(){if(q.should_close)n.hide();});if(q.action=='primary')r.focus();}},l=function(m,n,o,p,q){o.addEventListener('click',function(){var r=c('XQuickPromotionSimpleLoggingController').getURIBuilder().setInt('qp_id',m).setEnum('qp_action',n).setStringToStringMap('qp_instance_log_data',p).getURI();new (c('AsyncSignal'))(r,{}).send();q();});};g.setAction=j;g.setDialogActionsAndShow=k;g.logAction=i;g.logEvent=h;},null);
__d('JewelQPLogging',['QPRenderer'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i=null,j=false;function k(){if(j)return;if(h&&i){j=true;c('QPRenderer').logEvent(i.promotion_id,'view',i.instance_log_data?i.instance_log_data:{});}}var l={onJewelOpened:function(){h=true;k();},updateQPLogData:function(m){i=m;k();}};f.exports=l;},null);
__d('RequestsJewelStore',['Arbiter','ArbiterMixin','ChannelConstants'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=babelHelpers['extends']({},c('ArbiterMixin'),{_initialized:false,_count:0,_requestList:{},addFriendRequests:function(i){Object.assign(this._requestList,i);},getRequestListKeys:function(){return Object.keys(this._requestList);},removeRequest:function(i){delete this._requestList[i];},getRequestCount:function(i){return this.getRequestListKeys().length;},decrementCount:function(){this.setCount(Math.max(0,this._count-1));},setCount:function(i){c('Arbiter').inform('jewel/count-updated',{jewel:'requests',count:i},c('Arbiter').BEHAVIOR_STATE);},setupListeners:function(){if(this._initialized)return;this._initialized=true;c('Arbiter').subscribe('jewel/count-updated',function(i,j){j.jewel==='requests'&&this._updateCount(j.count);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('jewel_requests_add'),function(i,j){return this._addRequest(j);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('jewel_friending_notifs'),function(i,j){return this._addNotification(j);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('jewel_requests_remove_old'),function(i,j){return this._removeOldRequest(j);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('friend_requests_seen'),function(i,j){return this.setCount(0);}.bind(this));},_updateCount:function(i){var j=this._count!==i;this._count=i;if(j)this.inform('countUpdated',i);},_addRequest:function(i){if(!i)return;var j=i.obj,k=j.from,l=j.suggester,m=this._requestList[k];if(!m)this.setCount(this._count+1);var n=m?m.type:null,o=n===19&&!l;this.inform('addRequest',{shouldReplace:o,previousType:n});},_addNotification:function(i){if(!i||i.obj.notif_type!=='friend_confirmed')return;this.inform('addNotification');},_removeOldRequest:function(i){if(!i)return;var j=this._requestList[i.obj.from];if(!j)return;this.inform('removeOldRequest',j);}});f.exports=h;},null);
__d('RequestsJewelController',['invariant','Promise','Arbiter','AsyncRequest','AsyncSignal','CSS','DOM','DOMQuery','Event','JewelConstants','JewelQPLogging','MarauderLogger','Parent','RequestsJewelStore','ScrollableArea','ge','getElementPosition','getViewportDimensions','requireWeak','throttle'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null;c('requireWeak')('FriendBrowserCheckboxController',function(o){return i=o;});var j=31,k=499,l=30,m=160;n.getInstance=function(){'use strict';return this.$RequestsJewelController11;};n.updateFromDOM=function(){'use strict';var o=this.getInstance();if(o)o.fromDom();};n.setupScroll=function(){'use strict';var o=this.getInstance();if(o)o.setupScroll();};n.setInitialHeight=function(){'use strict';var o=this.getInstance();if(o)o.updateHeight();};n.maybeLoadJewel=function(){'use strict';var o=this.getInstance();if(o)o.maybeLoadJewel();};n.create=function(o,p,q){'use strict';!!this.$RequestsJewelController11?h(0):void 0;return this.$RequestsJewelController11=new n(o,p,q);};function n(o,p,q){'use strict';this.$RequestsJewelController3=p;this.$RequestsJewelController2=q;this.$RequestsJewelController1=o;this.$RequestsJewelController5=-1;this.$RequestsJewelController6=-1;this.$RequestsJewelController10=c('Promise').resolve(true);this.$RequestsJewelController8=c('throttle').acrossTransitionsWithBlocking(function(){return this.$RequestsJewelController12({log_impressions:true});}.bind(this),5000);c('RequestsJewelStore').subscribe('addRequest',this.$RequestsJewelController13.bind(this));c('RequestsJewelStore').subscribe('addNotification',function(){return this.$RequestsJewelController14();}.bind(this));c('RequestsJewelStore').subscribe('removeOldRequest',this.$RequestsJewelController15.bind(this));c('RequestsJewelStore').setupListeners();this.setupScroll();this.$RequestsJewelController16();this.$RequestsJewelController17();this.$RequestsJewelController18();}n.prototype.fromDom=function(){'use strict';var o={};c('DOMQuery').scry(this.$RequestsJewelController1,'li.objectListItem').forEach(function(p){var q=p.getAttribute('id');if(q){var r=this.$RequestsJewelController19(q);if(r&&r.requester)o[r.requester]=r;}}.bind(this));c('RequestsJewelStore').addFriendRequests(o);this.$RequestsJewelController20();};n.prototype.maybeLoadJewel=function(){'use strict';if(this.$RequestsJewelController9){this.$RequestsJewelController9=false;this.openHandler();}};n.prototype.updateHeight=function(){'use strict';var o=this.$RequestsJewelController21();if(o)o.style.height=this.$RequestsJewelController22()+'px';};n.prototype.markSeen=function(){'use strict';this.$RequestsJewelController10.done(function(){var o=c('DOMQuery').scry(this.$RequestsJewelController1,'li[id]')[0];new (c('AsyncSignal'))('/ajax/gigaboxx/endpoint/UpdateLastSeenTime.php',{folder:this.$RequestsJewelController2,first_item:o.getAttribute('id')}).send();}.bind(this));};n.prototype.openHandler=function(){'use strict';c('Arbiter').inform('requestsJewel/opened');var o=c('ge')('fbRequestsJewelLoading'),p=this.$RequestsJewelController21();if(!o&&!p){this.$RequestsJewelController9=true;}else if(o){this.$RequestsJewelController8();}else{var q=c('RequestsJewelStore').getRequestListKeys();if(q.length>0)new (c('AsyncRequest'))().setAllowCrossPageTransition(true).setURI('/friends/requests/log_impressions').setData({ids:q.join(','),ref:'jewel'}).send();}p&&c('ScrollableArea').poke(p);c('JewelQPLogging').onJewelOpened();};n.prototype.closeHandler=function(){'use strict';c('Arbiter').inform('requestsJewel/closed');c('DOMQuery').scry(this.$RequestsJewelController1,'li.jewelItemNew').forEach(function(o){c('CSS').removeClass(o,'jewelItemNew');});};n.prototype.setupScroll=function(){'use strict';var o=this.$RequestsJewelController21();if(o){this.$RequestsJewelController7=this.$RequestsJewelController23();this.$RequestsJewelController4=0;c('ScrollableArea').getInstance(o).subscribe('scroll',this.$RequestsJewelController24.bind(this));this.$RequestsJewelController25();this.$RequestsJewelController26();}};n.prototype.$RequestsJewelController16=function(){'use strict';c('Event').listen(this.$RequestsJewelController1,'submit',function(o){var p=c('Parent').byClass(o.getTarget(),'objectListItem');if(p){c('CSS').removeClass(p,'jewelItemNew');c('CSS').addClass(p,'jewelItemResponded');}});};n.prototype.$RequestsJewelController17=function(){'use strict';c('Event').listen(window,'resize',c('throttle').acrossTransitions(function(){this.updateHeight();}.bind(this)));};n.prototype.$RequestsJewelController18=function(){'use strict';c('Arbiter').subscribe('pymk-x-out',function(o,p){var q=p.location;if(q==='pymk_jewel_first_page'||q==='pymk_jewel')this.$RequestsJewelController25();}.bind(this));};n.prototype.$RequestsJewelController27=function(o){'use strict';var p=parseInt(o,10);return !isNaN(p)?p:null;};n.prototype.$RequestsJewelController19=function(o){'use strict';var p=o.match(/^(\d+)_(\d+)/);if(!p)return null;return {requester:this.$RequestsJewelController27(p[1]),type:this.$RequestsJewelController27(p[2])};};n.prototype.$RequestsJewelController28=function(o,p){'use strict';if(o==null||p==null)return null;return o+'_'+p;};n.prototype.$RequestsJewelController21=function(){'use strict';return c('DOMQuery').scry(this.$RequestsJewelController1,'.uiScrollableArea')[0];};n.prototype.$RequestsJewelController23=function(){'use strict';return c('DOMQuery').scry(this.$RequestsJewelController1,'.uiScrollableAreaWrap')[0];};n.prototype.$RequestsJewelController24=function(){'use strict';var o=c('DOMQuery').scry(this.$RequestsJewelController7,'.uiMorePager').pop();if(o){var p=c('getElementPosition')(o).y;if(p>0)c('CSS').addClass(this.$RequestsJewelController21(),'contentAfter');var q=c('DOMQuery').find(o,'a');if(!q)return;var r=c('getElementPosition')(q).y;if(r===this.$RequestsJewelController4)return;var s=c('getElementPosition')(this.$RequestsJewelController7),t=s.y+s.height;if(r-300<t&&r>0){this.$RequestsJewelController4=r;var u=q.getAttribute('ajaxify');if(u){new (c('AsyncRequest'))(u).setRelativeTo(q).setStatusElement(c('Parent').byClass(q,'stat_elem')).send();}else if(i)i.getInstance('jewel').showMore();}}this.$RequestsJewelController25();this.$RequestsJewelController26();};n.prototype.$RequestsJewelController25=function(){'use strict';if(!this.$RequestsJewelController7)return;var o=c('getElementPosition')(this.$RequestsJewelController7),p=o.y+o.height,q=c('DOMQuery').scry(this.$RequestsJewelController1,'li.friendBrowserListUnit'),r=q.length-1;while(r>this.$RequestsJewelController5){var s=c('getElementPosition')(q[r]),t=s.y,u=t+s.height;if(t>0&&u<=p)break;r-=1;}var v=r;while(r>this.$RequestsJewelController5){var w=c('DOMQuery').find(q[r],'input.friendBrowserID'),x=parseInt(w.value,10);c('MarauderLogger').log('regular_pymk_imp',undefined,{pymk_id:x,pymk_location:'pymk_jewel'});r-=1;}this.$RequestsJewelController5=Math.max(this.$RequestsJewelController5,v);};n.prototype.$RequestsJewelController26=function(){'use strict';if(!this.$RequestsJewelController7)return;var o=c('getElementPosition')(this.$RequestsJewelController7),p=o.y+o.height,q=c('DOMQuery').scry(this.$RequestsJewelController1,'li.objectListItem'),r=q.length-1;while(r>this.$RequestsJewelController6){var s=c('getElementPosition')(q[r]),t=s.y,u=t+s.height;if(t>0&&u<=p)break;r-=1;}var v=r;while(r>this.$RequestsJewelController6){var w=q[r].getAttribute('id');w=w.substring(0,w.length-6);c('MarauderLogger').log('request_seen','friend_request_waterfall',{request_id:w,request_location:'requests_jewel'});r-=1;}this.$RequestsJewelController6=Math.max(this.$RequestsJewelController6,v);};n.prototype.$RequestsJewelController12=function(){var o=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];'use strict';this.$RequestsJewelController10=new (c('Promise'))(function(p,q){var r=!c('ge')('fbRequestsJewelLoading');new (c('AsyncRequest'))().setURI('/ajax/requests/loader/').setData(babelHelpers['extends']({},o,{reloadcontent:r})).setFinallyHandler(function(s){if(!s.getError()){p(true);}else q();}).send();});};n.prototype.$RequestsJewelController14=function(){'use strict';if(this.$RequestsJewelController3())return;this.$RequestsJewelController12();};n.prototype.$RequestsJewelController13=function(o,p){var q=p.shouldReplace,r=p.previousType;'use strict';if(!q&&(r||this.$RequestsJewelController3()))return;this.$RequestsJewelController12();};n.prototype.$RequestsJewelController15=function(o,p){var q=p.requester,r=p.type;'use strict';if(this.$RequestsJewelController3()||c('ge')('fbRequestsJewelLoading')!=null)return;var s=this.$RequestsJewelController28(q,r),t=s&&c('ge')(s);if(t){if(c('CSS').hasClass(t,'jewelItemNew'))c('RequestsJewelStore').decrementCount();if(!c('CSS').hasClass(t,'jewelItemResponded')){c('DOM').remove(t);c('RequestsJewelStore').removeRequest(q);this.$RequestsJewelController20();}}};n.prototype.$RequestsJewelController20=function(){'use strict';c('DOMQuery').scry(this.$RequestsJewelController1,'li.empty').forEach(function(o){c('CSS').conditionShow(o,c('RequestsJewelStore').getRequestCount()<=0);});};n.prototype.$RequestsJewelController22=function(){'use strict';return Math.min(Math.max(c('getViewportDimensions')().height-m,l),c('JewelConstants').FLYOUT_MAX_HEIGHT||k)+j;};n.$RequestsJewelController11=null;f.exports=n;},null);
__d('MercuryTypeaheadDataSource',['CurrentUser','DataSource','MercuryConfig','MercuryParticipantTypes','MercuryTypeaheadConstants','OrderedFriendsList','ShortProfiles','WorkModeConfig','debounce'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=500,k=[],l={},m={},n={},o=false,p=false;h=babelHelpers.inherits(q,c('DataSource'));i=h&&h.prototype;function q(r){'use strict';r=r||{};r.kanaNormalization=true;i.constructor.call(this,r);}q.prototype.dirty=function(){'use strict';this.$MercuryTypeaheadDataSource1=k;this.localCache=m;this.queryCache=l;this.queryIDs=n;return this;};q.prototype.bootstrap=function(){'use strict';if(o||p)return false;p=true;c('ShortProfiles').fetchAll().then(function(){this.updateBootstrapData();p=false;o=true;}.bind(this),function(){}.bind(this));return true;};q.prototype.updateBootstrapData=function(){'use strict';var r=this.getCachedShortProfileIDs(),s=c('WorkModeConfig').is_work_user?c('MercuryParticipantTypes').FB4C:c('MercuryParticipantTypes').FRIEND,t=r.map(function(u){var v=c('ShortProfiles').getNow(u),w=u==c('CurrentUser').getID()?s:v.type,x=[v.additionalName,v.alternateName].concat(v.searchTokens||[]).join(' '),y=v.name,z=null;if(v.threadNickname){y=v.threadNickname;z=v.name;}return {uid:u,index:c('OrderedFriendsList').getActiveRank(u),text:y,subtext:z,tokens:x,localized_text:v.name,additional_text:v.additionalName,photo:v.thumbSrc,render_type:w,type:c('MercuryTypeaheadConstants').USER_TYPE};});if(t.length)this.addEntries(t);};q.prototype.query=function(r,s,t,u){'use strict';var v=s||r.length===1;return i.query.call(this,r,v,t,u);};q.prototype.getQueryData=function(r,s){'use strict';return babelHelpers['extends']({},i.getQueryData.call(this,r,s));};q.prototype.setEntry=function(r,s){'use strict';this.$MercuryTypeaheadDataSource1[r]=s;};q.prototype.getEntry=function(r){'use strict';return this.$MercuryTypeaheadDataSource1[r]||null;};q.prototype.getCachedShortProfileIDs=function(){'use strict';var r=c('ShortProfiles').getCachedProfileIDs(),s=r.filter(function(t){var u=c('ShortProfiles').getNow(t);return (t==c('CurrentUser').getID()||u.type===c('MercuryParticipantTypes').FRIEND||u.type===c('MercuryParticipantTypes').FB4C||u.type===c('MercuryParticipantTypes').PAGE&&c('MercuryConfig').LinkedAgents&&c('MercuryConfig').LinkedAgents.indexOf(t.toString())>-1);});return s;};q.prototype.isBootstrapped=function(){'use strict';return o;};q.prototype.isBootstrapping=function(){'use strict';return p;};q.prototype.processEntries=function(r,s){'use strict';r=r.map(function(t){if(t.index==null&&(t.render_type===c('MercuryParticipantTypes').FRIEND||t.render_type===c('MercuryParticipantTypes').FB4C))t.index=c('OrderedFriendsList').getActiveRank(t.uid);if(t.render_type===c('MercuryParticipantTypes').PAGE&&c('MercuryConfig').LinkedAgents&&c('MercuryConfig').LinkedAgents.indexOf(t.uid.toString())>-1)t.index=1;return t;});return i.processEntries.call(this,r);};q.prototype.mergeUids=function(r,s,t,u){'use strict';var v=s.sort(function(w,x){return this.getEntry(w).index-this.getEntry(x).index;}.bind(this));return i.mergeUids.call(this,r,v,t,u);};f.exports=q;},null);
__d('ChatTabTypeaheadDataSource',['MercuryConfig','MercuryTypeaheadConstants','MercuryTypeaheadDataSource'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('MercuryTypeaheadDataSource'));i=h&&h.prototype;function j(k){'use strict';k=k||{};k.maxResults=c('MercuryTypeaheadConstants').COMPOSER_CHATTAB_MAX;i.constructor.call(this,k);this.$ChatTabTypeaheadDataSource1=true;}j.prototype.buildData=function(k){'use strict';var l=[],m=[],n=[],o=[],p=[],q=[];k.forEach(function(s){var t=i.getEntry.call(this,s);switch(t.render_type){case c('MercuryTypeaheadConstants').FRIEND_TYPE:l.push(s);break;case c('MercuryTypeaheadConstants').THREAD_TYPE:if(this.$ChatTabTypeaheadDataSource1)m.push(s);break;case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:n.push(s);break;case c('MercuryTypeaheadConstants').FB4C_TYPE:o.push(s);break;case c('MercuryTypeaheadConstants').PAGE_TYPE:if(this.$ChatTabTypeaheadDataSource1)if(c('MercuryConfig').LinkedAgents&&c('MercuryConfig').LinkedAgents.indexOf(s.toString())>-1){q.push(s);}else p.push(s);break;default:break;}},this);var r=q.concat(l,o,m,p,n);return i.buildData.call(this,r);};j.prototype.query=function(k,l,m,n){'use strict';return i.query.call(this,k,l,m,n);};j.prototype.respond=function(k,l,m){'use strict';return i.respond.call(this,k,l,m);};j.prototype.setShowThreads=function(k){'use strict';this.$ChatTabTypeaheadDataSource1=k;};f.exports=j;},null);
__d('NotificationJewelReminderLoader',['JSResource'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={init:function(h){c('JSResource')('NotificationJewelReminder').__setRef('NotificationJewelReminderLoader').load().done(function(i){new i(h);});}};},null);
__d('SyncRequestNotificationBeeperItemContents.react',['cx','Animation','Image.react','ImageBlock.react','NotificationBeeperItemCloseButton.react','NotificationUserActions','React','ReactDOM','SyncRequest.react','SyncRequestStatusEnum'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'SyncRequestNotificationBeeperItemContents',_markAsRead:function(){c('NotificationUserActions').markNotificationsAsRead([this.props.beep.notificationID]);this.props.onHide();},_onClose:function(){this._markAsRead();this.props.onHide();},_doFlash:function(){new (c('Animation'))(c('ReactDOM').findDOMNode(this.refs.inner)).from('opacity','0').to('opacity','1').duration(200).go();},componentDidMount:function(){if(this.props.beep.rendererData.status!=c('SyncRequestStatusEnum').PENDING)this.props.onReadyToHide(this.props.beep.notificationID);},componentDidUpdate:function(j){if(this.props.beep.rendererData.status!=c('SyncRequestStatusEnum').PENDING&&j.beep.rendererData.status==c('SyncRequestStatusEnum').PENDING)this.props.onReadyToHide(this.props.beep.notificationID);},onRequestStatusUpdate:function(j,k){if(j!=c('SyncRequestStatusEnum').PENDING&&k==c('SyncRequestStatusEnum').PENDING)this.props.onReadyToHide(this.props.beep.notificationID);},render:function(){var j=this.props.beep,k=j.rendererData;return (c('React').createElement('div',{ref:'inner',className:this.props.className},c('React').createElement(c('NotificationBeeperItemCloseButton.react'),{onClick:this._onClose}),c('React').createElement(c('ImageBlock.react'),{className:"_3soj"},c('React').createElement(c('Image.react'),{src:j.actors[0].profile_picture.uri,className:"_3sok"}),c('React').createElement('div',{className:"_3sol"},c('React').createElement(c('SyncRequest.react'),{app:k.app,creationTime:k.creation_time,requestId:k.id.toString(),receiver:k.receiver,sender:k.sender,status:k.status,timeout:k.timeout,timeRemaining:k.time_remaining,viewerId:k.receiver.id,onStatusUpdate:this.onRequestStatusUpdate})))));}});f.exports=i;},null);
__d('LiveMessageReceiver',['Arbiter','ChannelConstants','emptyFunction','shield'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){this.eventName=i;this.subs=null;this.handler=c('emptyFunction');this.shutdownHandler=null;this.registered=false;this.appId=1;}Object.assign(h,{getAppMessageType:function(i,j){return 'live_message/'+i+':'+j;},route:function(i){var j=function(k){var l=h.getAppMessageType(i.app_id,i.event_name);c('Arbiter').inform(l,k,c('Arbiter').BEHAVIOR_PERSISTENT);};j(i.response);}});Object.assign(h.prototype,{setAppId:function(i){this.appId=i;return this;},setHandler:function(i){this.handler=i;this._dirty();return this;},setRestartHandler:c('emptyFunction'),setShutdownHandler:function(i){this.shutdownHandler=c('shield')(i);this._dirty();return this;},_dirty:function(){if(this.registered){this.unregister();this.register();}},register:function(){var i=function(k,l){return this.handler(l);}.bind(this),j=h.getAppMessageType(this.appId,this.eventName);this.subs={};this.subs.main=c('Arbiter').subscribe(j,i);if(this.shutdownHandler)this.subs.shut=c('Arbiter').subscribe(c('ChannelConstants').ON_SHUTDOWN,this.shutdownHandler);this.registered=true;return this;},unregister:function(){if(!this.subs)return this;for(var i in this.subs)if(this.subs[i])this.subs[i].unsubscribe();this.subs=null;this.registered=false;return this;}});f.exports=h;},null);
__d('initLiveMessageReceiver',['Arbiter','ChannelConstants','LiveMessageReceiver'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('app_msg'),function(h,i){c('LiveMessageReceiver').route(i.obj);});},null);
__d('legacy:CompactTypeaheadRenderer',['CompactTypeaheadRenderer'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadRenderers)b.TypeaheadRenderers={};b.TypeaheadRenderers.compact=c('CompactTypeaheadRenderer');},3);