  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBLsmPfO8Ue_PnSPY6d3MdXX2MmOaRKt5o",
    authDomain: "sample-b0726.firebaseapp.com",
    projectId: "sample-b0726",
    storageBucket: "sample-b0726.appspot.com",
    messagingSenderId: "125995971383",
    appId: "1:125995971383:web:d50c53fdda9039ea14e0b2"
  }

  // Initialize Firebase
  const app = initializeApp( firebaseConfig )

  const db = getDatabase( app )

  // get elements
	const message = document.getElementById('message')
	const write   = document.getElementById('write')
	const read	  = document.getElementById('read')
	const status  = document.getElementById('status')

  const dbRef = ref( getDatabase() )

  // data holder
  const messages = []

	// write
	write.addEventListener('click', e => {
    const id = new Date( Date.now() ).toTimeString().split( ':' ).join( '' ).split( ' ' )[ 0 ]
    messages.push({
      id,
      message: message.value
    })
    set( ref( db, 'messages' ), messages )
    status.innerHTML = "Wrote to DB!"
    message.value = ''
	})

	// read
	read.addEventListener('click', e => {
		status.innerHTML = ''
    message.value = ''

    get( child( dbRef, 'messages' ))
      .then( m => {
        let html = ''
        const valueArray = m.val()
        valueArray.forEach( val => {
          html += JSON.stringify( val ) + '<br />'
        })
        status.innerHTML = html
      })
	})