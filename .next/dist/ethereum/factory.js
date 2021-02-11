'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface),
//'0xa4121DdC0240271602B9beD935082F31F068e2ac'
'0x48BCc459965DA99aCDCb5FaB08e06013DF272F7e');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUVBLElBQU0sV0FBVSxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDWixLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFEWTtBQUVaO0FBQ0EsQUFIWSxBQUFoQixBQU1BOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovdG9ueS9kZXYvd29ya3NwYWNlL2V0aGVyZXVtLmFuZC5zb2xpZGl0eS9wcm9qLjA3Ly1ldGhlcnVtLmFuZC5zb2lsaWRpdHkucHJvai4wNy5raWNrc3RhcnQtbWFpbi8tZXRoZXJ1bS5hbmQuc29pbGlkaXR5LnByb2ouMDcua2lja3N0YXJ0In0=