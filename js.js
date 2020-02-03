function openForm() {
     document.getElementById("loginPopup").style.display="block";
   }

   function closeForm() {
     document.getElementById("loginPopup").style.display= "none";
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     var modal = document.getElementById('loginPopup');
     if (event.target == modal) {
       closeForm();
     }
   }

   let modalBtn = document.getElementById("modal-btn");
   let modal = document.querySelector(".modal");
   let closeBtn = document.querySelector(".close-btn");
   let xit =  document.getElementById("f2");
   let xet =  document.getElementById("f1");
   //let modalBtn = document.querySelectorAll("modal-btn");

   modalBtn.onclick = function()
   {
     modal.style.display = "block";
     xit.style.display = "block";
   }
   closeBtn.onclick = function(){
     modal.style.display = "none";
   }
   window.onclick = function(e){
     if(e.target == modal){
       modal.style.display = "none";
     }
   }



   // let modalBtnn = document.getElementById("modal-btnn")
   // let modall = document.querySelector(".modall")
   // let closeBtnn = document.querySelector(".close-btnn")
   // modalBtnn.onclick = function(){
   //   modall.style.display = "block"
   // }
   // closeBtnn.onclick = function(){
   //   modall.style.display = "none"
   // }
   // window.onclick = function(e){
   //   if(e.target == modall){
   //     modall.style.display = "none"
   //   }
   // }


// var x = document.getElementsByClassName('elemente');
