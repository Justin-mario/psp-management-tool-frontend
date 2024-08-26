import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { developerChangeStatus } from "../redux/developer/developerAction";
import {adminChangeStatus} from "../redux/admin/adminActions";

const Defects = ({defect}) => {
  const dispatch = useDispatch()
  const [defectStatus, setDefectStatus] = useState("")
  const {devInfo} = useSelector(state => state.developer)
  const {adminInfo} = useSelector(state => state.admin)

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setDefectStatus(selectedValue);

    const id = defect.defectId;

    if(selectedValue === "FIXED" || selectedValue === "CLOSED"){
      if(devInfo){
        dispatch(developerChangeStatus({ defectStatus: selectedValue, id }));
      }else{
        dispatch(adminChangeStatus({ defectStatus: selectedValue, id }));
      }
    }
};
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap  px-6 py-4">{defect.description}</td>
        <td className="whitespace-nowrap  px-6 py-4">{defect.defectStatus}</td>
        <td className="whitespace-nowrap  px-6 py-4">{defect.defectType}</td>
        <td className="whitespace-nowrap  px-6 py-4">{defect.injectedPhase}</td>
        <td className="whitespace-nowrap  px-6 py-4">{defect.removedPhase}</td>
        <td className="whitespace-nowrap  px-6 py-4">{defect.fixTime}</td>
        {devInfo && (defect.defectStatus !== "FIXED" && defect.defectStatus !== "CLOSED") ? 
          <td className="whitespace-nowrap  px-6 py-4">
            <select name="defectStatus" value={defectStatus} onChange={handleChange}>
              <option value="">--Select--</option>
              <option value="FIXED">Fixed</option>
            </select>
          </td>
        : adminInfo && defect.defectStatus !== "CLOSED" ?
          <td className="whitespace-nowrap  px-6 py-4">
            <select name="defectStatus" value={defectStatus} onChange={handleChange}>
              <option value="">--Select--</option>
              <option value="CLOSED">Closed</option>
            </select>
          </td>
        : null}
      </tr>
    </>
  );
};

export default Defects;
