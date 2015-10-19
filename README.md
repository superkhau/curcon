#curcon -- currency converter

Command-line utility for converting currencies using the [Open Exchange Rates API](https://openexchangerates.org/).

##Installation

1. Install the app globally

    ```
    npm install -g curcon
    ```

2. Export your Open Exchange Rates App ID key in your startup file (`.bash_profile`, `.bashrc`, etc)


    ```
    export OPEN_EXCHANGE_RATES_APP_ID=...
    ```

##Usage

`curcon [amount] [from] [to]`

For example, to convert 100 Canadian dollars to Japanese Yen:

```
curcon 100 cad jpy // 92.32
```

###`amount` - Number

The amount to convert. Defaults to `1`.

###`from` - String

Any valid currency code such as `CAD`. Defaults to `CAD`.

###`to` - String

Any valid currency code such as `JPY`. Defaults to `JPY`.
