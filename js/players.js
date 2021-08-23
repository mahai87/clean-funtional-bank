function setPlayerStyle(player) {
    player.style.border = ' 1px solid red';
    player.style.margin = ' 10px';
    player.style.padding = ' 10px';
    player.style.borderRadius = ' 10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);


}
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    // যদি ক্লাস  add করতে চাই - 
    player.classList.add('player');
    // back tik (``) use করেও সরাসরি ট্যাগ যোগ করা যায়। 
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, blanditiis? Facere itaque enim  adipisci ducimus minima reprehenderit id esse quidem dicta. Molestias libero quidem fuga recusandae explicabo, accusantium tempora reiciendis, unde, ipsam odit tempore sed eos fugiat officia est.</p> 
        `;
    playersContainer.appendChild(player);
    setPlayerStyle(player);

}
document.getElementById('players').addEventListener('click', function (event) {

    // event.target.parentNode.style.backgroundColor = 'yellow';
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'Yellow'
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})