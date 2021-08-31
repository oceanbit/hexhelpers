# Hex Helpers

A set of CLI utilities for converting hex numbers to other bases and vise-versa

## Install

```sh
npm i -g decimaltohex
npm i -g binarytohex
npm i -g hextodecimal
npm i -g hextobinary
```

## Use

You can either specify the numerical input as a command line argument or pipe the number (preferred).

```sh
hextodecimal f2
hextobinary f2
decimaltohex 12
binarytohex 101
```

or

```sh
echo "f2" | hextodecimal
echo "f2" | hextobinary
echo "12" | decimaltohex
echo "101" | binarytohex
```
