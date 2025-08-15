import { LoginAuth } from "@/app/components/authLogin";


const Login: React.FC = ()=>{

    return (<div>
        <div style={{position:'relative', top:'150px',right:'-500px' , border:'2px solid', width:'300px'}}>
        <h2 className="text-center">Welcome</h2>
        <LoginAuth/>
        </div>
        </div>)
}
export default Login;