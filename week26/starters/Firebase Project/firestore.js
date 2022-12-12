(function(){

	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyBboZP3WoD5Os9mOv4QGWej9Cu5lmI-bIM",
		authDomain: "course-92aae.firebaseapp.com",
		databaseURL: "https://course-92aae.firebaseio.com",
		projectId: "course-92aae",
		storageBucket: "course-92aae.appspot.com",
		messagingSenderId: "906967504618",
		appId: "1:906967504618:web:a5b51551a229502dc7a993",
		measurementId: "G-PWBBC8GN6B"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	// handle on firebase db
	var db = firebase.firestore();

	// get elements
	const first = document.getElementById('first');
	const last  = document.getElementById('last');
	const dob   = document.getElementById('dob');
	const write	= document.getElementById('write');
	const read	= document.getElementById('read');
	const status = document.getElementById('status');

	// write to 
	write.addEventListener('click', e => {
		status.innerHTML = '';		
		db.collection("users").add({
		    first: first.value,
		    last: last.value,
		    born: dob.value
		})
		.then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id);
		    status.innerHTML += `Document written with ID: ${docRef.id}`;
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	});

	// read event
	read.addEventListener('click', e => {
		status.innerHTML = '';
		db.collection("users").get().then((querySnapshot) => {
		    querySnapshot.forEach((doc) => {
		        console.log(`${doc.id} => ${doc.data()}`);
		        status.innerHTML += `${JSON.stringify(doc.data())}<br>`;
		    });
		});
	});


}());