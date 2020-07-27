(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-foo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AccountGroupCodes.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AccountGroupCodes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      msg: "Customer information",
      dataForm: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        account_groupcode_id: "",
        group_code: "",
        group_name: "",
        account_classification_id: ""
      }),
      account_groupcode: [],
      error_msg: ""
    };
  },
  methods: {
    addCustomer: function addCustomer() {
      $("#add_code_setup").modal("show");
      $(".modal-title").html('<i class="fa fa-plus-circle"></i> Group Code Setup');
    },
    submit: function submit() {
      var _this = this;

      this.dataForm.post("/create_group_code").then(function (_ref) {
        var data = _ref.data,
            status = _ref.status;

        if (data == "Success") {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Good job!", "Add successful", "success");
          $("#add_code_setup").modal("hide");

          _this.clearData();

          _this.getGroupCodes();
        } else {
          console.log(data);
        }
      })["catch"](function () {});
    },
    clearData: function clearData() {
      this.dataForm.account_groupcode_id = "";
      this.dataForm.group_code = "";
      this.dataForm.group_name = "";
      this.dataForm.account_classification_id = "";
    },
    closeModal: function closeModal() {
      this.clearData();
    },
    getGroupCodes: function getGroupCodes() {
      var _this2 = this;

      axios.get("/get_account_group_codes").then(function (response) {
        _this2.account_groupcode = response.data;

        if (Object.keys(_this2.account_groupcode).length) {
          setTimeout(function () {
            $("#AccountGroupTbl").DataTable();
          }, 500);
        }
      })["catch"]();
    },
    editGroupCode: function editGroupCode(GroupCodes) {
      $("#add_code_setup").modal("show");
      $(".modal-title").html('<i class="fa fa-plus-circle"></i> Edit Group Codes');
      this.dataForm.group_code = GroupCodes.group_code;
      this.dataForm.group_name = GroupCodes.group_name;
      this.dataForm.account_classification_id = GroupCodes.account_classification_id;
      this.dataForm.account_groupcode_id = GroupCodes.account_groupcode_id;
    },
    delete_data: function delete_data(id) {
      var _this3 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("/delete_group_codes/".concat(id)).then(function (_ref2) {
            var data = _ref2.data,
                status = _ref2.status;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Good job!", "Delete successful", "success");

            _this3.getGroupCodes();
          })["catch"](function (error) {});
        }
      });
    }
  },
  mounted: function mounted() {
    console.log("Component mounted.");
    this.getGroupCodes();
    $("#container").css("position", "relative");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCustomerSetup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddCustomerSetup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        account_name: "",
        acc_classification: "",
        acc_description: "",
        account_code: "",
        account_code2: "",
        account_code3: "",
        account_group_code: "",
        branch_description: "",
        acc_grp_name: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        address5: "",
        location_group_code: "",
        postal_address: "",
        selected: ""
      }),
      acc_group_name: "",
      options: [] // form.selected: ""

    };
  },
  methods: {
    btn_acc_code_act: function btn_acc_code_act() {
      var _this = this;

      var formData = new FormData();
      formData.append("account_groupcode_id", this.form.selected);
      axios.post("/get_account_details", formData).then(function (_ref) {
        var data = _ref.data,
            status = _ref.status;
        _this.acc_group_name = data.group_name;
        _this.form.acc_grp_name = data.group_name;
        _this.form.acc_classification = data.account_classification_id;
        _this.form.acc_description = data.group_name;
        _this.form.branch_description = data.group_name;
        _this.form.account_group_code = data.group_code;
      })["catch"](function (error) {});
    },
    populate: function populate() {
      var _this2 = this;

      axios.get("/api/persons/all").then(function (response) {
        // console.log(response.data);
        _this2.options = response.data;
        _this2.form = new vform__WEBPACK_IMPORTED_MODULE_1__["Form"](response.data); // this.form.account_group_name = response.account_group_name;

        setTimeout(function () {
          var selectDropDown = $("#slct_group_codes").select2();
          selectDropDown.on("select2:select", function (e) {
            var event = new Event("change");
            e.target.dispatchEvent(event);
          });
        }, 100);
      })["catch"](function (response) {
        console.log("error");
      });
    },
    submitBtn: function submitBtn() {
      var _this3 = this;

      $("#container").css("position", "sticky");
      this.form.location_group_code = $("#loc_group_code").val();
      this.form.address1 = $("#address1").val();
      this.form.postal_address = $("#postal_address").val();
      this.form.address5 = $("#address5").val();
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(function (result) {
        if (result.value) {
          _this3.form.post("/create_customeraccnt").then(function (_ref2) {
            var data = _ref2.data,
                status = _ref2.status;

            if (data == "Success") {
              setTimeout(function () {
                window.location.href = "/customer_masterfile";
              }, 500);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Good job!", "Add successful", "success");
            } else {
              // console.log(data);
              $.niftyNoty({
                type: "danger",
                icon: "pli-cross icon-2x",
                message: status,
                container: "floating",
                timer: 5000
              });
            }
          })["catch"](function (error) {
            $.niftyNoty({
              type: "danger",
              icon: "fa fa-exclamation-triangle",
              message: "Input fields are required.",
              container: "floating",
              timer: 5000
            });
          });
        } else {
          $.niftyNoty({
            type: "danger",
            icon: "pli-cross icon-2x",
            message: "Action has been canceled.",
            container: "floating",
            timer: 5000
          });
          $("#container").css("position", "relative");
        }
      });
    }
  },
  clearData: function clearData() {},
  mounted: function mounted() {
    $("#container").css("position", "relative");
    this.populate(); // $("#sbmtform").on("submit", function(e) {
    //   e.preventDefault();
    //   //ajax code here
    // });

    $("#submitform").on("click", function (e) {
      e.preventDefault();
    });
    setTimeout(function () {
      $("#loc_group_code").val("Bohol");
      $("#address1").val("Bohol");
      $("#address5").val("Region 7");
    }, 1300);
    setTimeout(function () {
      $("#slct_group_codes").select2();
    }, 300);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerMasterfileComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomerMasterfileComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customers: [],
      editCustomerDetails: null,
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        customer_id: '',
        status: ''
      }),
      isActive: 1
    };
  },
  methods: {
    getCustomers: function getCustomers() {
      var _this = this;

      axios.get('/getCustomers').then(function (response) {
        _this.customers = response.data;

        if (Object.keys(_this.customers).length) {
          setTimeout(function () {
            $('#tbl_customermasterfile').DataTable({
              responsive: true
            });
          }, 50);
        }
      })["catch"]();
    },
    editCustomer: function editCustomer(MgaCustomers) {
      this.$router.push('edit_customer/' + btoa(MgaCustomers.customer_id));
    },
    btn_activation: function btn_activation(id, status) {
      var _this2 = this;

      this.form.customer_id = id;
      this.form.status = status;
      this.form.post('/activate_customer').then(function (_ref) {
        var data = _ref.data;

        if (data.trim() == 'Success') {
          $('#tbl_customermasterfile').dataTable().fnDestroy();

          if (status == '1') {
            $.niftyNoty({
              type: 'info',
              icon: 'pli-cross icon-2x',
              message: 'Success it is now Active',
              container: 'floating',
              timer: 5000
            });
          } else {
            $.niftyNoty({
              type: 'info',
              icon: 'pli-cross icon-2x',
              message: 'Success it is now Inactive',
              container: 'floating',
              timer: 5000
            });
          }

          _this2.getCustomers();
        } else {
          if (data.trim() == 'Error') {
            if (status == '1') {
              $.niftyNoty({
                type: 'danger',
                icon: 'pli-cross icon-2x',
                message: 'Is already Active',
                container: 'floating',
                timer: 5000
              });
            } else {
              $.niftyNoty({
                type: 'danger',
                icon: 'pli-cross icon-2x',
                message: 'Is already Inactive',
                container: 'floating',
                timer: 5000
              });
            }
          }
        }
      })["catch"](function (error) {});
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
    this.getCustomers();
    $('#container').css('position', 'relative'); // $("#tbl_customermasterfile").DataTable({
    //     responsive: true
    // });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/** @format */
/* harmony default export */ __webpack_exports__["default"] = ({
  beforeCreate: function beforeCreate() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/getAuthUser');

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;

              if (data.type !== 'Admin') {
                location.replace('/dashboard1');
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    $('#all_users').DataTable();
    $('#supervisor_users').DataTable();
    $('#top_items').DataTable();
    $('#order_table_admin').DataTable();
    $('#order_table_supervisor').DataTable();
    console.log('Component Mounted');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard1.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard1.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/** @format */
/* harmony default export */ __webpack_exports__["default"] = ({
  beforeCreate: function beforeCreate() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/getAuthUser');

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;

              if (data.type === 'Supervisor') {
                if (data.type !== 'Supervisor') {
                  location.replace('/dashboard');
                }
              } else if (data.type === 'Manager') {
                if (data.type !== 'Manager') {
                  location.replace('/dashboard');
                }
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    $('#all_users').DataTable();
    $('#supervisor_users').DataTable();
    $('#top_items').DataTable();
    $('#order_table_admin').DataTable();
    $('#order_table_supervisor').DataTable();
    console.log('Component Mounted');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCustomerSetup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditCustomerSetup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["customer_id"],
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        customer_id: "",
        account_name: "",
        account_classification_id: "",
        account_description: "",
        account_code: "",
        account_code2: "",
        account_code3: "",
        acc_grp_code: "",
        account_credit_limit: "",
        branch_description: "",
        account_group_name: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        address5: "",
        location_group_code: "",
        postal_address: "",
        selected: "",
        branch_source_warehouse_code: "",
        branch_order_delivery_lead_time: ""
      }),
      options: [],
      msg: "No changes have been made."
    };
  },
  methods: {
    btn_acc_code_act: function btn_acc_code_act() {
      var _this = this;

      var formData = new FormData();
      formData.append("account_groupcode_id", this.form.selected);
      axios.post("/get_account_details", formData).then(function (_ref) {
        var data = _ref.data,
            status = _ref.status;
        _this.form.account_group_name = data.group_name;
        _this.form.account_classification_id = data.account_classification_id;
        _this.form.account_description = data.group_name;
        _this.form.branch_description = data.group_name;
        _this.form.account_group_code = data.group_code;
      })["catch"](function (error) {});
    },
    populate: function populate() {
      var _this2 = this;

      axios.get("/api/persons/all").then(function (response) {
        _this2.options = response.data; // this.form = new Form(response.data);
        // this.form.account_group_name = response.account_group_name;

        setTimeout(function () {
          var selectDropDown = $("#slct_group_codes").select2();
          selectDropDown.on("select2:select", function (e) {
            var event = new Event("change");
            e.target.dispatchEvent(event);
          });
        }, 100);
      })["catch"](function (response) {
        console.log("error");
      });
    },
    getCustomer: function getCustomer() {
      var _this3 = this;

      axios.get("/person/" + this.customer_id).then(function (_ref2) {
        var data = _ref2.data;

        _this3.populate();

        _this3.form.fill(data);

        _this3.form.selected = data.account_group_code.account_groupcode_id;
        _this3.form.account_group_code = data.account_group_code.group_code;
      });
    },
    submitBtn: function submitBtn() {
      var _this4 = this;

      $("#container").css("position", "sticky");
      this.form.location_group_code = $("#loc_group_code").val();
      this.form.address1 = $("#address1").val();
      this.form.postal_address = $("#postal_address").val();
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(function (result) {
        if (result.value) {
          _this4.form.post("/update_customeraccnt").then(function (_ref3) {
            var data = _ref3.data,
                status = _ref3.status;

            if (data == "Success") {
              setTimeout(function () {
                window.location.href = "/customer_masterfile";
              }, 300);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Good job!", "Update successful", "success");
            } else {
              if (data == 1) {
                $.niftyNoty({
                  type: "info",
                  icon: "fa fa-exclamation-triangle",
                  message: _this4.msg,
                  container: "floating",
                  timer: 5000
                });
                console.log(_this4.msg);
              }

              $("#container").css("position", "relative");
            }
          })["catch"](function (error) {});
        } else {
          $.niftyNoty({
            type: "danger",
            icon: "pli-cross icon-2x",
            message: "Action has been canceled.",
            container: "floating",
            timer: 5000
          });
        }
      });
    }
  },
  clearData: function clearData() {},
  mounted: function mounted() {
    $("#container").css("position", "relative");
    this.getCustomer();
    $("#submitform").on("click", function (e) {
      e.preventDefault();
    }); // setTimeout(() => {
    //     $("#loc_group_code").val("Bohol");
    //     $("#address1").val("Bohol");
    //     // $("#address5").val("Region 7");
    // }, 1300);

    setTimeout(function () {
      $("#slct_group_codes").select2();
    }, 300);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExportMasterfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExportMasterfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show_su_div: false
    };
  },
  methods: {
    addBtn: function addBtn() {
      this.show_su_div == false ? this.show_su_div = true : this.show_su_div = false;
    },
    editBtn: function editBtn() {
      $('#editDtls').show();
      $('#tblDtl').hide();
    },
    editDtlsBtn: function editDtlsBtn() {
      $('#editDtls').hide();
      $('#tblDtl').show();
    }
  },
  mounted: function mounted() {
    $('#salesmanTbl').DataTable();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImportCustomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImportCustomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {},
  mounted: function mounted() {
    $("#approvedTbl").DataTable();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemMasterfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemMasterfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show_su_div: false
    };
  },
  methods: {
    addBtn: function addBtn() {
      this.show_su_div == false ? this.show_su_div = true : this.show_su_div = false;
    },
    editBtn: function editBtn() {
      $('#editDtls').show();
      $('#tblDtl').hide();
    },
    editDtlsBtn: function editDtlsBtn() {
      $('#editDtls').hide();
      $('#tblDtl').show();
    }
  },
  mounted: function mounted() {
    $('#salesmanTbl').DataTable();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PromoFile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PromoFile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SalesmanComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show_su_div: false
    };
  },
  methods: {
    addBtn: function addBtn() {
      this.show_su_div == false ? this.show_su_div = true : this.show_su_div = false;
    },
    editBtn: function editBtn() {
      $('#editDtls').show();
      $('#tblDtl').hide();
    },
    editDtlsBtn: function editDtlsBtn() {
      $('#editDtls').hide();
      $('#tblDtl').show();
    }
  },
  mounted: function mounted() {
    $('#salesmanTbl').DataTable();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanRoutes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SalesmanRoutes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    addBtn: function addBtn() {
      $("#setupMdl").modal("show");
      $("#MdlTitle").html("New Route");
      $("#Btnsubmit").html("Submit");
    },
    editBtn: function editBtn() {
      $("#setupMdl").modal("show");
      $("#MdlTitle").html("<i class='fa fa-edit'></i> Edit Route");
      $("#route").val("Alicia");
      $("#Btnsubmit").html("Save Changes");
    },
    customersBtn: function customersBtn() {
      $("#customersMdl").modal("show");
      $("#MdlTitleCustomer").html("<i class='fa fa-group'></i> Customers in the area");
    },
    salesmanBtn: function salesmanBtn() {
      $("#salesmanMdl").modal("show");
    }
  },
  mounted: function mounted() {
    $("#routesTbl").DataTable();
    $("#customerTbl").DataTable();
    $("#salesmanTbl").DataTable();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadDataFiles.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadDataFiles.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      file: ''
    };
  },
  methods: {
    /*
        Submits all of the files to the server
      */
    submitFiles: function submitFiles() {
      /*
          Initialize the form data
        */
      // let formData = new FormData();

      /*
          Iteate over any file sent over appending the files
          to the form data.
        */
      // for (var i = 0; i < this.file.length; i++) {
      //     let file = this.file[i];
      //     formData.append("file[" + i + "]", file);
      // }

      /*
          Make the request to the POST /multiple-files URL
        */
      axios.post('/import_file', {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        console.log('SUCCESS!!');
      })["catch"](function () {
        console.log('FAILURE!!');
      });
    },

    /*
        Handles a change on the file upload
      */
    handleFilesUpload: function handleFilesUpload() {
      this.file = this.$refs.file.file;
    }
  },
  mounted: function mounted() {
    $('#data_files').DataTable();
    $('#submitform').on('click', function (e) {
      e.preventDefault();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsertypeComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UsertypeComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      msg: "User Type Information",
      dataForm: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        id: "",
        usertype: ""
      }),
      user_types: [],
      error_msg: ""
    };
  },
  methods: {
    addUserType: function addUserType() {
      $("#add_usertype_modal").modal("show");
      $(".modal-title").html('<i class="fa fa-plus-circle"></i> Usertype Setup');
    },
    submit: function submit() {
      var _this = this;

      this.dataForm.post("/create_usertype").then(function (_ref) {
        var data = _ref.data,
            status = _ref.status;

        if (data == "Success") {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Good job!", "action has been made", "success");
          $("#add_usertype_modal").modal("hide");

          _this.clearData();

          _this.getUserTypes();
        } else {
          console.log(data);
        }
      })["catch"](function (data) {
        console.log(status);
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: function onOpen(toast) {
            toast.addEventListener("mouseenter", sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.stopTimer);
            toast.addEventListener("mouseleave", sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resumeTimer);
          }
        });
        Toast.fire({
          icon: "error",
          title: "Data given is invalid"
        });
      });
    },
    clearData: function clearData() {
      this.dataForm.usertype = "";
      this.dataForm.id = "";
    },
    getUserTypes: function getUserTypes() {
      var _this2 = this;

      axios.get("/getUserTypes").then(function (response) {
        _this2.user_types = response.data;

        if (Object.keys(_this2.user_types).length) {
          setTimeout(function () {
            $("#tbl_usertype").DataTable();
          }, 500);
        }
      })["catch"]();
    },
    editUserType: function editUserType(data) {
      console.log(data);
      $("#add_usertype_modal").modal("show");
      $(".modal-title").html("Edit User Type");
      this.dataForm.usertype = data.usertype;
      this.dataForm.id = data.id;
    },
    closeModal: function closeModal() {
      this.clearData();
    },
    test: function test() {
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: function onOpen(toast) {
          toast.addEventListener("mouseenter", sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.stopTimer);
          toast.addEventListener("mouseleave", sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resumeTimer);
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
    }
  },
  mounted: function mounted() {
    console.log("Component mounted.");
    this.getUserTypes();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newCustomerRequest.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newCustomerRequest.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show_su_div: false
    };
  },
  methods: {},
  mounted: function mounted() {
    $(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function (e) {
      $.fn.dataTable.tables({
        visible: true,
        api: true
      }).columns.adjust();
    });
    $("#requestTbl").DataTable();
    $("#approvedTbl").DataTable();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AccountGroupCodes.vue?vue&type=template&id=546a33ce&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AccountGroupCodes.vue?vue&type=template&id=546a33ce& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
          [
            _c("div", { staticClass: "col-lg-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-rounded pull-right",
                  on: {
                    click: function($event) {
                      return _vm.addCustomer()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-plus-circle" }),
                  _vm._v(" Group Code\n          ")
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass: "table table-striped table-bordered",
              attrs: { id: "AccountGroupTbl", cellspacing: "0", width: "100%" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.account_groupcode, function(GroupCodes) {
                  return _c("tr", { key: GroupCodes.account_groupcode_id }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(GroupCodes.group_code))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(GroupCodes.group_name))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(GroupCodes.account_classification_id))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editGroupCode(GroupCodes)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-pencil-square-o" }),
                          _vm._v(" Edit\n                ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.delete_data(
                                GroupCodes.account_groupcode_id
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-trash-o" }),
                          _vm._v(" Delete\n                ")
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "add_code_setup",
                tabindex: "-1",
                role: "dialog",
                "data-backdrop": "static",
                "data-keyboard": "false",
                "aria-hidden": "true"
              }
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "h5",
                        {
                          staticClass: "modal-title",
                          attrs: { id: "exampleModalLabel" }
                        },
                        [_vm._v("Modal title")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: {
                            type: "button",
                            "data-dismiss": "modal",
                            "aria-label": "Close"
                          },
                          on: {
                            click: function($event) {
                              return _vm.closeModal()
                            }
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("×")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitform($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "modal-body" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.dataForm.errors.has(
                                  "group_code"
                                )
                              }
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.dataForm.account_groupcode_id,
                                    expression:
                                      "\n                                              dataForm.account_groupcode_id\n                                          "
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  id: "account_groupcode_id",
                                  placeholder: "Group code"
                                },
                                domProps: {
                                  value: _vm.dataForm.account_groupcode_id
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.dataForm,
                                      "account_groupcode_id",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "group_code" } }, [
                                _vm._v("Group Code:")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.dataForm.group_code,
                                    expression: "dataForm.group_code"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "group_code",
                                  placeholder: "Group code"
                                },
                                domProps: { value: _vm.dataForm.group_code },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.dataForm,
                                      "group_code",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.dataForm,
                                  field: "group_code"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.dataForm.errors.has(
                                  "group_name"
                                )
                              }
                            },
                            [
                              _c("label", { attrs: { for: "group_name" } }, [
                                _vm._v("Group Name:")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.dataForm.group_name,
                                    expression: "dataForm.group_name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "group_name",
                                  placeholder: "Group Name"
                                },
                                domProps: { value: _vm.dataForm.group_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.dataForm,
                                      "group_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.dataForm,
                                  field: "group_name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.dataForm.errors.has(
                                  "account_classification_id"
                                )
                              }
                            },
                            [
                              _c(
                                "label",
                                { attrs: { for: "account_classification_id" } },
                                [_vm._v("Account Classification:")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.dataForm.account_classification_id,
                                    expression:
                                      "\n                                              dataForm.account_classification_id\n                                          "
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "account_classification_id",
                                  placeholder: "Account Classification"
                                },
                                domProps: {
                                  value: _vm.dataForm.account_classification_id
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.dataForm,
                                      "account_classification_id",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.dataForm,
                                  field: "account_classification_id"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: {
                                type: "button",
                                "data-dismiss": "modal"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.closeModal()
                                }
                              }
                            },
                            [_vm._v("Close")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.submit()
                                }
                              }
                            },
                            [_vm._v("Save changes")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c(
        "h3",
        { staticClass: "panel-title", staticStyle: { "font-weight": "bold" } },
        [_vm._v("Account Group Codes")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Group Code")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Group Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Classification ID")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCustomerSetup.vue?vue&type=template&id=1bd5dd89&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddCustomerSetup.vue?vue&type=template&id=1bd5dd89& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c(
          "div",
          { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
              [
                _c("router-link", { attrs: { to: "/customer_masterfile" } }, [
                  _c("a", { attrs: { href: "javascript:;" } }, [
                    _c(
                      "button",
                      { staticClass: "btn btn-primary btn-rounded pull-right" },
                      [
                        _c("i", { staticClass: "fa fa-arrow-left" }),
                        _vm._v(" Back\n              ")
                      ]
                    )
                  ])
                ])
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c(
            "form",
            {
              attrs: { id: "sbmtform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitform($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c(
                    "h4",
                    {
                      staticStyle: {
                        "font-weight": "bold",
                        "text-decoration": "underline"
                      }
                    },
                    [_vm._v("Account Information")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      class: {
                        "has-error": _vm.form.errors.has("account_name")
                      }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.account_name,
                            expression: "form.account_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "account_name" },
                        domProps: { value: _vm.form.account_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "account_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "account_name" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.acc_group_name,
                          expression: "acc_group_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: { value: _vm.acc_group_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.acc_group_name = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.acc_grp_name,
                          expression: "form.acc_grp_name"
                        }
                      ],
                      attrs: {
                        type: "hidden",
                        id: "account_group_name",
                        disabled: ""
                      },
                      domProps: { value: _vm.form.acc_grp_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "acc_grp_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("Account Code 2:")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.account_code2,
                          expression: "form.account_code2"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "account_code2" },
                      domProps: { value: _vm.form.account_code2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "account_code2",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.acc_description,
                          expression: "form.acc_description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "account_description",
                        disabled: ""
                      },
                      domProps: { value: _vm.form.acc_description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "acc_description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("selected")
                        }
                      },
                      [
                        _vm._m(6),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.selected,
                                expression: "form.selected"
                              }
                            ],
                            staticStyle: { width: "171px" },
                            attrs: {
                              "data-placeholder": "Account Group Codes",
                              id: "slct_group_codes",
                              tabindex: "2"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "selected",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                _vm.btn_acc_code_act
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { disabled: "" } }, [
                              _vm._v("Choose Group Codes")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.options, function(option) {
                              return _c(
                                "option",
                                {
                                  key: option.account_groupcode_id,
                                  domProps: {
                                    value: option.account_groupcode_id
                                  }
                                },
                                [_vm._v(_vm._s(option.group_code))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "selected" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("account_code")
                        }
                      },
                      [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.account_code,
                              expression: "form.account_code"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "account_code" },
                          domProps: { value: _vm.form.account_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "account_code",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "account_code" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Account Code 3:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.account_code3,
                            expression: "form.account_code3"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "account_code3" },
                        domProps: { value: _vm.form.account_code3 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "account_code3",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.acc_classification,
                            expression: "form.acc_classification"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "account_classification",
                          placeholder: "Account Classification ID",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.acc_classification },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "acc_classification",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(9),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "location_name",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_name }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(10),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Address 4:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address4,
                            expression: "form.address4"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "address4" },
                        domProps: { value: _vm.form.address4 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address4", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(11),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_code",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_code }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(12)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _vm._m(13),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("address2")
                        }
                      },
                      [
                        _vm._m(14),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.address2,
                              expression: "form.address2"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "address2" },
                          domProps: { value: _vm.form.address2 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "address2",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "address2" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(15),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(16),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_name",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_name }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(17)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(18),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "location_code",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_code }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("address3")
                        }
                      },
                      [
                        _vm._m(19),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.address3,
                              expression: "form.address3"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "address3" },
                          domProps: { value: _vm.form.address3 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "address3",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "address3" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("postal_address")
                        }
                      },
                      [
                        _vm._m(20),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", id: "postal_address" }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "postal_address" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(21),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branch_description,
                            expression: "form.branch_description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_description",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.branch_description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branch_description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "row",
                staticStyle: { height: "35px" }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { margin: "0px 0px 10px 0px" }
                },
                [
                  _c("div", {
                    staticClass: "col-lg-6",
                    staticStyle: { padding: "15px" }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-lg-6",
                      staticStyle: { padding: "15px" }
                    },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/customer_masterfile" } },
                        [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-success btn-rounded pull-right",
                                attrs: { id: "submitform", type: "submit" },
                                on: {
                                  click: function($event) {
                                    return _vm.submitBtn()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-check" }),
                                _vm._v(" Submit\n                  ")
                              ]
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h3",
          {
            staticClass: "panel-title",
            staticStyle: { "font-weight": "bold" }
          },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Customer Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                  Account Name:\n                  "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                  Account Group Name:\n                  "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                  Account Description:\n                  "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "control-label" }, [
        _vm._v("\n                  Account Credit Limit:\n                  "),
        _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "account_credit_limit" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("Location")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Account Group Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Account Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v(
        "\n                    Account Classification:\n                    "
      ),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Location Name:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "control-label" }, [
        _vm._v("\n                    Address 1:\n                    "),
        _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "address1" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Branch Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        { staticClass: "control-label", staticStyle: { "font-size": "12px" } },
        [
          _vm._v(
            "\n                    Branch Source Warehouse Code:\n                    "
          ),
          _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "branch_source_warehouse_code" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "control-label" }, [
        _vm._v(
          "\n                    Location Group Code:\n                    "
        ),
        _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "loc_group_code" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Address 2:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "control-label" }, [_vm._v("Address 5:")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "address5" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Branch Name:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        { staticClass: "control-label", staticStyle: { "font-size": "12px" } },
        [
          _vm._v(
            "\n                    Branch Order Delivery Lead Time:\n                    "
          ),
          _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "branch_order_delivery_lead_time" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Location Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Address 3:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Postal Address:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Branch Description:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
          [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c("router-link", { attrs: { to: "/add_customer" } }, [
                  _c("a", { attrs: { href: "javascript:;" } }, [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded pull-right" },
                      [
                        _c("i", { staticClass: "fa fa-plus-circle" }),
                        _vm._v(" Customer\n              ")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("router-link", { attrs: { to: "/import_customer" } }, [
                  _c("a", { attrs: { href: "javascript:;" } }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-rounded pull-right",
                        staticStyle: { "margin-right": "10px" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-cloud-upload" }),
                        _vm._v(" Upload\n              ")
                      ]
                    )
                  ])
                ])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass:
                "table table-hover table-bordered dt-responsive nowrap table-vcenter",
              attrs: { id: "tbl_customermasterfile", width: "100%" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.customers, function(MgaCustomers) {
                  return _c("tr", { key: MgaCustomers.customer_id }, [
                    _c("td", [_vm._v(_vm._s(MgaCustomers.account_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.account_group_code))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.account_group_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.account_code))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(MgaCustomers.account_description))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(MgaCustomers.account_classification_id))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      MgaCustomers.status == "1"
                        ? _c("div", { staticClass: "btn-group dropdown" }, [
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass: "dropdown-menu dropdown-menu-right"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticStyle: { color: "blue" },
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.btn_activation(
                                            MgaCustomers.customer_id,
                                            "1"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Active")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticStyle: { color: "red" },
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.btn_activation(
                                            MgaCustomers.customer_id,
                                            "0"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Inactive")]
                                  )
                                ])
                              ]
                            )
                          ])
                        : _c("div", { staticClass: "btn-group dropdown" }, [
                            _vm._m(3, true),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass: "dropdown-menu dropdown-menu-right"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticStyle: { color: "blue" },
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.btn_activation(
                                            MgaCustomers.customer_id,
                                            "1"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Active")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticStyle: { color: "red" },
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.btn_activation(
                                            MgaCustomers.customer_id,
                                            "0"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Inactive")]
                                  )
                                ])
                              ]
                            )
                          ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editCustomer(MgaCustomers)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-pencil-square-o" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.address1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.address2))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.address3))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.location_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.location_code))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(MgaCustomers.account_credit_limit))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.postal_address))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.branch_code))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.branch_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(MgaCustomers.branch_description))])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c(
        "h3",
        { staticClass: "panel-title", staticStyle: { "font-weight": "bold" } },
        [
          _c("i", { staticClass: "fa fa-vcard-o" }),
          _vm._v(" Customer Masterfile\n      ")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Account Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Account Group Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Account Group Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Account Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Account Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Account Classification ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address 1")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address 2")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address 3")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Account Credit Limit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Postal Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Branch Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Branch Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Branch Description")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "btn btn-sm btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
        attrs: { "data-toggle": "dropdown", type: "button" }
      },
      [
        _vm._v("\n                    Active\n                    "),
        _c("i", { staticClass: "dropdown-caret" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "btn btn-sm btn-danger btn-active-blue dropdown-toggle dropdown-toggle-icon",
        attrs: { "data-toggle": "dropdown", type: "button" }
      },
      [
        _vm._v("\n                    Inactive\n                    "),
        _c("i", { staticClass: "dropdown-caret" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "page-content" } }, [
      _c("div", { staticClass: "panel" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "row mar-top" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c(
                "h3",
                { staticClass: "text-main text-normal text-2x mar-no" },
                [_vm._v("Activated Users (Admin)")]
              ),
              _vm._v(" "),
              _c(
                "h5",
                { staticClass: "text-uppercase text-muted text-normal" },
                [_vm._v("Report for last 7-days ago")]
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "new-section-xs" }),
              _vm._v(" "),
              _c("div", { staticClass: "row mar-top" }, [
                _c("div", { staticClass: "col-sm-5" }, [
                  _c("div", { staticClass: "text-lg" }, [
                    _c(
                      "p",
                      { staticClass: "text-5x text-thin text-main mar-no" },
                      [_vm._v("4")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v("Total users that are already registered")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-7" }, [
                  _c("div", { staticClass: "list-group bg-trans mar-no" }, [
                    _c(
                      "a",
                      { staticClass: "list-group-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "demo-pli-information icon-lg icon-fw"
                        }),
                        _vm._v(" User Details\n                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "list-group-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "demo-pli-mine icon-lg icon-fw"
                        }),
                        _vm._v(" Usage Profile\n                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "list-group-item", attrs: { href: "#" } },
                      [
                        _c("button", { staticClass: "btn btn-pink mar-ver" }, [
                          _vm._v("View Details")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-xs" })
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9" }, [
              _c("div", { staticClass: "panel" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c("h3", { staticClass: "panel-title" }, [
                    _vm._v("All Users")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                        attrs: { id: "all_users", width: "100%" }
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("User")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Full Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Email")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Type")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Status")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Actions")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("td", { staticClass: "min-w-td" }, [
                              _vm._v("1")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "img-circle img-sm",
                                attrs: {
                                  src: "assets/img/profile-photos/5.png",
                                  alt: "Profile Picture"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Patrick Ryan Cutor")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("patjun007@gmail.com")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "label label-table label-purple"
                                },
                                [_vm._v("Admin")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("div", { staticClass: "btn-group dropdown" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                    attrs: {
                                      "data-toggle": "dropdown",
                                      type: "button"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Active\n                            "
                                    ),
                                    _c("i", { staticClass: "dropdown-caret" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "blue" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Active")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "red" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Inactive")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("div", { staticClass: "btn-group" }, [
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Edit",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Delete",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Ban user",
                                    "data-container": "body"
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "min-w-td" }, [
                              _vm._v("2")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "img-circle img-sm",
                                attrs: {
                                  src: "assets/img/profile-photos/1.png",
                                  alt: "Profile Picture"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("John Doe")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("john.doe@example.com")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                { staticClass: "label label-table label-info" },
                                [_vm._v("Salesman")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("div", { staticClass: "btn-group dropdown" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                    attrs: {
                                      "data-toggle": "dropdown",
                                      type: "button"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Active\n                            "
                                    ),
                                    _c("i", { staticClass: "dropdown-caret" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "blue" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Active")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "red" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Inactive")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("div", { staticClass: "btn-group" }, [
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Edit",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Delete",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Ban user",
                                    "data-container": "body"
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "min-w-td" }, [
                              _vm._v("3")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "img-circle img-sm",
                                attrs: {
                                  src: "assets/img/profile-photos/6.png",
                                  alt: "Profile Picture"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Maria Marz")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("maria_545@example.com")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "label label-table label-success"
                                },
                                [_vm._v("Customer")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("div", { staticClass: "btn-group dropdown" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                    attrs: {
                                      "data-toggle": "dropdown",
                                      type: "button"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Active\n                            "
                                    ),
                                    _c("i", { staticClass: "dropdown-caret" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "blue" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Active")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "red" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Inactive")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("div", { staticClass: "btn-group" }, [
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Edit",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Delete",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Ban user",
                                    "data-container": "body"
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "min-w-td" }, [
                              _vm._v("3")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "img-circle img-sm",
                                attrs: {
                                  src: "assets/img/profile-photos/4.png",
                                  alt: "Profile Picture"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Joseph Santos")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("sotnas05@example.com")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "label label-table label-danger"
                                },
                                [_vm._v("Supervisor")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("div", { staticClass: "btn-group dropdown" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                    attrs: {
                                      "data-toggle": "dropdown",
                                      type: "button"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Active\n                            "
                                    ),
                                    _c("i", { staticClass: "dropdown-caret" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "blue" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Active")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "red" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Inactive")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("div", { staticClass: "btn-group" }, [
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Edit",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Delete",
                                    "data-container": "body"
                                  }
                                }),
                                _vm._v(" "),
                                _c("a", {
                                  staticClass:
                                    "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                                  attrs: {
                                    href: "#",
                                    "data-original-title": "Ban user",
                                    "data-container": "body"
                                  }
                                })
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12" }, [
          _c("div", { staticClass: "panel" }, [
            _c("div", { staticClass: "panel-body" }, [
              _c("div", { staticClass: "pad-btm form-inline" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c(
                    "h3",
                    { staticClass: "text-main text-normal text-2x mar-no" },
                    [_vm._v("Order & Tracking Delivery (Admin)")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12 table-toolbar-right" }, [
                    _c("button", { staticClass: "btn btn-default" }, [
                      _c("i", { staticClass: "demo-pli-printer icon-lg" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group" }, [
                      _c("button", { staticClass: "btn btn-default" }, [
                        _c("i", { staticClass: "demo-pli-information icon-lg" })
                      ]),
                      _vm._v(" "),
                      _c("button", { staticClass: "btn btn-default" }, [
                        _c("i", { staticClass: "demo-pli-trash icon-lg" })
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                    attrs: { id: "order_table_admin", width: "100%" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Invoice #")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Customer")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Order Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Payment Terms")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Tracking #")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Salesman")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Actions")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Order #53431")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Sasha Grey")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("Oct 22, 2019")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-mint" },
                            [_vm._v("Cash")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-success" },
                            [_vm._v("Paid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v("CGX0089734531")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Charles S Boyle")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "btn-group" }, [
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View List Ordered",
                                "data-container": "body",
                                title: "Item Ordered"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View Details",
                                "data-container": "body",
                                title: "View Details"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "Ban user",
                                "data-container": "body"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Order #53433")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Maria Ozawa")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("Oct 24, 2019")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-purple" },
                            [_vm._v("Cheque")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-info" },
                            [_vm._v("Shipped")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v("CGX0089934571")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("John Doe")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "btn-group" }, [
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View List Ordered",
                                "data-container": "body",
                                title: "Item Ordered"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View Details",
                                "data-container": "body",
                                title: "View Details"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "Ban user",
                                "data-container": "body"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Order #53434")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Riley Reid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("Oct 26, 2019")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-purple" },
                            [_vm._v("Cheque")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-info" },
                            [_vm._v("Shipped")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v("CGX0089934571")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Scott S. Calabrese")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "btn-group" }, [
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View List Ordered",
                                "data-container": "body",
                                title: "Item Ordered"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View Details",
                                "data-container": "body",
                                title: "View Details"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "Ban user",
                                "data-container": "body"
                              }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard1.vue?vue&type=template&id=7dc0be48&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard1.vue?vue&type=template&id=7dc0be48& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "page-content" } }, [
      _c("div", { staticClass: "panel" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "row mar-top" }, [
            _c("div", { staticClass: "col-sm-12 toolbar-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-purple",
                  attrs: { id: "demo-btn-addrow" }
                },
                [_vm._v("Add New")]
              ),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-default" }, [
                _c("i", { staticClass: "demo-pli-printer" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "panel" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c(
                    "h3",
                    { staticClass: "text-main text-normal text-2x mar-no" },
                    [_vm._v("Top Customers (Supervisor)")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4 col-md-3" }, [
                      _c("div", { staticClass: "panel pos-rel" }, [
                        _c(
                          "div",
                          { staticClass: "widget-control text-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "add-tooltip btn btn-trans",
                                attrs: {
                                  href: "#",
                                  "data-original-title": "Favorite"
                                }
                              },
                              [
                                _c("span", { staticClass: "favorite-color" }, [
                                  _c("i", {
                                    staticClass: "demo-psi-star icon-lg"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "btn-group dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-toggle btn btn-trans",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "dropdown",
                                    "aria-expanded": "false"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-psi-dot-vertical icon-lg"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-psi-pen-5"
                                      }),
                                      _vm._v(
                                        " Edit\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-recycling"
                                      }),
                                      _vm._v(
                                        " Remove\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-mail"
                                      }),
                                      _vm._v(
                                        " Send a Message\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-calendar-4"
                                      }),
                                      _vm._v(
                                        " View Details\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-lock-user"
                                      }),
                                      _vm._v(
                                        " Lock\n                            "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pad-all" }, [
                          _c("div", { staticClass: "media pad-ver" }, [
                            _c("div", { staticClass: "media-left" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-md img-circle",
                                    attrs: {
                                      alt: "Profile Picture",
                                      src: "assets/img/profile-photos/8.png"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body pad-top" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-lg text-semibold text-main"
                                    },
                                    [_vm._v("Lucy Moon")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v("Customer")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "pad-btm bord-bt text-sm" }, [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pad-to" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-consulting icon-lg icon-fw"
                                  }),
                                  _vm._v(" Call\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-pli-mail icon-lg icon-fw"
                                  }),
                                  _vm._v(" Email\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-pen-5 icon-lg icon-fw"
                                  }),
                                  _vm._v(" Edit\n                          ")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-md-3" }, [
                      _c("div", { staticClass: "panel pos-rel" }, [
                        _c(
                          "div",
                          { staticClass: "widget-control text-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "add-tooltip btn btn-trans",
                                attrs: {
                                  href: "#",
                                  "data-original-title": "Favorite"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "unfavorite-color" },
                                  [
                                    _c("i", {
                                      staticClass: "demo-psi-star icon-lg"
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "btn-group dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-toggle btn btn-trans",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "dropdown",
                                    "aria-expanded": "false"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-psi-dot-vertical icon-lg"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-psi-pen-5"
                                      }),
                                      _vm._v(
                                        " Edit\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-recycling"
                                      }),
                                      _vm._v(
                                        " Remove\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-mail"
                                      }),
                                      _vm._v(
                                        " Send a Message\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-calendar-4"
                                      }),
                                      _vm._v(
                                        " View Details\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-lock-user"
                                      }),
                                      _vm._v(
                                        " Lock\n                            "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pad-all" }, [
                          _c("div", { staticClass: "media pad-ver" }, [
                            _c("div", { staticClass: "media-left" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-md img-circle",
                                    attrs: {
                                      alt: "Profile Picture",
                                      src: "assets/img/profile-photos/10.png"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body pad-top" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-lg text-semibold text-main"
                                    },
                                    [_vm._v("Brenda Fuller")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v("Customer")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "pad-btm bord-bt text-sm" }, [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pad-to" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-consulting icon-lg icon-fw"
                                  }),
                                  _vm._v(" Call\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-pli-mail icon-lg icon-fw"
                                  }),
                                  _vm._v(" Email\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-pen-5 icon-lg icon-fw"
                                  }),
                                  _vm._v(" Edit\n                          ")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-md-3" }, [
                      _c("div", { staticClass: "panel pos-rel" }, [
                        _c(
                          "div",
                          { staticClass: "widget-control text-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "add-tooltip btn btn-trans",
                                attrs: {
                                  href: "#",
                                  "data-original-title": "Favorite"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "unfavorite-color" },
                                  [
                                    _c("i", {
                                      staticClass: "demo-psi-star icon-lg"
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "btn-group dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-toggle btn btn-trans",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "dropdown",
                                    "aria-expanded": "false"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-psi-dot-vertical icon-lg"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-psi-pen-5"
                                      }),
                                      _vm._v(
                                        " Edit\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-recycling"
                                      }),
                                      _vm._v(
                                        " Remove\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-mail"
                                      }),
                                      _vm._v(
                                        " Send a Message\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-calendar-4"
                                      }),
                                      _vm._v(
                                        " View Details\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-lock-user"
                                      }),
                                      _vm._v(
                                        " Lock\n                            "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pad-all" }, [
                          _c("div", { staticClass: "media pad-ver" }, [
                            _c("div", { staticClass: "media-left" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-md img-circle",
                                    attrs: {
                                      alt: "Profile Picture",
                                      src: "assets/img/profile-photos/1.png"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body pad-top" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-lg text-semibold text-main"
                                    },
                                    [_vm._v("Aaron Chavez")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v("Customer")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "pad-btm bord-bt text-sm" }, [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pad-to" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-consulting icon-lg icon-fw"
                                  }),
                                  _vm._v(" Call\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-pli-mail icon-lg icon-fw"
                                  }),
                                  _vm._v(" Email\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-pen-5 icon-lg icon-fw"
                                  }),
                                  _vm._v(" Edit\n                          ")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-md-3" }, [
                      _c("div", { staticClass: "panel pos-rel" }, [
                        _c(
                          "div",
                          { staticClass: "widget-control text-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "add-tooltip btn btn-trans",
                                attrs: {
                                  href: "#",
                                  "data-original-title": "Favorite"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "unfavorite-color" },
                                  [
                                    _c("i", {
                                      staticClass: "demo-psi-star icon-lg"
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "btn-group dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-toggle btn btn-trans",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "dropdown",
                                    "aria-expanded": "false"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-psi-dot-vertical icon-lg"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-psi-pen-5"
                                      }),
                                      _vm._v(
                                        " Edit\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-recycling"
                                      }),
                                      _vm._v(
                                        " Remove\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-mail"
                                      }),
                                      _vm._v(
                                        " Send a Message\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-calendar-4"
                                      }),
                                      _vm._v(
                                        " View Details\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-lock-user"
                                      }),
                                      _vm._v(
                                        " Lock\n                            "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pad-all" }, [
                          _c("div", { staticClass: "media pad-ver" }, [
                            _c("div", { staticClass: "media-left" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-md img-circle",
                                    attrs: {
                                      alt: "Profile Picture",
                                      src: "assets/img/profile-photos/5.png"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body pad-top" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-lg text-semibold text-main"
                                    },
                                    [_vm._v("Donald Brown")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v("Customer")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "pad-btm bord-bt text-sm" }, [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pad-to" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-consulting icon-lg icon-fw"
                                  }),
                                  _vm._v(" Call\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-pli-mail icon-lg icon-fw"
                                  }),
                                  _vm._v(" Email\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-pen-5 icon-lg icon-fw"
                                  }),
                                  _vm._v(" Edit\n                          ")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mar-top" }, [
            _c("div", { staticClass: "col-sm-12 toolbar-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-purple",
                  attrs: { id: "demo-btn-addrow" }
                },
                [_vm._v("Add New")]
              ),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-default" }, [
                _c("i", { staticClass: "demo-pli-printer" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "panel" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c(
                    "h3",
                    { staticClass: "text-main text-normal text-2x mar-no" },
                    [_vm._v("Top Salesmans (Supervisor)")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4 col-md-3" }, [
                      _c("div", { staticClass: "panel pos-rel" }, [
                        _c(
                          "div",
                          { staticClass: "widget-control text-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "add-tooltip btn btn-trans",
                                attrs: {
                                  href: "#",
                                  "data-original-title": "Favorite"
                                }
                              },
                              [
                                _c("span", { staticClass: "favorite-color" }, [
                                  _c("i", {
                                    staticClass: "demo-psi-star icon-lg"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "btn-group dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-toggle btn btn-trans",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "dropdown",
                                    "aria-expanded": "false"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-psi-dot-vertical icon-lg"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-psi-pen-5"
                                      }),
                                      _vm._v(
                                        " Edit\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-recycling"
                                      }),
                                      _vm._v(
                                        " Remove\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-mail"
                                      }),
                                      _vm._v(
                                        " Send a Message\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-calendar-4"
                                      }),
                                      _vm._v(
                                        " View Details\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-lock-user"
                                      }),
                                      _vm._v(
                                        " Lock\n                            "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pad-all" }, [
                          _c("div", { staticClass: "media pad-ver" }, [
                            _c("div", { staticClass: "media-left" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-md img-circle",
                                    attrs: {
                                      alt: "Profile Picture",
                                      src: "assets/img/profile-photos/8.png"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body pad-top" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-lg text-semibold text-main"
                                    },
                                    [_vm._v("Lucy Moon")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v("Salesman")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "pad-btm bord-bt text-sm" }, [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pad-to" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-consulting icon-lg icon-fw"
                                  }),
                                  _vm._v(" Call\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-pli-mail icon-lg icon-fw"
                                  }),
                                  _vm._v(" Email\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-pen-5 icon-lg icon-fw"
                                  }),
                                  _vm._v(" Edit\n                          ")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-md-3" }, [
                      _c("div", { staticClass: "panel pos-rel" }, [
                        _c(
                          "div",
                          { staticClass: "widget-control text-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "add-tooltip btn btn-trans",
                                attrs: {
                                  href: "#",
                                  "data-original-title": "Favorite"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "unfavorite-color" },
                                  [
                                    _c("i", {
                                      staticClass: "demo-psi-star icon-lg"
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "btn-group dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-toggle btn btn-trans",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "dropdown",
                                    "aria-expanded": "false"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-psi-dot-vertical icon-lg"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-psi-pen-5"
                                      }),
                                      _vm._v(
                                        " Edit\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-recycling"
                                      }),
                                      _vm._v(
                                        " Remove\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-mail"
                                      }),
                                      _vm._v(
                                        " Send a Message\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-calendar-4"
                                      }),
                                      _vm._v(
                                        " View Details\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-lock-user"
                                      }),
                                      _vm._v(
                                        " Lock\n                            "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pad-all" }, [
                          _c("div", { staticClass: "media pad-ver" }, [
                            _c("div", { staticClass: "media-left" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-md img-circle",
                                    attrs: {
                                      alt: "Profile Picture",
                                      src: "assets/img/profile-photos/10.png"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body pad-top" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-lg text-semibold text-main"
                                    },
                                    [_vm._v("Brenda Fuller")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v("Salesman")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "pad-btm bord-bt text-sm" }, [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pad-to" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-consulting icon-lg icon-fw"
                                  }),
                                  _vm._v(" Call\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-pli-mail icon-lg icon-fw"
                                  }),
                                  _vm._v(" Email\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-pen-5 icon-lg icon-fw"
                                  }),
                                  _vm._v(" Edit\n                          ")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-md-3" }, [
                      _c("div", { staticClass: "panel pos-rel" }, [
                        _c(
                          "div",
                          { staticClass: "widget-control text-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "add-tooltip btn btn-trans",
                                attrs: {
                                  href: "#",
                                  "data-original-title": "Favorite"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "unfavorite-color" },
                                  [
                                    _c("i", {
                                      staticClass: "demo-psi-star icon-lg"
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "btn-group dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-toggle btn btn-trans",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "dropdown",
                                    "aria-expanded": "false"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-psi-dot-vertical icon-lg"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-psi-pen-5"
                                      }),
                                      _vm._v(
                                        " Edit\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-recycling"
                                      }),
                                      _vm._v(
                                        " Remove\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-mail"
                                      }),
                                      _vm._v(
                                        " Send a Message\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-calendar-4"
                                      }),
                                      _vm._v(
                                        " View Details\n                            "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", {
                                        staticClass:
                                          "icon-lg icon-fw demo-pli-lock-user"
                                      }),
                                      _vm._v(
                                        " Lock\n                            "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pad-all" }, [
                          _c("div", { staticClass: "media pad-ver" }, [
                            _c("div", { staticClass: "media-left" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-md img-circle",
                                    attrs: {
                                      alt: "Profile Picture",
                                      src: "assets/img/profile-photos/1.png"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body pad-top" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "box-inline",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-lg text-semibold text-main"
                                    },
                                    [_vm._v("Aaron Chavez")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v("Salesman")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "pad-btm bord-bt text-sm" }, [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa."
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pad-to" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-consulting icon-lg icon-fw"
                                  }),
                                  _vm._v(" Call\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "demo-pli-mail icon-lg icon-fw"
                                  }),
                                  _vm._v(" Email\n                          ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "demo-pli-pen-5 icon-lg icon-fw"
                                  }),
                                  _vm._v(" Edit\n                          ")
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mar-top" }, [
            _c("div", { staticClass: "col-sm-12 toolbar-right" }, [
              _c("button", { staticClass: "btn btn-default" }, [
                _c("i", { staticClass: "demo-pli-printer" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "panel" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c(
                    "h3",
                    { staticClass: "text-main text-normal text-2x mar-no" },
                    [_vm._v("Top Items (Supervisor)")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                          attrs: { id: "top_items", width: "100%" }
                        },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("#")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Product Name")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Item Code")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Brand")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Principal")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Status")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Actions")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tbody", [
                            _c("tr", [
                              _c("td", { staticClass: "min-w-td" }, [
                                _vm._v("1")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn-link",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v("100053")]),
                              _vm._v(" "),
                              _c("td", [_vm._v("BW BAKING CUP")]),
                              _vm._v(" "),
                              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "btn-group dropdown" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                        attrs: {
                                          "data-toggle": "dropdown",
                                          type: "button"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                              Active\n                              "
                                        ),
                                        _c("i", {
                                          staticClass: "dropdown-caret"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "dropdown-menu dropdown-menu-right"
                                      },
                                      [
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              staticStyle: { color: "blue" },
                                              attrs: { href: "#" }
                                            },
                                            [_vm._v("Active")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              staticStyle: { color: "red" },
                                              attrs: { href: "#" }
                                            },
                                            [_vm._v("Inactive")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("div", { staticClass: "btn-group" }, [
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Edit",
                                      "data-container": "body"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Delete",
                                      "data-container": "body"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Ban user",
                                      "data-container": "body"
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "min-w-td" }, [
                                _vm._v("2")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn-link",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("FREEDOM CIGARETTES")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v("100450")]),
                              _vm._v(" "),
                              _c("td", [_vm._v("FREEDOM")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v("ASSOC.ANGLO-AMER.TOBACO CORP.")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "btn-group dropdown" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                        attrs: {
                                          "data-toggle": "dropdown",
                                          type: "button"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                              Active\n                              "
                                        ),
                                        _c("i", {
                                          staticClass: "dropdown-caret"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "dropdown-menu dropdown-menu-right"
                                      },
                                      [
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              staticStyle: { color: "blue" },
                                              attrs: { href: "#" }
                                            },
                                            [_vm._v("Active")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              staticStyle: { color: "red" },
                                              attrs: { href: "#" }
                                            },
                                            [_vm._v("Inactive")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("div", { staticClass: "btn-group" }, [
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Edit",
                                      "data-container": "body"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Delete",
                                      "data-container": "body"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Ban user",
                                      "data-container": "body"
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "min-w-td" }, [
                                _vm._v("3")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn-link",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("NAVY CLUB FILTER KING 500s")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v("100451")]),
                              _vm._v(" "),
                              _c("td", [_vm._v("NAVY CLUB")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v("ASSOC.ANGLO-AMER.TOBACO CORP.")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "btn-group dropdown" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-xs btn-danger btn-active-red dropdown-toggle dropdown-toggle-icon",
                                        attrs: {
                                          "data-toggle": "dropdown",
                                          type: "button"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                              Inactive\n                              "
                                        ),
                                        _c("i", {
                                          staticClass: "dropdown-caret"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "dropdown-menu dropdown-menu-right"
                                      },
                                      [
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              staticStyle: { color: "blue" },
                                              attrs: { href: "#" }
                                            },
                                            [_vm._v("Active")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              staticStyle: { color: "red" },
                                              attrs: { href: "#" }
                                            },
                                            [_vm._v("Inactive")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("div", { staticClass: "btn-group" }, [
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Edit",
                                      "data-container": "body"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Delete",
                                      "data-container": "body"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("a", {
                                    staticClass:
                                      "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                                    attrs: {
                                      href: "#",
                                      "data-original-title": "Ban user",
                                      "data-container": "body"
                                    }
                                  })
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12" }, [
          _c("div", { staticClass: "panel" }, [
            _c("div", { staticClass: "panel-body" }, [
              _c("div", { staticClass: "pad-btm form-inline" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c(
                    "h3",
                    { staticClass: "text-main text-normal text-2x mar-no" },
                    [_vm._v("Order & Tracking Delivery (Supervisor)")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12 table-toolbar-right" }, [
                    _c("button", { staticClass: "btn btn-default" }, [
                      _c("i", { staticClass: "demo-pli-printer icon-lg" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group" }, [
                      _c("button", { staticClass: "btn btn-default" }, [
                        _c("i", { staticClass: "demo-pli-information icon-lg" })
                      ]),
                      _vm._v(" "),
                      _c("button", { staticClass: "btn btn-default" }, [
                        _c("i", { staticClass: "demo-pli-trash icon-lg" })
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                    attrs: { id: "order_table_supervisor", width: "100%" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Invoice #")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Customer")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Order Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Payment Terms")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Tracking #")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Salesman")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Actions")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Order #53431")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Sasha Grey")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("Oct 22, 2019")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-mint" },
                            [_vm._v("Cash")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-success" },
                            [_vm._v("Paid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v("CGX0089734531")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Charles S Boyle")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "btn-group" }, [
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View List Ordered",
                                "data-container": "body",
                                title: "Item Ordered"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View Details",
                                "data-container": "body",
                                title: "View Details"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "Ban user",
                                "data-container": "body"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Order #53433")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Maria Ozawa")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("Oct 24, 2019")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-purple" },
                            [_vm._v("Cheque")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-info" },
                            [_vm._v("Shipped")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v("CGX0089934571")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("John Doe")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "btn-group" }, [
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View List Ordered",
                                "data-container": "body",
                                title: "Item Ordered"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View Details",
                                "data-container": "body",
                                title: "View Details"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "Ban user",
                                "data-container": "body"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Order #53434")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Riley Reid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("Oct 26, 2019")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-purple" },
                            [_vm._v("Cheque")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            { staticClass: "label label-table label-info" },
                            [_vm._v("Shipped")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v("CGX0089934571")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            { staticClass: "btn-link", attrs: { href: "#" } },
                            [_vm._v("Scott S. Calabrese")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "btn-group" }, [
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View List Ordered",
                                "data-container": "body",
                                title: "Item Ordered"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "View Details",
                                "data-container": "body",
                                title: "View Details"
                              }
                            }),
                            _vm._v(" "),
                            _c("a", {
                              staticClass:
                                "btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip",
                              attrs: {
                                href: "#",
                                "data-original-title": "Ban user",
                                "data-container": "body"
                              }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "panel" }, [
            _c("div", { staticClass: "panel-body" }, [
              _c("div", { staticClass: "row mar-top" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c(
                    "h3",
                    { staticClass: "text-main text-normal text-2x mar-no" },
                    [_vm._v("Salesman (Supervisor)")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h5",
                    { staticClass: "text-uppercase text-muted text-normal" },
                    [_vm._v("Report for last 7-days ago")]
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "new-section-xs" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mar-top" }, [
                    _c("div", { staticClass: "col-sm-5" }, [
                      _c("div", { staticClass: "text-lg" }, [
                        _c(
                          "p",
                          { staticClass: "text-5x text-thin text-main mar-no" },
                          [_vm._v("3")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-sm" }, [
                        _vm._v("Total salesman under you.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-7" }, [
                      _c("div", { staticClass: "list-group bg-trans mar-no" }, [
                        _c(
                          "a",
                          {
                            staticClass: "list-group-item",
                            attrs: { href: "#" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "demo-pli-information icon-lg icon-fw"
                            }),
                            _vm._v(" User Details\n                    ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "list-group-item",
                            attrs: { href: "#" }
                          },
                          [
                            _c("i", {
                              staticClass: "demo-pli-mine icon-lg icon-fw"
                            }),
                            _vm._v(" Usage Profile\n                    ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "list-group-item",
                            attrs: { href: "#" }
                          },
                          [
                            _c(
                              "button",
                              { staticClass: "btn btn-pink mar-ver" },
                              [_vm._v("View Details")]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-xs" })
                          ]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c("div", { staticClass: "panel" }, [
                    _c("div", { staticClass: "panel-heading" }, [
                      _c("h3", { staticClass: "panel-title" }, [
                        _vm._v("Salesman Lists")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "panel-body" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                            attrs: { id: "supervisor_users", width: "100%" }
                          },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v("#")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("User")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Full Name")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Email")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Type")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Status")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Actions")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("td", { staticClass: "min-w-td" }, [
                                  _vm._v("1")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("img", {
                                    staticClass: "img-circle img-sm",
                                    attrs: {
                                      src: "assets/img/profile-photos/4.png",
                                      alt: "Profile Picture"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn-link",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v("Scott S. Calabrese")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("scot.em23@example.com")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "label label-table label-info"
                                    },
                                    [_vm._v("Salesman")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "btn-group dropdown" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                          attrs: {
                                            "data-toggle": "dropdown",
                                            type: "button"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Active\n                                "
                                          ),
                                          _c("i", {
                                            staticClass: "dropdown-caret"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass:
                                            "dropdown-menu dropdown-menu-right"
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                staticStyle: { color: "blue" },
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Active")]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                staticStyle: { color: "red" },
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Inactive")]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _c("div", { staticClass: "btn-group" }, [
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-success fa fa-eye add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "View",
                                        "data-container": "body",
                                        title: "View Information"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-danger fa fa-users add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "Users",
                                        "data-container": "body",
                                        title: "Customers"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-warning fa fa-truck add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "Route",
                                        "data-container": "body",
                                        title: "Route"
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "min-w-td" }, [
                                  _vm._v("2")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("img", {
                                    staticClass: "img-circle img-sm",
                                    attrs: {
                                      src: "assets/img/profile-photos/1.png",
                                      alt: "Profile Picture"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn-link",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v("John Doe")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("john.doe@example.com")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "label label-table label-info"
                                    },
                                    [_vm._v("Salesman")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "btn-group dropdown" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                          attrs: {
                                            "data-toggle": "dropdown",
                                            type: "button"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Active\n                                "
                                          ),
                                          _c("i", {
                                            staticClass: "dropdown-caret"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass:
                                            "dropdown-menu dropdown-menu-right"
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                staticStyle: { color: "blue" },
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Active")]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                staticStyle: { color: "red" },
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Inactive")]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _c("div", { staticClass: "btn-group" }, [
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-success fa fa-eye add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "View",
                                        "data-container": "body",
                                        title: "View Information"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-danger fa fa-users add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "Users",
                                        "data-container": "body",
                                        title: "Customers"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-warning fa fa-truck add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "Route",
                                        "data-container": "body",
                                        title: "Route"
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "min-w-td" }, [
                                  _vm._v("3")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("img", {
                                    staticClass: "img-circle img-sm",
                                    attrs: {
                                      src: "assets/img/profile-photos/2.png",
                                      alt: "Profile Picture"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn-link",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v("Charles S Boyle")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("char_boy90@example.com")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "label label-table label-info"
                                    },
                                    [_vm._v("Salesman")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "btn-group dropdown" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                          attrs: {
                                            "data-toggle": "dropdown",
                                            type: "button"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Active\n                                "
                                          ),
                                          _c("i", {
                                            staticClass: "dropdown-caret"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass:
                                            "dropdown-menu dropdown-menu-right"
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                staticStyle: { color: "blue" },
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Active")]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                staticStyle: { color: "red" },
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Inactive")]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _c("div", { staticClass: "btn-group" }, [
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-success fa fa-eye add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "View",
                                        "data-container": "body",
                                        title: "View Information"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-danger fa fa-users add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "Users",
                                        "data-container": "body",
                                        title: "Customers"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass:
                                        "btn btn-sm btn-default btn-hover-warning fa fa-truck add-tooltip",
                                      attrs: {
                                        href: "#",
                                        "data-original-title": "Route",
                                        "data-container": "body",
                                        title: "Route"
                                      }
                                    })
                                  ])
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCustomerSetup.vue?vue&type=template&id=8a12fc0c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditCustomerSetup.vue?vue&type=template&id=8a12fc0c& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c(
          "div",
          { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
              [
                _c("router-link", { attrs: { to: "/customer_masterfile" } }, [
                  _c("a", { attrs: { href: "javascript:;" } }, [
                    _c(
                      "button",
                      { staticClass: "btn btn-primary btn-rounded pull-right" },
                      [
                        _c("i", { staticClass: "fa fa-arrow-left" }),
                        _vm._v(" Back\n              ")
                      ]
                    )
                  ])
                ])
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c(
            "form",
            {
              attrs: { id: "sbmtform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitform($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c(
                    "h4",
                    {
                      staticStyle: {
                        "font-weight": "bold",
                        "text-decoration": "underline"
                      }
                    },
                    [_vm._v("Account Information")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.customer_id,
                        expression: "form.customer_id"
                      }
                    ],
                    attrs: { type: "hidden", id: "customer_id", disabled: "" },
                    domProps: { value: _vm.form.customer_id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "customer_id", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      class: {
                        "has-error": _vm.form.errors.has("account_name")
                      }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.account_name,
                            expression: "form.account_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "account_name" },
                        domProps: { value: _vm.form.account_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "account_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "account_name" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.account_group_name,
                          expression: "form.account_group_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: { value: _vm.form.account_group_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "account_group_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("Account Code 2:")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.account_code2,
                          expression: "form.account_code2"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "account_code2" },
                      domProps: { value: _vm.form.account_code2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "account_code2",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.account_description,
                          expression: "form.account_description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "account_description",
                        disabled: ""
                      },
                      domProps: { value: _vm.form.account_description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "account_description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.account_credit_limit,
                          expression: "form.account_credit_limit"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "account_credit_limit" },
                      domProps: { value: _vm.form.account_credit_limit },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "account_credit_limit",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("selected")
                        }
                      },
                      [
                        _vm._m(6),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.selected,
                                expression: "form.selected"
                              }
                            ],
                            staticStyle: { width: "201px" },
                            attrs: {
                              "data-placeholder": "Account Group Codes",
                              id: "slct_group_codes",
                              tabindex: "2"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "selected",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                _vm.btn_acc_code_act
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { disabled: "" } }, [
                              _vm._v("Choose Group Codes")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.options, function(option) {
                              return _c(
                                "option",
                                {
                                  key: option.account_groupcode_id,
                                  domProps: {
                                    value: option.account_groupcode_id
                                  }
                                },
                                [_vm._v(_vm._s(option.group_code))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "selected" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("account_code")
                        }
                      },
                      [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.account_code,
                              expression: "form.account_code"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "account_code" },
                          domProps: { value: _vm.form.account_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "account_code",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "account_code" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Account Code 3:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.account_code3,
                            expression: "form.account_code3"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "account_code3" },
                        domProps: { value: _vm.form.account_code3 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "account_code3",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.account_classification_id,
                            expression: "form.account_classification_id"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "account_classification",
                          placeholder: "Account Classification ID",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_classification_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "account_classification_id",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(9),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "location_name",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_name }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(10),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address1,
                            expression: "form.address1"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "address1" },
                        domProps: { value: _vm.form.address1 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address1", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Address 4:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address4,
                            expression: "form.address4"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "address4" },
                        domProps: { value: _vm.form.address4 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address4", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(11),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_code",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_code }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(12),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branch_source_warehouse_code,
                            expression:
                              "\n                                          form.branch_source_warehouse_code\n                                      "
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_source_warehouse_code"
                        },
                        domProps: {
                          value: _vm.form.branch_source_warehouse_code
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branch_source_warehouse_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(13),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.location_group_code,
                            expression: "form.location_group_code"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "loc_group_code" },
                        domProps: { value: _vm.form.location_group_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "location_group_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("address2")
                        }
                      },
                      [
                        _vm._m(14),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.address2,
                              expression: "form.address2"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "address2" },
                          domProps: { value: _vm.form.address2 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "address2",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "address2" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "control-label" }, [
                        _vm._v("Address 5:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address5,
                            expression: "form.address5"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "address5" },
                        domProps: { value: _vm.form.address5 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address5", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(15),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_name",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_name }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(16),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branch_order_delivery_lead_time,
                            expression:
                              "\n                                          form.branch_order_delivery_lead_time\n                                      "
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_order_delivery_lead_time"
                        },
                        domProps: {
                          value: _vm.form.branch_order_delivery_lead_time
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branch_order_delivery_lead_time",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(17),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "location_code",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.account_code }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error": _vm.form.errors.has("address3")
                        }
                      },
                      [
                        _vm._m(18),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.address3,
                              expression: "form.address3"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "address3" },
                          domProps: { value: _vm.form.address3 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "address3",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "address3" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(19),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.postal_address,
                            expression: "form.postal_address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "postal_address" },
                        domProps: { value: _vm.form.postal_address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "postal_address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(20),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branch_description,
                            expression: "form.branch_description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "branch_description",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.branch_description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branch_description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "row",
                staticStyle: { height: "35px" }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { margin: "0px 0px 10px 0px" }
                },
                [
                  _c("div", {
                    staticClass: "col-lg-6",
                    staticStyle: { padding: "15px" }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-lg-6",
                      staticStyle: { padding: "15px" }
                    },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/customer_masterfile" } },
                        [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-success btn-rounded pull-right",
                                attrs: { id: "submitform", type: "submit" },
                                on: {
                                  click: function($event) {
                                    return _vm.submitBtn()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-check" }),
                                _vm._v(" Submit\n                  ")
                              ]
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h3",
          {
            staticClass: "panel-title",
            staticStyle: { "font-weight": "bold" }
          },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Customer Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                  Account Name:\n                  "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                  Account Group Name:\n                  "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                  Account Description:\n                  "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                  Account Credit Limit:\n                  "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("Location")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Account Group Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Account Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v(
        "\n                    Account Classification:\n                    "
      ),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Location Name:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Address 1:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Branch Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "control-label", staticStyle: { "font-size": "12px" } },
      [
        _vm._v(
          "\n                    Branch Source Warehouse Code:\n                    "
        ),
        _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v(
        "\n                    Location Group Code:\n                    "
      ),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Address 2:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Branch Name:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "control-label", staticStyle: { "font-size": "12px" } },
      [
        _vm._v(
          "\n                    Branch Order Delivery Lead Time:\n                    "
        ),
        _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Location Code:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Address 3:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Postal Address:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label" }, [
      _vm._v("\n                    Branch Description:\n                    "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExportMasterfile.vue?vue&type=template&id=b1e731c6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExportMasterfile.vue?vue&type=template&id=b1e731c6& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.show_su_div,
              expression: "!show_su_div"
            }
          ],
          staticClass: "panel-heading",
          attrs: { id: "showTitle" }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.show_su_div,
              expression: "!show_su_div"
            }
          ],
          staticClass: "panel-body",
          attrs: { id: "tblDtl" }
        },
        [_vm._m(1), _vm._v(" "), _vm._m(2)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show_su_div,
              expression: "show_su_div"
            }
          ],
          staticClass: "panel-body"
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
            [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-rounded pull-right btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.addBtn()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Back\n          ")
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "row", staticStyle: { height: "35px" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { margin: "0px 0px 10px 0px" }
              },
              [
                _c("div", {
                  staticClass: "col-lg-6",
                  staticStyle: { padding: "15px" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                  [
                    _c("router-link", { attrs: { to: "" } }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-success btn-rounded pull-right btn-sm",
                            attrs: { id: "submitform", type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Submit\n                ")
                          ]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-body",
          staticStyle: { display: "none" },
          attrs: { id: "editDtls" }
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
            [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-rounded pull-right btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.editDtlsBtn()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Back\n          ")
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _vm._m(6),
            _vm._v(" "),
            _c("div", { staticClass: "row", staticStyle: { height: "35px" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { margin: "0px 0px 10px 0px" }
              },
              [
                _c("div", {
                  staticClass: "col-lg-6",
                  staticStyle: { padding: "15px" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                  [
                    _c("router-link", { attrs: { to: "" } }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-success btn-rounded pull-right btn-sm",
                            attrs: { id: "submitform", type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Submit\n                ")
                          ]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(7)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "panel-title", staticStyle: { "font-weight": "bold" } },
      [_c("i", { staticClass: "fa fa-truck" }), _vm._v(" Item Lists\n      ")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
      [_c("div", { staticClass: "col-lg-12" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c(
        "table",
        {
          staticClass:
            "table table-bordered table-hover dt-responsive nowrap table-vcenter",
          attrs: { id: "salesmanTbl", width: "100%" }
        },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("Prdct Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Prdct Shrt Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Desc")]),
              _vm._v(" "),
              _c("th", [_vm._v("Company Code")]),
              _vm._v(" "),
              _c("th", [_vm._v("Item Code")]),
              _vm._v(" "),
              _c("th", [_vm._v("Barcode")]),
              _vm._v(" "),
              _c("th", [_vm._v("Option")]),
              _vm._v(" "),
              _c("th", [_vm._v("Brand")]),
              _vm._v(" "),
              _c("th", [_vm._v("Principal")]),
              _vm._v(" "),
              _c("th", [_vm._v("Product Family")]),
              _vm._v(" "),
              _c("th", [_vm._v("Keywords")]),
              _vm._v(" "),
              _c("th", [_vm._v("UOM")]),
              _vm._v(" "),
              _c("th", [_vm._v("List Price w/out Tax")]),
              _vm._v(" "),
              _c("th", [_vm._v("List Price w/ Tax")]),
              _vm._v(" "),
              _c("th", [_vm._v("Conversion Qty")]),
              _vm._v(" "),
              _c("th", [_vm._v("Conversion UOM")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h5",
          { staticClass: "text-main", staticStyle: { "font-weight": "bold" } },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Salesman Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("\n              Information\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Product Name\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Last name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Username:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Password:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c(
              "h4",
              {
                staticStyle: {
                  "font-weight": "bold",
                  "text-decoration": "underline"
                }
              },
              [_vm._v("\n                  Location\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Email:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Telephone:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Mobile:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  User Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Address:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Department:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("Division:")
            ]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Area:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  District:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Title:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Postal Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Product Line:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h5",
          { staticClass: "text-main", staticStyle: { "font-weight": "bold" } },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Salesman Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("\n              Information\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                First name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "", value: "Angelito" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Last name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "Ugat" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Username:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "angelpink" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Password:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "******" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c(
              "h4",
              {
                staticStyle: {
                  "font-weight": "bold",
                  "text-decoration": "underline"
                }
              },
              [_vm._v("\n                  Location\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Email:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "angelugat@gmail.com" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Telephone:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "412-0000" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Mobile:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "0910987654" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  User Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "Test1234" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Address:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Baclayon" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Department:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Corp IT" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("Division:")
            ]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Sys Dev" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Area:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "East/Interior" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  District:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "District I" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Title:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "IT Salesman" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Postal Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "6300" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Product Line:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "All" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c("h3", { staticClass: "panel-title" }, [_vm._v("Export File")])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-body",
          staticStyle: { position: "relative", "text-align": "center" }
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-lg btn-info",
              attrs: {
                id: "demo-state-btn",
                "data-loading-text": "Loading...",
                type: "button"
              }
            },
            [_vm._v("\n        Export Data\n      ")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImportCustomer.vue?vue&type=template&id=a7537764&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImportCustomer.vue?vue&type=template&id=a7537764& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c(
          "div",
          { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
              [
                _c("router-link", { attrs: { to: "/customer_masterfile" } }, [
                  _c("a", { attrs: { href: "javascript:;" } }, [
                    _c(
                      "button",
                      { staticClass: "btn btn-primary btn-rounded pull-right" },
                      [
                        _c("i", { staticClass: "fa fa-arrow-left" }),
                        _vm._v(" Back\n              ")
                      ]
                    )
                  ])
                ])
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("hr", { staticClass: "new-section-xs bord" })
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "2px" } },
      [
        _c(
          "h3",
          {
            staticClass: "panel-title",
            staticStyle: { "font-weight": "bold" }
          },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Import Customer File\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-body" }, [
      _c("p", [
        _vm._v(
          "This is a bootstrap theme of Dropzone.js with a completely different user experience."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bord-top pad-ver" }, [
        _c(
          "span",
          { staticClass: "btn btn-success fileinput-button dz-clickable" },
          [
            _c("i", { staticClass: "fa fa-plus" }),
            _vm._v(" "),
            _c("span", [_vm._v("Add files...")])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "btn-group pull-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { id: "dz-upload-btn", type: "submit", disabled: "" }
            },
            [
              _c("i", { staticClass: "fa fa-upload-cloud" }),
              _vm._v(" Upload\n          ")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger cancel",
              attrs: { id: "dz-remove-btn", type: "reset", disabled: "" }
            },
            [_c("i", { staticClass: "demo-psi-trash" })]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "dz-previews" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass:
                "table table-bordered table-hover dt-responsive nowrap table-vcenter",
              attrs: { id: "approvedTbl", width: "100%" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("Account Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Account Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Account Group Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Account Group Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Account Description")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Account Classification ID")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Address")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Action")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Address 2")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Address 3")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Location Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Location Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Account Credit Limit")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Branch Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Branch Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Branch Description")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Ian Tabz")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TAG-00001")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("DRS")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Drug Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Drug Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("490")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict I")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [
                                _c("i", { staticClass: "fa fa-check" }),
                                _vm._v(" Approve\n                      ")
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [
                                _c("i", { staticClass: "fa fa-close" }),
                                _vm._v(" Disapprove\n                      ")
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Tagbilaran")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Ian Tabz")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TAG-00001")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Ian Tabz")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Drug Store")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Joseph Santos")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("DAU-00082")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("SSS")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sari-sari Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sari-sari Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("495")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict I")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Dauis")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Joseph Santos")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("DAU-00082")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Joseph Santos")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sari-sari Store")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Paolo Balezuela")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TAG-00002")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("SSS")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sari-sari Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sari-sari Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("495")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict I")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Maribojoc")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Paolo Balezuela")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TAG-00002")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Paolo Balezuela")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sari-sari Store")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Jerin Roluna")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("CAL-00017")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("HOR")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Horeca")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Horeca")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("492")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict I")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Calape")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Jerin Roluna")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("CAL-00017")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Jerin Roluna")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Horeca")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("OUR DELIBREAD BAKESHOP (TUBIGON)")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TUB-00011")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("HOR")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Horeca")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Horeca")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("492")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict I")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Tubigon")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("OUR DELIBREAD BAKESHOP (TUBIGON)")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TUB-00011")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("OUR DELIBREAD BAKESHOP (TUBIGON)")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Horeca")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Test")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00185")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("GRO")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Grocery Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Grocery Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("491")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict III")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Alicia")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00185")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Grocery Store")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Patrick Cutor")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TRI-00168")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("CVS")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Convenience Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Convenience Store")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("489")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict II")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Trinidad")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Patrick Cutor")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("TRI-00168")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Convenience Store")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Test2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00039")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("CVS")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("493")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict III")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Alicia")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00039")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Test2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00039")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("CVS")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("493")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict III")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Alicia")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00039")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Test2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00039")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("CVS")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("493")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Disrict III")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-rounded btn-xs" },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                    Action\n                    "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Approve")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Disapprove")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Alicia")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Bohol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ALI-00039")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("null")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("6300")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Test")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Market Stall")])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemMasterfile.vue?vue&type=template&id=0bccd4fc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemMasterfile.vue?vue&type=template&id=0bccd4fc& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.show_su_div,
              expression: "!show_su_div"
            }
          ],
          staticClass: "panel-heading",
          attrs: { id: "showTitle" }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.show_su_div,
              expression: "!show_su_div"
            }
          ],
          staticClass: "panel-body",
          attrs: { id: "tblDtl" }
        },
        [_vm._m(1), _vm._v(" "), _vm._m(2)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show_su_div,
              expression: "show_su_div"
            }
          ],
          staticClass: "panel-body"
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
            [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-rounded pull-right btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.addBtn()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Back\n          ")
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "row", staticStyle: { height: "35px" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { margin: "0px 0px 10px 0px" }
              },
              [
                _c("div", {
                  staticClass: "col-lg-6",
                  staticStyle: { padding: "15px" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                  [
                    _c("router-link", { attrs: { to: "" } }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-success btn-rounded pull-right btn-sm",
                            attrs: { id: "submitform", type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Submit\n                ")
                          ]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-body",
          staticStyle: { display: "none" },
          attrs: { id: "editDtls" }
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
            [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-rounded pull-right btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.editDtlsBtn()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Back\n          ")
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _vm._m(6),
            _vm._v(" "),
            _c("div", { staticClass: "row", staticStyle: { height: "35px" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { margin: "0px 0px 10px 0px" }
              },
              [
                _c("div", {
                  staticClass: "col-lg-6",
                  staticStyle: { padding: "15px" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                  [
                    _c("router-link", { attrs: { to: "" } }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-success btn-rounded pull-right btn-sm",
                            attrs: { id: "submitform", type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Submit\n                ")
                          ]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "panel-title", staticStyle: { "font-weight": "bold" } },
      [_c("i", { staticClass: "fa fa-truck" }), _vm._v(" Item Lists\n      ")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
      [_c("div", { staticClass: "col-lg-12" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c(
        "table",
        {
          staticClass:
            "table table-bordered table-hover dt-responsive nowrap table-vcenter",
          attrs: { id: "salesmanTbl", width: "100%" }
        },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("Prdct Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Prdct Shrt Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Desc")]),
              _vm._v(" "),
              _c("th", [_vm._v("Company Code")]),
              _vm._v(" "),
              _c("th", [_vm._v("Item Code")]),
              _vm._v(" "),
              _c("th", [_vm._v("Barcode")]),
              _vm._v(" "),
              _c("th", [_vm._v("Option")]),
              _vm._v(" "),
              _c("th", [_vm._v("Brand")]),
              _vm._v(" "),
              _c("th", [_vm._v("Principal")]),
              _vm._v(" "),
              _c("th", [_vm._v("Product Family")]),
              _vm._v(" "),
              _c("th", [_vm._v("Keywords")]),
              _vm._v(" "),
              _c("th", [_vm._v("UOM")]),
              _vm._v(" "),
              _c("th", [_vm._v("List Price w/out Tax")]),
              _vm._v(" "),
              _c("th", [_vm._v("List Price w/ Tax")]),
              _vm._v(" "),
              _c("th", [_vm._v("Conversion Qty")]),
              _vm._v(" "),
              _c("th", [_vm._v("Conversion UOM")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
              _vm._v(" "),
              _c("td", [_vm._v("S0009")]),
              _vm._v(" "),
              _c("td", [_vm._v("100053")]),
              _vm._v(" "),
              _c("td", [_vm._v("2.20E+12")]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                      attrs: { "data-toggle": "dropdown", type: "button" }
                    },
                    [
                      _vm._v(
                        "\n                    Active\n                    "
                      ),
                      _c("i", { staticClass: "dropdown-caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "blue" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Active")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("BW BAKING CUP")]),
              _vm._v(" "),
              _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
              _vm._v(" "),
              _c("td", [_vm._v("BAKING NEEDS")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n                BAKING CUPS\n              ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("CASE96")]),
              _vm._v(" "),
              _c("td", [_vm._v("385.714")]),
              _vm._v(" "),
              _c("td", [_vm._v("432")]),
              _vm._v(" "),
              _c("td", [_vm._v("96")]),
              _vm._v(" "),
              _c("td", [_vm._v("BOX")])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h5",
          { staticClass: "text-main", staticStyle: { "font-weight": "bold" } },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Salesman Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("\n              Information\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Product Name\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Last name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Username:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Password:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c(
              "h4",
              {
                staticStyle: {
                  "font-weight": "bold",
                  "text-decoration": "underline"
                }
              },
              [_vm._v("\n                  Location\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Email:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Telephone:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Mobile:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  User Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Address:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Department:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("Division:")
            ]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Area:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  District:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Title:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Postal Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Product Line:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h5",
          { staticClass: "text-main", staticStyle: { "font-weight": "bold" } },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Salesman Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("\n              Information\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                First name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "", value: "Angelito" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Last name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "Ugat" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Username:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "angelpink" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Password:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "******" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c(
              "h4",
              {
                staticStyle: {
                  "font-weight": "bold",
                  "text-decoration": "underline"
                }
              },
              [_vm._v("\n                  Location\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Email:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "angelugat@gmail.com" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Telephone:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "412-0000" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Mobile:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "0910987654" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  User Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "Test1234" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Address:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Baclayon" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Department:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Corp IT" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("Division:")
            ]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Sys Dev" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Area:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "East/Interior" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  District:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "District I" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Title:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "IT Salesman" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Postal Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "6300" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Product Line:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "All" }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PromoFile.vue?vue&type=template&id=af71a060&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PromoFile.vue?vue&type=template&id=af71a060& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "page-content" } }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2" },
          [
            _c("div", { staticClass: "row pricing pricing-no-gutter-sm" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "panel" }, [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("p", { staticClass: "pricing-title" }, [
                      _vm._v("Personal")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pricing-desc" }, [
                      _vm._v(
                        "\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n              "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pricing-price" }, [
                      _c("p", [
                        _c(
                          "span",
                          { staticClass: "text-semibold text-primary" },
                          [_vm._v("$19")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Monthly")])
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "pricing-list" }, [
                      _c("li", [
                        _c("strong", [_vm._v("5")]),
                        _vm._v(" Projects")
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("10")]),
                        _vm._v(" GB Storage")
                      ]),
                      _vm._v(" "),
                      _c("li", [_c("strong", [_vm._v("1")]), _vm._v(" User")]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("Free")]),
                        _vm._v(" Support")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-block btn-primary btn-lg" },
                      [_vm._v("Choose")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 pricing-featured" }, [
                _c("div", { staticClass: "panel" }, [
                  _c("div", { staticClass: "ribbon" }, [
                    _c("span", [_vm._v("POPULAR")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body" }, [
                    _c("p", { staticClass: "pricing-title" }, [
                      _vm._v("Premium")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pricing-desc" }, [
                      _vm._v(
                        "\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n              "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pricing-price" }, [
                      _c("p", [
                        _c(
                          "span",
                          { staticClass: "text-semibold text-success" },
                          [_vm._v("$39")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Monthly")])
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "pricing-list" }, [
                      _c("li", [
                        _c("strong", [_vm._v("20")]),
                        _vm._v(" Projects")
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("100")]),
                        _vm._v(" GB Storage")
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("50")]),
                        _vm._v(" Users")
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("Free")]),
                        _vm._v(" Support")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-block btn-success btn-lg" },
                      [_vm._v("Choose")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "panel" }, [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("p", { staticClass: "pricing-title" }, [
                      _vm._v("Enterprise")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pricing-desc" }, [
                      _vm._v(
                        "\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n              "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pricing-price" }, [
                      _c("p", [
                        _c(
                          "span",
                          { staticClass: "text-semibold text-purple" },
                          [_vm._v("$99")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Monthly")])
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "pricing-list" }, [
                      _c("li", [
                        _c("strong", [_vm._v("Unlimited")]),
                        _vm._v(" Projects")
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("Unlimited")]),
                        _vm._v(" GB Storage")
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("Unlimited")]),
                        _vm._v(" Users")
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("Free")]),
                        _vm._v(" Support")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-block btn-purple btn-lg" },
                      [_vm._v("Choose")]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanComponent.vue?vue&type=template&id=cfa73d18&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SalesmanComponent.vue?vue&type=template&id=cfa73d18& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.show_su_div,
              expression: "!show_su_div"
            }
          ],
          staticClass: "panel-heading",
          attrs: { id: "showTitle" }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.show_su_div,
              expression: "!show_su_div"
            }
          ],
          staticClass: "panel-body",
          attrs: { id: "tblDtl" }
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
            [
              _c("div", { staticClass: "col-lg-12" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-success btn-rounded pull-right btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.addBtn()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-plus-circle" }),
                    _vm._v(" Salesman\n          ")
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass:
                  "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                attrs: { id: "salesmanTbl", width: "100%" }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("tbody", [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("angelpink")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Angelito")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Ugat")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Corp IT")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Test")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("East/Interior")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("District I")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Salesman")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("All")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-xs",
                          on: {
                            click: function($event) {
                              return _vm.editBtn()
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-pencil-square-o" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                Upper Ground, North Wing, Island City Mall, Tagbilaran City,\n                Bohol\n              "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("6300")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("ianmark.tabz@gmail.com")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("1847")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("09397410437")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Test1234")])
                  ]),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _vm._m(7)
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show_su_div,
              expression: "show_su_div"
            }
          ],
          staticClass: "panel-body"
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
            [
              _vm._m(8),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-rounded pull-right btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.addBtn()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Back\n          ")
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _vm._m(9),
            _vm._v(" "),
            _c("div", { staticClass: "row", staticStyle: { height: "35px" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { margin: "0px 0px 10px 0px" }
              },
              [
                _c("div", {
                  staticClass: "col-lg-6",
                  staticStyle: { padding: "15px" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                  [
                    _c("router-link", { attrs: { to: "" } }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-success btn-rounded pull-right btn-sm",
                            attrs: { id: "submitform", type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Submit\n                ")
                          ]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-body",
          staticStyle: { display: "none" },
          attrs: { id: "editDtls" }
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
            [
              _vm._m(10),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-rounded pull-right btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.editDtlsBtn()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Back\n          ")
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _vm._m(11),
            _vm._v(" "),
            _c("div", { staticClass: "row", staticStyle: { height: "35px" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { margin: "0px 0px 10px 0px" }
              },
              [
                _c("div", {
                  staticClass: "col-lg-6",
                  staticStyle: { padding: "15px" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
                  [
                    _c("router-link", { attrs: { to: "" } }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-success btn-rounded pull-right btn-sm",
                            attrs: { id: "submitform", type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Submit\n                ")
                          ]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "panel-title", staticStyle: { "font-weight": "bold" } },
      [
        _c("i", { staticClass: "fa fa-truck" }),
        _vm._v(" Salesman List\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Username")]),
        _vm._v(" "),
        _c("th", [_vm._v("First name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Department")]),
        _vm._v(" "),
        _c("th", [_vm._v("Division")]),
        _vm._v(" "),
        _c("th", [_vm._v("Area")]),
        _vm._v(" "),
        _c("th", [_vm._v("District")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Lines")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Postal Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Telehpone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mobile no.")]),
        _vm._v(" "),
        _c("th", [_vm._v("User Code")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Tabz")]),
      _vm._v(" "),
      _c("td", [_vm._v("Ian")]),
      _vm._v(" "),
      _c("td", [_vm._v("Tabz")]),
      _vm._v(" "),
      _c("td", [_vm._v("Corp IT")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test")]),
      _vm._v(" "),
      _c("td", [_vm._v("East/Interior")]),
      _vm._v(" "),
      _c("td", [_vm._v("District I")]),
      _vm._v(" "),
      _c("td", [_vm._v("Salesman")]),
      _vm._v(" "),
      _c("td", [_vm._v("All")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info btn-xs" }, [
          _c("i", { staticClass: "fa fa-pencil-square-o" })
        ])
      ]),
      _vm._v(" "),
      _c("td", [
        _vm._v(
          "\n                Upper Ground, North Wing, Island City Mall, Tagbilaran City,\n                Bohol\n              "
        )
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("6300")]),
      _vm._v(" "),
      _c("td", [_vm._v("ianmark.tabz@gmail.com")]),
      _vm._v(" "),
      _c("td", [_vm._v("1847")]),
      _vm._v(" "),
      _c("td", [_vm._v("09397410437")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test1234")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("ian Tabz")]),
      _vm._v(" "),
      _c("td", [_vm._v("Tabz")]),
      _vm._v(" "),
      _c("td", [_vm._v("Tabz")]),
      _vm._v(" "),
      _c("td", [_vm._v("Corp IT")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test")]),
      _vm._v(" "),
      _c("td", [_vm._v("East/Interior")]),
      _vm._v(" "),
      _c("td", [_vm._v("District I")]),
      _vm._v(" "),
      _c("td", [_vm._v("Salesman")]),
      _vm._v(" "),
      _c("td", [_vm._v("All")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-danger btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Inactive\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info btn-xs" }, [
          _c("i", { staticClass: "fa fa-pencil-square-o" })
        ])
      ]),
      _vm._v(" "),
      _c("td", [
        _vm._v(
          "\n                Upper Ground, North Wing, Island City Mall, Tagbilaran City,\n                Bohol\n              "
        )
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("6300")]),
      _vm._v(" "),
      _c("td", [_vm._v("ianmark.tabz@gmail.com")]),
      _vm._v(" "),
      _c("td", [_vm._v("1847")]),
      _vm._v(" "),
      _c("td", [_vm._v("09397410437")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test1234")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Pawix")]),
      _vm._v(" "),
      _c("td", [_vm._v("Paulo")]),
      _vm._v(" "),
      _c("td", [_vm._v("Balenzuela")]),
      _vm._v(" "),
      _c("td", [_vm._v("Corp IT")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test")]),
      _vm._v(" "),
      _c("td", [_vm._v("East/Interior")]),
      _vm._v(" "),
      _c("td", [_vm._v("District I")]),
      _vm._v(" "),
      _c("td", [_vm._v("Salesman")]),
      _vm._v(" "),
      _c("td", [_vm._v("All")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info btn-xs" }, [
          _c("i", { staticClass: "fa fa-pencil-square-o" })
        ])
      ]),
      _vm._v(" "),
      _c("td", [
        _vm._v(
          "\n                Upper Ground, North Wing, Island City Mall, Tagbilaran City,\n                Bohol\n              "
        )
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("6300")]),
      _vm._v(" "),
      _c("td", [_vm._v("pawix.gwapo@gmail.com")]),
      _vm._v(" "),
      _c("td", [_vm._v("1847")]),
      _vm._v(" "),
      _c("td", [_vm._v("09397410437")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test1234")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-group dropdown" }, [
      _c(
        "button",
        {
          staticClass:
            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
          attrs: { "data-toggle": "dropdown", type: "button" }
        },
        [
          _vm._v("\n                    Active\n                    "),
          _c("i", { staticClass: "dropdown-caret" })
        ]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
        _c("li", [
          _c("a", { staticStyle: { color: "blue" }, attrs: { href: "#" } }, [
            _vm._v("Active")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
            _vm._v("Inactive")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("joseph")]),
      _vm._v(" "),
      _c("td", [_vm._v("Joseph")]),
      _vm._v(" "),
      _c("td", [_vm._v("Santos")]),
      _vm._v(" "),
      _c("td", [_vm._v("Corp IT")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test")]),
      _vm._v(" "),
      _c("td", [_vm._v("East/Interior")]),
      _vm._v(" "),
      _c("td", [_vm._v("District II")]),
      _vm._v(" "),
      _c("td", [_vm._v("Salesman")]),
      _vm._v(" "),
      _c("td", [_vm._v("All")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info btn-xs" }, [
          _c("i", { staticClass: "fa fa-pencil-square-o" })
        ])
      ]),
      _vm._v(" "),
      _c("td", [
        _vm._v(
          "\n                Upper Ground, North Wing, Island City Mall, Tagbilaran City,\n                Bohol\n              "
        )
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("6300")]),
      _vm._v(" "),
      _c("td", [_vm._v("ianmark.tabz@gmail.com")]),
      _vm._v(" "),
      _c("td", [_vm._v("1847")]),
      _vm._v(" "),
      _c("td", [_vm._v("09397410437")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test1234")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("detz")]),
      _vm._v(" "),
      _c("td", [_vm._v("Jendhel")]),
      _vm._v(" "),
      _c("td", [_vm._v("Josol")]),
      _vm._v(" "),
      _c("td", [_vm._v("Corp IT")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test")]),
      _vm._v(" "),
      _c("td", [_vm._v("East/Interior")]),
      _vm._v(" "),
      _c("td", [_vm._v("District I")]),
      _vm._v(" "),
      _c("td", [_vm._v("Salesman")]),
      _vm._v(" "),
      _c("td", [_vm._v("All")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info btn-xs" }, [
          _c("i", { staticClass: "fa fa-pencil-square-o" })
        ])
      ]),
      _vm._v(" "),
      _c("td", [
        _vm._v(
          "\n                Upper Ground, North Wing, Island City Mall, Tagbilaran City,\n                Bohol\n              "
        )
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("6300")]),
      _vm._v(" "),
      _c("td", [_vm._v("ianmark.tabz@gmail.com")]),
      _vm._v(" "),
      _c("td", [_vm._v("1847")]),
      _vm._v(" "),
      _c("td", [_vm._v("09397410437")]),
      _vm._v(" "),
      _c("td", [_vm._v("Test1234")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h5",
          { staticClass: "text-main", staticStyle: { "font-weight": "bold" } },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Salesman Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("\n              Information\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                First name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Last name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Username:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Password:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", { staticClass: "form-control", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c(
              "h4",
              {
                staticStyle: {
                  "font-weight": "bold",
                  "text-decoration": "underline"
                }
              },
              [_vm._v("\n                  Location\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Email:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Telephone:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Mobile:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  User Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Address:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Department:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("Division:")
            ]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Area:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  District:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Title:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Postal Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Product Line:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6", staticStyle: { padding: "15px" } },
      [
        _c(
          "h5",
          { staticClass: "text-main", staticStyle: { "font-weight": "bold" } },
          [
            _c("i", { staticClass: "fa fa-address-card-o" }),
            _vm._v(" Salesman Setup\n          ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }, [
        _c(
          "h4",
          {
            staticStyle: {
              "font-weight": "bold",
              "text-decoration": "underline"
            }
          },
          [_vm._v("\n              Information\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                First name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "", value: "Angelito" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Last name:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "Ugat" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Username:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "angelpink" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "control-label" }, [
            _vm._v("\n                Password:\n                "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "******" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c(
              "h4",
              {
                staticStyle: {
                  "font-weight": "bold",
                  "text-decoration": "underline"
                }
              },
              [_vm._v("\n                  Location\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Email:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "angelugat@gmail.com" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Telephone:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "412-0000" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Mobile:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "0910987654" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  User Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: "Test1234" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Address:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Baclayon" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Department:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Corp IT" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("Division:")
            ]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "Sys Dev" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Area:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "East/Interior" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  District:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "District I" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [_vm._v("Title:")]),
            _vm._v(" "),
            _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "IT Salesman" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Postal Code:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "6300" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "control-label" }, [
              _vm._v("\n                  Product Line:\n                  "),
              _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "", value: "All" }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanRoutes.vue?vue&type=template&id=38e530e3&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SalesmanRoutes.vue?vue&type=template&id=38e530e3& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
          [
            _c("div", { staticClass: "col-lg-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-rounded pull-right btn-sm",
                  on: {
                    click: function($event) {
                      return _vm.addBtn()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-plus-circle" }),
                  _vm._v(" Routes\n          ")
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass:
                "table table-bordered table-hover dt-responsive nowrap table-vcenter",
              attrs: { id: "routesTbl", width: "100%" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("tbody", [
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Alicia")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-xs",
                        on: {
                          click: function($event) {
                            return _vm.editBtn()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-pencil-square-o" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-xs",
                        on: {
                          click: function($event) {
                            return _vm.customersBtn()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-group" }),
                        _vm._v(" Customers\n                  "),
                        _c(
                          "span",
                          {
                            staticClass: "badge badge-primary",
                            staticStyle: { top: "-1px", color: "#000000" }
                          },
                          [_vm._v("3")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-xs",
                        on: {
                          click: function($event) {
                            return _vm.salesmanBtn()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-ambulance" }),
                        _vm._v(" Salesman\n                  "),
                        _c(
                          "span",
                          {
                            staticClass: "badge badge-primary",
                            staticStyle: { top: "-1px", color: "#000000" }
                          },
                          [_vm._v("2")]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(11)
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(12),
      _vm._v(" "),
      _vm._m(13),
      _vm._v(" "),
      _vm._m(14)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [
        _c("i", { staticClass: "fa fa-map-marker" }),
        _vm._v(" Routes\n      ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Routes")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Tagbilaran City")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("7")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Ubay")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-danger btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Inactive\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("8")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Anda")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("0")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Danao")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("6")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Buenavista")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Pilar")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("4")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Getafe")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("5")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Dagohoy")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("2")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-group dropdown" }, [
      _c(
        "button",
        {
          staticClass:
            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
          attrs: { "data-toggle": "dropdown", type: "button" }
        },
        [
          _vm._v("\n                    Active\n                    "),
          _c("i", { staticClass: "dropdown-caret" })
        ]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
        _c("li", [
          _c("a", { staticStyle: { color: "blue" }, attrs: { href: "#" } }, [
            _vm._v("Active")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
            _vm._v("Inactive")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Jagna")]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "btn-group dropdown" }, [
          _c(
            "button",
            {
              staticClass:
                "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
              attrs: { "data-toggle": "dropdown", type: "button" }
            },
            [
              _vm._v("\n                    Active\n                    "),
              _c("i", { staticClass: "dropdown-caret" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c(
                "a",
                { staticStyle: { color: "blue" }, attrs: { href: "#" } },
                [_vm._v("Active")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticStyle: { color: "red" }, attrs: { href: "#" } }, [
                _vm._v("Inactive")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info btn-xs", attrs: { title: "Edit" } },
          [_c("i", { staticClass: "fa fa-pencil-square-o" })]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-success btn-xs" }, [
          _c("i", { staticClass: "fa fa-group" }),
          _vm._v(" Customers\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("0")]
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-xs" }, [
          _c("i", { staticClass: "fa fa-ambulance" }),
          _vm._v(" Salesman\n                  "),
          _c(
            "span",
            {
              staticClass: "badge badge-primary",
              staticStyle: { top: "-1px", color: "#000000" }
            },
            [_vm._v("3")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "setupMdl",
          tabindex: "-1",
          role: "dialog",
          "data-backdrop": "static",
          "data-keyboard": "false",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  { staticClass: "modal-title", attrs: { id: "MdlTitle" } },
                  [_vm._v("Modal title")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "route" } }, [
                        _vm._v("Route")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          id: "route",
                          "aria-describedby": "emailHelp",
                          placeholder: "Route"
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "Btnsubmit" }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "customersMdl",
          tabindex: "-1",
          role: "dialog",
          "data-backdrop": "static",
          "data-keyboard": "false",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "MdlTitleCustomer" }
                  },
                  [_vm._v("Modal title")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                      attrs: { id: "customerTbl", width: "100%" }
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("td", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Account Group Code")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Account Code")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Account Description")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Address")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("Spencer Agosto")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("DRS")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("ALI-00057")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Drug Store")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("District III Alicia")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Jerin Roluna")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("PMS")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("ALI-00058")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Market Stall")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("District III Alicia")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Paolo Balezuela")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("HOR")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("ALI-00059")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Horeca")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("District III Alicia")])
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                )
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "salesmanMdl",
          tabindex: "-1",
          role: "dialog",
          "data-backdrop": "static",
          "data-keyboard": "false",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _c("i", { staticClass: "fa fa-ambulance" }),
                  _vm._v(" Salesman assigned in this area\n            ")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                      attrs: { id: "salesmanTbl", width: "100%" }
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("td", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Department")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Division")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Area")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Product Lines")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("User Code")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("i", { staticClass: "fa fa-phone" }),
                            _vm._v(" Mobile\n                    ")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("Ruben Andez")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("LDI")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("WDG")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("East/Interior/North")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("All")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("WDG-S04")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("+639351277494")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Lorem Ipsum")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("LDI")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("WDG")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("East/Interior/North")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("All")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("WDG-S04")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("+639351366585")])
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadDataFiles.vue?vue&type=template&id=416f8e51&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadDataFiles.vue?vue&type=template&id=416f8e51& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-content" } }, [
    _c("div", { staticClass: "panel" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "bord-top pad-ver" }, [
          _c(
            "form",
            { attrs: { method: "post", enctype: "multipart/form-data" } },
            [
              _c("input", {
                ref: "file",
                staticClass: "btn btn-success fileinput-button dz-clickable",
                staticStyle: {
                  border: "1px solid #ccc",
                  display: "inline-block",
                  padding: "6px 12px",
                  cursor: "pointer"
                },
                attrs: {
                  type: "file",
                  multiple: "",
                  id: "file",
                  name: "file",
                  accept: ".csv"
                },
                on: {
                  change: function($event) {
                    return _vm.handleFilesUpload()
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "btn-group pull-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "submitform" },
                    on: {
                      click: function($event) {
                        return _vm.submitFiles()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-upload-cloud" }),
                    _vm._v(" Upload\n              ")
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(3)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("Upload File")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n          You can upload data files either product item masterfiles (LDI) or\n          payment terms (CCD).\n          "
      ),
      _c("span", [_vm._v('Note: ".csv" file format only. ')])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger cancel",
        attrs: { id: "dz-remove-btn", type: "reset" }
      },
      [_c("i", { staticClass: "demo-psi-trash" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c("h3", { staticClass: "panel-title" }, [
          _vm._v(
            "\n          Basic Data Tables with responsive plugin\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass:
                "table table-bordered table-hover dt-responsive nowrap table-vcenter",
              attrs: { id: "data_files", width: "100%" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("Prdct Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Prdct Shrt Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Desc")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Company Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Item Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Barcode")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Option")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Brand")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Principal")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Product Family")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Keywords")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("UOM")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("List Price w/out Tax")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("List Price w/ Tax")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Conversion Qty")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Conversion UOM")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("BW B CUP W GLZNE 2oz")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("BW BAKING CUP WHITE GLAZZINE 2oz")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("S0009")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("100053")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("2.20E+12")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "btn-group dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                          attrs: { "data-toggle": "dropdown", type: "button" }
                        },
                        [
                          _vm._v(
                            "\n                      Active\n                      "
                          ),
                          _c("i", { staticClass: "dropdown-caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "dropdown-menu dropdown-menu-right" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "blue" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Active")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "red" },
                                attrs: { href: "#" }
                              },
                              [_vm._v("Inactive")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("BW BAKING CUP")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("BEST WAY GENERAL MDSE.")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("BAKING NEEDS")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("\n                  BAKING CUPS\n                ")
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("CASE96")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("385.714")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("432")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("96")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("BOX")])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsertypeComponent.vue?vue&type=template&id=e5e2d3c6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UsertypeComponent.vue?vue&type=template&id=e5e2d3c6& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "div",
        { staticClass: "row", staticStyle: { margin: "0px 0px 10px 0px" } },
        [
          _c("div", { staticClass: "col-lg-12" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-success btn-rounded pull-right",
                on: {
                  click: function($event) {
                    return _vm.addUserType()
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-plus-circle" }),
                _vm._v(" User Type\n                ")
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table table-striped table-bordered",
          attrs: { id: "tbl_usertype", cellspacing: "0", width: "100%" }
        },
        [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.user_types, function(data, i) {
              return _c("tr", { key: i }, [
                _c("td", [_vm._v(_vm._s(data.usertype))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(data.status == true ? "Active" : "Inactive") +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._m(2, true),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-xs",
                      on: {
                        click: function($event) {
                          return _vm.editUserType(data)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-pencil-square-o" }),
                      _vm._v(" Edit\n                        ")
                    ]
                  )
                ])
              ])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "add_usertype_modal",
            tabindex: "-1",
            role: "dialog",
            "data-backdrop": "static",
            "data-keyboard": "false",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "exampleModalLabel" }
                    },
                    [
                      _vm._v(
                        "\n                            Modal title\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Close"
                      },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submitform($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "has-error": _vm.dataForm.errors.has("usertype")
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dataForm.id,
                                expression: "dataForm.id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "hidden", id: "id" },
                            domProps: { value: _vm.dataForm.id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.dataForm,
                                  "id",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "usertype" } }, [
                            _vm._v("User Type:")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dataForm.usertype,
                                expression: "dataForm.usertype"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "usertype",
                              placeholder: "User Type"
                            },
                            domProps: { value: _vm.dataForm.usertype },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.dataForm,
                                  "usertype",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.dataForm, field: "usertype" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          attrs: { type: "button", "data-dismiss": "modal" },
                          on: {
                            click: function($event) {
                              return _vm.closeModal()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Close\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.submit()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Save changes\n                            "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c(
        "h3",
        { staticClass: "panel-title", staticStyle: { "font-weight": "bold" } },
        [_vm._v("User Types")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("User Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-group btn-group-xs dropdown" }, [
      _c("button", { staticClass: "btn btn-info" }, [_vm._v("Action")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-info dropdown-toggle dropdown-toggle-icon",
          attrs: {
            "data-toggle": "dropdown",
            type: "button",
            "aria-expanded": "false"
          }
        },
        [_c("i", { staticClass: "dropdown-caret" })]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "dropdown-menu" }, [
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Action")])]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Another action")])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Something else here")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "divider" }),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Separated link")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newCustomerRequest.vue?vue&type=template&id=3eddfc1c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newCustomerRequest.vue?vue&type=template&id=3eddfc1c& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "page-content" } }, [
      _c("div", { staticClass: "panel" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _c(
            "h3",
            {
              staticClass: "panel-title",
              staticStyle: { "font-weight": "bold", "font-size": "13px" }
            },
            [
              _c("i", { staticClass: "fa fa-vcard-o" }),
              _vm._v(" Customer Requests\n      ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tab-base" }, [
          _c("ul", { staticClass: "nav nav-tabs" }, [
            _c("li", { staticClass: "active" }, [
              _c(
                "a",
                { attrs: { "data-toggle": "tab", href: "#demo-lft-tab-1" } },
                [
                  _vm._v("\n            Pending\n            "),
                  _c("span", { staticClass: "badge badge-warning" }, [
                    _vm._v("2")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                { attrs: { "data-toggle": "tab", href: "#demo-lft-tab-2" } },
                [
                  _vm._v("\n            Approved\n            "),
                  _c("span", { staticClass: "badge badge-success" }, [
                    _vm._v("1")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane fade active in",
                attrs: { id: "demo-lft-tab-1" }
              },
              [
                _c("div", { staticClass: "panel-body" }, [
                  _c(
                    "div",
                    {
                      staticClass: "row",
                      staticStyle: { margin: "0px 0px 10px 0px" }
                    },
                    [_c("div", { staticClass: "col-lg-12" })]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                        attrs: { id: "requestTbl", width: "100%" }
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("Account Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Group Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Group Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Description")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Classification ID")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Action")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Address 1")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Address 2")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Address 3")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Location Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Location Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Credit Limit")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Branch Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Branch Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Branch Description")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [_vm._v("Ian Tabz")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("COL-00060")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("DRS")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Drug Store")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Drug Store")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("490")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-success btn-rounded btn-xs"
                                },
                                [_c("i", { staticClass: "fa fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "btn-group dropdown" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                    attrs: {
                                      "data-toggle": "dropdown",
                                      type: "button"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                          Action\n                          "
                                    ),
                                    _c("i", { staticClass: "dropdown-caret" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "blue" },
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-check"
                                          }),
                                          _vm._v(
                                            " Approve\n                            "
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "red" },
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-close"
                                          }),
                                          _vm._v(
                                            " Disapprove\n                            "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Bohol")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Cogon")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Tagbilaran")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Ian Tabz")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("COL-00060")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("null")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("6300")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Ian Tabz")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Drug Store")])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Joseph Santos")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("COL-00060")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("SSS")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Sari-sari Store")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Sari-sari Store")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("490")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-success btn-rounded btn-xs"
                                },
                                [_c("i", { staticClass: "fa fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "btn-group dropdown" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                    attrs: {
                                      "data-toggle": "dropdown",
                                      type: "button"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                          Action\n                          "
                                    ),
                                    _c("i", { staticClass: "dropdown-caret" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "blue" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Approve")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "red" },
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v("Disapprove")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Dauis")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Biking")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Bohol")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Joseph Santos")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("COL-00060")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("null")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("6300")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Joseph Santos")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Sari-sari Store")])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "demo-lft-tab-2" } },
              [
                _c("div", { staticClass: "panel-body" }, [
                  _c(
                    "div",
                    {
                      staticClass: "row",
                      staticStyle: { margin: "0px 0px 10px 0px" }
                    },
                    [_c("div", { staticClass: "col-lg-12" })]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-bordered table-hover dt-responsive nowrap table-vcenter",
                        attrs: { id: "approvedTbl", width: "100%" }
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("Account Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Group Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Group Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Description")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Classification ID")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Action")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Address 1")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Address 2")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Address 3")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Location Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Location Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Account Credit Limit")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Branch Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Branch Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Branch Description")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [_vm._v("Ian Tabz")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("COL-00060")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("DRS")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Drug Store")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Drug Store")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("490")]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-success btn-rounded btn-xs"
                                },
                                [_c("i", { staticClass: "fa fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "btn-group dropdown" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon",
                                    attrs: {
                                      "data-toggle": "dropdown",
                                      type: "button"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                          Action\n                          "
                                    ),
                                    _c("i", { staticClass: "dropdown-caret" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "blue" },
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-check"
                                          }),
                                          _vm._v(
                                            " Approve\n                            "
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "red" },
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-close"
                                          }),
                                          _vm._v(
                                            " Disapprove\n                            "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Bohol")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Cogon")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Tagbilaran")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Ian Tabz")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("COL-00060")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("null")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("6300")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Ian Tabz")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Drug Store")])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AccountGroupCodes.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/AccountGroupCodes.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountGroupCodes_vue_vue_type_template_id_546a33ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountGroupCodes.vue?vue&type=template&id=546a33ce& */ "./resources/js/components/AccountGroupCodes.vue?vue&type=template&id=546a33ce&");
/* harmony import */ var _AccountGroupCodes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountGroupCodes.vue?vue&type=script&lang=js& */ "./resources/js/components/AccountGroupCodes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountGroupCodes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountGroupCodes_vue_vue_type_template_id_546a33ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountGroupCodes_vue_vue_type_template_id_546a33ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AccountGroupCodes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AccountGroupCodes.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AccountGroupCodes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountGroupCodes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AccountGroupCodes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AccountGroupCodes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountGroupCodes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AccountGroupCodes.vue?vue&type=template&id=546a33ce&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/AccountGroupCodes.vue?vue&type=template&id=546a33ce& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountGroupCodes_vue_vue_type_template_id_546a33ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AccountGroupCodes.vue?vue&type=template&id=546a33ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AccountGroupCodes.vue?vue&type=template&id=546a33ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountGroupCodes_vue_vue_type_template_id_546a33ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountGroupCodes_vue_vue_type_template_id_546a33ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/AddCustomerSetup.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/AddCustomerSetup.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCustomerSetup_vue_vue_type_template_id_1bd5dd89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomerSetup.vue?vue&type=template&id=1bd5dd89& */ "./resources/js/components/AddCustomerSetup.vue?vue&type=template&id=1bd5dd89&");
/* harmony import */ var _AddCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomerSetup.vue?vue&type=script&lang=js& */ "./resources/js/components/AddCustomerSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomerSetup_vue_vue_type_template_id_1bd5dd89___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomerSetup_vue_vue_type_template_id_1bd5dd89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddCustomerSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddCustomerSetup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/AddCustomerSetup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCustomerSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddCustomerSetup.vue?vue&type=template&id=1bd5dd89&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/AddCustomerSetup.vue?vue&type=template&id=1bd5dd89& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerSetup_vue_vue_type_template_id_1bd5dd89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerSetup.vue?vue&type=template&id=1bd5dd89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCustomerSetup.vue?vue&type=template&id=1bd5dd89&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerSetup_vue_vue_type_template_id_1bd5dd89___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerSetup_vue_vue_type_template_id_1bd5dd89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CustomerMasterfileComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/CustomerMasterfileComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerMasterfileComponent_vue_vue_type_template_id_09d71f66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66& */ "./resources/js/components/CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66&");
/* harmony import */ var _CustomerMasterfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerMasterfileComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomerMasterfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerMasterfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerMasterfileComponent_vue_vue_type_template_id_09d71f66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerMasterfileComponent_vue_vue_type_template_id_09d71f66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomerMasterfileComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomerMasterfileComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/CustomerMasterfileComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerMasterfileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerMasterfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterfileComponent_vue_vue_type_template_id_09d71f66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerMasterfileComponent.vue?vue&type=template&id=09d71f66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterfileComponent_vue_vue_type_template_id_09d71f66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterfileComponent_vue_vue_type_template_id_09d71f66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Dashboard1.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Dashboard1.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard1_vue_vue_type_template_id_7dc0be48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard1.vue?vue&type=template&id=7dc0be48& */ "./resources/js/components/Dashboard1.vue?vue&type=template&id=7dc0be48&");
/* harmony import */ var _Dashboard1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard1.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard1_vue_vue_type_template_id_7dc0be48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard1_vue_vue_type_template_id_7dc0be48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard1.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Dashboard1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard1.vue?vue&type=template&id=7dc0be48&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Dashboard1.vue?vue&type=template&id=7dc0be48& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard1_vue_vue_type_template_id_7dc0be48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard1.vue?vue&type=template&id=7dc0be48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard1.vue?vue&type=template&id=7dc0be48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard1_vue_vue_type_template_id_7dc0be48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard1_vue_vue_type_template_id_7dc0be48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditCustomerSetup.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/EditCustomerSetup.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCustomerSetup_vue_vue_type_template_id_8a12fc0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCustomerSetup.vue?vue&type=template&id=8a12fc0c& */ "./resources/js/components/EditCustomerSetup.vue?vue&type=template&id=8a12fc0c&");
/* harmony import */ var _EditCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCustomerSetup.vue?vue&type=script&lang=js& */ "./resources/js/components/EditCustomerSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCustomerSetup_vue_vue_type_template_id_8a12fc0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCustomerSetup_vue_vue_type_template_id_8a12fc0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditCustomerSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditCustomerSetup.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EditCustomerSetup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditCustomerSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCustomerSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomerSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditCustomerSetup.vue?vue&type=template&id=8a12fc0c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/EditCustomerSetup.vue?vue&type=template&id=8a12fc0c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomerSetup_vue_vue_type_template_id_8a12fc0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditCustomerSetup.vue?vue&type=template&id=8a12fc0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCustomerSetup.vue?vue&type=template&id=8a12fc0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomerSetup_vue_vue_type_template_id_8a12fc0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomerSetup_vue_vue_type_template_id_8a12fc0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ExportMasterfile.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExportMasterfile.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExportMasterfile_vue_vue_type_template_id_b1e731c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExportMasterfile.vue?vue&type=template&id=b1e731c6& */ "./resources/js/components/ExportMasterfile.vue?vue&type=template&id=b1e731c6&");
/* harmony import */ var _ExportMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExportMasterfile.vue?vue&type=script&lang=js& */ "./resources/js/components/ExportMasterfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExportMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExportMasterfile_vue_vue_type_template_id_b1e731c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExportMasterfile_vue_vue_type_template_id_b1e731c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExportMasterfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExportMasterfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExportMasterfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExportMasterfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExportMasterfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExportMasterfile.vue?vue&type=template&id=b1e731c6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExportMasterfile.vue?vue&type=template&id=b1e731c6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportMasterfile_vue_vue_type_template_id_b1e731c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExportMasterfile.vue?vue&type=template&id=b1e731c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExportMasterfile.vue?vue&type=template&id=b1e731c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportMasterfile_vue_vue_type_template_id_b1e731c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExportMasterfile_vue_vue_type_template_id_b1e731c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ImportCustomer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ImportCustomer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImportCustomer_vue_vue_type_template_id_a7537764___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportCustomer.vue?vue&type=template&id=a7537764& */ "./resources/js/components/ImportCustomer.vue?vue&type=template&id=a7537764&");
/* harmony import */ var _ImportCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportCustomer.vue?vue&type=script&lang=js& */ "./resources/js/components/ImportCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImportCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImportCustomer_vue_vue_type_template_id_a7537764___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImportCustomer_vue_vue_type_template_id_a7537764___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ImportCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ImportCustomer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ImportCustomer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImportCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ImportCustomer.vue?vue&type=template&id=a7537764&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ImportCustomer.vue?vue&type=template&id=a7537764& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportCustomer_vue_vue_type_template_id_a7537764___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportCustomer.vue?vue&type=template&id=a7537764& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImportCustomer.vue?vue&type=template&id=a7537764&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportCustomer_vue_vue_type_template_id_a7537764___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportCustomer_vue_vue_type_template_id_a7537764___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ItemMasterfile.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ItemMasterfile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemMasterfile_vue_vue_type_template_id_0bccd4fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemMasterfile.vue?vue&type=template&id=0bccd4fc& */ "./resources/js/components/ItemMasterfile.vue?vue&type=template&id=0bccd4fc&");
/* harmony import */ var _ItemMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemMasterfile.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemMasterfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemMasterfile_vue_vue_type_template_id_0bccd4fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemMasterfile_vue_vue_type_template_id_0bccd4fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemMasterfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemMasterfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ItemMasterfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemMasterfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemMasterfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemMasterfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemMasterfile.vue?vue&type=template&id=0bccd4fc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ItemMasterfile.vue?vue&type=template&id=0bccd4fc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemMasterfile_vue_vue_type_template_id_0bccd4fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemMasterfile.vue?vue&type=template&id=0bccd4fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemMasterfile.vue?vue&type=template&id=0bccd4fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemMasterfile_vue_vue_type_template_id_0bccd4fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemMasterfile_vue_vue_type_template_id_0bccd4fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PromoFile.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/PromoFile.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PromoFile_vue_vue_type_template_id_af71a060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PromoFile.vue?vue&type=template&id=af71a060& */ "./resources/js/components/PromoFile.vue?vue&type=template&id=af71a060&");
/* harmony import */ var _PromoFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PromoFile.vue?vue&type=script&lang=js& */ "./resources/js/components/PromoFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PromoFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PromoFile_vue_vue_type_template_id_af71a060___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PromoFile_vue_vue_type_template_id_af71a060___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PromoFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PromoFile.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/PromoFile.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromoFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PromoFile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PromoFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromoFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PromoFile.vue?vue&type=template&id=af71a060&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PromoFile.vue?vue&type=template&id=af71a060& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PromoFile_vue_vue_type_template_id_af71a060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PromoFile.vue?vue&type=template&id=af71a060& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PromoFile.vue?vue&type=template&id=af71a060&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PromoFile_vue_vue_type_template_id_af71a060___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PromoFile_vue_vue_type_template_id_af71a060___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ReportFile.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ReportFile.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/ReportFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SalesmanComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/SalesmanComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesmanComponent_vue_vue_type_template_id_cfa73d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesmanComponent.vue?vue&type=template&id=cfa73d18& */ "./resources/js/components/SalesmanComponent.vue?vue&type=template&id=cfa73d18&");
/* harmony import */ var _SalesmanComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesmanComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SalesmanComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SalesmanComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesmanComponent_vue_vue_type_template_id_cfa73d18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesmanComponent_vue_vue_type_template_id_cfa73d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SalesmanComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SalesmanComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SalesmanComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesmanComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SalesmanComponent.vue?vue&type=template&id=cfa73d18&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/SalesmanComponent.vue?vue&type=template&id=cfa73d18& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanComponent_vue_vue_type_template_id_cfa73d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesmanComponent.vue?vue&type=template&id=cfa73d18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanComponent.vue?vue&type=template&id=cfa73d18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanComponent_vue_vue_type_template_id_cfa73d18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanComponent_vue_vue_type_template_id_cfa73d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SalesmanRoutes.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/SalesmanRoutes.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesmanRoutes_vue_vue_type_template_id_38e530e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesmanRoutes.vue?vue&type=template&id=38e530e3& */ "./resources/js/components/SalesmanRoutes.vue?vue&type=template&id=38e530e3&");
/* harmony import */ var _SalesmanRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesmanRoutes.vue?vue&type=script&lang=js& */ "./resources/js/components/SalesmanRoutes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SalesmanRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesmanRoutes_vue_vue_type_template_id_38e530e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesmanRoutes_vue_vue_type_template_id_38e530e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SalesmanRoutes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SalesmanRoutes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SalesmanRoutes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesmanRoutes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanRoutes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SalesmanRoutes.vue?vue&type=template&id=38e530e3&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SalesmanRoutes.vue?vue&type=template&id=38e530e3& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanRoutes_vue_vue_type_template_id_38e530e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesmanRoutes.vue?vue&type=template&id=38e530e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesmanRoutes.vue?vue&type=template&id=38e530e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanRoutes_vue_vue_type_template_id_38e530e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesmanRoutes_vue_vue_type_template_id_38e530e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UploadDataFiles.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/UploadDataFiles.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadDataFiles_vue_vue_type_template_id_416f8e51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadDataFiles.vue?vue&type=template&id=416f8e51& */ "./resources/js/components/UploadDataFiles.vue?vue&type=template&id=416f8e51&");
/* harmony import */ var _UploadDataFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadDataFiles.vue?vue&type=script&lang=js& */ "./resources/js/components/UploadDataFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UploadDataFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadDataFiles_vue_vue_type_template_id_416f8e51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadDataFiles_vue_vue_type_template_id_416f8e51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UploadDataFiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UploadDataFiles.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/UploadDataFiles.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDataFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDataFiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadDataFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDataFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UploadDataFiles.vue?vue&type=template&id=416f8e51&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/UploadDataFiles.vue?vue&type=template&id=416f8e51& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDataFiles_vue_vue_type_template_id_416f8e51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDataFiles.vue?vue&type=template&id=416f8e51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadDataFiles.vue?vue&type=template&id=416f8e51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDataFiles_vue_vue_type_template_id_416f8e51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDataFiles_vue_vue_type_template_id_416f8e51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UsertypeComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/UsertypeComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsertypeComponent_vue_vue_type_template_id_e5e2d3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsertypeComponent.vue?vue&type=template&id=e5e2d3c6& */ "./resources/js/components/UsertypeComponent.vue?vue&type=template&id=e5e2d3c6&");
/* harmony import */ var _UsertypeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsertypeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/UsertypeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsertypeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsertypeComponent_vue_vue_type_template_id_e5e2d3c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsertypeComponent_vue_vue_type_template_id_e5e2d3c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UsertypeComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UsertypeComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UsertypeComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsertypeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsertypeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsertypeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsertypeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UsertypeComponent.vue?vue&type=template&id=e5e2d3c6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/UsertypeComponent.vue?vue&type=template&id=e5e2d3c6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsertypeComponent_vue_vue_type_template_id_e5e2d3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UsertypeComponent.vue?vue&type=template&id=e5e2d3c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UsertypeComponent.vue?vue&type=template&id=e5e2d3c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsertypeComponent_vue_vue_type_template_id_e5e2d3c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsertypeComponent_vue_vue_type_template_id_e5e2d3c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/newCustomerRequest.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/newCustomerRequest.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newCustomerRequest_vue_vue_type_template_id_3eddfc1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newCustomerRequest.vue?vue&type=template&id=3eddfc1c& */ "./resources/js/components/newCustomerRequest.vue?vue&type=template&id=3eddfc1c&");
/* harmony import */ var _newCustomerRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newCustomerRequest.vue?vue&type=script&lang=js& */ "./resources/js/components/newCustomerRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newCustomerRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newCustomerRequest_vue_vue_type_template_id_3eddfc1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newCustomerRequest_vue_vue_type_template_id_3eddfc1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/newCustomerRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/newCustomerRequest.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/newCustomerRequest.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newCustomerRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./newCustomerRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newCustomerRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newCustomerRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/newCustomerRequest.vue?vue&type=template&id=3eddfc1c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/newCustomerRequest.vue?vue&type=template&id=3eddfc1c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newCustomerRequest_vue_vue_type_template_id_3eddfc1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./newCustomerRequest.vue?vue&type=template&id=3eddfc1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newCustomerRequest.vue?vue&type=template&id=3eddfc1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newCustomerRequest_vue_vue_type_template_id_3eddfc1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newCustomerRequest_vue_vue_type_template_id_3eddfc1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);