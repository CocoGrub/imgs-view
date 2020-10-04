import React, { useState, useEffect } from "react";
import "./card.css";
import { fetchUserName,fetchPhoto } from "../api/api";
const Card = ({ photo }) => {
  const { id, title, count_faves, owner} = photo;
  const [profile, setProfile] = useState("");
  const [galleryPhoto,setGalleryPhoto]=useState('')
  useEffect(() => {
    fetchUserName(owner).then((res) => {
      setProfile(res.profile);
    });
  }, [owner]);
  useEffect(()=>{
    fetchPhoto(id).then((res)=>{
      setGalleryPhoto(res.sizes.size[4].source)
    })
  },[id])
  const formattedDate=function (min, max) {
      let randomNum = Math.random() * (max - min) + min;
      return Math.floor(randomNum);
  }

  const {country}=profile
  const formattedCountry= (country + "").slice(0, 15);


  return( <div className="card">
            <div className={"head"}>
            <div className={"person-info"}>
              <img src={`http://farm9.staticflickr.com/8573/buddyicons/${owner}.jpg`} alt={'buddy'}/>
              <div className={"name-place"}>
                <b>{profile.first_name}</b>
                <i>{formattedCountry}</i>
              </div>
            </div>

              <div>
                  {formattedDate(1,24)}h
              </div>
            </div>
          <div className={'main-image'}>
            <img src={galleryPhoto} alt={'main'}/>
          </div>

          <div className={"bottom"}>
          <span ><i className="far fa-heart" onClick={()=>{
              alert(id)
          }}> &nbsp;</i>{count_faves}</span>
            <br/>
          <span>{title}</span>
          </div>
          </div>);
};
export default Card;
