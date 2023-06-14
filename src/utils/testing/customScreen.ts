import { queries, within } from '@testing-library/react';
import { getAllIconsByName } from '@components/icon/icon.customQueries';

const allQueries = {
  ...queries,
  getAllIconsByName,
};

export const customScreen = within(document.body, allQueries);
