export const rm = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();
  const secretButton = document.getElementById('secret-button') as HTMLInputElement;

  const rmTextElements = [
    '<span is-="spinner" variant-="dots"></span> <span>Deleting everything... <span style="color: var(--background1);">not</span></span>',
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
  container.appendChild(command)

  rmTextElements.forEach((element) => {
    const spanElement = document.createElement('span');
    if (secretButton.checked) {
      spanElement.innerHTML = element;
    } else {
      spanElement.innerHTML = '<span>Deletion not allowed as \'guest\' user</span>';
    }
    container.appendChild(spanElement); 
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  
  if (secretButton.checked) {
    command.innerHTML = '<span>~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--green)">&#xf42e;</span></span>';
  } else {
    command.innerHTML = '<span>~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--red)">&#xf467;</span></span>';
  }
}
