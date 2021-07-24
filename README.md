# infinite-nft

> Embed your NFTs anywhere and everywhere

## Install

```bash
# Yarn
yarn add infinite-nft

# NPM
npm install --save infinite-nft
```

## Documentation

Props for the `InfiniteNFT` component

| Name      | Type     | Description                                            |
| --------- | -------- | ------------------------------------------------------ |
| `address` | `string` | Public key of the user whose NFTs you want to display. |
| `gutter`  | `number` | Amount of space between columns of the NFT grid.       |
| `padding` | `number` | Amount of space between rows of the NFT grid.          |

## Example usage

The snippet below shows a basic example of how the `InfiniteNFT` component can be used. We suggest wrapping it in an absolutely positioned element that
takes up 100% of both the height and width of the screen for the best viewing and scrolling experience.

```js
<div
    style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
    }}
>
    <InfiniteNFT
        address={'0x82c1b61da09b5fdce098a212bb8070210ab91049'}
        gutter={170}
    />
</div>
```

Below is a GIF of the library in action with vitalik.eth

![Alt Text](https://media.giphy.com/media/OzvaWe2Jm2a90nA4KX/giphy.gif)
