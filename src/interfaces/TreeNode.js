export default class TreeNode {
  constructor(option, childrens) {
    this.option = option
    this.childrens = childrens
  }

  appendChild(child) {
    this.childrens.push(child)
  }
}
