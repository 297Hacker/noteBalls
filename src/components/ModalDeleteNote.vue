<script setup>
import {ref, onMounted} from 'vue'
import {onClickOutside} from '@vueuse/core'
import {useStoreNotes} from '@/stores/storeNotes'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    note: {
        type: String,
        required: true
    }
})

const modalCardRef = ref(null)

const closeModal = () => {
    emit('update:modelValue',false)
}

const storeNotes = useStoreNotes()

onClickOutside(modalCardRef, closeModal)

const emit = defineEmits(['update:modelValue']);

onMounted(() => {
    document.addEventListener('keyup', e => {
        if(e.key === 'Escape'){
            closeModal()
        }
    })
})

</script>

<template>
    <v-dialog v-model="modelValue">
        <v-card>
        <v-card-text>
          Are you sure you want to delete?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="closeModal()">cancel</v-btn>
          <v-btn @click.prevent="storeNotes.deleteNote(note)">delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>