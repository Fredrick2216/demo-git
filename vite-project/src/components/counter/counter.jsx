const Counter=()=>{

    const AppLayout = () => {

        let count=0;
    
        // local state variable
    
        let[counts,setCounts]=useState(5)
    return (
        <>
        <p>{count}</p>

<button onClick={()=>{
   setCounts=(counts+1);
   console.log("Val(+)",count)
   }} className="bg-green-500 p-5 m-5">
       {" "}
       +
   </button>
   <button onClick={()=>{
       setCounts=(counts-1);
   console.log("Val(-)",count)
   }} className="bg-green-500 p-5 m-5">
       {" "}
       -
   </button>
        </>
    )

    }
};

export default Counter