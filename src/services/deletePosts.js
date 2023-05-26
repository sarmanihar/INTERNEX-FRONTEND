import axios from "axios";
import { toast } from "react-toastify";
const deletePosts = async(id, reloadReq, setReloadReq, setLoading, loading, sendForm) => {
    const ServerUrl = process.env.REACT_APP_SERVER_URL;
    try {
        // const res = await axios.delete(`${ServerUrl}/${id}`, { withCredentials: true });
        // console.log(sendForm);
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: sendForm
        };
        const res = await axios.delete(`${ServerUrl}/posts/${id}`, requestOptions);
        // toast.success("deleted successfully");
        setReloadReq(!reloadReq);
        setLoading(!loading);
        return res;
    } catch (err) {
        // toast.error(err.message);
        // return err;
        console.log(err);
    }
};
export default deletePosts;