<!-- @format -->

<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading" id="showTitle" v-show="!show_su_div">
        <h3 class="panel-title" style="font-weight: bold">
          <i class="fa fa-truck"></i> Item Lists
        </h3>
      </div>
      <div class="panel-body" v-show="!show_su_div" id="tblDtl">
        <div class="row" style="margin: 0px 0px 10px 0px">
          <div class="col-lg-12">
            <!-- <button
              class="btn btn-success btn-rounded pull-right btn-sm"
              @click="addBtn()"
            >
              <i class="fa fa-plus-circle"></i> Item
            </button> -->
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
                <th>Prdct Name</th>
                <th>Prdct Shrt Name</th>
                <th>Desc</th>
                <th>Company Code</th>
                <th>Item Code</th>
                <th>Barcode</th>
                <th>Option</th>
                <th>Brand</th>
                <th>Principal</th>
                <th>Product Family</th>
                <th>Keywords</th>
                <th>UOM</th>
                <th>List Price w/out Tax</th>
                <th>List Price w/ Tax</th>
                <th>Conversion Qty</th>
                <th>Conversion UOM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>BW B CUP W GLZNE 2oz</td>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>S0009</td>
                <td>100053</td>
                <td>2.20E+12</td>
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
                </td>
                <td>BW BAKING CUP</td>
                <td>BEST WAY GENERAL MDSE.</td>
                <td>BAKING NEEDS</td>
                <td>
                  BAKING CUPS
                </td>
                <td>CASE96</td>
                <td>385.714</td>
                <td>432</td>
                <td>96</td>
                <td>BOX</td>
              </tr>
              <tr>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>BW B CUP W GLZNE 2oz</td>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>S0009</td>
                <td>100053</td>
                <td>2.20E+12</td>
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
                </td>
                <td>BW BAKING CUP</td>
                <td>BEST WAY GENERAL MDSE.</td>
                <td>BAKING NEEDS</td>
                <td>
                  BAKING CUPS
                </td>
                <td>CASE96</td>
                <td>385.714</td>
                <td>432</td>
                <td>96</td>
                <td>BOX</td>
              </tr>
              <tr>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>BW B CUP W GLZNE 2oz</td>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>S0009</td>
                <td>100053</td>
                <td>2.20E+12</td>
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
                </td>
                <td>BW BAKING CUP</td>
                <td>BEST WAY GENERAL MDSE.</td>
                <td>BAKING NEEDS</td>
                <td>
                  BAKING CUPS
                </td>
                <td>CASE96</td>
                <td>385.714</td>
                <td>432</td>
                <td>96</td>
                <td>BOX</td>
              </tr>
              <tr>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>BW B CUP W GLZNE 2oz</td>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>S0009</td>
                <td>100053</td>
                <td>2.20E+12</td>
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
                </td>
                <td>BW BAKING CUP</td>
                <td>BEST WAY GENERAL MDSE.</td>
                <td>BAKING NEEDS</td>
                <td>
                  BAKING CUPS
                </td>
                <td>CASE96</td>
                <td>385.714</td>
                <td>432</td>
                <td>96</td>
                <td>BOX</td>
              </tr>
              <tr>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>BW B CUP W GLZNE 2oz</td>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>S0009</td>
                <td>100053</td>
                <td>2.20E+12</td>
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
                </td>
                <td>BW BAKING CUP</td>
                <td>BEST WAY GENERAL MDSE.</td>
                <td>BAKING NEEDS</td>
                <td>
                  BAKING CUPS
                </td>
                <td>CASE96</td>
                <td>385.714</td>
                <td>432</td>
                <td>96</td>
                <td>BOX</td>
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
                  Product Name
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
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Export File</h3>
      </div>
      <div class="panel-body" style="position: relative; text-align: center">
        <!--State Button-->
        <!--===================================================-->
        <button
          id="demo-state-btn"
          class="btn btn-lg btn-info"
          data-loading-text="Loading..."
          type="button"
        >
          Export Data
        </button>
        <!--===================================================-->
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
