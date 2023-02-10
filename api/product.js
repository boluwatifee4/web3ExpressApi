const Moralis = require('moralis').default;
const express = require('express');
const { EvmChain } = require('@moralisweb3/common-evm-utils');
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */

let MORALIS_APIB_KEY = 'J0z4vfkCmqGFlqy7RzkQsMWRlsUcR5Ek3Ftl1AbMbjx9cBFHIfq9uvfyVOVNtsRe';
const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

let apiKey$ = "J0z4vfkCmqGFlqy7RzkQsMWRlsUcR5Ek3Ftl1AbMbjx9cBFHIfq9uvfyVOVNtsRe";

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

  // startServer(MORALIS_APIB_KEY);
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


router.get('/resolveUdDomains/:domain', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    //  await startServer(MORALIS_API_KEY);
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
  }
});


router.get('/resolveEns/:address', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  apiKey$ = MORALIS_API_KEY;
  // console.log(apiKey$)
  if (!MORALIS_API_KEY) {

    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    // reStartSever();
    try {
      const { address } = req.params;
      const result = await Moralis.EvmApi.resolve.resolveAddress({
        address,
      });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
})


// TOKEN APIS

// get all ERC20 tokens owned by an address

router.get('/getERC20Tokens/:address', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    try {
      const { address } = req.params;
      const chain = EvmChain.ETHEREUM;
      console.log(address);

      const result = await Moralis.EvmApi.token.getWalletTokenBalances({
        chain,
        address,
      });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
});

// get all ERC20 transfers by contract

router.get('/getERC20Transfers/:contract', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    try {
      const { contract } = req.params;
      const chain = EvmChain.ETHEREUM;

      const result = await Moralis.EvmApi.token.getTokenTransfers({
        chain,
        address,
      });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
});

// get all ERC20 transfers by wallet

router.get('/getERC20TransfersByWallet/:address', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    try {
      const { address } = req.params;
      const chain = EvmChain.ETHEREUM;

      const result = await Moralis.EvmApi.token.getWalletTokenTransfers({
        chain,
        address,
      });

      res.status(200).json(result); 
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
});

// get ERC20 metadata by contract

router.get('/getERC20Metadata/:contract', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    try {
      const { contract } = req.params;
      const chain = EvmChain.ETHEREUM;
      
      const result = await Moralis.EvmApi.token.getTokenMetadata({
        chain,
        address,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
});



// Balance api

// get the native balance of an address

router.get('/getNativeBalance/:address', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    try {
      const { address } = req.params;
      const chain = EvmChain.ETHEREUM;

      const result = await Moralis.EvmApi.balance.getNativeBalance({
        chain,
        address,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
});

// get the native balance of an ERC20 token vault

router.get('/getERC20VaultBalance/:address', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    try {
      const { address } = req.params;
      const chain = EvmChain.ETHEREUM;

      const result = await Moralis.EvmApi.balance.getERC20Balance({
        chain,
        address,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
});

// get the native balance of a multi-signature wallet

router.get('/getMultiSigBalance/:address', async (req, res) => {
  const MORALIS_API_KEY = req.headers['x-api-key'];
  if (!MORALIS_API_KEY) {
    res.status(500);
    res.json({ error: 'please add an x-api-key request header when sending requests' });
  } else {
    // await startServer(MORALIS_API_KEY);
    try {

      const { address } = req.params;
      const chain = EvmChain.ETHEREUM;

      const result = await Moralis.EvmApi.balance.getNativeBalance({
        chain,
        address,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ error: error.message });
    }
  }
});




const startServer = async () => {
  await Moralis.start({
    apiKey: apiKey$,
  });

};

const reStartSever = async () => {
    startServer();
}

reStartSever();

module.exports = router;
