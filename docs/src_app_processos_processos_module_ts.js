"use strict";
(self["webpackChunksysju"] = self["webpackChunksysju"] || []).push([["src_app_processos_processos_module_ts"],{

/***/ 3741:
/*!********************************************!*\
  !*** ./src/app/Comarca/comarca.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComarcasService": () => (/* binding */ ComarcasService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ComarcasService {
    constructor(http) {
        this.http = http;
        this.API = 'http://localhost:8080/comarcas';
    }
    list() {
        return this.http.get(this.API);
    }
    loadByID(id) {
        return this.http.get(`${this.API}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
}
ComarcasService.ɵfac = function ComarcasService_Factory(t) { return new (t || ComarcasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ComarcasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComarcasService, factory: ComarcasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9417:
/*!******************************************************!*\
  !*** ./src/app/processos/processo-resolver.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessoResolverGuard": () => (/* binding */ ProcessoResolverGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _processos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processos.service */ 6059);



class ProcessoResolverGuard {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        if (route.params && route.params['id']) {
            return this.service.loadByID(route.params['id']);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
            id: null,
            numero: null,
            tipo: null,
            procedimento: null,
            comarca: null,
            vara: null,
            resultadoRecurso: null,
            cliente: null,
            advogado: null
        });
    }
}
ProcessoResolverGuard.ɵfac = function ProcessoResolverGuard_Factory(t) { return new (t || ProcessoResolverGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_processos_service__WEBPACK_IMPORTED_MODULE_0__.ProcessosService)); };
ProcessoResolverGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProcessoResolverGuard, factory: ProcessoResolverGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9989:
/*!**********************************************************************!*\
  !*** ./src/app/processos/processos-form/processos-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessosFormComponent": () => (/* binding */ ProcessosFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _processos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../processos.service */ 6059);
/* harmony import */ var _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../clientes/clientes.service */ 7364);
/* harmony import */ var _advogados_advogados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../advogados/advogados.service */ 660);
/* harmony import */ var _Comarca_comarca_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Comarca/comarca.service */ 3741);
/* harmony import */ var _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/alert-modal.service */ 1320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);










function ProcessosFormComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comarca_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", comarca_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comarca_r3.comarca);
} }
function ProcessosFormComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", cliente_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cliente_r4.nome);
} }
function ProcessosFormComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const advogado_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", advogado_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](advogado_r5.nome);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ProcessosFormComponent {
    constructor(fb, service, servicecl, servicead, serviceco, modal, location, route) {
        this.fb = fb;
        this.service = service;
        this.servicecl = servicecl;
        this.servicead = servicead;
        this.serviceco = serviceco;
        this.modal = modal;
        this.location = location;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        const processo = this.route.snapshot.data['processo'];
        if (processo.cliente_id != null) {
        }
        this.list();
        this.formproc = this.fb.group({
            id: [processo.id],
            numero: [processo.numero, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            tipo: [processo.tipo, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            procedimento: [processo.procedimento, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            vara: [processo.vara, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            resultadoRecurso: [processo.resultadoRecurso, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            cliente: this.fb.group({
                id: [processo.cliente, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            }),
            advogado: this.fb.group({
                id: [processo.advogado, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            }),
            comarca: this.fb.group({
                id: [processo.comarca, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            })
        });
    }
    list() {
        this.servicecl.list().subscribe(dados => { this.clientes = dados, console.log(dados); });
        this.servicead.list().subscribe(dados => { this.advogados = dados; });
        this.serviceco.list().subscribe(dados => { this.comarcas = dados; });
    }
    hasError(field) {
        return this.formproc.get(field).errors;
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.formproc.value);
        if (this.formproc.valid) {
            let msgSuccess = 'Processo salvo.';
            let msgError = 'Erro ao salvar.';
            if (this.formproc.value.id) {
                msgSuccess = 'Processo atualizado.';
                msgError = 'Erro ao atualizar.';
            }
            this.service.save(this.formproc.value).subscribe(success => { this.modal.showAlertSuccess(msgSuccess); this.location.back(); }, error => { this.modal.showAlertDanger(msgError); });
        }
    }
    onCancel() {
        this.submitted = false;
        this.formproc.reset();
        this.location.back();
    }
}
ProcessosFormComponent.ɵfac = function ProcessosFormComponent_Factory(t) { return new (t || ProcessosFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_processos_service__WEBPACK_IMPORTED_MODULE_0__.ProcessosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_clientes_clientes_service__WEBPACK_IMPORTED_MODULE_1__.ClientesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_advogados_advogados_service__WEBPACK_IMPORTED_MODULE_2__.AdvogadosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Comarca_comarca_service__WEBPACK_IMPORTED_MODULE_3__.ComarcasService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__.AlertModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
ProcessosFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProcessosFormComponent, selectors: [["app-processos-form"]], decls: 51, vars: 28, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-2", "mb-3"], ["for", "numero"], ["type", "text", "id", "numero", "formControlName", "numero", 1, "form-control", 3, "ngClass"], [1, "col-md-3", "mb-3"], ["for", "tipo"], ["type", "text", "id", "tipo", "formControlName", "tipo", 1, "form-control", 3, "ngClass"], ["for", "procedimento"], ["type", "text", "id", "procedimento", "formControlName", "procedimento", 1, "form-control", 3, "ngClass"], ["formGroupName", "comarca", 1, "col-md-4", "mb-3"], ["for", "comarca"], ["id", "comarca", "formControlName", "id", 1, "form-control", 3, "ngClass"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "cliente", 1, "col-md-3", "mb-3"], ["for", "cliente"], ["id", "cliente", "formControlName", "id", 1, "form-control", 3, "ngClass"], ["for", "vara"], ["type", "text", "id", "vara", "formControlName", "vara", 1, "form-control", 3, "ngClass"], ["for", "resultadoRecurso"], ["type", "text", "id", "resultadoRecurso", "formControlName", "resultadoRecurso", 1, "form-control", 3, "ngClass"], ["formGroupName", "advogado", 1, "col-md-3", "mb-3"], ["for", "advogado"], ["id", "advogado", "formControlName", "id", 1, "form-control", 3, "ngClass"], [2, "margin-top", "10px"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-defaut", 3, "click"], [3, "value"]], template: function ProcessosFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cadastro de processo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "form", 3)(6, "div", 4)(7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Numero");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "A\u00E7\u00E3o do Processo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13)(20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Comarca");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ProcessosFormComponent_option_24_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 4)(26, "div", 18)(27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ProcessosFormComponent_option_31_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 5)(33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Vara");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 8)(37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Resultado do recurso");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 25)(41, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Advogado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ProcessosFormComponent_option_45_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 28)(47, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProcessosFormComponent_Template_button_click_47_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProcessosFormComponent_Template_button_click_49_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formproc);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.hasError("numero")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.hasError("tipo")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.hasError("procedimento")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.hasError("comarca")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.comarcas);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.hasError("cliente")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.clientes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.hasError("vara")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.hasError("resultadoRecurso")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.hasError("advogado")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.advogados);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzb3MtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1681:
/*!***********************************************!*\
  !*** ./src/app/processos/processos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessosModule": () => (/* binding */ ProcessosModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _processos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processos.routing.module */ 628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _processos_processos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processos/processos.component */ 5450);
/* harmony import */ var _processos_form_processos_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processos-form/processos-form.component */ 9989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class ProcessosModule {
}
ProcessosModule.ɵfac = function ProcessosModule_Factory(t) { return new (t || ProcessosModule)(); };
ProcessosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProcessosModule });
ProcessosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _processos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcessoRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProcessosModule, { declarations: [_processos_processos_component__WEBPACK_IMPORTED_MODULE_1__.ProcessosComponent, _processos_form_processos_form_component__WEBPACK_IMPORTED_MODULE_2__.ProcessosFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _processos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcessoRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 628:
/*!*******************************************************!*\
  !*** ./src/app/processos/processos.routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessoRoutingModule": () => (/* binding */ ProcessoRoutingModule)
/* harmony export */ });
/* harmony import */ var _processo_resolver_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processo-resolver.guard */ 9417);
/* harmony import */ var _processos_form_processos_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processos-form/processos-form.component */ 9989);
/* harmony import */ var _processos_processos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processos/processos.component */ 5450);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const processosRoutes = [
    {
        path: '',
        component: _processos_processos_component__WEBPACK_IMPORTED_MODULE_2__.ProcessosComponent
    },
    {
        path: 'novo',
        component: _processos_form_processos_form_component__WEBPACK_IMPORTED_MODULE_1__.ProcessosFormComponent,
        resolve: { processo: _processo_resolver_guard__WEBPACK_IMPORTED_MODULE_0__.ProcessoResolverGuard }
    },
    {
        path: 'editar/:id',
        component: _processos_form_processos_form_component__WEBPACK_IMPORTED_MODULE_1__.ProcessosFormComponent,
        resolve: { processo: _processo_resolver_guard__WEBPACK_IMPORTED_MODULE_0__.ProcessoResolverGuard }
    }
];
class ProcessoRoutingModule {
}
ProcessoRoutingModule.ɵfac = function ProcessoRoutingModule_Factory(t) { return new (t || ProcessoRoutingModule)(); };
ProcessoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProcessoRoutingModule });
ProcessoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(processosRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProcessoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 6059:
/*!************************************************!*\
  !*** ./src/app/processos/processos.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessosService": () => (/* binding */ ProcessosService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ProcessosService {
    constructor(http) {
        this.http = http;
        this.API = 'http://localhost:8080/processos';
    }
    list() {
        return this.http.get(this.API);
    }
    loadByID(id) {
        return this.http.get(`${this.API}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    create(processo) {
        return this.http.post(this.API, processo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    update(processo) {
        return this.http.put(`${this.API}/${processo.id}`, processo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
    save(processo) {
        if (processo.id) {
            return this.update(processo);
        }
        return this.create(processo);
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
    }
}
ProcessosService.ɵfac = function ProcessosService_Factory(t) { return new (t || ProcessosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProcessosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProcessosService, factory: ProcessosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5450:
/*!************************************************************!*\
  !*** ./src/app/processos/processos/processos.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessosComponent": () => (/* binding */ ProcessosComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../login/auth.service */ 5426);
/* harmony import */ var _processos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../processos.service */ 6059);
/* harmony import */ var _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/alert-modal.service */ 1320);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);









function ProcessosComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "span", 19)(15, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessosComponent_tr_26_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const processo_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.buscaDados(processo_r2.id, processo_r2.numero, processo_r2.tipo, processo_r2.procedimento, processo_r2.comarca.comarca, processo_r2.vara, processo_r2.resultadoRecurso, processo_r2.cliente.nome, processo_r2.advogado.nome); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Visualizar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const processo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](processo_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](processo_r2.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](processo_r2.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](processo_r2.procedimento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](processo_r2.comarca.comarca);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](processo_r2.cliente.nome);
} }
function ProcessosComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessosComponent_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.onDelete(ctx_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["novo"]; };
class ProcessosComponent {
    constructor(auto, service, alertService, router, route) {
        this.auto = auto;
        this.service = service;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.paginaAtual = 1; //quando o componente carregar iniciara da pagina 1.
        this.visiBt = false;
    }
    ngOnInit() {
        this.list();
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.roles === true) {
            this.visiBt = true;
        }
    }
    list() {
        this.service.list().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(erro => { this.handleError(); return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.empty)(); })).subscribe(dados => { this.processos = dados, console.log(dados); });
    }
    buscaDados(id, numero, tipo, procedimento, comarca, vara, resultadoRecurso, cliente, advogado) {
        this._id = id;
        this._numero = numero;
        this._tipo = tipo;
        this._procedimento = procedimento;
        this._comarca = comarca;
        this._vara = vara;
        this._resultadoRecurso = resultadoRecurso;
        this._cliente = cliente;
        this._advogado = advogado;
    }
    handleError() {
        this.alertService.showAlertDanger('Erro ao buscar processos.');
    }
    onEdit(id) {
        this.router.navigate(['editar', id], { relativeTo: this.route });
    }
    onDelete(id) {
        this.service.remove(id).subscribe(success => { this.list(); }, error => { this.alertService.showAlertDanger("Erro ao excluir"); });
    }
}
ProcessosComponent.ɵfac = function ProcessosComponent_Factory(t) { return new (t || ProcessosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_login_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_processos_service__WEBPACK_IMPORTED_MODULE_2__.ProcessosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__.AlertModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
ProcessosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProcessosComponent, selectors: [["app-processos"]], decls: 58, vars: 12, consts: [[1, "card"], [1, "card-header"], [1, "float-left"], [1, "float-right"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "card-body"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["id", "ModalInfo", "tabindex", "-1", "role", "dialog", "aria-labelledby", "ModalInfoLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "ModalInfoLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["data-dismiss", "modal", 1, "btn", "btn-outline-warning", "mb-1", "btn-sm", 3, "click"], ["class", "btn btn-outline-danger mb-1 btn-sm", "data-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "float-rigth"], ["type", "button", "data-toggle", "modal", "data-target", "#ModalInfo", 1, "btn", "btn-outline-warning", "mb-1", "btn-sm", 3, "click"], ["data-dismiss", "modal", 1, "btn", "btn-outline-danger", "mb-1", "btn-sm", 3, "click"]], template: function ProcessosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Processos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Novo processo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "table", 6)(10, "thead")(11, "tr")(12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Numero");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "A\u00E7\u00E3o Processo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Comarca");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ProcessosComponent_tr_26_Template, 17, 6, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 8)(28, "div", 9)(29, "div", 10)(30, "div", 11)(31, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Informa\u00E7\u00F5es do processo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 13)(34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 15)(37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "N\u00B0 do processo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 16)(55, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessosComponent_Template_button_click_55_listener() { return ctx.onEdit(ctx._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, ProcessosComponent_button_57_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.processos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._numero);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Tipo: ", ctx._tipo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Procedimetno: ", ctx._procedimento, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Comarca: ", ctx._comarca, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Vara: ", ctx._vara, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Resultado do recurso: ", ctx._resultadoRecurso, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Cliente: ", ctx._cliente, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Advogado: ", ctx._advogado, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visiBt);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_processos_processos_module_ts.js.map