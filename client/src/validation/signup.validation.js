import validator from 'validator';

const isRequired = (field, type) => {
  return !field ? `${type} is required` : null;
};

const isEmail = email => {
  return !validator.isEmail(email) ? `Invalid email address` : null;
};

const isSmallName = name => {
  return name.length < 3 ? `Name should be greater than 3 characters` : null;
};

const isBigName = name => {
  return name.length > 64 ? `Name should be less than 64 characters` : null;
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

const isPasswordMatched = (password, confirmPassword) => {
  return password !== confirmPassword ? `Passwords not matched` : null;
};

export const validateSignupForm = formData => {
  const errors = {};
  errors.name =
    isRequired(formData.name, 'Name') ||
    isSmallName(formData.name) ||
    isBigName(formData.name);
  errors.email = isRequired(formData.email, 'Email') || isEmail(formData.email);
  errors.password =
    isRequired(formData.password, 'Password') ||
    isSmallPassword(formData.password) ||
    isBigPassword(formData.password) ||
    isPasswordMatched(formData.password, formData.confirmPassword);
  errors.confirmPassword = isPasswordMatched(
    formData.password,
    formData.confirmPassword
  );
  errors.avatar = isRequired(formData.avatar, 'avatar');

  if (!errors.name) {
    delete errors.name;
  }
  if (!errors.email) {
    delete errors.email;
  }
  if (!errors.confirmPassword) {
    delete errors.confirmPassword;
  }
  if (!errors.password) {
    delete errors.password;
  }
  if (!errors.avatar) {
    delete errors.avatar;
  }
  return errors;
};
