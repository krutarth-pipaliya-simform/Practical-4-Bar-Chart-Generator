import { useBarContext } from "../hooks/useBarContext";
import { Bar } from "./Bar";

export const CartesianPlain = () => {
    const { bars } = useBarContext();
    const maxYValue = bars.reduce((maxYValue, { yValue }) => {
        return Math.max(maxYValue, yValue);
    }, 0);

    return (
        <div className="flex-1 flex gap-4 border-l-2 border-b-2 overflow-auto pl-4 pb-8 scrollbar-none">
            {bars.map(({ id, xLabel, yValue }) => (
                <Bar key={id} label={xLabel} height={(yValue * 100) / maxYValue} />
            ))}
        </div>
    );
};
