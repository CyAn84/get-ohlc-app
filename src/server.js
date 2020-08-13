const http = require('http')

let candles = { 
    status: 200,
    ohlc: [
        {l:1.13913000, h:1.13970000, o:1.13940000, c:1.13917000},
        {l:1.13645000, h:1.14181000, o:1.14125000, c:1.13694000}
    ]
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(300, {
            'Content-Type': 'text/plain'
        })
        res.end(`Hello! Please enter the correct request!`)
    } else if (req.url === '/candles_by_year?year=2010') { // TODO: make for 2010-2020
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(candles))
        console.log(req.url)
    } else {
        res.writeHead(300, {
            'Content-Type': 'text/plain'
        })
        res.end('Error! Uncorrect request!')
        console.log(req.url)
    }
})

const port = process.env.PORT || 1234

server.listen(port, (err) => {
    if (err) console.error(err)
    console.log(`Server was started on localhost:${port}`)
})