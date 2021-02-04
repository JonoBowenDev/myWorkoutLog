import { types } from "mobx-state-tree"; 
import {setStore} from "./setStore.js"; 

export const excerciseStore = types
    .model("ExcerciseStore", {
        excerciseName: types.maybe(types.string), 
        sets: types.array(setStore)
    })