import React from "react"
import ReactDOM from "react-dom"

// <p> Hello World </p>
const element = React.createElement('p', null, "Hello World")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)