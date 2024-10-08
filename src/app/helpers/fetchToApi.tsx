export async function FetchToDb(url:string, method:string, data:any){
    
try {
    if(typeof data === 'object'){
    const response = await fetch(url,{
    method:method,
    headers:{'Content-Type':'application/json'},
    body:(method === 'POST' || method === 'PUT')?JSON.stringify(data):null
   })
    
    if(!response.ok){
    throw new Error('Error')
    };
    const responseApi = await response.json()
    return responseApi;  }
} catch (error) {
    throw new Error('Bad request')
}};