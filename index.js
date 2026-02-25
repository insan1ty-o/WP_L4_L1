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
    const recieving = document.getElementsByClassName("inputted")[0].value.toUpperCase();
    const codekey = document.getElementById("encodekey").value.toUpperCase();
    const error = document.getElementById("warning");
    if (codekey == "") {
        error.style.visibility = "visible";
        safe = false;
    } else {
        error.style.visibility = "hidden";
        safe = true;
    }
    if (safe) {
        var ciphered = "";
        var keyind = 0;
        for (let text=0;text<recieving.length;text++) {
            if (recieving.charCodeAt(text) > 31 && recieving.charCodeAt(text) < 65 || recieving.charCodeAt(text) > 89 && recieving.charCodeAt(text) < 128) {
                ciphered += recieving[text];
            } else {
                const col = recieving.charCodeAt(text) - 65
                const row = codekey.charCodeAt(keyind) - 65 
                cipheredletter = codetable[row][col]
                ciphered += codetable[row][col]
                if (keyind = 2) {
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

function decode() {
    let safe = true
    const recieving = document.getElementsByClassName("inputted")[0].value.toUpperCase();
    const codekey = document.getElementById("encodekey").value.toUpperCase();
    const error = document.getElementById("warning");
    if (codekey == "") {
        error.style.visibility = "visible";
        safe = false;
    } else {
        error.style.visibility = "hidden";
        safe = true;
    }
    if (safe) {
        var ciphered = "";
        var keyind = 0;
        for (let text=0;text<recieving.length;text++) {
            if (recieving.charCodeAt(text) > 31 && recieving.charCodeAt(text) < 65 || recieving.charCodeAt(text) > 89 && recieving.charCodeAt(text) < 128) {
                ciphered += recieving[text];
            } else {
                const row = codetable[codekey.charCodeAt(keyind)-65];
                for (i=0;i<row.length;i++) {
                    if (row[i] == recieving[text]) {
                        ciphered += codetable[0][i];
                    }
                }
            }
        }
        let encoded = document.getElementsByClassName("inputted")[1];
        encoded.value = ciphered;
        
    }
}