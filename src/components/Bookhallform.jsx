import { useState , useEffect} from 'react'
import inst from './axios'
  
// import { Link } from "react-router-dom";

function Bookhallform() {
    useEffect( ()=>{
         inst.get('api/options/').then(response=>{setData(response.data)
        console.log(response)})
    },[])
    const [from_date,setName]=useState('')
    const [to_date,setDescription]=useState('')
    const [participants_count,setOcc]=useState('')
    const [hall,setCbd]=useState('')
    const [purpose,setImg]=useState('')
    const [employee_remark,setSrs]=useState([])
    const [data,setData]=useState([])
    
    const handleSubmit= async ()=>{
        console.log("hello")
        const response=  await inst.post( 'booking/',{
        from_date:from_date,
        to_date:to_date,
        participants_count:participants_count,
        hall:hall,
        purpose:purpose,
        employee_remark:employee_remark,
       
        }).catch((err) => console.log(err));
      console.log(response);
    
      // .then((response)=> {
      //   console.log(response)})
      // catch(error) {console.log(error.data)}
    return response
    };
    return (<>
    <div>
    <form className=" flex justify-center bg-gray-900 h-screen">
   
      <div className="justify-center px-7 w-1/2 m-9 h-screen bg-black/90 text-3xl mt-[0px] pt-[55px] rounded-3xl " >    
      <h2 className="text-4xl font-semibold leading-7 flex justify-center text-white pb-9">Add Hall</h2>
        <div className="border-b border-black/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 mb-1 text-white/90">Check In</h2>
          {/* <p className="mb-3 text-sm leading-6 text-gray-600">
            This name will be displayed on all dashboards.
          </p> */}
          <div className=" grid grid-cols-1 gap-x-6 gap-y-9">
            <div className="sm:col-span-4">
              <div className="mt-8 mb-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    onChange={(event)=>setName(event.target.value)}
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="Name"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-semibold leading-7 mb-05 text-white/90">Check Out</h2>
            <div className="sm:col-span-4">
              <div className="">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    name="username"
                    onChange={(event)=>setDescription(event.target.value)}
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
            <h2 className="text-3xl font-semibold leading-7  pt-7 text-white/90">Purpose</h2>
              <div className="mt-5">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-9">
                  <input
                    type="text"
                    onChange={(event)=>setImg(event.target.value)}
                    autoComplete="Description"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="Description" 
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
            <h2 className="text-3xl font-semibold leading-7  pt-7 text-white/90">Employee Remark</h2>
              <div className="mt-6">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-9">
                  <input
                    type="text"
                    onChange={(event)=>setSrs(event.target.value)}
                    autoComplete="Description"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="Description" 
                  />
                </div>
              </div>
            </div>

           

           
          </div>
        </div>

        <div className="col-span-full">
          <h2 className="text-3xl font-semibold leading-7 pt-0.5 text-white/90">Participants</h2>
            <div className="mt-4 pb-6">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    onChange={(event)=>setOcc(event.target.value)}
                    autoComplete="Eligible occupancy"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="Eligible occupancy" 
                  />
                </div>
              </div>
        </div>

        <div className="col-span-full">
          <h2 className="text-3xl font-semibold leading-7 pt-9 text-white/90">Hall</h2>
          <div className="mt-4">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <input
                    type="number"
                    autoComplete="Continuous Booking Days"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="Continuous booking days" 
                  /> */}
                  <select  onChange={(event)=>setCbd(event.target.value)}>
                    {data.map((item) => {
                   return (<option value={item.id} className=' rounded-md bg-black py-4 px-6 hover:text-indigo-600 font-weight:100 font- Monaco '>{item.name}</option>)
                  })}
                  </select>
                </div>
              </div>
        </div>

      <div className=" flex items-center justify-end gap-x-6 pt-0.5">
      
        <button
         onClick={handleSubmit} 
          type="button"
          className="rounded-md bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
      </div>
    </form></div>
    </>

    )
}
export default Bookhallform;