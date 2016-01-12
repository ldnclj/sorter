// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__20435 = cljs.core._EQ_;
var expr__20436 = (function (){var or__16863__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16863__auto__)){
return or__16863__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__20435.call(null,"true",expr__20436))){
return true;
} else {
if(cljs.core.truth_(pred__20435.call(null,"false",expr__20436))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20436)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20438__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20439__i = 0, G__20439__a = new Array(arguments.length -  0);
while (G__20439__i < G__20439__a.length) {G__20439__a[G__20439__i] = arguments[G__20439__i + 0]; ++G__20439__i;}
  args = new cljs.core.IndexedSeq(G__20439__a,0);
} 
return G__20438__delegate.call(this,args);};
G__20438.cljs$lang$maxFixedArity = 0;
G__20438.cljs$lang$applyTo = (function (arglist__20440){
var args = cljs.core.seq(arglist__20440);
return G__20438__delegate(args);
});
G__20438.cljs$core$IFn$_invoke$arity$variadic = G__20438__delegate;
return G__20438;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__20441){
var map__20444 = p__20441;
var map__20444__$1 = ((((!((map__20444 == null)))?((((map__20444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20444):map__20444);
var message = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16863__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16863__auto__)){
return or__16863__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16851__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16851__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16851__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18913__auto___20606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18913__auto___20606,ch){
return (function (){
var f__18914__auto__ = (function (){var switch__18892__auto__ = ((function (c__18913__auto___20606,ch){
return (function (state_20575){
var state_val_20576 = (state_20575[(1)]);
if((state_val_20576 === (7))){
var inst_20571 = (state_20575[(2)]);
var state_20575__$1 = state_20575;
var statearr_20577_20607 = state_20575__$1;
(statearr_20577_20607[(2)] = inst_20571);

(statearr_20577_20607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (1))){
var state_20575__$1 = state_20575;
var statearr_20578_20608 = state_20575__$1;
(statearr_20578_20608[(2)] = null);

(statearr_20578_20608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (4))){
var inst_20528 = (state_20575[(7)]);
var inst_20528__$1 = (state_20575[(2)]);
var state_20575__$1 = (function (){var statearr_20579 = state_20575;
(statearr_20579[(7)] = inst_20528__$1);

return statearr_20579;
})();
if(cljs.core.truth_(inst_20528__$1)){
var statearr_20580_20609 = state_20575__$1;
(statearr_20580_20609[(1)] = (5));

} else {
var statearr_20581_20610 = state_20575__$1;
(statearr_20581_20610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (15))){
var inst_20535 = (state_20575[(8)]);
var inst_20550 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20535);
var inst_20551 = cljs.core.first.call(null,inst_20550);
var inst_20552 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_20551);
var inst_20553 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_20552)].join('');
var inst_20554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_20553);
var state_20575__$1 = state_20575;
var statearr_20582_20611 = state_20575__$1;
(statearr_20582_20611[(2)] = inst_20554);

(statearr_20582_20611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (13))){
var inst_20559 = (state_20575[(2)]);
var state_20575__$1 = state_20575;
var statearr_20583_20612 = state_20575__$1;
(statearr_20583_20612[(2)] = inst_20559);

(statearr_20583_20612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (6))){
var state_20575__$1 = state_20575;
var statearr_20584_20613 = state_20575__$1;
(statearr_20584_20613[(2)] = null);

(statearr_20584_20613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (17))){
var inst_20557 = (state_20575[(2)]);
var state_20575__$1 = state_20575;
var statearr_20585_20614 = state_20575__$1;
(statearr_20585_20614[(2)] = inst_20557);

(statearr_20585_20614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (3))){
var inst_20573 = (state_20575[(2)]);
var state_20575__$1 = state_20575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20575__$1,inst_20573);
} else {
if((state_val_20576 === (12))){
var inst_20534 = (state_20575[(9)]);
var inst_20548 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_20534,opts);
var state_20575__$1 = state_20575;
if(cljs.core.truth_(inst_20548)){
var statearr_20586_20615 = state_20575__$1;
(statearr_20586_20615[(1)] = (15));

} else {
var statearr_20587_20616 = state_20575__$1;
(statearr_20587_20616[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (2))){
var state_20575__$1 = state_20575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20575__$1,(4),ch);
} else {
if((state_val_20576 === (11))){
var inst_20535 = (state_20575[(8)]);
var inst_20540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20541 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_20535);
var inst_20542 = cljs.core.async.timeout.call(null,(1000));
var inst_20543 = [inst_20541,inst_20542];
var inst_20544 = (new cljs.core.PersistentVector(null,2,(5),inst_20540,inst_20543,null));
var state_20575__$1 = state_20575;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20575__$1,(14),inst_20544);
} else {
if((state_val_20576 === (9))){
var inst_20535 = (state_20575[(8)]);
var inst_20561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_20562 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20535);
var inst_20563 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20562);
var inst_20564 = [cljs.core.str("Not loading: "),cljs.core.str(inst_20563)].join('');
var inst_20565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_20564);
var state_20575__$1 = (function (){var statearr_20588 = state_20575;
(statearr_20588[(10)] = inst_20561);

return statearr_20588;
})();
var statearr_20589_20617 = state_20575__$1;
(statearr_20589_20617[(2)] = inst_20565);

(statearr_20589_20617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (5))){
var inst_20528 = (state_20575[(7)]);
var inst_20530 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_20531 = (new cljs.core.PersistentArrayMap(null,2,inst_20530,null));
var inst_20532 = (new cljs.core.PersistentHashSet(null,inst_20531,null));
var inst_20533 = figwheel.client.focus_msgs.call(null,inst_20532,inst_20528);
var inst_20534 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_20533);
var inst_20535 = cljs.core.first.call(null,inst_20533);
var inst_20536 = figwheel.client.autoload_QMARK_.call(null);
var state_20575__$1 = (function (){var statearr_20590 = state_20575;
(statearr_20590[(9)] = inst_20534);

(statearr_20590[(8)] = inst_20535);

return statearr_20590;
})();
if(cljs.core.truth_(inst_20536)){
var statearr_20591_20618 = state_20575__$1;
(statearr_20591_20618[(1)] = (8));

} else {
var statearr_20592_20619 = state_20575__$1;
(statearr_20592_20619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (14))){
var inst_20546 = (state_20575[(2)]);
var state_20575__$1 = state_20575;
var statearr_20593_20620 = state_20575__$1;
(statearr_20593_20620[(2)] = inst_20546);

(statearr_20593_20620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (16))){
var state_20575__$1 = state_20575;
var statearr_20594_20621 = state_20575__$1;
(statearr_20594_20621[(2)] = null);

(statearr_20594_20621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (10))){
var inst_20567 = (state_20575[(2)]);
var state_20575__$1 = (function (){var statearr_20595 = state_20575;
(statearr_20595[(11)] = inst_20567);

return statearr_20595;
})();
var statearr_20596_20622 = state_20575__$1;
(statearr_20596_20622[(2)] = null);

(statearr_20596_20622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (8))){
var inst_20534 = (state_20575[(9)]);
var inst_20538 = figwheel.client.reload_file_state_QMARK_.call(null,inst_20534,opts);
var state_20575__$1 = state_20575;
if(cljs.core.truth_(inst_20538)){
var statearr_20597_20623 = state_20575__$1;
(statearr_20597_20623[(1)] = (11));

} else {
var statearr_20598_20624 = state_20575__$1;
(statearr_20598_20624[(1)] = (12));

}

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
});})(c__18913__auto___20606,ch))
;
return ((function (switch__18892__auto__,c__18913__auto___20606,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18893__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18893__auto____0 = (function (){
var statearr_20602 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20602[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18893__auto__);

(statearr_20602[(1)] = (1));

return statearr_20602;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18893__auto____1 = (function (state_20575){
while(true){
var ret_value__18894__auto__ = (function (){try{while(true){
var result__18895__auto__ = switch__18892__auto__.call(null,state_20575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18895__auto__;
}
break;
}
}catch (e20603){if((e20603 instanceof Object)){
var ex__18896__auto__ = e20603;
var statearr_20604_20625 = state_20575;
(statearr_20604_20625[(5)] = ex__18896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20626 = state_20575;
state_20575 = G__20626;
continue;
} else {
return ret_value__18894__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18893__auto__ = function(state_20575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18893__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18893__auto____1.call(this,state_20575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18893__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18893__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18893__auto__;
})()
;})(switch__18892__auto__,c__18913__auto___20606,ch))
})();
var state__18915__auto__ = (function (){var statearr_20605 = f__18914__auto__.call(null);
(statearr_20605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18913__auto___20606);

return statearr_20605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18915__auto__);
});})(c__18913__auto___20606,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__20627_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__20627_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_20634 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_20634){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_20632 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_20633 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_20632,_STAR_print_newline_STAR_20633,base_path_20634){
return (function() { 
var G__20635__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20636__i = 0, G__20636__a = new Array(arguments.length -  0);
while (G__20636__i < G__20636__a.length) {G__20636__a[G__20636__i] = arguments[G__20636__i + 0]; ++G__20636__i;}
  args = new cljs.core.IndexedSeq(G__20636__a,0);
} 
return G__20635__delegate.call(this,args);};
G__20635.cljs$lang$maxFixedArity = 0;
G__20635.cljs$lang$applyTo = (function (arglist__20637){
var args = cljs.core.seq(arglist__20637);
return G__20635__delegate(args);
});
G__20635.cljs$core$IFn$_invoke$arity$variadic = G__20635__delegate;
return G__20635;
})()
;})(_STAR_print_fn_STAR_20632,_STAR_print_newline_STAR_20633,base_path_20634))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20633;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20632;
}}catch (e20631){if((e20631 instanceof Error)){
var e = e20631;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_20634], null));
} else {
var e = e20631;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_20634))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__20638){
var map__20645 = p__20638;
var map__20645__$1 = ((((!((map__20645 == null)))?((((map__20645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20645):map__20645);
var opts = map__20645__$1;
var build_id = cljs.core.get.call(null,map__20645__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__20645,map__20645__$1,opts,build_id){
return (function (p__20647){
var vec__20648 = p__20647;
var map__20649 = cljs.core.nth.call(null,vec__20648,(0),null);
var map__20649__$1 = ((((!((map__20649 == null)))?((((map__20649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20649):map__20649);
var msg = map__20649__$1;
var msg_name = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20648,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__20648,map__20649,map__20649__$1,msg,msg_name,_,map__20645,map__20645__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__20648,map__20649,map__20649__$1,msg,msg_name,_,map__20645,map__20645__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__20645,map__20645__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__20655){
var vec__20656 = p__20655;
var map__20657 = cljs.core.nth.call(null,vec__20656,(0),null);
var map__20657__$1 = ((((!((map__20657 == null)))?((((map__20657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20657):map__20657);
var msg = map__20657__$1;
var msg_name = cljs.core.get.call(null,map__20657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20656,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__20659){
var map__20669 = p__20659;
var map__20669__$1 = ((((!((map__20669 == null)))?((((map__20669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20669):map__20669);
var on_compile_warning = cljs.core.get.call(null,map__20669__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__20669__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__20669,map__20669__$1,on_compile_warning,on_compile_fail){
return (function (p__20671){
var vec__20672 = p__20671;
var map__20673 = cljs.core.nth.call(null,vec__20672,(0),null);
var map__20673__$1 = ((((!((map__20673 == null)))?((((map__20673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20673):map__20673);
var msg = map__20673__$1;
var msg_name = cljs.core.get.call(null,map__20673__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20672,(1));
var pred__20675 = cljs.core._EQ_;
var expr__20676 = msg_name;
if(cljs.core.truth_(pred__20675.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__20676))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__20675.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20676))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__20669,map__20669__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18913__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18914__auto__ = (function (){var switch__18892__auto__ = ((function (c__18913__auto__,msg_hist,msg_names,msg){
return (function (state_20892){
var state_val_20893 = (state_20892[(1)]);
if((state_val_20893 === (7))){
var inst_20816 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20816)){
var statearr_20894_20940 = state_20892__$1;
(statearr_20894_20940[(1)] = (8));

} else {
var statearr_20895_20941 = state_20892__$1;
(statearr_20895_20941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (20))){
var inst_20886 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20896_20942 = state_20892__$1;
(statearr_20896_20942[(2)] = inst_20886);

(statearr_20896_20942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (27))){
var inst_20882 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20897_20943 = state_20892__$1;
(statearr_20897_20943[(2)] = inst_20882);

(statearr_20897_20943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (1))){
var inst_20809 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20809)){
var statearr_20898_20944 = state_20892__$1;
(statearr_20898_20944[(1)] = (2));

} else {
var statearr_20899_20945 = state_20892__$1;
(statearr_20899_20945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (24))){
var inst_20884 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20900_20946 = state_20892__$1;
(statearr_20900_20946[(2)] = inst_20884);

(statearr_20900_20946[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (4))){
var inst_20890 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20892__$1,inst_20890);
} else {
if((state_val_20893 === (15))){
var inst_20888 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20901_20947 = state_20892__$1;
(statearr_20901_20947[(2)] = inst_20888);

(statearr_20901_20947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (21))){
var inst_20847 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20902_20948 = state_20892__$1;
(statearr_20902_20948[(2)] = inst_20847);

(statearr_20902_20948[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (31))){
var inst_20871 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20871)){
var statearr_20903_20949 = state_20892__$1;
(statearr_20903_20949[(1)] = (34));

} else {
var statearr_20904_20950 = state_20892__$1;
(statearr_20904_20950[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (32))){
var inst_20880 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20905_20951 = state_20892__$1;
(statearr_20905_20951[(2)] = inst_20880);

(statearr_20905_20951[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (33))){
var inst_20869 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20906_20952 = state_20892__$1;
(statearr_20906_20952[(2)] = inst_20869);

(statearr_20906_20952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (13))){
var inst_20830 = figwheel.client.heads_up.clear.call(null);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(16),inst_20830);
} else {
if((state_val_20893 === (22))){
var inst_20851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20852 = figwheel.client.heads_up.append_message.call(null,inst_20851);
var state_20892__$1 = state_20892;
var statearr_20907_20953 = state_20892__$1;
(statearr_20907_20953[(2)] = inst_20852);

(statearr_20907_20953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (36))){
var inst_20878 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20908_20954 = state_20892__$1;
(statearr_20908_20954[(2)] = inst_20878);

(statearr_20908_20954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (29))){
var inst_20862 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20909_20955 = state_20892__$1;
(statearr_20909_20955[(2)] = inst_20862);

(statearr_20909_20955[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (6))){
var inst_20811 = (state_20892[(7)]);
var state_20892__$1 = state_20892;
var statearr_20910_20956 = state_20892__$1;
(statearr_20910_20956[(2)] = inst_20811);

(statearr_20910_20956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (28))){
var inst_20858 = (state_20892[(2)]);
var inst_20859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20860 = figwheel.client.heads_up.display_warning.call(null,inst_20859);
var state_20892__$1 = (function (){var statearr_20911 = state_20892;
(statearr_20911[(8)] = inst_20858);

return statearr_20911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(29),inst_20860);
} else {
if((state_val_20893 === (25))){
var inst_20856 = figwheel.client.heads_up.clear.call(null);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(28),inst_20856);
} else {
if((state_val_20893 === (34))){
var inst_20873 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(37),inst_20873);
} else {
if((state_val_20893 === (17))){
var inst_20838 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20912_20957 = state_20892__$1;
(statearr_20912_20957[(2)] = inst_20838);

(statearr_20912_20957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (3))){
var inst_20828 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20828)){
var statearr_20913_20958 = state_20892__$1;
(statearr_20913_20958[(1)] = (13));

} else {
var statearr_20914_20959 = state_20892__$1;
(statearr_20914_20959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (12))){
var inst_20824 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20915_20960 = state_20892__$1;
(statearr_20915_20960[(2)] = inst_20824);

(statearr_20915_20960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (2))){
var inst_20811 = (state_20892[(7)]);
var inst_20811__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_20892__$1 = (function (){var statearr_20916 = state_20892;
(statearr_20916[(7)] = inst_20811__$1);

return statearr_20916;
})();
if(cljs.core.truth_(inst_20811__$1)){
var statearr_20917_20961 = state_20892__$1;
(statearr_20917_20961[(1)] = (5));

} else {
var statearr_20918_20962 = state_20892__$1;
(statearr_20918_20962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (23))){
var inst_20854 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20854)){
var statearr_20919_20963 = state_20892__$1;
(statearr_20919_20963[(1)] = (25));

} else {
var statearr_20920_20964 = state_20892__$1;
(statearr_20920_20964[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (35))){
var state_20892__$1 = state_20892;
var statearr_20921_20965 = state_20892__$1;
(statearr_20921_20965[(2)] = null);

(statearr_20921_20965[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (19))){
var inst_20849 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20849)){
var statearr_20922_20966 = state_20892__$1;
(statearr_20922_20966[(1)] = (22));

} else {
var statearr_20923_20967 = state_20892__$1;
(statearr_20923_20967[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (11))){
var inst_20820 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20924_20968 = state_20892__$1;
(statearr_20924_20968[(2)] = inst_20820);

(statearr_20924_20968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (9))){
var inst_20822 = figwheel.client.heads_up.clear.call(null);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(12),inst_20822);
} else {
if((state_val_20893 === (5))){
var inst_20813 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_20892__$1 = state_20892;
var statearr_20925_20969 = state_20892__$1;
(statearr_20925_20969[(2)] = inst_20813);

(statearr_20925_20969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (14))){
var inst_20840 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20840)){
var statearr_20926_20970 = state_20892__$1;
(statearr_20926_20970[(1)] = (18));

} else {
var statearr_20927_20971 = state_20892__$1;
(statearr_20927_20971[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (26))){
var inst_20864 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20864)){
var statearr_20928_20972 = state_20892__$1;
(statearr_20928_20972[(1)] = (30));

} else {
var statearr_20929_20973 = state_20892__$1;
(statearr_20929_20973[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (16))){
var inst_20832 = (state_20892[(2)]);
var inst_20833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20834 = figwheel.client.format_messages.call(null,inst_20833);
var inst_20835 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20836 = figwheel.client.heads_up.display_error.call(null,inst_20834,inst_20835);
var state_20892__$1 = (function (){var statearr_20930 = state_20892;
(statearr_20930[(9)] = inst_20832);

return statearr_20930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(17),inst_20836);
} else {
if((state_val_20893 === (30))){
var inst_20866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20867 = figwheel.client.heads_up.display_warning.call(null,inst_20866);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(33),inst_20867);
} else {
if((state_val_20893 === (10))){
var inst_20826 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20931_20974 = state_20892__$1;
(statearr_20931_20974[(2)] = inst_20826);

(statearr_20931_20974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (18))){
var inst_20842 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20843 = figwheel.client.format_messages.call(null,inst_20842);
var inst_20844 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20845 = figwheel.client.heads_up.display_error.call(null,inst_20843,inst_20844);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(21),inst_20845);
} else {
if((state_val_20893 === (37))){
var inst_20875 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20932_20975 = state_20892__$1;
(statearr_20932_20975[(2)] = inst_20875);

(statearr_20932_20975[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (8))){
var inst_20818 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(11),inst_20818);
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
}
}
}
});})(c__18913__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18892__auto__,c__18913__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto____0 = (function (){
var statearr_20936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20936[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto__);

(statearr_20936[(1)] = (1));

return statearr_20936;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto____1 = (function (state_20892){
while(true){
var ret_value__18894__auto__ = (function (){try{while(true){
var result__18895__auto__ = switch__18892__auto__.call(null,state_20892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18895__auto__;
}
break;
}
}catch (e20937){if((e20937 instanceof Object)){
var ex__18896__auto__ = e20937;
var statearr_20938_20976 = state_20892;
(statearr_20938_20976[(5)] = ex__18896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20977 = state_20892;
state_20892 = G__20977;
continue;
} else {
return ret_value__18894__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto__ = function(state_20892){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto____1.call(this,state_20892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18893__auto__;
})()
;})(switch__18892__auto__,c__18913__auto__,msg_hist,msg_names,msg))
})();
var state__18915__auto__ = (function (){var statearr_20939 = f__18914__auto__.call(null);
(statearr_20939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18913__auto__);

return statearr_20939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18915__auto__);
});})(c__18913__auto__,msg_hist,msg_names,msg))
);

return c__18913__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18913__auto___21040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18913__auto___21040,ch){
return (function (){
var f__18914__auto__ = (function (){var switch__18892__auto__ = ((function (c__18913__auto___21040,ch){
return (function (state_21023){
var state_val_21024 = (state_21023[(1)]);
if((state_val_21024 === (1))){
var state_21023__$1 = state_21023;
var statearr_21025_21041 = state_21023__$1;
(statearr_21025_21041[(2)] = null);

(statearr_21025_21041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (2))){
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21023__$1,(4),ch);
} else {
if((state_val_21024 === (3))){
var inst_21021 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21023__$1,inst_21021);
} else {
if((state_val_21024 === (4))){
var inst_21011 = (state_21023[(7)]);
var inst_21011__$1 = (state_21023[(2)]);
var state_21023__$1 = (function (){var statearr_21026 = state_21023;
(statearr_21026[(7)] = inst_21011__$1);

return statearr_21026;
})();
if(cljs.core.truth_(inst_21011__$1)){
var statearr_21027_21042 = state_21023__$1;
(statearr_21027_21042[(1)] = (5));

} else {
var statearr_21028_21043 = state_21023__$1;
(statearr_21028_21043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (5))){
var inst_21011 = (state_21023[(7)]);
var inst_21013 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_21011);
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21023__$1,(8),inst_21013);
} else {
if((state_val_21024 === (6))){
var state_21023__$1 = state_21023;
var statearr_21029_21044 = state_21023__$1;
(statearr_21029_21044[(2)] = null);

(statearr_21029_21044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (7))){
var inst_21019 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
var statearr_21030_21045 = state_21023__$1;
(statearr_21030_21045[(2)] = inst_21019);

(statearr_21030_21045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (8))){
var inst_21015 = (state_21023[(2)]);
var state_21023__$1 = (function (){var statearr_21031 = state_21023;
(statearr_21031[(8)] = inst_21015);

return statearr_21031;
})();
var statearr_21032_21046 = state_21023__$1;
(statearr_21032_21046[(2)] = null);

(statearr_21032_21046[(1)] = (2));


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
});})(c__18913__auto___21040,ch))
;
return ((function (switch__18892__auto__,c__18913__auto___21040,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18893__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18893__auto____0 = (function (){
var statearr_21036 = [null,null,null,null,null,null,null,null,null];
(statearr_21036[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18893__auto__);

(statearr_21036[(1)] = (1));

return statearr_21036;
});
var figwheel$client$heads_up_plugin_$_state_machine__18893__auto____1 = (function (state_21023){
while(true){
var ret_value__18894__auto__ = (function (){try{while(true){
var result__18895__auto__ = switch__18892__auto__.call(null,state_21023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18895__auto__;
}
break;
}
}catch (e21037){if((e21037 instanceof Object)){
var ex__18896__auto__ = e21037;
var statearr_21038_21047 = state_21023;
(statearr_21038_21047[(5)] = ex__18896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21048 = state_21023;
state_21023 = G__21048;
continue;
} else {
return ret_value__18894__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18893__auto__ = function(state_21023){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18893__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18893__auto____1.call(this,state_21023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18893__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18893__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18893__auto__;
})()
;})(switch__18892__auto__,c__18913__auto___21040,ch))
})();
var state__18915__auto__ = (function (){var statearr_21039 = f__18914__auto__.call(null);
(statearr_21039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18913__auto___21040);

return statearr_21039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18915__auto__);
});})(c__18913__auto___21040,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18913__auto__){
return (function (){
var f__18914__auto__ = (function (){var switch__18892__auto__ = ((function (c__18913__auto__){
return (function (state_21069){
var state_val_21070 = (state_21069[(1)]);
if((state_val_21070 === (1))){
var inst_21064 = cljs.core.async.timeout.call(null,(3000));
var state_21069__$1 = state_21069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21069__$1,(2),inst_21064);
} else {
if((state_val_21070 === (2))){
var inst_21066 = (state_21069[(2)]);
var inst_21067 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_21069__$1 = (function (){var statearr_21071 = state_21069;
(statearr_21071[(7)] = inst_21066);

return statearr_21071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21069__$1,inst_21067);
} else {
return null;
}
}
});})(c__18913__auto__))
;
return ((function (switch__18892__auto__,c__18913__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18893__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18893__auto____0 = (function (){
var statearr_21075 = [null,null,null,null,null,null,null,null];
(statearr_21075[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18893__auto__);

(statearr_21075[(1)] = (1));

return statearr_21075;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18893__auto____1 = (function (state_21069){
while(true){
var ret_value__18894__auto__ = (function (){try{while(true){
var result__18895__auto__ = switch__18892__auto__.call(null,state_21069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18895__auto__;
}
break;
}
}catch (e21076){if((e21076 instanceof Object)){
var ex__18896__auto__ = e21076;
var statearr_21077_21079 = state_21069;
(statearr_21077_21079[(5)] = ex__18896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21080 = state_21069;
state_21069 = G__21080;
continue;
} else {
return ret_value__18894__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18893__auto__ = function(state_21069){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18893__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18893__auto____1.call(this,state_21069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18893__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18893__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18893__auto__;
})()
;})(switch__18892__auto__,c__18913__auto__))
})();
var state__18915__auto__ = (function (){var statearr_21078 = f__18914__auto__.call(null);
(statearr_21078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18913__auto__);

return statearr_21078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18915__auto__);
});})(c__18913__auto__))
);

return c__18913__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__21081){
var map__21088 = p__21081;
var map__21088__$1 = ((((!((map__21088 == null)))?((((map__21088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21088):map__21088);
var ed = map__21088__$1;
var formatted_exception = cljs.core.get.call(null,map__21088__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__21088__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__21088__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__21090_21094 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21091_21095 = null;
var count__21092_21096 = (0);
var i__21093_21097 = (0);
while(true){
if((i__21093_21097 < count__21092_21096)){
var msg_21098 = cljs.core._nth.call(null,chunk__21091_21095,i__21093_21097);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21098);

var G__21099 = seq__21090_21094;
var G__21100 = chunk__21091_21095;
var G__21101 = count__21092_21096;
var G__21102 = (i__21093_21097 + (1));
seq__21090_21094 = G__21099;
chunk__21091_21095 = G__21100;
count__21092_21096 = G__21101;
i__21093_21097 = G__21102;
continue;
} else {
var temp__4425__auto___21103 = cljs.core.seq.call(null,seq__21090_21094);
if(temp__4425__auto___21103){
var seq__21090_21104__$1 = temp__4425__auto___21103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21090_21104__$1)){
var c__17666__auto___21105 = cljs.core.chunk_first.call(null,seq__21090_21104__$1);
var G__21106 = cljs.core.chunk_rest.call(null,seq__21090_21104__$1);
var G__21107 = c__17666__auto___21105;
var G__21108 = cljs.core.count.call(null,c__17666__auto___21105);
var G__21109 = (0);
seq__21090_21094 = G__21106;
chunk__21091_21095 = G__21107;
count__21092_21096 = G__21108;
i__21093_21097 = G__21109;
continue;
} else {
var msg_21110 = cljs.core.first.call(null,seq__21090_21104__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21110);

var G__21111 = cljs.core.next.call(null,seq__21090_21104__$1);
var G__21112 = null;
var G__21113 = (0);
var G__21114 = (0);
seq__21090_21094 = G__21111;
chunk__21091_21095 = G__21112;
count__21092_21096 = G__21113;
i__21093_21097 = G__21114;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__21115){
var map__21118 = p__21115;
var map__21118__$1 = ((((!((map__21118 == null)))?((((map__21118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21118):map__21118);
var w = map__21118__$1;
var message = cljs.core.get.call(null,map__21118__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16851__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16851__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16851__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__21126 = cljs.core.seq.call(null,plugins);
var chunk__21127 = null;
var count__21128 = (0);
var i__21129 = (0);
while(true){
if((i__21129 < count__21128)){
var vec__21130 = cljs.core._nth.call(null,chunk__21127,i__21129);
var k = cljs.core.nth.call(null,vec__21130,(0),null);
var plugin = cljs.core.nth.call(null,vec__21130,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21132 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21126,chunk__21127,count__21128,i__21129,pl_21132,vec__21130,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_21132.call(null,msg_hist);
});})(seq__21126,chunk__21127,count__21128,i__21129,pl_21132,vec__21130,k,plugin))
);
} else {
}

var G__21133 = seq__21126;
var G__21134 = chunk__21127;
var G__21135 = count__21128;
var G__21136 = (i__21129 + (1));
seq__21126 = G__21133;
chunk__21127 = G__21134;
count__21128 = G__21135;
i__21129 = G__21136;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21126);
if(temp__4425__auto__){
var seq__21126__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21126__$1)){
var c__17666__auto__ = cljs.core.chunk_first.call(null,seq__21126__$1);
var G__21137 = cljs.core.chunk_rest.call(null,seq__21126__$1);
var G__21138 = c__17666__auto__;
var G__21139 = cljs.core.count.call(null,c__17666__auto__);
var G__21140 = (0);
seq__21126 = G__21137;
chunk__21127 = G__21138;
count__21128 = G__21139;
i__21129 = G__21140;
continue;
} else {
var vec__21131 = cljs.core.first.call(null,seq__21126__$1);
var k = cljs.core.nth.call(null,vec__21131,(0),null);
var plugin = cljs.core.nth.call(null,vec__21131,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21141 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21126,chunk__21127,count__21128,i__21129,pl_21141,vec__21131,k,plugin,seq__21126__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_21141.call(null,msg_hist);
});})(seq__21126,chunk__21127,count__21128,i__21129,pl_21141,vec__21131,k,plugin,seq__21126__$1,temp__4425__auto__))
);
} else {
}

var G__21142 = cljs.core.next.call(null,seq__21126__$1);
var G__21143 = null;
var G__21144 = (0);
var G__21145 = (0);
seq__21126 = G__21142;
chunk__21127 = G__21143;
count__21128 = G__21144;
i__21129 = G__21145;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args21146 = [];
var len__17921__auto___21149 = arguments.length;
var i__17922__auto___21150 = (0);
while(true){
if((i__17922__auto___21150 < len__17921__auto___21149)){
args21146.push((arguments[i__17922__auto___21150]));

var G__21151 = (i__17922__auto___21150 + (1));
i__17922__auto___21150 = G__21151;
continue;
} else {
}
break;
}

var G__21148 = args21146.length;
switch (G__21148) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21146.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17928__auto__ = [];
var len__17921__auto___21157 = arguments.length;
var i__17922__auto___21158 = (0);
while(true){
if((i__17922__auto___21158 < len__17921__auto___21157)){
args__17928__auto__.push((arguments[i__17922__auto___21158]));

var G__21159 = (i__17922__auto___21158 + (1));
i__17922__auto___21158 = G__21159;
continue;
} else {
}
break;
}

var argseq__17929__auto__ = ((((0) < args__17928__auto__.length))?(new cljs.core.IndexedSeq(args__17928__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17929__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__21154){
var map__21155 = p__21154;
var map__21155__$1 = ((((!((map__21155 == null)))?((((map__21155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21155):map__21155);
var opts = map__21155__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq21153){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21153));
});

//# sourceMappingURL=client.js.map