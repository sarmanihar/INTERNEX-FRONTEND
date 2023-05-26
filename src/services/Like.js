import axios from "axios";
import { toast } from "react-toastify";
const like = async({
    post_id,
    userId,
    setisLiked1,
    setnlikes,
    isLiked1,
    sendForm
}) => {
    const ServerUrl = process.env.REACT_APP_SERVER_URL;
    console.log()
    console.log("Like.js called\n")
    try {
        // console.log(sendForm);
        const res = await axios.post(`${ServerUrl}/posts/${post_id}`, sendForm);
        console.log("ok done");
        console.log(res.data.CountN);
        setnlikes(res.data.CountN);
        setisLiked1(!isLiked1);
        // setReloadReq(!reloadReq);
        // toast.success("Post Liked");
        // return res.CHECK;
        return res;

    } catch (err) {
        // setDataTransfer(false);
        // toast.error(err.message);
        console.log(err);
    }
};

export default like;