import Carousel1  from 'react-material-ui-carousel'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function Carousel() {
    var items = [
        {
            id:"1",
            image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        },
        {
            id: "2",
            image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
        },
        {
            id: "3",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        },
        {
            id: "4",
            image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        }
    ]

    return (
        <Carousel1 
            NextIcon={<NavigateNextIcon fontSize='large' />}
            PrevIcon={<NavigateBeforeIcon fontSize='large' />}
            navButtonsAlwaysVisible={true}
            indicatorContainerProps={{
                style: {
                    marginTop: '0px', // 5
                }
            }}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'transparent',
                }
            }} 
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    bottom: '20px',
                    top:'unset',                
                }
            }} 
        >
            {
                items.map(
                    (item, i) => 
                        <img key={i} src={item.image} alt={item.id} className='w-full h-52 object-cover'/>
                    )
            }
        </Carousel1>
    )
}
