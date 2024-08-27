import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { IconButton } from '@mui/material';

const SideBarHeader = () => {
  return (
    <section className = "SideBarHeader">
        <IconButton size={"small"} sx={{ m: 0, p: 0, height: 45, maxWidth: 45}}>
          <PersonAddAltIcon />
        </IconButton>
    </section>
  )
}

export default SideBarHeader