import React from "react";

const PostList = ({ posts, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 p-2">Nombre</th>
          <th className="border border-gray-300 p-2">Descripción</th>
          <th className="border border-gray-300 p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id} className="text-center">
            <td className="border border-gray-300 p-2">{post.name}</td>
            <td className="border border-gray-300 p-2">{post.description}</td>
            <td className="border border-gray-300 p-2">
              <button
                className="text-red-500"
                onClick={() => {
                  onDelete(post.id)

                  }
                  }
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;