export const whoami = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 10px 0 0 10px; color: var(--background3);"
  container.appendChild(command)

  const spanElement = document.createElement('span');
  spanElement.innerHTML = '<span>Chances are you are human controlled by '+
    getPlatformFromUserAgent(navigator.userAgent)+
    '</span>';
  spanElement.style = "padding: 10px;"
  container.appendChild(spanElement)

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '<span>~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--green)">&#xf42e;</span></span>';
}

const getPlatformFromUserAgent = (userAgent: string) => {
    if (userAgent.includes('Win')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
}
