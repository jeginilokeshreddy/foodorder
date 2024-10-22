    //promise are used to handel async operations
    //async

    function retunpromiseobject() {
    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
        for (let i = 0; i <= 10000000000; i++) {
            if (i == 10000000000) {
            resolve(1000000000);
            }
        }
        reject("lllllllllllllllllll");
        }, 0);
    });
    console.log("inside block");
    console.log("inside block");
    console.log(data);
    return data;
    }

    retunpromiseobject()
    .then((data1) => {
        console.log(data1 + "THEN MEHOD OUTPUT");
    })
    .catch((err) => {
        console.log(err);
    });
    // //THEN AND catch will call once the promise will reslove untill i will not call
    console.log("code outside the block");
    console.log("code out side the block");
    // ------------------------------------------------------async
    //with the help of await keyword we can extract promise result easily

    async function sum(){
    let data=  await fetch("https://jsonplaceholder.typicode.com/posts")
        let data2 = data.json()
    console.log(data2)
    let data3=await data2
    console.log(data3)
    
        console.log("inside side the asyn method")
    }
    sum()
    console.log("out side the asyn method")
    // ---------------------------------------------------------
    //with the help of await keyword we can extract promise result easily

    async function sum1(){
    let data=  await new Promise((resolve)=>{
        resolve("kkkkkkkkkkkkkkkkk")
    })
        console.log(data)
        console.log("inside side the asyn method")
    }
    sum1()
    console.log("out side the asyn method")