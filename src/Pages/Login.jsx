import {Link} from 'react-router-dom'
export const Login =() => {
   return (
   <>
   <div className = "flex justify-between p-[3rem] w-full h-screen bg-slate-50 ">
        <div className = "flex flex-col justify-center m-[1rem] w-[40%] ">
                <div className = "flex h-1/4">
                        <div className = "flex items-center justify-center w-1/4">
                                <img src = "./images/IconB.png" alt = "logo" className = "object-cover"/>
                        </div>
                        <div className = "flex items-center text-center">
                                <h1 className = "  text-orange-500 text-[2rem] font-bold">Bkav Chat</h1>
                        </div>
                </div>
                <div className = "p-10 mt-[2rem] w-full">
                        <img src ="./images/login.png" alt ="Not found" className = " object-contain w-3/4 h-3/4"/>
                </div>
        </div>
        <div className = "flex flex-col justify-between h-full w-[40%]">
                <ul className = "flex justify-between  mx-[6rem] 1/6  ">
                        <li className = "btn" >Tiếng việt</li>
                        <li className="btn">Đăng nhập</li>
                        <li className  = "btn"><Link to = "/Register">Đăng ký</Link></li>
                </ul>
                <form className = "flex flex-col justify-start h-4/6  mt-12">
                        <h3 className = " text-center text-[1.6rem] font-[300]">Đăng nhập</h3>
                        <input
                        type = "text" 
                        placeholder = "Tên tài khoản/Email"
                        className = "rounded-lg ring-2 ring-sky-50 p-2 mt-5 bg-sky-100 focus:ring-4 focus:ring-sky-200"
                        />
                        <input
                        type = "password"
                        placeholder = "Mật khẩu"
                        className = " rounded-lg ring-2 ring-sky-50 p-2 mt-10 bg-sky-100 focus:ring-4 focus:ring-sky-200"
                        />
                        <button className = "text-end mt-4 italic">quên mật khẩu?</button>
                        <button className = "p-2 mt-4  bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 shadow-lg shadow-slate-300">
                        Đăng nhập  
                        </button>
                        <button className = "text-end mt-4 italic">bạn chưa có tài khoản, đang ký tại <a className = "text-sky-700">đây!</a></button>
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