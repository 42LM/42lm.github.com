export const whoami = (commandHistorySection) => {
  const container = document.createElement('div');
  container.style = "padding: 10px;"

  const spanElement = document.createElement('span');
  spanElement.innerHTML = '<span>Chances are you are human controlled by '+getPlatformFromUserAgent(navigator.userAgent)+'</span>';
  container.appendChild(spanElement)

  commandHistorySection.append(container);
}

const getPlatformFromUserAgent = (userAgent) => {
    if (userAgent.includes('Win')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
}
