(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Registration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n<form [formGroup]=\"registrationForm\">\r\n  <ion-grid>\r\n    <ion-row color=\"primary\" class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n        <div text-center>\r\n          <h3>Enter your details.</h3>\r\n        </div>\r\n        <div padding>\r\n          <ion-item>\r\n            <ion-input name=\"name\" type=\"text\" placeholder=\"Name\" formControlName=\"name\" required></ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n            <ion-text color=\"danger\" *ngIf=\"errorControl.name.errors?.required && errorControl.name.dirty\">\r\n              <p>Name is required.</p>\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"errorControl.name.errors?.minlength && errorControl.name.dirty\">\r\n              <p>Name should be min 2 chars long.</p>\r\n            </ion-text>\r\n          <ion-item>\r\n            <ion-input name=\"phoneNo\" type=\"number\" placeholder=\"+91\" formControlName=\"phoneNo\" required></ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n          <ion-text color=\"danger\" *ngIf=\"errorControl.phoneNo.errors?.required && errorControl.phoneNo.dirty\">\r\n            <p>Phone Number is required.</p>\r\n          </ion-text>\r\n          <ion-text color=\"danger\" *ngIf=\"(errorControl.phoneNo.errors?.minlength || errorControl.phoneNo.errors?.maxlength) && errorControl.phoneNo8.dirty\">\r\n            <p>Phone number should be 10 Digits</p>\r\n          </ion-text>\r\n          <ion-item>\r\n            <ion-input name=\"pinCode\" type=\"number\" placeholder=\"Pin code\" formControlName=\"pinCode\" required></ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n          <ion-text color=\"danger\" *ngIf=\"errorControl.pinCode.errors?.required && errorControl.pinCode.dirty\">\r\n            <p>Pin Code is required.</p>\r\n          </ion-text>\r\n          <ion-text color=\"danger\" *ngIf=\"(errorControl.pinCode.errors?.minlength || errorControl.pinCode.errors?.maxlength) && errorControl.pinCode.dirty\">\r\n            <p>Pin Code should be 6 Digits</p>\r\n          </ion-text>\r\n          <ion-item>\r\n            <ion-input name=\"title\" type=\"text\" placeholder=\"Title\" formControlName=\"title\" required></ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n          <ion-text color=\"danger\" *ngIf=\"errorControl.title.errors?.required && errorControl.title.dirty\">\r\n            <p>Title is required.</p>\r\n          </ion-text>\r\n          <ion-item>\r\n            <ion-textarea name=\"address\" placeholder=\"Enter your address\" formControlName=\"address\" required></ion-textarea>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"errorControl.address.errors?.required && errorControl.address.dirty\">\r\n            <p>Address is required.</p>\r\n          </ion-text>\r\n          <ion-item>\r\n            <ion-textarea name=\"description\" placeholder=\"Enter Detail\" formControlName=\"description\" required></ion-textarea>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"errorControl.description.errors?.required && errorControl.description.dirty\">\r\n            <p>Description is required.</p>\r\n          </ion-text>\r\n          <!-- <ion-item>\r\n            <ion-label>Select State</ion-label>\r\n            <ion-select name=\"Select State\" placeholder=\"Select State\">\r\n              <ion-select-option value=\"null\" >--Select State--</ion-select-option>\r\n              <ion-select-option *ngFor=\"let state of statewiseCities; let i = index\" [value]=\"state[i]\">{{state[i]}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item> -->\r\n        </div>\r\n        <div padding>\r\n          <ion-button size=\"large\" type=\"submit\" expand=\"block\" *ngIf=\"mode=='getHelp'\" [disabled]=\"registrationForm.invalid\" (click)=\"register('getHelp')\">I need help</ion-button>\r\n          <ion-button size=\"large\" type=\"submit\" expand=\"block\" *ngIf=\"mode=='doHelp'\" [disabled]=\"registrationForm.invalid\" (click)=\"register('doHelp')\">I want to help</ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</form>\r\n{{text}}\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/registration/registration-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");




var routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
var RegistrationPageRoutingModule = /** @class */ (function () {
    function RegistrationPageRoutingModule() {
    }
    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistrationPageRoutingModule);
    return RegistrationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/registration/registration-routing.module.ts");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");







var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]
            ],
            declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/registration/registration.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");







var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(fb, shareService, router, navCtrl, firebaseAuth) {
        var _this = this;
        this.fb = fb;
        this.shareService = shareService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.firebaseAuth = firebaseAuth;
        this.text = 'begining';
        this.registrationForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pinCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
            phoneNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.firebaseAuth.onAuthStateChanged().subscribe(function (userInfo) {
            if (userInfo) {
                _this.navCtrl.navigateRoot['/list'];
            }
            else {
                _this.navCtrl.navigateRoot[''];
                // user was signed out
            }
        });
    }
    Object.defineProperty(RegistrationPage.prototype, "errorControl", {
        get: function () {
            return this.registrationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationPage.prototype.ngOnInit = function () {
        this.mode = this.shareService.getData('mode');
    };
    RegistrationPage.prototype.register = function (mode) {
        console.log("user", this.registrationForm.value);
        localStorage.setItem('user', JSON.stringify(this.registrationForm.value));
        this.shareService.setData('flag', mode);
        this.phoneAuth();
        // this.router.navigate(['/list',])
    };
    RegistrationPage.prototype.phoneAuth = function () {
        var _this = this;
        var tel = "+91" + this.registrationForm.get('phoneNo').value;
        this.firebaseAuth.verifyPhoneNumber(tel, 60).then(function (verifyId) {
            _this.verificationId = verifyId;
            _this.text = "going to verify";
            setTimeout(function () { _this.signInCode(); }, 1000);
        }).catch(function (err) {
            console.log(err);
            _this.text = 'Login Failed';
        });
    };
    RegistrationPage.prototype.signInCode = function () {
        var _this = this;
        this.firebaseAuth.signInWithVerificationId(this.verificationId, 123456).then(function (user) {
            console.log(user);
            _this.text = 'verified!';
        }).catch(function (err) {
            console.log(err);
            _this.text = 'verification Failed';
        });
    };
    RegistrationPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"] }
    ]; };
    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.page.scss */ "./src/app/registration/registration.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"]])
    ], RegistrationPage);
    return RegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map