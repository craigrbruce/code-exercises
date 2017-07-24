export default function(array, key) {
  const loop = (lowIndex, highIndex) => {
    // When low is greater than high, key doesn't exist. Return -1.
    if (lowIndex > highIndex) return -1;
    // Calculate the mid index.
    const midIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);
    const midValue = array[midIndex];
    const lowValue = array[lowIndex];
    const highValue = array[highIndex];
    // If element at the mid index is the key, return mid.
    if (midValue === key) return midIndex;
    if (lowValue < midValue && key < midValue && key >= lowValue) {
      return loop(lowIndex, midIndex - 1, key);
    }
    if (midValue < highValue && key > midValue && key <= highValue) {
      return loop(midIndex + 1, highIndex, key);
    }
    if (lowValue > midValue) {
      return loop(lowIndex, midIndex - 1, key);
    }
    if (lowValue < midValue) {
      return loop(midIndex + 1, highIndex, key);
    }
    return -1;
  };
  return loop(0, array.length - 1);
}
