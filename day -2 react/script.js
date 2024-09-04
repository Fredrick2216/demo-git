import React from "react"; // to create elements
import ReactDOM from "react-dom"; // render elements

// JSX == This HTML like syntax
const para = < h1 > Hello < /h1>

// JSX ==> BABEL ==> REACT.CREATE("h1",null,Hello)==> JSobject

console.log(para)

const Heading = () => {
    return <p > Roman Reigns < /p>
}
console.log(Heading)

const Header = () => {
    return ( < div >
        <
        div >
        <
        p > Heading - 1 < /p>  <
        p > Heading - 2 < /p > <
        /div>  <
        /div>
    );
};

const Footer = () => {
    return <p > Footer < /p>;

};
const Body = () => {
    return < >
    <
    Header / > { 5 + 5 } // only expressions , no if-else statements
        <
        Footer / >
        <
        />

}

// create root
const root = ReactDOM.createRoot(document.getElementById("root"))

// what to render
root.render(Header())
root.render( < Header > < /Header>)
        root.render( < Header / > )

        // TWO GOLDEN RULE OF FUNCTION COMPONENT
        // 1. ALWAYS FUNCTION COMPONENT NAME SHOULD START WITH A CAPITAL LETTER
        // 2. ALWAYS IT SHOULD RETURN WITH PIECE OF JSX

        // <div></div> ==> <> </> ==> <React.Fragment></React.Fragment>