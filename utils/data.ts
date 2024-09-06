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
 * Categorize data metalist item value by key
 * @param data
 * @param key
 */
export const categorizeDataByMetaItemKey = (data: Data[], key: string): DataCategorized[] => {
  const categorizedOverview: { [key: string]: Data[] } = {};

  data.forEach((item) => {
    const metaKeyItems = item.metaList.find((meta) => meta.name === key)?.value;

    if (!metaKeyItems) {
      return;
    }

    metaKeyItems.split(",").forEach((metaKeyitem) => {
      metaKeyitem = metaKeyitem.trim();

      if (!categorizedOverview[metaKeyitem]) {
        categorizedOverview[metaKeyitem] = [];
      }

      categorizedOverview[metaKeyitem].push(item);
    });
  });

  return Object.keys(categorizedOverview).map((genre) => ({
    [genre]: categorizedOverview[genre],
  }));
};

/**
 * Categorize data by genre
 * @param data
 */
export const categorizeDataByGenre = (data: Data[]): DataCategorized[] => {
  return categorizeDataByMetaItemKey(data, "Genres");
}
