export async function FetchToDb(url:string, method:string, data:any | undefined){

    try {
        const response = await fetch(url,{
        method:method,
        headers:{'Content-Type':'application/json'},
        body:data?(method === 'POST' || method === 'PUT')?JSON.stringify(data):null:null,
       })
        if(!response.ok){
        throw new Error('Error')
        };
        const responseApi = await response.json()
        return responseApi;  
    
    } catch (error) {
        console.error(error);
    };

}    