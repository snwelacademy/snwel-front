/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Editor = ({value, onChange}: {value?: string, onChange?: (value: string) => void}) => {
  return (
    <ReactQuill  theme="snow" value={value} onChange={onChange} style={{backgroundColor: 'white'}} />
  )
}

export default Editor