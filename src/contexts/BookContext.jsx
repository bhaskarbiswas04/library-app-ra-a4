import {createContext, useContext, useState} from "react";

const BookContext = createContext()
const useBookContext = useContext(BookContext);
export default useBookContext;

