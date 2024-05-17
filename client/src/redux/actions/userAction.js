import { server } from '../store';
import axios from 'axios';



//uploadXlsxFile -> Upload Xlsx file 

export const uploadCsvFile = formData => async dispatch => {
  try {
    dispatch({ type: 'uploadXlsxFileRequest' });

     

    const { data } = await axios.post(`${server}/admin/uploadcsv`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch({ type: 'uploadXlsxFileSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'uploadXlsxFileFail',
      payload: error.response.data.message,
    });
  }
};

export const getData = () => async dispatch => {
  try {
   
    const { data } = await axios.get(`${server}/admin/getdata`, {
      
      withCredentials: true,
    });

    dispatch({ type: 'getdataSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getdataFail',
      payload: error.response.data.message,
    });
  }
};
