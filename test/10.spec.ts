import "mocha";
import { expect } from "chai";

import { Tokenizer, InvertedIndex, SearchEngine } from "../src/10";

const wordTokenizer: Tokenizer = (str) =>
  str
    .replace(/[,.!?]/g, "")
    .trim()
    .toLowerCase()
    .split(/ +/g);

describe("Task 10", () => {
  describe("Word tokenizer", () => {
    it("Should correctly split string", () => {
      expect(wordTokenizer(" hello  test 123")).to.deep.equal(["hello", "test", "123"]);
    });
  });

  describe("Inverted Index", () => {
    const invertedIndex = new InvertedIndex();

    it("Should add document to inverted index", () => {
      invertedIndex.indexTokens(
        0,
        wordTokenizer(
          "JavaScript is a programming language that conforms to the ECMAScript specification",
        ),
      );
      expect(invertedIndex.getDocumentIdsByToken("programming")).to.deep.equal([0]);
    });

    it("Should add another document and return both documents", () => {
      invertedIndex.indexTokens(
        1,
        wordTokenizer("TypeScript is a programming language developed and maintained by Microsoft"),
      );
      expect(invertedIndex.getDocumentIdsByToken("programming")).to.deep.equal([0, 1]);
    });

    it("Should remove document from index and only return 1 document", () => {
      invertedIndex.removeDocument(0);
      expect(invertedIndex.getDocumentIdsByToken("programming")).to.deep.equal([1]);
    });
  });

  describe("Search engine", () => {
    const searchEngine = new SearchEngine(wordTokenizer);

    it("Should add and find document", () => {
      searchEngine.indexDocument(0, "Romeo, Romeo! Wherefore art thou Romeo?");
      const hits = searchEngine.retrieveDocuments("romeo");
      expect(hits).to.have.lengthOf(1);
      expect(hits[0].id).to.equal(0);
    });

    it("Should add another document and rank more relevant one higher", () => {
      searchEngine.indexDocument(
        1,
        "Romeo Island ist eine Insel im Archipel der Südlichen Shetlandinseln",
      );
      const hits = searchEngine.retrieveDocuments("romeo");
      expect(hits).to.have.lengthOf(2);
      expect(hits[0].id).to.equal(0);
      expect(hits[1].id).to.equal(1);
    });

    it("Should remove document from index", () => {
      searchEngine.removeDocument(0);
      const hits = searchEngine.retrieveDocuments("romeo");
      expect(hits).to.have.lengthOf(1);
      expect(hits[0].id).to.equal(1);
    });

    it("Should add more documents and find only relevant ones", () => {
      searchEngine.indexDocument(
        2,
        "Alfa Romeo ist ein italienischer Automobilhersteller mit Sitz in Turin",
      );
      searchEngine.indexDocument(
        3,
        "Turin (italienisch Torino, lateinisch Augusta Taurinorum, piemontesisch Türin) ist eine Großstadt im Nordwesten Italiens",
      );
      searchEngine.indexDocument(
        4,
        "Romeo und Julia (frühneuenglisch The Most Excellent and Lamentable Tragedy of Romeo and Juliet) ist eine Tragödie von William Shakespeare",
      );
      const romeoHits = searchEngine.retrieveDocuments("romeo");
      expect(romeoHits).to.have.lengthOf(3);
      const romeoIds = romeoHits.map((x) => x.id);
      expect(romeoIds).to.include(1);
      expect(romeoIds).to.include(2);
      expect(romeoIds).to.include(4);
    });

    it("Should score documents according to search query", () => {
      const romeoHits = searchEngine.retrieveDocuments("romeo and juliet");
      expect(romeoHits).to.have.lengthOf(3);
      const romeoIds = romeoHits.map((x) => x.id);
      expect(romeoIds[0]).to.equal(4);
      expect(romeoIds).to.include(1);
      expect(romeoIds).to.include(2);
    });
  });
});
