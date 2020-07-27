<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <!-- <h3 class="panel-title" style="font-weight:bold;">Customer Setup</h3> -->
        <div class="row" style="margin: 0px 0px 10px 0px;">
          <div class="col-lg-6" style="padding: 15px;">
            <h3 class="panel-title" style="font-weight:bold;">
              <i class="fa fa-address-card-o"></i> Customer Setup
            </h3>
          </div>
          <div class="col-lg-6" style="padding: 15px;">
            <router-link to="/customer_masterfile">
              <a href="javascript:;">
                <button class="btn btn-primary btn-rounded pull-right">
                  <i class="fa fa-arrow-left"></i> Back
                </button>
              </a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="panel-body">
        <div class="panel-body">
          <form id="sbmtform" @submit.prevent="submitform">
            <div class="row">
              <div class="col-sm-3">
                <h4 style="font-weight: bold; text-decoration: underline;">Account Information</h4>
                <div
                  class="form-group"
                  :class="{
                                    'has-error': form.errors.has('account_name')
                                }"
                >
                  <label class="control-label">
                    Account Name:
                    <span style="color:red">*</span>
                  </label>
                  <input
                    type="text"
                    v-model="form.account_name"
                    class="form-control"
                    id="account_name"
                  />
                  <has-error :form="form" field="account_name"></has-error>
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Account Group Name:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" v-model="acc_group_name" class="form-control" disabled />
                  <input type="hidden" v-model="form.acc_grp_name" id="account_group_name" disabled />
                </div>
                <div class="form-group">
                  <label class="control-label">Account Code 2:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="account_code2"
                    v-model="form.account_code2"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Account Description:
                    <span style="color:red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="account_description"
                    v-model="form.acc_description"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Account Credit Limit:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id="account_credit_limit" />
                </div>
              </div>
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-3"></div>

                  <div class="col-sm-3">
                    <h4 style="font-weight: bold; text-decoration: underline;">Location</h4>
                  </div>
                  <div class="col-sm-3"></div>
                </div>

                <!-- 2ND COLUMN ACCOUNTS -->
                <div class="col-sm-3">
                  <div
                    class="form-group"
                    :class="{
                                        'has-error': form.errors.has('selected')
                                    }"
                  >
                    <label class="control-label">
                      Account Group Code:
                      <span style="color:red">*</span>
                    </label>
                    <select
                      data-placeholder="Account Group Codes"
                      v-model="form.selected"
                      id="slct_group_codes"
                      tabindex="2"
                      style="width: 171px"
                      @change="btn_acc_code_act"
                    >
                      <option disabled>Choose Group Codes</option>
                      <option
                        v-for="option in options"
                        :key="option.account_groupcode_id"
                        :value="option.account_groupcode_id"
                      >{{ option.group_code }}</option>
                    </select>
                    <has-error :form="form" field="selected"></has-error>
                  </div>
                  <div
                    class="form-group"
                    :class="{
                                        'has-error': form.errors.has(
                                            'account_code'
                                        )
                                    }"
                  >
                    <label class="control-label">
                      Account Code:
                      <span style="color:red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="account_code"
                      v-model="form.account_code"
                    />
                    <has-error :form="form" field="account_code"></has-error>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Account Code 3:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="account_code3"
                      v-model="form.account_code3"
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label">
                      Account Classification:
                      <span style="color:red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="account_classification"
                      v-model="form.acc_classification"
                      placeholder="Account Classification ID"
                      disabled
                    />
                  </div>
                </div>

                <!-- 2ND COLUMN -->
                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="control-label">
                      Location Name:
                      <span style="color:red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="location_name"
                      v-bind:value="form.account_name"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label">
                      Address 1:
                      <span style="color:red">*</span>
                    </label>
                    <input type="text" class="form-control" id="address1" />
                  </div>
                  <div class="form-group">
                    <label class="control-label">Address 4:</label>
                    <input type="text" class="form-control" id="address4" v-model="form.address4" />
                  </div>

                  <div class="form-group">
                    <label class="control-label">
                      Branch Code:
                      <span style="color:red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="branch_code"
                      v-bind:value="form.account_code"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label" style="font-size: 12px;">
                      Branch Source Warehouse Code:
                      <span style="color:red">*</span>
                    </label>
                    <input type="text" class="form-control" id="branch_source_warehouse_code" />
                  </div>
                </div>

                <!-- 3RD COLUMN -->
                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="control-label">
                      Location Group Code:
                      <span style="color:red">*</span>
                    </label>
                    <input type="text" class="form-control" id="loc_group_code" />
                  </div>
                  <div
                    class="form-group"
                    :class="{
                                        'has-error': form.errors.has('address2')
                                    }"
                  >
                    <label class="control-label">
                      Address 2:
                      <span style="color:red">*</span>
                    </label>
                    <input type="text" class="form-control" id="address2" v-model="form.address2" />
                    <has-error :form="form" field="address2"></has-error>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Address 5:</label>
                    <input type="text" class="form-control" id="address5" />
                  </div>

                  <div class="form-group">
                    <label class="control-label">
                      Branch Name:
                      <span style="color:red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="branch_name"
                      v-bind:value="form.account_name"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label" style="font-size: 12px;">
                      Branch Order Delivery Lead Time:
                      <span style="color:red">*</span>
                    </label>
                    <input type="text" class="form-control" id="branch_order_delivery_lead_time" />
                  </div>
                </div>

                <!-- 4TH COLUMN -->
                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="control-label">
                      Location Code:
                      <span style="color:red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="location_code"
                      v-bind:value="form.account_code"
                      disabled
                    />
                  </div>
                  <div
                    class="form-group"
                    :class="{
                                        'has-error': form.errors.has('address3')
                                    }"
                  >
                    <label class="control-label">
                      Address 3:
                      <span style="color:red">*</span>
                    </label>
                    <input type="text" class="form-control" id="address3" v-model="form.address3" />
                    <has-error :form="form" field="address3"></has-error>
                  </div>
                  <div
                    class="form-group"
                    :class="{
                                        'has-error': form.errors.has(
                                            'postal_address'
                                        )
                                    }"
                  >
                    <label class="control-label">
                      Postal Address:
                      <span style="color:red">*</span>
                    </label>
                    <input type="text" class="form-control" id="postal_address" />
                    <has-error :form="form" field="postal_address"></has-error>
                  </div>
                  <div class="form-group">
                    <label class="control-label">
                      Branch Description:
                      <span style="color:red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="branch_description"
                      v-model="form.branch_description"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="height:35px;"></div>
            <div class="row" style="margin: 0px 0px 10px 0px;">
              <div class="col-lg-6" style="padding: 15px;"></div>
              <div class="col-lg-6" style="padding: 15px;">
                <router-link to="/customer_masterfile">
                  <a href="javascript:;">
                    <button
                      class="btn btn-success btn-rounded pull-right"
                      id="submitform"
                      type="submit"
                      @click="submitBtn()"
                    >
                      <i class="fa fa-check"></i> Submit
                    </button>
                  </a>
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

