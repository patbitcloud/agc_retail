<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title" style="font-weight: bold; font-size: 13px">
          <i class="fa fa-vcard-o"></i> Customer Requests
        </h3>
      </div>
      <div class="tab-base">
        <!--Nav Tabs-->
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#demo-lft-tab-1">
              Pending
              <span class="badge badge-warning">2</span>
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#demo-lft-tab-2">
              Approved
              <span class="badge badge-success">1</span>
            </a>
          </li>
        </ul>

        <!--Tabs Content-->
        <div class="tab-content">
          <div id="demo-lft-tab-1" class="tab-pane fade active in">
            <div class="panel-body">
              <div class="row" style="margin: 0px 0px 10px 0px">
                <div class="col-lg-12">
                  <!-- <button class="btn btn-success btn-rounded pull-right">
            <i class="fa fa-plus-circle"></i> Salesman
                  </button>-->
                </div>
              </div>
              <div class="table-responsive">
                <table
                  id="requestTbl"
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
                      <th>Action</th>
                      <th>Address 1</th>
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
                      <td>COL-00060</td>
                      <td>DRS</td>
                      <td>Drug Store</td>
                      <td>Drug Store</td>
                      <td>490</td>
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
                      <td>Bohol</td>
                      <td>Cogon</td>
                      <td>Tagbilaran</td>
                      <td>Ian Tabz</td>
                      <td>COL-00060</td>
                      <td>null</td>
                      <td>6300</td>
                      <td>Ian Tabz</td>
                      <td>Drug Store</td>
                    </tr>
                    <tr>
                      <td>Joseph Santos</td>
                      <td>COL-00060</td>
                      <td>SSS</td>
                      <td>Sari-sari Store</td>
                      <td>Sari-sari Store</td>
                      <td>490</td>
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
                      <td>Biking</td>
                      <td>Bohol</td>
                      <td>Joseph Santos</td>
                      <td>COL-00060</td>
                      <td>null</td>
                      <td>6300</td>
                      <td>Joseph Santos</td>
                      <td>Sari-sari Store</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="demo-lft-tab-2" class="tab-pane fade">
            <div class="panel-body">
              <div class="row" style="margin: 0px 0px 10px 0px">
                <div class="col-lg-12"></div>
              </div>
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
                      <th>Action</th>
                      <th>Address 1</th>
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
                      <td>COL-00060</td>
                      <td>DRS</td>
                      <td>Drug Store</td>
                      <td>Drug Store</td>
                      <td>490</td>
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
                      <td>Bohol</td>
                      <td>Cogon</td>
                      <td>Tagbilaran</td>
                      <td>Ian Tabz</td>
                      <td>COL-00060</td>
                      <td>null</td>
                      <td>6300</td>
                      <td>Ian Tabz</td>
                      <td>Drug Store</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
    };
  },
  methods: {},
  mounted() {
    $(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function(e) {
      $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });
    $("#requestTbl").DataTable();
    $("#approvedTbl").DataTable();
  }
};
</script>