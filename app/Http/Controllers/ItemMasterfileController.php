<?php

namespace App\Http\Controllers;

use App\ItemMasterfile;
use Illuminate\Http\Request;
use App\Exports\ItemMasterfileExport;
use App\Imports\ItemMasterfileImport;
use Maatwebsite\Excel\Facades\Excel;
use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

class ItemMasterfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        ini_set('max_execution_time', 0);
    }

    public function index()
    {
        
    }

    public function item_masterfile_export()
    {
        return Excel::download(new ItemMasterfileExport, 'export_data.csv');
    }

    public function item_masterfile_import()
    {
        Excel::import(new ItemMasterfileImport, request()->file('file'));
        return back();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Item::create([
            'product_name' => $data['product_name'],
            'product_shrt_name' => $data['product_shrt_name'],
            'description' => $data['description'],
            'company_code' => $data['company_code'],
            'itemcode' => $data['itemcode'],
            'barcode' => $data['barcode'],
            'brand' => $data['brand'],
            'principal' => $data['principal'],
            'product_family' => $data['product_family'],
            'keywords' => $data['keywords'],
            'uom' => $data['uom'],
            'list_price_wouttax' => $data['list_price_wout_tax'],
            'list_price_wtax' => $data['list_price_wtax'],
            'conversion_qty' => $data['conversion_qty'],
            'conversion_uom' => $data['conversion_uom'],
            'isPromo' => $data['ispromo'],
            'image' => $data['image'],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ItemMasterfile  $itemMasterfile
     * @return \Illuminate\Http\Response
     */
    public function show(ItemMasterfile $itemMasterfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ItemMasterfile  $itemMasterfile
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemMasterfile $itemMasterfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ItemMasterfile  $itemMasterfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ItemMasterfile $itemMasterfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ItemMasterfile  $itemMasterfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(ItemMasterfile $itemMasterfile)
    {
        //
    }
}
