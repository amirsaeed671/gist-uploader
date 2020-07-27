import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

console.log(process.env.CLIENT_ID)

function App() {
    return (
        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com" />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))