import semver from 'semver';
import setCookie from 'set-cookie-parser';

const json = res => {
    for (var i = 0; i < res.headers.length; i++) {
        console.log(res.headers[i])
    }
    if (!res.ok) throw new Error('Failed to load game sorts.');
    return res.json();
};

const APIEndpoint = 'https://btr-rbx.herokuapp.com/'//process.env.NODE_ENV === 'production' ? 'https://cors-anywhere.herokuapp.com/' : ''

export default new class GamesSource {
    constructor() {

    }

    fetchSorts() {
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        const req = new Request(
            APIEndpoint + 'games/games/sorts',
            {
                method: 'GET',
                headers,
                mode: 'cors',
            }
        )
        // const req2 = new Request(
        //     `https://games.roblox.com/v1/games/sorts`,
        //     {
        //         method: 'GET',
        //         headers,
        //         mode: 'no-cors',
        //     }
        // )
        // // handle the cookies
        // fetch(req2).then(res => {
        //     console.log(res.headers);
        //     const cookies = setCookie.parse(res, {
        //         decodeValues: true,
        //     })

        //     cookies.forEach(console.log);
        //     console.log("cook");
        // })
        return Promise.all([
            fetch(req).then(json),
        ]).catch(err => {
            if (localStorage['source-games']) {
                console.error(err);
                const cache = JSON.parse(localStorage['source-games']);
                return cache;
            }
            throw err;
        })
    }

    fetchGamesFromToken(token, targetId, pageId) {
        //console.log(targetId);
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        const req = new Request(
            APIEndpoint + `games/games/list?token=${token}&gameSetTargetId=${targetId}&startRows=0&maxRows=32&hasMoreRows=true&sortPosition=0&pageContext.pageId=${pageId}`,
            {
                method: 'GET',
                headers,
                mode: 'cors',
            }
        )
        return Promise.all([
            fetch(req).then(json),
        ]).catch(err => {
            if (localStorage['source-games']) {
                console.error(err);
                const cache = JSON.parse(localStorage['source-games']);
                return cache;
            }
            throw err;
        })
    }

    fetchGamesFromName(name) {
        console.error("Don't use this!");
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        const req = new Request(
            APIEndpoint + `games/list?name=${name}`, // &gameSetTargetId=${targetId}&startRows=0&maxRows=32&hasMoreRows=true&sortPosition=0&pageContext.pageId=${pageId}
            {
                method: 'GET',
                headers,
                mode: 'cors',
            }
        )
        return Promise.all([
            fetch(req).then(json),
        ]).catch(err => {
            if (localStorage['source-games']) {
                console.error(err);
                const cache = JSON.parse(localStorage['source-games']);
                return cache;
            }
            throw err;
        })
    }

    fetchThumbnails(universeIds) {
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        const req = new Request(
            APIEndpoint + `thumbnails/games/icons?universeIds=${universeIds}`,
            {
                method: 'GET',
                headers,
                mode: 'cors',
            }
        )
        return Promise.all([
            fetch(req).then(json),
        ]).catch(err => {
            if (localStorage['source-games']) {
                console.error(err);
                const cache = JSON.parse(localStorage['source-games']);
                return cache;
            }
            throw err;
        })

    }
}