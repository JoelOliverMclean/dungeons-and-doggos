/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MarkdownAttributes
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/processor.ts
var _Processor = class {
  constructor() {
  }
  static parse(el) {
    if (typeof el == "string") {
      return new _Processor().parseLine(el);
    } else {
      return new _Processor().recurseAndParseElements(el);
    }
  }
  parseLine(text) {
    const elements = [];
    let attribute_strings = text.matchAll(
      new RegExp(_Processor.END_RE.source, "gm")
    );
    for (const [_, match] of attribute_strings) {
      elements.push({
        attributes: this.getAttrs(match),
        text: match
      });
    }
    return elements;
  }
  getTopLevelText(el) {
    const texts = [];
    for (let child of Array.from(el.childNodes)) {
      if (child.nodeType == Node.TEXT_NODE) {
        texts.push(child.data);
      }
    }
    return texts.join("");
  }
  getAttrs(str) {
    const trys = (str != null ? str : "").split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/).map((t) => t && t.trim()).filter((t) => t && t !== '"' && t !== "'" && t.length);
    if (!trys || !trys.length)
      return;
    const allowedKeyChars = /[^\t\n\f />"'=]/;
    const keySeparator = "=";
    const classChar = ".";
    const attrs = [];
    for (let pair of trys) {
      if (!pair || !pair.length)
        continue;
      if (pair.charAt(0) === classChar) {
        attrs.push(["class", pair.slice(1)]);
        continue;
      }
      if (new RegExp(keySeparator).test(pair) && allowedKeyChars.test(pair.slice(0, pair.indexOf(keySeparator)))) {
        attrs.push([...pair.split(keySeparator, 2)]);
        continue;
      }
      attrs.push([pair, null]);
    }
    return attrs;
  }
  recurseAndParseElements(el) {
    var _a, _b, _c;
    const elements = [];
    const text = this.getTopLevelText(el);
    if (_Processor.BLOCK_RE.test(text)) {
      let element = el;
      if (el instanceof HTMLLIElement || (el == null ? void 0 : el.parentElement) instanceof HTMLQuoteElement || (el == null ? void 0 : el.hasClass("callout"))) {
        element = el.parentElement;
      }
      let [original, attribute_string] = (_a = text.match(_Processor.BLOCK_RE)) != null ? _a : [];
      const toAdd = {
        element,
        attributes: this.getAttrs(attribute_string),
        text: attribute_string
      };
      elements.push(toAdd);
      el.innerHTML = this.tryToReplace(
        toAdd.element,
        el.innerHTML,
        toAdd.attributes,
        original
      );
      if (el instanceof HTMLLIElement) {
        elements.push(...this.recurseAndParseElements(el));
      }
    } else if (_Processor.BASE_RE.test(text)) {
      let textNode = Array.from(el.childNodes).find(
        (node) => node.nodeType == Node.TEXT_NODE && _Processor.BASE_RE.test(text)
      );
      let sibling = (_b = Array.from(el.children).find(
        (node) => node.nextSibling == textNode
      )) != null ? _b : el;
      if (sibling && sibling.hasClass("collapse-indicator")) {
        sibling = sibling.parentElement;
      }
      if (sibling && sibling instanceof HTMLBRElement) {
        sibling = sibling.parentElement;
      }
      let [original, attribute_string] = (_c = text.match(_Processor.BASE_RE)) != null ? _c : [];
      const toAdd = {
        element: sibling,
        attributes: this.getAttrs(attribute_string),
        text: attribute_string
      };
      elements.push(toAdd);
      textNode.textContent = this.tryToReplace(
        toAdd.element,
        textNode.textContent,
        toAdd.attributes,
        original
      );
    }
    for (let child of Array.from(el.children)) {
      if (!(child instanceof HTMLElement))
        continue;
      if (child instanceof HTMLPreElement || child.tagName.toLowerCase() === "code")
        continue;
      elements.push(...this.recurseAndParseElements(child));
    }
    return elements;
  }
  tryToReplace(element, content, attributes, original) {
    if (!attributes || !attributes.length) {
      return content;
    }
    for (let [key, value] of attributes) {
      if (!key)
        continue;
      if (value)
        value = value.replace(/("|')/g, "");
      try {
        if (key === "class") {
          element.addClasses(value.split(" "));
        } else if (!value) {
          element.setAttr(key, true);
        } else {
          element.setAttr(key, value);
        }
      } catch (e) {
        console.log(
          `Markdown Attributes: ${key} is not a valid attribute.`
        );
        return content;
      }
    }
    return content.replace(original, "");
  }
};
var Processor = _Processor;
__publicField(Processor, "BASE_RE", /\{\:?[ ]*([^\}\n ][^\}\n]*)[ ]*\}/);
__publicField(Processor, "ONLY_RE", /^\{\:?[ ]*([^\}\n ][^\}\n]*)[ ]*\}$/);
__publicField(Processor, "BLOCK_RE", /\n[ ]*\{\:?[ ]*([^\}\n ][^\}\n]*)[ ]*\}[ ]*$/);
__publicField(Processor, "END_RE", /\{\:?[ ]*([^\}\n ][^\}\n]*)[ ]*\}$/m);

