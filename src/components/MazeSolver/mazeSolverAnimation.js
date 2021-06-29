const MazeSolverAnimation = {
    parent: undefined,
    setParent: function(parent) {
        this.parent = parent
    },
    runMaze: function () {
        this.parent.setState({disableRunMazeButton: true})
        let paths = [{path: [[0,1]]}]
        let obj = {};
        obj['a0'] = {path: [[0,1]]};
        this.findPath(paths, this.parent.state.maze, obj)
      },
      resetMaze: function () {
        this.parent.state.timeoutObjects.forEach( item => {
          clearTimeout(item)
        })
        this.parent.setState({timeoutObjects:[], disableRunMazeButton: false, paths: []})
      },
      generateNewKey: function (obj) {
        let arr = Object.keys(obj);
        let lastItem = arr[arr.length - 1];
        return `a${+lastItem.slice(1) + 1}`;
      },
      checkForDups: function (arr, row, col) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i][0] === row && arr[i][1]=== col) {
            return true;
          }
        }
        return false
      },
      findPath: function (paths, maze, obj) {
        let rows = maze.length - 1;
        let cols = maze[0].length - 1;
        let anyPathHasChanged = false;
        let pathObjectArray = [];
        obj = obj || {}
    
        for (let key in obj) {
          let individualPathHasChanged = false;
          let current = obj[key].path;
          let [ prevRow, prevCol ] = current[current.length - 1];
    
          if (obj[key].type === 'failure') {
            continue;
          }
          
          if (current.length > 1 && (prevRow === 0 || prevCol === 0 || prevRow === rows || prevCol === cols)) {
            pathObjectArray.push({path:current, type:'success'})
            obj[key] = {path:current, type:'success'}
            individualPathHasChanged = true;
            continue;
          }
    
          //up
          if (prevRow > 0 && maze[prevRow - 1][prevCol] === 0 && !this.checkForDups(current, prevRow - 1, prevCol)) {
            pathObjectArray.push({path:[...current, [prevRow - 1,prevCol]], type:'tbd'})
            if (individualPathHasChanged) {
              let newKey = this.generateNewKey(obj)
              obj[newKey] ={path:[...current, [prevRow - 1, prevCol]], type:'tbd'}
            } else {
              obj[key] = {path:[...current, [prevRow - 1, prevCol]], type:'tbd'}
            }
            anyPathHasChanged = individualPathHasChanged = true;
          }
    
          //right
          if (prevCol <= cols - 1 && maze[prevRow][prevCol + 1] === 0  && !this.checkForDups(current, prevRow, prevCol + 1)) {
            pathObjectArray.push({path:[...current, [prevRow,prevCol + 1]], type:'tbd'});
            if (individualPathHasChanged) {
              let newKey = this.generateNewKey(obj)
              obj[newKey] = {path:[...current, [prevRow, prevCol + 1]], type:'tbd'}
            } else {
              obj[key] = {path:[...current, [prevRow, prevCol + 1]], type:'tbd'}
            }
            anyPathHasChanged = individualPathHasChanged = true;
          }
    
          //down
          if (prevRow < rows - 1 && maze[prevRow + 1][prevCol] === 0  && !this.checkForDups(current, prevRow + 1, prevCol)) {
            pathObjectArray.push({path:[...current, [prevRow + 1, prevCol]], type:'tbd'});
            if (individualPathHasChanged) {
              let newKey = this.generateNewKey(obj)
              obj[newKey] = {path:[...current, [prevRow + 1, prevCol]], type:'tbd'}
            } else {
              obj[key] = {path:[...current, [prevRow + 1, prevCol]], type:'tbd'}
            }
            anyPathHasChanged = individualPathHasChanged = true;
          }
    
          //left
          if (prevCol > 0 && maze[prevRow][prevCol - 1] === 0 && !this.checkForDups(current, prevRow, prevCol - 1)) {
            pathObjectArray.push({path:[...current, [prevRow, prevCol - 1]], type:'tbd'});
            if (individualPathHasChanged) {
              let newKey = this.generateNewKey(obj)
              obj[newKey] = {path:[...current, [prevRow, prevCol - 1]], type:'tbd'}
            } else {
              obj[key] = {path:[...current, [prevRow, prevCol - 1]], type:'tbd'}
            }
            anyPathHasChanged = individualPathHasChanged = true;
          }
    
          //no change
          if(!individualPathHasChanged) {
            pathObjectArray.push({path:current, type:'failure'})
            obj[key] = {path:current, type:'failure'}
          }
        }
        this.parent.setState({paths: obj})
        return anyPathHasChanged ? this.parent.setState({timeoutObjects: [...this.parent.state.timeoutObjects, setTimeout(() => this.findPath(pathObjectArray, maze, obj), 40)]}) :  this.parent.setState({disableRunMazeButton: false}) ;
      }
}
export default MazeSolverAnimation;