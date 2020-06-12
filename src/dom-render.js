class DOMRender {
    constructor (rooTag ="", domString = "") {
      this.parser = new DOMParser() || ""; // I didn't remember why I did this kkkkk
      this.element = domString !== "" ? this.createHTML(domString): null;
      this.rootTag = rooTag || null;
      this.elements = []; // I think this will be a future feature
  
      if(this.element) {
        this.elements.push(this.element);
      }
  
    }
  
    createHTML(htmlString) {
      return this.parser.parseFromString(htmlString, 'text/html').body.firstChild;
    }
  
    renderElement(container = null, element = null) {
      element = typeof element == 'string' ? this.createHTML(element) : element;
      document.querySelector(container || this.rootTag).append(element || this.element);
    }

    // I need to implement this
    // renderElements(elements = []) {
    //     if (!this.rootTag) throw new Error('You need a root tag!');
    //     this.elements.forEach( element => {
    //         document.querySelector(this.rootTag).append(element)
    //     })
    // }
  
    setElement(htmlString) {
      this.element = this.parser.parseFromString(htmlString, 'text/html').body.firstChild;
    }
  
  }
  