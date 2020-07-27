<!-- @format -->

<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading" id="showTitle" v-show="!show_su_div">
        <h3 class="panel-title" style="font-weight: bold">
          <i class="fa fa-truck"></i> Salesman List
        </h3>
      </div>
      <div class="panel-body" v-show="!show_su_div" id="tblDtl">
        <div class="row" style="margin: 0px 0px 10px 0px">
          <div class="col-lg-12">
            <button
              class="btn btn-success btn-rounded pull-right btn-sm"
              @click="addBtn()"
            >
              <i class="fa fa-plus-circle"></i> Salesman
            </button>
          </div>
        </div>
        <div class="table-responsive">
          <table
            id="salesmanTbl"
            class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
            width="100%"
          >
            <thead>
              <tr>
                <th>Username</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Department</th>
                <th>Division</th>
                <th>Area</th>
                <th>District</th>
                <th>Title</th>
                <th>Product Lines</th>
                <th>Action</th>
                <th>Address</th>
                <th>Postal Code</th>
                <th>Email</th>
                <th>Telehpone</th>
                <th>Mobile no.</th>
                <th>User Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tabz</td>
                <td>Ian</td>
                <td>Tabz</td>
                <td>Corp IT</td>
                <td>Test</td>
                <td>East/Interior</td>
                <td>District I</td>
                <td>Salesman</td>
                <td>All</td>
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
                  <button class="btn btn-info btn-xs">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                </td>
                <td>
                  Upper Ground, North Wing, Island City Mall, Tagbilaran City,
                  Bohol
                </td>
                <td>6300</td>
                <td>ianmark.tabz@gmail.com</td>
                <td>1847</td>
                <td>09397410437</td>
                <td>Test1234</td>
              </tr>
              <tr>
                <td>ian Tabz</td>
                <td>Tabz</td>
                <td>Tabz</td>
                <td>Corp IT</td>
                <td>Test</td>
                <td>East/Interior</td>
                <td>District I</td>
                <td>Salesman</td>
                <td>All</td>
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
                  <button class="btn btn-info btn-xs">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                </td>
                <td>
                  Upper Ground, North Wing, Island City Mall, Tagbilaran City,
                  Bohol
                </td>
                <td>6300</td>
                <td>ianmark.tabz@gmail.com</td>
                <td>1847</td>
                <td>09397410437</td>
                <td>Test1234</td>
              </tr>
              <tr>
                <td>Pawix</td>
                <td>Paulo</td>
                <td>Balenzuela</td>
                <td>Corp IT</td>
                <td>Test</td>
                <td>East/Interior</td>
                <td>District I</td>
                <td>Salesman</td>
                <td>All</td>
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
                  <button class="btn btn-info btn-xs">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                </td>
                <td>
                  Upper Ground, North Wing, Island City Mall, Tagbilaran City,
                  Bohol
                </td>
                <td>6300</td>
                <td>pawix.gwapo@gmail.com</td>
                <td>1847</td>
                <td>09397410437</td>
                <td>Test1234</td>
              </tr>
              <tr>
                <td>angelpink</td>
                <td>Angelito</td>
                <td>Ugat</td>
                <td>Corp IT</td>
                <td>Test</td>
                <td>East/Interior</td>
                <td>District I</td>
                <td>Salesman</td>
                <td>All</td>
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
                </td>
                <td>
                  Upper Ground, North Wing, Island City Mall, Tagbilaran City,
                  Bohol
                </td>
                <td>6300</td>
                <td>ianmark.tabz@gmail.com</td>
                <td>1847</td>
                <td>09397410437</td>
                <td>Test1234</td>
              </tr>
              <tr>
                <td>joseph</td>
                <td>Joseph</td>
                <td>Santos</td>
                <td>Corp IT</td>
                <td>Test</td>
                <td>East/Interior</td>
                <td>District II</td>
                <td>Salesman</td>
                <td>All</td>
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
                  <button class="btn btn-info btn-xs">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                </td>
                <td>
                  Upper Ground, North Wing, Island City Mall, Tagbilaran City,
                  Bohol
                </td>
                <td>6300</td>
                <td>ianmark.tabz@gmail.com</td>
                <td>1847</td>
                <td>09397410437</td>
                <td>Test1234</td>
              </tr>
              <tr>
                <td>detz</td>
                <td>Jendhel</td>
                <td>Josol</td>
                <td>Corp IT</td>
                <td>Test</td>
                <td>East/Interior</td>
                <td>District I</td>
                <td>Salesman</td>
                <td>All</td>
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
                  <button class="btn btn-info btn-xs">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                </td>
                <td>
                  Upper Ground, North Wing, Island City Mall, Tagbilaran City,
                  Bohol
                </td>
                <td>6300</td>
                <td>ianmark.tabz@gmail.com</td>
                <td>1847</td>
                <td>09397410437</td>
                <td>Test1234</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel-body" v-show="show_su_div">
        <div class="row" style="margin: 0px 0px 10px 0px;">
          <div class="col-lg-6" style="padding: 15px;">
            <h5 class="text-main" style="font-weight:bold;">
              <i class="fa fa-address-card-o"></i> Salesman Setup
            </h5>
          </div>
          <div class="col-lg-6" style="padding: 15px;">
            <button
              class="btn btn-primary btn-rounded pull-right btn-sm"
              @click="addBtn()"
            >
              <i class="fa fa-arrow-left"></i> Back
            </button>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-sm-3">
              <h4 style="font-weight: bold; text-decoration: underline;">
                Information
              </h4>
              <div class="form-group">
                <label class="control-label">
                  First name:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" id />
              </div>
              <div class="form-group">
                <label class="control-label">
                  Last name:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label class="control-label">
                  Username:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label class="control-label">
                  Password:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-9">
              <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                  <h4 style="font-weight: bold; text-decoration: underline;">
                    Location
                  </h4>
                </div>
                <div class="col-sm-4"></div>
              </div>

              <!-- 2ND COLUMN -->
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="control-label">
                    Email:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Telephone:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Mobile:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    User Code:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>

              <!-- 3RD COLUMN -->
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="control-label">
                    Address:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Department:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id />
                </div>
                <div class="form-group">
                  <label class="control-label">Division:</label>
                  <span style="color:red">*</span>
                  <input type="text" class="form-control" id />
                </div>
                <div class="form-group">
                  <label class="control-label">Area:</label>
                  <span style="color:red">*</span>
                  <input type="text" class="form-control" id />
                </div>
              </div>

              <!-- 4th COLUMN -->
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="control-label">
                    District:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id />
                </div>
                <div class="form-group">
                  <label class="control-label">Title:</label>
                  <span style="color:red">*</span>
                  <input type="text" class="form-control" id />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Postal Code:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Product Line:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id />
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="height:35px;"></div>
          <div class="row" style="margin: 0px 0px 10px 0px;">
            <div class="col-lg-6" style="padding: 15px;"></div>
            <div class="col-lg-6" style="padding: 15px;">
              <router-link to>
                <a href="javascript:;">
                  <button
                    class="btn btn-success btn-rounded pull-right btn-sm"
                    id="submitform"
                    type="submit"
                  >
                    <i class="fa fa-check"></i> Submit
                  </button>
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-body" id="editDtls" style="display: none">
        <div class="row" style="margin: 0px 0px 10px 0px;">
          <div class="col-lg-6" style="padding: 15px;">
            <h5 class="text-main" style="font-weight:bold;">
              <i class="fa fa-address-card-o"></i> Salesman Setup
            </h5>
          </div>
          <div class="col-lg-6" style="padding: 15px;">
            <button
              class="btn btn-primary btn-rounded pull-right btn-sm"
              @click="editDtlsBtn()"
            >
              <i class="fa fa-arrow-left"></i> Back
            </button>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-sm-3">
              <h4 style="font-weight: bold; text-decoration: underline;">
                Information
              </h4>
              <div class="form-group">
                <label class="control-label">
                  First name:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" id value="Angelito" />
              </div>
              <div class="form-group">
                <label class="control-label">
                  Last name:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" value="Ugat" />
              </div>
              <div class="form-group">
                <label class="control-label">
                  Username:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" value="angelpink" />
              </div>
              <div class="form-group">
                <label class="control-label">
                  Password:
                  <span style="color:red">*</span>
                </label>
                <input type="text" class="form-control" value="******" />
              </div>
            </div>
            <div class="col-sm-9">
              <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                  <h4 style="font-weight: bold; text-decoration: underline;">
                    Location
                  </h4>
                </div>
                <div class="col-sm-4"></div>
              </div>

              <!-- 2ND COLUMN -->
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="control-label">
                    Email:
                    <span style="color:red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value="angelugat@gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Telephone:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" value="412-0000" />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Mobile:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" value="0910987654" />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    User Code:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" value="Test1234" />
                </div>
              </div>

              <!-- 3RD COLUMN -->
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="control-label">
                    Address:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id value="Baclayon" />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Department:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id value="Corp IT" />
                </div>
                <div class="form-group">
                  <label class="control-label">Division:</label>
                  <span style="color:red">*</span>
                  <input type="text" class="form-control" id value="Sys Dev" />
                </div>
                <div class="form-group">
                  <label class="control-label">Area:</label>
                  <span style="color:red">*</span>
                  <input
                    type="text"
                    class="form-control"
                    id
                    value="East/Interior"
                  />
                </div>
              </div>

              <!-- 4th COLUMN -->
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="control-label">
                    District:
                    <span style="color:red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id
                    value="District I"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Title:</label>
                  <span style="color:red">*</span>
                  <input
                    type="text"
                    class="form-control"
                    id
                    value="IT Salesman"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Postal Code:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id value="6300" />
                </div>
                <div class="form-group">
                  <label class="control-label">
                    Product Line:
                    <span style="color:red">*</span>
                  </label>
                  <input type="text" class="form-control" id value="All" />
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="height:35px;"></div>
          <div class="row" style="margin: 0px 0px 10px 0px;">
            <div class="col-lg-6" style="padding: 15px;"></div>
            <div class="col-lg-6" style="padding: 15px;">
              <router-link to>
                <a href="javascript:;">
                  <button
                    class="btn btn-success btn-rounded pull-right btn-sm"
                    id="submitform"
                    type="submit"
                  >
                    <i class="fa fa-check"></i> Submit
                  </button>
                </a>
              </router-link>
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
    return {
      show_su_div: false
    }
  },
  methods: {
    addBtn() {
      this.show_su_div == false
        ? (this.show_su_div = true)
        : (this.show_su_div = false)
    },
    editBtn() {
      $('#editDtls').show()
      $('#tblDtl').hide()
    },
    editDtlsBtn() {
      $('#editDtls').hide()
      $('#tblDtl').show()
    }
  },
  mounted() {
    $('#salesmanTbl').DataTable()
  }
}
</script>
