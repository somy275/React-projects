import React from "react"
import { useState } from "react"
import { RiCloseLine } from "@remixicon/react";
function App() {
  const [maintask, setmaintask] = useState([]);
  const [task, settask] = useState("");
  const [description, setdescription] = useState("");
  const [tasks, settasks] = useState("");
  const [descriptions, setdescriptions] = useState("");
  const [value, setvalue] = useState(0);
const submithandler=(e)=>{
e.preventDefault();
if(task.length!=""){
  setmaintask([...maintask,{task,description}]);
  settask("");
  setdescription("");
  settasks("");
setdescriptions("");
}

if(maintask.length >=0 && task!=""){
settasks("Tasks");
setdescriptions("Descriptions");
setvalue(value+1)
}
}

const delethandler = (i)=>{
  let copytask=[...maintask];
  copytask.splice(i,1);
  setmaintask(copytask);
  setvalue(value-1)
  console.log(i,value)
  if(value==1 ){
    setdescriptions("");
    settasks("");  
    }
}

let rendertask;
if(maintask.length > 0){
  rendertask=maintask.map((t,i)=>{
    return<>
    <li key={i} className="flex flex-col w-[100%] justify-between px-[1em] overflow-hidden">
      <div className="flex flex-row justify-between">
    <h5 className="lg:text-[calc(14px+0.205vw)]"><span className="relative right-[0.7em]">{i+1}.</span>{t.task}</h5>
    <h6 className="flex w-fit lg:text-[calc(14px+0.2vw)] relative">{t.description}
    <button  onClick={()=>{
      delethandler(i);
      }}><RiCloseLine className="cursor-pointer relative left-[0.8em]  h-[1.3em] w-fit"/>
    </button>
    </h6>
    </div>
    <div className="bg-black py-[0.01em] mb-[1.5em] "></div>
    </li>
    </>
  })
  
}
else{
  rendertask=<h2 className="text-center font-bold translate-y-[-50%] text-lg lg:text-[calc(16px+0.2vw)]">No tasks available</h2>
  // 
  
}

  return (
    <>
        <h1 className="bg-black p-3 text-[white] text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[calc(35px+0.11vw)]">Todo list</h1>
      <form className="flex flex-col gap-[2em] min-[450px]:gap-[2.5em] md:gap-[4em] px-[2em]  mt-[3em] items-center" onSubmit={submithandler}>
        <div className="flex flex-col gap-[2em] min-[450px]:gap-[2.5em] w-[100%] md:flex-row md:justify-around">
        <input type="text" className="border-[2px] border-[black] rounded w-[100%] outline-none pl-[1em] py-[0.25em] sm:py-[0.35em] md:py-[calc(0.334em+0.1vw)] max-w-[360px]" placeholder="Enter your task" value={task}
        onChange={(e)=>settask(e.target.value)} title="Enter your Task" required autoFocus autoCorrect="on">
        </input>
        <input type="text" className="border-[2px] border-[black] rounded outline-none w-[100%] pl-[1em] py-[0.25em] sm:py-[0.35em] md:py-[calc(0.334em+0.1vw)] max-w-[360px]" placeholder="Enter your Description" value={description}
        onChange={(e)=>setdescription(e.target.value)} title="Enter your Description"></input>
        </div>
        <button className="bg-[black] text-[white] w-[4.5em] py-[0.25em] sm:py-[0.35em] sm:w-[5em] text-sm min-[450px]:text-base lg:text-[calc(14px+0.175vw)]  rounded font-bold">Add task</button>

      </form>
      <div className="bg-[#d6d2d2] py-[0.2em] mt-[2.5em] lg:mt-[4em]">
        <div className="w-[100%] flex justify-between flex-row mb-[1em] mt-[0.6em]">
        <h5 className="font-bold text-md sm:text-lg px-[1.5em] lg:text-[calc(16px+0.2vw)]">{tasks}</h5>
        <h5 className="font-bold text-md sm:text-lg px-[1.5em] lg:text-[calc(16px+0.2vw)]">{descriptions}</h5>

        </div>
        <ul >
          {rendertask}
        </ul>
      </div>
    </>
  )
}

export default App
