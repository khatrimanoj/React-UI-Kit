import React, { Component, useState } from 'react';
import UserAvatar from '../../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml';
import AvitarIcon from '../../../../images/avitar.png';
import {moreVertical} from 'react-icons-kit/feather/moreVertical'
import Tags from '../../../ChipsTags/Types/Tags'
import { Icon } from 'react-icons-kit'

const toggleCollectionProperty = ({
  arrCollection, 
  targetId, 
  itemIdProp,
  itemProp, 
  itemVal, 
  itemOppVal,
}) => {
  const tplCollection = [...arrCollection];
  for(let i = 0, l=tplCollection.length; i < l; i += 1) {
    if(tplCollection[i][itemIdProp] === targetId) {
      tplCollection[i][itemProp] = itemVal;
    } else {
      tplCollection[i][itemProp] = itemOppVal;
    }
  }
  
  return tplCollection;
};
  
  
const withActiveProp = Component => props => {
  return (
    props.active && <Component
      {...props}
    />
  );
};
  
const toggleText = (bool, val1, val2) => {
  return bool ? val1 : val2;
};
  
  
const ListComponent = ({ data: listData, Component, className }) => {

  if (!listData) {

    return false;

  }

  return (
    <React.Fragment>
      {
        
        Component && listData.map((item, itemIndex) => (
          <React.Fragment key={item.id}>
            { Component(item, itemIndex) }
          </React.Fragment>
        ))
      }
    </React.Fragment>
  );

};
  
  
const BoxContainer = ({ className, children }) => {
  return (
    <div className={`${className?className:''}`}>
      { children }
    </div>
  );
};
  
