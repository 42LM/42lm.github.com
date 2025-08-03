export const help = (commandHistorySection) => {
  const helpText = [
    "<span>42LM - Homepage</span><br><br>",
    "<span>Available Commands:</span><br>",
    "<span>&nbsp;&nbsp;help&nbsp;&nbsp;&nbsp;&nbsp;Help about any command</span><br>",
    "<span>&nbsp;&nbsp;todo&nbsp;&nbsp;&nbsp;&nbsp;Placeholder (Needs to be implemented)</span><br>",
    "<span>&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;Clear the screen</span>",
    // "<span>Use &quot;[command] help&quot; for more information about a command</span>",
  ];

  const container = document.createElement('div');
  container.style = "padding: 5px;"

  const spanElement = document.createElement('span');
  spanElement.innerHTML = '<span is-="badge" style="--badge-color: var(--background1); --badge-text: var(--red);"><strong>help</strong></span>';
  container.appendChild(spanElement)


  const divElemListCommand = document.createElement('div');
  divElemListCommand.setAttribute('box-', 'square');
  divElemListCommand.setAttribute('shear-', 'top');

  const divHeader = document.createElement('div')
  divHeader.classList.add('help-header')
  divHeader.appendChild(spanElement)

  divElemListCommand.appendChild(divHeader);

  const divList = document.createElement('row');
  divList.setAttribute('is-', 'column');
  divList.classList.add('help-content')

  helpText.forEach((bookTitle) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = bookTitle;
    divList.appendChild(spanElement);
  });
  divElemListCommand.appendChild(divList);
  container.appendChild(divElemListCommand)

  commandHistorySection.append(container);
}
