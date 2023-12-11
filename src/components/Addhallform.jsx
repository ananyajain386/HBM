import { useState , useEffect} from 'react'
import inst from './axios'
import axios from 'axios'


function Addhallform() {
  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const [occ,setOcc]=useState('')
  const [cbd,setCbd]=useState('')
  // const [img,setImg]=useState(null)

  const handleChange = async (event) => {
    // setImg(URL.createObjectURL(event.target.files[0]));
    console.log('hkl')
    const file = event.target.files[0];
    const formData =  new FormData();
    formData.append("file", file); 
}
  
  const handleSubmit= async ()=>{
    console.log("hello")
    // const file = event.target.files[0];
    // const formData =  new FormData();
    // formData.append("file", file); 
   
    const response=  await inst.post( 'api/add/',{
      // headers:{
      // "Content-Type": "multipart/form-data",
      // },
    },
    {
    name:name,
    description:description,
    eligible_occupancy:occ,
    booking_days_limit:cbd,
    // uploaded_images:formData
    }).catch((err) => console.log(err));
  console.log(response);

  // .then((response)=> {
  //   console.log(response)})
  // catch(error) {console.log(error.data)}
return response
};
 // uploaded_images:{img}
  return ( <>
  <div>
  <form className=" flex justify-center bg-black h-screen">
   
    <div className="justify-center px-7 w-1/2 m-9 h-[1100px] bg-gray-800/30 bg-blend-lighten  text-3xl mt-[60px] pt-[50px] rounded-3xl " >    
    <h2 className="text-4xl font-semibold leading-7 flex justify-center text-white pb-9">Add Hall</h2>
      <div className="border-b border-black/10 pb-12">
        <h2 className="text-3xl font-semibold leading-7 mb-1 text-white/80">Name</h2>
        <p className="mb-3 text-sm leading-6 text-gray-600">
          This name will be displayed on all dashboards.
        </p>
        <div className=" grid grid-cols-1 gap-x-6 gap-y-9">
          <div className="sm:col-span-4">
            <div className="mt-0.5">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  required
                  onChange={(event)=>setName(event.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  // placeholder="Name"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
          <h2 className="text-3xl font-semibold leading-7  pt-7 text-white/80">Description</h2>
            <div className="mt-4">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-9">
                <input
                   onChange={(event)=>setDescription(event.target.value)}
                  required
                  type="text"
                  autoComplete="Description"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  // placeholder="Description" 
                />
              </div>
            </div>
          </div>

         

          <div className="col-span-full">
          <h2 className="text-3xl font-semibold leading-7  pt-7 text-white/80">Add photo</h2>
            <div className="mt-4 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-gray-800 w-[100px] font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input 
                     onChange={handleChange}
                    id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">Only JPG up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <h2 className="text-3xl font-semibold leading-7 pt-7 text-white/80">Eligible occupancy</h2>
          <div className="mt-6 pb-9">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  onChange={(event)=>setOcc(event.target.value)}
                  required
                  type="text"
                  autoComplete="Eligible occupancy"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  // placeholder="Eligible occupancy" 
                />
              </div>
            </div>
      </div>

      <div className="col-span-full">
        <h2 className="text-3xl font-semibold leading-7 pt-9 text-white/80">Continuous Booking Days</h2>
        <div className="mt-7 pb-9">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  onChange={(event)=>setCbd(event.target.value)}
                  type="text"
                  required
                  autoComplete="Continuous Booking Days"
                  className="block flex-1 border-0 bg-transparent py-1 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  // placeholder="Continuous booking days" 
                />
              </div>
            </div>
      </div>

    <div className=" flex items-center justify-end gap-x-6 pt-0.5 mx-9">
    
      <button
         onClick={handleSubmit} 
        type="button"
        className="rounded-md bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
    </div>
  </form></div>
      </> )
}

export default Addhallform;
