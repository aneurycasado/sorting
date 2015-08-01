describe('Bubble sort', function () {

  it('sorts an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array of one element', function () {
    expect(bubbleSort([10])).toEqual([10]);
  });

  it('sorts an array of n elements', function () {
    var randomArray = [];
    var n = Math.floor(Math.random() * 80 + 20);
    while (n--) {
      var randomNum = Math.floor(Math.random() * 50)
      randomArray.push(randomNum);
    }
    var sortedCopy = randomArray.slice();
    sortedCopy.sort(function (a, b) {
      return a - b;
    });
    expect(bubbleSort(randomArray)).toEqual(sortedCopy);
  });

});


describe('Merge sort', function () {

  describe('halve', function () {

    it('returns two arrays', function () {
      expect(halve([])).toEqual([[],[]]);
    });

    it('halves array of even length', function () {
      expect(halve(['a', 'b', 'c', 'd'])).toEqual([['a', 'b'], ['c', 'd']])
    });

    it('halves array of odd length', function () {
      expect(halve(['a', 'b', 'c'])).toEqual([['a', 'b'], ['c']]);
    });

  });

  describe('merge', function () {

    it('returns an array', function () {
      expect(merge([], [])).toEqual([]);
    });

    it('given two already sorted arrays of equal length, returns sorted result array', function () {
      var left = [2,4,5];
      var right = [1,6,8];
      expect(merge(left, right)).toEqual([1,2,4,5,6,8]);
    });

    it('works for arrays of unequal length', function () {
      var left = [2,4,5];
      var right = [1,6];
      expect(merge(left, right)).toEqual([1,2,4,5,6]);
      right = [2,4,5];
      left = [1,6];
      expect(merge(left, right)).toEqual([1,2,4,5,6]);
    });

  });

  describe('mergeSort', function () {

    it('with 1 or fewer elements, returns sorted array', function () {
      expect(mergeSort([5])).toEqual([5]);
    });

    it('does the thing its supposed to do', function () {
      var randomArray = [];
      var n = Math.floor(Math.random() * 80 + 20);
      while (n--) {
        var randomNum = Math.floor(Math.random() * 50)
        randomArray.push(randomNum);
      }
      var sortedCopy = randomArray.slice();
      sortedCopy.sort(function (a, b) {
        return a - b;
      });
      expect(mergeSort(randomArray)).toEqual(sortedCopy);
    });

  });

});
