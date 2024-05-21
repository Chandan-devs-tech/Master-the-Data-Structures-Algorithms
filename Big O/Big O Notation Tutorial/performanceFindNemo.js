// let nemo = ["nemo"];

// function findNemo(arr){
//     t0 = performance.now();
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==="nemo"){
//             console.log("Found NEMO!")
//         }
//     }
//     t1 = performance.now();
//     console.log("Time taken: " + (t1-t0) + "ms")
// }

// findNemo(nemo);

// OUTPUT :-

// Found NEMO!
// Time taken: 7.7424050000000015ms

// TIME COMPLEXITY :- O(log n)

// ----------------------------------------------------------------------------------------------------

// INCREASING THE NUMBER OF ITEMS IN ARRAY

// names = ["Alice", "Bob", "Charlie", "David", "Eve", "Fiona", "George", "Hannah", "Ian", "nemo"]

// function findNemo(arr){
//     t0 = performance.now();
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==="nemo"){
//             console.log("Found NEMO!")
//         }
//     }
//     t1 = performance.now();
//     console.log("Time taken: " + (t1-t0) + "ms")
// }

// findNemo(names);

// OUTPUT :-

// Found NEMO!
// Time taken: 9.016704999999998ms

// TIME COMPLEXITY :- O(n)

// -------------------------------------------------------------------------------------------------

// LARGE ARRAY

// const large = Array(50).fill("nemo");
// function findNemo(arr){
//     t0 = performance.now();
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==="nemo"){
//             console.log("Found NEMO!")
//         }
//     }
//     t1 = performance.now();
//     console.log("Time taken: " + (t1-t0) + "ms")
// }

// findNemo(large);

// OUTPUT :-

// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Time taken: 11.399824000000002ms

// TIME COMPLEXITY :- O(n!)

// -------------------------------------------------------------------------------------------------

