'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {

    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQixBQUVBOzs7Ozs7a0JBQWMsVUFBQyxBQUFELFNBQVcsQUFFckI7O1dBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0gsS0FBSyxBQUFMLE1BQVcsbUJBQVMsQUFBcEIsQUFERyxZQUM0QixBQUQ1QixBQUFQLEFBRUg7QUFKRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi90b255L2Rldi93b3Jrc3BhY2UvZXRoZXJldW0uYW5kLnNvbGlkaXR5L3Byb2ouMDcvLWV0aGVydW0uYW5kLnNvaWxpZGl0eS5wcm9qLjA3LmtpY2tzdGFydC1tYWluLy1ldGhlcnVtLmFuZC5zb2lsaWRpdHkucHJvai4wNy5raWNrc3RhcnQifQ==