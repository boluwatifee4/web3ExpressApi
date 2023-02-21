# RESOLVE ENS NAME

## What is the Resolve ENS Name API?

The Resolve ENS Name API helps you to resolve an ENS domain name and retrieve the corresponding wallet address.

<!-- How to call the enpiont  -->

## How to use the Resolve ENS Name API

### Endpoint Url

```text
https://web3-express-api.vercel.app/v1/resolveEns/:address
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
https://web3-express-api.vercel.app/v1/resolveEns/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
```

<!-- tabs -->

{% tabs %}

{% tab title="React.js" %}

```jsx
import React from 'react';
import axios from 'axios';

const app = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
    const headers = {
        "x-api-key": "bahdjkdkadlmkjajhd899rkf"
    }
    const result = await axios.get(
        'https://web3-express-api.vercel.app/v1/resolveEns/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
        { headers: headers }
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Resolve ENS Name</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default app;
```

{% endtab %}

{% tab title="Vanilla.js" %}

```js

const fetchData = async () => {
    const header = {
        "x-api-key": "bahdjkdkadlmkjajhd899rkf"
    }

    const result = await axios.get(
        'https://web3-express-api.vercel.app/v1/resolveEns/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
        { headers: header }
    );

    console.log(result.data);
};
```

{% endtab %}

{% tab title="Angular" %}

```ts
// in service file 
resolveEnsAddress(address:string): Observable<any> {
  return  this.http.get(`https://web3-express-api.vercel.app/v1/resolveEns/${address}`, headers)
}

// in component file

this.service.resolveEnsAddress('0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419').subscribe((data) => {
  console.log(data);
});
```

{% endtab %}

{% tab title="Vue.js" %}

```js
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const result = await axios(
        'https://web3-express-api.vercel.app/v1/resolveEns/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
      );
      this.data = result.data;
    },
  },
};
```

{% endtab %}

{% tab title="Curl" %}

```bash
curl \
--request GET 'https://web3-express-api.vercel.app/v1/resolveEns/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419' \
--header 'x-api-key: {MORALIS_API_KEY}'
```

{% endtab %}

{% endtabs %}

## Example Response Body

```json
{
    "name": "vitalik.eth"
}
```
