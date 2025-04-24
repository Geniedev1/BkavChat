import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react' 
import {BkavIcon} from '../Component/Login/BkavIcon' 
import axios from 'axios'   
import {showToast} from '../Component/Login/Showtoast'  
export const Login =() => {
   const [user,setUser] = useState({
        email : '',
        password : ''
   });
   const onLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://fe253d2d-1309-43a4-8ee6-250f4a9781f0.mock.pstmn.io/Login',user)
            const data = await res.data;
            localStorage.setItem("token", data.acess);
            localStorage.setItem("user", JSON.stringify(data.user));
            showToast("Đăng nhập thành công", "success");

        } catch (error) {
            console.error(error);
        }
   }
   
   return (
   <>
   <div className = "flex justify-between p-[3rem] w-full h-screen bg-slate-50 ">
        <BkavIcon/>
        <div className = "flex flex-col justify-between h-full md:w-[40%] w-full">
                <ul className = "flex justify-between  mx-[6rem] h-1/12  ">
                        <li className = "btn" >Tiếng việt</li>
                        <li className = "btn"><Link to = "/Login">Đăng nhập</Link></li>
                        <li className  = "btn"><Link to = "/Register">Đăng ký</Link></li>
                </ul>
                <form className = "flex flex-col justify-start h-4/6  mt-12">
                        <h3 className = " text-center text-[1.6rem] font-[300]">Đăng nhập</h3>
                        <input
                        name = "email"
                        value = {user.email}
                        onChange = {(e)=>setUser({...user,[e.target.name]:e.target.value})}     
                        type = "email" 
                        placeholder = "Tên tài khoản/Email"
                        className = "rounded-lg ring-2 ring-sky-50 p-2 mt-5 bg-sky-100 focus:ring-4 focus:ring-sky-200"
                        />
                        <input
                        name = "password"
                        value = {user.password}
                        onChange = {(e)=>setUser({...user,[e.target.name]:e.target.value})}
                        type = "password"
                        placeholder = "Mật khẩu"
                        className = " rounded-lg ring-2 ring-sky-50 p-2 mt-10 bg-sky-100 focus:ring-4 focus:ring-sky-200"
                        />
                        <button className = "text-end mt-4 italic">quên mật khẩu?</button>
                        <button onClick={(e)=>onLogin(e)} className = "p-2 mt-4  bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 shadow-lg shadow-slate-300">
                        Đăng nhập  
                        </button>
                        <button  className = "text-end mt-4 italic">bạn chưa có tài khoản, đang ký tại <a className = "text-sky-700">đây!</a></button>
                </form>
                <div className = "flex flex-col justify-between h-1/6 mb-12">
                     <div className = "flex justify-between">
                        <div className = "h-0.5 w-32 bg-gray-200 "></div>
                        <h3 className = "mx- text-gray-500 text-xs">hoặc tiếp tục ở đây</h3>
                        <div className = "h-0.5 w-32 bg-gray-200 "></div>
                     </div>
                     <div className = "flex justify-center">
                        
                        <button className = "mx-2  py-2 px-6 rounded-lg ring-1 ring-slate-200">
                          icon
                        </button>
                        <button className = "mx-2  bg-white py-2 px-6 rounded-lg shadow-slate-400 shadow-lg">
                          icon
                        </button>
                        <button className = "mx-2  py-2 px-6 rounded-lg ring-1 ring-slate-200">
                          icon
                        </button>
                        
                     </div>
                </div>
        </div>
   </div>
   </>
   );
}
export default Login;