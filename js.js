function openForm() {
     document.getElementById("loginPopup").style.display="block";
   }

   function closeForm() {
     document.getElementById("loginPopup").style.display= "none";
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     var modal = document.getElementById("loginPopup");
     if (event.target == modal) {
       closeForm();
     }
   }


// popup nossa eqyi

   let modalBtn1 = document.getElementById("modal-btn-1")
   let modal1 = document.querySelector(".modal1")
   let closeBtn1 = document.querySelector(".close-btn-1")
   modalBtn1.onclick = function(){
     modal1.style.display = "block"
   }
   closeBtn1.onclick = function(){
     modal1.style.display = "none"
   }
   window.onclick = function(e){
     if(e.target == modal1){
       modal1.style.display = "none"
     }
   }



   let modalBtn2 = document.getElementById("modal-btn-2")
   let modal2 = document.querySelector(".modal2")
   let closeBtn2 = document.querySelector(".close-btn-2")
   modalBtn2.onclick = function(){
     modal2.style.display = "block"
   }
   closeBtn2.onclick = function(){
     modal2.style.display = "none"
   }
   window.onclick = function(e){
     if(e.target == modal2){
       modal2.style.display = "none"
     }
   }

// Modal popup perfil 3 //
   let modalBtn3 = document.getElementById("modal-btn-3")
   let modal3 = document.querySelector(".modal3")
   let closeBtn3 = document.querySelector(".close-btn-3")
   modalBtn3.onclick = function(){
     modal3.style.display = "block"
   }
   closeBtn3.onclick = function(){
     modal3.style.display = "none"
   }
   window.onclick = function(e){
     if(e.target == modal3){
       modal3.style.display = "none"
     }
   }


   // Modal popup perfil 4 //
      let modalBtn4 = document.getElementById("modal-btn-4")
      let modal4 = document.querySelector(".modal4")
      let closeBtn4 = document.querySelector(".close-btn-4")
      modalBtn4.onclick = function(){
        modal4.style.display = "block"
      }
      closeBtn4.onclick = function(){
        modal4.style.display = "none"
      }
      window.onclick = function(e){
        if(e.target == modal4){
          modal4.style.display = "none"
        }
      }

      // Modal popup perfil 5 //
         let modalBtn5 = document.getElementById("modal-btn-5")
         let modal5 = document.querySelector(".modal5")
         let closeBtn5 = document.querySelector(".close-btn-5")
         modalBtn5.onclick = function(){
           modal5.style.display = "block"
         }
         closeBtn5.onclick = function(){
           modal5.style.display = "none"
         }
         window.onclick = function(e){
           if(e.target == modal5){
             modal.style.display = "none"
           }
         }
