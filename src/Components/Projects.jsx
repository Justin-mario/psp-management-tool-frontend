import React, { useState } from 'react'
import {ToggleButton, StartStopButton} from './ToggleButton';
import { useSelector, useDispatch } from 'react-redux'
import { completeProject, archiveProject, startProject, stopProject } from '../redux/developer/developerAction';
import { Link } from 'react-router-dom';

const Projects = ({project}) => {
  console.log("Projects", project)
  const dispatch = useDispatch()
  const [toggleComplete, setToggleComplete] = useState(false)
  const [toggleArchive, setToggleArchive] = useState(false)
  const [toggle, setToggle] = useState(false)

  const handleToggleComplete = () => {
    setToggleComplete((prev) => !prev);
  };
  const handleToggleArchive = () => {
    setToggleArchive((prev) => !prev);
  };
  const handleStartAndStop = () => {
    setToggle(!toggle)
  }

  const completedProject = () => {
    dispatch(completeProject(project.projectId))
  }
  const archivedProject = () => {
    dispatch(archiveProject(project.projectId))
  }
  const startedProject = () => {
    dispatch(startProject(project.projectId))
  }
  const stoppedProject = () => {
    dispatch(stopProject(project.projectId))
  }

  const {devInfo} = useSelector(state => state.developer)
  const {adminInfo} = useSelector(state => state.admin)
  return (
    <>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  px-6 py-4">
            <Link to={`/project/create-defect/${project.projectId}`}>{project.projectName}</Link>
          </td>
          <td className="whitespace-nowrap  px-6 py-4 text-elipsis">{project.projectDescription}</td>
          <td className="whitespace-nowrap  px-6 py-4">{project.programmingLanguage}</td>
          {project.projectStatus === "IN_PROGRESS" ?
            <>
              <td className="whitespace-nowrap  px-6 py-4">
                <p className='bg-red-300 p-1'>In progress</p>
              </td>
              
            </>
          : project.projectStatus === "COMPLETED" ? 
            <td className="whitespace-nowrap  px-6 py-4">
              <p className='bg-green-300 p-1'>Completed</p>
            </td>
          : <td className="whitespace-nowrap  px-6 py-4">
              <p className='bg-orange-300 p-1'>Archived</p>
            </td>
          }
          {devInfo && project.projectStatus === "IN_PROGRESS" ? 
            <td className='flex flex-row whitespace-nowrap  px-6 py-4'>
              <ToggleButton 
                buttonTag={"Complete Project"}
                className={"text-green-300"} 
                toggle={toggleComplete} 
                handleToggle={handleToggleComplete} 
                update={() => completedProject()}
              />
            </td>
          : devInfo && project.projectStatus === "COMPLETED"?
            <td>
              <ToggleButton 
                buttonTag={"Archive Project"}
                className={"text-orange-300"} 
                toggle={toggleArchive} 
                handleToggle={handleToggleArchive} 
                update={() => archivedProject()}
              />
            </td>
          : adminInfo ?
            <td className="whitespace-nowrap  px-6 py-4">{project.projectDeveloper}</td>
          : <td></td>}
          {devInfo && project.projectStatus === "IN_PROGRESS"?
            <td className='whitespace-nowrap  px-6 py-4'>
              <StartStopButton 
                className={"text-black-900"} 
                toggle={toggle} 
                handleToggle={handleStartAndStop} 
                start={() => {stoppedProject()}}
                stop={() => {startedProject()}}
              />
            </td>
          : <td></td>}
          <td className="whitespace-nowrap  px-6 py-4">{project.duration}</td>
        </tr>
    </>
  )
}

export default Projects