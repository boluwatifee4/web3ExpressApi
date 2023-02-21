# MULTISIGWALLETBAL API

## What is the MULTISIGWALLETBAL Api

The MULTISIGWALLET Api is used retrieve the native balance of a multi-signature wallet.

<!-- How to call the enpiont  -->

## How to use the Resolve Unstoppable Domain Name API

### Endpoint Url 

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
| domain | The Unstoppable Domain name to resolve | Yes | string | Path |
|x-api-key| The API key for the Moralis server | Yes | string | Header |

### Example Request Url

```text
https://web3-express-api.vercel.app/v1/getMultiSigBalance/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
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
curl \
--request GET 'https://web3-express-api.vercel.app/v1/getMultiSigBalance/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' \
--header 'x-api-key: {MORALIS_API_KEY}'
```

{% endtab %}

{% endtab %}

# Example Response Body 

```json 
{
  "balance": "900051407680925500000"
}
```
