
var color = ["#f51b1b", "#ed85e1", "#09db48"]
var i = 0;
document.querySelector("button").addEventListener("click", function(){
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i]
   
})


function myFormReset() {
  document.getElementById("form").reset();
}

//Declare a function to select the design//

function designSelectOnchage() {

  var showDesign = document.getElementById("right_content_id");
  var designValue = document.getElementById("design_select").value;
  
  if (designValue === 'design_one') {
      showDesign.style.display = "block";
      showDesign.style.background = 'url(image/one.png)';
      showDesign.style.width = '687px';
      showDesign.style.backgroundRepeat = "no-repeat";

  

  } else if (designValue === 'design_two') {
      showDesign.style.display = "block";
      showDesign.style.background = 'url(image/five.png)';
      showDesign.style.width = '687px';
   
      showDesign.style.backgroundRepeat = "no-repeat";
  }
  else if (designValue === 'design_three') {
      showDesign.style.display = "block"; 
      showDesign.style.background = 'url(image/three.png)';
      showDesign.style.backgroundRepeat = "no-repeat";
  }
  else {
      // showDesign.style.display = "none";
  }
}

//Function to Display the Bride Name from left input on to the card//

function firstNameBride(value) {
  document.getElementById("display_first_name_bride").innerHTML = value;
}
//Function to Display the Groome Name from left input on to the card//

function firstNameGroome(value) {
  document.getElementById("display_first_name_groome").innerHTML = value;
  document.getElementById("showAnd").innerHTML = '&';
  document.getElementById("eventName").innerHTML = 'Wedding Receiption';
}

function getMessageValue(value) {
  document.getElementById("display_message").innerHTML = value;
}

function getDateInput(date) {
  document.getElementById("display_date").innerHTML = "Date: " + date;
}

function getVenuAddress(value) {
  document.getElementById("display_venu_address").innerHTML = "Venu Address: " + value;
}

function printDiv(divName) {
  var originalContents = document.body.innerHTML;

  var printContents = document.getElementById(divName).innerHTML;
  
  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
