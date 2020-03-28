(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <ion-card>\r\n    <ion-card-header>\r\n      User Login\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list no-line>\r\n        <ion-item>\r\n          <ion-input type=\"text\" placeholder=\"Email Id\" ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\r\n        </ion-item>\r\n        <a>Forgot your login detail? <b>Get help signing in</b></a>\r\n        <button ion-button block outline color=\"light\" (click)=\"doLogin()\">Log in</button>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <button class=\"bottom\" ion-button clear full color=\"light\" (click)=\"goToReg()\">Don't have an account? Sign up</button>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-color: yellow;\n}\n\n.scroll-content {\n  align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\nion-card.card {\n  box-shadow: none;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n}\n\na, p,\nion-card-header.card-header {\n  color: #fff !important;\n}\n\n.list > .item-block:first-child {\n  border: medium none;\n}\n\n.item {\n  margin-bottom: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: medium none;\n}\n\n.item .text-input {\n  color: #fff;\n}\n\n.item input::-moz-placeholder {\n  color: #fff !important;\n}\n\n.item input:-moz-placeholder {\n  color: #fff !important;\n}\n\n.item *::-webkit-input-placeholder {\n  color: #fff !important;\n}\n\n.item *:-ms-input-placeholder {\n  color: #fff !important;\n}\n\n.item *:-moz-placeholder {\n  color: #fff !important;\n}\n\n.icon {\n  padding-right: 10px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXENvcm9uYVxcY29yb25hLUhlbHAtZGVzay9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msd0JBQUE7QUNBRjs7QURHQztFQUNDLHFCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0M7RUFDQyxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQzs7RUFFQyxzQkFBQTtBQ0FGOztBREdDO0VBQ0MsbUJBQUE7QUNBRjs7QURHQztFQUNDLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREVFO0VBQ0MsV0FBQTtBQ0FIOztBREdFO0VBQ0Msc0JBQUE7QUNESDs7QURJRTtFQUNDLHNCQUFBO0FDRkg7O0FES0U7RUFDQyxzQkFBQTtBQ0hIOztBRE1FO0VBQ0Msc0JBQUE7QUNKSDs7QURPRTtFQUNDLHNCQUFBO0FDTEg7O0FEU0M7RUFDQyxtQkFBQTtBQ05GOztBRFNDO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHQuYmFja2dyb3VuZCB7IFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG5cdH1cclxuXHJcblx0LnNjcm9sbC1jb250ZW50IHtcclxuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdGlvbi1jYXJkLmNhcmQge1xyXG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR9XHJcblxyXG5cdGEsIHAsXHJcblx0aW9uLWNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyIHtcclxuXHRcdGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5saXN0ID4gLml0ZW0tYmxvY2s6Zmlyc3QtY2hpbGQge1xyXG5cdFx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcclxuXHR9XHJcblxyXG5cdC5pdGVtIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHRib3JkZXI6IG1lZGl1bSBub25lO1xyXG5cclxuXHRcdC50ZXh0LWlucHV0e1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dDo6LW1vei1wbGFjZWhvbGRlciAge1xyXG5cdFx0XHRjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0XHRcdGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0XHQqOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7XHJcblx0XHRcdGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0XHQqOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAge1xyXG5cdFx0XHRjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0KjotbW96LXBsYWNlaG9sZGVyICB7XHJcblx0XHRcdGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5pY29uIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQuY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5hLCBwLFxuaW9uLWNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmxpc3QgPiAuaXRlbS1ibG9jazpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xufVxuLml0ZW0gLnRleHQtaW5wdXQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5pdGVtIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5pdGVtIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLml0ZW0gKjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uaXRlbSAqOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uaXRlbSAqOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map