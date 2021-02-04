import { types } from "mobx-state-tree"; 
import {workoutStore} from "./workoutStore"; 

import dummyWorkoutData from "../dummyWorkoutData";

export const RootStoreModel = types
    .model("RootStore", {
        workoutList: types.array(workoutStore),
    })
    .views((self => {
        return {
        }
    }))

    .actions ((self) => {
        return {
            addWorkout(workout) {
                self.workoutList.push(workout); 
            }
        }
    })

export const setupRootStore = async () => {
    
    const rs = RootStoreModel.create({
        workoutList: dummyWorkoutData
    }) 
    
    return rs; 
}
