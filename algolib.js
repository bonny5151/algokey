algo = require("algosdk")
server =new algo.Algodv2("", "https://mainnet-api.algonode.cloud", 443)


accountinformation = async function(addr) {
 
  return server.accountInformation(addr || addr.addr).do()
}

getaccount = function(mnemonic) {
  return algo.mnemonicToSecretKey(mnemonic)
}

newaccount = function() {
 return algo.generateAccount()
}

send = async function({wallet, to, amount}) {
  var p = await server.getTransactionParams().do()
  var t =await algo.makePaymentTxnWithSuggestedParamsFromObject({from: wallet.addr, to: to, amount: amount * 1e6, suggestedParams: p})
  var r =await  server.sendRawTransaction(t.signTxn(wallet.sk)).do()
  console.log(r)
  var w = await algo.waitForConfirmation(server, r.txId,2)
  return {r, w, t}
}

