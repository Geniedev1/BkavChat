import {Link} from 'react-router-dom'
import {BkavIcon} from '../Component/BkavIcon'      
export const Register =() => {
    return (
    <>
    <div className = "flex justify-between p-[3rem] w-full h-screen bg-slate-50 ">
        <BkavIcon/>
         <div className = "flex flex-col justify-between h-full md:w-[60%] w-full">
                <div className = "flex justify-center h-1/12 " >
                        <div className = "grid grid-cols-[30%_70%] w-2/3 gap-4">
                                <ul className = "flex justify-between  col-start-2 row-start-1 ">
                                                <li className = "btn" >Tiếng việt</li>
                                                <li className = "btn"><Link to = "/Login">Đăng nhập</Link></li>
                                                <li className = "btn"><Link to = "/Register">Đăng ký</Link></li>
                                </ul>
                        </div>
                </div>
                 <div className = "flex  justify-center items-start  h-5/6  mt-2 ">
                        <form className = "grid grid-cols-[30%_70%] grid-rows-7 w-2/3 gap-4">
                                <h3 className = " text-start text-[1.6rem] font-[300] col-start-2 row-start-1 row-span-2 ">Đăng ký</h3>
                                <div className = "flex items-center justify-start col-start-1 row-start-2">
                                     <h4 className = "text-start text-[0.8rem] ">Tên tài khoản</h4>    
                                </div>
                                <input
                                type = "text"
                                placeholder = "Tên tài khoản/Email"
                                className = "rounded-lg ring-2 ring-sky-50 p-2  bg-sky-100 focus:ring-4 focus:ring-sky-200 col-start-2 row-start-2"
                                />
                                <div className = "flex items-center justify-start col-start-1 row-start-3">
                                     <h4 className = "text-start text-[0.8rem] ">Địa chỉ email</h4>    
                                </div>
                                <input
                                type = "text"
                                placeholder = "Mật khẩu"
                                className = " rounded-lg ring-2 ring-sky-50 p-2 bg-sky-100 focus:ring-4 focus:ring-sky-200 col-start-2 row-start-3"
                                />
                                <div className = "flex items-center justify-start col-start-1 row-start-4">
                                     <h4 className = "text-start text-[0.8rem] ">Mật khẩu</h4>    
                                </div>
                                <input
                                type = "password"
                                placeholder = "Mật khẩu"
                                className = " rounded-lg ring-2 ring-sky-50 p-2  bg-sky-100 focus:ring-4 focus:ring-sky-200 col-start-2 row-start-4"
                                />
                                <div className = "flex items-center justify-start col-start-1 row-start-5">
                                     <h4 className = "text-start text-[0.8rem] ">Nhập lại mật khẩu</h4>    
                                </div>
                                <input
                                type = "password"
                                placeholder = "Nhập lại mật khẩu"
                                className = " rounded-lg ring-2 ring-sky-50 p-2  bg-sky-100 focus:ring-4 focus:ring-sky-200 col-start-2 row-start-5"
                                />
                                <button className = "p-2   bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 shadow-lg shadow-slate-300 col-start-2 row-start-6">
                                Đăng nhập  
                                </button>
                                <button className = "text-start mt-4 italic col-start-2 row-start-7">Đã có tài khoản, đang nhập tại <a className = "text-sky-700 ">đây!</a></button>
                        </form>
                 </div>
         </div>
    </div>
    </>
    );
 }
 export default Register;