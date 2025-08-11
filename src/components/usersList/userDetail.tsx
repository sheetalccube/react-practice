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
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      userDetail the id is {param?.id}
      search params {searchParams.get("name")}
    </div>
  );
}

export default UserDetail;
