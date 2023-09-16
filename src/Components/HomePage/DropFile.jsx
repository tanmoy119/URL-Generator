import "../../styles/dropfile.css"

import uploadImg from "../../Config/upload.png"

const DropFile = (props) => {
  return (
    <div className="input_label">
        <div className="drop_img'">
            <img src={uploadImg} alt="" />
            <p> Drop  image here</p>
        </div>
        <input type="file" value="" />

    </div>
  )
}

export default DropFile;