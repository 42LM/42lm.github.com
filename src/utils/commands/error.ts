export const error = (commandHistorySection, cmd) => {
  const startTime = performance.now();

  const helpText = [
    '<span>Unknown command</span>',
    // '<span is-="badge" style="--badge-color: var(--red); --badge-text: var(--crust);">ERROR</span><span> Unknown command</span>',
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
  command.innerHTML = '<span>~ '+cmd+' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--red)">&#xf467;</span></span>';
}
