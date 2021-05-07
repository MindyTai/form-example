import React from 'react'
import { useField } from 'formik'

export default ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...props} {...field} />
      { meta.touched && meta.error ? <div>{meta.error}</div> : null }
    </>    
  )
}
