let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ( (typeof(a)) ==='string' &&  (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && b != '' && a.length < 50 )   {
		appData.expenses[a] = b;
	} else {

	}
}

appData.moneyPerDay = appData.budget / 30

alert('everyday budget: ' + appData.moneyPerDay );

if (appData.moneyPerDay < 100) {
	console.log('hyevo');
} else if (appData.moneyPerDay < 2000 ) {
	console.log('norm');
} else {
	console.log('pacani voobsche rebyana')
}