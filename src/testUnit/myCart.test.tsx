import {screen, render, fireEvent, waitFor } from '@testing-library/react'
import { MyCart } from '../app/components/mycart' 
import { userSett } from '../context/loginContext'


jest.mock('../context/loginContext',()=>({
    userSett:jest.fn()
}))

describe('Component Mycart',()=>{
    const mockSetCart = jest.fn();
    const cart = ['product A','product B','product C'];
   
    beforeEach(()=>{
        (userSett as jest.Mock).mockReturnValue({
            setCard:mockSetCart,
            cart
          
        })
    
    })

    afterAll(()=>{
       jest.clearAllMocks();
    })

    it('Should render the product of cart',()=>{
        render(<MyCart/>)
    expect(screen.getByText('product A')).toBeInTheDocument()
    expect(screen.getByText('product B')).toBeInTheDocument()
    expect(screen.getByText('product C')).toBeInTheDocument()
    })

    it('Should be delete the product of the document',()=>{

        render(<MyCart/>)
        expect(screen.getByText('product A')).toBeInTheDocument()
        expect(screen.getByText('product B')).toBeInTheDocument()
        expect(screen.getByText('product C')).toBeInTheDocument()
        const Delete = screen.getAllByText('delete')[1];
         fireEvent.click(Delete)
       //  expect(mockSetCart).toHaveBeenCalledWith(['product A','product C'])
        
    })
})
