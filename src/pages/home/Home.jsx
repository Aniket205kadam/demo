import React from "react";
import "./Home.scss";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
function Home() {
  const post = {
    id: "101",
    caption: "Golden hour vibes at the beach! 🌅✨ Nothing beats the sound of waves crashing and the sky painted in shades of orange and pink. Pure serenity! 🌊💛 #SunsetLover #BeachVibes #GoldenHour #NatureAtItsBest #Wanderlust",
    user: {
      id: "",
      username: "its_herry",
      profileUrl: "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    liked: true,
    likes: 23,
    commentCount: 10,
    createdAt: "2025-02-11T18:30:00Z",
    location: "Miami Beach, FL",
    collaborators: ["emma_smith", "david_brown"],
    hideLikesAndViewCounts: false,
    allowComments: true,
    postMedia: [
      {
        id: "201",
        postId: "101",
        mediaUrl: "https://images.pexels.com/photos/30553412/pexels-photo-30553412/free-photo-of-vibrant-red-lanterns-in-urban-street-scene.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        type: "image",
        altText:
          "A beautiful sunset at the beach with orange and pink hues in the sky",
      },
      {
        id: "202",
        postId: "101",
        mediaUrl: "https://example.com/media/waves.mp4",
        type: "video",
        altText: "Waves gently hitting the shore while the sun sets",
      },
    ],
  };

  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}

export default Home;
