import { types } from "mobx-state-tree"; 
import {setStore} from "./setStore.js"; 

export const exerciseStore = types
    .model("ExerciseStore", {
        exerciseName: types.maybe(types.string), 
        sets: types.array(setStore)
    })

    .actions((self) => {
        return {
            setExerciseName(exerciseName) {
                self.exerciseName = exerciseName; 
            }
        }
    }); 