// ============================================
// WEB DEVELOPMENT INTERACTIVE LEARNING PLATFORM
// Comprehensive JavaScript Course with Interactive Editor
// ============================================

// Learning Content Structure
const lessons = [
  {
    id: 'html-basics',
    title: '1. HTML Basics',
    icon: '📝',
    sections: [
      {
        title: 'What is HTML?',
        content: `HTML (HyperText Markup Language) is the structure/skeleton of web pages. It tells the browser "what" things are.
        
Think of it like building a house:
- HTML = Blueprint (structure)
- CSS = Paint & decoration (looks)
- JavaScript = Electricity & mechanisms (interactivity)`
      },
      {
        title: 'Your First HTML Page',
        content: 'Every HTML document has this basic structure:',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first webpage.</p>
</body>
</html>`,
        explanation: `- <!DOCTYPE html> = This is HTML5
- <head> = Information about the page (not visible)
- <body> = Content users see
- <h1> to <h6> = Headings (h1 is biggest)
- <p> = Paragraph`
      },
      {
        title: 'Common HTML Tags',
        content: 'Here are the most important tags you\'ll use:',
        code: `<!-- Headings -->
<h1>Main title</h1>

<!-- Paragraph -->
<p>Some text here</p>

<!-- Links -->
<a href="https://example.com">Click me</a>

<!-- Images -->
<img src="photo.jpg" alt="Description">

<!-- Lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Button -->
<button>Click me</button>

<!-- Div (container) -->
<div>Group content</div>`
      },
      {
        title: 'Attributes',
        content: 'Tags can have attributes that provide extra info:',
        code: `<!-- id: unique identifier -->
<div id="header"></div>

<!-- class: for styling -->
<p class="highlight"></p>

<!-- href: link destination -->
<a href="page.html">Go</a>

<!-- src: image source -->
<img src="image.jpg" alt="Description">

<!-- onclick: run JavaScript -->
<button onclick="alert('Hi!')">Click</button>`
      },
      {
        title: 'Practice: Build Your Profile',
        interactive: true,
        content: 'Try building a simple profile page in the editor below:',
        startingCode: `<h1>My Profile</h1>
<p>Hello! My name is [your name]</p>
<h2>Hobbies</h2>
<ul>
  <li>Hobby 1</li>
  <li>Hobby 2</li>
  <li>Hobby 3</li>
</ul>`,
        challenge: 'Modify the code: Add your name, change hobbies, add a link to your favorite website'
      }
    ],
    quiz: [
      {
        q: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        options: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Logic']
      },
      {
        q: 'Which tag is used for the largest heading?',
        a: '<h1>',
        options: ['<h1>', '<h6>', '<head>']
      },
      {
        q: 'What does the <img> tag need to display an image?',
        a: 'src attribute',
        options: ['src attribute', 'id attribute', 'class attribute']
      }
    ]
  },
  {
    id: 'css-styling',
    title: '2. CSS Styling',
    icon: '🎨',
    sections: [
      {
        title: 'What is CSS?',
        content: `CSS (Cascading Style Sheets) controls the APPEARANCE of HTML elements. It makes things look pretty!

If HTML is the structure, CSS is the decoration.`
      },
      {
        title: 'Adding CSS to Your Page',
        content: 'There are 3 ways to add CSS:',
        code: `<!-- 1. Inline CSS (not recommended) -->
<p style="color: red;">Red text</p>

<!-- 2. Internal CSS (in <head>) -->
<style>
  p { color: blue; }
</style>

<!-- 3. External CSS (BEST!) -->
<link rel="stylesheet" href="styles.css">`,
        explanation: 'External CSS is best because you can reuse it across multiple pages!'
      },
      {
        title: 'CSS Selectors',
        content: 'Selectors target which elements to style:',
        code: `/* Element selector */
p { color: red; }

/* Class selector (.) */
.highlight { background: yellow; }

/* ID selector (#) */
#header { font-size: 24px; }

/* Multiple selectors */
h1, h2, h3 { color: blue; }`
      },
      {
        title: 'Colors, Fonts & Spacing',
        content: 'The most common CSS properties:',
        code: `p {
  /* Text color */
  color: blue;
  
  /* Font size */
  font-size: 16px;
  
  /* Font style */
  font-family: Arial, sans-serif;
  font-weight: bold;
  
  /* Spacing inside (padding) */
  padding: 20px;
  
  /* Spacing outside (margin) */
  margin: 10px;
  
  /* Background color */
  background-color: yellow;
  
  /* Border */
  border: 2px solid black;
  
  /* Center text */
  text-align: center;
}`
      },
      {
        title: 'Box Model (Super Important!)',
        content: 'Every element has 4 layers of space:',
        code: `/* Margin: outside space */
/* Border: the frame */
/* Padding: inside space */
/* Content: the actual element */

div {
  width: 200px;
  padding: 20px;    /* space inside */
  margin: 10px;     /* space outside */
  border: 2px solid black;
  background: lightblue;
}`,
        explanation: 'Margin = outside space\nPadding = inside space\nBorder = the edge\nContent = the actual element'
      },
      {
        title: 'Layout with Flexbox',
        content: 'Flexbox makes layouts super easy!',
        code: `.container {
  display: flex;
  justify-content: center;    /* center horizontally */
  align-items: center;        /* center vertically */
  gap: 20px;                  /* space between items */
  background: lightgray;
}

.container div {
  width: 100px;
  height: 100px;
  background: blue;
  color: white;
}`
      },
      {
        title: 'Try It: Style Your Profile',
        interactive: true,
        content: 'Let\'s make that HTML profile look great!',
        startingCode: `<style>
body {
  font-family: Arial;
  background-color: #f0f0f0;
  padding: 20px;
}

h1 {
  color: #3498db;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
}

.profile {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  background: #ecf0f1;
  border-left: 4px solid #3498db;
}
</style>

<div class="profile">
  <h1>My Profile</h1>
  <p>Hello! I'm learning web development.</p>
  <h2>Interests</h2>
  <ul>
    <li>Coding</li>
    <li>Design</li>
    <li>Learning new things</li>
  </ul>
</div>`,
        challenge: 'Change the colors, add a background image, make the profile card look more professional'
      }
    ],
    quiz: [
      {
        q: 'What CSS property changes text color?',
        a: 'color',
        options: ['color', 'text-color', 'font-color']
      },
      {
        q: 'What\'s the best way to add CSS to multiple pages?',
        a: 'External CSS file',
        options: ['Inline CSS', 'Internal CSS', 'External CSS file']
      },
      {
        q: 'Which is the inside space around an element?',
        a: 'padding',
        options: ['margin', 'padding', 'border']
      }
    ]
  },
  {
    id: 'javascript-basics',
    title: '3. JavaScript Basics',
    icon: '⚡',
    sections: [
      {
        title: 'What is JavaScript?',
        content: `JavaScript makes web pages INTERACTIVE. It's the behavior/logic.

While HTML is the structure and CSS is the styling, JavaScript adds interactivity:
- Respond to user clicks
- Show/hide elements
- Validate form data
- Fetch data from internet
- Create animations`
      },
      {
        title: 'Variables (Storing Data)',
        content: 'Variables are like containers that hold information:',
        code: `// Create variables
let name = "Alice";
let age = 25;
let isStudent = true;

// Use variables
console.log(name);      // prints "Alice"
console.log(age + 5);   // prints 30

// Change variable
age = 26;
console.log(age);       // prints 26

// const = doesn't change
const PI = 3.14159;`
      },
      {
        title: 'Data Types',
        content: 'JavaScript has different types of data:',
        code: `// String (text)
let message = "Hello";

// Number
let count = 42;
let price = 19.99;

// Boolean (true/false)
let isActive = true;

// Array (list)
let fruits = ["apple", "banana", "orange"];

// Object (key-value pairs)
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(fruits[0]);     // "apple"
console.log(person.name);   // "John"`
      },
      {
        title: 'Basic Operators',
        content: 'Do math and logic:',
        code: `// Math
let result = 5 + 3;      // 8
let calc = 10 - 2;       // 8
let multiply = 4 * 5;    // 20
let divide = 20 / 4;     // 5

// Comparison
5 > 3        // true
5 < 3        // false
5 === 5      // true (exactly equal)
5 !== 3      // true (not equal)

// Logic
true && false    // false (AND)
true || false    // true (OR)
!true            // false (NOT)`
      },
      {
        title: 'If/Else (Making Decisions)',
        content: 'Run different code based on conditions:',
        code: `let age = 20;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a kid");
}

// More complex
if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else {
  console.log("Adult");
}`
      },
      {
        title: 'Functions (Reusable Code)',
        content: 'Functions let you write code once and use it many times:',
        code: `// Define a function
function greet(name) {
  console.log("Hello, " + name);
}

// Use it
greet("Alice");   // prints "Hello, Alice"
greet("Bob");     // prints "Hello, Bob"

// Function that returns a value
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);   // 8`
      },
      {
        title: 'Loops (Doing Things Repeatedly)',
        content: 'Loops repeat code many times:',
        code: `// For loop
for (let i = 1; i <= 5; i++) {
  console.log(i);  // prints 1, 2, 3, 4, 5
}

// Loop through array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// simpler: forEach
fruits.forEach((fruit) => {
  console.log(fruit);
})`
      },
      {
        title: 'Try It: Interactive Calculator',
        interactive: true,
        content: 'Let\'s build a simple calculator:',
        startingCode: `<style>
.calculator {
  background: #333;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  margin: 20px auto;
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #2980b9;
}

.result {
  background: #2ecc71;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>

<div class="calculator">
  <input type="number" id="num1" placeholder="First number">
  <input type="number" id="num2" placeholder="Second number">
  
  <button onclick="add()">Add</button>
  <button onclick="subtract()">Subtract</button>
  <button onclick="multiply()">Multiply</button>
  <button onclick="divide()">Divide</button>
  
  <div id="result"></div>
</div>

<script>
function add() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let result = num1 + num2;
  document.getElementById('result').innerHTML = '<div class="result">' + result + '</div>';
}

function subtract() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let result = num1 - num2;
  document.getElementById('result').innerHTML = '<div class="result">' + result + '</div>';
}

function multiply() {
  // TODO: Write this function
}

function divide() {
  // TODO: Write this function
}
</script>`,
        challenge: 'Complete the multiply() and divide() functions. Test with different numbers!'
      }
    ],
    quiz: [
      {
        q: 'Which keyword creates a variable that can change?',
        a: 'let',
        options: ['let', 'const', 'var']
      },
      {
        q: 'What does === check?',
        a: 'If values are exactly equal',
        options: ['If values are equal', 'If values are exactly equal', 'If values look the same']
      },
      {
        q: 'What\'s the output? for (let i = 0; i < 3; i++) console.log(i);',
        a: '0, 1, 2',
        options: ['0, 1, 2', '1, 2, 3', '0, 1, 2, 3']
      }
    ]
  }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentLesson = 0;
let progress = {
  completedLessons: [],
  quizScores: {}
};

// ============================================
// INITIALIZATION FUNCTION
// ============================================

function init() {
  loadProgress();
  renderNavigation();
  loadLesson(0);
  updateStats();
}

// ============================================
// NAVIGATION & RENDERING FUNCTIONS
// ============================================

/**
 * Render the navigation menu based on lessons
 */
function renderNavigation() {
  const navMenu = document.getElementById('navMenu');
  navMenu.innerHTML = lessons.map((lesson, idx) => `
    <div class="nav-item ${idx === currentLesson ? 'active' : ''}" 
         onclick="loadLesson(${idx})">
      ${lesson.icon} ${lesson.title}
    </div>
  `).join('');
}

/**
 * Load a lesson by index
 */
function loadLesson(idx) {
  currentLesson = idx;
  const lesson = lessons[idx];
  
  renderNavigation();
  
  const container = document.getElementById('lessonsContainer');
  let html = `<h2>${lesson.icon} ${lesson.title}</h2>`;
  
  // Render all sections
  lesson.sections.forEach((section, sIdx) => {
    html += `<div class="content">
      <h3>${section.title}</h3>
      <p>${section.content}</p>`;
    
    if (section.code) {
      html += `<div class="code-block"><code>${escapeHtml(section.code)}</code></div>`;
    }
    
    if (section.explanation) {
      html += `<div class="hint">${section.explanation}</div>`;
    }
    
    if (section.interactive) {
      html += `
        <div class="interactive">
          <p><strong>📝 Challenge:</strong> ${section.challenge}</p>
          <div class="editor-container">
            <div class="editor-pane">
              <textarea id="editor${sIdx}" placeholder="Edit code here...">${section.startingCode}</textarea>
            </div>
            <div class="preview-pane">
              <iframe id="preview${sIdx}" style="width:100%; height:250px; border:none;"></iframe>
            </div>
          </div>
          <button class="btn" onclick="updatePreview(${sIdx})">▶ Run Code</button>
        </div>
      `;
    }
    
    html += `</div>`;
  });
  
  // Render quiz section
  html += `<div class="content">
    <h3>📋 Quick Quiz</h3>`;
  
  lesson.quiz.forEach((question, qIdx) => {
    html += `
      <div class="quiz-question">
        <p><strong>Q${qIdx + 1}: ${question.q}</strong></p>
        <div class="quiz-options">
          ${question.options.map((opt, oIdx) => `
            <div class="quiz-option" onclick="checkAnswer(${idx}, ${qIdx}, ${oIdx}, '${question.a}')">
              ${opt}
            </div>
          `).join('')}
        </div>
        <div id="feedback${idx}${qIdx}"></div>
      </div>
    `;
  });
  
  html += `</div>`;
  
  container.innerHTML = html;
  
  // Attach event listeners for interactive editors
  lesson.sections.forEach((section, sIdx) => {
    if (section.interactive) {
      document.getElementById(`editor${sIdx}`).addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') updatePreview(sIdx);
      });
    }
  });
}

