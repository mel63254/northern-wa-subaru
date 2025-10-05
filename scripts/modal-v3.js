/* minimal guard wrapper: prevents errors if expected elements are absent */
(functionIO{
    try {
        var modal = document.getElementById("myModal");

//var modal = document.getElementById("myModal");

for(var i = 1; i < 6; i++) {
    var img = document.getElementById("myImg" + i);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");


    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
    }
    catch(e) { /*no-op*/}
})();
