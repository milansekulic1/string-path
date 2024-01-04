
const isForkInPath = (map,row,col)=>{
    if(map[row+1]?.[col] === '|' && map[row-1]?.[col] === "|") throw Error('Fork in the path not allowed')
    if(map[row]?.[col-1] === '-' && map[row]?.[col+1] === "-")throw Error('Fork in the path not allowed')
}

module.exports = isForkInPath