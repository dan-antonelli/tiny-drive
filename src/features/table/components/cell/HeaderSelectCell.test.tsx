import { render, fireEvent } from '@testing-library/react';

import HeaderSelectCell from './HeaderSelectCell';

import '@testing-library/jest-dom';

// expect.extend({
//   toBeIndeterminate(received: HTMLElement) {
//     const element = received;
//     const pass = element.getAttribute('aria-checked') === 'mixed';
//     if (pass) {
//       return {
//         message: () =>
//           `expected element with id ${received.id} not to be indeterminate`,
//         pass: true,
//       };
//     } else {
//       return {
//         message: () =>
//           `expected element with id ${received.id} to be indeterminate`,
//         pass: false,
//       };
//     }
//   },
// });

describe('HeaderSelectCell', () => {
  let mockToggleAllPageRowsSelected: jest.Mock;

  beforeEach(() => {
    mockToggleAllPageRowsSelected = jest.fn();
  });

  test('renders without crashing', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => false}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    expect(getByLabelText('Select all')).toBeInTheDocument();
  });

  test('calls toggleAllPageRowsSelected on checkbox click', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => false}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    fireEvent.click(getByLabelText('Select all'));

    expect(mockToggleAllPageRowsSelected).toHaveBeenCalled();
  });

  // TODO: Fix this test
  // test('checkbox is indeterminate when some rows are selected', () => {
  //   const { getByLabelText } = render(
  //     <HeaderSelectCell
  //       getIsAllPageRowsSelected={() => false}
  //       getIsSomePageRowsSelected={() => true}
  //       toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
  //     />
  //   );

  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //   expect(getByLabelText('Select all')).toBeIndeterminate();
  // });

  test('checkbox is checked when all rows are selected', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => true}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    expect(getByLabelText('Select all')).toBeChecked();
  });

  test('checkbox is unchecked when no rows are selected', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => false}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    expect(getByLabelText('Select all')).not.toBeChecked();
  });
});
