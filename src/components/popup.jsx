import React from "react";

function Popup() {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center h-screen bg-white w-full">
      <div className="h-96 w-96 overflow-hidden bg-slate-300 rounded-lg shadow-2xl">
        <img
          src="https://scontent.fkbl6-1.fna.fbcdn.net/v/t1.6435-9/50119421_2198318216887361_7020006440517500928_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3v0eyvlV_WgAX8y7YH_&_nc_ht=scontent.fkbl6-1.fna&oh=00_AfCnxrUCjqE-5r6m-iwdoGx8jj20OxJuiLk0bDPxboCYTQ&oe=661162DB"
          alt=""
        />
      </div>
    </div>
  );
}

export default Popup;
