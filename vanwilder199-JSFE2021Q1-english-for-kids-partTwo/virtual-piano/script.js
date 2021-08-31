
// KeyBoardClickAudio
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const pianoKey = document.querySelector(`.piano-key[data-key="${e.code}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    pianoKey.classList.add('piano-key-active')
    removeTransition(e)

})
function  removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('piano-key-active')
}
const keys = Array.from(document.querySelectorAll('.piano-key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// MouseClickMusic

const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
 piano.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('piano-key')) {
            const note = e.target.dataset.note;
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
            pianoКeys.forEach((el) => {
                if(el.classList.contains('piano-key-active')) {
                    el.classList.remove('piano-key-active');
                }
            });
            e.target.classList.add('piano-key-active');

        }

    })

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0.3;
    audio.play();
}

piano.addEventListener('mousedown', mouseM)


function  mouseM() {
    this.addEventListener('mouseover', (e) => {

        if (e.target.classList.contains('piano-key') && e.which === 1 || e.which == 3 ) {

            const note = e.target.dataset.note;
            const src = `assets/audio/${note}.mp3`;

            pianoКeys.forEach((el) => {
                if(el.classList.contains('piano-key-active')) {
                    el.classList.remove('piano-key-active');
                }
            });
            e.target.classList.add('piano-key-active');
                  playAudio(src);
              }
        })
}

// Show Full Screen

document.addEventListener('click',  (e) => {
    if (!e.target.hasAttribute('data-toggle-fullscreen')) return;
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }

}, false);


// Switch Notes/ Letters
window.onload = function () {
    addTagsClickHandler();
}

const  addTagsClickHandler = () => {
    document.querySelector('.btn-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')){
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (e.target.classList.contains('btn-letters')) {
                selectBtnLetters();
            } else {
                selectBtnNotes();
            }
        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.btn ');
         tags.forEach(tag => {
            tag.classList.remove('btn-active');
         })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('btn-active');
}

const selectBtnLetters = () => {

        let tags = document.querySelectorAll('.piano-key')

         tags.forEach(tag => {
             tag.classList.remove('piano-keyN')
            tag.classList.add('piano-keyAct')

         })

}

const selectBtnNotes = () => {
    let tags = document.querySelectorAll('.piano-key')
    tags.forEach(tag => {
        tag.classList.remove('piano-keyAct')
        tag.classList.add('piano-keyN')

    })
}
