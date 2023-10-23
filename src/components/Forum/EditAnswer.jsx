import { useState } from "react";

function EditAnswer({ answer, onSave, onCancel }) {
  const [editedAnswer, setEditedAnswer] = useState(answer);

  const handleAnswerChange = (e) => {
    setEditedAnswer(e.target.value);
  };

  const handleSave = () => {
    onSave(editedAnswer);
  };

  return (
    <div>
      <textarea
        value={editedAnswer}
        onChange={handleAnswerChange}
        placeholder="Edit your answer..."
      />
      <button onClick={handleSave}>Save Answer</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditAnswer;
