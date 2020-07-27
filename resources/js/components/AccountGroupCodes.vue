<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title" style="font-weight:bold;">Account Group Codes</h3>
      </div>
      <div class="panel-body">
        <div class="row" style="margin: 0px 0px 10px 0px;">
          <div class="col-lg-12">
            <button class="btn btn-success btn-rounded pull-right" @click="addCustomer()">
              <i class="fa fa-plus-circle"></i> Group Code
            </button>
          </div>
        </div>
        <div class="table-responsive">
          <table
            id="AccountGroupTbl"
            class="table table-striped table-bordered"
            cellspacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th scope="col">Group Code</th>
                <th scope="col">Group Name</th>
                <th scope="col">Classification ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="GroupCodes in account_groupcode" :key="GroupCodes.account_groupcode_id">
                <th scope="row">{{ GroupCodes.group_code }}</th>
                <td>{{ GroupCodes.group_name }}</td>
                <td>{{ GroupCodes.account_classification_id }}</td>
                <td>
                  <button @click="editGroupCode(GroupCodes)" class="btn btn-info btn-sm">
                    <i class="fa fa-pencil-square-o"></i> Edit
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    @click="
                                        delete_data(
                                            GroupCodes.account_groupcode_id
                                        )
                                    "
                  >
                    <i class="fa fa-trash-o"></i> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            class="modal fade"
            id="add_code_setup"
            tabindex="-1"
            role="dialog"
            data-backdrop="static"
            data-keyboard="false"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form @submit.prevent="submitform">
                  <div class="modal-body">
                    <div
                      class="form-group"
                      :class="{
                                            'has-error': dataForm.errors.has(
                                                'group_code'
                                            )
                                        }"
                    >
                      <input
                        type="hidden"
                        class="form-control"
                        v-model="
                                                dataForm.account_groupcode_id
                                            "
                        id="account_groupcode_id"
                        placeholder="Group code"
                      />
                      <label for="group_code">Group Code:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="dataForm.group_code"
                        id="group_code"
                        placeholder="Group code"
                      />
                      <has-error :form="dataForm" field="group_code"></has-error>
                    </div>

                    <div
                      class="form-group"
                      :class="{
                                            'has-error': dataForm.errors.has(
                                                'group_name'
                                            )
                                        }"
                    >
                      <label for="group_name">Group Name:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="dataForm.group_name"
                        id="group_name"
                        placeholder="Group Name"
                      />
                      <has-error :form="dataForm" field="group_name"></has-error>
                    </div>
                    <div
                      class="form-group"
                      :class="{
                                            'has-error': dataForm.errors.has(
                                                'account_classification_id'
                                            )
                                        }"
                    >
                      <label for="account_classification_id">Account Classification:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="
                                                dataForm.account_classification_id
                                            "
                        id="account_classification_id"
                        placeholder="Account Classification"
                      />
                      <has-error :form="dataForm" field="account_classification_id"></has-error>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                      @click="closeModal()"
                    >Close</button>
                    <button type="button" class="btn btn-primary" @click="submit()">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
      msg: "Customer information",
      dataForm: new Form({
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
    addCustomer() {
      $("#add_code_setup").modal("show");
      $(".modal-title").html(
        '<i class="fa fa-plus-circle"></i> Group Code Setup'
      );
    },
    submit() {
      this.dataForm
        .post("/create_group_code")
        .then(({ data, status }) => {
          if (data == "Success") {
            Swal.fire("Good job!", "Add successful", "success");
            $("#add_code_setup").modal("hide");
            this.clearData();
            this.getGroupCodes();
          } else {
            console.log(data);
          }
        })
        .catch(() => {});
    },
    clearData() {
      this.dataForm.account_groupcode_id = "";
      this.dataForm.group_code = "";
      this.dataForm.group_name = "";
      this.dataForm.account_classification_id = "";
    },
    closeModal() {
      this.clearData();
    },

    getGroupCodes() {
      axios
        .get("/get_account_group_codes")
        .then(response => {
          this.account_groupcode = response.data;
          if (Object.keys(this.account_groupcode).length) {
            setTimeout(() => {
              $("#AccountGroupTbl").DataTable();
            }, 500);
          }
        })
        .catch();
    },
    editGroupCode(GroupCodes) {
      $("#add_code_setup").modal("show");
      $(".modal-title").html(
        '<i class="fa fa-plus-circle"></i> Edit Group Codes'
      );
      this.dataForm.group_code = GroupCodes.group_code;
      this.dataForm.group_name = GroupCodes.group_name;
      this.dataForm.account_classification_id =
        GroupCodes.account_classification_id;

      this.dataForm.account_groupcode_id = GroupCodes.account_groupcode_id;
    },
    delete_data(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          axios
            .delete(`/delete_group_codes/${id}`)
            .then(({ data, status }) => {
              Swal.fire("Good job!", "Delete successful", "success");
              this.getGroupCodes();
            })
            .catch(error => {});
        }
      });
    }
  },
  mounted() {
    console.log("Component mounted.");
    this.getGroupCodes();
    $("#container").css("position", "relative");
  }
};
</script>
