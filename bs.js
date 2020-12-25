function bSearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] === value) return mid;
    else if (array[mid] < value) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

let arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(bSearch(arrayList, 10));
