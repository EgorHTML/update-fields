/* eslint-disable no-unused-vars */
import TreeNode from './TreeNode.js'

export default class TreeList {
  constructor(options) {
    this.options = options
    this.list = []
    this.parseOptionsInTreeList()
  }

  parseOptionsInTreeList() {
    let nodes = this.options.map((option) => new TreeNode(option, []))

    nodes.forEach((node) => {
      const parent = nodes.find((_node) => _node.option.id == node.option.pid)
      if (parent) {
        parent.children.push(node)
      }
    })

    nodes = nodes.filter((node) => !node.option.pid)
    this.list = nodes
  }

  append() {}

  clear() {}
}
