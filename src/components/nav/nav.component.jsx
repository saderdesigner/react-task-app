import React from "react";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import "./nav.styles.scss";

const Nav = ({ currentUser }) => {
  return (
    <div className="nav-container">
      <div className="user">{currentUser && currentUser.displayName}</div>

      {Object.keys(currentUser).length === 0 ? (
        <button onClick={signInWithGoogle}>Sign In</button>
      ) : (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )}
    </div>
  );
};

export default Nav;
