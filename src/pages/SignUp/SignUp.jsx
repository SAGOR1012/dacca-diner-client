import { useContext, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import authImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";




const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false); // password show/ hide korar jonne state banano hoyche
    const { createUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    /* location replace related function  */
    const navigate = useNavigate()

    /* form bananor jonne use kora hoyche */
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    /* Create account function  */
    const onSubmit = (data) => {
        // console.log(data)


        createUser(data.email, data.password)
            .then((result) => {
                // const loggedUser = result.user;
                // console.log(loggedUser);

                /* create user entry in database */
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    // password: data.password
                }
                axiosPublic.post('/users', userInfo)
                    .then((res) => {
                        if (res.data.insertedId) {
                            console.log('user add to database');
                            /* signIn success alert */
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Registration Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })


                reset()  /* reset form data after signup */

                navigate('/') /* signup korar por direct home chole jabe */


            })
    }


    // password show/ hide korar jonne function banano hoyche
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <Helmet>
                <title>Dacca | Register</title>
            </Helmet>

            <div className="min-h-screen bgImage1 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 shadow-2xl sm:rounded-lg flex justify-center flex">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">


                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Please Register with E-mail
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xs">
                                    {/* name field */}
                                    <input
                                        className="w-full px-8 mb-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        name="name"
                                        {...register("name")}
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                    {/* email field */}
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        name="email"
                                        {...register("email")}
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                    {/* password field */}
                                    <div className="relative w-full mt-5">
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="password"
                                            {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"

                                        />
                                        {/* error msg */}
                                        {errors.password && errors.password.type === "minLength" && (
                                            <span className="text-red-500 text-xs">
                                                Password must be at least 6  characters
                                            </span>
                                        )}
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

                                    <button

                                        className={`mt-5 tracking-wide font-semibold bg-[#D1A054] text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none }`}
                                    >
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                        </svg>
                                        <span className="ml-3">
                                            Register
                                        </span>
                                    </button>

                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        Already have an account?
                                        <Link to='/login' className="font-bold text-[#D1A054] ml-2">
                                            Log In
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
        </>
    );
};

export default SignUp;