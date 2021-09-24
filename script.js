const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const createDivider = (color = 'orange') => {
  const width = 1400;
  const height = 200;
  var wavery = new Wavery({
    width: width,
    height: height,
    segmentCount: randInt(4, 7),
    layerCount: randInt(4, 5),
    variance: 0.8 + (randInt(0, 2) / 10),
    strokeWidth: 0,
    strokeColor: 'none',
    gradientColors: [
      {
        colorValue: color,
        position: 0
      },
      {
        colorValue: color,
        position: 1
      }
    ]
  });
  const svg = wavery.generateSvg();
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.classList.add('section-divider');
  return svg;
}

for (const section of Array.from(document.querySelectorAll('section'))) {
  const color = getComputedStyle(section).backgroundColor
  section.appendChild(createDivider(color));
}

const footer = document.querySelector('footer')
const backgroundColor = getComputedStyle(document.body).backgroundColor;
footer.appendChild(createDivider(backgroundColor));

document.querySelector('.copy-year').textContent = new Date().getFullYear();
