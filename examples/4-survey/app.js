const title = document.querySelector('.title h2');
const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/4-survey');
    const response = data
      .map((vote) => {
        const { room, votes, id } = vote;
        return `<li>
      <div class='key'>
      ${room.toUpperCase().substring(0, 2)}
      </div>
      <div>
      <h4>${room}</h4>
      <p class='vote-${id}' data-votes='${votes}'>${votes} votes</p>
      </div>
      <button data-id=${id}>
      <i class='fas fa-vote-yea'></i>
      </button>
      </li>`;
      })
      .join('');
    result.innerHTML = response;
  } catch (error) {
    result.innerHTML = `<h4>There was an error</h4>`;
  }
};

window.addEventListener('load', () => {
  fetchData();
});

result.addEventListener('click', async function (e) {
  // console.log(e.target)
  if (e.target.classList.contains('fa-vote-yea')) {
    const btn = e.target.parentElement;
    const id = btn.dataset.id;
    // console.log(id)
    const voteNode = result.querySelector(`.vote-${id}`);
    // console.log(voteNode)
    const votes = voteNode.dataset.votes;
    const newVotes = await modifyData(id, votes);
    voteNode.textContent = `${newVotes} votes`;
    voteNode.dataset.votes = newVotes;
  }
});
// modify data
async function modifyData(id, votes) {
  return Number(votes) + 1;
}
