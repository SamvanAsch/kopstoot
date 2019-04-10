const fs = require( 'fs' )
const path = require('path')
const _ = require('lodash')

const pagesArray = fs.readdirSync(path.join(__dirname, '../views/pages/'))
const componentsArray = fs.readdirSync(path.join(__dirname, '../views/components/'))
const configurationArray = fs.readdirSync(path.join(__dirname, '../views/configuration/'))

const helper = function(value) {
  if(value !== 'index.ejs') {
    return value.split('.ejs')[0]
  }
}

const pages = _.map(pagesArray, helper)
const components = _.map(componentsArray, helper)
const configuration = _.map(configurationArray, helper)

module.exports = {
  pages,
  configuration,
  components,
}
