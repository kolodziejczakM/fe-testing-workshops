// Cause it's not exported (private) we don't test it. We shouldn't export it only to write test for it.
const formatAdminName = (name: string): string => `⭐${name}⭐`;

export const getFullName = (firstName = '', lastName = ''): string => {
  const separator = firstName && lastName ? ' ' : '';

  return `${firstName}${separator}${lastName}`;
};

export const getUserName = ({
  isAdmin = false,
  firstName = '',
  lastName = '',
}: {
  firstName?: string;
  lastName?: string;
  isAdmin?: boolean;
} = {}): string => {
  return isAdmin ? formatAdminName('Admin') : getFullName(firstName, lastName);
};
