export function deleteNode(head, value) {
  let current = head;
  let previous = null;

  console.log(head, value);
  while (current) {
    if (current.data === value) {
      break;
    } else {
      current = current.next;
      previous = current;
    }
  }
  if (!current) {
    return head;
  }
  if (current === head) {
    return head.next;
  }
  previous.next = current.next;
  return head;
}
