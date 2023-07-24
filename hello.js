colours=document.querySelectorAll('.colours')
clear=document.getElementById('cleargame')
countcolours={'red':0,'yellow':0,'green':0}
clear.onclick=()=>{
    colours.forEach(element=>{
        element.innerText=''
        element.style.backgroolor="blue"
    }
        )
}

colours.forEach(element => {
    // let out=0
    // if (element.value=="red"){
    //     out=1
    // }
    // else if(element.value==="yellow")
    // out=2
    // else
    // out=3
    
    element.onclick =()=>{
        countcolours[element.value]+=1
    element.innerText=countcolours[element.value]
    }
});