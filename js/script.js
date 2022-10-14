window.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('.toggler')

    togglers.forEach((toggler) => {
        toggler.addEventListener('input', (e) => {
            e.target.parentNode.classList.toggle('opened')
            e.target.parentNode.parentNode.classList.toggle('toggled')
            if (e.target.parentNode.parentNode.querySelector('.hidden-content').style.display == 'none') {
                e.target.parentNode.parentNode.querySelector('.hidden-content').style.display = 'flex'
            } else {
                e.target.parentNode.parentNode.querySelector('.hidden-content').style.display = 'none'
            }
            // e.target.parentNode.parentNode.querySelectorAll('.hidden').forEach((h) => {
            //     h.classList.toggle('hidden')
            // })
        })
    })
})

