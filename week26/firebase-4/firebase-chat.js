(function () {
  // TODO: replace this with your own firebase config object after creating app in your firebase console
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDE3N4OrLCU99tKm3U4OChfLH826__A6ZY",
    authDomain: "chat-e2bc4.firebaseapp.com",
    databaseURL: "https://chat-e2bc4-default-rtdb.firebaseio.com",
    projectId: "chat-e2bc4",
    storageBucket: "chat-e2bc4.appspot.com",
    messagingSenderId: "199414670249",
    appId: "1:199414670249:web:9379c8b1012d41a77b1ab8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // handle on firebase db
  const db = firebase.database();

  const colors = [
    ['white', 'black'],
    ['pink', 'red'],
    ['black', 'grey'],
    ['green', 'yellow'],
    ['purple', 'orange'],
    ['cyan', 'blue'],
    ['magenta', 'lime'],
  ]

  // get elements
  const color = document.getElementById('color');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const logout = document.getElementById('logout');
  const message = document.getElementById('message');
  const write = document.getElementById('write');
  const read = document.getElementById('read');
  const status = document.getElementById('status');
  const userNameDisplay = document.getElementById('name-display'); // element that can show the current user's email
  const chat = document.getElementById('chat-box');
  let currentUserEmail = ''; // variable to store the current user's email

  // write
  write.addEventListener('click', (e) => {
    const messages = db.ref('messages');

    // simple id - ok for example, do not use in production
    const id = new Date().getTime();

    // TODO: Add the value of currentUserEmail when writing to the database under the field name of "sender"
    messages
      .child(id)
      .set({ message: message.value, sender: currentUserEmail })
      .then(function () {
        console.log('Wrote to DB!');
      });
  });

  // read
  read.addEventListener('click', (e) => {
    handleRead();
  });

  color.addEventListener('click', (e) => {
    const newColors = colors[
      Math.floor(Math.random() * colors.length)
    ]
    db.ref('colors').set(newColors)
  })
  
  // TODO: use this provided messagesRef to listen for updates and update the chat div on any update, not just when the 'Update Chat' button is clicked
  const messagesRef = db.ref('messages');
  const colorRef = db.ref('colors')
  colorRef.on('value', (snapshot) => {
    db.ref('colors').once('value').then( ss => {
      let currentColors = ss.val()
      chat.style.backgroundColor = currentColors[0]
      chat.style.color = currentColors[1]

    })

  })
  messagesRef.on('value', (snapshot) => {
    handleRead();
  });

  function handleRead() {
    status.innerHTML = '';
    chat.innerHTML = '';
    const messages = db.ref('messages');

    messages.once('value').then(function (dataSnapshot) {
      var data = dataSnapshot.val();
      if (data) {
        var keys = Object.keys(data);

        keys.forEach(function (key) {
          console.log(data[key]);
          chat.innerHTML +=
            ('<b><u>' + data[key]['sender'] + '</u></b>' || '') +
            '   :   ' +
            data[key].message +
            '<br><br>';
        });
      }
    });
  }

  // TODO: in this function you should set the userNameDisplay.innerHTML to the passed in userEmail as well as updating the currentUserEmail variable to that same value
  function updateCurrentUser(userEmail) {
    currentUserEmail = userEmail
    userNameDisplay.innerHTML = userEmail
  }

  // login
  login.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Login Response: ', resp);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Signup + Login Response: ', resp);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // logout
  logout.addEventListener('click', (e) => {
    firebase
      .auth()
      .signOut()
      .then((resp) => {
        console.log('Logout Response: ', resp);
        logout.style.display = 'none';
        login.style.display = 'inline';
        signup.style.display = 'inline';
        write.style.display = 'none';
        updateCurrentUser('');
      })
      .catch((e) => console.warn(e.message));
  });
})();
