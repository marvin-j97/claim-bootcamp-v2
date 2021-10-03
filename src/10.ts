export type Tokenizer = (str: string) => Array<string>;

export class InvertedIndex {
  private index: Record<string, Set<number>> = {};

  indexTokens(id: number, tokens: string[]): void {
    for (const token of tokens) {
      const set = this.index[token];
      if (set) {
        set.add(id);
      } else {
        this.index[token] = new Set([id]);
      }
    }
  }

  getDocumentIdsByToken(token: string): number[] {
    const set = this.index[token];
    if (set) {
      return Array.from(set.values());
    }
    return [];
  }

  removeDocument(id: number): void {
    for (const token in this.index) {
      const set = this.index[token];
      set.delete(id);
    }
  }
}

export interface ISearchHit {
  id: number;
  score: number;
}

export class SearchEngine {
  private tokenizer: Tokenizer;
  private index: InvertedIndex = new InvertedIndex();

  constructor(tokenizer: Tokenizer) {
    this.tokenizer = tokenizer;
  }

  indexDocument(id: number, text: string): void {
    const tokens = this.tokenizer(text);
    this.index.indexTokens(id, tokens);
  }

  removeDocument(id: number): void {
    this.index.removeDocument(id);
  }

  retrieveDocuments(query: string): Array<ISearchHit> {
    const hits: Record<number, number> = {};

    const tokens = this.tokenizer(query);
    for (const token of tokens) {
      const retrievedIds = this.index.getDocumentIdsByToken(token);

      for (const id of retrievedIds) {
        if (id in hits) {
          hits[id]++;
        } else {
          hits[id] = 1;
        }
      }
    }

    return Object.entries(hits)
      .map(([key, value]) => ({
        id: Number(key),
        score: value,
      }))
      .sort((x, y) => y.score - x.score);
  }
}
