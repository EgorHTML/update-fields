export default class TreeNode {
  constructor(option, children) {
    this.option = option
    this.children = children
  }

  appendChild(child) {
    this.children = [...this.children, child]
  }
}
