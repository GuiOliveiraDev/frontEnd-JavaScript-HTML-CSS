let arr = [10, 20, 30, 25, 14];

// Soma todos os valores de um Array
let sum = 0;
for( let i = 0; i < arr.length; i++){
    sum += arr[i];
}
// Também soma todos os valores de um Array
function reducerCallback(sum, arrItem){
    return sum += arrItem;
}

const result = arr.reduce(reducerCallback, 0);

// Também soma todos os valores de um Array e, em seguida tira a média de um Array.
const result2 = arr.reduce((sum, arrItem) => sum += arrItem, 0) / arr.length;

