import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance= new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa4121DdC0240271602B9beD935082F31F068e2ac'
);

export default instance