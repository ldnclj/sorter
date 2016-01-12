// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args7626 = [];
var len__5726__auto___7632 = arguments.length;
var i__5727__auto___7633 = (0);
while(true){
if((i__5727__auto___7633 < len__5726__auto___7632)){
args7626.push((arguments[i__5727__auto___7633]));

var G__7634 = (i__5727__auto___7633 + (1));
i__5727__auto___7633 = G__7634;
continue;
} else {
}
break;
}

var G__7628 = args7626.length;
switch (G__7628) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7626.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7629 = (function (f,blockable,meta7630){
this.f = f;
this.blockable = blockable;
this.meta7630 = meta7630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7631,meta7630__$1){
var self__ = this;
var _7631__$1 = this;
return (new cljs.core.async.t_cljs$core$async7629(self__.f,self__.blockable,meta7630__$1));
});

cljs.core.async.t_cljs$core$async7629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7631){
var self__ = this;
var _7631__$1 = this;
return self__.meta7630;
});

cljs.core.async.t_cljs$core$async7629.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7630","meta7630",90292249,null)], null);
});

cljs.core.async.t_cljs$core$async7629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7629";

cljs.core.async.t_cljs$core$async7629.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7629");
});

cljs.core.async.__GT_t_cljs$core$async7629 = (function cljs$core$async$__GT_t_cljs$core$async7629(f__$1,blockable__$1,meta7630){
return (new cljs.core.async.t_cljs$core$async7629(f__$1,blockable__$1,meta7630));
});

}

return (new cljs.core.async.t_cljs$core$async7629(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7638 = [];
var len__5726__auto___7641 = arguments.length;
var i__5727__auto___7642 = (0);
while(true){
if((i__5727__auto___7642 < len__5726__auto___7641)){
args7638.push((arguments[i__5727__auto___7642]));

var G__7643 = (i__5727__auto___7642 + (1));
i__5727__auto___7642 = G__7643;
continue;
} else {
}
break;
}

var G__7640 = args7638.length;
switch (G__7640) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7638.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args7645 = [];
var len__5726__auto___7648 = arguments.length;
var i__5727__auto___7649 = (0);
while(true){
if((i__5727__auto___7649 < len__5726__auto___7648)){
args7645.push((arguments[i__5727__auto___7649]));

var G__7650 = (i__5727__auto___7649 + (1));
i__5727__auto___7649 = G__7650;
continue;
} else {
}
break;
}

var G__7647 = args7645.length;
switch (G__7647) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7645.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7652 = [];
var len__5726__auto___7655 = arguments.length;
var i__5727__auto___7656 = (0);
while(true){
if((i__5727__auto___7656 < len__5726__auto___7655)){
args7652.push((arguments[i__5727__auto___7656]));

var G__7657 = (i__5727__auto___7656 + (1));
i__5727__auto___7656 = G__7657;
continue;
} else {
}
break;
}

var G__7654 = args7652.length;
switch (G__7654) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7652.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7659 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7659);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7659,ret){
return (function (){
return fn1.call(null,val_7659);
});})(val_7659,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7660 = [];
var len__5726__auto___7663 = arguments.length;
var i__5727__auto___7664 = (0);
while(true){
if((i__5727__auto___7664 < len__5726__auto___7663)){
args7660.push((arguments[i__5727__auto___7664]));

var G__7665 = (i__5727__auto___7664 + (1));
i__5727__auto___7664 = G__7665;
continue;
} else {
}
break;
}

var G__7662 = args7660.length;
switch (G__7662) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7660.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___7667 = n;
var x_7668 = (0);
while(true){
if((x_7668 < n__5571__auto___7667)){
(a[x_7668] = (0));

var G__7669 = (x_7668 + (1));
x_7668 = G__7669;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7670 = (i + (1));
i = G__7670;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7674 = (function (alt_flag,flag,meta7675){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7675 = meta7675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7676,meta7675__$1){
var self__ = this;
var _7676__$1 = this;
return (new cljs.core.async.t_cljs$core$async7674(self__.alt_flag,self__.flag,meta7675__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7676){
var self__ = this;
var _7676__$1 = this;
return self__.meta7675;
});})(flag))
;

cljs.core.async.t_cljs$core$async7674.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7674.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7675","meta7675",213463529,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7674";

cljs.core.async.t_cljs$core$async7674.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7674");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7674 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7674(alt_flag__$1,flag__$1,meta7675){
return (new cljs.core.async.t_cljs$core$async7674(alt_flag__$1,flag__$1,meta7675));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7674(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7680 = (function (alt_handler,flag,cb,meta7681){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7681 = meta7681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7682,meta7681__$1){
var self__ = this;
var _7682__$1 = this;
return (new cljs.core.async.t_cljs$core$async7680(self__.alt_handler,self__.flag,self__.cb,meta7681__$1));
});

cljs.core.async.t_cljs$core$async7680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7682){
var self__ = this;
var _7682__$1 = this;
return self__.meta7681;
});

cljs.core.async.t_cljs$core$async7680.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7681","meta7681",-1850245226,null)], null);
});

cljs.core.async.t_cljs$core$async7680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7680";

cljs.core.async.t_cljs$core$async7680.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7680");
});

cljs.core.async.__GT_t_cljs$core$async7680 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7680(alt_handler__$1,flag__$1,cb__$1,meta7681){
return (new cljs.core.async.t_cljs$core$async7680(alt_handler__$1,flag__$1,cb__$1,meta7681));
});

}

