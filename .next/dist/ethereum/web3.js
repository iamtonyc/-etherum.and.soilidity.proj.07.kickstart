'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web2 = require('web3');

var _web3 = _interopRequireDefault(_web2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 != 'undefined') {
    // We are in the browser and metamask is running.
    //web3= new Web3(window.web3.currentProvider);
    var provider = window.ethereum;
    provider.enable();
    var _web = new _web3.default(provider);
} else {
    // we are the on the server *OR* the user is not running metamask
    var _provider = new _web3.default.providers.HttpProvider('https://goerli.infura.io/v3/425e2fa3e737495db08c6b1dc3611ea2');
    web3 = new _web3.default(_provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwicHJvdmlkZXIiLCJldGhlcmV1bSIsImVuYWJsZSIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSyxPQUFPLEFBQVAsV0FBaUIsQUFBakIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsUUFBb0IsQUFBMUQsYUFBd0UsQUFDcEU7QUFDQTtBQUNBO1FBQU0sV0FBVyxPQUFPLEFBQXhCLEFBQ0E7YUFBUyxBQUFULEFBQ0E7UUFBTSxPQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQWIsQUFDSDtBQU5ELE9BTU8sQUFDSDtBQUNBO1FBQU0sWUFBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU0sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBTixBQUNIO0FBR0Q7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi90b255L2Rldi93b3Jrc3BhY2UvZXRoZXJldW0uYW5kLnNvbGlkaXR5L3Byb2ouMDcvLWV0aGVydW0uYW5kLnNvaWxpZGl0eS5wcm9qLjA3LmtpY2tzdGFydC1tYWluLy1ldGhlcnVtLmFuZC5zb2lsaWRpdHkucHJvai4wNy5raWNrc3RhcnQifQ==