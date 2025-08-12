import { Card, CardActionArea,  CardContent, CardMedia, Typography } from "@mui/material";
import type { User } from "./usersMain";
import { useNavigate } from "react-router-dom";

interface UsersProps {
  data: User; 
}
function Users({ data }: UsersProps) {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 345 ,margin:2}} >
        <CardActionArea onClick={() => navigate(`/user-detail/${data.id}`)}>
          <CardMedia
            component="img"
            height="140"
            image='src/assets/nature.jpg'
            alt="nature"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Age: {data.age}</p>
              <p>Email: {data.email}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Users;
