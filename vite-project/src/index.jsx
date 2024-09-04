//import React {useEffect, useState} from "react";
import ReactDOM from "react-dom/client"; // Ensure this import is correct
import "./style.css"; // Ensure this path is correct

// import{v4 as uuidv4} from 'uuid';

 
// import productData from "./api/DummyData";
// import {productData2} from "./api/DummyData";

// import Cap from "../src/components/CommandComponent/CommandComponent";
 
// import CommandComponent from "../src/components/CommandComponent/CommandComponent";

import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderComponents from "./components/Headercomponents/Headercomponents";
import FooterComponents from "./components/Footercomponents/Footercomponents";
import Contactform from "./components/contactform/contactform";
import Card from "./components/Card/Card";
import {lazy, Suspense} from "react";
import Errorpage from "./components/ErrorPage/ErrorPage";
import body from "./components/body/body";
//import counter from "./components/counter/counter";

// const Card = lazy(()=>import("./components/Card/Card"));
// const Contactform = lazy(()=> import("./components/contactform/contactform"));
// const Help = lazy(()=> import("./components/Help/Help"));
// const Productimages = lazy(()=> import("./components/Productimages/Productimages"));




//     const [count, setCount] = useState(1);

//     useEffect = (() => {
//         // console.log("hello")
//         // setCount(count+1); // react calling by SETTER function
//         // console.log(count)

//         document.title = "react day-7"
//     }, []);

    // API Call using fetch() in 5min

//     return (
//          <>
//         <CommandComponent />
//         <Cap />


//         { /* <Counter/> */ } 
//         </>
//     )
// }













{
    /* <Headercomponent/>
        {productData.map((items)=>{
                return (
                <>
                    <Card key={uuidv4()} title={items.title} imageSrc={items.imageSrc} /> 
               </>
               );
                  
                
             })} */
}

const AppLayout = () => {

    return(

        <>
        <HeaderComponents/>
         {
            // if(path == "/offer") <Card/>
               <Outlet/>

            // if(path=="/help") <p>Help page</p>
         }



        <FooterComponents/>
        
        </>
    );

};

const Router = createBrowserRouter([

    {
        path:'/',
        element: <AppLayout/>,
        children: [
            {
                path:"/body",
                element:(<Suspense fallback={"loading..."}> 
                    <body/>
                </Suspense>),
            },

            // {
            //     path: "/Contact",
            //   element:(<Suspense  fallback={"loading..."}>
            //     <Contactform/>
            //   </Suspense> ),
              
            // },

            // {
            //     path: "/offer",
            //     element: (<Suspense  fallback={"loading..."}>
            //         <Card/>
            //       </Suspense> ),
                
            // },
        
            // {
            //     path: "/help",
            //     element: (<Suspense  fallback={"loading..."}><p>Help page</p></Suspense>),
                
            // },
            // {
            //     path: "/images",
            //     element: (<Suspense  fallback={"loading..."}><Productimages/></Suspense>),
                
            // }
        ],
        errorElement:<ErrorPage/>,
    },
    
]);











// Render the root element
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure this ID matches your HTML
// root.render( < AppLayout /> );
root.render(<RouterProvider router= {Router}/>);