const Moralis = require('moralis').default;
const express = require('express');
const cors = require('cors');
const { EvmChain } = require('@moralisweb3/common-evm-utils');
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */

const MORALIS_API_KEY = 'J0z4vfkCmqGFlqy7RzkQsMWRlsUcR5Ek3Ftl1AbMbjx9cBFHIfq9uvfyVOVNtsRe';
const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';


router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.get('/resolveUd/:domain', async (req, res) => {
  try {
      const { domain } = req.params;
      const result = await Moralis.EvmApi.resolve.resolveDomain({
          domain,
      });
      res.status(200).json(result);
  } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
  }
});
const startServer = async () => {
await Moralis.start({
  apiKey: MORALIS_API_KEY,
});
};
startServer();

module.exports = router;
