import React from "react";
import { useLocation } from "react-router";

export default function NotFound404Page() {
    const currentLocation = useLocation();
  return (
    <div style={{width: '100%', height: '100vh',display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      <img
        src={process.env.PUBLIC_URL + "/assets/images/_404.jpg"}
        style={{ width: "40%", objectFit: "cover" }}
        alt="404 Url not found..."
      />
      <h2>{`Location "${currentLocation.pathname}" not found...`}</h2>
    </div>
  );
}


