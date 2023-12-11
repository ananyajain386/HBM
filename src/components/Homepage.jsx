import inst from './axios'
// import Navbar from './Navbar'
import Page from './Page'
import { useState , useEffect} from 'react'
import { Link } from "react-router-dom"
import Center from './Center'
function Homepage() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     inst.get('home/').then(res=>setData(res.Data))
    // },[])
    // console.log(resp)
    // const resp=inst.get('home/')
    //  a=resp.data
    // console.log(a)
    const [data,setData]=useState([])
    useEffect(()=>{
        inst.get('api/home/').then(response=>{setData(response.data)
        console.log(response)})
    },[])
    const logout =()=>
    {
    const response=  inst.post('http://10.21.80.151:8000/account/api/logout/'
            ).catch((err) => console.log(err));
              console.log(response);
          
            // .then((response)=> {
            //   console.log(response)})
            // catch(error) {console.log(error.data)}
          return response
    }
    // console.log(resp)
    return (  
        <>
        <div className="bg-black w-full h-18 justify-around items-center text-white">
        <div className='md:flex'>
        <ul className='md:flex justify-items-start ps-9 px-3 py-2 w-screen '>
        {data.map((item) => {
            return (<button><li className='py-3 px-6 hover:text-indigo-600 text-2xl font-weight:100 font- Monaco '><Link to={item.route}>{item.field}</Link></li></button>)
        })}
        {/* <li className='p-5'>Home</li> */}
        {/* <li className='p-5'>Company</li>
        <li className='p-5'>Resources</li> */}
        </ul>
        <div className='flex items-center justify-end pe-20 pt-3 w-full'>
        <button className='rounded-md bg-indigo-600 px-5 py-2  text-3xlfont-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 hover:text-black'onClick={logout}>Logout</button>
        </div>
        </div>
        </div>
        <Center/>
        </>
    );
}


export default Homepage;