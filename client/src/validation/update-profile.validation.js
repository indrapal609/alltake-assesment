import validator from 'validator';

const isEmail = email => {
  if (!email.length) return null;
  return !validator.isEmail(email) ? `Invalid email address` : null;
};

const isSmallName = name => {
  if (!name.length) return null;
  return name.length < 3 ? `Name should be greater than 3 characters` : null;
};

const isBigName = name => {
  if (!name.length) return null;
  return name.length > 64 ? `Name should be less than 64 characters` : null;
};

export const validateUpdateProfileForm = formData => {
  const errors = {};
  errors.name = isSmallName(formData.name) || isBigName(formData.name);
  errors.email = isEmail(formData.email);
  if (!errors.name) {
    delete errors.name;
  }
  if (!errors.email) {
    delete errors.email;
  }
  return errors;
};
