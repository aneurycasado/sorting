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

function halve (arr) {
  var middleIndex = Math.ceil(arr.length / 2);
  var right = arr.splice(middleIndex);
  return [arr, right];
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
  return merged.concat(sortedA).concat(sortedB);
}

function mergeSort (arr) {
  if (arr.length < 2) return arr;
  // halves the array
  // mergeSorts the halves
  // merges the now sorted halves
  var halves = halve(arr);
  return merge(mergeSort(halves[0]), mergeSort(halves[1]));
}
