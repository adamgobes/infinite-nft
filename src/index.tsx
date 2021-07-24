import React from 'react'
import ReactDOM from 'react-dom'
import InfiniteNFT from './App'

ReactDOM.render(
    <div
        style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
        }}
    >
        <InfiniteNFT
            address={'0xd8da6bf26964af9d7eed9e03e53415d37aa96045'}
            gutter={170}
        />
    </div>,
    document.getElementById('root')
)