// ============================================
// INTERACTIVE EDITOR FUNCTIONS
// ============================================

/**
 * Update the preview iframe with new code
 */
function updatePreview(idx) {
  const code = document.getElementById(`editor${idx}`).value;
  const iframe = document.getElementById(`preview${idx}`);
  iframe.contentDocument.open();
  iframe.contentDocument.write(code);
  iframe.contentDocument.close();
}

// ============================================
// QUIZ SYSTEM FUNCTIONS
// ============================================

/**
 * Check if the selected answer is correct
 */
function checkAnswer(lessonIdx, questionIdx, optionIdx, correctAnswer) {
  const lesson = lessons[lessonIdx];
  const question = lesson.quiz[questionIdx];
  const feedbackEl = document.getElementById(`feedback${lessonIdx}${questionIdx}`);
  const optionEls = feedbackEl.parentElement.querySelectorAll('.quiz-option');
  
  const selected = question.options[optionIdx];
  const isCorrect = selected === correctAnswer;
  
  // Update UI
  optionEls.forEach((el, idx) => {
    el.classList.remove('selected', 'correct', 'incorrect');
    if (idx === optionIdx) {
      el.classList.add(isCorrect ? 'correct' : 'incorrect', 'selected');
    }
  });
  
  // Show feedback
  if (isCorrect) {
    feedbackEl.innerHTML = '<div class="success-msg">✅ Correct! Well done!</div>';
    recordQuizScore(lessonIdx, 100);
  } else {
    feedbackEl.innerHTML = `<div class="hint">❌ Not quite. The answer is: <strong>${correctAnswer}</strong></div>`;
    recordQuizScore(lessonIdx, 0);
  }
}

