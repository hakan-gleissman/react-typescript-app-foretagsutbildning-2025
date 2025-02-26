import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <button className="btn btn-outline-primary" onClick={handleLike}>
      <FaHeart /> {likes}
    </button>
  );
};

export default LikeButton;
