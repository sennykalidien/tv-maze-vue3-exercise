import type { Data, Show } from "~/types";

export const mutateShowToData = (show: Show): Data => {
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
}

export const mutateShowsToData = (shows: Show[]): Data[] => {
  return shows.map((show) => {
    return mutateShowToData(show);
  });
};
