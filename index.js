#!/usr/bin/env node

var oxr = require('open-exchange-rates');
var fx = require('money');

var appId = process.env.OPEN_EXCHANGE_RATES_APP_ID;
if (!appId)
  throw new Error('Invalid Open Exchange Rates App ID');
oxr.set({app_id: appId});

oxr.latest(function() {
  fx.rates = oxr.rates;
  fx.base = oxr.base;

  var amount = process.argv[2] || 1;
  var from = process.argv[3] && process.argv[3].toUpperCase() || 'CAD';
  var to = process.argv[4] && process.argv[4].toUpperCase() || 'JPY';
  var decimalPlaces = process.argv[5] || 2;
  console.log(fx(amount).from(from).to(to).toFixed(decimalPlaces));
});
