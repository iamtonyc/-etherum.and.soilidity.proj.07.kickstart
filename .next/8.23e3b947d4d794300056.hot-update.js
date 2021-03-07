webpackHotUpdate(8,{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_compact__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_deburr__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_deburr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_deburr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_filter__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_isFunction__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_dropRight__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_dropRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_dropRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_size__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_size___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash_size__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_union__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_union___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash_union__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_get__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_includes__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_invoke__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_isEqual__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_lodash_has__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_lodash_isNil__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_classnames__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_prop_types__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__lib__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__elements_Icon__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__elements_Label__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__DropdownDivider__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__DropdownItem__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__DropdownHeader__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__DropdownMenu__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__DropdownSearchInput__ = __webpack_require__(597);












































var getKeyOrValue = function getKeyOrValue(key, value) {
  return __WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(key) ? value : key;
};

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */

var Dropdown = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, value) {
      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onChange', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));
    }, _this.closeOnChange = function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;

      var shouldClose = __WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined___default()(closeOnChange) ? !multiple : closeOnChange;

      if (shouldClose) _this.close(e);
    }, _this.closeOnEscape = function (e) {
      if (__WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      var _moves;

      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          selectOnNavigation = _this$props2.selectOnNavigation;

      var moves = (_moves = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_moves, __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].ArrowDown, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_moves, __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].ArrowUp, -1), _moves);
      var move = moves[__WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].getCode(e)];

      if (move === undefined) return;
      e.preventDefault();
      _this.moveSelectionBy(move);
      if (!multiple && selectOnNavigation) _this.makeSelectedItemActive(e);
    }, _this.openOnSpace = function (e) {

      if (__WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].Spacebar) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.openOnArrow = function (e) {

      var code = __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].getCode(e);
      if (!__WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()([__WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].ArrowDown, __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].ArrowUp], code)) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.makeSelectedItemActive = function (e) {
      var open = _this.state.open;
      var multiple = _this.props.multiple;


      var item = _this.getSelectedItem();
      var value = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(item, 'value');

      // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed
      if (__WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(value) || !open) return;

      // state value may be undefined
      var newValue = multiple ? __WEBPACK_IMPORTED_MODULE_22_lodash_union___default()(_this.state.value, [value]) : value;

      // notify the onChange prop that the user is trying to change value
      _this.setValue(newValue);
      _this.setSelectedIndex(newValue);
      _this.handleChange(e, newValue);

      // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value
      if (item['data-additional']) __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onAddItem', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));
    }, _this.selectItemOnEnter = function (e) {
      var search = _this.props.search;


      if (__WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].Enter) return;
      e.preventDefault();

      var optionSize = __WEBPACK_IMPORTED_MODULE_21_lodash_size___default()(_this.getMenuOptions());
      if (search && optionSize === 0) return;

      _this.makeSelectedItemActive(e);
      _this.closeOnChange(e);
      _this.clearSearchQuery();
      if (search && _this.searchRef) _this.searchRef.focus();
    }, _this.removeItemOnBackspace = function (e) {
      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state = _this.state,
          searchQuery = _this$state.searchQuery,
          value = _this$state.value;


      if (__WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["t" /* keyboardKey */].Backspace) return;
      if (searchQuery || !search || !multiple || __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(value)) return;
      e.preventDefault();

      // remove most recent value
      var newValue = __WEBPACK_IMPORTED_MODULE_19_lodash_dropRight___default()(value);

      _this.setValue(newValue);
      _this.setSelectedIndex(newValue);
      _this.handleChange(e, newValue);
    }, _this.closeOnDocumentClick = function (e) {

      if (!_this.props.closeOnBlur) return;

      // If event happened in the dropdown, ignore it
      if (_this.ref && __WEBPACK_IMPORTED_MODULE_18_lodash_isFunction___default()(_this.ref.contains) && _this.ref.contains(e.target)) return;

      _this.close();
    }, _this.attachHandlersOnOpen = function () {
      __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].sub('keydown', [_this.closeOnEscape, _this.moveSelectionOnKeyDown, _this.selectItemOnEnter, _this.removeItemOnBackspace]);
      __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].sub('click', _this.closeOnDocumentClick);
      __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('keydown', [_this.openOnArrow, _this.openOnSpace]);
    }, _this.handleMouseDown = function (e) {

      _this.isMouseDown = true;
      __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].sub('mouseup', _this.handleDocumentMouseUp);
      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onMouseDown', e, _this.props);
    }, _this.handleDocumentMouseUp = function () {

      _this.isMouseDown = false;
      __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleClick = function (e) {
      var _this$props4 = _this.props,
          minCharacters = _this$props4.minCharacters,
          search = _this$props4.search;
      var _this$state2 = _this.state,
          open = _this$state2.open,
          searchQuery = _this$state2.searchQuery;


      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
      // prevent closeOnDocumentClick()
      e.stopPropagation();

      if (!search) return _this.toggle(e);
      if (open) return;
      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        _this.open(e);
        return;
      }
      if (_this.searchRef) _this.searchRef.focus();
    }, _this.handleIconClick = function (e) {

      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
      // prevent handleClick()
      e.stopPropagation();
      _this.toggle(e);
    }, _this.handleItemClick = function (e, item) {
      var _this$props5 = _this.props,
          multiple = _this$props5.multiple,
          search = _this$props5.search;
      var value = item.value;

      // prevent toggle() in handleClick()

      e.stopPropagation();
      // prevent closeOnDocumentClick() if multiple or item is disabled
      if (multiple || item.disabled) e.nativeEvent.stopImmediatePropagation();
      if (item.disabled) return;

      var isAdditionItem = item['data-additional'];
      var newValue = multiple ? __WEBPACK_IMPORTED_MODULE_22_lodash_union___default()(_this.state.value, [value]) : value;

      // notify the onChange prop that the user is trying to change value
      _this.setValue(newValue);
      _this.setSelectedIndex(value);

      var optionSize = __WEBPACK_IMPORTED_MODULE_21_lodash_size___default()(_this.getMenuOptions());
      if (!multiple || isAdditionItem || optionSize === 1) _this.clearSearchQuery();

      _this.handleChange(e, newValue);
      _this.closeOnChange(e);

      // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value
      if (isAdditionItem) __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onAddItem', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));

      if (multiple && search && _this.searchRef) _this.searchRef.focus();
    }, _this.handleFocus = function (e) {
      var focus = _this.state.focus;


      if (focus) return;

      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onFocus', e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {

      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(e, 'currentTarget');
      if (currentTarget && currentTarget.contains(document.activeElement)) return;

      var _this$props6 = _this.props,
          closeOnBlur = _this$props6.closeOnBlur,
          multiple = _this$props6.multiple,
          onBlur = _this$props6.onBlur,
          selectOnBlur = _this$props6.selectOnBlur;
      // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;
      if (onBlur) onBlur(e, _this.props);
      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e);
        if (closeOnBlur) _this.close();
      }
      _this.setState({ focus: false });
      _this.clearSearchQuery();
    }, _this.handleSearchChange = function (e, _ref2) {
      var value = _ref2.value;


      // prevent propagating to this.props.onChange()
      e.stopPropagation();

      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;

      var newQuery = value;

      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onSearchChange', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { searchQuery: newQuery }));
      _this.trySetState({ searchQuery: newQuery }, { selectedIndex: 0 });

      // open search dropdown on search query
      if (!open && newQuery.length >= minCharacters) {
        _this.open();
        return;
      }
      // close search dropdown if search query is too small
      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    }, _this.getMenuOptions = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var _this$props7 = _this.props,
          additionLabel = _this$props7.additionLabel,
          additionPosition = _this$props7.additionPosition,
          allowAdditions = _this$props7.allowAdditions,
          deburr = _this$props7.deburr,
          multiple = _this$props7.multiple,
          search = _this$props7.search;
      var searchQuery = _this.state.searchQuery;


      var filteredOptions = options;

      // filter out active options
      if (multiple) {
        filteredOptions = __WEBPACK_IMPORTED_MODULE_17_lodash_filter___default()(filteredOptions, function (opt) {
          return !__WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()(value, opt.value);
        });
      }

      // filter by search query
      if (search && searchQuery) {
        if (__WEBPACK_IMPORTED_MODULE_18_lodash_isFunction___default()(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          // remove diacritics on search input and options, if deburr prop is set
          var strippedQuery = deburr ? __WEBPACK_IMPORTED_MODULE_16_lodash_deburr___default()(searchQuery) : searchQuery;

          var re = new RegExp(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default()(strippedQuery), 'i');

          filteredOptions = __WEBPACK_IMPORTED_MODULE_17_lodash_filter___default()(filteredOptions, function (opt) {
            return re.test(deburr ? __WEBPACK_IMPORTED_MODULE_16_lodash_deburr___default()(opt.text) : opt.text);
          });
        }
      }

      // insert the "add" item
      if (allowAdditions && search && searchQuery && !__WEBPACK_IMPORTED_MODULE_14_lodash_some___default()(filteredOptions, { text: searchQuery })) {
        var additionLabelElement = __WEBPACK_IMPORTED_MODULE_32_react___default.a.isValidElement(additionLabel) ? __WEBPACK_IMPORTED_MODULE_32_react___default.a.cloneElement(additionLabel, { key: 'addition-label' }) : additionLabel || '';

        var addItem = {
          key: 'addition',
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
            'b',
            { key: 'addition-query' },
            searchQuery
          )],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    }, _this.getSelectedItem = function () {
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(options, '[' + selectedIndex + ']');
    }, _this.getEnabledIndices = function (givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default()(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    }, _this.getItemByValue = function (value) {
      var options = _this.props.options;


      return __WEBPACK_IMPORTED_MODULE_12_lodash_find___default()(options, { value: value });
    }, _this.getMenuItemIndexByValue = function (value, givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default()(options, ['value', value]);
    }, _this.getDropdownAriaOptions = function () {
      var _this$props8 = _this.props,
          loading = _this$props8.loading,
          disabled = _this$props8.disabled,
          search = _this$props8.search,
          multiple = _this$props8.multiple;
      var open = _this.state.open;

      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };
      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }
      return ariaOptions;
    }, _this.clearSearchQuery = function () {
      _this.trySetState({ searchQuery: '' });
    }, _this.setValue = function (value) {
      _this.trySetState({ value: value });
    }, _this.setSelectedIndex = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var multiple = _this.props.multiple;
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions(value, optionsProps);
      var enabledIndicies = _this.getEnabledIndices(options);

      var newSelectedIndex = void 0;

      // update the selected index
      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0];

        // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.
        newSelectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = _this.getMenuItemIndexByValue(value, options);

        // regular selects can only have one active item
        // set the selected index to the currently active item
        newSelectedIndex = __WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      _this.setState({ selectedIndex: newSelectedIndex });
    }, _this.handleLabelClick = function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({ selectedLabel: labelProps.value });

      var onLabelClick = _this.props.onLabelClick;

      if (onLabelClick) onLabelClick(e, labelProps);
    }, _this.handleLabelRemove = function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;

      var newValue = __WEBPACK_IMPORTED_MODULE_10_lodash_without___default()(value, labelProps.value);


      _this.setValue(newValue);
      _this.setSelectedIndex(newValue);
      _this.handleChange(e, newValue);
    }, _this.moveSelectionBy = function (offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;


      var options = _this.getMenuOptions();

      // Prevent infinite loop
      // TODO: remove left part of condition after children API will be removed
      if (options === undefined || __WEBPACK_IMPORTED_MODULE_9_lodash_every___default()(options, 'disabled')) return;

      var lastIndex = options.length - 1;
      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = startIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) {
        _this.moveSelectionBy(offset, nextIndex);
        return;
      }

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
    }, _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(predefinedProps, 'onClick', e, predefinedProps);
          _this.handleIconClick(e);
        }
      };
    }, _this.handleSearchRef = function (c) {
      return _this.searchRef = c;
    }, _this.handleSizerRef = function (c) {
      return _this.sizerRef = c;
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.computeSearchInputTabIndex = function () {
      var _this$props9 = _this.props,
          disabled = _this$props9.disabled,
          tabIndex = _this$props9.tabIndex;


      if (!__WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    }, _this.computeSearchInputWidth = function () {
      var searchQuery = _this.state.searchQuery;


      if (_this.sizerRef && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it

        _this.sizerRef.style.display = 'inline';
        _this.sizerRef.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.getBoundingClientRect().width);
        _this.sizerRef.style.removeProperty('display');

        return searchWidth;
      }
    }, _this.computeTabIndex = function () {
      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          search = _this$props10.search,
          tabIndex = _this$props10.tabIndex;

      // don't set a root node tabIndex as the search input has its own tabIndex

      if (search) return undefined;
      if (disabled) return -1;
      return __WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(tabIndex) ? 0 : tabIndex;
    }, _this.scrollSelectedItemIntoView = function () {
      if (!_this.ref) return;
      var menu = _this.ref.querySelector('.menu.visible');
      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;

      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.open = function (e) {
      var _this$props11 = _this.props,
          disabled = _this$props11.disabled,
          onOpen = _this$props11.onOpen,
          search = _this$props11.search;

      if (disabled) return;
      if (search && _this.searchRef) _this.searchRef.focus();
      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
      _this.scrollSelectedItemIntoView();
    }, _this.close = function (e) {
      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.handleClose = function () {
      var hasSearchFocus = document.activeElement === _this.searchRef;
      var hasDropdownFocus = document.activeElement === _this.ref;
      var hasFocus = hasSearchFocus || hasDropdownFocus;
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.
      if (!hasSearchFocus) {
        _this.ref.blur();
      }

      // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
      _this.setState({ focus: hasFocus });
    }, _this.toggle = function (e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    }, _this.renderText = function () {
      var _this$props12 = _this.props,
          multiple = _this$props12.multiple,
          placeholder = _this$props12.placeholder,
          search = _this$props12.search,
          text = _this$props12.text;
      var _this$state3 = _this.state,
          searchQuery = _this$state3.searchQuery,
          value = _this$state3.value,
          open = _this$state3.open;

      var hasValue = multiple ? !__WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(value) : !__WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(value) && value !== '';

      var classes = __WEBPACK_IMPORTED_MODULE_30_classnames___default()(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;
      if (searchQuery) {
        _text = null;
      } else if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(_this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(_this.getItemByValue(value), 'text');
      }

      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
        'div',
        { className: classes, role: 'alert', 'aria-live': 'polite' },
        _text
      );
    }, _this.renderSearchInput = function () {
      var _this$props13 = _this.props,
          search = _this$props13.search,
          searchInput = _this$props13.searchInput;
      var searchQuery = _this.state.searchQuery;


      if (!search) return null;
      return __WEBPACK_IMPORTED_MODULE_40__DropdownSearchInput__["a" /* default */].create(searchInput, { defaultProps: {
          inputRef: _this.handleSearchRef,
          onChange: _this.handleSearchChange,
          style: { width: _this.computeSearchInputWidth() },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        } });
    }, _this.renderSearchSizer = function () {
      var _this$props14 = _this.props,
          search = _this$props14.search,
          multiple = _this$props14.multiple;


      if (!(search && multiple)) return null;
      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement('span', { className: 'sizer', ref: _this.handleSizerRef });
    }, _this.renderLabels = function () {
      var _this$props15 = _this.props,
          multiple = _this$props15.multiple,
          renderLabel = _this$props15.renderLabel;
      var _this$state4 = _this.state,
          selectedLabel = _this$state4.selectedLabel,
          value = _this$state4.value;

      if (!multiple || __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(value)) {
        return;
      }
      var selectedItems = __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(value, _this.getItemByValue);


      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(__WEBPACK_IMPORTED_MODULE_7_lodash_compact___default()(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };

        return __WEBPACK_IMPORTED_MODULE_35__elements_Label__["a" /* default */].create(renderLabel(item, index, defaultProps), { defaultProps: defaultProps });
      });
    }, _this.renderOptions = function () {
      var _this$props16 = _this.props,
          multiple = _this$props16.multiple,
          search = _this$props16.search,
          noResultsMessage = _this$props16.noResultsMessage;
      var _this$state5 = _this.state,
          selectedIndex = _this$state5.selectedIndex,
          value = _this$state5.value;

      var options = _this.getMenuOptions();

      if (noResultsMessage !== null && search && __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(options)) {
        return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
          'div',
          { className: 'message' },
          noResultsMessage
        );
      }

      var isActive = multiple ? function (optValue) {
        return __WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };

      return __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(options, function (opt, i) {
        return __WEBPACK_IMPORTED_MODULE_37__DropdownItem__["a" /* default */].create(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, opt.style, { pointerEvents: 'all' })
        }));
      });
    }, _this.renderMenu = function () {
      var _this$props17 = _this.props,
          children = _this$props17.children,
          header = _this$props17.header;
      var open = _this.state.open;

      var menuClasses = open ? 'visible' : '';
      var ariaOptions = _this.getDropdownMenuAriaOptions();

      // single menu child
      if (!__WEBPACK_IMPORTED_MODULE_33__lib__["d" /* childrenUtils */].isNil(children)) {
        var menuChild = __WEBPACK_IMPORTED_MODULE_32_react__["Children"].only(children);
        var className = __WEBPACK_IMPORTED_MODULE_30_classnames___default()(menuClasses, menuChild.props.className);

        return Object(__WEBPACK_IMPORTED_MODULE_32_react__["cloneElement"])(menuChild, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ className: className }, ariaOptions));
      }

      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_39__DropdownMenu__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, ariaOptions, { className: menuClasses }),
        __WEBPACK_IMPORTED_MODULE_38__DropdownHeader__["a" /* default */].create(header),
        _this.renderOptions()
      );
    }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Dropdown, [{
    key: 'getInitialAutoControlledState',
    value: function getInitialAutoControlledState() {
      return { searchQuery: '' };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      this.setSelectedIndex(value);

      if (open) {
        this.open();
        this.attachHandlersOnOpen();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this).call(this, nextProps);


      /* eslint-disable no-console */
      if (true) {
        // in development, validate value type matches dropdown type
        var isNextValueArray = Array.isArray(nextProps.value);
        var hasValue = __WEBPACK_IMPORTED_MODULE_28_lodash_has___default()(nextProps, 'value');

        if (hasValue && nextProps.multiple && !isNextValueArray) {
          console.error('Dropdown `value` must be an array when `multiple` is set.' + (' Received type: `' + Object.prototype.toString.call(nextProps.value) + '`.'));
        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
        }
      }
      /* eslint-enable no-console */

      if (!Object(__WEBPACK_IMPORTED_MODULE_33__lib__["z" /* shallowEqual */])(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
        this.setSelectedIndex(nextProps.value);
      }

      if (!__WEBPACK_IMPORTED_MODULE_27_lodash_isEqual___default()(nextProps.options, this.props.options)) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !Object(__WEBPACK_IMPORTED_MODULE_33__lib__["z" /* shallowEqual */])(nextProps, this.props) || !Object(__WEBPACK_IMPORTED_MODULE_33__lib__["z" /* shallowEqual */])(nextState, this.state);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      // focused / blurred
      // eslint-disable-line complexity
      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          var _props = this.props,
              minCharacters = _props.minCharacters,
              openOnFocus = _props.openOnFocus,
              search = _props.search;

          var openable = !search || search && minCharacters === 1;

          if (openOnFocus && openable) this.open();
        }
        if (!this.state.open) {
          __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].sub('keydown', [this.openOnArrow, this.openOnSpace]);
        } else {
          __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        }
        __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].sub('keydown', this.removeItemOnBackspace);
      } else if (prevState.focus && !this.state.focus) {
        var closeOnBlur = this.props.closeOnBlur;

        if (!this.isMouseDown && closeOnBlur) {
          this.close();
        }
        __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('keydown', [this.openOnArrow, this.openOnSpace, this.moveSelectionOnKeyDown, this.selectItemOnEnter, this.removeItemOnBackspace]);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        this.attachHandlersOnOpen();
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {
        this.handleClose();
        __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('click', this.closeOnDocumentClick);
        if (!this.state.focus) {
          __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('keydown', this.removeItemOnBackspace);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('keydown', [this.openOnArrow, this.openOnSpace, this.moveSelectionOnKeyDown, this.selectItemOnEnter, this.removeItemOnBackspace, this.closeOnEscape]);
      __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* eventStack */].unsub('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // onChange needs to receive a value
    // can't rely on props.value if we are controlled


    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // There are times when we need to calculate the options based on a value
    // that hasn't yet been persisted to state.

  }, {
    key: 'getDropdownMenuAriaOptions',
    value: function getDropdownMenuAriaOptions() {
      var _props2 = this.props,
          search = _props2.search,
          multiple = _props2.multiple;

      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }
      return ariaOptions;
    }

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Overrides
    // ----------------------------------------

    // ----------------------------------------
    // Refs
    // ----------------------------------------

    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // ----------------------------------------
    // Render
    // ----------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          basic = _props3.basic,
          button = _props3.button,
          className = _props3.className,
          compact = _props3.compact,
          disabled = _props3.disabled,
          error = _props3.error,
          fluid = _props3.fluid,
          floating = _props3.floating,
          icon = _props3.icon,
          inline = _props3.inline,
          item = _props3.item,
          labeled = _props3.labeled,
          loading = _props3.loading,
          multiple = _props3.multiple,
          pointing = _props3.pointing,
          search = _props3.search,
          selection = _props3.selection,
          scrolling = _props3.scrolling,
          simple = _props3.simple,
          trigger = _props3.trigger,
          upward = _props3.upward;
      var open = this.state.open;

      // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_30_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(open, 'active visible'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(button, 'button'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(floating, 'floating'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(inline, 'inline'),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(labeled, 'labeled'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(item, 'item'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(multiple, 'multiple'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(search, 'search'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(selection, 'selection'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(simple, 'simple'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(scrolling, 'scrolling'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["A" /* useKeyOnly */])(upward, 'upward'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["B" /* useKeyOrValueAndKey */])(pointing, 'pointing'), 'dropdown', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_33__lib__["q" /* getUnhandledProps */])(Dropdown, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_33__lib__["p" /* getElementType */])(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);

      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, rest, ariaOptions, {
          className: classes,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          tabIndex: this.computeTabIndex(),
          ref: this.handleRef
        }),
        this.renderLabels(),
        this.renderSearchInput(),
        this.renderSearchSizer(),
        trigger || this.renderText(),
        __WEBPACK_IMPORTED_MODULE_34__elements_Icon__["a" /* default */].create(icon, {
          overrideProps: this.handleIconOverrides
        }),
        this.renderMenu()
      );
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_33__lib__["a" /* AutoControlledComponent */]);

