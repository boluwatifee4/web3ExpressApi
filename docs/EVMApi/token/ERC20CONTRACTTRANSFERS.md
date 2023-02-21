# ERC20CONTRACT TRANSFER API

## What is the ERC20CONTRACTTRANSFERS Api

The ERC20CONTRACTTRANSFERS API is used to to get all ERC20 transfers by contract.

<!-- How to call the enpiont  -->

## How to use the Resolve ENS Name API

### Endpoint Url

```text
https://web3-express-api.vercel.app/v1/getERC20Transfers/:address
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
https://web3-express-api.vercel.app/v1/getERC20Transfers/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
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
--request GET 'https://web3-express-api.vercel.app/v1/getERC20Transfers/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' \
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
