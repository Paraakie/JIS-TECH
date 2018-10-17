/**
 * sample code from w3school for testing
 * @param str
 */
function showHint(input) {
    if (input.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }else if (this.readyState == 4 && this.status == 404){
                alert("Not Found");
            }
        };
        xmlhttp.open("GET", "/" + urlEncode(input), true);
        xmlhttp.send();
    }
}

/**
 * take the string input and format it
 *
 * @param input
 * @returns {*}
 */
function urlEncode(input){

    if(input == " "){
        input = "+";
    }

    return input;
}