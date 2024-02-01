import express from "express";
import { getEthBalance, getUsdtBalance } from "../helpers/helpers";
import { ethers } from "ethers";

const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.status(200).send({
    status: "success",
    msg: "Connected to the ETH-USDT-BALANCE_TEST project",
  });
});

router.post("/usdt-balance", async (req: any, res: any) => {
  try {
    const { address } = req.body;
    const isValidAdress = ethers.getAddress(address);
    const usdtBal = await getUsdtBalance(isValidAdress);
    if (usdtBal) {
      res.status(200).send({
        status: "success",
        msg: usdtBal,
      });
    }
  } catch (error) {
    res.status(400).send({
      status: "error",
      msg: "Invalid address or unable to retrieve balance.",
    });
  }
});

router.post("/eth-balance", async (req: any, res: any) => {
  try {
    const { address } = req.body;
    const isValidAdress = ethers.getAddress(address);
    const ethBal = await getEthBalance(isValidAdress);

    res.status(200).send({
      status: "success",
      msg: ethBal,
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      msg: "Invalid address or unable to retrieve balance.",
    });
  }
});

export default router;
module.exports = router;
