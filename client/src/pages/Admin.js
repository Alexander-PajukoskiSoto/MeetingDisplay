import React from "react";
import Header from "../components/Header";

export default function Admin(){
    return(
        <div>
            <Header />
            <form action="/createTime" method="post" className="adminForm">
                <label htmlFor='startDate'>Start-date</label>
                <input type="date" name="startDate" id="startDate"></input> <br/><br/>

                <label htmlFor='endDate'>End-date</label>
                <input type="date" name="endDate" id="endDate"></input> <br/><br/>

                <label htmlFor='participants'>Participants</label>
                <input type="text" name="participants" id="participants" placeholder="participants"></input> <br/><br/>

                <label htmlFor='description'>Description</label>
                <input type="text" name="description" id="description" placeholder="description"></input> <br/><br/>

                <input type="submit"></input>
            </form>
        </div>
    )
}