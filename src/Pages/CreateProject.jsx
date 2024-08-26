import React, {useEffect, useState} from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Project from '../Components/Project'
import { adminCreateProject, getDevelopers } from '../redux/admin/adminActions'

const CreateProject = () => {
    const dispatch = useDispatch()
    const {devs, adminInfo} = useSelector(state => state.admin)
    console.log(devs)
    console.log(adminInfo.id)
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectDeveloper, setProjectDeveloper] = useState("")
    const [programmingLanguage, setProgrammingLanguage] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(adminCreateProject({projectName, projectDescription, projectDeveloper, programmingLanguage}))
    }

    useEffect(() => {
        dispatch(getDevelopers())
    }, [dispatch])

  return (
    <div>
        <Project 
            title="Create a Project"
            onSubmit = {onSubmit}
            projectName = {projectName}
            projectDescription = {projectDescription}
            programmingLangauge = {programmingLanguage}
            projectDeveloper={projectDeveloper}
            // developer="Select a developer"
            developers={devs}
            onProjectNameChange={(e) => setProjectName(e.target.value)}
            onProjectDescriptionChange= {(e) => setProjectDescription(e.target.value)}
            onProgrammingLanguageChange = {(e) => setProgrammingLanguage(e.target.value)}
            onProjectDeveloperChange={(e) => setProjectDeveloper(e.target.value)}
        />
        <Toaster
            position='top-right'
            toastOptions={{
                style:{
                    background: "#000",
                    color: "#fff"
                }
            }}
        />
    </div>
  )
}

export default CreateProject