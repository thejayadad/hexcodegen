
function generate(){
    let hexCharacters = "0123456789abcdef"
    let hex = "";
    for(let i = 0, n = hexCharacters.length; i < 6; i++){
        hex += hexCharacters.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("hex").innerHTML = `#${hex}`;
    document.getElementById("box").style.background = `#${hex}`;
}