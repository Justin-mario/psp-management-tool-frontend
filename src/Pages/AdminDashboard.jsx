import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

const AdminDashboard = () => {
  return (
    <div className='max-w-[992px]'>
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">PSP Management Tool User Guide</h1>

      <Section title="What is PSP?">
        <p className="mb-4">
          The Personal Software Process (PSP) is a structured software development methodology designed to help individual developers improve their skills and quality of work. Developed by Watts Humphrey at the Software Engineering Institute (SEI) in the mid-1990s, PSP aims to bring discipline, planning, and quality management to the individual software engineer's work.
        </p>
        <p className="mb-4">
          PSP was created as a response to the software industry's persistent challenges with project delays, budget overruns, and quality issues. It can be seen as a scaled-down, individual-focused version of the Capability Maturity Model (CMM), which is used at an organizational level in the software industry. While CMM focuses on improving organizational processes, PSP targets the practices of individual developers.
        </p>
        <p className="mb-4">The primary goals of PSP are to:</p>
        <ol className="list-decimal list-inside mb-4 pl-4">
          <li>Improve estimation accuracy for project time and size</li>
          <li>Enhance code quality by reducing defects</li>
          <li>Increase developer productivity</li>
          <li>Foster a culture of continuous improvement in personal software development practices</li>
        </ol>
        <p>
          By providing a framework for measuring and analyzing personal performance, PSP enables software engineers to understand their own processes better and make data-driven improvements over time.
        </p>
      </Section>
      <Section title="PSP0 and PSP0.1 Overview">
        <p className="mb-4">Our tool focuses on implementing PSP0 and PSP0.1. Here's what each level entails:</p>

        <SubSection title="PSP0: Basic Principles">
          <p className="mb-2">PSP0 introduces fundamental concepts of process discipline and personal measurement:</p>
          <ol className="list-decimal list-inside mb-4 pl-4">
            <li><strong>Time Tracking:</strong> Record time spent on each development phase (planning, design, coding, compile, testing, postmortem).</li>
            <li><strong>Defect Logging:</strong> Record all defects found in your work.</li>
            <li><strong>Adhering to Coding Standards:</strong> Follow a consistent coding style.</li>
          </ol>
        </SubSection>

        <SubSection title="PSP0.1: Process Improvement">
          <p className="mb-2">PSP0.1 builds on PSP0 by introducing:</p>
          <ol className="list-decimal list-inside mb-4 pl-4">
            <li><strong>Size Measurement:</strong> Track the size of your programs (usually in lines of code).</li>
            <li><strong>Process Improvement Proposal:</strong> After each project, reflect on your process and suggest improvements.</li>
          </ol>
        </SubSection>
      </Section>

      <Section title="Using the System for PSP0 and PSP0.1">
        <ol className="list-decimal list-inside space-y-4 pl-4">
          <li>
            <strong>Start a Project:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Create a new project or select an existing one.</li>
              <li>Set initial size estimates if you're at PSP0.1 level.</li>
            </ul>
          </li>
          <li>
            <strong>Track Time:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Use the timer feature to accurately record time spent in each development phase.</li>
              <li>Remember to switch the timer when moving between phases.</li>
            </ul>
          </li>
          <li>
            <strong>Log Defects:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Whenever you find a defect, log it immediately.</li>
              <li>Record the phase where you found it and where you think it was introduced.</li>
            </ul>
          </li>
          <li>
            <strong>Measure Size (PSP0.1):</strong>
            <ul className="list-disc list-inside ml-6">
              <li>At the end of the project, record the final size of your program.</li>
            </ul>
          </li>
          <li>
            <strong>Review and Reflect:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Use the data visualization tools to review your time distribution and defect patterns.</li>
              <li>For PSP0.1, write a process improvement proposal based on your observations.</li>
            </ul>
          </li>
          <li>
            <strong>Continuous Learning:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Regularly check the tutorial section for new content on PSP practices.</li>
              <li>As you consistently use PSP0 and PSP0.1, you'll unlock more advanced features and tutorials.</li>
            </ul>
          </li>
        </ol>
      </Section>
      <Section title="Introduction to the System">
        <p className="mb-4">
          Welcome to the PSP Management Tool, designed to help you implement the Personal Software Process (PSP) in your software development work. This tool focuses on PSP0 and PSP0.1, providing a foundation for disciplined software development practices.
        </p>
        <p className="mb-4">
          Our system is designed to accommodate both individual developers and small teams. In a team setting, the admin role can be filled by a team lead, product manager, project manager, or supervisor. It's important to note that an admin account is separate from a developer account, with distinct functionalities:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>Admins have oversight and management capabilities but cannot directly use developer features.</li>
          <li>Developers have access to PSP tracking and implementation tools.</li>
          <li>If an admin needs to use developer features (e.g., in a solo project or as part of the team), they must register a separate developer account.</li>
        </ul>
        <p className="mb-4">
          Some functionalities are exclusive to admin accounts, such as creating projects and assigning them to developers. Similarly, certain features are only available to developer accounts, like time tracking and defect logging for assigned projects.
        </p>
        <p className="mb-4">
          To log out of the system, simply click on the avatar icon located in the top left corner of the page. This will securely end your session and return you to the login screen.
        </p>
      </Section>

      <Section title="System Overview">
        <p className="mb-4">Our PSP Management Tool offers the following key functionalities:</p>
        <ol className="list-decimal list-inside mb-4 pl-4">
          <li>User Management</li>
          <li>Project Management</li>
          <li>Time Tracking</li>
          <li>Defect Logging</li>
          <li>Data Visualization</li>
          <li>Tutorial System</li>
        </ol>
        <p>Let's explore how to use each of these features.</p>

        <SubSection title="1. User Management">
          <ul className="list-disc list-inside pl-4">
            <li><strong>Registration:</strong> Sign up with your email, username, and password. You'll be asked to specify if you're registering as a developer or an admin.</li>
            <li><strong>Login:</strong> Use your credentials to access the system.</li>
            <li><strong>Profile Management:</strong> Update your personal information and change your password as needed.</li>
          </ul>
        </SubSection>

        <SubSection title="2. Project Management">
          <ul className="list-disc list-inside pl-4">
            <li><strong>Create a Project:</strong> As an admin, you can create new projects and assign them to developers.</li>
            <li><strong>View Projects:</strong> See a list of all your assigned projects or, as an admin, all projects in your company.</li>
            <li><strong>Update Project Status:</strong> Mark projects as in progress, completed, or archived.</li>
          </ul>
        </SubSection>

        <SubSection title="3. Time Tracking">
          <ul className="list-disc list-inside pl-4">
            <li><strong>Start Timer:</strong> Begin tracking time for a specific project and development phase.</li>
            <li><strong>Stop Timer:</strong> End the time tracking session.</li>
            <li><strong>Log Time:</strong> Manually enter time spent on a task if you forgot to use the timer.</li>
            <li><strong>View Time Logs:</strong> See a summary of time spent on different projects and phases.</li>
          </ul>
        </SubSection>

        <SubSection title="4. Defect Logging">
          <ul className="list-disc list-inside pl-4">
            <li><strong>Log a Defect:</strong> Record defects you encounter, including type, description, and the phase where it was injected and removed.</li>
            <li><strong>Update Defect Status:</strong> Mark defects as fixed or closed.</li>
            <li><strong>View Defects:</strong> See a list of all defects for a specific project.</li>
          </ul>
        </SubSection>

        <SubSection title="5. Data Visualization">
          <ul className="list-disc list-inside pl-4">
            <li><strong>Time Distribution:</strong> View charts showing how you've spent your time across different projects and development phases.</li>
            <li><strong>Defect Trends:</strong> See visualizations of defect patterns in your projects.</li>
          </ul>
        </SubSection>

        <SubSection title="6. Tutorial System">
          <ul className="list-disc list-inside pl-4">
            <li>Access in-app tutorials explaining PSP concepts and how to use the tool effectively.</li>
            <li>Tutorials are unlocked progressively as you use the system.</li>
          </ul>
        </SubSection>
      </Section>

      

      <div className="mt-8 text-center">
        <p className="italic">
          Remember, the key to success with PSP is consistency and honesty in data collection. Regular use of this tool will help you develop disciplined software development habits and provide insights for continuous improvement.
        </p>
        <p className="mt-4 font-semibold">
          Happy coding, and welcome to your PSP journey!
        </p>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;