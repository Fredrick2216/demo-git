// "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
// if this integrity matches this key with  production server key, then it is installed in both local and server.
//packet.json helps in locking application version or package version. 
//dependencies- install in server
//devDependencies: only for development
// (^)==> caret sign- minor updates which shows as default unlike tilden sign which is major update which results in breaking the code by updating majorly. so it sets as a manual change by us in required condition
// package-lock.json - version lock , local == production

//index1.js 
//import React from "react";
//import ReactDOM from "react-dom";

//const App = () => (
//<div id="1">
// <div id="2">
//  <h1 className="heading">Heading</h1>
// <h1 className="heading">Heading</h1>
// </div>
// </div>
//);

// ReactDOM.render(<App />, document.getElementById("root"));




/**import React from "react"; // to create elements
import ReactDOM from "react-dom"; // render elements

// JSX == This HTML like syntax
const para = < h1 > Hello < /h1>

// JSX ==> BABEL ==> REACT.CREATE("h1",null,Hello)==> JSobject

console.log(para)

const Heading = () => {
    return <p > Roman Reigns </p>
}
console.log(Heading)

const Header = () => {
    return ( <div>
        <div >
        < p > Heading - 1 </p> 
        <p>Heading-2</p >
        </div> 
        </div>
    );
};

const Footer = () => {
    return <p > Footer < /p>;

};
const Body = () => {
    return 
         <>
        <Header / >
         { 5 + 5 } // only expressions , no if-else statements
        <Footer / >
        </>
 
}

// create root
const root = ReactDOM.createRoot(document.getElementById("root"))

// what to render
root.render(Header())
root.render( < Header > </Header>)
        root.render( < Header / > )

        // TWO GOLDEN RULE OF FUNCTION COMPONENT
        // 1. ALWAYS FUNCTION COMPONENT NAME SHOULD START WITH A CAPITAL LETTER
        // 2. ALWAYS IT SHOULD RETURN WITH PIECE OF JSX

        // <div></div> ==> <> </> ==> <React.Fragment></React.Fragment>**/