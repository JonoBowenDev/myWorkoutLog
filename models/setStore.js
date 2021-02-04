import { types } from "mobx-state-tree"; 

export const setStore = types
    .model("SetStore", {
        setNum: types.maybe(types.string),
        weight: types.maybe(types.string),
        reps: types.maybe(types.string),
        repRange: types.maybe(types.string), 
        tempo: types.maybe(types.string), 
        notes: types.maybe(types.string)
    })