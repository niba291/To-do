import { Item }             from "@components/Item";

export const List = (props: any) => {
    return (
        <fieldset>
            <legend className="sr-only">{props.title}</legend>
            <div className="space-y-2"> 
                {props.items.map((item : any, index : any) => (
                    <Item key={index} index={item.index} title={item.title} removeElement={props.removeElement}/>
                ))}
            </div>
        </fieldset>
    );
};