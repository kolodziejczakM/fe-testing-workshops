import {
  queryHelpers,
  buildQueries,
  MatcherOptions,
} from '@testing-library/react';

export const queryAllIconByName = (
  container: HTMLElement,
  id: string,
  options?: MatcherOptions
) => queryHelpers.queryAllByAttribute('data-icon-name', container, id, options);

const getMultipleError = (_: unknown, val: string) =>
  `Found multiple elements with the data-icon-name attribute of: ${val}`;
const getMissingError = (_: unknown, val: string) =>
  `Unable to find an element with the data-icon-name attribute of: ${val}`;

const [, getAllIconsByName] = buildQueries(
  queryAllIconByName,
  getMultipleError,
  getMissingError
);

export { getAllIconsByName };
