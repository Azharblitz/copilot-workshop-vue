export const startCodingSteps = [
  {
    id: 1,
    title: 'Project Setup',
    duration: '15 min',
    description: 'Set up your development environment and fork the workshop repository.',
    content: `
      <p>You can use your own repository or work with the sample repository available at:</p>
      <p><strong>Project URL:</strong> <a href="https://github.com/Handson-Copilot-Workshop-APAC/2025-github-ur-copilot-workshop" target="_blank">https://github.com/Handson-Copilot-Workshop-APAC/2025-github-ur-copilot-workshop</a></p>
      
      <h4>Step 1: Fork the Repository</h4>
      <ol>
        <li>Open the project URL in your browser</li>
        <li>Click the <strong>Fork</strong> button in the top right</li>
        <li>Click the <strong>Create fork</strong> button on the fork creation screen</li>
      </ol>
      
      <h4>Step 2: Development Environment Setup</h4>
      <p>Choose one of the following methods:</p>
      
      <h5>Method A: Use GitHub Codespaces</h5>
      <ol>
        <li>On your forked repository page, click the green <strong>Code</strong> button</li>
        <li>Select the <strong>Codespaces</strong> tab</li>
        <li>Click <strong>Create codespace on main</strong></li>
      </ol>
      
      <h5>Method B: Clone to Local Environment</h5>
      <ol>
        <li>Open Terminal or Command Prompt</li>
        <li>Clone your forked repository</li>
        <li>Navigate to the cloned directory</li>
        <li>Open the project in VS Code</li>
      </ol>
      
      <h4>Step 3: Workspace Setup</h4>
      <ol>
        <li>Install the GitHub Copilot extension</li>
        <li>Login to GitHub Copilot using your GitHub account</li>
      </ol>
    `,
    codeExamples: [
      {
        language: 'bash',
        filename: 'Terminal',
        code: `git clone https://github.com/<your-username>/2025-github-ur-copilot-workshop.git
cd 2025-github-ur-copilot-workshop`
      }
    ],
    tips: ['Using Codespaces launches a VS Code-like environment in your browser, allowing you to start development immediately without any local setup.']
  },
  {
    id: 2,
    title: 'Code Completion',
    duration: '10 min',
    description: 'Learn how GitHub Copilot provides intelligent code suggestions as you type.',
    content: `
      <p>GitHub Copilot provides real-time code suggestions as you type. It analyzes the context of your code and offers completions that match your coding style and project requirements.</p>
      
      <h4>How to Use Code Completion</h4>
      <ol>
        <li>Start typing a function name or code comment</li>
        <li>Wait for Copilot suggestions to appear (gray text)</li>
        <li>Press <kbd>Tab</kbd> to accept the suggestion</li>
        <li>Press <kbd>Esc</kbd> to dismiss the suggestion</li>
        <li>Press <kbd>Alt</kbd> + <kbd>]</kbd> to see alternative suggestions</li>
      </ol>
      
      <h4>Best Practices</h4>
      <ul>
        <li>Write clear and descriptive comments before functions</li>
        <li>Use meaningful variable and function names</li>
        <li>Provide context through existing code patterns</li>
      </ul>
    `,
    codeExamples: [
      {
        language: 'javascript',
        filename: 'example.js',
        code: `// Function to calculate the factorial of a number
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}`
      }
    ],
    tips: ['Start with a comment describing what you want to achieve, and Copilot will often generate the entire function for you.']
  },
  {
    id: 3,
    title: 'Copilot Chat',
    duration: '15 min',
    description: 'Use the chat interface to ask questions and get help with your code.',
    content: `
      <p>Copilot Chat provides a conversational interface to interact with GitHub Copilot. You can ask questions, request explanations, and get help with debugging.</p>
      
      <h4>Opening Copilot Chat</h4>
      <ul>
        <li>Click the Copilot icon in the sidebar</li>
        <li>Or use the keyboard shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd></li>
      </ul>
      
      <h4>Common Use Cases</h4>
      <ul>
        <li><strong>Explain code:</strong> "Explain what this function does"</li>
        <li><strong>Debug issues:</strong> "Why am I getting this error?"</li>
        <li><strong>Refactor code:</strong> "How can I improve this code?"</li>
        <li><strong>Generate tests:</strong> "Write unit tests for this function"</li>
      </ul>
      
      <h4>Slash Commands</h4>
      <ul>
        <li><code>/explain</code> - Get an explanation of selected code</li>
        <li><code>/fix</code> - Get suggestions for fixing code issues</li>
        <li><code>/tests</code> - Generate unit tests</li>
        <li><code>/doc</code> - Generate documentation</li>
      </ul>
    `,
    codeExamples: [],
    tips: ['Select code before opening chat to provide context about what you want to discuss.']
  },
  {
    id: 4,
    title: 'Copilot Edit',
    duration: '15 min',
    description: 'Use Copilot Edit to make changes across multiple files.',
    content: `
      <p>Copilot Edit allows you to describe changes in natural language and have Copilot apply them across multiple files in your project.</p>
      
      <h4>How to Use Copilot Edit</h4>
      <ol>
        <li>Open the Copilot Edit panel from the sidebar</li>
        <li>Describe the changes you want to make</li>
        <li>Review the proposed changes</li>
        <li>Accept or reject individual changes</li>
      </ol>
      
      <h4>Example Prompts</h4>
      <ul>
        <li>"Add error handling to all API calls"</li>
        <li>"Refactor this class to use TypeScript interfaces"</li>
        <li>"Update all imports to use the new module structure"</li>
      </ul>
    `,
    codeExamples: [],
    tips: ['Be specific about what changes you want and which files should be affected for best results.']
  },
  {
    id: 5,
    title: 'Agent Mode',
    duration: '20 min',
    description: 'Let Copilot work autonomously to complete complex tasks.',
    content: `
      <p>Agent Mode enables Copilot to work more autonomously, making decisions and executing multi-step tasks without constant input from you.</p>
      
      <h4>Enabling Agent Mode</h4>
      <ol>
        <li>Open Copilot Chat</li>
        <li>Click the Agent Mode toggle or type <code>@agent</code></li>
        <li>Describe your task in detail</li>
        <li>Let Copilot work through the implementation</li>
      </ol>
      
      <h4>Best Use Cases</h4>
      <ul>
        <li>Building new features from scratch</li>
        <li>Complex refactoring tasks</li>
        <li>Setting up project configurations</li>
        <li>Creating comprehensive test suites</li>
      </ul>
    `,
    codeExamples: [],
    tips: ['Provide clear requirements and constraints when using Agent Mode for best results.']
  },
  {
    id: 6,
    title: 'End-to-End App Development',
    duration: '30 min',
    description: 'Build a complete application using Copilot from start to finish.',
    content: `
      <p>In this exercise, you'll use GitHub Copilot to build a complete application. This demonstrates how Copilot can assist throughout the entire development lifecycle.</p>
      
      <h4>The Challenge</h4>
      <p>Build a simple Pomodoro Timer application with the following features:</p>
      <ul>
        <li>25-minute work sessions</li>
        <li>5-minute break sessions</li>
        <li>Start, pause, and reset controls</li>
        <li>Visual progress indicator</li>
        <li>Sound notification when timer completes</li>
      </ul>
      
      <h4>Approach</h4>
      <ol>
        <li>Start by describing the application to Copilot</li>
        <li>Let Copilot generate the initial structure</li>
        <li>Iterate on the design and functionality</li>
        <li>Add styling and polish</li>
      </ol>
    `,
    codeExamples: [],
    tips: ['Start with a clear description of what you want to build, then iterate on the details.']
  },
  {
    id: 7,
    title: 'Plan Mode',
    duration: '15 min',
    description: 'Use Plan Mode to create a structured approach before coding.',
    content: `
      <p>Plan Mode helps you think through your implementation before writing code. Copilot will help you create a detailed plan that you can execute step by step.</p>
      
      <h4>Using Plan Mode</h4>
      <ol>
        <li>Describe your feature or task to Copilot</li>
        <li>Ask Copilot to create a plan</li>
        <li>Review and refine the plan</li>
        <li>Execute each step with Copilot's assistance</li>
      </ol>
      
      <h4>Example Prompt</h4>
      <p>"Create a plan to implement user authentication with email and password, including registration, login, and password reset functionality."</p>
    `,
    codeExamples: [],
    tips: ['Plans help ensure you consider edge cases and architectural decisions before diving into code.']
  },
  {
    id: 8,
    title: 'Add Functionality',
    duration: '20 min',
    description: 'Extend your application with new features using Copilot.',
    content: `
      <p>Now that you have a basic application, let's add new functionality with Copilot's help.</p>
      
      <h4>Suggested Enhancements</h4>
      <ul>
        <li>Add task tracking - keep a list of completed Pomodoros</li>
        <li>Implement statistics - track productivity over time</li>
        <li>Add customizable timer durations</li>
        <li>Create keyboard shortcuts</li>
        <li>Add themes (dark/light mode)</li>
      </ul>
      
      <h4>Workflow</h4>
      <ol>
        <li>Choose a feature to implement</li>
        <li>Describe the feature to Copilot in detail</li>
        <li>Review and integrate the generated code</li>
        <li>Test the new functionality</li>
      </ol>
    `,
    codeExamples: [],
    tips: ['Break down complex features into smaller, manageable tasks for better results.']
  },
  {
    id: 9,
    title: 'Add Unit Tests',
    duration: '15 min',
    description: 'Generate comprehensive unit tests for your code.',
    content: `
      <p>Testing is crucial for maintaining code quality. Copilot can help generate unit tests for your functions and components.</p>
      
      <h4>Generating Tests</h4>
      <ol>
        <li>Select the function or component you want to test</li>
        <li>Use <code>/tests</code> command in Copilot Chat</li>
        <li>Or ask: "Write unit tests for this function"</li>
        <li>Review and customize the generated tests</li>
      </ol>
      
      <h4>Test Best Practices</h4>
      <ul>
        <li>Test edge cases and error conditions</li>
        <li>Use descriptive test names</li>
        <li>Keep tests focused and independent</li>
        <li>Aim for high code coverage</li>
      </ul>
    `,
    codeExamples: [
      {
        language: 'javascript',
        filename: 'timer.test.js',
        code: `describe('Timer', () => {
  test('should start with default duration', () => {
    const timer = new Timer(25);
    expect(timer.duration).toBe(25);
    expect(timer.remaining).toBe(25 * 60);
  });

  test('should decrease remaining time', () => {
    const timer = new Timer(25);
    timer.tick();
    expect(timer.remaining).toBe(25 * 60 - 1);
  });

  test('should complete when time reaches zero', () => {
    const timer = new Timer(0);
    timer.tick();
    expect(timer.isComplete).toBe(true);
  });
});`
      }
    ],
    tips: ['Ask Copilot to generate tests that cover both happy paths and error scenarios.']
  },
  {
    id: 10,
    title: 'Add Documentation',
    duration: '10 min',
    description: 'Generate documentation for your code and project.',
    content: `
      <p>Good documentation makes your code more maintainable and helps other developers understand your work.</p>
      
      <h4>Documentation Types</h4>
      <ul>
        <li><strong>Code comments:</strong> Explain complex logic inline</li>
        <li><strong>JSDoc/TSDoc:</strong> Document function signatures and parameters</li>
        <li><strong>README:</strong> Provide project overview and setup instructions</li>
        <li><strong>API documentation:</strong> Document endpoints and responses</li>
      </ul>
      
      <h4>Using Copilot for Documentation</h4>
      <ol>
        <li>Select code you want to document</li>
        <li>Use <code>/doc</code> command in Copilot Chat</li>
        <li>Or ask: "Add documentation to this code"</li>
        <li>Review and customize the generated docs</li>
      </ol>
    `,
    codeExamples: [
      {
        language: 'javascript',
        filename: 'documented-function.js',
        code: `/**
 * Formats a duration in seconds to a human-readable string.
 * 
 * @param {number} seconds - The duration in seconds to format
 * @returns {string} Formatted time string in MM:SS format
 * @throws {Error} If seconds is negative
 * 
 * @example
 * formatTime(90) // Returns "01:30"
 * formatTime(3600) // Returns "60:00"
 */
function formatTime(seconds) {
  if (seconds < 0) {
    throw new Error('Seconds cannot be negative');
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
}`
      }
    ],
    tips: ['Well-documented code helps Copilot provide better suggestions in the future.']
  },
  {
    id: 11,
    title: 'Custom Agents (Optional)',
    duration: '20 min',
    description: 'Create custom agents for specialized tasks.',
    content: `
      <p>Custom Agents are specialized AI assistants you can create for specific tasks. They can be configured with specific instructions, capabilities, and constraints.</p>
      
      <h4>Creating a Custom Agent</h4>
      <ol>
        <li>Create a file at <code>.github/agents/&lt;agent-name&gt;.agent.md</code></li>
        <li>Define the agent's name and description in frontmatter</li>
        <li>Write instructions for the agent's behavior</li>
        <li>Specify focus areas and output formats</li>
      </ol>
      
      <h4>Example: Code Review Agent</h4>
      <p>A custom agent that reviews code for best practices, security issues, and performance improvements.</p>
    `,
    codeExamples: [
      {
        language: 'markdown',
        filename: '.github/agents/code-review.agent.md',
        code: `---
name: code-review-agent
description: Agent specializing in code review and best practices
---

You are a code review specialist. Your role is to review code for:

- Best practices and coding standards
- Security vulnerabilities
- Performance issues
- Code maintainability

Always provide:
- Clear explanations of issues found
- Specific suggestions for improvement
- Examples of better approaches
- Severity ratings (critical, major, minor)`
      }
    ],
    tips: ['Custom agents are great for enforcing team standards and automating repetitive review tasks.']
  }
]
