import { createContext } from 'react'

import useContextData from './useContextData';
import useIdsContext from './useIdsContext';

export const myContext = createContext();

export function MyContextComponent ({children}) {

  const context = {
    ids: useIdsContext(),
    data: useContextData(),
  }

  return (
    <myContext.Provider value={context}>
      {children}
    </myContext.Provider>
  )
  
}