import { useState } from "react";

function AnswerForm({ value, onChange, onSubmit }) {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Enter your answer..."
      />
    </div>
  );
}

export default AnswerForm;
