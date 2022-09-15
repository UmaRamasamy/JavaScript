
const screen = document.querySelector('.screen');
const buttons = Array.from(document.querySelectorAll('.btn'));
// console.log(buttons)
buttons.map((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num
        console.log(value)
        switch (value) {
            case 'C':
                screen.value = '';
                break;
            case '&larr':
                if (screen.value) {
                    screen.value = screen.value.slice(0, -1)
                }
                break;
            case '=':
                try {

                    screen.value = eval(screen.value);
                } catch {
                    screen.value = 'Error';
                }

                break;
            default:
                screen.value += value;
        }
    }

    )
})