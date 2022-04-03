// generate same header & footer on every page automatically
let body = document.querySelector("body");
let header = document.createElement("header");
body.prepend(header);

header.innerHTML = `
    
    <div class="logo-container">
        <a href="index.html">
            <img src="images/logo.svg" alt="bunny & bee logo">
        </a>
    </div>
    <div class="text-container">
        <h3 class="serif">Angel Bunny</h3>
        <h3 class="sans-serif">Apiary</h3>
    </div>

    <nav>
        <ul class="header">
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="bees.html">Bees</a></li>
        </ul>
    </nav>
    
`;

let footer = document.createElement("footer");
body.append(footer);

footer.innerHTML = `
    <nav>
        <ul class="footer">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="bees.html">Bees</a></li>
        </ul>
    </nav>
    
`;






