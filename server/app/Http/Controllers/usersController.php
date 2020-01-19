<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;

class usersController extends Controller
{
public function index()
    {
        $users = Users::all();
        return response()->json($users);
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
            $users = Users::create($requestData);

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
        $users = Users::find($id);
        return response()->json($users);
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
        $users = Users::find($id);
        $users->courseName = $request->get('courseName');
        $users->courseDescription = $request->get('courseDescription');
        $users->coursePath = $request->get('coursePath');
        $users->save();


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
      $product = Users::find($id);
      $product->delete();


      return response()->json('Course Deleted Successfully.');
    }
}
