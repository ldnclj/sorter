// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16863__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16863__auto__){
return or__16863__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16863__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16863__auto__)){
return or__16863__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__18992_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__18992_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__18997 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__18998 = null;
var count__18999 = (0);
var i__19000 = (0);
while(true){
if((i__19000 < count__18999)){
var n = cljs.core._nth.call(null,chunk__18998,i__19000);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__19001 = seq__18997;
var G__19002 = chunk__18998;
var G__19003 = count__18999;
var G__19004 = (i__19000 + (1));
seq__18997 = G__19001;
chunk__18998 = G__19002;
count__18999 = G__19003;
i__19000 = G__19004;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18997);
if(temp__4425__auto__){
var seq__18997__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18997__$1)){
var c__17666__auto__ = cljs.core.chunk_first.call(null,seq__18997__$1);
var G__19005 = cljs.core.chunk_rest.call(null,seq__18997__$1);
var G__19006 = c__17666__auto__;
var G__19007 = cljs.core.count.call(null,c__17666__auto__);
var G__19008 = (0);
seq__18997 = G__19005;
chunk__18998 = G__19006;
count__18999 = G__19007;
i__19000 = G__19008;
continue;
} else {
var n = cljs.core.first.call(null,seq__18997__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__19009 = cljs.core.next.call(null,seq__18997__$1);
var G__19010 = null;
var G__19011 = (0);
var G__19012 = (0);
seq__18997 = G__19009;
chunk__18998 = G__19010;
count__18999 = G__19011;
i__19000 = G__19012;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__19051_19058 = cljs.core.seq.call(null,deps);
var chunk__19052_19059 = null;
var count__19053_19060 = (0);
var i__19054_19061 = (0);
while(true){
if((i__19054_19061 < count__19053_19060)){
var dep_19062 = cljs.core._nth.call(null,chunk__19052_19059,i__19054_19061);
topo_sort_helper_STAR_.call(null,dep_19062,(depth + (1)),state);

var G__19063 = seq__19051_19058;
var G__19064 = chunk__19052_19059;
var G__19065 = count__19053_19060;
var G__19066 = (i__19054_19061 + (1));
seq__19051_19058 = G__19063;
chunk__19052_19059 = G__19064;
count__19053_19060 = G__19065;
i__19054_19061 = G__19066;
continue;
} else {
var temp__4425__auto___19067 = cljs.core.seq.call(null,seq__19051_19058);
if(temp__4425__auto___19067){
var seq__19051_19068__$1 = temp__4425__auto___19067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19051_19068__$1)){
var c__17666__auto___19069 = cljs.core.chunk_first.call(null,seq__19051_19068__$1);
var G__19070 = cljs.core.chunk_rest.call(null,seq__19051_19068__$1);
var G__19071 = c__17666__auto___19069;
var G__19072 = cljs.core.count.call(null,c__17666__auto___19069);
var G__19073 = (0);
seq__19051_19058 = G__19070;
chunk__19052_19059 = G__19071;
count__19053_19060 = G__19072;
i__19054_19061 = G__19073;
continue;
} else {
var dep_19074 = cljs.core.first.call(null,seq__19051_19068__$1);
topo_sort_helper_STAR_.call(null,dep_19074,(depth + (1)),state);

var G__19075 = cljs.core.next.call(null,seq__19051_19068__$1);
var G__19076 = null;
var G__19077 = (0);
var G__19078 = (0);
seq__19051_19058 = G__19075;
chunk__19052_19059 = G__19076;
count__19053_19060 = G__19077;
i__19054_19061 = G__19078;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__19055){
var vec__19057 = p__19055;
var x = cljs.core.nth.call(null,vec__19057,(0),null);
var xs = cljs.core.nthnext.call(null,vec__19057,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__19057,x,xs,get_deps__$1){
return (function (p1__19013_SHARP_){
return clojure.set.difference.call(null,p1__19013_SHARP_,x);
});})(vec__19057,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__19091 = cljs.core.seq.call(null,provides);
var chunk__19092 = null;
var count__19093 = (0);
var i__19094 = (0);
while(true){
if((i__19094 < count__19093)){
var prov = cljs.core._nth.call(null,chunk__19092,i__19094);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__19095_19103 = cljs.core.seq.call(null,requires);
var chunk__19096_19104 = null;
var count__19097_19105 = (0);
var i__19098_19106 = (0);
while(true){
if((i__19098_19106 < count__19097_19105)){
var req_19107 = cljs.core._nth.call(null,chunk__19096_19104,i__19098_19106);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19107,prov);

var G__19108 = seq__19095_19103;
var G__19109 = chunk__19096_19104;
var G__19110 = count__19097_19105;
var G__19111 = (i__19098_19106 + (1));
seq__19095_19103 = G__19108;
chunk__19096_19104 = G__19109;
count__19097_19105 = G__19110;
i__19098_19106 = G__19111;
continue;
} else {
var temp__4425__auto___19112 = cljs.core.seq.call(null,seq__19095_19103);
if(temp__4425__auto___19112){
var seq__19095_19113__$1 = temp__4425__auto___19112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19095_19113__$1)){
var c__17666__auto___19114 = cljs.core.chunk_first.call(null,seq__19095_19113__$1);
var G__19115 = cljs.core.chunk_rest.call(null,seq__19095_19113__$1);
var G__19116 = c__17666__auto___19114;
var G__19117 = cljs.core.count.call(null,c__17666__auto___19114);
var G__19118 = (0);
seq__19095_19103 = G__19115;
chunk__19096_19104 = G__19116;
count__19097_19105 = G__19117;
i__19098_19106 = G__19118;
continue;
} else {
var req_19119 = cljs.core.first.call(null,seq__19095_19113__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19119,prov);

var G__19120 = cljs.core.next.call(null,seq__19095_19113__$1);
var G__19121 = null;
var G__19122 = (0);
var G__19123 = (0);
seq__19095_19103 = G__19120;
chunk__19096_19104 = G__19121;
count__19097_19105 = G__19122;
i__19098_19106 = G__19123;
continue;
}
} else {
}
}
break;
}

var G__19124 = seq__19091;
var G__19125 = chunk__19092;
var G__19126 = count__19093;
var G__19127 = (i__19094 + (1));
seq__19091 = G__19124;
chunk__19092 = G__19125;
count__19093 = G__19126;
i__19094 = G__19127;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19091);
if(temp__4425__auto__){
var seq__19091__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19091__$1)){
var c__17666__auto__ = cljs.core.chunk_first.call(null,seq__19091__$1);
var G__19128 = cljs.core.chunk_rest.call(null,seq__19091__$1);
var G__19129 = c__17666__auto__;
var G__19130 = cljs.core.count.call(null,c__17666__auto__);
var G__19131 = (0);
seq__19091 = G__19128;
chunk__19092 = G__19129;
count__19093 = G__19130;
i__19094 = G__19131;
continue;
} else {
var prov = cljs.core.first.call(null,seq__19091__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__19099_19132 = cljs.core.seq.call(null,requires);
var chunk__19100_19133 = null;
var count__19101_19134 = (0);
var i__19102_19135 = (0);
while(true){
if((i__19102_19135 < count__19101_19134)){
var req_19136 = cljs.core._nth.call(null,chunk__19100_19133,i__19102_19135);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19136,prov);

var G__19137 = seq__19099_19132;
var G__19138 = chunk__19100_19133;
var G__19139 = count__19101_19134;
var G__19140 = (i__19102_19135 + (1));
seq__19099_19132 = G__19137;
chunk__19100_19133 = G__19138;
count__19101_19134 = G__19139;
i__19102_19135 = G__19140;
continue;
} else {
var temp__4425__auto___19141__$1 = cljs.core.seq.call(null,seq__19099_19132);
if(temp__4425__auto___19141__$1){
var seq__19099_19142__$1 = temp__4425__auto___19141__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19099_19142__$1)){
var c__17666__auto___19143 = cljs.core.chunk_first.call(null,seq__19099_19142__$1);
var G__19144 = cljs.core.chunk_rest.call(null,seq__19099_19142__$1);
var G__19145 = c__17666__auto___19143;
var G__19146 = cljs.core.count.call(null,c__17666__auto___19143);
var G__19147 = (0);
seq__19099_19132 = G__19144;
chunk__19100_19133 = G__19145;
count__19101_19134 = G__19146;
i__19102_19135 = G__19147;
continue;
} else {
var req_19148 = cljs.core.first.call(null,seq__19099_19142__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19148,prov);

var G__19149 = cljs.core.next.call(null,seq__19099_19142__$1);
var G__19150 = null;
var G__19151 = (0);
var G__19152 = (0);
seq__19099_19132 = G__19149;
chunk__19100_19133 = G__19150;
count__19101_19134 = G__19151;
i__19102_19135 = G__19152;
continue;
}
} else {
}
}
break;
}

var G__19153 = cljs.core.next.call(null,seq__19091__$1);
var G__19154 = null;
var G__19155 = (0);
var G__19156 = (0);
seq__19091 = G__19153;
chunk__19092 = G__19154;
count__19093 = G__19155;
i__19094 = G__19156;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__19161_19165 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__19162_19166 = null;
var count__19163_19167 = (0);
var i__19164_19168 = (0);
while(true){
if((i__19164_19168 < count__19163_19167)){
var ns_19169 = cljs.core._nth.call(null,chunk__19162_19166,i__19164_19168);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_19169);

var G__19170 = seq__19161_19165;
var G__19171 = chunk__19162_19166;
var G__19172 = count__19163_19167;
var G__19173 = (i__19164_19168 + (1));
seq__19161_19165 = G__19170;
chunk__19162_19166 = G__19171;
count__19163_19167 = G__19172;
i__19164_19168 = G__19173;
continue;
} else {
var temp__4425__auto___19174 = cljs.core.seq.call(null,seq__19161_19165);
if(temp__4425__auto___19174){
var seq__19161_19175__$1 = temp__4425__auto___19174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19161_19175__$1)){
var c__17666__auto___19176 = cljs.core.chunk_first.call(null,seq__19161_19175__$1);
var G__19177 = cljs.core.chunk_rest.call(null,seq__19161_19175__$1);
var G__19178 = c__17666__auto___19176;
var G__19179 = cljs.core.count.call(null,c__17666__auto___19176);
var G__19180 = (0);
seq__19161_19165 = G__19177;
chunk__19162_19166 = G__19178;
count__19163_19167 = G__19179;
i__19164_19168 = G__19180;
continue;
} else {
var ns_19181 = cljs.core.first.call(null,seq__19161_19175__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_19181);

var G__19182 = cljs.core.next.call(null,seq__19161_19175__$1);
var G__19183 = null;
var G__19184 = (0);
var G__19185 = (0);
seq__19161_19165 = G__19182;
chunk__19162_19166 = G__19183;
count__19163_19167 = G__19184;
i__19164_19168 = G__19185;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16863__auto__ = goog.require__;
if(cljs.core.truth_(or__16863__auto__)){
return or__16863__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__19186__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__19186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19187__i = 0, G__19187__a = new Array(arguments.length -  0);
while (G__19187__i < G__19187__a.length) {G__19187__a[G__19187__i] = arguments[G__19187__i + 0]; ++G__19187__i;}
  args = new cljs.core.IndexedSeq(G__19187__a,0);
} 
return G__19186__delegate.call(this,args);};
G__19186.cljs$lang$maxFixedArity = 0;
G__19186.cljs$lang$applyTo = (function (arglist__19188){
var args = cljs.core.seq(arglist__19188);
return G__19186__delegate(args);
});
G__19186.cljs$core$IFn$_invoke$arity$variadic = G__19186__delegate;
return G__19186;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__19190 = cljs.core._EQ_;
var expr__19191 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__19190.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__19191))){
var path_parts = ((function (pred__19190,expr__19191){
return (function (p1__19189_SHARP_){
return clojure.string.split.call(null,p1__19189_SHARP_,/[\/\\]/);
});})(pred__19190,expr__19191))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__19190,expr__19191){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e19193){if((e19193 instanceof Error)){
var e = e19193;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e19193;

}
}})());
});
;})(path_parts,sep,root,pred__19190,expr__19191))
} else {
if(cljs.core.truth_(pred__19190.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__19191))){
return ((function (pred__19190,expr__19191){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__19190,expr__19191){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__19190,expr__19191))
);

return deferred.addErrback(((function (deferred,pred__19190,expr__19191){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__19190,expr__19191))
);
});
;})(pred__19190,expr__19191))
} else {
return ((function (pred__19190,expr__19191){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__19190,expr__19191))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__19194,callback){
var map__19197 = p__19194;
var map__19197__$1 = ((((!((map__19197 == null)))?((((map__19197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19197):map__19197);
var file_msg = map__19197__$1;
var request_url = cljs.core.get.call(null,map__19197__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__19197,map__19197__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__19197,map__19197__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18913__auto__){
return (function (){
var f__18914__auto__ = (function (){var switch__18892__auto__ = ((function (c__18913__auto__){
return (function (state_19221){
var state_val_19222 = (state_19221[(1)]);
if((state_val_19222 === (7))){
var inst_19217 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
var statearr_19223_19243 = state_19221__$1;
(statearr_19223_19243[(2)] = inst_19217);

(statearr_19223_19243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (1))){
var state_19221__$1 = state_19221;
var statearr_19224_19244 = state_19221__$1;
(statearr_19224_19244[(2)] = null);

(statearr_19224_19244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (4))){
var inst_19201 = (state_19221[(7)]);
var inst_19201__$1 = (state_19221[(2)]);
var state_19221__$1 = (function (){var statearr_19225 = state_19221;
(statearr_19225[(7)] = inst_19201__$1);

return statearr_19225;
})();
if(cljs.core.truth_(inst_19201__$1)){
var statearr_19226_19245 = state_19221__$1;
(statearr_19226_19245[(1)] = (5));

} else {
var statearr_19227_19246 = state_19221__$1;
(statearr_19227_19246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (6))){
var state_19221__$1 = state_19221;
var statearr_19228_19247 = state_19221__$1;
(statearr_19228_19247[(2)] = null);

(statearr_19228_19247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (3))){
var inst_19219 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19221__$1,inst_19219);
} else {
if((state_val_19222 === (2))){
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19221__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_19222 === (11))){
var inst_19213 = (state_19221[(2)]);
var state_19221__$1 = (function (){var statearr_19229 = state_19221;
(statearr_19229[(8)] = inst_19213);

return statearr_19229;
})();
var statearr_19230_19248 = state_19221__$1;
(statearr_19230_19248[(2)] = null);

(statearr_19230_19248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (9))){
var inst_19207 = (state_19221[(9)]);
var inst_19205 = (state_19221[(10)]);
var inst_19209 = inst_19207.call(null,inst_19205);
var state_19221__$1 = state_19221;
var statearr_19231_19249 = state_19221__$1;
(statearr_19231_19249[(2)] = inst_19209);

(statearr_19231_19249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (5))){
var inst_19201 = (state_19221[(7)]);
var inst_19203 = figwheel.client.file_reloading.blocking_load.call(null,inst_19201);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19221__$1,(8),inst_19203);
} else {
if((state_val_19222 === (10))){
var inst_19205 = (state_19221[(10)]);
var inst_19211 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_19205);
var state_19221__$1 = state_19221;
var statearr_19232_19250 = state_19221__$1;
(statearr_19232_19250[(2)] = inst_19211);

(statearr_19232_19250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (8))){
var inst_19201 = (state_19221[(7)]);
var inst_19207 = (state_19221[(9)]);
var inst_19205 = (state_19221[(2)]);
var inst_19206 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_19207__$1 = cljs.core.get.call(null,inst_19206,inst_19201);
var state_19221__$1 = (function (){var statearr_19233 = state_19221;
(statearr_19233[(9)] = inst_19207__$1);

(statearr_19233[(10)] = inst_19205);

return statearr_19233;
})();
if(cljs.core.truth_(inst_19207__$1)){
var statearr_19234_19251 = state_19221__$1;
(statearr_19234_19251[(1)] = (9));

} else {
var statearr_19235_19252 = state_19221__$1;
(statearr_19235_19252[(1)] = (10));

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
});})(c__18913__auto__))
;
return ((function (switch__18892__auto__,c__18913__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18893__auto__ = null;
var figwheel$client$file_reloading$state_machine__18893__auto____0 = (function (){
var statearr_19239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19239[(0)] = figwheel$client$file_reloading$state_machine__18893__auto__);

(statearr_19239[(1)] = (1));

return statearr_19239;
});
var figwheel$client$file_reloading$state_machine__18893__auto____1 = (function (state_19221){
while(true){
var ret_value__18894__auto__ = (function (){try{while(true){
var result__18895__auto__ = switch__18892__auto__.call(null,state_19221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18895__auto__;
}
break;
}
}catch (e19240){if((e19240 instanceof Object)){
var ex__18896__auto__ = e19240;
var statearr_19241_19253 = state_19221;
(statearr_19241_19253[(5)] = ex__18896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19254 = state_19221;
state_19221 = G__19254;
continue;
} else {
return ret_value__18894__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18893__auto__ = function(state_19221){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18893__auto____1.call(this,state_19221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18893__auto____0;
figwheel$client$file_reloading$state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18893__auto____1;
return figwheel$client$file_reloading$state_machine__18893__auto__;
})()
;})(switch__18892__auto__,c__18913__auto__))
})();
var state__18915__auto__ = (function (){var statearr_19242 = f__18914__auto__.call(null);
(statearr_19242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18913__auto__);

return statearr_19242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18915__auto__);
});})(c__18913__auto__))
);

return c__18913__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__19255,callback){
var map__19258 = p__19255;
var map__19258__$1 = ((((!((map__19258 == null)))?((((map__19258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19258):map__19258);
var file_msg = map__19258__$1;
var namespace = cljs.core.get.call(null,map__19258__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__19258,map__19258__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__19258,map__19258__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__19260){
var map__19263 = p__19260;
var map__19263__$1 = ((((!((map__19263 == null)))?((((map__19263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19263):map__19263);
var file_msg = map__19263__$1;
var namespace = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16851__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16851__auto__){
var or__16863__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16863__auto__)){
return or__16863__auto__;
} else {
var or__16863__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16863__auto____$1)){
return or__16863__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16851__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__19265,callback){
var map__19268 = p__19265;
var map__19268__$1 = ((((!((map__19268 == null)))?((((map__19268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19268):map__19268);
var file_msg = map__19268__$1;
var request_url = cljs.core.get.call(null,map__19268__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__19268__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18913__auto___19356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18913__auto___19356,out){
return (function (){
var f__18914__auto__ = (function (){var switch__18892__auto__ = ((function (c__18913__auto___19356,out){
return (function (state_19338){
var state_val_19339 = (state_19338[(1)]);
if((state_val_19339 === (1))){
var inst_19316 = cljs.core.nth.call(null,files,(0),null);
var inst_19317 = cljs.core.nthnext.call(null,files,(1));
var inst_19318 = files;
var state_19338__$1 = (function (){var statearr_19340 = state_19338;
(statearr_19340[(7)] = inst_19318);

(statearr_19340[(8)] = inst_19317);

(statearr_19340[(9)] = inst_19316);

return statearr_19340;
})();
var statearr_19341_19357 = state_19338__$1;
(statearr_19341_19357[(2)] = null);

(statearr_19341_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19339 === (2))){
var inst_19321 = (state_19338[(10)]);
var inst_19318 = (state_19338[(7)]);
var inst_19321__$1 = cljs.core.nth.call(null,inst_19318,(0),null);
var inst_19322 = cljs.core.nthnext.call(null,inst_19318,(1));
var inst_19323 = (inst_19321__$1 == null);
var inst_19324 = cljs.core.not.call(null,inst_19323);
var state_19338__$1 = (function (){var statearr_19342 = state_19338;
(statearr_19342[(10)] = inst_19321__$1);

(statearr_19342[(11)] = inst_19322);

return statearr_19342;
})();
if(inst_19324){
var statearr_19343_19358 = state_19338__$1;
(statearr_19343_19358[(1)] = (4));

} else {
var statearr_19344_19359 = state_19338__$1;
(statearr_19344_19359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19339 === (3))){
var inst_19336 = (state_19338[(2)]);
var state_19338__$1 = state_19338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19338__$1,inst_19336);
} else {
if((state_val_19339 === (4))){
var inst_19321 = (state_19338[(10)]);
var inst_19326 = figwheel.client.file_reloading.reload_js_file.call(null,inst_19321);
var state_19338__$1 = state_19338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19338__$1,(7),inst_19326);
} else {
if((state_val_19339 === (5))){
var inst_19332 = cljs.core.async.close_BANG_.call(null,out);
var state_19338__$1 = state_19338;
var statearr_19345_19360 = state_19338__$1;
(statearr_19345_19360[(2)] = inst_19332);

(statearr_19345_19360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19339 === (6))){
var inst_19334 = (state_19338[(2)]);
var state_19338__$1 = state_19338;
var statearr_19346_19361 = state_19338__$1;
(statearr_19346_19361[(2)] = inst_19334);

(statearr_19346_19361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19339 === (7))){
var inst_19322 = (state_19338[(11)]);
var inst_19328 = (state_19338[(2)]);
var inst_19329 = cljs.core.async.put_BANG_.call(null,out,inst_19328);
var inst_19318 = inst_19322;
var state_19338__$1 = (function (){var statearr_19347 = state_19338;
(statearr_19347[(12)] = inst_19329);

(statearr_19347[(7)] = inst_19318);

return statearr_19347;
})();
var statearr_19348_19362 = state_19338__$1;
(statearr_19348_19362[(2)] = null);

(statearr_19348_19362[(1)] = (2));


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
});})(c__18913__auto___19356,out))
;
return ((function (switch__18892__auto__,c__18913__auto___19356,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto____0 = (function (){
var statearr_19352 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19352[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto__);

(statearr_19352[(1)] = (1));

return statearr_19352;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto____1 = (function (state_19338){
while(true){
var ret_value__18894__auto__ = (function (){try{while(true){
var result__18895__auto__ = switch__18892__auto__.call(null,state_19338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18895__auto__;
}
break;
}
}catch (e19353){if((e19353 instanceof Object)){
var ex__18896__auto__ = e19353;
var statearr_19354_19363 = state_19338;
(statearr_19354_19363[(5)] = ex__18896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19364 = state_19338;
state_19338 = G__19364;
continue;
} else {
return ret_value__18894__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto__ = function(state_19338){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto____1.call(this,state_19338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18893__auto__;
})()
;})(switch__18892__auto__,c__18913__auto___19356,out))
})();
var state__18915__auto__ = (function (){var statearr_19355 = f__18914__auto__.call(null);
(statearr_19355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18913__auto___19356);

return statearr_19355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18915__auto__);
});})(c__18913__auto___19356,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__19365,opts){
var map__19369 = p__19365;
var map__19369__$1 = ((((!((map__19369 == null)))?((((map__19369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19369):map__19369);
var eval_body__$1 = cljs.core.get.call(null,map__19369__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__19369__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16851__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16851__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16851__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e19371){var e = e19371;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__19372_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__19372_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__19377){
var vec__19378 = p__19377;
var k = cljs.core.nth.call(null,vec__19378,(0),null);
var v = cljs.core.nth.call(null,vec__19378,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__19379){
var vec__19380 = p__19379;
var k = cljs.core.nth.call(null,vec__19380,(0),null);
var v = cljs.core.nth.call(null,vec__19380,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__19384,p__19385){
var map__19632 = p__19384;
var map__19632__$1 = ((((!((map__19632 == null)))?((((map__19632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19632):map__19632);
var opts = map__19632__$1;
var before_jsload = cljs.core.get.call(null,map__19632__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__19632__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__19632__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__19633 = p__19385;
var map__19633__$1 = ((((!((map__19633 == null)))?((((map__19633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19633):map__19633);
var msg = map__19633__$1;
var files = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18914__auto__ = (function (){var switch__18892__auto__ = ((function (c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_19786){
var state_val_19787 = (state_19786[(1)]);
if((state_val_19787 === (7))){
var inst_19649 = (state_19786[(7)]);
var inst_19650 = (state_19786[(8)]);
var inst_19648 = (state_19786[(9)]);
var inst_19647 = (state_19786[(10)]);
var inst_19655 = cljs.core._nth.call(null,inst_19648,inst_19650);
var inst_19656 = figwheel.client.file_reloading.eval_body.call(null,inst_19655,opts);
var inst_19657 = (inst_19650 + (1));
var tmp19788 = inst_19649;
var tmp19789 = inst_19648;
var tmp19790 = inst_19647;
var inst_19647__$1 = tmp19790;
var inst_19648__$1 = tmp19789;
var inst_19649__$1 = tmp19788;
var inst_19650__$1 = inst_19657;
var state_19786__$1 = (function (){var statearr_19791 = state_19786;
(statearr_19791[(11)] = inst_19656);

(statearr_19791[(7)] = inst_19649__$1);

(statearr_19791[(8)] = inst_19650__$1);

(statearr_19791[(9)] = inst_19648__$1);

(statearr_19791[(10)] = inst_19647__$1);

return statearr_19791;
})();
var statearr_19792_19878 = state_19786__$1;
(statearr_19792_19878[(2)] = null);

(statearr_19792_19878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (20))){
var inst_19690 = (state_19786[(12)]);
var inst_19698 = figwheel.client.file_reloading.sort_files.call(null,inst_19690);
var state_19786__$1 = state_19786;
var statearr_19793_19879 = state_19786__$1;
(statearr_19793_19879[(2)] = inst_19698);

(statearr_19793_19879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (27))){
var state_19786__$1 = state_19786;
var statearr_19794_19880 = state_19786__$1;
(statearr_19794_19880[(2)] = null);

(statearr_19794_19880[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (1))){
var inst_19639 = (state_19786[(13)]);
var inst_19636 = before_jsload.call(null,files);
var inst_19637 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_19638 = (function (){return ((function (inst_19639,inst_19636,inst_19637,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19381_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19381_SHARP_);
});
;})(inst_19639,inst_19636,inst_19637,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19639__$1 = cljs.core.filter.call(null,inst_19638,files);
var inst_19640 = cljs.core.not_empty.call(null,inst_19639__$1);
var state_19786__$1 = (function (){var statearr_19795 = state_19786;
(statearr_19795[(14)] = inst_19636);

(statearr_19795[(13)] = inst_19639__$1);

(statearr_19795[(15)] = inst_19637);

return statearr_19795;
})();
if(cljs.core.truth_(inst_19640)){
var statearr_19796_19881 = state_19786__$1;
(statearr_19796_19881[(1)] = (2));

} else {
var statearr_19797_19882 = state_19786__$1;
(statearr_19797_19882[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (24))){
var state_19786__$1 = state_19786;
var statearr_19798_19883 = state_19786__$1;
(statearr_19798_19883[(2)] = null);

(statearr_19798_19883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (39))){
var inst_19740 = (state_19786[(16)]);
var state_19786__$1 = state_19786;
var statearr_19799_19884 = state_19786__$1;
(statearr_19799_19884[(2)] = inst_19740);

(statearr_19799_19884[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (46))){
var inst_19781 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19800_19885 = state_19786__$1;
(statearr_19800_19885[(2)] = inst_19781);

(statearr_19800_19885[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (4))){
var inst_19684 = (state_19786[(2)]);
var inst_19685 = cljs.core.List.EMPTY;
var inst_19686 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_19685);
var inst_19687 = (function (){return ((function (inst_19684,inst_19685,inst_19686,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19382_SHARP_){
var and__16851__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__19382_SHARP_);
if(cljs.core.truth_(and__16851__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19382_SHARP_));
} else {
return and__16851__auto__;
}
});
;})(inst_19684,inst_19685,inst_19686,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19688 = cljs.core.filter.call(null,inst_19687,files);
var inst_19689 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_19690 = cljs.core.concat.call(null,inst_19688,inst_19689);
var state_19786__$1 = (function (){var statearr_19801 = state_19786;
(statearr_19801[(17)] = inst_19684);

(statearr_19801[(18)] = inst_19686);

(statearr_19801[(12)] = inst_19690);

return statearr_19801;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_19802_19886 = state_19786__$1;
(statearr_19802_19886[(1)] = (16));

} else {
var statearr_19803_19887 = state_19786__$1;
(statearr_19803_19887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (15))){
var inst_19674 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19804_19888 = state_19786__$1;
(statearr_19804_19888[(2)] = inst_19674);

(statearr_19804_19888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (21))){
var inst_19700 = (state_19786[(19)]);
var inst_19700__$1 = (state_19786[(2)]);
var inst_19701 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_19700__$1);
var state_19786__$1 = (function (){var statearr_19805 = state_19786;
(statearr_19805[(19)] = inst_19700__$1);

return statearr_19805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19786__$1,(22),inst_19701);
} else {
if((state_val_19787 === (31))){
var inst_19784 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19786__$1,inst_19784);
} else {
if((state_val_19787 === (32))){
var inst_19740 = (state_19786[(16)]);
var inst_19745 = inst_19740.cljs$lang$protocol_mask$partition0$;
var inst_19746 = (inst_19745 & (64));
var inst_19747 = inst_19740.cljs$core$ISeq$;
var inst_19748 = (inst_19746) || (inst_19747);
var state_19786__$1 = state_19786;
if(cljs.core.truth_(inst_19748)){
var statearr_19806_19889 = state_19786__$1;
(statearr_19806_19889[(1)] = (35));

} else {
var statearr_19807_19890 = state_19786__$1;
(statearr_19807_19890[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (40))){
var inst_19761 = (state_19786[(20)]);
var inst_19760 = (state_19786[(2)]);
var inst_19761__$1 = cljs.core.get.call(null,inst_19760,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_19762 = cljs.core.get.call(null,inst_19760,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_19763 = cljs.core.not_empty.call(null,inst_19761__$1);
var state_19786__$1 = (function (){var statearr_19808 = state_19786;
(statearr_19808[(20)] = inst_19761__$1);

(statearr_19808[(21)] = inst_19762);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19763)){
var statearr_19809_19891 = state_19786__$1;
(statearr_19809_19891[(1)] = (41));

} else {
var statearr_19810_19892 = state_19786__$1;
(statearr_19810_19892[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (33))){
var state_19786__$1 = state_19786;
var statearr_19811_19893 = state_19786__$1;
(statearr_19811_19893[(2)] = false);

(statearr_19811_19893[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (13))){
var inst_19660 = (state_19786[(22)]);
var inst_19664 = cljs.core.chunk_first.call(null,inst_19660);
var inst_19665 = cljs.core.chunk_rest.call(null,inst_19660);
var inst_19666 = cljs.core.count.call(null,inst_19664);
var inst_19647 = inst_19665;
var inst_19648 = inst_19664;
var inst_19649 = inst_19666;
var inst_19650 = (0);
var state_19786__$1 = (function (){var statearr_19812 = state_19786;
(statearr_19812[(7)] = inst_19649);

(statearr_19812[(8)] = inst_19650);

(statearr_19812[(9)] = inst_19648);

(statearr_19812[(10)] = inst_19647);

return statearr_19812;
})();
var statearr_19813_19894 = state_19786__$1;
(statearr_19813_19894[(2)] = null);

(statearr_19813_19894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (22))){
var inst_19703 = (state_19786[(23)]);
var inst_19704 = (state_19786[(24)]);
var inst_19700 = (state_19786[(19)]);
var inst_19708 = (state_19786[(25)]);
var inst_19703__$1 = (state_19786[(2)]);
var inst_19704__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_19703__$1);
var inst_19705 = (function (){var all_files = inst_19700;
var res_SINGLEQUOTE_ = inst_19703__$1;
var res = inst_19704__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_19703,inst_19704,inst_19700,inst_19708,inst_19703__$1,inst_19704__$1,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19383_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__19383_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_19703,inst_19704,inst_19700,inst_19708,inst_19703__$1,inst_19704__$1,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19706 = cljs.core.filter.call(null,inst_19705,inst_19703__$1);
var inst_19707 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_19708__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_19707);
var inst_19709 = cljs.core.not_empty.call(null,inst_19708__$1);
var state_19786__$1 = (function (){var statearr_19814 = state_19786;
(statearr_19814[(23)] = inst_19703__$1);

(statearr_19814[(24)] = inst_19704__$1);

(statearr_19814[(26)] = inst_19706);

(statearr_19814[(25)] = inst_19708__$1);

return statearr_19814;
})();
if(cljs.core.truth_(inst_19709)){
var statearr_19815_19895 = state_19786__$1;
(statearr_19815_19895[(1)] = (23));

} else {
var statearr_19816_19896 = state_19786__$1;
(statearr_19816_19896[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (36))){
var state_19786__$1 = state_19786;
var statearr_19817_19897 = state_19786__$1;
(statearr_19817_19897[(2)] = false);

(statearr_19817_19897[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (41))){
var inst_19761 = (state_19786[(20)]);
var inst_19765 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_19766 = cljs.core.map.call(null,inst_19765,inst_19761);
var inst_19767 = cljs.core.pr_str.call(null,inst_19766);
var inst_19768 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_19767)].join('');
var inst_19769 = figwheel.client.utils.log.call(null,inst_19768);
var state_19786__$1 = state_19786;
var statearr_19818_19898 = state_19786__$1;
(statearr_19818_19898[(2)] = inst_19769);

(statearr_19818_19898[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (43))){
var inst_19762 = (state_19786[(21)]);
var inst_19772 = (state_19786[(2)]);
var inst_19773 = cljs.core.not_empty.call(null,inst_19762);
var state_19786__$1 = (function (){var statearr_19819 = state_19786;
(statearr_19819[(27)] = inst_19772);

return statearr_19819;
})();
if(cljs.core.truth_(inst_19773)){
var statearr_19820_19899 = state_19786__$1;
(statearr_19820_19899[(1)] = (44));

} else {
var statearr_19821_19900 = state_19786__$1;
(statearr_19821_19900[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (29))){
var inst_19703 = (state_19786[(23)]);
var inst_19740 = (state_19786[(16)]);
var inst_19704 = (state_19786[(24)]);
var inst_19700 = (state_19786[(19)]);
var inst_19706 = (state_19786[(26)]);
var inst_19708 = (state_19786[(25)]);
var inst_19736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_19739 = (function (){var all_files = inst_19700;
var res_SINGLEQUOTE_ = inst_19703;
var res = inst_19704;
var files_not_loaded = inst_19706;
var dependencies_that_loaded = inst_19708;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19740,inst_19704,inst_19700,inst_19706,inst_19708,inst_19736,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__19738){
var map__19822 = p__19738;
var map__19822__$1 = ((((!((map__19822 == null)))?((((map__19822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19822):map__19822);
var namespace = cljs.core.get.call(null,map__19822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19740,inst_19704,inst_19700,inst_19706,inst_19708,inst_19736,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19740__$1 = cljs.core.group_by.call(null,inst_19739,inst_19706);
var inst_19742 = (inst_19740__$1 == null);
var inst_19743 = cljs.core.not.call(null,inst_19742);
var state_19786__$1 = (function (){var statearr_19824 = state_19786;
(statearr_19824[(16)] = inst_19740__$1);

(statearr_19824[(28)] = inst_19736);

return statearr_19824;
})();
if(inst_19743){
var statearr_19825_19901 = state_19786__$1;
(statearr_19825_19901[(1)] = (32));

} else {
var statearr_19826_19902 = state_19786__$1;
(statearr_19826_19902[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (44))){
var inst_19762 = (state_19786[(21)]);
var inst_19775 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19762);
var inst_19776 = cljs.core.pr_str.call(null,inst_19775);
var inst_19777 = [cljs.core.str("not required: "),cljs.core.str(inst_19776)].join('');
var inst_19778 = figwheel.client.utils.log.call(null,inst_19777);
var state_19786__$1 = state_19786;
var statearr_19827_19903 = state_19786__$1;
(statearr_19827_19903[(2)] = inst_19778);

(statearr_19827_19903[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (6))){
var inst_19681 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19828_19904 = state_19786__$1;
(statearr_19828_19904[(2)] = inst_19681);

(statearr_19828_19904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (28))){
var inst_19706 = (state_19786[(26)]);
var inst_19733 = (state_19786[(2)]);
var inst_19734 = cljs.core.not_empty.call(null,inst_19706);
var state_19786__$1 = (function (){var statearr_19829 = state_19786;
(statearr_19829[(29)] = inst_19733);

return statearr_19829;
})();
if(cljs.core.truth_(inst_19734)){
var statearr_19830_19905 = state_19786__$1;
(statearr_19830_19905[(1)] = (29));

} else {
var statearr_19831_19906 = state_19786__$1;
(statearr_19831_19906[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (25))){
var inst_19704 = (state_19786[(24)]);
var inst_19720 = (state_19786[(2)]);
var inst_19721 = cljs.core.not_empty.call(null,inst_19704);
var state_19786__$1 = (function (){var statearr_19832 = state_19786;
(statearr_19832[(30)] = inst_19720);

return statearr_19832;
})();
if(cljs.core.truth_(inst_19721)){
var statearr_19833_19907 = state_19786__$1;
(statearr_19833_19907[(1)] = (26));

} else {
var statearr_19834_19908 = state_19786__$1;
(statearr_19834_19908[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (34))){
var inst_19755 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
if(cljs.core.truth_(inst_19755)){
var statearr_19835_19909 = state_19786__$1;
(statearr_19835_19909[(1)] = (38));

} else {
var statearr_19836_19910 = state_19786__$1;
(statearr_19836_19910[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (17))){
var state_19786__$1 = state_19786;
var statearr_19837_19911 = state_19786__$1;
(statearr_19837_19911[(2)] = recompile_dependents);

(statearr_19837_19911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (3))){
var state_19786__$1 = state_19786;
var statearr_19838_19912 = state_19786__$1;
(statearr_19838_19912[(2)] = null);

(statearr_19838_19912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (12))){
var inst_19677 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19839_19913 = state_19786__$1;
(statearr_19839_19913[(2)] = inst_19677);

(statearr_19839_19913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (2))){
var inst_19639 = (state_19786[(13)]);
var inst_19646 = cljs.core.seq.call(null,inst_19639);
var inst_19647 = inst_19646;
var inst_19648 = null;
var inst_19649 = (0);
var inst_19650 = (0);
var state_19786__$1 = (function (){var statearr_19840 = state_19786;
(statearr_19840[(7)] = inst_19649);

(statearr_19840[(8)] = inst_19650);

(statearr_19840[(9)] = inst_19648);

(statearr_19840[(10)] = inst_19647);

return statearr_19840;
})();
var statearr_19841_19914 = state_19786__$1;
(statearr_19841_19914[(2)] = null);

(statearr_19841_19914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (23))){
var inst_19703 = (state_19786[(23)]);
var inst_19704 = (state_19786[(24)]);
var inst_19700 = (state_19786[(19)]);
var inst_19706 = (state_19786[(26)]);
var inst_19708 = (state_19786[(25)]);
var inst_19711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_19713 = (function (){var all_files = inst_19700;
var res_SINGLEQUOTE_ = inst_19703;
var res = inst_19704;
var files_not_loaded = inst_19706;
var dependencies_that_loaded = inst_19708;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19704,inst_19700,inst_19706,inst_19708,inst_19711,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__19712){
var map__19842 = p__19712;
var map__19842__$1 = ((((!((map__19842 == null)))?((((map__19842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19842):map__19842);
var request_url = cljs.core.get.call(null,map__19842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19704,inst_19700,inst_19706,inst_19708,inst_19711,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19714 = cljs.core.reverse.call(null,inst_19708);
var inst_19715 = cljs.core.map.call(null,inst_19713,inst_19714);
var inst_19716 = cljs.core.pr_str.call(null,inst_19715);
var inst_19717 = figwheel.client.utils.log.call(null,inst_19716);
var state_19786__$1 = (function (){var statearr_19844 = state_19786;
(statearr_19844[(31)] = inst_19711);

return statearr_19844;
})();
var statearr_19845_19915 = state_19786__$1;
(statearr_19845_19915[(2)] = inst_19717);

(statearr_19845_19915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (35))){
var state_19786__$1 = state_19786;
var statearr_19846_19916 = state_19786__$1;
(statearr_19846_19916[(2)] = true);

(statearr_19846_19916[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (19))){
var inst_19690 = (state_19786[(12)]);
var inst_19696 = figwheel.client.file_reloading.expand_files.call(null,inst_19690);
var state_19786__$1 = state_19786;
var statearr_19847_19917 = state_19786__$1;
(statearr_19847_19917[(2)] = inst_19696);

(statearr_19847_19917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (11))){
var state_19786__$1 = state_19786;
var statearr_19848_19918 = state_19786__$1;
(statearr_19848_19918[(2)] = null);

(statearr_19848_19918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (9))){
var inst_19679 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19849_19919 = state_19786__$1;
(statearr_19849_19919[(2)] = inst_19679);

(statearr_19849_19919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (5))){
var inst_19649 = (state_19786[(7)]);
var inst_19650 = (state_19786[(8)]);
var inst_19652 = (inst_19650 < inst_19649);
var inst_19653 = inst_19652;
var state_19786__$1 = state_19786;
if(cljs.core.truth_(inst_19653)){
var statearr_19850_19920 = state_19786__$1;
(statearr_19850_19920[(1)] = (7));

} else {
var statearr_19851_19921 = state_19786__$1;
(statearr_19851_19921[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (14))){
var inst_19660 = (state_19786[(22)]);
var inst_19669 = cljs.core.first.call(null,inst_19660);
var inst_19670 = figwheel.client.file_reloading.eval_body.call(null,inst_19669,opts);
var inst_19671 = cljs.core.next.call(null,inst_19660);
var inst_19647 = inst_19671;
var inst_19648 = null;
var inst_19649 = (0);
var inst_19650 = (0);
var state_19786__$1 = (function (){var statearr_19852 = state_19786;
(statearr_19852[(7)] = inst_19649);

(statearr_19852[(8)] = inst_19650);

(statearr_19852[(32)] = inst_19670);

(statearr_19852[(9)] = inst_19648);

(statearr_19852[(10)] = inst_19647);

return statearr_19852;
})();
var statearr_19853_19922 = state_19786__$1;
(statearr_19853_19922[(2)] = null);

(statearr_19853_19922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (45))){
var state_19786__$1 = state_19786;
var statearr_19854_19923 = state_19786__$1;
(statearr_19854_19923[(2)] = null);

(statearr_19854_19923[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (26))){
var inst_19703 = (state_19786[(23)]);
var inst_19704 = (state_19786[(24)]);
var inst_19700 = (state_19786[(19)]);
var inst_19706 = (state_19786[(26)]);
var inst_19708 = (state_19786[(25)]);
var inst_19723 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_19725 = (function (){var all_files = inst_19700;
var res_SINGLEQUOTE_ = inst_19703;
var res = inst_19704;
var files_not_loaded = inst_19706;
var dependencies_that_loaded = inst_19708;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19704,inst_19700,inst_19706,inst_19708,inst_19723,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__19724){
var map__19855 = p__19724;
var map__19855__$1 = ((((!((map__19855 == null)))?((((map__19855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19855):map__19855);
var namespace = cljs.core.get.call(null,map__19855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__19855__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19704,inst_19700,inst_19706,inst_19708,inst_19723,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19726 = cljs.core.map.call(null,inst_19725,inst_19704);
var inst_19727 = cljs.core.pr_str.call(null,inst_19726);
var inst_19728 = figwheel.client.utils.log.call(null,inst_19727);
var inst_19729 = (function (){var all_files = inst_19700;
var res_SINGLEQUOTE_ = inst_19703;
var res = inst_19704;
var files_not_loaded = inst_19706;
var dependencies_that_loaded = inst_19708;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19704,inst_19700,inst_19706,inst_19708,inst_19723,inst_19725,inst_19726,inst_19727,inst_19728,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_19703,inst_19704,inst_19700,inst_19706,inst_19708,inst_19723,inst_19725,inst_19726,inst_19727,inst_19728,state_val_19787,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_19730 = setTimeout(inst_19729,(10));
var state_19786__$1 = (function (){var statearr_19857 = state_19786;
(statearr_19857[(33)] = inst_19728);

(statearr_19857[(34)] = inst_19723);

return statearr_19857;
})();
var statearr_19858_19924 = state_19786__$1;
(statearr_19858_19924[(2)] = inst_19730);

(statearr_19858_19924[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (16))){
var state_19786__$1 = state_19786;
var statearr_19859_19925 = state_19786__$1;
(statearr_19859_19925[(2)] = reload_dependents);

(statearr_19859_19925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (38))){
var inst_19740 = (state_19786[(16)]);
var inst_19757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19740);
var state_19786__$1 = state_19786;
var statearr_19860_19926 = state_19786__$1;
(statearr_19860_19926[(2)] = inst_19757);

(statearr_19860_19926[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (30))){
var state_19786__$1 = state_19786;
var statearr_19861_19927 = state_19786__$1;
(statearr_19861_19927[(2)] = null);

(statearr_19861_19927[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (10))){
var inst_19660 = (state_19786[(22)]);
var inst_19662 = cljs.core.chunked_seq_QMARK_.call(null,inst_19660);
var state_19786__$1 = state_19786;
if(inst_19662){
var statearr_19862_19928 = state_19786__$1;
(statearr_19862_19928[(1)] = (13));

} else {
var statearr_19863_19929 = state_19786__$1;
(statearr_19863_19929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (18))){
var inst_19694 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
if(cljs.core.truth_(inst_19694)){
var statearr_19864_19930 = state_19786__$1;
(statearr_19864_19930[(1)] = (19));

} else {
var statearr_19865_19931 = state_19786__$1;
(statearr_19865_19931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (42))){
var state_19786__$1 = state_19786;
var statearr_19866_19932 = state_19786__$1;
(statearr_19866_19932[(2)] = null);

(statearr_19866_19932[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (37))){
var inst_19752 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19867_19933 = state_19786__$1;
(statearr_19867_19933[(2)] = inst_19752);

(statearr_19867_19933[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19787 === (8))){
var inst_19660 = (state_19786[(22)]);
var inst_19647 = (state_19786[(10)]);
var inst_19660__$1 = cljs.core.seq.call(null,inst_19647);
var state_19786__$1 = (function (){var statearr_19868 = state_19786;
(statearr_19868[(22)] = inst_19660__$1);

return statearr_19868;
})();
if(inst_19660__$1){
var statearr_19869_19934 = state_19786__$1;
(statearr_19869_19934[(1)] = (10));

} else {
var statearr_19870_19935 = state_19786__$1;
(statearr_19870_19935[(1)] = (11));

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
});})(c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18892__auto__,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto____0 = (function (){
var statearr_19874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19874[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto__);

(statearr_19874[(1)] = (1));

return statearr_19874;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto____1 = (function (state_19786){
while(true){
var ret_value__18894__auto__ = (function (){try{while(true){
var result__18895__auto__ = switch__18892__auto__.call(null,state_19786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18895__auto__;
}
break;
}
}catch (e19875){if((e19875 instanceof Object)){
var ex__18896__auto__ = e19875;
var statearr_19876_19936 = state_19786;
(statearr_19876_19936[(5)] = ex__18896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19937 = state_19786;
state_19786 = G__19937;
continue;
} else {
return ret_value__18894__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto__ = function(state_19786){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto____1.call(this,state_19786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18893__auto__;
})()
;})(switch__18892__auto__,c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18915__auto__ = (function (){var statearr_19877 = f__18914__auto__.call(null);
(statearr_19877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18913__auto__);

return statearr_19877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18915__auto__);
});})(c__18913__auto__,map__19632,map__19632__$1,opts,before_jsload,on_jsload,reload_dependents,map__19633,map__19633__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18913__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__19940,link){
var map__19943 = p__19940;
var map__19943__$1 = ((((!((map__19943 == null)))?((((map__19943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19943):map__19943);
var file = cljs.core.get.call(null,map__19943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__19943,map__19943__$1,file){
return (function (p1__19938_SHARP_,p2__19939_SHARP_){
if(cljs.core._EQ_.call(null,p1__19938_SHARP_,p2__19939_SHARP_)){
return p1__19938_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__19943,map__19943__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__19949){
var map__19950 = p__19949;
var map__19950__$1 = ((((!((map__19950 == null)))?((((map__19950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19950):map__19950);
var match_length = cljs.core.get.call(null,map__19950__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__19950__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__19945_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__19945_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args19952 = [];
var len__17921__auto___19955 = arguments.length;
var i__17922__auto___19956 = (0);
while(true){
if((i__17922__auto___19956 < len__17921__auto___19955)){
args19952.push((arguments[i__17922__auto___19956]));

var G__19957 = (i__17922__auto___19956 + (1));
i__17922__auto___19956 = G__19957;
continue;
} else {
}
break;
}

var G__19954 = args19952.length;
switch (G__19954) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19952.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__19959_SHARP_,p2__19960_SHARP_){
return cljs.core.assoc.call(null,p1__19959_SHARP_,cljs.core.get.call(null,p2__19960_SHARP_,key),p2__19960_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__19961){
var map__19964 = p__19961;
var map__19964__$1 = ((((!((map__19964 == null)))?((((map__19964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19964):map__19964);
var f_data = map__19964__$1;
var file = cljs.core.get.call(null,map__19964__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__19966,files_msg){
var map__19973 = p__19966;
var map__19973__$1 = ((((!((map__19973 == null)))?((((map__19973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19973):map__19973);
var opts = map__19973__$1;
var on_cssload = cljs.core.get.call(null,map__19973__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__19975_19979 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__19976_19980 = null;
var count__19977_19981 = (0);
var i__19978_19982 = (0);
while(true){
if((i__19978_19982 < count__19977_19981)){
var f_19983 = cljs.core._nth.call(null,chunk__19976_19980,i__19978_19982);
figwheel.client.file_reloading.reload_css_file.call(null,f_19983);

var G__19984 = seq__19975_19979;
var G__19985 = chunk__19976_19980;
var G__19986 = count__19977_19981;
var G__19987 = (i__19978_19982 + (1));
seq__19975_19979 = G__19984;
chunk__19976_19980 = G__19985;
count__19977_19981 = G__19986;
i__19978_19982 = G__19987;
continue;
} else {
var temp__4425__auto___19988 = cljs.core.seq.call(null,seq__19975_19979);
if(temp__4425__auto___19988){
var seq__19975_19989__$1 = temp__4425__auto___19988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19975_19989__$1)){
var c__17666__auto___19990 = cljs.core.chunk_first.call(null,seq__19975_19989__$1);
var G__19991 = cljs.core.chunk_rest.call(null,seq__19975_19989__$1);
var G__19992 = c__17666__auto___19990;
var G__19993 = cljs.core.count.call(null,c__17666__auto___19990);
var G__19994 = (0);
seq__19975_19979 = G__19991;
chunk__19976_19980 = G__19992;
count__19977_19981 = G__19993;
i__19978_19982 = G__19994;
continue;
} else {
var f_19995 = cljs.core.first.call(null,seq__19975_19989__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_19995);

var G__19996 = cljs.core.next.call(null,seq__19975_19989__$1);
var G__19997 = null;
var G__19998 = (0);
var G__19999 = (0);
seq__19975_19979 = G__19996;
chunk__19976_19980 = G__19997;
count__19977_19981 = G__19998;
i__19978_19982 = G__19999;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__19973,map__19973__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__19973,map__19973__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map