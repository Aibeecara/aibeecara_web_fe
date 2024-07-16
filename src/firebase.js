import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/compat/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDy4EwxDKYwp7VQ4w16h9VDHL7h6FzMbvo',
	authDomain: 'aibeecara-firebase.firebaseapp.com',
	databaseURL:
		'https://aibeecara-firebase-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'aibeecara-firebase',
	storageBucket: 'aibeecara-firebase.appspot.com',
	messagingSenderId: '924114369741',
	appId: '1:924114369741:web:8ba039643ddb4af2357d84',
	measurementId: 'G-CGW546YEQ6',
}

const fireDb = firebase.initializeApp(firebaseConfig);
const storage = getStorage(fireDb);
const auth = getAuth(fireDb)
const provider = new GoogleAuthProvider()
export {storage, auth, provider}
export default fireDb.database();