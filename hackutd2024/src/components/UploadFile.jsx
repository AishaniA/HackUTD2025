import React from 'react';

function PDF() {
return(
    <div>
    <form action="/action_page.php">
  <input type="file" id="myFile" name="filename" multiple></input>
  <input type="submit"></input>
</form>
</div>
);
};
export default PDF;