import {screen, fireEvent, waitFor, render} from "@testing-library/react"
import { Iproduct, MarketProduct } from "../app/components/productMarkets"
import { userSett } from "../context/loginContext"
//no global of userSett
jest.mock('../context/loginContext',()=>({
    userSett: jest.fn()
}))
describe('MarketProduct',()=>{
    const mockProduct:Iproduct[] = [{name:'product A', price:'21', description:'description of product A',modelo:"xy", category:"celular"},//db
        //{name:'product B', price:'21', description:'description of product A', modelo:"xy", category:"celular"}
    ]
    const mockSetUser = jest.fn();
    const mockSetCart = jest.fn();
    const mockSetUserVacio=jest.fn()

    let mockUser = {email:"sadsd@hotmail.com",password:'123123123'}
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it('render the list of product and button',()=>{
        (userSett as jest.Mock).mockReturnValue({
            user:{email:'dasdasd@hotmail.com',password:'dasdasd'},
            cart:['product A'],
            setUser:mockSetUser,
            setCart:mockSetCart
        })
     render(<MarketProduct product={mockProduct}/>)

     mockProduct.forEach((prod)=>{
        const productElement = screen.getAllByText((_,element)=>{
   const h1Element = element?.querySelector('h1');
   const aElement = element?.querySelector('a');

     if(!h1Element || !aElement) return false;

     const productText = `${h1Element.textContent?.trim()} ${aElement.textContent?.trim()} `
      
        return new RegExp(`Product:\\s*${prod.name}`, 'i').test(productText)
        })


      expect(screen.getByText(new RegExp(`Price:\\s*${prod.price}`, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`Description:\\s*${prod.description}`, 'i'))).toBeInTheDocument();
     });
  
     expect(screen.getByRole('button',{name:/Add/i})).toBeInTheDocument();
    })

    it('should add the new product in the cart',()=>{

        (userSett as jest.Mock).mockReturnValue({
            user:{email:'dasdasd@hotmail.com',password:'dasdasd'},
            cart:['product A'],
            setUser:mockSetUser,
            setCart:mockSetCart
        })

        render(<MarketProduct product={mockProduct}/>)
          
        const addProduct = screen.getAllByRole('button',{name:/Add/i});
        fireEvent.click(addProduct[0])
         
        expect(mockSetCart).toHaveBeenCalledWith(['product A','0'])
    })
      
    it('show the alert if the user does not exist',()=>{

        (userSett as jest.Mock).mockReturnValue({
            user:{email:'', password:''},
            cart:['product A'],
            setUser:mockSetUser,
            setCart:mockSetCart
        })
        window.alert = jest.fn();
      render(<MarketProduct product={mockProduct}/>)
      
      const allbubtton = screen.getAllByRole('button',{name:/Add/i})
      fireEvent.click(allbubtton[0])
    
      expect(window.alert).toHaveBeenCalledWith('have to register you first')
      expect(mockSetCart).not.toHaveBeenCalled()

    })

})
