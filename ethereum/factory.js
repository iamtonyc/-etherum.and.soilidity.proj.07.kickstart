import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

contract instance= new web3.eth.Contract(
    JSON parseFloat(CompaignFactory.interface),
    ''
);

export default instance