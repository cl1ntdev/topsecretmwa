        
        // console.log('connected')
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
        import { getDatabase, ref, push, onValue, remove, update} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

        const appSettings = {
            databaseURL:'https://sheep-game-98c81-default-rtdb.firebaseio.com/'
        }

        const app = initializeApp(appSettings)//gets the app
        const db = getDatabase(app)//gets the database in app
        const response = ref(db,"response")


        document.querySelector('.start-rizz').addEventListener('click',(e)=>{
            startRizz(e.currentTarget)
        })

        function startRizz(obj){
            let audio = document.querySelector('#audioPlayer').play()
            obj.remove()
            let cont = document.querySelector('.container')
            let newImg = document.createElement('img')
            newImg.className = 'imager'
            newImg.src = '/9e04ac67d79713c00169e904f4ee0a2c.jpg'
            newImg.style.position = 'absolute'
            newImg.classList.toggle('fade')
            cont.appendChild(newImg)
            let newQuestion = document.createElement('div')
            newQuestion.className = 'que'
            newQuestion.innerText = 'Will you go out with me?'
            newQuestion.classList.toggle('fade')
            cont.appendChild(newQuestion)
            let ansShow = document.createElement('div')
            ansShow.className = 'ans'
            cont.appendChild(ansShow)
            let yes = document.createElement('button')
            yes.innerText = 'Yes <3'
            yes.className = 'yes'
            yes.classList.toggle('fade')
            yes.onclick = function(e){
                document.querySelector('.no').disabled = true
                e.currentTarget.disabled = true
                action('yes')
                document.cookie = 'rizzurection'
            }
            let No = document.createElement('button')
            No.onclick = function(e){
                e.currentTarget.disabled = true
                yes.disabled = true
                action('no')
                document.cookie = 'rizzurection'
            }
            
            No.innerText = 'No'
            No.className = 'no'
            No.classList.toggle('fade')
            ansShow.appendChild(yes) 
            ansShow.appendChild(No) 
            let lyrics = document.createElement('h1')
            lyrics.className = 'lyr'
            // lyrics.zIndex = '1'
            cont.appendChild(lyrics)
        }
        var lyricsData = [
        { time: 0, text: "Teka, miss, nabihag ako ng iyong ganda" },
        { time: 3, text: "Unang sulyap, puso para bang hinihila na" },
        { time: 6, text: "Nagkasalubong tayo sa gilid ng dagat" },
        { time: 9, text: "Sinundan hanggang ika'y tumigil at may balak" },
        { time: 13, text: "Paningin nagkatagpo" },
        { time: 16, text: "Balahibo tumatayo, puso ko'y tumitibok" },
        { time: 19, text: "Para kang libro na binabasa ko na ayaw magkaron ng dulo" },
        { time: 24, text: "Pano to?" },
        { time: 25, text: "Parehong naguluhan" },
        { time: 28, text: "Pasikot-sikot ang paningin nating dalawa" },
        { time: 32, text: "Bahala na" },
        { time: 34, text: "Ako'y lumapit at nahiyang sinabi na kamusta ka?" },
        { time: 38, text: "Pinairal ang nadarama" },
        { time: 40, text: "Kalungkutan sa sarili ay nalanta na"},
        { time: 43, text: "Dahil sa iyong ganda, ako'y natulala"},
        { time: 46, text: "Lumipas ang mga oras at hinatid kita"},
        { time: 49, text: "Hinahangaan kong bituin, aking tinitingala"},
        { time: 56, text: "Tila'y lumapit, naibsan ang dilim"},
        ];
        document.getElementById('audioPlayer').addEventListener('timeupdate', function() {
        var currentTime = Math.floor(this.currentTime);
        console.log(currentTime)
        let lyr = document.querySelector('.lyr')
            for (var i = 0; i < lyricsData.length; i++) {
            if(parseInt(lyricsData[i].time) === currentTime){
                lyr.innerText = lyricsData[i].text
            }
            }
        });


        function action(val){
            switch(val){
                case 'yes': 
                push(response,"yes")
                    break;
                case 'no': 
                push(response,"no")

                    break;
            }
        }

       