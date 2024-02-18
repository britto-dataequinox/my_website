import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBox from '../components/Searchbar';

test('SearchBox renders correctly', () => {
  const placeholderText = 'Search...';
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const searchValue = 'test';

  const { getByPlaceholderText, getByTestId } = render(
    <SearchBox
      placeholder={placeholderText}
      onSearch={handleSubmit}
      onChange={handleChange}
      searchValue={searchValue}
    />
  );

  const inputElement: any = getByPlaceholderText(placeholderText);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe(searchValue);

  const searchButton = getByTestId('SearchIcon');
  expect(searchButton).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'new value' } });
  expect(handleChange).toHaveBeenCalledTimes(1);

  fireEvent.click(searchButton);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
