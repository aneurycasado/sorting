function bubbleSort(array){
  var quit = true;
  for(var i = 0; i < array.length-1; i++){
    var a = array[i];
    var b = array[i+1];
    if(b < a){
      array[i] = b;
      array[i+1] = a;
      quit = false;
    }
  }
  if(quit) return array;
  return bubbleSort(array);
}

function merge(array1,array2){
  var mergedArray = [];
  while (array1.length && array2.length){
    while(array1[0]<=array2[0]) mergedArray.push(array1.shift());
    mergedArray.push(array2.shift());
  }
  if(array1.length > 0) mergedArray = mergedArray.concat(array1);
  else if(array2.length > 0) mergedArray = mergedArray.concat(array2);
  return mergedArray;
}

function halve (arr) {
  var middleIndex = Math.ceil(arr.length / 2);
  return [arr.slice(0,middleIndex), arr.slice(middleIndex)];
}

function merge (sortedA, sortedB) {
  var merged = [];
  while (sortedA.length && sortedB.length) {
    if (sortedA[0] < sortedB[0]) {
      merged.push(sortedA.shift());
    } else {
      merged.push(sortedB.shift());
    }
  }
  // if one of the arrays still has elements, they get added to the end of merged
  return merged.concat(sortedA).concat(sortedB);
}

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr;
  }
  // halves the array
  // mergeSorts the halves
  // merges the now sorted halves
  var halves = halve(arr);
  return merge(mergeSort(halves[0]), mergeSort(halves[1]));
}
