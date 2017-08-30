export function bfs(root) {
  var traversal = "";
  var queue = [];
  let current = null;
  queue.push(root);

  while (queue.length > 0) {
    current = queue.shift();
    traversal += `${current.value} `;
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return traversal.trim();
}

export function dfs(root) {
  var traversal = "";
  var stack = [];
  let current = null;
  stack.push(root);

  while (stack.length > 0) {
    current = stack.pop();
    traversal += `${current.value} `;
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return traversal.trim();
}

export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf = () => this.left == null && this.right == null;
}
