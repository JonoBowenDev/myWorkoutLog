import { types } from "mobx-state-tree"; 
import {setStore2} from "./setStore2.js"; 

export const excerciseStore = types
    .model("ExcerciseStore", {
        excerciseName: types.maybe(types.string), 
        sets: types.array(setStore2)
    })