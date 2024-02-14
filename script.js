function uploadImageWithEventID(event, containerId) {
  event.preventDefault(); // Prevent the default form submission behavior

  let inputID = event.target.children[0].id;

  var fileInput = document.getElementById(inputID);
  var imageContainer = document.getElementById(containerId);

  console.log(fileInput, imageContainer);

  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var image = new Image();
    image.src = e.target.result;
    image.style.maxWidth = "100%";
    imageContainer.innerHTML = "";
    imageContainer.appendChild(image);
  };

  reader.readAsDataURL(file);
}

var btn = document.getElementById("btn");
var createpdf = document.getElementById("print");
var opt = {
  margin: [44, 22, 20, 22],
  filename: "pdfcreated.pdf",
  html2canvas: {
    scale: 5,
  },
  jsPDF: {
    unit: "px",
    format: [637, 1280],
    orientation: "portrait",
  },
};
btn.addEventListener("click", function () {
  html2pdf().set(opt).from(createpdf).save();
});
