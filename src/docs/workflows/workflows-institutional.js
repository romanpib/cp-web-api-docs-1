const workflowsInstitutional = [
    {
        category: 'Market Data',
        items: [
            {
                id: 'snapshot-request',
                title: 'Snapshot Requests',
                content: `
                <p>
                    Client Portal API allows API consumers to request market data snapshots for most instruments. In order to retrieve market data snapshots, the API consumer must first create a snapshot request subscription. The response contains details about the subscribed snapshot request, the symbol, and requested fields.
                    In order to retrieve the market data, subsequent calls to the /marketdata/snapshot endpoint must be made.
                </p>
                `
            },
            {
                id: 'option-chain',
                title: 'Option Chains',
                content: `
                <p>
                    When requesting market data for options, set the strike price to zero to retrieve the entire option chain for that symbol.
                </p>
                `
            }
        ]
    },
    {
        category: 'Account Data',
        items: [
            {
                id: 'portfolio-discrepancies',
                title: 'Portfolio Discrepancies',
                content: `
                <p>
                    Due to filtering differences accross our platform, there might be some differences present in portfolio data obtained via the Client Portal API.
                    Statemenents generated via Client Portal and Flex Queries should be considered as reliable sources of information when. Flex Queries can be automated 
                    using the Flex Web Services. 
                </p>
                `
            },
            {
                id: 'generating-reports',
                title: 'Flex Queries',
                content: `
                <p>
                    Flex Query generation is not supported in Client Portal API. To generate a Flex Query, please refer to the <a href="https://guides.interactivebrokers.com/am/am/reports/using_the_flex_web_service.htm" target="_blank">Flex Web Services API</a> documentation. 
                    Please note that when setting up the Flex Queries, the live account must be used.
                </p>
                `
            },
            {
                id: 'option-chain',
                title: 'Option Chains',
                content: `
                <p>
                    When requesting market data for options, set the strike price to zero to retrieve the entire option chain for that symbol.
                </p>
                `
            }
        ]
    },
]

export default workflowsInstitutional;