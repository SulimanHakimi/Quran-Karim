import React from "react";

function Footer() {
  return (
    <div className="h-40 bg-slate-700 flex justify-center items-center w-full text-white font-semibold">
      &copy; Suliman Hakimi {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
