const Breeds_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(Breeds_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message;  //turn the message into an object
        const breedsArray = Object.keys(breedsObject) //turn the object into an array
        for (let i=0; i < breedsArray.length; i++) {
            const option = document.createElement('option') //option option
            option.value = breedsArray[i] //option value = breed value
            option.innerText = breedsArray[i] 
            select.appendChild(option)    //attach another tag within the parent tag
        }
    })




select.addEventListener('change', event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    getDoggoImg(url)
    doggoInfo.assignMF()
    doggoInfo.assignAge()
    doggoInfo.assignLikes()
    doggoInfo.assignDislikes()
    

})




const img = document.querySelector('.dog-img')

const getDoggoImg = url => {
    fetch(url)         //going to the API url above
        .then(res => {
            return res.json(); //get JSON message back
        })
        .then(data => {
            img.src = data.message  //extract message from JSON and attach to img tag as 
            //new source
        })
}



const doggoInfo = {
    fNames: ['Abby', 'Alice', 'Alita', 'Allie', 'Amber', 'Sally', 'Daisy', 'Nala', 'Iris', 'Lucy', 'Ruby', 'Athena'],
    mNames: ['Ace', 'AJ', 'Oliver', 'Spot', 'Bob', 'Charlie', 'Buster', 'Hank', 'Jake', 'Kobe', 'Loki', 'Lucky', 'Otis', 'Moose', 'Simba'],
    likesList: ['Ice Water From McDonalds', 'Bacon', 'Peeing on Trees', 'Licking Faces', 'Cuddling', 'Sniffing the air', 'Running Around', 'Chewing on the walls', 'Begging for food', 'Playing Hide & Seek'],
    dislikesList: ['Eating Alone', 'Being Left Alone', 'Baths', 'Eating Healthy Foods', 'Roombas', 'Thunder', 'Fireworks', 'The Vacuum', 'Being clean', 'Clean Environments', 'Being Hot', 'Getting scared', 'Halloween', 'Cats'],
    MF: '',
    rname: '',
    age: '',
    likes: '',
    dislikes: '',
    


 



assignMF(){
    x = (Math.floor(Math.random() * 2) == 0)
    if(x) {
        this.MF = "Female";
        this.assignName(this.fNames)
    }else {
        this.MF = "Male"
        this.assignName(this.mNames)
    }
    document.getElementById('MF').innerHTML = `S: ${this.MF}`
},


assignName(array){
    this.rname = array[Math.floor(Math.random()*array.length)]
    document.getElementById('dog-name').innerHTML = `${this.rname}`
},

assignAge(){
    this.age = Math.floor(Math.random()* 16 + 1)
    document.getElementById('age').innerHTML = `Age: ${this.age}`

},

yatesShuffle(array) {
    let m = array.length, t, i;
    while(m) {
    // Pick a remaining element...
        i = Math.floor(Math.random()* m--);
    // and swap it with the current element
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
    },

        assignLikes() {
            this.likes = this.yatesShuffle(this.likesList).slice(0,2)
            document.getElementById('likes').innerHTML = `Likes: ${this.likes[0]}, ${this.likes[1]}`
        },

        assignDislikes() {
                this.dislikes = this.yatesShuffle(this.dislikesList).slice(0,2)
                document.getElementById('dislikes').innerHTML = `Dislikes: ${this.dislikes[0]}, ${this.dislikes[1]}`
            }
        }






