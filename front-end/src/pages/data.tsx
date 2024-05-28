import React, { useState, useEffect } from 'react'
import { Container, Table } from 'reactstrap'
import '../index.css'
import axios from 'axios'
import { JOGame } from '../helpers/interface'

const DataPage: React.FC = () => {
  const [JOgames, setJOGames] = useState<JOGame[]>([])

  // Requêtage du server
  useEffect(() => {
    axios
      .get('http://localhost:8080/games')
      .then((response) => {
        // Stockage des données récupérées dans la variable "JOGames"
        setJOGames(response.data)
      })
      .catch((error) => {
        console.error('There was an error fetching the games data!', error)
      })
  }, [])

  return (
    <div className="data-page">
      <Container>
        <h2>Les 10 derniers hôte des JO</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Date de début</th>
              <th>Date de fin</th>
              <th>Localisation</th>
              <th>Nom</th>
              <th>Saison</th>
              <th>Année</th>
            </tr>
          </thead>
          <tbody>
            {JOgames.slice(0, 10).map((game) => (
              <tr key={game.index}>
                <td>{new Date(game.game_start_date).toLocaleDateString()}</td>
                <td>{new Date(game.game_end_date).toLocaleDateString()}</td>
                <td>{game.game_location}</td>
                <td>{game.game_name}</td>
                <td>{game.game_season}</td>
                <td>{game.game_year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default DataPage
