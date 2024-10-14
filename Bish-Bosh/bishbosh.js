function bishBosh() {
    
    let num = 10;
    let i = 0;
    while (num > i) {
           
        if ( i % 3 == 0 && num % 4 == 0 ) {  
            console.log("bish-bosh");
        }
        else if ( i % 3 == 0){
            console.log("bish");
        }
        else if ( i % 4 == 0)
            console.log("bosh");
        else
            console.log(i); 
        i++;
    }

}


function bishBoshTwo(firstNum, secondNum, endNum) {
    firstNum = document.getElementById('firstNum').value;
    secondNum = document.getElementById('secondNum').value;
    endNum = document.getElementById('endNum').value;
    
    i = 0;
    let output = [];

    while (endNum > i) {
        i++;
        if ( i % firstNum == 0 && i % secondNum == 0 )  
            output.push("bish-bosh");
        else if ( i % firstNum == 0)
            output.push("bish");
        else if ( i % secondNum == 0)
            output.push("bosh");
        else
            output.push(i);
    }

    document.getElementById('bish-bosh').innerHTML = output;

}

// Adderar lyssnare för knappen
document.getElementById("button").addEventListener("click", bishBoshTwo);



