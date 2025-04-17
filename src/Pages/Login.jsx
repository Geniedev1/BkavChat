
export const Login =() => {
   return (
   <>
   <div className = "flex justify-center p-[4em] w-full h-full ">
        <div className = "flex flex-col justify-center m-auto w-[40%] ">
                <div className = "flex h-1/4">
                        <div className = "flex justify-center items-center w-1/4 h-1/3">
                                <img src = "./images/IconB.png" alt = "logo" className = ""/>
                        </div>
                        <div className = "flex items-center text-center">
                                <h1 className = "  text-orange-500 text-4xl font-bold">Bkav Chat</h1>
                        </div>
                </div>
                <div className = "p-10 mt-[2rem] w-full">
                        <img src ="./images/login.png" alt ="Not found" className = " object-contain w-3/4 h-3/4"/>
                </div>
        </div>
        <div className = "flex flex-col justify-center m-auto h-full w-[40%]">
        <div className = "flex justify-between  mx-[6rem]">
            <h3>Tiếng việt</h3>
            <h3>Đăng nhập</h3>
            <h3>Đăng ký</h3>
        </div>
        <h3 className = " text-center text-[2rem]">Đăng nhập</h3>
        <form className = "flex flex-col justify-center h-full">
            <input
            type = "text"
            placeholder = "Tên tài khoản/Email"
            className = "rounded-lg ring-2 ring-sky-50 p-2 mt-10 bg-sky-50 focus:ring-4 focus:ring-sky-200"
            />
            <input
            type = "password"
            placeholder = "Mật khẩu"
            className = " rounded-lg ring-2 ring-sky-50 p-2 mt-10 bg-sky-50 focus:ring-4 focus:ring-sky-200"
            />
            <h3 className = "text-end mt-4 italic">quên mật khẩu?</h3>
            <button className = "p-2 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
              Đăng nhập  
            </button>
        </form>
        </div>
   </div>
   </>
   );
}
export default Login;