return (new cljs.core.async.t_cljs$core$async7680(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7683_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7683_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7684_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7684_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7685 = (i + (1));
i = G__7685;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___7691 = arguments.length;
var i__5727__auto___7692 = (0);
while(true){
if((i__5727__auto___7692 < len__5726__auto___7691)){
args__5733__auto__.push((arguments[i__5727__auto___7692]));

var G__7693 = (i__5727__auto___7692 + (1));
i__5727__auto___7692 = G__7693;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7688){
var map__7689 = p__7688;
var map__7689__$1 = ((((!((map__7689 == null)))?((((map__7689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7689):map__7689);
var opts = map__7689__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7686){
var G__7687 = cljs.core.first.call(null,seq7686);
var seq7686__$1 = cljs.core.next.call(null,seq7686);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7687,seq7686__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7694 = [];
var len__5726__auto___7744 = arguments.length;
var i__5727__auto___7745 = (0);
while(true){
if((i__5727__auto___7745 < len__5726__auto___7744)){
args7694.push((arguments[i__5727__auto___7745]));

var G__7746 = (i__5727__auto___7745 + (1));
i__5727__auto___7745 = G__7746;
continue;
} else {
}
break;
}

var G__7696 = args7694.length;
switch (G__7696) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7694.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7581__auto___7748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___7748){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___7748){
return (function (state_7720){
var state_val_7721 = (state_7720[(1)]);
if((state_val_7721 === (7))){
var inst_7716 = (state_7720[(2)]);
var state_7720__$1 = state_7720;
var statearr_7722_7749 = state_7720__$1;
(statearr_7722_7749[(2)] = inst_7716);

(statearr_7722_7749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (1))){
var state_7720__$1 = state_7720;
var statearr_7723_7750 = state_7720__$1;
(statearr_7723_7750[(2)] = null);

(statearr_7723_7750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (4))){
var inst_7699 = (state_7720[(7)]);
var inst_7699__$1 = (state_7720[(2)]);
var inst_7700 = (inst_7699__$1 == null);
var state_7720__$1 = (function (){var statearr_7724 = state_7720;
(statearr_7724[(7)] = inst_7699__$1);

return statearr_7724;
})();
if(cljs.core.truth_(inst_7700)){
var statearr_7725_7751 = state_7720__$1;
(statearr_7725_7751[(1)] = (5));

} else {
var statearr_7726_7752 = state_7720__$1;
(statearr_7726_7752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (13))){
var state_7720__$1 = state_7720;
var statearr_7727_7753 = state_7720__$1;
(statearr_7727_7753[(2)] = null);

(statearr_7727_7753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (6))){
var inst_7699 = (state_7720[(7)]);
var state_7720__$1 = state_7720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7720__$1,(11),to,inst_7699);
} else {
if((state_val_7721 === (3))){
var inst_7718 = (state_7720[(2)]);
var state_7720__$1 = state_7720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7720__$1,inst_7718);
} else {
if((state_val_7721 === (12))){
var state_7720__$1 = state_7720;
var statearr_7728_7754 = state_7720__$1;
(statearr_7728_7754[(2)] = null);

(statearr_7728_7754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (2))){
var state_7720__$1 = state_7720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7720__$1,(4),from);
} else {
if((state_val_7721 === (11))){
var inst_7709 = (state_7720[(2)]);
var state_7720__$1 = state_7720;
if(cljs.core.truth_(inst_7709)){
var statearr_7729_7755 = state_7720__$1;
(statearr_7729_7755[(1)] = (12));

} else {
var statearr_7730_7756 = state_7720__$1;
(statearr_7730_7756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (9))){
var state_7720__$1 = state_7720;
var statearr_7731_7757 = state_7720__$1;
(statearr_7731_7757[(2)] = null);

(statearr_7731_7757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (5))){
var state_7720__$1 = state_7720;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7732_7758 = state_7720__$1;
(statearr_7732_7758[(1)] = (8));

} else {
var statearr_7733_7759 = state_7720__$1;
(statearr_7733_7759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (14))){
var inst_7714 = (state_7720[(2)]);
var state_7720__$1 = state_7720;
var statearr_7734_7760 = state_7720__$1;
(statearr_7734_7760[(2)] = inst_7714);

(statearr_7734_7760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (10))){
var inst_7706 = (state_7720[(2)]);
var state_7720__$1 = state_7720;
var statearr_7735_7761 = state_7720__$1;
(statearr_7735_7761[(2)] = inst_7706);

(statearr_7735_7761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7721 === (8))){
var inst_7703 = cljs.core.async.close_BANG_.call(null,to);
var state_7720__$1 = state_7720;
var statearr_7736_7762 = state_7720__$1;
(statearr_7736_7762[(2)] = inst_7703);

(statearr_7736_7762[(1)] = (10));


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
});})(c__7581__auto___7748))
;
return ((function (switch__7469__auto__,c__7581__auto___7748){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_7740 = [null,null,null,null,null,null,null,null];
(statearr_7740[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_7740[(1)] = (1));

return statearr_7740;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_7720){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_7720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e7741){if((e7741 instanceof Object)){
var ex__7473__auto__ = e7741;
var statearr_7742_7763 = state_7720;
(statearr_7742_7763[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7764 = state_7720;
state_7720 = G__7764;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_7720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_7720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___7748))
})();
var state__7583__auto__ = (function (){var statearr_7743 = f__7582__auto__.call(null);
(statearr_7743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___7748);

return statearr_7743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___7748))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7948){
var vec__7949 = p__7948;
var v = cljs.core.nth.call(null,vec__7949,(0),null);
var p = cljs.core.nth.call(null,vec__7949,(1),null);
var job = vec__7949;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7581__auto___8131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___8131,res,vec__7949,v,p,job,jobs,results){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___8131,res,vec__7949,v,p,job,jobs,results){
return (function (state_7954){
var state_val_7955 = (state_7954[(1)]);
if((state_val_7955 === (1))){
var state_7954__$1 = state_7954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7954__$1,(2),res,v);
} else {
if((state_val_7955 === (2))){
var inst_7951 = (state_7954[(2)]);
var inst_7952 = cljs.core.async.close_BANG_.call(null,res);
var state_7954__$1 = (function (){var statearr_7956 = state_7954;
(statearr_7956[(7)] = inst_7951);

return statearr_7956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7954__$1,inst_7952);
} else {
return null;
}
}
});})(c__7581__auto___8131,res,vec__7949,v,p,job,jobs,results))
;
return ((function (switch__7469__auto__,c__7581__auto___8131,res,vec__7949,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0 = (function (){
var statearr_7960 = [null,null,null,null,null,null,null,null];
(statearr_7960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__);

(statearr_7960[(1)] = (1));

return statearr_7960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1 = (function (state_7954){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_7954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e7961){if((e7961 instanceof Object)){
var ex__7473__auto__ = e7961;
var statearr_7962_8132 = state_7954;
(statearr_7962_8132[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8133 = state_7954;
state_7954 = G__8133;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = function(state_7954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1.call(this,state_7954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___8131,res,vec__7949,v,p,job,jobs,results))
})();
var state__7583__auto__ = (function (){var statearr_7963 = f__7582__auto__.call(null);
(statearr_7963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___8131);

return statearr_7963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___8131,res,vec__7949,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7964){
var vec__7965 = p__7964;
var v = cljs.core.nth.call(null,vec__7965,(0),null);
var p = cljs.core.nth.call(null,vec__7965,(1),null);
var job = vec__7965;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___8134 = n;
var __8135 = (0);
while(true){
if((__8135 < n__5571__auto___8134)){
var G__7966_8136 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7966_8136) {
case "compute":
var c__7581__auto___8138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8135,c__7581__auto___8138,G__7966_8136,n__5571__auto___8134,jobs,results,process,async){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (__8135,c__7581__auto___8138,G__7966_8136,n__5571__auto___8134,jobs,results,process,async){
return (function (state_7979){
var state_val_7980 = (state_7979[(1)]);
if((state_val_7980 === (1))){
var state_7979__$1 = state_7979;
var statearr_7981_8139 = state_7979__$1;
(statearr_7981_8139[(2)] = null);

(statearr_7981_8139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7980 === (2))){
var state_7979__$1 = state_7979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7979__$1,(4),jobs);
} else {
if((state_val_7980 === (3))){
var inst_7977 = (state_7979[(2)]);
var state_7979__$1 = state_7979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7979__$1,inst_7977);
} else {
if((state_val_7980 === (4))){
var inst_7969 = (state_7979[(2)]);
var inst_7970 = process.call(null,inst_7969);
var state_7979__$1 = state_7979;
if(cljs.core.truth_(inst_7970)){
var statearr_7982_8140 = state_7979__$1;
(statearr_7982_8140[(1)] = (5));

} else {
var statearr_7983_8141 = state_7979__$1;
(statearr_7983_8141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7980 === (5))){
var state_7979__$1 = state_7979;
var statearr_7984_8142 = state_7979__$1;
(statearr_7984_8142[(2)] = null);

(statearr_7984_8142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7980 === (6))){
var state_7979__$1 = state_7979;
var statearr_7985_8143 = state_7979__$1;
(statearr_7985_8143[(2)] = null);

(statearr_7985_8143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7980 === (7))){
var inst_7975 = (state_7979[(2)]);
var state_7979__$1 = state_7979;
var statearr_7986_8144 = state_7979__$1;
(statearr_7986_8144[(2)] = inst_7975);

(statearr_7986_8144[(1)] = (3));


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
});})(__8135,c__7581__auto___8138,G__7966_8136,n__5571__auto___8134,jobs,results,process,async))
;
return ((function (__8135,switch__7469__auto__,c__7581__auto___8138,G__7966_8136,n__5571__auto___8134,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0 = (function (){
var statearr_7990 = [null,null,null,null,null,null,null];
(statearr_7990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__);

(statearr_7990[(1)] = (1));

return statearr_7990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1 = (function (state_7979){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_7979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e7991){if((e7991 instanceof Object)){
var ex__7473__auto__ = e7991;
var statearr_7992_8145 = state_7979;
(statearr_7992_8145[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8146 = state_7979;
state_7979 = G__8146;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = function(state_7979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1.call(this,state_7979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__;
})()
;})(__8135,switch__7469__auto__,c__7581__auto___8138,G__7966_8136,n__5571__auto___8134,jobs,results,process,async))
})();
var state__7583__auto__ = (function (){var statearr_7993 = f__7582__auto__.call(null);
(statearr_7993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___8138);

return statearr_7993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(__8135,c__7581__auto___8138,G__7966_8136,n__5571__auto___8134,jobs,results,process,async))
);


break;
case "async":
var c__7581__auto___8147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8135,c__7581__auto___8147,G__7966_8136,n__5571__auto___8134,jobs,results,process,async){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (__8135,c__7581__auto___8147,G__7966_8136,n__5571__auto___8134,jobs,results,process,async){
return (function (state_8006){
var state_val_8007 = (state_8006[(1)]);
if((state_val_8007 === (1))){
var state_8006__$1 = state_8006;
var statearr_8008_8148 = state_8006__$1;
(statearr_8008_8148[(2)] = null);

(statearr_8008_8148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (2))){
var state_8006__$1 = state_8006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8006__$1,(4),jobs);
} else {
if((state_val_8007 === (3))){
var inst_8004 = (state_8006[(2)]);
var state_8006__$1 = state_8006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8006__$1,inst_8004);
} else {
if((state_val_8007 === (4))){
var inst_7996 = (state_8006[(2)]);
var inst_7997 = async.call(null,inst_7996);
var state_8006__$1 = state_8006;
if(cljs.core.truth_(inst_7997)){
var statearr_8009_8149 = state_8006__$1;
(statearr_8009_8149[(1)] = (5));

} else {
var statearr_8010_8150 = state_8006__$1;
(statearr_8010_8150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (5))){
var state_8006__$1 = state_8006;
var statearr_8011_8151 = state_8006__$1;
(statearr_8011_8151[(2)] = null);

(statearr_8011_8151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (6))){
var state_8006__$1 = state_8006;
var statearr_8012_8152 = state_8006__$1;
(statearr_8012_8152[(2)] = null);

(statearr_8012_8152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8007 === (7))){
var inst_8002 = (state_8006[(2)]);
var state_8006__$1 = state_8006;
var statearr_8013_8153 = state_8006__$1;
(statearr_8013_8153[(2)] = inst_8002);

(statearr_8013_8153[(1)] = (3));


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
});})(__8135,c__7581__auto___8147,G__7966_8136,n__5571__auto___8134,jobs,results,process,async))
;
return ((function (__8135,switch__7469__auto__,c__7581__auto___8147,G__7966_8136,n__5571__auto___8134,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0 = (function (){
var statearr_8017 = [null,null,null,null,null,null,null];
(statearr_8017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__);

(statearr_8017[(1)] = (1));

return statearr_8017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1 = (function (state_8006){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_8006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e8018){if((e8018 instanceof Object)){
var ex__7473__auto__ = e8018;
var statearr_8019_8154 = state_8006;
(statearr_8019_8154[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8155 = state_8006;
state_8006 = G__8155;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = function(state_8006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1.call(this,state_8006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__;
})()
;})(__8135,switch__7469__auto__,c__7581__auto___8147,G__7966_8136,n__5571__auto___8134,jobs,results,process,async))
})();
var state__7583__auto__ = (function (){var statearr_8020 = f__7582__auto__.call(null);
(statearr_8020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___8147);

return statearr_8020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(__8135,c__7581__auto___8147,G__7966_8136,n__5571__auto___8134,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8156 = (__8135 + (1));
__8135 = G__8156;
continue;
} else {
}
break;
}

var c__7581__auto___8157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___8157,jobs,results,process,async){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___8157,jobs,results,process,async){
return (function (state_8042){
var state_val_8043 = (state_8042[(1)]);
if((state_val_8043 === (1))){
var state_8042__$1 = state_8042;
var statearr_8044_8158 = state_8042__$1;
(statearr_8044_8158[(2)] = null);

(statearr_8044_8158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8043 === (2))){
var state_8042__$1 = state_8042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8042__$1,(4),from);
} else {
if((state_val_8043 === (3))){
var inst_8040 = (state_8042[(2)]);
var state_8042__$1 = state_8042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8042__$1,inst_8040);
} else {
if((state_val_8043 === (4))){
var inst_8023 = (state_8042[(7)]);
var inst_8023__$1 = (state_8042[(2)]);
var inst_8024 = (inst_8023__$1 == null);
var state_8042__$1 = (function (){var statearr_8045 = state_8042;
(statearr_8045[(7)] = inst_8023__$1);

return statearr_8045;
})();
if(cljs.core.truth_(inst_8024)){
var statearr_8046_8159 = state_8042__$1;
(statearr_8046_8159[(1)] = (5));

} else {
var statearr_8047_8160 = state_8042__$1;
(statearr_8047_8160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8043 === (5))){
var inst_8026 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8042__$1 = state_8042;
var statearr_8048_8161 = state_8042__$1;
(statearr_8048_8161[(2)] = inst_8026);

(statearr_8048_8161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8043 === (6))){
var inst_8023 = (state_8042[(7)]);
var inst_8028 = (state_8042[(8)]);
var inst_8028__$1 = cljs.core.async.chan.call(null,(1));
var inst_8029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8030 = [inst_8023,inst_8028__$1];
var inst_8031 = (new cljs.core.PersistentVector(null,2,(5),inst_8029,inst_8030,null));
var state_8042__$1 = (function (){var statearr_8049 = state_8042;
(statearr_8049[(8)] = inst_8028__$1);

return statearr_8049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8042__$1,(8),jobs,inst_8031);
} else {
if((state_val_8043 === (7))){
var inst_8038 = (state_8042[(2)]);
var state_8042__$1 = state_8042;
var statearr_8050_8162 = state_8042__$1;
(statearr_8050_8162[(2)] = inst_8038);

(statearr_8050_8162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8043 === (8))){
var inst_8028 = (state_8042[(8)]);
var inst_8033 = (state_8042[(2)]);
var state_8042__$1 = (function (){var statearr_8051 = state_8042;
(statearr_8051[(9)] = inst_8033);

return statearr_8051;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8042__$1,(9),results,inst_8028);
} else {
if((state_val_8043 === (9))){
var inst_8035 = (state_8042[(2)]);
var state_8042__$1 = (function (){var statearr_8052 = state_8042;
(statearr_8052[(10)] = inst_8035);

return statearr_8052;
})();
var statearr_8053_8163 = state_8042__$1;
(statearr_8053_8163[(2)] = null);

(statearr_8053_8163[(1)] = (2));


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
});})(c__7581__auto___8157,jobs,results,process,async))
;
return ((function (switch__7469__auto__,c__7581__auto___8157,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0 = (function (){
var statearr_8057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__);

(statearr_8057[(1)] = (1));

return statearr_8057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1 = (function (state_8042){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_8042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e8058){if((e8058 instanceof Object)){
var ex__7473__auto__ = e8058;
var statearr_8059_8164 = state_8042;
(statearr_8059_8164[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8165 = state_8042;
state_8042 = G__8165;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = function(state_8042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1.call(this,state_8042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___8157,jobs,results,process,async))
})();
var state__7583__auto__ = (function (){var statearr_8060 = f__7582__auto__.call(null);
(statearr_8060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___8157);

return statearr_8060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___8157,jobs,results,process,async))
);


var c__7581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto__,jobs,results,process,async){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto__,jobs,results,process,async){
return (function (state_8098){
var state_val_8099 = (state_8098[(1)]);
if((state_val_8099 === (7))){
var inst_8094 = (state_8098[(2)]);
var state_8098__$1 = state_8098;
var statearr_8100_8166 = state_8098__$1;
(statearr_8100_8166[(2)] = inst_8094);

(statearr_8100_8166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (20))){
var state_8098__$1 = state_8098;
var statearr_8101_8167 = state_8098__$1;
(statearr_8101_8167[(2)] = null);

(statearr_8101_8167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (1))){
var state_8098__$1 = state_8098;
var statearr_8102_8168 = state_8098__$1;
(statearr_8102_8168[(2)] = null);

(statearr_8102_8168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (4))){
var inst_8063 = (state_8098[(7)]);
var inst_8063__$1 = (state_8098[(2)]);
var inst_8064 = (inst_8063__$1 == null);
var state_8098__$1 = (function (){var statearr_8103 = state_8098;
(statearr_8103[(7)] = inst_8063__$1);

return statearr_8103;
})();
if(cljs.core.truth_(inst_8064)){
var statearr_8104_8169 = state_8098__$1;
(statearr_8104_8169[(1)] = (5));

} else {
var statearr_8105_8170 = state_8098__$1;
(statearr_8105_8170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (15))){
var inst_8076 = (state_8098[(8)]);
var state_8098__$1 = state_8098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8098__$1,(18),to,inst_8076);
} else {
if((state_val_8099 === (21))){
var inst_8089 = (state_8098[(2)]);
var state_8098__$1 = state_8098;
var statearr_8106_8171 = state_8098__$1;
(statearr_8106_8171[(2)] = inst_8089);

(statearr_8106_8171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (13))){
var inst_8091 = (state_8098[(2)]);
var state_8098__$1 = (function (){var statearr_8107 = state_8098;
(statearr_8107[(9)] = inst_8091);

return statearr_8107;
})();
var statearr_8108_8172 = state_8098__$1;
(statearr_8108_8172[(2)] = null);

(statearr_8108_8172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (6))){
var inst_8063 = (state_8098[(7)]);
var state_8098__$1 = state_8098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8098__$1,(11),inst_8063);
} else {
if((state_val_8099 === (17))){
var inst_8084 = (state_8098[(2)]);
var state_8098__$1 = state_8098;
if(cljs.core.truth_(inst_8084)){
var statearr_8109_8173 = state_8098__$1;
(statearr_8109_8173[(1)] = (19));

} else {
var statearr_8110_8174 = state_8098__$1;
(statearr_8110_8174[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (3))){
var inst_8096 = (state_8098[(2)]);
var state_8098__$1 = state_8098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8098__$1,inst_8096);
} else {
if((state_val_8099 === (12))){
var inst_8073 = (state_8098[(10)]);
var state_8098__$1 = state_8098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8098__$1,(14),inst_8073);
} else {
if((state_val_8099 === (2))){
var state_8098__$1 = state_8098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8098__$1,(4),results);
} else {
if((state_val_8099 === (19))){
var state_8098__$1 = state_8098;
var statearr_8111_8175 = state_8098__$1;
(statearr_8111_8175[(2)] = null);

(statearr_8111_8175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (11))){
var inst_8073 = (state_8098[(2)]);
var state_8098__$1 = (function (){var statearr_8112 = state_8098;
(statearr_8112[(10)] = inst_8073);

return statearr_8112;
})();
var statearr_8113_8176 = state_8098__$1;
(statearr_8113_8176[(2)] = null);

(statearr_8113_8176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (9))){
var state_8098__$1 = state_8098;
var statearr_8114_8177 = state_8098__$1;
(statearr_8114_8177[(2)] = null);

(statearr_8114_8177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (5))){
var state_8098__$1 = state_8098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8115_8178 = state_8098__$1;
(statearr_8115_8178[(1)] = (8));

} else {
var statearr_8116_8179 = state_8098__$1;
(statearr_8116_8179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (14))){
var inst_8078 = (state_8098[(11)]);
var inst_8076 = (state_8098[(8)]);
var inst_8076__$1 = (state_8098[(2)]);
var inst_8077 = (inst_8076__$1 == null);
var inst_8078__$1 = cljs.core.not.call(null,inst_8077);
var state_8098__$1 = (function (){var statearr_8117 = state_8098;
(statearr_8117[(11)] = inst_8078__$1);

(statearr_8117[(8)] = inst_8076__$1);

return statearr_8117;
})();
if(inst_8078__$1){
var statearr_8118_8180 = state_8098__$1;
(statearr_8118_8180[(1)] = (15));

} else {
var statearr_8119_8181 = state_8098__$1;
(statearr_8119_8181[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (16))){
var inst_8078 = (state_8098[(11)]);
var state_8098__$1 = state_8098;
var statearr_8120_8182 = state_8098__$1;
(statearr_8120_8182[(2)] = inst_8078);

(statearr_8120_8182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (10))){
var inst_8070 = (state_8098[(2)]);
var state_8098__$1 = state_8098;
var statearr_8121_8183 = state_8098__$1;
(statearr_8121_8183[(2)] = inst_8070);

(statearr_8121_8183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (18))){
var inst_8081 = (state_8098[(2)]);
var state_8098__$1 = state_8098;
var statearr_8122_8184 = state_8098__$1;
(statearr_8122_8184[(2)] = inst_8081);

(statearr_8122_8184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8099 === (8))){
var inst_8067 = cljs.core.async.close_BANG_.call(null,to);
var state_8098__$1 = state_8098;
var statearr_8123_8185 = state_8098__$1;
(statearr_8123_8185[(2)] = inst_8067);

(statearr_8123_8185[(1)] = (10));


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
});})(c__7581__auto__,jobs,results,process,async))
;
return ((function (switch__7469__auto__,c__7581__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0 = (function (){
var statearr_8127 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__);

(statearr_8127[(1)] = (1));

return statearr_8127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1 = (function (state_8098){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_8098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e8128){if((e8128 instanceof Object)){
var ex__7473__auto__ = e8128;
var statearr_8129_8186 = state_8098;
(statearr_8129_8186[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8187 = state_8098;
state_8098 = G__8187;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__ = function(state_8098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1.call(this,state_8098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto__,jobs,results,process,async))
})();
var state__7583__auto__ = (function (){var statearr_8130 = f__7582__auto__.call(null);
(statearr_8130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto__);

return statearr_8130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto__,jobs,results,process,async))
);

return c__7581__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args8188 = [];
var len__5726__auto___8191 = arguments.length;
var i__5727__auto___8192 = (0);
while(true){
if((i__5727__auto___8192 < len__5726__auto___8191)){
args8188.push((arguments[i__5727__auto___8192]));

var G__8193 = (i__5727__auto___8192 + (1));
i__5727__auto___8192 = G__8193;
continue;
} else {
}
break;
}

var G__8190 = args8188.length;
switch (G__8190) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8188.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args8195 = [];
var len__5726__auto___8198 = arguments.length;
var i__5727__auto___8199 = (0);
while(true){
if((i__5727__auto___8199 < len__5726__auto___8198)){
args8195.push((arguments[i__5727__auto___8199]));

var G__8200 = (i__5727__auto___8199 + (1));
i__5727__auto___8199 = G__8200;
continue;
} else {
}
break;
}

var G__8197 = args8195.length;
switch (G__8197) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8195.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args8202 = [];
var len__5726__auto___8255 = arguments.length;
var i__5727__auto___8256 = (0);
while(true){
if((i__5727__auto___8256 < len__5726__auto___8255)){
args8202.push((arguments[i__5727__auto___8256]));

var G__8257 = (i__5727__auto___8256 + (1));
i__5727__auto___8256 = G__8257;
continue;
} else {
}
break;
}

var G__8204 = args8202.length;
switch (G__8204) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8202.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7581__auto___8259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___8259,tc,fc){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___8259,tc,fc){
return (function (state_8230){
var state_val_8231 = (state_8230[(1)]);
if((state_val_8231 === (7))){
var inst_8226 = (state_8230[(2)]);
var state_8230__$1 = state_8230;
var statearr_8232_8260 = state_8230__$1;
(statearr_8232_8260[(2)] = inst_8226);

(statearr_8232_8260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (1))){
var state_8230__$1 = state_8230;
var statearr_8233_8261 = state_8230__$1;
(statearr_8233_8261[(2)] = null);

(statearr_8233_8261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (4))){
var inst_8207 = (state_8230[(7)]);
var inst_8207__$1 = (state_8230[(2)]);
var inst_8208 = (inst_8207__$1 == null);
var state_8230__$1 = (function (){var statearr_8234 = state_8230;
(statearr_8234[(7)] = inst_8207__$1);

return statearr_8234;
})();
if(cljs.core.truth_(inst_8208)){
var statearr_8235_8262 = state_8230__$1;
(statearr_8235_8262[(1)] = (5));

} else {
var statearr_8236_8263 = state_8230__$1;
(statearr_8236_8263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (13))){
var state_8230__$1 = state_8230;
var statearr_8237_8264 = state_8230__$1;
(statearr_8237_8264[(2)] = null);

(statearr_8237_8264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (6))){
var inst_8207 = (state_8230[(7)]);
var inst_8213 = p.call(null,inst_8207);
var state_8230__$1 = state_8230;
if(cljs.core.truth_(inst_8213)){
var statearr_8238_8265 = state_8230__$1;
(statearr_8238_8265[(1)] = (9));

} else {
var statearr_8239_8266 = state_8230__$1;
(statearr_8239_8266[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (3))){
var inst_8228 = (state_8230[(2)]);
var state_8230__$1 = state_8230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8230__$1,inst_8228);
} else {
if((state_val_8231 === (12))){
var state_8230__$1 = state_8230;
var statearr_8240_8267 = state_8230__$1;
(statearr_8240_8267[(2)] = null);

(statearr_8240_8267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (2))){
var state_8230__$1 = state_8230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8230__$1,(4),ch);
} else {
if((state_val_8231 === (11))){
var inst_8207 = (state_8230[(7)]);
var inst_8217 = (state_8230[(2)]);
var state_8230__$1 = state_8230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8230__$1,(8),inst_8217,inst_8207);
} else {
if((state_val_8231 === (9))){
var state_8230__$1 = state_8230;
var statearr_8241_8268 = state_8230__$1;
(statearr_8241_8268[(2)] = tc);

(statearr_8241_8268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (5))){
var inst_8210 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8211 = cljs.core.async.close_BANG_.call(null,fc);
var state_8230__$1 = (function (){var statearr_8242 = state_8230;
(statearr_8242[(8)] = inst_8210);

return statearr_8242;
})();
var statearr_8243_8269 = state_8230__$1;
(statearr_8243_8269[(2)] = inst_8211);

(statearr_8243_8269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (14))){
var inst_8224 = (state_8230[(2)]);
var state_8230__$1 = state_8230;
var statearr_8244_8270 = state_8230__$1;
(statearr_8244_8270[(2)] = inst_8224);

(statearr_8244_8270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (10))){
var state_8230__$1 = state_8230;
var statearr_8245_8271 = state_8230__$1;
(statearr_8245_8271[(2)] = fc);

(statearr_8245_8271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8231 === (8))){
var inst_8219 = (state_8230[(2)]);
var state_8230__$1 = state_8230;
if(cljs.core.truth_(inst_8219)){
var statearr_8246_8272 = state_8230__$1;
(statearr_8246_8272[(1)] = (12));

} else {
var statearr_8247_8273 = state_8230__$1;
(statearr_8247_8273[(1)] = (13));

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
});})(c__7581__auto___8259,tc,fc))
;
return ((function (switch__7469__auto__,c__7581__auto___8259,tc,fc){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_8251 = [null,null,null,null,null,null,null,null,null];
(statearr_8251[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_8251[(1)] = (1));

return statearr_8251;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_8230){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_8230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e8252){if((e8252 instanceof Object)){
var ex__7473__auto__ = e8252;
var statearr_8253_8274 = state_8230;
(statearr_8253_8274[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8275 = state_8230;
state_8230 = G__8275;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_8230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_8230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___8259,tc,fc))
})();
var state__7583__auto__ = (function (){var statearr_8254 = f__7582__auto__.call(null);
(statearr_8254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___8259);

return statearr_8254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___8259,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto__){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto__){
return (function (state_8339){
var state_val_8340 = (state_8339[(1)]);
if((state_val_8340 === (7))){
var inst_8335 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8341_8362 = state_8339__$1;
(statearr_8341_8362[(2)] = inst_8335);

(statearr_8341_8362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (1))){
var inst_8319 = init;
var state_8339__$1 = (function (){var statearr_8342 = state_8339;
(statearr_8342[(7)] = inst_8319);

return statearr_8342;
})();
var statearr_8343_8363 = state_8339__$1;
(statearr_8343_8363[(2)] = null);

(statearr_8343_8363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (4))){
var inst_8322 = (state_8339[(8)]);
var inst_8322__$1 = (state_8339[(2)]);
var inst_8323 = (inst_8322__$1 == null);
var state_8339__$1 = (function (){var statearr_8344 = state_8339;
(statearr_8344[(8)] = inst_8322__$1);

return statearr_8344;
})();
if(cljs.core.truth_(inst_8323)){
var statearr_8345_8364 = state_8339__$1;
(statearr_8345_8364[(1)] = (5));

} else {
var statearr_8346_8365 = state_8339__$1;
(statearr_8346_8365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (6))){
var inst_8319 = (state_8339[(7)]);
var inst_8326 = (state_8339[(9)]);
var inst_8322 = (state_8339[(8)]);
var inst_8326__$1 = f.call(null,inst_8319,inst_8322);
var inst_8327 = cljs.core.reduced_QMARK_.call(null,inst_8326__$1);
var state_8339__$1 = (function (){var statearr_8347 = state_8339;
(statearr_8347[(9)] = inst_8326__$1);

return statearr_8347;
})();
if(inst_8327){
var statearr_8348_8366 = state_8339__$1;
(statearr_8348_8366[(1)] = (8));

} else {
var statearr_8349_8367 = state_8339__$1;
(statearr_8349_8367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (3))){
var inst_8337 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8339__$1,inst_8337);
} else {
if((state_val_8340 === (2))){
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8339__$1,(4),ch);
} else {
if((state_val_8340 === (9))){
var inst_8326 = (state_8339[(9)]);
var inst_8319 = inst_8326;
var state_8339__$1 = (function (){var statearr_8350 = state_8339;
(statearr_8350[(7)] = inst_8319);

return statearr_8350;
})();
var statearr_8351_8368 = state_8339__$1;
(statearr_8351_8368[(2)] = null);

(statearr_8351_8368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (5))){
var inst_8319 = (state_8339[(7)]);
var state_8339__$1 = state_8339;
var statearr_8352_8369 = state_8339__$1;
(statearr_8352_8369[(2)] = inst_8319);

(statearr_8352_8369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (10))){
var inst_8333 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8353_8370 = state_8339__$1;
(statearr_8353_8370[(2)] = inst_8333);

(statearr_8353_8370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8340 === (8))){
var inst_8326 = (state_8339[(9)]);
var inst_8329 = cljs.core.deref.call(null,inst_8326);
var state_8339__$1 = state_8339;
var statearr_8354_8371 = state_8339__$1;
(statearr_8354_8371[(2)] = inst_8329);

(statearr_8354_8371[(1)] = (10));


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
});})(c__7581__auto__))
;
return ((function (switch__7469__auto__,c__7581__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7470__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7470__auto____0 = (function (){
var statearr_8358 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8358[(0)] = cljs$core$async$reduce_$_state_machine__7470__auto__);

(statearr_8358[(1)] = (1));

return statearr_8358;
});
var cljs$core$async$reduce_$_state_machine__7470__auto____1 = (function (state_8339){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_8339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e8359){if((e8359 instanceof Object)){
var ex__7473__auto__ = e8359;
var statearr_8360_8372 = state_8339;
(statearr_8360_8372[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8373 = state_8339;
state_8339 = G__8373;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7470__auto__ = function(state_8339){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7470__auto____1.call(this,state_8339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7470__auto____0;
cljs$core$async$reduce_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7470__auto____1;
return cljs$core$async$reduce_$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto__))
})();
var state__7583__auto__ = (function (){var statearr_8361 = f__7582__auto__.call(null);
(statearr_8361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto__);

return statearr_8361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto__))
);

return c__7581__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args8374 = [];
var len__5726__auto___8426 = arguments.length;
var i__5727__auto___8427 = (0);
while(true){
if((i__5727__auto___8427 < len__5726__auto___8426)){
args8374.push((arguments[i__5727__auto___8427]));

var G__8428 = (i__5727__auto___8427 + (1));
i__5727__auto___8427 = G__8428;
continue;
} else {
}
break;
}

var G__8376 = args8374.length;
switch (G__8376) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8374.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto__){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto__){
return (function (state_8401){
var state_val_8402 = (state_8401[(1)]);
if((state_val_8402 === (7))){
var inst_8383 = (state_8401[(2)]);
var state_8401__$1 = state_8401;
var statearr_8403_8430 = state_8401__$1;
(statearr_8403_8430[(2)] = inst_8383);

(statearr_8403_8430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (1))){
var inst_8377 = cljs.core.seq.call(null,coll);
var inst_8378 = inst_8377;
var state_8401__$1 = (function (){var statearr_8404 = state_8401;
(statearr_8404[(7)] = inst_8378);

return statearr_8404;
})();
var statearr_8405_8431 = state_8401__$1;
(statearr_8405_8431[(2)] = null);

(statearr_8405_8431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (4))){
var inst_8378 = (state_8401[(7)]);
var inst_8381 = cljs.core.first.call(null,inst_8378);
var state_8401__$1 = state_8401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8401__$1,(7),ch,inst_8381);
} else {
if((state_val_8402 === (13))){
var inst_8395 = (state_8401[(2)]);
var state_8401__$1 = state_8401;
var statearr_8406_8432 = state_8401__$1;
(statearr_8406_8432[(2)] = inst_8395);

(statearr_8406_8432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (6))){
var inst_8386 = (state_8401[(2)]);
var state_8401__$1 = state_8401;
if(cljs.core.truth_(inst_8386)){
var statearr_8407_8433 = state_8401__$1;
(statearr_8407_8433[(1)] = (8));

} else {
var statearr_8408_8434 = state_8401__$1;
(statearr_8408_8434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (3))){
var inst_8399 = (state_8401[(2)]);
var state_8401__$1 = state_8401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8401__$1,inst_8399);
} else {
if((state_val_8402 === (12))){
var state_8401__$1 = state_8401;
var statearr_8409_8435 = state_8401__$1;
(statearr_8409_8435[(2)] = null);

(statearr_8409_8435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (2))){
var inst_8378 = (state_8401[(7)]);
var state_8401__$1 = state_8401;
if(cljs.core.truth_(inst_8378)){
var statearr_8410_8436 = state_8401__$1;
(statearr_8410_8436[(1)] = (4));

} else {
var statearr_8411_8437 = state_8401__$1;
(statearr_8411_8437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (11))){
var inst_8392 = cljs.core.async.close_BANG_.call(null,ch);
var state_8401__$1 = state_8401;
var statearr_8412_8438 = state_8401__$1;
(statearr_8412_8438[(2)] = inst_8392);

(statearr_8412_8438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (9))){
var state_8401__$1 = state_8401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8413_8439 = state_8401__$1;
(statearr_8413_8439[(1)] = (11));

} else {
var statearr_8414_8440 = state_8401__$1;
(statearr_8414_8440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (5))){
var inst_8378 = (state_8401[(7)]);
var state_8401__$1 = state_8401;
var statearr_8415_8441 = state_8401__$1;
(statearr_8415_8441[(2)] = inst_8378);

(statearr_8415_8441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (10))){
var inst_8397 = (state_8401[(2)]);
var state_8401__$1 = state_8401;
var statearr_8416_8442 = state_8401__$1;
(statearr_8416_8442[(2)] = inst_8397);

(statearr_8416_8442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8402 === (8))){
var inst_8378 = (state_8401[(7)]);
var inst_8388 = cljs.core.next.call(null,inst_8378);
var inst_8378__$1 = inst_8388;
var state_8401__$1 = (function (){var statearr_8417 = state_8401;
(statearr_8417[(7)] = inst_8378__$1);

return statearr_8417;
})();
var statearr_8418_8443 = state_8401__$1;
(statearr_8418_8443[(2)] = null);

(statearr_8418_8443[(1)] = (2));


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
});})(c__7581__auto__))
;
return ((function (switch__7469__auto__,c__7581__auto__){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_8422 = [null,null,null,null,null,null,null,null];
(statearr_8422[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_8422[(1)] = (1));

return statearr_8422;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_8401){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_8401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e8423){if((e8423 instanceof Object)){
var ex__7473__auto__ = e8423;
var statearr_8424_8444 = state_8401;
(statearr_8424_8444[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8445 = state_8401;
state_8401 = G__8445;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_8401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_8401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto__))
})();
var state__7583__auto__ = (function (){var statearr_8425 = f__7582__auto__.call(null);
(statearr_8425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto__);

return statearr_8425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto__))
);

return c__7581__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8667 = (function (mult,ch,cs,meta8668){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8668 = meta8668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8669,meta8668__$1){
var self__ = this;
var _8669__$1 = this;
return (new cljs.core.async.t_cljs$core$async8667(self__.mult,self__.ch,self__.cs,meta8668__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8669){
var self__ = this;
var _8669__$1 = this;
return self__.meta8668;
});})(cs))
;

cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8667.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8667.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8668","meta8668",-2008096748,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8667";

cljs.core.async.t_cljs$core$async8667.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8667");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8667 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8667(mult__$1,ch__$1,cs__$1,meta8668){
return (new cljs.core.async.t_cljs$core$async8667(mult__$1,ch__$1,cs__$1,meta8668));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8667(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7581__auto___8888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___8888,cs,m,dchan,dctr,done){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___8888,cs,m,dchan,dctr,done){
return (function (state_8800){
var state_val_8801 = (state_8800[(1)]);
if((state_val_8801 === (7))){
var inst_8796 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8802_8889 = state_8800__$1;
(statearr_8802_8889[(2)] = inst_8796);

(statearr_8802_8889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (20))){
var inst_8701 = (state_8800[(7)]);
var inst_8711 = cljs.core.first.call(null,inst_8701);
var inst_8712 = cljs.core.nth.call(null,inst_8711,(0),null);
var inst_8713 = cljs.core.nth.call(null,inst_8711,(1),null);
var state_8800__$1 = (function (){var statearr_8803 = state_8800;
(statearr_8803[(8)] = inst_8712);

return statearr_8803;
})();
if(cljs.core.truth_(inst_8713)){
var statearr_8804_8890 = state_8800__$1;
(statearr_8804_8890[(1)] = (22));

} else {
var statearr_8805_8891 = state_8800__$1;
(statearr_8805_8891[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (27))){
var inst_8672 = (state_8800[(9)]);
var inst_8748 = (state_8800[(10)]);
var inst_8741 = (state_8800[(11)]);
var inst_8743 = (state_8800[(12)]);
var inst_8748__$1 = cljs.core._nth.call(null,inst_8741,inst_8743);
var inst_8749 = cljs.core.async.put_BANG_.call(null,inst_8748__$1,inst_8672,done);
var state_8800__$1 = (function (){var statearr_8806 = state_8800;
(statearr_8806[(10)] = inst_8748__$1);

return statearr_8806;
})();
if(cljs.core.truth_(inst_8749)){
var statearr_8807_8892 = state_8800__$1;
(statearr_8807_8892[(1)] = (30));

} else {
var statearr_8808_8893 = state_8800__$1;
(statearr_8808_8893[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (1))){
var state_8800__$1 = state_8800;
var statearr_8809_8894 = state_8800__$1;
(statearr_8809_8894[(2)] = null);

(statearr_8809_8894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (24))){
var inst_8701 = (state_8800[(7)]);
var inst_8718 = (state_8800[(2)]);
var inst_8719 = cljs.core.next.call(null,inst_8701);
var inst_8681 = inst_8719;
var inst_8682 = null;
var inst_8683 = (0);
var inst_8684 = (0);
var state_8800__$1 = (function (){var statearr_8810 = state_8800;
(statearr_8810[(13)] = inst_8681);

(statearr_8810[(14)] = inst_8683);

(statearr_8810[(15)] = inst_8684);

(statearr_8810[(16)] = inst_8682);

(statearr_8810[(17)] = inst_8718);

return statearr_8810;
})();
var statearr_8811_8895 = state_8800__$1;
(statearr_8811_8895[(2)] = null);

(statearr_8811_8895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (39))){
var state_8800__$1 = state_8800;
var statearr_8815_8896 = state_8800__$1;
(statearr_8815_8896[(2)] = null);

(statearr_8815_8896[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (4))){
var inst_8672 = (state_8800[(9)]);
var inst_8672__$1 = (state_8800[(2)]);
var inst_8673 = (inst_8672__$1 == null);
var state_8800__$1 = (function (){var statearr_8816 = state_8800;
(statearr_8816[(9)] = inst_8672__$1);

return statearr_8816;
})();
if(cljs.core.truth_(inst_8673)){
var statearr_8817_8897 = state_8800__$1;
(statearr_8817_8897[(1)] = (5));

} else {
var statearr_8818_8898 = state_8800__$1;
(statearr_8818_8898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (15))){
var inst_8681 = (state_8800[(13)]);
var inst_8683 = (state_8800[(14)]);
var inst_8684 = (state_8800[(15)]);
var inst_8682 = (state_8800[(16)]);
var inst_8697 = (state_8800[(2)]);
var inst_8698 = (inst_8684 + (1));
var tmp8812 = inst_8681;
var tmp8813 = inst_8683;
var tmp8814 = inst_8682;
var inst_8681__$1 = tmp8812;
var inst_8682__$1 = tmp8814;
var inst_8683__$1 = tmp8813;
var inst_8684__$1 = inst_8698;
var state_8800__$1 = (function (){var statearr_8819 = state_8800;
(statearr_8819[(13)] = inst_8681__$1);

(statearr_8819[(14)] = inst_8683__$1);

(statearr_8819[(15)] = inst_8684__$1);

(statearr_8819[(18)] = inst_8697);

(statearr_8819[(16)] = inst_8682__$1);

return statearr_8819;
})();
var statearr_8820_8899 = state_8800__$1;
(statearr_8820_8899[(2)] = null);

(statearr_8820_8899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (21))){
var inst_8722 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8824_8900 = state_8800__$1;
(statearr_8824_8900[(2)] = inst_8722);

(statearr_8824_8900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (31))){
var inst_8748 = (state_8800[(10)]);
var inst_8752 = done.call(null,null);
var inst_8753 = cljs.core.async.untap_STAR_.call(null,m,inst_8748);
var state_8800__$1 = (function (){var statearr_8825 = state_8800;
(statearr_8825[(19)] = inst_8752);

return statearr_8825;
})();
var statearr_8826_8901 = state_8800__$1;
(statearr_8826_8901[(2)] = inst_8753);

(statearr_8826_8901[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (32))){
var inst_8741 = (state_8800[(11)]);
var inst_8740 = (state_8800[(20)]);
var inst_8742 = (state_8800[(21)]);
var inst_8743 = (state_8800[(12)]);
var inst_8755 = (state_8800[(2)]);
var inst_8756 = (inst_8743 + (1));
var tmp8821 = inst_8741;
var tmp8822 = inst_8740;
var tmp8823 = inst_8742;
var inst_8740__$1 = tmp8822;
var inst_8741__$1 = tmp8821;
var inst_8742__$1 = tmp8823;
var inst_8743__$1 = inst_8756;
var state_8800__$1 = (function (){var statearr_8827 = state_8800;
(statearr_8827[(11)] = inst_8741__$1);

(statearr_8827[(22)] = inst_8755);

(statearr_8827[(20)] = inst_8740__$1);

(statearr_8827[(21)] = inst_8742__$1);

(statearr_8827[(12)] = inst_8743__$1);

return statearr_8827;
})();
var statearr_8828_8902 = state_8800__$1;
(statearr_8828_8902[(2)] = null);

(statearr_8828_8902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (40))){
var inst_8768 = (state_8800[(23)]);
var inst_8772 = done.call(null,null);
var inst_8773 = cljs.core.async.untap_STAR_.call(null,m,inst_8768);
var state_8800__$1 = (function (){var statearr_8829 = state_8800;
(statearr_8829[(24)] = inst_8772);

return statearr_8829;
})();
var statearr_8830_8903 = state_8800__$1;
(statearr_8830_8903[(2)] = inst_8773);

(statearr_8830_8903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (33))){
var inst_8759 = (state_8800[(25)]);
var inst_8761 = cljs.core.chunked_seq_QMARK_.call(null,inst_8759);
var state_8800__$1 = state_8800;
if(inst_8761){
var statearr_8831_8904 = state_8800__$1;
(statearr_8831_8904[(1)] = (36));

} else {
var statearr_8832_8905 = state_8800__$1;
(statearr_8832_8905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (13))){
var inst_8691 = (state_8800[(26)]);
var inst_8694 = cljs.core.async.close_BANG_.call(null,inst_8691);
var state_8800__$1 = state_8800;
var statearr_8833_8906 = state_8800__$1;
(statearr_8833_8906[(2)] = inst_8694);

(statearr_8833_8906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (22))){
var inst_8712 = (state_8800[(8)]);
var inst_8715 = cljs.core.async.close_BANG_.call(null,inst_8712);
var state_8800__$1 = state_8800;
var statearr_8834_8907 = state_8800__$1;
(statearr_8834_8907[(2)] = inst_8715);

(statearr_8834_8907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (36))){
var inst_8759 = (state_8800[(25)]);
var inst_8763 = cljs.core.chunk_first.call(null,inst_8759);
var inst_8764 = cljs.core.chunk_rest.call(null,inst_8759);
var inst_8765 = cljs.core.count.call(null,inst_8763);
var inst_8740 = inst_8764;
var inst_8741 = inst_8763;
var inst_8742 = inst_8765;
var inst_8743 = (0);
var state_8800__$1 = (function (){var statearr_8835 = state_8800;
(statearr_8835[(11)] = inst_8741);

(statearr_8835[(20)] = inst_8740);

(statearr_8835[(21)] = inst_8742);

(statearr_8835[(12)] = inst_8743);

return statearr_8835;
})();
var statearr_8836_8908 = state_8800__$1;
(statearr_8836_8908[(2)] = null);

(statearr_8836_8908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (41))){
var inst_8759 = (state_8800[(25)]);
var inst_8775 = (state_8800[(2)]);
var inst_8776 = cljs.core.next.call(null,inst_8759);
var inst_8740 = inst_8776;
var inst_8741 = null;
var inst_8742 = (0);
var inst_8743 = (0);
var state_8800__$1 = (function (){var statearr_8837 = state_8800;
(statearr_8837[(11)] = inst_8741);

(statearr_8837[(27)] = inst_8775);

(statearr_8837[(20)] = inst_8740);

(statearr_8837[(21)] = inst_8742);

(statearr_8837[(12)] = inst_8743);

return statearr_8837;
})();
var statearr_8838_8909 = state_8800__$1;
(statearr_8838_8909[(2)] = null);

(statearr_8838_8909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (43))){
var state_8800__$1 = state_8800;
var statearr_8839_8910 = state_8800__$1;
(statearr_8839_8910[(2)] = null);

(statearr_8839_8910[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (29))){
var inst_8784 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8840_8911 = state_8800__$1;
(statearr_8840_8911[(2)] = inst_8784);

(statearr_8840_8911[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (44))){
var inst_8793 = (state_8800[(2)]);
var state_8800__$1 = (function (){var statearr_8841 = state_8800;
(statearr_8841[(28)] = inst_8793);

return statearr_8841;
})();
var statearr_8842_8912 = state_8800__$1;
(statearr_8842_8912[(2)] = null);

(statearr_8842_8912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (6))){
var inst_8732 = (state_8800[(29)]);
var inst_8731 = cljs.core.deref.call(null,cs);
var inst_8732__$1 = cljs.core.keys.call(null,inst_8731);
var inst_8733 = cljs.core.count.call(null,inst_8732__$1);
var inst_8734 = cljs.core.reset_BANG_.call(null,dctr,inst_8733);
var inst_8739 = cljs.core.seq.call(null,inst_8732__$1);
var inst_8740 = inst_8739;
var inst_8741 = null;
var inst_8742 = (0);
var inst_8743 = (0);
var state_8800__$1 = (function (){var statearr_8843 = state_8800;
(statearr_8843[(30)] = inst_8734);

(statearr_8843[(11)] = inst_8741);

(statearr_8843[(29)] = inst_8732__$1);

(statearr_8843[(20)] = inst_8740);

(statearr_8843[(21)] = inst_8742);

(statearr_8843[(12)] = inst_8743);

return statearr_8843;
})();
var statearr_8844_8913 = state_8800__$1;
(statearr_8844_8913[(2)] = null);

(statearr_8844_8913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (28))){
var inst_8740 = (state_8800[(20)]);
var inst_8759 = (state_8800[(25)]);
var inst_8759__$1 = cljs.core.seq.call(null,inst_8740);
var state_8800__$1 = (function (){var statearr_8845 = state_8800;
(statearr_8845[(25)] = inst_8759__$1);

return statearr_8845;
})();
if(inst_8759__$1){
var statearr_8846_8914 = state_8800__$1;
(statearr_8846_8914[(1)] = (33));

} else {
var statearr_8847_8915 = state_8800__$1;
(statearr_8847_8915[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (25))){
var inst_8742 = (state_8800[(21)]);
var inst_8743 = (state_8800[(12)]);
var inst_8745 = (inst_8743 < inst_8742);
var inst_8746 = inst_8745;
var state_8800__$1 = state_8800;
if(cljs.core.truth_(inst_8746)){
var statearr_8848_8916 = state_8800__$1;
(statearr_8848_8916[(1)] = (27));

} else {
var statearr_8849_8917 = state_8800__$1;
(statearr_8849_8917[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (34))){
var state_8800__$1 = state_8800;
var statearr_8850_8918 = state_8800__$1;
(statearr_8850_8918[(2)] = null);

(statearr_8850_8918[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (17))){
var state_8800__$1 = state_8800;
var statearr_8851_8919 = state_8800__$1;
(statearr_8851_8919[(2)] = null);

(statearr_8851_8919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (3))){
var inst_8798 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8800__$1,inst_8798);
} else {
if((state_val_8801 === (12))){
var inst_8727 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8852_8920 = state_8800__$1;
(statearr_8852_8920[(2)] = inst_8727);

(statearr_8852_8920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (2))){
var state_8800__$1 = state_8800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8800__$1,(4),ch);
} else {
if((state_val_8801 === (23))){
var state_8800__$1 = state_8800;
var statearr_8853_8921 = state_8800__$1;
(statearr_8853_8921[(2)] = null);

(statearr_8853_8921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (35))){
var inst_8782 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8854_8922 = state_8800__$1;
(statearr_8854_8922[(2)] = inst_8782);

(statearr_8854_8922[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (19))){
var inst_8701 = (state_8800[(7)]);
var inst_8705 = cljs.core.chunk_first.call(null,inst_8701);
var inst_8706 = cljs.core.chunk_rest.call(null,inst_8701);
var inst_8707 = cljs.core.count.call(null,inst_8705);
var inst_8681 = inst_8706;
var inst_8682 = inst_8705;
var inst_8683 = inst_8707;
var inst_8684 = (0);
var state_8800__$1 = (function (){var statearr_8855 = state_8800;
(statearr_8855[(13)] = inst_8681);

(statearr_8855[(14)] = inst_8683);

(statearr_8855[(15)] = inst_8684);

(statearr_8855[(16)] = inst_8682);

return statearr_8855;
})();
var statearr_8856_8923 = state_8800__$1;
(statearr_8856_8923[(2)] = null);

(statearr_8856_8923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (11))){
var inst_8701 = (state_8800[(7)]);
var inst_8681 = (state_8800[(13)]);
var inst_8701__$1 = cljs.core.seq.call(null,inst_8681);
var state_8800__$1 = (function (){var statearr_8857 = state_8800;
(statearr_8857[(7)] = inst_8701__$1);

return statearr_8857;
})();
if(inst_8701__$1){
var statearr_8858_8924 = state_8800__$1;
(statearr_8858_8924[(1)] = (16));

} else {
var statearr_8859_8925 = state_8800__$1;
(statearr_8859_8925[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (9))){
var inst_8729 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8860_8926 = state_8800__$1;
(statearr_8860_8926[(2)] = inst_8729);

(statearr_8860_8926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (5))){
var inst_8679 = cljs.core.deref.call(null,cs);
var inst_8680 = cljs.core.seq.call(null,inst_8679);
var inst_8681 = inst_8680;
var inst_8682 = null;
var inst_8683 = (0);
var inst_8684 = (0);
var state_8800__$1 = (function (){var statearr_8861 = state_8800;
(statearr_8861[(13)] = inst_8681);

(statearr_8861[(14)] = inst_8683);

(statearr_8861[(15)] = inst_8684);

(statearr_8861[(16)] = inst_8682);

return statearr_8861;
})();
var statearr_8862_8927 = state_8800__$1;
(statearr_8862_8927[(2)] = null);

(statearr_8862_8927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (14))){
var state_8800__$1 = state_8800;
var statearr_8863_8928 = state_8800__$1;
(statearr_8863_8928[(2)] = null);

(statearr_8863_8928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (45))){
var inst_8790 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8864_8929 = state_8800__$1;
(statearr_8864_8929[(2)] = inst_8790);

(statearr_8864_8929[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (26))){
var inst_8732 = (state_8800[(29)]);
var inst_8786 = (state_8800[(2)]);
var inst_8787 = cljs.core.seq.call(null,inst_8732);
var state_8800__$1 = (function (){var statearr_8865 = state_8800;
(statearr_8865[(31)] = inst_8786);

return statearr_8865;
})();
if(inst_8787){
var statearr_8866_8930 = state_8800__$1;
(statearr_8866_8930[(1)] = (42));

} else {
var statearr_8867_8931 = state_8800__$1;
(statearr_8867_8931[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (16))){
var inst_8701 = (state_8800[(7)]);
var inst_8703 = cljs.core.chunked_seq_QMARK_.call(null,inst_8701);
var state_8800__$1 = state_8800;
if(inst_8703){
var statearr_8868_8932 = state_8800__$1;
(statearr_8868_8932[(1)] = (19));

} else {
var statearr_8869_8933 = state_8800__$1;
(statearr_8869_8933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (38))){
var inst_8779 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8870_8934 = state_8800__$1;
(statearr_8870_8934[(2)] = inst_8779);

(statearr_8870_8934[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (30))){
var state_8800__$1 = state_8800;
var statearr_8871_8935 = state_8800__$1;
(statearr_8871_8935[(2)] = null);

(statearr_8871_8935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (10))){
var inst_8684 = (state_8800[(15)]);
var inst_8682 = (state_8800[(16)]);
var inst_8690 = cljs.core._nth.call(null,inst_8682,inst_8684);
var inst_8691 = cljs.core.nth.call(null,inst_8690,(0),null);
var inst_8692 = cljs.core.nth.call(null,inst_8690,(1),null);
var state_8800__$1 = (function (){var statearr_8872 = state_8800;
(statearr_8872[(26)] = inst_8691);

return statearr_8872;
})();
if(cljs.core.truth_(inst_8692)){
var statearr_8873_8936 = state_8800__$1;
(statearr_8873_8936[(1)] = (13));

} else {
var statearr_8874_8937 = state_8800__$1;
(statearr_8874_8937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (18))){
var inst_8725 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8875_8938 = state_8800__$1;
(statearr_8875_8938[(2)] = inst_8725);

(statearr_8875_8938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (42))){
var state_8800__$1 = state_8800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8800__$1,(45),dchan);
} else {
if((state_val_8801 === (37))){
var inst_8672 = (state_8800[(9)]);
var inst_8768 = (state_8800[(23)]);
var inst_8759 = (state_8800[(25)]);
var inst_8768__$1 = cljs.core.first.call(null,inst_8759);
var inst_8769 = cljs.core.async.put_BANG_.call(null,inst_8768__$1,inst_8672,done);
var state_8800__$1 = (function (){var statearr_8876 = state_8800;
(statearr_8876[(23)] = inst_8768__$1);

return statearr_8876;
})();
if(cljs.core.truth_(inst_8769)){
var statearr_8877_8939 = state_8800__$1;
(statearr_8877_8939[(1)] = (39));

} else {
var statearr_8878_8940 = state_8800__$1;
(statearr_8878_8940[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (8))){
var inst_8683 = (state_8800[(14)]);
var inst_8684 = (state_8800[(15)]);
var inst_8686 = (inst_8684 < inst_8683);
var inst_8687 = inst_8686;
var state_8800__$1 = state_8800;
if(cljs.core.truth_(inst_8687)){
var statearr_8879_8941 = state_8800__$1;
(statearr_8879_8941[(1)] = (10));

} else {
var statearr_8880_8942 = state_8800__$1;
(statearr_8880_8942[(1)] = (11));

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
});})(c__7581__auto___8888,cs,m,dchan,dctr,done))
;
return ((function (switch__7469__auto__,c__7581__auto___8888,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7470__auto__ = null;
var cljs$core$async$mult_$_state_machine__7470__auto____0 = (function (){
var statearr_8884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8884[(0)] = cljs$core$async$mult_$_state_machine__7470__auto__);

(statearr_8884[(1)] = (1));

return statearr_8884;
});
var cljs$core$async$mult_$_state_machine__7470__auto____1 = (function (state_8800){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_8800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e8885){if((e8885 instanceof Object)){
var ex__7473__auto__ = e8885;
var statearr_8886_8943 = state_8800;
(statearr_8886_8943[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8944 = state_8800;
state_8800 = G__8944;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7470__auto__ = function(state_8800){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7470__auto____1.call(this,state_8800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7470__auto____0;
cljs$core$async$mult_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7470__auto____1;
return cljs$core$async$mult_$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___8888,cs,m,dchan,dctr,done))
})();
var state__7583__auto__ = (function (){var statearr_8887 = f__7582__auto__.call(null);
(statearr_8887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___8888);

return statearr_8887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___8888,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8945 = [];
var len__5726__auto___8948 = arguments.length;
var i__5727__auto___8949 = (0);
while(true){
if((i__5727__auto___8949 < len__5726__auto___8948)){
args8945.push((arguments[i__5727__auto___8949]));

var G__8950 = (i__5727__auto___8949 + (1));
i__5727__auto___8949 = G__8950;
continue;
} else {
}
break;
}

var G__8947 = args8945.length;
switch (G__8947) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8945.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___8962 = arguments.length;
var i__5727__auto___8963 = (0);
while(true){
if((i__5727__auto___8963 < len__5726__auto___8962)){
args__5733__auto__.push((arguments[i__5727__auto___8963]));

var G__8964 = (i__5727__auto___8963 + (1));
i__5727__auto___8963 = G__8964;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8956){
var map__8957 = p__8956;
var map__8957__$1 = ((((!((map__8957 == null)))?((((map__8957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8957):map__8957);
var opts = map__8957__$1;
var statearr_8959_8965 = state;
(statearr_8959_8965[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8957,map__8957__$1,opts){
return (function (val){
var statearr_8960_8966 = state;
(statearr_8960_8966[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8957,map__8957__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8961_8967 = state;
(statearr_8961_8967[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8952){
var G__8953 = cljs.core.first.call(null,seq8952);
var seq8952__$1 = cljs.core.next.call(null,seq8952);
var G__8954 = cljs.core.first.call(null,seq8952__$1);
var seq8952__$2 = cljs.core.next.call(null,seq8952__$1);
var G__8955 = cljs.core.first.call(null,seq8952__$2);
var seq8952__$3 = cljs.core.next.call(null,seq8952__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8953,G__8954,G__8955,seq8952__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9131 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9132){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9132 = meta9132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9133,meta9132__$1){
var self__ = this;
var _9133__$1 = this;
return (new cljs.core.async.t_cljs$core$async9131(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9132__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9133){
var self__ = this;
var _9133__$1 = this;
return self__.meta9132;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9132","meta9132",737561296,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9131";

cljs.core.async.t_cljs$core$async9131.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9131");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9131 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9131(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9132){
return (new cljs.core.async.t_cljs$core$async9131(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9132));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9131(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7581__auto___9294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___9294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___9294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9231){
var state_val_9232 = (state_9231[(1)]);
if((state_val_9232 === (7))){
var inst_9149 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9233_9295 = state_9231__$1;
(statearr_9233_9295[(2)] = inst_9149);

(statearr_9233_9295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (20))){
var inst_9161 = (state_9231[(7)]);
var state_9231__$1 = state_9231;
var statearr_9234_9296 = state_9231__$1;
(statearr_9234_9296[(2)] = inst_9161);

(statearr_9234_9296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (27))){
var state_9231__$1 = state_9231;
var statearr_9235_9297 = state_9231__$1;
(statearr_9235_9297[(2)] = null);

(statearr_9235_9297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (1))){
var inst_9137 = (state_9231[(8)]);
var inst_9137__$1 = calc_state.call(null);
var inst_9139 = (inst_9137__$1 == null);
var inst_9140 = cljs.core.not.call(null,inst_9139);
var state_9231__$1 = (function (){var statearr_9236 = state_9231;
(statearr_9236[(8)] = inst_9137__$1);

return statearr_9236;
})();
if(inst_9140){
var statearr_9237_9298 = state_9231__$1;
(statearr_9237_9298[(1)] = (2));

} else {
var statearr_9238_9299 = state_9231__$1;
(statearr_9238_9299[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (24))){
var inst_9205 = (state_9231[(9)]);
var inst_9184 = (state_9231[(10)]);
var inst_9191 = (state_9231[(11)]);
var inst_9205__$1 = inst_9184.call(null,inst_9191);
var state_9231__$1 = (function (){var statearr_9239 = state_9231;
(statearr_9239[(9)] = inst_9205__$1);

return statearr_9239;
})();
if(cljs.core.truth_(inst_9205__$1)){
var statearr_9240_9300 = state_9231__$1;
(statearr_9240_9300[(1)] = (29));

} else {
var statearr_9241_9301 = state_9231__$1;
(statearr_9241_9301[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (4))){
var inst_9152 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9152)){
var statearr_9242_9302 = state_9231__$1;
(statearr_9242_9302[(1)] = (8));

} else {
var statearr_9243_9303 = state_9231__$1;
(statearr_9243_9303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (15))){
var inst_9178 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9178)){
var statearr_9244_9304 = state_9231__$1;
(statearr_9244_9304[(1)] = (19));

} else {
var statearr_9245_9305 = state_9231__$1;
(statearr_9245_9305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (21))){
var inst_9183 = (state_9231[(12)]);
var inst_9183__$1 = (state_9231[(2)]);
var inst_9184 = cljs.core.get.call(null,inst_9183__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9185 = cljs.core.get.call(null,inst_9183__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9186 = cljs.core.get.call(null,inst_9183__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9231__$1 = (function (){var statearr_9246 = state_9231;
(statearr_9246[(10)] = inst_9184);

(statearr_9246[(13)] = inst_9185);

(statearr_9246[(12)] = inst_9183__$1);

return statearr_9246;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9231__$1,(22),inst_9186);
} else {
if((state_val_9232 === (31))){
var inst_9213 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9213)){
var statearr_9247_9306 = state_9231__$1;
(statearr_9247_9306[(1)] = (32));

} else {
var statearr_9248_9307 = state_9231__$1;
(statearr_9248_9307[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (32))){
var inst_9190 = (state_9231[(14)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9231__$1,(35),out,inst_9190);
} else {
if((state_val_9232 === (33))){
var inst_9183 = (state_9231[(12)]);
var inst_9161 = inst_9183;
var state_9231__$1 = (function (){var statearr_9249 = state_9231;
(statearr_9249[(7)] = inst_9161);

return statearr_9249;
})();
var statearr_9250_9308 = state_9231__$1;
(statearr_9250_9308[(2)] = null);

(statearr_9250_9308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (13))){
var inst_9161 = (state_9231[(7)]);
var inst_9168 = inst_9161.cljs$lang$protocol_mask$partition0$;
var inst_9169 = (inst_9168 & (64));
var inst_9170 = inst_9161.cljs$core$ISeq$;
var inst_9171 = (inst_9169) || (inst_9170);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9171)){
var statearr_9251_9309 = state_9231__$1;
(statearr_9251_9309[(1)] = (16));

} else {
var statearr_9252_9310 = state_9231__$1;
(statearr_9252_9310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (22))){
var inst_9190 = (state_9231[(14)]);
var inst_9191 = (state_9231[(11)]);
var inst_9189 = (state_9231[(2)]);
var inst_9190__$1 = cljs.core.nth.call(null,inst_9189,(0),null);
var inst_9191__$1 = cljs.core.nth.call(null,inst_9189,(1),null);
var inst_9192 = (inst_9190__$1 == null);
var inst_9193 = cljs.core._EQ_.call(null,inst_9191__$1,change);
var inst_9194 = (inst_9192) || (inst_9193);
var state_9231__$1 = (function (){var statearr_9253 = state_9231;
(statearr_9253[(14)] = inst_9190__$1);

(statearr_9253[(11)] = inst_9191__$1);

return statearr_9253;
})();
if(cljs.core.truth_(inst_9194)){
var statearr_9254_9311 = state_9231__$1;
(statearr_9254_9311[(1)] = (23));

} else {
var statearr_9255_9312 = state_9231__$1;
(statearr_9255_9312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (36))){
var inst_9183 = (state_9231[(12)]);
var inst_9161 = inst_9183;
var state_9231__$1 = (function (){var statearr_9256 = state_9231;
(statearr_9256[(7)] = inst_9161);

return statearr_9256;
})();
var statearr_9257_9313 = state_9231__$1;
(statearr_9257_9313[(2)] = null);

(statearr_9257_9313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (29))){
var inst_9205 = (state_9231[(9)]);
var state_9231__$1 = state_9231;
var statearr_9258_9314 = state_9231__$1;
(statearr_9258_9314[(2)] = inst_9205);

(statearr_9258_9314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (6))){
var state_9231__$1 = state_9231;
var statearr_9259_9315 = state_9231__$1;
(statearr_9259_9315[(2)] = false);

(statearr_9259_9315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (28))){
var inst_9201 = (state_9231[(2)]);
var inst_9202 = calc_state.call(null);
var inst_9161 = inst_9202;
var state_9231__$1 = (function (){var statearr_9260 = state_9231;
(statearr_9260[(7)] = inst_9161);

(statearr_9260[(15)] = inst_9201);

return statearr_9260;
})();
var statearr_9261_9316 = state_9231__$1;
(statearr_9261_9316[(2)] = null);

(statearr_9261_9316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (25))){
var inst_9227 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9262_9317 = state_9231__$1;
(statearr_9262_9317[(2)] = inst_9227);

(statearr_9262_9317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (34))){
var inst_9225 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9263_9318 = state_9231__$1;
(statearr_9263_9318[(2)] = inst_9225);

(statearr_9263_9318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (17))){
var state_9231__$1 = state_9231;
var statearr_9264_9319 = state_9231__$1;
(statearr_9264_9319[(2)] = false);

(statearr_9264_9319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (3))){
var state_9231__$1 = state_9231;
var statearr_9265_9320 = state_9231__$1;
(statearr_9265_9320[(2)] = false);

(statearr_9265_9320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (12))){
var inst_9229 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9231__$1,inst_9229);
} else {
if((state_val_9232 === (2))){
var inst_9137 = (state_9231[(8)]);
var inst_9142 = inst_9137.cljs$lang$protocol_mask$partition0$;
var inst_9143 = (inst_9142 & (64));
var inst_9144 = inst_9137.cljs$core$ISeq$;
var inst_9145 = (inst_9143) || (inst_9144);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9145)){
var statearr_9266_9321 = state_9231__$1;
(statearr_9266_9321[(1)] = (5));

} else {
var statearr_9267_9322 = state_9231__$1;
(statearr_9267_9322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (23))){
var inst_9190 = (state_9231[(14)]);
var inst_9196 = (inst_9190 == null);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9196)){
var statearr_9268_9323 = state_9231__$1;
(statearr_9268_9323[(1)] = (26));

} else {
var statearr_9269_9324 = state_9231__$1;
(statearr_9269_9324[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (35))){
var inst_9216 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9216)){
var statearr_9270_9325 = state_9231__$1;
(statearr_9270_9325[(1)] = (36));

} else {
var statearr_9271_9326 = state_9231__$1;
(statearr_9271_9326[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (19))){
var inst_9161 = (state_9231[(7)]);
var inst_9180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9161);
var state_9231__$1 = state_9231;
var statearr_9272_9327 = state_9231__$1;
(statearr_9272_9327[(2)] = inst_9180);

(statearr_9272_9327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (11))){
var inst_9161 = (state_9231[(7)]);
var inst_9165 = (inst_9161 == null);
var inst_9166 = cljs.core.not.call(null,inst_9165);
var state_9231__$1 = state_9231;
if(inst_9166){
var statearr_9273_9328 = state_9231__$1;
(statearr_9273_9328[(1)] = (13));

} else {
var statearr_9274_9329 = state_9231__$1;
(statearr_9274_9329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (9))){
var inst_9137 = (state_9231[(8)]);
var state_9231__$1 = state_9231;
var statearr_9275_9330 = state_9231__$1;
(statearr_9275_9330[(2)] = inst_9137);

(statearr_9275_9330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (5))){
var state_9231__$1 = state_9231;
var statearr_9276_9331 = state_9231__$1;
(statearr_9276_9331[(2)] = true);

(statearr_9276_9331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (14))){
var state_9231__$1 = state_9231;
var statearr_9277_9332 = state_9231__$1;
(statearr_9277_9332[(2)] = false);

(statearr_9277_9332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (26))){
var inst_9191 = (state_9231[(11)]);
var inst_9198 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9191);
var state_9231__$1 = state_9231;
var statearr_9278_9333 = state_9231__$1;
(statearr_9278_9333[(2)] = inst_9198);

(statearr_9278_9333[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (16))){
var state_9231__$1 = state_9231;
var statearr_9279_9334 = state_9231__$1;
(statearr_9279_9334[(2)] = true);

(statearr_9279_9334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (38))){
var inst_9221 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9280_9335 = state_9231__$1;
(statearr_9280_9335[(2)] = inst_9221);

(statearr_9280_9335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (30))){
var inst_9184 = (state_9231[(10)]);
var inst_9185 = (state_9231[(13)]);
var inst_9191 = (state_9231[(11)]);
var inst_9208 = cljs.core.empty_QMARK_.call(null,inst_9184);
var inst_9209 = inst_9185.call(null,inst_9191);
var inst_9210 = cljs.core.not.call(null,inst_9209);
var inst_9211 = (inst_9208) && (inst_9210);
var state_9231__$1 = state_9231;
var statearr_9281_9336 = state_9231__$1;
(statearr_9281_9336[(2)] = inst_9211);

(statearr_9281_9336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (10))){
var inst_9137 = (state_9231[(8)]);
var inst_9157 = (state_9231[(2)]);
var inst_9158 = cljs.core.get.call(null,inst_9157,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9159 = cljs.core.get.call(null,inst_9157,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9160 = cljs.core.get.call(null,inst_9157,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9161 = inst_9137;
var state_9231__$1 = (function (){var statearr_9282 = state_9231;
(statearr_9282[(16)] = inst_9159);

(statearr_9282[(17)] = inst_9158);

(statearr_9282[(7)] = inst_9161);

(statearr_9282[(18)] = inst_9160);

return statearr_9282;
})();
var statearr_9283_9337 = state_9231__$1;
(statearr_9283_9337[(2)] = null);

(statearr_9283_9337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (18))){
var inst_9175 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9284_9338 = state_9231__$1;
(statearr_9284_9338[(2)] = inst_9175);

(statearr_9284_9338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (37))){
var state_9231__$1 = state_9231;
var statearr_9285_9339 = state_9231__$1;
(statearr_9285_9339[(2)] = null);

(statearr_9285_9339[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (8))){
var inst_9137 = (state_9231[(8)]);
var inst_9154 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9137);
var state_9231__$1 = state_9231;
var statearr_9286_9340 = state_9231__$1;
(statearr_9286_9340[(2)] = inst_9154);

(statearr_9286_9340[(1)] = (10));


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
});})(c__7581__auto___9294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7469__auto__,c__7581__auto___9294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7470__auto__ = null;
var cljs$core$async$mix_$_state_machine__7470__auto____0 = (function (){
var statearr_9290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9290[(0)] = cljs$core$async$mix_$_state_machine__7470__auto__);

(statearr_9290[(1)] = (1));

return statearr_9290;
});
var cljs$core$async$mix_$_state_machine__7470__auto____1 = (function (state_9231){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_9231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e9291){if((e9291 instanceof Object)){
var ex__7473__auto__ = e9291;
var statearr_9292_9341 = state_9231;
(statearr_9292_9341[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9342 = state_9231;
state_9231 = G__9342;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7470__auto__ = function(state_9231){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7470__auto____1.call(this,state_9231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7470__auto____0;
cljs$core$async$mix_$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7470__auto____1;
return cljs$core$async$mix_$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___9294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7583__auto__ = (function (){var statearr_9293 = f__7582__auto__.call(null);
(statearr_9293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___9294);

return statearr_9293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___9294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args9343 = [];
var len__5726__auto___9346 = arguments.length;
var i__5727__auto___9347 = (0);
while(true){
if((i__5727__auto___9347 < len__5726__auto___9346)){
args9343.push((arguments[i__5727__auto___9347]));

var G__9348 = (i__5727__auto___9347 + (1));
i__5727__auto___9347 = G__9348;
continue;
} else {
}
break;
}

var G__9345 = args9343.length;
switch (G__9345) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9343.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args9351 = [];
var len__5726__auto___9476 = arguments.length;
var i__5727__auto___9477 = (0);
while(true){
if((i__5727__auto___9477 < len__5726__auto___9476)){
args9351.push((arguments[i__5727__auto___9477]));

var G__9478 = (i__5727__auto___9477 + (1));
i__5727__auto___9477 = G__9478;
continue;
} else {
}
break;
}

var G__9353 = args9351.length;
switch (G__9353) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9351.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__9350_SHARP_){
if(cljs.core.truth_(p1__9350_SHARP_.call(null,topic))){
return p1__9350_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9350_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9354 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9355){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9355 = meta9355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9356,meta9355__$1){
var self__ = this;
var _9356__$1 = this;
return (new cljs.core.async.t_cljs$core$async9354(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9355__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9356){
var self__ = this;
var _9356__$1 = this;
return self__.meta9355;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9355","meta9355",189286096,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9354";

cljs.core.async.t_cljs$core$async9354.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9354");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9354 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9355){
return (new cljs.core.async.t_cljs$core$async9354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9355));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9354(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7581__auto___9480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___9480,mults,ensure_mult,p){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___9480,mults,ensure_mult,p){
return (function (state_9428){
var state_val_9429 = (state_9428[(1)]);
if((state_val_9429 === (7))){
var inst_9424 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9430_9481 = state_9428__$1;
(statearr_9430_9481[(2)] = inst_9424);

(statearr_9430_9481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (20))){
var state_9428__$1 = state_9428;
var statearr_9431_9482 = state_9428__$1;
(statearr_9431_9482[(2)] = null);

(statearr_9431_9482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (1))){
var state_9428__$1 = state_9428;
var statearr_9432_9483 = state_9428__$1;
(statearr_9432_9483[(2)] = null);

(statearr_9432_9483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (24))){
var inst_9407 = (state_9428[(7)]);
var inst_9416 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9407);
var state_9428__$1 = state_9428;
var statearr_9433_9484 = state_9428__$1;
(statearr_9433_9484[(2)] = inst_9416);

(statearr_9433_9484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (4))){
var inst_9359 = (state_9428[(8)]);
var inst_9359__$1 = (state_9428[(2)]);
var inst_9360 = (inst_9359__$1 == null);
var state_9428__$1 = (function (){var statearr_9434 = state_9428;
(statearr_9434[(8)] = inst_9359__$1);

return statearr_9434;
})();
if(cljs.core.truth_(inst_9360)){
var statearr_9435_9485 = state_9428__$1;
(statearr_9435_9485[(1)] = (5));

} else {
var statearr_9436_9486 = state_9428__$1;
(statearr_9436_9486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (15))){
var inst_9401 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9437_9487 = state_9428__$1;
(statearr_9437_9487[(2)] = inst_9401);

(statearr_9437_9487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (21))){
var inst_9421 = (state_9428[(2)]);
var state_9428__$1 = (function (){var statearr_9438 = state_9428;
(statearr_9438[(9)] = inst_9421);

return statearr_9438;
})();
var statearr_9439_9488 = state_9428__$1;
(statearr_9439_9488[(2)] = null);

(statearr_9439_9488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (13))){
var inst_9383 = (state_9428[(10)]);
var inst_9385 = cljs.core.chunked_seq_QMARK_.call(null,inst_9383);
var state_9428__$1 = state_9428;
if(inst_9385){
var statearr_9440_9489 = state_9428__$1;
(statearr_9440_9489[(1)] = (16));

} else {
var statearr_9441_9490 = state_9428__$1;
(statearr_9441_9490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (22))){
var inst_9413 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
if(cljs.core.truth_(inst_9413)){
var statearr_9442_9491 = state_9428__$1;
(statearr_9442_9491[(1)] = (23));

} else {
var statearr_9443_9492 = state_9428__$1;
(statearr_9443_9492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (6))){
var inst_9409 = (state_9428[(11)]);
var inst_9407 = (state_9428[(7)]);
var inst_9359 = (state_9428[(8)]);
var inst_9407__$1 = topic_fn.call(null,inst_9359);
var inst_9408 = cljs.core.deref.call(null,mults);
var inst_9409__$1 = cljs.core.get.call(null,inst_9408,inst_9407__$1);
var state_9428__$1 = (function (){var statearr_9444 = state_9428;
(statearr_9444[(11)] = inst_9409__$1);

(statearr_9444[(7)] = inst_9407__$1);

return statearr_9444;
})();
if(cljs.core.truth_(inst_9409__$1)){
var statearr_9445_9493 = state_9428__$1;
(statearr_9445_9493[(1)] = (19));

} else {
var statearr_9446_9494 = state_9428__$1;
(statearr_9446_9494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (25))){
var inst_9418 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9447_9495 = state_9428__$1;
(statearr_9447_9495[(2)] = inst_9418);

(statearr_9447_9495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (17))){
var inst_9383 = (state_9428[(10)]);
var inst_9392 = cljs.core.first.call(null,inst_9383);
var inst_9393 = cljs.core.async.muxch_STAR_.call(null,inst_9392);
var inst_9394 = cljs.core.async.close_BANG_.call(null,inst_9393);
var inst_9395 = cljs.core.next.call(null,inst_9383);
var inst_9369 = inst_9395;
var inst_9370 = null;
var inst_9371 = (0);
var inst_9372 = (0);
var state_9428__$1 = (function (){var statearr_9448 = state_9428;
(statearr_9448[(12)] = inst_9394);

(statearr_9448[(13)] = inst_9371);

(statearr_9448[(14)] = inst_9369);

(statearr_9448[(15)] = inst_9372);

(statearr_9448[(16)] = inst_9370);

return statearr_9448;
})();
var statearr_9449_9496 = state_9428__$1;
(statearr_9449_9496[(2)] = null);

(statearr_9449_9496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (3))){
var inst_9426 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9428__$1,inst_9426);
} else {
if((state_val_9429 === (12))){
var inst_9403 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9450_9497 = state_9428__$1;
(statearr_9450_9497[(2)] = inst_9403);

(statearr_9450_9497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (2))){
var state_9428__$1 = state_9428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9428__$1,(4),ch);
} else {
if((state_val_9429 === (23))){
var state_9428__$1 = state_9428;
var statearr_9451_9498 = state_9428__$1;
(statearr_9451_9498[(2)] = null);

(statearr_9451_9498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (19))){
var inst_9409 = (state_9428[(11)]);
var inst_9359 = (state_9428[(8)]);
var inst_9411 = cljs.core.async.muxch_STAR_.call(null,inst_9409);
var state_9428__$1 = state_9428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9428__$1,(22),inst_9411,inst_9359);
} else {
if((state_val_9429 === (11))){
var inst_9369 = (state_9428[(14)]);
var inst_9383 = (state_9428[(10)]);
var inst_9383__$1 = cljs.core.seq.call(null,inst_9369);
var state_9428__$1 = (function (){var statearr_9452 = state_9428;
(statearr_9452[(10)] = inst_9383__$1);

return statearr_9452;
})();
if(inst_9383__$1){
var statearr_9453_9499 = state_9428__$1;
(statearr_9453_9499[(1)] = (13));

} else {
var statearr_9454_9500 = state_9428__$1;
(statearr_9454_9500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (9))){
var inst_9405 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9455_9501 = state_9428__$1;
(statearr_9455_9501[(2)] = inst_9405);

(statearr_9455_9501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (5))){
var inst_9366 = cljs.core.deref.call(null,mults);
var inst_9367 = cljs.core.vals.call(null,inst_9366);
var inst_9368 = cljs.core.seq.call(null,inst_9367);
var inst_9369 = inst_9368;
var inst_9370 = null;
var inst_9371 = (0);
var inst_9372 = (0);
var state_9428__$1 = (function (){var statearr_9456 = state_9428;
(statearr_9456[(13)] = inst_9371);

(statearr_9456[(14)] = inst_9369);

(statearr_9456[(15)] = inst_9372);

(statearr_9456[(16)] = inst_9370);

return statearr_9456;
})();
var statearr_9457_9502 = state_9428__$1;
(statearr_9457_9502[(2)] = null);

(statearr_9457_9502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (14))){
var state_9428__$1 = state_9428;
var statearr_9461_9503 = state_9428__$1;
(statearr_9461_9503[(2)] = null);

(statearr_9461_9503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (16))){
var inst_9383 = (state_9428[(10)]);
var inst_9387 = cljs.core.chunk_first.call(null,inst_9383);
var inst_9388 = cljs.core.chunk_rest.call(null,inst_9383);
var inst_9389 = cljs.core.count.call(null,inst_9387);
var inst_9369 = inst_9388;
var inst_9370 = inst_9387;
var inst_9371 = inst_9389;
var inst_9372 = (0);
var state_9428__$1 = (function (){var statearr_9462 = state_9428;
(statearr_9462[(13)] = inst_9371);

(statearr_9462[(14)] = inst_9369);

(statearr_9462[(15)] = inst_9372);

(statearr_9462[(16)] = inst_9370);

return statearr_9462;
})();
var statearr_9463_9504 = state_9428__$1;
(statearr_9463_9504[(2)] = null);

(statearr_9463_9504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (10))){
var inst_9371 = (state_9428[(13)]);
var inst_9369 = (state_9428[(14)]);
var inst_9372 = (state_9428[(15)]);
var inst_9370 = (state_9428[(16)]);
var inst_9377 = cljs.core._nth.call(null,inst_9370,inst_9372);
var inst_9378 = cljs.core.async.muxch_STAR_.call(null,inst_9377);
var inst_9379 = cljs.core.async.close_BANG_.call(null,inst_9378);
var inst_9380 = (inst_9372 + (1));
var tmp9458 = inst_9371;
var tmp9459 = inst_9369;
var tmp9460 = inst_9370;
var inst_9369__$1 = tmp9459;
var inst_9370__$1 = tmp9460;
var inst_9371__$1 = tmp9458;
var inst_9372__$1 = inst_9380;
var state_9428__$1 = (function (){var statearr_9464 = state_9428;
(statearr_9464[(13)] = inst_9371__$1);

(statearr_9464[(14)] = inst_9369__$1);

(statearr_9464[(15)] = inst_9372__$1);

(statearr_9464[(17)] = inst_9379);

(statearr_9464[(16)] = inst_9370__$1);

return statearr_9464;
})();
var statearr_9465_9505 = state_9428__$1;
(statearr_9465_9505[(2)] = null);

(statearr_9465_9505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (18))){
var inst_9398 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9466_9506 = state_9428__$1;
(statearr_9466_9506[(2)] = inst_9398);

(statearr_9466_9506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (8))){
var inst_9371 = (state_9428[(13)]);
var inst_9372 = (state_9428[(15)]);
var inst_9374 = (inst_9372 < inst_9371);
var inst_9375 = inst_9374;
var state_9428__$1 = state_9428;
if(cljs.core.truth_(inst_9375)){
var statearr_9467_9507 = state_9428__$1;
(statearr_9467_9507[(1)] = (10));

} else {
var statearr_9468_9508 = state_9428__$1;
(statearr_9468_9508[(1)] = (11));

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
});})(c__7581__auto___9480,mults,ensure_mult,p))
;
return ((function (switch__7469__auto__,c__7581__auto___9480,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_9472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9472[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_9472[(1)] = (1));

return statearr_9472;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_9428){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_9428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e9473){if((e9473 instanceof Object)){
var ex__7473__auto__ = e9473;
var statearr_9474_9509 = state_9428;
(statearr_9474_9509[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9510 = state_9428;
state_9428 = G__9510;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_9428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_9428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___9480,mults,ensure_mult,p))
})();
var state__7583__auto__ = (function (){var statearr_9475 = f__7582__auto__.call(null);
(statearr_9475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___9480);

return statearr_9475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___9480,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9511 = [];
var len__5726__auto___9514 = arguments.length;
var i__5727__auto___9515 = (0);
while(true){
if((i__5727__auto___9515 < len__5726__auto___9514)){
args9511.push((arguments[i__5727__auto___9515]));

var G__9516 = (i__5727__auto___9515 + (1));
i__5727__auto___9515 = G__9516;
continue;
} else {
}
break;
}

var G__9513 = args9511.length;
switch (G__9513) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9511.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9518 = [];
var len__5726__auto___9521 = arguments.length;
var i__5727__auto___9522 = (0);
while(true){
if((i__5727__auto___9522 < len__5726__auto___9521)){
args9518.push((arguments[i__5727__auto___9522]));

var G__9523 = (i__5727__auto___9522 + (1));
i__5727__auto___9522 = G__9523;
continue;
} else {
}
break;
}

var G__9520 = args9518.length;
switch (G__9520) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9518.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9525 = [];
var len__5726__auto___9596 = arguments.length;
var i__5727__auto___9597 = (0);
while(true){
if((i__5727__auto___9597 < len__5726__auto___9596)){
args9525.push((arguments[i__5727__auto___9597]));

var G__9598 = (i__5727__auto___9597 + (1));
i__5727__auto___9597 = G__9598;
continue;
} else {
}
break;
}

var G__9527 = args9525.length;
switch (G__9527) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9525.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7581__auto___9600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___9600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___9600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9566){
var state_val_9567 = (state_9566[(1)]);
if((state_val_9567 === (7))){
var state_9566__$1 = state_9566;
var statearr_9568_9601 = state_9566__$1;
(statearr_9568_9601[(2)] = null);

(statearr_9568_9601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (1))){
var state_9566__$1 = state_9566;
var statearr_9569_9602 = state_9566__$1;
(statearr_9569_9602[(2)] = null);

(statearr_9569_9602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (4))){
var inst_9530 = (state_9566[(7)]);
var inst_9532 = (inst_9530 < cnt);
var state_9566__$1 = state_9566;
if(cljs.core.truth_(inst_9532)){
var statearr_9570_9603 = state_9566__$1;
(statearr_9570_9603[(1)] = (6));

} else {
var statearr_9571_9604 = state_9566__$1;
(statearr_9571_9604[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (15))){
var inst_9562 = (state_9566[(2)]);
var state_9566__$1 = state_9566;
var statearr_9572_9605 = state_9566__$1;
(statearr_9572_9605[(2)] = inst_9562);

(statearr_9572_9605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (13))){
var inst_9555 = cljs.core.async.close_BANG_.call(null,out);
var state_9566__$1 = state_9566;
var statearr_9573_9606 = state_9566__$1;
(statearr_9573_9606[(2)] = inst_9555);

(statearr_9573_9606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (6))){
var state_9566__$1 = state_9566;
var statearr_9574_9607 = state_9566__$1;
(statearr_9574_9607[(2)] = null);

(statearr_9574_9607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (3))){
var inst_9564 = (state_9566[(2)]);
var state_9566__$1 = state_9566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9566__$1,inst_9564);
} else {
if((state_val_9567 === (12))){
var inst_9552 = (state_9566[(8)]);
var inst_9552__$1 = (state_9566[(2)]);
var inst_9553 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9552__$1);
var state_9566__$1 = (function (){var statearr_9575 = state_9566;
(statearr_9575[(8)] = inst_9552__$1);

return statearr_9575;
})();
if(cljs.core.truth_(inst_9553)){
var statearr_9576_9608 = state_9566__$1;
(statearr_9576_9608[(1)] = (13));

} else {
var statearr_9577_9609 = state_9566__$1;
(statearr_9577_9609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (2))){
var inst_9529 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9530 = (0);
var state_9566__$1 = (function (){var statearr_9578 = state_9566;
(statearr_9578[(7)] = inst_9530);

(statearr_9578[(9)] = inst_9529);

return statearr_9578;
})();
var statearr_9579_9610 = state_9566__$1;
(statearr_9579_9610[(2)] = null);

(statearr_9579_9610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (11))){
var inst_9530 = (state_9566[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9566,(10),Object,null,(9));
var inst_9539 = chs__$1.call(null,inst_9530);
var inst_9540 = done.call(null,inst_9530);
var inst_9541 = cljs.core.async.take_BANG_.call(null,inst_9539,inst_9540);
var state_9566__$1 = state_9566;
var statearr_9580_9611 = state_9566__$1;
(statearr_9580_9611[(2)] = inst_9541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9566__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (9))){
var inst_9530 = (state_9566[(7)]);
var inst_9543 = (state_9566[(2)]);
var inst_9544 = (inst_9530 + (1));
var inst_9530__$1 = inst_9544;
var state_9566__$1 = (function (){var statearr_9581 = state_9566;
(statearr_9581[(7)] = inst_9530__$1);

(statearr_9581[(10)] = inst_9543);

return statearr_9581;
})();
var statearr_9582_9612 = state_9566__$1;
(statearr_9582_9612[(2)] = null);

(statearr_9582_9612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (5))){
var inst_9550 = (state_9566[(2)]);
var state_9566__$1 = (function (){var statearr_9583 = state_9566;
(statearr_9583[(11)] = inst_9550);

return statearr_9583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9566__$1,(12),dchan);
} else {
if((state_val_9567 === (14))){
var inst_9552 = (state_9566[(8)]);
var inst_9557 = cljs.core.apply.call(null,f,inst_9552);
var state_9566__$1 = state_9566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9566__$1,(16),out,inst_9557);
} else {
if((state_val_9567 === (16))){
var inst_9559 = (state_9566[(2)]);
var state_9566__$1 = (function (){var statearr_9584 = state_9566;
(statearr_9584[(12)] = inst_9559);

return statearr_9584;
})();
var statearr_9585_9613 = state_9566__$1;
(statearr_9585_9613[(2)] = null);

(statearr_9585_9613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (10))){
var inst_9534 = (state_9566[(2)]);
var inst_9535 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9566__$1 = (function (){var statearr_9586 = state_9566;
(statearr_9586[(13)] = inst_9534);

return statearr_9586;
})();
var statearr_9587_9614 = state_9566__$1;
(statearr_9587_9614[(2)] = inst_9535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9566__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9567 === (8))){
var inst_9548 = (state_9566[(2)]);
var state_9566__$1 = state_9566;
var statearr_9588_9615 = state_9566__$1;
(statearr_9588_9615[(2)] = inst_9548);

(statearr_9588_9615[(1)] = (5));


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
});})(c__7581__auto___9600,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7469__auto__,c__7581__auto___9600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_9592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9592[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_9592[(1)] = (1));

return statearr_9592;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_9566){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_9566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e9593){if((e9593 instanceof Object)){
var ex__7473__auto__ = e9593;
var statearr_9594_9616 = state_9566;
(statearr_9594_9616[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9617 = state_9566;
state_9566 = G__9617;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_9566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_9566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___9600,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7583__auto__ = (function (){var statearr_9595 = f__7582__auto__.call(null);
(statearr_9595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___9600);

return statearr_9595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___9600,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9619 = [];
var len__5726__auto___9675 = arguments.length;
var i__5727__auto___9676 = (0);
while(true){
if((i__5727__auto___9676 < len__5726__auto___9675)){
args9619.push((arguments[i__5727__auto___9676]));

var G__9677 = (i__5727__auto___9676 + (1));
i__5727__auto___9676 = G__9677;
continue;
} else {
}
break;
}

var G__9621 = args9619.length;
switch (G__9621) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9619.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7581__auto___9679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___9679,out){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___9679,out){
return (function (state_9651){
var state_val_9652 = (state_9651[(1)]);
if((state_val_9652 === (7))){
var inst_9631 = (state_9651[(7)]);
var inst_9630 = (state_9651[(8)]);
var inst_9630__$1 = (state_9651[(2)]);
var inst_9631__$1 = cljs.core.nth.call(null,inst_9630__$1,(0),null);
var inst_9632 = cljs.core.nth.call(null,inst_9630__$1,(1),null);
var inst_9633 = (inst_9631__$1 == null);
var state_9651__$1 = (function (){var statearr_9653 = state_9651;
(statearr_9653[(7)] = inst_9631__$1);

(statearr_9653[(9)] = inst_9632);

(statearr_9653[(8)] = inst_9630__$1);

return statearr_9653;
})();
if(cljs.core.truth_(inst_9633)){
var statearr_9654_9680 = state_9651__$1;
(statearr_9654_9680[(1)] = (8));

} else {
var statearr_9655_9681 = state_9651__$1;
(statearr_9655_9681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9652 === (1))){
var inst_9622 = cljs.core.vec.call(null,chs);
var inst_9623 = inst_9622;
var state_9651__$1 = (function (){var statearr_9656 = state_9651;
(statearr_9656[(10)] = inst_9623);

return statearr_9656;
})();
var statearr_9657_9682 = state_9651__$1;
(statearr_9657_9682[(2)] = null);

(statearr_9657_9682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9652 === (4))){
var inst_9623 = (state_9651[(10)]);
var state_9651__$1 = state_9651;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9651__$1,(7),inst_9623);
} else {
if((state_val_9652 === (6))){
var inst_9647 = (state_9651[(2)]);
var state_9651__$1 = state_9651;
var statearr_9658_9683 = state_9651__$1;
(statearr_9658_9683[(2)] = inst_9647);

(statearr_9658_9683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9652 === (3))){
var inst_9649 = (state_9651[(2)]);
var state_9651__$1 = state_9651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9651__$1,inst_9649);
} else {
if((state_val_9652 === (2))){
var inst_9623 = (state_9651[(10)]);
var inst_9625 = cljs.core.count.call(null,inst_9623);
var inst_9626 = (inst_9625 > (0));
var state_9651__$1 = state_9651;
if(cljs.core.truth_(inst_9626)){
var statearr_9660_9684 = state_9651__$1;
(statearr_9660_9684[(1)] = (4));

} else {
var statearr_9661_9685 = state_9651__$1;
(statearr_9661_9685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9652 === (11))){
var inst_9623 = (state_9651[(10)]);
var inst_9640 = (state_9651[(2)]);
var tmp9659 = inst_9623;
var inst_9623__$1 = tmp9659;
var state_9651__$1 = (function (){var statearr_9662 = state_9651;
(statearr_9662[(11)] = inst_9640);

(statearr_9662[(10)] = inst_9623__$1);

return statearr_9662;
})();
var statearr_9663_9686 = state_9651__$1;
(statearr_9663_9686[(2)] = null);

(statearr_9663_9686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9652 === (9))){
var inst_9631 = (state_9651[(7)]);
var state_9651__$1 = state_9651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9651__$1,(11),out,inst_9631);
} else {
if((state_val_9652 === (5))){
var inst_9645 = cljs.core.async.close_BANG_.call(null,out);
var state_9651__$1 = state_9651;
var statearr_9664_9687 = state_9651__$1;
(statearr_9664_9687[(2)] = inst_9645);

(statearr_9664_9687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9652 === (10))){
var inst_9643 = (state_9651[(2)]);
var state_9651__$1 = state_9651;
var statearr_9665_9688 = state_9651__$1;
(statearr_9665_9688[(2)] = inst_9643);

(statearr_9665_9688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9652 === (8))){
var inst_9631 = (state_9651[(7)]);
var inst_9623 = (state_9651[(10)]);
var inst_9632 = (state_9651[(9)]);
var inst_9630 = (state_9651[(8)]);
var inst_9635 = (function (){var cs = inst_9623;
var vec__9628 = inst_9630;
var v = inst_9631;
var c = inst_9632;
return ((function (cs,vec__9628,v,c,inst_9631,inst_9623,inst_9632,inst_9630,state_val_9652,c__7581__auto___9679,out){
return (function (p1__9618_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9618_SHARP_);
});
;})(cs,vec__9628,v,c,inst_9631,inst_9623,inst_9632,inst_9630,state_val_9652,c__7581__auto___9679,out))
})();
var inst_9636 = cljs.core.filterv.call(null,inst_9635,inst_9623);
var inst_9623__$1 = inst_9636;
var state_9651__$1 = (function (){var statearr_9666 = state_9651;
(statearr_9666[(10)] = inst_9623__$1);

return statearr_9666;
})();
var statearr_9667_9689 = state_9651__$1;
(statearr_9667_9689[(2)] = null);

(statearr_9667_9689[(1)] = (2));


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
});})(c__7581__auto___9679,out))
;
return ((function (switch__7469__auto__,c__7581__auto___9679,out){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_9671 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9671[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_9671[(1)] = (1));

return statearr_9671;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_9651){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_9651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e9672){if((e9672 instanceof Object)){
var ex__7473__auto__ = e9672;
var statearr_9673_9690 = state_9651;
(statearr_9673_9690[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9691 = state_9651;
state_9651 = G__9691;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_9651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_9651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___9679,out))
})();
var state__7583__auto__ = (function (){var statearr_9674 = f__7582__auto__.call(null);
(statearr_9674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___9679);

return statearr_9674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___9679,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9692 = [];
var len__5726__auto___9741 = arguments.length;
var i__5727__auto___9742 = (0);
while(true){
if((i__5727__auto___9742 < len__5726__auto___9741)){
args9692.push((arguments[i__5727__auto___9742]));

var G__9743 = (i__5727__auto___9742 + (1));
i__5727__auto___9742 = G__9743;
continue;
} else {
}
break;
}

var G__9694 = args9692.length;
switch (G__9694) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9692.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7581__auto___9745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___9745,out){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___9745,out){
return (function (state_9718){
var state_val_9719 = (state_9718[(1)]);
if((state_val_9719 === (7))){
var inst_9700 = (state_9718[(7)]);
var inst_9700__$1 = (state_9718[(2)]);
var inst_9701 = (inst_9700__$1 == null);
var inst_9702 = cljs.core.not.call(null,inst_9701);
var state_9718__$1 = (function (){var statearr_9720 = state_9718;
(statearr_9720[(7)] = inst_9700__$1);

return statearr_9720;
})();
if(inst_9702){
var statearr_9721_9746 = state_9718__$1;
(statearr_9721_9746[(1)] = (8));

} else {
var statearr_9722_9747 = state_9718__$1;
(statearr_9722_9747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (1))){
var inst_9695 = (0);
var state_9718__$1 = (function (){var statearr_9723 = state_9718;
(statearr_9723[(8)] = inst_9695);

return statearr_9723;
})();
var statearr_9724_9748 = state_9718__$1;
(statearr_9724_9748[(2)] = null);

(statearr_9724_9748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (4))){
var state_9718__$1 = state_9718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9718__$1,(7),ch);
} else {
if((state_val_9719 === (6))){
var inst_9713 = (state_9718[(2)]);
var state_9718__$1 = state_9718;
var statearr_9725_9749 = state_9718__$1;
(statearr_9725_9749[(2)] = inst_9713);

(statearr_9725_9749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (3))){
var inst_9715 = (state_9718[(2)]);
var inst_9716 = cljs.core.async.close_BANG_.call(null,out);
var state_9718__$1 = (function (){var statearr_9726 = state_9718;
(statearr_9726[(9)] = inst_9715);

return statearr_9726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9718__$1,inst_9716);
} else {
if((state_val_9719 === (2))){
var inst_9695 = (state_9718[(8)]);
var inst_9697 = (inst_9695 < n);
var state_9718__$1 = state_9718;
if(cljs.core.truth_(inst_9697)){
var statearr_9727_9750 = state_9718__$1;
(statearr_9727_9750[(1)] = (4));

} else {
var statearr_9728_9751 = state_9718__$1;
(statearr_9728_9751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (11))){
var inst_9695 = (state_9718[(8)]);
var inst_9705 = (state_9718[(2)]);
var inst_9706 = (inst_9695 + (1));
var inst_9695__$1 = inst_9706;
var state_9718__$1 = (function (){var statearr_9729 = state_9718;
(statearr_9729[(10)] = inst_9705);

(statearr_9729[(8)] = inst_9695__$1);

return statearr_9729;
})();
var statearr_9730_9752 = state_9718__$1;
(statearr_9730_9752[(2)] = null);

(statearr_9730_9752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (9))){
var state_9718__$1 = state_9718;
var statearr_9731_9753 = state_9718__$1;
(statearr_9731_9753[(2)] = null);

(statearr_9731_9753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (5))){
var state_9718__$1 = state_9718;
var statearr_9732_9754 = state_9718__$1;
(statearr_9732_9754[(2)] = null);

(statearr_9732_9754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (10))){
var inst_9710 = (state_9718[(2)]);
var state_9718__$1 = state_9718;
var statearr_9733_9755 = state_9718__$1;
(statearr_9733_9755[(2)] = inst_9710);

(statearr_9733_9755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (8))){
var inst_9700 = (state_9718[(7)]);
var state_9718__$1 = state_9718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9718__$1,(11),out,inst_9700);
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
});})(c__7581__auto___9745,out))
;
return ((function (switch__7469__auto__,c__7581__auto___9745,out){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_9737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9737[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_9737[(1)] = (1));

return statearr_9737;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_9718){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_9718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e9738){if((e9738 instanceof Object)){
var ex__7473__auto__ = e9738;
var statearr_9739_9756 = state_9718;
(statearr_9739_9756[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9757 = state_9718;
state_9718 = G__9757;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_9718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_9718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___9745,out))
})();
var state__7583__auto__ = (function (){var statearr_9740 = f__7582__auto__.call(null);
(statearr_9740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___9745);

return statearr_9740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___9745,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9765 = (function (map_LT_,f,ch,meta9766){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9766 = meta9766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9767,meta9766__$1){
var self__ = this;
var _9767__$1 = this;
return (new cljs.core.async.t_cljs$core$async9765(self__.map_LT_,self__.f,self__.ch,meta9766__$1));
});

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9767){
var self__ = this;
var _9767__$1 = this;
return self__.meta9766;
});

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9768 = (function (map_LT_,f,ch,meta9766,_,fn1,meta9769){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9766 = meta9766;
this._ = _;
this.fn1 = fn1;
this.meta9769 = meta9769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9770,meta9769__$1){
var self__ = this;
var _9770__$1 = this;
return (new cljs.core.async.t_cljs$core$async9768(self__.map_LT_,self__.f,self__.ch,self__.meta9766,self__._,self__.fn1,meta9769__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9770){
var self__ = this;
var _9770__$1 = this;
return self__.meta9769;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9768.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9758_SHARP_){
return f1.call(null,(((p1__9758_SHARP_ == null))?null:self__.f.call(null,p1__9758_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9768.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9766","meta9766",-101206378,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9765","cljs.core.async/t_cljs$core$async9765",-438026115,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9769","meta9769",-639069332,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9768";

cljs.core.async.t_cljs$core$async9768.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9768");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9768 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9768(map_LT___$1,f__$1,ch__$1,meta9766__$1,___$2,fn1__$1,meta9769){
return (new cljs.core.async.t_cljs$core$async9768(map_LT___$1,f__$1,ch__$1,meta9766__$1,___$2,fn1__$1,meta9769));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9768(self__.map_LT_,self__.f,self__.ch,self__.meta9766,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9766","meta9766",-101206378,null)], null);
});

cljs.core.async.t_cljs$core$async9765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9765";

cljs.core.async.t_cljs$core$async9765.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9765");
});

cljs.core.async.__GT_t_cljs$core$async9765 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9765(map_LT___$1,f__$1,ch__$1,meta9766){
return (new cljs.core.async.t_cljs$core$async9765(map_LT___$1,f__$1,ch__$1,meta9766));
});

}

return (new cljs.core.async.t_cljs$core$async9765(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9774 = (function (map_GT_,f,ch,meta9775){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9775 = meta9775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9776,meta9775__$1){
var self__ = this;
var _9776__$1 = this;
return (new cljs.core.async.t_cljs$core$async9774(self__.map_GT_,self__.f,self__.ch,meta9775__$1));
});

cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9776){
var self__ = this;
var _9776__$1 = this;
return self__.meta9775;
});

cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9775","meta9775",1686069315,null)], null);
});

cljs.core.async.t_cljs$core$async9774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9774";

cljs.core.async.t_cljs$core$async9774.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9774");
});

cljs.core.async.__GT_t_cljs$core$async9774 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9774(map_GT___$1,f__$1,ch__$1,meta9775){
return (new cljs.core.async.t_cljs$core$async9774(map_GT___$1,f__$1,ch__$1,meta9775));
});

}

return (new cljs.core.async.t_cljs$core$async9774(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9780 = (function (filter_GT_,p,ch,meta9781){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9781 = meta9781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9782,meta9781__$1){
var self__ = this;
var _9782__$1 = this;
return (new cljs.core.async.t_cljs$core$async9780(self__.filter_GT_,self__.p,self__.ch,meta9781__$1));
});

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9782){
var self__ = this;
var _9782__$1 = this;
return self__.meta9781;
});

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9781","meta9781",1238307774,null)], null);
});

cljs.core.async.t_cljs$core$async9780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9780";

cljs.core.async.t_cljs$core$async9780.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9780");
});

cljs.core.async.__GT_t_cljs$core$async9780 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9780(filter_GT___$1,p__$1,ch__$1,meta9781){
return (new cljs.core.async.t_cljs$core$async9780(filter_GT___$1,p__$1,ch__$1,meta9781));
});

}

return (new cljs.core.async.t_cljs$core$async9780(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9783 = [];
var len__5726__auto___9827 = arguments.length;
var i__5727__auto___9828 = (0);
while(true){
if((i__5727__auto___9828 < len__5726__auto___9827)){
args9783.push((arguments[i__5727__auto___9828]));

var G__9829 = (i__5727__auto___9828 + (1));
i__5727__auto___9828 = G__9829;
continue;
} else {
}
break;
}

var G__9785 = args9783.length;
switch (G__9785) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9783.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7581__auto___9831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___9831,out){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___9831,out){
return (function (state_9806){
var state_val_9807 = (state_9806[(1)]);
if((state_val_9807 === (7))){
var inst_9802 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
var statearr_9808_9832 = state_9806__$1;
(statearr_9808_9832[(2)] = inst_9802);

(statearr_9808_9832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (1))){
var state_9806__$1 = state_9806;
var statearr_9809_9833 = state_9806__$1;
(statearr_9809_9833[(2)] = null);

(statearr_9809_9833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (4))){
var inst_9788 = (state_9806[(7)]);
var inst_9788__$1 = (state_9806[(2)]);
var inst_9789 = (inst_9788__$1 == null);
var state_9806__$1 = (function (){var statearr_9810 = state_9806;
(statearr_9810[(7)] = inst_9788__$1);

return statearr_9810;
})();
if(cljs.core.truth_(inst_9789)){
var statearr_9811_9834 = state_9806__$1;
(statearr_9811_9834[(1)] = (5));

} else {
var statearr_9812_9835 = state_9806__$1;
(statearr_9812_9835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (6))){
var inst_9788 = (state_9806[(7)]);
var inst_9793 = p.call(null,inst_9788);
var state_9806__$1 = state_9806;
if(cljs.core.truth_(inst_9793)){
var statearr_9813_9836 = state_9806__$1;
(statearr_9813_9836[(1)] = (8));

} else {
var statearr_9814_9837 = state_9806__$1;
(statearr_9814_9837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (3))){
var inst_9804 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9806__$1,inst_9804);
} else {
if((state_val_9807 === (2))){
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9806__$1,(4),ch);
} else {
if((state_val_9807 === (11))){
var inst_9796 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
var statearr_9815_9838 = state_9806__$1;
(statearr_9815_9838[(2)] = inst_9796);

(statearr_9815_9838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (9))){
var state_9806__$1 = state_9806;
var statearr_9816_9839 = state_9806__$1;
(statearr_9816_9839[(2)] = null);

(statearr_9816_9839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (5))){
var inst_9791 = cljs.core.async.close_BANG_.call(null,out);
var state_9806__$1 = state_9806;
var statearr_9817_9840 = state_9806__$1;
(statearr_9817_9840[(2)] = inst_9791);

(statearr_9817_9840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (10))){
var inst_9799 = (state_9806[(2)]);
var state_9806__$1 = (function (){var statearr_9818 = state_9806;
(statearr_9818[(8)] = inst_9799);

return statearr_9818;
})();
var statearr_9819_9841 = state_9806__$1;
(statearr_9819_9841[(2)] = null);

(statearr_9819_9841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (8))){
var inst_9788 = (state_9806[(7)]);
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9806__$1,(11),out,inst_9788);
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
});})(c__7581__auto___9831,out))
;
return ((function (switch__7469__auto__,c__7581__auto___9831,out){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_9823 = [null,null,null,null,null,null,null,null,null];
(statearr_9823[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_9823[(1)] = (1));

return statearr_9823;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_9806){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_9806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e9824){if((e9824 instanceof Object)){
var ex__7473__auto__ = e9824;
var statearr_9825_9842 = state_9806;
(statearr_9825_9842[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9843 = state_9806;
state_9806 = G__9843;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_9806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_9806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___9831,out))
})();
var state__7583__auto__ = (function (){var statearr_9826 = f__7582__auto__.call(null);
(statearr_9826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___9831);

return statearr_9826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___9831,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9844 = [];
var len__5726__auto___9847 = arguments.length;
var i__5727__auto___9848 = (0);
while(true){
if((i__5727__auto___9848 < len__5726__auto___9847)){
args9844.push((arguments[i__5727__auto___9848]));

var G__9849 = (i__5727__auto___9848 + (1));
i__5727__auto___9848 = G__9849;
continue;
} else {
}
break;
}

var G__9846 = args9844.length;
switch (G__9846) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9844.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto__){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto__){
return (function (state_10016){
var state_val_10017 = (state_10016[(1)]);
if((state_val_10017 === (7))){
var inst_10012 = (state_10016[(2)]);
var state_10016__$1 = state_10016;
var statearr_10018_10059 = state_10016__$1;
(statearr_10018_10059[(2)] = inst_10012);

(statearr_10018_10059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (20))){
var inst_9982 = (state_10016[(7)]);
var inst_9993 = (state_10016[(2)]);
var inst_9994 = cljs.core.next.call(null,inst_9982);
var inst_9968 = inst_9994;
var inst_9969 = null;
var inst_9970 = (0);
var inst_9971 = (0);
var state_10016__$1 = (function (){var statearr_10019 = state_10016;
(statearr_10019[(8)] = inst_9993);

(statearr_10019[(9)] = inst_9969);

(statearr_10019[(10)] = inst_9971);

(statearr_10019[(11)] = inst_9970);

(statearr_10019[(12)] = inst_9968);

return statearr_10019;
})();
var statearr_10020_10060 = state_10016__$1;
(statearr_10020_10060[(2)] = null);

(statearr_10020_10060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (1))){
var state_10016__$1 = state_10016;
var statearr_10021_10061 = state_10016__$1;
(statearr_10021_10061[(2)] = null);

(statearr_10021_10061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (4))){
var inst_9957 = (state_10016[(13)]);
var inst_9957__$1 = (state_10016[(2)]);
var inst_9958 = (inst_9957__$1 == null);
var state_10016__$1 = (function (){var statearr_10022 = state_10016;
(statearr_10022[(13)] = inst_9957__$1);

return statearr_10022;
})();
if(cljs.core.truth_(inst_9958)){
var statearr_10023_10062 = state_10016__$1;
(statearr_10023_10062[(1)] = (5));

} else {
var statearr_10024_10063 = state_10016__$1;
(statearr_10024_10063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (15))){
var state_10016__$1 = state_10016;
var statearr_10028_10064 = state_10016__$1;
(statearr_10028_10064[(2)] = null);

(statearr_10028_10064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (21))){
var state_10016__$1 = state_10016;
var statearr_10029_10065 = state_10016__$1;
(statearr_10029_10065[(2)] = null);

(statearr_10029_10065[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (13))){
var inst_9969 = (state_10016[(9)]);
var inst_9971 = (state_10016[(10)]);
var inst_9970 = (state_10016[(11)]);
var inst_9968 = (state_10016[(12)]);
var inst_9978 = (state_10016[(2)]);
var inst_9979 = (inst_9971 + (1));
var tmp10025 = inst_9969;
var tmp10026 = inst_9970;
var tmp10027 = inst_9968;
var inst_9968__$1 = tmp10027;
var inst_9969__$1 = tmp10025;
var inst_9970__$1 = tmp10026;
var inst_9971__$1 = inst_9979;
var state_10016__$1 = (function (){var statearr_10030 = state_10016;
(statearr_10030[(14)] = inst_9978);

(statearr_10030[(9)] = inst_9969__$1);

(statearr_10030[(10)] = inst_9971__$1);

(statearr_10030[(11)] = inst_9970__$1);

(statearr_10030[(12)] = inst_9968__$1);

return statearr_10030;
})();
var statearr_10031_10066 = state_10016__$1;
(statearr_10031_10066[(2)] = null);

(statearr_10031_10066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (22))){
var state_10016__$1 = state_10016;
var statearr_10032_10067 = state_10016__$1;
(statearr_10032_10067[(2)] = null);

(statearr_10032_10067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (6))){
var inst_9957 = (state_10016[(13)]);
var inst_9966 = f.call(null,inst_9957);
var inst_9967 = cljs.core.seq.call(null,inst_9966);
var inst_9968 = inst_9967;
var inst_9969 = null;
var inst_9970 = (0);
var inst_9971 = (0);
var state_10016__$1 = (function (){var statearr_10033 = state_10016;
(statearr_10033[(9)] = inst_9969);

(statearr_10033[(10)] = inst_9971);

(statearr_10033[(11)] = inst_9970);

(statearr_10033[(12)] = inst_9968);

return statearr_10033;
})();
var statearr_10034_10068 = state_10016__$1;
(statearr_10034_10068[(2)] = null);

(statearr_10034_10068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (17))){
var inst_9982 = (state_10016[(7)]);
var inst_9986 = cljs.core.chunk_first.call(null,inst_9982);
var inst_9987 = cljs.core.chunk_rest.call(null,inst_9982);
var inst_9988 = cljs.core.count.call(null,inst_9986);
var inst_9968 = inst_9987;
var inst_9969 = inst_9986;
var inst_9970 = inst_9988;
var inst_9971 = (0);
var state_10016__$1 = (function (){var statearr_10035 = state_10016;
(statearr_10035[(9)] = inst_9969);

(statearr_10035[(10)] = inst_9971);

(statearr_10035[(11)] = inst_9970);

(statearr_10035[(12)] = inst_9968);

return statearr_10035;
})();
var statearr_10036_10069 = state_10016__$1;
(statearr_10036_10069[(2)] = null);

(statearr_10036_10069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (3))){
var inst_10014 = (state_10016[(2)]);
var state_10016__$1 = state_10016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10016__$1,inst_10014);
} else {
if((state_val_10017 === (12))){
var inst_10002 = (state_10016[(2)]);
var state_10016__$1 = state_10016;
var statearr_10037_10070 = state_10016__$1;
(statearr_10037_10070[(2)] = inst_10002);

(statearr_10037_10070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (2))){
var state_10016__$1 = state_10016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10016__$1,(4),in$);
} else {
if((state_val_10017 === (23))){
var inst_10010 = (state_10016[(2)]);
var state_10016__$1 = state_10016;
var statearr_10038_10071 = state_10016__$1;
(statearr_10038_10071[(2)] = inst_10010);

(statearr_10038_10071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (19))){
var inst_9997 = (state_10016[(2)]);
var state_10016__$1 = state_10016;
var statearr_10039_10072 = state_10016__$1;
(statearr_10039_10072[(2)] = inst_9997);

(statearr_10039_10072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (11))){
var inst_9982 = (state_10016[(7)]);
var inst_9968 = (state_10016[(12)]);
var inst_9982__$1 = cljs.core.seq.call(null,inst_9968);
var state_10016__$1 = (function (){var statearr_10040 = state_10016;
(statearr_10040[(7)] = inst_9982__$1);

return statearr_10040;
})();
if(inst_9982__$1){
var statearr_10041_10073 = state_10016__$1;
(statearr_10041_10073[(1)] = (14));

} else {
var statearr_10042_10074 = state_10016__$1;
(statearr_10042_10074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (9))){
var inst_10004 = (state_10016[(2)]);
var inst_10005 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10016__$1 = (function (){var statearr_10043 = state_10016;
(statearr_10043[(15)] = inst_10004);

return statearr_10043;
})();
if(cljs.core.truth_(inst_10005)){
var statearr_10044_10075 = state_10016__$1;
(statearr_10044_10075[(1)] = (21));

} else {
var statearr_10045_10076 = state_10016__$1;
(statearr_10045_10076[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (5))){
var inst_9960 = cljs.core.async.close_BANG_.call(null,out);
var state_10016__$1 = state_10016;
var statearr_10046_10077 = state_10016__$1;
(statearr_10046_10077[(2)] = inst_9960);

(statearr_10046_10077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (14))){
var inst_9982 = (state_10016[(7)]);
var inst_9984 = cljs.core.chunked_seq_QMARK_.call(null,inst_9982);
var state_10016__$1 = state_10016;
if(inst_9984){
var statearr_10047_10078 = state_10016__$1;
(statearr_10047_10078[(1)] = (17));

} else {
var statearr_10048_10079 = state_10016__$1;
(statearr_10048_10079[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (16))){
var inst_10000 = (state_10016[(2)]);
var state_10016__$1 = state_10016;
var statearr_10049_10080 = state_10016__$1;
(statearr_10049_10080[(2)] = inst_10000);

(statearr_10049_10080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10017 === (10))){
var inst_9969 = (state_10016[(9)]);
var inst_9971 = (state_10016[(10)]);
var inst_9976 = cljs.core._nth.call(null,inst_9969,inst_9971);
var state_10016__$1 = state_10016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10016__$1,(13),out,inst_9976);
} else {
if((state_val_10017 === (18))){
var inst_9982 = (state_10016[(7)]);
var inst_9991 = cljs.core.first.call(null,inst_9982);
var state_10016__$1 = state_10016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10016__$1,(20),out,inst_9991);
} else {
if((state_val_10017 === (8))){
var inst_9971 = (state_10016[(10)]);
var inst_9970 = (state_10016[(11)]);
var inst_9973 = (inst_9971 < inst_9970);
var inst_9974 = inst_9973;
var state_10016__$1 = state_10016;
if(cljs.core.truth_(inst_9974)){
var statearr_10050_10081 = state_10016__$1;
(statearr_10050_10081[(1)] = (10));

} else {
var statearr_10051_10082 = state_10016__$1;
(statearr_10051_10082[(1)] = (11));

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
});})(c__7581__auto__))
;
return ((function (switch__7469__auto__,c__7581__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7470__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7470__auto____0 = (function (){
var statearr_10055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10055[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7470__auto__);

(statearr_10055[(1)] = (1));

return statearr_10055;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7470__auto____1 = (function (state_10016){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_10016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e10056){if((e10056 instanceof Object)){
var ex__7473__auto__ = e10056;
var statearr_10057_10083 = state_10016;
(statearr_10057_10083[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10084 = state_10016;
state_10016 = G__10084;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7470__auto__ = function(state_10016){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7470__auto____1.call(this,state_10016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7470__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7470__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto__))
})();
var state__7583__auto__ = (function (){var statearr_10058 = f__7582__auto__.call(null);
(statearr_10058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto__);

return statearr_10058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto__))
);

return c__7581__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10085 = [];
var len__5726__auto___10088 = arguments.length;
var i__5727__auto___10089 = (0);
while(true){
if((i__5727__auto___10089 < len__5726__auto___10088)){
args10085.push((arguments[i__5727__auto___10089]));

var G__10090 = (i__5727__auto___10089 + (1));
i__5727__auto___10089 = G__10090;
continue;
} else {
}
break;
}

var G__10087 = args10085.length;
switch (G__10087) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10085.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args10092 = [];
var len__5726__auto___10095 = arguments.length;
var i__5727__auto___10096 = (0);
while(true){
if((i__5727__auto___10096 < len__5726__auto___10095)){
args10092.push((arguments[i__5727__auto___10096]));

var G__10097 = (i__5727__auto___10096 + (1));
i__5727__auto___10096 = G__10097;
continue;
} else {
}
break;
}

var G__10094 = args10092.length;
switch (G__10094) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10092.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args10099 = [];
var len__5726__auto___10150 = arguments.length;
var i__5727__auto___10151 = (0);
while(true){
if((i__5727__auto___10151 < len__5726__auto___10150)){
args10099.push((arguments[i__5727__auto___10151]));

var G__10152 = (i__5727__auto___10151 + (1));
i__5727__auto___10151 = G__10152;
continue;
} else {
}
break;
}

var G__10101 = args10099.length;
switch (G__10101) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10099.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7581__auto___10154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___10154,out){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___10154,out){
return (function (state_10125){
var state_val_10126 = (state_10125[(1)]);
if((state_val_10126 === (7))){
var inst_10120 = (state_10125[(2)]);
var state_10125__$1 = state_10125;
var statearr_10127_10155 = state_10125__$1;
(statearr_10127_10155[(2)] = inst_10120);

(statearr_10127_10155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10126 === (1))){
var inst_10102 = null;
var state_10125__$1 = (function (){var statearr_10128 = state_10125;
(statearr_10128[(7)] = inst_10102);

return statearr_10128;
})();
var statearr_10129_10156 = state_10125__$1;
(statearr_10129_10156[(2)] = null);

(statearr_10129_10156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10126 === (4))){
var inst_10105 = (state_10125[(8)]);
var inst_10105__$1 = (state_10125[(2)]);
var inst_10106 = (inst_10105__$1 == null);
var inst_10107 = cljs.core.not.call(null,inst_10106);
var state_10125__$1 = (function (){var statearr_10130 = state_10125;
(statearr_10130[(8)] = inst_10105__$1);

return statearr_10130;
})();
if(inst_10107){
var statearr_10131_10157 = state_10125__$1;
(statearr_10131_10157[(1)] = (5));

} else {
var statearr_10132_10158 = state_10125__$1;
(statearr_10132_10158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10126 === (6))){
var state_10125__$1 = state_10125;
var statearr_10133_10159 = state_10125__$1;
(statearr_10133_10159[(2)] = null);

(statearr_10133_10159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10126 === (3))){
var inst_10122 = (state_10125[(2)]);
var inst_10123 = cljs.core.async.close_BANG_.call(null,out);
var state_10125__$1 = (function (){var statearr_10134 = state_10125;
(statearr_10134[(9)] = inst_10122);

return statearr_10134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10125__$1,inst_10123);
} else {
if((state_val_10126 === (2))){
var state_10125__$1 = state_10125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10125__$1,(4),ch);
} else {
if((state_val_10126 === (11))){
var inst_10105 = (state_10125[(8)]);
var inst_10114 = (state_10125[(2)]);
var inst_10102 = inst_10105;
var state_10125__$1 = (function (){var statearr_10135 = state_10125;
(statearr_10135[(7)] = inst_10102);

(statearr_10135[(10)] = inst_10114);

return statearr_10135;
})();
var statearr_10136_10160 = state_10125__$1;
(statearr_10136_10160[(2)] = null);

(statearr_10136_10160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10126 === (9))){
var inst_10105 = (state_10125[(8)]);
var state_10125__$1 = state_10125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10125__$1,(11),out,inst_10105);
} else {
if((state_val_10126 === (5))){
var inst_10102 = (state_10125[(7)]);
var inst_10105 = (state_10125[(8)]);
var inst_10109 = cljs.core._EQ_.call(null,inst_10105,inst_10102);
var state_10125__$1 = state_10125;
if(inst_10109){
var statearr_10138_10161 = state_10125__$1;
(statearr_10138_10161[(1)] = (8));

} else {
var statearr_10139_10162 = state_10125__$1;
(statearr_10139_10162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10126 === (10))){
var inst_10117 = (state_10125[(2)]);
var state_10125__$1 = state_10125;
var statearr_10140_10163 = state_10125__$1;
(statearr_10140_10163[(2)] = inst_10117);

(statearr_10140_10163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10126 === (8))){
var inst_10102 = (state_10125[(7)]);
var tmp10137 = inst_10102;
var inst_10102__$1 = tmp10137;
var state_10125__$1 = (function (){var statearr_10141 = state_10125;
(statearr_10141[(7)] = inst_10102__$1);

return statearr_10141;
})();
var statearr_10142_10164 = state_10125__$1;
(statearr_10142_10164[(2)] = null);

(statearr_10142_10164[(1)] = (2));


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
});})(c__7581__auto___10154,out))
;
return ((function (switch__7469__auto__,c__7581__auto___10154,out){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_10146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10146[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_10146[(1)] = (1));

return statearr_10146;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_10125){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_10125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e10147){if((e10147 instanceof Object)){
var ex__7473__auto__ = e10147;
var statearr_10148_10165 = state_10125;
(statearr_10148_10165[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10166 = state_10125;
state_10125 = G__10166;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_10125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_10125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___10154,out))
})();
var state__7583__auto__ = (function (){var statearr_10149 = f__7582__auto__.call(null);
(statearr_10149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___10154);

return statearr_10149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___10154,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10167 = [];
var len__5726__auto___10237 = arguments.length;
var i__5727__auto___10238 = (0);
while(true){
if((i__5727__auto___10238 < len__5726__auto___10237)){
args10167.push((arguments[i__5727__auto___10238]));

var G__10239 = (i__5727__auto___10238 + (1));
i__5727__auto___10238 = G__10239;
continue;
} else {
}
break;
}

var G__10169 = args10167.length;
switch (G__10169) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10167.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7581__auto___10241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___10241,out){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___10241,out){
return (function (state_10207){
var state_val_10208 = (state_10207[(1)]);
if((state_val_10208 === (7))){
var inst_10203 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
var statearr_10209_10242 = state_10207__$1;
(statearr_10209_10242[(2)] = inst_10203);

(statearr_10209_10242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (1))){
var inst_10170 = (new Array(n));
var inst_10171 = inst_10170;
var inst_10172 = (0);
var state_10207__$1 = (function (){var statearr_10210 = state_10207;
(statearr_10210[(7)] = inst_10171);

(statearr_10210[(8)] = inst_10172);

return statearr_10210;
})();
var statearr_10211_10243 = state_10207__$1;
(statearr_10211_10243[(2)] = null);

(statearr_10211_10243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (4))){
var inst_10175 = (state_10207[(9)]);
var inst_10175__$1 = (state_10207[(2)]);
var inst_10176 = (inst_10175__$1 == null);
var inst_10177 = cljs.core.not.call(null,inst_10176);
var state_10207__$1 = (function (){var statearr_10212 = state_10207;
(statearr_10212[(9)] = inst_10175__$1);

return statearr_10212;
})();
if(inst_10177){
var statearr_10213_10244 = state_10207__$1;
(statearr_10213_10244[(1)] = (5));

} else {
var statearr_10214_10245 = state_10207__$1;
(statearr_10214_10245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (15))){
var inst_10197 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
var statearr_10215_10246 = state_10207__$1;
(statearr_10215_10246[(2)] = inst_10197);

(statearr_10215_10246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (13))){
var state_10207__$1 = state_10207;
var statearr_10216_10247 = state_10207__$1;
(statearr_10216_10247[(2)] = null);

(statearr_10216_10247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (6))){
var inst_10172 = (state_10207[(8)]);
var inst_10193 = (inst_10172 > (0));
var state_10207__$1 = state_10207;
if(cljs.core.truth_(inst_10193)){
var statearr_10217_10248 = state_10207__$1;
(statearr_10217_10248[(1)] = (12));

} else {
var statearr_10218_10249 = state_10207__$1;
(statearr_10218_10249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (3))){
var inst_10205 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10207__$1,inst_10205);
} else {
if((state_val_10208 === (12))){
var inst_10171 = (state_10207[(7)]);
var inst_10195 = cljs.core.vec.call(null,inst_10171);
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10207__$1,(15),out,inst_10195);
} else {
if((state_val_10208 === (2))){
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10207__$1,(4),ch);
} else {
if((state_val_10208 === (11))){
var inst_10187 = (state_10207[(2)]);
var inst_10188 = (new Array(n));
var inst_10171 = inst_10188;
var inst_10172 = (0);
var state_10207__$1 = (function (){var statearr_10219 = state_10207;
(statearr_10219[(7)] = inst_10171);

(statearr_10219[(10)] = inst_10187);

(statearr_10219[(8)] = inst_10172);

return statearr_10219;
})();
var statearr_10220_10250 = state_10207__$1;
(statearr_10220_10250[(2)] = null);

(statearr_10220_10250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (9))){
var inst_10171 = (state_10207[(7)]);
var inst_10185 = cljs.core.vec.call(null,inst_10171);
var state_10207__$1 = state_10207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10207__$1,(11),out,inst_10185);
} else {
if((state_val_10208 === (5))){
var inst_10171 = (state_10207[(7)]);
var inst_10175 = (state_10207[(9)]);
var inst_10180 = (state_10207[(11)]);
var inst_10172 = (state_10207[(8)]);
var inst_10179 = (inst_10171[inst_10172] = inst_10175);
var inst_10180__$1 = (inst_10172 + (1));
var inst_10181 = (inst_10180__$1 < n);
var state_10207__$1 = (function (){var statearr_10221 = state_10207;
(statearr_10221[(11)] = inst_10180__$1);

(statearr_10221[(12)] = inst_10179);

return statearr_10221;
})();
if(cljs.core.truth_(inst_10181)){
var statearr_10222_10251 = state_10207__$1;
(statearr_10222_10251[(1)] = (8));

} else {
var statearr_10223_10252 = state_10207__$1;
(statearr_10223_10252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (14))){
var inst_10200 = (state_10207[(2)]);
var inst_10201 = cljs.core.async.close_BANG_.call(null,out);
var state_10207__$1 = (function (){var statearr_10225 = state_10207;
(statearr_10225[(13)] = inst_10200);

return statearr_10225;
})();
var statearr_10226_10253 = state_10207__$1;
(statearr_10226_10253[(2)] = inst_10201);

(statearr_10226_10253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (10))){
var inst_10191 = (state_10207[(2)]);
var state_10207__$1 = state_10207;
var statearr_10227_10254 = state_10207__$1;
(statearr_10227_10254[(2)] = inst_10191);

(statearr_10227_10254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10208 === (8))){
var inst_10171 = (state_10207[(7)]);
var inst_10180 = (state_10207[(11)]);
var tmp10224 = inst_10171;
var inst_10171__$1 = tmp10224;
var inst_10172 = inst_10180;
var state_10207__$1 = (function (){var statearr_10228 = state_10207;
(statearr_10228[(7)] = inst_10171__$1);

(statearr_10228[(8)] = inst_10172);

return statearr_10228;
})();
var statearr_10229_10255 = state_10207__$1;
(statearr_10229_10255[(2)] = null);

(statearr_10229_10255[(1)] = (2));


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
});})(c__7581__auto___10241,out))
;
return ((function (switch__7469__auto__,c__7581__auto___10241,out){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_10233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10233[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_10233[(1)] = (1));

return statearr_10233;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_10207){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_10207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e10234){if((e10234 instanceof Object)){
var ex__7473__auto__ = e10234;
var statearr_10235_10256 = state_10207;
(statearr_10235_10256[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10257 = state_10207;
state_10207 = G__10257;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_10207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_10207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___10241,out))
})();
var state__7583__auto__ = (function (){var statearr_10236 = f__7582__auto__.call(null);
(statearr_10236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___10241);

return statearr_10236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___10241,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10258 = [];
var len__5726__auto___10332 = arguments.length;
var i__5727__auto___10333 = (0);
while(true){
if((i__5727__auto___10333 < len__5726__auto___10332)){
args10258.push((arguments[i__5727__auto___10333]));

var G__10334 = (i__5727__auto___10333 + (1));
i__5727__auto___10333 = G__10334;
continue;
} else {
}
break;
}

var G__10260 = args10258.length;
switch (G__10260) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10258.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7581__auto___10336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7581__auto___10336,out){
return (function (){
var f__7582__auto__ = (function (){var switch__7469__auto__ = ((function (c__7581__auto___10336,out){
return (function (state_10302){
var state_val_10303 = (state_10302[(1)]);
if((state_val_10303 === (7))){
var inst_10298 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
var statearr_10304_10337 = state_10302__$1;
(statearr_10304_10337[(2)] = inst_10298);

(statearr_10304_10337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (1))){
var inst_10261 = [];
var inst_10262 = inst_10261;
var inst_10263 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10302__$1 = (function (){var statearr_10305 = state_10302;
(statearr_10305[(7)] = inst_10262);

(statearr_10305[(8)] = inst_10263);

return statearr_10305;
})();
var statearr_10306_10338 = state_10302__$1;
(statearr_10306_10338[(2)] = null);

(statearr_10306_10338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (4))){
var inst_10266 = (state_10302[(9)]);
var inst_10266__$1 = (state_10302[(2)]);
var inst_10267 = (inst_10266__$1 == null);
var inst_10268 = cljs.core.not.call(null,inst_10267);
var state_10302__$1 = (function (){var statearr_10307 = state_10302;
(statearr_10307[(9)] = inst_10266__$1);

return statearr_10307;
})();
if(inst_10268){
var statearr_10308_10339 = state_10302__$1;
(statearr_10308_10339[(1)] = (5));

} else {
var statearr_10309_10340 = state_10302__$1;
(statearr_10309_10340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (15))){
var inst_10292 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
var statearr_10310_10341 = state_10302__$1;
(statearr_10310_10341[(2)] = inst_10292);

(statearr_10310_10341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (13))){
var state_10302__$1 = state_10302;
var statearr_10311_10342 = state_10302__$1;
(statearr_10311_10342[(2)] = null);

(statearr_10311_10342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (6))){
var inst_10262 = (state_10302[(7)]);
var inst_10287 = inst_10262.length;
var inst_10288 = (inst_10287 > (0));
var state_10302__$1 = state_10302;
if(cljs.core.truth_(inst_10288)){
var statearr_10312_10343 = state_10302__$1;
(statearr_10312_10343[(1)] = (12));

} else {
var statearr_10313_10344 = state_10302__$1;
(statearr_10313_10344[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (3))){
var inst_10300 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10302__$1,inst_10300);
} else {
if((state_val_10303 === (12))){
var inst_10262 = (state_10302[(7)]);
var inst_10290 = cljs.core.vec.call(null,inst_10262);
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10302__$1,(15),out,inst_10290);
} else {
if((state_val_10303 === (2))){
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10302__$1,(4),ch);
} else {
if((state_val_10303 === (11))){
var inst_10266 = (state_10302[(9)]);
var inst_10270 = (state_10302[(10)]);
var inst_10280 = (state_10302[(2)]);
var inst_10281 = [];
var inst_10282 = inst_10281.push(inst_10266);
var inst_10262 = inst_10281;
var inst_10263 = inst_10270;
var state_10302__$1 = (function (){var statearr_10314 = state_10302;
(statearr_10314[(7)] = inst_10262);

(statearr_10314[(11)] = inst_10280);

(statearr_10314[(12)] = inst_10282);

(statearr_10314[(8)] = inst_10263);

return statearr_10314;
})();
var statearr_10315_10345 = state_10302__$1;
(statearr_10315_10345[(2)] = null);

(statearr_10315_10345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (9))){
var inst_10262 = (state_10302[(7)]);
var inst_10278 = cljs.core.vec.call(null,inst_10262);
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10302__$1,(11),out,inst_10278);
} else {
if((state_val_10303 === (5))){
var inst_10266 = (state_10302[(9)]);
var inst_10270 = (state_10302[(10)]);
var inst_10263 = (state_10302[(8)]);
var inst_10270__$1 = f.call(null,inst_10266);
var inst_10271 = cljs.core._EQ_.call(null,inst_10270__$1,inst_10263);
var inst_10272 = cljs.core.keyword_identical_QMARK_.call(null,inst_10263,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10273 = (inst_10271) || (inst_10272);
var state_10302__$1 = (function (){var statearr_10316 = state_10302;
(statearr_10316[(10)] = inst_10270__$1);

return statearr_10316;
})();
if(cljs.core.truth_(inst_10273)){
var statearr_10317_10346 = state_10302__$1;
(statearr_10317_10346[(1)] = (8));

} else {
var statearr_10318_10347 = state_10302__$1;
(statearr_10318_10347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (14))){
var inst_10295 = (state_10302[(2)]);
var inst_10296 = cljs.core.async.close_BANG_.call(null,out);
var state_10302__$1 = (function (){var statearr_10320 = state_10302;
(statearr_10320[(13)] = inst_10295);

return statearr_10320;
})();
var statearr_10321_10348 = state_10302__$1;
(statearr_10321_10348[(2)] = inst_10296);

(statearr_10321_10348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (10))){
var inst_10285 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
var statearr_10322_10349 = state_10302__$1;
(statearr_10322_10349[(2)] = inst_10285);

(statearr_10322_10349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (8))){
var inst_10262 = (state_10302[(7)]);
var inst_10266 = (state_10302[(9)]);
var inst_10270 = (state_10302[(10)]);
var inst_10275 = inst_10262.push(inst_10266);
var tmp10319 = inst_10262;
var inst_10262__$1 = tmp10319;
var inst_10263 = inst_10270;
var state_10302__$1 = (function (){var statearr_10323 = state_10302;
(statearr_10323[(7)] = inst_10262__$1);

(statearr_10323[(14)] = inst_10275);

(statearr_10323[(8)] = inst_10263);

return statearr_10323;
})();
var statearr_10324_10350 = state_10302__$1;
(statearr_10324_10350[(2)] = null);

(statearr_10324_10350[(1)] = (2));


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
});})(c__7581__auto___10336,out))
;
return ((function (switch__7469__auto__,c__7581__auto___10336,out){
return (function() {
var cljs$core$async$state_machine__7470__auto__ = null;
var cljs$core$async$state_machine__7470__auto____0 = (function (){
var statearr_10328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10328[(0)] = cljs$core$async$state_machine__7470__auto__);

(statearr_10328[(1)] = (1));

return statearr_10328;
});
var cljs$core$async$state_machine__7470__auto____1 = (function (state_10302){
while(true){
var ret_value__7471__auto__ = (function (){try{while(true){
var result__7472__auto__ = switch__7469__auto__.call(null,state_10302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7472__auto__;
}
break;
}
}catch (e10329){if((e10329 instanceof Object)){
var ex__7473__auto__ = e10329;
var statearr_10330_10351 = state_10302;
(statearr_10330_10351[(5)] = ex__7473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10352 = state_10302;
state_10302 = G__10352;
continue;
} else {
return ret_value__7471__auto__;
}
break;
}
});
cljs$core$async$state_machine__7470__auto__ = function(state_10302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7470__auto____1.call(this,state_10302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7470__auto____0;
cljs$core$async$state_machine__7470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7470__auto____1;
return cljs$core$async$state_machine__7470__auto__;
})()
;})(switch__7469__auto__,c__7581__auto___10336,out))
})();
var state__7583__auto__ = (function (){var statearr_10331 = f__7582__auto__.call(null);
(statearr_10331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7581__auto___10336);

return statearr_10331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7583__auto__);
});})(c__7581__auto___10336,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map