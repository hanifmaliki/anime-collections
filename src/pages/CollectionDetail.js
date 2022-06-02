import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeCard from '../components/AnimeCard'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'
import { HeaderWrapper } from '../components/StyledComponents'
import CollectionNameModal from '../components/CollectionNameModal'
import { Edit } from '@mui/icons-material'
import styled from '@emotion/styled'

const EditCollection = styled(Edit)`
  margin-left: 10px;
  &:hover {
    color: red;
  }
`

const CollectionDetail = () => {
  const { idx: index } = useParams();
  // eslint-disable-next-line
  const [collectionList, setCollectionList] = useState(JSON.parse(localStorage.getItem('collections') || '[]'))
  const [openEditCol, setOpenEditCol] = useState(false)

  const handleEditCollection = (title) => {
    let new_item = [...collectionList]
    new_item[index].title = title;
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
              />
            })
            :
            <div><span>No Data</span></div>
        }
      </ListWrapper>
      <CollectionNameModal
        open={openEditCol}
        setOpen={setOpenEditCol}
        onSubmit={(value) => { handleEditCollection(value) }}
        edit={true}
      />
    </OuterWrapper>
  )
}

export default CollectionDetail
