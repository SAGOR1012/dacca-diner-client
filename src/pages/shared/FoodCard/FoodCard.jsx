// import { useContext } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
// import { AuthContext } from "../../../provider/AuthProvider";

const FoodCard = ({ item }) => {
    const { image, price, name, recipe, _id } = item;
    // const { user } = useContext(AuthContext) //*eivabe oo kora jeto . ektu custom hook diye korlam 
    const { user } = useAuth()

    const navigate = useNavigate() // navigate kore onno page a niye jawar jonne
    const location = useLocation()

    /* axios secure from custom hook*/
    const axiosSecure = useAxiosSecure();

    /* jokhn cart a data add kora hobe tokhn auto total cart number update hoye jabe  tahole r page load dear dorkar hobe na*/
    const [, refetch] = useCart()
    const handleAddToCart = (food) => {
        // console.log(food, user.email);
        if (user && user.email) {
            // console.log(user.email, food);

            /* send cart item to database start */
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, image, price
            }
            console.log(cartItem);

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        /* sweet aler */
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: ` added your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        /* jokhn cart a data add kora hobe tokhn auto total cart number update hoye jabe  tahole r page load dear dorkar hobe na*/
                        refetch();

                    }
                })
            /* send cart item to database start */
        }
        else {
            /* jodi login kora na thake tahole alert show korbe */
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login first to add cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in !"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } }) //privet route er 16 number line a jeivabe location dewa thakbe oi vabe 
                }
            });
        }

    }

    return (

        <div className="card card-compact  md:w-96 bg-base-100 shadow-xl mb-10 hover:bg-slate-100 hover:transition">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-[#111827] text-white font-bold absolute right-0 mr-4 mt-4 rounded-md px-3 py-2">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-b-[#D99904] text-[#D99904]"
                        onClick={() => handleAddToCart(item)}
                    >ADD TO CART</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;