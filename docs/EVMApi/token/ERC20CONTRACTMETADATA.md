# ERC20CONTRACTMETADATA API

The ERC20CONTRACTMETADATA Api is used to get ERC20 metadata by contract.

<!-- How to call the enpiont  -->

## Endpoint Url

```text
https://web3-express-api.vercel.app/v1/getERC20Metadata/address:
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
https://web3-express-api.vercel.app/v1/getERC20Metadata/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
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
--request GET 'https://web3-express-api.vercel.app/v1/getERC20Metadata/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' \
--header 'x-api-key: {MORALIS_API_KEY}'
```

{% endtab %}

{% endtab %}

## Example Response Body

```json
{
  "address": "1.8037405964354346e+47",
  "name": "Uniswap,",
  "symbol": "UNI,",
  "decimals": "18",
  "logo": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.webp,",
  "logo_hash": "064ee9557deba73c1a31014a60f4c081284636b785373d4ccdd1b3440df11f43,",
  "thumbnail": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984_thumb.webp,",
  "block_number": "null,",
  "validated": "null,"
}
```
