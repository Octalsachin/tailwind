<template>
<appheader @open-login-modal="isLoginOpen=true" />

<div class="w-full flex flex-col-reverse">
    <router-view></router-view>
</div>

<Login v-if="isLoginOpen" @close-login="isLoginOpen= false" />

</template>

<script>
import appheader from './components/AppHeader.vue'
import Login from './components/Login.vue'


export default {
    data() {
        return {
            isLoginOpen: false,
        }
    },
    
    name: 'App',
    components: {
        appheader,
        Login,

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
}
</style>