// src/live-preview.ts
var import_view = require("@codemirror/view");
var import_language = require("@codemirror/language");
var import_obsidian = require("obsidian");
function selectionAndRangeOverlap(selection, rangeFrom, rangeTo) {
  for (const range of selection.ranges) {
    if (range.from <= rangeTo && range.to >= rangeFrom) {
      return true;
    }
  }
  return false;
}
function inlineRender(view) {
  if (!view.state.field(import_obsidian.editorLivePreviewField)) {
    this.decorations = import_view.Decoration.none;
    return;
  }
  const currentFile = app.workspace.getActiveFile();
  if (!currentFile)
    return;
  const widgets = [];
  const selection = view.state.selection;
  for (const { from, to } of view.visibleRanges) {
    (0, import_language.syntaxTree)(view.state).iterate({
      from,
      to,
      enter: ({ node }) => {
        var _a;
        const type = node.type;
        if (type.name.includes("formatting"))
          return;
        const start = node.from;
        const end = node.to;
        if (selectionAndRangeOverlap(selection, start - 1, end + 1))
          return;
        const original = view.state.doc.sliceString(start, end).trim();
        if (!Processor.END_RE.test(original))
          return;
        const parsed = (_a = Processor.parse(original)) != null ? _a : [];
        for (const item of parsed) {
          const { attributes, text } = item;
          const firstBracket = original.slice(0, original.indexOf(text)).lastIndexOf("{");
          const lastBracket = original.indexOf(
            "}",
            original.indexOf(text)
          );
          widgets.push(
            import_view.Decoration.replace({
              inclusive: false,
              block: false
            }).range(start + firstBracket, start + lastBracket + 1),
            import_view.Decoration.mark({
              inclusive: true,
              attributes: Object.fromEntries(attributes)
            }).range(start, end)
          );
        }
      }
    });
  }
  return import_view.Decoration.set(widgets, true);
}
function inlinePlugin() {
  return import_view.ViewPlugin.fromClass(
    class {
      constructor(view) {
        __publicField(this, "decorations");
        var _a;
        this.decorations = (_a = inlineRender(view)) != null ? _a : import_view.Decoration.none;
      }
      update(update) {
        var _a;
        if (!update.state.field(import_obsidian.editorLivePreviewField)) {
          this.decorations = import_view.Decoration.none;
          return;
        }
        if (update.docChanged || update.viewportChanged || update.selectionSet) {
          this.decorations = (_a = inlineRender(update.view)) != null ? _a : import_view.Decoration.none;
        }
      }
    },
    { decorations: (v) => v.decorations }
  );
}

// src/main.ts
var MarkdownAttributes = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "parsing", /* @__PURE__ */ new Map());
  }
  onload() {
    return __async(this, null, function* () {
      console.log(`Markdown Attributes v${this.manifest.version} loaded.`);
      this.registerMarkdownPostProcessor(this.postprocessor.bind(this));
      this.registerEditorExtension(inlinePlugin());
    });
  }
  postprocessor(topElement, ctx) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const child = topElement.firstElementChild;
      if (!child)
        return;
      let str;
      if (child instanceof HTMLPreElement) {
        if (!ctx.getSectionInfo(topElement))
          return;
        const { lineStart } = ctx.getSectionInfo(topElement);
        const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
        if (!(file instanceof import_obsidian2.TFile))
          return;
        const text = yield this.app.vault.cachedRead(file);
        let source = text.split("\n").slice(lineStart, lineStart + 1);
        str = source.join("\n");
        if (!Processor.BASE_RE.test(str))
          return;
        let [attribute_string] = (_a = str.match(Processor.BASE_RE)) != null ? _a : [];
        child.prepend(new Text(attribute_string));
      }
      if (child instanceof HTMLTableElement || child.hasClass("math") && child.hasClass("math-block") || child.hasClass("callout")) {
        if (!ctx.getSectionInfo(topElement))
          return;
        const { text, lineEnd } = ctx.getSectionInfo(topElement);
        const adjustment = child.hasClass("callout") ? 0 : 1;
        let source = ((_b = text.split("\n").slice(lineEnd + adjustment, lineEnd + adjustment + 1)) != null ? _b : []).shift();
        if (source && source.length && Processor.ONLY_RE.test(source.trim())) {
          let [attribute_string] = (_c = source.match(Processor.ONLY_RE)) != null ? _c : [];
          child.prepend(new Text(attribute_string));
          str = topElement.innerText;
        }
      }
      if (child instanceof HTMLParagraphElement && !child.childElementCount) {
        if (Processor.ONLY_RE.test(child.innerText.trim())) {
          child.detach();
          return;
        }
      }
      if (!Processor.BASE_RE.test(str != null ? str : topElement.innerText))
        return;
      if (!(child instanceof HTMLElement))
        return;
      Processor.parse(child);
    });
  }
  onunload() {
    return __async(this, null, function* () {
      console.log("Markdown Attributes unloaded");
    });
  }
};