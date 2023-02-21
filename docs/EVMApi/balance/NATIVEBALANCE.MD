# NATIVE BALANCE

## What is the Native Balance Api

NativeBalance API endpoint enables you to obtain the native balance of a wallet address.

## How to use the Resolve ENS Name API

### Endpoint Url

```text
https://web3-express-api.vercel.app/v1/getNativeBalance/:address
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

### Example Request URL

```text
https://web3-express-api.vercel.app/v1/getNativeBalance/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
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
--request GET 'https://web3-express-api.vercel.app/v1/getNativeBalance/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' \
--header 'x-api-key: {MORALIS_API_KEY}'
```

{% endtab %}

{% endtab %}

## Example Response Body 

```json
{
  "balance": "10201000000000000"
}
```
