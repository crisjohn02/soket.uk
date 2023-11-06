<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import InputCheckbox from '@/Components/Checkbox.vue';

import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Helpers from '@/Helpers';

const clientBeingAdded = ref(false);
const clientBeingDeleted = ref(false);


const props = defineProps(['clients', 'permissions']);

const { toast } = Helpers();

const form = useForm({
    name: '',
    enable_user_authentication: true,
    max_connections: 50,
});

const saveClient = () => {
    if (clientToBeAddedOrUpdated.value?.id) {
        // update
        form.put(route('client.update', clientToBeAddedOrUpdated.value), {
            preserveScroll: true,
            preserveState: true,
            errorBag: 'createClient',
            onSuccess: () => {
                clientToBeAddedOrUpdated.value = false;
                toast.success('Client successfully updated!')
            }
        });
    } else {
        //add
        form.post(route('client.store'), {
            preserveScroll: true,
            preserveState: true,
            errorBag: 'createClient',
            onSuccess: () => {
                clientToBeAddedOrUpdated.value = false;
                toast.success('Client successfully created! Build something awesome!')
            }
        });
    }
    
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

const clientToBeAddedOrUpdated = ref(false);

const updateClientDialog = (client) => {
    clientToBeAddedOrUpdated.value = {...client};
    form.name = clientToBeAddedOrUpdated.value.name;
    form.max_connections = clientToBeAddedOrUpdated.value.max_connections;
    form.enable_user_authentication = clientToBeAddedOrUpdated.value.enable_user_authentication;
};
</script>
<template>
    <AppLayout title="Dashboard">
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="block">
                    <PrimaryButton @click="clientToBeAddedOrUpdated=true">
                        Create new client
                    </PrimaryButton>
                </div>
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg border my-2" v-for="client in clients">
                    <div class="px-3 py-2 border-b flex items-center justify-between">
                        <div class="text-lg font-semibold">
                            {{ client.name }}
                        </div>
                        <div class="flex items-center gap-2">
                            <DangerButton @click="clientBeingDeleted=client">
                                Delete
                            </DangerButton>
                            <PrimaryButton @click="updateClientDialog(client)">
                                Update
                            </PrimaryButton>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="rounded-lg border p-3 tracking-wide bg-emerald-300 text-medium">
                            <span class="block">
                                app_id = {{ client.id }}
                            </span>
                            <span class="block">
                                key = {{ client.key }}
                            </span>
                            <span class="block">
                                secret = {{ client.secret }}
                            </span>
                            <span class="block">
                                host = ws.splitsecondsurveys.co.uk
                            </span>
                            <span class="block">
                                port = 443
                            </span>
                            <span class="block">
                                scheme = https
                            </span>
                            <span class="block">
                                Max connections = {{ client.max_connections }}
                            </span>
                            <span class="block">
                                User authentication: {{ client.enable_user_authentication }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DialogModal :show="clientToBeAddedOrUpdated" @close="clientToBeAddedOrUpdated=false">
            <template #title>
                Create client
            </template>
            <template #content>
                <div class="w-full flex flex-col gap-2" v-if="permissions.canCreateNew">
                    <div class="">
                        <InputLabel value="Enter name" />
                        <TextInput type="text" v-model="form.name" class="w-full" />
                        <InputError :message="form.errors.name" />
                    </div>
                    <div>
                        <InputLabel value="Maximum connections" />
                        <TextInput type="number" v-model="form.max_connections" class="w-full" />
                        <InputError :message="form.errors.max_connections" />
                    </div>
                    <div>
                        <label class="flex items-center">
                            <InputCheckbox v-model:checked="form.enable_user_authentication" />
                            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                Enable user authentication (Private/Public channel)
                            </span>
                        </label>
                    </div>
                </div>
                <div class="rounded-lg p-3 bg-rose-500 text-md text-white" v-else>
                    Sorry, since this is a free service I only allowed 2 clients per account.
                </div>
            </template>
            <template #footer>
                <div class="flex items-center justify-end gap-2">
                    <DangerButton @click="clientToBeAddedOrUpdated=false">
                        nevermind
                    </DangerButton>
                    <PrimaryButton v-if="permissions.canCreateNew" @click="saveClient">
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