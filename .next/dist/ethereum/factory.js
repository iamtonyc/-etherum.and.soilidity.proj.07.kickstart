'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xa4121DdC0240271602B9beD935082F31F068e2ac');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUVBLElBQU0sV0FBVSxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDWixLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFEWSxZQUVaLEFBRlksQUFBaEIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkM6L3RvbnkvZGV2L3dvcmtzcGFjZS9ldGhlcmV1bS5hbmQuc29saWRpdHkvcHJvai4wNy8tZXRoZXJ1bS5hbmQuc29pbGlkaXR5LnByb2ouMDcua2lja3N0YXJ0LW1haW4vLWV0aGVydW0uYW5kLnNvaWxpZGl0eS5wcm9qLjA3LmtpY2tzdGFydCJ9