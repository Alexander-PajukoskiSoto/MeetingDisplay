import React from "react";
import Header from "../components/Header";

export default function Admin(){
    return(
        <div>
            <Header />
            <form action="/createTime" method="post" className="adminForm">
                <label htmlFor='startDate'>Start-date</label>
                <input type="datetime-local" name="startDate" id="startDate" required></input> <br/><br/>

                <label htmlFor='endDate'>End-date</label>
                <input type="datetime-local" name="endDate" id="endDate" required></input> <br/><br/>

                <label htmlFor='participants'>Participants</label>
                <input type="text" name="participants" id="participants" placeholder="participants"></input> <br/><br/>

                <label htmlFor='title'>Title</label>
                <input type="text" name="title" id="title" placeholder="title"></input> <br/><br/>


                <label htmlFor='description'>Description</label>
                <input type="text" name="description" id="description" placeholder="description"></input>

                <div>
                    <label htmlFor="reserved" id="reservedLable">reserved time?</label>
                    <input type="checkbox" htmlFor='description' name="reserved" id="reserved"></input>
                </div>

                <input type="submit"></input>
            </form>
        </div>
    )
}