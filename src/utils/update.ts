const mobileMediaQuery = window.matchMedia('(max-width: 775px)');
const secretButton = document.getElementById('secret-button') as HTMLInputElement;
const promptGuest = document.getElementById('prompt-guest') as HTMLInputElement;

// Update the input placeholder of the command line according to screen size.
export const updateInputPlaceholder = () => {
  const input = document.getElementById("cmdline") as HTMLInputElement;

  if (mobileMediaQuery.matches) {
    input.setAttribute('placeholder', 'Click here');
  } else {
    input.setAttribute('placeholder', 'Start typing or click here');
  }
}

// Update the user prompt of the command line according to click on secret button.
export const updatePrompt = () => {
  const promptAt = document.getElementById('prompt-at') as HTMLInputElement;
  const promptDomain = document.getElementById('prompt-domain') as HTMLInputElement;
  const promptSigns = document.getElementById('prompt-signs') as HTMLInputElement;

  if (secretButton.checked) {
    if (mobileMediaQuery.matches) {
      promptGuest.innerHTML = '<span is-="badge" variant-="red" cap-="square"> </span>';
      promptAt.innerHTML = '';
      promptDomain.innerHTML = '<span is-="badge" variant-="maroon" cap-="slant-bottom square" style="background-color: var(--red);">42LM.io</span><span is-="badge" variant-="maroon" cap-="square triangle"></span>';
      promptSigns.innerHTML = '';
    } else {
      promptGuest.innerHTML = '<span is-="badge" variant-="red" cap-="square"> </span>';
      promptAt.innerHTML = '';
      promptDomain.innerHTML = '<span is-="badge" variant-="maroon" cap-="slant-bottom square" style="background-color: var(--red);">42LM.io</span>';
      promptSigns.innerHTML = '<span is-="badge" variant-="peach" cap-="slant-bottom square" style="background-color: var(--maroon);">$:</span><span is-="badge" variant-="peach" cap-="square triangle">󰜥 </span>';
    }
  } else {
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
}

secretButton.addEventListener("click", () => {
  if (secretButton.checked) {
    secretButton.style = "background: var(--red);"
    updatePrompt()
  }
});
