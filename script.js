const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const createDivider = (color1 = 'white', color2 = 'orange') => {
  const width = 1400;
  const height = 200;
  var wavery = new Wavery({
    width: width,
    height: height,
    segmentCount: randInt(4, 7),
    layerCount: randInt(4, 5),
    variance: 0.8 + (randInt(0, 2) / 10), // Decimal value between 0 and 1
    strokeWidth: 0,
    strokeColor: 'none',
    gradientColors: [
      {
        colorValue: color1,
        position: 0
      },
      {
        colorValue: color2,
        position: 1
      }
    ]
  });
  const svg = wavery.generateSvg();
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.classList.add('section-divider');
  return svg;
}

const bodyBackground = getComputedStyle(document.body).backgroundColor

const sections = Array.from(document.querySelectorAll('section'))
for (const i in sections) {
  const section = sections[i]
  const prev = sections[i-1]
  const fromColor = prev ? getComputedStyle(prev).backgroundColor : bodyBackground
  const toColor = getComputedStyle(section).backgroundColor
  section.appendChild(createDivider(fromColor, toColor));
}

const footer = document.querySelector('footer')
const lastSectionColor = getComputedStyle(sections[sections.length - 1]).backgroundColor
footer.appendChild(createDivider(lastSectionColor, bodyBackground));

document.querySelector('.copy-year').textContent = new Date().getFullYear();
