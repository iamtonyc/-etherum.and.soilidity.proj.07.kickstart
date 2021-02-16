'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsbUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3dDLEFBSHhDLDZCQUlLLEFBSkwsSUFJUyxBQUpULG9DQUk0QyxBQUo1Qzs7QUFRQSxPQUFPLEFBQVAsVUFBZSxBQUFmIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi90b255L2Rldi93b3Jrc3BhY2UvZXRoZXJldW0uYW5kLnNvbGlkaXR5L3Byb2ouMDcvLWV0aGVydW0uYW5kLnNvaWxpZGl0eS5wcm9qLjA3LmtpY2tzdGFydC1tYWluLy1ldGhlcnVtLmFuZC5zb2lsaWRpdHkucHJvai4wNy5raWNrc3RhcnQifQ==