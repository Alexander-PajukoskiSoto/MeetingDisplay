import React,{ useEffect} from "react";

export default function Meeting(){
    const [data, setData] = React.useState([]);
    const [startDate, setStartDate] = React.useState([]);
    const [endDate, setEndDate] = React.useState([]);

useEffect(() => {
  fetch("/api")//meeting data
    .then((res) => res.json())
    .then((data) => setData(data))
}, []);

    console.log(data)
    return(
        <div>
            <h1 className="availableMeetings">Available meetings</h1>
            <div className="timeChoiceDiv">
                {data.map((element, index) => (
                <div className={`timeChoices ${data[index].reserved === 'true' ? 'hidden' : 'shown'}`} key={index} onClick={()=>{
                    setStartDate(data[index].startDate)
                    setEndDate(data[index].endDate)
                }}>
                    <h4>
                        {`${element.startDate} 
                        ${element.endDate}`}
                    </h4><br/>
                    <h4 className="chooseTitle">
                        {element.title}
                    </h4>
                    <div className={` descriptionDiv`}>{element.content}</div>  
                </div>
            ))}
            </div>
        <form action='/reserve' method="post" className="adminForm">
            <label htmlFor="startDate">Please click on a time that fits you</label>
            <input type="text" name="startDate" id="startDate"value={startDate} placeholder="start-time" readOnly />
            <input type="text" name="endDate" id="endDate"value={endDate} placeholder="end-time" readOnly />

            <label htmlFor="participants">participants</label>
            <input type="text" name="participants" id="participants" placeholder="participants"/>

            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title" placeholder="title"/>

            <label htmlFor="content">description</label>
            <input type="text" name="content" id="content" placeholder="description"/>

           
            <input type="submit" value='Choose time' />
        </form>
        </div>
    )
}