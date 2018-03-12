// task 1-3

let keyTrainer = {
	chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

	charCount:'',

	setCharCount:function() {
		let enterNumber = +prompt('Введите к-тво символов, которoе нужно набрать');

		document.querySelector('.enterNumber').innerHTML = enterNumber + ' символа (-ов).';
		this.charCount=enterNumber;

			

		const checkPositiveInteger =()=> {

			while(!(Number.isInteger(enterNumber) && enterNumber>0)) {
				enterNumber = +prompt('Неверный ввод. Попробуйте еще раз');
			}	
		}

		checkPositiveInteger();

		return enterNumber;

	},


}; /*end keyTrainer*/




// task 4
keyTrainer.task=[];
keyTrainer.createTask =function() {
	keyTrainer.task.lenght = this.setCharCount();

	for ( i=0; i<keyTrainer.task.lenght; i++) {
		 keyTrainer.task[i] = this.chars[Math.floor(Math.random()*keyTrainer.task.lenght)];
		 document.querySelector('.out').innerHTML = keyTrainer.task + ',' ;
		
	}

		console.log(keyTrainer.task);
}


// task 5
keyTrainer.userInput = '';
keyTrainer.startTask = function() {
		let result = prompt(`Наберите указанные символы: ${keyTrainer.task}`);


		keyTrainer.userInput = result;

		if(keyTrainer.userInput === keyTrainer.task.join('')) {
			console.log('Поздравдляем! Вы справились без ошибок!');
		}

		else {
			keyTrainer

			console.log('fyyyy');

		}


		// return result;
}













function run(){
	// keyTrainer.setCharCount();

// keyTrainer.checkPositiveInteger();
		keyTrainer.createTask(); 
		keyTrainer.startTask();
}

run();


	







