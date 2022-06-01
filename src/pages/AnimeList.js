import React, { useContext, useEffect, useState } from 'react'
import AnimeCard from '../components/AnimeCard'
import { getAnimeList } from '../graphql/ApiList'
import styled from '@emotion/styled'
import { CircularProgress, Pagination, Fab } from '@mui/material'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'
import { Favorite as FavoriteIcon } from '@mui/icons-material'
import CollectionModal from '../components/CollectionModal'
import MyContext from '../context/MyContext'
import { HeaderWrapper } from '../components/StyledComponents'

const FavoriteButton = styled(Fab)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  &:hover{
    color: red
  }
`

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([])
  const [openColMod, setOpenColMod] = useState(false)
  const [pageInfo, setPageInfo] = useState({})
  const { setAnimeCol, setBulkAdd, setLoading, currentPage, setCurrentPage } = useContext(MyContext)

  useEffect((() => {
    async function fetchData() {
      setLoading(true)
      const { pageInfo: page, media } = await getAnimeList(currentPage)
      setAnimeList(media)
      setPageInfo(page)
      setLoading(false)
    }
    fetchData();
  }), [currentPage, setLoading])

  const handleClickFavorite = async () => {
    setAnimeCol(animeList)
    setBulkAdd(true);
    setOpenColMod(true)
  }

  return (
    <OuterWrapper>
      <HeaderWrapper>Anime List</HeaderWrapper>
      <ListWrapper>
        {
          animeList.length > 0 ?
            animeList.map((el, idx) => {
              return <AnimeCard
                anime={el}
                key={idx}
              />
            })
            :
            <CircularProgress />
        }
      </ListWrapper>
      {
        animeList.length > 0 && <Pagination
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
          count={pageInfo.lastPage}
          color="primary"
          sx={{ marginBottom: 3, marginTop: 3 }}
        />
      }
      <FavoriteButton color="primary" aria-label="add" onClick={() => handleClickFavorite()}>
        <FavoriteIcon />
      </FavoriteButton>
      <CollectionModal
        open={openColMod}
        setOpen={setOpenColMod}
      />
    </OuterWrapper>
  )
}

export default AnimeList
