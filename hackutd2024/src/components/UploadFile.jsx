import React from 'react';

function PDF() {
  return (
      <div>
        <form action="/action_page.php" method="post" encType="multipart/form-data">
          <input type="file" id="myFile1" name="filename1" multiple />
          <input type="file" id="myFile2" name="filename2" multiple />
         {/* <input type="submit" />*/}
        </form>
      </div>
    );
  }
  
  export default PDF;