let arr= ["red", "blue", "pink" , "green", "yellow"];

function myfunction(){
    let temp=" ";
    arr.map((element) =>{
   
        
        temp= temp +
        `<div id="box" style="width: 80px;
        height: 80px;
        background: ${element};
        align-items: center;
        justify-content: center;
        text-align: center;
        display: flex;
        color: white;" >
            
            <h2>${element}</h2>
            
        </div>`
            
        })
        document.getElementById("mapfun").innerHTML = temp;  
}


   