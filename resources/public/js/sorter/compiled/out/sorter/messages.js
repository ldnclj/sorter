// Compiled by ClojureScript 1.7.170 {}
goog.provide('sorter.messages');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sorter.messages.DirectLane = (function (hooks,__meta,__extmap,__hash){
this.hooks = hooks;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
sorter.messages.DirectLane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17477__auto__,k__17478__auto__){
var self__ = this;
var this__17477__auto____$1 = this;
return cljs.core._lookup.call(null,this__17477__auto____$1,k__17478__auto__,null);
});

sorter.messages.DirectLane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17479__auto__,k21165,else__17480__auto__){
var self__ = this;
var this__17479__auto____$1 = this;
var G__21167 = (((k21165 instanceof cljs.core.Keyword))?k21165.fqn:null);
switch (G__21167) {
case "hooks":
return self__.hooks;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21165,else__17480__auto__);

}
});

sorter.messages.DirectLane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17491__auto__,writer__17492__auto__,opts__17493__auto__){
var self__ = this;
var this__17491__auto____$1 = this;
var pr_pair__17494__auto__ = ((function (this__17491__auto____$1){
return (function (keyval__17495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17492__auto__,cljs.core.pr_writer,""," ","",opts__17493__auto__,keyval__17495__auto__);
});})(this__17491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17492__auto__,pr_pair__17494__auto__,"#sorter.messages.DirectLane{",", ","}",opts__17493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hooks","hooks",-413590103),self__.hooks],null))], null),self__.__extmap));
});

sorter.messages.DirectLane.prototype.cljs$core$IIterable$ = true;

sorter.messages.DirectLane.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21164){
var self__ = this;
var G__21164__$1 = this;
return (new cljs.core.RecordIter((0),G__21164__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hooks","hooks",-413590103)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

sorter.messages.DirectLane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17475__auto__){
var self__ = this;
var this__17475__auto____$1 = this;
return self__.__meta;
});

sorter.messages.DirectLane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17471__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
return (new sorter.messages.DirectLane(self__.hooks,self__.__meta,self__.__extmap,self__.__hash));
});

sorter.messages.DirectLane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

sorter.messages.DirectLane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17472__auto__){
var self__ = this;
var this__17472__auto____$1 = this;
var h__17298__auto__ = self__.__hash;
if(!((h__17298__auto__ == null))){
return h__17298__auto__;
} else {
var h__17298__auto____$1 = cljs.core.hash_imap.call(null,this__17472__auto____$1);
self__.__hash = h__17298__auto____$1;

return h__17298__auto____$1;
}
});

sorter.messages.DirectLane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17473__auto__,other__17474__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16851__auto__ = other__17474__auto__;
if(cljs.core.truth_(and__16851__auto__)){
var and__16851__auto____$1 = (this__17473__auto____$1.constructor === other__17474__auto__.constructor);
if(and__16851__auto____$1){
return cljs.core.equiv_map.call(null,this__17473__auto____$1,other__17474__auto__);
} else {
return and__16851__auto____$1;
}
} else {
return and__16851__auto__;
}
})())){
return true;
} else {
return false;
}
});

sorter.messages.DirectLane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17486__auto__,k__17487__auto__){
var self__ = this;
var this__17486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),null], null), null),k__17487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17486__auto____$1),self__.__meta),k__17487__auto__);
} else {
return (new sorter.messages.DirectLane(self__.hooks,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17487__auto__)),null));
}
});

sorter.messages.DirectLane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17484__auto__,k__17485__auto__,G__21164){
var self__ = this;
var this__17484__auto____$1 = this;
var pred__21168 = cljs.core.keyword_identical_QMARK_;
var expr__21169 = k__17485__auto__;
if(cljs.core.truth_(pred__21168.call(null,new cljs.core.Keyword(null,"hooks","hooks",-413590103),expr__21169))){
return (new sorter.messages.DirectLane(G__21164,self__.__meta,self__.__extmap,null));
} else {
return (new sorter.messages.DirectLane(self__.hooks,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17485__auto__,G__21164),null));
}
});

