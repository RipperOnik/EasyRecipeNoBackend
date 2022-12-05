import React from "react";
import FoodCard from "./FoodCard";
import DetailedPage from "../../interfaces/DetailedPage";

import { useAppDispatch, useAppSelector } from "../../../globalState/hooks";

import LoadingSpinner from "../specialCases/LoadingSpinner";

interface CardGroupProps {
  headerText: string;
  cards: DetailedPage[];
}

function CardGroup() {
  const useQuery = useAppSelector((state) => state.currentFeed.useQuery)();
  const header = useAppSelector((state) => state.currentFeed.header);
  const tag = useAppSelector((state) => state.currentFeed.tag);

  let feedPosts;

  const feedCards: DetailedPage[] = [];

  const response = useQuery(tag.length > 0 ? tag : 0);

  if (response.isSuccess) {
    feedPosts = response.data.feed;
    var ingridientsTemp: string[] = [];
    for (let i = 0; i < feedPosts.length; i++) {
      const element = feedPosts[i];

      ingridientsTemp = [];

      for (let i = 0; i < element.content.ingredientLines.length; i++) {
        ingridientsTemp.push(element.content.ingredientLines[i].wholeLine);
      }

      if (element.content.nutrition.nutritionEstimates.length > 0) {
        feedCards.push({
          id: element.content.details.id,
          title: element.display.displayName,
          averageRating: element.content.reviews.averageRating,
          totalReviewCount: element.content.reviews.totalReviewCount,
          urlImage: element.display.images[0],
          author: element.display.profiles[0].displayName,
          preparationTimeSeconds: element.content.details.totalTimeInSeconds,
          ingridients: ingridientsTemp,
          steps: element.content.preparationSteps,
          calories: element.content.nutrition.nutritionEstimates[0].value,
        });
      }
    }
  }

  if (!response.isFetching && !response.isLoading) {
    return (
      <div className="container">
        <div
          className="row d-flex justify-content-center"
          style={{ textAlign: "center" }}
        >
          <h1>{header}</h1>
          {feedCards.map((card) => {
            return (
              <FoodCard
                id={card.id}
                key={card.id}
                author={card.author}
                preparationTimeSeconds={card.preparationTimeSeconds}
                ingridients={card.ingridients}
                steps={card.steps}
                title={card.title}
                averageRating={card.averageRating ?? 0}
                totalReviewCount={card.totalReviewCount ?? 0}
                urlImage={card.urlImage}
                calories={card.calories}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <LoadingSpinner />
      </div>
    );
  }
}

export default CardGroup;
