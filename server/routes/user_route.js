let url = require('url')
let User = require('../db/user.js')
let express = require('express')

let router = express.Router()


router.post('/user/edit', function (req, res) {
  if (req.body !== {}) {
    var query = User.findOne({
      'name': req.body.name
    }).exec((err, user) => {
      if (err) {
        console.log('user_route.js: err in find user' + err)
        res.end("")
      } else {
        //console.log('user' + user)
        if (user === null) {
          var user = new User({
            ...req.body
          })
          user.save((err, res) => {
            if (err) {
              console.log('user_route.js: add new user err ' + err)
            } else {
              console.log('user_route.js: succeed add new user ' + res)
            }
          })
          res.end("")
        } else {
          if (user.errorRecord == null) //why null?
            user.errorRecord = []
          var oldErrRed = user.errorRecord

          if (req.body.errorRecord.length == 0) {
            User.findOneAndUpdate({
              name: req.body.name
            }, {
              grade: req.body.grade,
            }, (err, doc) => {
              if (err) {
                console.log('user_route.js: update user err ' + err)
              } else {
                //console.log('user_route.js: update user success ' + doc)
              }
            })

            res.end(JSON.stringify(oldErrRed))
          } else {
            User.findOneAndUpdate({
              name: req.body.name
            }, {
              grade: req.body.grade,
              errorRecord: oldErrRed.concat(req.body.errorRecord)
            }, (err, doc) => {
              if (err) {
                console.log('user_route.js: update user err ' + err)
              } else {
                //console.log('user_route.js: update user success ' + doc)
              }
            })

            var j = oldErrRed.length
            for (var i = 0; i < req.body.errorRecord.length; i++) {
              req.body.errorRecord[j].index = j
              j++
            }
            res.end(JSON.stringify(oldErrRed.concat(req.body.errorRecord)))
          }
        }
      }

    })
  }

})

module.exports = router
