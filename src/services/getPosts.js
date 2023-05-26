import axios from "axios";
import { toast } from "react-toastify";

const GetPosts = async() => {
    const ServerUrl = process.env.REACT_APP_SERVER_URL;
    //const res = await axios.get(`${ServerUrl}/posts`);
    // return res;
    try {
        const res = await axios.get(`${ServerUrl}/posts`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
        // toast.error(err.message);
    }
};

export default GetPosts;