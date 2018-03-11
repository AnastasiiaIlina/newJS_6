let keyTrainer = {};
keyTrainer.chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

// task 2-3
keyTrainer.charCount = '';
keyTrainer.setCharCount = () =>  {
	let enterNumber = +prompt('Введите к-тво символов, которoе нужно набрать');

	const checkPositiveInteger =()=> {

		while(!(Number.isInteger(enterNumber) && enterNumber>1)) {
			enterNumber = +prompt('Неверный ввод. Попробуйте еще раз');
		}	
	}

	checkPositiveInteger();
}

// task 4
	
keyTrainer.task = '';
keyTrainer.createTask = {};




function run(){
	keyTrainer.setCharCount();
	// keyTrainer.checkPositiveInteger();
}

run();


	







