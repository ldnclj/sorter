// Compiled by ClojureScript 1.7.170 {}
goog.provide('sorter.core');
goog.require('cljs.core');
goog.require('petrol.core');
goog.require('reagent.core');
goog.require('sorter.processing');
goog.require('sorter.view');
sorter.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"singulation","singulation",-219382706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KH1001","KH1002"], null),new cljs.core.Keyword(null,"direct_lane","direct_lane",-1697165320),cljs.core.PersistentVector.EMPTY], null);
if(typeof sorter.core._BANG_app !== 'undefined'){
} else {
sorter.core._BANG_app = reagent.core.atom.call(null,sorter.core.initial_state);
}
sorter.core.reload_hook = (function sorter$core$reload_hook(){
return cljs.core.swap_BANG_.call(null,sorter.core._BANG_app,cljs.core.identity);
});
sorter.core.render_fn = (function sorter$core$render_fn(ui_channel,app){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sorter.view.root,ui_channel,app], null),document.body);
});
sorter.core.main = (function sorter$core$main(){
cljs.core.enable_console_print_BANG_.call(null);

return petrol.core.start_message_loop_BANG_.call(null,sorter.core._BANG_app,sorter.core.render_fn);
});
goog.exportSymbol('sorter.core.main', sorter.core.main);

//# sourceMappingURL=core.js.map