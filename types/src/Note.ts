interface Note {
  /** unique id of the note */
  id?: string
  /** title of the note */
  title?: string
  /** content of the note */
  content?: string
  /** date of the note */
  date?: Date
  /** user owner of the note */
  user?: string
}

export default Note
