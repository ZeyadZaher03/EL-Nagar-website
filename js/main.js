// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

var firebaseConfig = {
    apiKey: "AIzaSyBq8uCZY0ky7jiz7mRauKxMGpI70Mg4SMo",
    authDomain: "el-nagar.firebaseapp.com",
    databaseURL: "https://el-nagar-default-rtdb.firebaseio.com",
    projectId: "el-nagar",
    storageBucket: "el-nagar.appspot.com",
    messagingSenderId: "433659606833",
    appId: "1:433659606833:web:6ca30ffd0e72f64a6ce210"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
const db = firebase.database();

db.ref("/").on("value",(snapshot)=>{
    console.log(snapshot.val())
})
