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

export const validateUpdatePasswordForm = formData => {
  const errors = {};
  errors.oldPassword =
    isRequired(formData.oldPassword, 'Old password') ||
    isSmallPassword(formData.oldPassword) ||
    isBigPassword(formData.oldPassword);
  errors.newPassword =
    isRequired(formData.newPassword, 'New password') ||
    isSmallPassword(formData.newPassword) ||
    isBigPassword(formData.newPassword);
  if (!errors.oldPassword) {
    delete errors.oldPassword;
  }
  if (!errors.newPassword) {
    delete errors.newPassword;
  }
  return errors;
};
