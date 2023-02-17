# ERC20 TOKEN VAULT API

## What is the ERC20 Token Vault Api

The ERC20TOKENVAULTBAL Api is used to get the native balance of an ERC20 token vault.

## Prerequisites

-   [Node.js](https://nodejs.org/en/download/)
-   [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
-   [Moralis](https://docs.moralis.io/)

## How to use the Resolve ENS Name API

### Endpoint Url 

```text
Get https://web3-express-api.vercel.app/v1/getERC20TransfersByWallet/address:
```

### Parameters

| Parameter Name | Description | Required | Type | Parameter Type |
| :--- | :--- | :--- | :--- | :--- |
| address | The ENS address to resolve | Yes | string | Path |
|x-api-key| The API key for the Moralis server | Yes | string | Header | 

### Example Request Url

```text
https://web3-express-api.vercel.app/v1/getERC20VaultBalance/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
```

{% tabs %}

{% tab title="React.js" %}

{% endtab %}

{% tab title="vanilla.js"}

{% endtab %}

{% tab title="Angular"}

{% endtab %}

{% tab title="Vue.js"}

{% endtab %}

{% tab title="Curl" %}

```bash
x-api-key: J0z4vfkCmqGFlqy7RzkQsMWRlsUcR5Ek3Ftl1AbMbjx9cBFHIfq9uvfyVOVNtsRe

curl --location --request GET 'https://web3-express-api.vercel.app/v1/getERC20VaultBalance/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' \ 
```

{% endtab %}

{% endtabs %}

## Example Response Body 

```json
{
  "balance": "900051407680925500000"
}
```

## Error Responses

| Error Code | Description |
| :--- | :--- |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |




