# curcon -- currency converter

Command-line utility for converting currencies using [Open Exchange Rates](https://openexchangerates.org/).

## Installation

```shell
npm install -g curcon
```

Export your Open Exchange Rates App ID in your startup file (`.bash_profile`, `.bashrc`, etc)

```
export OPEN_EXCHANGE_RATES_APP_ID=...
```

## Usage

To convert 100 Canadian dollars to Japanese Yen:

```
curcon 100 cad jpy 2
# curcon amount from to round-to
```

- `amount`: Number - The amount to convert. Defaults to 1.
- `from`: String - Any valid currency code such as CAD. Defaults to CAD.
- `to`: String - Any valid currency code such as JPY. Defaults to JPY.
- `round-to`: Number - The number of decimal places to round to. Defaults to 2.
