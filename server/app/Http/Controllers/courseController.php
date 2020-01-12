<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class courseController extends Controller
{
 public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Product([
          'courseName' => $request->get('courseName'),
          'courseDescription' => $request->get('courseDescription')
          'coursePath' => $request->get('coursePath')
        ]);
        $product->save();


        return response()->json('Course added Successfully.');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->courseName = $request->get('courseName');
        $product->courseDescription = $request->get('courseDescription');
        $product->coursePath = $request->get('coursePath');
        $product->save();


        return response()->json('Course Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $product = Product::find($id);
      $product->delete();


      return response()->json('Course Deleted Successfully.');
    }
}
