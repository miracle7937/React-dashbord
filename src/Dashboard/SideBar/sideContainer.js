
import React, { useState } from 'react';
import '../SideBar/side.css';

function SideBar() {
    const [navPage, setnavPage] = useState(0);

    return (
        <div className="side-bar">

        {/* profile block */}
            <div className="profile ">
            
            



                <div className="row pl-3 pr-5 pt-2">
                    <div className="col-sm-4"><img className=' userImage'src='https://www.w3schools.com/w3images/avatar2.png'/>  </div>
                    <div className="col-sm-8">
                        <span> Welcome, Mark</span> 
                        <div className='icon-item'> 
                         <div><i className="fa fa-envelope " aria-hidden="true" /></div>
                            <div><i className="fa fa-user " aria-hidden="true" /></div>                      
                            
                            <div><i className="fa fa-cog " aria-hidden="true" />
                              
                              </div>

                         </div>
                    
                    
                    </div>
                </div>

                </div>

            <h5 className='pt-4 pl-3 title'>DashBoard</h5>
            
            {tileItems.map((value, index) => <ListTile items={value} key={index}
                func={() => { setnavPage(index) }} classStlye={index === navPage ? 'selectTile' :'listTile'}
                

            />)}
        </div>
    );
}




function ListTile({ items, func, classStlye}){
  

    return (
        <div className={classStlye} onClick={func} >
            <div className='d-flex'>
                <div className='p-2 '><i className={items.icon} aria-hidden="true"/></div>
                <div className='p-2 '>{items.tile}</div>


            </div>
            


        </div>
        
    );
}



const tileItems = [{
    'icon': 'fa fa-users',
    tile:'Overview'

},
    {
        'icon': 'fa fa-eye',
        tile: 'View'

    },
    {
        'icon': 'fa fa-users',
        tile: 'Traffic'

    }
    ,
    {
        'icon': 'fa fa-stop-circle',
        tile: 'Geo'

    },
    {
        'icon': 'fa fa-users',
        tile: 'Orders'

    },
    {
        'icon': 'fa fa-bell',
        tile: 'News'

    },
    {
        'icon': 'fa fa-university',
        tile: 'General'

    },
    {
        'icon': 'fa fa-history',
        tile: 'History'

    },
    {
        'icon': 'fa fa-cog',
        tile: 'Setting'

    }
];

export default SideBar;
