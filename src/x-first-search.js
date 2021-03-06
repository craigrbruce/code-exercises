/** 
 * Breadth first - iterative. For wide trees.
 */
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

/** 
 * Depth first - iterative. For large, deep trees.
 */
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

/** 
 * Depth first - recursive. For small, deep trees.
 */
export function dfs_rec(root) {
  let traversal = "";
  const loop = current => {
    traversal += `${current.value} `;
    // note, the order of left and right to cater for
    // our 'stack' which is actually the call-stack.
    if (current.left) {
      loop(current.left);
    }
    if (current.right) {
      loop(current.right);
    }
  };
  loop(root);
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
