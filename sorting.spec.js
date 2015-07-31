describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an empty array', function(){
        expect( bubbleSort([8,7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7,8] );
    });
    it('sorts an array', function(){
        expect( bubbleSort([3,5,4,1]) ).toEqual( [1,3,4,5] );
    });
    it('handles an already sorted array', function(){
        expect( bubbleSort([2,3,4,7,8]) ).toEqual( [2,3,4,7,8] );
    });
    it('calls itself once on an empty array', function() {
      spyOn(window, 'bubbleSort').and.callThrough();
      var arr = [];
      bubbleSort(arr);
      expect(bubbleSort.calls.count()).toEqual(1);
    });
    it('calls itself once on an array with one element', function() {
      spyOn(window, 'bubbleSort').and.callThrough();
      var arr = [1];
      bubbleSort(arr);
      expect(bubbleSort.calls.count()).toEqual(1);
    });
    it('calls itself ??? on an array with two elements', function() {
      spyOn(window, 'bubbleSort').and.callThrough();
      var arr = [2,1];
      bubbleSort(arr);
      expect(bubbleSort.calls.count()).toEqual(1);
    });
});


describe('Merge Sort', function(){
    xit('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    xit('takes an array of numbers, and returns a correctly sorted array', function(){
        expect( mergeSort([8,7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7,8] );
    });
    xit('takes an array of strings, and returns a correctly sorted array', function(){
        expect( mergeSort(['c','a','b','e','d']) ).toEqual( ['a','b','c','d','e'] );
    });
    it('handles an already sorted array', function(){
        expect( mergeSort([2,3,4,7,8]) ).toEqual( [2,3,4,7,8] );
    });
    xit('calls itself once on an empty array', function() {
      spyOn(window, 'mergeSort').and.callThrough();
      var arr = [];
      mergeSort(arr);
      expect(mergeSort.calls.count()).toEqual(1);
    });
    xit('calls itself once on an array with one element', function() {
      spyOn(window, 'mergeSort').and.callThrough();
      var arr = [1];
      mergeSort(arr);
      expect(mergeSort.calls.count()).toEqual(1);
    });
    /*
    it('calls itself n + 1 times', function() {
      spyOn(window, 'mergeSort').and.callThrough();
      var arr = [5,4,3,2,1];
      mergeSort(arr);
      expect(mergeSort.calls.count()).toEqual();
    });*/
});
