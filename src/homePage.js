function Createheader() {
    const header = document.createElement('div')
    const nav = document.createElement('nav')
    const image = document.createElement('img')
    const myName = document.createElement('h1')
    const about = document.createElement('a')
    const blog = document.createElement('a')
    const contact = document.createElement('a')
    const resume = document.createElement('a')

    header.append(nav)
    header.append(myName)
    header.append(image)
    nav.append(about)
    nav.append(blog)
    nav.append(contact)
    nav.append(resume)

    myName.textContent = 'Nick Migel'
    image.src = './styles/pictures/selfie.jfif'
    about.href = '#'
    blog.href = '#'
    contact.href = '#'
    resume.href = '#'
    about.textContent = 'About'
    blog.textContent = 'Blog'
    contact.textContent = 'Contact'
    resume.textContent = 'Resume'

    return header
}

function createSection(titleText, buttontext, pText) {
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const paragraph = document.createElement('p')
    const button = document.createElement('button')

    title.textContent = titleText
    button.textContent = buttontext
    paragraph.textContent = pText

    container.append(title)
    container.append(paragraph)
    container.append(button)

    return container
}

const root = document.querySelector('#root')
root.append(Createheader())

const body = document.querySelector('body')
body.append(createSection('placeholder', 'placeholder', 'placeholder'))
body.append(createSection('placeholder', 'placeholder', 'placeholder'))
body.append(createSection('placeholder', 'placeholder', 'placeholder'))
body.append(createSection('placeholder', 'placeholder', 'placeholder'))
