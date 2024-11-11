import Cookies from 'js-cookie';

export const CheckTokenExpiration = ()=>{
const token = Cookies.get('token');
if(!token) return;

const expirationDate = Cookies.get('token-expiration')
const now = new Date().getTime();

if(now >= Number(expirationDate)){
    
    logout();//exit of web
};
   setTimeout(CheckTokenExpiration, 60 * 1000)//verificate each minute

}