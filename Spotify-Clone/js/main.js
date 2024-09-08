const library = document.querySelector('.library')
const hamburger = document.querySelector('.hamburger')
const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const leftRightElements = document.querySelectorAll('.right, .left')
let songListInPlaylist = document.querySelector('.songListInPlaylist')
let songs;
let currFolder;
let cardContainer = document.querySelector('.cardContainer')
let cover;

rightArrow.addEventListener('click', () => {
    songListInPlaylist.classList.add('classAdded')
})
leftArrow.addEventListener('click', () => {
    songListInPlaylist.classList.remove('classAdded')
})
// hamburger.addEventListener('click', ()=>{
//     songListInPlaylist.classList.remove('classAdded')
// })


// Converting seconds to minute for song time
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00 ";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
// Fetching songs
async function getSongs(folder) {
    currFolder = folder

    const songFetch = await fetch(`/${folder}/`)
    const response = await songFetch.text()

    const div = document.createElement('div')

    div.innerHTML = response
    const as = div.getElementsByTagName('a')
    const asArray = Array.from(as)
    songs = []
    cover = []
    asArray.forEach((e) => {
        if (e.href.endsWith('.mp3')) {
            songs.push(e.href.split(`/${folder}/`)[1])
        }
        // Saving cover for the transform playlist


        if (e.href.endsWith('.webp')) {
            cover.push(e.href.split(`/${folder}/`)[1])
        }
        
        

    })

    // Show all songs in the playlist
    let songUL = document.querySelector('.songList').getElementsByTagName('ul')[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `
            <li>
                <img class="invert" src="/images/music.svg" alt="">
                <div class="songInfo">${song.replaceAll('%20', ' ')}</div>
                <img class="invert playBtnInLibrary" src="/images/LibraryPlay.svg" alt="">
            </li>
        `
    }

    // Show songs in playlists after click
    let songPlaylistUL = document.querySelector('.songListInPlaylist').getElementsByTagName('ul')[0]
    let playlistImage = document.querySelector('.playlistImage')
    songPlaylistUL.innerHTML = ""
    playlistImage.src = `/${folder}/${cover}`
    for (const song of songs) {
        songPlaylistUL.innerHTML = songPlaylistUL.innerHTML + `
        
            <li>
                <img class="invert musicImg" src="/images/music.svg" alt="">
                <div class="songInfoInPlaylist">${song.replaceAll('%20', ' ')}</div>
                <img class="invert playImg" src="/images/LibraryPlay.svg" alt="">
            </li>
        
        `

    }


    // Attach an event listner to each song
    Array.from(document.querySelector('.songList ul').getElementsByTagName('li')).forEach((e) => {
        e.addEventListener('click', (item) => {
            
            playMusic(item.currentTarget.querySelector('.songInfo').innerHTML.trim())
        })
    })
    // Attach an event listner to each song in playlist
    Array.from(document.querySelector('.songListInPlaylist ul').getElementsByTagName('li')).forEach((e) => {
        e.addEventListener('click', (item) => {
            playMusic(item.currentTarget.querySelector('.songInfoInPlaylist').innerHTML.trim())
        })
    })
    return songs


}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "/images/pause.svg"
    }
    document.querySelector('.songName').innerHTML = decodeURI(track)
    document.querySelector('.songTime').innerHTML = "00:00 / 00:00"
}

let currentSong = new Audio;

async function displayAlbums() {
    let songFetch = await fetch(`/songs/`)
    let response = await songFetch.text()
    let div = document.createElement('div')
    div.innerHTML = response

    let anchors = div.getElementsByTagName('a')
    let array = Array.from(anchors)

    // console.log(cardContainer.getElementsByTagName('li'));


    for (let index = 0; index < array.length; index++) {
        const e = array[index];


        if (e.href.includes('/songs/')) {
            let folder = e.href.split('/').slice(-1)[0]
            
            // Get metadata of the folder
            songFetch = await fetch(`/songs/${folder}/info.json`)
            response = await songFetch.json()
            cardContainer.innerHTML = cardContainer.innerHTML + `
                    <div class="cardHover">
                        <div data-folder="${folder}" class="card">
                            <div class="cardImgContainer">
                                <img src="/songs/${folder}/cover.webp" alt="">
                            </div>
                            <h2>${response.title}</h2>
                            <p>${response.description}</p>
                        </div>
                    </div>`



        }
    }

    // Load all songs when playlist is clicked
    Array.from(document.getElementsByClassName('card')).forEach((e) => {
        e.addEventListener('click', async item => {
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            songListInPlaylist.classList.add('classAdded')
        })
    })
}

// Main function
async function main() {

    await getSongs(`songs/calm`)
    playMusic(songs[0], true)

    //Display all the albums
    displayAlbums()

    // Attach an event listner to play
    play.addEventListener('click', (e) => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "/images/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "/images/play.svg"
        }


    })

    // Listen for timeout event
    currentSong.addEventListener('timeupdate', () => {

        document.querySelector('.songTime').innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`

        if (secondsToMinutesSeconds(currentSong.currentTime) == secondsToMinutesSeconds(currentSong.duration)) {

            let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0])
            if (index == songs.length - 1) {
                playMusic(songs[0])
            }
            else {
                playMusic(songs[index + 1])
            }
        }

        document.querySelector('.circle').style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    // Add event listner for the seekBar
    document.querySelector('.seekBar').addEventListener('click', (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector('.circle').style.left = percent + "%"
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Adding hamburger events
    hamburger.addEventListener('click', () => {

        leftRightElements.forEach((element) => {
            element.classList.toggle('hamActive')
            if (element.classList.contains('hamActive')) {
                hamburger.style.transform = 'rotate(90deg)'
                hamburger.style.transition = 'all .4s'
            }
            if (!element.classList.contains('hamActive')) {
                hamburger.style.transform = 'none'
                hamburger.style.transition = 'all .4s'
            }

            document.querySelector('.cancle').addEventListener('click', () => {
                element.classList.remove('hamActive')
                hamburger.style.transform = 'none'
            })
        })

    })

    // Add listener for previous btn
    previous.addEventListener('click', () => {
        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0])


        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add listener for next btn
    next.addEventListener('click', () => {

        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
        if (index == songs.length - 1) {
            // playMusic(songs)
            playMusic(songs[0])
        }
    })

    // Opening songs after album clicked

}
main()