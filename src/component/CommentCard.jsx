import React, { useState } from "react";
import { motion } from "framer-motion";

const CommentCard = ({ comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 100; // Panjang maksimum sebelum menampilkan "selengkapnya"

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 
                      shadow-xl rounded-2xl p-4 space-y-2"
    >
      <h4 className="font-bold text-rose-100 font-playfair">{comment.name}</h4>
      <p className="text-sm text-rose-200">Status Kehadiran : {comment.address}</p>
      <p className="font-playfair text-sm text-white break-all">
        {isExpanded || comment.message.length <= MAX_LENGTH
          ? comment.message
          : `${comment.message.substring(0, MAX_LENGTH)}...`}
        {comment.message.length > MAX_LENGTH && (
          <span
            onClick={toggleExpand}
            className=" cursor-pointer ml-2 hover:underline text-rose-100"
          >
            {isExpanded ? "Tampilkan sedikit" : "Selengkapnya"}
          </span>
        )}
      </p>
      <p className="text-xs text-gray-200">
        {new Date(comment.timestamp.toDate()).toLocaleString()}
      </p>
    </motion.div>
  );
};

export default CommentCard;
