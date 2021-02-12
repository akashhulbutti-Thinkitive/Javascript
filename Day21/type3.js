var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.add = function (a, b) {
        return a + b;
    };
    calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    calculator.prototype.mul = function (a, b) {
        return a * b;
    };
    calculator.prototype.div = function (a, b) {
        return a / b;
    };
    return calculator;
}());
var AdvCalculator = /** @class */ (function (_super) {
    __extends(AdvCalculator, _super);
    function AdvCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdvCalculator;
}(calculator));
var cal = new AdvCalculator();
console.log("Addidtion 8+9 : " + cal.add(8, 9));
console.log("Subtraction 8-9 : " + cal.sub(8, 9));
console.log("Multiplication 8*9 : " + cal.mul(8, 9));
console.log("Division 10/5 : " + cal.div(10, 5));
