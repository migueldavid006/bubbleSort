let array = [43,675,1,2,3,4,5,6,7,9,8,16,66,88];

function bubbleSort(array) {
    for (let index = 0; index < array.length -1; index++) {
        for (let index2 = 0; index2 < array.length -1; index2++) {
            if(array[index2] > array[index2 + 1]){
                let aux = array[index2]
                array[index2] = array[index2 + 1]
                array[index2 + 1] = aux;
            }
        }        
    }
    return array
}

console.log(bubbleSort(array));

