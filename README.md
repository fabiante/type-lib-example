# Type Lib Example

## Usage

Setup all projects:

```shell
cd sdk && npm i
cd ../consumer && npm i
```

Build the SDK:

```shell
cd sdk
npm run build
yalc publish
```

Build the consumer:

```shell
cd consumer

# run only once
yalc add sdk

npm run build
```

Run the consumer
