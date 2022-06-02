import React, { useEffect, useState } from 'react'
import CollectionCard from '../components/CollectionCard'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'
import { HeaderWrapper } from '../components/StyledComponents'

const CollectionList = () => {
  const [collectionList, setCollectionList] = useState([])

  useEffect(() => {
    setCollectionList(JSON.parse(localStorage.getItem('collections') || '[]'))
  }, [])

  return (
    <OuterWrapper>
      <HeaderWrapper>Collection List</HeaderWrapper>
      <ListWrapper>
        {collectionList.length > 0 ? collectionList.map((el, idx) => {
          return <CollectionCard
            key={idx}
            data={el}
            index={idx}
          />
        }) : <div><span>No Data</span></div>}
      </ListWrapper>
    </OuterWrapper>
  )
}

export default CollectionList
