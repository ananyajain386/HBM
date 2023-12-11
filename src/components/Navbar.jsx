function Navbar() {
    const [data,setData]=useState([])
    useEffect(()=>{
        inst.get('home/').then(response=>{setData(response.Data)
        console.log(response)})
    },[])
    console.log(resp)
    return ( 
        <div className="bg-black w-full h-15 justify-around items-center text-white text-xl ">
        <div className='md:flex text-xl '>
        <ul className='md:flex justify-around ps-9 text-xl '>
        {data.map((item) => {
            return (<li className='p-5'>{item.field}</li>)
        })}
        {/* <li className='p-5'>Home</li> */}
        {/* <li className='p-5'>Company</li>
        <li className='p-5'>Resources</li> */}
        </ul>
        <div className='flex items-center justify-end pe-20 pt-3 w-full'>
        <button className='rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white '>Logout</button>
        </div>
        </div>
        </div>
        
     );
}

export default Navbar;