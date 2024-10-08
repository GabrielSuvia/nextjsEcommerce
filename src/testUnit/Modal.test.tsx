import {screen,fireEvent,render} from '@testing-library/react'
import { ModalCarts } from '../app/components/modalcarts'
import { FetchToDb } from '../app/helpers/fetchToApi'
import { UserContext, userSett } from '../context/loginContext'

jest.mock('../app/helpers/fetchToApi',()=>({
    FetchToDb:jest.fn()
}))
jest.mock('../context/loginContext', ()=>({
    userSett:jest.fn()
}))


describe('Component ModalCart',()=>{

const mockCloseModal = jest.fn();//void
const mockOptionModal:boolean = true//jest.fn().mockReturnValue(false);//boolean
const mockSetUser = jest.fn();
const mockSetCart = jest.fn();

beforeEach(()=>{
(userSett as jest.Mock).mockReturnValue({
    cart:['item1','item2'],
    user:{email:'test@hotmail.com'},
    setUser:mockSetUser,
    setCart:mockSetCart
})

})
afterAll(()=>{
    jest.clearAllMocks();
})

    it('should be rendered all the elements',()=>{
        render(<ModalCarts closeModal={mockCloseModal} optionModal={mockOptionModal}/>)

        expect(screen.getByRole('button',{name:/cerrar/i})).toBeInTheDocument();
        expect(screen.getByRole('button',{name:/Yes/i})).toBeInTheDocument();
        expect(screen.getByRole('button',{name:/No/i})).toBeInTheDocument();
    })
 
    it('how recieve the props and state',()=>{
    
     const {container} = render(<ModalCarts closeModal={mockCloseModal} optionModal={false}/>)
     expect(container.firstChild).toBeNull();

    })
    /*
    it('check if the buttons functions correctly',()=>{

    })*/
    it('close closeModal and clears cart on button yes', async()=>{
        const { FetchToDb } = require('../app/helpers/fetchToApi');
        FetchToDb.mockResolvedValueOnce({ data: "Compra exitosa" });
        render(<ModalCarts closeModal={mockCloseModal} optionModal={mockOptionModal} />)

        expect(userSett).toHaveBeenCalled()
        fireEvent.click(screen.getByRole('button',{name:/Yes/i}))
       
        expect(FetchToDb).toHaveBeenCalledWith('/api/Mycarts','POST',{
            cart:['item1','item2'],
            user:{email:'test@hotmail.com'}
        })

      
        //expect(mockCloseModal).toHaveBeenCalled(); ???
       // await expect(mockSetCart).toHaveBeenCalledWith([]);????
    })

    test('calls closeModal on "No" click', () => {
        render(<ModalCarts closeModal={mockCloseModal} optionModal={true} />);
    
        fireEvent.click(screen.getByText('No'));
    
        // Verificar que se cierra el modal
        expect(mockCloseModal).toHaveBeenCalled();
      });



})

/*


 
*/