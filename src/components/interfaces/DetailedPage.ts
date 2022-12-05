type DetailedPage = {
    id: string,
    urlImage: string,
    title: string,
    author: string,
    averageRating: number,
    totalReviewCount: number,
    preparationTimeSeconds: number,
    ingridients: string[],
    steps: string[],
    calories: number
}
// type Nutrient = {value: string, unit: Unit}
// type Unit = {name: string}

// type Ingridient = {wholeLine: string}

export default DetailedPage
