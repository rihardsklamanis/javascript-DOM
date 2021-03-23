window.addEventListener("load", function(){
  const button = document.querySelector('#more_text_link')
  const moretext = document.querySelector('#more_text_content')
  moretext.style.display = 'none'
button.addEventListener('click', function(e){
  moretext.style.display = 'initial'
  button.style.display = 'none'
})
  
});