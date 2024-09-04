import {useRouterError} from "react-router-dom"

const ErrorPage =() =>{
    const error = useRouterError();
    
    return (
        <div>
            <p>Error page</p>
            <p> {error.status} </p>
            <p> {error.statusText}</p>
        </div>
    )
}
export default ErrorPage