import { Button } from "@mui/material";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function UserDetail() {
  const param = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  //gives the details of the current location search param key and pathname

  return (
    <div style={{margin:7}}>
      <Button variant='outlined' onClick={() => navigate(-1)}>go back</Button>
      <h4>
        User Detail Page -
        <br />
        User ID: {param?.id}
        <br />
        Search Param: {searchParams.get("name")}
      </h4>
    </div>
  );
}

export default UserDetail;
