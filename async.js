async function DisplayAsync(){
  let pro = new Promise(function(resolve,reject){
    setTimeout(() => {
      let x=0;
      if (x==0){
        resolve("yes")
      }
      else{
        reject("No")
      }
    },4000)
  })
  let conclusion = await pro;
  console.log(conclusion);
}
DisplayAsync();
