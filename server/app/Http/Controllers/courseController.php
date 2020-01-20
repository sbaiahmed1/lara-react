<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Course;

class courseController extends Controller
{
 public function index()
    {
        $products = Course::all();
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
            $requestData = json_decode($request->getContent(), true);
            $course = Course::create($requestData);

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
        $product = Course::find($id);
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
        $product = Course::find($id);
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
      $product = Course::find($id);
      $product->delete();


      return response()->json('Course Deleted Successfully.');
    }
}
