function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var closeSpan = document.querySelector(".close");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    closeSpan.style.display = "block";
}
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }


  window.onload = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var closeSpan = document.querySelector(".close");
    closeSpan.style.display = "none";
};

document.getElementById("backButton").onclick = function() {
    window.location.href = "primary.html";
};

document.getElementById("closebutton").onclick = function() {
    window.location.href = "newslide.html";
};

function addNewImages(imageArray) {
  const imgGrid = document.querySelector(".img-grid");
  imageArray.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "new image";
      img.onclick = () => openModal(img);
      imgGrid.appendChild(img);
  });
}