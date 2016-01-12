// Compiled by ClojureScript 1.7.170 {}
goog.provide('sorter.processing');
goog.require('cljs.core');
goog.require('petrol.core');
goog.require('sorter.messages');
sorter.messages.DirectLane.prototype.petrol$core$Message$ = true;

sorter.messages.DirectLane.prototype.petrol$core$Message$process_message$arity$2 = (function (msg,app){
var msg__$1 = this;
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"direct_lane","direct_lane",-1697165320),cljs.core.conj.call(null,new cljs.core.Keyword(null,"direct_lane","direct_lane",-1697165320).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(msg__$1)));
});

sorter.messages.SearchHookID.prototype.petrol$core$Message$ = true;

sorter.messages.SearchHookID.prototype.petrol$core$Message$process_message$arity$2 = (function (msg,app){
var msg__$1 = this;
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"hook-id","hook-id",296693909),new cljs.core.Keyword(null,"hook-id","hook-id",296693909).cljs$core$IFn$_invoke$arity$1(msg__$1));
});

//# sourceMappingURL=processing.js.map