export const pwd = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();
  const path = localStorage.getItem('cd');
  console.log(path)

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  const template = document.createElement('template');
  if (path != "") {
    template.innerHTML = '<span>'+path+'</span>';
  } else {
    template.innerHTML = '<span>/</span>';
  }
  template.content.childNodes.forEach((node) => {
    container.appendChild(node); 
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  if (path.length > 50) {
    template.innerHTML = '<span>Path too long</span>';
    command.innerHTML = '~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span class="command-failed">&#xf467;</span>';
  } else {
    command.innerHTML = '~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span class="command-successful">&#xf42e;</span>';
  }
}
