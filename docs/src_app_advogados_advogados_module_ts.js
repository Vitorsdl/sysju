"use strict";
(self["webpackChunksysju"] = self["webpackChunksysju"] || []).push([["src_app_advogados_advogados_module_ts"],{

/***/ 9358:
/*!**********************************************************************!*\
  !*** ./src/app/advogados/advogados-form/advogados-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvogadosFormComponent": () => (/* binding */ AdvogadosFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _advogados_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../advogados.service */ 660);
/* harmony import */ var _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/alert-modal.service */ 1320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AdvogadosFormComponent {
    constructor(fb, service, modal, location, route) {
        this.fb = fb;
        this.service = service;
        this.modal = modal;
        this.location = location;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        const advogado = this.route.snapshot.data['advogado'];
        this.formadv = this.fb.group({
            id: [advogado.id],
            nome: [advogado.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    hasError(field) {
        return this.formadv.get(field).errors;
    }
    onSubmit() {
        this.submitted = true;
        if (this.formadv.valid) {
            let msgSuccess = 'Advogado salvo.';
            let msgError = 'Erro ao salvar.';
            if (this.formadv.value.id) {
                msgSuccess = 'Advogado atualizado.';
                msgError = 'Erro ao atualizar.';
            }
            this.service.save(this.formadv.value).subscribe(success => { this.modal.showAlertSuccess(msgSuccess); this.location.back(); }, error => { this.modal.showAlertDanger(msgError); });
        }
    }
    onCancel() {
        this.submitted = false;
        this.formadv.reset();
        this.location.back();
    }
}
AdvogadosFormComponent.ɵfac = function AdvogadosFormComponent_Factory(t) { return new (t || AdvogadosFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_advogados_service__WEBPACK_IMPORTED_MODULE_0__.AdvogadosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_1__.AlertModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
AdvogadosFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdvogadosFormComponent, selectors: [["app-advogados-form"]], decls: 16, vars: 4, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-3", "mb-3"], ["for", "nome"], ["type", "text", "id", "nome", "formControlName", "nome", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-defaut", 3, "click"]], template: function AdvogadosFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cadastro dos advogados");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "form", 3)(6, "div", 4)(7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvogadosFormComponent_Template_button_click_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvogadosFormComponent_Template_button_click_14_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formadv);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx.submitted && ctx.hasError("nome")));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZvZ2Fkb3MtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3314:
/*!*******************************************************!*\
  !*** ./src/app/advogados/advogados-resolver.guard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvogadosResolverGuard": () => (/* binding */ AdvogadosResolverGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _advogados_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advogados.service */ 660);



class AdvogadosResolverGuard {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        if (route.params && route.params['id']) {
            return this.service.loadByID(route.params['id']);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
            id: null,
            nome: null
        });
    }
}
AdvogadosResolverGuard.ɵfac = function AdvogadosResolverGuard_Factory(t) { return new (t || AdvogadosResolverGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_advogados_service__WEBPACK_IMPORTED_MODULE_0__.AdvogadosService)); };
AdvogadosResolverGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdvogadosResolverGuard, factory: AdvogadosResolverGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4268:
/*!***********************************************!*\
  !*** ./src/app/advogados/advogados.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvogadosModule": () => (/* binding */ AdvogadosModule)
/* harmony export */ });
/* harmony import */ var _advogados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advogados.routing.module */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _advogados_advogados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advogados/advogados.component */ 4008);
/* harmony import */ var _advogados_form_advogados_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advogados-form/advogados-form.component */ 9358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class AdvogadosModule {
}
AdvogadosModule.ɵfac = function AdvogadosModule_Factory(t) { return new (t || AdvogadosModule)(); };
AdvogadosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdvogadosModule });
AdvogadosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _advogados_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvogadosRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdvogadosModule, { declarations: [_advogados_advogados_component__WEBPACK_IMPORTED_MODULE_1__.AdvogadosComponent, _advogados_form_advogados_form_component__WEBPACK_IMPORTED_MODULE_2__.AdvogadosFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _advogados_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvogadosRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 6333:
/*!*******************************************************!*\
  !*** ./src/app/advogados/advogados.routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvogadosRoutingModule": () => (/* binding */ AdvogadosRoutingModule)
/* harmony export */ });
/* harmony import */ var _advogados_resolver_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advogados-resolver.guard */ 3314);
/* harmony import */ var _advogados_form_advogados_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advogados-form/advogados-form.component */ 9358);
/* harmony import */ var _advogados_advogados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advogados/advogados.component */ 4008);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const advogadosRoutes = [
    {
        path: '',
        component: _advogados_advogados_component__WEBPACK_IMPORTED_MODULE_2__.AdvogadosComponent
    },
    {
        path: 'novo',
        component: _advogados_form_advogados_form_component__WEBPACK_IMPORTED_MODULE_1__.AdvogadosFormComponent,
        resolve: { advogado: _advogados_resolver_guard__WEBPACK_IMPORTED_MODULE_0__.AdvogadosResolverGuard }
    },
    {
        path: 'editar/:id',
        component: _advogados_form_advogados_form_component__WEBPACK_IMPORTED_MODULE_1__.AdvogadosFormComponent,
        resolve: { advogado: _advogados_resolver_guard__WEBPACK_IMPORTED_MODULE_0__.AdvogadosResolverGuard }
    }
];
class AdvogadosRoutingModule {
}
AdvogadosRoutingModule.ɵfac = function AdvogadosRoutingModule_Factory(t) { return new (t || AdvogadosRoutingModule)(); };
AdvogadosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdvogadosRoutingModule });
AdvogadosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(advogadosRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdvogadosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 4008:
/*!************************************************************!*\
  !*** ./src/app/advogados/advogados/advogados.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvogadosComponent": () => (/* binding */ AdvogadosComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _advogados_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../advogados.service */ 660);
