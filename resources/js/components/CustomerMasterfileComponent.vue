<!-- @format -->

<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title" style="font-weight:bold;">
          <i class="fa fa-vcard-o"></i> Customer Masterfile
        </h3>
      </div>
      <div class="panel-body">
        <div class="row" style="margin: 0px 0px 10px 0px;">
          <div class="col-lg-12">
            <router-link to="/add_customer">
              <a href="javascript:;">
                <button class="btn btn-success btn-rounded pull-right">
                  <i class="fa fa-plus-circle"></i> Customer
                </button>
              </a>
            </router-link>
            <router-link to="/import_customer">
              <a href="javascript:;">
                <button
                  class="btn btn-success btn-rounded pull-right"
                  style="margin-right: 10px;"
                >
                  <i class="fa fa-cloud-upload"></i> Upload
                </button>
              </a>
            </router-link>
          </div>
        </div>
        <div class="table-responsive">
          <table
            id="tbl_customermasterfile"
            class="table table-hover table-bordered dt-responsive nowrap table-vcenter"
            width="100%"
          >
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Account Group Code</th>
                <th>Account Group Name</th>
                <th>Account Code</th>
                <th>Account Description</th>
                <th>Account Classification ID</th>
                <th>Action</th>
                <th>Address 1</th>
                <th>Address 2</th>
                <th>Address 3</th>
                <th>Location Name</th>
                <th>Location Code</th>
                <th>Account Credit Limit</th>
                <th>Postal Address</th>
                <th>Branch Code</th>
                <th>Branch Name</th>
                <th>Branch Description</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="MgaCustomers in customers"
                :key="MgaCustomers.customer_id"
              >
                <td>{{ MgaCustomers.account_name }}</td>
                <td>{{ MgaCustomers.account_group_code }}</td>
                <td>{{ MgaCustomers.account_group_name }}</td>
                <td>{{ MgaCustomers.account_code }}</td>
                <td>{{ MgaCustomers.account_description }}</td>
                <td>{{ MgaCustomers.account_classification_id }}</td>
                <td>
                  <div
                    class="btn-group dropdown"
                    v-if="MgaCustomers.status == '1'"
                  >
                    <button
                      class="btn btn-sm btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a
                          href="#"
                          style="color: blue;"
                          @click="btn_activation(MgaCustomers.customer_id, '1')"
                          >Active</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          style="color: red;"
                          @click="btn_activation(MgaCustomers.customer_id, '0')"
                          >Inactive</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group dropdown" v-else>
                    <button
                      class="btn btn-sm btn-danger btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Inactive
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a
                          href="#"
                          style="color: blue;"
                          @click="btn_activation(MgaCustomers.customer_id, '1')"
                          >Active</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          style="color: red;"
                          @click="btn_activation(MgaCustomers.customer_id, '0')"
                          >Inactive</a
                        >
                      </li>
                    </ul>
                  </div>
                  <button
                    @click="editCustomer(MgaCustomers)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                </td>
                <td>{{ MgaCustomers.address1 }}</td>
                <td>{{ MgaCustomers.address2 }}</td>
                <td>{{ MgaCustomers.address3 }}</td>
                <td>{{ MgaCustomers.location_name }}</td>
                <td>{{ MgaCustomers.location_code }}</td>
                <td>{{ MgaCustomers.account_credit_limit }}</td>
                <td>{{ MgaCustomers.postal_address }}</td>
                <td>{{ MgaCustomers.branch_code }}</td>
                <td>{{ MgaCustomers.branch_name }}</td>
                <td>{{ MgaCustomers.branch_description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

export default {
  data() {
    return {
      customers: [],
      editCustomerDetails: null,
      form: new Form({
        customer_id: '',
        status: ''
      }),
      isActive: 1
    }
  },
  methods: {
    getCustomers() {
      axios
        .get('/getCustomers')
        .then(response => {
          this.customers = response.data
          if (Object.keys(this.customers).length) {
            setTimeout(() => {
              $('#tbl_customermasterfile').DataTable({
                responsive: true
              })
            }, 50)
          }
        })
        .catch()
    },
    editCustomer(MgaCustomers) {
      this.$router.push('edit_customer/' + btoa(MgaCustomers.customer_id))
    },
    btn_activation(id, status) {
      this.form.customer_id = id
      this.form.status = status
      this.form
        .post('/activate_customer')
        .then(({ data }) => {
          if (data.trim() == 'Success') {
            $('#tbl_customermasterfile')
              .dataTable()
              .fnDestroy()
            if (status == '1') {
              $.niftyNoty({
                type: 'info',
                icon: 'pli-cross icon-2x',
                message: 'Success it is now Active',
                container: 'floating',
                timer: 5000
              })
            } else {
              $.niftyNoty({
                type: 'info',
                icon: 'pli-cross icon-2x',
                message: 'Success it is now Inactive',
                container: 'floating',
                timer: 5000
              })
            }
            this.getCustomers()
          } else {
            if (data.trim() == 'Error') {
              if (status == '1') {
                $.niftyNoty({
                  type: 'danger',
                  icon: 'pli-cross icon-2x',
                  message: 'Is already Active',
                  container: 'floating',
                  timer: 5000
                })
              } else {
                $.niftyNoty({
                  type: 'danger',
                  icon: 'pli-cross icon-2x',
                  message: 'Is already Inactive',
                  container: 'floating',
                  timer: 5000
                })
              }
            }
          }
        })
        .catch(error => {})
    }
  },
  mounted() {
    console.log('Component mounted.')
    this.getCustomers()
    $('#container').css('position', 'relative')
    // $("#tbl_customermasterfile").DataTable({
    //     responsive: true
    // });
  }
}
</script>
