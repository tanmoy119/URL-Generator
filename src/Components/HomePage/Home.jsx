import React from 'react'
import "../../styles/home.css"
import DropFile from './DropFile'

const Home = () => {
  return (
  
    <div className='box'>
        <h2 className="header">
             Drop image here
        </h2>
        <DropFile/>

    </div>
  )
}

export default Home
































// import React,{useRef, useState} from 'react'
// import "../../styles/home.css"

// const Home = () => {

//     //===React hooks is there

//     const [files,setFiles]=useState(null)
//     const inputRef=useRef()

//     //all function logic is there

//     const handleDragOver=(event)=>{
//              event.preventDefault();
//     }

//     const handleDrop=(event)=>{
//         event.preventDefault()
//         setFiles(event.dataTransfer.files)
//     }

//     const handleUpload=()=>{

//     }

// //=====show only selected file
// if(files) return (
//     <div className='uploads'>
//         <ul>
//             {Array.from(files).map((file,idx)=><li key={idx}>{file.name}</li>)}
//         </ul>
//         <div className="actions">
//             <button onClick={()=>setFiles(null)}>Cancel</button>
//             <button onClick={handleUpload}>Upload</button>
//         </div>

//     </div>
// )

//   return (
//     <>
//     <div className='bg'>

//      </div>
//         {!files && (
//         <div className='dropBox'
//            onDragOver={handleDragOver}
//            onDrop={handleDrop}>

//             <h4>Drag and Drop Files to Upload</h4>
//             <h2>Or</h2>
//             <input type="file" multiple onChange={(event)=>setFiles(event.target.files)} hidden ref={inputRef}/>
//             <button onClick={()=>inputRef.current.click()}>Select Files</button>
//         </div>)}
//     </>
//   )
// }

// export default Home