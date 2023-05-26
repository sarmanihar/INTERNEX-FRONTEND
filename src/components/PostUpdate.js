import React, { useState,useEffect } from "react";
import editPosts from "../services/editPosts"
const PostUpdate = ({
  id,
  updateMember,
  setupdateMember,
  datasent,
  reloadReq,
  setReloadReq,
  setLoading,loading
  ,IDTOKEN,setIDTOKEN
}) => {
    const [name, setName] = useState();
  const [images, setImages] = useState();
  const [Question,setQuestion]=useState();
  const [Intuition,setIntuition]=useState();
  const [Approach,setApproach]=useState();
  const [Code,setCode]=useState();
  const [TimC,setTimC]=useState();
  const [SpaceC,setSpaceC]=useState();
  const [Experince,setExperince]=useState();
  const [coverPic,setcoverPic]=useState();


   useEffect(() => {
    setName(datasent.name);
    setQuestion(datasent.Question);
    // setImages(datasent.images);
     setIntuition(datasent.Intuition);
    setApproach(datasent.Approach);
    setCode(datasent.Code);
    setTimC(datasent.TimC);
    setSpaceC(datasent.SpaceC);
    setExperince(datasent.Experince);
    setcoverPic(datasent.coverPic);
    
    // const imageBody = document.querySelector(".imageUploaded");
  }, [datasent]);

  async function handleSubmit(e) {
    // console.log(name);
    const sendForm = new FormData();
    sendForm.set("getToken",IDTOKEN);
    sendForm.set("name", name);
    sendForm.set("Question", Question);
    sendForm.set("Intuition", Intuition);
    sendForm.set("Approach", Approach);
    sendForm.set("Code", Code);
    sendForm.set("TimC", TimC);
    sendForm.set("SpaceC", SpaceC);
    sendForm.set("Experince", Experince);
    sendForm.set("coverPic", coverPic);
    // if (images) {
    //   sendForm.set("image", images);
    // }
    // sendForm.set("image", image);
    const edPosts = await editPosts(
    sendForm,
    id,
    reloadReq,
    setReloadReq,
    setLoading,
    loading 
  );
  setupdateMember(!updateMember);
  }

  return (
    <div className="createPage" style={{
      animation:"dropTop .2s linear"
    }}>
      <p className="btn close upclose" id="upclose" onClick={() => setupdateMember(!updateMember)}>
        X
      </p>
      <label htmlFor="name">Title :</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        accept="image"
        onChange={(e) => setName(e.target.value)}
      />



      {/* <label htmlFor="images">Cover Pic</label>
      <input
        type="file"
        name="image"
        id="image"
        multiple
        title="Uploaded Image"
        onChange={(e) => {
          const files = Array.from(e.target.files);
          const imageBody = document.querySelector(".imageUploaded");
          while (imageBody.firstChild) {
            imageBody.removeChild(imageBody.lastChild);
          }
          setImages([]);
          files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setImages((old) => [...old, reader.result]);
                const links = document.createElement("a");
                links.href = reader.result;
                links.target = "_blank";
                const image = document.createElement("img");
                image.src = reader.result;
                links.appendChild(image);
                imageBody.appendChild(links);
              }
            };
            reader.readAsDataURL(file);
          });
        }}
      />
      <label htmlFor="imgupload">Image to be Uploaded</label>
      <div className="imageUploaded" id="imgupload"></div> */}




      <label htmlFor="description">Question(Coding related or HR round relatd anything) :</label>
      <textarea
        rows="8"
        cols="110"
        name="description"
        id="description"
        accept="image"
      value={Question!=="undefined"?Question:""}
         onChange={(e) => setQuestion(e.target.value)}
      >
      </textarea>
      <label htmlFor="session">Intuition :</label>
      <textarea
        rows="8"
        cols="110"
        name="description"
        id="description"
        value={Intuition!=="undefined"?Intuition:""}
        accept="image"
         onChange={(e) => setIntuition(e.target.value)}
      >
      </textarea>
      <label htmlFor="year">Approach :</label>
      <textarea
        rows="8"
        cols="110"
        name="description"
        id="description"
        value={Approach!=="undefined"?Approach:""}
        accept="image"
         onChange={(e) => setApproach(e.target.value)}
      >
      </textarea>
      <label htmlFor="year">Code(If it exists) :</label>
      <textarea
        rows="8"
        cols="110"
        name="description"
        id="description"
        accept="image"
        value={Code!=="undefined"?Code:""}
         onChange={(e) => setCode(e.target.value)}
      >
      </textarea>
      <label htmlFor="role">Time complexity(mention if the qustion is coding relatd) :</label>
      <input
        type="text"
        name="role"
        id="role"
        value={TimC!=="undefined"?TimC:""}
        onChange={(e) => setTimC(e.target.value)}
      />
      <label htmlFor="role">Space complexity(mention if the qustion is coding relatd) :</label>
      <input
        type="text"
        name="role"
        id="role"
        value={SpaceC!=="undefined"?SpaceC:""}
        onChange={(e) => setSpaceC(e.target.value)}
      />
      <label htmlFor="role">Experince(during the inteview or working experince during internship) :</label>
      <textarea
        rows="8"
        cols="110"
        name="description"
        id="description"
        value={Experince!=="undefined"?Experince:""}
        accept="image"
         onChange={(e) => setExperince(e.target.value)}
      >
      </textarea>
      <img className="imageUpload" src="" alt="" />
      <button className="btnn" onClick={handleSubmit}>
        Update
      </button>
    </div>
  )
}

export default PostUpdate