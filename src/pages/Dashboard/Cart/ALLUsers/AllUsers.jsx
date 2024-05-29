import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    /* karon eita secure thakbe tai secure url lagbe */
    const axiosSecure = useAxiosSecure();


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    /* Make admin function  */
    const handleMakeAdmin = (user) => {

        //! Alert function
        Swal.fire({
            title: "Do You Want To Admin This User?",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            console.log(result);

            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then((res) => {
                        console.log(res);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            /* success alert */
                            Swal.fire({
                                title: `${user.name} is an Admin Now `,
                                text: "Your user has become an admin.",
                                icon: "success"
                            });
                        }

                    })
            }

        })


    }


    /* Delete user  */
    const handleDeleteUser = (user) => {
        console.log(user);

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
            console.log(result);

            if (result.isConfirmed) {

                //! Delete function using axios 
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch(); //* update data reload diye dekhabe tahole r ager moto state a set kora lagbe na
                            /* Delete success Alert */
                            Swal.fire({
                                title: "Deleted!",
                                text: "User  has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });

    }
    return (
        <div >
            <div className="text-yellow-600 poetsen-one-regular flex justify-start mt-10">
                <h1 className="text-2xl md:text-4xl font-bold">Total Users : {users.length}</h1>
            </div>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-600 text-white font-bold">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <tr className="hover"
                            key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-yellow-500 text-white btn-xs md:btn-lg">
                                    <FaUsers></FaUsers>
                                </button>}
                            </td>
                            <th>
                                <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs md:btn-lg text-red-500 ">
                                    <FaTrashAlt></FaTrashAlt>
                                </button>
                            </th>
                        </tr>)
                    }

                </table>
            </div>
        </div>
    );
};

export default AllUsers;