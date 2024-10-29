function allEven(numbers) {
    for (let num of numbers) {
        if (num % 2 !== 0) {  // Check for odd numbers
            return false;     // Return false if any number is odd
        }
    }
    return true;  // Return true if all numbers are even
}

// Examples
console.log(allEven([2, 4, 6, 8])); // true
console.log(allEven([2, 3, 4, 6])); // false
console.log(allEven([]));            // true (empty array is considered all even)

//...//

function hasOdd(numbers) {
    for (let num of numbers) {
        if (num % 2 !== 0) {  // Проверка на нечетность
            return true;      // Возвращаем true, если найден нечетный элемент
        }
    }
    return false;  // Возвращаем false, если все элементы четные
}

// Примеры использования
console.log(hasOdd([2, 4, 6, 8])); // false
console.log(hasOdd([2, 3, 4, 6])); // true
console.log(hasOdd([]));            // false (пустой массив считается как все четные)

//...//

function average(numbers) {
    if (numbers.length === 0) return 0; // Обработка пустого массива
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Суммируем элементы
    const avg = sum / numbers.length; // Вычисляем среднее
    return Math.round(avg * 10) / 10; // Округляем до десятых
}

// Примеры использования
console.log(average([1, 2, 3, 4, 5])); // 3.0
console.log(average([1, 2, 3]));       // 2.0
console.log(average([]));               // 0

//...//

function moveFirstToEnd(arr) {
    if (arr.length === 0) return arr; // Проверяем, пустой ли массив
    return arr.slice(1).concat(arr[0]); // Создаем новый массив без первого элемента и добавляем его в конец
}

// Пример использования
console.log(moveFirstToEnd([1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]

//...//

function multiplesOfFive(numbers) {
    return numbers.filter(num => num % 5 === 0); // Фильтруем элементы, кратные пяти
}

// Примеры использования
const result = multiplesOfFive([1, 2, 5, 12, 15, 21]);
console.log(result); // [5, 15]

//...//

function formatEmployees(employees) {
    return employees.map(employee => `Имя: ${employee.name}, возраст: ${employee.age}`);
}

// Пример использования
const employees = [
    { name: 'Иван', age: 23 },
    { name: 'Мария', age: 30 },
    { name: 'Сергей', age: 27 }
];

const results = formatEmployees(employees);
console.log(results);
// Вывод: ["Имя: Иван, возраст: 23", "Имя: Мария, возраст: 30", "Имя: Сергей, возраст: 27"]

//...//

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

// Проверяем, пустой ли объект
if (Object.keys(salaries).length > 0) {
    // Суммируем зарплаты
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
}

// Результат
console.log(sum); // 390

//...//

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') { // Проверяем, является ли значение числом
            obj[key] *= 2; // Умножаем на 2
        }
    }
}

// Пример использования
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu); 
// После вызова функции:
// {
//   width: 400,
//   height: 600,
//   title: "My menu"
// }

//...//

function sum(n) {
    if (n <= 0) return 1; // Если n <= 0, возвращаем 1
    return (n * (n + 1)) / 2; // Формула для суммы первых n натуральных чисел
}

// Примеры использования
console.log(sum(0)); // 1
console.log(sum(5)); // 15
console.log(sum(10)); // 55

//...//

function isPrime(num) {
    if (num <= 1) return false; // 0 и 1 не являются простыми числами
    if (num <= 3) return true; // 2 и 3 являются простыми числами

    // Исключаем четные числа и числа, кратные 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Проверяем делители от 5 до √num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; // Если не нашли делителей, число простое
}

// Примеры использования
console.log(isPrime(0));             // false
console.log(isPrime(1));             // false
console.log(isPrime(17));            // true
console.log(isPrime(10000000000000)); // false

//...//

function isAnagram(str1, str2) {
    const normalize = (str) => 
        str.toLowerCase()  // Приводим к нижнему регистру
           .replace(/[^a-z]/g, '') // Убираем все не буквенные символы
           .split('') // Превращаем строку в массив символов
           .sort() // Сортируем символы
           .join(''); // Объединяем обратно в строку

    return normalize(str1) === normalize(str2); // Сравниваем нормализованные строки
}

