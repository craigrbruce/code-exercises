export function dedupe(head) {
  var hash = {
    [head.value]: head,
  };

  let current = head;

  while (current.next) {
    current = current.next;
    if (hash[current.value]) {
      current.next = current.next ? current.next.next : null;
    } else {
      hash[current.value] = current;
    }
  }
}
