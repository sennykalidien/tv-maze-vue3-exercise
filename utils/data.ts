import type { Data, DataCategorized } from "~/types";

/**
 * Sort data by rating
 * @param data Data
 * @returns Data
 */
export const sortDataByRating = (data: Data[]): Data[] => {
  return data.sort((a, b) => {
    const ratingA = a.metaList.find((meta) => meta.name === "Rating")?.value;
    const ratingB = b.metaList.find((meta) => meta.name === "Rating")?.value;

    if (!ratingA || !ratingB) return 0;

    return parseFloat(ratingB) - parseFloat(ratingA);
  });
};

/**
 * Categorize data by key
 * @param data
 */
export const categorizeDataByGenre = (data: Data[]): DataCategorized[] => {
  const categorizedOverview: { [key: string]: Data[] } = {};

  data.forEach((item) => {
    const genres = item.metaList.find((meta) => meta.name === "Genres")?.value;

    if (!genres) {
      return;
    }

    // Genres from API are separated by commas
    genres.split(",").forEach((genre) => {
      genre = genre.trim();

      if (!categorizedOverview[genre]) {
        categorizedOverview[genre] = [];
      }
      categorizedOverview[genre].push(item);
    });
  });

  return Object.keys(categorizedOverview).map((genre) => ({
    [genre]: categorizedOverview[genre],
  }));
};
