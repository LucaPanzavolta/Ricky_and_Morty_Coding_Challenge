import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllCharactersThunk from '../redux/thunks/getAllCharacters.thunk';

function useGetCharacters() {
  const [characters, setCharacters] = useState([]);
  const cachedCharactersInRedux = useSelector((state) => state.characters.list.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cachedCharactersInRedux.length) {
      setCharacters(cachedCharactersInRedux);
    } else {
      dispatch(getAllCharactersThunk());
    }
  }, [cachedCharactersInRedux]);

  return characters;
}

export default useGetCharacters;
