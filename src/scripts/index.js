import css from '../style/index.css' // eslint-disable-line no-unused-vars
import _ from 'lodash'
import { getUsers, deleteUser } from '../api/userApi';
import { TrackJS } from 'trackjs';
TrackJS.install({
  token: "9b8829ab5452413fb19d88946cb4609e",
  application: "webpack"
});

TrackJS.track('Testing TrackJS!');

getUsers().then(result => {
  let userBody = "";

  _.forEach(result,(user)=>{
    userBody += `<tr>
        <td>&nbsp;</td>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>
    `;
  });

  global.document.getElementById('users').innerHTML = userBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function(event){
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });

});



