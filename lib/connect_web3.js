//web3インスタンスの生成とセットアップ
var web3 = require("web3");
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
