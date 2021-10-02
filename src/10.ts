export type Tokenizer = (str: string) => Array<string>;

export class InvertedIndex {
  /**
   * Inverted index data
   * Each token points to a set of document IDs
   */
  private index: Record<string, Set<number>> = {};

  /**
   * Add document IDs for token to inverted index
   */
  indexTokens(id: number, tokens: string[]): void {
    // TODO: implement
  }

  /**
   * Get the document IDs referenced by the token
   */
  getDocumentIdsByToken(token: string): number[] {
    // TODO: implement
    return [];
  }

  /**
   * Remove the given document ID from the index
   */
  removeDocument(id: number): void {
    // TODO: implement
  }
}

export interface ISearchHit {
  id: number;
  score: number;
}

export class SearchEngine {
  // Tokenizer converts a text body into tokens
  private tokenizer: Tokenizer;
  // TODO: add more properties as needed

  constructor(tokenizer: Tokenizer) {
    this.tokenizer = tokenizer;
  }

  /**
   * Add document to index
   * 1. Create tokens from text body
   * 2. Add tokens to inverted index
   */
  indexDocument(id: number, text: string): void {
    // TODO: implement
  }

  /**
   * Removes a document from index
   */
  removeDocument(id: number): void {
    // TODO: implement
  }

  /**
   * Searches documents using search query and ranks them by relevance
   * 1. Tokenize query
   * 2. For each token, find relevant documents
   * 3. Keep track of how often documents are referenced
   * 4. Sort search hits by score and return as list
   *    First item should have highest relevance
   */
  retrieveDocuments(query: string): Array<ISearchHit> {
    // TODO: implement
    return [];
  }
}
