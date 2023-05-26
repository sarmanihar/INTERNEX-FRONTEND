import React, { useState, useEffect } from "react";
import "../css/Experiece.css";
import PostGrid from "../components/PostGrid";
import CreatePosts from "../components/CreatePosts";
import GetPosts from "../services/getPosts";
// import "toastify-js/src/toastify.css";
import { toast } from "react-toastify";
import { FaPlusCircle} from "react-icons/fa";
import LoadPage from "../components/Loading"


const Experience = ({ setIn,In, userId,setuserId,IDTOKEN,setIDTOKEN }) => {
const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [addMember, setAddMember] = useState(false);
const [searchText, setSearchText] = useState("");
const [dataReserved, setDataReserved] = useState([]);
const [reloadReq, setReloadReq] = useState(false);

useEffect(()=>{
  const fetch = async () => {
    // console.log("fetch called\n");
    // setLoading(true);
    let timerId = setTimeout(() =>  setLoading(false), 1000);
    // setLoading(false)
    const members = await GetPosts();
    //const members=null;
    // console.log(members)
    setData(members);
    // setLoading(false);
    // console.log("Check loading")
    // console.log(loading)
    // console.log(members)
  };
  fetch()
},[])
// fetch();

useEffect(() => {
  const fetch = async () => {
    // console.log("fetch called\n");
    // setLoading(true);
    let timerId = setTimeout(() =>  setLoading(false), 1000);
    const members = await GetPosts();
    //const members=null;
    console.log(members)
    setData(members.data.AllPosts);
    // data.reverse();
    // setLoading(false);
    // console.log("Check loading")
    // console.log(loading)
    // console.log(members)
    
  };
  // fetch(seSSion);
  fetch();
  console.log("reload called")
}, [reloadReq]);

const handleSearch = (e) => {


  e.preventDefault();
  // console.log(data.data.AllPosts);
  setDataReserved(data);
  if (dataReserved.length > 0) {
    setData(dataReserved);
  }
  const list1 = data.filter((element) =>
    element.name.toLowerCase().includes(searchText.toLowerCase())
  );
  



  const list2 = data.filter((element) =>
    element.user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const list_final1 = list1.concat(list2);
  let list_final=[...new Set(list_final1)];
  console.log(list_final);
  if (list_final.length > 0) {
    setData(list_final);
  } else {
    // toast.error("no such member found");
    console.log("Nothing");
    alert("No such post found");
  }
  if (searchText === "") {
    setData(dataReserved);
  }

  // console.log(list1);
  // if (list1.length > 0) {
  //   setData(list1);
  // } else {
  //   // toast.error("no such member found");
  //   console.log("Nothing")
  //   alert("No such post found");
  // }
  // if (searchText === "") {
  //   setData(dataReserved);
  // }
};
return (
<>
{loading ? (
      <LoadPage/>
    ) : (
      <div className="experinc_page">
      <div className="headBar">
        
  
          <form onSubmit={handleSearch} id="searchform">
            <input
            id="search"
              type="text"
              placeholder="press enter to search(search by name,post writter)"
              title="search by name,post writter"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
  
        {In ?(<><button className="sbtn1" onClick={() => setAddMember(!addMember)}>
         <div id="addL"><FaPlusCircle/></div> Add New
  </button>
  </>):(<></>)}
        
        
        {/*<div
          className="sbtn"
        >
          Reload
        </div>*/}
      </div>
        <div id="noSchead">
        <PostGrid
          data={data}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
          setIn={setIn} In={In} userId={userId} setuserId={setuserId}
          setLoading={setLoading}
          loading={loading}
          IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}
        />
        </div>
      {addMember && (
        <CreatePosts
          addMember={addMember}
          setAddMember={setAddMember}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
          setIn={setIn} In={In} userId={userId} setuserId={setuserId}
          setLoading={setLoading}
          loading={loading}
          IDTOKEN={IDTOKEN} setIDTOKEN={setIDTOKEN}

        />
      )}
    </div>
)};
</>
);
};

export default Experience;



