function heapify(arr){
    arr[arr.length] = arr[0];
    arr[0] = null;
    var currentIndex = Math.trunc((arr.length-1)/2);
    var childIndex = arr.length-2;
    var childIndex_2 = arr.length-1;
    var countIndex = currentIndex;
    while (countIndex>0){
        currentIndex = countIndex;
        childIndex = Math.trunc(currentIndex*2);
        childIndex_2 = childIndex + 1;
        while(arr[currentIndex]>arr[childIndex] || arr[currentIndex]>arr[childIndex_2]){
            if (arr[childIndex]<arr[childIndex_2] || !arr[childIndex_2]){
                let temp = arr[childIndex];
                arr[childIndex] = arr[currentIndex];
                arr[currentIndex] = temp;
                currentIndex = childIndex;
                childIndex = Math.trunc(currentIndex*2);
                childIndex_2 = childIndex + 1;

            }
            else{
                let temp = arr[childIndex_2];
                arr[childIndex_2] = arr[currentIndex];
                arr[currentIndex] = temp;
                currentIndex = childIndex_2;
                childIndex = Math.trunc(currentIndex*2);
                childIndex_2 = childIndex + 1;
            }
        }
        countIndex--;
    }
    console.log(arr);
}
heapify([20,30,16,100,2,53,10, 3,45])