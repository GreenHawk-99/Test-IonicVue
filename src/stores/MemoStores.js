import { defineStore } from 'pinia'

export const memoryStore = defineStore('memoryStore', {

    state: () => {
        return { memories:[
                {id:1,titre:"Le sapin en Java", description:"Nos débuts en Java",image:"sapin.jpg"},
                {id:2,titre:"La Todo List", description:"Les servlets",image:null},
                {id:3,titre:"Les ampoules", description:"Initiation a Spring et l'injection de dépendance",image:null},
                {id:4,titre:"L'API Héros", description:"Démonstration d'une API Rest et creation de projets Vue.js",image:null},
            ] }
    },
    getters:{

        memory(state){
            return (memoryId)=>{
                return state.memories.find((unSouvenir)=>unSouvenir.id==memoryId)
            }
        }
    }

})
