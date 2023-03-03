function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let indexMin;
    for(let i = 0; i < length -1; i++) {
        indexMin = i;
        for(let j = i; j < length; j++) {
            if(compareFn(array[index], array[j]) === compareFn.BIGGER_THAN) {
                indexMin = j;
            }
        }
        if(i !== indexMin) {
            swap(array, i, indexMin);
        }
    }
    return array;
}