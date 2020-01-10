import { FiberRoot } from "react-reconciler"
import VNode from "./VNode"

export default class Container {
  _rootContainer: FiberRoot
  node: VNode
  commiting: boolean = false
  updater?: (root: VNode) => void

  constructor(updater?: (root: VNode) => void) {
    this.node = new VNode("normal", "root", this, undefined)
    this.node.mounted = true
    this.updater = updater
  }

  // 触发更新
  update() {
    if (this.commiting) {
      return
    }
    this.commiting = true
    setTimeout(this.applyUpdate)
  }

  applyUpdate = () => {
    this.commiting = false
    if (this.updater) {
      this.updater(this.node)
    }
  }
}
