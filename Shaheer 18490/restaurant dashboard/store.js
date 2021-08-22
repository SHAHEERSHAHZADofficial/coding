

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAFJFB8zEr2YmJWCIvBqULqmTDG1-adVlY",
    authDomain: "hackathonbatch7.firebaseapp.com",
    projectId: "hackathonbatch7",
    storageBucket: "hackathonbatch7.appspot.com",
    messagingSenderId: "900761913502",
    appId: "1:900761913502:web:845deb3024c0129d93538f",
    measurementId: "G-NHJ027MGVX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




let db = firebase.firestore()
let storage = firebase.storage();

   

function addinfo(){
    let product = document.getElementById("name").value
let price = document.getElementById("price").value
let image = document.getElementById("images").value
// storage




    db.collection("product").add({
        Name:product,
        PRICE: price,
        Image: image
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    })

}
    function addItemToCart(title, price, imageSrc) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        addToCartButtons()
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('This item is already added to the cart')
                return
            }
        }}
    
        var addToCartButtons = document.getElementsByClassName('shop-item-button')
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i]
            button.addEventListener('click', addToCartClicked)
        }

        let image = document.getElementById("images")

        function uploadImage() {
                let file = Image.files[0];
                let displayPicRef = storage.ref().child('images/' + file.name);
        
                displayPicRef.put(file)
                    .then(() => {
                        displayPicRef.getDownloadURL()
                            .then((url) => {
                                console.log(url);
                                imgEl.src = url;
                            })
                    });
            }