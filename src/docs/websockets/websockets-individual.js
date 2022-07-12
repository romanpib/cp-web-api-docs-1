const websocketsInstitutional = [
    {
        category: 'Market Data',
        items: [
            {
                id: 'streaming-data',
                title: 'Streaming Market Data',
                content: `
                <p>
                    Streaming level 1, top-of-the-book, market data is available for all instruments using the Client Portal API. For streaming data the topic <b>smd+conid+{arguments}</b> is used. 
                    The conid is the instrument's unique identifier within Interactive Brokers' database. By default conIDs will use SMART routing, where supported. If you wish to specify the exchange, the conid should be modified into the format <b>conid@EXCHANGE</b>, where EXCHANGE is the exchange on which the contract trades.
                    In order to find the conid for a particular instrument, the endpoint '/iserver/secdef/search' can be used.

                </p>
                <h5>Example: Request streaming close price and day percent change for APPL contract</h5>
                <p>
                    In order to request streaming market data, a subscription request must first be sent for the specific contract. In this case, we know that the APPL@NASDAQ contract
                    has a contract ID of 265598. In addition, we must also specify the fields that should be returned. In this case we are interested in fields 31 - close price, and 83 - the % change, or difference between the last price and the close price for the previous day.
                    For a list of available tags, please see the <a href='/endpoints'>endpoint explorer</a>.  
                </p>
                <div class='code'>
                    <code>
                        smd+265598+{"fields":["31","83"]}
                    </code>
                </div>
                `
            },
            {
                id: 'historical-data',
                title: 'Historical Data',
                content: `
                <p>
                For streaming historical data, the topic smh+conid is used. There are also optional params available in Json format. If no params are specified then pass an empty {} param. If a param is specified incorrectly it will be ignored and default returned. For details on the conid review Market Data (Level I) section. Only a max of 5 concurrent request available at a time. To unsubscribe, the topic is umh+serverId whereby use the serverId from the received data.
                </p>
                <h5>Example: Request AAPL historical trade high data for past 2 hours with 5 mins bars</h5>
                <div class='code'>
                    <code>
                        smh+265598+{"exchange":"ISLAND","period":"2h","bar":"5min","outsideRth":false,"source":"t","format":"%h/%l"}
                    </code>
                </div>
                <p>
                    The following response will be returned:
                </p>
                <div class='code'>
                    <code>
                    {
                        "serverId": "341115",
                        "symbol": "AAPL",
                        "text": "AAPLE INC",
                        "priceFactor": 100,
                        "startTime": "20210317-18:00:00",
                        "high": "12586/14469/65",
                        "low": "12283/34103/0",
                        "timePeriod": "7200s",
                        "barLength": 300,
                        "mdAvailability": "S",
                        "mktDataDelay": 0,
                        "outsideRth": false,
                        "volumeFactor": 1,
                        "priceDisplayRule": 1,
                        "priceDisplayValue": "2",
                        "negativeCapable": false,
                        "messageVersion": 2,
                        "data": [...],
                        "points": 23, 
                        "topic": "smh+265598",
                    }                   
                    </code>
                </div>
                <p>
                    Note the server ID associated with the subscription. In order to unsubscribe from the topic, we send the unsubscription message with the server ID:
                </p>
                <div class='code'>
                    <code>
                        umh+{serverId}
                    </code>
                </div>
                `,
            }
        ]
    },
    {
        category: 'Order & Positions Operations',
        items: [
            {
                id: 'live-orders',
                title: 'Live Orders',
                content: `
                <p>
                    As long as an order is active, it is possible to retrive it using the Web API. For streaming live orders the topic is sor. Once live orders are requested we will start to relay back when there is an update. To receive all orders for the current day the endpoint /iserver/account/orders?force=false can be used. It is advised to query all orders for the current day first before subscribing to live orders. To unsubscribe from live orders, the topic is uor.
                </p>
                <div class='code'>
                    <code>
                    sor+{}
                    </code>
                </div>
                <p>
                    Which returns the following, sample, response:
                </p>
                <div class='code'>
                    <code>
                    {
                        "topic": "sor" ,
                        "args": [
                          {
                            "acct": "DU1234",
                            "conid": 265598,
                            "orderId": 922048212,
                            "cashCcy": "USD",
                            "sizeAndFills": "0/1",
                            "orderDesc": "Buy 100 Limit 372.00 GTC",
                            "description1": "AAPL",
                            "ticker": "AAPL",
                            "secType": "STK",
                            "listingExchange": "NASDAQ.NMS",
                            "remainingQuantity": 100.0,
                            "filledQuantity": 0.0,
                            "companyName": "APPLE INC",
                            "status": "Submitted",
                            "origOrderType": "LIMIT",
                            "supportsTaxOpt": "1",
                            "lastExecutionTime": "200708173551",
                            "lastExecutionTime_r": 1594229751000,
                            "orderType": "Limit",
                            "side": "BUY",
                            "timeInForce": "GTC",
                            "price": 372,
                            "bgColor": "#000000",
                            "fgColor": "#00F000"
                           }
                         ]
                      }
                    </code>
                </div>
                <p>
                    To unsubscribe from live order updates, the topic uor is sent:
                </p>
                <div class='code'>
                    <code>
                        uor+{}
                    </code>
                </div>
                <p>
                    When there is an update to your order only the change to the order is relayed back along with the orderId. Most commonly this would involve status changes and partial fills. 
                    <br>
                    An example of a status change is:
                </p>
                <div class='code'>
                    <code>
                    {
                        "topic": "sor" ,
                        "args": [
                          {
                            "acct": "DU1234",
                            "orderId": 352055828,
                            "status": "PendingSubmit",
                            "fgColor": "#3399CC"
                           },
                          {
                            "acct": "DU1234",
                            "orderId": 352055828,
                            "status": "PreSubmitted",
                            "bgColor": "#FFFFFF",
                            "fgColor": "#0000CC"
                           },
                          {
                            "acct": "DU1234",
                            "orderId": 352055828,
                            "status": "Submitted",
                            "bgColor": "#000000",
                            "fgColor": "#00F000"
                           }
                        ]
                    }
                    </code>
                </div>
                <p>
                    And an example of a partial fill is:
                </p>
                <div class='code'>
                    <code>
                    {
                        "topic": "sor" ,
                        "args": [
                          {
                            "acct": "DU1234",
                            "orderId": 352055828,
                            "sizeAndFills": "100/622",
                            "remainingQuantity": 622.0,
                            "filledQuantity": 100.0,
                            "avgPrice": "382.45",
                           },
                          {
                            "acct": "DU1234",
                            "orderId": 352055828,
                            "sizeAndFills": "700/22",
                            "remainingQuantity": 22.0,
                            "filledQuantity": 700.0,
                           },
                          {
                            "acct": "DU1234",
                            "orderId": 352055828,
                            "sizeAndFills": "722",
                            "orderDesc": "Sold 722 Limit 382.40 GTC",
                            "remainingQuantity": 0.0,
                            "filledQuantity": 722.0,
                            "status": "Filled",
                            "timeInForce": "GTC",
                            "price": 382.4,
                            "bgColor": "#FFFFFF",
                            "fgColor": "#000000"
                           }
                         ]
                      }
                    </code>
                </div>
                `
            },
            {
                id: 'weekly-trades',
                title: 'Weekly Trades Details',
                content: `
                <p>
                    To review a list of your trades for the current day and six previous days use the topic str. If trades are required of less than 7 days, "days" parameter can be passed with integer value corresponding to the number of days needed (1 represents today and value can be upto 7). For updates you would only receive new orders as they fill. To receive only new trade updates and no previous trades, "realtimeUpdatesOnly" parameter can be passed. To unsubscribe from trades, the topic is utr.                </p>
                </p>
                <div class='code'>
                    <code>
                        str+{}
                    </code>
                </div>
                <p>
                    Which returns the following, sample, response:
                </p>
                <div class='code'>
                    <code>
                    {
                        "topic": "str" ,
                        "args": [
                          {
                            "execution_id": "0000e0d5.60cf1bd1.01.01",
                            "symbol": "AAPL",
                            "supports_tax_opt": "1",
                            "side": "B",
                            "order_description": "Bot 1 @ 130.64 on ISLAND",
                            "trade_time": "20210408-22:10:01",
                            "trade_time_r": 1617919801000,
                            "size": 1,
                            "price": "130.64",
                            "order_ref": "66807500",
                            "submitter": "apara428",
                            "exchange": "ISLAND",
                            "commission": "0.35",
                            "net_amount": 130.64,
                            "account": "DU26214",
                            "accountCode": "DU26214",
                            "company_name": "APPLE INC",
                            "contract_description_1": "AAPL",
                            "sec_type": "STK",
                            "listing_exchange": "NASDAQ.NMS",
                            "conid": "265598",
                            "conidex": "265598",
                            "clearing_id": "IB",
                            "clearing_name": "IB",
                            "liquidation_trade": "0"
                           }
                         ]
                      }
                    </code>
                </div>
                <p>
                    To unsubscribe from live trade updates, the topic utr is sent:
                </p>
                <div class='code'>
                    <code>
                        utr+{}
                    </code>
                </div>
                <h5>Example: Request real-time updates only</h5>
                <div class='code'>
                    <code>
                        str+{"realtimeUpdatesOnly": true}
                    </code>
                </div>
                <h5>Example: Request trades for the last 1 day</h5>
                <div class='code'>
                    <code>
                        str+{"days": 1}
                    </code>
                </div>
                `,
            },
            {
                id: 'profit-and-loss',
                title: 'Profit & Loss Updates',
                content: `
                <p>
                    For existing positions it is possible to receive Profit and Loss updates to the Web API using the topic spl. In the payload response the daily profit and loss (dpl) and unrealized profit and loss (upl) are received as a total value for all positions. Updates are relayed back as quickly as once per second but can vary based on market activity. To unsubscribe from profit and loss the topic is upl.                </p>
                </p>
                <div class='code'>
                    <code>
                        spl+{}
                    </code>
                </div>
                <p>
                    Which returns the following, sample, response:
                </p>
                <div class='code'>
                    <code>
                    {
                        "topic": "spl" ,
                        "args": {
                          "DU1234.Core": {
                            "rowType":1,
                            "dpl":-57520.0
                            "upl":972100.0
                          }
                        }
                    }
                    </code>
                </div>
                <p>
                    In order to unsubscribe, the upl topic is sent:
                </p>
                <div class='code'>
                    <code>
                        upl+{}
                    </code>
                </div>
                `,
            },

        ]
    },
    {
        category: 'Miscellanous Operations',
        items: [
            {
                id: 'echo',
                title: 'Echo',
                content: `
                <p>
                    To maintain an active websocket connection the topic ech is used to send a hearbeat with the argument hb. It is advised to send a heatbeat at least once per minute.
                </p>
                <div class='code'>
                    <code>
                        ech+hb
                    </code>
                </div>
                `
            },
            {
                id: 'ping-session',
                title: 'Ping Session',
                content: `
                <p>
                    To maintain a session for accessing /iserver or /ccp endpoints use the topic tic. It is advised to ping the session at least once per minute. It still requires the UI to send the endpoint /tickle every few minutes or when expires from /sso/validate = 0.
                </p>
                <div class='code'>
                    <code>
                        tic
                    </code>
                </div>
                `
            },
        ]
    },
    {
        category: 'Unsolicted Messages',
        items: [
            {
                id: 'system-connection-message',
                title: 'System Connection',
                content: `
                <p>
                When initially connecting to websocket the topic system relays back a confirmation with the corresponding username. While the websocket is connecting every 10 seconds there after a heartbeat with corresponding unix time (in millisecond format) is relayed back. An example response is:
                </p>
                <div class='code'>
                    <code>
                    {
                        "topic": "system" ,
                        "success": "user123"
                    }
                    </code>
                </div>
                `
            },
            {
                id: 'authentication-status',
                title: 'Authentication Status',
                content: `
                <p>
                    When connecting to websocket the topic sts will relay back the status of the authentication. Authentication status is already relayed back if there is a change, such as a competing sessions.                
                </p>
                <div class='code'>
                    <code>
                        {
                            "topic": "sts" ,
                            "args": {
                                "authenticated": true
                            }
                        }
                    </code>
                </div>
                `
            },
            {
                id: 'notifications',
                title: 'Notifications',
                content: `
                <p>
                    If there is a brief message regarding trading activity the topic ntf will be sent.
                </p>
                <div class='code'>
                    <code>
                    {
                        "topic": "ntf" ,
                        "args": {
                          "id": INDICATIVE_DATA_SUGGESTION ,
                          "text": "CFD quotes reference the trade, volume and bid/ask market data on the underlying STK" ,
                          "title": "Warning" ,
                          "url": "https://interactivebrokers.com/"
                            }
                      }      
                    </code>
                </div>
                `
            },
            {
                id: 'bulletins',
                title: 'Notifications',
                content: `
                <p>
                    If there is an urgent message concerning exchange issues, system problems and other trading information the topic blt is sent along with the message argument.
                </p>
                <div class='code'>
                    <samp>
                    {
                        "topic": "ntf" ,
                        "args": {
                          "id": INDICATIVE_DATA_SUGGESTION ,
                          "text": "CFD quotes reference the trade, volume and bid/ask market data on the underlying STK" ,
                          "title": "Warning" ,
                          "url": "https://interactivebrokers.com/"
                            }
                      }      
                    </samp>
                </div>
                `
            },
        ]
    },
]

export default websocketsInstitutional;