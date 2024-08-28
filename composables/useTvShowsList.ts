import { useInfiniteQuery } from "@tanstack/vue-query";
import type { Show } from "~/types";

const maxItemsPerPage = 250;

export default function useTvShowsList() {
  return useInfiniteQuery({
    queryKey: ["tv-shows", "tv-shows-list"],
    queryFn: () => $tvmaze<Show[]>(`shows`),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < maxItemsPerPage) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    initialPageParam: 1,
  });
}
