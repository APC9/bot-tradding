require('dotenv').config()
const Storage = require('node-storage')
const { log, logColor, colors } = require('./utils/logger')
const client = require('./services/binance')
//const moment = require('moment')
//const fs = require('fs')
//const { NotifyTelegram } = require('./services/TelegramNotify')

const MARKET1 = process.argv[2]
const MARKET2 = process.argv[3]
const MARKET = MARKET1 + MARKET2
const BUY_ORDER_AMOUNT = process.argv[4]

const store = new Storage(`./data/${MARKET}.json`)
const sleep = (timeMs) => new Promise(resolve => setTimeout(resolve, timeMs))