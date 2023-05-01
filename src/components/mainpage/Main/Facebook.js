import React, { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

export default function Facebook() {
  const buttonStyle = {
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    width: "240px",
  };

  const [profile, setProfile] = useState(null);

  return (
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="222144283669296"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton style={buttonStyle} />
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div>
          <h3>{profile.name}</h3>
          <img alt="profile" src={profile.picture.data.url} />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
