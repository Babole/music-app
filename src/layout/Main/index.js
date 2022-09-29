import React, { useState, useEffect } from "react";
import axios from 'axios'

import { AboutArtist, TopAlbums } from "../../components";
import './style.css'

function Main(props) {
  const [artistData, setArtistData] = useState({})
  const [albumsData, setAlbumsData] = useState([
    { strAlbumThumb: './defaultAlbums/1.png', strAlbum: '', intYearReleased: '' },
    { strAlbumThumb: './defaultAlbums/2.png', strAlbum: '', intYearReleased: '' },
    { strAlbumThumb: './defaultAlbums/3.png', strAlbum: '', intYearReleased: '' },
    { strAlbumThumb: './defaultAlbums/4.png', strAlbum: '', intYearReleased: '' }
  ])

  useEffect(() => {

    const fetchAtristData = async (artist) => {
      try {
        const { data } = await axios.get(`https://theaudiodb.com/api/v1/json/2/artist.php?i=${artist}`)
        setArtistData(() => data.artists[0])
        setTimeout(() => {
          fetchAlbumData(data.artists[0].idArtist);
        }, 3000)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchAlbumData = async (artist_id) => {
      try {
        const { data } = await axios.get(`https://theaudiodb.com/api/v1/json/2/album.php?i=${artist_id}`)
        setAlbumsData(() => data.album)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAtristData(props.artistId)

  }, [])

  return (
    <main>
      <AboutArtist artistData={artistData} />
      <TopAlbums albumsData={albumsData} />
    </main>
  );
}

export default Main;
