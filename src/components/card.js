import React, { useState, useEffect } from "react";
import "./card.css";
import { fetchUserName } from "../api/api";
const Card = ({ photo }) => {
  const { id, title, count_faves, owner } = photo;
  // const riggedTitle = title.length > 20 ? title.slice(0, 20) + "..." : title;
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetchUserName(owner).then((res) => {
      setProfile(res.profile);
    });
  }, []);
  const country = (profile.country + "").slice(0, 15);
  console.log(profile.country);
  return <div className="card"></div>;
};
export default Card;
