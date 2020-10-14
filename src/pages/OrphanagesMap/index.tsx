import React, { useEffect, useState } from 'react';

import { FiPlus , FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map , TileLayer ,  Marker , Popup } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg'

import { Container , Title, Description  } from './styles';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    });

  }, [])

  return (
    <Container>

      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          
          <Title> Escolhe um orfanato no mapa</Title>
          <Description> Muitas crianças estão a espera da tua visita :)</Description>
        </header>

        <footer>
          <strong>Aveiro</strong>
          <span>Espinho</span>
        </footer>
      </aside>

      <Map 
        center={[40.9862726,-8.6490592]}
        zoom={15}
        style={{
          zIndex: 5,
          width: '100%',
          height: '100%' 
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
        
        {orphanages.map(orphanage => (
                <Marker 
              position={[orphanage.latitude,orphanage.longitude]}
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup
              className="map-popup"
                closeButton={false} 
                minWidth={240}
                maxWidth={240}
              > 
                    {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF"/>
                  </Link>
              </Popup>
            </Marker>
          )
        )}

      </Map>

      <Link to="/orphanages/create">  
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </Container>
  );
}

export default OrphanagesMap;