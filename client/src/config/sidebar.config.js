import { Photo, StarOutlined, SendOutlined, InsertDriveFileOutlined, DeleteOutline, MailOutline } from "@mui/icons-material";


export const SIDEBAR_DATA = [
    {
         name:'index',
         title:'Index',
         photo: Photo,
    },
    {
         name:'starred',
         title:'Starred',
         photo: StarOutlined,
    },
    {
         name:'send',
         title:'Send',
         photo: SendOutlined,
    },
    {
         name:'draft',
         title:'Draft',
         photo: InsertDriveFileOutlined,
    },
    {
         name:'bin',
         title:'Bin',
         photo: DeleteOutline,
    },
    {
         name:'allmail',
         title:'All Mail',
         photo: MailOutline,
    }
]