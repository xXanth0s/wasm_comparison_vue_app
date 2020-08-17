export const startQuickSort = (data, fieldToSort) => {
  return quickSortRecursive(data, 0, data.length - 1, fieldToSort)
}

function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right, fieldToSort) {
  let pivot = items[Math.floor((right + left) / 2)]
  let leftPointer = left;
  let rightPointer = right; //right pointer
  while (leftPointer <= rightPointer) {
    while (items[leftPointer][fieldToSort] < pivot[fieldToSort]) {
      leftPointer++;
    }
    while (items[rightPointer][fieldToSort] > pivot[fieldToSort]) {
      rightPointer--;
    }
    if (leftPointer <= rightPointer) {
      swap(items, leftPointer, rightPointer); //sawpping two elements
      leftPointer++;
      rightPointer--;
    }
  }
  return leftPointer;
}

function quickSortRecursive(items, left, right, fieldToSort) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right, fieldToSort); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSortRecursive(items, left, index - 1, fieldToSort);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSortRecursive(items, index, right, fieldToSort);
    }
  }
  return items;
}
