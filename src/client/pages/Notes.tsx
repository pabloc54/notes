import NoteForm from 'components/NoteForm'
import NoteGrid from 'components/NoteGrid'
import Welcome from 'components/Welcome'
import React from 'react'

const Notes = () => {
  return (
    <>
      <Welcome />
      <NoteForm />
      <NoteGrid />
    </>
  )
}

export default Notes