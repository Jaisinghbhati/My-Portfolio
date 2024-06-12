import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import {motion} from 'framer-motion'

const StickyNote = ({ id, title, onDelete,reference }) => {
  const [noteTitle, setNoteTitle] = useState(title);

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <motion.div drag dragConstraints={reference} className="relative w-64 h-64 bg-[#c084fc] rounded-[28px] shadow-md mb-4 lg:w-80 lg:h-80 sm:w-56 sm:h-56 p-4 mr-4 mt-9">
      <div className="flex items-center justify-between bg-[#a855f7] text-black rounded-t-lg px-4 py-2 border-b-1.5 border-[#334155] ">
        <input
          type="text"
          value={noteTitle}
          onChange={handleTitleChange}
          className="w-full bg-transparent text-[#1e293b] border-none focus:outline-none placeholder-gray-500"
          placeholder="Title"
        />
        <button className="focus:outline-none" onClick={handleDelete}>
          <FaTimes className="text-white" />
        </button>
      </div>
      <div className="overflow-hidden h-full p-4 pt-4 bg-transparent">
        <textarea
          className="w-full h-full bg-transparent text-black focus:outline-0   resize-none  "
          style={{ overflowY: 'hidden', resize: 'none' }}
          placeholder= "Write your note here..."
          maxLength={55}
        ></textarea>
      </div>
    </motion.div>
  );
};

export default StickyNote;
