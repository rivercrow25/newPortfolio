function Createheader() {
    const header = document.createElement('div')
    const nav = document.createElement('nav')
    const image = document.createElement('img')
    const myName = document.createElement('h1')
    const Home = document.createElement('a')
    const blog = document.createElement('a')
    const contact = document.createElement('a')
    const resume = document.createElement('a')

    header.append(nav)
    header.append(myName)
    header.append(image)
    nav.append(Home)
    nav.append(blog)
    nav.append(contact)
    nav.append(resume)

    myName.textContent = 'Nick Migel'
    image.src = './styles/pictures/selfie.jfif'
    home.href = 'index.html'
    blog.href = '#'
    contact.href = '#'
    resume.href = '#'
    home.textContent = 'Home'
    blog.textContent = 'Blog'
    contact.textContent = 'Contact'
    resume.textContent = 'Resume'

    return header
}