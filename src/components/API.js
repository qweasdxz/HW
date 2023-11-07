import React, { useEffect, useState } from 'react';


export function Buscar() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Obtener datos de /users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));

    // Obtener datos de /albums
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data));

    // Obtener datos de /photos
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  // Relacionar los datos
  const userAlbums = users.map((user) => ({
    ...user,
    albums: albums.filter((album) => album.userId === user.id),
  }));

  const albumPhotos = albums.map((album) => ({
    ...album,
    photos: photos.filter((photo) => photo.albumId === album.id),
  }));

  return (
    <div className="App">
      <h1>Usuarios, Álbumes y Fotos</h1>
      <div className="user-container">
        {userAlbums.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <h3>Álbumes:</h3>
            <ul>
              {user.albums.map((album) => (
                <li key={album.id}>{album.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="album-container">
        {albumPhotos.map((album) => (
          <div key={album.id} className="album-card">
            <h2>{album.title}</h2>
            <h3>Fotos:</h3>
            <ul className="photo-list">
              {album.photos.map((photo) => (
                <li key={photo.id}>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}