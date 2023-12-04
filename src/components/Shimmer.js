import React from "react";

export default function Shimmer({ count }) {
  return (
    <div className="flex flex-wrap">
      {[...Array(count)].map((ele, i) => (
        <div className="m-4 p-4 w-72 h-[350px] rounded-lg shadow-md" key={i}></div>
      ))}
    </div>
  );
}
