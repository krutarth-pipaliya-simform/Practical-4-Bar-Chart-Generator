import { ChartWrapper } from "./components/ChartWrapper/ChartWrapper";
import { Header } from "./components/Header/Header";

const App = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <ChartWrapper />
        </div>
    );
};

export default App;
