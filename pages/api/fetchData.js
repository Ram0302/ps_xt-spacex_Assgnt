import {generateQueryString} from '../../utilities/utility';
const FetchData = async (e,url,filters) => {
  url+=generateQueryString(filters);
  const res = await fetch(url)
    return res.json()
}
export default FetchData;