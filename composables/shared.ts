/**
 * Give an accurate loading state after the api data has been handled
 * @param data
 * @param pending
 */
export function useLoadingState<TData>(data: Ref<TData>, pending: Ref<boolean>) {
  return computed(() => {
    if (data.value && !pending.value) {
      return pending.value
    }

    return true
  })
}
