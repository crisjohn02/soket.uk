<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('key');
            $table->uuid('secret');
            $table->integer('max_connections')->default(100);
            $table->boolean('enable_client_messages')->default(false);
            $table->boolean('enabled')->default(true);
            $table->integer('max_backend_events_per_sec')->default(-1);
            $table->integer('max_client_events_per_sec')->default(-1);
            $table->integer('max_read_req_per_sec')->default(-1);
            $table->json('webhooks')->nullable();
            $table->tinyInteger('max_presence_members_per_channel')->nullable();
            $table->tinyInteger('max_presence_member_size_in_kb')->nullable();
            $table->tinyInteger('max_channel_name_length')->nullable();
            $table->tinyInteger('max_event_channels_at_once')->nullable();
            $table->tinyInteger('max_event_name_length')->nullable();
            $table->tinyInteger('max_event_payload_in_kb')->nullable();
            $table->tinyInteger('max_event_batch_size')->nullable();
            $table->boolean('enable_user_authentication')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
