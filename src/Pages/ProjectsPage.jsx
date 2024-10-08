import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { developerGetProjects } from "../redux/developer/developerAction";
import Projects from "../Components/Projects";
import { Toaster } from "react-hot-toast";

const ProjectsPage = () => {
  const [showAll, setShowAll] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUncompleted, setShowUncompleted] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  const dispatch = useDispatch();

  const { projects, devInfo } = useSelector((state) => state.developer);

  const devsProjects = projects.filter((project) => {
    return (
      project.projectDeveloper === devInfo.username &&
      project.companyName === devInfo.companyName
    );
  });
  const completedProjects = devsProjects.filter((project) => {
    return project.projectStatus === "COMPLETED";
  });
  const unCompletedProjects = devsProjects.filter((project) => {
    return project.projectStatus === "IN_PROGRESS";
  });
  const archivedProjects = devsProjects.filter((project) => {
    return project.projectStatus === "ARCHIVED";
  });

  useEffect(() => {
    dispatch(developerGetProjects());
  }, [dispatch]);

  return (
    <div className='max-w-[992px]'>
      <div className="flex items-center justify-between pb-10">
        <h2 className="text-2xl text-primeColor font-bold">PROJECTS</h2>
        <div className="flex items-center gap-12">
          <span
            onClick={() => {
              setShowAll(true);
              setShowCompleted(false);
              setShowUncompleted(false);
              setShowArchived(false);
            }}
            className={`${
              showAll ? "underline text-gray-500" : "text-[#737373]"
            } w-full h-8 text-sm flex items-center justify-center cursor-pointer`}
          >
            All Projects
          </span>
          <span
            onClick={() => {
              setShowAll(false);
              setShowCompleted(true);
              setShowUncompleted(false);
              setShowArchived(false);
            }}
            className={`${
              showCompleted ? "underline text-gray-500" : "text-[#737373]"
            } w-full h-8 text-sm flex items-center justify-center cursor-pointer`}
          >
            Completed Projects
          </span>
          <span
            onClick={() => {
              setShowAll(false);
              setShowCompleted(false);
              setShowUncompleted(true);
              setShowArchived(false);
            }}
            className={`${
              showUncompleted ? "underline text-gray-500" : "text-[#737373]"
            } w-full h-8 text-sm flex items-center justify-center cursor-pointer`}
          >
            Uncompleted Projects
          </span>
          <span
            onClick={() => {
              setShowAll(false);
              setShowCompleted(false);
              setShowUncompleted(false);
              setShowArchived(true);
            }}
            className={`${
              showArchived ? "underline text-gray-500" : "text-[#737373]"
            } w-full h-8 text-sm flex items-center justify-center cursor-pointer`}
          >
            Archived Projects
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Programming Language
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    {devInfo ? (
                      <th scope="col" className="px-6 py-4">
                        Actions
                      </th>
                    ) : (
                      <th scope="col" className="px-6 py-4">
                        Developer
                      </th>
                    )}
                    {devInfo ? (
                      <th scope="col" className="px-6 py-4">
                        Start/Stop Project
                      </th>
                    ) : null}
                    <th scope="col" className="px-6 py-4">
                      Time Spent
                    </th>
                  </tr>
                </thead>
                {showAll ? (
                  <tbody>
                    {devsProjects.length > 0 ? (
                      devsProjects.map((project) => {
                        return (
                          <Projects key={project.projectId} project={project} />
                        );
                      })
                    ) : (
                      <p>You do not have any project(s)</p>
                    )}
                  </tbody>
                ) : showCompleted ? (
                  <tbody>
                    {completedProjects.length > 0 ? (
                      completedProjects.map((project) => {
                        return <Projects key={project.id} project={project} />;
                      })
                    ) : (
                      <p>You have not completed any project(s)</p>
                    )}
                  </tbody>
                ) : showUncompleted ? (
                  <tbody>
                    {unCompletedProjects.length > 0 ? (
                      unCompletedProjects.map((project) => {
                        return <Projects key={project.id} project={project} />;
                      })
                    ) : (
                      <p>You do not have any project(s)</p>
                    )}
                  </tbody>
                ) : (
                  <tbody>
                    {archivedProjects.length > 0 ? (
                      archivedProjects.map((project) => {
                        return <Projects key={project.id} project={project} />;
                      })
                    ) : (
                      <p>You do not have any archived project(s)</p>
                    )}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProjectsPage;
