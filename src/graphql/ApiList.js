import { gql } from "@apollo/client";
import { client } from "./ApiSettings";

export const getAnimeList = async (page) => {
    const query = gql`
    query Page($page: Int) {
        Page(page: $page, perPage:10) {
            media(type: ANIME) {
                id
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
                bannerImage
                title {
                    romaji
                    english
                    native
                }
            }
        } 
    }
    `
    const { data } = await client.query({
        query: query,
        variables: {
            page: page
        }
    });

    if (data?.Page?.media !== null || data?.Page?.media !== undefined) {
        return data.Page.media;
    } else {
        return []
    }
}

export const getAnimeById = async (id) => {
    const query = gql`
    query Media($id: Int) {
        Media(id: $id, type: ANIME) {
        id
        coverImage {
            extraLarge
            large
            medium
            color
        }
        bannerImage
        synonyms
        title {
            romaji
            english
            native
        }
        description
        characters {
            edges {
              role
              name
            }
            nodes {
              name {
                first
                middle
                last
                full
                native
                userPreferred
              }
              image {
                  large
                  medium
              }
            }
        }
      }
    }
    `
    const { data } = await client.query({
        query: query,
        variables: {
            id: id
        }
    });

    if (data?.Media !== null || data?.Media !== undefined) {
        return data.Media;
    } else {
        return []
    }
}