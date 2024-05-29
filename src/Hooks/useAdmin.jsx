import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecre = useAxiosSecure()
    const { data: isAdmin, isPending: idaAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecre.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;


        }
    })
    return [isAdmin, idaAdminLoading]
};

export default useAdmin;