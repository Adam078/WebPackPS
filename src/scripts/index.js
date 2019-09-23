import '../style/index.css'
import _ from 'lodash'


function printConsole(){
  const courseValue = 1000
  console.log(`I would pay ${courseValue} for this awesome course! We have year ${new Date(_.now()).getFullYear()}`) // eslint-disable-line
}

printConsole()

