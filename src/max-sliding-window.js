export default function(array, windowSize) {
  if (windowSize > array.length) throw Error("Window size is too large");

  const result = [];
  const window = [];

  for (let i = 0; i < windowSize; i++) {
    const element = array[i];
    const last = window[window.length - 1];
    while (window.length > 0 && element >= last) {
      window.pop();
    }
    window.push(i);
  }

  for (let i = windowSize; i < array.length; i++) {
    const element = array[i];
    while (window.length > 0 && element >= array[window[window.length - 1]]) {
      window.pop();
    }
    if (window.length > 0 && window[0] <= i - windowSize) {
      window.shift();
    }

    window.push(i);
    result.push(array[window[0]]);
  }
  return result;
}
