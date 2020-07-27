<?php

namespace App\Http\Controllers;

use App\CustomerMasterFile;
use App\AccountGroupCode;
use Illuminate\Http\Request;

class CustomerMasterFileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function get()
    {
        $options =  AccountGroupCode::all();
        return $options;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validateWithBag('post', [
            'account_name'=> 'required|string',
            'account_code' => 'required|String|unique:customer_master_files',
            'address2' => 'required|String',
            'address3' => 'required|String',
            'selected' => 'required',
            'postal_address' => 'required'
        ]);
        if($request->account_code2 !=''){
            $acc_code2 = $request->account_code2;
        }
        else{
            $acc_code2 = 'null';
        } 
        if($request->account_code3 !=''){
            $acc_code3 = $request->account_code3;
        }
        else{
            $acc_code3 = 'null';   
        } 
        if($request->address3 !=''){
            $address3 = $request->address3;
        }
        else{
            $address3 = 'null';

        } 
        if($request->address4 !='')
        {
            $address4 = $request->address4;
        } 
        else{
            $address4 = 'null';
        }
        if($request->address5 !=''){
            $address5 = $request->address5;
        }
        else{
            $address5 =  'null';    
        }

        $res = CustomerMasterFile::create([
            'account_name' => $request->account_name,
            'account_group_name' => $request->acc_grp_name,
            'account_classification_id' => $request->acc_classification,
            'account_description' => $request->acc_description,
            'account_group_code' => $request->account_group_code,
            'account_code' => $request->account_code,
            'account_code2' => $acc_code2,
            'account_code3' => $acc_code3,
            'location_group_code' => $request->location_group_code,
            'location_name' => $request->account_name,
            'location_code' => $request->account_code,
            'address1' => $request->address1,
            'address2' => $request->address2,
            'address3' => $address3,
            'address4' => $address4,
            'address5' => $address5,
            'postal_address' => $request->postal_address,
            'longitude' => 'null',
            'latitude' => 'null',
            'account_credit_limit' => 'null',
            'pricing_scheme_code' => 'null',
            'payment_type' => 'null',
            'number_of_days_credit' => 'null',
            'branch_code' => $request->account_code,
            'branch_name' => $request->account_name,
            'branch_description' => $request->branch_description,
            'branch_source_warehouse_code' => 'null',
            'branch_order_delivery_lead_time' => 'null',
            'status' => 1
        ]);
        if($res)
        {
            return 'Success';
        }
        else{
            return 'Error!';
        }
    }

    public function getCustomers()
    {
        return CustomerMasterFile::all();
    }

    public function getCustomer($customer_id)
    {
        return CustomerMasterFile::with(['accountGroupCode'])->find(base64_decode($customer_id));
    }
    
    public function updateCustomer(Request $request)
    {
        // dd($request->account_group_code);
        // $validatedData = $request->validateWithBag('post', [
        //     'account_name'=> 'required|string',
        //     'account_code' => 'required|String|unique:customer_master_files',
        //     'address2' => 'required|String',
        //     'address3' => 'required|String',
        //     'selected' => 'required'
        // ]);

        if($request->customer_id  !=''){
            $vld = CustomerMasterFile::where(['customer_id' => $request->customer_id, 
            'account_name' => $request->account_name,
                    'account_group_name' => $request->account_group_name,
                    'account_classification_id' => $request->account_classification_id,
                    'account_description' => $request->account_description,
                    'account_group_code' => $request->account_group_code,
                    'account_code' => $request->account_code,
                    'account_code2' => $request->account_code2,
                    'account_code3' => $request->account_code3,
                    'location_group_code' => $request->location_group_code,
                    'location_name' => $request->account_name,
                    'location_code' => $request->account_code,
                    'address1' => $request->address1,
                    'address2' => $request->address2,
                    'address3' => $request->address3,
                    'address4' => $request->address4,
                    'address5' => $request->address5,
                    'postal_address' => $request->postal_address,
                    'longitude' => 'null',
                    'latitude' => 'null',
                    'account_credit_limit' => $request->account_credit_limit,
                    'pricing_scheme_code' => 'null',
                    'payment_type' => 'null',
                    'number_of_days_credit' => 'null',
                    'branch_code' => $request->account_code,
                    'branch_name' => $request->account_name,
                    'branch_description' => $request->branch_description,
                    'branch_source_warehouse_code' => $request->branch_source_warehouse_code,
                    'branch_order_delivery_lead_time' => $request->branch_order_delivery_lead_time])->exists();
            if($vld > 0){
                return "1";
            }
            else
            {
                $res = CustomerMasterFile::where('customer_id', $request->customer_id)->update([
                    'account_name' => $request->account_name,
                    'account_group_name' => $request->account_group_name,
                    'account_classification_id' => $request->account_classification_id,
                    'account_description' => $request->account_description,
                    'account_group_code' => $request->account_group_code,
                    'account_code' => $request->account_code,
                    'account_code2' => $request->account_code2,
                    'account_code3' => $request->account_code3,
                    'location_group_code' => $request->location_group_code,
                    'location_name' => $request->account_name,
                    'location_code' => $request->account_code,
                    'address1' => $request->address1,
                    'address2' => $request->address2,
                    'address3' => $request->address3,
                    'address4' => $request->address4,
                    'address5' => $request->address5,
                    'postal_address' => $request->postal_address,
                    'longitude' => 'null',
                    'latitude' => 'null',
                    'account_credit_limit' => $request->account_credit_limit,
                    'pricing_scheme_code' => 'null',
                    'payment_type' => 'null',
                    'number_of_days_credit' => 'null',
                    'branch_code' => $request->account_code,
                    'branch_name' => $request->account_name,
                    'branch_description' => $request->branch_description,
                    'branch_source_warehouse_code' => $request->branch_source_warehouse_code,
                    'branch_order_delivery_lead_time' => $request->branch_order_delivery_lead_time
                ]);
            }
            if($res){
                return 'Success';
            }
            else{
                return 'Error';
            }
        }
    }

    public function activate(Request $request){
        // dd($request->all());
        $res = CustomerMasterFile::where(['customer_id' => $request->customer_id, 'status' => $request->status])->exists();
        if($res > 0){
            return 'Error';
        }
        else{
            $res2 = CustomerMasterFile::where('customer_id', $request->customer_id)->update([
                'status' => $request->status,
            ]);
            if($res2){
                return 'Success';
            }
            else{
                return 'Error';
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CustomerMasterFile  $customerMasterFile
     * @return \Illuminate\Http\Response
     */
    public function show(CustomerMasterFile $customerMasterFile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CustomerMasterFile  $customerMasterFile
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomerMasterFile $customerMasterFile)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CustomerMasterFile  $customerMasterFile
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerMasterFile $customerMasterFile)
    {
        //
    }

    public function get_account_details(Request $request){
       return AccountGroupCode::where($request->all())->get()->first();
    }
}
