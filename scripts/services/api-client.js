//Network call code
import URL from '../utils/constant.js';
async function makeNetworkCall(){
    //fetch always gives you promise but awaut gives you response
    try{//now our async code sync
    const response=await fetch(URL);//Block
    const object=await response.json();
    return object //Wrapped in promise
    }catch(err){
        console.log('Some Problem in API call ',err);
        throw err;
    }
    // const URL='https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json';
    // const promise=fetch(URL)//it requires end point of pizza//start a new thread
    // console.log('Promise is', promise);//assign to thread
    // promise.then(response=>{//inside promise.then thier is callback fun same as promise 2
    //     console.log('Response in ' ,response);
    //     const promise2=response.json(); //desrialization json to obj
    //     promise2.then(data=>console.log('Data is ',data)).catch(e=>console.log('JSON parse error ',e));
    // }).catch(err=>{
    //     console.log('Error is ' ,err);
    // })
}   
export default makeNetworkCall;