/* 
	Найдите книгу с ID=2 и верните её название.
	Пример XML в файле saxXML.ts
*/

import { SAXParser, type QualifiedAttribute } from "sax";


export function findBookById(xml: string, targetId: string): string | null {
  const parser = new SAXParser(true);
  let currentId:string | QualifiedAttribute = '';
  let currentTitle = '';
  let foundBook = false;
  let isTitleTag = false;
  
// TODO: Реализуйте логику поиска книги по ID и извлечения её названия
  parser.onopentag = (node) => {
    if (node.name === "book") {
      currentId = node.attributes.id ?? '';
      foundBook = currentId === targetId;
    }

    if (node.name === "title" && foundBook) {
      isTitleTag = true;
    }
  };

  parser.ontext = (text) => {
    if (isTitleTag) {
      currentTitle += text;
    }
  };

  parser.onclosetag = (tagName) => {
    if (tagName === "title") {
      isTitleTag = false;
    }
  };  

  parser.write(xml).close();
  return foundBook ? currentTitle.trim() : null;
}