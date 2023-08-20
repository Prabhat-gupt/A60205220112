import React, { useEffect, useState } from 'react'
import axios from 'axios';
function ApiFetch() {

    const url = "http://20.244.56.144:80/train/trains";

    const [data,setData] = useState([]);


    const fetchData = async ()=>{
        return await axios.get(url).then((res) => setData(res.data));
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const payload = {
        "companyName": "Train Central",
        "ownerName" : "Ram",
        "rollNo": "A60205220112",
        "ownerEmail" : "ram@abc.edu",
        "accessCode": "oJnNPG",
    }

    const url1 = "http://20.244.56.144/train/register";

    const getData = async (payload,url1) =>{
        return await axios.post(url1,payload).then((res) => setData(res.data));
    };

    getData(payload,url1);

    
 

  return (
    <div>

        <h1>API Fetch</h1>

        {
            data.map((dataobj,i)=>{
                return(
                    <p>{dataobj.title}</p>
                );
            })
        }

    </div>
  )
}

export default ApiFetch
