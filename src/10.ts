export type Tokenizer = (str: string) => Array<string>;

export class InvertedIndex {
  /**
   * Inverted index data
   * Each token points to a set of document IDs
   */
  private index: Map<string, Set<number>> = new Map();

  indexTokens(id: number, tokens: string[]): void {
    for (const token of tokens) {
      const set = this.index.get(token);
      if (set) {
        set.add(id);
      } else {
        this.index.set(token, new Set([id]));
      }
    }
  }

  getDocumentIdsByToken(token: string): number[] {
    const set = this.index.get(token);
    if (set) {
      return Array.from(set.values());
    }
    return [];
  }

  removeDocument(id: number): void {
    for (const [_, set] of this.index) {
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
    const hits: Map<number, number> = new Map();

    const tokens = this.tokenizer(query);
    for (const token of tokens) {
      const retrievedIds = this.index.getDocumentIdsByToken(token);

      for (const id of retrievedIds) {
        const hit = hits.get(id);
        if (hit) {
          hits.set(id, hit + 1);
        } else {
          hits.set(id, 1);
        }
      }
    }

    return Array.from(hits.entries())
      .map(([key, value]) => ({
        id: Number(key),
        score: value,
      }))
      .sort((x, y) => y.score - x.score);
  }
}
