(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-header no-border>\n  <ion-toolbar class=\"new-background-color\" >\n<div class=\"searchbar\">\n     <ion-searchbar  placeholder=\"Buscar\" ></ion-searchbar>\n\n     </div>\n     <div class=\"iconFilter\">\n        <ion-icon name=\"funnel\" class=\"iconColorFilter\"></ion-icon>\n     </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n   <ion-card-header>\n          <ion-card-subtitle><div class=\"ajustTitle\">Casa </div>   <div class=\"ajustTitle\"> <img  src=\"../../assets/img/orange-circle-icon.svg\"  class=\"imageCircle\" /></div>\n            <div class=\"ajustTitle\">Alugua-se</div>\n              <div class=\"rating\">\n             <ion-icon name=\"heart\" class=\"iconRating\"></ion-icon>\n         </div>\n</ion-card-subtitle>\n          <!-- <ion-card-title>Madison, WI</ion-card-title> -->\n        </ion-card-header>\n      <div class=\"cardImage\">\n         <img  src=\"../../assets/img/garagem1.jpg\" height=\"200px\"/>\n      </div>\n      <div class=\"cardDescription\">\n         <div class=\"ajustDescription\">\n            <span class=\"titleValor\">R$200,00</span>\n            <span class=\"titleMonthSale\">/mês</span>\n        </div>\n      </div>\n    <div class=\"cardText\">\n        <div>  <ion-icon name=\"pin\" size=\"small\" class=\"iconCollation\"></ion-icon> Abraao Miguel do Cargo, Vl. Monte Alegre - SP</div>\n    </div>\n</ion-card>\n\n\n  <ion-card>\n   <ion-card-header>\n          <ion-card-subtitle><div class=\"ajustTitle\">Apartamento </div>   <div class=\"ajustTitle\"> <img  src=\"../../assets/img/orange-circle-icon.svg\"  class=\"imageCircle\" /></div>\n            <div class=\"ajustTitle\">Alugua-se</div>\n            <div class=\"ajustTitle\"> <img  src=\"../../assets/img/orange-circle-icon.svg\"  class=\"imageCircle\" /></div>\n             <div class=\"ajustTitle\">Vende-se</div>\n              <div class=\"rating\">\n             <ion-icon name=\"heart\" class=\"iconRating\"></ion-icon>\n         </div>\n</ion-card-subtitle>\n          <!-- <ion-card-title>Madison, WI</ion-card-title> -->\n        </ion-card-header>\n      <div class=\"cardImage\">\n         <img  src=\"../../assets/img/garagemAP.jpeg\" height=\"200px\"/>\n      </div>\n      <div class=\"cardDescription\">\n         <div class=\"ajustDescription\">\n            <span class=\"titleValor\">R$200,00</span>\n            <span class=\"titleMonthSale\">/mês</span>\n        </div>\n         <div class=\"ajustDescriptionSale\">\n            <span class=\"titleValor\">R$15.000,00</span>\n            <span class=\"titleMonthSale\">/vende-se</span>\n        </div>\n      </div>\n    <div class=\"cardText\">\n        <div>  <ion-icon name=\"pin\" size=\"small\" class=\"iconCollation\"></ion-icon> Abraao Miguel do Cargo, Vl. Monte Alegre - SP</div>\n    </div>\n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-card {\n  margin-top: 20px;\n}\n\n.cardImage {\n  width: 100%;\n  float: left;\n  min-height: 130px;\n}\n\n.cardText {\n  width: 100%;\n  float: left;\n  border-top: 1px solid #dddcdc;\n  height: 33px;\n  margin-top: 5px;\n}\n\n.cardDescription {\n  width: 100%;\n  float: left;\n  min-height: 20px;\n  margin-top: 5px;\n}\n\n.iconCollation {\n  color: #eeb741;\n  margin-top: 5px;\n  margin-left: 6px;\n}\n\n.imageCircle {\n  width: 13px;\n  height: 10px;\n  margin-top: 5px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ajustTitle {\n  float: left;\n  height: 25px;\n}\n\n.ajustDescription {\n  float: right;\n  width: 45%;\n  text-align: right;\n  margin-right: 2px;\n}\n\n.ajustDescriptionSale {\n  float: left;\n  width: 49%;\n  text-align: left;\n  margin-left: 2px;\n}\n\n.titleValor {\n  font: bold 14px Verdana, Arial;\n  margin-top: 5px;\n}\n\n.titleMonthSale {\n  font: 10px Verdana, Arial;\n  margin-top: 5px;\n}\n\n.rating {\n  float: right;\n  margin-right: 2px;\n  font-size: 20px;\n}\n\n.iconRating {\n  color: #f87575;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvZ2FyYWcvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jYXJke1xuICAgIG1hcmdpbi10b3A6IDIwcHhcbn1cbi5jYXJkSW1hZ2V7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLWhlaWdodDogMTMwcHg7XG59XG5cbi5jYXJkVGV4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2IoMjIxLCAyMjAsIDIyMCk7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIG1hcmdpbi10b3A6NXB4XG59XG5cbi5jYXJkRGVzY3JpcHRpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOjVweFxufVxuXG4uaWNvbkNvbGxhdGlvbntcbiAgICBjb2xvcjogcmdiKDIzOCwgMTgzLCA2NSk7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2cHhcbn1cblxuLmltYWdlQ2lyY2xle1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweFxufVxuXG4uYWp1c3RUaXRsZXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hanVzdERlc2NyaXB0aW9ue1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHhcbn1cblxuLmFqdXN0RGVzY3JpcHRpb25TYWxle1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAycHhcbn1cblxuLnRpdGxlVmFsb3J7XG4gICAgZm9udDpib2xkIDE0cHggVmVyZGFuYSwgQXJpYWw7XG4gICAgbWFyZ2luLXRvcDo1cHhcbn1cblxuLnRpdGxlTW9udGhTYWxle1xuICAgIGZvbnQ6IDEwcHggVmVyZGFuYSxBcmlhbDtcbiAgICBtYXJnaW4tdG9wOjVweFxufVxuXG4ucmF0aW5ne1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pY29uUmF0aW5ne1xuICAgIGNvbG9yOnJnYigyNDgsIDExNywgMTE3KTtcbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNhcmRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLWhlaWdodDogMTMwcHg7XG59XG5cbi5jYXJkVGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRjZGM7XG4gIGhlaWdodDogMzNweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2FyZERlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pY29uQ29sbGF0aW9uIHtcbiAgY29sb3I6ICNlZWI3NDE7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmltYWdlQ2lyY2xlIHtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmFqdXN0VGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYWp1c3REZXNjcmlwdGlvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQ1JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG4uYWp1c3REZXNjcmlwdGlvblNhbGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ5JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLnRpdGxlVmFsb3Ige1xuICBmb250OiBib2xkIDE0cHggVmVyZGFuYSwgQXJpYWw7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRpdGxlTW9udGhTYWxlIHtcbiAgZm9udDogMTBweCBWZXJkYW5hLCBBcmlhbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucmF0aW5nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaWNvblJhdGluZyB7XG4gIGNvbG9yOiAjZjg3NTc1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map