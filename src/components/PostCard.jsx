import React, { useState } from "react";
import appwriteService from "../appwrite/DB_config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  // console.log(typeof featuredImage);
  const [loaded, setLoaded] = useState(false);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {!loaded && (
            <img
              src={`${appwriteService.previewFile(featuredImage)}?blur=true`}
              alt={title}
              style={{
                filter: "blur(10px)",
              }}
              className="rounded-xl"
            />
          )}
          <img
            src={appwriteService.previewFile(featuredImage)}
            alt={title}
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 1.5s" }}
            onLoad={() => setLoaded(true)}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
