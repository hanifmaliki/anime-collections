import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeCard from '../components/AnimeCard'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'
import { HeaderWrapper } from '../components/StyledComponents'
import CollectionNameModal from '../components/CollectionNameModal'
import { Edit } from '@mui/icons-material'
import AnimeDeleteModal from '../components/AnimeDeleteModal'
import styled from '@emotion/styled'

const EditCollection = styled(Edit)`
  margin-left: 10px;
  &:hover {
    color: red;
  }
`

const CollectionDetail = () => {
  const { idx: index } = useParams();
  const [collectionList, setCollectionList] = useState(JSON.parse(localStorage.getItem('collections') || '[]'))
  const [openEditCol, setOpenEditCol] = useState(false);
  const [openDeleteAnime, setOpenDeleteAnime] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState({});
  const [selectedIdx, setSelectedIdx] = useState('');

  const handleEditCollection = async (title) => {
    let new_item = [...collectionList]
    new_item[index].title = title;
    setCollectionList(new_item);
    localStorage.setItem('collections', JSON.stringify(new_item));
  }

  const handleClickDeleteButton = async (anime, idx) => {
    setOpenDeleteAnime(true);
    setSelectedAnime(anime);
    setSelectedIdx(idx);
  }

  const handleConfirmDelete = async () => {
    let new_item = [...collectionList]
    new_item[index].animeList.splice(selectedIdx, 1);
    setCollectionList(new_item);
    localStorage.setItem('collections', JSON.stringify(new_item));
  }

  return (
    <OuterWrapper>
      <HeaderWrapper>
        Collection: {collectionList[index].title}
        <EditCollection onClick={() => setOpenEditCol(true)}></EditCollection>
      </HeaderWrapper>
      <ListWrapper>
        {
          collectionList[index].animeList?.length > 0 ?
            collectionList[index].animeList.map((el, idx) => {
              return <AnimeCard
                anime={el}
                key={idx}
                canDelete={true}
                onDelete={() => handleClickDeleteButton(el, idx)}
              />
            })
            :
            <div><span>No Anime</span></div>
        }
      </ListWrapper>
      <CollectionNameModal
        open={openEditCol}
        setOpen={setOpenEditCol}
        onSubmit={(value) => { handleEditCollection(value) }}
        edit={true}
        selectedCol={collectionList[index]}
      />
      <AnimeDeleteModal
        open={openDeleteAnime}
        setOpen={setOpenDeleteAnime}
        selectedAnime={selectedAnime}
        selectedCol={collectionList[index]}
        onDelete={() => handleConfirmDelete()}
      />
    </OuterWrapper>
  )
}

export default CollectionDetail
