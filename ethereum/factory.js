import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC31116a17Fbc550C387714e21184D0611426f7fC'
);

export default instance;
