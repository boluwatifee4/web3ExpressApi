# Getting Started With MORALISWEB3EXPRESS Api

Moralis Web3 Data APIs tackles typical Web3 challenges by indexing blockchain data in a structured manner. These APIs empower developers to effortlessly retrieve, access, and understand blockchain data.

## Acquire an Api Key

In order to use the Resolution Service API, it is necessary to obtain an API key from Unstoppable Domains. To request an API key for your integration, please send an email to partnerengineering@moralisweb3express.com.

## Authenticate Your Requests

The Resolution Service API uses `x-api-key` to authorize requests with the API key gotten from Unstoppable Domains.

|Field Name |Value |
|-----------|------|
|Security Scheme Type | HTTP |
|HTTP Authorization Scheme | x-api-key |
|x-api-key Format | a key provided by Moralis |

## API Endpoints Spec

Below is a table of all the API endpoints provided by the Moralisweb3Express, a description of their function, and links to their respective documentation. For more details about the endpoints, see the Resolution Service endpoint specific.

|Endpoint| Description| Documentation|
|--------|-------------|-----------------|
|Resolve Endpoint |
|Resolve an Ens Name | resolves an ENS domain name. | [Resolve an Ens Name](EVMApi/resolve/RESOLVEENS.md)
|Resolve an Unstoppable Name | resolves an Unstoppable Domain name. | [Resolve an Unstoppable Name](EVMApi/resolve/RESOLVEUD.md) |
|Balance Endpoints |
|NATIVE BALANCE | enables you to obtain the native balance of a wallet address. |[Get Native Balance of an Address](EVMApi/balance/NATIVEBALANCE.MD)
|ERC20TOKENVAULTBAL | get the native balance of an ERC20 token vault. | [Get Native Balance of an ERC20 token vault](EVMApi/balance/ERC20TOKENVAULTBAL.md)
|MULTISIGWALLETBAL | Retrieves the native balance of a multi-signature wallet. | [Get the native balance of a multi-signature wallet](EVMApi/balance/MULTISIGWALLETBAL.md) |
|Token Endpoints |
|Get all ERC20 Tokens Owned by an Address | Get all ERC20 Tokens Owned by an Address. | [Get all ERC20 Tokens Owned by an Address](EVMApi/token/ERC20TOKENADDRESS.md)
|Get all ERC20 transfers by contract | returns the ERC721 metadata information of a domain name. |  [Get all ERC20 transfers by contract](EVMApi/token/ERC20CONTRACTTRANSFERS.md)
|Get all ERC20 transfers by wallet | returns the image data of a domain name as a SVG string. | [Get all ERC20 transfers by wallet](EVMApi/token/ERC20WALLETTRANSFERS.md)
|Get all ERC20 metadata by contract | returns the image data of a domain name in image/svg+xml format. | [Get all ERC20 metadata by contract](EVMApi/token/ERC20CONTRACTMETADATA.md)

