<template>
<div class="flex flex-wrap w-full  mt-10  relative ">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
        <transition name="fade">
            <div v-if="currentSlide == index" :class="color" style="height:350px"></div>
        </transition>
    </div>
    <div class="w-full " style="height:340px">
      <h1 class="text-3xl text-center mt-4 font-serif font-bold text-black border-b-4 border-red-700 opacity-50">Octal infotech</h1>
        <div class="absolute bottom-0 w-full flex justify-center ">
            <div v-for="(slider, index) in sliders" :key="slider" @click="makeActive(index)" :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'" class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'slider-test',
    data() {
        return {
            currentSlide: 0,
            sliders: ["bg-yellow-400", "bg-sky-300", "bg-purple-600"],
        };
    },
    methods: {
        makeActive(index) {
            this.currentSlide = index;
        },
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
    
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

</style>
