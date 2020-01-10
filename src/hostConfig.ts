import shallowequal from "shallowequal"

import Container from "./Container"
import VNode from "./VNode"

const rootContext = {}
const childContext = {}

const hostConfig = {
  now: Date.now,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  noTimeout: -1,
  supportsMutation: true,
  getPublicInstance(instance: any): any {
    console.log("getPublicInstance", instance)
    return instance
  },
  getRootHostContext(rootContainerInstance: Container) {
    console.log("getRootHostContext", rootContainerInstance)
    return rootContext
  },
  getChildHostContext(
    parentHostContext: any,
    type: any,
    rootContainerInstance: Container,
  ) {
    console.log("getChildHostContext", type, rootContainerInstance)
    return childContext
  },
  shouldSetTextContent(type: any, props: any): boolean {
    console.log("shouldSetTextContent", type, props)
    return false
  },
  shouldDeprioritizeSubtree(type: string, props: any): boolean {
    return false
  },
  prepareForCommit(containerInfo: Container): void {
    console.log("prepareForCommit")
  },
  resetAfterCommit(containerInfo: Container): void {
    console.log("resetAfterCommit")
  },
  createInstance(
    type: string,
    props: any,
    rootContainerInstance: Container,
    hostContext: any,
    internalInstanceHandle: any,
  ) {
    console.log("createInstance", type, props)
    const vnode = new VNode("normal", type, rootContainerInstance, props)
    return vnode
  },
  createTextInstance(
    text: string,
    rootContainerInstance: Container,
    hostContext: any,
    internalInstanceHandle: any,
  ) {
    console.log("createTextInstance", text)
    const vnode = new VNode("text", undefined, rootContainerInstance, undefined)
    vnode.updateText(text)
    return vnode
  },
  appendInitialChild(parentInstance: VNode, child: VNode): void {
    console.log("appendInitialChild", parentInstance, child)
    parentInstance.appendChild(child)
  },
  finalizeInitialChildren(
    parentInstance: VNode,
    type: string,
    props: any,
    rootContainerInstance: Container,
    hostContext: any,
  ): boolean {
    console.log("finalizeInitialChildren", parentInstance)
    return true
  },
  prepareUpdate(
    instance: VNode,
    type: string,
    oldProps: any,
    newProps: any,
    rootContainerInstance: Container,
    hostContext: any,
  ) {
    console.log("prepareUpdate for ", type, instance)
    if (!shallowequal(newProps, oldProps)) {
      return true
    }
    return null
  },
  commitTextUpdate(
    textInstance: VNode,
    oldText: string,
    newText: string,
  ): void {
    console.log("commitTextUpdate", textInstance)
    if (oldText !== newText) {
      textInstance.updateText(newText)
    }
  },
  commitUpdate(
    instance: VNode,
    updatePayload: any,
    type: string,
    oldProps: any,
    newProps: any,
    internalInstanceHandle: any,
  ): void {
    console.log("commitUpdate for ", type, instance)
    instance.updateProps(newProps)
  },
  appendChild(parentInstance: VNode, child: VNode): void {
    console.log("appendChild", parentInstance, child)
    parentInstance.appendChild(child)
  },
  appendChildToContainer(container: Container, child: VNode): void {
    console.log("appendChildTonContainer", container, child)
    container.node.appendChild(child)
  },
  insertBefore(parentInstance: VNode, child: VNode, beforeChild: VNode): void {
    console.log("insertBefore", parentInstance, child)
    parentInstance.insertBefore(child, beforeChild)
  },
  insertInContainerBefore(
    container: Container,
    child: VNode,
    beforeChild: VNode,
  ): void {
    console.log("insertInContainerBefore", container, child)
    container.node.insertBefore(child, beforeChild)
  },
  removeChild(parentInstance: VNode, child: VNode): void {
    console.log("removeCHild", child)
    parentInstance.removeChild(child)
  },
  removeChildFromContainer(container: Container, child: VNode): void {
    console.log("removeFromContainer", child)
    container.node.removeChild(child)
  },
  resetTextContent(instance: VNode) {
    console.log("resetTextContent", instance)
  },
  commitMount(
    instance: VNode,
    type: string,
    newProps: any,
    internalInstanceHandle: any,
  ): void {
    console.log("commitMount for ", type, instance)
  },
}

export default hostConfig
