import React from 'react'
import CollectionCard from '../components/CollectionCard'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'

const CollectionList = () => {
  const collectionList = [
    {
      id: 1,
      title: "Satu",
      animeList: [
        {
          id: 1,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        },
        {
          id: 1,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        },
        {
          id: 1,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        }
      ]
    },
    {
      id: 1,
      title: "Satu",
      animeList: [
        {
          id: 1,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        },
        {
          id: 1,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        },
        {
          id: 1,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        }
      ]
    }
  ]

  return (
    <OuterWrapper>
      <ListWrapper>
        {collectionList.map((el, idx) => {
          return <CollectionCard
            key={idx}
            data={el}
          />
        })}
      </ListWrapper>
    </OuterWrapper>
  )
}

export default CollectionList
