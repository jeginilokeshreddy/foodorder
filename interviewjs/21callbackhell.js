// callback help problem rises

// function defintion 

function step1(parameter1,cb){
           cb(parameter1+10);
}

function step2(parameter2, cb) {
  cb(parameter2 + 10);
}

function step3(parameter3, cb) {
  cb(parameter3 + 10);
}

// calling one function inside another to get the input from  the one function to the another function function

step1(100,(step1result)=>{
    step2(step1result,(setep2result)=>{
           step3(setep2result,(step3result)=>{
            console.log(step3result);
           });
    });
})

//terminlogy
// 1)function definition
// 2)function call
// 3)arugument 
// 4)parameter

