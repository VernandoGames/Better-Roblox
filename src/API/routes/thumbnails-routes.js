const { Router } = require('express');
const fetch = require('node-fetch');

const router = Router();
module.exports = router;

const RBXAPI = 'https://thumbnails.roblox.com/v1';

const json = res => {
    // console.log(res.status);
    // console.log(res);
    // if (!res.ok) throw new Error('Failed to load game sorts.');
    return res.json();
};

router.get('/', async(req, res) => {
    // res.query
    res.status(400);
})
router.get('/games/icons', async(req, res) => {
    try {
        const data = fetch(RBXAPI + `/games/icons?universeIds=${req.query.universeIds}&returnPolicy=PlaceHolder&size=150x150&format=jpeg`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then(json).then(result => {
            res.json(result);
        })
    } catch(error) {
        res.status(400).send('internal service error')
        console.error(error);
    }
})
router.get('/lists', async(req, res) => {
    try {
        console.log(encodeURI(req.query.token))
        const data = fetch(RBXAPI + `/list?token=${encodeURI(req.query.token)}`,
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