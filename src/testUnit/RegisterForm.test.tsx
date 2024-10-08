import { FetchToDb } from "../app/helpers/fetchToApi";
import { useRouter } from "next/navigation";
import {render,screen,fireEvent, waitFor} from '@testing-library/react'
import { RegisterForm } from "../app/components/resgisterForm";


jest.mock('../app/helpers/fetchToApi',()=>({
    FetchToDb: jest.fn()
}))

describe('Register of user',()=>{

    beforeEach(() => {

        // Clear any previous mock calls
        
      });
afterAll(()=>{
    jest.clearAllMocks();
})

it('Render the input and button',()=>{

    render(<RegisterForm/>)
   //screen.debug();
   // expect(FetchToDb).toHaveBeenCalled()
   
   expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
   expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
   expect(screen.getByLabelText(/password/i, {selector:'input[name="password"]'})).toBeInTheDocument(); 
   expect(screen.getByLabelText(/confirPassword/i, {selector:'input[name="confirPassword"]'})).toBeInTheDocument(); // Note: This might be changed to "confirmPassword" in your actual component
   expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
   expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
   expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
   expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
})

it('display validation error on invalid input',async ()=>{
render(<RegisterForm/>)

fireEvent.click(screen.getByText(/Register/i))

expect(await screen.findByText(/the email is required/i)).toBeInTheDocument();
expect(await screen.findByText(/the name is required/i)).toBeInTheDocument();
 const password = await screen.findAllByText(/the password at least 8 character long/i);
 expect(password).toHaveLength(2);
expect(await screen.findByText(/the address is required/)).toBeInTheDocument();
expect(await screen.findByText(/the number is required/)).toBeInTheDocument();
expect(await screen.findByText(/the country is required/)).toBeInTheDocument();
expect(await screen.findByText(/the city is required/)).toBeInTheDocument();

})

it('submit the form with the valid data',async ()=>{
(FetchToDb as jest.Mock).mockResolvedValueOnce({body:{body:{
    email:'prueba123@hotmail.com',
    name:'elChaval123',
    password:'Dragondrinker123',
    confirPassword:'Dragondrinker123',
    address:'doble via la guardia',
    phone:4542544,
    country:'Bolivia',
    city:'Santa cruz de la sierra'
    },status:200}})
render(<RegisterForm/>)

fireEvent.change(screen.getByLabelText(/email/i),{target:{value:'prueba123@hotmail.com'}});
fireEvent.change(screen.getByLabelText(/name/i),{target:{value:'elChaval123'}});
fireEvent.change(screen.getByLabelText(/password/i,{selector:'input[name="password"]'}),{target:{value:'Dragondrinker123'}});
fireEvent.change(screen.getByLabelText(/confirPassword/i,{selector:'input[name="confirPassword"]'}),{target:{value:'Dragondrinker123'}});
fireEvent.change(screen.getByLabelText(/address/i),{target:{value:'doble via la guardia'}});
fireEvent.change(screen.getByLabelText(/phone/i),{target:{value:4542544}});
fireEvent.change(screen.getByLabelText(/country/i),{target:{value:'Bolivia'}});
fireEvent.change(screen.getByLabelText(/city/i),{target:{value:'Santa cruz de la sierra'}})
fireEvent.click(screen.getByText(/Register/i))

await waitFor(()=>{

   expect(FetchToDb).toHaveBeenCalledWith('http://localhost:3000/api/Register','POST',{
   email:'prueba123@hotmail.com',
   name:'elChaval123',
   password:'Dragondrinker123',
   confirPassword:'Dragondrinker123',
   address:'doble via la guardia',
   phone:'4542544',//numero en el input lo lectura como string
   country:'Bolivia',
   city:'Santa cruz de la sierra'
   })

})
})


})