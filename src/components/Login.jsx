import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Circle from "./Circle.jsx"
import axios from 'axios'

export default function Login() {
  const [username,setUsername]=useState('')
  // let name2='abc'
  const navigate = useNavigate()
  // const arr=useState('')
  // const username=arr[0]
  // const setUsername=arr[1]
      const [password,setPassword]=useState('')
      // const andleSubmit = () => {
      //  name2={username}
      // }
      const handleSubmit = (event) => {
      event.preventDefault()
      console.log(username,password)
      const data={
        username,password
      }
      axios.post( 'http://10.21.80.151:8000/account/api/login_token/', {
        username: username,
        password: password
      })
      .then((response)=> {
        const accesstoken = response.data.access
        const refreshToken = response.data.refresh
        localStorage.setItem("accessToken", accesstoken)
        localStorage.setItem("refreshToken", refreshToken)
        navigate('homepage')
        console.log(response)})
      .catch((error) => {console.log(error.data)})
      }
      // const gotoNavigate = () => {
      //   navigate('ao')
      // }
      // const client = axios.create({
      //   baseURL: 'http://10.21.80.69:8000/account/api/login_token/',
      //   headers: {'Request-Origin': 'http://10.21.80.69:8000/'}
      // })

    
    //   const onSubmit = data => {
    //   axios
    //      .request({
    //        method: 'POST',
    //         url: 'http://10.21.80.69:8000/account/api/login_token/',
    //          data: JSON.stringify(data),
    //           // headers: { 
    //           // 'Access-Control-Allow-Origin': true,
    //           // // 'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    //           // // 'access-control-allow-method':'DELETE, GET, OPTIONS, PATCH, POST, PUT',
    //           // // 'Access-Control-Allow-Headers':'accept, authorization, content-type, user-agent, x-csrftoken, x-requested-with',
    //           // 'Access-Control-Allow-Credentials': true,
    //           // 'Content-Type': 'application/json' ,
              
           
    //   })
    //      .then(response => {console.log(response.data)})
    //      .catch(error => {console.log(error.data)});
    //  };
    //   const onErrors = errors => console.error(errors);

    return(
        <>
         <div className="bg-black grid h-screen grid-cols-2">
        <div className="mr-30">
          <Circle />
        </div>
        <div className="bg-black flex min-h-full flex-col justify-center px-6 py-0 pb-0.5 lg:px-8">
          <div className="mr-60 mb-20">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-6 pt-6 ">
              <div className="mb-8">
                <img
                  className="mx-auto h-23 w-auto pr-5.5"
                  src="https://cdn.vectorstock.com/i/preview-1x/88/78/hbm-logo-letter-design-vector-42598878.jpg"
                  alt="HBM"
                />
              </div>
              <h2 className="mb-1.5 text-4xl font-bold text-center text-indigo-600 leading-10 tracking-wider pr-5.5">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm pr-5.5">
              <form className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-left text-white tracking-wider leading-10">
                    Enter Username
                  </h3>
                  <div className="mt-3">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={(event)=>setUsername(event.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></input>
                  </div>
                  {/* <input className="text-2xl font-bold text-center" placeholder="Email"type="email"></input> */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-left text-white tracking-wider leading-10">
                    Enter Password
                  </h3>
                  <div className="mt-3"> 
                    <input
                      id="password"
                      name="password" 
                      type="password"
                      // value={password}
                      onChange={(event) => {
                        setPassword(event.target.value)}}
                      required
                      className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></input>
                  </div>
                </div>
                <div className="py-10">
                  <button  onClick={handleSubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}


