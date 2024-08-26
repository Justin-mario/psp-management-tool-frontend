import React from 'react'
//import VerticalDasboard from '../Components/VerticalDasboard'

const AdminDashboard = () => {
  return (
    <div className='max-w-[992px]'>
        PSP Management Tool User Guide

Introduction to the System

Welcome to the PSP Management Tool, designed to help you implement the Personal Software Process (PSP) in your software development work. This tool focuses on PSP0 and PSP0.1, providing a foundation for disciplined software development practices.

System Overview

Our PSP Management Tool offers the following key functionalities:

1. User Management
2. Project Management
3. Time Tracking
4. Defect Logging
5. Data Visualization
6. Tutorial System

Let's explore how to use each of these features:

1. User Management

Registration: Sign up with your email, username, and password. You'll be asked to specify if you're registering as a developer or an admin.
Login: Use your credentials to access the system.
Profile Management: Update your personal information and change your password as needed.

2. Project Management

Create a Project: As an admin, you can create new projects and assign them to developers.
View Projects: See a list of all your assigned projects or, as an admin, all projects in your company.
Update Project Status: Mark projects as in progress, completed, or archived.

3. Time Tracking

Start Timer: Begin tracking time for a specific project and development phase.
Stop Timer: End the time tracking session.
Log Time: Manually enter time spent on a task if you forgot to use the timer.
View Time Logs: See a summary of time spent on different projects and phases.

4. Defect Logging

Log a Defect: Record defects you encounter, including type, description, and the phase where it was injected and removed.
Update Defect Status: Mark defects as fixed or closed.
View Defects: See a list of all defects for a specific project.

5. Data Visualization

Time Distribution: View charts showing how you've spent your time across different projects and development phases.
Defect Trends: See visualizations of defect patterns in your projects.

6. Tutorial System

Access in-app tutorials explaining PSP concepts and how to use the tool effectively.
Tutorials are unlocked progressively as you use the system.

What is PSP?

The Personal Software Process (PSP) is a structured software development methodology designed to help individual developers improve their skills and quality of work. Developed by Watts Humphrey at the Software Engineering Institute (SEI) in the mid-1990s, PSP aims to bring discipline, planning, and quality management to the individual software engineer's work.

PSP was created as a response to the software industry's persistent challenges with project delays, budget overruns, and quality issues. It can be seen as a scaled-down, individual-focused version of the Capability Maturity Model (CMM), which is used at an organizational level in the software industry. While CMM focuses on improving organizational processes, PSP targets the practices of individual developers.

The primary goals of PSP are to:
1. Improve estimation accuracy for project time and size
2. Enhance code quality by reducing defects
3. Increase developer productivity
4. Foster a culture of continuous improvement in personal software development practices

By providing a framework for measuring and analyzing personal performance, PSP enables software engineers to understand their own processes better and make data-driven improvements over time.

PSP0 and PSP0.1 Overview

Our tool focuses on implementing PSP0 and PSP0.1. Here's what each level entails:

PSP0: Basic Principles

PSP0 introduces fundamental concepts of process discipline and personal measurement:

1. Time Tracking: Record time spent on each development phase (planning, design, coding, compile, testing, postmortem).
2. Defect Logging: Record all defects found in your work.
3. Adhering to Coding Standards: Follow a consistent coding style.

PSP0.1: Process Improvement

PSP0.1 builds on PSP0 by introducing:

1. Size Measurement: Track the size of your programs (usually in lines of code).
2. Process Improvement Proposal: After each project, reflect on your process and suggest improvements.

Using the System for PSP0 and PSP0.1

1. Start a Project: 
   Create a new project or select an existing one.
   et initial size estimates if you're at PSP0.1 level.

2. Track Time:
   Use the timer feature to accurately record time spent in each development phase.
   Remember to switch the timer when moving between phases.

3. Log Defects:
   Whenever you find a defect, log it immediately.
   Record the phase where you found it and where you think it was introduced.

4. Measure Size (PSP0.1):
   - At the end of the project, record the final size of your program.

5. Review and Reflect:
   Use the data visualization tools to review your time distribution and defect patterns.
   For PSP0.1, write a process improvement proposal based on your observations.

6. Continuous Learning:
   Regularly check the tutorial section for new content on PSP practices.
   As you consistently use PSP0 and PSP0.1, you'll unlock more advanced features and tutorials.

Remember, the key to success with PSP is consistency and honesty in data collection. Regular use of this tool will help you develop disciplined software development habits and provide insights for continuous improvement.

Happy coding, and welcome to your PSP journey!
    </div>
  )
}

export default AdminDashboard