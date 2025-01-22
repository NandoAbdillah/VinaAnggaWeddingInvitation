import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import CommentCard from "./CommentCard";
import { FaCopy, FaInstagram } from "react-icons/fa";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // Jumlah komentar yang terlihat

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComments(data);
    });

    return () => unsubscribe();
  }, []);


  
  // Menambah jumlah komentar yang ditampilkan
  const showMoreComments = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <>
      <div className="space-y-4 h-auto overflow-auto">
        {comments.slice(0, visibleCount).map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}

        

        {visibleCount < comments.length && (
          <>
            <button
              onClick={showMoreComments}
              className="w-full bg-rose-500 text-white px-4 py-2 rounded-lg font-lobstertwo"
            >
              Tampilkan Lebih Banyak
            </button>

            <button
              
              className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition duration-300 font-lobstertwo"
            >
              Kirim Kado
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center py-4  text-gray-600">
        <p className="text-sm font-montserrat">
          Dibuat oleh{" "}
          <a
            href="https://www.instagram.com/nndo_abd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 hover:text-rose-600 flex items-center justify-center gap-2"
          >
             <FaInstagram /> nndo_abd
          </a>
        </p>
      </footer>
    </>
  );
};

export default CommentList;
