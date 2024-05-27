import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';

const TeamPresentation: React.FC = () => {
  return (
    <div className="team-presentation">
      <Container>
        <Row>
          <Col>
            <h2>Membres de l'équipe</h2>
            <Row>
              <Col sm="4">
                <div className="team-member">
                  <img src="https://avataaars.io/?avatarStyle=Transparent&amp;topType=ShortHairShortFlat&amp;accessoriesType=Prescription02&amp;hairColor=Black&amp;facialHairType=Blank&amp;clotheType=BlazerSweater&amp;eyeType=Default&amp;eyebrowType=DefaultNatural&amp;mouthType=Default&amp;skinColor=Light" alt="Team Member 1" className="img-fluid rounded-circle" />
                  <h3>Thomas Caron</h3>
                  <p>Data Scientist</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="team-member">
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Blank&hatColor=Blue02&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelBlue&eyeType=Default&eyebrowType=Default&mouthType=Grimace&skinColor=Tanned' alt="Team Member 2" className="img-fluid rounded-circle" />
                  <h3>Fares Meziani</h3>
                  <p>Machine Learning Engineer</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="team-member">
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Prescription02&hatColor=Red&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=PastelGreen&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Serious&skinColor=Pale' alt="Team Member 3" className="img-fluid rounded-circle" />
                  <h3>Ziyed Hammadi</h3>
                  <p>Project Manager</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="team-member">
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Red&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black' alt="Team Member 3" className="img-fluid rounded-circle" />
                  <h3>Anthony Gomis</h3>
                  <p>Project Manager</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="team-member">
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription02&hairColor=Blue&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Angry&mouthType=Eating&skinColor=Light' alt="Team Member 3" className="img-fluid rounded-circle" />
                  <h3>Mohamed Mahmoud</h3>
                  <p>Project Manager</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="team-member">
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=White&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Brown' alt="Team Member 3" className="img-fluid rounded-circle" />
                  <h3>Simon Guillet</h3>
                  <p>Project Manager</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="team-member">
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Wayfarers&hatColor=White&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Twinkle&skinColor=Pale' alt="Team Member 3" className="img-fluid rounded-circle" />
                  <h3>Nadim Hammid</h3>
                  <p>Project Manager</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="team-member">
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&hatColor=Blue03&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=PastelOrange&eyeType=Hearts&eyebrowType=SadConcernedNatural&mouthType=Disbelief&skinColor=Light' alt="Team Member 3" className="img-fluid rounded-circle" />
                  <h3>Abdessamad Bennouf</h3>
                  <p>Project Manager</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamPresentation;