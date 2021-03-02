webpackHotUpdate(7,{

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(468);

var _web = __webpack_require__(974);

var _web2 = _interopRequireDefault(_web);

var _campaign = __webpack_require__(1170);

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\tony\\dev\\workspace\\ethereum.and.solidity\\proj.07\\-etherum.and.soilidity.proj.07.kickstart-main\\-etherum.and.soilidity.proj.07.kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            //console.log("id"+this.props.id);

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _web2.default.utils.fromWei(request.value)), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, request.receipent), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjZWlwZW50IiwiYXBwcm92YWxDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFjOzs7Ozs7Ozs7SSxBQUVoQjs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0YscUZBQVcsbUJBQUE7MEJBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ0Q7QUFEQyx1Q0FDUSx3QkFBUyxNQUFBLEFBQUssTUFEdEIsQUFDUSxBQUFvQjs0Q0FENUI7bUNBRWdCLGNBQUEsQUFBSyxJQUZyQixBQUVnQixBQUFTOzs2QkFBMUI7QUFGQyxnREFBQTs0Q0FBQTs0Q0FHRCxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0NBQzNDLFNBSkgsQUFHRCxBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELDZCQURFOzs2QkFIQzs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CQVFYLEEsc0ZBQVksb0JBQUE7MEJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQ0Y7QUFERSx1Q0FDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQjs2Q0FEM0I7bUNBRWUsY0FBQSxBQUFLLElBRnBCLEFBRWUsQUFBUzs7NkJBQTFCO0FBRkUsaURBQUE7NkNBQUE7NENBR0YsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0NBQzVDLFNBSkYsQUFHRixBQUFxRCxBQUNqRCxBQUFTO0FBRHdDLEFBQ3ZELDZCQURFOzs2QkFIRTs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7OztpQ0FRSjtnQkFBQSxBQUNLLE1BREwsQUFDaUIsdUJBRGpCLEFBQ0s7Z0JBREwsQUFDVSxPQURWLEFBQ2lCLHVCQURqQixBQUNVO3lCQUNzQixLQUZoQyxBQUVxQztnQkFGckMsQUFFRyxZQUZILEFBRUc7Z0JBRkgsQUFFTyxpQkFGUCxBQUVPO2dCQUZQLEFBRWdCLHdCQUZoQixBQUVnQixBQUVwQjs7QUFDQTs7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSw2QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBSDlCLEFBR0ksQUFBTyxBQUEyQixBQUNsQyx5QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFKSixBQUlJLEFBQWUsQUFDZiw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFBQSxBQUFlLGVBQWdCLEtBTG5DLEFBS0ksQUFDQSxpQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7ZUFQUixBQU1JLEFBQ0ksQUFJSiw2QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7OEJBQXpDO2dDQUFBO0FBQUE7ZUFiWixBQUNJLEFBV0ksQUFDSSxBQU9mOzs7OztBQTFDb0IsQSxBQThDekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJDOi90b255L2Rldi93b3Jrc3BhY2UvZXRoZXJldW0uYW5kLnNvbGlkaXR5L3Byb2ouMDcvLWV0aGVydW0uYW5kLnNvaWxpZGl0eS5wcm9qLjA3LmtpY2tzdGFydC1tYWluLy1ldGhlcnVtLmFuZC5zb2lsaWRpdHkucHJvai4wNy5raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\tony\\dev\\workspace\\ethereum.and.solidity\\proj.07\\-etherum.and.soilidity.proj.07.kickstart-main\\-etherum.and.soilidity.proj.07.kickstart\\components\\RequestRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\tony\\dev\\workspace\\ethereum.and.solidity\\proj.07\\-etherum.and.soilidity.proj.07.kickstart-main\\-etherum.and.soilidity.proj.07.kickstart\\components\\RequestRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy44MDdjMzJiMTVmNTgxZTRjNWI3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzPzRkOWYxODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7VGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCAgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5cclxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIG9uQXBwcm92ZSA9YXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBjYW1wYWlnbj1DYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkZpbmFsaXplID1hc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduPUNhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZmluYWxpemVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCAgeyBSb3csIENlbGx9ID1UYWJsZTtcclxuICAgICAgICBjb25zdCB7aWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50fT10aGlzLnByb3BzOyBcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlkXCIrdGhpcy5wcm9wcy5pZCk7XHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlKX08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNlaXBlbnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwcm92ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5hbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU9BOzs7Ozs7O0FBSUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==