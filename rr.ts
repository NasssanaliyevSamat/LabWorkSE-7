console.log('Статус кредита ');


function validateCredit(MonthlyIncome, // Минимальный месячный доход
                        Age, // Возраст
                        Gender, // Пол
                        WorkExperience, //Опыт работы
                        Status, // Статус
                        NumberOfOverdueLoans, // Количество просроченных кредитов
                        FormOfLoanIssuance, // Форма выдачи кредита
                        AvailabilityOfCollateral, // Наличие залового имущества
                        RequestedAmount) // Запрашиваемая сумма
{
    if (Status == 'Физ. лицо' && Age < 18) // Минимальный возраст
    {
        return 'Отказано'
    }
    else if ((Gender == 'Мужчина' && Age >= 63) || // Пенсионный возраст
        (Gender == 'Женщина' && Age >= 58))
    {
        return 'Отказано'
    } else if ((Status == 'Физ. лицо' && MonthlyIncome < 720000) || // Минимальный доход
        (Status == 'Юр. лицо' && MonthlyIncome < 3000000))
    {
        return 'Отказано'
    }
    else if (Status == 'Физ. лицо' && WorkExperience < 2) // Опыт работы физ. лица
    {
        return 'Отказано'
    }
    else if ((Status == 'Физ. лицо' && RequestedAmount > 3000000 + AvailabilityOfCollateral) || // Максимальная сумма кредита и наличие залога
        (Status == 'Юр. лицо' && RequestedAmount > 30000000 + AvailabilityOfCollateral))
    {
        return 'Отказано'
    }
    else if (NumberOfOverdueLoans > 0) // Просроченные кредиты
    {
        return 'Отказано'
    }
    if (Status == 'Юр. лицо' && WorkExperience < 5) // Опыт работы юр. лица
    {
        return 'Отказано'
    }
    else if (Status == 'Юр. лицо' && FormOfLoanIssuance == 'Наличные')  // Форма выдачи кредита для юр. лиц
    {
        return 'Отказано'
    }
    else
    {
        return 'Одобрено'
    }
}


console.log(validateCredit(750000,
                            17,
                            'Мужчина',
                            3,
                            'Физ. лицо',
                            0,
                            'Наличные',
                            0,
                            100000))

