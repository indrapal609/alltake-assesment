import validator from 'validator';

const isRequired = (field, type) => {
  return !field ? `${type} is required` : null;
};

const isEmail = email => {
  return !validator.isEmail(email) ? `Invalid email address` : null;
};

export const validateForgetPasswordForm = formData => {
  const errors = {};
  errors.email = isRequired(formData.email, 'Email') || isEmail(formData.email);
  if (!errors.email) {
    delete errors.email;
  }
  return errors;
};
