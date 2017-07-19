export default function(array, key) {
  const loop = (low, high) => {
    // When low is greater than high, key doesn't exist. Return -1.
    if (low > high) return -1;
    // Calculate the mid index.
    const mid = low + Math.floor((high - low) / 2);
    // If element at the mid index is the key, return mid.
    if (array[mid] === key) return mid;
    // If element at mid is greater than the key, then reduce the array size such that high becomes mid - 1. Index at low remains the same.
    if (key < array[mid]) return loop(low, (mid - 1));
    // If element at mid is less than the key, then reduce the array size such that low becomes mid + 1. Index at high remains the same.
    return loop((mid + 1), high);
  };
  return loop(0, array.length - 1);
}
