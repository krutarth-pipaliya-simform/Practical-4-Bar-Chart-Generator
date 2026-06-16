import { CartesianPlain } from "./CartesianPlain";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";

export const Chart = () => {
    return (
        <main className="flex-1 flex flex-col p-4 bg-amber-500">
            <div className="flex-1 flex">
                <YAxis />
                <div className="flex-1 flex flex-col">
                    <CartesianPlain />
                    <XAxis />
                </div>
            </div>
        </main>
    );
};
