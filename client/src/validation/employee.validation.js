
const isRequired = (field, type) => {
  return !field ? `${type} is required` : null;
};

const isUAN = UAN_NO => {
    return UAN_NO.length < 6 || UAN_NO.length > 13
      ? `Invalid UAN Number`
      : null;
  };

  const isESIC = ESIC_NO=> {
    return ESIC_NO.length < 6 || ESIC_NO.length > 11
      ? `Invalid ESIC Number`
      : null;
  };

  const isAadhar = Aadhar_NO=> {
    return Aadhar_NO.length!=12
      ? `Invalid Aadhar Number Number`
      : null;
  };










export const validateEmployeeForm=formData=>{


    const errors = {};
    errors.UAN_NO = isRequired(formData.UAN_NO, 'UAN') || isUAN(formData.UAN_NO);
    // errors.password =
    //   isRequired(formData.password, 'Password') ||
    //   isStrongPassword(formData.password);
  
    if (!errors.UAN_NO) {
      delete errors.UAN_NO;
    }
    
    return errors;

}