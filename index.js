var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function encode() {
    let safe = true
    const recieving = document.getElementsByClassName("inputted")[0];
    const codekey = document.getElementById("encodekey");
    const error = document.getElementById("warning");
    if (codekey.value = " ") {
        console.log(recieving.value);
        console.log("error", codekey.value);
        error.style.visibility = "visible";
        safe = false;
    } else {
        console.log("good", codekey.value);
        error.style.visibility = "hidden";
        safe = true;
    }
    let encoded = document.getElementsByClassName("inputted")[1];
    /* take alphabet and cut it off by the selected key letter, shift letters to the end by adding split letters to the remaining letters*/
    /*https://pages.mtu.edu/~shene/NSF-4/Tutorial/VIG/Vig-Base.html*/
    if (safe) {
       encoded.value = recieving.value; 
    }
};