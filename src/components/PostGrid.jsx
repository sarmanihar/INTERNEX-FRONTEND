import * as AiIcons from 'react-icons/ai';
import { FaThumbsUp,FaEdit,FaEraser} from "react-icons/fa";
import PostUpdate from "./PostUpdate"
import React, { useState,useEffect } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import GetPostsbyUserId from "../services/GetPostsbyUserId";
import like from "../services/Like"
import {motion} from 'framer-motion';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import deletePosts from "../services/deletePosts"




const PostGrid = ({ data,reloadReq, setReloadReq,setIn,In, userId,setuserId,setLoading,loading,IDTOKEN,setIDTOKEN }) => {
  // console.log(data);
  const [alllikedPosts,setalllikedPosts]=useState([]);
  useEffect(()=>{
    const fetch = async () => {
      // console.log(userId);
      if(In===false){
        return;
      }
       const members = await GetPostsbyUserId(userId);
      //  console.log(members)
        setalllikedPosts(members.data.reqdUser.liked_posts)
    };
    fetch()
  },[])
   if(data.length!=0){
    //  console.log(data)
      let newData=[...data];
      newData.reverse();
    return (
      <div className="table" >
        {newData
          ? newData.map((member, i) =>{
            let temp=false;
            alllikedPosts.map((trav)=>{
              if(trav===member._id){
                temp=true;
              }
            })
            return (
              <RowElement
                data={member}
                reloadReq={reloadReq}
                setReloadReq={setReloadReq}
                key={i}
                isItLiked={temp}
                userId={userId}
                setLoading={setLoading}
                loading={loading}
                IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
                In={In}
              />
            )})
          : ""}
      </div>
    );
   }
};
const RowElement = ({data,reloadReq, setReloadReq,isItLiked,userId,setLoading,loading,IDTOKEN,setIDTOKEN,In }) => {
  const [isLiked1, setisLiked1] = useState(isItLiked);
  // console.log(isItLiked);
  // console.log(isLiked1);
  const [nlikes, setnlikes] = useState();
  const [pop,setPop]=useState(false);
  useEffect(() => {
    setisLiked1(isItLiked);
  }, [isItLiked]);
  useEffect(() => {
    setnlikes(data.noOfLikes);
  }, [data]);

   console.log(data);
  const [vaue,copy]=useCopyToClipboard();
  const [updateMember, setupdateMember] = useState(false);
  const handleDelete = (id) => {
    
    const sendForm = new FormData();
    // console.log(IDTOKEN);
    sendForm.set("getToken",IDTOKEN);
    deletePosts(id, reloadReq, setReloadReq,setLoading,loading,sendForm);
  };
  const handleUpdateClick = (e) => {
    console.log("handleUpdateClick  called\n");
    setupdateMember(!updateMember);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };
   async function handleLike(post_id) {
     if(!In){
       alert("Please click the (signIn with google button)");
       return;
     }
    const sendForm = new FormData();
    // console.log(IDTOKEN);
    sendForm.set("getToken",IDTOKEN);
    console.log(post_id+"\n");
    console.log(userId+"\n");
     const result=await like({post_id,userId,setisLiked1,setnlikes,isLiked1,sendForm});
     console.log(nlikes);
  };
  
  return (
    <div key={data._id} 
   >
      <div
        className="row1"
        draggable
        title="Expandable on click"
      >
        <motion.div  layoutId={data._id}>
          <div className="showingImg">
            <div className="content">
          <a href="#" target="_blank" rel="noopener noreferrer">
          <img className="post_profile" src={data.user.avatar} alt="img" title="Avatar" />
        </a>
            <h6>{data.user.name}</h6>
            <h6 className="dat">{data.postDate}</h6>
            </div>
        </div>
        <h1 onClick={()=> {
      setPop(!pop)
    }}>{data.name}</h1>
        <div className="socials12" title="Socials">
        {(data.user.linkedin!==null)?(<>
          <a target="_blank" className="conMe1"href={data.user.linkedin}>
        <h2>
        <AiFillLinkedin className="socialIcons" />
        </h2>
        </a>
        </>):(<></>)}
        {(data.user.github!==null)?(<>
          <a target="_blank" className="conMe1"href={data.user.github}>
        <h2>
        <AiFillGithub className="socialIcons" />
        </h2>
        </a>
        </>):(<></>)}
        {(data.user.instagram!==null)?(<>
          <a target="_blank" className="conMe1"href={data.user.instagram}>
          <h2><AiFillInstagram className="socialIcons" /></h2>
          </a>
          </>):(<></>)}
        {(data.user.facebook!==null)?(<>
          <a target="_blank" className="conMe1"href={data.user.facebook}>
        <h2><AiFillFacebook className="socialIcons" /></h2>
        </a>
        </>):(<></>)}
        </div>
        </motion.div>
      </div>
      
      {pop &&
      (<div 
        layoutId={data._id}
        
      
      className="pop_up" >
       <h1 className="closingPop" onClick={()=> setPop(!pop)}> <AiIcons.AiOutlineClose /></h1>
        <motion.div  layoutId={data._id}>
        <div
        className="row"
        draggable
        title="Expandable on click"
      >
        
            <div className="content2">
          <a href="#" target="_blank" rel="noopener noreferrer">
          <img className="post_profile" src={data.user.avatar} alt="img" title="Avatar" />
        </a>
            <h6>{data.user.name}</h6>
            <h6 className="dat">{data.postDate}</h6>
            </div>
            <div className='titCent'>
            <h2 title="Name">{data.name}</h2>
            </div>
       
        <div className="gap"></div>


        {data.Question!==null? (
          <>
          <h4 title="Name">Question :</h4>
          <div className="gap"></div>
        <p title="description" id="desc">
          {data.Question}
        </p>
        <div className="gap"></div>
        </>):(<></>)}
        
        {data.Intuition!==null ? (
        <>
        <h4 title="Name" id="allQ">Intuition :</h4>
          <div className="gap"></div>
        <p title="description" id="desc">
          {data.Intuition}
        </p>
        <div className="gap"></div>
        </>):(<></>)}
        {data.Approach!==null ? (
         <>
         <h4 title="Name" id="allQ">Approach :</h4>
           <div className="gap"></div>
        <p title="description" id="desc">
          {data.Approach}
        </p>
        <div className="gap"></div>
        </>):(<></>)}
        {data.Code!==null ? (
         <>
         <h4 title="Name" id="allQ">Code :</h4>
           <div className="gap"></div>
        <p title="description" id="desc" className='spacing_code'>
          {data.Code}
        </p>
        <div className="gap"></div>
        </>):(<></>)}
        {
          (data.TimC!==null)?(
            <>
            <h4 title="Name" id="allQ">TimeC :</h4>
          <p title="Session">{data.TimC}</p>
          <div className="gap"></div>
          </>):(<></>)
        }
        {
          data.SpaceC!==null?(
            <>
            <h4 title="Name" id="allQ">SpaceC :</h4>
          <p title="Session">{data.SpaceC}</p>
          <div className="gap"></div>
          </>):(<></>)
        }
        {data.Experince!==null ? (
         <>
         <h4 title="Name" id="desc">Experince :</h4>
           <div className="gap"></div>
        <p title="description" id="desc">
          {data.Experince}
        </p>
        <div className="gap"></div>
        </>):(<></>)}

        <div className="ed">
        
          {isLiked1?(<div className="btnn" id="aboutL" >
          <p>{nlikes}</p>
          <p onClick={()=>handleLike(data._id)} id="done">
          <FaThumbsUp/>
          </p>
          </div>):(
            <div className="btnn" id="aboutL" >
              <p>{nlikes}</p>
              <p onClick={()=>handleLike(data._id)} id="notDone">
          <FaThumbsUp/>
          </p>
          </div>
          )}
          
           {(data.user._id===userId)?(<><h2 onClick={handleUpdateClick} id="eddil" className='edc'><FaEdit/></h2>
            <h2 onClick={() => handleDelete(data._id)} id="eddil" className='delc'><FaEraser/></h2></>):(<></>)}
            
        </div>
        {updateMember && (
        <PostUpdate
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
        </motion.div>
      
    </div>)
}
    </div>
  );
};
export default PostGrid;