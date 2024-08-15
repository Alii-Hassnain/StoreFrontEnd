import React from "react";

const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <>
      <div className="form-control">
        <label className="form-control ">
          <span className="label-text">{label}</span>
        </label>
        <select
          name={name}
          id={name}
          defaultValue={defaultValue}
          className={`select select-bordered ${size}`}
        >
          {
            list.map((list) => {
              return (
                <option key={list} value={list}>
                  {list}
                </option>
              );
            })
          }

        </select>
      </div>
    </>
  );
};

export default FormSelect;

