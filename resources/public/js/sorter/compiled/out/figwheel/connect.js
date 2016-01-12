// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('sorter.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21263__delegate = function (x){
if(cljs.core.truth_(sorter.core.reload_hook)){
return cljs.core.apply.call(null,sorter.core.reload_hook,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sorter.core/reload-hook' is missing");
}
};
var G__21263 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21264__i = 0, G__21264__a = new Array(arguments.length -  0);
while (G__21264__i < G__21264__a.length) {G__21264__a[G__21264__i] = arguments[G__21264__i + 0]; ++G__21264__i;}
  x = new cljs.core.IndexedSeq(G__21264__a,0);
} 
return G__21263__delegate.call(this,x);};
G__21263.cljs$lang$maxFixedArity = 0;
G__21263.cljs$lang$applyTo = (function (arglist__21265){
var x = cljs.core.seq(arglist__21265);
return G__21263__delegate(x);
});
G__21263.cljs$core$IFn$_invoke$arity$variadic = G__21263__delegate;
return G__21263;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map