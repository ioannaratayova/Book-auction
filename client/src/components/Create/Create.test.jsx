import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Create } from './Create';


// Mock the context values
jest.mock('../../contexts/Context', () => ({
    ...jest.requireActual('../../contexts/Context'), // Use the actual context implementation
    useContext: jest.fn(() => ({
      onCreateBookSubmit: jest.fn(),
      errorCreate: '',
      setErrorCreate: jest.fn(),
    })),
  }));
  
  

describe('Create Component', () => {
  test('Renders the form elements', () => {
    render(<Create />);
    
    // Add your assertions for rendering form elements
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Genre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Starting Price')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Duration')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Image URL')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

//   test('Form submission calls onSubmit handler', () => {
//     const onSubmitMock = jest.fn();
//     render(
//       <Context.Provider value={{ onCreateBookSubmit: onSubmitMock, errorCreate: '', setErrorCreate: jest.fn() }}>
//         <Create />
//       </Context.Provider>
//     );
  
//     // Simulate user input and submit form
//     fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Test Name' } });
//     fireEvent.change(screen.getByPlaceholderText('Genre'), { target: { value: 'Test Genre' } });
//     // Add similar fireEvent calls for other input fields
  
//     fireEvent.click(screen.getByText('Create'));
  
//     // Assert that onSubmitMock was called
//     expect(onSubmitMock).toHaveBeenCalled();
//   });
  

  // Add more tests as needed for other functionalities
});
