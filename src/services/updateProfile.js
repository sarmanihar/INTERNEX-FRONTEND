import axios from "axios";
import { toast } from "react-toastify";
const UpdateProfile = async(
    sendForm,
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
        const res = await axios.patch(`${ServerUrl}/user`, sendForm);
        // setDataTransfer(false);
        console.log(reloadReq);
        console.log(loading);
        setReloadReq(!reloadReq);
        setLoading(!loading);
        console.log(reloadReq);
        console.log(loading);
        // toast.success("Event Updated");
        return res;

    } catch (err) {
        // setDataTransfer(false);
        // toast.error(err.message);
        console.log(err)
    }
};

export default UpdateProfile;