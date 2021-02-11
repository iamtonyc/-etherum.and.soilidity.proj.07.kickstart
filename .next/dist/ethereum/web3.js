'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 != 'undefined') {
    // We are in the browser and metamask is running.
    //web3= new Web3(window.web3.currentProvider);

    console.log('window.web3!=undefined');
    var provider = window.ethereum;
    provider.enable();
    web3 = new _web2.default(provider);
} else {
    console.log('window.web3==undefined');
    // we are the on the server *OR* the user is not running metamask
    var _provider = new _web2.default.providers.HttpProvider('https://goerli.infura.io/v3/425e2fa3e737495db08c6b1dc3611ea2');
    web3 = new _web2.default(_provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwiZXRoZXJldW0iLCJlbmFibGUiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUssT0FBTyxBQUFQLFdBQWlCLEFBQWpCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFFBQW9CLEFBQTFELGFBQXdFLEFBQ3BFO0FBQ0E7QUFFQTs7WUFBUSxBQUFSLElBQVksQUFBWixBQUNBO1FBQU0sV0FBVyxPQUFPLEFBQXhCLEFBQ0E7YUFBUyxBQUFULEFBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFSRCxPQVFPLEFBQ0g7WUFBUSxBQUFSLElBQVksQUFBWixBQUNBO0FBQ0E7UUFBTSxZQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWpCLEFBR0E7V0FBTSxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFOLEFBQ0g7QUFHRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L3RvbnkvZGV2L3dvcmtzcGFjZS9ldGhlcmV1bS5hbmQuc29saWRpdHkvcHJvai4wNy8tZXRoZXJ1bS5hbmQuc29pbGlkaXR5LnByb2ouMDcua2lja3N0YXJ0LW1haW4vLWV0aGVydW0uYW5kLnNvaWxpZGl0eS5wcm9qLjA3LmtpY2tzdGFydCJ9