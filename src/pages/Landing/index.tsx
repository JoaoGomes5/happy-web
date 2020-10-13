import React  from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Background , ContentWrapper , Title , Description, Location } from './styles';
import logoImg from '../../images/logo.svg';
import landing from '../../images/landing.svg';
import { Link } from 'react-router-dom';


const Landing: React.FC = () => {
  return (
    <Background>
       <ContentWrapper background={landing}>
          <img src={logoImg} alt="Happy"/>

          <main>
            <Title>Leva felicidade para o mundo</Title>
            <Description> Visita orfanatos e muda o dia de muitas crianças. </Description>
          </main>

          <Location>
            <strong>Aveiro</strong>
            <span>Espinho</span>
          </Location>
          
          <Link to="/app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>          

       </ContentWrapper>
    </Background>
  );
}

export default Landing;