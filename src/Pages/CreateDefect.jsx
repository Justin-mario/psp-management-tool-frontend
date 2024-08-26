import React, {useState} from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import Defect from '../Components/Defect'
import { developerCreateDefect } from '../redux/developer/developerAction'
import { useParams } from 'react-router-dom'

const CreateDefect = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    //console.log("defect", id)

    const [description, setDescription] = useState("")
    const [defectStatus, setDefectStatus] = useState("")
    const [defectType, setDefectType] = useState("")
    const [injectedPhase, setInjectedPhase] = useState("")
    const [removedPhase, setRemovedPhase] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(developerCreateDefect({description, defectStatus, defectType, injectedPhase, removedPhase, id}))
    }

  return (
    <div>
        <Defect 
            title="Register Your Defect"
            onSubmit = {onSubmit}
            description = {description}
            defectStatus = {defectStatus}
            defectType = {defectType}
            injectedPhase ={injectedPhase}
            removedPhase ={removedPhase}
            // developer="Select a developer"
            onDescriptionChange={(e) => setDescription(e.target.value)}
            onDefectStatusChange= {(e) => setDefectStatus(e.target.value)}
            onDefectTypeChange = {(e) => setDefectType(e.target.value)}
            onInjectedPhaseChange={(e) => setInjectedPhase(e.target.value)}
            onRemovedPhaseChange={(e) => setRemovedPhase(e.target.value)}
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

export default CreateDefect