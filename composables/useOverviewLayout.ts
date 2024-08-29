import { OverviewLayout } from '~/types'

interface OverviewLayoutSwitch {
  overviewLayout: Ref<OverviewLayout>
  switchLayout: (val: OverviewLayout) => void
}

export function useOverviewLayoutSwitcher(): OverviewLayoutSwitch {
  const overviewLayout = ref<OverviewLayout>(OverviewLayout.Grid)

  function switchLayout(val: OverviewLayout) {
    overviewLayout.value = val
  }

  return {
    overviewLayout,
    switchLayout,
  }
}
