function MinHeap(){
    var heap = [];
    this.display = function(){
        console.log(heap);
    }
    this.add = function(val){
        if (heap.length<1){
            heap[1] = val;
        }
        else {
            heap.push(val);
            var newIndex = heap.length-1;
            var parentIndex = Math.trunc(newIndex/2);
            while(heap[parentIndex]>heap[newIndex]){
                let temp = heap[parentIndex];
                heap[parentIndex] = heap[newIndex];
                heap[newIndex] = temp;
                newIndex = parentIndex;
                parentIndex = Math.trunc(newIndex/2);
            }
        }
    }
}
myheap = new MinHeap();
myheap.add(20);
myheap.display();
myheap.add(30);
myheap.display();
myheap.add(15);
myheap.display();
myheap.add(5);
myheap.add(16);
myheap.display();
myheap.add(4);
myheap.add(25);
myheap.display();