import React from "react";
import { Text, View } from "react-native";
import config from '../../config/config'

interface IProps {
  results: number,
  currentPage: number;
  onPagePress: (page: number) => any;
}

const { resultsPerPage, maxPaginationElements } = config.movies.pagination
const totalPages = (results: number) => Math.max(1, Math.ceil(results / resultsPerPage))

const truncateRange = (range: number[], currentPage: number) => {
  const truncateStart = Math.max(1, Math.floor(currentPage - maxPaginationElements / 2))
  return range.slice(truncateStart, truncateStart + maxPaginationElements)
}

const paginationElements = (results: number, currentPage: number) => {
  const unboundedRange = Array.from(new Array(totalPages(results)), (x: number, i: number) => { x; return i });
  const range = unboundedRange.length <= maxPaginationElements ? unboundedRange : truncateRange(unboundedRange, currentPage);  
  return range.map(i => i+1);
}

const Pagination = ({ results, currentPage, onPagePress }: IProps) =>
  <View>
    {
      paginationElements(results, currentPage).map((index: number) =>
        <Text onPress={onPagePress(index)} style={{ color: index === currentPage ? 'red' : 'grey' }} key={index}>
          {index}
        </Text>
      )
    }
  </View>

export default Pagination;