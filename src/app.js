import './../styles/styles.css';
import { initializeApp } from 'firebase/app';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
	listAll,
	list,
	deleteObject,
} from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAvE_IBp24gOIC_iOT0YRUJfK9KCSWP1W0',
	authDomain: 'sda-firebase-86182.firebaseapp.com',
	projectId: 'sda-firebase-86182',
	storageBucket: 'sda-firebase-86182.appspot.com',
	messagingSenderId: '205610482743',
	appId: '1:205610482743:web:dbd539dd548225a11bd3b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

//ZADANKO!

//1. Po kliknieciu w elemencie H1 ma sie pojawic info "Przesyłam..."
//2. Po zakończeniu przesyłania w elemencie H1 ma się pojawić info "Przesłano!"
//3. Dodajemy nowy input, w którym użytkownik może wpisać nazwę pliku
//4. Plik z tą nazwą będzie przesłany
//5. Jeżeli użytkownik nie wybrał pliku i kliknął prześli, to w elemencie H1 wyświetlamy
//   "Error: Wybierz plik"
// const myBtn = document.getElementById("mySendBtn");
// myBtn.addEventListener("click", () => {
//     const myResult = document.getElementById("myResult");

//     const file = document.getElementById("myFileInput").files[0];
//     if (file) {
//         myResult.innerText = "Przesyłam...";
//         const myFileNameInput = document.getElementById("myFileNameInput");
//         const myFileRef = ref(storage, myFileNameInput.value);

//         uploadBytes(myFileRef, file).then((result) => {
//             myResult.innerText = "Przesłano!";
//         });
//     }
//     else {
//         myResult.innerText = "Error: Wybierz plik!";
//     }
// });

// const imageRef = ref(storage, "ZdjęcieCV.png");
// getDownloadURL(imageRef).then((url) => {
//     const myImage = document.getElementById("myImage");
//     myImage.src = url;
// });

//ZADANKO!
//1. Po przesłaniu obrazka wyświetl ten obrazek w HTMLu
// -- Wykorzystaj metode getDownloadURL
// const myBtn = document.getElementById("mySendBtn");
// myBtn.addEventListener("click", () => {
//     const myResult = document.getElementById("myResult");

//     const file = document.getElementById("myFileInput").files[0];
//     if (file) {
//         myResult.innerText = "Przesyłam...";
//         const myFileNameInput = document.getElementById("myFileNameInput");
//         const myFileRef = ref(storage, myFileNameInput.value);

//         uploadBytes(myFileRef, file).then((result) => {
//             myResult.innerText = "Przesłano!";

//             getDownloadURL(result.ref).then((url) => {
//                 const myImage = document.getElementById("myImage");
//                 myImage.src = url;
//             });
//         });
//     }
//     else {
//         myResult.innerText = "Error: Wybierz plik!";
//     }
// });

//ZADANKO
// // 1. Wyświetl wszystkie pliki w postaci listy numerowanej bądź nienumerowanej
// const storageRef = ref(storage);
// listAll(storageRef).then((res) => {
// 	const myList = document.getElementById('myFilesList');
// 	res.items.forEach((item) => {
// 		const listItem = document.createElement('li');
// 		listItem.innerText = item.fullPath;
// 		myList.appendChild(listItem);
// 	});
// });

// const imageRef = ref(storage, 'Moje zdjęcie.jpg');
// deleteObject(imageRef).then(() => {
// 	console.log('Usunięto');
// });
