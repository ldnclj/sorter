// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20016_20030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20017_20031 = null;
var count__20018_20032 = (0);
var i__20019_20033 = (0);
while(true){
if((i__20019_20033 < count__20018_20032)){
var f_20034 = cljs.core._nth.call(null,chunk__20017_20031,i__20019_20033);
cljs.core.println.call(null,"  ",f_20034);

var G__20035 = seq__20016_20030;
var G__20036 = chunk__20017_20031;
var G__20037 = count__20018_20032;
var G__20038 = (i__20019_20033 + (1));
seq__20016_20030 = G__20035;
chunk__20017_20031 = G__20036;
count__20018_20032 = G__20037;
i__20019_20033 = G__20038;
continue;
} else {
var temp__4425__auto___20039 = cljs.core.seq.call(null,seq__20016_20030);
if(temp__4425__auto___20039){
var seq__20016_20040__$1 = temp__4425__auto___20039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20016_20040__$1)){
var c__17666__auto___20041 = cljs.core.chunk_first.call(null,seq__20016_20040__$1);
var G__20042 = cljs.core.chunk_rest.call(null,seq__20016_20040__$1);
var G__20043 = c__17666__auto___20041;
var G__20044 = cljs.core.count.call(null,c__17666__auto___20041);
var G__20045 = (0);
seq__20016_20030 = G__20042;
chunk__20017_20031 = G__20043;
count__20018_20032 = G__20044;
i__20019_20033 = G__20045;
continue;
} else {
var f_20046 = cljs.core.first.call(null,seq__20016_20040__$1);
cljs.core.println.call(null,"  ",f_20046);

var G__20047 = cljs.core.next.call(null,seq__20016_20040__$1);
var G__20048 = null;
var G__20049 = (0);
var G__20050 = (0);
seq__20016_20030 = G__20047;
chunk__20017_20031 = G__20048;
count__20018_20032 = G__20049;
i__20019_20033 = G__20050;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20051 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16863__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16863__auto__)){
return or__16863__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20051);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20051)))?cljs.core.second.call(null,arglists_20051):arglists_20051));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20021 = null;
var count__20022 = (0);
var i__20023 = (0);
while(true){
if((i__20023 < count__20022)){
var vec__20024 = cljs.core._nth.call(null,chunk__20021,i__20023);
var name = cljs.core.nth.call(null,vec__20024,(0),null);
var map__20025 = cljs.core.nth.call(null,vec__20024,(1),null);
var map__20025__$1 = ((((!((map__20025 == null)))?((((map__20025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20025):map__20025);
var doc = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20052 = seq__20020;
var G__20053 = chunk__20021;
var G__20054 = count__20022;
var G__20055 = (i__20023 + (1));
seq__20020 = G__20052;
chunk__20021 = G__20053;
count__20022 = G__20054;
i__20023 = G__20055;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20020);
if(temp__4425__auto__){
var seq__20020__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20020__$1)){
var c__17666__auto__ = cljs.core.chunk_first.call(null,seq__20020__$1);
var G__20056 = cljs.core.chunk_rest.call(null,seq__20020__$1);
var G__20057 = c__17666__auto__;
var G__20058 = cljs.core.count.call(null,c__17666__auto__);
var G__20059 = (0);
seq__20020 = G__20056;
chunk__20021 = G__20057;
count__20022 = G__20058;
i__20023 = G__20059;
continue;
} else {
var vec__20027 = cljs.core.first.call(null,seq__20020__$1);
var name = cljs.core.nth.call(null,vec__20027,(0),null);
var map__20028 = cljs.core.nth.call(null,vec__20027,(1),null);
var map__20028__$1 = ((((!((map__20028 == null)))?((((map__20028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20028):map__20028);
var doc = cljs.core.get.call(null,map__20028__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20028__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20060 = cljs.core.next.call(null,seq__20020__$1);
var G__20061 = null;
var G__20062 = (0);
var G__20063 = (0);
seq__20020 = G__20060;
chunk__20021 = G__20061;
count__20022 = G__20062;
i__20023 = G__20063;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map