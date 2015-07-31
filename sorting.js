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

function mergeSort(array){



}
