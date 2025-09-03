import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filters/slice';      
import { selectFilter } from '../redux/filters/selectors'; 
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
