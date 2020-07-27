<?php

namespace App\Imports;

use App\ItemMasterfile;
use Maatwebsite\Excel\Concerns\ToModel;

class ItemMasterfileImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new ItemMasterfile([
            'product_name'              =>  $row[0],
            'product_shrt_name'         =>  $row[1],
            'description'               =>  $row[2],
            'company_code'              =>  $row[3],
            'itemcode'                  =>  $row[4],
            'barcode'                   =>  $row[5],
            'brand'                     =>  $row[6],
            'principal'                 =>  $row[7],
            'product_family'            =>  $row[8],
            'keywords'                  =>  $row[9],
            'uom'                       =>  $row[10],
            'list_price_wouttax'        =>  $row[11],
            'list_price_wtax'           =>  $row[12],
            'conversion_qty'            =>  $row[13],
            'conversion_uom'            =>  $row[14],
        ]);
    }
}