sorter.messages.DirectLane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17489__auto__){
var self__ = this;
var this__17489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hooks","hooks",-413590103),self__.hooks],null))], null),self__.__extmap));
});

sorter.messages.DirectLane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17476__auto__,G__21164){
var self__ = this;
var this__17476__auto____$1 = this;
return (new sorter.messages.DirectLane(self__.hooks,G__21164,self__.__extmap,self__.__hash));
});

sorter.messages.DirectLane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17482__auto__,entry__17483__auto__){
var self__ = this;
var this__17482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17483__auto__)){
return cljs.core._assoc.call(null,this__17482__auto____$1,cljs.core._nth.call(null,entry__17483__auto__,(0)),cljs.core._nth.call(null,entry__17483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17482__auto____$1,entry__17483__auto__);
}
});

sorter.messages.DirectLane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hooks","hooks",1226941424,null)], null);
});

sorter.messages.DirectLane.cljs$lang$type = true;

sorter.messages.DirectLane.cljs$lang$ctorPrSeq = (function (this__17511__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"sorter.messages/DirectLane");
});

sorter.messages.DirectLane.cljs$lang$ctorPrWriter = (function (this__17511__auto__,writer__17512__auto__){
return cljs.core._write.call(null,writer__17512__auto__,"sorter.messages/DirectLane");
});

sorter.messages.__GT_DirectLane = (function sorter$messages$__GT_DirectLane(hooks){
return (new sorter.messages.DirectLane(hooks,null,null,null));
});

sorter.messages.map__GT_DirectLane = (function sorter$messages$map__GT_DirectLane(G__21166){
return (new sorter.messages.DirectLane(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(G__21166),null,cljs.core.dissoc.call(null,G__21166,new cljs.core.Keyword(null,"hooks","hooks",-413590103)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sorter.messages.SearchHookID = (function (hook_id,__meta,__extmap,__hash){
this.hook_id = hook_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
sorter.messages.SearchHookID.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17477__auto__,k__17478__auto__){
var self__ = this;
var this__17477__auto____$1 = this;
return cljs.core._lookup.call(null,this__17477__auto____$1,k__17478__auto__,null);
});

sorter.messages.SearchHookID.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17479__auto__,k21173,else__17480__auto__){
var self__ = this;
var this__17479__auto____$1 = this;
var G__21175 = (((k21173 instanceof cljs.core.Keyword))?k21173.fqn:null);
switch (G__21175) {
case "hook-id":
return self__.hook_id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21173,else__17480__auto__);

}
});

sorter.messages.SearchHookID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17491__auto__,writer__17492__auto__,opts__17493__auto__){
var self__ = this;
var this__17491__auto____$1 = this;
var pr_pair__17494__auto__ = ((function (this__17491__auto____$1){
return (function (keyval__17495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17492__auto__,cljs.core.pr_writer,""," ","",opts__17493__auto__,keyval__17495__auto__);
});})(this__17491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17492__auto__,pr_pair__17494__auto__,"#sorter.messages.SearchHookID{",", ","}",opts__17493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hook-id","hook-id",296693909),self__.hook_id],null))], null),self__.__extmap));
});

sorter.messages.SearchHookID.prototype.cljs$core$IIterable$ = true;

sorter.messages.SearchHookID.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21172){
var self__ = this;
var G__21172__$1 = this;
return (new cljs.core.RecordIter((0),G__21172__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hook-id","hook-id",296693909)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

sorter.messages.SearchHookID.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17475__auto__){
var self__ = this;
var this__17475__auto____$1 = this;
return self__.__meta;
});

sorter.messages.SearchHookID.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17471__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
return (new sorter.messages.SearchHookID(self__.hook_id,self__.__meta,self__.__extmap,self__.__hash));
});

sorter.messages.SearchHookID.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

