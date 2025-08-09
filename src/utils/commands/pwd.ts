export const pwd = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const path = localStorage.getItem('cd');

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  const spanElement = document.createElement('span');
  if (path != "") {
    spanElement.innerHTML = '<span>'+path+'</span>';
  } else {
    spanElement.innerHTML = '<span>/</span>';
  }
  container.appendChild(spanElement); 

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  if (localStorage.getItem('cd').length > 50) {
    spanElement.innerHTML = '<span>Path too long</span>';
    command.innerHTML = '~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span class="command-failed">&#xf467;</span>';
  } else {
    command.innerHTML = '~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span class="command-successful">&#xf42e;</span>';
  }
}
