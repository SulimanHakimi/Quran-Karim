function Card(data) {
  return (
    <div className="w-72 h-24 px-5 bg-slate-100 rounded-md shadow-md flex justify-evenly items-center flex-col ">
      <div className="flex justify-between w-full">
        <span>{data.number}</span>
        <span>{data.englishName}</span>
        {data.revelationType === "Meccan" ? (
          <>
            <img
              className="w-6 h-6"
              src="https://alqurankarim.net/img/icons/makkah-img.ico"
              alt=""
            />
          </>
        ) : (
          <img
            className="w-6 h-6"
            src="https://alqurankarim.net/img/icons/madina-img.ico"
            alt=""
          />
        )}
      </div>
      <div className="">{data.name}</div>
    </div>
  );
}
export default Card;
