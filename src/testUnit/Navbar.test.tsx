import {screen, fireEvent, render} from "@testing-library/react"
import { Navbar } from "../app/components/Navbar"
import { userSett } from "../context/loginContext"
import { useRouter } from "next/navigation"
import { mock } from "node:test"

jest.mock('../context/loginContext',()=>({
    userSett:jest.fn()
}))

jest.mock('next/navigation',()=>({
useRouter:jest.fn()
}))

describe('component Navbar', ()=>{
    const mockSetUser = jest.fn();
    const mockPush=jest.fn();
beforeEach(()=>{
    
(useRouter as jest.Mock).mockReturnValue({
    push:mockPush
})
jest.clearAllMocks();
})

it('render the nav of component without user',()=>{
    (userSett as jest.Mock).mockReturnValue({
        user:{email:""},
    })
    render(<Navbar/>)

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
})

it('should show the navbar when the user login',()=>{
    (userSett as jest.Mock).mockReturnValue({
        user:{email:'soyuncrack123@hotmail.com', password:'123123'},
        setUser:mockSetUser
    })

    render(<Navbar/>)
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    //with a user
    expect(screen.getByText('Mycarts')).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/Logout/i})).toBeInTheDocument()
    
})
it('the user could exit with the button',()=>{
    (userSett as jest.Mock).mockReturnValue({
        user:{email:'soyuncrack123@hotmail.com', password:'123123'},
        setUser:mockSetUser
    })
    render(<Navbar/>)
    const logoutUser = screen.getByRole('button',{name:/Logout/i})
    fireEvent.click(logoutUser);
    expect(mockSetUser).toHaveBeenCalledWith({email:"",password:""});
    expect(mockPush).toHaveBeenCalledWith('/')
})
})