export default {
  data() {
    return {
      form: new Form({
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

      options: []
      // form.selected: ""
    };
  },
  methods: {
    btn_acc_code_act() {
      var formData = new FormData();
      formData.append("account_groupcode_id", this.form.selected);
      axios
        .post("/get_account_details", formData)
        .then(({ data, status }) => {
          this.acc_group_name = data.group_name;
          this.form.acc_grp_name = data.group_name;
          this.form.acc_classification = data.account_classification_id;
          this.form.acc_description = data.group_name;
          this.form.branch_description = data.group_name;
          this.form.account_group_code = data.group_code;
        })
        .catch(error => {});
    },
    populate() {
      axios
        .get("/api/persons/all")
        .then(response => {
          // console.log(response.data);
          this.options = response.data;
          this.form = new Form(response.data);
          // this.form.account_group_name = response.account_group_name;
          setTimeout(() => {
            var selectDropDown = $("#slct_group_codes").select2();
            selectDropDown.on("select2:select", function(e) {
              var event = new Event("change");
              e.target.dispatchEvent(event);
            });
          }, 100);
        })
        .catch(response => {
          console.log("error");
        });
    },
    submitBtn() {
      $("#container").css("position", "sticky");
      this.form.location_group_code = $("#loc_group_code").val();
      this.form.address1 = $("#address1").val();
      this.form.postal_address = $("#postal_address").val();
      this.form.address5 = $("#address5").val();
      Swal.fire({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          this.form
            .post("/create_customeraccnt")
            .then(({ data, status }) => {
              if (data == "Success") {
                setTimeout(() => {
                  window.location.href = "/customer_masterfile";
                }, 500);
                Swal.fire("Good job!", "Add successful", "success");
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
            })
            .catch(error => {
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
  clearData() {},
  mounted() {
    $("#container").css("position", "relative");
    this.populate();
    // $("#sbmtform").on("submit", function(e) {
    //   e.preventDefault();
    //   //ajax code here
    // });
    $("#submitform").on("click", function(e) {
      e.preventDefault();
    });
    setTimeout(() => {
      $("#loc_group_code").val("Bohol");
      $("#address1").val("Bohol");
      $("#address5").val("Region 7");
    }, 1300);

    setTimeout(() => {
      $("#slct_group_codes").select2();
    }, 300);
  }
};
</script>
