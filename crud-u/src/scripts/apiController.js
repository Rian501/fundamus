//contains all API functions

const $ = require("jquery")

const apiController = Object.create({}, {
  getMediaList: {
    value: function () {
      return $.ajax("http://localhost:3000/media")
    }
  },
  //get one by id
  getOneItem: {
    value: function (itemId) {
      return $.ajax(`http://localhost:3000/media/${itemId}`)
    }
  },
  //update one by id
  updateOneItem: {
    value: function (itemId, titleToChange) {
      return $.ajax({
        url: `http://localhost:3000/media/${itemId}`,
        method: "PATCH",
        data: {
          title: titleToChange
        }
      })
    }
  }


})

module.exports = apiController