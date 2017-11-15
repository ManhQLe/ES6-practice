var sundaeTicket = new Promise((res,rej)=>{
    setTimeout(()=>{        
        const sundae = {
            Cream:'good',
            chocolate:'nice',
            milk:'awesome'
        };        
        res(sundae)
    },2000)
})

var sundaeTicket2 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej("We're closed");
    }, 2000);
})

// sundaeTicket.then(x=>{
//     console.log(x)
// })

sundaeTicket2.then(()=>{
    console.log("Not supposed to be seeing this")
})
.catch(ex=>{
    console.log("Exception is",ex);
})
    
