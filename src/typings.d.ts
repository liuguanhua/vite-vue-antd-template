declare interface Dictionary<T = any> {
  [key: string]: T
}

declare type DictionaryArray<T = any> = Dictionary<T>[]
