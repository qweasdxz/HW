import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

interface Album {
  id: number;
  userId: number;
  title: string;
}

interface Photo {
  id: number;
  albumId: number;
  thumbnailUrl: string;
  title: string;
}

export function Buscar(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);

        const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);

        const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await photosResponse.json();
        setPhotos(photosData);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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