import React from 'react'
import '../style/ResumeUploadUI.scss'

/**
 * Pure UI component for resume upload.
 *
 * This component is intentionally presentation-only (UI layer).
 * State management and API integration should be handled by a higher layer.
 *
 * Props:
 * - fileName: string | null
 * - accept: string
 * - onFileChange: (file: File | null) => void
 * - onRemove: () => void
 */
const ResumeUploadUI = ({
  fileName = null,
  accept = '.pdf',
  onFileChange = () => {},
  onRemove = () => {},
}) => {
  const inputId = 'resume-upload-input'

  const handleChange = (event) => {
    const file = event.target.files?.[0] ?? null
    onFileChange(file)
  }

  return (
    <div className='resume-upload'>
      <label htmlFor={inputId} className='resume-upload__dropzone'>
        <div className='resume-upload__icon' aria-hidden='true'>
          <svg width='40' height='40' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M19 16V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V16'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M8 12L12 8L16 12'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M12 8V17'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </div>

        <div className='resume-upload__content'>
          <div>
            <p className='resume-upload__title'>Upload your resume</p>
            <p className='resume-upload__subtitle'>Drag & drop your PDF, or click to browse</p>
          </div>

          <p className='resume-upload__hint'>Accepted file type: <strong>{accept}</strong></p>

          {fileName && (
            <div className='resume-upload__file'>
              <span className='resume-upload__file-name'>{fileName}</span>
              <button
                type='button'
                className='resume-upload__remove'
                onClick={(event) => {
                  event.stopPropagation()
                  onRemove()
                }}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </label>

      <input
        id={inputId}
        type='file'
        className='resume-upload__input'
        accept={accept}
        onChange={handleChange}
        aria-label='Upload resume'
      />
    </div>
  )
}

export default ResumeUploadUI
