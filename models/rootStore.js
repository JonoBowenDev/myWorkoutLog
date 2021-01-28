import { types } from "mobx-state-tree"; 
import {workoutStore} from "./workoutStore"; 

export const RootStoreModel = types
    .model("RootStore", {
        count: types.integer,

        workoutList: types.array(workoutStore),

    })
    .views((self => {
        return {
            getCount() {
                return `counter = ${self.count}`; 
            }
        }
    }))

    .actions ((self) => {
        return {
            increaseCount() {
                self.count++; 
            },

            decreaseCount() {
                self.count--; 
            }
        }
    })

export const setupRootStore = async () => {
    
    const rs = RootStoreModel.create({
        count: 0
    }) 
    return rs; 
}
