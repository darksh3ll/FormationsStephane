const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for ( let i = 0; i < array.length; i++ ) {
    if ((array[i] >= 5) && (array[i] <= 20)) {
        console.log(`${array[i]} est bien compris entre 5 et 10`)
    }else {
        console.log(array[i])
    }
}
    
