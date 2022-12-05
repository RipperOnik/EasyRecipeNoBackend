import React from "react";
import "../../styles/detailedPage.css";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import Rating from "../subcomponents/Rating";
import { useAppSelector } from "../../globalState/hooks";

function DetailedPage() {
  const currentPage = useAppSelector((state) => state.currentDetailedPage);

  // window.scrollTo(0, 0)

  return (
    <div>
      <div className="container detailed-head">
        <div className="row">
          <div className="col">
            <img
              className="img-detailed"
              alt="img"
              src={currentPage.urlImage}
            ></img>
          </div>
          <div className="col">
            <h1>{currentPage.title}</h1>
            <p className="author">{currentPage.author}</p>
            <Rating
              averageRating={currentPage.averageRating}
              totalReviewCount={currentPage.totalReviewCount}
            />
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col">
                <div className="row d-flex justify-content-center small-box small-box-top">
                  {currentPage.preparationTimeSeconds / 60}
                </div>
                <div className="row d-flex justify-content-center small-box">
                  Minutes
                </div>
              </div>
              <div className="col middle-box">
                <div className="row d-flex justify-content-center small-box small-box-top">
                  {currentPage.ingridients.length}
                </div>
                <div className="row d-flex justify-content-center small-box">
                  Ingridients
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center small-box small-box-top">
                  {currentPage.calories}
                </div>
                <div className="row d-flex justify-content-center small-box">
                  Calories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="recipe-hr" />
      <div className="container w-75">
        {currentPage.ingridients && (
          <div>
            <h2>Ingridients</h2>
            <ol>
              {currentPage.ingridients.map((el, index) => {
                if (el.length > 0) return <li className="my-li">{el}</li>;
                else {
                  return undefined;
                }
              })}
            </ol>
          </div>
        )}

        {currentPage.steps && (
          <div style={{ margin: "30px 0" }}>
            <h2>Preparation steps</h2>
            <ol>
              {currentPage.steps.map((step) => {
                return <li className="my-li">{step}</li>;
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailedPage;
