import Reconciler from "react-reconciler"

import hostConfig from "./hostConfig"
import Container from "./Container"

const customReconciler = Reconciler(hostConfig as any)

export function render(
  element: React.ReactNode,
  container: Container,
  callback: () => void,
) {
  if (container._rootContainer == null) {
    container._rootContainer = customReconciler.createContainer(
      container,
      false,
      false,
    )
  }

  return customReconciler.updateContainer(
    element,
    container._rootContainer,
    null,
    callback,
  )
}
