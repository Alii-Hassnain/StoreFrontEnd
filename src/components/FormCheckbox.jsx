import React from "react";

const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor={name} className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" defaultChecked className={`checkbox ${size}`} />
        </label>
      </div>
    </div>
  );
};

export default FormCheckbox;
