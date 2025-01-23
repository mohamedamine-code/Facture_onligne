function generateCrystal() {
    const shape = document.getElementById('crystal-shape').value;
    const color1 = document.getElementById('crystal-color1').value;
    const color2 = document.getElementById('crystal-color2').value;
    const size = document.getElementById('crystal-size').value;
  
    const crystal = document.getElementById('crystal-display');
    crystal.style.width = `${size}px`;
    crystal.style.height = `${size}px`;
    crystal.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
  
    if (shape === 'circle') {
      crystal.style.borderRadius = '50%';
    } else if (shape === 'square') {
      crystal.style.borderRadius = '0';
    } else if (shape === 'triangle') {
      crystal.style.width = '0';
      crystal.style.height = '0';
      crystal.style.borderLeft = `${size / 2}px solid transparent`;
      crystal.style.borderRight = `${size / 2}px solid transparent`;
      crystal.style.borderBottom = `${size}px solid ${color1}`;
      crystal.style.background = 'none';
    }
  }
function goCreateSection() {
    window.location.href = "/facteur de blar/index.html";
}  
function goCreateSection1() {
    window.location.href="/facteur de blar/GardCors.html";
}
