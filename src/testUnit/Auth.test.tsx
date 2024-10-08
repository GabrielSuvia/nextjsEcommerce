import {render,screen,fireEvent,waitFor} from '@testing-library/react'
import { LoginAuth } from '../app/components/authLogin'
import { FetchToDb } from '../app/helpers/fetchToApi'
import { userSett } from '../context/loginContext'
import { useRouter } from 'next/navigation'

//mockeadno funcioens externas
jest.mock('../context/loginContext', () => ({
    userSett: jest.fn(),
  }));
  
  jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));
  
  jest.mock('../app/helpers/fetchToApi', () => ({
    FetchToDb: jest.fn(),
  }));
  
  const mockSetUser = jest.fn();
  const mockSetCart = jest.fn()
  const mockPush = jest.fn();

  beforeEach(() => {
   
    (userSett as jest.Mock).mockReturnValue({
      user: {email:'loquesea@hotmail.com', password:'Agelof'},
      setUser: mockSetUser,
      cart:['2'],
      setCart:mockSetCart
    });
  
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });
  
  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
  });

describe('LoginAuth', ()=>{

it('Render the inputs and button',()=>{
   render(<LoginAuth/>);
   screen.debug();
   expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
   expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
   expect(screen.getByText(/signup/i)).toBeInTheDocument()
   expect(screen.getByRole('button', {name:/login/i}))

})
it('show validation error on invalid input',async ()=>{
render(<LoginAuth/>)
//simula envio de formularios sin completar los campos
fireEvent.submit(screen.getByRole('button',{name:/login/i}));

//verifica que se mestren los mensajes de error(supponiendo el yup tiene mensajes de error)
await waitFor(()=>{
    expect(screen.getByText(/the email is required/i)).toBeInTheDocument()//sms error
    expect(screen.getByText(/the password at least 8 character long/i)).toBeInTheDocument()
})

})

it('submit the form with valid input',async ()=>{
(FetchToDb as jest.Mock).mockResolvedValueOnce({email:'test@example.com', password:'password123'})
render(<LoginAuth/>)
fireEvent.input(screen.getByLabelText(/email/i),{
    target: {value: 'test@example.com'}
})
fireEvent.input(screen.getByLabelText(/password/i),{
   target:{value:'password123'}

})

//simula el envio de formulario

fireEvent.click(screen.getByRole('button',{name:/login/i}))
await waitFor(()=>{
expect(FetchToDb).toHaveBeenCalledWith(
        'http://localhost:3000/api/Auth',
        'POST',
        { email: 'test@example.com', password: 'password123' })
//const User = userSett()
 expect(userSett).toHaveBeenCalled()
 expect(useRouter).toHaveBeenCalled()       
})

})})