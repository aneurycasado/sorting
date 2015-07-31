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

function mergeSort(array){
  if (array.length<2) {return array;}
  else {
    var middle = Math.floor(array.length/2);
    var firstArray = array.slice(0,middle);
    var sndArray = array.slice(middle);
    var leftMerge = mergeSort(firstArray);
    var rightMerge = mergeSort(sndArray);
    array = merge(leftMerge,rightMerge);
    return array;
  }
}
