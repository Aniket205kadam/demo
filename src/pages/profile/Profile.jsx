import React from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";
import Loading from "../../components/icons/Loading";
import PostCard from "../../components/post/PostCard";
import More from "../../components/exp/MoreOptions";

function Profile() {
  const { username } = useParams();

  const post = {
    id: "101",
    caption:
      "Golden hour vibes at the beach! 🌅✨ Nothing beats the sound of waves crashing and the sky painted in shades of orange and pink. Pure serenity! 🌊💛 #SunsetLover #BeachVibes #GoldenHour #NatureAtItsBest #Wanderlust",
    user: {
      id: "",
      username: "its_herry",
      profileUrl:
        "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    liked: true,
    likesCount: 23,
    commentsCount: 10,
    createdAt: "2025-02-11T18:30:00Z",
    location: "Miami Beach, FL",
    collaborators: ["emma_smith", "david_brown"],
    hideLikesAndViewCounts: false,
    allowComments: true,
    postMedia: [
      {
        id: "201",
        postId: "101",
        mediaUrl:
          "https://images.pexels.com/photos/30553412/pexels-photo-30553412/free-photo-of-vibrant-red-lanterns-in-urban-street-scene.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        type: "image",
        altText:
          "A beautiful sunset at the beach with orange and pink hues in the sky",
      },
      {
        id: "202",
        postId: "101",
        mediaUrl:
          "https://videos.pexels.com/video-files/2519660/2519660-sd_640_360_24fps.mp4",
        type: "video",
        altText: "Waves gently hitting the shore while the sun sets",
      },
    ],
  };

  return (
    <>
      <div className="profile">Profile: {username}</div>
      {/* <Loading /> */}
      {/* <PostCard post={post} /> */}
      <More />
    </>
  );
}

export default Profile;
