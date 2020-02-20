function Createheader() {
    const header = document.createElement('div')
    const nav = document.createElement('nav')
    const image = document.createElement('img')
    const myName = document.createElement('h1')
    const Home = document.createElement('a')
    const about = document.createElement('a')
    const blog = document.createElement('a')
    const contact = document.createElement('a')

    header.append(nav)
    header.append(myName)
    header.append(image)
    nav.append(about)
    nav.append(blog)
    nav.append(contact)
    nav.append(Home)

    myName.textContent = 'Nick Migel'
    image.src = './styles/pictures/selfie.jfif'
    about.src = '#'
    blog.src = '#'
    contact.src = '#'
    home.src = 'index.html'
    about.textContent = 'About'
    blog.textContent = 'Blog'
    contact.textContent = 'Contact'
    home.textContent = 'Home'

    return header
}