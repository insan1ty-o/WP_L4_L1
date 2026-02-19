/*var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";*/
var codetable = [['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
                 ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A'],
                 ['C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B'],
                 ['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C'],
                 ['E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D'],
                 ['F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E'],
                 ['G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F'],
                 ['H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G'],
                 ['I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H'],
                 ['J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I'],
                 ['K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J'],
                 ['L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K'],
                 ['M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L'],
                 ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'],
                 ['O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N'],
                 ['P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'],
                 ['Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'],
                 ['R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'],
                 ['S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'],
                 ['T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S'],
                 ['U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'],
                 ['V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'],
                 ['W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'],
                 ['X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'],
                 ['Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'],
                 ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y']]
                 /* row = keyword | column = text */

function encode() {
    let safe = true
    const recieving = document.getElementsByClassName("inputted")[0];
    const codekey = document.getElementById("encodekey");
    const error = document.getElementById("warning");
    if (codekey.value == "") {
        error.style.visibility = "visible";
        safe = false;
    } else {
        error.style.visibility = "hidden";
        safe = true;
    }
    /*https://pages.mtu.edu/~shene/NSF-4/Tutorial/VIG/Vig-Base.html*/
    if (safe) {
        /*encoded.value = recieving.value;*/
        let ciphered = "";
        let keyind = 0;
        for (let text=0;text<recieving.value.length;text++) {
            if (recieving.value.charCodeAt(text) > 31 && recieving.value.charCodeAt(text) < 65 || recieving.value.charCodeAt(text) > 90 && recieving.value.charCodeAt(text) < 97 || recieving.value.charCodeAt(text) > 122 && recieving.value.charCodeAt(text) < 127) {
                ciphered += recieving.value[text];
            } else {
                let col = 0;
                let row = 0;
                let keyrow = 0;
                let rowind = 0;
                let starting = true;
                while (codetable[0][col] != recieving.value[text].toUpperCase()) {
                    console.log(recieving.value[text])
                    console.log("find column")
                    col += 1;
                }
                
                find = 0;
                while (codetable[keyrow][0] != codekey.value[keyind].toUpperCase()) {
                    console.log("find (key)row")
                    keyrow+= 1;
                }

                while (codetable[row][col] != codetable[keyrow][rowind] && starting) {
                    console.log("function")
                    if (codetable[row][0] != codetable[keyrow][0]) {
                        row += 1;
                    }
                    rowind += 1;
                    starting = false;
                }
                ciphered += codetable[keyrow][rowind];
                if (keyind = 2){
                    keyind = 0;
                } else {
                    keyind += 1;
                }
            }
        }
        let encoded = document.getElementsByClassName("inputted")[1];
        encoded.value = ciphered;
    }
};