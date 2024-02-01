export const Config = {
  JSON_RPC: process.env.JSON_RPC,
  USDT_CONTRACT: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT contract address (for Ethereum Mainnet)
  USDT_ABI: ["function balanceOf(address owner) view returns (uint256)"], 
};
