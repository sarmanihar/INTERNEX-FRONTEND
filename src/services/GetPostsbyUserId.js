import axios from "axios";
import { toast } from "react-toastify";

const GetPostsbyUserId = async(ID) => {
    const ServerUrl = process.env.REACT_APP_SERVER_URL;
    console.log(ID);
    //const res = await axios.get(`${ServerUrl}/posts`);
    // return res;
    try {
        const res = await axios.get(`${ServerUrl}/user/${ID}`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
        // toast.error(err.message);
    }
};

export default GetPostsbyUserId;