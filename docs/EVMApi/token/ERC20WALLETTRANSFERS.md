# ERC20 WALLET TRANSFER API

The ERC20 wallet Transfer Api is used to get all ERC20 transfers by wallet

<!-- How to call the enpiont  -->

## Endpoint URL

```text
https://web3-express-api.vercel.app/v1/getERC20TransfersByWallet/address:
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

### Example Request

```text
https://web3-express-api.vercel.app/v1/getERC20TransfersByWallet/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
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
--request GET 'https://web3-express-api.vercel.app/v1/getERC20TransfersByWallet/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' \
--header 'x-api-key: {MORALIS_API_KEY}'
```

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
