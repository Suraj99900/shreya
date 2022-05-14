const text = document.getElementById('text');
const prog = "All I have to say is that I cannot forget you, I tried a lot but can't because I love You ,There's a lot more words I can't speak at front of you so sorry again... ";
let idx = 1;

const music = document.getElementById('music_1');


function callTest() {
    setInterval(writeText,150);



function writeText(){
    text.innerText = prog.slice(0,idx);

    idx++;



    if (idx > prog.length) {
        idx = 1;
    }

}
}