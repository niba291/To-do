import { useState }         from "react";
import { List }             from "@components/List";
import { Input }            from "@components/Input";
import { Button }           from "@components/Button";
import { ItemInterface }    from "@interfaces/ItemInterface";

function App() {

    const [list, setList]   = useState(Array<ItemInterface>);
    const [task, setTask]   = useState("");

    // @ts-ignore
    const onInputsetTask    = (event) => {
        setTask(event.target.value);
    };
    
    // @ts-ignore
    const addElement        = (event) => {
        setList([...list, {
            index           : list.length,
            title           : task
        }]);
        setTask("");
    };

    const removeElement     = (index : number) => {
        setList(list.filter((item) => item.index !== index));
    };

    return (
        <main className="p-6 max-w-xl mx-auto font-sans antialiased container">
            <h4 className="font-bold text-4xl text-center my-5">To do</h4>
            <section className="flex justify-center my-10">
                <Input label="Task" onInput={onInputsetTask} value={task}/>
                <Button text="Add" onClick={addElement}/>
            </section>
            <List items={list} title="To do" removeElement={removeElement}/>
        </main>
    );
}

export default App;