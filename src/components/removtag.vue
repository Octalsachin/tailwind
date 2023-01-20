<template>
<div class="mx-auto container">
    <h1 class="text-3xl text-center bg-yellow-400 my-4">Remove Tag {{ herosCount }}</h1>
    <ul class="border border-black rounded p-2 mx-[30%] bg-slate-200">
        <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
            <div>
                {{ hero.name }}
            </div>
            <button v-on:click="remove(index)">x</button>
        </li>
    </ul>
    <form class="mt-10 text-center" @submit.prevent="addHero">
        <input class="border border-black rounded px-2" v-model="newHero" placeholder="Type Hero Name Here" ref="newHeroRef" />
        <button class="border border-black rounded bg-gradient-to-r from-red-700 to-pink-500 text-white ml-2 px-2" type="submit">
            Add Hero
        </button>
    </form>
</div>
</template>

<script>
import {
    computed,
    onMounted,
    ref
} from "vue";
export default {
    name: 'removtag-test',
    setup() {
        const newHeroRef = ref("");
        const newHero = ref("");
        const dcHeros = ref([{
                name: "Sachin"
            },
            {
                name: "Kuldip"
            },
            {
                name: "Yash"
            },
            {
                name: "Ajay"
            },
            {
                name: "Anil"
            },
        ]);

        onMounted(() => {
            newHeroRef.value.focus();
        });

        const herosCount = computed({
            get: () => dcHeros.value.length,
        });

        function remove(index) {
            dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
        }

        function addHero() {
            if (newHero.value !== "") {
                dcHeros.value.unshift({
                    name: newHero.value
                });
                newHero.value = "";
            }
        }

        return {
            dcHeros,
            newHero,
            remove,
            addHero,
            newHeroRef,
            herosCount
        };
    },
};
</script>

<style></style>
