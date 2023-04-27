<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Broadcast::routes();

        Route::post('/broadcasting/auth', function(Request $request) {
            if ($request->channel_name === 'presence-online') {
                return Broadcast::auth($request);
            }
            return abort(403);
        });

        require base_path('routes/channels.php');
    }
}
