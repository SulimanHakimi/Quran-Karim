import React from "react";

function Footer() {
  return (
    <div className="md:h-32 h-24 bg-slate-700 flex justify-center items-center w-full text-white font-semibold">
      &copy; Suliman Hakimi {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
