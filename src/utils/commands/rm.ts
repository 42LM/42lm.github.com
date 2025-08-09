export const rm = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();
  const secretButton = document.getElementById('secret-button') as HTMLInputElement;

  const rmTextElements = [
    '<span><span is-="spinner" variant-="dots"></span> <span>Deleting everything... <span style="color: var(--background1);">not</span></span></span>',
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  rmTextElements.forEach((element) => {
    const template = document.createElement('template');
    if (secretButton.checked) {
      template.innerHTML = element;
    } else {
      template.innerHTML = '<span>Deletion not allowed as \'guest\' user</span>';
    }
    template.content.childNodes.forEach((node) => {
      container.appendChild(node); 
    });
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  
  if (secretButton.checked) {
    command.innerHTML = '~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span class="command-successful">&#xf42e;</span>';
  } else {
    command.innerHTML = '~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span class="command-failed">&#xf467;</span>';
  }
}
