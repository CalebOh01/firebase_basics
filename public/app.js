document.addEventListener("DOMContentLodaded", event => {
     const app = firebase.app();

     
})

function getPost() {
     const db = firebase.firestore()

     const myPost = db.collection('posts').doc('firstpost')

     myPost.get()
          .then(doc => {
               const data = doc.data()
               document.write(data.title)
               document.write(data.views)
          })
}

function googleLogin() {
     const provider = new firebase.auth.GoogleAuthProvider()
     firebase.auth().signInWithPopup(provider)
          .then(result => {
               const user = result.user
               document.write(`Hello ${user.displayName}`)
               console.log(user)
          })
}

