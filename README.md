# Hex Helpers

A set of CLI utilities for converting hex numbers to decimal and vise-versa

## Install

```sh
npm i -g decimaltohex
npm i -g hextodecimal
```

## Use

You can either specify the numerical input as a command line argument or pipe the number (preferred).

```sh
hextodecimal f2
decimaltohex 12
```

or

```sh
echo "f2" | hextodecimal
echo "12" | decimaltohex
```
