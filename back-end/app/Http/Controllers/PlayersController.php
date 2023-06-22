<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\players;

class PlayersController extends Controller
{

    public function insert(Request $request){

        $players = new players();
        $players->PlayerName = $request->playerName;
        $players->save();

        return response()->json($request);


    }




    public function show(){

        $player = players::all();
        return response()->json($player);

    }

    
}
