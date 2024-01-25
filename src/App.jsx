import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [LenghtPass,setLenghtPass]=useState(8)
  const [layerChar,setLayerChar]=useState(false)
  const [layerNum,setLayerNum]=useState(false)

  const [password,setPassword] = useState("")

  console.log("Rendered")
  useEffect(()=>{
    GeneratePassword(layerNum,layerChar)
  },[layerNum,layerChar,LenghtPass])

  const GeneratePassword = useCallback((layerNum,LayerChar)=>{
    console.log("running")
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnm"
    if (layerNum) str+="1234567890"
    if (LayerChar)str+="!@#$%^&*(){}><?~`/*-"
    for (let i=1; i <= LenghtPass; i++) {
      pass+= str.charAt((Math.random()*str.length+1))
    } 
    setPassword(pass)
  },[layerChar,layerNum,LenghtPass])

  return (
    <>
      <div className="m-8 rounded p-5 bg-slate-400">
        <label className='flex align-middle justify-center '>
          <input type="text" className='w-full rounded-xl hover:bg-slate-100 focus:outline-red-100 px-3' readOnly value={password}/>
          <button className='text-lg ml-4 bg- px-5 py-3 rounded-lg bg-blue-700 text-white' onClick={()=>setLayerNum((prev)=>false)}>Copy</button>
        </label>
      </div>
      <div className="input-group space-x-5">
        <label className='text-white'>Lenght:{LenghtPass}</label>
        <input type="range" min={6} max={100} defaultValue={LenghtPass} onChange={(e)=>setLenghtPass(e.target.value)}/>
        <label htmlFor="Numbers" className="text-white">Numbers</label>
        <input type="checkbox" name="Numbers" onChange={()=>setLayerNum((prev)=>!prev)} />
        <label htmlFor="Characters" className="text-white" >Characters</label>
        <input type="checkbox" name="Characters" onChange={()=>setLayerChar((prev)=>!prev)} />
      </div>
    </>
  )
}

export default App
