// navigation
  // const navEl=document.querySelector('.navColor');
  //   window.addEventListener('scroll', ()=>{
  //   if(window.scrollY>=0){
  //         navEl.classList.add('navbar-fixed-top');
  //        }
  //        else{
  //          navEl.classList.remove('navbar-fixed-top');
  //        }
  //   });

    ///Btn Increase
  let BtnIncreaseQuantity = document.getElementById("btn-increase-quantity");
  let BtnDecreaseQuantity = document.getElementById("btn-decrease-quantity");
  let quantity = document.getElementById("quantity");

  BtnIncreaseQuantity.addEventListener("click", () => {
    console.log("message");
    var value = parseInt(quantity.value);
    if (value < 50) {
      quantity.value = value + 1;
    }
  });
  BtnDecreaseQuantity.addEventListener("click", () => {
    var value = parseInt(quantity.value);
    if (value > 0) {
      quantity.value = value - 1;
    }
  });