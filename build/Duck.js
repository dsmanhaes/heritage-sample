"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
var Bird_1 = require("./Bird");
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck(name, lifeTime, size, weight, canFly, color) {
        var _this = _super.call(this, name, lifeTime, size, weight, canFly) || this;
        _this.color = color;
        return _this;
    }
    Duck.prototype.fly = function () {
        console.log("".concat(this.name, " starts to fly!"));
    };
    Duck.prototype.swim = function () {
        console.log("".concat(this.name, " starts to swim!"));
    };
    Duck.prototype.walk = function () {
        console.log("".concat(this.name, " starts to walk!"));
    };
    return Duck;
}(Bird_1.Bird));
exports.Duck = Duck;
