import { useInfiniteQuery} from "@tanstack/vue-query";
import {categorizeDataByGenre, mutateShowsToData, sortDataByRating} from "~/utils";
import type {Data, DataCategorized, SearchedShow, Show} from "~/types";
import type {NuxtError} from "#app";
import {getLoading} from "./shared";

interface ShowsList<TData> {
  data: Ref<TData>;
  loading: Ref<boolean>;
  error: Ref<NuxtError | Error | null>;
}

interface ShowsListPaged<TData> extends ShowsList<TData> {
  hasNextPage: Ref<boolean>;
  fetchNextPage: () => void;
  fetchingNextPage: Ref<boolean>;
}

export function useShowsList(): ShowsList<Data[]> {
  const {data: apiData, pending, error} = useTvmazeData<Show[] | null>("/shows");

  const data = computed(() => {
    if (!apiData.value) return [];

    return sortDataByRating(mutateShowsToData(apiData.value));
  });

  const loading = getLoading(data, pending)

  return {
    data,
    loading,
    error
  }
}

export function useShowsCategorizedList(): ShowsList<DataCategorized[]> {
  const {data: apiData, pending, error} = useTvmazeData<Show[] | null>("/shows");

  const data = computed(() => {
    if (!apiData.value) return [];

    return categorizeDataByGenre(sortDataByRating(mutateShowsToData(apiData.value)))
  });

  const loading = getLoading(data, pending)

  return {
    data,
    loading,
    error
  }
}

export function useShowsSearchedList({searchQuery}: { searchQuery: string }): ShowsList<Data[]> {
  const {
    data: apiData,
    pending,
    error,
  } = useTvmazeData<SearchedShow[] | null>(`/search/shows?q=${searchQuery}`);

  const data = computed(() => {
    if (!apiData.value) return [];

    const shows = apiData.value.map((show) => show.show);

    return sortDataByRating(mutateShowsToData(shows));
  });

  const loading = getLoading(data, pending)

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
export function useShowsListPaged(): ShowsListPaged<Data[]> {
  const { data: apiData, error, isLoading: pending, isFetchingNextPage, hasNextPage, fetchNextPage, } =  useInfiniteQuery({
    queryKey: ["tv-shows", "tv-shows-list"],
    queryFn: ({ pageParam = 1 }) => $tvmaze<Show[]>(`shows?page=${pageParam}`),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < 240) return undefined;
      return lastPageParam + 1;
    },
    initialPageParam: 1,
  });

  const data = computed<Data[]>((oldValue) => {
    if (!apiData.value) return [];

    const oldData: Data[] = oldValue?.length ? oldValue : []
    const lastPage = apiData.value.pages.length
    const newData = apiData.value.pages
      // Only mutate the last page
      .filter((page, index) => lastPage === index + 1 && page)
      .flatMap((page) => mutateShowsToData(page))

    return sortDataByRating([...oldData, ...newData])
  })

  const loading = getLoading(data, pending)
  const fetchingNextPage = getLoading(data, isFetchingNextPage)

  return {
    data,
    loading,
    error,
    hasNextPage,
    fetchNextPage,
    fetchingNextPage
  }

}
