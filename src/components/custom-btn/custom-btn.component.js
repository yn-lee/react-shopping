import React from "react";

import "./custom-btn.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherPops }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-btn`}
    {...otherPops}
  >
    {children}
  </button>
);

export default CustomButton;
