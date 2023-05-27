import React, { useState,useEffect } from "react";
import UpdateProfile from "../services/updateProfile"
const ProfileUpdate = ({
  updateMember,
  setupdateMember,
  datasent,
  reloadReq,
  setReloadReq,
  setLoading,loading
  ,IDTOKEN,setIDTOKEN
}) => {
    // console.log(datasent.data.reqdUser.name);
    // console.log(datasent.data.reqdUser.instagram);
    const [name, setName] = useState();
    const [instagram, setinstagram] = useState();
    const [linkedin, setlinkedin] = useState();
    const [github, setgithub] = useState();
    const [facebook, setfacebook] = useState();


   useEffect(() => {
    setName(datasent.data.reqdUser.name);
    setinstagram(datasent.data.reqdUser.instagram);
    setlinkedin(datasent.data.reqdUser.linkedin);
    setgithub(datasent.data.reqdUser.github);
    setfacebook(datasent.data.reqdUser.facebook);
  }, [datasent]);

  async function handleSubmit(e) {
    // console.log(name);
    const sendForm = new FormData();
    sendForm.set("getToken",IDTOKEN);
    sendForm.set("name",name);
    sendForm.set("instagram",instagram);
    sendForm.set("linkedin",linkedin);
    sendForm.set("github",github);
    sendForm.set("facebook",facebook);
    const edPosts = await UpdateProfile(
    sendForm,
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
      <label htmlFor="name">Name :</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        accept="image"
        onChange={(e) => setName(e.target.value)}
      />
      <fieldset>
        <legend>Social Media :</legend>
        <div>
          <label htmlFor="instagram">Instagram</label>
          <input
            type="url"
            name="instagram"
            id="instagram"
            value={instagram!==null?instagram:""}
            onChange={(e) => setinstagram(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            value={linkedin!==null?linkedin:""}
            onChange={(e) => setlinkedin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
            type="url"
            name="github"
            id="github"
            value={github!==null?github:""}
            onChange={(e) => setgithub(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="facebook">Facebook</label>
          <input
            type="url"
            name="facebook"
            id="facebook"
            value={facebook!==null?facebook:""}
            onChange={(e) => setfacebook(e.target.value)}
          />
        </div>
      </fieldset>
      <img className="imageUpload" src="" alt="" />
      <button className="btnn" onClick={handleSubmit}>
        Update
      </button>
    </div>
  )
}

export default ProfileUpdate