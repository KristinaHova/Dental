<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
/*
Broadcast::routes(["prefix" => 'auth/api', "middleware" => "auth:api"]);
/*
Broadcast::routes(['middleware' => ['web', 'auth']]);
Broadcast::channel('live-feed-channel', function(\App\Models\User $user) {
    return true || false;
});*/

