import React from "react";
import { AiFillFileMarkdown, AiFillHeart, AiOutlineExpand, AiOutlineSmile } from "react-icons/ai";
import "./style.css"


export const Information : React.FC<any> = ({data, state, setBg, page, setPage})=>{

    function handlePageNext(){
        if(page === data.length-1){
            setPage(page)
        }
        else{
            setPage(page+1)
        }
    }
    function handlePagePrev(){
        if(page === 0){
            setPage(page)
        }
        else{
            setPage(page-1)
        }
    }

    if(data.length === 0){
        setBg("white");
        return(
            <>
            <>
               { state ? <div className="loader"></div> : <p className="text-danger text-center alert">No face detected !!</p>}
            </>
            </>
        )
    }
    else{
    return(
        <>
            <div className="mt-3">
                <table style={{width: "97%", margin: "auto"}}>
                        <tr>
                            <td className=" text-info text-center"> <AiOutlineExpand /> Bounding </td>
                            <td> 
                                <tr><span className="small">Height : </span>{data[page].BoundingBox.Height}</tr>
                                <tr><span className="small">Left : </span>{data[page].BoundingBox.Left}</tr>
                                <tr><span className="small">Top : </span>{data[page].BoundingBox.Top}</tr>
                                <tr><span className="small">Width : </span>{data[page].BoundingBox.Width}</tr>
                            </td>
                            <td className=" text-info text-center"><AiOutlineSmile /> Pose</td>
                            <td> 
                                <tr><span className="small">Pitch : </span>{data[page].Pose.Pitch}</tr>
                                <tr><span className="small">Roll : </span>{data[page].Pose.Roll}</tr>
                                <tr><span className="small">Yaw : </span>{data[page].Pose.Yaw}</tr>
                            </td>
                        </tr>
                </table>
                    <div>
                        <div className="text-white m-3 dropdown">
                                <button  className=" my-2 bg-info border-none py-2 border-info" style={{width: "100%", margin: "auto"}}><AiFillHeart /> Emotions</button>
                                <table>
                                    <tr> 
                                    {
                                        data[page].Emotions.slice(0,4).map((item:any, k:number)=>(
                                            <td>
                                            <tr key={k}><span className="small">Type : </span> {item.Type.toLowerCase()}</tr>
                                            <tr><span className="small">Confidence : </span>{item.Confidence}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                    <tr> 
                                    {
                                        data[page].Emotions.slice(4,8).map((item:any, k:number)=>(
                                            <td>
                                            <tr key={k}><span className="small">Type : </span> {item.Type.toLowerCase()}</tr>
                                            <tr><span className="small">Confidence : </span>{item.Confidence}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                </table>
                            </div>
                            <div className="text-white m-3 dropdown">
                                <button className=" my-2 bg-info border-none py-2 border-info" style={{width: "100%", margin: "auto"}}><AiFillFileMarkdown /> Landmarks</button>
                                <table>
                                    <tr>
                                    {
                                        data[page].Landmarks.slice(0,4).map((item:any, k:number)=>(
                                            <td>
                                                <tr><span className="small">Type : </span>{item.Type}</tr>
                                                <tr><span className="small">X : </span>{item.X}</tr>
                                                <tr><span className="small">Y : </span>{item.Y}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                    <tr>
                                    {
                                        data[page].Landmarks.slice(5,9).map((item:any, k:number)=>(
                                            <td>
                                                <tr><span className="small">Type : </span>{item.Type}</tr>
                                                <tr><span className="small">X : </span>{item.X}</tr>
                                                <tr><span className="small">Y : </span>{item.Y}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                    <tr>
                                    {
                                        data[page].Landmarks.slice(9,13).map((item:any, k:number)=>(
                                            <td>
                                                <tr><span className="small">Type : </span>{item.Type}</tr>
                                                <tr><span className="small">X : </span>{item.X}</tr>
                                                <tr><span className="small">Y : </span>{item.Y}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                    <tr>
                                    {
                                        data[page].Landmarks.slice(13,17).map((item:any, k:number)=>(
                                            <td>
                                                <tr><span className="small">Type : </span>{item.Type}</tr>
                                                <tr><span className="small">X : </span>{item.X}</tr>
                                                <tr><span className="small">Y : </span>{item.Y}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                    <tr>
                                    {
                                        data[page].Landmarks.slice(17,21).map((item:any, k:number)=>(
                                            <td>
                                                <tr><span className="small">Type : </span>{item.Type}</tr>
                                                <tr><span className="small">X : </span>{item.X}</tr>
                                                <tr><span className="small">Y : </span>{item.Y}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                    <tr>
                                    {
                                        data[page].Landmarks.slice(21,25).map((item:any, k:number)=>(
                                            <td>
                                                <tr><span className="small">Type : </span>{item.Type}</tr>
                                                <tr><span className="small">X : </span>{item.X}</tr>
                                                <tr><span className="small">Y : </span>{item.Y}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                    <tr>
                                    {
                                        data[page].Landmarks.slice(25,29).map((item:any, k:number)=>(
                                            <td>
                                                <tr><span className="small">Type : </span>{item.Type}</tr>
                                                <tr><span className="small">X : </span>{item.X}</tr>
                                                <tr><span className="small">Y : </span>{item.Y}</tr>
                                            </td>
                                        ))
                                    }
                                    </tr>
                                </table>
                            </div>
                    </div>
            </div>
            <button className="bg-warning mx-2" onClick={handlePagePrev}>Prev</button><button className="bg-warning mx-2" onClick={handlePageNext}>Next</button>
        </>
    )
    }
}