function showModel() {
  let model = document.querySelector(".model");

  // click on button  to open model
  let openModel = document.querySelector(".openModel");
  openModel.onclick = function () {
    if (model.style.display === "none") {
      model.style.display = "block";
    } else {
      model.style.display = "none";
    }
  };
  //   click anywhere on window to close model
  window.onclick = function (Model) {
    if (Model.target == model) {
      model.style.display = "none";
    }
  };
  //   click on close button to close model
  let closeBtn = document.querySelector(".model .modelContent .imgCont .close");
  closeBtn.onclick = function () {
    model.style.display = "none";
  };
  //   click on cancel button  to close model
  let cancel = document.querySelector(".model .modelContent .cont .cancelBtn");
  cancel.onclick = function () {
    model.style.display = "none";
  };
}
window.onload = showModel;
