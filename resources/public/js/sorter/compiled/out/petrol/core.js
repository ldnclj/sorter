// Compiled by ClojureScript 1.7.170 {}
goog.provide('petrol.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
/**
 * Apply a function to every element that comes out of a channel.
 * 
 *   (This is fmap for channels).
 */
petrol.core.wrap = (function petrol$core$wrap(f,in$){
return cljs.core.async.pipe.call(null,in$,cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,f)));
});
/**
 * Apply a function to every element that goes into a channel.
 * 
 *   (This is contramap for channels).
 */
petrol.core.forward = (function petrol$core$forward(f,from){
var to = cljs.core.async.chan.call(null);
var c__7581__auto___10456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___10456,to){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___10456,to){
return (function (state_10445){
var state_val_10446 = (state_10445[(1)]);
if((state_val_10446 === (1))){
var state_10445__$1 = state_10445;
var statearr_10447_10457 = state_10445__$1;
(statearr_10447_10457[(2)] = null);

(statearr_10447_10457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (2))){
var state_10445__$1 = state_10445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10445__$1,(5),to);
} else {
if((state_val_10446 === (3))){
var inst_10443 = (state_10445[(2)]);
var state_10445__$1 = state_10445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10445__$1,inst_10443);
} else {
if((state_val_10446 === (4))){
var inst_10441 = (state_10445[(2)]);
var state_10445__$1 = state_10445;
var statearr_10448_10458 = state_10445__$1;
(statearr_10448_10458[(2)] = inst_10441);

(statearr_10448_10458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (5))){
var inst_10438 = (state_10445[(2)]);
var inst_10439 = f.call(null,inst_10438);
var state_10445__$1 = state_10445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10445__$1,(4),from,inst_10439);
} else {
return null;
}
}
}
}
}
});})(c__7581__auto___10456,to))
;
return ((function (switch__7469__auto__,c__7581__auto___10456,to){
return (function() {
var petrol$core$forward_$_state_machine__7470__auto__ = null;
var petrol$core$forward_$_state_machine__7470__auto____0 = (function (){
var statearr_10452 = [null,null,null,null,null,null,null];
(statearr_10452[(0)] = petrol$core$forward_$_state_machine__7470__auto__);

(statearr_10452[(1)] = (1));

return statearr_10452;
});
var petrol$core$forward_$_state_machine__7470__auto____1 = (function (state_10445){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_10445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e10453){if((e10453 instanceof Object)){
var ex__7473__auto__ = e10453;
var statearr_10454_10459 = state_10445;
(statearr_10454_10459[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10460 = state_10445;
state_10445 = G__10460;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
petrol$core$forward_$_state_machine__7470__auto__ = function(state_10445){
switch(arguments.length){
case 0:
return petrol$core$forward_$_state_machine__7470__auto____0.call(this);
case 1:
return petrol$core$forward_$_state_machine__7470__auto____1.call(this,state_10445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
petrol$core$forward_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = petrol$core$forward_$_state_machine__7470__auto____0;
petrol$core$forward_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = petrol$core$forward_$_state_machine__7470__auto____1;
return petrol$core$forward_$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___10456,to))
})();
var state__7583__auto__ = (function (){var statearr_10455 = f__7582__auto__.call(null);
(statearr_10455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___10456);

return statearr_10455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___10456,to))
);


return to;
});

/**
 * @interface
 */
petrol.core.Message = function(){};

/**
 * Given a message, take the current app state and
 *                 return the new one. In essense this is a reducing
 *                 function.
 */
petrol.core.process_message = (function petrol$core$process_message(message,app){
if((!((message == null))) && (!((message.petrol$core$Message$process_message$arity$2 == null)))){
return message.petrol$core$Message$process_message$arity$2(message,app);
} else {
var x__5323__auto__ = (((message == null))?null:message);
var m__5324__auto__ = (petrol.core.process_message[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,message,app);
} else {
var m__5324__auto____$1 = (petrol.core.process_message["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,message,app);
} else {
throw cljs.core.missing_protocol.call(null,"Message.process-message",message);
}
}
}
});


/**
 * @interface
 */
petrol.core.EventSource = function(){};

petrol.core.watch_channels = (function petrol$core$watch_channels(message,app){
if((!((message == null))) && (!((message.petrol$core$EventSource$watch_channels$arity$2 == null)))){
return message.petrol$core$EventSource$watch_channels$arity$2(message,app);
} else {
var x__5323__auto__ = (((message == null))?null:message);
var m__5324__auto__ = (petrol.core.watch_channels[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,message,app);
} else {
var m__5324__auto____$1 = (petrol.core.watch_channels["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,message,app);
} else {
throw cljs.core.missing_protocol.call(null,"EventSource.watch-channels",message);
}
}
}
});

petrol.core.process_submessage = (function petrol$core$process_submessage(submessage,app,path){
if(((!((submessage == null)))?(((false) || (submessage.petrol$core$Message$))?true:(((!submessage.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,submessage):false)):cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,submessage))){
return cljs.core.update_in.call(null,app,path,(function (p1__10461_SHARP_){
return petrol.core.process_message.call(null,submessage,p1__10461_SHARP_);
}));
} else {
return null;
}
});
petrol.core.watch_subchannels = (function petrol$core$watch_subchannels(submessage,app,path,wrapper){
if(((!((submessage == null)))?(((false) || (submessage.petrol$core$EventSource$))?true:(((!submessage.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,submessage):false)):cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,submessage))){
return cljs.core.map.call(null,(function (p1__10464_SHARP_){
return petrol.core.wrap.call(null,wrapper,p1__10464_SHARP_);
}),petrol.core.watch_channels.call(null,submessage,cljs.core.get_in.call(null,app,path)));
} else {
return null;
}
});
/**
 * Given a DOM event, return the value it yields. This abstracts over
 *   the needless inconsistencies of the DOM.
 */
petrol.core.get_event_value = (function petrol$core$get_event_value(event){
var target = event.target;
var type = target.type;
var pred__10470 = cljs.core.contains_QMARK_;
var expr__10471 = type;
if(cljs.core.truth_(pred__10470.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["checkbox",null], null), null),expr__10471))){
return target.checked;
} else {
if(cljs.core.truth_(pred__10470.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["select-one",null,"email",null,"radio",null,"text",null,"number",null,"select-multiple",null,"textarea",null,"password",null], null), null),expr__10471))){
return target.value;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10471)].join('')));
}
}
});
/**
 * Send information from the user to the message queue.
 *   The message must be a record which implements the Message protocol.
 */
