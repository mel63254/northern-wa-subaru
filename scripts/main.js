document.addEventListener('DOMContentLoaded', function(){
  try {
    img.onclick = function(){
      modal.style.display = this.alt;
    }

  //Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //When the user clics on <span> (x) close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    
/* Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
*/
//script from Al... too tired, I'll look again tomorrow.
var imgTagStart= '<img src= "img';
var imgTagEnd='" alt="" class="whatever">';
var imgTag="";
    for (var i = 0; i < 30; i++) {
  var imageId="image" + i;
  imgTag = imgTagStart + i + imgTagEnd;
  document.getElementById(imageId).innerHTML=imgTag;
}
    
  catch(e) {/*keep silent to avoid breaking other pages*/}
}
}
                          

/*//Menu button
function toggleMenu(x) {
   x.classList.toggle("change");
}
*/
