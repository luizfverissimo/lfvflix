import React from "react";

const FormField = ({ label, value, onChange, type, name, textArea }) => {
  return (
    <div>
      <label>
        {label}
        {textArea ? (
          <textarea type={type} name={name} value={value} onChange={onChange} />
        ) : (
          <input type={type} name={name} value={value} onChange={onChange} />
        )}
      </label>
    </div>
  );
};

export default FormField;
