<script setup>
import AddEditNote from '@/components/AddEditNote.vue'
import { useRoute, useRouter } from 'vue-router';
import { useStoreNotes } from '../stores/storeNotes';
import {ref} from 'vue'

const noteContent = ref('')

const route = useRoute()
const router = useRouter()

const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push("/")
}

</script>
<template>
        <AddEditNote v-model="noteContent" ref="addEditNoteRef" placeHolder="Edit Note" label="Edit Note">
            <template v-slot:buttons>
                <v-btn @click="$router.back()">Cancel</v-btn>
                <v-btn @click="handleSaveClicked()" :disabled="!noteContent">Save note</v-btn>
            </template>
        </AddEditNote>
</template>