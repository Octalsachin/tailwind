<template>
<nav class="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-5 flex text-2xl font-bold">

    <router-link
     v-for="item in list"
      :key="item.to" 
      class="mx-2" 
      :to="item.to"
      >{{ item.title }}</router-link>

      <button class="mx-2" @click="$emit('open-login-modal')">Login</button>

</nav>
</template>

<script>

export default {
    name: 'App-Header',
    data() {
        return {
        list:[
            {
                title: "removtag",
                to: "/removtag"
            },
            {
                title: "calender",
                to: "/calender"
            },
            {
                title: "Slider",
                to: "/Slider"
            },
            {
                title: "calculator",
                to: "/calculator"
            },
            {
                title: "User Crud",
                to: "/UserCrud"
            },
            {
                title: "Tensorflow",
                to: "/tensorflow"
            }
        ]
    }
}

}
</script>

<style>

</style>
