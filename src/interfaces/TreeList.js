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
        parent.appendChild(node)
      }
    })

    nodes = nodes.filter((node) => !node.option.pid)
    this.list = nodes
  }

  deleteOption(id) {
    let children = this.options.filter((option) => option.pid == id)
    this.options = this.options.filter(
      (option) =>
        !children.some((child) => child.id === option.id) && option.id != id
    )

    for (let i = 0; i < children.length; i++) {
      const option = children[i]
      this.deleteOption(option.id)
    }
  }

  update(options) {
    options.forEach((option) => {
      const updatedOption = this.options.find(
        (_option) => _option.id == option.id
      )
      const deleteType = !option.name && !option.pid && option.id
      const updateType = updatedOption
      const addType = option.name
      if (deleteType) {
        this.deleteOption(option.id)
      } else if (updateType) {
        updatedOption.name = option.name
      } else if (addType) {
        this.options = [...this.options, option]
      }
    })

    this.parseOptionsInTreeList()

    return this
  }
}
