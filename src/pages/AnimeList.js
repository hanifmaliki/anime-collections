import React, { useContext, useEffect, useState } from 'react'
import AnimeCard from '../components/AnimeCard'
import { getAnimeList } from '../graphql/ApiList'
import styled from '@emotion/styled'
import { CircularProgress, Pagination, Fab } from '@mui/material'
import { OuterWrapper, ListWrapper } from '../components/StyledComponents'
import { Favorite as FavoriteIcon } from '@mui/icons-material'
import CollectionModal from '../components/CollectionModal'
import MyContext from '../context/MyContext'

const FavoriteButton = styled(Fab)`
  position: fixed;
  right: 30px;
  bottom: 30px;
`

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([])
  const [openColMod, setOpenColMod] = useState(false)
  const { setAnimeCol, setBulkAdd } = useContext(MyContext)

  useEffect((() => {
    async function fetchData() {
      const list = await getAnimeList(6)
      setAnimeList(list)
    }
    fetchData();
  }), [])

  const handleClickFavorite = () => {
    setAnimeCol(animeList)
    setBulkAdd(true);
    setOpenColMod(true)
  }

  return (
    <OuterWrapper>
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
        animeList.length > 0 && <Pagination count={10} color="primary" />
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
