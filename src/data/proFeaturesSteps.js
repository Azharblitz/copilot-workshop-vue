export const proFeaturesSteps = [
  {
    id: 1,
    title: 'Create Repo with Coding Agent',
    duration: '15 min',
    description: 'Use the Copilot Coding Agent to create entire repositories from scratch.',
    content: `
      <p>The Copilot Coding Agent can create entire repositories from scratch based on your requirements. This is ideal for bootstrapping new projects quickly.</p>
      
      <h4>Getting Started</h4>
      <ol>
        <li>Log in to <a href="https://github.com" target="_blank">github.com</a> with your GitHub account</li>
        <li>Click the + icon in the top right and select <strong>New repository</strong></li>
        <li>Enter a Repository name (e.g., "employee-management-app")</li>
        <li>Add a Description for your project</li>
        <li>In the text box at the bottom, add your app requirements and click <strong>Create repository</strong></li>
      </ol>
      
      <h4>Example App Requirement</h4>
      <p>Here's an example of what you can enter in the requirement textbox:</p>
    `,
    codeExamples: [
      {
        language: 'markdown',
        filename: 'App Requirements',
        code: `Create an Employee Management System with the following features:

- CRUD operations for employee records
- Employee fields: ID, Name, Email, Department, Role, Hire Date
- Search and filter employees by department
- RESTful API design
- Clean, maintainable code with proper error handling

Tech Stack: Node.js with Express, SQLite database, React frontend`
      }
    ],
    tips: ['Be specific about your tech stack and requirements for best results.']
  },
  {
    id: 2,
    title: 'Plan & Design Generation',
    duration: '15 min',
    description: 'Use Custom Agents to generate comprehensive planning and design documents.',
    content: `
      <p>Custom Agents are specialized AI assistants you can create for specific tasks. They can be configured with specific instructions, capabilities, and constraints.</p>
      
      <h4>Creating a Design Document Agent</h4>
      <p>Create a file at <code>.github/agents/design-doc.agent.md</code>:</p>
      
      <h4>Using the Agent</h4>
      <p>Once created, you can invoke the custom agent in Copilot Agent sessions. The agent will generate design documents following your specified format.</p>
      
      <h4>Example Prompt</h4>
      <p>After creating your agent, use prompts like:</p>
    `,
    codeExamples: [
      {
        language: 'markdown',
        filename: '.github/agents/design-doc.agent.md',
        code: `---
name: design-doc-generator
description: Agent specializing in creating technical design documents
---

You are a technical design specialist. Your role is to create comprehensive design documents for software projects.

Focus on:
- System architecture diagrams (using Mermaid)
- Component breakdown and responsibilities
- API design and data models
- Security considerations
- Performance requirements
- Deployment strategy

Always include:
- Clear problem statement
- Proposed solution
- Trade-offs and alternatives considered
- Success metrics`
      },
      {
        language: 'markdown',
        filename: 'Example Prompt',
        code: `Create a technical design document for a real-time chat feature with the following requirements:
- WebSocket-based communication
- Message persistence in PostgreSQL
- Support for 10,000 concurrent users
- End-to-end encryption`
      }
    ],
    tips: ['Refer to the Custom Agents from the Awesome Copilot Repository for more examples.']
  },
  {
    id: 3,
    title: 'Develop with Coding Agent',
    duration: '25 min',
    description: 'Use the Coding Agent to implement features and fix issues.',
    content: `
      <p>The Copilot Coding Agent can work on your codebase autonomously. Assign issues to the Coding Agent and it will create branches, implement changes, and open Pull Requests automatically.</p>
      
      <h4>Working on an Existing Repository</h4>
      <p>You can use Copilot to generate ideas and create issues for existing applications.</p>
      
      <h4>Example: Creating Enhancement Issues</h4>
      <p>Use a prompt to create multiple enhancement issues:</p>
      
      <h4>Assigning to Coding Agent</h4>
      <ol>
        <li>Review and edit each issue as needed</li>
        <li>Click <strong>Create</strong> to save the issue</li>
        <li>In the Assignees section, select <strong>Copilot</strong> to assign the Coding Agent</li>
      </ol>
    `,
    codeExamples: [
      {
        language: 'markdown',
        filename: 'Enhancement Issues Prompt',
        code: `Please create 3 issues to customize the Pomodoro timer.

Pattern A: Enhanced Visual Feedback
- Circular progress bar animation: Smooth decreasing animation based on remaining time
- Color changes: Gradient change from blue→yellow→red as time passes
- Background effects: Particle effects or ripple animations during focus time

Pattern B: Improved Customizability
- Flexible time settings: Selectable from 15/25/35/45 minutes instead of fixed 25 minutes
- Theme switching: Dark/Light/Focus mode (minimal)
- Sound settings: On/off toggle for start/end/tick sounds

Pattern C: Adding Gamification Elements
- Experience point system: XP and level up based on completed Pomodoros
- Achievement badges: Achievement system like "3 consecutive days", "10 completions this week"
- Weekly/monthly statistics: More detailed graph display`
      }
    ],
    tips: ['The Coding Agent works asynchronously. It will create a branch, implement the changes, and open a Pull Request automatically.']
  },
  {
    id: 4,
    title: 'Copilot Instructions',
    duration: '15 min',
    description: 'Configure custom instructions to tailor Copilot behavior for your project.',
    content: `
      <p>Copilot Instructions allow you to customize how GitHub Copilot behaves in your repository. Create a <code>.github/copilot-instructions.md</code> file to define project-specific guidelines.</p>
      
      <h4>What to Include</h4>
      <ul>
        <li><strong>Coding standards:</strong> Naming conventions, formatting rules</li>
        <li><strong>Architecture patterns:</strong> Preferred patterns and practices</li>
        <li><strong>Testing requirements:</strong> Test coverage expectations</li>
        <li><strong>Documentation standards:</strong> Comment styles and requirements</li>
        <li><strong>Security practices:</strong> Security considerations for the project</li>
      </ul>
      
      <h4>Example Instructions</h4>
    `,
    codeExamples: [
      {
        language: 'markdown',
        filename: '.github/copilot-instructions.md',
        code: `# Copilot Instructions for This Project

## Coding Standards
- Use TypeScript for all new files
- Follow the Airbnb JavaScript Style Guide
- Use functional components with React hooks
- Prefer const over let; never use var

## Architecture
- Follow the repository pattern for data access
- Use dependency injection for services
- Keep components small and focused (< 200 lines)

## Testing
- Write unit tests for all business logic
- Aim for 80% code coverage
- Use Jest and React Testing Library

## Security
- Never log sensitive information
- Always validate and sanitize user input
- Use parameterized queries for database access

## Documentation
- Add JSDoc comments to all exported functions
- Include examples in complex function documentation
- Keep README.md up to date with setup instructions`
      }
    ],
    tips: ['Well-defined instructions help Copilot generate code that matches your team\'s standards.']
  },
  {
    id: 5,
    title: 'PR & Code Review',
    duration: '15 min',
    description: 'Use Copilot to review Pull Requests and improve code quality.',
    content: `
      <p>GitHub Copilot can assist with code reviews in Pull Requests, helping identify issues and suggest improvements.</p>
      
      <h4>Copilot in Pull Requests</h4>
      <ul>
        <li><strong>Automatic summaries:</strong> Copilot generates PR summaries</li>
        <li><strong>Code review suggestions:</strong> Get AI-powered review comments</li>
        <li><strong>Security scanning:</strong> Identify potential security issues</li>
        <li><strong>Documentation suggestions:</strong> Improve code documentation</li>
      </ul>
      
      <h4>How to Use</h4>
      <ol>
        <li>Open a Pull Request in your repository</li>
        <li>Click on "Copilot" in the PR toolbar</li>
        <li>Select "Review changes" or ask specific questions</li>
        <li>Review and apply Copilot's suggestions</li>
      </ol>
      
      <h4>Asking for Specific Reviews</h4>
      <p>You can ask Copilot to focus on specific aspects:</p>
      <ul>
        <li>"Review for security vulnerabilities"</li>
        <li>"Check for performance issues"</li>
        <li>"Suggest improvements for readability"</li>
        <li>"Verify error handling is complete"</li>
      </ul>
    `,
    codeExamples: [],
    tips: ['Use Copilot code review as a first pass, but always have human reviewers for important changes.']
  },
  {
    id: 6,
    title: 'Copilot Spaces',
    duration: '20 min',
    description: 'Organize and share Copilot contexts with your team.',
    content: `
      <p>Copilot Spaces allow you to create shared contexts that help Copilot understand your project better. Teams can collaborate on defining the best context for their codebase.</p>
      
      <h4>What are Copilot Spaces?</h4>
      <ul>
        <li>Shared context definitions for your repository</li>
        <li>Custom knowledge about your codebase</li>
        <li>Team-specific patterns and practices</li>
        <li>Architectural decisions and rationale</li>
      </ul>
      
      <h4>Creating a Space</h4>
      <ol>
        <li>Navigate to your repository settings</li>
        <li>Select "Copilot" from the sidebar</li>
        <li>Click "Create Space"</li>
        <li>Define the context and knowledge for your project</li>
      </ol>
      
      <h4>Benefits</h4>
      <ul>
        <li>Consistent Copilot behavior across the team</li>
        <li>Better code suggestions aligned with project standards</li>
        <li>Reduced onboarding time for new team members</li>
        <li>Preserved institutional knowledge</li>
      </ul>
    `,
    codeExamples: [],
    tips: ['Spaces are especially useful for large projects with complex architectures or domain-specific requirements.']
  },
  {
    id: 7,
    title: 'Agent Mission Control',
    duration: '15 min',
    description: 'Monitor and manage Coding Agent activities across your organization.',
    content: `
      <p>Agent Mission Control provides visibility into all Coding Agent activities across your repositories. Track progress, review outputs, and manage agent permissions.</p>
      
      <h4>Features</h4>
      <ul>
        <li><strong>Activity Dashboard:</strong> See all active and completed agent tasks</li>
        <li><strong>Progress Tracking:</strong> Monitor ongoing implementations</li>
        <li><strong>Quality Metrics:</strong> Track agent performance and success rates</li>
        <li><strong>Permission Management:</strong> Control which repositories can use agents</li>
      </ul>
      
      <h4>Accessing Mission Control</h4>
      <ol>
        <li>Navigate to your organization settings</li>
        <li>Select "Copilot" from the sidebar</li>
        <li>Click on "Mission Control"</li>
        <li>View and manage agent activities</li>
      </ol>
      
      <h4>Best Practices</h4>
      <ul>
        <li>Review agent PRs regularly</li>
        <li>Set up notifications for completed tasks</li>
        <li>Monitor quality metrics to improve prompts</li>
        <li>Establish review processes for agent-generated code</li>
      </ul>
    `,
    codeExamples: [],
    tips: ['Regular monitoring helps ensure agent outputs meet your quality standards and allows you to refine your prompts over time.']
  }
]
