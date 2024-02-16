function uploadImageWithEventID(event, containerId) {
  event.preventDefault(); // Prevent the default form submission behavior

  let inputID = event.target.id;

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

function changeTextWithEventID(event, containerId) {
  var text = event.target.value;
  var textContainer = document.getElementById(containerId);

  textContainer.innerHTML = text;
}

var btn = document.getElementById("btn");
var createpdf = document.getElementById("print");
var opt = {
  margin: [20, 20, 18, 20],
  filename: "pdfcreated.pdf",
  html2canvas: {
    scale: 6,
  },
  jsPDF: {
    unit: "mm",
    format: [270, 480],
    orientation: "portrait",
  },
};
btn.addEventListener("click", function () {
  html2pdf().set(opt).from(createpdf).save();
});
