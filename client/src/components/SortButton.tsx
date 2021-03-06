import Button from 'components/Button'
import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import { FC } from 'react'
import { changeSortBy, triggerDirection } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/SortButton.module.css'

const attributes = ['date', 'title', 'content']

const SortButtons: FC = () => {
  const { sortBy, direction } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  const handleChangeSortby = () => {
    const index = attributes.indexOf(sortBy)
    dispatch(
      changeSortBy(
        index === attributes.length - 1 ? attributes[0] : attributes[index + 1]
      )
    )
  }

  const handleTriggerDirection = () => dispatch(triggerDirection())

  return (
    <div className={styles.base}>
      <Button
        variant='transparent'
        onClick={handleChangeSortby}
        className={styles.sortBy}
      >
        Sort by {sortBy}
      </Button>
      <Button
        variant='transparent'
        onClick={handleTriggerDirection}
        className={`${styles.direction} ${direction === -1 ? styles.down : styles.up}`}
      >
        <Icon name={ICONS.DOWN} />
      </Button>
    </div>
  )
}

export default SortButtons
