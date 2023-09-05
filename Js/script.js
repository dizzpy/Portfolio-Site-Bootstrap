var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");
        document.addEventListener("mousemove",function(e){
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });

        //cv download
        var downloadButton = document.getElementById("downloadButton");

        // Add a click event listener to the button
        downloadButton.addEventListener("click", function () {
        // Create an anchor element (a) to trigger the download
        var downloadLink = document.createElement("a");

        // Set the URL of the file you want to download
        downloadLink.href = "https://www.africau.edu/images/default/sample.pdf"; // Replace with the actual file URL

        // Set the download attribute to specify the filename
        downloadLink.download = "sample.pdf"; // Replace with the desired filename

        // Programmatically trigger a click event on the anchor element
        downloadLink.click();
    });


    //Connect Back to top button 
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}