// Примеры использования
console.log(isAnagram('finder', 'Friend')); // true
console.log(isAnagram('hello', 'bye')); // false
console.log(isAnagram('A gentleman', 'Elegant man')); // true
console.log(isAnagram('Listen', 'Silent!')); // true

//...//

function isPalindrom(str) {
    // Нормализуем строку: приводим к нижнему регистру и убираем пробелы
    const normalizedStr = str.toLowerCase().replace(/\s+/g, '');

    // Проверяем, равна ли строка своему обратному порядку
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Примеры использования
console.log(isPalindrom('казак')); // true
console.log(isPalindrom('строка')); // false
console.log(isPalindrom('шалаш')); // true
console.log(isPalindrom('А роза упала на лапу Азора')); // true (пример с пробелами)

//...//

function getUnique(arr) {
    const counts = {};
    
    // Считаем количество вхождений каждого элемента
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    // Возвращаем только те элементы, которые встречаются один раз
    return Object.keys(counts).filter(num => counts[num] === 1).map(Number);
}

// Пример использования
console.log(getUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]

//...//

function cleanFalsyValues(arr) {
    return arr.filter(Boolean); // Используем filter с конструкцией Boolean для удаления ложных значений
}

// Пример использования
console.log(cleanFalsyValues([1, "", 0, false, 3, "hello", NaN, undefined])); 
// [1, 3, "hello"]

//...//

function cleanFalsyValues(arr) {
    return arr.filter(Boolean); // Используем filter с конструкцией Boolean для удаления ложных значений
}

// Пример использования
console.log(cleanFalsyValues([1, "", 0, false, 3, "hello", NaN, undefined])); 
// [1, 3, "hello"]

//...//

function longestWord(sentence) {
    // Разбиваем предложение на слова и используем reduce для нахождения самого длинного слова
    return sentence.split(' ').reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

// Пример использования
console.log(longestWord("Frontend development is interesting")); // "development"

//...//

function removeDuplicateStrings(arr) {
    return [...new Set(arr)]; // Используем Set для автоматического удаления дубликатов
}

// Пример использования
console.log(removeDuplicateStrings(["apple", "banana", "apple", "orange", "banana"])); 
// ["apple", "banana", "orange"]

//...//

function countOccurrences(arr) {
    const occurrences = {};
    
    // Проходим по массиву и считаем количество вхождений
    for (const item of arr) {
        occurrences[item] = (occurrences[item] || 0) + 1; // Увеличиваем счетчик
    }
    
    return occurrences; // Возвращаем объект с результатом
}

// Пример использования
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "banana"]));
// { apple: 2, banana: 3, orange: 1 }

//...//

function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null }; // Обработка пустого массива

    let min = arr[0];
    let max = arr[0];

    // Проходим по массиву и находим минимум и максимум
    for (const num of arr) {
        if (num < min) {
            min = num; // Обновляем минимум
        }
        if (num > max) {
            max = num; // Обновляем максимум
        }
    }

    return { min, max }; // Возвращаем объект с результатом
}

// Пример использования
console.log(findMinMax([3, 5, 1, 8, -2])); // { min: -2, max: 8 }

//...//

function doubleOddNumbers(arr) {
    return arr.map(num => num % 2 !== 0 ? num * 2 : num); // Удваиваем нечётные числа
}

// Пример использования
console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // [2, 2, 6, 4, 10]

//...//

function mergeAndSort(arr1, arr2) {
    // Объединяем массивы и удаляем дубликаты с помощью Set
    const mergedArray = [...new Set([...arr1, ...arr2])];
    
    // Сортируем массив по возрастанию
    return mergedArray.sort((a, b) => a - b);
}

// Пример использования
console.log(mergeAndSort([3, 5, 7, 1], [8, 3, 2, 1])); // [1, 2, 3, 5, 7, 8]

//...//