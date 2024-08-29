import { useInfiniteQuery } from "@tanstack/vue-query";
import { categorizeDataByGenre, mutateShowToData, sortDataByRating } from "~/utils";
import type {Data, DataCategorized, SearchedShow, Show} from "~/types";
import type { NuxtError } from "#app";

interface ShowsList {
  data: ComputedRef<Data | DataCategorized>;
  loading: Ref<boolean>;
  error: Ref<NuxtError | Error | null>;
}

const itemsPerPage = 250;

export function useShowsList({ categorized }: { categorized?: boolean }): ShowsList {
  const { data: apiData, pending: loading, error } = useTvmazeData<Show[] | null>("/shows");

  const data = computed(() => {
    if (!apiData.value) return [];

    const data =  sortDataByRating(mutateShowToData(apiData.value));

    if(categorized) {
      return categorizeDataByGenre(data)
    }

    return data
  });

  return {
    data,
    loading,
    error
  }
}

export function useShowsSearchList({ searchQuery }: { searchQuery: string }): ShowsList {
  const {
    data: apiData,
    pending: loading,
    error,
  } = useTvmazeData<SearchedShow[] | null>(`/search/shows?q=${searchQuery}`);

  const data = computed(() => {
    if (!apiData.value) return [];
    const shows = apiData.value.map((show) => show.show);

    return sortDataByRating(mutateShowToData(shows));
  });

  return {
    data,
    loading,
    error
  }
}

/************************ TODO: PAGED COMPOSABLES *********************/

/**
 * Fetches a list of TV shows
 * Uses the `useInfiniteQuery` hook to fetch the data
 * Paginates the data by 250 items per page
 */
export function usePagedShowsList() {
  return useInfiniteQuery({
    queryKey: ["tv-shows", "tv-shows-list"],
    queryFn: () => $tvmaze<Show[]>(`shows`),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < itemsPerPage) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    initialPageParam: 1,
  });
}
