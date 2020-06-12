window.addEventListener('load', e => {
    
    // Just render one element one time
    domrender = new DOMRender("#root", "<h1>Hello, DOM! A1</h1>");
    domrender.renderElement();

    // Use the Constructor to render more than one element one time
    Domrender = new DOMRender();
    // TODO: test this
    Domrender.renderElement("#root", Domrender.createHTML("<h1>Hello, DOM! A2</h1>"));
    Domrender.renderElement("#root", "<h1>Hello, DOM! A3</h1>");

    // Another way of render just one element
    Domrender = new DOMRender('#root');
    Domrender.setElement("<h1>Hello, DOM! B1</h1>");
    Domrender.renderElement();

    // Using a timeOut

    setTimeout(() => {
        Domrender = new DOMRender('#root');
        Domrender.setElement("<h1>Hello, DOM! (After a while)</h1>");
        Domrender.renderElement();
    },3000)
    
    // Soon...
    // Domrender = new DOMRender('#root');
    // Domrender.addElement("<h1>Hello, DOM! N1</h1>");
    // Domrender.addElement("<h1>Hello, DOM! N2</h1>");
    // Domrender.addElement("<h1>Hello, DOM! N3</h1>");
    // DOMRender.renderElements();  
  });