import React, { useState, useEffect } from "react";
import "./card.css";
import { fetchUserName,fetchPhoto } from "../api/api";
const Card = ({ photo }) => {
  const { id, title, count_faves, owner,dateupload} = photo;
  const [profile, setProfile] = useState("");
  const [galleryPhoto,setGalleryPhoto]=useState('')
  useEffect(() => {
    fetchUserName(owner).then((res) => {
      setProfile(res.profile);
    });
  }, []);
  useEffect(()=>{
    fetchPhoto(id).then((res)=>{
      setGalleryPhoto(res.sizes.size[4].source)
    })
  },[])
  const formattedDate=new Date(dateupload)
  const {country,first_name}=profile
  const formattedCountry= (country + "").slice(0, 15);
  console.log(dateupload);

  return( <div className="card">
            <div className={"head"}>
            <div className={"person-info"}>
              <img src={`http://farm9.staticflickr.com/8573/buddyicons/${owner}.jpg`}/>
              <div className={"name-place"}>
                <b>{profile.first_name}</b>
                <i>{formattedCountry}</i>
              </div>
            </div>

              <div>
                2h
              </div>
            </div>
          <div className={'main-image'}>
            <img src={galleryPhoto}/>
          </div>

          <div className={"bottom"}>
          <span>{count_faves}</span>
            <br/>
          <span>{title}</span>
          </div>
          </div>);
};
export default Card;
