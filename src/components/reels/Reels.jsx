import React from "react";
import Reel from "../reel/Reel";

function Reels() {
  const reels = [
    {
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
      likes: 23,
      commentCount: 10,
      createdAt: "2025-02-11T18:30:00Z",
      location: "Miami Beach, FL",
      collaborators: ["emma_smith", "david_brown"],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: {
        id: "201",
        postId: "101",
        mediaUrl:
          "https://videos.pexels.com/video-files/6878205/6878205-sd_506_960_25fps.mp4",
          thumbnail: "https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "video",
        altText:
          "A beautiful sunset at the beach with orange and pink hues in the sky",
      },
    },
  ];

  return (
    <div className=".reels">
      {reels.map(reel => (
        <Reels reel={reel} key={reel.id} />
      ))}
    </div>
  );
}

export default Reels;
