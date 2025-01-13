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

  const [showAlert, setShowAlert] = useState(false);

  const accountNumber = "3251808943";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening berhasil disalin!");
  };

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

        {showAlert && (
          <div className="absolute top-80 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            <div className="bg-white w-full max-w-sm mx-auto p-4 md:p-6 rounded-lg text-center mobile:mx-10 p-10">
              <h2 className="mobile:text-3xl font-semibold mb-4 font-sacramento text-red-500">
                Rekening BCA
              </h2>
              <p className="text-sm mb-6 font-montserrat text-black">
                an Vina Novita
              </p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="font-montserrat text-sm w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-5"
                  color="#000"
                  disabled
                  value={accountNumber}
                />
                <button
                  onClick={copyToClipboard}
                  className="p-3 rounded-lg bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white h-full "
                  style={{ marginTop: "-1.2rem" }}
                  title="Salin nomor rekening"
                >
                  <FaCopy />
                </button>
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setShowAlert(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg w-full sm:w-auto font-montserrat"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {visibleCount < comments.length && (
          <>
            <button
              onClick={showMoreComments}
              className="w-full bg-rose-500 text-white px-4 py-2 rounded-lg font-lobstertwo"
            >
              Tampilkan Lebih Banyak
            </button>

            <button
              onClick={() => setShowAlert(true)}
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
