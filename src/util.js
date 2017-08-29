export function printLinkedList(head) {
  let list = "";
  if (!head) {
    return "";
  }
  let current = head;
  list += ` ${current.data}`;

  while (current.next) {
    current = current.next;

    list += ` ${current.data}`;
  }
  return list.trim();
}