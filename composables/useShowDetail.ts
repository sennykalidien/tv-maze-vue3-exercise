import type { NuxtError } from "#app";
import type {Data, Show} from "~/types";
import { mutateShowToData, sortDataByRating } from "~/utils";

interface ShowDetail {
  data: ComputedRef<Data>;
  loading: Ref<boolean>;
  error: Ref<NuxtError | Error | null>;
}

export function useShowDetail({ showId }: { showId: string }): ShowDetail {
  const { data: apiData, pending: loading, error } = useTvmazeData<Show | null>(`/shows/${showId}`);

  const data = computed(() => {
    if (!apiData.value) return [];

    return sortDataByRating(mutateShowToData([{ ...apiData.value }]));
  });

  return {
    data,
    loading,
    error
  }
}
