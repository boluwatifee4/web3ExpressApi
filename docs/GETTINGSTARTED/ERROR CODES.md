# ERROR CODES

Below is a list of all the error codes you might encounter when using the Resolution Service API. The errors are in JSON format.

```JSON

{
    code: string, // one of our custom error names
    message: string, // human-readable error summary
    errors: [
        {
            httpCode: number, // error status code
            name: string, // one of our custom error names
            message: string // human-readable error summary
        }
    ]
}

```

| Error Code | Description |
| :--- | :--- |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |