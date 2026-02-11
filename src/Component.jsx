import React,{ useState} from 'react';
function Component(){
    const [foods,setfood]=useState(["apple","orange","lichi"]);
    function handleaddfood(){
        const newfood=document.getElementById("foodinput").value;
        document.getElementById("foodinput").value="";
        setfood([...foods,newfood]);
    }
    function handleremovefood(index){
        setfood(foods.filter((_,i) => i!==index));
    }

    return (
       <div>
        <h2>List of FOOd</h2>
        <ul>
            {foods.map((food,index)=>
                 <li key={index} onClick={()=>handleremovefood(index)}>
                    {food}</li>)}
        </ul>
        <input type="text" id="foodinput" placeholder="Enter food name"/>
        <button onClick={handleaddfood}>Add food</button>
       </div>
    )
}
export default Component;