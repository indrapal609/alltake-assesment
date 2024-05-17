import validator from 'validator';

const isRequired = (field, type) => {
  return !field ? `${type} is required` : null;
};

const isEmail = email => {
  return !validator.isEmail(email) ? `Invalid email address` : null;
};

const isStrongPassword = password => {
  return password.length < 6 || password.length > 64
    ? `Invalid password`
    : null;
};

export const validateLoginForm = formData => {
  const errors = {};
  errors.email = isRequired(formData.email, 'Email') || isEmail(formData.email);
  errors.password =
    isRequired(formData.password, 'Password') ||
    isStrongPassword(formData.password);

  if (!errors.email) {
    delete errors.email;
  }
  if (!errors.password) {
    delete errors.password;
  }
  return errors;
};