petrol.core.send_BANG_ = (function petrol$core$send_BANG_(channel,message){
return (function (dom_event){
cljs.core.async.put_BANG_.call(null,channel,message);

return dom_event.stopPropagation();
});
});
/**
 * Send information from the user to the message queue.
 * 
 *   Similar to `send!`, except the message-fn will be called with the message's value first.
 */
petrol.core.send_value_BANG_ = (function petrol$core$send_value_BANG_(channel,message_fn){
return (function (dom_event){
cljs.core.async.put_BANG_.call(null,channel,message_fn.call(null,petrol.core.get_event_value.call(null,dom_event)));

return dom_event.stopPropagation();
});
});
petrol.core._BANG_channels = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
petrol.core.start_message_loop_BANG_ = (function petrol$core$start_message_loop_BANG_(var_args){
var args10474 = [];
var len__5726__auto___10610 = arguments.length;
var i__5727__auto___10611 = (0);
while(true){
if((i__5727__auto___10611 < len__5726__auto___10610)){
args10474.push((arguments[i__5727__auto___10611]));

var G__10612 = (i__5727__auto___10611 + (1));
i__5727__auto___10611 = G__10612;
continue;
} else {
}
break;
}

var G__10476 = args10474.length;
switch (G__10476) {
case 2:
return petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10474.length)].join('')));

}
});

petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_app,render_fn){
return petrol.core.start_message_loop_BANG_.call(null,_BANG_app,render_fn,cljs.core.PersistentHashSet.EMPTY);
});

petrol.core.start_message_loop_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_BANG_app,render_fn,initial_channels){
cljs.core.reset_BANG_.call(null,petrol.core._BANG_channels,initial_channels);

var ui_channel = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,petrol.core._BANG_channels,cljs.core.conj,ui_channel);

cljs.core.add_watch.call(null,_BANG_app,new cljs.core.Keyword(null,"render","render",-1408033454),((function (ui_channel){
return (function (_,___$1,___$2,app){
return render_fn.call(null,ui_channel,app);
});})(ui_channel))
);

cljs.core.swap_BANG_.call(null,_BANG_app,cljs.core.identity);

