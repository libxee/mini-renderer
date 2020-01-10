import Container from "./Container"
import omit from "lodash.omit"
let uid = 0

export default class VNode {
  id: number = uid++
  // 节点类型
  type: "text" | "normal" = "normal"
  mounted?: boolean = false
  name?: string
  children: VNode[] = []
  props?: any
  parent?: VNode
  // 文本节点内容
  text?: string
  container: Container

  constructor(
    type: "text" | "normal",
    name: string | undefined,
    container: Container,
    props: any | undefined,
  ) {
    this.type = type
    this.name = name
    this.container = container
    this.props = props
  }

  appendChild(child: VNode) {
    child.parent = this
    this.children.push(child)
    if (this.isMounted()) {
      this.container.update()
    }
  }

  removeChild(node: VNode) {
    const idx = this.children.indexOf(node)
    if (idx !== -1) {
      this.children.splice(idx, 1)
      if (this.isMounted()) {
        this.container.update()
      }
    }
  }

  insertBefore(newNode: VNode, referenceNode: VNode) {
    newNode.parent = this
    const idx = this.children.indexOf(referenceNode)
    this.children.splice(idx, 0, newNode)
    if (this.isMounted()) {
      this.container.update()
    }
  }

  updateText(text: string) {
    this.text = text
    if (this.isMounted()) {
      this.container.update()
    }
  }

  updateProps(props: any) {
    this.props = props
    if (this.isMounted()) {
      this.container.update()
    }
  }

  isMounted() {
    return this.parent ? this.parent.isMounted() : this.mounted
  }

  toJSON() {
    const isText = this.type === "text"
    return isText
      ? this.text
      : {
          type: this.name,
          props: omit(this.props, "children"),
          children: this.children.map(i => i.toJSON()),
        }
  }
}