/**
 * Record quiz score to progress
 */
function recordQuizScore(lessonIdx, score) {
  if (!progress.quizScores[lessonIdx]) {
    progress.quizScores[lessonIdx] = [];
  }
  progress.quizScores[lessonIdx].push(score);
  saveProgress();
  updateStats();
}

// ============================================
// PROGRESS TRACKING FUNCTIONS
// ============================================

/**
 * Update statistics display
 */
function updateStats() {
  const completed = Object.keys(progress.quizScores).length;
  document.getElementById('lessonsCompleted').textContent = completed;
  
  // Calculate average quiz score
  let totalScore = 0;
  let quizCount = 0;
  
  Object.values(progress.quizScores).forEach(scores => {
    scores.forEach(s => {
      totalScore += s;
      quizCount++;
    });
  });
  
  const avg = quizCount > 0 ? Math.round(totalScore / quizCount) : 0;
  document.getElementById('quizScore').textContent = avg + '%';
  
  // Update progress bar
  const completedCount = Object.keys(progress.quizScores).length;
  const percentage = Math.round((completedCount / lessons.length) * 100);
  document.querySelector('.progress-fill').style.width = percentage + '%';
  document.getElementById('progressPercent').textContent = percentage + '%';
}

/**
 * Save progress to localStorage
 */
function saveProgress() {
  localStorage.setItem('webdevProgress', JSON.stringify(progress));
}

/**
 * Load progress from localStorage
 */
function loadProgress() {
  const saved = localStorage.getItem('webdevProgress');
  if (saved) {
    progress = JSON.parse(saved);
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Escape HTML special characters for safe display
 */
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================
// START APPLICATION
// ============================================

init();
