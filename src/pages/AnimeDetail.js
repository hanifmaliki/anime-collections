import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Paper, CircularProgress, Button } from '@mui/material'
import { OuterWrapper } from '../components/StyledComponents'
import { getAnimeById } from '../graphql/ApiList'
import styled from '@emotion/styled'
import CharacterCard from '../components/CharacterCard'
import CollectionModal from '../components/CollectionModal'
import MyContext from '../context/MyContext'
import { HeaderWrapper } from '../components/StyledComponents'

const Body = styled(Paper)`
  display: flex;
  padding: 10px;
`

const Left = styled.div`

`

const Right = styled.div`

`

const CharacterListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`

const AnimeDetail = () => {
  const { id: animeId } = useParams();
  const [animeDetail, setAnimeDetail] = useState(null)
  const [openColMod, setOpenColMod] = useState(false)
  const { setAnimeCol, setBulkAdd } = useContext(MyContext)

  useEffect(() => {
    async function fetchData() {
      const detail = await getAnimeById(animeId);
      setAnimeDetail(detail)
    }
    fetchData();
  }, [animeId]);

  const handleClickCollection = async () => {
    setAnimeCol([animeDetail])
    setBulkAdd(false);
    setOpenColMod(true)
  }

  return (
    <OuterWrapper>
      {
        animeDetail ?
          <>
            <HeaderWrapper>{animeDetail?.title?.romaji}</HeaderWrapper>
            <Body elevation={2}>
              <Left>
                <img src={animeDetail?.coverImage?.large} alt={animeDetail?.title?.romaji}></img>
                <Button variant="contained" onClick={() => handleClickCollection(true)}>Add to My Collections</Button>
                <h2>Alternative Titles</h2>
                <hr></hr>
                <div><span style={{ fontWeight: 'bold' }}>Synonyms: </span>{animeDetail.synonyms.join(', ')}</div>
                <div><span style={{ fontWeight: 'bold' }}>Japanese: </span>{animeDetail.title.native}</div>
                <div><span style={{ fontWeight: 'bold' }}>English: </span>{animeDetail.title?.english || '-'}</div>
              </Left>
              <Right>
                <h2>Synopsis</h2>
                <hr></hr>
                {animeDetail?.description}
                <h2>Characters</h2>
                <hr></hr>
                <CharacterListWrapper>
                  {
                    animeDetail.characters?.nodes?.map((el, idx) => {
                      return idx <= 8 ? <CharacterCard key={idx} data={el} /> : ''
                    }) || '-'
                  }
                </CharacterListWrapper>
              </Right>
            </Body>
          </>
          :
          <CircularProgress />
      }
      <CollectionModal
        open={openColMod}
        setOpen={setOpenColMod}
      />
    </OuterWrapper>
  )
}

export default AnimeDetail
