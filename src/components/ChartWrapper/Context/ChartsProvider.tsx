import { useState, type ReactNode } from "react";

import { BarContext } from "../hooks/useBarContext";
import type { BarType } from "../types";
import { getLocalBars, setLocalBars } from "../../../utils/helpers/syncLocalstorage";

interface BarProviderPropsType {
    children: ReactNode;
}

export const ChartsProvider = ({ children }: BarProviderPropsType) => {
    const data = useBarsCreater();
    return <BarContext.Provider value={data}> {children}</BarContext.Provider>;
};

const useBarsCreater = () => {
    const [bars, setBars] = useState<Array<BarType>>(getLocalBars());
    const createBar = (bar: BarType) => {
        setBars((prevBars) => {
            setLocalBars([...prevBars, bar]);
            return [...prevBars, bar];
        });
    };

    const deleteBar = (barId: string) => {
        setBars((prevBars) => prevBars.filter(({ id }) => id !== barId));
    };

    return { bars, createBar, deleteBar };
};
