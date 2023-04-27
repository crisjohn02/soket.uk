<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';

import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Helpers from '@/Helpers';

const clientBeingAdded = ref(false);
const clientBeingDeleted = ref(false);


const props = defineProps(['clients', 'permissions']);

const { toast } = Helpers();

const form = useForm({
    name: ''
});

const createClient = () => {
    form.post(route('client.store'), {
        preserveScroll: true,
        preserveState: true,
        errorBag: 'createClient',
        onSuccess: () => {
            clientBeingAdded.value = false;
            toast.success('Client successfully created! Build something awesome!')
        }
    });
};

const deleteClient = () => {
    form.delete(route('client.delete', clientBeingDeleted.value), {
        preserveScroll: true,
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Client successfully deleted');
            clientBeingDeleted.value = false;
        }
    })
};
</script>
<template>
    <AppLayout title="Dashboard">
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="block">
                    <PrimaryButton @click="clientBeingAdded=true">
                        Create new client
                    </PrimaryButton>
                </div>
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg border my-2" v-for="client in clients">
                    <div class="px-3 py-2 border-b flex items-center justify-between">
                        <div class="text-lg font-semibold">
                            {{ client.name }}
                        </div>
                        <div>
                            <DangerButton @click="clientBeingDeleted=client">
                                Delete
                            </DangerButton>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="rounded-lg border p-3 tracking-wide bg-emerald-300 text-medium">
                            <span class="block">
                                PUSHER_APP_ID={{ client.id }}
                            </span>
                            <span class="block">
                                PUSHER_APP_KEY={{ client.key }}
                            </span>
                            <span class="block">
                                PUSHER_APP_SECRET={{ client.secret }}
                            </span>
                            <span class="block">
                                PUSHER_HOST=socket.soket.uk
                            </span>
                            <span class="block">
                                PUSHER_PORT=443
                            </span>
                            <span class="block">
                                PUSHER_SCHEME=https
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DialogModal :show="clientBeingAdded" @close="clientBeingAdded=false">
            <template #title>
                Create client
            </template>
            <template #content>
                <div class="w-full" v-if="permissions.canCreateNew">
                    <InputLabel value="Enter name" />
                    <TextInput type="text" v-model="form.name" class="w-full" />
                    <InputError :message="form.errors.name" />
                </div>
                <div class="rounded-lg p-3 bg-rose-500 text-md text-white" v-else>
                    Sorry, since this is a free service I only allowed 2 clients per account.
                </div>
            </template>
            <template #footer>
                <div class="flex items-center justify-end gap-2">
                    <DangerButton @click="clientBeingAdded=false">
                        nevermind
                    </DangerButton>
                    <PrimaryButton v-if="permissions.canCreateNew" @click="createClient">
                        save
                    </PrimaryButton>
                </div>
            </template>
        </DialogModal>
        <DialogModal maxWidth="lg" :show="clientBeingDeleted" @close="clientBeingDeleted=false">
            <template #title>
                Delete client
            </template>
            <template #content>
                Are you sure you want to permanently delete this client?
            </template>
            <template #footer>
                <div class="flex items-center justify-end gap-2">
                    <PrimaryButton @click="clientBeingDeleted=false">
                        nevermind
                    </PrimaryButton>
                    <DangerButton v-if="permissions.canCreateNew" @click="deleteClient">
                        yes
                    </DangerButton>
                </div>
            </template>
        </DialogModal>
    </AppLayout>
</template>