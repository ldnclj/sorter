// Compiled by ClojureScript 1.7.170 {}
goog.provide('sorter.view');
goog.require('cljs.core');
goog.require('petrol.core');
goog.require('sorter.messages');
sorter.view.root = (function sorter$view$root(ui_channel,app){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-sm-6.col-lg-4","div.col-xs-12.col-sm-6.col-lg-4",-127886166),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Sorter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),[cljs.core.str(app)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Hook ID",new cljs.core.Keyword(null,"on-change","on-change",-732046149),petrol.core.send_value_BANG_.call(null,ui_channel,sorter.messages.__GT_SearchHookID)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),petrol.core.send_BANG_.call(null,ui_channel,sorter.messages.__GT_DirectLane.call(null,app.call(null,new cljs.core.Keyword(null,"hook-id","hook-id",296693909))))], null),"Submit"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=view.js.map