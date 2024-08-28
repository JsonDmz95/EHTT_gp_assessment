import { IPerson } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, peopleSlice } from "./states";

export interface IAppStore {
    people: IPerson[];
    favorites: IPerson[];
}

export default configureStore<IAppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer
    }
});