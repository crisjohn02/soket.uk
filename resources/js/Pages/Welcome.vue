<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted, ref, onUnmounted } from 'vue';

const _users = ref([]);

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

onMounted(() => {
    Echo.join('online')
        .here(users => {
            _users.value = users;
        })
        .joining(user => _users.value.push(user))
        .leaving(user => _users.value.splice(_users.value.indexOf(user), 1))
});

onUnmounted(() => {
    Echo.leave('online');
});
</script>

<template>
    <Head title="Welcome" />

    <div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>

            <template v-else>
                <Link :href="route('login')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link>
            </template>
        </div>

        <div class="max-w-7xl mx-auto p-6 lg:p-8">

            <div class="mt-16">
                <div class="p-4 rounded-xl shadow-xl border bg-white">
                    <h1 class="text-3xl font-bold my-8 text-center">WebSockets and Real-Time Communication</h1>
    <p class="text-gray-600 text-lg mb-8">WebSockets are a technology for real-time, bidirectional communication between a client (such as a web browser) and a server. Unlike traditional HTTP requests, WebSockets keep the connection open and allow for messages to be sent and received in real-time.</p>
    <p class="text-gray-600 text-lg mb-8">WebSockets are particularly useful for applications that require real-time updates, such as chat rooms, multiplayer games, and stock tickers. They can also be used for other types of real-time communication, such as video conferencing and remote collaboration.</p>

                    <p class="text-lg text-gray-600">
                        Register now and create at a maximum 2 websocket clients and use it in your projects.
                    </p>

                    <p class="text-lg text-gray-600 mt-6">
                        This websocket server was created using <a href="https://docs.soketi.app/" class="text-sky-500 underline">soketi</a> that implements the <a href="https://pusher.com/docs/channels/library_auth_reference/pusher-websockets-protocol#version-7-2017-11" class="text-sky-500 underline">Pusher Protocol v7.</a> Therefore, any Pusher-maintained or compatible client can connect to it, bringing a plug-and-play experience for existing applications that are already compatible with this protocol.
                    </p>

                    <p class="text-lg text-gray-600 mt-6">
                        For more information and complete guide, please visit the following links because I am lazy enough to discuss it in here :)
                        <ul class="list-disc pl-4">
                            <li>
                                <a href="https://pusher.com/docs/channels/getting_started/javascript/?ref=docs-index" class="text-sky-500 underline">Pusher docs</a>
                            </li>
                            <li>
                                <a href="https://docs.soketi.app/" class="text-sky-500 underline">Soketi</a>
                            </li>
                            <li>
                                <a href="https://laravel.com/docs/10.x/broadcasting#main-content" class="text-sky-500 underline">Laravel Broadcasting</a>
                            </li>
                        </ul>
                    </p>
                    <div class="mt-10 text-gray-500">
                        If you find this service useful, please consider buying me a coffee to help me maintain the hosting and maintenance cost.
                        <a href="https://www.buymeacoffee.com/lazycod3r" target="_blank" class="mt-5">
                            <div class="mt-5 rounded-full shadow-lg border p-6 w-full md:w-2/6 text-lg text-gray-500 mx-auto">
                                <div class="flex items-center justify-center">
                                    <svg class="w-6 h-6 text-sky-500" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"/></svg>
                                    <span class="ml-3">
                                        Buy me a coffee
                                    </span>
                                </div>
                                
                            </div>
                        </a>
                        <div class="flex items-center justify-center" v-if="$page.props.auth.user">
                            <div class="block mt-5 rounded-md shadow-lg border p-3 w-full md:w-2/6 bg-gray-800 text-white text-xs">
                                <code>
                                    {{ _users.length }} people is on this page right now. Awesome!
                                </code>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                <div class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
                </div>

                <div class="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
                    Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }}) by lazycod3r
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
