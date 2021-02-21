import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import './View.css';

function View(props) {
  let name = props.match.params.name;

  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function getInfo() {
    const url = `https://52773-1-f1491bcb.try.learning.intersystems.com/api/interballing/players/${name}`
    const response = await axios.get(url);
    const playerInfo = response.data.items;
    setInfo(playerInfo);
  }

  useEffect(async () => {
    console.log('name', name);
    setLoading(true);
    getInfo();
    setLoading(false);
  }, []);

  if (isLoading) {
    return (<div>Loading dashboard...</div>);
  }

  return (
    <div>
      <p>Hello</p>
      { info.map((el) => {
        return (
          <div>
          <p>{el.season_id}</p>
          <p>{el.team_id}</p>
            <p>{el.team_abbreviation}</p>
            <p>{el.gp}</p>
            <p>{el.mp}</p>
            <p>{el.fgm}</p>
            <p>{el.fga}</p>
            <p>{el.fg_pct}</p>
            <p>{el.fg3m}</p>
            <p>{el.fg3a}</p>
            <p>{el.fg3_pct}</p>
            <p>{el.ftm}</p>
            <p>{el.fta}</p>
            <p>{el.ft_pct}</p>
            <p>{el.oreb}</p>
            <p>{el.dreb}</p>
            <p>{el.reb}</p>
            <p>{el.ast}</p>
            <p>{el.tov}</p>
            <p>{el.stl}</p>
            <p>{el.blk}</p>
            <p>{el.pf}</p>
            <p>{el.pts}</p>
          </div>
        )
      })}
    </div>
  );
}

export default View;
