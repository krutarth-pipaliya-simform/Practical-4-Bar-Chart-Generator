import { CartesianPlain } from "./CartesianPlain";

import { YAxis } from "./YAxis";

export const Chart = () => {
    return (
        <main className="flex-1 flex flex-col p-4 overflow-hidden">
            <div className="flex-1 flex">
                <YAxis />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <CartesianPlain />
                </div>
            </div>
        </main>
    );
};
