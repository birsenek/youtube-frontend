const repeatComments = document.querySelector('.comments')

const createNewComment = () => {
const viewerComments = document.createElement('div')
viewerComments.classList.add('viewer-commments')

const profilePicture = document.createElement('div')
profilePicture.classList.add('profile-picture')

const viewerComment = document.createElement('div')
viewerComment.classList.add('viewer-comment')

const spanWrapper = document.createElement('span')
const spanTime = document.createElement('span')
spanTime.innerHTML = "55 minutos atrás"
const usuario = document.createElement('span')
usuario.classList.add('usuario')
usuario.innerHTML = 'Usuário '


const p = document.createElement('p')

p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies suscipit erat, et iaculis tortor. Maecenas a cursus nulla, eget venenatis velit. Maecenas justo nulla, interdum eu mi sit amet, hendrerit interdum libero."

const commentsSocials = document.createElement('div')
commentsSocials.classList.add('comments-socials')

const thumbsUp = document.createElement('span')
thumbsUp.classList.add('material-icons')
thumbsUp.classList.add('socialIcon')
thumbsUp.innerHTML = "thumb_up"

const thumbsDown = document.createElement('span')
thumbsDown.classList.add('material-icons')
thumbsDown.classList.add('socialIcon')
thumbsDown.innerHTML = "thumb_down"

const responder = document.createElement('span')
responder.innerHTML = "RESPONDER"

const breakLine = document.createElement('br')

repeatComments.appendChild(viewerComments)
viewerComments.appendChild(profilePicture)
viewerComments.appendChild(viewerComment)
viewerComment.appendChild(usuario)
viewerComment.appendChild(spanTime)
viewerComment.appendChild(p)
viewerComment.appendChild(commentsSocials)
commentsSocials.appendChild(thumbsUp)
commentsSocials.appendChild(thumbsDown)
commentsSocials.appendChild(responder)
repeatComments.appendChild(breakLine)
}

const createLotsOfComments = () => {
    for (i = 0; i < 5; i++) {
        createNewComment()
    }
}

createLotsOfComments()