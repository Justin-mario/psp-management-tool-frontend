import React from 'react'
import { defectStatusChoices, defectTypeChoices, projectPhases } from './DefectChoices'

const Defect = (props) => {
  return (
    <div className='w-[50%] md:mx-auto pt-[10rem] px-4 md:px-0'>
        <h2 className=' text-3xl font-bold mb-7'>{props.title}</h2>
        <form onSubmit={props.onSubmit}>
            <div className='flex flex-col'>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectName">Description: </label>
                    <input 
                        type="text" 
                        name={props.description}
                        value={props.description}
                        onChange={props.onDescriptionChange}
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'
                    />
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectDescription">Defect Status: </label>
                    <select 
                        name={props.defectStatus} 
                        value={props.defectStatus} // Ensure this is controlled
                        onChange={props.onDefectStatusChange} // Handling change event
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'>
                        <option value="">---Select---</option>
                        {defectStatusChoices && defectStatusChoices.map(def => (
                            <option key={def.id} value={def.status}>{def.status}</option>
                        ))}
                    </select>
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectDescription">Defect Type: </label>
                    <select 
                        name={props.defectType}
                        value={props.defectType}
                        onChange={props.onDefectTypeChange}
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'>
                        <option value="">---Select---</option>
                        {defectTypeChoices && defectTypeChoices.map(def => (
                            <option key={def.id} value={def.type}>{def.type}</option>
                        ))}
                    </select>
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectDescription">Injected Phase: </label>
                    <select 
                        type="text" 
                        name={props.injectedPhase}
                        value={props.injectedPhase}
                        onChange={props.onInjectedPhaseChange}
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'>
                        <option value="">---Select---</option>
                        {projectPhases && projectPhases.map(def => (
                            <option key={def.id} value={def.phase}>{def.phase}</option>
                        ))}
                    </select>
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="projectDescription">Removed Phase: </label>
                    <select
                        name={props.removedPhase}
                        value={props.removedPhase}
                        onChange={props.onRemovedPhaseChange}
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen'>
                        <option value="">---Select---</option>
                        {projectPhases && projectPhases.map(def => (
                            <option key={def.id} value={def.phase}>{def.phase}</option>
                        ))}
                    </select>
                </div>
                <div className='lg:mb-10 mb-6 flex items-center justify-start'>
                    <button className='bg-gray-600 font-bold flex items-center justify-center px-10 py-3 text-white hover:bg-black'>
                        Submit Defect
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Defect