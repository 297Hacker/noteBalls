<script setup>
import {ref} from 'vue'
import {vAutofocus}  from '@/directives/vAutoFocus'

const textAreaRef = ref(null)

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor : {
        type: String,
        default: 'green'
    },
    placeHolder : {
        type: String,
        default: 'Write something...'
    },
    label: {
        type: String,
    }
})

const focusTextarea = () => {
    textAreaRef.value.focus()
}

const emit = defineEmits(['update: modelValue'])

defineExpose({
    focusTextarea
})

</script>

<template>
    <v-card elevation="3" tile>
        <v-col class="pb-0">
            <label v-if="label">{{label}}</label>
            <v-textarea
            v-model="modelValue"
            @input="$emit('update:modelValue', modelValue)"
            :placeholder="placeHolder"
            ref="textAreaRef"
            v-autofocus
            maxlength="100"
            ></v-textarea>
        </v-col>
        <v-col class="text-right pt-0">
            <slot name="buttons"/>
        </v-col>
    </v-card>
</template>