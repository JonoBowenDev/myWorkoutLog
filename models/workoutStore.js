import { types } from "mobx-state-tree"; 
import {exerciseStore} from "./exerciseStore"; 

export const workoutStore = types
    .model("WorkoutStore", {
        title: types.maybe(types.string),
        startTime: types.maybe(types.string),
        endTime: types.maybe(types.string),
        notes: types.maybe(types.string),
        exerciseList: types.array(exerciseStore), 
    })

    .views((self) => {
        return { 
          getDateFormatted() {
            return "6th March"; 
          },
        }
      }) 

    .actions((self) => {
        return {
            setTitle(title) {
                self.title = title; 
            }, 
            setStartTime(startTime) {
                self.startTime = startTime; 
            }, 
            setEndTime(endTime) {
                self.endTime = endTime; 
            }, 
            setNotes(notes) {
                self.notes = notes; 
            }, 

            addExercise(exercise) {
                self.exerciseList.push(exercise); 
            }
        }
    }); 