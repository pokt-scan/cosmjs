import { TxsResponse, types } from "@cosmwasm/sdk";
import {
  Amount,
  ChainId,
  ConfirmedAndSignedTransaction,
  Fee,
  FullSignature,
  Nonce,
  PubkeyBundle,
  SignatureBytes,
  SignedTransaction,
  UnsignedTransaction,
} from "@iov/bcp";
import { Decimal } from "@iov/encoding";
import { TokenInfos } from "./types";
export declare function decodePubkey(pubkey: types.PubKey): PubkeyBundle;
export declare function decodeSignature(signature: string): SignatureBytes;
export declare function decodeFullSignature(signature: types.StdSignature, nonce: number): FullSignature;
export declare function coinToDecimal(tokens: TokenInfos, coin: types.Coin): readonly [Decimal, string];
export declare function decodeAmount(tokens: TokenInfos, coin: types.Coin): Amount;
export declare function parseMsg(msg: types.Msg, chainId: ChainId, tokens: TokenInfos): UnsignedTransaction;
export declare function parseFee(fee: types.StdFee, tokens: TokenInfos): Fee;
export declare function parseTx(
  txValue: types.StdTx,
  chainId: ChainId,
  nonce: Nonce,
  tokens: TokenInfos,
): SignedTransaction;
export declare function parseTxsResponse(
  chainId: ChainId,
  currentHeight: number,
  nonce: Nonce,
  response: TxsResponse,
  tokens: TokenInfos,
): ConfirmedAndSignedTransaction<UnsignedTransaction>;