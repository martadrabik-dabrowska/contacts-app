(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Idf":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details-company/summary/summary.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Idf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #aboveMenu>\r\n  <div id=\"left-position\">\r\n  <div class=\"label-div\">\r\n    <label><b>Nazwa firmy: </b></label> {{contact.company.name}}\r\n  </div>\r\n  <div class=\"label-div\">\r\n    <label><b>NIP: </b></label> {{contact.company.nip}}\r\n  </div>\r\n  <div>\r\n    <label><b>REGON: </b></label> {{contact.company.regon}}\r\n  </div>\r\n  <div>\r\n    <label><b>KRS: </b></label> {{contact.company.krs}}\r\n  </div>\r\n  <div>\r\n    <label><b>Forma prawna: </b></label> {{getForms()}}\r\n  </div>\r\n  <div *ngIf=\"contact.company.legalForm=='OTHER'\">\r\n    <label><b>Inna forma prawna: </b></label> {{contact.company.legalFormOther}}\r\n  </div>\r\n  <div>\r\n    <label><b>Telefon: </b></label> {{contact.phoneNumber}}\r\n  </div>\r\n  <div>\r\n    <label><b>Email: </b></label> {{contact.email}}\r\n  </div>\r\n    <div>\r\n      <label><b>Informacje dodatkowe: </b></label> {{contact.additionalInfo}}\r\n    </div>\r\n  </div>\r\n<div id=\"right-position\">\r\n  <div>\r\n    <label><b>Sposób pozyskania: </b></label> {{getWay()}}\r\n</div>\r\n  <div *ngIf=\"contact.wayOfObtaining=='RECOMENDATION'\">\r\n    <label><b>Rekomendujący: </b></label> {{contact.recommending}}\r\n  </div>\r\n</div>\r\n  <div id=\"bottom-position\">\r\n  <hr>\r\n  <h4>Adresy: </h4>\r\n  <div class=\"adress-style\" style=\"width: 400px;\">\r\n    <div *ngFor=\"let address of contact.addresses\">\r\n      <div class=\"form-group\" style=\"font-weight: bold\">\r\n        {{address.name}}\r\n      </div>\r\n      <div class=\"form-group\">\r\n        {{address.street}} {{address.houseNumber}}/{{address.flatNumber}}\r\n      </div>\r\n      <div class=\"form-group\">\r\n        {{address.zipCode}} {{address.city}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <button [routerLink]=\"getRouteLink(contact)\" [queryParams]=\"{id: contact.id}\" class=\"btn btn-primary\">Edycja</button><br>\r\n</div>\r\n";
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
      /*! E:\projekty\newcontacts\angular-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1dgC":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/person-general-informations/person-general-information.component.css ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24tZ2VuZXJhbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "2Xvf":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/company-general-informations/company-general-information.component.css ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#legal-form-other  {\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktZ2VuZXJhbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImNvbXBhbnktZ2VuZXJhbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZ2FsLWZvcm0tb3RoZXIgIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "2Y7A":
    /*!******************************************************************!*\
      !*** ./src/app/contacts/edit-company/edit-company.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function Y7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".form-group {\r\n  width: 400px;\r\n}\r\nhr{\r\n  width: 100%;\r\n}\r\n.container{\r\n  width: 1000px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJlZGl0LWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuaHJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "34b5":
    /*!*****************************************************************!*\
      !*** ./src/app/contacts/edit-company/edit-company.component.ts ***!
      \*****************************************************************/

    /*! exports provided: EditCompanyComponent */

    /***/
    function b5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCompanyComponent", function () {
        return EditCompanyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_company_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-company.component.html */
      "fNd/");
      /* harmony import */


      var _edit_company_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-company.component.css */
      "2Y7A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contact_parts_company_general_informations_company_general_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contact-parts/company-general-informations/company-general-information.component */
      "W7q8");
      /* harmony import */


      var _contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../contact-parts/address/address.component */
      "hiZa");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../contact-parts/way-of-obtaining/way-of-obtaining.component */
      "QQtt");
      /* harmony import */


      var _contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../contact-parts/base-information/base-information.component */
      "hExM");

      var EditCompanyComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:max-line-length
        function EditCompanyComponent(contactService, router, route, ref) {
          _classCallCheck(this, EditCompanyComponent);

          this.contactService = contactService;
          this.router = router;
          this.route = route;
          this.ref = ref;
          this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Contact"]();
          this.submitted = false;
          this.wayControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email]);
          this.ways = [{
            value: 'recommendation',
            viewValue: 'Rekomendacja'
          }, {
            value: 'conference',
            viewValue: 'konferencja i szkolenie'
          }, {
            value: 'social media',
            viewValue: 'media społęcznościowe'
          }, {
            value: 'web page',
            viewValue: 'strona www'
          }, {
            value: 'other',
            viewValue: 'inne'
          }];
        }

        _createClass(EditCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            var id = null;
            this.route.queryParams.subscribe(function (params) {
              return id = params.id;
            });

            if (null != id) {
              this.contactService.getContactId(id).subscribe(function (res) {
                _this.contact = res[0];

                _this.updateToOtherModule(_this.contact);
              });
            } else {
              this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Contact"]();
            }
          }
        }, {
          key: "updateToOtherModule",
          value: function updateToOtherModule(contact) {
            this.ref.detectChanges();
            this.baseComponent.contact = contact;
            this.companyComponent.companyy = contact.company;
            this.wayOfObtainingComponent.wayOfObtaining = contact.wayOfObtaining;
            this.wayOfObtainingComponent.recommending = contact.recommending;
            this.addressComponent.addresses = contact.addresses;
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage() {
            if (this.email.hasError('required')) {
              return 'Podaj email';
            }

            return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
          } // newEmployee(): void {
          //   //   this.submitted = false;
          //   //   this.contact = new Contact();
          //   // }

        }, {
          key: "save",
          value: function save() {
            this.contact = this.baseComponent.contact;
            this.contact.company = this.companyComponent.companyy;
            this.contact.wayOfObtaining = this.wayOfObtainingComponent.wayOfObtaining;
            this.contact.recommending = this.wayOfObtainingComponent.recommending;
            this.contact.addresses = this.addressComponent.addresses;
            this.contactService.addContact(this.contact).subscribe(function (data) {
              return console.log(data);
            }, function (error) {
              return console.log(error);
            });
            this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Contact"]();
            this.gotoList();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/kontakty']);
          }
        }]);

        return EditCompanyComponent;
      }();

      EditCompanyComponent.ctorParameters = function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      EditCompanyComponent.propDecorators = {
        companyComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['companya', {
            read: _contact_parts_company_general_informations_company_general_information_component__WEBPACK_IMPORTED_MODULE_4__["CompanyGeneralInformationComponent"]
          }]
        }],
        wayOfObtainingComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['wayOfObtaining', {
            read: _contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_9__["WayOfObtainingComponent"]
          }]
        }],
        addressComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['address', {
            read: _contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_5__["AddressComponent"]
          }]
        }],
        baseComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['baseInformation', {
            read: _contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_10__["BaseInformationComponent"]
          }]
        }]
      };
      EditCompanyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-company',
        template: _raw_loader_edit_company_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_company_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditCompanyComponent);
      /***/
    },

    /***/
    "4ygd":
    /*!********************************************************************************************!*\
      !*** ./src/app/details/details-company/employees/edit-employee/edit-employee.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: EditEmployeeComponent */

    /***/
    function ygd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function () {
        return EditEmployeeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_employee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-employee.component.html */
      "cpUn");
      /* harmony import */


      var _edit_employee_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-employee.component.css */
      "d50X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../contacts/services/employee.service */
      "Kkiu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var EditEmployeeComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:max-line-length
        function EditEmployeeComponent(employeeObj, employeeService, router, dialogRef) {
          _classCallCheck(this, EditEmployeeComponent);

          this.employeeObj = employeeObj;
          this.employeeService = employeeService;
          this.router = router;
          this.dialogRef = dialogRef;
          this.submitted = false;
          this.employee = employeeObj.employee;
        }

        _createClass(EditEmployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "save",
          value: function save() {
            //  this.contact.addresses.push( this.address.address);
            this.employeeService.addEmployee(this.employee).subscribe(function (data) {
              return console.log(data);
            }, function (error) {
              return console.log(error);
            });
            this.dialogRef.close(); //  this.gotoList();
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/szczegoly_kontaktu_pracownicy']);
          }
        }]);

        return EditEmployeeComponent;
      }();

      EditEmployeeComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
        }];
      };

      EditEmployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-employee',
        template: _raw_loader_edit_employee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_employee_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditEmployeeComponent);
      /***/
    },

    /***/
    "5OFU":
    /*!*************************************************!*\
      !*** ./src/app/contacts/contacts.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function OFU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".add-contact-button{\r\n  float: right;\r\n  margin: 20px;\r\n}\r\n\r\nh2{\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\ntable tr td  {\r\n  border : 1px solid black;\r\n\r\n}\r\n\r\n.border-element{\r\n  border : 1px solid black;\r\n}\r\n\r\n#hover-contact{\r\ncursor: pointer;\r\n\r\n}\r\n\r\n.hover-icons{\r\n  cursor: pointer;\r\n  margin-right: 20%;\r\n}\r\n\r\n.pagination:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7O0FBRTFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWNvbnRhY3QtYnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB0ciB0ZCAge1xyXG4gIGJvcmRlciA6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5ib3JkZXItZWxlbWVudHtcclxuICBib3JkZXIgOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNob3Zlci1jb250YWN0e1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcbi5ob3Zlci1pY29uc3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "5n9c":
    /*!********************************************************************************************!*\
      !*** ./src/app/details/details-company/employees/add-employees/add-employees.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: AddEmployeesComponent */

    /***/
    function n9c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEmployeesComponent", function () {
        return AddEmployeesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_employees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-employees.component.html */
      "pvHq");
      /* harmony import */


      var _add_employees_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-employees.component.css */
      "ptbI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../contacts/services/employee.service */
      "Kkiu");

      var AddEmployeesComponent = /*#__PURE__*/function () {
        function AddEmployeesComponent(obj, employeeService, router, dialogRef) {
          _classCallCheck(this, AddEmployeesComponent);

          this.obj = obj;
          this.employeeService = employeeService;
          this.router = router;
          this.dialogRef = dialogRef;
          this.employee = new _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["Employee"]();
          this.submitted = false;
          this.company = obj.company;
        }

        _createClass(AddEmployeesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.employee = new _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["Employee"]();
          }
        }, {
          key: "newEmployee",
          value: function newEmployee() {
            this.submitted = false;
            this.employee = new _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["Employee"]();
          }
        }, {
          key: "save",
          value: function save() {
            this.employee.active = true;
            this.employee.company = this.company;
            this.employeeService.addEmployee(this.employee).subscribe(function (data) {
              return console.log(data);
            }, function (error) {
              return console.log(error);
            });
            this.employee = new _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["Employee"]();
            this.dialogRef.close();
          }
        }]);

        return AddEmployeesComponent;
      }();

      AddEmployeesComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }];
      };

      AddEmployeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-employees',
        template: _raw_loader_add_employees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_employees_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddEmployeesComponent);
      /***/
    },

    /***/
    "5wA8":
    /*!***********************************************************************!*\
      !*** ./src/app/details/details-company/details-company.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function wA8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#summary{\r\n  float: left;\r\n}\r\n\r\n#employees{\r\n  float: right;\r\n\r\n}\r\n\r\n.mat-tab-group {\r\nwidth: 100%;\r\n  margin-left : 50px ;\r\n  margin-right: 150px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtBQUNBLFdBQVc7RUFDVCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJkZXRhaWxzLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdW1tYXJ5e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jZW1wbG95ZWVze1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxud2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQgOiA1MHB4IDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "6VWz":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-parts/person-general-informations/person-general-information.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VWz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<hr>\r\n<div [hidden]=\"submitted\" class=\"person-form\" style=\"width: 400px;\" [formGroup]=\"personForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">Imię</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"firstName\"  [(ngModel)]=\"person.firstName\" name=\"firstName\" formControlName=\"firstName\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"surname\">Nazwisko</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"surname\"  [(ngModel)]=\"person.lastName\" name=\"surname\" formControlName=\"surname\">\r\n    </div>\r\n\r\n    <div *ngIf=\"!personForm.get('surname').valid && personForm.get('surname').touched\" style=\"color:red\">\r\n     Nazwisko jest wymagane\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"pesel\">PESEL</label>\r\n      <input type=\"number\" size=\"11\" class=\"form-control\" id=\"pesel\" [(ngModel)]=\"person.pesel\" name=\"pesel\" formControlName=\"pesel\">\r\n    </div>\r\n\r\n    <div *ngIf=\"!personForm.get('pesel').valid && personForm.get('pesel').touched\" style=\"color:red\">\r\n      PESEL się składać wyłącznie z 11 cyfr\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "6uOf":
    /*!***************************************************************!*\
      !*** ./src/app/contacts/edit-person/edit-person.component.ts ***!
      \***************************************************************/

    /*! exports provided: EditPersonComponent */

    /***/
    function uOf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPersonComponent", function () {
        return EditPersonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_person_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-person.component.html */
      "wyDg");
      /* harmony import */


      var _edit_person_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-person.component.css */
      "yATN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contact_parts_person_general_informations_person_general_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contact-parts/person-general-informations/person-general-information.component */
      "emRH");
      /* harmony import */


      var _contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../contact-parts/address/address.component */
      "hiZa");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../contact-parts/way-of-obtaining/way-of-obtaining.component */
      "QQtt");
      /* harmony import */


      var _contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../contact-parts/base-information/base-information.component */
      "hExM");

      var EditPersonComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:max-line-length
        function EditPersonComponent(contactService, router, route, ref) {
          _classCallCheck(this, EditPersonComponent);

          this.contactService = contactService;
          this.router = router;
          this.route = route;
          this.ref = ref;
          this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Contact"]();
          this.submitted = false;
          this.wayControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email]);
          this.ways = [{
            value: 'recommendation',
            viewValue: 'Rekomendacja'
          }, {
            value: 'conference',
            viewValue: 'konferencja i szkolenie'
          }, {
            value: 'social media',
            viewValue: 'media społęcznościowe'
          }, {
            value: 'web page',
            viewValue: 'strona www'
          }, {
            value: 'other',
            viewValue: 'inne'
          }];
        }

        _createClass(EditPersonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            var id = null;
            this.route.queryParams.subscribe(function (params) {
              return id = params.id;
            });

            if (null != id) {
              this.contactService.getContactId(id).subscribe(function (res) {
                _this2.contact = res[0];

                _this2.updateToOtherModule(_this2.contact);
              });
            } else {
              this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Contact"]();
            }
          }
        }, {
          key: "updateToOtherModule",
          value: function updateToOtherModule(contact) {
            this.baseComponent.contact = contact;
            this.ref.detectChanges();
            this.person.person = contact.person;
            this.wayOfObtainingComponent.wayOfObtaining = contact.wayOfObtaining;
            this.wayOfObtainingComponent.recommending = contact.recommending;
            this.addressComponent.addresses = contact.addresses;
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage() {
            if (this.email.hasError('required')) {
              return 'Podaj email';
            }

            return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
          }
        }, {
          key: "newEmployee",
          value: function newEmployee() {
            this.submitted = false;
            this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Contact"]();
          }
        }, {
          key: "save",
          value: function save() {
            this.contact = this.baseComponent.contact;
            this.contact.person = this.person.person;
            this.contact.wayOfObtaining = this.wayOfObtainingComponent.wayOfObtaining;
            this.contact.recommending = this.wayOfObtainingComponent.recommending;
            this.contact.addresses = this.addressComponent.addresses;
            this.contactService.addContact(this.contact).subscribe(function (data) {
              return console.log(data);
            }, function (error) {
              return console.log(error);
            });
            this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Contact"]();
            this.gotoList();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/kontakty']);
          }
        }]);

        return EditPersonComponent;
      }();

      EditPersonComponent.ctorParameters = function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      EditPersonComponent.propDecorators = {
        person: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['person', {
            read: _contact_parts_person_general_informations_person_general_information_component__WEBPACK_IMPORTED_MODULE_4__["PersonGeneralInformationComponent"]
          }]
        }],
        wayOfObtainingComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['wayOfObtainingComponent', {
            read: _contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_9__["WayOfObtainingComponent"]
          }]
        }],
        addressComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['address', {
            read: _contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_5__["AddressComponent"]
          }]
        }],
        baseComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['baseInformation', {
            read: _contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_10__["BaseInformationComponent"]
          }]
        }]
      };
      EditPersonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-person',
        template: _raw_loader_edit_person_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_person_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditPersonComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BE7S":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details-person/details-person.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BE7S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>Podsumowanie</h4>\r\n\r\n<hr/>\r\n<div *ngIf=\"contact\">\r\n  <div>\r\n    <label><b>Imię: </b></label> {{contact.person.firstName}}\r\n  </div>\r\n  <div>\r\n    <label><b>Nazwisko: </b></label> {{contact.person.lastName}}\r\n  </div>\r\n  <div>\r\n    <label><b>PESEL: </b></label> {{contact.person.pesel}}\r\n  </div>\r\n  <div>\r\n    <label><b>Email: </b></label> {{contact.email}}\r\n  </div>\r\n  <div>\r\n    <label><b>Telefon: </b></label> {{contact.phoneNumber}}\r\n  </div>\r\n\r\n  <div>\r\n    <label><b>Informacje dodatkowe: </b></label> {{contact.wayOfObtaining}}\r\n  </div>\r\n  <div>\r\n    <label><b>Sposób pozyskania: </b></label> {{contact.phoneNumber}}\r\n  </div>\r\n  <div>\r\n    <label><b>Rekomendujący: </b></label> {{contact.wayOfObtaining}}\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <h4>Adresy</h4>\r\n  <div style=\"width: 400px;\">\r\n    <div *ngFor=\"let address of contact.addresses\">\r\n      <div class=\"form-group\">\r\n       {{address.name}}\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        {{address.street}} {{address.houseNumber}}/{{address.flatNumber}}\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        {{address.zipCode}} {{address.city}}\r\n      </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<button [routerLink]=\"getRouteLink(contact)\" [queryParams]=\"{id: contact.id}\" class=\"btn btn-primary\">Edycja</button><br>\r\n";
      /***/
    },

    /***/
    "Be/m":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-parts/base-information/base-information.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BeM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div  [formGroup]=\"baseForm\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"phoneNumber\">Telefon</label>\r\n    <input type=\"tel\" class=\"form-control\" id=\"phoneNumber\" [(ngModel)]=\"contact.phoneNumber\" name=\"phoneNumber\" formControlName=\"phoneNumber\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.email\" id=\"email\" name=\"email\" formControlName=\"email\">\r\n  </div>\r\n  <div *ngIf=\"!baseForm.get('email').valid && baseForm.get('email').touched\" style=\"color:red\">\r\n    Podaj poprawny email\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"additionalInformation\">Informacje dodatkowe</label>\r\n    <textarea type=\"text\" [(ngModel)]=\"contact.additionalInfo\" class=\"form-control\" id=\"additionalInformation\"\r\n              name=\"additionalInformation\" formControlName=\"additionalInformation\"></textarea>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Hs21":
    /*!****************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/base-information/base-information.component.css ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hs21(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "JszA":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-parts/way-of-obtaining/way-of-obtaining.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JszA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<hr>\r\n<br>\r\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\r\n  <mat-form-field>\r\n    <mat-label>Sposób pozyskania</mat-label>\r\n    <mat-select [formControl]=\"wayControl\" [(ngModel)]=\"this.wayOfObtaining\"  required>\r\n      <mat-option>--</mat-option>\r\n      <mat-option *ngFor=\"let way of ways\" [value]=\"way.value\">\r\n        {{way.viewValue}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-error *ngIf=\"wayControl.hasError('required')\">wybierz</mat-error>\r\n    <mat-hint>{{wayControl.value?.viewValue}}</mat-hint>\r\n  </mat-form-field>\r\n  <div *ngIf=\"this.wayOfObtaining=='RECOMENDATION'\">\r\n    <label for=\"recommending\">Rekomendujący</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"legal-form\"  [(ngModel)]=\"this.recommending\" name=\"recommending\"  id=\"recommending\">\r\n  </div>\r\n\r\n</div>\r\n";
      /***/
    },

    /***/
    "K4W3":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/add-contact/add-contact.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K4W3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Dodaj kontakt</h2>\r\n<br>\r\n<h5>Rodzaj kontaktu</h5>\r\n<br>\r\n<form (ngSubmit)=\"onSubmit()\"  class=\"mat-form-field-appearance-legacy\" >\r\n<mat-radio-group aria-label=\"Select an option\" >\r\n\r\n  <mat-radio-button value=\"person\" checked (click)=\"isShow='PERSON'\">Osoba fizyczna</mat-radio-button>\r\n  <mat-radio-button value=\"company\" (click)=\"isShow='COMPANY'\">Firma</mat-radio-button>\r\n</mat-radio-group>\r\n\r\n<div class=\"example-container\">\r\n  <app-person-general-informations #person *ngIf=\"isShow == 'PERSON'\" ></app-person-general-informations>\r\n  <app-company-general-informations #company *ngIf=\"isShow == 'COMPANY'\"></app-company-general-informations>\r\n  <app-base-information #baseInformation></app-base-information>\r\n\r\n  <app-address #address></app-address>\r\n  <app-way-of-obtaining #wayOfObtainingComponent></app-way-of-obtaining>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n  <div id=\"submit\">\r\n    <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"save()\">Zapisz</button>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "Kkiu":
    /*!*******************************************************!*\
      !*** ./src/app/contacts/services/employee.service.ts ***!
      \*******************************************************/

    /*! exports provided: EmployeeService, Employee */

    /***/
    function Kkiu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Employee", function () {
        return Employee;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(httpClient) {
          _classCallCheck(this, EmployeeService);

          this.httpClient = httpClient;
          this.api = 'http://localhost:8075';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(EmployeeService, [{
          key: "addEmployee",
          value: function addEmployee(employee) {
            return this.httpClient.post(this.api + '/employees', employee);
          }
        }, {
          key: "getEmployeesList",
          value: function getEmployeesList() {
            return this.httpClient.get(this.api + '/employees');
          }
        }, {
          key: "getEmployeesByCompany",
          value: function getEmployeesByCompany(companyId) {
            return this.httpClient.get(this.api + '/employeesList/' + companyId);
          }
        }, {
          key: "deleteEmployee",
          value: function deleteEmployee(id) {
            return this.httpClient["delete"](this.api + '/employees/' + id);
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EmployeeService);

      var Employee = function Employee() {
        _classCallCheck(this, Employee);
      };
      /***/

    },

    /***/
    "Lx9E":
    /*!**********************************************************************************************!*\
      !*** ./src/app/details/details-company/employees/employees-list/employees-list.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: EmployeesListComponent */

    /***/
    function Lx9E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeesListComponent", function () {
        return EmployeesListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_employees_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./employees-list.component.html */
      "c58a");
      /* harmony import */


      var _employees_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employees-list.component.css */
      "p5Y/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../contacts/services/employee.service */
      "Kkiu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../contacts/services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../add-employees/add-employees.component */
      "5n9c");
      /* harmony import */


      var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../edit-employee/edit-employee.component */
      "4ygd");

      var EmployeesListComponent = /*#__PURE__*/function () {
        function EmployeesListComponent(employeeService, contactService, router, route, dialog) {
          _classCallCheck(this, EmployeesListComponent);

          this.employeeService = employeeService;
          this.contactService = contactService;
          this.router = router;
          this.route = route;
          this.dialog = dialog;
        } // () {
        // }
        // tslint:disable-next-line:use-lifecycle-interface


        _createClass(EmployeesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            var id = null;
            this.route.queryParams.subscribe(function (params) {
              return id = params.id;
            });

            if (null != id) {
              this.contactService.getContactId(id).subscribe(function (res) {
                _this3.contact = res[0];
              });
            }

            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            this.employees = this.employeeService.getEmployeesByCompany(this.contact.company.id);
          }
        }, {
          key: "deleteEmployee",
          value: function deleteEmployee(id) {
            var _this4 = this;

            this.employeeService.deleteEmployee(id).subscribe(function (data) {
              console.log(data);

              _this4.reloadData();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "editEmployee",
          value: function editEmployee(employee) {
            var _this5 = this;

            var dialogRef = this.dialog.open(_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_9__["EditEmployeeComponent"], {
              width: '700px',
              height: '600px',
              data: {
                employee: employee
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this5.reloadData();
            });
          }
        }, {
          key: "addEmployee",
          value: function addEmployee() {
            var _this6 = this;

            var dialogRef = this.dialog.open(_add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_8__["AddEmployeesComponent"], {
              width: '700px',
              height: '600px',
              data: {
                company: this.contact.company
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              _this6.reloadData();
            });
          }
        }, {
          key: "getStatus",
          value: function getStatus(employee) {
            if (employee.active) {
              return 'Aktywny';
            } else {
              return 'Nieaktywny';
            }
          }
        }]);

        return EmployeesListComponent;
      }();

      EmployeesListComponent.ctorParameters = function () {
        return [{
          type: _contacts_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
        }, {
          type: _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      };

      EmployeesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employees-list',
        template: _raw_loader_employees_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employees_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmployeesListComponent); // export class SetStatus {
      //
      //   constructor(public dialogRef: MatDialogRef <EmployeesListComponent>) {
      //
      //   }
      //
      // }

      /***/
    },

    /***/
    "MOmu":
    /*!**********************************************************************!*\
      !*** ./src/app/contacts/contact-parts/address/address.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function MOmu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-form-field{\r\n  width: 700px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJhZGRyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "P+GB":
    /*!***********************************************************************!*\
      !*** ./src/app/details/details-company/summary/summary.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function PGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#left-position{\r\n  float: left;\r\n  width: 500px;\r\n}\r\n\r\n#right-position{\r\n  float: right;\r\n  width: 500px;\r\n  margin-right: 100px;\r\n}\r\n\r\n#bottom-position{\r\n  clear: both;\r\n}\r\n\r\nlabel{\r\n  text-align: center;\r\n}\r\n\r\n.label-div{\r\n  text-align: left;\r\n}\r\n\r\nbutton{\r\n  float: right;\r\n}\r\n\r\n.adress-style{\r\n  width: 800px;\r\n}\r\n\r\nhr{\r\n  width: 100%;\r\n}\r\n\r\nh4{\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVmdC1wb3NpdGlvbntcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbiNyaWdodC1wb3NpdGlvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbiNib3R0b20tcG9zaXRpb257XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxubGFiZWx7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sYWJlbC1kaXZ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5idXR0b257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYWRyZXNzLXN0eWxle1xyXG4gIHdpZHRoOiA4MDBweDtcclxufVxyXG5ocntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "PxUB":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details-company/details-company.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PxUB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"mat-tab-group\">\r\n  <mat-tab-group class=\"details-group\">\r\n    <mat-tab label=\"Podsumowanie\" class=\"tabs\"><br><app-summary></app-summary></mat-tab>\r\n    <mat-tab label=\"Pracownicy\" class=\"tabs\"><br><app-employees-list></app-employees-list></mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "Pzrx":
    /*!****************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/way-of-obtaining/way-of-obtaining.component.css ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pzrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXktb2Ytb2J0YWluaW5nLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "QQtt":
    /*!***************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/way-of-obtaining/way-of-obtaining.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: WayOfObtainingComponent */

    /***/
    function QQtt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WayOfObtainingComponent", function () {
        return WayOfObtainingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_way_of_obtaining_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./way-of-obtaining.component.html */
      "JszA");
      /* harmony import */


      var _way_of_obtaining_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./way-of-obtaining.component.css */
      "Pzrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var WayOfObtainingComponent = /*#__PURE__*/function () {
        function WayOfObtainingComponent() {
          _classCallCheck(this, WayOfObtainingComponent);

          this.submitted = false;
          this.wayControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
          this.ways = [{
            value: 'RECOMENDATION',
            viewValue: 'Rekomendacja'
          }, {
            value: 'CONFERENCE_OR_TRAINING',
            viewValue: 'konferencja i szkolenie'
          }, {
            value: 'SOCIAL_MEDIA',
            viewValue: 'media społęcznościowe'
          }, {
            value: 'WWWW',
            viewValue: 'strona www'
          }];
        }

        _createClass(WayOfObtainingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WayOfObtainingComponent;
      }();

      WayOfObtainingComponent.ctorParameters = function () {
        return [];
      };

      WayOfObtainingComponent.propDecorators = {
        wayOfObtaining: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        recommending: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      WayOfObtainingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-way-of-obtaining',
        template: _raw_loader_way_of_obtaining_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_way_of_obtaining_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WayOfObtainingComponent);
      /***/
    },

    /***/
    "RWRO":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-parts/company-general-informations/company-general-information.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RWRO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<hr>\r\n<div [hidden]=\"submitted\" style=\"width: 400px;\" [formGroup]=\"companyForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Nazwa firmy</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"companyy.name\" name=\"name\" formControlName=\"name\">\r\n\r\n\r\n      <div *ngIf=\"!companyForm.get('name').valid && companyForm.get('name').touched\" style=\"color:red\">\r\n        Nazwa firmy jest wymagana!\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"nip\">NIP</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"nip\" [(ngModel)]=\"companyy.nip\" name=\"nip\" formControlName=\"nip\">\r\n    </div>\r\n\r\n  <div *ngIf=\"!companyForm.get('nip').valid && companyForm.get('nip').touched\" style=\"color:red\">\r\n     NIP jest wymagany, musi być w formie: XXXXXXXXXX\r\n  </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"regon\">Regon</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"regon\" [(ngModel)]=\"companyy.regon\" name=\"regon\" formControlName=\"regon\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"krs\">KRS</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"krs\" [(ngModel)]=\"companyy.krs\" name=\"krs\" formControlName=\"krs\">\r\n    </div>\r\n\r\n  <div class=\"form-group\"  >\r\n  <mat-form-field>\r\n    <mat-label>Forma prawna</mat-label>\r\n    <mat-select  [(ngModel)]=\"companyy.legalForm\"  formControlName=\"legalForm\">\r\n      <mat-option>--</mat-option>\r\n      <mat-option *ngFor=\"let form of forms\" [value]=\"form.value\">\r\n        {{form.viewValue}}\r\n      </mat-option>\r\n    </mat-select>\r\n </mat-form-field>\r\n    <div *ngIf=\"companyy.legalForm=='OTHER'\">\r\n      <label for=\"legal-form-other\">Inna forma prawna</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyy.legalFormOther\" name=\"legal-form-other\" id=\"legal-form-other\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angular-app';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "W4FU":
    /*!********************************************************************!*\
      !*** ./src/app/details/details-person/details-person.component.ts ***!
      \********************************************************************/

    /*! exports provided: DetailsPersonComponent */

    /***/
    function W4FU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPersonComponent", function () {
        return DetailsPersonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_details_person_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./details-person.component.html */
      "BE7S");
      /* harmony import */


      var _details_person_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./details-person.component.css */
      "vUt5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../contacts/services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DetailsPersonComponent = /*#__PURE__*/function () {
        function DetailsPersonComponent(route, router, contactService) {
          _classCallCheck(this, DetailsPersonComponent);

          this.route = route;
          this.router = router;
          this.contactService = contactService;
          this.addresses = [];
        }

        _createClass(DetailsPersonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.contact = new _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
            var id = null;
            this.route.queryParams.subscribe(function (params) {
              return id = params.id;
            });

            if (null != id) {
              this.contactService.getContactId(id).subscribe(function (res) {
                _this7.contact = res[0];
              });
            }
          }
        }, {
          key: "getRouteLink",
          value: function getRouteLink(contact) {
            return '/edycja_osoba_fizyczna';
          }
        }]);

        return DetailsPersonComponent;
      }();

      DetailsPersonComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
        }];
      };

      DetailsPersonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details-person',
        template: _raw_loader_details_person_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_person_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailsPersonComponent);
      /***/
    },

    /***/
    "W7q8":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/company-general-informations/company-general-information.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CompanyGeneralInformationComponent */

    /***/
    function W7q8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyGeneralInformationComponent", function () {
        return CompanyGeneralInformationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_company_general_information_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./company-general-information.component.html */
      "RWRO");
      /* harmony import */


      var _company_general_information_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-general-information.component.css */
      "2Xvf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/contact.service */
      "nxQP");
      /* harmony import */


      var _services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/company.service */
      "hb9O");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CompanyGeneralInformationComponent = /*#__PURE__*/function () {
        function CompanyGeneralInformationComponent(companyService, router) {
          _classCallCheck(this, CompanyGeneralInformationComponent);

          this.companyService = companyService;
          this.router = router;
          this.companyy = new _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["Company"]();
          this.submitted = false;
          this.forms = [{
            value: 'STOCK_COMPANY',
            viewValue: 'Spółka akcyja'
          }, {
            value: 'PARTNERSHIP_COMPANY',
            viewValue: 'Spółka cywilna'
          }, {
            value: 'SLAW_COMPANY',
            viewValue: 'Spółka prawna'
          }, {
            value: 'LIMITED_COMPANY',
            viewValue: 'Spółka zoo'
          }, {
            value: 'OTHER',
            viewValue: 'Inne'
          }];
        }

        _createClass(CompanyGeneralInformationComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/kontakt']);
          } // tslint:disable-next-line:use-lifecycle-interface

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            // @ts-ignore
            this.companyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              nip: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]{10}'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
              regon: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
              krs: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
              legalForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
            });
          }
        }]);

        return CompanyGeneralInformationComponent;
      }();

      CompanyGeneralInformationComponent.ctorParameters = function () {
        return [{
          type: _services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      CompanyGeneralInformationComponent.propDecorators = {
        companyForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        companyy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CompanyGeneralInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-company-general-informations',
        template: _raw_loader_company_general_information_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_general_information_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], CompanyGeneralInformationComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "iZNs");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "31NI");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "j14s");
      /* harmony import */


      var _contacts_contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./contacts/contact-parts/address/address.component */
      "hiZa");
      /* harmony import */


      var _contacts_contact_parts_company_general_informations_company_general_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contacts/contact-parts/company-general-informations/company-general-information.component */
      "W7q8");
      /* harmony import */


      var _contacts_contact_parts_person_general_informations_person_general_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./contacts/contact-parts/person-general-informations/person-general-information.component */
      "emRH");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _contacts_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./contacts/add-contact/add-contact.component */
      "s79x");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _contacts_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./contacts/edit-company/edit-company.component */
      "34b5");
      /* harmony import */


      var _contacts_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./contacts/edit-person/edit-person.component */
      "6uOf");
      /* harmony import */


      var _details_details_company_details_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./details/details-company/details-company.component */
      "xsz7");
      /* harmony import */


      var _details_details_person_details_person_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./details/details-person/details-person.component */
      "W4FU");
      /* harmony import */


      var _details_details_company_employees_add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./details/details-company/employees/add-employees/add-employees.component */
      "5n9c");
      /* harmony import */


      var _details_details_company_employees_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./details/details-company/employees/employees-list/employees-list.component */
      "Lx9E");
      /* harmony import */


      var _details_details_company_summary_summary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./details/details-company/summary/summary.component */
      "egDM");
      /* harmony import */


      var _details_details_company_employees_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./details/details-company/employees/edit-employee/edit-employee.component */
      "4ygd");
      /* harmony import */


      var _contacts_contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./contacts/contact-parts/way-of-obtaining/way-of-obtaining.component */
      "QQtt");
      /* harmony import */


      var _contacts_contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./contacts/contact-parts/base-information/base-information.component */
      "hExM"); // import {AddContactComponent} from "./add-contact/add-contact.component";
      // import {Router, RouterModule, Routes} from "@angular/FormsModule
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      // const appRoutes :Routes =[
      //   {
      //     path: 'kontakty',
      //     component:ContactsComponent
      //   },
      //   {
      //     path: 'dodaj_kontakt',
      //     component: AddContactComponent
      //   }
      // ];


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], _contacts_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_14__["AddContactComponent"], _contacts_contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_10__["AddressComponent"], _contacts_contact_parts_company_general_informations_company_general_information_component__WEBPACK_IMPORTED_MODULE_11__["CompanyGeneralInformationComponent"], _contacts_contact_parts_person_general_informations_person_general_information_component__WEBPACK_IMPORTED_MODULE_12__["PersonGeneralInformationComponent"], _contacts_contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_24__["WayOfObtainingComponent"], _contacts_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_16__["EditCompanyComponent"], _contacts_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_17__["EditPersonComponent"], _details_details_company_details_company_component__WEBPACK_IMPORTED_MODULE_18__["DetailsCompanyComponent"], _details_details_person_details_person_component__WEBPACK_IMPORTED_MODULE_19__["DetailsPersonComponent"], _details_details_company_employees_add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_20__["AddEmployeesComponent"], _details_details_company_employees_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_21__["EmployeesListComponent"], _details_details_company_summary_summary_component__WEBPACK_IMPORTED_MODULE_22__["SummaryComponent"], _details_details_company_employees_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_23__["EditEmployeeComponent"], _contacts_contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_25__["BaseInformationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["_MatMenuDirectivesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]],
        exports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"]],
        providers: [// {
          //   provide: MAT_RADIO_DEFAULT_OPTIONS,
          //   useValue: { color: 'accent' },
          // }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "c58a":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details-company/employees/employees-list/employees-list.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c58a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"panel-body\">\r\n  <h4>Lista pracowników</h4>\r\n  <br>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th>Imię</th>\r\n      <th>Nazwisko</th>\r\n      <th>Stanowisko</th>\r\n      <th>Telefon</th>\r\n      <th>Status</th>\r\n      <th>Akcje</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n    <tr *ngFor=\"let employee of employees | async\">\r\n      <td>{{employee.firstName}}</td>\r\n      <td>{{employee.lastName}}</td>\r\n      <td>{{employee.position}}</td>\r\n      <td>{{employee.phoneNumber}}</td>\r\n      <td id=\"hover-contact\" >{{getStatus(employee)}}</td>\r\n      <td>\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example create-black icon\" (click)=\"editEmployee(employee)\" class=\"hover-icons\">create</mat-icon>\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example close-black icon\" (click)=\"deleteEmployee(employee.id)\" class=\"hover-icons\">close</mat-icon>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n <button  mat-raised-button class=\"add new empoyee\" (click)=\"addEmployee()\">Dodaj</button>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "cpUn":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details-company/employees/edit-employee/edit-employee.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cpUn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-dialog-content>\r\n  <h3>Edytuj pracownika</h3>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n    <div class=\"container\">\r\n      <!--Imię-->\r\n      <div class=\"form-group\">\r\n        <mat-label for=\"firstName\">Imię</mat-label>\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"employee.firstName\" name=\"firstName\"  >\r\n      </div>\r\n      <!--Nazwisko-->\r\n      <div class=\"form-group\">\r\n        <mat-label for=\"lastName\">Nazwisko</mat-label>\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"employee.lastName\" name=\"lastName\" >\r\n      </div>\r\n      <!--    Stanowisko-->\r\n      <div class=\"form-group\">\r\n        <mat-label for=\"position\">Stanowisko</mat-label>\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"position\" required [(ngModel)]=\"employee.position\" name=\"position\"/>\r\n      </div>\r\n      <!--Telefon-->\r\n      <div class=\"form-group\">\r\n        <mat-label for=\"phoneNumber\">Telefon</mat-label>\r\n        <input matInput type=\"text\" class=\"form-control\" id=\"phoneNumber\" required [(ngModel)]=\"employee.phoneNumber\" name=\"phoneNumber\" >\r\n      </div>\r\n      <!--   Status-->\r\n      <div class=\"form-group\">\r\n        <mat-label for=\"status\">Status</mat-label>\r\n        <input matInput type=\"checkbox\" class=\"form-control\" id=\"status\" required [(ngModel)]=\"employee.active\" name=\"status\"/>\r\n      </div>\r\n\r\n    </div>\r\n<div class=\"mat-button\">\r\n  <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"save()\">Zapisz</button>\r\n</div>\r\n\r\n</mat-dialog-actions>\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "cqJa":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-parts/address/address.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cqJa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"person-form\" style=\"width: 400px;\" [formGroup]=\"addressForm\">\r\n  <hr>\r\n  <h4>Adres:</h4>\r\n  <br>\r\n  <div class=\"mat-form-field\">\r\n    <li *ngFor=\"let address of addresses\" style=\"list-style-type: none\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Nazwa typu adresu</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\"  [(ngModel)]=\"address.name\" name=\"name\" formControlName=\"nameAddress\">\r\n        </div>\r\n  <div >\r\n        <div class=\"form-group\" style=\"float: left; margin-right: 10px\">\r\n          <label for=\"street\" >Ulica</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"street\" [(ngModel)]=\"address.street\" name=\"street\" formControlName=\"street\">\r\n        </div>\r\n\r\n        <div class=\"form-group\" style=\"float: left; margin-right: 10px\">\r\n          <label for=\"houseNumber\">Nr domu</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"houseNumber\"  [(ngModel)]=\"address.houseNumber\" name=\"houseNumber\" formControlName=\"houseNumber\">\r\n        </div>\r\n\r\n        <div class=\"form-group\" style=\"float: right\">\r\n          <label for=\"flatNumber\">Nr mieszkania</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"flatNumber\" [(ngModel)]=\"address.flatNumber\" name=\"apartmentNumber\" formControlName=\"apartmentNumber\">\r\n\r\n        </div>\r\n  </div>\r\n     <div class=\"mat-form-field\">\r\n        <div id=\"address\">\r\n          <div class=\"form-group\" style=\"float: left; margin-right: 10px; width: 30%\">\r\n            <label for=\"zipCode\">Kod pocztowy</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"zipCode\" [(ngModel)]=\"address.zipCode\" name=\"zipCode\" formControlName=\"zipCode\">\r\n            <div *ngIf=\"!addressForm.get('zipCode').valid && addressForm.get('zipCode').touched\" style=\"color:red\">\r\n              Podaj poprawny kod pocztowy w formie XX-XXX\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\" style=\"float: right; width: 50%\">\r\n            <label for=\"city\">Miasto</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"city\"  [(ngModel)]=\"address.city\" name=\"city\" formControlName=\"city\"/>\r\n          </div>\r\n        </div>\r\n  </div>\r\n\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" [disabled]=\"!canDeleteAddress()\" (click)=\"deleteAddress(address)\" style=\"float: right\">Usuń</button>\r\n    </li>\r\n    <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"newAddress()\" style=\"float: right; margin-right: 10px\" >Dodaj kolejny adres</button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "d50X":
    /*!*********************************************************************************************!*\
      !*** ./src/app/details/details-company/employees/edit-employee/edit-employee.component.css ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function d50X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "egDM":
    /*!**********************************************************************!*\
      !*** ./src/app/details/details-company/summary/summary.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SummaryComponent */

    /***/
    function egDM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
        return SummaryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_summary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./summary.component.html */
      "+Idf");
      /* harmony import */


      var _summary_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./summary.component.css */
      "P+GB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../contacts/services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SummaryComponent = /*#__PURE__*/function () {
        function SummaryComponent(route, router, contactService) {
          _classCallCheck(this, SummaryComponent);

          this.route = route;
          this.router = router;
          this.contactService = contactService;
          this.ways = [{
            value: 'RECOMENDATION',
            viewValue: 'Rekomendacja'
          }, {
            value: 'CONFERENCE_OR_TRAINING',
            viewValue: 'konferencja i szkolenie'
          }, {
            value: 'SOCIAL_MEDIA',
            viewValue: 'media społęcznościowe'
          }, {
            value: 'WWWW',
            viewValue: 'strona www'
          }];
          this.forms = [{
            value: 'STOCK_COMPANY',
            viewValue: 'Spółka akcyja'
          }, {
            value: 'PARTNERSHIP_COMPANY',
            viewValue: 'Spółka cywilna'
          }, {
            value: 'SLAW_COMPANY',
            viewValue: 'Spółka prawna'
          }, {
            value: 'LIMITED_COMPANY',
            viewValue: 'Spółka zoo'
          }, {
            value: 'OTHER',
            viewValue: 'Inne'
          }];
        }

        _createClass(SummaryComponent, [{
          key: "showAll",
          value: function showAll() {
            this.router.navigate(['/edycja_firma']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contact = new _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
            this.contact.company = new _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["Company"]();
          } // tslint:disable-next-line:use-lifecycle-interface

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this8 = this;

            var id = null;
            this.route.queryParams.subscribe(function (params) {
              return id = params.id;
            });

            if (null != id) {
              this.contactService.getContactId(id).subscribe(function (res) {
                _this8.contact = res[0];
              });
            }
          }
        }, {
          key: "getRouteLink",
          value: function getRouteLink(contact) {
            return '/edycja_firma';
          }
        }, {
          key: "getWay",
          value: function getWay() {
            var _this9 = this;

            var result = this.ways.filter(function (s) {
              return s.value === _this9.contact.wayOfObtaining;
            }).pop(); // tslint:disable-next-line:triple-equals

            return result != undefined ? result.viewValue : '';
          }
        }, {
          key: "getForms",
          value: function getForms() {
            var _this10 = this;

            var result = this.forms.filter(function (s) {
              return s.value === _this10.contact.company.legalForm;
            }).pop(); // tslint:disable-next-line:triple-equals

            return result != undefined ? result.viewValue : '';
          }
        }]);

        return SummaryComponent;
      }();

      SummaryComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _contacts_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
        }];
      };

      SummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-summary',
        template: _raw_loader_summary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_summary_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SummaryComponent);
      /***/
    },

    /***/
    "emRH":
    /*!************************************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/person-general-informations/person-general-information.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: PersonGeneralInformationComponent */

    /***/
    function emRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonGeneralInformationComponent", function () {
        return PersonGeneralInformationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_person_general_information_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./person-general-information.component.html */
      "6VWz");
      /* harmony import */


      var _person_general_information_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./person-general-information.component.css */
      "1dgC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var PersonGeneralInformationComponent = /*#__PURE__*/function () {
        function PersonGeneralInformationComponent() {
          _classCallCheck(this, PersonGeneralInformationComponent);

          this.person = new _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["Person"]();
          this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
          this.submitted = false;
        } // tslint:disable-next-line:use-lifecycle-interface


        _createClass(PersonGeneralInformationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            // @ts-ignore
            this.personForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
              surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              pesel: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[0-9]{11}'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
            });
          }
        }]);

        return PersonGeneralInformationComponent;
      }();

      PersonGeneralInformationComponent.ctorParameters = function () {
        return [];
      };

      PersonGeneralInformationComponent.propDecorators = {
        personForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        person: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PersonGeneralInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-person-general-informations',
        template: _raw_loader_person_general_information_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_person_general_information_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], PersonGeneralInformationComponent);
      /***/
    },

    /***/
    "fNd/":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/edit-company/edit-company.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3 style=\"text-align: center\">Edycja</h3>\r\n<form (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"container\">\r\n    <app-company-general-informations #companya></app-company-general-informations>\r\n    <app-base-information #baseInformation></app-base-information>\r\n\r\n    <app-address #address></app-address>\r\n    <app-way-of-obtaining #wayOfObtaining></app-way-of-obtaining>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div id=\"submit\">\r\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"save()\" >Zapisz</button>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "hExM":
    /*!***************************************************************************************!*\
      !*** ./src/app/contacts/contact-parts/base-information/base-information.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: BaseInformationComponent */

    /***/
    function hExM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseInformationComponent", function () {
        return BaseInformationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_base_information_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./base-information.component.html */
      "Be/m");
      /* harmony import */


      var _base_information_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./base-information.component.css */
      "Hs21");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/contact.service */
      "nxQP");

      var BaseInformationComponent = /*#__PURE__*/function () {
        function BaseInformationComponent() {
          _classCallCheck(this, BaseInformationComponent);

          this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        }

        _createClass(BaseInformationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
            this.initializeForm();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.baseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              additionalInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
            });
          }
        }]);

        return BaseInformationComponent;
      }();

      BaseInformationComponent.ctorParameters = function () {
        return [];
      };

      BaseInformationComponent.propDecorators = {
        baseForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        contact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      BaseInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-base-information',
        template: _raw_loader_base_information_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_base_information_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BaseInformationComponent);
      /***/
    },

    /***/
    "hb9O":
    /*!******************************************************!*\
      !*** ./src/app/contacts/services/company.service.ts ***!
      \******************************************************/

    /*! exports provided: CompanyService */

    /***/
    function hb9O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CompanyService = /*#__PURE__*/function () {
        function CompanyService(http) {
          _classCallCheck(this, CompanyService);

          this.http = http;
          this.baseUrl = 'http://localhost:8075/kontakty';
        }

        _createClass(CompanyService, [{
          key: "addCompany",
          value: function addCompany(company) {
            return this.http.post("".concat(this.baseUrl), company);
          }
        }]);

        return CompanyService;
      }();

      CompanyService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CompanyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CompanyService);
      /***/
    },

    /***/
    "hiZa":
    /*!*********************************************************************!*\
      !*** ./src/app/contacts/contact-parts/address/address.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AddressComponent */

    /***/
    function hiZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressComponent", function () {
        return AddressComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_address_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./address.component.html */
      "cqJa");
      /* harmony import */


      var _address_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./address.component.css */
      "MOmu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/address.service */
      "zWBM");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddressComponent = /*#__PURE__*/function () {
        function AddressComponent(addressService, router) {
          _classCallCheck(this, AddressComponent);

          this.addressService = addressService;
          this.router = router;
          this.addresses = [];
        }

        _createClass(AddressComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addresses.push(new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Address"]());
            this.initializeForm();
          }
        }, {
          key: "newAddress",
          value: function newAddress() {
            this.addresses.push(new _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["Address"]());
          }
        }, {
          key: "canDeleteAddress",
          value: function canDeleteAddress() {
            return this.addresses.length > 1;
          }
        }, {
          key: "deleteAddress",
          value: function deleteAddress(address) {
            var idx = this.addresses.indexOf(address);
            this.addresses.splice(idx, 1);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            // @ts-ignore
            this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              nameAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
              street: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
              houseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
              apartmentNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
              zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[0-9]{2}\-[0-9]{3}')),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null)
            });
          }
        }]);

        return AddressComponent;
      }();

      AddressComponent.ctorParameters = function () {
        return [{
          type: _services_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AddressComponent.propDecorators = {
        addressForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        addresses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-address',
        template: _raw_loader_address_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_address_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], AddressComponent);
      /***/
    },

    /***/
    "iZNs":
    /*!************************************************!*\
      !*** ./src/app/contacts/contacts.component.ts ***!
      \************************************************/

    /*! exports provided: ContactsComponent */

    /***/
    function iZNs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
        return ContactsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contacts.component.html */
      "w019");
      /* harmony import */


      var _contacts_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contacts.component.css */
      "5OFU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/contact.service */
      "nxQP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ContactsComponent = /*#__PURE__*/function () {
        function ContactsComponent(contactRestApi, router) {
          _classCallCheck(this, ContactsComponent);

          this.contactRestApi = contactRestApi;
          this.router = router;
          this.items = [];
          this.filteredItems = [];
        }

        _createClass(ContactsComponent, [{
          key: "onChangePage",
          value: function onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "getContactName",
          value: function getContactName(contact) {
            if (null != contact.company) {
              return contact.company.name;
            } else if (null != contact.person) {
              return contact.person.firstName + ' ' + contact.person.lastName;
            }
          }
        }, {
          key: "getContactType",
          value: function getContactType(contact) {
            if (null != contact.company) {
              return 'Firma';
            } else if (null != contact.person) {
              return 'Osoba fizyczna';
            }
          }
        }, {
          key: "getEmail",
          value: function getEmail(contact) {
            return contact.email;
          }
        }, {
          key: "getPhoneNumber",
          value: function getPhoneNumber(contact) {
            return contact.phoneNumber;
          }
        }, {
          key: "getRouteLink",
          value: function getRouteLink(contact) {
            if (null != contact.company) {
              return '/edycja_firma';
            } else if (null != contact.person) {
              return '/edycja_osoba_fizyczna';
            }
          }
        }, {
          key: "showDetails",
          value: function showDetails(contact) {
            if (null != contact.company) {
              return '/szczegoly_kontaktu_firma';
            } else if (null != contact.person) {
              return '/szczegoly_kontaktu';
            }
          }
        }, {
          key: "deleteContact",
          value: function deleteContact(id) {
            var _this11 = this;

            this.contactRestApi.deleteContact(id).subscribe(function (data) {
              console.log(data);

              _this11.reloadData();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this12 = this;

            this.contactRestApi.getContactsList().subscribe(function (con) {
              _this12.items = con;
              _this12.filteredItems = con;
            });
          }
        }, {
          key: "filter",
          value: function filter() {
            this.filteredItems = this.filterValue !== undefined || this.filterValue !== '' ? this.doFilter(this.filterValue) : this.filteredItems;
          }
        }, {
          key: "doFilter",
          value: function doFilter(filterBy) {
            filterBy = filterBy.toLowerCase();
            return this.items.filter(function (contact) {
              return contact.email.toLowerCase().indexOf(filterBy) > -1;
            });
          }
        }]);

        return ContactsComponent;
      }();

      ContactsComponent.ctorParameters = function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ContactsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactsComponent);
      /***/
    },

    /***/
    "jw1z":
    /*!****************************************************************!*\
      !*** ./src/app/contacts/add-contact/add-contact.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function jw1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-radio-button ~ .mat-radio-button {\r\n  margin-left: 16px;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 400px;\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFkZC1jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuaDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "nxQP":
    /*!******************************************************!*\
      !*** ./src/app/contacts/services/contact.service.ts ***!
      \******************************************************/

    /*! exports provided: ContactService, Company, Person, Address, Contact */

    /***/
    function nxQP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return Company;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Person", function () {
        return Person;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Address", function () {
        return Address;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Contact", function () {
        return Contact;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./message.service */
      "vVC8");

      var ContactService = /*#__PURE__*/function () {
        function ContactService(httpClient, messageService) {
          _classCallCheck(this, ContactService);

          this.httpClient = httpClient;
          this.messageService = messageService;
          this.api = 'http://localhost:8075';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(ContactService, [{
          key: "getData",
          value: function getData() {
            return this.httpClient.get(this.api + '/contacts/');
          } //

        }, {
          key: "getContactId",
          value: function getContactId(id) {
            var url = this.api + '/contact/' + id;
            return this.httpClient.get(url);
          }
        }, {
          key: "addContact",
          value: function addContact(contact) {
            return this.httpClient.post(this.api + '/contacts/', contact);
          } // deleteContact(id: number): Observable<Contact> {
          //   return this.httpClient.delete<Contact>(this.api + '/contacts/');
          // }
          // @ts-ignore

        }, {
          key: "updateCompany",
          value: function updateCompany(id, value) {// return this.httpClient.put(`${this.baseUrl}/${id}`, value);
          } // @ts-ignore

        }, {
          key: "deleteCompany",
          value: function deleteCompany(id) {// return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
          } // @ts-ignore

        }, {
          key: "showCompanies",
          value: function showCompanies() {// return this.http.get(`${this.baseUrl}`);
          }
        }, {
          key: "log",
          value: function log(message) {
            this.messageService.add("HeroService: ".concat(message));
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var _this13 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this13.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
            };
          }
        }, {
          key: "getContactsList",
          value: function getContactsList() {
            return this.httpClient.get(this.api + '/contacts');
          }
        }, {
          key: "deleteContact",
          value: function deleteContact(id) {
            return this.httpClient["delete"](this.api + '/contacts/' + id);
          }
        }, {
          key: "deleteEmployee",
          value: function deleteEmployee(id) {
            return this.httpClient["delete"](this.api + '/employees/' + id);
          }
        }]);

        return ContactService;
      }();

      ContactService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }];
      };

      ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ContactService);

      var Company = function Company() {
        _classCallCheck(this, Company);
      };

      var Person = function Person() {
        _classCallCheck(this, Person);
      };

      var Address = function Address() {
        _classCallCheck(this, Address);
      };

      var Contact = function Contact() {
        _classCallCheck(this, Contact);
      }; // export class Employee {
      //   id: number;
      //   firstName: string;
      //   lastName: string;
      //   position: string;
      //   phoneNumber: number;
      //   isActive: string;
      //   company: Company;
      // }

      /***/

    },

    /***/
    "p5Y/":
    /*!***********************************************************************************************!*\
      !*** ./src/app/details/details-company/employees/employees-list/employees-list.component.css ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function p5Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hover-icons{\r\n  cursor: pointer;\r\n  margin-right: 20%;\r\n}\r\n\r\nbutton{\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImVtcGxveWVlcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXItaWNvbnN7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "ptbI":
    /*!*********************************************************************************************!*\
      !*** ./src/app/details/details-company/employees/add-employees/add-employees.component.css ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ptbI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "pvHq":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details-company/employees/add-employees/add-employees.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pvHq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-dialog-content>\r\n  <h3>Dodaj pracownika</h3>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n<div class=\"container\">\r\n\r\n  <div class=\"form-group\">\r\n    <mat-label for=\"firstName\">Imię</mat-label>\r\n    <input matInput type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"employee.firstName\" name=\"firstName\" >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <mat-label for=\"lastName\">Nazwisko</mat-label>\r\n    <input matInput type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"employee.lastName\" name=\"lastName\" >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <mat-label for=\"position\">Stanowisko</mat-label>\r\n    <input matInput type=\"text\" class=\"form-control\" id=\"position\" required [(ngModel)]=\"employee.position\" name=\"position\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <mat-label for=\"phoneNumber\">Telefon</mat-label>\r\n    <input matInput type=\"text\" class=\"form-control\" id=\"phoneNumber\" required [(ngModel)]=\"employee.phoneNumber\" name=\"phoneNumber\" >\r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"save()\">Zapisz</button>\r\n</div>\r\n</mat-dialog-actions>\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "s79x":
    /*!***************************************************************!*\
      !*** ./src/app/contacts/add-contact/add-contact.component.ts ***!
      \***************************************************************/

    /*! exports provided: AddContactComponent */

    /***/
    function s79x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContactComponent", function () {
        return AddContactComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-contact.component.html */
      "K4W3");
      /* harmony import */


      var _add_contact_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-contact.component.css */
      "jw1z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/contact.service */
      "nxQP");
      /* harmony import */


      var _contact_parts_person_general_informations_person_general_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../contact-parts/person-general-informations/person-general-information.component */
      "emRH");
      /* harmony import */


      var _contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../contact-parts/address/address.component */
      "hiZa");
      /* harmony import */


      var _contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../contact-parts/way-of-obtaining/way-of-obtaining.component */
      "QQtt");
      /* harmony import */


      var _contact_parts_company_general_informations_company_general_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../contact-parts/company-general-informations/company-general-information.component */
      "W7q8");
      /* harmony import */


      var _contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../contact-parts/base-information/base-information.component */
      "hExM");

      var AddContactComponent = /*#__PURE__*/function () {
        function AddContactComponent(contactService, router) {
          _classCallCheck(this, AddContactComponent);

          this.contactService = contactService;
          this.router = router;
          this.submitted = false;
          this.isShow = 'PERSON';
        }

        _createClass(AddContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "save",
          value: function save() {
            if (!this.isValid()) {
              this.markAsTouched();
              return;
            }

            this.contact = this.baseComponent.contact;

            if (this.isShow === 'PERSON') {
              this.contact.person = this.personComponent.person;
            } else if (this.isShow === 'COMPANY') {
              this.contact.company = this.companyComponent.companyy;
            }

            this.contact.wayOfObtaining = this.wayOfObtainingComponent.wayOfObtaining;
            this.contact.recommending = this.wayOfObtainingComponent.recommending;
            this.contact.addresses = this.addressComponent.addresses;
            this.contactService.addContact(this.contact).subscribe(function (data) {
              return console.log(data);
            }, function (error) {
              return console.log(error);
            });
            this.contact = new _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
            this.gotoList();
          }
        }, {
          key: "markAsTouched",
          value: function markAsTouched() {
            // tslint:disable-next-line:triple-equals
            if (this.companyComponent != undefined) {
              this.companyComponent.companyForm.markAllAsTouched();
            } // tslint:disable-next-line:triple-equals


            if (this.personComponent != undefined) {
              this.personComponent.personForm.markAllAsTouched();
            }

            this.addressComponent.addressForm.markAllAsTouched();
            this.baseComponent.baseForm.markAllAsTouched();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/kontakty']);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "isValid",
          value: function isValid() {
            var isValidCompanyOrPerson;

            if (this.isShow === 'PERSON') {
              isValidCompanyOrPerson = this.personComponent.personForm.valid;
            } else {
              isValidCompanyOrPerson = this.companyComponent.companyForm.valid;
            }

            return this.baseComponent.baseForm.valid && isValidCompanyOrPerson && this.addressComponent.addressForm.valid;
          }
        }]);

        return AddContactComponent;
      }();

      AddContactComponent.ctorParameters = function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AddContactComponent.propDecorators = {
        companyComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['company', {
            read: _contact_parts_company_general_informations_company_general_information_component__WEBPACK_IMPORTED_MODULE_9__["CompanyGeneralInformationComponent"]
          }]
        }],
        personComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['person', {
            read: _contact_parts_person_general_informations_person_general_information_component__WEBPACK_IMPORTED_MODULE_6__["PersonGeneralInformationComponent"]
          }]
        }],
        wayOfObtainingComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['wayOfObtainingComponent', {
            read: _contact_parts_way_of_obtaining_way_of_obtaining_component__WEBPACK_IMPORTED_MODULE_8__["WayOfObtainingComponent"]
          }]
        }],
        addressComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['address', {
            read: _contact_parts_address_address_component__WEBPACK_IMPORTED_MODULE_7__["AddressComponent"]
          }]
        }],
        baseComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['baseInformation', {
            read: _contact_parts_base_information_base_information_component__WEBPACK_IMPORTED_MODULE_10__["BaseInformationComponent"]
          }]
        }]
      };
      AddContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-contact',
        template: _raw_loader_add_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_contact_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddContactComponent);
      /***/
    },

    /***/
    "vUt5":
    /*!*********************************************************************!*\
      !*** ./src/app/details/details-person/details-person.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function vUt5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button{\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtcGVyc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiZGV0YWlscy1wZXJzb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "vVC8":
    /*!******************************************************!*\
      !*** ./src/app/contacts/services/message.service.ts ***!
      \******************************************************/

    /*! exports provided: MessageService */

    /***/
    function vVC8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessageService = /*#__PURE__*/function () {
        function MessageService() {
          _classCallCheck(this, MessageService);

          this.messages = [];
        }

        _createClass(MessageService, [{
          key: "add",
          value: function add(message) {
            this.messages.push(message);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.messages = [];
          }
        }]);

        return MessageService;
      }();

      MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MessageService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "iZNs");
      /* harmony import */


      var _contacts_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contacts/add-contact/add-contact.component */
      "s79x");
      /* harmony import */


      var _contacts_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contacts/edit-company/edit-company.component */
      "34b5");
      /* harmony import */


      var _contacts_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contacts/edit-person/edit-person.component */
      "6uOf");
      /* harmony import */


      var _details_details_person_details_person_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./details/details-person/details-person.component */
      "W4FU");
      /* harmony import */


      var _details_details_company_details_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./details/details-company/details-company.component */
      "xsz7");
      /* harmony import */


      var _details_details_company_employees_add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./details/details-company/employees/add-employees/add-employees.component */
      "5n9c");
      /* harmony import */


      var _details_details_company_employees_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./details/details-company/employees/employees-list/employees-list.component */
      "Lx9E");
      /* harmony import */


      var _details_details_company_employees_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./details/details-company/employees/edit-employee/edit-employee.component */
      "4ygd");

      var routes = [{
        path: '',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
      }, {
        path: 'kontakty',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
      }, {
        path: 'dodaj_kontakt',
        component: _contacts_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_4__["AddContactComponent"]
      }, {
        path: 'edycja_firma',
        component: _contacts_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_5__["EditCompanyComponent"]
      }, {
        path: 'edycja_osoba_fizyczna',
        component: _contacts_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_6__["EditPersonComponent"]
      }, {
        path: 'szczegoly_kontaktu',
        component: _details_details_person_details_person_component__WEBPACK_IMPORTED_MODULE_7__["DetailsPersonComponent"]
      }, {
        path: 'szczegoly_kontaktu_firma',
        component: _details_details_company_details_company_component__WEBPACK_IMPORTED_MODULE_8__["DetailsCompanyComponent"]
      }, {
        path: 'szczegoly_kontaktu_pracownicy',
        component: _details_details_company_employees_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesListComponent"]
      }, {
        path: 'dodaj_pracownika',
        component: _details_details_company_employees_add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_9__["AddEmployeesComponent"]
      }, {
        path: 'edycja_pracownik',
        component: _details_details_company_employees_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__["EditEmployeeComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "w019":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function w019(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Lista kontaktów</h2>\r\n\r\n<div><button mat-button-toggle-group class=\"add-contact-button\" routerLink=\"/dodaj_kontakt\">Dodaj</button></div>\r\n<br>\r\n<input type=\"text\" [(ngModel)]=\"filterValue\"/>\r\n<button type=\"button\" name=\"Filter\" (click)=\"filter()\">Filtruj</button>\r\n<div class=\"panel-body\">\r\n  <table class=\"table table-striped\" >\r\n    <thead>\r\n    <tr class=\"border-element\">\r\n      <th class=\"border-element\">Nazwa kontaktu</th>\r\n      <th class=\"border-element\">Rodzaj kontaktu</th>\r\n      <th class=\"border-element\">Email</th>\r\n      <th class=\"border-element\">Telefon</th>\r\n      <th class=\"border-element\">Akcje</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n    <tr *ngFor=\"let contact of filteredItems\">\r\n      <td id=\"hover-contact\" [routerLink]=\"showDetails(contact)\"\r\n          [queryParams]=\"{id: contact.id}\">{{getContactName(contact)}}</td>\r\n      <td>{{getContactType(contact)}}</td>\r\n      <td>{{getEmail(contact)}}</td>\r\n      <td>{{getPhoneNumber(contact)}}</td>\r\n      <td>\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example create-black icon\" [routerLink]=\"getRouteLink(contact)\"\r\n                  [queryParams]=\"{id: contact.id}\" class=\"hover-icons\">create\r\n        </mat-icon>\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example close-black icon\" (click)=\"deleteContact(contact.id)\"\r\n                  class=\"hover-icons\">close\r\n        </mat-icon>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n \r\n</div>\r\n";
      /***/
    },

    /***/
    "wyDg":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/edit-person/edit-person.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wyDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2 style=\"text-align: center\">Edycja</h2>\r\n\r\n<br>\r\n<form (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"container\">\r\n    <app-person-general-informations #person ></app-person-general-informations>\r\n    <app-base-information #baseInformation></app-base-information>\r\n\r\n    <app-address #address></app-address>\r\n    <app-way-of-obtaining #wayOfObtainingComponent></app-way-of-obtaining>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div id=\"submit\">\r\n    <button mat-button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\">Zapisz</button>\r\n  </div>\r\n</form>\r\n\r\n";
      /***/
    },

    /***/
    "xsz7":
    /*!**********************************************************************!*\
      !*** ./src/app/details/details-company/details-company.component.ts ***!
      \**********************************************************************/

    /*! exports provided: DetailsCompanyComponent */

    /***/
    function xsz7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsCompanyComponent", function () {
        return DetailsCompanyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_details_company_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./details-company.component.html */
      "PxUB");
      /* harmony import */


      var _details_company_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./details-company.component.css */
      "5wA8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DetailsCompanyComponent = /*#__PURE__*/function () {
        function DetailsCompanyComponent() {
          _classCallCheck(this, DetailsCompanyComponent);
        }

        _createClass(DetailsCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetailsCompanyComponent;
      }();

      DetailsCompanyComponent.ctorParameters = function () {
        return [];
      };

      DetailsCompanyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details-company',
        template: _raw_loader_details_company_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_company_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailsCompanyComponent);
      /***/
    },

    /***/
    "yATN":
    /*!****************************************************************!*\
      !*** ./src/app/contacts/edit-person/edit-person.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function yATN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr{\r\n  width: 100%;\r\n}\r\n.container{\r\n  width: 1000px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcGVyc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJlZGl0LXBlcnNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zWBM":
    /*!******************************************************!*\
      !*** ./src/app/contacts/services/address.service.ts ***!
      \******************************************************/

    /*! exports provided: AddressService */

    /***/
    function zWBM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressService", function () {
        return AddressService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AddressService = /*#__PURE__*/function () {
        function AddressService(http) {
          _classCallCheck(this, AddressService);

          this.http = http;
          this.baseUrl = 'http://localhost:8075/kontakty/employees';
        }

        _createClass(AddressService, [{
          key: "getAddressById",
          value: function getAddressById(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          }
        }, {
          key: "addAddress",
          value: function addAddress(address) {
            return this.http.post("".concat(this.baseUrl), address);
          }
        }, {
          key: "updateAddress",
          value: function updateAddress(id, value) {
            return this.http.put("".concat(this.baseUrl, "/").concat(id), value);
          }
        }, {
          key: "deleteAddress",
          value: function deleteAddress(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'text'
            });
          }
        }, {
          key: "showAddresses",
          value: function showAddresses() {
            return this.http.get("".concat(this.baseUrl));
          }
        }]);

        return AddressService;
      }();

      AddressService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AddressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AddressService);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map