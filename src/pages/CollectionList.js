import React, { useEffect, useState } from 'react'
import CollectionCard from '../components/CollectionCard'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'
import { HeaderWrapper } from '../components/StyledComponents'
import CollectionDeleteModal from '../components/CollectionDeleteModal'
import { Button } from '@mui/material'
import CollectionNameModal from '../components/CollectionNameModal'

const CollectionList = () => {
  const [collectionList, setCollectionList] = useState([])
  const [openDeleteCol, setOpenDeleteCol] = useState(false)
  const [selectedCol, setSelectedCol] = useState({})
  const [selectedIdx, setSelectedIdx] = useState('')
  const [openNewCol, setOpenNewCol] = useState(false)
  const [openEditCol, setOpenEditCol] = useState(false)

  useEffect(() => {
    setCollectionList(JSON.parse(localStorage.getItem('collections') || '[]'))
  }, [])

  const handleNewCollection = async (title) => {
    let new_item = [...collectionList]
    new_item.push({
      title: title,
      animeList: []
    })
    setCollectionList(new_item);
    localStorage.setItem('collections', JSON.stringify(new_item));
  }

  const handleClickButtonEdit = async (col, idx) => {
    setOpenEditCol(true);
    setSelectedCol(col);
    setSelectedIdx(idx);
  }

  const handleEditCollection = async (title) => {
    let new_item = [...collectionList]
    new_item[selectedIdx].title = title;
    setCollectionList(new_item);
    localStorage.setItem('collections', JSON.stringify(new_item));
  }

  const handleClickButtonDelete = async (col, idx) => {
    setOpenDeleteCol(true);
    setSelectedCol(col);
    setSelectedIdx(idx);
  }

  const handleConfirmDelete = async () => {
    let new_item = [...collectionList]
    new_item.splice(selectedIdx, 1);
    setCollectionList(new_item);
    localStorage.setItem('collections', JSON.stringify(new_item));
  }

  return (
    <OuterWrapper>
      <HeaderWrapper>Collection List</HeaderWrapper>
      <Button
        variant="contained"
        onClick={() => { setOpenNewCol(true) }}
        style={{ margin: '0px 16px 16px', width: '100%' }}
      >Create New Collection</Button>
      <ListWrapper>
        {collectionList.length > 0 ? collectionList.map((el, idx) => {
          return <CollectionCard
            key={idx}
            data={el}
            index={idx}
            onDelete={() => handleClickButtonDelete(el, idx)}
            onEdit={() => handleClickButtonEdit(el, idx)}
          />
        }) : <div><span>No collections to display</span></div>}
      </ListWrapper>
      <CollectionNameModal
        open={openNewCol}
        setOpen={setOpenNewCol}
        onSubmit={(value) => { handleNewCollection(value) }}
      />
      <CollectionDeleteModal
        open={openDeleteCol}
        setOpen={setOpenDeleteCol}
        selectedCol={selectedCol}
        onDelete={() => handleConfirmDelete()}
      />
      <CollectionNameModal
        open={openEditCol}
        setOpen={setOpenEditCol}
        onSubmit={(value) => { handleEditCollection(value) }}
        edit={true}
        selectedCol={selectedCol}
      />
    </OuterWrapper>
  )
}

export default CollectionList
