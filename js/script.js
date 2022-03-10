var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];


let mainEl = document.querySelectorAll("main")
mainEl[0].style.backgroundColor = 'var(--main-bg)'
// have to use bracket notation because queryselectorall returns an array by default
mainEl[0].innerHTML = '<h1>SEI Rocks!</h1>'
mainEl[0].setAttribute("class", "flex-ctr")

let topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.setAttribute("class", "flex-around")


for (let link of menuLinks) {
    const createAnchor = document.createElement("a")
    document.getElementById("top-menu").appendChild(createAnchor);
    createAnchor.innerText = `${link.text}`
    createAnchor.setAttribute("href", `${link.href}`)
    
}
