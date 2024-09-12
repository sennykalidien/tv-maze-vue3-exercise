import type { NuxtError } from "#app";
import type { Data, Show } from "~/types";
import { mutateShowToData } from "~/utils";
import {useLoadingState} from "./shared";

interface ShowDetail<TData> {
  data: Ref<TData | null>;
  loading: Ref<boolean>;
  error: Ref<NuxtError | Error | null>;
}

export function useShowDetail({ showId }: { showId: string }): ShowDetail<Data> {
  const { data: apiData, pending, error } = useTvmazeData<Show | null>(`/shows/${showId}`);

  const data = computed(() => {
    if (!apiData.value) return null;

    return mutateShowToData(apiData.value);
  });

  const loading = useLoadingState(data, pending)

  return {
    data,
    loading,
    error
  }
}
