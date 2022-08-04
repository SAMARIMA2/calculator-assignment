const screen = document.querySelector('.screen')
const allBtns = document.querySelectorAll('.numpad button')

screen.innerHTML = ''
let exp = ''

allBtns.forEach(btn => {
    btn.onclick = function () {
        if (btn.classList.contains('clear')) {
            screen.innerHTML = ''
        } else if (btn.classList.contains('plus-minus')) {
            screen.innerHTML = '-' + screen.innerHTML
        } else if (btn.classList.contains('equal')) {
            screen.innerHTML = eval(screen.innerHTML)
        } else {
            screen.innerHTML += btn.innerHTML
        }
    }
})

// allBtns.forEach(btn => {
//     btn.onclick = function () {
//         if (btn.classList.contains('clear')) {
//             screen.innerHTML = ''
//         } else if (btn.classList.contains('equal')) {
//             screen.innerHTML = eval(exp)
//             exp = ''
//         } else if (btn.classList.contains('num')) {
//             exp += btn.innerHTML
//             screen.innerHTML = btn.innerHTML
//         } else if (btn.classList.contains('opt')) {
//             exp += btn.innerHTML
//             document.querySelectorAll('.opt').forEach(op => op.classList.remove('selected'))
//             btn.classList.add('selected')
//         }
//     }
// })

// The End