sorter.messages.SearchHookID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17472__auto__){
var self__ = this;
var this__17472__auto____$1 = this;
var h__17298__auto__ = self__.__hash;
if(!((h__17298__auto__ == null))){
return h__17298__auto__;
} else {
var h__17298__auto____$1 = cljs.core.hash_imap.call(null,this__17472__auto____$1);
self__.__hash = h__17298__auto____$1;

return h__17298__auto____$1;
}
});

sorter.messages.SearchHookID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17473__auto__,other__17474__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16851__auto__ = other__17474__auto__;
if(cljs.core.truth_(and__16851__auto__)){
var and__16851__auto____$1 = (this__17473__auto____$1.constructor === other__17474__auto__.constructor);
if(and__16851__auto____$1){
return cljs.core.equiv_map.call(null,this__17473__auto____$1,other__17474__auto__);
} else {
return and__16851__auto____$1;
}
} else {
return and__16851__auto__;
}
})())){
return true;
} else {
return false;
}
});

sorter.messages.SearchHookID.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17486__auto__,k__17487__auto__){
var self__ = this;
var this__17486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hook-id","hook-id",296693909),null], null), null),k__17487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17486__auto____$1),self__.__meta),k__17487__auto__);
} else {
return (new sorter.messages.SearchHookID(self__.hook_id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17487__auto__)),null));
}
});

sorter.messages.SearchHookID.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17484__auto__,k__17485__auto__,G__21172){
var self__ = this;
var this__17484__auto____$1 = this;
var pred__21176 = cljs.core.keyword_identical_QMARK_;
var expr__21177 = k__17485__auto__;
if(cljs.core.truth_(pred__21176.call(null,new cljs.core.Keyword(null,"hook-id","hook-id",296693909),expr__21177))){
return (new sorter.messages.SearchHookID(G__21172,self__.__meta,self__.__extmap,null));
} else {
return (new sorter.messages.SearchHookID(self__.hook_id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17485__auto__,G__21172),null));
}
});

sorter.messages.SearchHookID.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17489__auto__){
var self__ = this;
var this__17489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hook-id","hook-id",296693909),self__.hook_id],null))], null),self__.__extmap));
});

sorter.messages.SearchHookID.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17476__auto__,G__21172){
var self__ = this;
var this__17476__auto____$1 = this;
return (new sorter.messages.SearchHookID(self__.hook_id,G__21172,self__.__extmap,self__.__hash));
});

sorter.messages.SearchHookID.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17482__auto__,entry__17483__auto__){
var self__ = this;
var this__17482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17483__auto__)){
return cljs.core._assoc.call(null,this__17482__auto____$1,cljs.core._nth.call(null,entry__17483__auto__,(0)),cljs.core._nth.call(null,entry__17483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17482__auto____$1,entry__17483__auto__);
}
});

sorter.messages.SearchHookID.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hook-id","hook-id",1937225436,null)], null);
});

sorter.messages.SearchHookID.cljs$lang$type = true;

sorter.messages.SearchHookID.cljs$lang$ctorPrSeq = (function (this__17511__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"sorter.messages/SearchHookID");
});

sorter.messages.SearchHookID.cljs$lang$ctorPrWriter = (function (this__17511__auto__,writer__17512__auto__){
return cljs.core._write.call(null,writer__17512__auto__,"sorter.messages/SearchHookID");
});

sorter.messages.__GT_SearchHookID = (function sorter$messages$__GT_SearchHookID(hook_id){
return (new sorter.messages.SearchHookID(hook_id,null,null,null));
});

sorter.messages.map__GT_SearchHookID = (function sorter$messages$map__GT_SearchHookID(G__21174){
return (new sorter.messages.SearchHookID(new cljs.core.Keyword(null,"hook-id","hook-id",296693909).cljs$core$IFn$_invoke$arity$1(G__21174),null,cljs.core.dissoc.call(null,G__21174,new cljs.core.Keyword(null,"hook-id","hook-id",296693909)),null));
});


//# sourceMappingURL=messages.js.map