import { useState } from "react";

import { useBarContext } from "../hooks/useBarContext";

export const CreateBar = () => {
    const [xLabel, setXLabel] = useState("");
    const [yValue, setYValue] = useState("");
    const { createBar } = useBarContext();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                createBar({
                    id: crypto.randomUUID(),
                    xLabel,
                    yValue: +yValue,
                });
            }}
            className="flex flex-col gap-4 border-2 p-4 rounded-lg"
        >
            <label htmlFor="xLabel">X - Label</label>
            <input
                required
                id="xLabel"
                type="text"
                placeholder="Please enter the Label name"
                value={xLabel}
                onChange={(e) => setXLabel(e.target.value)}
                className="border-2 rounded-lg"
            />
            <label htmlFor="yValue">Y - Value</label>
            <input
                required
                id="yValue"
                type="number"
                placeholder="Please enter the Label value"
                value={yValue}
                onChange={(e) => setYValue(e.target.value)}
                className="border-2 rounded-lg"
            />
            <button type="submit" className="bg-blue-400 rounded-lg">
                Create Bar
            </button>
        </form>
    );
};
