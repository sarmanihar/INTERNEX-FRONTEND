import axios from "axios";
import { toast } from "react-toastify";

const CreatePosts = async(
    sendForm,
    setDataTransfer,
    reloadReq,
    setReloadReq,
    setLoading,
    loading

) => {
    // console.log("createPosts called")
    const ServerUrl = process.env.REACT_APP_SERVER_URL;
    // console.log(ServerUrl);
    console.log("Unique");

    try {
        const res = await axios.post(`${ServerUrl}/posts`, sendForm);
        setReloadReq(!reloadReq);
        setLoading(!loading);
        return res;
    } catch (err) {
        console.log(err);
        //console.log({ err });
        // setDataTransfer(false);
        // toast.error(err.message);
    }
};

export default CreatePosts;