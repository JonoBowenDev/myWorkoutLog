import { types } from "mobx-state-tree"; 
import {excerciseStore} from "./excerciseStore"; 

export const workoutStore = types
    .model("WorkoutStore", {
        title: types.maybe(types.string),
        startTime: types.maybe(types.string),
        endTime: types.maybe(types.string),
        notes: types.maybe(types.string),
        workout: types.array(excerciseStore), 
    })