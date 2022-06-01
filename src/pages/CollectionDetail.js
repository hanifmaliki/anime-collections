import React from 'react'
import { useParams } from 'react-router-dom'
import AnimeCard from '../components/AnimeCard'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'

const CollectionDetail = () => {
  const { id: collectionId } = useParams();
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
          id: 2,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        },
        {
          id: 3,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        }
      ]
    },
    {
      id: 2,
      title: "Satu",
      animeList: [
        {
          id: 1,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        },
        {
          id: 2,
          title: "Ani1",
          cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104-fUBucj3ywYzH.png",
          banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104-mDlXkxzl27ja.jpg"
        },
        {
          id: 3,
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
        {
          collectionList[collectionId].animeList?.length > 0 ?
            collectionList[collectionId].animeList.map((el, idx) => {
              return <AnimeCard
                anime={el}
                key={idx}
              />
            })
            :
            <div><span>No Data</span></div>
        }
      </ListWrapper>
    </OuterWrapper>
  )
}

export default CollectionDetail