const TextAndButton = ({ className, btnState, BrandActive, text, handleClick, LogoType, logo, fulllogo, halflogo }) => {

  const LogoSize = (props) => {
    if(props.LogoType === true) {
      return <img src={ fulllogo } height="40px" width="40px" alt="toolbar-logo" className="logo full-logo"/>
    }else {
      return <img src={ halflogo } height="40px" width="40px" alt="toolbar-logo" className="logo half-logo"/>
    }
  }

  const BrandSection = (props) => {
    let [Status, setStatus] = useState('online');
    let selectStatus = (e) => {
      setStatus(e.target.value)
    }
    if(props.BrandActive === true) {
        return  <LogoSize LogoType={LogoType}></LogoSize>
    }else {
        return <> 
          <UserAvatar
          title="Benjamin Parker"  
          subtitle={
              <span className={`${Status} status`}>
                  <select onChange={selectStatus}>
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                      <option value="away">Away</option>
                      <option value="dnd">Don't disturb</option>
                  </select>
              </span>
          }  
          avitar={AvitarIcon} hasRound haslg> 
          <img src={AvitarIcon} alt="User Avatar"/>
        </UserAvatar> 
        <div className="more">
          <Icon icon={moreVertical} size={24} style={{color: 'var(--primary-variant)'}}/>
        </div>
      </>
    }
}
  return (
    <div className={`${toggleText(className, className, '')}`}>
      <BrandSection BrandActive={BrandActive} ></BrandSection>
      {/* <button onClick={handleClick}>
        {
          toggleText(btnState, 'Close', 'Open') 
        }
      </button> */}
    </div>
  );
};
class BusinessSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sideNav: {
        active: true,
      },
      navLinks: this.props.navLinks,
      otherLinks: this.props.otherLinks,
      badgeBg: this.props.badgeStyle,
      badgeStyle: this.props.badgeStyle,
      collapseExpand: this.props.collapseExpand,
      OtherClassName: this.props.OtherClassName,
      bottomFixed: this.props.bottomFixed,
      LinkClass: this.props.LinkClass,
      BrandActive: this.props.BrandActive,
      LogoType: this.props.LogoType,
      logo: this.props.logo,
      fulllogo: this.props.fulllogo,
      halflogo: this.props.halflogo,
      StatusType: this.props.StatusType,
    }; 
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenu2 = this.toggleMenu2.bind(this);
  }
      
      
  toggleSideNav() {
    const { sideNav } = this.state;
    sideNav.active = !this.state.sideNav.active
    this.setState({ sideNav });
  }
      
 
  toggleMenu(collection, collTargetId, submenuIndex) {
    let Menu = '';
    if (typeof submenuIndex !== 'number' && !submenuIndex) {
      Menu = toggleCollectionProperty ({
        arrCollection: collection, 
        targetId: collTargetId, 
        itemIdProp: 'text',
        itemProp: 'active', 
        itemVal: true, 
        itemOppVal: false,
      });
    } else {
      const submenu = toggleCollectionProperty ({
        arrCollection: collection, 
        targetId: collTargetId, 
        itemIdProp: 'text',
        itemProp: 'active', 
        itemVal: true, 
        itemOppVal: false,
      });
      Menu = this.state.navLinks;
      Menu[submenuIndex].items = submenu;   
    }
    
    this.setState({ Menu });
  }
  toggleMenu2 (collection, collTargetId, submenuIndex) {
    let Menu = '';
    if (typeof submenuIndex !== 'number' && !submenuIndex) {
      Menu = toggleCollectionProperty ({
        arrCollection: collection, 
        targetId: collTargetId, 
        itemIdProp: 'text',
        itemProp: 'active', 
        itemVal: true, 
        itemOppVal: false,
      });
    } else {
      const submenu = toggleCollectionProperty ({
        arrCollection: collection, 
        targetId: collTargetId, 
        itemIdProp: 'text',
        itemProp: 'active', 
        itemVal: true, 
        itemOppVal: false,
      });
      Menu = this.state.otherLinks;
      Menu[submenuIndex].items = submenu;   
    }
    
    this.setState({ Menu });
  }
  
  render() {
    const Badges = (props) => {
      if(props.BadgeActive === true) {
          return <span className="badge"><Tags DivclassName="form-group tag number mb-20" LabelclassName={`${props.badgeBg}`} Title={props.badgeText} /></span>
      }else {
          return null
      }
    }
    const MenuIcon = (props) => {
        if(props.iconActive === true) {
            // return <Icon Icon={props.menuIcon} />
            return <span className="menu-icon">{props.menuIcon}</span>
        }else {
            return null
        }
    }
    return (
      <div className={`${this.props.collapseExpand} sidebar business`}>
        <BoxContainer className={`sidebar-menu ${toggleText(this.state.sideNav.active, '', 'active')}`}>
            {/* Brand and sidebar toggle button */}
            <TextAndButton
              className="sidebar-head"
              btnState={this.state.sideNav.active}
              handleClick={this.toggleSideNav}  
              text="Brand Name"
              fulllogo={this.state.fulllogo}
              halflogo={this.state.halflogo}
              LogoType={this.state.LogoType}
              BrandActive={this.state.BrandActive}
            />
            <div className="sidebar-content">
              <div className="main-links">
                <ListComponent
                  data={this.state.navLinks}
                  Component={
                    (item, itemIndex)=>(
                      <div className={`menu-item ${toggleText(item.active, 'active', '')}`}>
                        <a href="#/" className={item.LinkClass}
                            onClick={()=>this.toggleMenu(this.state.navLinks, item.text)}
                        >
                        <MenuIcon iconActive={item.iconActive} menuIcon={item.menuIcon}></MenuIcon>
                        { item.text }
                        <Badges BadgeActive={item.BadgeActive} badgeText={item.badgeText} badgeBg={item.badgeBg} badgeStyle={item.badgeStyle}></Badges>
                        </a>
                          {
                            item.items &&
                            <ul className="sub-menu">
                                <ListComponent
                                  data={item.items}
                                  Component={
                                      (subitem)=>(
                                      <li className={`${toggleText(subitem.active, 'active', '')}`}>
                                          <a href="#/" className={item.LinkClass}
                                          onClick={()=>this.toggleMenu(item.items, subitem.text, itemIndex)}
                                          >{ subitem.text }</a>
                                      </li>
                                      )
                                  }
                                />
                            </ul>
                        }
                      </div>
                    )
                  }
                />
              </div>
              <ListComponent
                data={this.state.otherLinks}
                Component={
                  (item, itemIndex)=>(
                    <div className={`${this.state.OtherClassName} other-links`}>
                      <span className="sub-title" onClick={()=>this.toggleMenu2(this.state.otherLinks, item.text)}>
                        <MenuIcon iconActive={item.iconActive} menuIcon={item.menuIcon}></MenuIcon> { item.text }
                      </span>
                        {
                          item.items &&
                          <ul>
                              <ListComponent
                                data={item.items}
                                Component={
                                    (subitem)=>(
                                    <li>
                                        <div className={`menu-item ${toggleText(item.active, 'active', '')}`}>
                                          <a href="#/" className={subitem.StatusType} 
                                          onClick={()=>this.toggleMenu2(item.items, subitem.text, itemIndex)}
                                          >
                                          <MenuIcon iconActive={subitem.iconActive} menuIcon={subitem.menuIcon}></MenuIcon>
                                          { subitem.text }</a>
                                          <Badges BadgeActive={subitem.BadgeActive} badgeText={subitem.badgeText} badgeBg={subitem.badgeBg} badgeStyle={subitem.badgeStyle}></Badges>
                                        </div>
                                    </li>
                                    )
                                }
                              />
                          </ul>
                      }
                    </div>
                  )
                }
              />
              <ListComponent
                data={this.state.bottomFixed}
                Component={
                  (item, itemIndex)=>(
                    <div className={`menu-item bottom-fixed ${toggleText(item.active, 'active', '')}`} style={{backgroundColor: this.state.className}}>
                      <a href="#/" className={item.LinkClass}
                          onClick={()=>this.toggleMenu(this.state.bottomFixed, item.text)}
                      >
                      <MenuIcon iconActive={item.iconActive} menuIcon={item.menuIcon}></MenuIcon>
                      { item.text } 
                      <Badges BadgeActive={item.BadgeActive} badgeText={item.badgeText} badgeBg={item.badgeBg} badgeStyle={item.badgeStyle}></Badges>
                      </a>
                        {
                          item.items &&
                          <ul className="sub-menu">
                              <ListComponent
                                data={item.items}
                                Component={
                                    (subitem)=>(
                                    <li className={`${toggleText(subitem.active, 'active', '')}`}>
                                        <a href="#/" className={item.LinkClass}
                                        onClick={()=>this.toggleMenu(item.items, subitem.text, itemIndex)}
                                        >{ subitem.text }</a>
                                    </li>
                                    )
                                }
                              />
                          </ul>
                      }
                    </div>
                  )
                }
              />
            </div>
        </BoxContainer>
      </div>
    );
  }
}

export default BusinessSidebar;