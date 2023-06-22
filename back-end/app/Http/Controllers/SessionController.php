<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MatchPlayer;
use App\Models\players;
use App\Models\Matches;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function insert(Request $request){

        $players = $request->input('players');
        $_players = [];

        foreach ($players as $player) {
            $player = players::create([
                'PlayerName' => $player,
            ]);

            $_players[] = [
                'name' => $player,
                'id' => $player->id,
            ];
        }

        $match = Matches::create([]);
        $imposter = $_players[array_rand($_players)]['id'];

        foreach($_players as $player) {

            $isImposter = $imposter == $player['id'];
            MatchPlayer::create([
                'player_id' => $player['id'],
                'match_id' => $match->id,
                'is_imposter' => $isImposter,
            ]);
        }
    }
}
