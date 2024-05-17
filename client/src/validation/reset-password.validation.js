const isRequired = (field, type) => {
  return !field ? `${type} is required` : null;
};

const isSmallPassword = password => {
  return password.length < 6
    ? `Password should be greater than 6 characters`
    : null;
};

const isBigPassword = password => {
  return password.length > 64
    ? `Password should be less than 64 characters`
    : null;
};

export const validateResetPasswordForm = formData => {
  const errors = {};
  errors.password =
    isRequired(formData.password, 'Password') ||
    isSmallPassword(formData.password) ||
    isBigPassword(formData.password);
  if (!errors.password) {
    delete errors.password;
  }
  return errors;
};
