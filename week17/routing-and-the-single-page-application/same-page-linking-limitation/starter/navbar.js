const navlink = (link, title) => {
  return `<a href="#/${link}" class="text-warning">${title}</a>`
}

const navbar = () => {
  return `<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Router</a>
    ${navlink('home', 'Home')}
    ${navlink('signin', 'Sign In')}
    ${navlink('blog', 'Blog')}
    ${navlink('pricing', 'Pricing')}
      </div>
    </div>
  </nav>`
}

const setNavbar = () => {
  const el = document.getElementById('navbar')
  el.innerHTML = navbar()
}

setNavbar()