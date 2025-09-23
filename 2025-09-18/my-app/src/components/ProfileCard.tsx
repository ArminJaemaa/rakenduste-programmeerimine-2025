import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import styles from "../Modules/ProfileCard.module.css"

function ProfileCard() {
  return (
    <>
      <Box
        sx={{
          p: 3,
          mt: 2,
          maxWidth: 400,
          mx: "auto",
          borderRadius: 2,
          boxShadow: 3,
          background: "lightblue",
        }}
      >
        <Typography
          variant="h4"
          className={styles.title}
          gutterBottom
        >
          Armin Jaemaa
        </Typography>

        <Typography
          variant="subtitle1"
          fontWeight="bold"
        >
          Hobid:
        </Typography>
        <List>
          <ListItem>Jõusaal</ListItem>
          <ListItem>Reisimine</ListItem>
          <ListItem>Arvutimängud</ListItem>
        </List>

        <Stack
          spacing={2}
          mt={2}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Text"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
          >
            Nupp
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default ProfileCard
