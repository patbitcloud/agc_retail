/** @format */

import vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () =>
  import(/* webpackChunkName: "group-foo" */ './components/Dashboard.vue')
const HomePage1 = () =>
  import(/* webpackChunkName: "group-foo" */ './components/Dashboard1.vue')
const UploadDataFiles = () =>
  import(/* webpackChunkName: "group-foo" */ './components/UploadDataFiles.vue')
const ItemViewMasterfiles = () =>
  import(/* webpackChunkName: "group-foo" */ './components/ItemMasterfile.vue')
const CustomerMasterfile = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/CustomerMasterfileComponent.vue'
  )
const ReportFiles = () =>
  import(/* webpackChunkName: "group-foo" */ './components/ReportFile.vue')
const ExportDataFiles = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/ExportMasterfile.vue'
  )
const PromoFiles = () =>
  import(/* webpackChunkName: "group-foo" */ './components/PromoFile.vue')
const GroupCode = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/AccountGroupCodes.vue'
  )
const UsertypeComponent = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/UsertypeComponent.vue'
  )
const AddCustomer = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/AddCustomerSetup.vue'
  )

const EditCustomer = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/EditCustomerSetup.vue'
  )

const SalesmanList = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/SalesmanComponent.vue'
  )

const NewCustomer = () =>
  import(
    /* webpackChunkName: "group-foo" */ './components/newCustomerRequest.vue'
  )

const SalesmanRoute = () =>
  import(/* webpackChunkName: "group-foo" */ './components/SalesmanRoutes.vue')

const ImportCustomer = () =>
  import(/* webpackChunkName: "group-foo" */ './components/ImportCustomer.vue')

vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      component: HomePage
    },
    {
      path: '/dashboard1',
      component: HomePage1
    },
    {
      path: '/upload',
      component: UploadDataFiles
    },
    {
      path: '/export',
      component: ExportDataFiles
    },
    {
      path: '/promo',
      component: PromoFiles
    },
    {
      path: '/report',
      component: ReportFiles
    },
    {
      path: '/item',
      component: ItemViewMasterfiles
    },
    {
      path: '/customer_masterfile',
      component: CustomerMasterfile
    },
    {
      path: '/account_group_code',
      component: GroupCode
    },
    {
      path: '/usertype',
      component: UsertypeComponent
    },
    {
      path: '/add_customer',
      component: AddCustomer
    },
    {
      path: '/edit_customer/:customer_id',
      component: EditCustomer,
      props: true
    },
    {
      path: '/customer_request',
      component: NewCustomer
    },
    {
      path: '/salesman',
      component: SalesmanList
    },
    {
      path: '/salesman_routes',
      component: SalesmanRoute
    },
    {
      path: '/import_customer',
      component: ImportCustomer
    }
  ]
})
export default router
