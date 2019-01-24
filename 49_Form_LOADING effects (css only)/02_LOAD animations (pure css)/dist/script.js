function hideEverythingExceptLast() {
  let loaders = document.getElementsByClassName('loader-container');
  for(let i =0; i < loaders.length - 1; i++) {
    loaders[i].style.display = 'none';
  }
}