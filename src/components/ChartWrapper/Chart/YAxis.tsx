import { useBarContext } from "../hooks/useBarContext";

export const YAxis = () => {
    const { bars } = useBarContext();
    const maxYValue = bars.reduce((maxYValue, { yValue }) => {
        return Math.max(maxYValue, yValue);
    }, 0);
    return (<div className="flex flex-col pb-15">
        <div className="flex-1">{maxYValue} -</div>
        <div className="flex-1" >{maxYValue * 4/ 5} -</div>
        <div className="flex-1" >{maxYValue * 3/ 5} -</div>
        <div className="flex-1">{maxYValue * 2/ 5} -</div>
        <div className="flex-1">{maxYValue / 5} -</div>
    </div>);
};
