/**
 * Give an accurate loading state after the data has been transformed
 * @param data
 * @param pending
 */
export function getLoading<TData>(data: Ref<TData>, pending: Ref<boolean>) {
  return computed(() => {
    if (data.value && !pending.value) {
      return pending.value
    }

    return true
  })
}
