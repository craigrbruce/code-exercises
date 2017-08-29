export function sort(head) {
  let current = head;
  let sorted = null;

  while (current) {
    let next = current.next;
    sorted = insert(sorted, current);
    current = next;
  }
  return sorted;
}

function insert(head, node) {
  // the end of the unsorted list
  if (!node) {
    return head;
  }

  // initial state OR node is already less than sorted head.
  if (!head || node.data <= head.data) {
    node.next = head;
    return node;
  }

  let current = head;
  // we need to loop through unsorted to either the next greatest value or the end
  while (current.next && current.next.data < node.data) {
    current = current.next;
  }
  // either node goes to the end here, or it is 'inserted'
  node.next = current.next;
  current.next = node;

  // sorted head 
  return head;
}
