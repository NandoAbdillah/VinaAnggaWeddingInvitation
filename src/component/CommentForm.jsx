import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";


const CommentForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Hadir");
  const [message, setMessage] = useState("");
  const [charLeft, setCharLeft] = useState(300);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return alert("Name and message are required!");
    try {
      await addDoc(collection(db, "comments"), {
        name,
        address,
        message,
        timestamp: Timestamp.now(),
      });
      setName("");
      setAddress("");
      setMessage("");
      setCharLeft(300);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

 

  return (
    <>
     
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 bg-rose-100 p-6 rounded-lg shadow-lg max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nama kamu"
          className=" font-playfair text-sm  w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          color="#000"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="font-playfair text-sm w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white text-black "
          onChange={(e) => setAddress(e.target.value)}
        >
          <option value="Hadir">Insyaallah Bisa Hadir</option>
          <option value="Tidak">Maaf Ga Bisa Hadir</option>
          <option value="Belum tau">Masih Belum Tau</option>
        </select>
        {/* <input
        type="text"
        placeholder="Address"
        className="font-playfair text-sm w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /> */}
        <textarea
          placeholder="Tulis pesan kamu di sini"
          className="font-playfair text-sm w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          maxLength={300}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setCharLeft(300 - e.target.value.length);
          }}
        />
        <p className="text-sm text-rose-600 font-playfair">
          Karakter tersisa: {charLeft}
        </p>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition duration-300 font-lobstertwo"
        >
          Kirim Pesan
        </button>
      </motion.form>
     
    </>
  );
};

export default CommentForm;
