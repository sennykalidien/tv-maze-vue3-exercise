import type { CategorizedOverview, OverviewItem, Show } from "~/types";

export const mutateData = (apiData: Show[]): OverviewItem[] => {
  return apiData.map((show) => {
    return {
      id: show.id,
      title: show.name,
      url: `/shows/${show.id}`,
      image: show.image?.medium,
      metaList: [
        {
          name: "Genres",
          value: show.genres.join(", "),
        },
        {
          name: "Language",
          value: show.language,
        },
        {
          name: "Rating",
          value: show.rating?.average?.toString(),
        },
        {
          name: "Status",
          value: show.status,
        },
        {
          name: "Schedule",
          value: show.schedule.days.join(", "),
        },
        {
          name: "Network",
          value: show.network?.name,
        },
      ],
    };
  });
};

/**
 * Sort data by rating
 * @param data
 */
export const sortByRating = (data: OverviewItem[]): OverviewItem[] => {
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
 * @param key
 */
export const categorizeByGenre = (data: OverviewItem[]): CategorizedOverview[] => {
  const categorizedOverview: { [key: string]: OverviewItem[] } = {};

  data.forEach((item) => {
    const genres = item.metaList.find((meta) => meta.name === "Genres")?.value;

    if (!genres) {
      return;
    }

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
