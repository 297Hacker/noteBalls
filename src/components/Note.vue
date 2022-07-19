<script setup>
import {computed, reactive} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'
import ModalDeleteNote from './ModalDeleteNote.vue'

const storeNotes = useStoreNotes()

const props = defineProps({
    note: {
        type: Object,
        requires: true
    }
})

const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
})

const removeNote = () => {
}

const modals = reactive({
    deleteNote: false
})

</script>

<template>
<v-card class="mt-5" elevation="3" tile>
    <v-card-text>{{note.content}}</v-card-text>
    <span class="d-flex justify-end mx-5">{{characterLength}}</span>
    <v-row no-gutters>
        <v-col>
            <RouterLink :to="`/editNote/${note.id}`">
                <v-card-actions class="actions">
                    Edit
                </v-card-actions>
            </RouterLink>
        </v-col>
        <v-col>
            <v-card-actions @click.prevent="modals.deleteNote = true" class="actions">Delete</v-card-actions>
        </v-col>
    </v-row>  
</v-card>
<v-card>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :note="note.id"/>  
</v-card>
</template>