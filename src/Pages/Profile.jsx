import React, { useState, useEffect } from "react";
import "../css/Profile.css";
import LoadPage from "../components/Loading"
import GetPostsbyUserId from "../services/GetPostsbyUserId";
import PerPostGrid from "../components/personalPostsgrid";
import ProfileUpdate from "../components/ProfileUpdate"
import DeleteProfile from "../services/deleteProfile"
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
const Profile = ({ setIn, In,userId,setuserId,IDTOKEN,setIDTOKEN }) => {
  const [userName,setuserName]=useState(null);
    const [userAvatar,setuserAvatar]=useState(null);
    const [userEmail,setuserEmail]=useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [reloadReq, setReloadReq] = useState(false);
  const [updateMember, setupdateMember] = useState(false);
  const handleDelete = (id) => {
    const sendForm = new FormData();
    // console.log(IDTOKEN);
    sendForm.set("getToken",IDTOKEN);
    DeleteProfile(setIn,In,sendForm);
  };
  const handleUpdateClick = (e) => {
    setupdateMember(!updateMember);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };
  useEffect(()=>{
    const fetch = async () => {
      // console.log(userId);
      let timerId = setTimeout(() =>  setLoading(false), 1000);
       const members = await GetPostsbyUserId(userId);
      setData(members);
      // data.reverse();
    };
    fetch()
  },[])
  useEffect(() => {
    const fetch = async () => {
      let timerId = setTimeout(() =>  setLoading(false), 1000);
      const members = await GetPostsbyUserId(userId);
      setData(members);
      // data.reverse();
    };
    fetch();
    console.log("reload called")
  }, [reloadReq]);
  return (
    <>
{loading ? (
      <LoadPage/>
    ) : (
      <div>
          <div className='newNav'>
        <div id="forFlex">
        <div>
        <img className="profile_pic_b LF" src={data.data.reqdUser.avatar} alt="img" title="Avatar"/>
        </div>
        <div className="LF" id="LFO">
      <h3 className="LFI">{data.data.reqdUser.name}</h3>
      <h3 className="LFI">{data.data.reqdUser.email}</h3>
      <div className="socials123" title="Socials">
          {(data.data.reqdUser.linkedin!==null)?(<>
            <a target="_blank" className="conMe"href={data.data.reqdUser.linkedin}>
          <h2>
        <AiFillLinkedin className="socialIcons" />
        </h2>
        </a>
        </>):(<></>)}
        {(data.data.reqdUser.github!==null)?(<>
          <a target="_blank" className="conMe"href={data.data.reqdUser.github}>
        <h2>
        <AiFillGithub className="socialIcons" />
        </h2>
        </a>
        </>):(<></>)}
        {(data.data.reqdUser.instagram!==null)?(<>
          <a target="_blank" className="conMe"href={data.data.reqdUser.instagram}>
          <h2><AiFillInstagram className="socialIcons" /></h2>
          </a>
          </>):(<></>)}
        {(data.data.reqdUser.facebook!==null)?(<>
          <a target="_blank" className="conMe"href={data.data.reqdUser.facebook}>
        <h2><AiFillFacebook className="socialIcons" /></h2>
        </a>
        </>):(<></>)}
        </div>
        </div>
        <div>
          <button id="edbt" onClick={handleUpdateClick}>Edit</button>
          <button  id="edbt" onClick={handleDelete}>Delete</button>
        </div>
        
        </div>
       
       </div>
          
          
      <div className="profilePostscard">

        <PerPostGrid
          data={data}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
          userId={userId}
          setLoading={setLoading}
          loading={loading}
          IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
        />
        {updateMember && (
        <ProfileUpdate
          id={data._id}
          updateMember={updateMember}
          setupdateMember={setupdateMember}
          datasent={data}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
          setLoading={setLoading}
          loading={loading}
          IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
        />
      )}

      </div>
      
    </div>
    )};
    </>
  )
}

export default Profile