Dropdown.defaultProps = {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  deburr: false,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: function renderLabel(_ref3) {
    var text = _ref3.text;
    return text;
  },
  searchInput: 'text',
  selectOnBlur: true,
  selectOnNavigation: true
};
Dropdown.autoControlledProps = ['open', 'searchQuery', 'selectedLabel', 'value'];
Dropdown._meta = {
  name: 'Dropdown',
  type: __WEBPACK_IMPORTED_MODULE_33__lib__["b" /* META */].TYPES.MODULE
};
Dropdown.Divider = __WEBPACK_IMPORTED_MODULE_36__DropdownDivider__["a" /* default */];
Dropdown.Header = __WEBPACK_IMPORTED_MODULE_38__DropdownHeader__["a" /* default */];
Dropdown.Item = __WEBPACK_IMPORTED_MODULE_37__DropdownItem__["a" /* default */];
Dropdown.Menu = __WEBPACK_IMPORTED_MODULE_39__DropdownMenu__["a" /* default */];
Dropdown.SearchInput = __WEBPACK_IMPORTED_MODULE_40__DropdownSearchInput__["a" /* default */];
Dropdown.handledProps = ['additionLabel', 'additionPosition', 'allowAdditions', 'as', 'basic', 'button', 'children', 'className', 'closeOnBlur', 'closeOnChange', 'compact', 'deburr', 'defaultOpen', 'defaultSearchQuery', 'defaultSelectedLabel', 'defaultValue', 'disabled', 'error', 'floating', 'fluid', 'header', 'icon', 'inline', 'item', 'labeled', 'loading', 'minCharacters', 'multiple', 'noResultsMessage', 'onAddItem', 'onBlur', 'onChange', 'onClick', 'onClose', 'onFocus', 'onLabelClick', 'onMouseDown', 'onOpen', 'onSearchChange', 'open', 'openOnFocus', 'options', 'placeholder', 'pointing', 'renderLabel', 'scrolling', 'search', 'searchInput', 'searchQuery', 'selectOnBlur', 'selectOnNavigation', 'selectedLabel', 'selection', 'simple', 'tabIndex', 'text', 'trigger', 'upward', 'value'];
/* harmony default export */ __webpack_exports__["a"] = (Dropdown);
Dropdown.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].as,

  /** Label prefixed to an option added by a user. */
  additionLabel: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].demand(['options', 'selection', 'search']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Format the Dropdown to appear as a button. */
  button: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].disallow(['options', 'selection']), __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].givenProps({ children: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.any.isRequired }, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.element.isRequired)]),

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A compact dropdown has no minimum width. */
  compact: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Initial value of searchQuery. */
  defaultSearchQuery: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string])]),

  /** Initial value or value array if multiple. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number]))]),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown menu can contain floated content. */
  floating: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can take the full width of its parent */
  fluid: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown menu can contain a header. */
  header: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can be labeled. */
  labeled: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_37__DropdownItem__["a" /* default */].propTypes))]),

  /** Placeholder text. */
  placeholder: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /** A dropdown can have its menu scroll. */
  scrolling: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func]),

  /** A shorthand for a search input. */
  searchInput: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.object]),

  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].demand(['options']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: __WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["m" /* customPropTypes */].disallow(['selection', 'text']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number]))]),

  /** A dropdown can open upward. */
  upward: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool
} : {};

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(84);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC4yM2UzYjk0N2Q0ZDc5NDMwMDA1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbW9kdWxlcy9Ecm9wZG93bi9Ecm9wZG93bi5qcz9mMGRlYWRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanM/ZjBkZWFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0MiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0JztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBfY29tcGFjdCBmcm9tICdsb2Rhc2gvY29tcGFjdCc7XG5pbXBvcnQgX21hcCBmcm9tICdsb2Rhc2gvbWFwJztcbmltcG9ydCBfZXZlcnkgZnJvbSAnbG9kYXNoL2V2ZXJ5JztcbmltcG9ydCBfd2l0aG91dCBmcm9tICdsb2Rhc2gvd2l0aG91dCc7XG5pbXBvcnQgX2ZpbmRJbmRleCBmcm9tICdsb2Rhc2gvZmluZEluZGV4JztcbmltcG9ydCBfZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBfc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5pbXBvcnQgX2VzY2FwZVJlZ0V4cCBmcm9tICdsb2Rhc2gvZXNjYXBlUmVnRXhwJztcbmltcG9ydCBfZGVidXJyIGZyb20gJ2xvZGFzaC9kZWJ1cnInO1xuaW1wb3J0IF9maWx0ZXIgZnJvbSAnbG9kYXNoL2ZpbHRlcic7XG5pbXBvcnQgX2lzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuaW1wb3J0IF9kcm9wUmlnaHQgZnJvbSAnbG9kYXNoL2Ryb3BSaWdodCc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IF9zaXplIGZyb20gJ2xvZGFzaC9zaXplJztcbmltcG9ydCBfdW5pb24gZnJvbSAnbG9kYXNoL3VuaW9uJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IF9pbmNsdWRlcyBmcm9tICdsb2Rhc2gvaW5jbHVkZXMnO1xuaW1wb3J0IF9pc1VuZGVmaW5lZCBmcm9tICdsb2Rhc2gvaXNVbmRlZmluZWQnO1xuaW1wb3J0IF9pbnZva2UgZnJvbSAnbG9kYXNoL2ludm9rZSc7XG5pbXBvcnQgX2lzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuaW1wb3J0IF9oYXMgZnJvbSAnbG9kYXNoL2hhcyc7XG5pbXBvcnQgX2lzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXV0b0NvbnRyb2xsZWRDb21wb25lbnQgYXMgQ29tcG9uZW50LCBjaGlsZHJlblV0aWxzLCBjdXN0b21Qcm9wVHlwZXMsIGV2ZW50U3RhY2ssIGdldEVsZW1lbnRUeXBlLCBnZXRVbmhhbmRsZWRQcm9wcywga2V5Ym9hcmRLZXksIE1FVEEsIG9iamVjdERpZmYsIHNoYWxsb3dFcXVhbCwgdXNlS2V5T25seSwgdXNlS2V5T3JWYWx1ZUFuZEtleSB9IGZyb20gJy4uLy4uL2xpYic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9lbGVtZW50cy9MYWJlbCc7XG5pbXBvcnQgRHJvcGRvd25EaXZpZGVyIGZyb20gJy4vRHJvcGRvd25EaXZpZGVyJztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IERyb3Bkb3duSGVhZGVyIGZyb20gJy4vRHJvcGRvd25IZWFkZXInO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgRHJvcGRvd25TZWFyY2hJbnB1dCBmcm9tICcuL0Ryb3Bkb3duU2VhcmNoSW5wdXQnO1xuXG52YXIgZ2V0S2V5T3JWYWx1ZSA9IGZ1bmN0aW9uIGdldEtleU9yVmFsdWUoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gX2lzTmlsKGtleSkgPyB2YWx1ZSA6IGtleTtcbn07XG5cbi8qKlxuICogQSBkcm9wZG93biBhbGxvd3MgYSB1c2VyIHRvIHNlbGVjdCBhIHZhbHVlIGZyb20gYSBzZXJpZXMgb2Ygb3B0aW9ucy5cbiAqIEBzZWUgRm9ybVxuICogQHNlZSBTZWxlY3RcbiAqIEBzZWUgTWVudVxuICovXG5cbnZhciBEcm9wZG93biA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcm9wZG93biwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBEcm9wZG93bi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGUsIHZhbHVlKSB7XG4gICAgICBfaW52b2tlKF90aGlzLnByb3BzLCAnb25DaGFuZ2UnLCBlLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHsgdmFsdWU6IHZhbHVlIH0pKTtcbiAgICB9LCBfdGhpcy5jbG9zZU9uQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlT25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5jbG9zZU9uQ2hhbmdlLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMubXVsdGlwbGU7XG5cbiAgICAgIHZhciBzaG91bGRDbG9zZSA9IF9pc1VuZGVmaW5lZChjbG9zZU9uQ2hhbmdlKSA/ICFtdWx0aXBsZSA6IGNsb3NlT25DaGFuZ2U7XG5cbiAgICAgIGlmIChzaG91bGRDbG9zZSkgX3RoaXMuY2xvc2UoZSk7XG4gICAgfSwgX3RoaXMuY2xvc2VPbkVzY2FwZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoa2V5Ym9hcmRLZXkuZ2V0Q29kZShlKSAhPT0ga2V5Ym9hcmRLZXkuRXNjYXBlKSByZXR1cm47XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5jbG9zZSgpO1xuICAgIH0sIF90aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF9tb3ZlcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMyLm11bHRpcGxlLFxuICAgICAgICAgIHNlbGVjdE9uTmF2aWdhdGlvbiA9IF90aGlzJHByb3BzMi5zZWxlY3RPbk5hdmlnYXRpb247XG5cbiAgICAgIHZhciBtb3ZlcyA9IChfbW92ZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9tb3Zlcywga2V5Ym9hcmRLZXkuQXJyb3dEb3duLCAxKSwgX2RlZmluZVByb3BlcnR5KF9tb3Zlcywga2V5Ym9hcmRLZXkuQXJyb3dVcCwgLTEpLCBfbW92ZXMpO1xuICAgICAgdmFyIG1vdmUgPSBtb3Zlc1trZXlib2FyZEtleS5nZXRDb2RlKGUpXTtcblxuICAgICAgaWYgKG1vdmUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMubW92ZVNlbGVjdGlvbkJ5KG1vdmUpO1xuICAgICAgaWYgKCFtdWx0aXBsZSAmJiBzZWxlY3RPbk5hdmlnYXRpb24pIF90aGlzLm1ha2VTZWxlY3RlZEl0ZW1BY3RpdmUoZSk7XG4gICAgfSwgX3RoaXMub3Blbk9uU3BhY2UgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICBpZiAoa2V5Ym9hcmRLZXkuZ2V0Q29kZShlKSAhPT0ga2V5Ym9hcmRLZXkuU3BhY2ViYXIpIHJldHVybjtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5vcGVuKSByZXR1cm47XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMub3BlbihlKTtcbiAgICB9LCBfdGhpcy5vcGVuT25BcnJvdyA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgIHZhciBjb2RlID0ga2V5Ym9hcmRLZXkuZ2V0Q29kZShlKTtcbiAgICAgIGlmICghX2luY2x1ZGVzKFtrZXlib2FyZEtleS5BcnJvd0Rvd24sIGtleWJvYXJkS2V5LkFycm93VXBdLCBjb2RlKSkgcmV0dXJuO1xuICAgICAgaWYgKF90aGlzLnN0YXRlLm9wZW4pIHJldHVybjtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBfdGhpcy5vcGVuKGUpO1xuICAgIH0sIF90aGlzLm1ha2VTZWxlY3RlZEl0ZW1BY3RpdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuICAgICAgdmFyIG11bHRpcGxlID0gX3RoaXMucHJvcHMubXVsdGlwbGU7XG5cblxuICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5nZXRTZWxlY3RlZEl0ZW0oKTtcbiAgICAgIHZhciB2YWx1ZSA9IF9nZXQoaXRlbSwgJ3ZhbHVlJyk7XG5cbiAgICAgIC8vIHByZXZlbnQgc2VsZWN0aW5nIG51bGwgaWYgdGhlcmUgd2FzIG5vIHNlbGVjdGVkIGl0ZW0gdmFsdWVcbiAgICAgIC8vIHByZXZlbnQgc2VsZWN0aW5nIGR1cGxpY2F0ZSBpdGVtcyB3aGVuIHRoZSBkcm9wZG93biBpcyBjbG9zZWRcbiAgICAgIGlmIChfaXNOaWwodmFsdWUpIHx8ICFvcGVuKSByZXR1cm47XG5cbiAgICAgIC8vIHN0YXRlIHZhbHVlIG1heSBiZSB1bmRlZmluZWRcbiAgICAgIHZhciBuZXdWYWx1ZSA9IG11bHRpcGxlID8gX3VuaW9uKF90aGlzLnN0YXRlLnZhbHVlLCBbdmFsdWVdKSA6IHZhbHVlO1xuXG4gICAgICAvLyBub3RpZnkgdGhlIG9uQ2hhbmdlIHByb3AgdGhhdCB0aGUgdXNlciBpcyB0cnlpbmcgdG8gY2hhbmdlIHZhbHVlXG4gICAgICBfdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICBfdGhpcy5zZXRTZWxlY3RlZEluZGV4KG5ld1ZhbHVlKTtcbiAgICAgIF90aGlzLmhhbmRsZUNoYW5nZShlLCBuZXdWYWx1ZSk7XG5cbiAgICAgIC8vIEhlYWRzIHVwISBUaGlzIGV2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBgb25DaGFuZ2VgXG4gICAgICAvLyBOb3RpZnkgdGhlIG9uQWRkSXRlbSBwcm9wIGlmIHRoaXMgaXMgYSBuZXcgdmFsdWVcbiAgICAgIGlmIChpdGVtWydkYXRhLWFkZGl0aW9uYWwnXSkgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQWRkSXRlbScsIGUsIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywgeyB2YWx1ZTogdmFsdWUgfSkpO1xuICAgIH0sIF90aGlzLnNlbGVjdEl0ZW1PbkVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBzZWFyY2ggPSBfdGhpcy5wcm9wcy5zZWFyY2g7XG5cblxuICAgICAgaWYgKGtleWJvYXJkS2V5LmdldENvZGUoZSkgIT09IGtleWJvYXJkS2V5LkVudGVyKSByZXR1cm47XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBvcHRpb25TaXplID0gX3NpemUoX3RoaXMuZ2V0TWVudU9wdGlvbnMoKSk7XG4gICAgICBpZiAoc2VhcmNoICYmIG9wdGlvblNpemUgPT09IDApIHJldHVybjtcblxuICAgICAgX3RoaXMubWFrZVNlbGVjdGVkSXRlbUFjdGl2ZShlKTtcbiAgICAgIF90aGlzLmNsb3NlT25DaGFuZ2UoZSk7XG4gICAgICBfdGhpcy5jbGVhclNlYXJjaFF1ZXJ5KCk7XG4gICAgICBpZiAoc2VhcmNoICYmIF90aGlzLnNlYXJjaFJlZikgX3RoaXMuc2VhcmNoUmVmLmZvY3VzKCk7XG4gICAgfSwgX3RoaXMucmVtb3ZlSXRlbU9uQmFja3NwYWNlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMy5tdWx0aXBsZSxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczMuc2VhcmNoO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgc2VhcmNoUXVlcnkgPSBfdGhpcyRzdGF0ZS5zZWFyY2hRdWVyeSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHN0YXRlLnZhbHVlO1xuXG5cbiAgICAgIGlmIChrZXlib2FyZEtleS5nZXRDb2RlKGUpICE9PSBrZXlib2FyZEtleS5CYWNrc3BhY2UpIHJldHVybjtcbiAgICAgIGlmIChzZWFyY2hRdWVyeSB8fCAhc2VhcmNoIHx8ICFtdWx0aXBsZSB8fCBfaXNFbXB0eSh2YWx1ZSkpIHJldHVybjtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gcmVtb3ZlIG1vc3QgcmVjZW50IHZhbHVlXG4gICAgICB2YXIgbmV3VmFsdWUgPSBfZHJvcFJpZ2h0KHZhbHVlKTtcblxuICAgICAgX3RoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgX3RoaXMuc2V0U2VsZWN0ZWRJbmRleChuZXdWYWx1ZSk7XG4gICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UoZSwgbmV3VmFsdWUpO1xuICAgIH0sIF90aGlzLmNsb3NlT25Eb2N1bWVudENsaWNrID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5jbG9zZU9uQmx1cikgcmV0dXJuO1xuXG4gICAgICAvLyBJZiBldmVudCBoYXBwZW5lZCBpbiB0aGUgZHJvcGRvd24sIGlnbm9yZSBpdFxuICAgICAgaWYgKF90aGlzLnJlZiAmJiBfaXNGdW5jdGlvbihfdGhpcy5yZWYuY29udGFpbnMpICYmIF90aGlzLnJlZi5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcblxuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5hdHRhY2hIYW5kbGVyc09uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGV2ZW50U3RhY2suc3ViKCdrZXlkb3duJywgW190aGlzLmNsb3NlT25Fc2NhcGUsIF90aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24sIF90aGlzLnNlbGVjdEl0ZW1PbkVudGVyLCBfdGhpcy5yZW1vdmVJdGVtT25CYWNrc3BhY2VdKTtcbiAgICAgIGV2ZW50U3RhY2suc3ViKCdjbGljaycsIF90aGlzLmNsb3NlT25Eb2N1bWVudENsaWNrKTtcbiAgICAgIGV2ZW50U3RhY2sudW5zdWIoJ2tleWRvd24nLCBbX3RoaXMub3Blbk9uQXJyb3csIF90aGlzLm9wZW5PblNwYWNlXSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgX3RoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgICAgZXZlbnRTdGFjay5zdWIoJ21vdXNldXAnLCBfdGhpcy5oYW5kbGVEb2N1bWVudE1vdXNlVXApO1xuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uTW91c2VEb3duJywgZSwgX3RoaXMucHJvcHMpO1xuICAgIH0sIF90aGlzLmhhbmRsZURvY3VtZW50TW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgX3RoaXMuaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgIGV2ZW50U3RhY2sudW5zdWIoJ21vdXNldXAnLCBfdGhpcy5oYW5kbGVEb2N1bWVudE1vdXNlVXApO1xuICAgIH0sIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5DaGFyYWN0ZXJzID0gX3RoaXMkcHJvcHM0Lm1pbkNoYXJhY3RlcnMsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHM0LnNlYXJjaDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkc3RhdGUyLm9wZW4sXG4gICAgICAgICAgc2VhcmNoUXVlcnkgPSBfdGhpcyRzdGF0ZTIuc2VhcmNoUXVlcnk7XG5cblxuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQ2xpY2snLCBlLCBfdGhpcy5wcm9wcyk7XG4gICAgICAvLyBwcmV2ZW50IGNsb3NlT25Eb2N1bWVudENsaWNrKClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmICghc2VhcmNoKSByZXR1cm4gX3RoaXMudG9nZ2xlKGUpO1xuICAgICAgaWYgKG9wZW4pIHJldHVybjtcbiAgICAgIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggPj0gbWluQ2hhcmFjdGVycyB8fCBtaW5DaGFyYWN0ZXJzID09PSAxKSB7XG4gICAgICAgIF90aGlzLm9wZW4oZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5zZWFyY2hSZWYpIF90aGlzLnNlYXJjaFJlZi5mb2N1cygpO1xuICAgIH0sIF90aGlzLmhhbmRsZUljb25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgIF9pbnZva2UoX3RoaXMucHJvcHMsICdvbkNsaWNrJywgZSwgX3RoaXMucHJvcHMpO1xuICAgICAgLy8gcHJldmVudCBoYW5kbGVDbGljaygpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgX3RoaXMudG9nZ2xlKGUpO1xuICAgIH0sIF90aGlzLmhhbmRsZUl0ZW1DbGljayA9IGZ1bmN0aW9uIChlLCBpdGVtKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczUubXVsdGlwbGUsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHM1LnNlYXJjaDtcbiAgICAgIHZhciB2YWx1ZSA9IGl0ZW0udmFsdWU7XG5cbiAgICAgIC8vIHByZXZlbnQgdG9nZ2xlKCkgaW4gaGFuZGxlQ2xpY2soKVxuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gcHJldmVudCBjbG9zZU9uRG9jdW1lbnRDbGljaygpIGlmIG11bHRpcGxlIG9yIGl0ZW0gaXMgZGlzYWJsZWRcbiAgICAgIGlmIChtdWx0aXBsZSB8fCBpdGVtLmRpc2FibGVkKSBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgdmFyIGlzQWRkaXRpb25JdGVtID0gaXRlbVsnZGF0YS1hZGRpdGlvbmFsJ107XG4gICAgICB2YXIgbmV3VmFsdWUgPSBtdWx0aXBsZSA/IF91bmlvbihfdGhpcy5zdGF0ZS52YWx1ZSwgW3ZhbHVlXSkgOiB2YWx1ZTtcblxuICAgICAgLy8gbm90aWZ5IHRoZSBvbkNoYW5nZSBwcm9wIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIGNoYW5nZSB2YWx1ZVxuICAgICAgX3RoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgX3RoaXMuc2V0U2VsZWN0ZWRJbmRleCh2YWx1ZSk7XG5cbiAgICAgIHZhciBvcHRpb25TaXplID0gX3NpemUoX3RoaXMuZ2V0TWVudU9wdGlvbnMoKSk7XG4gICAgICBpZiAoIW11bHRpcGxlIHx8IGlzQWRkaXRpb25JdGVtIHx8IG9wdGlvblNpemUgPT09IDEpIF90aGlzLmNsZWFyU2VhcmNoUXVlcnkoKTtcblxuICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKGUsIG5ld1ZhbHVlKTtcbiAgICAgIF90aGlzLmNsb3NlT25DaGFuZ2UoZSk7XG5cbiAgICAgIC8vIEhlYWRzIHVwISBUaGlzIGV2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBgb25DaGFuZ2VgXG4gICAgICAvLyBOb3RpZnkgdGhlIG9uQWRkSXRlbSBwcm9wIGlmIHRoaXMgaXMgYSBuZXcgdmFsdWVcbiAgICAgIGlmIChpc0FkZGl0aW9uSXRlbSkgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQWRkSXRlbScsIGUsIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywgeyB2YWx1ZTogdmFsdWUgfSkpO1xuXG4gICAgICBpZiAobXVsdGlwbGUgJiYgc2VhcmNoICYmIF90aGlzLnNlYXJjaFJlZikgX3RoaXMuc2VhcmNoUmVmLmZvY3VzKCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGZvY3VzID0gX3RoaXMuc3RhdGUuZm9jdXM7XG5cblxuICAgICAgaWYgKGZvY3VzKSByZXR1cm47XG5cbiAgICAgIF9pbnZva2UoX3RoaXMucHJvcHMsICdvbkZvY3VzJywgZSwgX3RoaXMucHJvcHMpO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgLy8gSGVhZHMgdXAhIERvbid0IHJlbW92ZSB0aGlzLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1NlbWFudGljLU9yZy9TZW1hbnRpYy1VSS1SZWFjdC9pc3N1ZXMvMTMxNVxuICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBfZ2V0KGUsICdjdXJyZW50VGFyZ2V0Jyk7XG4gICAgICBpZiAoY3VycmVudFRhcmdldCAmJiBjdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSByZXR1cm47XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbG9zZU9uQmx1ciA9IF90aGlzJHByb3BzNi5jbG9zZU9uQmx1cixcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzNi5tdWx0aXBsZSxcbiAgICAgICAgICBvbkJsdXIgPSBfdGhpcyRwcm9wczYub25CbHVyLFxuICAgICAgICAgIHNlbGVjdE9uQmx1ciA9IF90aGlzJHByb3BzNi5zZWxlY3RPbkJsdXI7XG4gICAgICAvLyBkbyBub3QgXCJibHVyXCIgd2hlbiB0aGUgbW91c2UgaXMgZG93biBpbnNpZGUgb2YgdGhlIERyb3Bkb3duXG5cbiAgICAgIGlmIChfdGhpcy5pc01vdXNlRG93bikgcmV0dXJuO1xuICAgICAgaWYgKG9uQmx1cikgb25CbHVyKGUsIF90aGlzLnByb3BzKTtcbiAgICAgIGlmIChzZWxlY3RPbkJsdXIgJiYgIW11bHRpcGxlKSB7XG4gICAgICAgIF90aGlzLm1ha2VTZWxlY3RlZEl0ZW1BY3RpdmUoZSk7XG4gICAgICAgIGlmIChjbG9zZU9uQmx1cikgX3RoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xuICAgICAgX3RoaXMuY2xlYXJTZWFyY2hRdWVyeSgpO1xuICAgIH0sIF90aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IGZ1bmN0aW9uIChlLCBfcmVmMikge1xuICAgICAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG5cblxuICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGluZyB0byB0aGlzLnByb3BzLm9uQ2hhbmdlKClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHZhciBtaW5DaGFyYWN0ZXJzID0gX3RoaXMucHJvcHMubWluQ2hhcmFjdGVycztcbiAgICAgIHZhciBvcGVuID0gX3RoaXMuc3RhdGUub3BlbjtcblxuICAgICAgdmFyIG5ld1F1ZXJ5ID0gdmFsdWU7XG5cbiAgICAgIF9pbnZva2UoX3RoaXMucHJvcHMsICdvblNlYXJjaENoYW5nZScsIGUsIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywgeyBzZWFyY2hRdWVyeTogbmV3UXVlcnkgfSkpO1xuICAgICAgX3RoaXMudHJ5U2V0U3RhdGUoeyBzZWFyY2hRdWVyeTogbmV3UXVlcnkgfSwgeyBzZWxlY3RlZEluZGV4OiAwIH0pO1xuXG4gICAgICAvLyBvcGVuIHNlYXJjaCBkcm9wZG93biBvbiBzZWFyY2ggcXVlcnlcbiAgICAgIGlmICghb3BlbiAmJiBuZXdRdWVyeS5sZW5ndGggPj0gbWluQ2hhcmFjdGVycykge1xuICAgICAgICBfdGhpcy5vcGVuKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNsb3NlIHNlYXJjaCBkcm9wZG93biBpZiBzZWFyY2ggcXVlcnkgaXMgdG9vIHNtYWxsXG4gICAgICBpZiAob3BlbiAmJiBtaW5DaGFyYWN0ZXJzICE9PSAxICYmIG5ld1F1ZXJ5Lmxlbmd0aCA8IG1pbkNoYXJhY3RlcnMpIF90aGlzLmNsb3NlKCk7XG4gICAgfSwgX3RoaXMuZ2V0TWVudU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF90aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYWRkaXRpb25MYWJlbCA9IF90aGlzJHByb3BzNy5hZGRpdGlvbkxhYmVsLFxuICAgICAgICAgIGFkZGl0aW9uUG9zaXRpb24gPSBfdGhpcyRwcm9wczcuYWRkaXRpb25Qb3NpdGlvbixcbiAgICAgICAgICBhbGxvd0FkZGl0aW9ucyA9IF90aGlzJHByb3BzNy5hbGxvd0FkZGl0aW9ucyxcbiAgICAgICAgICBkZWJ1cnIgPSBfdGhpcyRwcm9wczcuZGVidXJyLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHM3Lm11bHRpcGxlLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzNy5zZWFyY2g7XG4gICAgICB2YXIgc2VhcmNoUXVlcnkgPSBfdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeTtcblxuXG4gICAgICB2YXIgZmlsdGVyZWRPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgLy8gZmlsdGVyIG91dCBhY3RpdmUgb3B0aW9uc1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGZpbHRlcmVkT3B0aW9ucyA9IF9maWx0ZXIoZmlsdGVyZWRPcHRpb25zLCBmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgcmV0dXJuICFfaW5jbHVkZXModmFsdWUsIG9wdC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBmaWx0ZXIgYnkgc2VhcmNoIHF1ZXJ5XG4gICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIGlmIChfaXNGdW5jdGlvbihzZWFyY2gpKSB7XG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gc2VhcmNoKGZpbHRlcmVkT3B0aW9ucywgc2VhcmNoUXVlcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlbW92ZSBkaWFjcml0aWNzIG9uIHNlYXJjaCBpbnB1dCBhbmQgb3B0aW9ucywgaWYgZGVidXJyIHByb3AgaXMgc2V0XG4gICAgICAgICAgdmFyIHN0cmlwcGVkUXVlcnkgPSBkZWJ1cnIgPyBfZGVidXJyKHNlYXJjaFF1ZXJ5KSA6IHNlYXJjaFF1ZXJ5O1xuXG4gICAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChfZXNjYXBlUmVnRXhwKHN0cmlwcGVkUXVlcnkpLCAnaScpO1xuXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gX2ZpbHRlcihmaWx0ZXJlZE9wdGlvbnMsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZS50ZXN0KGRlYnVyciA/IF9kZWJ1cnIob3B0LnRleHQpIDogb3B0LnRleHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGluc2VydCB0aGUgXCJhZGRcIiBpdGVtXG4gICAgICBpZiAoYWxsb3dBZGRpdGlvbnMgJiYgc2VhcmNoICYmIHNlYXJjaFF1ZXJ5ICYmICFfc29tZShmaWx0ZXJlZE9wdGlvbnMsIHsgdGV4dDogc2VhcmNoUXVlcnkgfSkpIHtcbiAgICAgICAgdmFyIGFkZGl0aW9uTGFiZWxFbGVtZW50ID0gUmVhY3QuaXNWYWxpZEVsZW1lbnQoYWRkaXRpb25MYWJlbCkgPyBSZWFjdC5jbG9uZUVsZW1lbnQoYWRkaXRpb25MYWJlbCwgeyBrZXk6ICdhZGRpdGlvbi1sYWJlbCcgfSkgOiBhZGRpdGlvbkxhYmVsIHx8ICcnO1xuXG4gICAgICAgIHZhciBhZGRJdGVtID0ge1xuICAgICAgICAgIGtleTogJ2FkZGl0aW9uJyxcbiAgICAgICAgICAvLyBieSB1c2luZyBhbiBhcnJheSwgd2UgY2FuIHBhc3MgbXVsdGlwbGUgZWxlbWVudHMsIGJ1dCB3aGVuIGRvaW5nIHNvXG4gICAgICAgICAgLy8gd2UgbXVzdCBzcGVjaWZ5IGEgYGtleWAgZm9yIFJlYWN0IHRvIGtub3cgd2hpY2ggb25lIGlzIHdoaWNoXG4gICAgICAgICAgdGV4dDogW2FkZGl0aW9uTGFiZWxFbGVtZW50LCBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2InLFxuICAgICAgICAgICAgeyBrZXk6ICdhZGRpdGlvbi1xdWVyeScgfSxcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5XG4gICAgICAgICAgKV0sXG4gICAgICAgICAgdmFsdWU6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICAgIGNsYXNzTmFtZTogJ2FkZGl0aW9uJyxcbiAgICAgICAgICAnZGF0YS1hZGRpdGlvbmFsJzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBpZiAoYWRkaXRpb25Qb3NpdGlvbiA9PT0gJ3RvcCcpIGZpbHRlcmVkT3B0aW9ucy51bnNoaWZ0KGFkZEl0ZW0pO2Vsc2UgZmlsdGVyZWRPcHRpb25zLnB1c2goYWRkSXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgfSwgX3RoaXMuZ2V0U2VsZWN0ZWRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldE1lbnVPcHRpb25zKCk7XG5cbiAgICAgIHJldHVybiBfZ2V0KG9wdGlvbnMsICdbJyArIHNlbGVjdGVkSW5kZXggKyAnXScpO1xuICAgIH0sIF90aGlzLmdldEVuYWJsZWRJbmRpY2VzID0gZnVuY3Rpb24gKGdpdmVuT3B0aW9ucykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBnaXZlbk9wdGlvbnMgfHwgX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcblxuICAgICAgcmV0dXJuIF9yZWR1Y2Uob3B0aW9ucywgZnVuY3Rpb24gKG1lbW8sIGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkgbWVtby5wdXNoKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG4gICAgfSwgX3RoaXMuZ2V0SXRlbUJ5VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMucHJvcHMub3B0aW9ucztcblxuXG4gICAgICByZXR1cm4gX2ZpbmQob3B0aW9ucywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfSwgX3RoaXMuZ2V0TWVudUl0ZW1JbmRleEJ5VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGdpdmVuT3B0aW9ucykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBnaXZlbk9wdGlvbnMgfHwgX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcblxuICAgICAgcmV0dXJuIF9maW5kSW5kZXgob3B0aW9ucywgWyd2YWx1ZScsIHZhbHVlXSk7XG4gICAgfSwgX3RoaXMuZ2V0RHJvcGRvd25BcmlhT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBsb2FkaW5nID0gX3RoaXMkcHJvcHM4LmxvYWRpbmcsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczguZGlzYWJsZWQsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHM4LnNlYXJjaCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzOC5tdWx0aXBsZTtcbiAgICAgIHZhciBvcGVuID0gX3RoaXMuc3RhdGUub3BlbjtcblxuICAgICAgdmFyIGFyaWFPcHRpb25zID0ge1xuICAgICAgICByb2xlOiBzZWFyY2ggPyAnY29tYm9ib3gnIDogJ2xpc3Rib3gnLFxuICAgICAgICAnYXJpYS1idXN5JzogbG9hZGluZyxcbiAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiAhIW9wZW5cbiAgICAgIH07XG4gICAgICBpZiAoYXJpYU9wdGlvbnMucm9sZSA9PT0gJ2xpc3Rib3gnKSB7XG4gICAgICAgIGFyaWFPcHRpb25zWydhcmlhLW11bHRpc2VsZWN0YWJsZSddID0gbXVsdGlwbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJpYU9wdGlvbnM7XG4gICAgfSwgX3RoaXMuY2xlYXJTZWFyY2hRdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnRyeVNldFN0YXRlKHsgc2VhcmNoUXVlcnk6ICcnIH0pO1xuICAgIH0sIF90aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBfdGhpcy50cnlTZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9LCBfdGhpcy5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBvcHRpb25zUHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF90aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgICB2YXIgbXVsdGlwbGUgPSBfdGhpcy5wcm9wcy5tdWx0aXBsZTtcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleDtcblxuICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5nZXRNZW51T3B0aW9ucyh2YWx1ZSwgb3B0aW9uc1Byb3BzKTtcbiAgICAgIHZhciBlbmFibGVkSW5kaWNpZXMgPSBfdGhpcy5nZXRFbmFibGVkSW5kaWNlcyhvcHRpb25zKTtcblxuICAgICAgdmFyIG5ld1NlbGVjdGVkSW5kZXggPSB2b2lkIDA7XG5cbiAgICAgIC8vIHVwZGF0ZSB0aGUgc2VsZWN0ZWQgaW5kZXhcbiAgICAgIGlmICghc2VsZWN0ZWRJbmRleCB8fCBzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgICB2YXIgZmlyc3RJbmRleCA9IGVuYWJsZWRJbmRpY2llc1swXTtcblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGN1cnJlbnRseSBhY3RpdmUgaXRlbSwgaWYgbm9uZSwgdXNlIHRoZSBmaXJzdCBpdGVtLlxuICAgICAgICAvLyBNdWx0aXBsZSBzZWxlY3RzIHJlbW92ZSBhY3RpdmUgaXRlbXMgZnJvbSB0aGUgbGlzdCxcbiAgICAgICAgLy8gdGhlaXIgaW5pdGlhbCBzZWxlY3RlZCBpbmRleCBzaG91bGQgYmUgMC5cbiAgICAgICAgbmV3U2VsZWN0ZWRJbmRleCA9IG11bHRpcGxlID8gZmlyc3RJbmRleCA6IF90aGlzLmdldE1lbnVJdGVtSW5kZXhCeVZhbHVlKHZhbHVlLCBvcHRpb25zKSB8fCBlbmFibGVkSW5kaWNpZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIC8vIG11bHRpcGxlIHNlbGVjdHMgcmVtb3ZlIG9wdGlvbnMgZnJvbSB0aGUgbWVudSBhcyB0aGV5IGFyZSBtYWRlIGFjdGl2ZVxuICAgICAgICAvLyBrZWVwIHRoZSBzZWxlY3RlZCBpbmRleCB3aXRoaW4gcmFuZ2Ugb2YgdGhlIHJlbWFpbmluZyBpdGVtc1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSBvcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBuZXdTZWxlY3RlZEluZGV4ID0gZW5hYmxlZEluZGljaWVzW2VuYWJsZWRJbmRpY2llcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gX3RoaXMuZ2V0TWVudUl0ZW1JbmRleEJ5VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIHJlZ3VsYXIgc2VsZWN0cyBjYW4gb25seSBoYXZlIG9uZSBhY3RpdmUgaXRlbVxuICAgICAgICAvLyBzZXQgdGhlIHNlbGVjdGVkIGluZGV4IHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIGl0ZW1cbiAgICAgICAgbmV3U2VsZWN0ZWRJbmRleCA9IF9pbmNsdWRlcyhlbmFibGVkSW5kaWNpZXMsIGFjdGl2ZUluZGV4KSA/IGFjdGl2ZUluZGV4IDogdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5ld1NlbGVjdGVkSW5kZXggfHwgbmV3U2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgbmV3U2VsZWN0ZWRJbmRleCA9IGVuYWJsZWRJbmRpY2llc1swXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEluZGV4OiBuZXdTZWxlY3RlZEluZGV4IH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZUxhYmVsQ2xpY2sgPSBmdW5jdGlvbiAoZSwgbGFiZWxQcm9wcykge1xuICAgICAgLy8gcHJldmVudCBmb2N1c2luZyBzZWFyY2ggaW5wdXQgb24gY2xpY2tcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRMYWJlbDogbGFiZWxQcm9wcy52YWx1ZSB9KTtcblxuICAgICAgdmFyIG9uTGFiZWxDbGljayA9IF90aGlzLnByb3BzLm9uTGFiZWxDbGljaztcblxuICAgICAgaWYgKG9uTGFiZWxDbGljaykgb25MYWJlbENsaWNrKGUsIGxhYmVsUHJvcHMpO1xuICAgIH0sIF90aGlzLmhhbmRsZUxhYmVsUmVtb3ZlID0gZnVuY3Rpb24gKGUsIGxhYmVsUHJvcHMpIHtcbiAgICAgIC8vIHByZXZlbnQgZm9jdXNpbmcgc2VhcmNoIGlucHV0IG9uIGNsaWNrXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG5cbiAgICAgIHZhciBuZXdWYWx1ZSA9IF93aXRob3V0KHZhbHVlLCBsYWJlbFByb3BzLnZhbHVlKTtcblxuXG4gICAgICBfdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICBfdGhpcy5zZXRTZWxlY3RlZEluZGV4KG5ld1ZhbHVlKTtcbiAgICAgIF90aGlzLmhhbmRsZUNoYW5nZShlLCBuZXdWYWx1ZSk7XG4gICAgfSwgX3RoaXMubW92ZVNlbGVjdGlvbkJ5ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgdmFyIHN0YXJ0SW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF90aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXg7XG5cblxuICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5nZXRNZW51T3B0aW9ucygpO1xuXG4gICAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3BcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBsZWZ0IHBhcnQgb2YgY29uZGl0aW9uIGFmdGVyIGNoaWxkcmVuIEFQSSB3aWxsIGJlIHJlbW92ZWRcbiAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgX2V2ZXJ5KG9wdGlvbnMsICdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgIHZhciBsYXN0SW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICAvLyBuZXh0IGlzIGFmdGVyIGxhc3QsIHdyYXAgdG8gYmVnaW5uaW5nXG4gICAgICAvLyBuZXh0IGlzIGJlZm9yZSBmaXJzdCwgd3JhcCB0byBlbmRcbiAgICAgIHZhciBuZXh0SW5kZXggPSBzdGFydEluZGV4ICsgb2Zmc2V0O1xuICAgICAgaWYgKG5leHRJbmRleCA+IGxhc3RJbmRleCkgbmV4dEluZGV4ID0gMDtlbHNlIGlmIChuZXh0SW5kZXggPCAwKSBuZXh0SW5kZXggPSBsYXN0SW5kZXg7XG5cbiAgICAgIGlmIChvcHRpb25zW25leHRJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMubW92ZVNlbGVjdGlvbkJ5KG9mZnNldCwgbmV4dEluZGV4KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSW5kZXg6IG5leHRJbmRleCB9KTtcbiAgICAgIF90aGlzLnNjcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3KCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlSWNvbk92ZXJyaWRlcyA9IGZ1bmN0aW9uIChwcmVkZWZpbmVkUHJvcHMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIF9pbnZva2UocHJlZGVmaW5lZFByb3BzLCAnb25DbGljaycsIGUsIHByZWRlZmluZWRQcm9wcyk7XG4gICAgICAgICAgX3RoaXMuaGFuZGxlSWNvbkNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sIF90aGlzLmhhbmRsZVNlYXJjaFJlZiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc2VhcmNoUmVmID0gYztcbiAgICB9LCBfdGhpcy5oYW5kbGVTaXplclJlZiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc2l6ZXJSZWYgPSBjO1xuICAgIH0sIF90aGlzLmhhbmRsZVJlZiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gX3RoaXMucmVmID0gYztcbiAgICB9LCBfdGhpcy5jb21wdXRlU2VhcmNoSW5wdXRUYWJJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzOS5kaXNhYmxlZCxcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzOS50YWJJbmRleDtcblxuXG4gICAgICBpZiAoIV9pc05pbCh0YWJJbmRleCkpIHJldHVybiB0YWJJbmRleDtcbiAgICAgIHJldHVybiBkaXNhYmxlZCA/IC0xIDogMDtcbiAgICB9LCBfdGhpcy5jb21wdXRlU2VhcmNoSW5wdXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWFyY2hRdWVyeSA9IF90aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5O1xuXG5cbiAgICAgIGlmIChfdGhpcy5zaXplclJlZiAmJiBzZWFyY2hRdWVyeSkge1xuICAgICAgICAvLyByZXNpemUgdGhlIHNlYXJjaCBpbnB1dCwgdGVtcG9yYXJpbHkgc2hvdyB0aGUgc2l6ZXIgc28gd2UgY2FuIG1lYXN1cmUgaXRcblxuICAgICAgICBfdGhpcy5zaXplclJlZi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICAgIF90aGlzLnNpemVyUmVmLnRleHRDb250ZW50ID0gc2VhcmNoUXVlcnk7XG4gICAgICAgIHZhciBzZWFyY2hXaWR0aCA9IE1hdGguY2VpbChfdGhpcy5zaXplclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICAgIF90aGlzLnNpemVyUmVmLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaFdpZHRoO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNvbXB1dGVUYWJJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczEwID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczEwLmRpc2FibGVkLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzMTAuc2VhcmNoLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3RoaXMkcHJvcHMxMC50YWJJbmRleDtcblxuICAgICAgLy8gZG9uJ3Qgc2V0IGEgcm9vdCBub2RlIHRhYkluZGV4IGFzIHRoZSBzZWFyY2ggaW5wdXQgaGFzIGl0cyBvd24gdGFiSW5kZXhcblxuICAgICAgaWYgKHNlYXJjaCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuIC0xO1xuICAgICAgcmV0dXJuIF9pc05pbCh0YWJJbmRleCkgPyAwIDogdGFiSW5kZXg7XG4gICAgfSwgX3RoaXMuc2Nyb2xsU2VsZWN0ZWRJdGVtSW50b1ZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnJlZikgcmV0dXJuO1xuICAgICAgdmFyIG1lbnUgPSBfdGhpcy5yZWYucXVlcnlTZWxlY3RvcignLm1lbnUudmlzaWJsZScpO1xuICAgICAgaWYgKCFtZW51KSByZXR1cm47XG4gICAgICB2YXIgaXRlbSA9IG1lbnUucXVlcnlTZWxlY3RvcignLml0ZW0uc2VsZWN0ZWQnKTtcbiAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgICB2YXIgaXNPdXRPZlVwcGVyVmlldyA9IGl0ZW0ub2Zmc2V0VG9wIDwgbWVudS5zY3JvbGxUb3A7XG4gICAgICB2YXIgaXNPdXRPZkxvd2VyVmlldyA9IGl0ZW0ub2Zmc2V0VG9wICsgaXRlbS5jbGllbnRIZWlnaHQgPiBtZW51LnNjcm9sbFRvcCArIG1lbnUuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBpZiAoaXNPdXRPZlVwcGVyVmlldykge1xuICAgICAgICBtZW51LnNjcm9sbFRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgICAgfSBlbHNlIGlmIChpc091dE9mTG93ZXJWaWV3KSB7XG4gICAgICAgIG1lbnUuc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCAtIG1lbnUuY2xpZW50SGVpZ2h0O1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMTEuZGlzYWJsZWQsXG4gICAgICAgICAgb25PcGVuID0gX3RoaXMkcHJvcHMxMS5vbk9wZW4sXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMxMS5zZWFyY2g7XG5cbiAgICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgaWYgKHNlYXJjaCAmJiBfdGhpcy5zZWFyY2hSZWYpIF90aGlzLnNlYXJjaFJlZi5mb2N1cygpO1xuICAgICAgaWYgKG9uT3Blbikgb25PcGVuKGUsIF90aGlzLnByb3BzKTtcblxuICAgICAgX3RoaXMudHJ5U2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgICAgX3RoaXMuc2Nyb2xsU2VsZWN0ZWRJdGVtSW50b1ZpZXcoKTtcbiAgICB9LCBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25DbG9zZSA9IF90aGlzLnByb3BzLm9uQ2xvc2U7XG5cbiAgICAgIGlmIChvbkNsb3NlKSBvbkNsb3NlKGUsIF90aGlzLnByb3BzKTtcblxuICAgICAgX3RoaXMudHJ5U2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBoYXNTZWFyY2hGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnNlYXJjaFJlZjtcbiAgICAgIHZhciBoYXNEcm9wZG93bkZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMucmVmO1xuICAgICAgdmFyIGhhc0ZvY3VzID0gaGFzU2VhcmNoRm9jdXMgfHwgaGFzRHJvcGRvd25Gb2N1cztcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TZW1hbnRpYy1PcmcvU2VtYW50aWMtVUktUmVhY3QvaXNzdWVzLzYyN1xuICAgICAgLy8gQmx1ciB0aGUgRHJvcGRvd24gb24gY2xvc2Ugc28gaXQgaXMgYmx1cnJlZCBhZnRlciBzZWxlY3RpbmcgYW4gaXRlbS5cbiAgICAgIC8vIFRoaXMgaXMgdG8gcHJldmVudCBpdCBmcm9tIHJlLW9wZW5pbmcgd2hlbiBzd2l0Y2hpbmcgdGFicyBhZnRlciBzZWxlY3RpbmcgYW4gaXRlbS5cbiAgICAgIGlmICghaGFzU2VhcmNoRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucmVmLmJsdXIoKTtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgbmVlZCB0byBrZWVwIHRoZSB2aXJ0dWFsIG1vZGVsIGluIHN5bmMgd2l0aCB0aGUgYnJvd3NlciBmb2N1cyBjaGFuZ2VcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TZW1hbnRpYy1PcmcvU2VtYW50aWMtVUktUmVhY3QvaXNzdWVzLzY5MlxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBmb2N1czogaGFzRm9jdXMgfSk7XG4gICAgfSwgX3RoaXMudG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5vcGVuID8gX3RoaXMuY2xvc2UoZSkgOiBfdGhpcy5vcGVuKGUpO1xuICAgIH0sIF90aGlzLnJlbmRlclRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMxMi5tdWx0aXBsZSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMTIucGxhY2Vob2xkZXIsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMxMi5zZWFyY2gsXG4gICAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzMTIudGV4dDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWFyY2hRdWVyeSA9IF90aGlzJHN0YXRlMy5zZWFyY2hRdWVyeSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHN0YXRlMy52YWx1ZSxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkc3RhdGUzLm9wZW47XG5cbiAgICAgIHZhciBoYXNWYWx1ZSA9IG11bHRpcGxlID8gIV9pc0VtcHR5KHZhbHVlKSA6ICFfaXNOaWwodmFsdWUpICYmIHZhbHVlICE9PSAnJztcblxuICAgICAgdmFyIGNsYXNzZXMgPSBjeChwbGFjZWhvbGRlciAmJiAhaGFzVmFsdWUgJiYgJ2RlZmF1bHQnLCAndGV4dCcsIHNlYXJjaCAmJiBzZWFyY2hRdWVyeSAmJiAnZmlsdGVyZWQnKTtcbiAgICAgIHZhciBfdGV4dCA9IHBsYWNlaG9sZGVyO1xuICAgICAgaWYgKHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIF90ZXh0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodGV4dCkge1xuICAgICAgICBfdGV4dCA9IHRleHQ7XG4gICAgICB9IGVsc2UgaWYgKG9wZW4gJiYgIW11bHRpcGxlKSB7XG4gICAgICAgIF90ZXh0ID0gX2dldChfdGhpcy5nZXRTZWxlY3RlZEl0ZW0oKSwgJ3RleHQnKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzVmFsdWUpIHtcbiAgICAgICAgX3RleHQgPSBfZ2V0KF90aGlzLmdldEl0ZW1CeVZhbHVlKHZhbHVlKSwgJ3RleHQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3Nlcywgcm9sZTogJ2FsZXJ0JywgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnIH0sXG4gICAgICAgIF90ZXh0XG4gICAgICApO1xuICAgIH0sIF90aGlzLnJlbmRlclNlYXJjaElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczEzLnNlYXJjaCxcbiAgICAgICAgICBzZWFyY2hJbnB1dCA9IF90aGlzJHByb3BzMTMuc2VhcmNoSW5wdXQ7XG4gICAgICB2YXIgc2VhcmNoUXVlcnkgPSBfdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeTtcblxuXG4gICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gRHJvcGRvd25TZWFyY2hJbnB1dC5jcmVhdGUoc2VhcmNoSW5wdXQsIHsgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgICAgaW5wdXRSZWY6IF90aGlzLmhhbmRsZVNlYXJjaFJlZixcbiAgICAgICAgICBvbkNoYW5nZTogX3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlLFxuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdGhpcy5jb21wdXRlU2VhcmNoSW5wdXRXaWR0aCgpIH0sXG4gICAgICAgICAgdGFiSW5kZXg6IF90aGlzLmNvbXB1dGVTZWFyY2hJbnB1dFRhYkluZGV4KCksXG4gICAgICAgICAgdmFsdWU6IHNlYXJjaFF1ZXJ5XG4gICAgICAgIH0gfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyU2VhcmNoU2l6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzMTQuc2VhcmNoLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMxNC5tdWx0aXBsZTtcblxuXG4gICAgICBpZiAoIShzZWFyY2ggJiYgbXVsdGlwbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdzaXplcicsIHJlZjogX3RoaXMuaGFuZGxlU2l6ZXJSZWYgfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyTGFiZWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMTUubXVsdGlwbGUsXG4gICAgICAgICAgcmVuZGVyTGFiZWwgPSBfdGhpcyRwcm9wczE1LnJlbmRlckxhYmVsO1xuICAgICAgdmFyIF90aGlzJHN0YXRlNCA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdGVkTGFiZWwgPSBfdGhpcyRzdGF0ZTQuc2VsZWN0ZWRMYWJlbCxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHN0YXRlNC52YWx1ZTtcblxuICAgICAgaWYgKCFtdWx0aXBsZSB8fCBfaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBfbWFwKHZhbHVlLCBfdGhpcy5nZXRJdGVtQnlWYWx1ZSk7XG5cblxuICAgICAgLy8gaWYgbm8gaXRlbSBjb3VsZCBiZSBmb3VuZCBmb3IgYSBnaXZlbiBzdGF0ZSB2YWx1ZSB0aGUgc2VsZWN0ZWQgaXRlbSB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgLy8gY29tcGFjdCB0aGUgc2VsZWN0ZWRJdGVtcyBzbyB3ZSBvbmx5IGhhdmUgYWN0dWFsIG9iamVjdHMgbGVmdFxuICAgICAgcmV0dXJuIF9tYXAoX2NvbXBhY3Qoc2VsZWN0ZWRJdGVtcyksIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAgIGFjdGl2ZTogaXRlbS52YWx1ZSA9PT0gc2VsZWN0ZWRMYWJlbCxcbiAgICAgICAgICBhczogJ2EnLFxuICAgICAgICAgIGtleTogZ2V0S2V5T3JWYWx1ZShpdGVtLmtleSwgaXRlbS52YWx1ZSksXG4gICAgICAgICAgb25DbGljazogX3RoaXMuaGFuZGxlTGFiZWxDbGljayxcbiAgICAgICAgICBvblJlbW92ZTogX3RoaXMuaGFuZGxlTGFiZWxSZW1vdmUsXG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gTGFiZWwuY3JlYXRlKHJlbmRlckxhYmVsKGl0ZW0sIGluZGV4LCBkZWZhdWx0UHJvcHMpLCB7IGRlZmF1bHRQcm9wczogZGVmYXVsdFByb3BzIH0pO1xuICAgICAgfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE2ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczE2Lm11bHRpcGxlLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzMTYuc2VhcmNoLFxuICAgICAgICAgIG5vUmVzdWx0c01lc3NhZ2UgPSBfdGhpcyRwcm9wczE2Lm5vUmVzdWx0c01lc3NhZ2U7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU1ID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IF90aGlzJHN0YXRlNS5zZWxlY3RlZEluZGV4LFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkc3RhdGU1LnZhbHVlO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldE1lbnVPcHRpb25zKCk7XG5cbiAgICAgIGlmIChub1Jlc3VsdHNNZXNzYWdlICE9PSBudWxsICYmIHNlYXJjaCAmJiBfaXNFbXB0eShvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ21lc3NhZ2UnIH0sXG4gICAgICAgICAgbm9SZXN1bHRzTWVzc2FnZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNBY3RpdmUgPSBtdWx0aXBsZSA/IGZ1bmN0aW9uIChvcHRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gX2luY2x1ZGVzKHZhbHVlLCBvcHRWYWx1ZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKG9wdFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvcHRWYWx1ZSA9PT0gdmFsdWU7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX21hcChvcHRpb25zLCBmdW5jdGlvbiAob3B0LCBpKSB7XG4gICAgICAgIHJldHVybiBEcm9wZG93bkl0ZW0uY3JlYXRlKF9leHRlbmRzKHtcbiAgICAgICAgICBhY3RpdmU6IGlzQWN0aXZlKG9wdC52YWx1ZSksXG4gICAgICAgICAgb25DbGljazogX3RoaXMuaGFuZGxlSXRlbUNsaWNrLFxuICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZEluZGV4ID09PSBpXG4gICAgICAgIH0sIG9wdCwge1xuICAgICAgICAgIGtleTogZ2V0S2V5T3JWYWx1ZShvcHQua2V5LCBvcHQudmFsdWUpLFxuICAgICAgICAgIC8vIE5lZWRlZCBmb3IgaGFuZGxpbmcgY2xpY2sgZXZlbnRzIG9uIGRpc2FibGVkIGl0ZW1zXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBvcHQuc3R5bGUsIHsgcG9pbnRlckV2ZW50czogJ2FsbCcgfSlcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE3ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczE3LmNoaWxkcmVuLFxuICAgICAgICAgIGhlYWRlciA9IF90aGlzJHByb3BzMTcuaGVhZGVyO1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICB2YXIgbWVudUNsYXNzZXMgPSBvcGVuID8gJ3Zpc2libGUnIDogJyc7XG4gICAgICB2YXIgYXJpYU9wdGlvbnMgPSBfdGhpcy5nZXREcm9wZG93bk1lbnVBcmlhT3B0aW9ucygpO1xuXG4gICAgICAvLyBzaW5nbGUgbWVudSBjaGlsZFxuICAgICAgaWYgKCFjaGlsZHJlblV0aWxzLmlzTmlsKGNoaWxkcmVuKSkge1xuICAgICAgICB2YXIgbWVudUNoaWxkID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjeChtZW51Q2xhc3NlcywgbWVudUNoaWxkLnByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChtZW51Q2hpbGQsIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgYXJpYU9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIERyb3Bkb3duTWVudSxcbiAgICAgICAgX2V4dGVuZHMoe30sIGFyaWFPcHRpb25zLCB7IGNsYXNzTmFtZTogbWVudUNsYXNzZXMgfSksXG4gICAgICAgIERyb3Bkb3duSGVhZGVyLmNyZWF0ZShoZWFkZXIpLFxuICAgICAgICBfdGhpcy5yZW5kZXJPcHRpb25zKClcbiAgICAgICk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiAnZ2V0SW5pdGlhbEF1dG9Db250cm9sbGVkU3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsQXV0b0NvbnRyb2xsZWRTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB7IHNlYXJjaFF1ZXJ5OiAnJyB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIG9wZW4gPSBfc3RhdGUub3BlbixcbiAgICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZTtcblxuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleCh2YWx1ZSk7XG5cbiAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmF0dGFjaEhhbmRsZXJzT25PcGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBfZ2V0MihEcm9wZG93bi5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bi5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsIHRoaXMpLmNhbGwodGhpcywgbmV4dFByb3BzKTtcblxuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBpbiBkZXZlbG9wbWVudCwgdmFsaWRhdGUgdmFsdWUgdHlwZSBtYXRjaGVzIGRyb3Bkb3duIHR5cGVcbiAgICAgICAgdmFyIGlzTmV4dFZhbHVlQXJyYXkgPSBBcnJheS5pc0FycmF5KG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICAgIHZhciBoYXNWYWx1ZSA9IF9oYXMobmV4dFByb3BzLCAndmFsdWUnKTtcblxuICAgICAgICBpZiAoaGFzVmFsdWUgJiYgbmV4dFByb3BzLm11bHRpcGxlICYmICFpc05leHRWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJvcGRvd24gYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IHdoZW4gYG11bHRpcGxlYCBpcyBzZXQuJyArICgnIFJlY2VpdmVkIHR5cGU6IGAnICsgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5leHRQcm9wcy52YWx1ZSkgKyAnYC4nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzVmFsdWUgJiYgIW5leHRQcm9wcy5tdWx0aXBsZSAmJiBpc05leHRWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJvcGRvd24gYHZhbHVlYCBtdXN0IG5vdCBiZSBhbiBhcnJheSB3aGVuIGBtdWx0aXBsZWAgaXMgbm90IHNldC4nICsgJyBFaXRoZXIgc2V0IGBtdWx0aXBsZT17dHJ1ZX1gIG9yIHVzZSBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChuZXh0UHJvcHMudmFsdWUsIHRoaXMucHJvcHMudmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUobmV4dFByb3BzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghX2lzRXF1YWwobmV4dFByb3BzLm9wdGlvbnMsIHRoaXMucHJvcHMub3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KHVuZGVmaW5lZCwgbmV4dFByb3BzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cbiAgICAgIC8vIGZvY3VzZWQgLyBibHVycmVkXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbXBsZXhpdHlcbiAgICAgIGlmICghcHJldlN0YXRlLmZvY3VzICYmIHRoaXMuc3RhdGUuZm9jdXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgIG1pbkNoYXJhY3RlcnMgPSBfcHJvcHMubWluQ2hhcmFjdGVycyxcbiAgICAgICAgICAgICAgb3Blbk9uRm9jdXMgPSBfcHJvcHMub3Blbk9uRm9jdXMsXG4gICAgICAgICAgICAgIHNlYXJjaCA9IF9wcm9wcy5zZWFyY2g7XG5cbiAgICAgICAgICB2YXIgb3BlbmFibGUgPSAhc2VhcmNoIHx8IHNlYXJjaCAmJiBtaW5DaGFyYWN0ZXJzID09PSAxO1xuXG4gICAgICAgICAgaWYgKG9wZW5PbkZvY3VzICYmIG9wZW5hYmxlKSB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIGV2ZW50U3RhY2suc3ViKCdrZXlkb3duJywgW3RoaXMub3Blbk9uQXJyb3csIHRoaXMub3Blbk9uU3BhY2VdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudFN0YWNrLnN1Yigna2V5ZG93bicsIFt0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24sIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXJdKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudFN0YWNrLnN1Yigna2V5ZG93bicsIHRoaXMucmVtb3ZlSXRlbU9uQmFja3NwYWNlKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldlN0YXRlLmZvY3VzICYmICF0aGlzLnN0YXRlLmZvY3VzKSB7XG4gICAgICAgIHZhciBjbG9zZU9uQmx1ciA9IHRoaXMucHJvcHMuY2xvc2VPbkJsdXI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VEb3duICYmIGNsb3NlT25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50U3RhY2sudW5zdWIoJ2tleWRvd24nLCBbdGhpcy5vcGVuT25BcnJvdywgdGhpcy5vcGVuT25TcGFjZSwgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyLCB0aGlzLnJlbW92ZUl0ZW1PbkJhY2tzcGFjZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBvcGVuZWQgLyBjbG9zZWRcbiAgICAgIGlmICghcHJldlN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoSGFuZGxlcnNPbk9wZW4oKTtcbiAgICAgICAgdGhpcy5zY3JvbGxTZWxlY3RlZEl0ZW1JbnRvVmlldygpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgZXZlbnRTdGFjay51bnN1Yigna2V5ZG93bicsIFt0aGlzLmNsb3NlT25Fc2NhcGUsIHRoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93biwgdGhpcy5zZWxlY3RJdGVtT25FbnRlcl0pO1xuICAgICAgICBldmVudFN0YWNrLnVuc3ViKCdjbGljaycsIHRoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZm9jdXMpIHtcbiAgICAgICAgICBldmVudFN0YWNrLnVuc3ViKCdrZXlkb3duJywgdGhpcy5yZW1vdmVJdGVtT25CYWNrc3BhY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICAgICAgZXZlbnRTdGFjay51bnN1Yigna2V5ZG93bicsIFt0aGlzLm9wZW5PbkFycm93LCB0aGlzLm9wZW5PblNwYWNlLCB0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24sIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIsIHRoaXMucmVtb3ZlSXRlbU9uQmFja3NwYWNlLCB0aGlzLmNsb3NlT25Fc2NhcGVdKTtcbiAgICAgIGV2ZW50U3RhY2sudW5zdWIoJ2NsaWNrJywgdGhpcy5jbG9zZU9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIERvY3VtZW50IEV2ZW50IEhhbmRsZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gb25DaGFuZ2UgbmVlZHMgdG8gcmVjZWl2ZSBhIHZhbHVlXG4gICAgLy8gY2FuJ3QgcmVseSBvbiBwcm9wcy52YWx1ZSBpZiB3ZSBhcmUgY29udHJvbGxlZFxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29tcG9uZW50IEV2ZW50IEhhbmRsZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEdldHRlcnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBUaGVyZSBhcmUgdGltZXMgd2hlbiB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgb3B0aW9ucyBiYXNlZCBvbiBhIHZhbHVlXG4gICAgLy8gdGhhdCBoYXNuJ3QgeWV0IGJlZW4gcGVyc2lzdGVkIHRvIHN0YXRlLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXREcm9wZG93bk1lbnVBcmlhT3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERyb3Bkb3duTWVudUFyaWFPcHRpb25zKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNlYXJjaCA9IF9wcm9wczIuc2VhcmNoLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzMi5tdWx0aXBsZTtcblxuICAgICAgdmFyIGFyaWFPcHRpb25zID0ge307XG5cbiAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgYXJpYU9wdGlvbnNbJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJ10gPSBtdWx0aXBsZTtcbiAgICAgICAgYXJpYU9wdGlvbnMucm9sZSA9ICdsaXN0Ym94JztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmlhT3B0aW9ucztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU2V0dGVyc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBPdmVycmlkZXNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVmc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEJlaGF2aW9yXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlbmRlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJhc2ljID0gX3Byb3BzMy5iYXNpYyxcbiAgICAgICAgICBidXR0b24gPSBfcHJvcHMzLmJ1dHRvbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjb21wYWN0ID0gX3Byb3BzMy5jb21wYWN0LFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBlcnJvciA9IF9wcm9wczMuZXJyb3IsXG4gICAgICAgICAgZmx1aWQgPSBfcHJvcHMzLmZsdWlkLFxuICAgICAgICAgIGZsb2F0aW5nID0gX3Byb3BzMy5mbG9hdGluZyxcbiAgICAgICAgICBpY29uID0gX3Byb3BzMy5pY29uLFxuICAgICAgICAgIGlubGluZSA9IF9wcm9wczMuaW5saW5lLFxuICAgICAgICAgIGl0ZW0gPSBfcHJvcHMzLml0ZW0sXG4gICAgICAgICAgbGFiZWxlZCA9IF9wcm9wczMubGFiZWxlZCxcbiAgICAgICAgICBsb2FkaW5nID0gX3Byb3BzMy5sb2FkaW5nLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzMy5tdWx0aXBsZSxcbiAgICAgICAgICBwb2ludGluZyA9IF9wcm9wczMucG9pbnRpbmcsXG4gICAgICAgICAgc2VhcmNoID0gX3Byb3BzMy5zZWFyY2gsXG4gICAgICAgICAgc2VsZWN0aW9uID0gX3Byb3BzMy5zZWxlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsaW5nID0gX3Byb3BzMy5zY3JvbGxpbmcsXG4gICAgICAgICAgc2ltcGxlID0gX3Byb3BzMy5zaW1wbGUsXG4gICAgICAgICAgdHJpZ2dlciA9IF9wcm9wczMudHJpZ2dlcixcbiAgICAgICAgICB1cHdhcmQgPSBfcHJvcHMzLnVwd2FyZDtcbiAgICAgIHZhciBvcGVuID0gdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICAvLyBDbGFzc2VzXG5cbiAgICAgIHZhciBjbGFzc2VzID0gY3goJ3VpJywgdXNlS2V5T25seShvcGVuLCAnYWN0aXZlIHZpc2libGUnKSwgdXNlS2V5T25seShkaXNhYmxlZCwgJ2Rpc2FibGVkJyksIHVzZUtleU9ubHkoZXJyb3IsICdlcnJvcicpLCB1c2VLZXlPbmx5KGxvYWRpbmcsICdsb2FkaW5nJyksIHVzZUtleU9ubHkoYmFzaWMsICdiYXNpYycpLCB1c2VLZXlPbmx5KGJ1dHRvbiwgJ2J1dHRvbicpLCB1c2VLZXlPbmx5KGNvbXBhY3QsICdjb21wYWN0JyksIHVzZUtleU9ubHkoZmx1aWQsICdmbHVpZCcpLCB1c2VLZXlPbmx5KGZsb2F0aW5nLCAnZmxvYXRpbmcnKSwgdXNlS2V5T25seShpbmxpbmUsICdpbmxpbmUnKSxcbiAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGF1Z21lbnRhdGlvbiB0byByZW5kZXIgRHJvcGRvd25zIGFzIEJ1dHRvbi9NZW51LCBzb2x2ZXMgaWNvbi9saW5rIGl0ZW0gaXNzdWVzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vU2VtYW50aWMtT3JnL1NlbWFudGljLVVJLVJlYWN0L2lzc3Vlcy80MDEjaXNzdWVjb21tZW50LTI0MDQ4NzIyOVxuICAgICAgLy8gVE9ETzogdGhlIGljb24gY2xhc3MgaXMgb25seSByZXF1aXJlZCB3aGVuIGEgZHJvcGRvd24gaXMgYSBidXR0b25cbiAgICAgIC8vIHVzZUtleU9ubHkoaWNvbiwgJ2ljb24nKSxcbiAgICAgIHVzZUtleU9ubHkobGFiZWxlZCwgJ2xhYmVsZWQnKSwgdXNlS2V5T25seShpdGVtLCAnaXRlbScpLCB1c2VLZXlPbmx5KG11bHRpcGxlLCAnbXVsdGlwbGUnKSwgdXNlS2V5T25seShzZWFyY2gsICdzZWFyY2gnKSwgdXNlS2V5T25seShzZWxlY3Rpb24sICdzZWxlY3Rpb24nKSwgdXNlS2V5T25seShzaW1wbGUsICdzaW1wbGUnKSwgdXNlS2V5T25seShzY3JvbGxpbmcsICdzY3JvbGxpbmcnKSwgdXNlS2V5T25seSh1cHdhcmQsICd1cHdhcmQnKSwgdXNlS2V5T3JWYWx1ZUFuZEtleShwb2ludGluZywgJ3BvaW50aW5nJyksICdkcm9wZG93bicsIGNsYXNzTmFtZSk7XG4gICAgICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKERyb3Bkb3duLCB0aGlzLnByb3BzKTtcbiAgICAgIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKERyb3Bkb3duLCB0aGlzLnByb3BzKTtcbiAgICAgIHZhciBhcmlhT3B0aW9ucyA9IHRoaXMuZ2V0RHJvcGRvd25BcmlhT3B0aW9ucyhFbGVtZW50VHlwZSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBFbGVtZW50VHlwZSxcbiAgICAgICAgX2V4dGVuZHMoe30sIHJlc3QsIGFyaWFPcHRpb25zLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHRhYkluZGV4OiB0aGlzLmNvbXB1dGVUYWJJbmRleCgpLFxuICAgICAgICAgIHJlZjogdGhpcy5oYW5kbGVSZWZcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucmVuZGVyTGFiZWxzKCksXG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoKSxcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hTaXplcigpLFxuICAgICAgICB0cmlnZ2VyIHx8IHRoaXMucmVuZGVyVGV4dCgpLFxuICAgICAgICBJY29uLmNyZWF0ZShpY29uLCB7XG4gICAgICAgICAgb3ZlcnJpZGVQcm9wczogdGhpcy5oYW5kbGVJY29uT3ZlcnJpZGVzXG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KENvbXBvbmVudCk7XG5cbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWRkaXRpb25MYWJlbDogJ0FkZCAnLFxuICBhZGRpdGlvblBvc2l0aW9uOiAndG9wJyxcbiAgY2xvc2VPbkJsdXI6IHRydWUsXG4gIGRlYnVycjogZmFsc2UsXG4gIGljb246ICdkcm9wZG93bicsXG4gIG1pbkNoYXJhY3RlcnM6IDEsXG4gIG5vUmVzdWx0c01lc3NhZ2U6ICdObyByZXN1bHRzIGZvdW5kLicsXG4gIG9wZW5PbkZvY3VzOiB0cnVlLFxuICByZW5kZXJMYWJlbDogZnVuY3Rpb24gcmVuZGVyTGFiZWwoX3JlZjMpIHtcbiAgICB2YXIgdGV4dCA9IF9yZWYzLnRleHQ7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHNlYXJjaElucHV0OiAndGV4dCcsXG4gIHNlbGVjdE9uQmx1cjogdHJ1ZSxcbiAgc2VsZWN0T25OYXZpZ2F0aW9uOiB0cnVlXG59O1xuRHJvcGRvd24uYXV0b0NvbnRyb2xsZWRQcm9wcyA9IFsnb3BlbicsICdzZWFyY2hRdWVyeScsICdzZWxlY3RlZExhYmVsJywgJ3ZhbHVlJ107XG5Ecm9wZG93bi5fbWV0YSA9IHtcbiAgbmFtZTogJ0Ryb3Bkb3duJyxcbiAgdHlwZTogTUVUQS5UWVBFUy5NT0RVTEVcbn07XG5Ecm9wZG93bi5EaXZpZGVyID0gRHJvcGRvd25EaXZpZGVyO1xuRHJvcGRvd24uSGVhZGVyID0gRHJvcGRvd25IZWFkZXI7XG5Ecm9wZG93bi5JdGVtID0gRHJvcGRvd25JdGVtO1xuRHJvcGRvd24uTWVudSA9IERyb3Bkb3duTWVudTtcbkRyb3Bkb3duLlNlYXJjaElucHV0ID0gRHJvcGRvd25TZWFyY2hJbnB1dDtcbkRyb3Bkb3duLmhhbmRsZWRQcm9wcyA9IFsnYWRkaXRpb25MYWJlbCcsICdhZGRpdGlvblBvc2l0aW9uJywgJ2FsbG93QWRkaXRpb25zJywgJ2FzJywgJ2Jhc2ljJywgJ2J1dHRvbicsICdjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnY2xvc2VPbkJsdXInLCAnY2xvc2VPbkNoYW5nZScsICdjb21wYWN0JywgJ2RlYnVycicsICdkZWZhdWx0T3BlbicsICdkZWZhdWx0U2VhcmNoUXVlcnknLCAnZGVmYXVsdFNlbGVjdGVkTGFiZWwnLCAnZGVmYXVsdFZhbHVlJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2Zsb2F0aW5nJywgJ2ZsdWlkJywgJ2hlYWRlcicsICdpY29uJywgJ2lubGluZScsICdpdGVtJywgJ2xhYmVsZWQnLCAnbG9hZGluZycsICdtaW5DaGFyYWN0ZXJzJywgJ211bHRpcGxlJywgJ25vUmVzdWx0c01lc3NhZ2UnLCAnb25BZGRJdGVtJywgJ29uQmx1cicsICdvbkNoYW5nZScsICdvbkNsaWNrJywgJ29uQ2xvc2UnLCAnb25Gb2N1cycsICdvbkxhYmVsQ2xpY2snLCAnb25Nb3VzZURvd24nLCAnb25PcGVuJywgJ29uU2VhcmNoQ2hhbmdlJywgJ29wZW4nLCAnb3Blbk9uRm9jdXMnLCAnb3B0aW9ucycsICdwbGFjZWhvbGRlcicsICdwb2ludGluZycsICdyZW5kZXJMYWJlbCcsICdzY3JvbGxpbmcnLCAnc2VhcmNoJywgJ3NlYXJjaElucHV0JywgJ3NlYXJjaFF1ZXJ5JywgJ3NlbGVjdE9uQmx1cicsICdzZWxlY3RPbk5hdmlnYXRpb24nLCAnc2VsZWN0ZWRMYWJlbCcsICdzZWxlY3Rpb24nLCAnc2ltcGxlJywgJ3RhYkluZGV4JywgJ3RleHQnLCAndHJpZ2dlcicsICd1cHdhcmQnLCAndmFsdWUnXTtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IGN1c3RvbVByb3BUeXBlcy5hcyxcblxuICAvKiogTGFiZWwgcHJlZml4ZWQgdG8gYW4gb3B0aW9uIGFkZGVkIGJ5IGEgdXNlci4gKi9cbiAgYWRkaXRpb25MYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKiogUG9zaXRpb24gb2YgdGhlIGBBZGQ6IC4uLmAgb3B0aW9uIGluIHRoZSBkcm9wZG93biBsaXN0ICgndG9wJyBvciAnYm90dG9tJykuICovXG4gIGFkZGl0aW9uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG5cbiAgLyoqXG4gICAqIEFsbG93IHVzZXIgYWRkaXRpb25zIHRvIHRoZSBsaXN0IG9mIG9wdGlvbnMgKGJvb2xlYW4pLlxuICAgKiBSZXF1aXJlcyB0aGUgdXNlIG9mIGBzZWxlY3Rpb25gLCBgb3B0aW9uc2AgYW5kIGBzZWFyY2hgLlxuICAgKi9cbiAgYWxsb3dBZGRpdGlvbnM6IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRlbWFuZChbJ29wdGlvbnMnLCAnc2VsZWN0aW9uJywgJ3NlYXJjaCddKSwgUHJvcFR5cGVzLmJvb2xdKSxcblxuICAvKiogQSBEcm9wZG93biBjYW4gcmVkdWNlIGl0cyBjb21wbGV4aXR5LiAqL1xuICBiYXNpYzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEZvcm1hdCB0aGUgRHJvcGRvd24gdG8gYXBwZWFyIGFzIGEgYnV0dG9uLiAqL1xuICBidXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBQcmltYXJ5IGNvbnRlbnQuICovXG4gIGNoaWxkcmVuOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kaXNhbGxvdyhbJ29wdGlvbnMnLCAnc2VsZWN0aW9uJ10pLCBjdXN0b21Qcm9wVHlwZXMuZ2l2ZW5Qcm9wcyh7IGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQgfSwgUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCldKSxcblxuICAvKiogQWRkaXRpb25hbCBjbGFzc2VzLiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBkcm9wZG93biBpcyBibHVycmVkLiAqL1xuICBjbG9zZU9uQmx1cjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHNob3VsZCBjbG9zZSB3aGVuIGEgdmFsdWUgaXMgc2VsZWN0ZWQgZnJvbSB0aGUgZHJvcGRvd24uXG4gICAqIEJ5IGRlZmF1bHQsIG11bHRpcGxlIHNlbGVjdGlvbiBkcm9wZG93bnMgd2lsbCByZW1haW4gb3BlbiBvbiBjaGFuZ2UsIHdoaWxlIHNpbmdsZVxuICAgKiBzZWxlY3Rpb24gZHJvcGRvd25zIHdpbGwgY2xvc2Ugb24gY2hhbmdlLlxuICAgKi9cbiAgY2xvc2VPbkNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgY29tcGFjdCBkcm9wZG93biBoYXMgbm8gbWluaW11bSB3aWR0aC4gKi9cbiAgY29tcGFjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBkcm9wZG93biBzaG91bGQgc3RyaXAgZGlhY3JpdGljcyBpbiBvcHRpb25zIGFuZCBpbnB1dCBzZWFyY2ggKi9cbiAgZGVidXJyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogSW5pdGlhbCB2YWx1ZSBvZiBvcGVuLiAqL1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEluaXRpYWwgdmFsdWUgb2Ygc2VhcmNoUXVlcnkuICovXG4gIGRlZmF1bHRTZWFyY2hRdWVyeTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQ3VycmVudGx5IHNlbGVjdGVkIGxhYmVsIGluIG11bHRpLXNlbGVjdC4gKi9cbiAgZGVmYXVsdFNlbGVjdGVkTGFiZWw6IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRlbWFuZChbJ211bHRpcGxlJ10pLCBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSldKSxcblxuICAvKiogSW5pdGlhbCB2YWx1ZSBvciB2YWx1ZSBhcnJheSBpZiBtdWx0aXBsZS4gKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkpXSksXG5cbiAgLyoqIEEgZGlzYWJsZWQgZHJvcGRvd24gbWVudSBvciBpdGVtIGRvZXMgbm90IGFsbG93IHVzZXIgaW50ZXJhY3Rpb24uICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQW4gZXJyb3JlZCBkcm9wZG93biBjYW4gYWxlcnQgYSB1c2VyIHRvIGEgcHJvYmxlbS4gKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIGRyb3Bkb3duIG1lbnUgY2FuIGNvbnRhaW4gZmxvYXRlZCBjb250ZW50LiAqL1xuICBmbG9hdGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIHRha2UgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIHBhcmVudCAqL1xuICBmbHVpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gbWVudSBjYW4gY29udGFpbiBhIGhlYWRlci4gKi9cbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKiogU2hvcnRoYW5kIGZvciBJY29uLiAqL1xuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBiZSBmb3JtYXR0ZWQgdG8gYXBwZWFyIGlubGluZSBpbiBvdGhlciBjb250ZW50LiAqL1xuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBiZSBmb3JtYXR0ZWQgYXMgYSBNZW51IGl0ZW0uICovXG4gIGl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBiZSBsYWJlbGVkLiAqL1xuICBsYWJlbGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkcm9wZG93biBjYW4gc2hvdyB0aGF0IGl0IGlzIGN1cnJlbnRseSBsb2FkaW5nIGRhdGEuICovXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBUaGUgbWluaW11bSBjaGFyYWN0ZXJzIGZvciBhIHNlYXJjaCB0byBiZWdpbiBzaG93aW5nIHJlc3VsdHMuICovXG4gIG1pbkNoYXJhY3RlcnM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqIEEgc2VsZWN0aW9uIGRyb3Bkb3duIGNhbiBhbGxvdyBtdWx0aXBsZSBzZWxlY3Rpb25zLiAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIE1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGFyZSBubyByZXN1bHRzLiAqL1xuICBub1Jlc3VsdHNNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIHVzZXIgYWRkcyBhIG5ldyBpdGVtLiBVc2UgdGhpcyB0byB1cGRhdGUgdGhlIG9wdGlvbnMgbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcyBhbmQgdGhlIG5ldyBpdGVtJ3MgdmFsdWUuXG4gICAqL1xuICBvbkFkZEl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYmx1ci5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGF0dGVtcHRzIHRvIGNoYW5nZSB0aGUgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMgYW5kIHByb3Bvc2VkIHZhbHVlLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gY2xpY2suXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBjbG9zZSBldmVudCBoYXBwZW5zLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIG11bHRpLXNlbGVjdCBsYWJlbCBpcyBjbGlja2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIGxhYmVsIHByb3BzLlxuICAgKi9cbiAgb25MYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIG9uIG1vdXNlZG93bi5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gb3BlbiBldmVudCBoYXBwZW5zLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHNlYXJjaCBpbnB1dCBjaGFuZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMsIGluY2x1ZGVzIGN1cnJlbnQgdmFsdWUgb2Ygc2VhcmNoUXVlcnkuXG4gICAqL1xuICBvblNlYXJjaENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBkcm9wZG93biBtZW51IGlzIGRpc3BsYXllZC4gKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHNob3VsZCBvcGVuIHdoZW4gdGhlIGRyb3Bkb3duIGlzIGZvY3VzZWQuICovXG4gIG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQXJyYXkgb2YgRHJvcGRvd24uSXRlbSBwcm9wcyBlLmcuIGB7IHRleHQ6ICcnLCB2YWx1ZTogJycgfWAgKi9cbiAgb3B0aW9uczogY3VzdG9tUHJvcFR5cGVzLmV2ZXJ5KFtjdXN0b21Qcm9wVHlwZXMuZGlzYWxsb3coWydjaGlsZHJlbiddKSwgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKERyb3Bkb3duSXRlbS5wcm9wVHlwZXMpKV0pLFxuXG4gIC8qKiBQbGFjZWhvbGRlciB0ZXh0LiAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQSBkcm9wZG93biBjYW4gYmUgZm9ybWF0dGVkIHNvIHRoYXQgaXRzIG1lbnUgaXMgcG9pbnRpbmcuICovXG4gIHBvaW50aW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAndG9wIGxlZnQnLCAndG9wIHJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20gbGVmdCcsICdib3R0b20gcmlnaHQnXSldKSxcblxuICAvKipcbiAgICogTWFwcGVkIG92ZXIgdGhlIGFjdGl2ZSBpdGVtcyBhbmQgcmV0dXJucyBzaG9ydGhhbmQgZm9yIHRoZSBhY3RpdmUgaXRlbSBMYWJlbHMuXG4gICAqIE9ubHkgYXBwbGllcyB0byBgbXVsdGlwbGVgIERyb3Bkb3ducy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gLSBBIGN1cnJlbnRseSBhY3RpdmUgZHJvcGRvd24gaXRlbS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gVGhlIGN1cnJlbnQgaW5kZXguXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0TGFiZWxQcm9wcyAtIFRoZSBkZWZhdWx0IHByb3BzIGZvciBhbiBhY3RpdmUgaXRlbSBMYWJlbC5cbiAgICogQHJldHVybnMgeyp9IFNob3J0aGFuZCBmb3IgYSBMYWJlbC5cbiAgICovXG4gIHJlbmRlckxhYmVsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQSBkcm9wZG93biBjYW4gaGF2ZSBpdHMgbWVudSBzY3JvbGwuICovXG4gIHNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0aW9uIGRyb3Bkb3duIGNhbiBhbGxvdyBhIHVzZXIgdG8gc2VhcmNoIHRocm91Z2ggYSBsYXJnZSBsaXN0IG9mIGNob2ljZXMuXG4gICAqIFBhc3MgYSBmdW5jdGlvbiBoZXJlIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgc2VhcmNoLlxuICAgKi9cbiAgc2VhcmNoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKiogQSBzaG9ydGhhbmQgZm9yIGEgc2VhcmNoIGlucHV0LiAqL1xuICBzZWFyY2hJbnB1dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHNlYXJjaFF1ZXJ5LiBDcmVhdGVzIGEgY29udHJvbGxlZCBjb21wb25lbnQuICovXG4gIHNlYXJjaFF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8vIFRPRE8gJ3NlYXJjaEluTWVudScgb3IgJ3NlYXJjaD0naW4gbWVudScgb3IgPz8/ICBIb3cgdG8gaGFuZGxlIHRoaXMgbWFya3VwIGFuZCBmdW5jdGlvbmFsaXR5P1xuXG4gIC8qKiBEZWZpbmUgd2hldGhlciB0aGUgaGlnaGxpZ2h0ZWQgaXRlbSBzaG91bGQgYmUgc2VsZWN0ZWQgb24gYmx1ci4gKi9cbiAgc2VsZWN0T25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gY2hhbmdlIHRoZSB2YWx1ZSB3aGVuIG5hdmlnYXRpbmcgdGhlIG1lbnUgdXNpbmcgYXJyb3cga2V5cy5cbiAgICogU2V0dGluZyB0byBmYWxzZSB3aWxsIHJlcXVpcmUgZW50ZXIgb3IgbGVmdCBjbGljayB0byBjb25maXJtIGEgY2hvaWNlLlxuICAgKi9cbiAgc2VsZWN0T25OYXZpZ2F0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQ3VycmVudGx5IHNlbGVjdGVkIGxhYmVsIGluIG11bHRpLXNlbGVjdC4gKi9cbiAgc2VsZWN0ZWRMYWJlbDogY3VzdG9tUHJvcFR5cGVzLmV2ZXJ5KFtjdXN0b21Qcm9wVHlwZXMuZGVtYW5kKFsnbXVsdGlwbGUnXSksIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKV0pLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBiZSB1c2VkIHRvIHNlbGVjdCBiZXR3ZWVuIGNob2ljZXMgaW4gYSBmb3JtLiAqL1xuICBzZWxlY3Rpb246IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRpc2FsbG93KFsnY2hpbGRyZW4nXSksIGN1c3RvbVByb3BUeXBlcy5kZW1hbmQoWydvcHRpb25zJ10pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKiBBIHNpbXBsZSBkcm9wZG93biBjYW4gb3BlbiB3aXRob3V0IEphdmFzY3JpcHQuICovXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIHJlY2VpdmUgZm9jdXMuICovXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqIFRoZSB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgZHJvcGRvd24sIHVzdWFsbHkgZm9yIHRoZSBhY3RpdmUgaXRlbS4gKi9cbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQ3VzdG9tIGVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgbWVudSB0byBiZWNvbWUgdmlzaWJsZS4gVGFrZXMgcGxhY2Ugb2YgJ3RleHQnLiAqL1xuICB0cmlnZ2VyOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kaXNhbGxvdyhbJ3NlbGVjdGlvbicsICd0ZXh0J10pLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9yIHZhbHVlIGFycmF5IGlmIG11bHRpcGxlLiBDcmVhdGVzIGEgY29udHJvbGxlZCBjb21wb25lbnQuICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkpXSksXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIG9wZW4gdXB3YXJkLiAqL1xuICB1cHdhcmQ6IFByb3BUeXBlcy5ib29sXG59IDoge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9tb2R1bGVzL0Ryb3Bkb3duL0Ryb3Bkb3duLmpzXG4vLyBtb2R1bGUgaWQgPSA4ODNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDgiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDg4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgOCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbHRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==