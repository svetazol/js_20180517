import Button from './blocks/button/button';
import Input from './blocks/input/input';

window.addEventListener('DOMContentLoaded', function () {

    let button = new Button({
        text: 'Тестовая кнопка'
    });

    let input = new Input({
        placeholder: 'Тестовый инпут'
    });

    button.append(document.body);
    input.append(document.body);
});


