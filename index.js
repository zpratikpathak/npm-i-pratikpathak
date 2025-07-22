#!/usr/bin/env node

// ANSI color codes for better compatibility
const colors = {
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const aboutPratik = `
${colors.bold}${colors.cyan}Pratik Pathak${colors.reset}
${colors.yellow}Microsoft Certified Trainer & Technology Professional${colors.reset}

${colors.green}About:${colors.reset}
A highly accomplished technology professional with a passion for sharing 
knowledge and expertise with others. As a Microsoft Certified Trainer, 
Pratik is dedicated to helping individuals and organizations learn how to 
harness the power of technology to drive business success. With extensive 
experience and in-depth understanding of the latest tools and techniques, 
Pratik is a valuable resource for anyone looking to take their skills to 
the next level.

${colors.green}Community Contribution:${colors.reset}
In leisure time, he takes workshops and seminars for students which are 
absolutely FREE. Pratik says "It's his way to contribute to the world and 
nothing is better than transferring knowledge to young minds".

${colors.green}Contact Information:${colors.reset}
${colors.blue}📧 Email:${colors.reset}    me@pratikpathak.com
${colors.blue}💼 LinkedIn:${colors.reset} https://www.linkedin.com/in/pathakpratik/
${colors.blue}🌐 Website:${colors.reset}  http://pratikpathak.com/

${colors.magenta}Thank you for learning about Pratik! 🚀${colors.reset}
`;

// Create a simple box around the text
function createBox(text) {
  const lines = text.split('\n');
  // Function to get the actual display length of a string (ignoring ANSI codes)
  const getDisplayLength = (str) => str.replace(/\x1b\[[0-9;]*m/g, '').length;
  const maxLength = Math.max(...lines.map(line => getDisplayLength(line)));
  const border = '─'.repeat(maxLength + 4);
  
  let boxed = `\n┌${border}┐\n`;
  lines.forEach(line => {
    const displayLength = getDisplayLength(line);
    const padding = ' '.repeat(Math.max(0, maxLength - displayLength));
    boxed += `│  ${line}${padding}  │\n`;
  });
  boxed += `└${border}┘\n`;
  
  return boxed;
}

// Main display function
function displayAbout() {
  console.log(createBox(aboutPratik));
}

// Check if this file is being run directly
if (require.main === module) {
  displayAbout();
}

module.exports = displayAbout;
