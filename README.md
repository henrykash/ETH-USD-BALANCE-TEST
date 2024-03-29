# Ethereum Wallet Balance Checker

## Project Overview

This project provides a simple script that allows users to query the balances of Ethereum (ETH) and Tether (USDT) in a specified Ethereum wallet address. It's designed to offer a quick and easy way for users to check their cryptocurrency balances without needing to navigate through a blockchain explorer or wallet interface.

## Features

1. ETH Balance Query:   **Retrieves the current balance of Ethereum in the specified wallet.**
2. USDT Balance Query: **Retrieves the current balance of Tether (USDT) in the specified wallet.**

## Requirements
Node.js (version 12.x or higher recommended)

## Setup
- Clone the Repository
git clone https://github.com/Michaelloupa/ETH-USDT-BAL.git

- Then cd to this folder 
`cd ETH-USDT-BALANCE-TEST`

## Install Dependencies
 -Inside the project directory, run: 
 `npm install`

## Configuration
- Create a `.env` file and then provide your JSON_RPC foe ethereum mainnet or use this one:
  
  `https://go.getblock.io/31788de76faf4a1bb4f3e02d53ab32fc`

## Usage
- To run the script, use the following command from the root of the project directory:
`npm run start`

- Sending the request to the eth-balance endpoint:
  
  `http://localhost:3000/api/eth-balance`

 - This is for the eth-balance endpoint, POST request
   
  `{
  "address": "0x3e3CAD265A9E973D777586507b5e01e90e861622"
 }`

- Sending  the request to the usdt-balance

`http://localhost:3000/api/usdt-balance`

 - This is for the usdt-balance endpoint, POST request
 
  `{
  "address": "0x3e3CAD265A9E973D777586507b5e01e90e861622"
 }`
  


