import React from 'react';
import { Container, Table } from 'reactstrap';
import '../index.css';

const DataPage: React.FC = () => {
  return (
    <div className="data-page">
      <Container>
        <h2>Données</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Année</th>
              <th>Saison</th>
              <th>Nation</th>
              <th>Médailles</th>
              <th>Or</th>
              <th>Argent</th>
              <th>Bronze</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>..</td>
              <td>..</td>
            </tr>
            <tr>
              <td>2</td>
              <td>..</td>
              <td>..</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DataPage;