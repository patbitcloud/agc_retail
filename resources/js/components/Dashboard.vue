<!-- @format -->

<template>
  <div id="page-content">
    <!--Activated Users Chart-->
    <!--===================================================-->

    <div class="panel">
      <!--Chart information-->
      <div class="panel-body">
        <div class="row mar-top">
          <div class="col-md-3">
            <h3 class="text-main text-normal text-2x mar-no">Activated Users</h3>
            <h5 class="text-uppercase text-muted text-normal">Report for last 7-days ago</h5>
            <hr class="new-section-xs" />
            <div class="row mar-top">
              <div class="col-sm-5">
                <div class="text-lg">
                  <p class="text-5x text-thin text-main mar-no">4</p>
                </div>
                <p class="text-sm">Total users that are already registered</p>
              </div>
              <div class="col-sm-7">
                <div class="list-group bg-trans mar-no">
                  <a class="list-group-item" href="#">
                    <i class="demo-pli-information icon-lg icon-fw"></i> User Details
                  </a>
                  <a class="list-group-item" href="#">
                    <i class="demo-pli-mine icon-lg icon-fw"></i> Usage Profile
                  </a>
                  <span class="list-group-item" href="#">
                    <button class="btn btn-pink mar-ver">View Details</button>
                    <p class="text-xs"></p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">All Users</h3>
              </div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table
                    id="all_users"
                    class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="min-w-td">1</td>
                        <td>
                          <img
                            src="assets/img/profile-photos/5.png"
                            alt="Profile Picture"
                            class="img-circle img-sm"
                          />
                        </td>
                        <td>
                          <a class="btn-link" href="#">Patrick Ryan Cutor</a>
                        </td>
                        <td>patjun007@gmail.com</td>
                        <td>
                          <span class="label label-table label-purple">Admin</span>
                        </td>
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
                        <td class="text-center">
                          <div class="btn-group">
                            <a
                              class="btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip"
                              href="#"
                              data-original-title="Edit"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip"
                              href="#"
                              data-original-title="Delete"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip"
                              href="#"
                              data-original-title="Ban user"
                              data-container="body"
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="min-w-td">2</td>
                        <td>
                          <img
                            src="assets/img/profile-photos/1.png"
                            alt="Profile Picture"
                            class="img-circle img-sm"
                          />
                        </td>
                        <td>
                          <a class="btn-link" href="#">John Doe</a>
                        </td>
                        <td>john.doe@example.com</td>
                        <td>
                          <span class="label label-table label-info">Salesman</span>
                        </td>
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
                        <td class="text-center">
                          <div class="btn-group">
                            <a
                              class="btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip"
                              href="#"
                              data-original-title="Edit"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip"
                              href="#"
                              data-original-title="Delete"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip"
                              href="#"
                              data-original-title="Ban user"
                              data-container="body"
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="min-w-td">3</td>
                        <td>
                          <img
                            src="assets/img/profile-photos/6.png"
                            alt="Profile Picture"
                            class="img-circle img-sm"
                          />
                        </td>
                        <td>
                          <a class="btn-link" href="#">Maria Marz</a>
                        </td>
                        <td>maria_545@example.com</td>
                        <td>
                          <span class="label label-table label-success">Customer</span>
                        </td>
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
                        <td class="text-center">
                          <div class="btn-group">
                            <a
                              class="btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip"
                              href="#"
                              data-original-title="Edit"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip"
                              href="#"
                              data-original-title="Delete"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip"
                              href="#"
                              data-original-title="Ban user"
                              data-container="body"
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="min-w-td">3</td>
                        <td>
                          <img
                            src="assets/img/profile-photos/4.png"
                            alt="Profile Picture"
                            class="img-circle img-sm"
                          />
                        </td>
                        <td>
                          <a class="btn-link" href="#">Joseph Santos</a>
                        </td>
                        <td>sotnas05@example.com</td>
                        <td>
                          <span class="label label-table label-danger">Supervisor</span>
                        </td>
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
                        <td class="text-center">
                          <div class="btn-group">
                            <a
                              class="btn btn-sm btn-default btn-hover-success demo-psi-pen-5 add-tooltip"
                              href="#"
                              data-original-title="Edit"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-danger demo-pli-trash add-tooltip"
                              href="#"
                              data-original-title="Delete"
                              data-container="body"
                            ></a>
                            <a
                              class="btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip"
                              href="#"
                              data-original-title="Ban user"
                              data-container="body"
                            ></a>
                          </div>
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
    <!--===================================================-->
    <!--End Activated Users chart-->

    <div class="row">
      <div class="col-xs-12">
        <div class="panel">
          <!--Data Table-->
          <!--===================================================-->
          <div class="panel-body">
            <div class="pad-btm form-inline">
              <div class="panel-heading">
                <h3 class="text-main text-normal text-2x mar-no">Order &amp; Tracking Delivery</h3>
              </div>
              <div class="row">
                <div class="col-sm-12 table-toolbar-right">
                  <button class="btn btn-default">
                    <i class="demo-pli-printer icon-lg"></i>
                  </button>
                  <div class="btn-group">
                    <button class="btn btn-default">
                      <i class="demo-pli-information icon-lg"></i>
                    </button>
                    <button class="btn btn-default">
                      <i class="demo-pli-trash icon-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="table-responsive">
              <table
                id="order_table_admin"
                class="table table-bordered table-hover dt-responsive nowrap table-vcenter"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Customer</th>
                    <th>Order Date</th>
                    <th>Payment Terms</th>
                    <th>Status</th>
                    <th>Tracking #</th>
                    <th>Salesman</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#" class="btn-link">Order #53431</a>
                    </td>
                    <td>
                      <a class="btn-link" href="#">Sasha Grey</a>
                    </td>
                    <td>
                      <span class="text-muted">Oct 22, 2019</span>
                    </td>
                    <td class="text-center">
                      <div class="label label-table label-mint">Cash</div>
                    </td>
                    <td class="text-center">
                      <div class="label label-table label-success">Paid</div>
                    </td>
                    <td class="text-center">CGX0089734531</td>
                    <td>
                      <a class="btn-link" href="#">Charles S Boyle</a>
                    </td>
                    <td class="text-center">
                      <div class="btn-group">
                        <a
                          class="btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip"
                          href="#"
                          data-original-title="View List Ordered"
                          data-container="body"
                          title="Item Ordered"
                        ></a>
                        <a
                          class="btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip"
                          href="#"
                          data-original-title="View Details"
                          data-container="body"
                          title="View Details"
                        ></a>
                        <a
                          class="btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip"
                          href="#"
                          data-original-title="Ban user"
                          data-container="body"
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" class="btn-link">Order #53433</a>
                    </td>
                    <td>
                      <a class="btn-link" href="#">Maria Ozawa</a>
                    </td>
                    <td>
                      <span class="text-muted">Oct 24, 2019</span>
                    </td>
                    <td class="text-center">
                      <div class="label label-table label-purple">Cheque</div>
                    </td>
                    <td class="text-center">
                      <div class="label label-table label-info">Shipped</div>
                    </td>
                    <td class="text-center">CGX0089934571</td>
                    <td>
                      <a class="btn-link" href="#">John Doe</a>
                    </td>
                    <td class="text-center">
                      <div class="btn-group">
                        <a
                          class="btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip"
                          href="#"
                          data-original-title="View List Ordered"
                          data-container="body"
                          title="Item Ordered"
                        ></a>
                        <a
                          class="btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip"
                          href="#"
                          data-original-title="View Details"
                          data-container="body"
                          title="View Details"
                        ></a>
                        <a
                          class="btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip"
                          href="#"
                          data-original-title="Ban user"
                          data-container="body"
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" class="btn-link">Order #53434</a>
                    </td>
                    <td>
                      <a class="btn-link" href="#">Riley Reid</a>
                    </td>
                    <td>
                      <span class="text-muted">Oct 26, 2019</span>
                    </td>
                    <td class="text-center">
                      <div class="label label-table label-purple">Cheque</div>
                    </td>
                    <td class="text-center">
                      <div class="label label-table label-info">Shipped</div>
                    </td>
                    <td class="text-center">CGX0089934571</td>
                    <td>
                      <a class="btn-link" href="#">Scott S. Calabrese</a>
                    </td>
                    <td class="text-center">
                      <div class="btn-group">
                        <a
                          class="btn btn-sm btn-default btn-hover-success fa fa-list-ul add-tooltip"
                          href="#"
                          data-original-title="View List Ordered"
                          data-container="body"
                          title="Item Ordered"
                        ></a>
                        <a
                          class="btn btn-sm btn-default btn-hover-danger fa fa-eye add-tooltip"
                          href="#"
                          data-original-title="View Details"
                          data-container="body"
                          title="View Details"
                        ></a>
                        <a
                          class="btn btn-sm btn-default btn-hover-warning demo-pli-unlock add-tooltip"
                          href="#"
                          data-original-title="Ban user"
                          data-container="body"
                        ></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--===================================================-->
          <!--End Data Table-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** @format */

export default {
  async beforeCreate() {
    const { data } = await axios.get('/getAuthUser')
    if (data.type !== 'Admin') {
      location.replace('/dashboard1')
    }
  },
  mounted() {
    $('#all_users').DataTable()
    $('#supervisor_users').DataTable()
    $('#top_items').DataTable()
    $('#order_table_admin').DataTable()
    $('#order_table_supervisor').DataTable()

    console.log('Component Mounted')
  }
}
</script>
