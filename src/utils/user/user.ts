export const getFullName = (firstName = '', lastName = '') => {
  const separator = firstName && lastName ? ' ' : '';

  return `${firstName}${separator}${lastName}`;
};