var c__7581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto__,ui_channel){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto__,ui_channel){
return (function (state_10554){
var state_val_10555 = (state_10554[(1)]);
if((state_val_10555 === (7))){
var inst_10484 = (state_10554[(7)]);
var inst_10483 = (state_10554[(8)]);
var inst_10483__$1 = (state_10554[(2)]);
var inst_10484__$1 = cljs.core.nth.call(null,inst_10483__$1,(0),null);
var inst_10485 = cljs.core.nth.call(null,inst_10483__$1,(1),null);
var inst_10486 = (inst_10484__$1 == null);
var state_10554__$1 = (function (){var statearr_10556 = state_10554;
(statearr_10556[(9)] = inst_10485);

(statearr_10556[(7)] = inst_10484__$1);

(statearr_10556[(8)] = inst_10483__$1);

return statearr_10556;
})();
if(cljs.core.truth_(inst_10486)){
var statearr_10557_10614 = state_10554__$1;
(statearr_10557_10614[(1)] = (8));

} else {
var statearr_10558_10615 = state_10554__$1;
(statearr_10558_10615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (20))){
var inst_10479 = (state_10554[(10)]);
var inst_10485 = (state_10554[(9)]);
var inst_10484 = (state_10554[(7)]);
var inst_10483 = (state_10554[(8)]);
var inst_10514 = (function (){var temp__4425__auto__ = inst_10479;
var cs = inst_10479;
var vec__10481 = inst_10483;
var message = inst_10484;
var channel = inst_10485;
return ((function (temp__4425__auto__,cs,vec__10481,message,channel,inst_10479,inst_10485,inst_10484,inst_10483,state_val_10555,c__7581__auto__,ui_channel){
return (function (p1__10473_SHARP_){
return petrol.core.process_message.call(null,message,p1__10473_SHARP_);
});
;})(temp__4425__auto__,cs,vec__10481,message,channel,inst_10479,inst_10485,inst_10484,inst_10483,state_val_10555,c__7581__auto__,ui_channel))
})();
var inst_10515 = cljs.core.swap_BANG_.call(null,_BANG_app,inst_10514);
var state_10554__$1 = state_10554;
var statearr_10559_10616 = state_10554__$1;
(statearr_10559_10616[(2)] = inst_10515);

(statearr_10559_10616[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (27))){
var inst_10484 = (state_10554[(7)]);
var inst_10527 = inst_10484.cljs$lang$protocol_mask$partition$;
var inst_10528 = (!inst_10527);
var state_10554__$1 = state_10554;
if(cljs.core.truth_(inst_10528)){
var statearr_10560_10617 = state_10554__$1;
(statearr_10560_10617[(1)] = (29));

} else {
var statearr_10561_10618 = state_10554__$1;
(statearr_10561_10618[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (1))){
var state_10554__$1 = state_10554;
var statearr_10562_10619 = state_10554__$1;
(statearr_10562_10619[(2)] = null);

(statearr_10562_10619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (24))){
var inst_10484 = (state_10554[(7)]);
var inst_10537 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,inst_10484);
var state_10554__$1 = state_10554;
var statearr_10563_10620 = state_10554__$1;
(statearr_10563_10620[(2)] = inst_10537);

(statearr_10563_10620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (4))){
var inst_10479 = (state_10554[(10)]);
var state_10554__$1 = state_10554;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10554__$1,(7),inst_10479);
} else {
if((state_val_10555 === (15))){
var inst_10484 = (state_10554[(7)]);
var inst_10500 = inst_10484.cljs$lang$protocol_mask$partition$;
var inst_10501 = (!inst_10500);
var state_10554__$1 = state_10554;
if(cljs.core.truth_(inst_10501)){
var statearr_10564_10621 = state_10554__$1;
(statearr_10564_10621[(1)] = (17));

} else {
var statearr_10565_10622 = state_10554__$1;
(statearr_10565_10622[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (21))){
var state_10554__$1 = state_10554;
var statearr_10566_10623 = state_10554__$1;
(statearr_10566_10623[(2)] = null);

(statearr_10566_10623[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (31))){
var inst_10533 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
var statearr_10567_10624 = state_10554__$1;
(statearr_10567_10624[(2)] = inst_10533);

(statearr_10567_10624[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (32))){
var inst_10484 = (state_10554[(7)]);
var inst_10541 = cljs.core.deref.call(null,_BANG_app);
var inst_10542 = petrol.core.watch_channels.call(null,inst_10484,inst_10541);
var inst_10543 = cljs.core.swap_BANG_.call(null,petrol.core._BANG_channels,clojure.set.union,inst_10542);
var state_10554__$1 = state_10554;
var statearr_10568_10625 = state_10554__$1;
(statearr_10568_10625[(2)] = inst_10543);

(statearr_10568_10625[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (33))){
var state_10554__$1 = state_10554;
var statearr_10569_10626 = state_10554__$1;
(statearr_10569_10626[(2)] = null);

(statearr_10569_10626[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (13))){
var inst_10512 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
if(cljs.core.truth_(inst_10512)){
var statearr_10570_10627 = state_10554__$1;
(statearr_10570_10627[(1)] = (20));

} else {
var statearr_10571_10628 = state_10554__$1;
(statearr_10571_10628[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (22))){
var inst_10484 = (state_10554[(7)]);
var inst_10518 = (state_10554[(2)]);
var inst_10520 = (inst_10484 == null);
var inst_10521 = cljs.core.not.call(null,inst_10520);
var state_10554__$1 = (function (){var statearr_10572 = state_10554;
(statearr_10572[(11)] = inst_10518);

return statearr_10572;
})();
if(inst_10521){
var statearr_10573_10629 = state_10554__$1;
(statearr_10573_10629[(1)] = (23));

} else {
var statearr_10574_10630 = state_10554__$1;
(statearr_10574_10630[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (29))){
var inst_10484 = (state_10554[(7)]);
var inst_10530 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.EventSource,inst_10484);
var state_10554__$1 = state_10554;
var statearr_10575_10631 = state_10554__$1;
(statearr_10575_10631[(2)] = inst_10530);

(statearr_10575_10631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (6))){
var inst_10550 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
var statearr_10576_10632 = state_10554__$1;
(statearr_10576_10632[(2)] = inst_10550);

(statearr_10576_10632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (28))){
var inst_10535 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
var statearr_10577_10633 = state_10554__$1;
(statearr_10577_10633[(2)] = inst_10535);

(statearr_10577_10633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (25))){
var inst_10539 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
if(cljs.core.truth_(inst_10539)){
var statearr_10578_10634 = state_10554__$1;
(statearr_10578_10634[(1)] = (32));

} else {
var statearr_10579_10635 = state_10554__$1;
(statearr_10579_10635[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (34))){
var inst_10546 = (state_10554[(2)]);
var state_10554__$1 = (function (){var statearr_10580 = state_10554;
(statearr_10580[(12)] = inst_10546);

return statearr_10580;
})();
var statearr_10581_10636 = state_10554__$1;
(statearr_10581_10636[(2)] = null);

(statearr_10581_10636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (17))){
var inst_10484 = (state_10554[(7)]);
var inst_10503 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,inst_10484);
var state_10554__$1 = state_10554;
var statearr_10582_10637 = state_10554__$1;
(statearr_10582_10637[(2)] = inst_10503);

(statearr_10582_10637[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (3))){
var inst_10552 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10554__$1,inst_10552);
} else {
if((state_val_10555 === (12))){
var inst_10484 = (state_10554[(7)]);
var inst_10510 = cljs.core.native_satisfies_QMARK_.call(null,petrol.core.Message,inst_10484);
var state_10554__$1 = state_10554;
var statearr_10583_10638 = state_10554__$1;
(statearr_10583_10638[(2)] = inst_10510);

(statearr_10583_10638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (2))){
var inst_10479 = (state_10554[(10)]);
var inst_10478 = cljs.core.deref.call(null,petrol.core._BANG_channels);
var inst_10479__$1 = cljs.core.seq.call(null,inst_10478);
var state_10554__$1 = (function (){var statearr_10584 = state_10554;
(statearr_10584[(10)] = inst_10479__$1);

return statearr_10584;
})();
if(inst_10479__$1){
var statearr_10585_10639 = state_10554__$1;
(statearr_10585_10639[(1)] = (4));

} else {
var statearr_10586_10640 = state_10554__$1;
(statearr_10586_10640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (23))){
var inst_10484 = (state_10554[(7)]);
var inst_10523 = inst_10484.petrol$core$EventSource$;
var inst_10524 = (false) || (inst_10523);
var state_10554__$1 = state_10554;
if(cljs.core.truth_(inst_10524)){
var statearr_10587_10641 = state_10554__$1;
(statearr_10587_10641[(1)] = (26));

} else {
var statearr_10588_10642 = state_10554__$1;
(statearr_10588_10642[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (19))){
var inst_10506 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
var statearr_10589_10643 = state_10554__$1;
(statearr_10589_10643[(2)] = inst_10506);

(statearr_10589_10643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (11))){
var inst_10484 = (state_10554[(7)]);
var inst_10496 = inst_10484.petrol$core$Message$;
var inst_10497 = (false) || (inst_10496);
var state_10554__$1 = state_10554;
if(cljs.core.truth_(inst_10497)){
var statearr_10590_10644 = state_10554__$1;
(statearr_10590_10644[(1)] = (14));

} else {
var statearr_10591_10645 = state_10554__$1;
(statearr_10591_10645[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (9))){
var state_10554__$1 = state_10554;
var statearr_10592_10646 = state_10554__$1;
(statearr_10592_10646[(2)] = null);

(statearr_10592_10646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (5))){
var state_10554__$1 = state_10554;
var statearr_10593_10647 = state_10554__$1;
(statearr_10593_10647[(2)] = null);

(statearr_10593_10647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (14))){
var state_10554__$1 = state_10554;
var statearr_10594_10648 = state_10554__$1;
(statearr_10594_10648[(2)] = true);

(statearr_10594_10648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (26))){
var state_10554__$1 = state_10554;
var statearr_10595_10649 = state_10554__$1;
(statearr_10595_10649[(2)] = true);

(statearr_10595_10649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (16))){
var inst_10508 = (state_10554[(2)]);
var state_10554__$1 = state_10554;
var statearr_10596_10650 = state_10554__$1;
(statearr_10596_10650[(2)] = inst_10508);

(statearr_10596_10650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (30))){
var state_10554__$1 = state_10554;
var statearr_10597_10651 = state_10554__$1;
(statearr_10597_10651[(2)] = false);

(statearr_10597_10651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (10))){
var inst_10484 = (state_10554[(7)]);
var inst_10491 = (state_10554[(2)]);
var inst_10493 = (inst_10484 == null);
var inst_10494 = cljs.core.not.call(null,inst_10493);
var state_10554__$1 = (function (){var statearr_10598 = state_10554;
(statearr_10598[(13)] = inst_10491);

return statearr_10598;
})();
if(inst_10494){
var statearr_10599_10652 = state_10554__$1;
(statearr_10599_10652[(1)] = (11));

} else {
var statearr_10600_10653 = state_10554__$1;
(statearr_10600_10653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (18))){
var state_10554__$1 = state_10554;
var statearr_10601_10654 = state_10554__$1;
(statearr_10601_10654[(2)] = false);

(statearr_10601_10654[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10555 === (8))){
var inst_10485 = (state_10554[(9)]);
var inst_10488 = cljs.core.swap_BANG_.call(null,petrol.core._BANG_channels,cljs.core.disj,inst_10485);
var state_10554__$1 = state_10554;
var statearr_10602_10655 = state_10554__$1;
(statearr_10602_10655[(2)] = inst_10488);

(statearr_10602_10655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7581__auto__,ui_channel))
;
return ((function (switch__7469__auto__,c__7581__auto__,ui_channel){
return (function() {
var petrol$core$state_machine__7470__auto__ = null;
var petrol$core$state_machine__7470__auto____0 = (function (){
var statearr_10606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10606[(0)] = petrol$core$state_machine__7470__auto__);

(statearr_10606[(1)] = (1));

return statearr_10606;
});
var petrol$core$state_machine__7470__auto____1 = (function (state_10554){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_10554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e10607){if((e10607 instanceof Object)){
var ex__7473__auto__ = e10607;
var statearr_10608_10656 = state_10554;
(statearr_10608_10656[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10657 = state_10554;
state_10554 = G__10657;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
petrol$core$state_machine__7470__auto__ = function(state_10554){
switch(arguments.length){
case 0:
return petrol$core$state_machine__7470__auto____0.call(this);
case 1:
return petrol$core$state_machine__7470__auto____1.call(this,state_10554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
petrol$core$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = petrol$core$state_machine__7470__auto____0;
petrol$core$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = petrol$core$state_machine__7470__auto____1;
return petrol$core$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto__,ui_channel))
})();
var state__7583__auto__ = (function (){var statearr_10609 = f__7582__auto__.call(null);
(statearr_10609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto__);

return statearr_10609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto__,ui_channel))
);

return c__7581__auto__;
});

petrol.core.start_message_loop_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map