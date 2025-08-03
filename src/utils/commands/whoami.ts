export const whoami = (commandHistorySection) => {
  const container = document.createElement('div');
  container.style = "padding: 5px; --box-border-color: var(--background1);"

  const spanElement = document.createElement('span');
  spanElement.innerHTML = '<span is-="badge" style="--badge-color: var(--background1); --badge-text: var(--foreground2);">&#xf4b5; whoami</span>';
  container.appendChild(spanElement)


  const divElemListCommand = document.createElement('div');
  divElemListCommand.setAttribute('box-', 'square');
  divElemListCommand.setAttribute('shear-', 'top');

  const divHeader = document.createElement('div')
  // divHeader.classList.add('help-header')
  divHeader.appendChild(spanElement)

  divElemListCommand.appendChild(divHeader);

  const divList = document.createElement('row');
  divList.setAttribute('is-', 'column');
  divList.classList.add('command-content')

  const spanElementText = document.createElement('span');
  spanElementText.innerHTML = 'Chances are you are a human controlled by '+getPlatformFromUserAgent(navigator.userAgent)+'</span>'
  divList.appendChild(spanElementText);
  divElemListCommand.appendChild(divList);
  container.appendChild(divElemListCommand)

  commandHistorySection.append(container);
}

const getPlatformFromUserAgent = (userAgent) => {
    if (userAgent.includes('Win')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
}

// whoami with only separators
// export const whoami = (commandHistorySection) => {
//   const container = document.createElement('div');
//   container.style = "padding: 10px; display: flex; flex-direction: column;"
//
//   const separator = document.createElement('div');
//   separator.setAttribute("is-", "separator")
//   separator.style = "--separator-color: var(--background1);"
//   container.appendChild(separator)
//
//   const spanElement = document.createElement('span');
//   spanElement.innerHTML = '<span>Chances are you are human controlled by '+getPlatformFromUserAgent(navigator.userAgent)+'</span>';
//   container.appendChild(spanElement)
//   const separator2 = document.createElement('div');
//   separator2.setAttribute("is-", "separator")
//   separator2.style = "--separator-color: var(--background1);"
//   container.appendChild(separator2)
//
//   commandHistorySection.append(container);
// }
