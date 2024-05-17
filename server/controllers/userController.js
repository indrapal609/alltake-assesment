




import xlsx from 'xlsx';
import { House } from '../models/user.js';


export const uploadCsvFile = async (req, res, next) => {


  const file = req.file;
  
  const workbook = xlsx.read(file.buffer, { type: 'buffer' });

  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const jsonData = xlsx.utils.sheet_to_json(sheet);

  jsonData.map(async (v) => {
    const { price,
      area,
      bedrooms,
      bathrooms,
      stories,
      mainroad,
      guestroom,
      basement,
      hotwaterheating,
      airconditioning,
      parking,
      prefarea,
      furnishingstatus} = v; 

    const house = await House.create({
    price,
    area,
    bedrooms,
    bathrooms,
    stories,
    mainroad,
    guestroom,
    basement,
    hotwaterheating,
    airconditioning,
    parking,
    prefarea,
    furnishingstatus
    });
  });

  


  res.status(200).json({
    success: true,
    message: "File uploaded successfully",
  });

}


export const Alldata=async(req,res)=>{

  const alldata=await House.find({});
   
  console.log("working")
  res.status(200).json({
    success: true,
    alldata
  }); 
}
