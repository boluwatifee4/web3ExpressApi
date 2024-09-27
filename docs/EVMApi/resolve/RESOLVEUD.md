# RESOLVE UNSTOPPABLE DOMAIN NAME

The Resolve Unstoppable Domain Name API is used to resolve an Unstoppable Domain name. This API is used to get the address of an Unstoppable Domain name.

<!-- How to call the enpiont  -->

### Endpoint Url

```text
https://web3-express-api.vercel.app/v1/resolveUdDomains/:domain
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
https://web3-express-api.vercel.app/v1/resolveUdDomains/brad.zil
```

{% tabs %}

{% tab title="React.js" %}

```jsx
import React from 'react';
import axios from 'axios';

const app = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const getDomain = async () => {
            const headers = {
                "x-api-key": "bahdjkdkadlmkjajhd899rkf"
            }

            const response = await axios.get(
                'https://web3-express-api.vercel.app/v1/resolveUdDomains/brad.zil',
                { headers: headers }
            );
            setData(response.data);
        };
        getDomain();
    },[[...])

    return (
        <div>
            <h1>Resolve Unstoppable Domain Name</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default app;
```

{% endtab %}

{% tab title="Vanilla JS" %}

```js

const fetchData = async () => {
    const headers = {
        "x-api-key": "bahdjkdkadlmkjajhd899rkf"
    }

    const response = await axios.get(
        'https://web3-express-api.vercel.app/v1/resolveUdDomains/brad.zil',
        { headers: headers }
    );
    console.log(response.data);
};
```

{% endtab %}

{% tab title="Angular" %}

```ts
// In service file

resolveUnstoppableDomains(domainName:string): Observable<any> {
    return this.http.get(`https://web3-express-api.vercel.app/v1/r/resolveUdDomains/${address}`, headers)
}

// In component file

this.service.resolveUnstoppableDomains('bard.zil').subscribe((data) => {
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
        'https://web3-express-api.vercel.app/v1/resolveUdDomains/brad.zil',
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
--request GET 'https://web3-express-api.vercel.app/v1/resolveUdDomains/brad.zil' \
--header 'x-api-key: {MORALIS_API_KEY}'
```


{% endtab %}

{% endtabs %}

# Example Response Body

```json
{
    "address": "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
}
```
