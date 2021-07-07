const userleft = false
const userwatchingMeme= false

function watchTutorialPromse(){
    return new Promise((resolve, reject)=>{
        if(userleft){
            reject({
                name:"Anmol Rana",
                message:"Hey"
            })
        }else if(userwatchingMeme){
            reject({
                name:"User watching Cat Meme",
                message:"hello Brijesh"
            })
        }else{
            resolve("Both are working")
        }
    })
}
watchTutorialPromse().then((message)=>{
    console.log("success" + message)
}).catch((error)=>{
    console.log(error.name + ' ' + error.message)
})