import React from "react";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-2 my-4">
      <input
        type="text"
        placeholder="Filtro"
        className="border p-2 rounded w-full"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default PostFilter;
