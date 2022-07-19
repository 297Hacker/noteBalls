import {watch} from 'vue'

export function useWatchCharacters(element){
    watch(element, (newValue) => {
        if(newValue.length === 100){
            alert("max character reached!")
        }
    })
}