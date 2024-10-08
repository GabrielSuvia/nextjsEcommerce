import SearchProducts from '../app/components/search'
import { useRouter } from 'next/navigation'
import  {screen,render, fireEvent, waitFor } from '@testing-library/react'
import { userAgentFromString } from 'next/server'

jest.mock('next/navigation',()=>({
useRouter: jest.fn(),
}))


describe('Searchproduct', ()=>{
const mockPush= jest.fn()
beforeEach(()=>{

    (useRouter as jest.Mock).mockReturnValue({
        push:mockPush
    })

    global.fetch = jest.fn(()=>
    Promise.resolve({
        json:()=> 
            Promise.resolve({
           rest:[
            {name:'Products A',price:34, description:'description 1',}
           ]

        })
    })
    ) as jest.Mock
})
afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
  });

it('render all input of the component',()=>{

    render(<SearchProducts/>)
    
    expect(screen.getByPlaceholderText(/search products..../i)).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
});

it('handle input empty and does not sudmit', async()=>{
render(<SearchProducts/>)

//trying sudmitting without typing anything
fireEvent.click(screen.getByText(/search/i))

//ensure that fetch was not called
expect(mockPush).not.toHaveBeenCalled();
});

it('submit query and displays results', async ()=>{
     render(<SearchProducts/>)

     const input = screen.getByPlaceholderText(/search products..../i);
     const button = screen.getByRole('button',{name:/search/i});

     fireEvent.change(input, {target:{value:'test value'}});
     fireEvent.click(button);

     //ensure the api was called with the correct querry
     await waitFor(()=> expect(global.fetch).toHaveBeenCalledWith('/api/search?query=test value'))

     //ensure results are displayed
     await waitFor(()=> {
    expect(screen.getByText('Product:Products A')).toBeInTheDocument();
    // expect(screen.getByText('Price:34')).toBeInTheDocument();
     expect(screen.getByText('Description:description 1')).toBeInTheDocument();

    })
  //ensure the router was pushed with correct query

  expect(mockPush).toHaveBeenCalledWith('/pages/products?query=test%20value')

});

})
