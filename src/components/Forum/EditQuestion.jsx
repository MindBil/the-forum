import { useState } from "react";

function EditQuestion({ question, onSave, onCancel }) {
  const [editedQuestion, setEditedQuestion] = useState({ ...question });

  const handleTitleChange = (e) => {
    setEditedQuestion({ ...editedQuestion, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setEditedQuestion({ ...editedQuestion, body: e.target.value });
  };

  const handleSave = () => {
    onSave(editedQuestion);
  };

  return (
    <div>
      <label>Title:</label>
      <input
        type="text"
        value={editedQuestion.title}
        onChange={handleTitleChange}
      />
      <label>Body:</label>
      <textarea value={editedQuestion.body} onChange={handleBodyChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditQuestion;
