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

// sundaeTicket.then(x=>{
//     console.log(x)
// })