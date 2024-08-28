import { OverviewLayout } from '~/types'

interface OverviewLayoutSwitch {
  overviewLayout: Ref<OverviewLayout>
  handleOverviewLayoutSwitch: (val: OverviewLayout) => void
}

export function useOverviewLayoutSwitcher(): OverviewLayoutSwitch {
  const overviewLayout = ref<OverviewLayout>(OverviewLayout.Grid)

  function handleOverviewLayoutSwitch(val: OverviewLayout) {
    overviewLayout.value = val
  }

  return {
    overviewLayout,
    handleOverviewLayoutSwitch,
  }
}
