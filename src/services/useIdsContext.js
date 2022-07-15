import { useState } from "react"

function useIdsContext () {

    const [ ids, setIds ] = useState({})

    return {
        newId: function (stateName) {
            const newIds = {...ids}
            newIds[stateName] = newIds.hasOwnProperty(stateName) ? newIds[stateName]+1 : 0
            setIds(newIds)
            return newIds[stateName]
        }
    }
}

export default useIdsContext