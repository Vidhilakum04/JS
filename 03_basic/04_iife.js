// Immediately Invoked Function expressions (IIFE)

(function chai  /*named IIFE*/ (){              // global scope k pollution ko hatane k liye IIFE ka use hota hai.
    // this is the syntax of IIFE
    console.log(`DB CONNECTION`);
}) ();          // must add semi-colon bcz of just after add new function

((name) => {            //simple IIFE
    console.log(`DB TWO ${name}`);
})('vidhi');