/* harmony import */ var _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/alert-modal.service */ 1320);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);







function AdvogadosComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdvogadosComponent_tr_39_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const advogado_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onEdit(advogado_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n                                Editar\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdvogadosComponent_tr_39_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const advogado_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onDelete(advogado_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n                                Excluir\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const advogado_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](advogado_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](advogado_r1.nome);
} }
const _c0 = function () { return ["novo"]; };
class AdvogadosComponent {
    constructor(service, alertService, router, route) {
        this.service = service;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.service.list().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(erro => { this.handleError(); return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.empty)(); })).subscribe(dados => { this.advogados = dados, console.log(dados); });
    }
    handleError() {
        this.alertService.showAlertDanger('Erro ao buscar advogados.');
    }
    onEdit(id) {
        this.router.navigate(['editar', id], { relativeTo: this.route });
    }
    onDelete(id) {
        this.service.remove(id).subscribe(success => { this.list(); }, error => { this.alertService.showAlertDanger("Erro ao excluir"); });
    }
}
AdvogadosComponent.ɵfac = function AdvogadosComponent_Factory(t) { return new (t || AdvogadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_advogados_service__WEBPACK_IMPORTED_MODULE_0__.AdvogadosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_1__.AlertModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
AdvogadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdvogadosComponent, selectors: [["app-advogados"]], decls: 44, vars: 3, consts: [[1, "card"], [1, "card-header"], [1, "float-left"], [1, "float-right"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "card-body"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "float-rigth"], [1, "btn", "btn-outline-warning", "mb-1", "btn-sm", 3, "click"], [1, "btn", "btn-outline-danger", "mb-1", "btn-sm", 3, "click"]], template: function AdvogadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Advogados");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Novo advogado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AdvogadosComponent_tr_39_Template, 20, 2, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.advogados);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZvZ2Fkb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_advogados_advogados_module_ts.js.map