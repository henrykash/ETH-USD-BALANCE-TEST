// Import ethers library
import { Contract, JsonRpcProvider, ethers, formatEther, formatUnits, parseUnits } from "ethers";
import { Config } from "../config/config";

// Connect to the Ethereum network
const provider = new JsonRpcProvider(Config.JSON_RPC);

// Create an instance of the USDT contract
const usdtContract = new Contract(
  Config.USDT_CONTRACT,
  Config.USDT_ABI,
  provider
);

/**
 *
 * @param address the address to get usdt balance
 * @returns the usdt balance of an address
 */
export const getUsdtBalance = async (address: string) => {
  try {
    
      const balance = await usdtContract.balanceOf(address);
      const formattedBal = formatUnits(balance.toString(), 6)
      console.log(`USDT Balance: ${formattedBal}`);
       return formattedBal
  } catch (error) {
    console.log("Unable to get USDT balance", error);
  }
};

/**
 *
 * @param address the address to get the eth-balace
 * @returns the eth-balance of the address
 */
export const getEthBalance = async (address: string) => {
  try {
    
      const balance = await provider.getBalance(address);
      // Convert the balance from wei to ether
      const balanceInEth = formatEther(balance);
      console.log(`ETH Balance: ${balanceInEth}`);
      return balanceInEth
  } catch (error) {
    console.log("Unable to get eth balance ", error);
  }
};
