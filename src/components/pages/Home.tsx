import React from "react";
import Scrollable from "../subcomponents/scrollable/Scrollable";
import CardGroupScrollable from "../subcomponents/cards/CardGroupScrollable";
import {
  useGetPopularPostsQuery,
  useGetTrendingPostsQuery,
} from "../../globalState/api";
import LoadingSpinner from "../subcomponents/specialCases/LoadingSpinner";
import DetailedPage from "../interfaces/DetailedPage";


function Home() {
  let popularPosts;
  let trendingPosts;

  const popularCards: DetailedPage[] = [];
  const trendingCards: DetailedPage[] = [];

  const responsePopular = useGetPopularPostsQuery(0);
  const responseTrending = useGetTrendingPostsQuery(0);

  if (responsePopular.isSuccess) {
    popularPosts = responsePopular.data.feed;
    var ingridientsTemp: string[] = []
    for (let i = 0; i < popularPosts.length / 2; i++) {
      const element = popularPosts[i];

      ingridientsTemp = []

      for (let i = 0; i < element.content.ingredientLines.length; i++) {
        ingridientsTemp.push(element.content.ingredientLines[i].wholeLine)
      }

      if (element.content.nutrition.nutritionEstimates.length > 0) {
        popularCards.push({
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
  if (responseTrending.isSuccess) {
    trendingPosts = responseTrending.data.feed;
    var ingridientsTemp: string[] = []
    for (let i = 0; i < trendingPosts.length / 2; i++) {
      const element = trendingPosts[i];

      ingridientsTemp = []

      for (let i = 0; i < element.content.ingredientLines.length; i++) {
        ingridientsTemp.push(element.content.ingredientLines[i].wholeLine)
      }

      if (element.content.nutrition.nutritionEstimates.length > 0) {
        trendingCards.push({
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

  return (
    <div className="my-feed-main">
      <h1>Choose your favorite cuisine</h1>
      <Scrollable />
      {responsePopular.isSuccess && responseTrending.isSuccess ? (
        <div>
          <CardGroupScrollable headerText="Popular" cards={popularCards} useQuery={useGetPopularPostsQuery} tag=""/>
          <CardGroupScrollable headerText="Trending" cards={trendingCards} useQuery={useGetTrendingPostsQuery} tag=""/>
        </div>
      ) : (
        <LoadingSpinner />
      )}
      {responsePopular.isError && <p>{responsePopular.error.toString()}</p>}
    </div>
  );
}

export default Home;
