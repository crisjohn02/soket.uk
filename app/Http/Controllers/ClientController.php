<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;

class ClientController extends Controller
{
    public function index(Request $request)
    {
        $clients = $request->user()->clients;
        return Inertia::render('Clients/Index', [
            'clients' => $clients,
            'permissions' => [
                'canCreateNew' => $clients->count() < env('CLIENT_LIMIT') || $request->user()->id === 1,
            ]
        ]);
    }

    public function store(Request $request)
    {
        $request->validateWithBag('createClient', [
            'name' => 'required|max:255'
        ]);
        $client = $request->user()->clients()->create([
            'name' => $request->name,
            'key' => random_int(10000, 1000000),
            'secret' => Uuid::uuid4(),
            'max_connections' => 50
        ]);
        return back();
    }

    public function destroy(Client $client)
    {
        $client->delete();
        return back();
    }
}
