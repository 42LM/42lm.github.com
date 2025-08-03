export const help = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const helpText = [
    "<span>42LM - Homepage</span><br><br>",
    "<span>Available Commands:</span><br>",
    "<span>&nbsp;&nbsp;help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help about any command</span><br>",
    "<span>&nbsp;&nbsp;switch&nbsp;&nbsp;&nbsp;Switch dark/light theme</span><br>",
    "<span>&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;Clear the screen</span><br><br>",
    "<span>* Press 'Ctrl+l' to clear the screen.</span>",
    "<span>* Press 'Ctrl+u' to cut all text from the current cursor position to the beginning of the line.</span>",
    "<span>* Press 'Escape' to deselect the input field.</span>"
    // "<span>Use &quot;[command] help&quot; for more information about a command</span>",
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
  container.appendChild(command)

  helpText.forEach((bookTitle) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = bookTitle;
    container.appendChild(spanElement);
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '<span>~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--green)">&#xf42e;</span></span>';
}
