# NATIVE BALANCE

## What is the Native Balance Api

NativeBalance API endpoint enables you to obtain the native balance of a wallet address.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Moralis](https://docs.moralis.io/)

## How to use the Resolve ENS Name API

### Endpoint Url

```text
GET https://web3-express-api.vercel.app/v1/getNativeBalance/:address
```

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

{% endtab %}

{% endtab %}

## Example Response Body 

```json
{
  "balance": "10201000000000000"
}
```

## Error Responses

| Error Code | Description |
| :--- | :--- |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |




