<template>
<section class="flex w-full">
    <div class="m-auto">
        <div class="mt-10">
            <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">Add User</button>
            <table>
                <thead>
                    <tr>
                        <th class="px-4 py-2 border">ID</th>
                        <th class="px-4 py-2 border">Avatar</th>
                        <th class="px-4 py-2 border"> Name</th>
                        <th class="px-4 py-2 border">Email</th>
                    </tr>

                </thead>
                <tbody>
            
                    <tr v-for="user in state.users" :key="user.id">
                        <td class=" border px-4 py-2">{{ user.id }}</td>
                        <td class=" border px-4 py-2"><img :src="user.avatar" :alt="user.name" width="50" class="rounded-full"></td>
                        <td class=" border px-4 py-2">{{ user.name }}</td>
                        <td class=" border px-4 py-2">{{ user.email }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-between">
                <button class="px-3 py-2 border rounded hover:shadow" @click="prev">prev</button>
                <button class="px-3 py-2 border rounded hover:shadow" @click="next">Next</button>
            </div>
        </div>

    </div>
</section>
<teleports to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
        <template #title>
            Add New users
        </template>
        <template #body>
            <form @submit.prevent="submit">
                <div class="p-2">
                    <label>Name</label>
                    <input class="w-full p-2 rounded border" placeholder=" User Name" v-model="state.form.name" />
                </div>
                <div class="p-2">
                    <label>Email</label>
                    <input class="w-full p-2 rounded border" placeholder=" User Email" type="email" v-model="state.form.email" />
                </div>
                <div class="p-2">
                    <label>Avatar</label>
                    <input class="w-full p-2 rounded border" placeholder="Avatar Url" type="text" v-model="state.form.avatar" />
                </div>

                <div class="p-2">
                    <input class="w-full p-2 rounded border hover:bg-gray-300" type="submit" value="Create" />
                </div>

            </form>
        </template>
    </Modal>

</teleports>
</template>

<script>
import {
    onMounted,
    reactive,
    ref
} from '@vue/runtime-core'
import axios from 'axios'
import Modal from '../components/Modal.vue'
export default {
    components: {
        Modal
    },
    name: 'User-crud',
    setup() {
        const isModalOpen = ref(false);
        const state = reactive({
            users: {},
            form: {
                name: "",
                email: "",
                avatar: "",
            }
        });
        onMounted(async () => {
            const {
                data
            } = await axios.get(process.env.VUE_APP_API + '/users');
            state.users = data;
        });

        async function next() {
            const {
                data
            } = await axios.get("https://crudcrud.com/api/6483c2011b984e65b5dae15b696ca701/users?page=2");
            state.users = data;
        }

        async function prev() {
            const {
                data
            } = await axios.get("https://crudcrud.com/api/6483c2011b984e65b5dae15b696ca701/users?page=1");
            state.users = data;
        }

        async function submit() {
            const data = await axios.post(process.env.VUE_APP_API + '/users', state.form);
            console.log(data);
            state.form.email = '';
            state.form.name = '';
            state.form.avatar = '';
            isModalOpen.value = false;
        }

        return {
            state,
            next,
            prev,
            isModalOpen,
            submit,
        };
    },

};
</script>

<style>

</style>
