//contains all API functions

const $ = require("jquery")

const apiController = Object.create({}, {
  getMediaList: {
    value: function () {
      return $.ajax("http://localhost:3000/media")
    }
  }
})

module.exports = apiController