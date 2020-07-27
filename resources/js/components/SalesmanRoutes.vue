<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">
          <i class="fa fa-map-marker"></i> Routes
        </h3>
      </div>
      <div class="panel-body">
        <div class="row" style="margin: 0px 0px 10px 0px">
          <div class="col-lg-12">
            <button class="btn btn-success btn-rounded pull-right btn-sm" @click="addBtn()">
              <i class="fa fa-plus-circle"></i> Routes
            </button>
          </div>
        </div>
        <div class="table-responsive">
          <table
            id="routesTbl"
            class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
            width="100%"
          >
            <thead>
              <tr>
                <th>Routes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tagbilaran City</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">7</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Ubay</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-danger btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Inactive
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">8</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Anda</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">0</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Danao</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">6</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Buenavista</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Pilar</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">4</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Getafe</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">5</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Dagohoy</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">2</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Alicia</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" @click="editBtn()">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs" @click="customersBtn()">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                  <button class="btn btn-primary btn-xs" @click="salesmanBtn()">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">2</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Jagna</td>
                <td>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Active
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Active</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn btn-info btn-xs" title="Edit">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button class="btn btn-success btn-xs">
                    <i class="fa fa-group"></i> Customers
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">0</span>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <i class="fa fa-ambulance"></i> Salesman
                    <span class="badge badge-primary" style="top: -1px; color: #000000;">3</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="modal fade"
        id="setupMdl"
        tabindex="-1"
        role="dialog"
        data-backdrop="static"
        data-keyboard="false"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="MdlTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="route">Route</label>
                    <input
                      type="email"
                      class="form-control"
                      id="route"
                      aria-describedby="emailHelp"
                      placeholder="Route"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="Btnsubmit">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="customersMdl"
        tabindex="-1"
        role="dialog"
        data-backdrop="static"
        data-keyboard="false"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="MdlTitleCustomer">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="table-responsive">
                <table
                  id="customerTbl"
                  class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Account Group Code</td>
                      <td>Account Code</td>
                      <td>Account Description</td>
                      <td>Address</td>
                      <!-- <td>Action</td> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Spencer Agosto</td>
                      <td>DRS</td>
                      <td>ALI-00057</td>
                      <td>Drug Store</td>
                      <td>District III Alicia</td>
                      <!-- <td>
                      <button type="button" class="btn btn-danger btn-xs" title="Remove">
                        <i class="fa fa-trash-o"></i>
                      </button>
                      </td>-->
                    </tr>
                    <tr>
                      <td>Jerin Roluna</td>
                      <td>PMS</td>
                      <td>ALI-00058</td>
                      <td>Market Stall</td>
                      <td>District III Alicia</td>
                    </tr>
                    <tr>
                      <td>Paolo Balezuela</td>
                      <td>HOR</td>
                      <td>ALI-00059</td>
                      <td>Horeca</td>
                      <td>District III Alicia</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="salesmanMdl"
        tabindex="-1"
        role="dialog"
        data-backdrop="static"
        data-keyboard="false"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <i class="fa fa-ambulance"></i> Salesman assigned in this area
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="table-responsive">
                <table
                  id="salesmanTbl"
                  class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Department</td>
                      <td>Division</td>
                      <td>Area</td>
                      <td>Product Lines</td>
                      <td>User Code</td>
                      <td>
                        <i class="fa fa-phone"></i> Mobile
                      </td>
                      <!-- <td>Action</td> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ruben Andez</td>
                      <td>LDI</td>
                      <td>WDG</td>
                      <td>East/Interior/North</td>
                      <td>All</td>
                      <td>WDG-S04</td>
                      <td>+639351277494</td>
                    </tr>

                    <tr>
                      <td>Lorem Ipsum</td>
                      <td>LDI</td>
                      <td>WDG</td>
                      <td>East/Interior/North</td>
                      <td>All</td>
                      <td>WDG-S04</td>
                      <td>+639351366585</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {};
  },
  methods: {
    addBtn() {
      $("#setupMdl").modal("show");
      $("#MdlTitle").html("New Route");
      $("#Btnsubmit").html("Submit");
    },
    editBtn() {
      $("#setupMdl").modal("show");
      $("#MdlTitle").html("<i class='fa fa-edit'></i> Edit Route");
      $("#route").val("Alicia");
      $("#Btnsubmit").html("Save Changes");
    },
    customersBtn() {
      $("#customersMdl").modal("show");
      $("#MdlTitleCustomer").html(
        "<i class='fa fa-group'></i> Customers in the area"
      );
    },
    salesmanBtn() {
      $("#salesmanMdl").modal("show");
    }
  },
  mounted() {
    $("#routesTbl").DataTable();
    $("#customerTbl").DataTable();
    $("#salesmanTbl").DataTable();
  }
};
</script>