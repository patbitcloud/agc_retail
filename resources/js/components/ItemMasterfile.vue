<!-- @format -->

<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title" style="font-weight: bold; font-size: 13px">
          <i class="fa fa-vcard-o"></i> Item Masterfiles
        </h3>
      </div>
      <div class="tab-base">
        <!--Nav Tabs-->
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#demo-lft-tab-1">
              Have Image
              <span class="badge badge-warning">1</span>
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#demo-lft-tab-2">
              No Image
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
                  id="updated_list"
                  class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th>Prdct Name</th>
                      <th>Prdct Shrt Name</th>
                      <th>Desc</th>
                      <th>Company Code</th>
                      <th>Option</th>
                      <th>Item Code</th>
                      <th>Barcode</th>
                      <th>Brand</th>
                      <th>Principal</th>
                      <th>Product Family</th>
                      <th>Keywords</th>
                      <th>UOM</th>
                      <th>List Price w/out Tax</th>
                      <th>List Price w/ Tax</th>
                      <th>Conversion Qty</th>
                      <th>Conversion UOM</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ENFAGROW A+ KID/FOUR 350G</td>
                      <td>ENFA A+ KID/4 350G</td>
                      <td>ENFAGROW A+ KID/FOUR 350G</td>
                      <td>S0671</td>
                      <td>
                        <button class="btn btn-xs btn-info btn-active-blue">Change</button> &nbsp;
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
                      <td>100801</td>
                      <td>8.71E+12</td>
                      <td>ENFAGROW</td>
                      <td>MEAD JOHNSONS PHILS.</td>
                      <td>BABY FORMULA</td>
                      <td>GROWING UP MILK</td>
                      <td>CS12</td>
                      <td>4060.71</td>
                      <td>4548</td>
                      <td>12</td>
                      <td>BOX</td>
                      <td>
                        <img src="assets/img/210001_BOX.jpg" style="width: 60px; height: 60px;" />
                      </td>
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
                  id="unupdated_list"
                  class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th>Prdct Name</th>
                      <th>Prdct Shrt Name</th>
                      <th>Desc</th>
                      <th>Company Code</th>
                      <th>Option</th>
                      <th>Item Code</th>
                      <th>Barcode</th>
                      <th>Brand</th>
                      <th>Principal</th>
                      <th>Product Family</th>
                      <th>Keywords</th>
                      <th>UOM</th>
                      <th>List Price w/out Tax</th>
                      <th>List Price w/ Tax</th>
                      <th>Conversion Qty</th>
                      <th>Conversion UOM</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                      <td>BW B CUP W GLZNE 2oz</td>
                      <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                      <td>S0009</td>
                      <td>
                        <button class="btn btn-xs btn-info btn-active-blue">Upload</button> &nbsp;
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
                      <td>100053</td>
                      <td>2.20E+12</td>
                      <td>BW BAKING CUP</td>
                      <td>BEST WAY GENERAL MDSE.</td>
                      <td>BAKING NEEDS</td>
                      <td>BAKING CUPS</td>
                      <td>CASE96</td>
                      <td>385.714</td>
                      <td>432</td>
                      <td>96</td>
                      <td>BOX</td>
                      <td>
                        <img src="assets/img/default_img.png" style="width: 60px; height: 60px;" />
                      </td>
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
/** @format */

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
    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
      $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust()
    })
    $('#updated_list').DataTable()
    $('#unupdated_list').DataTable()
  }
}
</script>
