import axios from "axios";
import { toast } from "react-toastify";
const DeleteProfile = async(setIn, In, sendForm) => {
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
        const res = await axios.delete(`${ServerUrl}/user`, requestOptions);
        setIn(!In);
        window.location.reload();
        // toast.success("deleted successfully");
        // setReloadReq(!reloadReq);
        // setLoading(!loading);
        return res;
    } catch (err) {
        // toast.error(err.message);
        // return err;
        console.log(err);
    }
};
export default DeleteProfile;