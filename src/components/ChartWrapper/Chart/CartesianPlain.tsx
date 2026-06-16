import { useBarContext } from "../hooks/useBarContext";
import { Bar } from "./Bar";

export const CartesianPlain = () => {
    const { bars } = useBarContext();
    return (
        <div className="flex-1 border-l-2 border-b-2 overflow-auto flex gap-4">
            {bars.map(({ id, xLabel, yValue }) => (
                <Bar key={id} label={xLabel} height={yValue} />
            ))}
        </div>
    );
};
