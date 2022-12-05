import React from "react";
import "../../../styles/card.css";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import { useAppDispatch } from "../../../globalState/hooks";
import DetailedPage from "../../interfaces/DetailedPage";
import { navigateToDetailedPage } from "../../../globalState/reducerActions";

function FoodCardScrollable(props: DetailedPage) {
  const dispatch = useAppDispatch();
  return (
    <Link
      to={`/recipe/${props.id}`}
      onClick={() =>
        dispatch(
          navigateToDetailedPage({
            id: props.id,
            urlImage: props.urlImage,
            title: props.title,
            author: props.author,
            averageRating: props.averageRating,
            totalReviewCount: props.totalReviewCount,
            preparationTimeSeconds: props.preparationTimeSeconds,
            ingridients: props.ingridients,
            steps: props.steps,
            calories: props.calories,
          })
        )
      }
    >
      <div
        className="card custom-card"
        style={{
          width: "18rem",
          margin: "1.5rem 0.6rem",
          padding: "0",
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <img
          src={props.urlImage}
          className="card-img-top"
          alt="img"
          style={{ height: "250px" }}
        />
        <div className="card-body" style={{ whiteSpace: "normal" }}>
          <h5
            className="card-title"
            style={{ height: "3rem", fontSize: "1rem" }}
          >
            {props.title}
          </h5>
          <Rating
            averageRating={props.averageRating ?? 0}
            totalReviewCount={props.totalReviewCount ?? 0}
          />
        </div>
      </div>
    </Link>
  );
}

export default FoodCardScrollable;
