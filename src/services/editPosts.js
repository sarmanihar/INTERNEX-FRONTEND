import axios from "axios";
import { toast } from "react-toastify";
const editPosts = async(
    sendForm,
    id,
    setDataTransfer,
    reloadReq,
    setReloadReq,
    setLoading,
    loading
) => {
    const ServerUrl = process.env.REACT_APP_SERVER_URL;
    // console.log(sendForm.name);
    try {
        // const res = await axios.patch(`${ServerUrl}/posts/${id}`, sendForm, {
        //     headers: { "Content-Type": "multipart/form-data" },
        // });
        const res = await axios.patch(`${ServerUrl}/posts/${id}`, sendForm);
        // setDataTransfer(false);
        setReloadReq(!reloadReq);
        setLoading(!loading);
        // toast.success("Event Updated");
        return res;

    } catch (err) {
        // setDataTransfer(false);
        // toast.error(err.message);
        console.log(err)
    }
};

export default editPosts;