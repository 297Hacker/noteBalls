<script setup>
import {ref} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'
import {useWatchCharacters} from '@/use/useWatchCharacters'
import Note from '@/components/Note.vue'
import AddEditNote from '@/components/AddEditNote.vue'

const newNote = ref('')
const addEditNoteRef = ref(null)

const storeNotes = useStoreNotes()
const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = '';
    addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)

</script>

<template>
    <v-tabs-items>
        <v-tab-item>
        <AddEditNote v-model="newNote" ref="addEditNoteRef">
            <template v-slot:buttons>
                <v-btn @click="addNote" :disabled="!newNote">Add new note</v-btn>
            </template>
        </AddEditNote>
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
        </v-tab-item>
    </v-tabs-items>
</template>

<style>
.actions {
    color: #1E88E5;  
}

.actions:hover {
    cursor: pointer;
    background-color: #1A237E;
}

</style>