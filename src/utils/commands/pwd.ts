export const pwd = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const path = localStorage.getItem('cd');

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
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
    command.innerHTML = '<span>~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--red)">&#xf467;</span></span>';
  } else {
    command.innerHTML = '<span>~ '+
      cmd+
      ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--green)">&#xf42e;</span></span>';
  }
}
