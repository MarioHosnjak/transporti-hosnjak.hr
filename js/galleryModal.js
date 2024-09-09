// Get the modal
var modal = document.getElementById("myModal")

// Get the image inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")

function showModal(imgName, caption) {
    // Display the modal
    modal.style.display = "flex"
    modal.style.flexDirection = "column"
    modal.style.alignContent = "center"
    modalImg.src = `../img/gallery/${imgName}`
    captionText.innerHTML = caption

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0]

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        closeModal()
    }
}

function closeModal() {
    modal.style.display = "none"
}
