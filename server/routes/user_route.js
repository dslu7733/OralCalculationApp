let url = require('url')
let User = require('../db/user.js')
let express = require('express')

let router = express.Router()


router.get('/user/edit', function (req, res) {
  if (req.query !== {}) {
    var query = User.findOne({
      'name': req.query.name
    }).exec((err, user) => {
      if (err) {
        console.log('user_route.js: err in find user' + err)
      } else {
        //console.log(user)
        if (user === null) {
          var user = new User({
            ...req.query
          })
          user.save((err, res) => {
            if (err) {
              console.log('user_route.js: add new user err ' + err)
            } else {
              console.log('user_route.js: succeed add new user ' + res)
            }
          })
        } else {
          User.findOneAndUpdate({
            name: req.query.name
          }, {
            grade: req.query.grade
          }, (err, doc) => {
            if (err) {
              console.log('user_route.js: update user err ' + err)
            } else {
              console.log('user_route.js: update user success ' + doc)
            }
          })
        }
      }

    })
    res.end('')
  }
  res.end('')

})

module.exports = router
