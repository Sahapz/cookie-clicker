const button = document.querySelector('#clickButton');

let count = 0



// Source - https://stackoverflow.com/a/3842895
// Posted by Matt Sieker, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-06, License - CC BY-SA 3.0
function loadCount() {
  const savedCount = Number(localStorage.getItem('count'))
  console.log(savedCount)
  count = savedCount
  document.querySelector('#count').textContent = count
}
window.onload = function() {
  loadCount()
};

button.addEventListener('click', function() {
  count = count + 1
  console.log(count)

  document.querySelector('#count').textContent = count

  button.classList.add('scale-110')
  setTimeout(() => {
    button.classList.remove('scale-110')
  }, 100);
   localStorage.setItem('count', count.toString())
});





window.addEventListener('beforeunload', function(event) {
  localStorage.setItem('count', count.toString())
}, false);



