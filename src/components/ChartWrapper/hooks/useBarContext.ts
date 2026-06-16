import { createContext, useContext } from "react";
import type { BarType } from "../types";

export const BarContext = createContext<BarContextType | null>(null);

export const useBarContext = () => {
    const data = useContext(BarContext);
    if (!data) {
        throw new Error("Please Wrap the component in the provider");
    }
    return data;
};

interface BarContextType {
    bars: Array<BarType>;
    createBar: (bar:BarType) => void;
    deleteBar: (barId:string) => void;
}
