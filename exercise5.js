console.log("hackman")

const messages = [
    "Initializing Hack Tool",
    "Connecting to Facebook",
    "Connecting to Server 1",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully",
    "Feaching Username",
    "Username hacked successfully",
    "Tryping Brute Force",
    "200k passwords tried...",
    "Match not Found",
    "Another 200k passwords tried...",
    "Match not found",
    "Another 200k passwords tried...",
    "Match Found",
    "Accessing to Account",
    "Hack Succesful"
]

let msg = document.getElementsByClassName('mgs')[0];

let generatebakground = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(10)
    })
}

let sleep = (sec)=>{
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },sec*1000)
    });
}

const inital = async(index)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Installing Program ${index}%...`)
            // reject(new Error("rejected.."))
        },100)
    })
}

const displayMessage = (msg)=>{
    return new Promise( async(resolve,reject)=>{
        await sleep(5)
        // console.log(msg);
        resolve(msg)
    })
}

const hackman = async(messages)=>{

    for (let index = 0; index <= 100; index++) {
      await inital(index).then((val)=>{
        msg.innerHTML = `<p>${val}</p>`
      }).catch((err)=>{
        console.log("Failer to installing...")
      })
    }
    
    for (let index = 0; index < messages.length; index++) {
        
        await displayMessage(messages[index]).then((val)=>{
            // console.log(val);
            msg.innerHTML += `<p>${val}</p>`
        }).catch((err)=>{
            console.log("Failder in Hacking")
        })
        
    }
}



btn = document.getElementById('btn')
text = document.getElementById('text')

btn.addEventListener('click',()=>{
  if(text.value.length!=0){
    hackman(messages).then(()=>{
        alert( text.value + " Hack Successfully....")
        text.value = "";
        msg.innerHTML = ''
    })
    acb()
  }else{
    alert("plase enter name")
  }
});


let code = document.getElementsByClassName('code');

const acb = async()=>{
    let index = 0;
    while (index >= 0){  
        await sleep(0.1)
        await generatebakground().then((val)=>{
            code[0].innerHTML += val + " " 
            code[1].innerHTML += val + " " 
        })
        index++
        if(index==980){
            index = 0;
        }
    }
}


