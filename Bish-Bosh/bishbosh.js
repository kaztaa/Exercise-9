function bishBosh() {
    
    let num = 10;
    let i = 0;
    while (num > i) {
           
        if ( i % 3 == 0 && num % 4 == 0 ) {  
            console.log('bish-bosh');
        }
        else if ( i % 3 == 0){
            console.log('bish');
        }
        else if ( i % 4 == 0)
            console.log('bosh');
        else
            console.log(i); 
        i++;
    }
}

function bishBoshTwo(firstNum, secondNum, endNum) {

    firstNum = document.querySelector('#firstNum').value;
    secondNum = document.querySelector('#secondNum').value;
    endNum = document.querySelector('#endNum').value;
    
    i = 0;
    let output = [];

    while (endNum > i) {
        i++;
        if ( i % firstNum == 0 && i % secondNum == 0 )  
            output.push('bish-bosh');
        else if ( i % firstNum == 0)
            output.push('bish');
        else if ( i % secondNum == 0)
            output.push('bosh');
        else
            output.push(i);
    }

    document.querySelector('#bish-bosh').innerHTML = output;
}

// Click event listener for #button 
document.querySelector('#button').addEventListener('click', bishBoshTwo);



