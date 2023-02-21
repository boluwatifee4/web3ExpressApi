# ERC20TOKENADDRESS API

## What is the ERC20TOKENADDRESS Api?

The ERC20TOKENADDRTESS Api is used to get all ERC20 tokens owned by an address.

<!-- How to call the enpiont  -->

## How to use the Resolve ENS Name API

### Endpoint Url

```text
https://web3-express-api.vercel.app/v1/getERC20Tokens/address:
```

### Request Method

* GET

### Authentication

* x-api-key

### Parameters

| Parameter Name | Description | Required | Type | Parameter Type |
| :--- | :--- | :--- | :--- | :--- |
| address | The ENS address to resolve | Yes | string | Path |
|x-api-key| The API key for the Moralis server | Yes | string | Header |

### Example Request Url

```text
https://web3-express-api.vercel.app/v1/getERC20Tokens/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
```

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

```bash
curl \
--request GET 'https://web3-express-api.vercel.app/v1/getERC20Tokens/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' \
--header 'x-api-key: {MORALIS_API_KEY}'
```

{% endtab %}

{% endtab %}

## Example Response Body

```json
{
    "token_address": "0xefd6c64533602ac55ab64442307f6fe2c9307305",
    "name": "APE",
    "symbol": "APE",
    "logo": null,
    "thumbnail": null,
    "decimals": 18,
    "balance": "101715701444169451516503179"
  }
```
