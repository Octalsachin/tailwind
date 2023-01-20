<template>
<section class="flex w-full">
    <div class="m-auto">
        <div class="mt-10">
            <div class="text-center w-full">
                <h1 class="font-bold text-3xl">Octal infotech</h1>
                <h1 class="text-2xl mt-4">Tensorflow Object Detection</h1>
                <small>Try with any item</small>
            </div>

            <div class="flex flex-wrap justify-center">
                <img ref="imgRef" src="https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=is&k=20&c=yvvWfDnzFoBTeabQaai9MEdPQ3EzN-i4EH-RYcol7c8=" width="200" crossorigin="anonymous" />
                <div class="w-full text-center my-4">
                    <button @click="detect" class="w-32 rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2">
                        <span v-if="isLoading">Loading ... </span>
                        <span v-else>Detect Object</span>
                    </button>
                    <div v-if="result.length > 0">
                        <p>{{ result[0].class }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</template>

<script>
import {
    ref
} from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
    name: 'tensorflow-test',
    setup() {
        const imgRef = ref("");
        const videoRef = ref("");
        const isLoading = ref(false);
        const isStreaming = ref(false);
        const result = ref([]);

        async function detect() {
            const img = imgRef.value;
            isLoading.value = true;
            const model = await cocoSsd.load();
            const predictions = await model.detect(img);
            result.value = predictions;
            console.log(predictions, img);
            isLoading.value = false;
        }

        return {
            imgRef,
            result,
            detect,
            isLoading,
            videoRef,
            isStreaming,

        };
    },
};
</script>

<style></style>
