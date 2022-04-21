import React from 'react';
import UpdateModal from '../updateModal/UpdateModal';

const NoteCard = ({ note, handleDelete, handleUpdate }) => {
  return (
    <div className="col ">
      <div className=" h-100 color-060930 note-card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Author : {note.user_name}</h5>
          <p className="card-text">{note.data}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div>
            <button
              className="color-801336 btn btn-sm mx-2"
              onClick={() => handleDelete(note._id)}
            >
              delete
            </button>
          </div>
          {/* <button>update</button> */}
          <UpdateModal handleUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;