import { useContext, useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import authImg from '../../assets/others/authentication2.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false); // password show/ hide korar jonne state banano hoyche
    const [disabled, setDisabled] = useState(true); // login button disabled kore rakhar jonne use kora hoyche

    /* Auth provider theke distrture kore ana hoyeche  */
    const { signInEmail, googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    /* location replace related function  */
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    console.log('state in the location login page', location.state);

    useEffect(() => {
        // 6 charectore er captcha
        loadCaptchaEnginge(4);
    }, []);

    /* email and password login function */
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInEmail(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                /* login alert */
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1000
                });

                /* login korar por automatic location a niye jabe */
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);

            })
    };

    /* google signIn */
    const handleGoogleSingIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then((res) => {
                        console.log(res.data);

                        /* success sign in alert */
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Successfully Login",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        /* login korar por automatic location a niye jabe */
                        navigate(from, { replace: true });
                    })



            })
            .catch((error) => {
                console.log(error);

            })

    }


    // password show/ hide korar jonne function banano hoyche
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    /* captcha function */
    const handleValidCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false); // Captcha validated, enable the login button
        } else {
            alert('Captcha not match');
            setDisabled(true); // Captcha not matched, keep the login button disabled
        }
    };

    return (
        <div>
            <Helmet>
                <title> Dacca | Login</title>
            </Helmet>
            <div className="min-h-screen bgImage1 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 shadow-2xl sm:rounded-lg flex justify-center ">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                {/* google login */}
                                <div className="flex flex-col items-center">
                                    <button
                                        onClick={handleGoogleSingIn}
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#D1A054] text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4" />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853" />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04" />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335" />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Log In with Google
                                        </span>
                                    </button>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign In with E-mail
                                    </div>
                                </div>

                                <form onSubmit={handleLogin} className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <div className="relative w-full mt-5">
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            required
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <LuEyeOff size={24} /> : <LuEye size={24} />}
                                        </div>
                                    </div>
                                    {/* forget password section */}
                                    <div className="flex justify-end mt-2">
                                        <Link to="/forgot-password" className="text-sm text-[#D1A054]">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    {/* captcha section */}
                                    <div className="flex flex-col mt-2">
                                        <label className="label ">
                                            <LoadCanvasTemplate />
                                        </label>

                                        <div>
                                            <input
                                                className="w-1/2 px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                name="captcha"
                                                type="text"
                                                placeholder="captcha"
                                                onBlur={handleValidCaptcha}
                                            />

                                        </div>
                                    </div>

                                    <button
                                        disabled={disabled} // Disabled state is now bound to the button
                                        className={`mt-5 tracking-wide font-semibold bg-[#D1A054] text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                        </svg>
                                        <span className="ml-3">
                                            Log In
                                        </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        Do not have an account?
                                        <Link to='/signup' className="font-bold text-[#D1A054] ml-2">
                                            Sign up
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* bg color */}
                    <div className="flex-1 bgImage1 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center flex items-center bg-no-repeat">
                            <img src={authImg} alt="Authentication" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
