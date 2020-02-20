function Createheader() {
    const header = document.createElement('div')
    const nav = document.createElement('nav')
    const image = document.createElement('img')
    const myName = document.createElement('h1')
    const Home = document.createElement('a')
    const about = document.createElement('a')
    const contact = document.createElement('a')
    const resume = document.createElement('a')

    header.append(nav)
    header.append(myName)
    header.append(image)
    nav.append(about)
    nav.append(Home)
    nav.append(contact)
    nav.append(resume)

    myName.textContent = 'Nick Migel'
    image.src = './styles/pictures/selfie.jfif'
    about.href = '#'
    blog.href = 'index.html'
    contact.href = '#'
    resume.href = '#'
    about.textContent = 'About'
    home.textContent = 'Home'
    contact.textContent = 'Contact'
    resume.textContent = 'Resume'

    return header
}