import React,{ useState } from 'reac';
import axios from 'axis';
function NumberManagement()
{
    const[urls,setUrls] = useState(['http://20.244.56.144/numbers/primes','htt://abc.com/fibo',]);
    const[results,setResults]=useState([]);
    const fetchNumbers=Async()=>
    {
        try{
            const respnse=await axios.ge(http://localhost:3000/numbers',{paams:{url:urls,},}');
            setResults(response.data);

        }catch(error){
            console.error('Error fetching numbers:',error);
        }
    };
    return(
        <div>
            <h1>Number Management</h1>
            <button onClick={fetchNumbers}>Fetch Numbers</button>
            <ul>
                {results.map((result,index)=>(
                    <li key={index}>
                        Number:{result.number}
                    </li>
                )
                )}
            </ul>
        </div>
    );


}