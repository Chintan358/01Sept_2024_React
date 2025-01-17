import { useEffect, useState } from 'react';
import { db, auth } from '../firestore'
import { getDoc, doc } from 'firebase/firestore'

const Home = () => {

    const [profile, setProfile] = useState()




    const loadCurrentUser = async () => {
        await auth.onAuthStateChanged(async (user) => {


            if (user == null) {
                window.location.href = "/"
            }

            if (user.displayName == null) {
                const result = await getDoc(doc(db, "users", user.uid))
                setProfile(result.data())
            }
            else {
                setProfile({ uname: user.displayName, email: user.email })
            }
        })
    }

    useEffect(() => {
        loadCurrentUser()
    }, [])

    const logout = async () => {
        await auth.signOut()
        window.location.href = "/"
    }

    return <><div className="row">
        {profile ? <div className="col-4 card mx-auto mt-3 p-3">
            <h1>Welcome, {profile.uname}</h1>
            <hr />
            <p>
                <h3>Username : {profile.uname}</h3>
                <h3>Phone : {profile.phone}</h3>
                <h3>Email : {profile.email}</h3>
            </p>

        </div> : <div className="col-4 card mx-auto mt-3 p-3">
            <div class="spinner-grow" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        }
    </div>
        <div className="row">
            <div className="col-4 card mx-auto mt-3 p-3">
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </div>
    </>


}


export default Home