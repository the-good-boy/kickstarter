import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0B93CD1389cCFd1bA6EBF626Fd6615C375E860F4'
);

export default instance;