import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure()

    /* calculate total */
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    /* Delete item function */
    const handleDelete = (id) => {
        console.log(id);

        //! Alert function
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                //! Delete function using axios 
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        // console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch(); //* update data reload diye dekhabe tahole r ager moto state a set kora lagbe na
                            /* Delete success Alert */
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });

    }
    return (

        <div >
            <div className="text-yellow-600 poetsen-one-regular flex justify-evenly mt-10">
                <h1 className="text-2xl md:text-4xl font-bold">Items : {cart.length}</h1>
                <h1 className="text-2xl md:text-4xl font-bold">Total Price : {totalPrice} $</h1>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-sans bg-yellow-600 text-white">Pay $ {totalPrice}</button>
            </div>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>No</th>
                            <th>Food Items</th>
                            <th>Customer Name</th>
                            <th>Price </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />

                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs md:btn-lg hover:bg-red-200 ">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>

                            )
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Cart;