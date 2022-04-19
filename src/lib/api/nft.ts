import { Env } from '../../types/env'
import { json } from '../json'
import { Wearable } from '../wearable'

export const nftApiByEnv: Record<Env, string> = {
  [Env.DEV]: 'https://nft-api-test.beland.io/v1',
  [Env.PROD]: 'https://nft-api-test.beland.io/v1',
}

class NFTApi {
  async fetchWearable(id: string, env: Env) {
    const { rows } = await json<{ rows: any[] }>(`${nftApiByEnv[env]}/items?id=${id}`)
    if (rows.length === 0) {
      throw new Error(`Item not found for id=${id}`)
    }
    const row = rows[0]
    return {
      name: row.name,
      data: {
        representations: row.data.representations.map((representation: { contents: { path: any; hash: string }[] }) => {
          return {
            ...representation,
            contents: representation.contents.map((content: { path: any; hash: string }) => {
              return {
                key: content.path,
                url: content.hash.replace("ipfs://", 'https://ipfs-test.beland.io/ipfs/')
              }
            })
          }
        })
      }
      
    } as Wearable
  }
  async fetchNFT(contractAddress: string, tokenId: string, env: Env) {
    const { rows } = await json<{ rows: { id: string; collectionItemId: string }[] }>(
      `${nftApiByEnv[env]}/nfts?id=${contractAddress}-${tokenId}`
    )
    if (rows.length === 0) {
      throw new Error(`NFT not found for contractAddress="${contractAddress}" tokenId="${tokenId}"`)
    }
    return rows[0]
  }

  async fetchProfile(userId: string, env: Env) {
    const { rows } = await json<{ rows: any[] }>(`${nftApiByEnv[env]}/users?id=${userId}`)
    if (rows.length === 0) {
      throw new Error(`User not found for ${userId}`)
    }
    return rows[0]
  }
}

export const nftApi = new NFTApi()
