const { Router } = require('express');
const fetch = require('node-fetch');
const setCookie = require('set-cookie-parser');
const libCookie = require('cookie');

const router = Router();
module.exports = router;

const RBXAPI = 'https://games.roblox.com/v1/games';

const json = res => {
    return res.json();
};

router.get('/', async(req, res) => {
    // res.query
    res.status(400);
})
router.get('/sorts', async(req, res) => {
    try {
        const data = fetch(RBXAPI + '/sorts',
        {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then(result => {

            // res.setHeader('set-cookie', result.headers['set-cookie']);
            // res.headers['set-cookie'] = result.headers['set-cookie'];
            // cookies.forEach(value => {
            //     cookies.forEach((v, i) => {
            //         console.log(i + ' : ' + v);
            //     })
            // })

            result.headers.forEach((value, key) => {
                //console.log(key + ' : ' + value)
                if (key==='set-cookie') {// || key==='roblox-machine-id') {
                    const cookies = setCookie.parse(value)
                    cookies.forEach((v, i) => {
                        //console.log(i + ' : ' + v);
                        res.cookie(v.name, v.value);
                        res.header['set-cookie'] = libCookie.serialize(v.name, v.value);
                    })
                    // res.headers['set-cookie'] = cookies.map(function(cookie) {
                    //     return libCookie.serialize(cookie.name, cookie.value);
                    // })
                    //console.log(cookies);
                    
                    // res.setHeader(key, value);
                    // res.header[key] = value;
                    //console.log(key + ' : ' + value);
                }
            })
            return result;
        }).then(json).then(result => {
            res.json(result);
        })
        // if (!data.ok) {
        //     res.sendStatus(data.status);
        // } else {
        //     res.json(data)
        // }
    } catch(error) {
        res.status(400).send('internal service error')
        console.error(error);
    }
})
router.get('/lists', async(req, res) => {
    try {
        //console.log(encodeURI(req.query.token))
        const data = fetch(RBXAPI + `/list?token=${encodeURI(req.query.token)}&gameSetTargetId=${req.query.gameSetTargetId}&startRows=${req.query.startRows}&maxRows=${req.query.maxRows}&hasMoreRows=${req.query.hasMoreRows}&sortPosition=${req.query.sortPosition}&pageContext.pageId=${req.query["pageContext.pageId"]}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then(json).then(result => {
            
            res.json(result);
        }).catch(e => {
            console.log(e);
            res.sendStatus(500);
        })
    } catch(error) {
        res.sendStatus(500);
        console.error(error);
    }
})
router.get('/list', async(req, res) => {
    try {
        // should be given a name in req.query.name
        fetch(RBXAPI + '/sorts',
        {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then(json).then(result => {
            result.sorts.forEach(sort => {
                if (sort.name === req.query.name) {
                    fetch(RBXAPI + `/list?token=${sort.token}`,
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json'
                        }
                    }).then(json).then(result => {
                        res.json(result);
                    }).catch(e => {
                        console.log(e);
                        res.sendStatus(500);
                    })
                }
            })
        })
    } catch (error) {
        res.sendStatus(500);
        console.error(error);
    }
})