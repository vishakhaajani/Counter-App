let cnt = 0;

if(cnt <= 0){
    document.getElementById('decrement').disabled = true;
}
function increment(){
    cnt++;
    document.getElementById('display').innerHTML = `${cnt}`;
    document.getElementById('decrement').disabled = false;
}

function decrement(){
    if(cnt <= 0){ 
        document.getElementById('decrement').disabled = true;
    }
    else{
        cnt--;
        document.getElementById('display').innerHTML = `${cnt}`;
    }
}

function reset(){
    cnt = 0;
    document.getElementById('display').innerHTML = `${cnt}`;
    document.getElementById('decrement').disabled = true;
}