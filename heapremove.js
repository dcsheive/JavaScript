function MinHeap(){
    var heap = [];
    this.display = function(){
        console.log(heap);
    }
    this.swap = function(i,j){
        let temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
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
                this.swap(parentIndex, newIndex)
                newIndex = parentIndex;
                parentIndex = Math.trunc(newIndex/2);
            }
        }
    }
    this.remove = function(){
        this.swap(1, heap.length-1)
        min = heap.pop()
        var parentIndex = 1;
        var childIndex = Math.trunc(parentIndex*2);
        var childIndex_2 = Math.trunc(parentIndex*2) + 1;
        while(heap[parentIndex]>heap[childIndex] || heap[parentIndex]>heap[childIndex_2]){
            if (heap[childIndex]<heap[childIndex_2] || !heap[childIndex_2]){
                this.swap(childIndex,parentIndex);
                parentIndex = childIndex;
                childIndex = Math.trunc(parentIndex*2);
                childIndex_2 = childIndex + 1;
            }
            else{
                this.swap(childIndex_2,parentIndex);
                parentIndex = childIndex_2;
                childIndex = Math.trunc(parentIndex*2);
                childIndex_2 = childIndex + 1;
            }
        }
        console.log(min);
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
myheap.remove();
myheap.display();