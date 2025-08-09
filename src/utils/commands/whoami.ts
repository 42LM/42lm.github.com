export const whoami = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add("command-content");

  const command = document.createElement('span');
  command.classList.add("command");
  container.appendChild(command)

  const spanElement = document.createElement('span');
  spanElement.innerHTML = '<span>Chances are you are a human controlled by '+
    getPlatformFromUserAgent(navigator.userAgent)+
    '.</span>';
  spanElement.style = "padding: 10px;"
  container.appendChild(spanElement)

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span class="command-successful">&#xf42e;</span>';
}

const getPlatformFromUserAgent = (userAgent: string) => {
    if (userAgent.includes('Win')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
}
