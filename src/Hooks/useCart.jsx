import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            /* axios use kore (const res) moddhe await use korte hobe jodi fatch use kortam tahole (const data ) variable banatam documentations er moto*/
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data

        }
    })

    return [cart, refetch];
};

export default useCart;


