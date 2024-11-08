import { Trash }            from "@svg/Trash";

export const Item = (props: any) => {
    return (
        <label
            className="rounded flex cursor-pointer border text-gray-900 border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-neutral-950 has-[:checked]:text-slate-300 has-[:checked]:line-through"
        >
            <input type="checkbox" className="hidden" id={`cbx${props.index}`}/>
            <div className="w-full">
                <strong className="font-medium">{props.title ?? "-"}</strong>
            </div>
            <div className="w-5">
                <button className="p-1 text-red-500" onClick={() => {
                    props.removeElement(props.index);
                }}>
                    <Trash/>
                </button>
            </div>
        </label>
    );
};