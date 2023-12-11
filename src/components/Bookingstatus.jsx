import { useState , useEffect} from 'react'
import { Table } from '@mui/material';
import axios from 'axios';
import inst from './axios'

function Bookingstatus(){
    const [data,setData]=useState([])
    useEffect(()=>{
        inst.get('api/booking/').then(response=>{setData(response.data)
        console.log(response)})
    },[])
    const a=0;
    // a=a+1;

//     const handleSubmit1=(item)=>{
//       console.log(item)
//       const response=  inst.put(`hod/${item.id}/`,{hod_remark:`${item.remark}`,
//       hod_approval_status	: '1'
//     }).catch((err) => console.log(err));
//       console.log(response);
  
//     // .then((response)=> {
//     //   console.log(response)})
//     // catch(error) {console.log(error.data)}
//   return response
//   };
//   const handleSubmit2=(item)=>{
//     console.log("hello2")
   
//     const response=   inst.put(`hod/${item.id}/`,{hod_remark:`${item.remark}`,
//     hod_approval_status	: '0'
//   }).catch((err) => console.log(err));
//   console.log(response);

//   // .then((response)=> {
//   //   console.log(response)})
//   // catch(error) {console.log(error.data)}
// return response
// };
    
    return ( <>
     <div className="flex flex-col text-white ">
        {/* overflow-x-auto */}
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          {/* <div className="overflow-x-auto"> */}
            <table className="min-w-full text-left font-light">
              <thead className="border-b font-medium dark:border-neutral-500 text-2xl">
                <tr>
                  {/* <th scope="col" className="px-6 py-4"></th> */}
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Department</th>
                  <th scope="col" className="px-6 py-4">Check In</th>
                  <th scope="col" className="px-6 py-4">Check Out</th>
                  <th scope="col" className="px-6 py-4">Participants</th>
                  <th scope="col" className="px-6 py-4">Hall</th>
                  <th scope="col" className="px-6 py-4">Purpose</th>
                  {/* <th scope="col" className="px-6 py-4">Purpose</th> */}
                  <th scope="col" className="px-6 py-4">Employee Remark</th>
                  <th scope="col" className="px-6 py-4">Booked</th>
                  {/* <th scope="col" className="px-6 py-4">Submit Date</th> */}
                  {/* <th scope="col" className="px-6 py-4"></th> */}
                  {/* <th scope="col" className="px-6 py-4"></th> */}
                </tr>
              </thead>
              <tbody>
              {data.map((item) => {;
              return (
                <tr className="border-b dark:border-neutral-500">
                  {/* <td className=" px-6 py-4 font-medium text-xl">{a}</td> */}
                  {/* whitespace-nowrap */}
                  <td className=" px-6 py-4">{item.employee}</td>
                  <td className=" px-6 py-4">{item.employee_details}</td>
                  <td className=" px-6 py-4">{item.from_date}</td>
                  <td className=" px-6 py-4">{item.to_date}</td>
                  <td className=" px-6 py-4">{item.participants_count}</td>
                  <td className=" px-6 py-4">{item.hall}</td>
                  <td className=" px-6 py-4">{item.purpose}</td>
                  <td className=" px-6 py-4">{item.employee_remark}</td>
                  <td className=" px-6 py-4">{JSON.stringify(item.ao_approval_status)}</td>
                  {/* <td className=" px-6 py-4">{item.submit_date}</td> */}
                  {/* <td className=" px-6 py-4"><button className='rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white' onClick={()=>handleSubmit1(item)} type="button">Accept</button></td> */}
                  {/* <td className=" px-6 py-4"><button className='rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white' onClick={()=>handleSubmit2(item)
                  } type="button">Reject</button></td> */}
                </tr>
                )
            })}
              </tbody>
            </table>
          {/* </div> */}
        </div>
      </div>
    </div>
    </> ) 
}

export default Bookingstatus;