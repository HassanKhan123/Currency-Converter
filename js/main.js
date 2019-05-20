
function calcUS() {
    //document.getElementById("usd").value=pkr / 150;
    var pkr = document.getElementById("pkr").value;

    

    document.getElementById("usd").value = pkr / 150;



}


function calcPKR() {
    

    var usd = document.getElementById("usd").value;

    document.getElementById("pkr").value= usd * 150;


}
