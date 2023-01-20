<template>
<section class="flex w-full">
    <div class="m-auto bg-slate-200 mt-10  rounded-lg ">
        <div class="text-center">
            <h1 class="text-2xl font-bold px-5 py-3 text-center ">Octal infotech Calculator</h1>
            <small>You can fully use keyboard to calculate   </small>
        </div>
        <p class="text-3xl bg-white text-right mx-auto border shadow shadow-black  border-black mt-10 w-72 h-14 overflow-x-scroll" style="direction:rtl">
            {{ currentNum }}
        </p>
        <div class="h-10 text-left ml-10 font-bold">
            <small v-if="selectedOperation">{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small>
        </div>
        <div class="grid grid-cols-4 gap-3  px-10 ml-2 py-5 ">
            <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                1
            </button>
            <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                2
            </button>
            <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                3
            </button>
            <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                +
            </button>
            <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                4
            </button>
            <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                5
            </button>
            <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                6
            </button>
            <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                -
            </button>
            <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                7
            </button>
            <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                8
            </button>
            <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                9
            </button>
            <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                *
            </button>
            <button @click="pressed('c')" class="p-2 h-10 border rounded shadow bg-white">
                C
            </button>
            <button @click="pressed('0')" class="p-2 h-10 border rounded shadow bg-white">
                0
            </button>
            <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                =
            </button>
            <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow bg-white">
                /
            </button>
        </div>
    </div>
</section>
</template>

<script>
import {
    ref
} from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";
export default {
    name: 'calculator-test',
    setup() {
        const operations = ["+", "-", "*", "/"];
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        const currentNum = ref("");
        const prevNum = ref("");
        const selectedOperation = ref("");

        function pressed(value) {
            if (value === "=" || value === "Enter") calculate();
            else if (value === "c") clear();
            else if (operations.includes(value)) applyOperation(value);
            else if (numbers.includes(value)) appendNumber(value);
        }

        function appendNumber(value) {
            currentNum.value = currentNum.value + value;
        }

        function applyOperation(value) {
            calculate();
            prevNum.value = currentNum.value;
            currentNum.value = "";
            selectedOperation.value = value;
        }

        function calculate() {
            if (selectedOperation.value === "*") multiply();
            else if (selectedOperation.value === "/") divide();
            else if (selectedOperation.value === "-") subtract();
            else if (selectedOperation.value === "+") sum();

            prevNum.value = "";
            selectedOperation.value = "";
        }

        function multiply() {
            currentNum.value = prevNum.value * currentNum.value;
        }

        function divide() {
            currentNum.value = prevNum.value / currentNum.value;
        }

        function subtract() {
            currentNum.value = prevNum.value - currentNum.value;
        }

        function sum() {
            currentNum.value = +prevNum.value + +currentNum.value;
        }

        const clear = () => (currentNum.value = "");

        const handleKeydown = (e) => pressed(e.key);
        useWindowEvent("keydown", handleKeydown);

        return {
            currentNum,
            pressed,
            selectedOperation,
            prevNum
        };
    },
};
</script>

<style></style>
