const workflowsIndividual = [
    {
        category: 'Connectivity',
        items: [
            {
                id: 'competing-session',
                title: 'Competing Session',
                content: `
                <p>
                    Only a single active brokerage session can exist for any username accross all IBKR services. If you are logged in to either Client Portal, TWS, or IBKR Mobile, make sure to log out and try reauthenticating your session again. The endpoint /reauthenticate can be used to reauthenticate the brokerage session.
                </p>
                `
            },
            {
                id: 'session-duration',
                title: 'Session Duration',
                content: `
                <p>
                    The maximum amount of time that the Client Portal API session can remain authenticated is 24 hours. After this time, clients will need to reauthenticate their sessionby following the instructions on the Auhtentication page.
                    In addition, the session will time out if no requests are received within a span of 5 minutes. In order to prevent this from happening, you can use the /sso/validate endpoint can be called on a regular basis, for example once every 1 minute.
                </p>
                `
            },
            {
                id: 'mutliple-usernames',
                title: 'Multiple Usernames',
                content: `
                <p>
                    Clients wishing to use multiple IBKR products at the same time can do so by creating a new username that can then be used to log into other services while using the Client Portal API. To create a second username from Client Portal, please see the following <a href="https://ibkr.info/node/1004" target="_blank">article</a>. Please note, that in accordance with market data vendor requirements, market data services are user-specific and any username subscribed will be assessed a separate market data subscription fee.
                </p>
                `
            },
            {
                id: 'network-error-cors',
                title: 'Network Error while accessing endpoints',
                content: `
                <p>
                    In order to use the endpoints and websockets functionality on the documentation page inside the browser, CORS (Cross Origin Resource Sharing) needs to be disabled from within this browser.
                    Several extensions for both Chrome and Firefox are available to toggle CORS on and off. CORS is disabled by default when using API testing tools such as Postman or Thunder Client.
                </p>
                `
            },
            {
                id: 'gateway-less-auth',
                title: 'Authenticating without a Gateway',
                content: `
                <p>
                    It is currently not possible for individual clients to authenticate a Client Portal API session without a gateway.
                </p>
                `
            },
            {
                id: 'security-device-opt-out',
                title: 'Opting out of 2FA',
                content: `
                <p>
                    Since the login process to the Client Portal API is the same as that for Client Portal, which has access to sensitve data such as funds and banking, it is 
                    not possible to remove the requirement for the second factor device. This is only possible in some situations for trading applications such as TWS.
                </p>
                `
            },
            {
                id: 'automated-login',
                title: 'Automated Login',
                content: `
                <p>
                    For security reasons, automated login to Client Portal API is not supported for individual clients. The API gateway was designed to require
                    the end user to manually enter their credentials into a web browser to login.
                </p>
                `
            },
            {
                id: 'invalid-certificate',
                title: 'Invalid SSL Certificate',
                content: `
                <p>
                    Since the gateway is running on your premises, the certificate needs to be created and self-signed by you, or offically signed by a trusted third-party. 
                    The gateway is similar to other webservers, such as Tomcat, which doesn't provide a certificate along with the release. To fix this issue, 
                    please see the certificate generation steps below:
                    <ol>
                        <li>Create a self-signed certificate by following the following <a href="https://www.sslshopper.com/article-how-to-create-a-self-signed-certificate-using-java-keytool.html">guide</a>.</li>     
                        <li>Place the generated *.jks certificate file in the 'root' folder in the gateway directory.</li>
                        <li>Update the sslCert field in the gateway configuration file with the details of the generated certificate</li>
                        <li>Restart the gateway</li>
                    </ol>
                </p>
                `
            },
            {
                id: 'too-many-requests',
                title: 'Too Many Requests Error',
                content: `
                <p>
                    The error "429 - Too many requsts" is returned when a client application is blocked for sending requests at an excessive rate. Violator IP addresses are put in a penalty box for 10 minutes.
                    After this period, the IP address is removed from the penalty box until another request exceeds the limitation again. Repeat violator IP addresses can be permamently blocked until the issue is resolved.
                </p>
                `
            }
        ]
    },
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
        ]
    },
]

export default workflowsIndividual;