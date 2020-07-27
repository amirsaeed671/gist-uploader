import React from 'react'
import {from} from 'rxjs'
import {pluck, tap} from 'rxjs/operators'
import axios from 'axios'

from(axios.get('https://github.com/login/oauth/authorize', {
    params: {
        client_id: process.env.CLIENT_ID,
    }
})).pipe(
    tap(value => {
        console.log(value)
        debugger;
    })
).subscribe()

function App() {
    return (
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com" />
    )
}

export default App