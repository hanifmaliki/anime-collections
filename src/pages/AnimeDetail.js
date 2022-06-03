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
import CollectionListModal from '../components/CollectionListModal'

const Body = styled(Paper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 15px;
`

const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 2px solid #c8c8c8;
  margin-top: 15px;
  padding-bottom: 5px;
  width: 100%;
`

const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 22%;
  height: 100%;
  max-width: 100%;
  @media (max-width: 1029px) {
    width: 100%;
  }
`

const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 76%;
  height: 100%;
  max-width: 100%;
  @media (max-width: 1029px) {
    width: 100%;
  }
`

const ButtonCollection = styled(Button)`
  width: 100%;
  margin-top: 10px;
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
  const [openColList, setOpenColList] = useState(false)
  const { setAnimeCol, setBulkAdd } = useContext(MyContext)
  const [collectionList, setCollectionList] = useState(JSON.parse(localStorage.getItem('collections') || '[]'))

  useEffect(() => {
    async function fetchData() {
      const detail = await getAnimeById(animeId);
      setAnimeDetail(detail)
    }
    fetchData();
  }, [animeId]);

  const handleClickAddCollection = async () => {
    setAnimeCol([animeDetail])
    setBulkAdd(false);
    setOpenColMod(true)
  }

  const handleClickCollectionList = async () => {
    setCollectionList(JSON.parse(localStorage.getItem('collections') || '[]'))
    setAnimeCol([animeDetail])
    setOpenColList(true)
  }

  return (
    <OuterWrapper>
      {
        animeDetail ?
          <>
            <HeaderWrapper>{animeDetail?.title?.romaji}</HeaderWrapper>
            <Body elevation={2}>
              <Left>
                <img style={{ maxWidth: '100%' }} src={animeDetail?.coverImage?.large} alt={animeDetail?.title?.romaji}></img>
                <ButtonCollection variant="contained" onClick={() => handleClickAddCollection(true)}>Add to My Collections</ButtonCollection>
                <ButtonCollection variant="contained" onClick={() => handleClickCollectionList(true)}>Collection List</ButtonCollection>
                <div style={{ width: '100%' }}>
                  <SubTitle>Alternative Titles</SubTitle>
                  <div><span style={{ fontWeight: 'bold' }}>Synonyms: </span>{animeDetail.synonyms?.join(', ')}</div>
                  <div><span style={{ fontWeight: 'bold' }}>Japanese: </span>{animeDetail.title.native}</div>
                  <div><span style={{ fontWeight: 'bold' }}>English: </span>{animeDetail.title?.english || '-'}</div>
                  <SubTitle>Information</SubTitle>
                  <div><span style={{ fontWeight: 'bold' }}>Episodes: </span>{animeDetail.episodes}</div>
                  <div><span style={{ fontWeight: 'bold' }}>Genres: </span>{animeDetail.genres?.join(', ')}</div>
                </div>
              </Left>
              <Right>
                <SubTitle>Synopsis</SubTitle>
                <div dangerouslySetInnerHTML={{ __html: animeDetail?.description }}></div>
                <SubTitle style={{ marginTop: '13px' }}>Characters</SubTitle>
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
      <CollectionListModal
        open={openColList}
        setOpen={setOpenColList}
        collectionList={collectionList}
      />
    </OuterWrapper>
  )
}

export default AnimeDetail
