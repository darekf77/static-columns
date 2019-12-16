function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./components/column/column-grow.directive.ts":
  /*!****************************************************!*\
    !*** ./components/column/column-grow.directive.ts ***!
    \****************************************************/

  /*! exports provided: DirectiveGrow */

  /***/
  function componentsColumnColumnGrowDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectiveGrow", function () {
      return DirectiveGrow;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DirectiveGrow = function DirectiveGrow(e, renderer) {
      _classCallCheck(this, DirectiveGrow);

      this.e = e;
      this.renderer = renderer;
      setTimeout(function () {
        // e.nativeElement.style.flexGrow = 1;
        renderer.setStyle(e.nativeElement, 'flexGrow', '1');
      }, 0); // renderer.setElementStyle(e.nativeElement, 'flexGrow', '1');
    };

    DirectiveGrow.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    DirectiveGrow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[grow]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], DirectiveGrow);
    /***/
  },

  /***/
  "./components/column/column.component.scss":
  /*!*************************************************!*\
    !*** ./components/column/column.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function componentsColumnColumnComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 0;\n  width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpdXN6L3Byb2plY3RzL25wbS9zdGF0aWMtY29sdW1ucy9jb21wb25lbnRzL2NvbHVtbi9jb2x1bW4uY29tcG9uZW50LnNjc3MiLCJjb21wb25lbnRzL2NvbHVtbi9jb2x1bW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6ImNvbXBvbmVudHMvY29sdW1uL2NvbHVtbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgd2lkdGg6IDBweDtcbn1cbiIsIjpob3N0IHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./components/column/column.component.ts":
  /*!***********************************************!*\
    !*** ./components/column/column.component.ts ***!
    \***********************************************/

  /*! exports provided: ColumnComponent */

  /***/
  function componentsColumnColumnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnComponent", function () {
      return ColumnComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ColumnComponent =
    /*#__PURE__*/
    function () {
      function ColumnComponent() {// this.ccwidth = 90;

        _classCallCheck(this, ColumnComponent);
      }

      _createClass(ColumnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ColumnComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.flex.basis.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.minWidth.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ColumnComponent.prototype, "width", void 0);
    ColumnComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'column',
      template: '<ng-content></ng-content>',
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./column.component.scss */
      "./components/column/column.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ColumnComponent);
    /***/
  },

  /***/
  "./components/column/index.ts":
  /*!************************************!*\
    !*** ./components/column/index.ts ***!
    \************************************/

  /*! exports provided: ColumnComponent, DirectiveGrow */

  /***/
  function componentsColumnIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _column_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./column.component */
    "./components/column/column.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnComponent", function () {
      return _column_component__WEBPACK_IMPORTED_MODULE_1__["ColumnComponent"];
    });
    /* harmony import */


    var _column_grow_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./column-grow.directive */
    "./components/column/column-grow.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DirectiveGrow", function () {
      return _column_grow_directive__WEBPACK_IMPORTED_MODULE_2__["DirectiveGrow"];
    });
    /***/

  },

  /***/
  "./components/columns.component.scss":
  /*!*******************************************!*\
    !*** ./components/columns.component.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function componentsColumnsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  align-content: streach;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpdXN6L3Byb2plY3RzL25wbS9zdGF0aWMtY29sdW1ucy9jb21wb25lbnRzL2NvbHVtbnMuY29tcG9uZW50LnNjc3MiLCJjb21wb25lbnRzL2NvbHVtbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0oiLCJmaWxlIjoiY29tcG9uZW50cy9jb2x1bW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6ZmxleDsgICAgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJlYWNoO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmVhY2g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./components/columns.component.ts":
  /*!*****************************************!*\
    !*** ./components/columns.component.ts ***!
    \*****************************************/

  /*! exports provided: ColumnsComponent */

  /***/
  function componentsColumnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnsComponent", function () {
      return ColumnsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./column */
    "./components/column/index.ts"); // import { Log, Level } from 'ng2-logger/index';
    // const log = Log.create('test');
    // log.i('asdas')


    var ColumnsComponent =
    /*#__PURE__*/
    function () {
      function ColumnsComponent() {
        _classCallCheck(this, ColumnsComponent);
      }

      _createClass(ColumnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ColumnsComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_column__WEBPACK_IMPORTED_MODULE_2__["ColumnComponent"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], ColumnsComponent.prototype, "childrens", void 0);
    ColumnsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'columns-container',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./columns.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./components/columns.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./columns.component.scss */
      "./components/columns.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ColumnsComponent);
    /***/
  },

  /***/
  "./components/columns.module.ts":
  /*!**************************************!*\
    !*** ./components/columns.module.ts ***!
    \**************************************/

  /*! exports provided: StaticColumnsModule */

  /***/
  function componentsColumnsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticColumnsModule", function () {
      return StaticColumnsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./column */
    "./components/column/index.ts");
    /* harmony import */


    var _columns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./columns.component */
    "./components/columns.component.ts");

    var StaticColumnsModule = function StaticColumnsModule() {
      _classCallCheck(this, StaticColumnsModule);
    };

    StaticColumnsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [],
      exports: [_columns_component__WEBPACK_IMPORTED_MODULE_3__["ColumnsComponent"], _column__WEBPACK_IMPORTED_MODULE_2__["ColumnComponent"], _column__WEBPACK_IMPORTED_MODULE_2__["DirectiveGrow"]],
      declarations: [_columns_component__WEBPACK_IMPORTED_MODULE_3__["ColumnsComponent"], _column__WEBPACK_IMPORTED_MODULE_2__["ColumnComponent"], _column__WEBPACK_IMPORTED_MODULE_2__["DirectiveGrow"]],
      providers: []
    })], StaticColumnsModule);
    /***/
  },

  /***/
  "./components/index.ts":
  /*!*****************************!*\
    !*** ./components/index.ts ***!
    \*****************************/

  /*! exports provided: ColumnsComponent, DirectiveGrow, ColumnComponent, StaticColumnsModule */

  /***/
  function componentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./public_api */
    "./components/public_api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnsComponent", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_1__["ColumnsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DirectiveGrow", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_1__["DirectiveGrow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnComponent", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_1__["ColumnComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StaticColumnsModule", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_1__["StaticColumnsModule"];
    });
    /***/

  },

  /***/
  "./components/lib.module.ts":
  /*!**********************************!*\
    !*** ./components/lib.module.ts ***!
    \**********************************/

  /*! exports provided: ColumnsComponent, DirectiveGrow, ColumnComponent, StaticColumnsModule */

  /***/
  function componentsLibModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _columns_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./columns.component */
    "./components/columns.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnsComponent", function () {
      return _columns_component__WEBPACK_IMPORTED_MODULE_1__["ColumnsComponent"];
    });
    /* harmony import */


    var _column_column_grow_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./column/column-grow.directive */
    "./components/column/column-grow.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DirectiveGrow", function () {
      return _column_column_grow_directive__WEBPACK_IMPORTED_MODULE_2__["DirectiveGrow"];
    });
    /* harmony import */


    var _column_column_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./column/column.component */
    "./components/column/column.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnComponent", function () {
      return _column_column_component__WEBPACK_IMPORTED_MODULE_3__["ColumnComponent"];
    });
    /* harmony import */


    var _columns_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./columns.module */
    "./components/columns.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StaticColumnsModule", function () {
      return _columns_module__WEBPACK_IMPORTED_MODULE_4__["StaticColumnsModule"];
    });
    /***/

  },

  /***/
  "./components/public_api.ts":
  /*!**********************************!*\
    !*** ./components/public_api.ts ***!
    \**********************************/

  /*! exports provided: ColumnsComponent, DirectiveGrow, ColumnComponent, StaticColumnsModule */

  /***/
  function componentsPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib.module */
    "./components/lib.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnsComponent", function () {
      return _lib_module__WEBPACK_IMPORTED_MODULE_1__["ColumnsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DirectiveGrow", function () {
      return _lib_module__WEBPACK_IMPORTED_MODULE_1__["DirectiveGrow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnComponent", function () {
      return _lib_module__WEBPACK_IMPORTED_MODULE_1__["ColumnComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StaticColumnsModule", function () {
      return _lib_module__WEBPACK_IMPORTED_MODULE_1__["StaticColumnsModule"];
    });
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./components/columns.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./components/columns.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsComponentsColumnsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-content></ng-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr>\nHello static columns\n\n<columns-container>\n  <column [width]=\"200\">\n    <h3>\n      static menu\n    </h3>\n    <ul>\n      <li>\n        menu item 1\n      </li>\n      <li>\n        menu item 2\n      </li>\n      <li>\n        menu item 3\n      </li>\n    </ul>\n  </column>\n  <column grow >\n  <h2>Fluid content</h2>\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n  </column>\n</columns-container>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dupa {\n  color: aqua;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kdXBhIHtcbiAgY29sb3I6IGFxdWE7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(swUpdate) {
        _classCallCheck(this, AppComponent);

        this.swUpdate = swUpdate;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function () {
              if (confirm("New version available. Load New Version?")) {
                window.location.reload();
              }
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! components */
    "./components/index.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js"); // import { HttpModule } from '@angular/http';


    var workrPath = "ngsw-worker.js";
    console.log("Worker path: ".concat(workrPath));

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], // HttpModule,
      _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register(workrPath, {
        enabled: true
      }), components__WEBPACK_IMPORTED_MODULE_5__["StaticColumnsModule"]],
      exports: [components__WEBPACK_IMPORTED_MODULE_5__["StaticColumnsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var ENV = __webpack_require__(
    /*! ../tmp-environment.json */
    "./tmp-environment.json");

    window['ENV'] = ENV;
    console.log('ENV', ENV);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./tmp-environment.json":
  /*!******************************!*\
    !*** ./tmp-environment.json ***!
    \******************************/

  /*! exports provided: domain, name, isCoreProject, ip, packageJSON, build, currentProjectName, currentProjectType, currentProjectLocation, currentProjectIsSite, currentProjectIsStatic, isStandaloneProject, frameworks, default */

  /***/
  function tmpEnvironmentJson(module) {
    module.exports = JSON.parse("{\"domain\":\"static-columns.example.domain.com\",\"name\":\"local\",\"isCoreProject\":false,\"ip\":\"localhost\",\"packageJSON\":{\"tnp\":{\"resources\":[\"README.md\",\"screen.png\"],\"isCoreProject\":false,\"type\":\"angular-lib\",\"version\":\"v2\",\"overrided\":{\"ignoreDepsPattern\":[],\"includeAsDev\":\"*\",\"includeOnly\":[],\"dependencies\":{}},\"isGenerated\":false,\"useFramework\":false},\"name\":\"static-columns\",\"version\":\"1.0.1\",\"description\":\"Static columns with flexbox for Agnular2\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/darekf77/static-columns.git\"},\"keywords\":[\"angular2\",\"static\",\"width\",\"column\",\"static\",\"columns\",\"flexbox\",\"columns\"],\"author\":\"Dariusz Filipiak\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/darekf77/static-columns/issues\"},\"homepage\":\"https://github.com/darekf77/static-columns#readme\",\"dependencies\":{},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.900.0-rc.1\",\"@angular-devkit/build-optimizer\":\"~0.803.19\",\"@angular-devkit/schematics\":\"^8.3.19\",\"@angular/animations\":\"~9.0.0-rc.1\",\"@angular/cdk\":\"~8.2.3\",\"@angular/cli\":\"~9.0.0-rc.1\",\"@angular/common\":\"~9.0.0-rc.1\",\"@angular/compiler\":\"~9.0.0-rc.1\",\"@angular/compiler-cli\":\"~9.0.0-rc.1\",\"@angular/core\":\"~9.0.0-rc.1\",\"@angular/forms\":\"~9.0.0-rc.1\",\"@angular/http\":\"7.2.15\",\"@angular/language-service\":\"~9.0.0-rc.1\",\"@angular/material\":\"^8.2.3\",\"@angular/platform-browser\":\"~9.0.0-rc.1\",\"@angular/platform-browser-dynamic\":\"~9.0.0-rc.1\",\"@angular/pwa\":\"^0.803.18\",\"@angular/router\":\"~9.0.0-rc.1\",\"@angular/service-worker\":\"~9.0.0-rc.1\",\"@ngx-formly/bootstrap\":\"^5.5.6\",\"@ngx-formly/core\":\"^5.5.6\",\"@ngx-formly/ionic\":\"^5.5.6\",\"@ngx-formly/material\":\"^5.5.6\",\"@ngx-loading-bar/core\":\"^4.2.0\",\"@ngx-loading-bar/http\":\"^4.2.0\",\"@ngx-loading-bar/router\":\"^4.2.0\",\"@ngx-translate/core\":\"^11.0.1\",\"@ngx-translate/http-loader\":\"^4.0.0\",\"@swimlane/ngx-datatable\":\"^16.0.2\",\"@types/chai\":\"^4.1.2\",\"@types/chokidar\":\"2.1.3\",\"@types/dateformat\":\"^1.0.1\",\"@types/diff\":\"^3.2.2\",\"@types/express\":\"^4.11.0\",\"@types/express-fileupload\":\"^0.1.1\",\"@types/fs-extra\":\"^5.0.4\",\"@types/glob\":\"^5.0.35\",\"@types/http-proxy\":\"^1.16.0\",\"@types/http-proxy-middleware\":\"0.19.2\",\"@types/inquirer\":\"0.0.43\",\"@types/jasmine\":\"~3.4.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/json-stringify-safe\":\"^5.0.0\",\"@types/json5\":\"0.0.29\",\"@types/lockfile\":\"^1.0.0\",\"@types/lodash\":\"4.14.92\",\"@types/lowdb\":\"^1.0.6\",\"@types/mocha\":\"^5.2.5\",\"@types/node\":\"^12.11.1\",\"@types/node-notifier\":\"0.0.28\",\"@types/oauth2orize\":\"^1.8.0\",\"@types/password-hash\":\"^1.2.19\",\"@types/progress\":\"^2.0.3\",\"@types/q\":\"^1.0.3\",\"@types/rimraf\":\"^2.0.2\",\"@types/sleep\":\"0.0.7\",\"@types/socket.io\":\"^1.4.31\",\"@types/socket.io-client\":\"^1.4.32\",\"@types/systeminformation\":\"^3.23.0\",\"@types/vinyl\":\"^2.0.2\",\"@types/watch\":\"^1.0.0\",\"accepts\":\"^1.3.4\",\"angular-tree-component\":\"^7.0.0\",\"babel-cli\":\"^6.26.0\",\"babel-preset-env\":\"^1.7.0\",\"bcrypt\":\"3.0.6\",\"body-parser\":\"^1.18.2\",\"bootstrap\":\"4.3.1\",\"callsite-record\":\"4.1.3\",\"chai\":\"^4.2.0\",\"chalk\":\"^2.3.2\",\"check-node-version\":\"^3.2.0\",\"chokidar\":\"3.0.0\",\"circular-json\":\"^0.5.1\",\"codelyzer\":\"^5.1.2\",\"command-exists\":\"^1.2.2\",\"compression\":\"1.7.4\",\"concurrently\":\"^3.5.1\",\"cookie-parser\":\"^1.4.3\",\"core-js-compat\":\"3.4.0\",\"cors\":\"^2.8.4\",\"cpr\":\"^3.0.1\",\"cpuid\":\"^0.1.3\",\"dateformat\":\"^3.0.3\",\"diff\":\"^3.2.0\",\"element-resize-detector\":\"1.1.15\",\"enquirer\":\"^2.3.0\",\"enum-values\":\"1.2.1\",\"errorhandler\":\"^1.5.0\",\"eslint\":\"^4.15.0\",\"express\":\"^4.16.3\",\"express-fileupload\":\"^0.4.0\",\"fbgraph\":\"^1.4.1\",\"file-loader\":\"^1.1.5\",\"fkill\":\"6.1.0\",\"font-awesome\":\"^4.7.0\",\"fs-extra\":\"^5.0.0\",\"fuzzy\":\"^0.1.3\",\"glob\":\"^7.1.2\",\"gulp\":\"^3.9.1\",\"hammerjs\":\"^2.0.8\",\"http-proxy\":\"^1.16.2\",\"http-proxy-middleware\":\"0.19.1\",\"http-server\":\"0.11.1\",\"incremental-compiler\":\"0.0.12\",\"inquirer\":\"^5.2.0\",\"inquirer-autocomplete-prompt\":\"^1.0.1\",\"istanbul-instrumenter-loader\":\"^2.0.0\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"json-stringify-safe\":\"^5.0.1\",\"json10\":\"0.0.19\",\"json5\":\"^0.5.1\",\"karma\":\"~4.3.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-cli\":\"~1.0.1\",\"karma-coverage-istanbul-reporter\":\"~2.1.0\",\"karma-jasmine\":\"~2.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"lockfile\":\"^1.0.4\",\"lodash\":\"^4.17.4\",\"lodash-walk-object\":\"0.0.18\",\"lowdb\":\"^1.0.0\",\"material-design-icons\":\"3.0.1\",\"method-override\":\"^2.3.10\",\"minimist\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"mocha\":\"^5.2.0\",\"moment\":\"^2.22.2\",\"morphi\":\"2.1.1\",\"ng-packagr\":\"^5.7.1\",\"ng2-file-upload\":\"^1.3.0\",\"ng2-logger\":\"3.0.10\",\"ng2-rest\":\"9.3.1\",\"ngx-bootstrap\":\"^5.2.0\",\"ngx-breadcrumbs\":\"0.0.3\",\"ngx-editor\":\"^4.1.0\",\"ngx-moment\":\"^3.5.0\",\"ngx-pipes\":\"^2.6.0\",\"ngx-toastr\":\"^11.2.1\",\"ngx-wig\":\"^8.0.0\",\"node-notifier\":\"^5.3.0\",\"nodemon\":\"^1.14.11\",\"npm-get-dependents\":\"^1.0.1\",\"npm-run\":\"^4.1.2\",\"omelette\":\"^0.4.5\",\"ora\":\"3.4.0\",\"passport\":\"^0.3.2\",\"passport-http-bearer\":\"^1.0.1\",\"password-hash\":\"^1.2.2\",\"portfinder\":\"1.0.21\",\"progress\":\"^2.0.3\",\"prompts\":\"^0.1.8\",\"protractor\":\"~5.4.2\",\"ps-list\":\"6.1.0\",\"ps-node\":\"^0.1.6\",\"q\":\"^1.5.1\",\"randomcolor\":\"^0.5.3\",\"redbird\":\"^0.7.0\",\"reflect-metadata\":\"^0.1.10\",\"rimraf\":\"^2.6.2\",\"rxjs\":\"~6.5.3\",\"rxjs-compat\":\"6.5.3\",\"simple-git\":\"^1.96.0\",\"sleep\":\"^5.2.3\",\"sloc\":\"^0.2.0\",\"socket.io\":\"^2.0.4\",\"sort-package-json\":\"^1.11.0\",\"sqlite3\":\"4.0.9\",\"static-columns\":\"0.0.25\",\"systeminformation\":\"^3.45.7\",\"ts-loader\":\"^2.3.1\",\"ts-node\":\"~8.3.0\",\"tsickle\":\"^0.26.0\",\"tslib\":\"^1.10.0\",\"tslint\":\"~5.18.0\",\"typeorm\":\"0.2.7\",\"typescript\":\"~3.6.4\",\"typescript-class-helpers\":\"0.0.25\",\"typescript-formatter\":\"7.2.2\",\"underscore\":\"^1.9.1\",\"validator\":\"^9.2.0\",\"watch\":\"~1.0.2\",\"zone.js\":\"~0.10.2\"},\"private\":false,\"husky\":{\"hooks\":{\"pre-push\":\"tnp deps:show:if:standalone\"}}},\"build\":{\"number\":72,\"date\":\"2019-12-16T01:25:30.000Z\",\"hash\":\"02dfe6efb3727c90cb6578a98a121872351f494b\",\"options\":{\"isWatchBuild\":false,\"outDir\":\"dist\"}},\"currentProjectName\":\"static-columns\",\"currentProjectType\":\"angular-lib\",\"currentProjectLocation\":\"/Users/dariusz/projects/npm/static-columns\",\"currentProjectIsSite\":false,\"currentProjectIsStatic\":false,\"isStandaloneProject\":true,\"frameworks\":[\"bootstrap\",\"ionic\",\"material\"]}");
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/dariusz/projects/npm/static-columns/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map