export type Tokenizer = (str: string) => Array<string>;

export class InvertedIndex {
  private index: Record<string, Set<number>> = {};

  indexTokens(id: number, tokens: string[]): void {
    // TODO: implement
  }

  getDocumentIdsByToken(token: string): number[] {
    // TODO: implement
    return [];
  }

  removeDocument(id: number): void {
    // TODO: implement
  }
}

export interface ISearchHit {
  id: number;
  score: number;
}

export class SearchEngine {
  private tokenizer: Tokenizer;
  // TODO: add more properties as needed

  constructor(tokenizer: Tokenizer) {
    this.tokenizer = tokenizer;
  }

  indexDocument(id: number, text: string): void {
    // TODO: implement
  }

  removeDocument(id: number): void {
    // TODO: implement
  }

  retrieveDocuments(query: string): Array<ISearchHit> {
    // TODO: implement
    return [];
  }
}
