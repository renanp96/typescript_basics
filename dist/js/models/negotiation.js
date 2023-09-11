var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _date, _qtde, _value;
export class Negotiation {
    constructor(date, qtde, value) {
        _date.set(this, void 0);
        _qtde.set(this, void 0);
        _value.set(this, void 0);
        __classPrivateFieldSet(this, _date, date);
        __classPrivateFieldSet(this, _qtde, qtde);
        __classPrivateFieldSet(this, _value, value);
    }
    getDate() {
        return __classPrivateFieldGet(this, _date);
    }
    getQtde() {
        return __classPrivateFieldGet(this, _qtde);
    }
    getValue() {
        return __classPrivateFieldGet(this, _value).call(this);
    }
    getVolume() {
        return __classPrivateFieldGet(this, _qtde) * __classPrivateFieldGet(this, _value);
    }
}
_date = new WeakMap(), _qtde = new WeakMap(), _value = new WeakMap();
