import React from 'react';

import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map , TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg'
import { Container , Title, Description } from './styles';


const OrphanagesMap: React.FC = () => {
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
      </Map>

      <Link to="">  
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </Container>
  );
}

export default OrphanagesMap;