import Web3 from 'web3';

let web3;

if  (typeof window !=='undefined'  && typeof window.web3!='undefined')  {
    // We are in the browser and metamask is running.
    //web3= new Web3(window.web3.currentProvider);

    console.log('window.web3!=undefined');
    const provider = window.ethereum;
    provider.enable();
    web3 = new Web3(provider);
} else {
    console.log('window.web3==undefined');
    // we are the on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/425e2fa3e737495db08c6b1dc3611ea2'
    );
    web3= new Web3(provider);
}


export default web3;
