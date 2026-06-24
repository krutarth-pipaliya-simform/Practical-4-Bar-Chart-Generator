interface BarPropsType {
    height: number;
    label: string;
}
export const Bar = ({ label, height }: BarPropsType) => {
    return (
        <div className="flex flex-col w-20 justify-end relative">
            <div className=" bg-blue-400 w-20 rounded-t-2xl" style={{ height: `${height}%` }}></div>
            <div className="text-center max-w-full truncate absolute top-full left-1/2 -translate-x-1/2">{label}</div>
        </div>
    );
};
