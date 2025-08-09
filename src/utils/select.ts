// Select ASCII boxes
export const selectBox = () => {
  const commandHistory = document.getElementById('command-history') as HTMLInputElement;
  const selectableChildren = Array.from(commandHistory.children).slice(1);

  for (const child of selectableChildren) {
    if (!child.classList.contains('event')) {
      child.addEventListener('click', () => {
        child.classList.toggle('selected');
      });
      child.classList.add('event')
    }
  }
}

// Select the latest ASCII box automatically
export const selectLatestBox = () => {
  const commandHistory = document.getElementById('command-history') as HTMLInputElement;
  const selectableChildren = Array.from(commandHistory.children).slice(2);

  const welcome = document.getElementById('welcome') as HTMLInputElement;
  if (selectableChildren.length === 0) {
    welcome.classList.toggle('selected');
  } else {
    welcome.classList.remove('selected');
  }

  for (let i = 0; i < selectableChildren.length; i++) {
      if (i === selectableChildren.length - 1) {
        selectableChildren[i].classList.toggle('selected');
      } else {
        selectableChildren[i].classList.remove('selected');
      }
  }
}
