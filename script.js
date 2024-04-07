// 1)Folosind un for loop sa se afișeze multiplii de 5 de la 1 la 48 ( 5, 10, 15 … 45 )

// let numbers = [];

// for (let i = 1;i <= 48; i++) {
//     if (i % 5 === 0) {
//     numbers.push(i);    
//     }
    
// }; 

// console.log (numbers);


// 2) Creează o funcție care primește ca parametru un număr, iar funcția afișează în
//  consola numerele de la zero pana la valoarea parametrului. Dacă funcția este apelată, 
//  iar parametrul are valoarea 12, în consola o sa vedem 0, 1, 2 ….. 12.

// let numbers = [];

// for (let i = 1;i <= 12; i++) {
//     if (i <= 12) {
//     numbers.push(i);    
//     }
    
// }; 

// console.log (numbers);




// 3) Creează o funcție care primește ca parametru un array și returnează lungimea
//  array-ului.


// let listNume = ["Calin", "Stefan", "Luca", "Matei"];
// console.log (listNume);

// 4.Creează o funcție care primește ca parametru un array și returnează suma numerelor pare din el


// function sumaNumerePare(array) {
//     let sum = 0;
    
//     for (let i = 0; i < arrayDeNumere.length; i++) {
//         if (array[i] % 2 === 0) {
//             sum += array[i];
           
// };
//         };
//         return sum;
      
// };

// let array = [1, 7 , 38, 5, 6];
// console.log (sumaNumerePare(array));




// 5. Creează o funcție care primește ca parametru un array și încă un parametru număr. 
// Funcția sa returneze suma numerelor mai mari decât acel număr. Dacă array-ul este [5, 3, 10, 17, 4],
//  iar numărul este 9, funcția sa returneze 27 ( 10 + 17 )

// let arrayDeNumere = [5, 3, 10, 17, 4];
// let sum = 0;

// for (let i = 0;i < arrayDeNumere.length; i++) {
    
//     if (arrayDeNumere[i] > 9) {
//         sum += arrayDeNumere[i];
//     }
//     return sum;
// };

// console.log(sum);






// 6.Creează o funcție care primește ca parametru un array și returnează suma numerelor impare și 
// pozitive din el


// const sumaNumereImpareSiPozitive = (numere) => {
//     let suma = 0;

//     for (let i = 0; i < numere.length; i++) {
//         if (numere[i] % 2 === 1 && numere[i] > 0) {
//             suma += numere[i];
//         };
        
//     };

//     return suma;

// };
// console.log (sumaNumereImpareSiPozitive ([5, 4, -4, -5, 9]));




// 7.Creează o funcție care primește ca parametru un array și returnează diferența dintre suma 
// numerelor pare și suma numerelor impare

// const diferentaSumaNumerePareSiImpare = (numere) => {
//     let sumaNumerePare = 0;
//     let sumaNumereImpare = 0;

//     for (let i = 0; i < numere.lenght; i++) {
//         if (numere[i] % 2 === 1) {
//             sumaNumereImpare += numere[i];
//         }
//         if (numere[i] % 2 === 0) {
//             sumaNumerePare += numere[i];
//         };
        
//     };
//     return sumaNumerePare - sumaNumereImpare;
// };

// let array = [1, 7 , 38, 5, 6];


// console.log(diferentaSumaNumerePareSiImpare (array));




// 8.Creează o funcție care primește ca parametru un array de string-uri și returnează suma 
// caracterelor. De exemplu: [“Cristian”, “SkillBrain!”, “dEv”] -> 8 + 11 + 3 = 22

// function sumaCaractere (array) {
//     let suma = 0;

//     for (let i = 0; i <array.lenght; i++) {
//         suma += array[i].lenght;
//     }
//     return suma;
// }

// let array = ["Cristian", "SkillBrain!", "dEv"];
// console.log(sumaCaractere(array));
