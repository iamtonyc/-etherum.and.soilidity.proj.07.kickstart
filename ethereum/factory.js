import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance= new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    //'0xa4121DdC0240271602B9beD935082F31F068e2ac'
    //'0x48BCc459965DA99aCDCb5FaB08e06013DF272F7e'
    //'0xa590bF5f2196aC39209d0bB52023F699994763d6'
    //'0x74C1c4459082DFf46F7601b3f18bE3363Fa0170b'
    '0x909Be6f6389DfA773d50B7D9BB519609d43bE8c5'
);

export default instance