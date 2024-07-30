"use strict";
(self["webpackChunksysju"] = self["webpackChunksysju"] || []).push([["common"],{

/***/ 660:
/*!************************************************!*\
  !*** ./src/app/advogados/advogados.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvogadosService": () => (/* binding */ AdvogadosService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class AdvogadosService {
    constructor(http) {
        this.http = http;
        this.API = 'http://localhost:8080/advogados';
    }
    list() {
        return this.http.get(this.API);
    }
    loadByID(id) {
        return this.http.get(`${this.API}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    create(advogado) {
        return this.http.post(this.API, advogado).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    update(advogado) {
        return this.http.put(`${this.API}/${advogado.id}`, advogado).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    save(advogado) {
        if (advogado.id) {
            return this.update(advogado);
        }
        return this.create(advogado);
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
}
AdvogadosService.ɵfac = function AdvogadosService_Factory(t) { return new (t || AdvogadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AdvogadosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdvogadosService, factory: AdvogadosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7364:
/*!**********************************************!*\
  !*** ./src/app/clientes/clientes.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesService": () => (/* binding */ ClientesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ClientesService {
    constructor(http) {
        this.http = http;
        this.API = 'http://localhost:8080/clientes';
    }
    list() {
        return this.http.get(this.API);
    }
    loadByID(id) {
        return this.http.get(`${this.API}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    create(cliente) {
        return this.http.post(this.API, cliente).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    update(cliente) {
        return this.http.put(`${this.API}/${cliente.id}`, cliente).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    save(cliente) {
        if (cliente.id) {
            return this.update(cliente);
        }
        return this.create(cliente);
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
}
ClientesService.ɵfac = function ClientesService_Factory(t) { return new (t || ClientesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ClientesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientesService, factory: ClientesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map