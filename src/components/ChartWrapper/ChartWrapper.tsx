import { SideBar } from "./Sidebar/SideBar";
import { Chart } from "./Chart/Chart";

export const ChartWrapper = () => {
    return (
        <div className="flex-1 flex">
            <SideBar />
            <Chart />
        </div>
    );
};
