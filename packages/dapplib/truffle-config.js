require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift random still huge hope arena equal gasp'; 
let testAccounts = [
"0x699ac330bedea881baebcbcb85768674f9c774edd0b5be5a17576da88bfc13e6",
"0x0730cbb057dcdf914ecc6a68d6778d91b9e45b65dd23401cd11ccc3f36be9bdd",
"0x9aee496fc9116b9daa5116ed75cdaeda4a87a2676ed0e1c7b68cfc2b36e6ef99",
"0x03c99e7c00f0f56b5a4ac210e13a60db6dd489de6e6c97a5ea5c16a3e03d6bd0",
"0x3c9ee4ff80accdfc00338486a24b2985be95a148a57d766377c0ecd7ddda0062",
"0x24c30cae447636e1af3051f57bb00df2175c9042f172d44b35dcfa58fe32a59c",
"0xf0098818854372df17e00b903307f207f3675b7b544fe801a2cbca035ae62687",
"0x0c097f6ed418d435dea63d6c6a2c1fd5234c11d615d381e2b6b4c07f69ab1454",
"0x4fa0dc4d9772391cd7f16e86f1c5da813c66e72ff21e05578e600d130135f74c",
"0x6a146fb3f75c439e9ddbfb10c2be3d8cb4eee2235723f9bf52f28728bd491da0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

