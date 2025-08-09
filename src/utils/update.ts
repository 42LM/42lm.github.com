const mobileMediaQuery = window.matchMedia('(max-width: 775px)');

// Update the input placeholder of the command line according to screen size.
export const updateInputPlaceholder = () => {
  const cmdline = document.getElementById("cmdline") as HTMLInputElement;

  if (mobileMediaQuery.matches) {
    cmdline.setAttribute('placeholder', 'Click here');
  } else {
    cmdline.setAttribute('placeholder', 'Start typing or click here');
  }
}

// Update the user prompt of the command line according to click on secret button.
export const updatePrompt = () => {
  const promptAt = document.getElementById('prompt-at') as HTMLInputElement;
  const promptDomain = document.getElementById('prompt-domain') as HTMLInputElement;
  const promptSigns = document.getElementById('prompt-signs') as HTMLInputElement;

  if (mobileMediaQuery.matches) {
    promptAt.innerText = '';
    promptDomain.innerText = '';
    promptSigns.innerText = ':$';
  } else {
    promptAt.innerText = '@';
    promptDomain.innerText = '42LM.sh';
    promptSigns.innerText = ':$ ~';
  }
}
