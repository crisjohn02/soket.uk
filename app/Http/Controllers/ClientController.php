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
            'name' => 'required|max:255',
            'max_connections' => 'required|integer|gte:50',
            'enable_user_authentication' => 'required'
        ]);
        $client = $request->user()->clients()->create([
            'name' => $request->name,
            'key' => random_int(10000, 1000000),
            'secret' => Uuid::uuid4(),
            'max_connections' => $request->input('max_connections') ?? 50,
            'enable_user_authentication' => $request->input('enable_user_authentication'),
        ]);
        return back();
    }

    public function update(Request $request, Client $client)
    {
        $request->validateWithBag('createClient', [
            'name' => 'required|max:255',
            'max_connections' => 'required|integer|gte:50',
            'enable_user_authentication' => 'required'
        ]);
        $client->update([
            'name' => $request->name,
            'max_connections' => $request->input('max_connections') ?? 50,
            'enable_user_authentication' => $request->input('enable_user_authentication'),
        ]);
        return back();
    }

    public function destroy(Client $client)
    {
        $client->delete();
        return back();
    }
}
