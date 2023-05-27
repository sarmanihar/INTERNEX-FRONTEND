import PostUpdate from "./PostUpdate"
import React, { useState,useEffect } from "react";
import * as AiIcons from 'react-icons/ai';
import { useCopyToClipboard } from "usehooks-ts";
import { FaThumbsUp,FaEdit,FaEraser} from "react-icons/fa";
import like from "../services/Like"
import GetPostsbyUserId from "../services/GetPostsbyUserId";
import {motion} from 'framer-motion';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import deletePosts from "../services/deletePosts"



const PerPostGrid = ({ data,reloadReq, setReloadReq,userId,setLoading,loading,IDTOKEN,setIDTOKEN }) => {
  // console.log(data);

  const [alllikedPosts,setalllikedPosts]=useState([]);
  useEffect(()=>{
    const fetch = async () => {
      // console.log(userId);
       const members = await GetPostsbyUserId(userId);

      //  console.log(members)
        setalllikedPosts(members.data.reqdUser.liked_posts)
    };
    fetch()
  },[])
   if(data.length!=0){
    let newData=[...data.data.reqdUser.personalPosts];
    // console.log(data.data.AllPosts);
    // console.log(newData);
    newData.reverse();
    //  console.log(data.data.reqdUser.personalPosts)
    return (
      <div className="table" >
        {newData
          ? newData.map((member, i) => {
            let temp=false;
            alllikedPosts.map((trav)=>{
              if(trav===member._id){
                temp=true;
              }
            })
              return (<RowElement
               DATA={data}
                data={member}
                reloadReq={reloadReq}
                setReloadReq={setReloadReq}
                key={i}
                isItLiked={temp}
                userId={userId}
                setLoading={setLoading}
                loading={loading}
                IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
              />)
          })
          : ""}
      </div>
    );
   }
};
const RowElement = ({DATA, data,reloadReq, setReloadReq,isItLiked,userId,setLoading,loading,IDTOKEN,setIDTOKEN  }) => {

  const [nlikes, setnlikes] = useState();
  const [pop,setPop]=useState(false);
  const [isLiked1, setisLiked1] = useState(isItLiked);
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
    sendForm.set("getToken",IDTOKEN);
    deletePosts(id, reloadReq, setReloadReq,setLoading,loading,sendForm);
  };
  const handleUpdateClick = (e) => {
    setupdateMember(!updateMember);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };
  async function handleLike(post_id) {
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
          <img className="post_profile" src={DATA.data.reqdUser.avatar} alt="img" title="Avatar" />
        </a>
            <h6>{DATA.data.reqdUser.name}</h6>
            <h6 className="dat">{data.postDate}</h6>
            </div>
        </div>
        <h1 onClick={()=> {
      setPop(!pop)
    }}>{data.name}</h1>
        <div className="socials12" title="Socials">
          {(DATA.data.reqdUser.linkedin!==null)?(<>
            <a target="_blank" className="conMe1"href={DATA.data.reqdUser.linkedin}>
          <h2>
        <AiFillLinkedin className="socialIcons" />
        </h2>
        </a>
        </>):(<></>)}
        {(DATA.data.reqdUser.github!==null)?(<>
          <a target="_blank" className="conMe1"href={DATA.data.reqdUser.github}>
        <h2>
        <AiFillGithub className="socialIcons" />
        </h2>
        </a>
        </>):(<></>)}
        {(DATA.data.reqdUser.instagram!==null)?(<>
          <a target="_blank" className="conMe1"href={DATA.data.reqdUser.instagram}>
          <h2><AiFillInstagram className="socialIcons" />
          </h2>
          </a>
          </>):(<></>)}
        {(DATA.data.reqdUser.facebook!==null)?(<>
          <a target="_blank" className="conMe1"href={DATA.data.reqdUser.facebook}>
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
          <img className="post_profile" src={DATA.data.reqdUser.avatar} alt="img" title="Avatar" />
        </a>
            <h6>{DATA.data.reqdUser.name}</h6>
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
            <h2 onClick={handleUpdateClick} id="eddil" className='edc'><FaEdit/></h2>
            <h2 onClick={() => handleDelete(data._id)} id="eddil" className='delc'><FaEraser/></h2>
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
export default PerPostGrid;