# ERC20 WALLET TRANSFER API

## What is the ERC20WALLETTRANSFERS Api

The ERC20 wallet Transfer Api is used to get all ERC20 transfers by wallet

<!-- How to call the enpiont  -->

<!-- Prerequisites -->

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Moralis](https://docs.moralis.io/)

## How to use the ERC20WALLETTRANSFER API

### Endpoint URL

```text
Get https://web3-express-api.vercel.app/v1/getERC20TransfersByWallet/address:
```

### Parameters

| Parameter Name | Description | Required | Type | Parameter Type |
| :--- | :--- | :--- | :--- | :--- |
| address | The ENS address to resolve | Yes | string | Path |
|x-api-key| The API key for the Moralis server | Yes | string | Header |

### Example Request

```text
https://web3-express-api.vercel.app/v1/getERC20TransfersByWallet/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
````

<!-- tabs -->

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

{% endtab %}

{% endtab %}

## Example Response Body

```json
{
  "total": "null,",
  "page": "0,",
  "page_size": "100,",
  "cursor": "null,",
  "result": []
}
```

## Error Responses

| Error Code | Description |
| :--- | :--- |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

