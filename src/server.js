import http from 'http';

const serv = http.createServer((req, res)=>{
    res.end("I'm am not your enemy i am THE enemy")
});
const mouahaha = 3000;
serv.listen(process.env.POST || 3000, ()=>{
    console.log(`serveur running on http://localhost:${process.env.POST || mouahaha}`)
})
