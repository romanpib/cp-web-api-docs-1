import { marked } from 'marked'

const workflowsIndividual = [
    {
        category: 'Market Data',
        items: [
            {
                id: 'snapshot-data',
                title: 'Snapshot Data',
                content: `
                <p>
                    Donec quis venenatis mi, in finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna viverra, sollicitudin lacus sed, porttitor libero. Nam faucibus risus ligula, eu ultrices risus lacinia et. Nunc porttitor magna eget euismod dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pulvinar tristique elit, consectetur consectetur elit facilisis vel.  
                </p>
                <p>
                    Donec quis venenatis mi, in finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna viverra, sollicitudin lacus sed, porttitor libero. Nam faucibus risus ligula, eu ultrices risus lacinia et.
                </p>
                <h5>Example code:</h5>
                <p>Print the message "Hello world" to the console: </p>
                <div class='code'>
                    <code>
                        console.log('Hello world 🌎')
                    </code>
                </div>
                `
            },
            {
                id: 'historical-data',
                title: 'Historical Data',
                content: `
                <p>
                    Donec quis venenatis mi, in finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna viverra, sollicitudin lacus sed, porttitor libero. Nam faucibus risus ligula, eu ultrices risus lacinia et. Nunc porttitor magna eget euismod dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pulvinar tristique elit, consectetur consectetur elit facilisis vel.  
                </p>
                <p>
                    Donec quis venenatis mi, in finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna viverra, sollicitudin lacus sed, porttitor libero. Nam faucibus risus ligula, eu ultrices risus lacinia et. Nunc porttitor magna eget euismod dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pulvinar tristique elit, consectetur consectetur elit facilisis vel.  
                </p>
                <div class='code'>
                    <code>
                        let variable = calculateSomeVariable() </br>
                        console.log(variable) </br>
                    </code>
                </div>
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