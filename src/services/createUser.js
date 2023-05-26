import axios from "axios";
import { toast } from "react-toastify";

const CreateUser = async(
    sendForm,
) => {
    const ServerUrl = process.env.REACT_APP_SERVER_URL;
    // console.log(ServerUrl);
    try {
        // console.log("kk");
        // console.log(sendForm.coverPic);
        const res = await axios.post(`${ServerUrl}/user`, sendForm);
        // console.log({ res });
        // console.log(res)
        // toast.success("User Created");
        return res;
    } catch (err) {
        console.log(err)
            //console.log({ err });
            // setDataTransfer(false);
            // toast.error(err.message);
    }
};

export default CreateUser;