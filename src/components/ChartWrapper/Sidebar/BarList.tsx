import { useBarContext } from "../hooks/useBarContext";

export const BarList = () => {
    const { bars, deleteBar } = useBarContext();

    return (
        <ul className="flex-1 flex flex-col gap-2 overflow-auto scrollbar-none">
            {bars.map(({ id, xLabel, yValue }) => (
                <li key={id} className="border-2 flex flex-col gap-2 p-2 rounded-lg">
                    <div>X-Label : {xLabel}</div>
                    <div>Value : {yValue}</div>
                    <button
                        onClick={() => {
                            deleteBar(id);
                        }}
                        className="bg-blue-400 rounded-lg"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};
