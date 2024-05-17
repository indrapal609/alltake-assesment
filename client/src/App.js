import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css'
import { getData, uploadCsvFile } from './redux/actions/userAction';
function App() {
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);

  const {alldata}=useSelector(
    state => state.user
  );

   const dispatch=useDispatch();
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type !== 'text/csv') {
      setFile(null);
    } else {
      setFile(uploadedFile);


 
    }
  };


  useEffect(()=>{
     dispatch(getData());
  },[dispatch,alldata])

  const HandleSubmit=(e)=>{

      e.preventDefault();
      console.log("OK working",file)
      const formData=new FormData();
      formData.append('file',file);

      dispatch(uploadCsvFile(formData))

  }

 

  return (
<>
    <div class="container">
    <h1 class="title">CSV File Uploader</h1>
    <form id="uploadForm" onSubmit={HandleSubmit}>
      <div class="form-group">
        <label for="fileInput">Upload CSV File</label>
        <input  type='file'  id="fileInput" accept=".csv"   onChange={handleFileChange}/>
      </div>
      <button type="submit">Upload</button>
    </form>
  </div>

     
<div>
<h1>House List</h1>
<table>
  <thead>
    <tr>
      <th>Price</th>
      <th>Area</th>
      <th>Bedrooms</th>
      <th>Bathrooms</th>
      <th>Stories</th>
      <th>Main Road</th>
      <th>Guest Room</th>
      <th>Basement</th>
      <th>Hot Water Heating</th>
      <th>Air Conditioning</th>
      <th>Parking</th>
      <th>Preferred Area</th>
      <th>Furnishing Status</th>
    </tr>
  </thead>
  <tbody>
  {alldata && alldata.map((house, index) => {
         return (      <tr key={index}>
        <td>{house.price}</td>
        <td>{house.area}</td>
        <td>{house.bedrooms}</td>
        <td>{house.bathrooms}</td>
        <td>{house.stories}</td>
        <td>{house.mainroad}</td>
        <td>{house.guestroom}</td>
        <td>{house.basement}</td>
        <td>{house.hotwaterheating}</td>
        <td>{house.airconditioning}</td>
        <td>{house.parking}</td>
        <td>{house.prefarea}</td>
        <td>{house.furnishingstatus}</td>
      </tr>
    )
})
}
  </tbody>
</table>
</div>
</>
  );
}

export default App;
