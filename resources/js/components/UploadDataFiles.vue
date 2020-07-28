<!-- @format -->

<template>
  <div id="page-content">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Upload File</h3>
      </div>
      <div class="panel-body">
        <!--Dropzonejs using Bootstrap theme-->
        <!--===================================================-->
        <p>
          You can upload data files either product item masterfiles (LDI) or
          payment terms (CCD).
          <span>Note: ".csv" file format only.</span>
        </p>

        <div class="bord-top pad-ver">
          <form method="post" enctype="multipart/form-data">
            <!-- The fileinput-button span is used to style the file input field as button -->
            <!-- <span class="btn btn-success fileinput-button dz-clickable" >
					                <i class="fa fa-plus"></i>
                                    
					                <span>Add files...</span>
            </span>-->
            <!-- <label class="btn btn-success fileinput-button dz-clickable" style="border: 1px solid #ccc;display: inline-block;padding: 6px 12px;cursor: pointer;"> -->
            <input
              type="file"
              ref="file"
              multiple
              v-on:change="handleFilesUpload()"
              id="file"
              name="file"
              accept=".csv"
              class="btn btn-success fileinput-button dz-clickable"
              style="border: 1px solid #ccc;display: inline-block;padding: 6px 12px;cursor: pointer;"
            />
            <!-- <i class="fa fa-cloud-upload"></i> Add files... -->
            <!-- </label> -->

            <div class="btn-group pull-right">
              <button id="submitform" v-on:click="submitFiles()" class="btn btn-primary">
                <i class="fa fa-upload-cloud"></i> Upload
              </button>
              <button id="dz-remove-btn" class="btn btn-danger cancel" type="reset">
                <i class="demo-psi-trash"></i>
              </button>
            </div>
          </form>
        </div>

        <!--===================================================-->
        <!--End Dropzonejs using Bootstrap theme-->
      </div>
    </div>

    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">History Log</h3>
      </div>
      <div class="panel-body">
        <div class="table-responsive">
          <table
            id="data_logs"
            class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
            width="100%"
          >
            <thead>
              <tr>
                <th>Item Update Logs</th>
                <th>From Date Uploaded</th>
                <th>To Date Uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style="color: red;"
                >BW BAKING CUP WHITE GLAZZINE 2oz has been change price from P385.714 to P395.00</td>
                <td style="color: red;">06/29/2020</td>
                <td style="color: red;">07/27/2020</td>
              </tr>
              <tr>
                <td
                  style="color: gray;"
                >FREEDOM CIGARETTES 50s has been change price from P16250.00 to P16275.00</td>
                <td>07/20/2020</td>
                <td>07/23/2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Basic Data Tables -->
    <!--===================================================-->
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Item Masterfiles</h3>
      </div>
      <div class="panel-body">
        <div class="table-responsive">
          <table
            id="data_files"
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
                <th>Option</th>
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
                <td>Image</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>BW B CUP W GLZNE 2oz</td>
                <td>BW BAKING CUP WHITE GLAZZINE 2oz</td>
                <td>S0009</td>
                <td>100053</td>
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
              <tr>
                <td>ENFAGROW A+ KID/FOUR 350G</td>
                <td>ENFA A+ KID/4 350G</td>
                <td>ENFAGROW A+ KID/FOUR 350G</td>
                <td>S0671</td>
                <td>100801</td>
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
  </div>
</template>

<script>
/** @format */

export default {
  data() {
    return {
      file: ''
    }
  },
  methods: {
    /*
        Submits all of the files to the server
      */
    submitFiles() {
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
      axios
        .post('/import_file', {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function () {
          console.log('SUCCESS!!')
        })
        .catch(function () {
          console.log('FAILURE!!')
        })
    },

    /*
        Handles a change on the file upload
      */
    handleFilesUpload() {
      this.file = this.$refs.file.file
    }
  },
  mounted() {
    $('#data_files').DataTable()
    $('#data_logs').DataTable()
    $('#submitform').on('click', function (e) {
      e.preventDefault()
    })
  }
}
</script>
