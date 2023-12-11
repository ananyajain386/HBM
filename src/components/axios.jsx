import axios from "axios"; 

const inst = axios.create({
  baseURL : 'http://10.21.80.151:8000/',
});

// https://4312-103-77-186-10.ngrok-free.app/
inst.interceptors.request.use(
  (request) => {
  console.log("intereptor check")
    const token =  localStorage.getItem('accessToken')
    // const auth = token ? `Bearer ${token}` : '';
    request.headers['Authorization'] = `Bearer ${token}`;
    console.log(request)
    return request;
  }
);

inst.interceptors.response.use((response) => response,
async (error) => {//extracting response and config objects
  const { response, config } = error;
  console.log('after1')
  if (response.status === 401) {
    console.log('after2')
    let refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      try {
        const data = async 
        inst.post("/account/api/token/refresh/", 
        {refresh: refreshToken});
        let accessToken = data.accessToken;
        let refreshToken = data.refreshToken;
        // localStorage.removeitem("refreshToken")
        // localStorage.setItem("refreshToken", refreshToken2)
        if(accessToken) 
        {
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          config.headers["Authorization"]=`Bearer ${accessToken}`;
          return inst(config);
        }
      }
      catch (e) {
        console.log(e);
      }
    }
  
  //if none above worked clear local storage and log user out
  // logout();
  // return error;

  }  
  return error;
  // else{ 
  //    return response;
  //   }

});
export default inst;
