import { BarList } from "./BarList";
import { CreateBar } from "./CreateBar";

export const SideBar = () => {
    return (
        <aside className="flex flex-col gap-4 w-1/5 p-4 overflow-hidden">
            <CreateBar />
            <BarList />
        </aside>
    );
};
