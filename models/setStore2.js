import { types } from "mobx-state-tree"; 

export const setStore2 = types
    .model("SetStore2", {
        setNum: types.maybe(types.string),
        weight: types.maybe(types.string),
        reps: types.maybe(types.string),
        repRange: types.maybe(types.string), 
        tempo: types.maybe(types.string), 
        notes: types.maybe(types.string)
    })