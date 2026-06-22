import type { BarType } from "../../components/ChartWrapper/types";

export const getLocalBars = () => {
    let localBars = JSON.parse(localStorage.getItem("bars") ?? "[]");
    if (!Array.isArray(localBars)) {
        localStorage.setItem("bars", "[]");
        localBars = [];
    }
    return localBars;
};

export const setLocalBars = (bars: Array<BarType>) => {
    localStorage.setItem("bars", JSON.stringify(bars));
};
