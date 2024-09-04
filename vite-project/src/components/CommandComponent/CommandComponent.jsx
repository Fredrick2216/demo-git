const CommandComponent = () => {

    const [name, setName] = usestate({ name: "" });
    const [message, setMessage] = usestate({ message: "" });
    const [dummy, setDummy] = usestate({});
    const [data, setData] = usestate();
    return ( <
        >
        <
        p > JSX < /p> <
        input className = "border-[2px] border-solid border-red-500 bg-yellow-500"
        type = "search"
        onChange = {
            (e) => {
                // setData({names: e.target.value});
                setDummy((prev) => ({...prev, name: e.target.value })); //callback function
                console.log(e.target.value);
            }
        }
        /> <
        input className = "border-[2px] border-solid border-red-500 bg-yellow-500"
        type = "search"
        onChange = {
            (e) => {
                // setMessage({message: e.target.value});
                setDummy((prev) => ({...prev, message: e.target.value }));
                console.log(e.target.value);
            }
        }
        /> <
        button className = "bg-red-500"
        onClick = {
            () => {
                setData([{...name, ...message }]) // array
                    //setData({...name,...message}); //object
            }
        } > SUBMIT < /button>

        { /* {JSON.stringify(data)} */ } { JSON.stringify(dummy) }

        {
            data.map((e) => {
                return ( <
                    >
                    <
                    p > { e.name } < /p> <
                    p > { e.message } < /p>

                    <
                    />
                );
            })
        } <
        />

    )
}

export default CommandComponent