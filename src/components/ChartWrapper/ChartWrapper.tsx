import { SideBar } from "./Sidebar/SideBar";
import { Chart } from "./Chart/Chart";
import { ChartsProvider } from "./Context/ChartsProvider";

export const ChartWrapper = () => {
    return (
        <div className="flex-1 flex overflow-hidden">
            <ChartsProvider>
                <SideBar />
                <Chart />
            </ChartsProvider>
        </div>
    );
};
