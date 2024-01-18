
const isForkInPath = (map,row,col,direction)=>{
    if(direction === '|' && map[row+1]?.[col] === direction && map[row-1]?.[col] === direction) throw Error('Fork in the path not allowed')
    if(direction === '-' && map[row]?.[col-1] === direction && map[row]?.[col+1] === direction)throw Error('Fork in the path not allowed')
}

module.exports = isForkInPath