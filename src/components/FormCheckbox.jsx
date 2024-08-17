import React from "react";

const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor={name} className="label cursor-pointer flex flex-col">
          <span className="label-text">{label}</span>
          <input type="checkbox" className={`checkbox ${size}`} />
        </label>
      </div>
    </div>
  );
};

export default FormCheckbox;
