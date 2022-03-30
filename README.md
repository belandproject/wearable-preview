# Wearable Preview

This webapp renders an interactive 3D preview of a wearable. It can be configured via the following query params:

- `contract`: The contract address of the wearable collection.
- `item`: The id of the item in the collection.
- `token`: The id of the token (to preview a specific NFT).
- `profile`: an ethereum address of a profile to load as the base avatar. It can be set to `default` to use a default profile.
- `urn`: a URN of a wearable to load. It will override anything loaded from a profile. It can be used many times.
- `skin`: a color to be used by the skin material, it must be in hex.
- `hair`: a color to be used by the hair material, it must be in hex.
- `eyes`: a color to be used by the eyes tint, it must be in hex.
- `bodyShape`: which body shape to use, either `male` or `female`.
- `emote`: the emote that the avatar will play. Default value is `idle`, other possible values are: `clap`, `dab`, `dance`, `fashion`, `fashion-2`, `fashion-3`,`fashion-4`, `love` and `money`.
- `zoom`: the level of zoom, it must be a number between 1 and 100.
- `camera`: which camera type to use, either `interactive` or `static`. By default it uses the `interactive` one.
- `autoRotateSpeed`: the speed of the auto-rotate behavior of the camera. By default it is `0.2`, and it only works when the camera is not `static`.
- `offsetX`: apply an offset in the X position of the camera. By default is `0`.
- `offsetY`: apply an offset in the Y position of the camera. By default is `0`.
- `offsetZ`: apply an offset in the Z position of the camera. By default is `0`.
- `transparentBackground`: if set it will make the background transparent.
- `env`: The environment to use, it can be `prod` (uses mainnet wearables and catalysts) or `dev` (uses testnet wearables and catalysts).

Example: https://wearable-preview.beland.io?contract=0xee8ae4c668edd43b34b98934d6d2ff82e41e6488&item=5

### Development

```
npm run start
```

### Build

```
npm run build
```
