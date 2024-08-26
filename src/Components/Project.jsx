import React from 'react'

const Project = (props) => {
  return (
    <div className='max-w-[768px]'>
        <h2 className=' text-3xl font-bold mb-7'>{props.title}</h2>
        <form onSubmit={props.onSubmit}>
            <div className='flex flex-col'>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectName">Project Name: </label>
                    <input 
                        type="text" 
                        name={props.projectName}
                        value={props.projectName}
                        onChange={props.onProjectNameChange}
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'
                    />
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectDescription">Project Description: </label>
                    <textarea 
                        name={props.projectDescription}
                        value={props.projectDescription}
                        onChange={props.onProjectDescriptionChange}
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen' 
                        cols="30" 
                        rows="10">
                    </textarea>
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectDescription">Programming Language: </label>
                    <input 
                        type="text" 
                        name={props.programmingLanguage}
                        value={props.programmingLanguage}
                        onChange={props.onProgrammingLanguageChange}
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'
                    />
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectDeveloper">Project Developer: </label>
                    <select 
                        name="projectDeveloper" 
                        value={props.projectDeveloper} // Ensure this is controlled
                        onChange={props.onProjectDeveloperChange} // Handling change event
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'>
                        <option value="">---Select---</option>
                        {props.developers && props.developers.map(dev => (
                            <option key={dev.id} value={dev.username}>{dev.username}</option>
                        ))}
                    </select>
                    
                </div>
                <div className='lg:mb-10 mb-6 flex items-center justify-start'>
                    <button className='bg-gray-600 font-bold flex items-center justify-center px-10 py-3 text-white hover:bg-black'>
                        Create a Project
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Project