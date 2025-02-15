import React, { useEffect, useState } from "react";
import PostCard from "../../components/post/PostCard";
import "./Explore.scss";
import Loading from "../../components/icons/Loading";

function Explore() {
  const feakPosts = [
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
      likesCount: 23,
      commentsCount: 10,
      createdAt: "2025-02-11T18:30:00Z",
      location: "Miami Beach, FL",
      collaborators: ["emma_smith", "david_brown"],
      hideLikesAndViewCounts: false,
      allowComments: false,
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
    },
    {
      id: "102",
      caption:
        "Hiking through the mountains was an unforgettable experience! ⛰️🎭 The view from the top was absolutely breathtaking. Who else loves adventures like this? #HikingAdventures #NatureLover #MountainViews",
      user: {
        id: "",
        username: "adventure_joe",
        profileUrl:
          "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: false,
      likesCount: 45,
      commentsCount: 20,
      createdAt: "2025-02-12T10:15:00Z",
      location: "Rocky Mountains, CO",
      collaborators: [],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "203",
          postId: "102",
          mediaUrl:
            "https://images.pexels.com/photos/289347/pexels-photo-289347.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "image",
          altText: "A scenic mountain landscape with a clear blue sky",
        },
        {
          id: "204",
          postId: "102",
          mediaUrl:
            "https://images.pexels.com/photos/289347/pexels-photo-289347.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "image",
          altText: "A scenic mountain landscape with a clear blue sky",
        },
        {
          id: "205",
          postId: "102",
          mediaUrl:
            "https://images.pexels.com/photos/289347/pexels-photo-289347.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "image",
          altText: "A scenic mountain landscape with a clear blue sky",
        },
        {
          id: "206",
          postId: "102",
          mediaUrl:
            "https://images.pexels.com/photos/289347/pexels-photo-289347.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "image",
          altText: "A scenic mountain landscape with a clear blue sky",
        },
      ],
    },
    {
      id: "103",
      caption:
        "Sunday brunch with my favorite people! 🍔🍞 Nothing beats good food and great company. What’s your go-to brunch meal? #Foodie #BrunchTime #WeekendVibes",
      user: {
        id: "",
        username: "foodie_anna",
        profileUrl:
          "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: true,
      likesCount: 67,
      commentsCount: 15,
      createdAt: "2025-02-10T09:00:00Z",
      location: "New York City, NY",
      collaborators: ["john_doe"],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "204",
          postId: "103",
          mediaUrl:
            "https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "image",
          altText:
            "A delicious spread of pancakes, croissants, and fresh fruits",
        },
      ],
    },
    {
      id: "104",
      caption:
        "Late-night coding session fueled by coffee and determination! ☕️💻 Debugging never felt so rewarding. What’s your best coding hack? #CodingLife #Programmer #NightOwl",
      user: {
        id: "",
        username: "code_master",
        profileUrl:
          "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: true,
      likesCount: 89,
      commentsCount: 30,
      createdAt: "2025-02-09T23:45:00Z",
      location: "San Francisco, CA",
      collaborators: [],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "205",
          postId: "104",
          mediaUrl:
            "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "image",
          altText:
            "A laptop screen displaying lines of code with a cup of coffee nearby",
        },
      ],
    },
    {
      id: "105",
      caption:
        "Late-night coding session fueled by coffee and determination! ☕️💻 Debugging never felt so rewarding. What’s your best coding hack? #CodingLife #Programmer #NightOwl",
      user: {
        id: "",
        username: "code_master",
        profileUrl:
          "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: true,
      likesCount: 89,
      commentsCount: 30,
      createdAt: "2025-02-09T23:45:00Z",
      location: "San Francisco, CA",
      collaborators: [],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "205",
          postId: "104",
          mediaUrl:
            "https://videos.pexels.com/video-files/16455384/16455384-hd_1080_1920_60fps.mp4",
          type: "video",
          thumbnailUrl:
            "https://images.pexels.com/videos/16455384/birtday-present-birth-birthday-girl-16455384.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          altText:
            "A laptop screen displaying lines of code with a cup of coffee nearby",
        },
      ],
    },
    {
      id: "106",
      caption:
        "Late-night coding session fueled by coffee and determination! ☕️💻 Debugging never felt so rewarding. What’s your best coding hack? #CodingLife #Programmer #NightOwl",
      user: {
        id: "",
        username: "code_master",
        profileUrl:
          "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: true,
      likesCount: 89,
      commentsCount: 30,
      createdAt: "2025-02-09T23:45:00Z",
      location: "San Francisco, CA",
      collaborators: [],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "205",
          postId: "104",
          mediaUrl:
            "https://videos.pexels.com/video-files/30627970/13111089_1440_2560_25fps.mp4",
          type: "video",
          thumbnailUrl:
            "https://images.pexels.com/videos/30627970/pizza-pizza-slice-pizzas-rene-sourdough-30627970.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          altText:
            "A laptop screen displaying lines of code with a cup of coffee nearby",
        },
      ],
    },
    {
      id: "107",
      caption:
        "Late-night coding session fueled by coffee and determination! ☕️💻 Debugging never felt so rewarding. What’s your best coding hack? #CodingLife #Programmer #NightOwl",
      user: {
        id: "",
        username: "code_master",
        profileUrl:
          "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: true,
      likesCount: 89,
      commentsCount: 30,
      createdAt: "2025-02-09T23:45:00Z",
      location: "San Francisco, CA",
      collaborators: [],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "205",
          postId: "104",
          mediaUrl:
            "https://images.pexels.com/photos/30594080/pexels-photo-30594080/free-photo-of-playful-cat-relaxing-on-sunlit-rocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          type: "image",
          altText:
            "A laptop screen displaying lines of code with a cup of coffee nearby",
        },
      ],
    },
    {
      id: "108",
      caption:
        "Late-night coding session fueled by coffee and determination! ☕️💻 Debugging never felt so rewarding. What’s your best coding hack? #CodingLife #Programmer #NightOwl",
      user: {
        id: "",
        username: "code_master",
        profileUrl:
          "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: true,
      likesCount: 89,
      commentsCount: 30,
      createdAt: "2025-02-09T23:45:00Z",
      location: "San Francisco, CA",
      collaborators: [],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "205",
          postId: "104",
          mediaUrl:
            "https://images.pexels.com/photos/30681878/pexels-photo-30681878/free-photo-of-glamour-portrait-of-a-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          type: "image",
          altText:
            "A laptop screen displaying lines of code with a cup of coffee nearby",
        },
      ],
    },
    {
      id: "109",
      caption:
        "Late-night coding session fueled by coffee and determination! ☕️💻 Debugging never felt so rewarding. What’s your best coding hack? #CodingLife #Programmer #NightOwl",
      user: {
        id: "",
        username: "code_master",
        profileUrl:
          "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      liked: true,
      likesCount: 89,
      commentsCount: 30,
      createdAt: "2025-02-09T23:45:00Z",
      location: "San Francisco, CA",
      collaborators: [],
      hideLikesAndViewCounts: false,
      allowComments: true,
      postMedia: [
        {
          id: "205",
          postId: "104",
          mediaUrl:
            "https://images.pexels.com/photos/30699397/pexels-photo-30699397/free-photo-of-vibrant-rose-blossoms-in-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          type: "image",
          altText:
            "A laptop screen displaying lines of code with a cup of coffee nearby",
        },
      ],
    },
  ];
  const totalPages = 2;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [posts, setPosts] = useState(feakPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      await delay(2000);
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    // here get the data from server and into posts
    console.log("Current page is: " + page);
    if (page === totalPages) {
      //TODO: here we want to top the infinite scroll so what can do
    }
    setPosts(prevPosts => [...prevPosts, ...feakPosts]);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      {loading && <Loading top={80} />}
    </div>
  );
}

export default Explore;
