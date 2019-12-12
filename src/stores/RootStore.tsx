import GeneralStore from "./GeneralStore";
import { createContext, useContext } from "react";

class RootStore {
    public generalStore = new GeneralStore();
}

export const rootStore = new RootStore();

export const rootStoreCtx = createContext(rootStore);
export function useStores() {
    return useContext(rootStoreCtx);
}