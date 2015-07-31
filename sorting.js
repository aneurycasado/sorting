
function swap (left,right){
  if(left)


}

function bubbleSort(array){
  if(array.length <= 1){
    return array;
  }else{
    var left = bubbleSort(array);
    var right = bubbleSort(array);
    var array = swap(left,right)
    return array;
  }
}
