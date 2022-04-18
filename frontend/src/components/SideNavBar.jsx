import React, { useEffect, useState } from 'react';
import '../styles/NavBar.css';
import Sidebar from 'react-sidebar';
import NavBar from '../components/NavBar'
import kayak_logo from '../img/kayak_logo.png'
import rivian_logo from '../img/rivian_logo.png'
import rivian_text_logo from '../img/rivian_text_logo.png'
import {
  ArrowLeft,
  CalendarDate,
  ChevronDown,
  ChevronRight,
  ClipboardData,
  ConeStriped,
  ExclamationCircle,
  FileArrowUp,
  FileEarmarkText,
  JournalCheck,
  Nut,
  Speedometer,
  Table,
  Tools,
  Truck,
} from 'react-bootstrap-icons';

const SideNavBar = ({content, defaultActiveRoute}) => {


    const [sidebarOpen, setSideBarOpen] = useState(true)
    const [isExpanded, setIsExpanded] = useState(false || defaultActiveRoute === '/work-order-generator-build-plan' || defaultActiveRoute === '/work-order-generator' || defaultActiveRoute === '/work-order-generator-bulk-import' || defaultActiveRoute === '/production-calendar')
    const [isExpandedPartManager, setIsExpandedPartManager] = useState(false || defaultActiveRoute === '/master-bom' || defaultActiveRoute === '/concession-table' || defaultActiveRoute === '/traceable-parts')

    const toggleSideBar = () => {
      setSideBarOpen(!sidebarOpen)
    }

    return (
        <Sidebar
            sidebar={
              <React.Fragment>
                <div className="content-body">
                  <div className="side-bar-title-div">
                  </div>
                  <div className="side-bar-header-div" style={{cursor: 'pointer'}}>
                  </div>
                  <div className="side-bar-separator-parent-div">
                    <div className="side-bar-separator-div"></div>
                  </div>
                  <div>
                    <div className="side-bar-subheader-div">
                      <Truck color="black" size={20} />
                      <span className="side-bar-subheader">PC Manager</span>
                    </div>
                  </div>                
                    <div className={"side-bar-subheader-parent-div"}>
                      <div className="side-bar-subheader-div">
                        <Nut color="black" size={20} />
                        <span className="side-bar-subheader">Part Manager</span>
                        {
                          isExpandedPartManager?
                          <div className="work-order-generator-chevron-div">
                            <ChevronDown color="black" size={12} />
                          </div>
                          :
                          <div className="work-order-generator-chevron-div">
                            <ChevronRight color="black" size={12} />
                          </div>
                        }
                      </div>
                    </div>
                  {isExpandedPartManager &&
                    <>
                      <div>
                      <div className="side-bar-subsubheader-div">
                        <Table color="black" size={20} />
                        <span className="side-bar-subsubheader">Master BOM</span>
                      </div>
                    </div>
                    <div>
                      <div className="side-bar-subsubheader-div">
                        <JournalCheck color="black" size={20} />
                        <span className="side-bar-subsubheader">Traceable Parts</span>
                      </div>
                    </div>
                    <div>
                      <div className="side-bar-subsubheader-div">
                        <ConeStriped color="black" size={20} />
                        <span className="side-bar-subsubheader">Concession Table</span>
                      </div>
                    </div>
                    <div className={"side-bar-subheader-parent-div"}>
                      <div className="side-bar-subheader-div">
                        <Speedometer color="black" size={20} />
                        <span className="side-bar-subheader">Work Order Manager</span>
                        {
                          isExpanded?
                          <div className="work-order-generator-chevron-div">
                            <ChevronDown color="black" size={12} />
                          </div>
                          :
                          <div className="work-order-generator-chevron-div">
                            <ChevronRight color="black" size={12} />
                          </div>
                        }
                      </div>
                    </div>
                    <div>
                      <div className="side-bar-subsubheader-div">
                        <ClipboardData color="black" size={20} />
                        <span className="side-bar-subsubheader">Generate from Build Seq</span>
                      </div>
                    </div>
                    </>
                  }
                </div>
                <div className="side-bar-collapse">
                  <button className="side-bar-collapse-button" onClick={toggleSideBar}><ArrowLeft color="black" size={20} /><span style={{marginLeft: 5}}>Collapse</span></button>
                </div>
              </React.Fragment>
            }
            open={sidebarOpen}
            onSetOpen={setSideBarOpen}
            styles={{ sidebar: { background: "var(--black-color)", width: 260, color: 'white' } }}
            docked={sidebarOpen}
            transitions={false}
        >
            <React.Fragment>
            <NavBar toggleSideBar={toggleSideBar} sidebarOpen={sidebarOpen} defaultActiveRoute={defaultActiveRoute} />
                {
                  <div className="content-body">
                    {content}
                  </div>
                }
            </React.Fragment>
        </Sidebar>
    )
}

export default SideNavBar;
