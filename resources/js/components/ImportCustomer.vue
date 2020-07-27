<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <div class="row" style="margin: 0px 0px 10px 0px;">
          <div class="col-lg-6" style="padding: 2px;">
            <h3 class="panel-title" style="font-weight:bold;">
              <i class="fa fa-address-card-o"></i> Import Customer File
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
        <!--Dropzonejs using Bootstrap theme-->
        <!--===================================================-->
        <p>This is a bootstrap theme of Dropzone.js with a completely different user experience.</p>

        <div class="bord-top pad-ver">
          <!-- The fileinput-button span is used to style the file input field as button -->
          <span class="btn btn-success fileinput-button dz-clickable">
            <i class="fa fa-plus"></i>
            <span>Add files...</span>
          </span>

          <div class="btn-group pull-right">
            <button id="dz-upload-btn" class="btn btn-primary" type="submit" disabled>
              <i class="fa fa-upload-cloud"></i> Upload
            </button>
            <button id="dz-remove-btn" class="btn btn-danger cancel" type="reset" disabled>
              <i class="demo-psi-trash"></i>
            </button>
          </div>
        </div>

        <div id="dz-previews"></div>
        <!--===================================================-->
        <!--End Dropzonejs using Bootstrap theme-->
      </div>
      <hr class="new-section-xs bord" />
    </div>
    <div class="panel">
      <div class="panel-body">
        <div class="table-responsive">
          <table
            id="approvedTbl"
            class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
            width="100%"
          >
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Account Code</th>
                <th>Account Group Code</th>
                <th>Account Group Name</th>
                <th>Account Description</th>
                <th>Account Classification ID</th>
                <th>Address</th>

                <th>Action</th>
                <th>Address 2</th>
                <th>Address 3</th>
                <th>Location Name</th>
                <th>Location Code</th>
                <th>Account Credit Limit</th>
                <th>Branch Code</th>
                <th>Branch Name</th>
                <th>Branch Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ian Tabz</td>
                <td>TAG-00001</td>
                <td>DRS</td>
                <td>Drug Store</td>
                <td>Drug Store</td>
                <td>490</td>
                <td>Disrict I</td>

                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">
                          <i class="fa fa-check"></i> Approve
                        </a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">
                          <i class="fa fa-close"></i> Disapprove
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Tagbilaran</td>
                <td>Bohol</td>
                <td>Ian Tabz</td>
                <td>TAG-00001</td>
                <td>null</td>
                <td>6300</td>
                <td>Ian Tabz</td>
                <td>Drug Store</td>
              </tr>
              <tr>
                <td>Joseph Santos</td>
                <td>DAU-00082</td>
                <td>SSS</td>
                <td>Sari-sari Store</td>
                <td>Sari-sari Store</td>
                <td>495</td>
                <td>Disrict I</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Dauis</td>
                <td>Bohol</td>
                <td>Joseph Santos</td>
                <td>DAU-00082</td>
                <td>null</td>
                <td>6300</td>
                <td>Joseph Santos</td>
                <td>Sari-sari Store</td>
              </tr>
              <tr>
                <td>Paolo Balezuela</td>
                <td>TAG-00002</td>
                <td>SSS</td>
                <td>Sari-sari Store</td>
                <td>Sari-sari Store</td>
                <td>495</td>
                <td>Disrict I</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Maribojoc</td>
                <td>Bohol</td>
                <td>Paolo Balezuela</td>
                <td>TAG-00002</td>
                <td>null</td>
                <td>6300</td>
                <td>Paolo Balezuela</td>
                <td>Sari-sari Store</td>
              </tr>
              <tr>
                <td>Jerin Roluna</td>
                <td>CAL-00017</td>
                <td>HOR</td>
                <td>Horeca</td>
                <td>Horeca</td>
                <td>492</td>
                <td>Disrict I</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Calape</td>
                <td>Bohol</td>
                <td>Jerin Roluna</td>
                <td>CAL-00017</td>
                <td>null</td>
                <td>6300</td>
                <td>Jerin Roluna</td>
                <td>Horeca</td>
              </tr>
              <tr>
                <td>OUR DELIBREAD BAKESHOP (TUBIGON)</td>
                <td>TUB-00011</td>
                <td>HOR</td>
                <td>Horeca</td>
                <td>Horeca</td>
                <td>492</td>
                <td>Disrict I</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Tubigon</td>
                <td>Bohol</td>
                <td>OUR DELIBREAD BAKESHOP (TUBIGON)</td>
                <td>TUB-00011</td>
                <td>null</td>
                <td>6300</td>
                <td>OUR DELIBREAD BAKESHOP (TUBIGON)</td>
                <td>Horeca</td>
              </tr>
              <tr>
                <td>Test</td>
                <td>ALI-00185</td>
                <td>GRO</td>
                <td>Grocery Store</td>
                <td>Grocery Store</td>
                <td>491</td>
                <td>Disrict III</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Alicia</td>
                <td>Bohol</td>
                <td>Test</td>
                <td>ALI-00185</td>
                <td>null</td>
                <td>6300</td>
                <td>Test</td>
                <td>Grocery Store</td>
              </tr>
              <tr>
                <td>Patrick Cutor</td>
                <td>TRI-00168</td>
                <td>CVS</td>
                <td>Convenience Store</td>
                <td>Convenience Store</td>
                <td>489</td>
                <td>Disrict II</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Trinidad</td>
                <td>Bohol</td>
                <td>Patrick Cutor</td>
                <td>TRI-00168</td>
                <td>null</td>
                <td>6300</td>
                <td>Test</td>
                <td>Convenience Store</td>
              </tr>
              <tr>
                <td>Test2</td>
                <td>ALI-00039</td>
                <td>CVS</td>
                <td>Market Stall</td>
                <td>Market Stall</td>
                <td>493</td>
                <td>Disrict III</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Alicia</td>
                <td>Bohol</td>
                <td>Test2</td>
                <td>ALI-00039</td>
                <td>null</td>
                <td>6300</td>
                <td>Test</td>
                <td>Market Stall</td>
              </tr>
              <tr>
                <td>Test2</td>
                <td>ALI-00039</td>
                <td>CVS</td>
                <td>Market Stall</td>
                <td>Market Stall</td>
                <td>493</td>
                <td>Disrict III</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Alicia</td>
                <td>Bohol</td>
                <td>Test2</td>
                <td>ALI-00039</td>
                <td>null</td>
                <td>6300</td>
                <td>Test</td>
                <td>Market Stall</td>
              </tr>
              <tr>
                <td>Test2</td>
                <td>ALI-00039</td>
                <td>CVS</td>
                <td>Market Stall</td>
                <td>Market Stall</td>
                <td>493</td>
                <td>Disrict III</td>
                <td>
                  <button class="btn btn-success btn-rounded btn-xs">
                    <i class="fa fa-eye"></i>
                  </button>
                  <div class="btn-group dropdown">
                    <button
                      class="btn btn-xs btn-info btn-active-blue dropdown-toggle dropdown-toggle-icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      Action
                      <i class="dropdown-caret"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#" style="color: blue;">Approve</a>
                      </li>
                      <li>
                        <a href="#" style="color: red;">Disapprove</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>Alicia</td>
                <td>Bohol</td>
                <td>Test2</td>
                <td>ALI-00039</td>
                <td>null</td>
                <td>6300</td>
                <td>Test</td>
                <td>Market Stall</td>
              </tr>
            </tbody>
          </table>
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
  methods: {},
  mounted() {
    $("#approvedTbl").DataTable();
  }
};
</script>