import React from "react";
import Cuisine from "../../interfaces/Cuisine";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../globalState/hooks";
import { navigateToFeed } from "../../../globalState/reducerActions";
import { useGetCuisinePostsQuery } from "../../../globalState/api";

function ScrollableItem(props: Cuisine) {
  const dispatch = useAppDispatch();
  return (
    <Link
      to={`/feed/${props.displayName}`}
      onClick={() =>
        dispatch(
          navigateToFeed({
            useQuery: () => useGetCuisinePostsQuery,
            header: props.displayName,
            tag: props.tag,
          })
        )
      }
    >
      <div
        className="round-img"
        style={{
          position: "relative",
          display: "inline-block",
          textAlign: "center",
          wordWrap: "break-word",
          padding: "0.5em",
        }}
      >
        <img
          src={props.iconImage}
          alt="img"
          className="scrollable-item rounded-circle"
        />
        <span className="text-image">{props.displayName}</span>
      </div>
    </Link>
  );
}

export default ScrollableItem;
