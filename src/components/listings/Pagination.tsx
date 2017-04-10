import React from "react";
import { Text, View } from "react-native";
import config from '../../config/config'

interface IProps {
  results: number,
  currentPage: number;
  onPress: (page: number) => any;
}

const { resultsPerPage, maxPaginationElements } = config.movies.pagination
const totalPages = (results: number) => Math.max(1, Math.ceil(results / resultsPerPage))

const truncateRange = (range: number[], currentPage: number) => {
  const truncateStart = Math.max(0, Math.floor(currentPage - maxPaginationElements / 2))
  return range.slice(truncateStart, truncateStart + maxPaginationElements)
}

const paginationElements = (results: number, currentPage: number) => {
  const unboundedRange = Array.from(new Array(totalPages(results)), (x: number, i: number) => { x; return i });
  const range = unboundedRange.length <= maxPaginationElements ? unboundedRange : truncateRange(unboundedRange, currentPage);  
  return range.map(i => i+1);
}

const appendBeginning = (firstElement: number | undefined) => firstElement != null && firstElement > 1;

const appendEnd = (lastElement: number | undefined, results: number) => lastElement != null && (totalPages(results) - lastElement > 1);

const PaginationUnit = ({index, selected, onPress}: {index: number, selected: boolean, onPress: () => void}) =>
  <Text onPress={onPress} style={{ 
      color: selected ? 'white' : '#777', 
      backgroundColor: selected ? 'pink' : 'transparent', 
      marginHorizontal: 3, 
      paddingHorizontal: 5,
      fontSize: 14
    }} 
  >
    {index}
  </Text>

const Pagination = ({ results, currentPage, onPress }: IProps) => {
  if(results > 0) { 
    const pagination = paginationElements(results, currentPage);
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 50, alignSelf: 'flex-end'}}>
        {/* Append prefix pagination */}
        { appendBeginning(pagination[0]) && 
          <View style={{ flexDirection:'row'}}>
            <PaginationUnit index={1} selected={false} onPress={() => onPress(1)} />
            <Text>&hellip;</Text>
          </View>
        }
        { 
          pagination.map((index: number) => 
            <PaginationUnit key={index} index={index} selected={index === currentPage} onPress={() => onPress(index)} />
          )
        }
        {/* Append suffix pagination */}
        { pagination.length > 0 && appendEnd(pagination[pagination.length - 1], results) && 
          <View style={{ flexDirection:'row'}}>
            <Text>&hellip;</Text>
            <PaginationUnit index={totalPages(results)} selected={false} onPress={() => onPress(totalPages(results))} />
          </View>
        }
        <Text style={{ marginLeft:10, fontSize: 14}}>(hits: {results})</Text>
      </View>
    )
  } else {
    return <Text></Text>;
  }   
} 
  
export default Pagination;