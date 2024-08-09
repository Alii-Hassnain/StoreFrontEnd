import React from "react";
import { useNavigation } from "react-router-dom";


const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  console.log(navigation);

  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <button className="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>
        {isSubmitting?
        <span className="loading loading-spinner loading-xs"></span>
        :
        text ||"Submit"}
      </button>
    </div>
  );
};

export default SubmitBtn;
