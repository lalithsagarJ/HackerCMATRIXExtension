const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array.from({ length: columns }).fill(1);

// Characters to display
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}[]|:;"<>,.?/~`';
const charArray = characters.split(''); // Convert string to array

// Global hue for rainbow effect
let hue = 0;

// Function to draw the matrix
const drawMatrix = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Slightly transparent black for fading effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    // Pick a random character
    const text = charArray[Math.floor(Math.random() * charArray.length)];

    // Assign a unique rainbow color to each column
    ctx.fillStyle = `hsl(${(hue + i * 10) % 360}, 100%, 50%)`;

    // Draw the character
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drops if they fall off the screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  hue += 2; // Increment hue to create rainbow effect
};

// Function to display the centered message
const drawMessage = () => {
  const message = "Hello Boss, Welcome Back";
  ctx.font = "bold 48px Arial";
  ctx.fillStyle = "white";
  const textWidth = ctx.measureText(message).width;
  const textX = (canvas.width - textWidth) / 2;
  const textY = canvas.height / 2;

  ctx.fillText(message, textX, textY);
};

// Combine both matrix and message in one animation loop
const draw = () => {
  drawMatrix();
  drawMessage();
};

// Continuously animate the matrix and message
setInterval(draw, 33);

// Update canvas size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
