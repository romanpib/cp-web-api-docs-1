const workflowsIndividual = [
    {
        category: 'General',
        items: [
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
            }
        ]
    },
    {
        category: 'Connectivity',
        items: [
            {
                id: 'competing-session',
                title: 'Competing Session',
                content: `
                <p>
                    Only a single active brokerage session can exist for any username accross all IBKR services. If you are logged in to either Client Portal, TWS, or IBKR Mobile, make sure to log our and try reauthenticating your session again. The endpoint /reauthenticate can be used to reauthenticate the brokerage session.
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
        category: 'Account Operations',
        items: [
            {
                id: 'daily-pnl',
                title: 'Daily PnL',
                content: `
                <p>
                    Donec at tellus bibendum, auctor arcu ac, lobortis lorem. Nunc porttitor orci est, eu commodo arcu vehicula in. Quisque ut mauris euismod, molestie turpis id, posuere massa. Proin sed lacus et lacus pellentesque aliquet vel sed diam. 
                </p>
                <p>                    
                    Sed tempor lacinia varius. Proin mattis posuere justo, id sagittis orci. Sed fermentum nisl risus. Vestibulum pharetra, leo vitae posuere sodales, nisl turpis dictum nisi, mollis fermentum eros sem ac enim. Nullam in arcu hendrerit, dictum justo eu, cursus odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vel faucibus ex. Nam pellentesque metus at tempus ultrices. Etiam bibendum gravida rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel tellus eget quam molestie ullamcorper a ut urna. Mauris sit amet dui rutrum lorem scelerisque euismod non et mauris.
                </p>
                `
            },
            {
                id: 'positions',
                title: 'Account Positions',
                content: 'Ut vulputate leo eget sem auctor pellentesque. Pellentesque quis scelerisque ligula. Vivamus a pharetra urna. Sed vitae sapien sem. Aenean in nisi ex. Praesent vel ipsum gravida, elementum est nec, lobortis nisl. Integer eget quam tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae placerat nunc. Maecenas lobortis euismod elit vitae sodales.',
            },
            {
                id: 'switch-account',
                title: 'Switch Account',
                content: 'Donec at tellus bibendum, auctor arcu ac, lobortis lorem. Nunc porttitor orci est, eu commodo arcu vehicula in. Quisque ut mauris euismod, molestie turpis id, posuere massa. Proin sed lacus et lacus pellentesque aliquet vel sed diam. Sed tempor lacinia varius. Proin mattis posuere justo, id sagittis orci. Sed fermentum nisl risus. Vestibulum pharetra, leo vitae posuere sodales, nisl turpis dictum nisi, mollis fermentum eros sem ac enim. Nullam in arcu hendrerit, dictum justo eu, cursus odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vel faucibus ex. Nam pellentesque metus at tempus ultrices. Etiam bibendum gravida rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel tellus eget quam molestie ullamcorper a ut urna. Mauris sit amet dui rutrum lorem scelerisque euismod non et mauris.',
            },
        ]
    },
]

export default workflowsIndividual;