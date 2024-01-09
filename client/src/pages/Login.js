import React from "react";
import Header from "../components/Header";
export default function Login(){
    return(
        <div>
            <Header />
            <form method="post" action="login" className="adminForm">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"></input>
                
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"></input> <br/>
                <input type="submit"></input>
            </form>
        </div>
    )
}