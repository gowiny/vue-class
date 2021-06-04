(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-class-component')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue-class-component'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueClass = {}, global.VueClassComponent));
}(this, (function (exports, vueClassComponent) { 'use strict';

    function State(target, propertyKey) {
        if (target === void 0) { target = ""; }
        if (typeof target === 'string') {
            var value = target;
            var arr_1 = value ? value.split("/") : undefined;
            return function (target, propertyKey) {
                vueClassComponent.createDecorator(function (options, key) {
                    options.computed[key] = function () {
                        var data = this.$store.state;
                        if (!arr_1) {
                            return data[key];
                        }
                        else {
                            arr_1.forEach(function (item) {
                                data = data[item];
                            });
                            return data;
                        }
                    };
                })(target, propertyKey);
            };
        }
        else {
            vueClassComponent.createDecorator(function (options, key) {
                options.computed[key] = function () {
                    var data = this.$store.state;
                    return data[key];
                };
            })(target, propertyKey);
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    function Action(target, propertyKey) {
        if (target === void 0) { target = ""; }
        if (typeof target === 'string') {
            var value_1 = target;
            return function (target, propertyKey) {
                vueClassComponent.createDecorator(function (options, key) {
                    var name = value_1 || key;
                    options.methods[key] = function () {
                        var _a;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_a = this.$store).dispatch.apply(_a, __spreadArray([name], args));
                    };
                })(target, propertyKey);
            };
        }
        else {
            vueClassComponent.createDecorator(function (options, key) {
                var name = key;
                options.methods[key] = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = this.$store).dispatch.apply(_a, __spreadArray([name], args));
                };
            })(target, propertyKey);
        }
    }

    function Getter(target, propertyKey) {
        if (target === void 0) { target = ""; }
        var arg1Type = typeof target;
        if (arg1Type === 'string') {
            var value_1 = target;
            return function (target, propertyKey) {
                vueClassComponent.createDecorator(function (options, key) {
                    var name = value_1 || key;
                    options.computed[key] = function () {
                        var getter = this.$store.getters[name];
                        return getter;
                    };
                })(target, propertyKey);
            };
        }
        else {
            vueClassComponent.createDecorator(function (options, key) {
                var name = key;
                options.computed[name] = function () {
                    var getter = this.$store.getters[name];
                    return getter;
                };
            })(target, propertyKey);
        }
    }

    function Mutation(target, propertyKey) {
        if (target === void 0) { target = ""; }
        if (typeof target === 'string') {
            var value_1 = target;
            return function (target, propertyKey) {
                vueClassComponent.createDecorator(function (options, key) {
                    var name = value_1 || key;
                    options.methods[key] = function () {
                        var _a;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_a = this.$store).dispatch.apply(_a, __spreadArray([name], args));
                    };
                })(target, propertyKey);
            };
        }
        else {
            vueClassComponent.createDecorator(function (options, key) {
                var name = key;
                options.methods[key] = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = this.$store).commit.apply(_a, __spreadArray([name], args));
                };
            })(target, propertyKey);
        }
    }

    function Watch(arg1, arg2, arg3) {
        if (typeof arg1 === 'string') {
            return function (target, propertyKey, descriptor) {
                vueClassComponent.createDecorator(function (options, key) {
                    var name = arg1 || key;
                    var watch = options.watch;
                    watch[name] = descriptor.value;
                })(target, propertyKey);
            };
        }
        else {
            vueClassComponent.createDecorator(function (options, key) {
                var name = key;
                var watch = options.watch;
                watch[name] = arg3 === null || arg3 === void 0 ? void 0 : arg3.value;
            })(arg1, arg2);
        }
    }

    function Provide(target, propertyKey, descriptor) {
        if (target === void 0) { target = ""; }
        var arg1Type = typeof target;
        if (arg1Type === 'string') {
            var value_1 = target;
            return function (target, propertyKey, descriptor) {
                vueClassComponent.createDecorator(function (options, key) {
                    if (!options.__provideData) {
                        var data_1 = {};
                        options.__provideData = data_1;
                        options.provide = function () {
                            return data_1;
                        };
                    }
                    var provideData = options.__provideData;
                    var name = value_1 || key;
                    provideData[name] = descriptor.value;
                })(target, propertyKey);
            };
        }
        else {
            vueClassComponent.createDecorator(function (options, key) {
                if (!options.__provideData) {
                    var data_2 = {};
                    options.__provideData = data_2;
                    options.provide = function () {
                        return data_2;
                    };
                }
                var provideData = options.__provideData;
                var name = key;
                provideData[name] = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
            })(target, propertyKey);
        }
    }

    function Inject(target, propertyKey, descriptor) {
        if (target === void 0) { target = ""; }
        var arg1Type = typeof target;
        if (arg1Type === 'string') {
            var value_1 = target;
            return function (target, propertyKey) {
                vueClassComponent.createDecorator(function (options, key) {
                    var name = value_1 || key;
                    var inject = options.inject;
                    if (descriptor) {
                        inject[name] = {
                            "default": descriptor.value
                        };
                    }
                    else {
                        inject[name] = name;
                    }
                })(target, propertyKey);
            };
        }
        else {
            vueClassComponent.createDecorator(function (options, key) {
                var name = key;
                var inject = options.inject;
                if (descriptor) {
                    inject[name] = {
                        "default": descriptor.value
                    };
                }
                else {
                    inject[name] = name;
                }
            })(target, propertyKey);
        }
    }

    Object.defineProperty(exports, 'Options', {
        enumerable: true,
        get: function () {
            return vueClassComponent.Options;
        }
    });
    Object.defineProperty(exports, 'mixins', {
        enumerable: true,
        get: function () {
            return vueClassComponent.mixins;
        }
    });
    exports.Action = Action;
    exports.Getter = Getter;
    exports.Inject = Inject;
    exports.Mutation = Mutation;
    exports.Provide = Provide;
    exports.State = State;
    exports.Watch = Watch;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
