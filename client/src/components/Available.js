
import {React, useState, useEffect} from 'react';


// Gets the current date and makes a string out of it
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${year}-${month.toString().length > 1 ? `${month}` : `0${month}`}-${date}T${hours.toString().length > 1 ? `${hours}` : `0${hours}`}:${minutes.toString().length > 1 ? `${minutes}` : `0${minutes}`}`;
  }
export default function Available(){
    const [data, setData] = useState([]);
    const [dateNow] = useState(getDate());

    useEffect(() => {
        fetch("/api")//meeting data
          .then((res) => res.json())
          .then((data) => setData(data))
      }, []);
      
    return(
        <div className='availableDiv'>
            {data.map((element, index) => (
                <div className={`available ${data[index].reserved === 'true' ? 'red' : 'green'} ${dateNow >= data[index].startDate.toString() && dateNow <= data[index].endDate.toString() ? 'shown' : 'hidden'}`} key={index} onClick={()=>{
                }}>
                    <h4>
                        {`${dateNow} to 
                        ${element.endDate} Meeting:
                        ${element.title}`}
                    </h4>
                </div>
            ))}
        </div>
    )
}