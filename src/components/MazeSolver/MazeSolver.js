import React, { Component } from 'react';
import './MazeSolver.css';
import Grid from './Grid';
import MazeSolverAnimation from './mazeSolverAnimation';
export default class MazeSolver extends Component {

  state = {
    mazes: [],
    paths: [],
    timeoutObjects: [],
    disableRunMazeButton: false,
    maze: Grid
  }

  componentDidMount = () => {
    MazeSolverAnimation.setParent(this);
  }
  
  componentWillUnmount = () => {
    MazeSolverAnimation.resetMaze();
  }

  render() {
    return (
      <>
        <div className="maze"> 
              {
                this.state.maze.map ( (row, index) => {
                  return row.map ( (column, j) => {
                          return <div key={index+j} className={`maze-item color${column}`}>&nbsp;</div>
                        })
                })
              } 
          </div>
        <div className="maze-button-div">
          <button className="maze-button" disabled={this.state.disableRunMazeButton} onClick={ function(){MazeSolverAnimation.runMaze()} }>run maze</button>
          <button  className="maze-button" onClick={ function(){MazeSolverAnimation.resetMaze()} }>reset maze</button>     
        </div>
        <section id="maze-solver">
          {
          Object.keys(this.state.paths).map((key, pathIndex) => {
            let pathObject = this.state.paths[key];
            return (
              <div className="maze" key={`po${pathIndex}`}> 
              {
                this.state.maze.map ( (row, index) => {
                  return row.map ( (column, j) => {
                            let taken = '';
                            for (let i = 0; i < pathObject.path.length; i++){
                                let takenRow = pathObject.path[i][0];
                                let takenColumn = pathObject.path[i][1];
                                if (takenRow === index && takenColumn === j) {
                                  taken = pathObject.type === 'success' ? 'success' : pathObject.type === 'tbd' ? 'tbd' : 'failure' ;
                                }
                              }
                          return <div key={index+j} className={`maze-item color${column} ${taken}`}>&nbsp;</div>
                        })
                })
              } 
              </div>
            )
          })
          }
        </section>
      </>
    );
  }
}
