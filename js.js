
// Popup Nossa Equipe //
   let modal1 = document.querySelector(".modal1");
   let closeBtn1 = document.querySelector(".close-btn-1");
   let novo = document.querySelectorAll(".profissionais");
   let ymg = document.querySelectorAll(".img-modal-1");
   let contt = document.querySelectorAll(".conteudo");
   var sn = 0;

   function neo(){

    novo.forEach((item, index) =>
    {
      item.addEventListener('click',function(e)
       {
        // novo[0].style.display = "block"
        modal1.style.display = "block";
        ymg[index].style.display = "block";
        contt[index].style.display = "block";
        sn = index;
       }
    )
    });
  }
  neo();

   closeBtn1.onclick = function(){
     modal1.style.display = "none";
     ymg[sn].style.display = "none";
     contt[sn].style.display = "none";

   }
   window.onclick = function(e){
     if(e.target == modal1){
       modal1.style.display = "none";
     }
   }
