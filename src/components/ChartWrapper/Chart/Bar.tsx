interface BarPropsType {
    height: number;
    label: string;
}
export const Bar = ({ label, height }: BarPropsType) => {
    return (
        <div className="flex-1 flex flex-col max-w-20">
            <div className=" bg-blue-400" style={{ height: `${height}%` }}>
                Bar
            </div>
            <div className="relative bottom-0">{label}</div>
        </div>
    );
};
