import { LoginAuth } from "@/app/components/authLogin";


const Login: React.FC = ()=>{

    return (<div style={{background:'lightblue', minHeight: '100vh',height:'auto', position:'relative'}}>
        <div style={{position:'relative', top:'150px',right:'-500px' , border:'2px solid', width:'300px'}}>
        <h2 className="text-center">Welcome</h2>
        <LoginAuth/>
        </div>
        </div>)
}
export default Login;