import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { developerGetProjects } from '../redux/developer/developerAction'
import Defects from '../Components/Defects'

const DeveloperDefectPage = () => {
    const dispatch = useDispatch()

    const {projects, devInfo} = useSelector(state => state.developer)

    const devsProjects = projects.filter(project => {
        return project.projectDeveloper === devInfo.username && project.companyName === devInfo.companyName
    })
    const filteredProjects = devsProjects.map(project => {
        return project.defects
    })
    

    useEffect(() => {
        dispatch(developerGetProjects())
      }, [dispatch])
  return (
    <>
        <h2 className='text-2xl text-primeColor font-bold mb-8'>DEFECTS</h2>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                        <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                            <tr>
                                <th scope="col" className="px-6 py-4">Description</th>
                                <th scope="col" className="px-6 py-4">Type</th>
                                <th scope="col" className="px-6 py-4">Injected Phase</th>
                                <th scope="col" className="px-6 py-4">Removed Phase</th>
                                <th scope="col" className="px-6 py-4">Status</th>
                                <th scope="col" className="px-6 py-4">Time Spent</th>
                                <th scope="col" className="px-6 py-4">Update</th>                               
                            </tr>
                        </thead>
                        
                            <tbody>
                                {filteredProjects.length > 0 ? filteredProjects.map((projectArray) => {
                                        return projectArray.map((defect) => {
                                        // console.log(defect.defectId, defect.defectStatus, defect.description);
                                        return <Defects key={defect.defectId} defect={defect}/>; // Modify or return as needed
                                    });
                                })
                            : <p>No defect(s) has been registered</p>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DeveloperDefectPage