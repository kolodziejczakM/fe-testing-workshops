const formatAdminName = (name: string): string => `⭐${name}⭐`;

export const getFullName = (firstName = '', lastName = ''): string => {
  const separator = firstName && lastName ? ' ' : '';

  return `${firstName}${separator}${lastName}`;
};

export const getUserName = ({
  isAdmin,
  firstName = '',
  lastName = '',
}: {
  firstName?: string;
  lastName?: string;
  isAdmin: boolean;
}): string => {
  return isAdmin ? formatAdminName('Admin') : getFullName(firstName, lastName);
};
