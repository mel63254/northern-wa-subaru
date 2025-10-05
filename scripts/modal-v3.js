/*
function(){
    try {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        if (!modal || !modalImg)
            return;
        var thumbs = Array.from(document.querySelectorAll('[id^="myImg"], img.myImg'));

        thumbs.forEach(function(img){
            img.addEventListener("click", function(){
                modal.style.display = "block";
                modaImg.src = img.src;

        if(captionText) captionText.textContent = img.alt || "";
            }
        }
        
        var closeBtn = document.querySelector(".close);
            if (closeBtn) closeBtn.addEventListener("click", function(){
                modal.style.display = "none";
            }

    document.addEventListener("keydow", function(e){
        if (e.target === "Escape")
            modal.style.display = "none";
    }

    modal.addEventListener("click", function(e){
        if (e.target === modal)
            modal.style.display = "none";
        }
    }
    
    catch(e) {}
}
                                                        
*/                                                                                                  


var modal = document.getElementById("myModal");

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
