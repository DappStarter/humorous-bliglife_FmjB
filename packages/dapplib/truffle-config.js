require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain eternal harvest derive bottom slot'; 
let testAccounts = [
"0xfd588e4c5eed1bc28a1a88d3e4c824c17ca5969ff449f3ea1d0d75fe3b8a4b5f",
"0x2349ff1719ac79e62072abb0f1b57e41fed5d6d00a883dfd4f1e97e3d4415f6e",
"0xdf6dcbdd3dd6ec7b825b555f0b445740f27b7d3a6bb62d1c23b3f613e43ad555",
"0x98d78b8047ade57f66d7194fde1ef334125d0dbbb8ebecaeb3424f1412cd9891",
"0xf9fc27c3da93560878e7e0145169001a6656fe2e6ca992c5d63aeb08d4fea2b4",
"0x243cbccefc75ba82c438fc3aa92668bf92676d3b7c28a9464f758245bf12ff4a",
"0xc355b1936d917a641396f100d0482d4d9c8513cf3583987c4203494819c2f634",
"0x54ba8bbc143b7758fe0d07eea0cf74dd9a15287e5bfb24d64d7d391d57066eb9",
"0x2fc71f4f7bcafe59a3468d646d0bc506085f5f6c30fa3454e3a84fee75cb720e",
"0x5b65e3730dfa74d98e169ca957ec39391baa9f5a98e4006596b73da3504b6f0d"
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

