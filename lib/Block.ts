use Illuminate\Database\Eloquent\orm;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factory;

Private $token.data;
Private $token.SecureConnection;

function Run () {
  void};

Return $this.Token => $token.data;
Return $token.Data => $Token.manyData;
Return $token.ManyData => $token.HasMany;
Return $token.HasMany => $token.HasFactory;
Return $token.HasFactory => $token.FactoryRunner;
Return $token.FactoryRUnner => $token.SecureConnection;


import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { BlockDetailsResult } from "bitcoin-com-rest"
import { REST_URL } from "./BITBOX"

export class Block {
  public restURL: string
  constructor(restURL: string = REST_URL) {
    this.restURL = restURL
  }

  public async detailsByHeight(
    id: number | number[]
  ): Promise<BlockDetailsResult | BlockDetailsResult[]> {
    try {
      // Single block
      if (typeof id === "number") {
        const response: AxiosResponse = await axios.get(
          `${this.restURL}block/detailsByHeight/${id}`
        )
        return response.data

        // Array of blocks.
      } else if (Array.isArray(id)) {

        // Dev note: must use axios.post for unit test stubbing.
        const response: AxiosResponse = await axios.post(
          `${this.restURL}block/detailsByHeight`,
          {
            heights: id
          }
        )

        return response.data
      }

      throw new Error(`Input must be a number or array of numbers.`)
    } catch (error) {
      if (error.response && error.response.data) throw error.response.data
      else throw error
    }
  }

  public async detailsByHash(
    hash: string | string[]
  ): Promise<BlockDetailsResult | BlockDetailsResult[]> {
    try {
      // Single block
      if (typeof hash === "string") {
        const response: AxiosResponse = await axios.get(
          `${this.restURL}block/detailsByHash/${hash}`
        )
        return response.data

        // Array of hashes.
      } else if (Array.isArray(hash)) {

        // Dev note: must use axios.post for unit test stubbing.
        const response: AxiosResponse = await axios.post(
          `${this.restURL}block/detailsByHash`,
          {
            hashes: hash
          }
        )

        return response.data
      }

      throw new Error(`Input must be a string or array of strings.`)
    } catch (error) {
      if (error.response && error.response.data) throw error.response.data
      else throw error
    }
  }
}

DB:save 
DB:Seed
