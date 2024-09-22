const body = document.body
body.style.height = '100vh'
const button = document.createElement('button')
button.className = 'top-button'
body.appendChild(button)

const generateGrid = (numberOfSquares = 5) => {
    if (numberOfSquares) {
        const wrapperNode = document.createElement('div')
        wrapperNode.className = 'wrapper'
        button.textContent = 'Setting'
        body.appendChild(wrapperNode)

        const gap = 40 / numberOfSquares
        const size = (1200 - numberOfSquares * gap) / numberOfSquares
        wrapperNode.style.gap = `${gap}px`

        for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
            const div = document.createElement('div')
            div.className = `item div_${i}`
            div.style.height = `${size}px`
            div.style.width = `${size}px`
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'white'
                div.style.border = '1px solid grey'
                div.style.transform = 'scale(1.2)'
                div.textContent = `This is div ${i}`
                div.style.fontSize = '10px'
                div.style.textTransform = 'uppercase'
            })

            div.addEventListener('mouseleave', () => {
                div.style.backgroundColor = 'crimson'
                div.style.border = 'none'
                div.textContent = ''
                div.style.transform = 'scale(1)'
                div.style.zIndex = '100'
            })

            wrapperNode.appendChild(div)
        }
    }
}

generateGrid()

button.addEventListener('click', () => {
    const numberOfSquares = prompt(
        'Please enter the number of squares per side for the new grid. The number Max is 100.'
    )
    if (numberOfSquares) {
        console.log('numberOfSquares: ', numberOfSquares)
        const wrapperNode = document.querySelector('.wrapper')
        body.removeChild(wrapperNode)
        generateGrid(numberOfSquares)
    }
})
