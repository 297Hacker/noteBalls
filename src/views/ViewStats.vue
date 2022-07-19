<script setup>
import { useStoreNotes } from '../stores/storeNotes';

const storenotes = useStoreNotes()

</script>

<template>
        <table>
            <label>Stats</label>
            <tr>
                <td>Amount of notes:</td><td>{{storenotes.totalNotesCount}}</td>
            </tr>
            <tr>
                <td>Amount of characters:</td><td>{{storenotes.totalCharactersCount}}</td>
            </tr>
        </table>
</template>