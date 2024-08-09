import React from "react";

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <>
      <div className="form-control">
        <label className="form-control ">
          <span className="label-text">{label}</span>
        </label>
        <input
          className="input input-bordered w-full max-w-xs"
          type={type}
          name={name}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export default FormInput;
