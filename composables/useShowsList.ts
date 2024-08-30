import {useInfiniteQuery} from "@tanstack/vue-query";
import {categorizeDataByGenre, mutateShowToData, sortDataByRating} from "~/utils";
import type {Data, DataCategorized, SearchedShow, Show} from "~/types";
import type {NuxtError} from "#app";

interface ShowsList<TData> {
  data: Ref<TData>;
  loading: Ref<boolean>;
  error: Ref<NuxtError | Error | null>;
}

/**
 * Give an accurate loading state after the data has been transformed
 * @param data
 * @param pending
 */
function _getLoading<TData>(data: Ref<TData[]>, pending: Ref<boolean>) {
  return computed(() => {
    if (data.value.length > 0 && !pending.value) {
      return pending.value
    }

    return true
  })
}

export function useShowsList(): ShowsList<Data> {
  const { data: apiData, pending, error } = useTvmazeData<Show[] | null>("/shows");

  const data = computed(() => {
    if (!apiData.value) return [];

    return sortDataByRating(mutateShowToData(apiData.value));
  });

  const loading = _getLoading(data, pending)

  return {
    data,
    loading,
    error
  }
}

export function useShowsCategorizedList(): ShowsList<DataCategorized> {
  const { data: apiData, pending, error } = useTvmazeData<Show[] | null>("/shows");

  const data = computed(() => {
    if (!apiData.value) return [];

    return categorizeDataByGenre(sortDataByRating(mutateShowToData(apiData.value)))
  });

  const loading = _getLoading(data, pending)

  return {
    data,
    loading,
    error
  }
}

export function useShowsSearchedList({ searchQuery }: { searchQuery: string }): ShowsList<Data> {
  const {
    data: apiData,
    pending,
    error,
  } = useTvmazeData<SearchedShow[] | null>(`/search/shows?q=${searchQuery}`);

  const data = computed(() => {
    if (!apiData.value) return [];
    const shows = apiData.value.map((show) => show.show);

    return sortDataByRating(mutateShowToData(shows));
  });

  const loading = _getLoading(data, pending)

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
      if (lastPage.length < 250) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    initialPageParam: 1,
  });
}
