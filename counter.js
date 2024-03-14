let cnt = 0;

function increment(){
    cnt++;
    document.getElementById('display').innerHTML = `${cnt}`;
    document.getElementById('decrement').disabled = false;
}

function decrement(){
    if(cnt > 0){
        cnt--;
        document.getElementById('display').innerHTML = `${cnt}`;
    }
    else if (cnt == 0){
        document.getElementById('decrement').disabled = true;
    }
}

function reset(){
    cnt = 0;
    document.getElementById('display').innerHTML = `${cnt}`;
}