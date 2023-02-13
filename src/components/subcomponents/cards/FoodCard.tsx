import React from "react";
import "../../../styles/card.css";
import Rating from "../Rating";
import DetailedPage from "../../interfaces/DetailedPage";
import { navigateToDetailedPage } from "../../../globalState/reducerActions";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../globalState/hooks";

function FoodCard(props: DetailedPage) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="col-lg-4 col-md-12 col-sm-12"
      style={{
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
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
          <div
            className="card-body"
            style={{ whiteSpace: "normal", height: "240px" }}
          >
            <h5
              className="card-title"
              style={{ height: "40px", fontSize: "1rem" }}
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
    </div>
  );
}

export default FoodCard;
