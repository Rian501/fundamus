const $ = require("jquery")
const domBuilder = require("./domBuilder")
const apiController = require("./apiController");

domBuilder.printer()


//click event for media item title
$("#display-container").on("click", ".media-title-heading", () => {
  console.log("It does work", event.target.parentNode.id);
  apiController.getOneItem(event.target.parentNode.id)
    .then((stuffIaskedfor) => {
      console.log("stuff I asked for!", stuffIaskedfor);
      domBuilder.buildEditForm(stuffIaskedfor);
    })
})

//enter keypress in form
$("#display-container").on("keyup", ".edit-form-input", () => {
  if (event.which === 13) {
    let newTitle = $(".edit-form-input").val();
    console.log("new title", newTitle);
    console.log($(".edit-form-input").parent().attr("id"));
    apiController.updateOneItem($(".edit-form-input").parent().attr("id"), newTitle)
      .then((response) => {
        console.log(response);
        domBuilder.printer();
      })
  }
})